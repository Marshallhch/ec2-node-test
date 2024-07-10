const PORT = process.env.PORT || 8080;

const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(require('./routes/visitorsRoute'));
app.use(require('./routes/customersRoute'));
app.use(require('./routes/totalRevenueRoute'));
app.use(require('./routes/targetRealityRoute'));
app.use(require('./routes/topProductsRoute'));
app.use(require('./routes/salesMapRoute'));
app.use(require('./routes/volumeServicesRoute'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));