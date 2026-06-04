import express from 'express';
import { getStudents } from '../controllers/studentController.js';

const router = express.Router();

router.get('/getall', getStudents);

export default router;


// ******* Without ECMA *******

// import express from 'express'
// import { getStudents } from '../controllers/studentController.js';

// const router = express.Router()

// router.get('/getall', getStudents)

// module.exports = router