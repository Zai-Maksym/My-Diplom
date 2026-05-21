CREATE DATABASE hotel_site;

USE hotel_site;

CREATE TABLE rooms(

    id INT AUTO_INCREMENT PRIMARY KEY,

    room_name VARCHAR(150) NOT NULL,

    room_description TEXT,

    room_price DECIMAL(10,2) NOT NULL,

    room_image VARCHAR(255),

    room_time VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE bookings(

    id INT AUTO_INCREMENT PRIMARY KEY,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL,

    phone VARCHAR(50) NOT NULL,

    booking_date DATE NOT NULL,

    room_id INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (room_id) REFERENCES rooms(id)

);

INSERT INTO rooms(

    room_name,
    room_description,
    room_price,
    room_image,
    room_time

)

VALUES

(

    'Номер для одного',
     250,
      'room1.jpg',

    'Номер для одного комфорт',

    300,

    'room2.jpg',

    '24 год'

),

(
    'Номер для двох ',
     250,
     
    'room3.jpg',

    'Номер для двох Люкс',


    750,

    'room5.jpg',

    '24 год'


);

SELECT * FROM rooms;

SELECT

    bookings.id,
    bookings.first_name,
    bookings.last_name,
    bookings.email,
    bookings.phone,
    bookings.booking_date,
    rooms.room_name,
    rooms.room_price

FROM bookings

JOIN rooms
ON bookings.room_id = rooms.id;

INSERT INTO bookings(

    first_name,
    last_name,
    email,
    phone,
    booking_date,
    room_id

)


UPDATE bookings

SET booking_date = '2026-06-05'

WHERE id = 1;

DELETE FROM bookings

WHERE id = 1;
