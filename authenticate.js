const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'http://localhost/rtmp-commerce',
    consumerKey: 'ck_271394a981cc1f58496f2c15108a43293a4598cf',
    consumerSecret: 'cs_6e398d3d3274c1cada1ac7c374ab1312bd9ed833',
    version: 'wc/v3'
});

WooCommerce.get("products")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
