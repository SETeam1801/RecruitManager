$(document).ready(function () {
  $("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    // TODO 判断数据是否合法
    NetworkHelper.post({
      url: Apis.getLoginUrl(),
      data: {
        userName: username,
        passWord: password,
      },
      onSuccess: function (result) {
        console.log(result);
      },
      onException: function (err) {
        console.log(err);
      },
      onError: function (status) {
        // TODO 判断status汇报错误
        console.log(status);
      },
    });
  });
});
