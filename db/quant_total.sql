SELECT SUM(a.price * c.quantity) FROM cart c JOIN users u ON c.user_id = u.user_id JOIN abrushes a ON a.prod_id = c.prod_id WHERE u.user_id = $1