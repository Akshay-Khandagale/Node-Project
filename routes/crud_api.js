import express from 'express'
import insertData from '../controllers/crud_apiController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.render("crud_api");
});

router.post('/dataInsert', insertData);

export default router;