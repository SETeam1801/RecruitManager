$(document).ready(function () {
  $("#club-info").click(function () {
    //跳转到社团信息界面
    window.location.href = "/clubInfo.html";
  });

  $("#publish-recruit").click(function () {
    //跳转到发布招新信息
    window.location.href = "/publishRecruitInfo.html";
  });

  $("#person-info").click(function () {
    //跳转到发布招新消息
    window.location.href = "/personalInfo.html";
  });
  let user = localStorage.getItem(USER_INFO);
  console.log(JSON.stringify(localStorage.getItem(USER_INFO)));
  if (user != null) {
    let userObject = JSON.parse(user);
    let userName = userObject.userName;
    $("#username").text(userName);
  }
});
