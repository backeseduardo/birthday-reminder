import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const a = 'hello world';

  res.send(a);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
