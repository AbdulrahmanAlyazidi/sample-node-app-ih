// jest.config.js
module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "coverage",
        outputName: "junit.xml"
      }
    ]
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"]
};
