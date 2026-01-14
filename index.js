const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Devops Presentation done by rida fatima' });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 