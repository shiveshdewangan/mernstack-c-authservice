import { config } from "dotenv";
config();

const { PORT } = process.env;

const NODE_ENV = "dev";

export const Config = {
    PORT,
    NODE_ENV,
};
