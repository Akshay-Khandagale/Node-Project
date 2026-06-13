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
        const id = res.params.id;

        const data = await orderData.orderfind(id)
        resp.status(200).json({
            data: data,
            message: "Successfully find & fetch data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Error"
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
    findData
}

export default orderCon