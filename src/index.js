import config from 'config';
import app from './app/app';
import './libs/database/database';

app.listen(config.get('server.port'), () => {
    console.log(`Server started on port: ${config.get('server.port')}`);
});

module.exports = app;