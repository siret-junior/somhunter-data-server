/* This file is part of SOMHunter Data Server.
 *
 * Copyright (C) 2022    Frantisek Mejzlik <frankmejzlik@gmail.com>
 *                       Vit Skrhak <vitek.skrhak@seznam.cz>
 *                       Patrik Veselý <prtrikvesely@gmail.com>
 * 
 *  SOMHunter Data Server is free software: you can redistribute it and/or modify it under
 *  the terms of the GNU General Public License as published by the Free
 *  Software Foundation, either version 2 of the License, or (at your option)
 *  any later version.
 * 
 *  SOMHunter Data Server is distributed in the hope that it will be useful, but WITHOUT ANY
 *  WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 *  FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
 *  details.
 * 
 *  You should have received a copy of the GNU General Public License along with
 *  SOMHunter Data Server. If not, see <https://www.gnu.org/licenses/>.
 */

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

app.get('/frames', (err, res) => {
	res.status(200);
	res.json({ working: true });
	res.end();
});

app.use(express.static(dir));

app.listen(data_server_port, function () {
    console.log(`Serving files on http://localhost:${data_server_port}/`);
});

