var i = 0;

$(document).ready(function () {
  $("#test").click(function () {
    createPersonalInfo(i, "https://www.boycharse.top/head.png", "路人甲");
    i++;
    console.log("click");
  });
});

/**
 * 创造一个dom对象
 * @param {long} id 学生id
 * @param {string} url 头像地址
 * @param {string} name 学生姓名
 */
function createPersonalInfo(id, url, name) {
  var html =
    '<div class="personal-info" id="' +
    id +
    '">' +
    '<div class="personal-img"></div>' +
    '<div class="personal-name">' +
    name +
    "</div>";
  $(".personal-info-wrapper").html($(".personal-info-wrapper").html() + html);
  $(".personal-img").css("background-image", "url(" + url + ")");
  $("#test").click(function () {
    createPersonalInfo(i, "https://www.boycharse.top/head.png", "路人甲");
    i++;
    console.log("click");
  });
}
