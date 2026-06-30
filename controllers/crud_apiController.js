import inData from "../models/crud_api.js";

const insertData = async (req, resp) => {
    try {
        const { name, pass } = req.body;

        const data = await inData(name, pass);
        resp.status(200).json({
            data: data,
            message: "Successfully Insert Data"
        })
    } catch (error) {
        resp.status(500).json({
            message: "Internal Server Errors",
            error
        })
    }
}

export default insertData;