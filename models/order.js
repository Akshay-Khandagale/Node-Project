import db from '../config/db.js'

const orderQuery = async () => {
    const [orderdata] = await db.execute('select order_id,order_name,order_price from orders')
    return orderdata;
}

const orderfind = async (id) => {
    const [fData] = await db.execute('select order_id,order_name,order_price from orders where order_id = ?', [id]);
    return fData;
}

const orderData = {
    orderQuery,
    orderfind
}

export default orderData