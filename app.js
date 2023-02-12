const queryString = require("querystring");
const { getPostData } = require("./controllers/blog");
const { excSQL } = require("./src/db/db");
const HandeRoute = require("./src/routes/blog");

/**
 *
 * @param {响应} req
 * @param {请求} res
 */
const serverHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  req.method = req.method.toLocaleUpperCase();
  req.path = req.url.split("?")[0];
  req.query = queryString.parse(req.path.split("?")[1]);

  console.log(req);
  // 处理 post 数据
  getPostData(req).then((postData) => {
    req.body = postData;

    // console.log(JSON.stringify(req.body));

    // 路由
    const blogDataPromise = HandeRoute(req, res);
    if (blogDataPromise) {
      blogDataPromise.then((blogData) => {
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    // 无路由
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  });
};

module.exports = serverHandler;
