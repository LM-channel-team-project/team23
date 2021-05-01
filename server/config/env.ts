import dotenv from 'dotenv';
dotenv.config();

export const SERVER_PORT: number = +process.env.SERVER_PORT!;
export const DB_URL: string = process.env.DB_URL!;
