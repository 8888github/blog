const { excSQL } = require("../../db/db");

/**
 * 获取列表
 * @param {标题} title
 * @param {关键字} keywords
 * @returns
 */

const getList = (title = "", keywords = "") => {
  let selectUsers = `select * from bloglist `;
  if (title) {
    selectUsers += `WHERE title like '%${title}%' `;
  }
  if (keywords) {
    selectUsers += `OR keywords like '%${keywords}%'`;
  }
  return excSQL(selectUsers);
};

/**
 * 新增一条博客信息
 * @returns
 */
const createNewBlog = (postData = {}) => {
  const { title, content, author, is_show, keywords } = postData.body;
  const createSql = `
    INSERT INTO blogList(title,content,author,is_show,keywords) 
    VALUES('${title}','${content}','${author}','${is_show}','${keywords}')
  `;
  return excSQL(createSql);
};

/**
 *
 * @param {文章ID} id
 * @returns
 */
const delBlog = (id) => {
  const delSql = `DELETE FROM blogList WHERE id="${id}"`;
  return excSQL(delSql);
};

/**
 *
 * @param {更新信息} data
 * @returns
 */
const updateBlog = (postData) => {
  const { id, title, content, author, is_show, keywords } = postData.body;
  const upSql = `UPDATE blogList SET 
  title="${title}" , content="${content}",author="${author}",is_show="${is_show}",keywords="${keywords}" 
  WHERE id = ${id}`;
  return excSQL(upSql);
};

/**
 *
 * @param {文章ID} id
 * @returns
 */
const detailsBlog = (id) => {
  const detailsSql = `SELECT * FROM bloglist WHERE id="${id}"`;
  return excSQL(detailsSql);
};

module.exports = {
  getList,
  createNewBlog,
  delBlog,
  updateBlog,
  detailsBlog,
};
