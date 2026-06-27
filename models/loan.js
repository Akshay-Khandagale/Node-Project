import db from '../config/db.js'

const getLoanDetails = async () => {
    const [data] = await db.execute('select id,loan_per,loan_amt from loans')
    return data;
}

const findLoan = async (id) => {
    const [findData] = await db.execute('select id,loan_per,loan_amt from loans where id = ?', [id])
    return findData;
}

const delLoan = async (id) => {
    const [findData] = await db.execute('delete loans where id = ?', [id])
    return findData;
}

export default {
    getLoanDetails,
    findLoan,
    delLoan
}