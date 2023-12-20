import { Command } from "commander";

const program = new Command();

program
  .name("practice-cli")
  .description("Say hello")
  .version("0.0.1")
  .argument("<string>", "string to log")
  .action((message: string) => {
    console.log(`Hello ${message}`);
  });

program.parse(process.argv);
