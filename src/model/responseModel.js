class BaseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data.length > 1 ? data : data[0];
    }
    if (message) {
      this.message = message;
    }
  }
}

// 成功
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = 200;
  }
}

// 失败
class ErrotModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = 500;
  }
}

module.exports = {
  SuccessModel,
  ErrotModel,
};
