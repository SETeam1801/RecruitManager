/*
 * @Author: wangyuyong
 * @Date: 2020-06-04 17:15:19
 * @LastEditTime: 2020-06-04 17:25:33
 * @FilePath: /RecruitManager/js/index.js
 * @Description:
 */
const app = new Vue({
  el: ".container",
  data: {
    phone: "",
    password: "",
  },
  methods: {
    btnRegister() {
      window.location.href = "/register.html";
    },
    btnSumbit() {
      //判断数据是否合法
      if (!LoginRegisterUtils.check_phoNum(this.phone)) {
        alert("请输入正确的手机格式!");
        return;
      }
      if (this.password == "") {
        alert("密码不能为空！");
        return;
      }

      NetworkHelper.post({
        url: Apis.getLoginUrl(),
        data: {
          phoNum: this.phone,
          passWord: this.password,
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
    },
  },
});
