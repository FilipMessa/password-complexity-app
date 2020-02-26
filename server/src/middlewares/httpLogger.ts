import morgan from 'morgan';

// @TODO output stream for writing log lines,
export const httpLogger = morgan('combined');
