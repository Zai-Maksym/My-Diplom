CREATE DATABASE hotel_booking;

USE hotel_booking;

CREATE TABLE bookings(

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    surname VARCHAR(100),

    email VARCHAR(150),

    phone VARCHAR(50),

    booking_date DATE,

    room_name VARCHAR(150),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
