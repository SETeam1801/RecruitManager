const ERROR_DEPT = "必须选择一个部门！";

const ERROR_START_TIME = "开始时间错误！";

const ERROR_END_TIME = "截止时间错误！";

const ERROR_NUMBER = "招新人数错误！";

const ERROR_QQ = "qq群错误！";

const ERROR_WHEEL = "考核轮数错误！";

const ERROR_MAX_NUMBER = "最大报名人数错误！";

var startTime = "";
var endTime = "";
var deptId = "";

/**
 * 显示部门以供选择
 */
function showDept(id, deptName) {
  let html =
    '<div class="department-item" id="' +
    id +
    '" onclick="select(this)">' +
    deptName +
    "</div>";
  $("#departmentList").append(html);
}

function select(dept) {
  let deptName = $("#" + dept.id).text();
  console.log("deptName:" + deptName);
  deptId = dept.id;
  $("#selectedDeptName").text("招新部门 -> " + deptName);
}

/**
 * 没有未招新的部门
 */
function showNotDept() {
  let html =
    '<div class="department-item"><a href="/clubInfo.html">暂无部门,点击可前往添加部门</a></div>';
  $("#departmentList").append(html);
}

$("document").ready(function () {
  // 加载用户名
  let userInfo = localStorage.getItem(USER_INFO);
  console.log(URLSearchParams);
  let user = JSON.parse(userInfo);
  console.log(user.userName);
  $("#username").text(user.userName);

  // TODO 获取未招新的部门
  NetworkHelper.get({
    url: Apis.getDeptUrl(),
    headers: {
      AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
    },
    onSuccess: function (result) {
      if (result != null) {
        if (result.code == 100) {
          let haveDept = false;
          for (let temp of result.data) {
            console.log(temp);
            if (temp.status == 0) {
              console.log(temp.deptId + ":" + temp.deptName);
              showDept(temp.deptId, temp.deptName);
              haveDept = true;
            }
          }
          if (!haveDept) {
            showNotDept();
          }
        } else {
          alert(result.message);
        }
      }
    },
    onError: function (status) {
      console.log(status);
    },
    onException: function (e) {
      console.log(e);
    },
    onComplete: function (status) {
      console.log(status);
    },
  });

  // 提交的点击时间
  $("#sumbit").click(function () {
    let num = $("#number").val();
    let qq = $("#qqWechat").val();
    let wheel = $("#wheel").val();
    let maxNum = $("#maxNumber").val();
    let standard = $("#standard").val();
    let explain = $("#explain").val();
    if (TextUtils.isEmpty(deptId)) {
      alert(ERROR_DEPT);
    } else if (TextUtils.isEmpty(startTime)) {
      alert(ERROR_START_TIME);
    } else if (TextUtils.isEmpty(endTime)) {
      alert(ERROR_END_TIME);
    } else if (TextUtils.isEmpty(num) || !TextUtils.checkNumber(num)) {
      alert(ERROR_NUMBER);
    } else if (TextUtils.isEmpty(qq) || !TextUtils.checkNumber(qq)) {
      alert(ERROR_QQ);
    } else if (TextUtils.isEmpty(wheel) || !TextUtils.checkNumber(wheel)) {
      alert(ERROR_WHEEL);
    } else if (TextUtils.isEmpty(maxNum) || !TextUtils.checkNumber(maxNum)) {
      alert(ERROR_MAX_NUMBER);
    } else {
      // TODO 上传发布招新信息
      // 要将id转为int
      let id = parseInt(deptId);
      uploadPublishRecruitment({
        startTime: startTime,
        endTime: endTime,
        deptId: id,
        qq: qq,
        times: parseInt(wheel),
        maxNum: parseInt(maxNum),
        recruitNum: parseInt(num),
        standard: standard,
        add: explain,
      });
    }
  });
});

/**
 *
 * @param {object} data 上传的数据
 */
function uploadPublishRecruitment(data) {
  console.log(JSON.stringify(data));
  NetworkHelper.post({
    url: Apis.getPublishRecruitment(),
    data: data,
    onSuccess: function (result) {
      if (result.code == 100) {
        alert("发布成功！");
        window.location.href = "/publishRecruitInfo.html";
      } else {
        alert(result.message);
      }
    },
    onException: function (e) {
      console.log(e);
    },
    onError: function (status) {
      console.log(status);
    },
    headers: {
      AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
    },
  });
}

laydate.render({
  elem: "#startTime",
  type: "datetime",
  format: "yyyy-MM-dd HH:mm:ss",
  done: function (value, date, endDate) {
    startTime = value;
  },
});

laydate.render({
  elem: "#endTime",
  type: "datetime",
  format: "yyyy-MM-dd HH:mm:ss",
  done: function (value, date, endDate) {
    endTime = value;
  },
});
