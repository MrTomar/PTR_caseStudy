const { exec } = require("child_process");

const isProduction = process.env.NODE_ENV === "production";

const command = isProduction
  ? "npm run start:prod"
  : "npm run start:dev";

const child = exec(command, { stdio: "inherit", shell: true });

child.stdout?.pipe(process.stdout);
child.stderr?.pipe(process.stderr);
