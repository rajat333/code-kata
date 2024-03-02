import express from 'express';

export const healthCheck = async (_req: express.Request, res: express.Response) => {
    console.info('Server is starting');
    res.send('Server is working');
};
