require('dotenv').config();

const appConfig = {
    port: Number(process.env.PORT) || 5555
}

module.exports = {
    appConfig
}