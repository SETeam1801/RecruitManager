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
  showPersonalInfo: function (id, url, name) {
    var html =
      '<div class="personal-info" id="' +
      id +
      '" onclick="jump(this)">' +
      '<div class="personal-img" id="' +
      '"></div>' +
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
  // 跳转页面
  window.location.href = "/personDetail.html";
}
