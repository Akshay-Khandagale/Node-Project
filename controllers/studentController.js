import db from '../config/db.js';

export const getStudents = async (req, resp) => {
    try {
        const data = await db.query('Select * from users')
        if (!data) {
            return resp.status(404).send({
                success: false,
                message: "No Records Found",
            })
        }
        resp.status(200).send({
            success: true,
            message: "All Student Records",
            data,
        })
    } catch (error) {
        console.log(error);
        resp.status(500).send({
            sucess: false,
            message: 'Error in Get All Student API',
            error
        })
    }
}

// modele.exports = { getStudents }
export default getStudents;