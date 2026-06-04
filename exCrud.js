import express from 'express'
import mysql from 'mysql2/promise'

let db;
try {

    db = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port: 3307,
        password: '',
        database: 'node_db'
    });

    console.log('MySQL Connected Successfully');

} catch (error) {

    console.error('Database Error:', error.message);
}

// *********** Start -- Create Table ***********

// const [result] = await db.execute(`
//     CREATE TABLE users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE
//     )
// `);
// console.log(result);

// ***********  End -- Create Table  ***********


// *********** Insert Type - I *Normal ***********
// await db.execute(`
//     insert into users(username,email) values('Akshay', 'ak@123gmail.com')
// `);

// Insert Type -II *Prepared Statement
// await db.execute(`
//     insert into users(username,email) values(?,?)`, ["Pj", "pj@123gmail.com"]
// );

// Insert Type - III *Multiple Entries Insert
// **Note - There are write db.query no write db.execute and values only
//          write in short no need ().

// const values = [
//     ["sk", "sk@123gmail.com"],
//     ["snp", "snp@123gmail.com"],
//     ["cf", "cf@123gmail.com"],
//     ["rk", "rk@123gmail.com"]
// ];

// await db.query(
//     `insert into users(username,email) values ?`, [values]
// );


// ***********  Update Type - I *Normal  ***********

// await db.execute(`
//     update users set username = 'aa',email = 'aa@123gmail.com' where username = 'sk'
// `);

//  Update Type - II *Prepared Statement

// await db.execute(`
//     update users set username = ?, email = ? where username = ?`, ['ad', 'ad@gmail.com', 'aa']
// );