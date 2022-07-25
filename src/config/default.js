module.exports = {
    server : {
        port : process.env.PORT_DEV || 3000,
        domain : 'localhost',
    },

    
    database : {
        name: process.env.DATABASE_NAME || 'bap-corporativo',
        username : process.env.DATABASE_USERNAME || 'root',
        password : process.env.DATABASE_PASSWORD || '',
        hostname : process.env.DATABASE_HOST || 'localhost',
        dialect: process.env.DATABASE_DIALECT || 'mysql'
    },

    logger : 'dev',
    secret : process.env.JWT_SECRET || 'secret frase'
}