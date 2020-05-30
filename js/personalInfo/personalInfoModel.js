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
            view.showRound(result.data.round);
            view.showStuNum(result.data.stuNum);
            view.showPassNum(result.data.passNum);
            view.showDeleteNum(result.data.deleteNum);
            let students = result.data.students;
            peopleCache = students;
            for (let temp of students) {
              view.showPersonalInfo(
                temp.id,
                temp.img,
                temp.stuName,
                temp.status
              );
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

  nextRound: function (id) {
    NetworkHelper.get({
      url: Apis.getNextRoundUrl() + id + "/",
      headers: {
        AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
      },
      onSuccess: function (result) {
        if (result != null) {
          if (result.code == 100) {
            alert("进入下一轮成功！");
            // 刷新页面
            window.location.href = window.location.href;
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

  /**
   * 发送邮件
   * @param {object} mail
   */
  sendMail: function (mail) {
    NetworkHelper.post({
      url: Apis.getMailUrl(),
      data: mail,
      headers: {
        AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
      },
      onSuccess: function (result) {
        if (result != null) {
          if (result.code == 100) {
            alert("邮件发送成功！");
          } else {
            alert(result.message);
          }
        }
      },
      onException: function (e) {},
      onError: function (status) {},
    });
  },
};
