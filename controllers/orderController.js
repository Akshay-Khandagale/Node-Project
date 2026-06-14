import orderData from '../models/order.js'

const fetchData = async (res, resp) => {
    try {
        const data = await orderData.orderQuery()
        resp.status(200).json({
            data: data,
            message: "Successfully fetch data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const findData = async (res, resp) => {
    try {
        // const id = res.params.id;
        const { id } = res.body;

        let mssg = 'Successfully find & fetch data';

        const data = await orderData.orderfind(id)

        if (!data || data.length === 0) {
            mssg = "data not found";
        }

        resp.status(200).json({
            data: data,
            message: mssg
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const DelData = async (res, resp) => {
    try {
        // const id = res.params.id;
        const { id } = res.body;

        const data = await orderData.orderdel(id)
        resp.status(200).json({
            message: "Successfully delete data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error"
        })
    }
}


const inData = async (res, resp) => {
    try {
        // const { order_name, order_price } = res.params.id; // get url value
        const { order_name, order_price } = res.body;  // get data in body or field

        const data = await orderData.insertData(order_name, order_price)
        resp.status(200).json({
            message: "Successfully inserted data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error"
        })
    }
}


const upData = async (res, resp) => {
    try {
        // const { order_name, order_price } = res.params.id; // get url value
        const { order_id, order_price } = res.body;  // get data in body or field

        const data = await orderData.updateData(order_id, order_price)
        resp.status(200).json({
            data: data,
            message: "Successfully Updated data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

// Type -1 You can direct Muliptle function pass same work object
// export default {
//     fetchData,
//     findData
// }


// Type -2 Multiple Function add in object
const orderCon = {
    fetchData,
    findData,
    DelData,
    inData,
    upData
}

export default orderCon