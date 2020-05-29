var view = {
  /**
   * 展示用户名
   * @param {str} name 用户名
   */
  showUserName: function (name) {
    $("#username").text(name);
  },

  /**
   * 展示个人信息
   * @param {int} id
   * @param {str} url
   * @param {str} name
   */
  showPersonalInfo: function (id, url, name, status) {
    var html =
      '<div class="personal-info" id="' +
      id +
      '" onclick="jump(this)">' +
      '<div class="personal-img" id="' +
      '">' +
      (status == 0 ? '<div class="fontground">未通过</div>' : "") +
      "</div>" +
      '<div class="personal-name">' +
      name +
      "</div>";
    $(".personal-info-wrapper").append(html);
    $("#" + id + " .personal-img").css("background-image", "url(" + url + ")");
  },

  /**
   * 显示没有人报名
   */
  showNoPerson: function () {
    $(".personal-info-wrapper").hide();
    document.getElementById("noPerson").style.display = "block";
  },

  showRound: function (str) {
    $("#round").text("当前轮数: " + str);
  },

  showStuNum: function (num) {
    $("#stuNum").text("学生人数: " + num);
  },

  showPassNum: function (num) {
    $("#passNum").text("通过人数: " + num);
  },

  showDeleteNum: function (num) {
    $("#deleteNum").text("删除人数: " + num);
  },

  /**
   * 发送邮件成功
   */
  showSendMailSuccess: function () {
    alert("发送邮件成功！");
  },

  /**
   * 发送邮件失败
   */
  showSendMailError: function () {
    alert("发送邮件失败！");
  },

  /**
   * 展示发送邮件的弹框
   */
  showMailDialog: function () {
    let passTitle = null;
    let passBody = null;
    let failTitle = null;
    let failBody = null;

    $("#infoDialogConfig").text("下一步，给未通过考核的学生发邮件");

    let passDialog = new InfoDialog({
      haveTitle: true,
      titleName: "标题",
      contentName: "内容",
      titlePlaceHolder: "请输入邮件标题（注意：这封邮件是发给通过考核的学生）",
      contentPlaceHolder:
        "请输入邮件的主体部分（注意：邮件的开头与结尾已编辑好，只需要输入邮件的主体）",
      onSuccess: function (title, content) {
        passTitle = title;
        passBody = content;
        $("#infoDialogConfig").text("发送邮件");
        let failDialog = new InfoDialog({
          haveTitle: true,
          titleName: "标题",
          contentName: "内容",
          titlePlaceHolder:
            "请输入邮件标题（注意：这封邮件是发给未通过考核的学生）",
          contentPlaceHolder:
            "请输入邮件的主体部分（注意：邮件的开头与结尾已编辑好，只需要输入邮件的主体）",
          onSuccess: function (title, content) {
            failTitle = title;
            failBody = content;
            controller.sendMail({
              passTitle: passTitle,
              passBody: passBody,
              failTitle: failTitle,
              failBody: failBody,
            });
          },
          onError: function (msg) {
            alert(msg);
          },
        });
      },
      onError: function (msg) {
        alert(msg);
      },
    });
  },
};

/**
 * 点击按钮后跳转页面到报名人员详细信息页
 */
function jump(person) {
  // 获取id
  let id = person.id;
  // 获取url
  let url = $("#" + id + " .personal-img").css("background-image");

  sessionStorage.setItem("personDetailId", id);
  sessionStorage.setItem("personDetailUrl", url);
  sessionStorage.setItem("personDetailDeptId", model.getDeptId());
  // 跳转页面
  window.location.href = "/personDetail.html";
}
