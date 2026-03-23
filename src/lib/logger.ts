type Metadata = Record<string, unknown>;

function formatMessage(level: string, message: string, metadata?: Metadata) {
  return JSON.stringify({
    level,
    message,
    metadata,
    timestamp: new Date().toISOString()
  });
}

export const logger = {
  info(message: string, metadata?: Metadata) {
    console.info(formatMessage('info', message, metadata));
  },
  warn(message: string, metadata?: Metadata) {
    console.warn(formatMessage('warn', message, metadata));
  },
  error(message: string, error?: unknown) {
    if (error instanceof Error) {
      console.error(
        formatMessage('error', message, {
          name: error.name,
          message: error.message
        })
      );
      return;
    }

    console.error(formatMessage('error', message, { error }));
  }
};

