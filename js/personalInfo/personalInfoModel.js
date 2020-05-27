var model = {
  /**
   * 获取用户信息
   */
  getUser: function () {
    let userInfo = localStorage.getItem(USER_INFO);
    let user = JSON.parse(userInfo);
    return user;
  },
};
