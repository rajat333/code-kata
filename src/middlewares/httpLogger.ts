import morgan, { StreamOptions } from 'morgan';

const stream: StreamOptions = {
  write: (message) => console.info(message),
};

// Build the morgan middleware
const morganMiddleware = morgan('combined', { stream: stream });

export default morganMiddleware;
