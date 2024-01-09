import express from 'express';
import controller from './controller.mjs';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('API is running!');
});
router.get('/all', controller.getAll);
router.post('/add', controller.addNew);
router.get('/ids', controller.getIds);
router.get('/data/:id', controller.getDataById);

// Define other routes

export default router;
