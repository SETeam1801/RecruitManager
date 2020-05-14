$(document).ready(function () {
  $("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    // TODO 判断数据是否合法
    NetworkHelper.post({
      url: Api.getLoginUrl(),
      data: {
        userName: username,
        passWord: password,
      },
      onSuccess: function (data) {
        console.log(data);
      },
      onException(err) {},
      onError(status) {
        // TODO 判断status汇报错误
        console.log(status);
      },
    });
  });
});
