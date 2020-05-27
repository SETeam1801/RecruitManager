$("document").ready(function () {
  NetworkHelper.get({
    url: Apis.getDeptUrl(),
    headers: {
      AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
    },
    onSuccess: function (result) {
      if (result != null) {
        if (result.code == 100) {
          let isRecruiting = false;
          for (let temp in result.data) {
            if (temp.status == 1) {
              showRecruitingDept(temp.deptId, temp.deptName);
              isRecruiting = true;
            }
          }
          if (!isRecruiting) {
            showNoRecruitingDept();
          }
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
    onComplete: function (status) {},
  });
});

function showRecruitingDept(deptId, deptName) {
  let html =
    '<button class="list-item" id="' +
    deptId +
    '" onclick="jump(this)">' +
    deptName +
    "</button>";
}

/**
 * 跳转页面
 * @param {dom} btn dom对象
 */
function jump(btn) {
  let id = btn.id;
  console.log(typeof id);
  if (id == -1) {
    window.location.href = "/publishRecruitInfo.html";
  } else {
    window.location.href = "/personalInfo.html?id=" + id;
  }
}

function showNoRecruitingDept() {
  let html =
    '<button class="list-item" id="' +
    -1 +
    '" onclick="jump(this)">没有部门发布招新哦~点击这里去发布招新吧！</button>';
  $("#list").append(html);
}
