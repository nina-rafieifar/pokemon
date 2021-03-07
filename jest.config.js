module.exports = {
  collectCoverage: true,
  coverageDirectory: "build/reports/coverage",
  coverageReporters: ["json", "html", "text"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  transform: {
    "^.+\\.(js)?$": "babel-jest",
    "^.+\\.scss$": "./cssTransform.js"
  },
  testMatch: ["**/**/*test.js"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  transformIgnorePatterns: ["node_modules/(?!(lit-element|lit-html|chai-a11y-axe|@open-wc)/)"]
};
