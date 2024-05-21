const express = require('express');
const path = require('path');

const app = express();



app.listen(8081, () => {
  console.log("Servidor escuchando en el puerto 8081");
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', '/'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
