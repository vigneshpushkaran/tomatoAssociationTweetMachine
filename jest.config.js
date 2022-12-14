module.exports = {
    "extensionsToTreatAsEsm": [".ts"],
    "globals": {
        "ts-jest": {
            "useESM": true
        }
    },
    "moduleFileExtensions": [
        "js",
        "jsx",
        "ts",
        "tsx"
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "preset": "ts-jest",
    "transformIgnorePatterns": [
        "/node_modules/(?!trigram-utils)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)?$": ["ts-jest", "babel-jest"],
    }
}