document.write('<link rel="stylesheet" href="/dialog/css/infoDialog.css" />');
document.write(
  '<div class="dialog-background" id="infoDialogBg">' +
    '<div class="info-dialog">' +
    '<div class="title-wrapper">' +
    '<div class="info-title">部门</div>' +
    '<div class="title-input">' +
    '<input type="text" class="title-edit" id="titleEdit" />' +
    "</div>" +
    "</div>" +
    '<div class="content-wrapper">' +
    '<div class="info-content">简介</div>' +
    '<div class="content-input">' +
    '<textarea class="content-edit" id="contentEdit"></textarea>' +
    "</div>" +
    "</div>" +
    '<div class="action-wrapper">' +
    '<button id="infoDialogConfig">确定</button>' +
    '<button id="infoDialogCancel">取消</button>' +
    "</div></div></div>"
);

/**
 * 一个对象
 * @param {object} op 一个对象
 * op:{
 *  onError(msg) : 参数错误时提醒用户
 * onSuccess(title,content) : 输入正确时的回调。
 * }
 */
function InfoDialog(op) {
  this.onError = op.onError;

  this.onSuccess = op.onSuccess;

  this.show = function () {
    document.getElementById("infoDialogBg").style.display = "block";
  };

  let thisDialog = this;

  document.getElementById("titleEdit").value = "";
  document.getElementById("contentEdit").value = "";

  document.getElementById("infoDialogConfig").onclick = function () {
    let title = document.getElementById("titleEdit").value;

    let content = document.getElementById("contentEdit").value;

    if (title == null || title == "") {
      thisDialog.onError("部门不能为空！");
      return;
    }

    if (content == null || content == "") {
      thisDialog.onError("简介不能为空！");
      return;
    }
    console.log(this);
    thisDialog.onSuccess(title, content);
    document.getElementById("infoDialogBg").style.display = "none";
  };

  document.getElementById("infoDialogCancel").onclick = function () {
    document.getElementById("infoDialogBg").style.display = "none";
  };
}