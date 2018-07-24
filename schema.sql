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








*/