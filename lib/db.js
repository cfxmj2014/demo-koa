import mysql from 'promise-mysql'

const config = require('../config.json');
const pool = mysql.createPool(config);

export default async (ctx, next) => {
  ctx.mysql = pool;

  await next();
}