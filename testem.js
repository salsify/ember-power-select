/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "report_file": `./tmp/not-test-output/${process.env.EMBER_TRY_CURRENT_SCENARIO}/output.xml`,
  "launch_in_ci": [
    "Chrome"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ],
  "browser_args": {
    "Chrome": [
      "--touch-events"
    ]
  }
};
