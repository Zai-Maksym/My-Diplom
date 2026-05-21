const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* MYSQL */

const db = mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"",

    database:"hotel_booking"

});

db.connect((err)=>{

    if(err){

        console.log(err);

        return;

    }

    console.log("MYSQL CONNECTED");

});

/* API */

app.post("/booking", (req,res)=>{

    const {

        name,
        surname,
        email,
        phone,
        booking_date,
        room_name

    } = req.body;

    const sql = `

        INSERT INTO bookings
        (
            name,
            surname,
            email,
            phone,
            booking_date,
            room_name
        )

        VALUES (?, ?, ?, ?, ?, ?)

    `;

    db.query(

        sql,

        [
            name,
            surname,
            email,
            phone,
            booking_date,
            room_name
        ],

        (err,result)=>{

            if(err){

                console.log(err);

                res.status(500).json({
                    message:"Помилка"
                });

                return;

            }

            res.json({
                message:"Бронювання створене"
            });

        }

    );

});

app.listen(3000, ()=>{

    console.log("SERVER STARTED");

});
