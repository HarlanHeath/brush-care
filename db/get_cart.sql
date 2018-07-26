-- SELECT * FROM cart WHERE user_id = $1


SELECT * FROM abrushes
JOIN cart ON cart.prod_id = abrushes.prod_id
WHERE user_id = $1