$(document).ready(function () {
  // 获取上个页面传来的参数
  let url = sessionStorage.getItem("personDetailUrl");
  console.log(url);
  let id = sessionStorage.getItem("personDetailId");
  console.log(id);

  $(".person-img").css("background-image", url);

  NetworkHelper.get({
    url: Apis.getDetailUrl() + id + "/",
    headers: {
      AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
    },
    onSuccess: function (result) {
      if (result != null) {
        if (result.code == 100) {
          let temp = result.data;
          console.log(JSON.stringify(result));
          $("#name").text(temp.stuName);
          $("#dept").text(temp.deptName);
          $("#sno").text("学号: " + temp.stuId);
          $("#mail").text("邮箱: " + temp.mailbox);
          $("#phone").text("手机号: " + temp.phoNum);
          $("#desc").text(
            "个人简介: " +
              (temp.stuDesc == "" || temp.stuDesc == null ? "无" : temp.stuDesc)
          );
        } else {
          alert(result.message);
        }
      }
    },
    onException: function (e) {},
    onComplete: function (status) {},
  });

  $("#back").click(function () {
    history.back();
  });

  $("#delete").click(function () {
    let isDelete = confirm("是否将该学生信息彻底删除？");
    if (isDelete) {
      // TODO 发送网络请求删除该学生信息同时跳转页面

      window.location.href = document.referrer;
    }
  });

  $("#refuse").click(function () {
    let isRefuse;
  });
});
