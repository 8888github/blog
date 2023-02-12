const mysql = require("mysql");

const excSQL = (sql) => {
  // 创建
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    password: "root",
    user: "root",
    database: "bolg",
  });

  // 连接
  connection.connect();
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error) {
        reject(error);
      }
      console.log(result);
      resolve(result);
    });
  });

  connection.end();
  return promise;
};

// 关闭连接

module.exports = {
  excSQL,
};
