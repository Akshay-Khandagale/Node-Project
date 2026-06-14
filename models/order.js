import db from '../config/db.js'

// Fetch Data
const orderQuery = async () => {
    const [orderdata] = await db.execute('select order_id,order_name,order_price from orders')
    return orderdata;
}

// Find Data
const orderfind = async (id) => {
    const [fData] = await db.execute('select order_id,order_name,order_price from orders where order_id = ?', [id]);
    return fData;
}

// Delete Data
const orderdel = async (id) => {
    const [dData] = await db.execute('delete from orders where order_id = ?', [id]);
    return dData;
}

// Insert Data
const insertData = async (order_name, order_price) => {
    const [insertData] = await db.execute(
        'INSERT INTO orders (order_name, order_price) VALUES (?, ?)',
        [order_name, order_price]
    );

    return insertData;
}

// Update Data
const updateData = async (order_id, order_price) => {
    const [updateData] = await db.execute(
        'update orders set order_price = ? where order_id = ?',
        [order_price, order_id]
    );

    return updateData;
}


const orderData = {
    orderQuery,
    orderfind,
    orderdel,
    insertData,
    updateData
}

export default orderData