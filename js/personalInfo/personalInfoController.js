var i = 0;

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
  $("#test").click(function () {
    view.showPersonalInfo(i, "https://www.boycharse.top/head.png", "路人甲");
    i++;
    console.log("click");
  });

  console.log(window.location.href);
});
