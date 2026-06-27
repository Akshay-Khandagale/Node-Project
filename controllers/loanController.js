import Loan from "../models/loan.js";

const getLoan = async (res, resp) => {
    try {
        const data = await Loan.getLoanDetails();
        resp.status(200).json({
            data: data,
            message: "successfully get loan data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const findGetLoan = async (res, resp) => {
    try {
        const id = res.body.id;
        const data = await Loan.findLoan(id);
        resp.status(200).json({
            data: data,
            message: "successfully find get loan data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

export default {
    getLoan,
    findGetLoan
}