module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	testMatch: [
		'**/src/**/*.test.(ts|js)'
	],
	testEnvironment: 'node',
	preset: "ts-jest"
};