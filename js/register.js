const msg = document.getElementById("msg");

$(document).ready(function() {
    $("#confirm").click(function() {
        var userName = $("#userName").val();
        var school = $("#school").val();
        var stuId = $("#stuId").val();
        var clubName = $("#clubName").val();
        var phoNum = $("#phoNum").val();
        var passWord = $("#passWord").val();
        var checkPassWord = $("#checkPassWord").val();

        //判断数据是否合法
        if (userName == '' || school == '' || stuId == '' || clubName == '' || phoNum == '' || passWord == '' || checkPassWord == '') {
            msg.classList.add("error");
            msg.innerHTML = "请将信息填写完整!";
            setTimeout(() => {
                msg.innerHTML = "Welcome!";
                msg.classList.remove("error");
            }, 2000);
            var phoNum = $("#phoNum").val();
        } else if (check_userName(userName) && check_school(school) && check_stuId(stuId) && check_clubName(clubName) && check_phoNum(phoNum) && check_passWord(passWord) && check_checkPassWord(passWord, checkPassWord)) {
            msg.classList.add("success");
            msg.innerHTML = "注册成功！";

            NetworkHelper.post({
                url: Apis.getRegisterUrl(),
                data: {
                    userName: userName,
                    school: school,
                    stuId: stuId,
                    clubName: clubName,
                    phoNum: phoNum,
                    passWord: passWord,
                },

                onSuccess: function(result) {
                    if (result != null && result.code == 201) {
                        alert("该手机号码已经被注册");
                    } else if (result != null && result.code == 100) {
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

                onException: function(err) {
                    console.log(err);
                },

                onError: function(status) {
                    //判断status汇报错误
                    console.log(status);
                },
            });
        } else {
            msg.classList.add("error");
            setTimeout(() => {
                msg.innerHTML = "Welcome!";
                msg.classList.remove("error");
            }, 2000);
        }

    });
    $("#cancle").click(function() {
        window.location.href = "/login.html";
    });
});

//验证负责人姓名
function check_userName(userName) {
    var regUserName = /[\u4e00-\u9fa5]{2,10}/
    if (!regUserName.test(userName)) {
        msg.innerHTML = "负责人姓名应由2-10个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证学校名
function check_school(school) {
    var regSchool = /[\u4e00-\u9fa5]{2,20}/
    if (!regSchool.test(school)) {
        msg.innerHTML = "学校名应由2-20个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证学号
function check_stuId(stuId) {
    var regStuId = /\d{5,15}/;
    if (!regStuId.test(stuId)) {
        msg.innerHTML = "学号应由5~15位的数字组成";
        return false;
    } else {
        return true;
    }
}

//验证社团名
function check_clubName(school) {
    var regClubName = /[\u4e00-\u9fa5]{2,20}/
    if (!regClubName.test(school)) {
        msg.innerHTML = "社团名应由2-20个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证手机号
function check_phoNum(phoNum) {
    var regPhoNum = /[13,15,17,18,19]\d{9}/;
    if (!regPhoNum.test(phoNum)) {
        msg.innerHTML = "手机号应由11位数字组成，且以13/15/17/18/19开头";
        return false;
    } else {
        return true;
    }
}

//验证密码
function check_passWord(passWord) {
    var regPassWord = /^\w{6,15}$/;
    if (!regPassWord.test(passWord)) {
        msg.innerHTML = "密码应由6~15位 数字、字母、下划线组合而成";
        return false;
    } else {
        return true;
    }
}

//验证确认密码
function check_checkPassWord(passWord, checkPassWord) {
    if (checkPassWord == passWord) {
        return true;
    } else {
        msg.innerHTML = "两次输入密码不一致";
        return false;
    }
}