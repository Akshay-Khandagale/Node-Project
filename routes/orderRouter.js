import express from 'express'
import orderCon from "../controllers/orderController.js";

const Router = express.Router();

Router.get('/', orderCon.fetchData);
Router.get('/find/:id', orderCon.findData);

export default Router