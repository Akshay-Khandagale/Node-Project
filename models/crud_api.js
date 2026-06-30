import db from '../config/db.js'

const inData = async (name, pass) => {
    const [data] = await db.execute("Insert into students (name,password) values(?,?)", [name, pass]);
    return data;
}

export default inData;