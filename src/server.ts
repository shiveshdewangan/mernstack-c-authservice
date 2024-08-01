import app from "./app";
import { Config } from "./config";

const startServer = () => {
    const PORT = Config.PORT;
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on ${Config.PORT}`);
    });
};

startServer();
