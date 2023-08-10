import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM


const WooCommerce = new WooCommerceRestApi({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    consumerKey:`${process.env.NEXT_PUBLIC_CONSUMER_KEY}`,
    consumerSecret:`${process.env.NEXT_PUBLIC_SECRET_KEY}`,
  version: 'wc/v3', // WooCommerce WP REST API version
  axiosConfig:{
    headers:{
      "Content-Type": "application/json;charset=UTF-8"
      }
  }
});

export default WooCommerce