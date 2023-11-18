const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json());

const productController = require('./controllers/product-controller');
app.use('/products', productController);

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
});
