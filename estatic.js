
const path = require('path');
const express = require('express');
const app = express();
// ---
const config_core = require("../somhunter-core/config/config-core.json");

// Get the settings from the config file
const data_dir = config_core.core.datasets.data_dir;
const data_server_port = config_core.data_server.API.port;

const dir = path.join(__dirname, "../somhunter-core/", data_dir, "media");

console.log("(!!!)\nRunning at directory: ", __dirname, "\n(!!!)");
console.log("Serving the directory: ", dir);
app.use(express.static(dir));

app.listen(data_server_port, function () {
    console.log(`Serving files on http://localhost:${data_server_port}/`);
});

