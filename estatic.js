
const path = require('path');
const express = require('express');
const app = express();

const config_core = require("../somhunter-core/config/config-core.json");
const dir = path.join(__dirname, "../somhunter-core/", config_core.core.datasets.data_dir);

console.log("(!!!)\nRunning at directory: ", __dirname, "\n(!!!)");
console.log("Serving the directory: ", dir);
app.use(express.static(dir));

app.listen(8081, function () {
    console.log('Serving files on http://localhost:8081/');
});

