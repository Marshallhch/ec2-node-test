const PORT = process.env.PORT || 8080;

const express = require('express');
const cors = require('cors');
const app = express();

// let corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
const options = {
  origin: allowedOrigins,
};

// app.use(express.json());
// app.use(cors())

app.get('/', (req, res) => {
  res.send(`Server is running on port ${PORT}. deploy on http://3.27.35.124 AMAZON AWS`);
});

const pool = require('./services/database');

async function queryDatabase() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM test1_table');
    return rows; // 쿼리 결과 반환
  } catch (err) {
    throw err; // 에러 발생 시 에러를 던짐
  }
}

// '/api' 경로로 요청 시 queryDatabase() 호출 및 JSON 응답
app.get('/api', async (req, res) => {
  try {
    const data = await queryDatabase(); // 데이터베이스 쿼리 실행
    
    // Buffer 데이터를 UTF-8 문자열로 변환
    const processedData = data.map(row => {
      Object.keys(row).forEach(key => {
        if (Buffer.isBuffer(row[key])) {
          row[key] = row[key].toString('utf8'); // Buffer 데이터를 UTF-8 문자열로 변환
        }
      });
      return row;
    });

    res.setHeader('Content-Type', 'application/json; charset=utf-8'); // UTF-8 인코딩 설정
    res.json(processedData); // 변환된 데이터를 JSON으로 응답
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Database query failed' }); // 에러 응답
  }
});

// app.use(cors(options));

// app.use(require('./routes/visitorsRoute'));
// app.use(require('./routes/customersRoute'));
// app.use(require('./routes/totalRevenueRoute'));
// app.use(require('./routes/targetRealityRoute'));
// app.use(require('./routes/topProductsRoute'));
// app.use(require('./routes/salesMapRoute'));
// app.use(require('./routes/volumeServicesRoute'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}. deploy on http://3.27.35.124 AMAZON AWS`));