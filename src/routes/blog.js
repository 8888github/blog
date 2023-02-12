const { SuccessModel } = require("../model/responseModel");
const {
  getList,
  createNewBlog,
  delBlog,
  updateBlog,
  detailsBlog,
} = require("../api/blog/blog");

const HandeRoute = (req, res) => {
  /**
   * 博客列表
   */
  if (req.method === "GET" && req.path === "/api/blog/list") {
    const title = req.query.title || "";
    const keyWord = req.query.keyWord || "";
    const listPromise = getList(title, keyWord);
    return listPromise.then((listData) => {
      return new SuccessModel(listData, "获取成功");
    });
  }

  /**
   * 博客增加
   */
  if (req.method === "POST" && req.path === "/api/blog/add") {
    const resultPromise = createNewBlog(req);
    return resultPromise.then((result) => {
      return new SuccessModel(result, "添加成功");
    });
  }

  /**
   * 博客删除
   */
  if (req.method === "POST" && req.path === "/api/blog/del") {
    const resultPromise = delBlog(req.body.id);
    return resultPromise.then((result) => {
      return new SuccessModel(result, "删除成功");
    });
  }

  /**
   * 博客更新
   */
  if (req.method === "POST" && req.path === "/api/blog/update") {
    const resultPromise = updateBlog(req);
    return resultPromise.then((result) => {
      return new SuccessModel(result, "更新成功");
    });
  }

  /**
   * 获取博客详情
   */
  if (req.method === "GET" && req.path === "/api/blog/details") {
    const id = req.query.id || "";
    const resultPromise = detailsBlog(id);
    return resultPromise.then((result) => {
      return new SuccessModel(result, "获取成功");
    });
  }
};

module.exports = HandeRoute;
