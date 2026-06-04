import express from 'express'
import empinfo from '../models/employes.js';


const getEmpData = (res, resp) => {
    try {
        const data = empinfo();

        resp.status(200).send({
            success: true,
            message: "Successfully Get Data",
            data
        })
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
}

export default getEmpData;