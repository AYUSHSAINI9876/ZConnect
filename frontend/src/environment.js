let IS_PROD = true;
const server = IS_PROD
  ? "https://zmeetup.onrender.com"
  : "http://localhost:8000";

export default server;
