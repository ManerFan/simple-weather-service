/*
 * ManerFan(http://manerfan.com). All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by ManerFan on 2016/11/15.
 */

const path = require('path');
const Koa = require('koa');
const favicon = require('koa-favicon');
const serve = require('koa-static');
const routes = require('./routes');
const logger = require('../config/logger');

const app = module.exports = new Koa();

app.use(favicon(path.join(path.dirname(__dirname), 'public/favicon.ico')));
app.use(serve('public', {gzip: true}));
app.use(routes.routes());

app.on('error', function (err) {
    logger.error(err);
});
