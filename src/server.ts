import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    const PORT = Config.PORT;
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        logger.info(`Server running on ${PORT}`);
    });
};

startServer();
