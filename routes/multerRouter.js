import express from 'express';
import upload from '../upload_multer.js';
import router from './studentRoutes.js';

const Router = express.Router();

Router.post('/upload', upload.single('image'), (res, resp) => {
    resp.json({
        message: 'File Upload Successfully',
        file: res.file
    })
})

export default Router