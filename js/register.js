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
        } else if (check_userName() && check_school() && check_stuId() && check_clubName() && check_phoNum() && check_passWord() && check_checkPassWord()) {
            msg.innerHTML = "注册成功";
            //TODO 将信息转化成json，发送信息给后台，拿到返回的token
            //TODO 然后直接登录



            返回的信息 {  
                "code": "状态码"  
                "message": "正常" | "异常信息",
                  "data": {  "token": "token字符串" }
            }

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
function check_userName() {
    var regUserName = /[\u4e00-\u9fa5]{2,6}/
    if (!regUserName.test(userName)) {
        msg.innerHTML = "负责人姓名应由2-10个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证学校名
function check_school() {
    var regSchool = /[\u4e00-\u9fa5]{2,20}/
    if (!regSchool.test(school)) {
        msg.innerHTML = "学校名应由2-20个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证学号
function check_stuId() {
    var regStuId = /\d{5,15}/;
    if (!regStuId.test(stuId)) {
        msg.innerHTML = "学号应由5~15位的数字组成";
        return false;
    } else {
        return true;
    }
}

//验证社团名
function check_clubName() {
    var regClubName = /[\u4e00-\u9fa5]{2,20}/
    if (!regClubName.test(school)) {
        msg.innerHTML = "社团名应由2-20个汉字组成";
        return false;
    } else {
        return true;
    }
}

//验证手机号
function check_phoNum() {
    var regPhoNum = /[13,15,18]\d{9}/;
    if (!regPhoNum.test(phoNum)) {
        msg.innerHTML = "手机号应由11位数字组成，且以13或15或18开头";
        return false;
    } else {
        return true;
    }
}

//验证密码
function check_passWord() {
    var regPassWord = /^\w{6,15}$/;
    if (!regPassWord.test(passWord)) {
        msg.innerHTML = "密码应由6~15位 数字、字母、下划线组合而成";
        return false;
    } else {
        return true;
    }
}

//确认密码
function check_checkPassWord() {
    if (!checkPassWord.equals(passWord)) {
        msg.innerHTML = "两次输入密码不一致";
        return false;
    } else {
        return true;
    }
}