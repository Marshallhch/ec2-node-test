// const { Pool } = require('pg');
// require("dotenv").config();

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// });

// module.exports = { pool };

// 닷홈은 외부 접속 허용 안된단다 ㅠㅠ : https://han288.tistory.com/41

const mysql = require('mysql2');

const pool = mysql.createPool({
  
});

module.exports = pool.promise();  // Promise 기반으로 사용