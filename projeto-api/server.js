const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const usersRoutes = require('./resources/users/routes');
const cors = require('cors');
const swegger = require ('swagger-ui-express');
const docs = require('./docs.json');

const app = express();

app.use(cors());

app.use('/documentacao', swegger.serve, swegger.setup(docs));
app.use(express.json()); //a comunicação toda vai ser feita em json, ta ligado!?
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(usersRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- ATIVO ---')
    console.log('--------------');
});
