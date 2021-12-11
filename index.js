const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./server/database/database')();

app.use('/api/v1/user', require('./server/router/registerRouter'));
app.use('/api/v1/files', require('./server/router/filesRouter'));

app.listen(5000,()=> console.log('server started on  port http://localhost:5000'))