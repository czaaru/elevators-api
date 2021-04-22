import createLogger from 'pino';

const logger = createLogger();

export const getLogger = (name: string) => logger.child({ name });
