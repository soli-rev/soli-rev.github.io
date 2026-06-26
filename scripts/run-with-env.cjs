const { spawnSync } = require("node:child_process");

const [cmd, ...args] = process.argv.slice(2);

if (!cmd) {
	console.error("Usage: node scripts/run-with-env.cjs <command> [...args]");
	process.exit(1);
}

const result = spawnSync(cmd, args, {
	stdio: "inherit",
	shell: true,
	env: {
		...process.env,
		ASTRO_TELEMETRY_DISABLED: "1",
		NPM_CONFIG_CACHE: process.env.NPM_CONFIG_CACHE || ".npm-cache",
	},
});

process.exit(result.status ?? 1);
