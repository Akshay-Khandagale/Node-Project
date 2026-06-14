import express from 'express'
import orderCon from "../controllers/orderController.js";

const Router = express.Router();

Router.get('/', orderCon.fetchData);
Router.get('/find', orderCon.findData);
Router.delete('/delete', orderCon.DelData);
Router.post('/insert', orderCon.inData);
Router.patch('/update', orderCon.upData);

export default Router