import logger from "./fancyLogger.js";

export default function logSecondImplementation() {
  logger.printLogCount();
  logger.log("second file");
  logger.printLogCount();
}
