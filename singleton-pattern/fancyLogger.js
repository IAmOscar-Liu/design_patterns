class FancyLogger {
  constructor() {
    if (FancyLogger.instance === undefined) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

console.log("Create logger instance");
const logger = new FancyLogger();
Object.freeze(logger);
// export default FancyLogger.instance;
export default logger;
