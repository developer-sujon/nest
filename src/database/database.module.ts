import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import axios from 'axios';
const isInternetConnectionAvailable: boolean = true;

@Module({
  controllers: [DatabaseController],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (dbOptions) => {
        let result = isInternetConnectionAvailable
          ? dbOptions
          : 'no internet connection available';

        let response = await axios(
          'https://jsonplaceholder.typicode.com/posts',
        );

        return response.data[0];
      },
      inject: ['dbOptions'],
    },
    {
      provide: 'dbOptions',
      useValue: { url: 'mongodb://127.0.0.1:27017', pass: '', user: '' },
    },
  ],
})
export class DatabaseModule {}
