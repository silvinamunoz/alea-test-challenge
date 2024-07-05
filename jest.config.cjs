// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ["./src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: ['./setupTests.js'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|tsx|js|ts)$',
    testPathIgnorePatterns: ['/node_modules/'],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.js',
    },
};