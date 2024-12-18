const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Define custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create logger
const logger = createLogger({
  format: combine(
    colorize(),
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' })
  ]
});

module.exports = logger;