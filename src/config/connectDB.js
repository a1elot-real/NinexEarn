const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '95.217.32.170',
    user: 'earningj_abc',
    password: 'earningj_abc',
    database: 'earningj_abc',
});

export default connection;