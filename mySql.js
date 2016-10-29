create database hotrestaurant

use hotrestaurant

create table reservation(
ItemID INT auto_increment not null,
customerName varchar(45) not null,
phoneNumber INT(10) not null,
email varchar(45) not null,
uniqueID varchar (45) not null,
primary key(ItemID)
);

select * from reservation;

INSERT INTO reservation(customerName, phoneNumber, email, uniqueID)
VALUES ("Ryan", 732, email.yahoo.com, "Ryan"),