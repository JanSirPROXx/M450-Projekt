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
router.delete('/delete/:id', controller.deleteDataById);
router.get('/answers/:id', controller.getAnswersByQuizId);
router.post('/setupAnswers/:id', controller.setupAnswers);
// Define other routes

export default router;
