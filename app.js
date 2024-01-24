const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('/api', taskRoutes); // Prefixo '/api' para as rotas


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
