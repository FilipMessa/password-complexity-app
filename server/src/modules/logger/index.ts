import * as winston from 'winston';

const colorizer = winston.format.colorize();
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
      winston.format.printf((msg) =>
        colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`),
      ),
    ),
  },
};

export const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});
