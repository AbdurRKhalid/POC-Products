import * as mongoose from 'mongoose';
import config from 'config/config';

export const dbProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
        mongoose.connect(`mongodb+srv://${config.database.DB_USERNAME}:${config.database.DB_PASSWORD}@cluster0.w4ykwfl.mongodb.net/?retryWrites=true&w=majority`)
    }
];