$(document).ready(function() {
    clubInfoView.showClubName("QG工作室");
    clubInfoView.showLeaderName("墉神");
    clubInfoView.showHeadImg("/img/girl.jpg");

    $("#deleteClubDeptInfo").click(function() {
        clubInfoView.showDeleteDeptDialog(1, "部门1");
    });

    $("#addClubDeptInfo").click(function() {
        clubInfoView.showAddDeptDialog();
    });

    $("#addClubInfo").click(function() {
        clubInfoView.showClubDesc("QG工作室有好多人才！");
    });
});

var clubInfoView = {
    /**
     * 展示负责人的名称
     * @param {string} name 负责人名
     */
    showLeaderName: function(name) {
        $("#leaderName").text(name);
    },

    /**
     * 展示社团简介
     */
    showClubDesc: function(desc) {
        $("#desc").val(desc);
    },

    /**
     * 展示社团名字
     * @param {str} name 社团名字
     */
    showClubName: function(name) {
        $("#clubName").text(name);
    },

    /**
     * 展示社团负责人头像
     * @param {headImg:string(url) } headImg 社团负责人头像
     */
    showHeadImg: function(headImg) {
        document.getElementById("headImg").src = headImg;
    },

    /**
     * @param {object} data 对象
     * {
     *  deptName:string
     *  deptDesc:string
     *  id:int(position)
     * }
     */
    showDeptCard: function(data) {
        //dom操作，在代码中添加部门信息块

    },

    /**
     * 社团信息卡片移除
     * @param {int} id  唯一标识
     */
    moveDeptCard: function(id) {

    },

    /**
     * 显示添加部门的弹窗
     */
    showAddDeptDialog: function() {
        // 显示弹窗
        let dialog = new InfoDialog({
            onSuccess: function(title, content) {
                // 设置确定按钮的点击事件，点击事件controller.addDept(deptName, deptDesc);
                controller.addDept(title, content);
            },
            onError: function(msg) {
                alert(msg);
            },
        });
        dialog.show();
    },

    /**
     * 展示是否删除该部门的提示弹窗
     */
    showDeleteDeptDialog: function(id, deptName) {
        var ret = confirm("请问您确定要删除" + deptName + "的信息吗？");
        if (ret == ture) {
            controller.configDelete(id, deptName);
        }
    },
};