$(document).ready(function () {
  $("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    //判断数据是否合法
    NetworkHelper.post({
      url: Apis.getLoginUrl(),
      data: {
        phoNum: username,
        passWord: password,
      },
      onSuccess: function (result) {
        if (result != null && result.code == 100) {
          let data = result.data;
          if (data != null) {
            // 保存token
            TokenUtils.saveToken(data.token);
            let userInfo = {
              // 用户名
              userName: data.userName,
              // 学校名
              school: data.school,
              // 社团名
              clubName: data.clubName,
              // 学号
              stuId: data.stuId,
            };
            // 保存此对象
            localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
            window.location.href = "/navigation.html";
          }
        } else {
          alert(result.message);
        }
      },
      onException: function (err) {
        console.log(err);
      },
      onError: function (status) {
        //判断status汇报错误
        console.log(status);
      },
    });
  });
});

// TODO自动登录
function check() {
  if (!TokenUtils.checkToken()) {
    window.location.href = "/navigation.html";
  }
}
