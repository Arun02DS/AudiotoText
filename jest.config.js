module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional setup file for additional configuration
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports to prevent issues during testing
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transpile .js and .jsx files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios/)", // Transform axios
  ],
  testEnvironment: "jsdom",
};


  