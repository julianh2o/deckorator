export default {
    preset: 'ts-jest/presets/default-esm', // or other ESM presets
    resolver: "ts-jest-resolver",
    "roots": [
        "<rootDir>/src"
    ],
    moduleDirectories: ["node_modules", "src"],
    "modulePaths": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    moduleNameMapper: {
        '(.+)\\.js': '$1'
    },
    "transform": {
        "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }]
    },
    transformIgnorePatterns: ['/!node_modules\\/lodash-es/*'],
    moduleNameMapper: {
        '^lodash-es$': 'lodash',
        '^lodash-es/cloneDeep$': 'lodash/cloneDeep',
        '^lodash-es/anyOtherLodashModule$': 'lodash/anyOtherLodashModule',
    },
    extensionsToTreatAsEsm: ['.ts']
}