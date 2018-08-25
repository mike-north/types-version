module.exports = {
  launchers: {
    Node: {
      cwd: process.env.EMBER_CLI_TEST_OUTPUT,
      command: `qunit "commonjs/test/**/*-test.js"`,
      protocol: 'tap'
    }
  },

  framework: 'qunit',
  test_page: 'index.html?hidepassed',

  disable_watching: true,
  launch_in_dev: ['Node'],
  launch_in_ci: ['Node']
};
