$(document).ready(function () {
  // 获取上个页面传来的参数
  let url = sessionStorage.getItem("personDetailUrl");
  console.log(url);
  let id = sessionStorage.getItem("personDetailId");
  console.log(id);
  let deptId = sessionStorage.getItem("personDetailDeptId");
  console.log(deptId);

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
      NetworkHelper.post({
        url: Apis.getDeleteUrl(),
        data: {
          deptId: parseInt(deptId),
          deleteList: [parseInt(id)],
        },
        headers: {
          AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
        },
        onSuccess: function (result) {
          if (result != null) {
            if (result.code == 100) {
              alert("删除成功！");
              // 删除学生后，跳转回原界面并刷新界面
              self.location.replace(document.referrer);
            } else {
              alert(result.message);
            }
          }
        },
        onException: function (e) {
          console.log(e);
        },
        onError: function (status) {
          console.log(status);
        },
      });
    }
  });

  $("#refuse").click(function () {
    let isRefuse = confirm(
      "拒绝该学生后，将视该学生未通过考核，进入下一轮后，该学生会从名单上移除"
    );
    if (isRefuse) {
      NetworkHelper.post({
        url: Apis.getRefuseUrl(),
        data: {
          deptId: parseInt(deptId),
          stopList: [parseInt(id)],
        },
        headers: {
          AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
        },
        onSuccess: function (result) {
          if (result != null) {
            if (result.code == 100) {
              alert("拒绝成功！");
              // 删除学生后，跳转回原界面并刷新界面
              self.location.replace(document.referrer);
            } else {
              alert(result.message);
            }
          }
        },
        onException: function (e) {
          console.log(e);
        },
        onError: function (status) {
          console.log(status);
        },
      });
    }
  });
});
