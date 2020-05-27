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
      '">' +
      '<div class="personal-img"></div>' +
      '<div class="personal-name">' +
      name +
      "</div>";
    $(".personal-info-wrapper").append(html);
    $(".personal-img").css("background-image", "url(" + url + ")");
  },
};
