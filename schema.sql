/*
SQL Tables and Info

//Created ABrushes table (A=Acrylic)//
CREATE TABLE Abrushes(
id SERIAL PRIMARY KEY NOT NULL,
Size integer,
HairType text,
HeadShape text,
price integer,
imgurl text
)

//Insert brush to ABrushes//
INSERT INTO ABrushes(Size,HairType,HeadShape,price,imgurl)
VALUES(8, 'Synthetic', 'Round', 16,'https://assets.winsornewton.com/imagefiles/magicZoom/12065.jpg')

//Pull all products from ABrushes table//
SELECT * FROM ABrushes

//Create Users table//
CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL,
FName varchar(25),
LName varchar(25)
)

//Insert users to Users//
INSERT INTO Users(FName, LName)
VALUES('','')

CREATE TABLE cart(
id SERIAL PRIMARY KEY NOT NULL,
quantity integer,
user_id INTEGER REFERENCES users(user_id),
prod_id INTEGER REFERENCES abrushes(prod_id)
)

-- CREATE TABLE cart(
-- id SERIAL PRIMARY KEY NOT NULL,
-- quantity integer default 1,
-- user_id INTEGER REFERENCES users(user_id),
-- prod_id INTEGER REFERENCES abrushes(prod_id)
-- )


*/