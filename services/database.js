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
  host: "www.dabipyeung.com",     // PHP 코드의 $host
  // host: "marshallhch.dothome.co.kr", 
  user: "marshall36",     // PHP 코드의 $db_id
  // user: "marshallhch",     // PHP 코드의 $db_id
  password: "hany3366",   // PHP 코드의 $db_pwd
  // password: "arthof1436!",   // PHP 코드의 $db_pwd
  database: "marshall36", // PHP 코드의 $db_name
  // database: "marshallhch", // PHP 코드의 $db_name
  waitForConnections: true,
  connectionLimit: 10,    // 최대 연결 수
  queueLimit: 0,
  charset: 'utf8mb4',  // UTF-8 인코딩을 설정
  // typeCast: function (field, next) {
  //   // 문자열 데이터만 처리하도록 함
  //   if (field.type === "VAR_STRING" || field.type === "STRING" || field.type === "BLOB") {
  //     const value = field.string();
  //     return value !== null ? value.toString('utf8') : value; // UTF-8로 변환
  //   }
  //   return next();
  // }
});

module.exports = pool.promise();  // Promise 기반으로 사용