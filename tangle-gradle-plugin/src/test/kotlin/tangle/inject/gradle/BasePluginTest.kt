/*
 * Copyright (C) 2022 Rick Busarow
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package tangle.inject.gradle

import hermit.test.junit.HermitJUnit5
import io.kotest.matchers.string.shouldContain
import org.gradle.testkit.runner.BuildResult
import org.gradle.testkit.runner.GradleRunner
import org.gradle.testkit.runner.TaskOutcome
import org.intellij.lang.annotations.Language
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DynamicTest
import org.junit.jupiter.api.TestInfo
import java.io.File
import kotlin.properties.Delegates
import io.kotest.matchers.shouldBe as kotestShouldBe

public val kotlinVersions: List<String> = listOf("1.6.10")
public val agpVersions: List<String> = listOf("7.0.4", "7.1.0")
public val gradleVersions: List<String> = listOf("7.0.2", "7.4")
public val anvilVersions: List<String> = listOf("2.3.4", "2.3.11-1-6-10")

public abstract class BasePluginTest : HermitJUnit5() {

  @PublishedApi
  internal var testInfo: TestInfo by Delegates.notNull()

  // This is automatically injected by JUnit5
  @BeforeEach
  internal fun injectTestInfo(testInfo: TestInfo) {
    this.testInfo = testInfo
  }

  public fun BuildResult.shouldSucceed() {
    tasks.forEach { it.outcome shouldBe TaskOutcome.SUCCESS }
  }

  @Language("RegExp")
  public fun BuildResult.tangleDeps(): List<String> = output
    .replace("[\\s\\S]*> Task :module:\\S*\\s*".toRegex(), "")
    .replace(
      "\\s*BUILD SUCCESSFUL in .*\\s*\\d* actionable task: \\d* executed\\s*".toRegex(), ""
    )
    // Gradle TestKit has memory management issues when testing against multiple versions.
    // This message happens randomly during tests and can be safely ignored.
    .replace("Daemon will be stopped at the end of the build after running out of JVM memory", "")
    .lines()
    .filterNot { it.isBlank() }
    .filterNot { it.startsWith("api androidx") }
    .filterNot { it.contains("com.squareup.anvil") }
    .sorted()

  public fun GradleRunner.shouldFailWithMessage(expectedMessage: String) {

    val result = buildAndFail()

    result.tasks.forEach { it.outcome shouldBe TaskOutcome.FAILED }

    result.output.fixPath() shouldContain expectedMessage
  }

  public fun GradleRunner.shouldFailWithMessage(expectedMessage: Regex) {

    val result = buildAndFail()

    result.tasks.forEach { it.outcome shouldBe TaskOutcome.FAILED }

    result.output.fixPath() shouldContain expectedMessage
  }

  public inline fun test(
    crossinline action: TestScope.() -> Unit
  ): List<DynamicTest> =
    gradleVersions.flatMap { gradle ->
      kotlinVersions.flatMap { kotlin ->
        agpVersions.flatMap { agp ->
          anvilVersions.map { anvil ->
            TestScope(
              testInfo = testInfo,
              gradleVersion = gradle,
              kotlinVersion = kotlin,
              agpVersion = agp,
              anvilVersion = anvil
            )
          }
            // AGP 7.1.0 and up has a minimum Gradle version of 7.2
            .filterNot { it.agpVersion != "7.0.4" && it.gradleVersion == "7.0.2" }
            .map { scope ->
              DynamicTest.dynamicTest(scope.toString()) {
                scope.testProjectDir.deleteRecursively()
                action.invoke(scope)
              }
            }
        }
      }
    }

  public fun String.fixPath(): String = replace(File.separator, "/")

  @Suppress("UNCHECKED_CAST", "NOTHING_TO_INLINE")
  public infix fun <T, U : T> T.shouldBe(expected: U?) {
    /*
    Any AssertionError generated by this function will have this function at the top of its stacktrace.

    The actual call site for the assertion is always the _second_ line.

    So, we can catch the assertion error, remove this function from the stacktrace, and rethrow.
     */
    try {
      kotestShouldBe(expected)
    } catch (assertionError: AssertionError) {
      // remove this function from the stacktrace and rethrow
      assertionError.stackTrace = assertionError
        .stackTrace
        .drop(1)
        .toTypedArray()
      throw assertionError
    }
  }
}
