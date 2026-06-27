import express from 'express'

import Loan from '../controllers/loanController.js'

const Router = express.Router()

Router.get('/getloan', Loan.getLoan)
Router.get('/findloan', Loan.findGetLoan)

export default Router