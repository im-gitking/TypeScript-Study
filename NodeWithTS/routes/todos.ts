// import express from 'express';
// const router = express.Router();

import { Router } from 'express';

const todos:  = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

// module.exports = router;
export default router;