import express from './config/express'
import Logger from './config/logger'

const app = express();
const port = process.env.PORT || 7069;

async function main() {
    try {
        app.listen(port, () => {
            Logger.info('Listening on port: ' + port)
        });
    } catch (err) {
        Logger.error(err);
        process.exit(1);
    }
}

main().catch(err => Logger.error(err));
