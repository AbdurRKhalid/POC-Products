const devConfig = {
    database: {
        DB_USERNAME: 'poc-microservices',
        DB_PASSWORD: 'microservices'
    }
}

const prodConfig = {
}

const env = process.env.NODE_ENV || 'dev';
const config = env === 'prod' ? prodConfig : devConfig;

export default config;