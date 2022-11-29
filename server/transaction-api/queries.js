const addTransaction = "INSERT INTO transactions (vendor_id,customer_id,quantity,product_id,is_reserved,in_cart) VALUES ($1,$2,$3,$4,FALSE,TRUE)";
const updateQuantity = "UPDATE transactions SET quantity = $1 WHERE transaction_id = $2";
const updateReserveStatus = "UPDATE transactions SET is_reserved = $1 WHERE transaction_id = $2";
const updateCartStatus = "UPDATE transactions SET in_cart = $1 WHERE transaction_id = $2";

const getCustomerCart = "SELECT * FROM transactions WHERE customer_id = $1";

module.exports = {
    addTransaction,
    updateQuantity,
    updateReserveStatus,
    updateCartStatus,
    getCustomerCart,
}