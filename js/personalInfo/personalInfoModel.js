var model = {
  /**
   * 获取用户信息
   */
  getUser: function () {
    let userInfo = localStorage.getItem(USER_INFO);
    let user = JSON.parse(userInfo);
    return user;
  },

  /**
   * 获取当前查看部门的id
   */
  getDeptId: function () {
    let str = window.location.href;
    return str.substr(str.indexOf("=") + 1);
  },

  /**
   * 获取报名人员信息
   * @param {str} id
   */
  getEnrollPersonInfo: function (id) {
    NetworkHelper.get({
      url: Apis.getEnrollUrl() + id + "/",
      headers: {
        AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
      },
      onSuccess: function (result) {
        if (result != null) {
          if (result.code == 100) {
            let havPerson = false;
            if (result.data == null) {
              return;
            }
            let students = result.data.students;
            for (let temp of students) {
              view.showPersonalInfo(temp.id, temp.img, temp.stuName);
              havPerson = true;
            }
            if (!havPerson) {
              view.showNoPerson();
            }
          } else if (result.code == 301) {
            view.showNoPerson();
          } else {
            alert(result.message);
          }
        }
      },
      onException: function (e) {},
      onError: function (status) {},
      onComplete: function (status) {},
    });
  },
};
