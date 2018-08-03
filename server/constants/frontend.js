const FRONTEND_DEV_URLS = ["http://localhost:3000"];

const FRONTEND_PROD_URLS = [
  "https://www.yourdomain.com",
  "https://yourdomain.com"
];

module.exports =
  process.env.NODE - ENV === "production"
    ? FRONTEND_PROD_URLS
    : FRNOTEND_DEV_URLS;
