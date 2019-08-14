const WooCommerce = require('./authenticate.js');

WooCommerce.get("products")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
