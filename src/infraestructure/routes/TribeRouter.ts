import express from 'express';

export default function TribeRouter(): express.Router {
    const Router = express.Router();

    Router.get('/:id', (req: express.Request, res: express.Response) => {
        const { id } = req.params;
    });

    return Router;
}
