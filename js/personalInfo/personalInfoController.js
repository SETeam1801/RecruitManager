var peopleCache = null;

var controller = {
  /**
   * 发送邮件
   * @param {object} mail
   */
  sendMail: function (mail) {
    let deptId = model.getDeptId();
    let detailMail = {
      deptId: parseInt(deptId),
      passTitle: mail.passTitle,
      passBody: mail.passBody,
      failTitle: mail.failTitle,
      failBody: mail.failBody,
    };
    model.sendMail(detailMail);
  },
};

$(document).ready(function () {
  // 获取查看社团的id
  let id = model.getDeptId();
  // 获取社团列表
  model.getEnrollPersonInfo(id);

  let user = model.getUser();
  if (user != null) {
    let userName = user.userName;
    if (userName != null) {
      view.showUserName(userName);
    }
  }

  $("#sendMail").click(function () {
    view.showMailDialog();
  });

  $("#nextRound").click(function () {
    let isEnter = confirm(
      "确定要进入下一轮吗？您是否已经发邮件通知学生了？可以点击发送邮件功能通知学生考核情况，然后再进入下一轮！"
    );
    if (isEnter) {
      model.nextRound(model.getDeptId());
    }
  });
});
