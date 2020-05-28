$(document).ready(function() {
    var user = controller.getUser();
    $("#leaderName").text(user.userName); //用户名
    $("#clubName").text(user.clubName); //社团名字

    controller.getClubInfo();
    $("#addClubDeptInfo").click(function() { //添加部门功能
        clubInfoView.showAddDeptDialog();
    });
    $("#deleteClubDeptInfo").click(function() { //删除部门功能
        var DeptName = prompt("请输入要删除的社团名：", "例如：后台组");
        var element = document.getElementById(DeptName);
        console.log(element);
        if (element != null) {
            controller.deleteDept(DeptName);
        } else {
            alert("没有查找到这个部门");
        }
    });

    $("#addClubInfo").click(function() {
        //TODO等啊墉的新的弹窗
        if (1) {
            controller.uploadClubDesc();
        } else {

        }

        //clubInfoView.showClubDesc();
    });

    $("#addRecruitInfo").click(function() {
        window.location.href = "/publishRecruitInfo.html";
    });

    /*
        

        clubInfoView.showDeptCard({
            deptName: "前端组",
            deptDesc: "test test test",
            id: 1,
        });

        $("#deleteClubDeptInfo").click(function() {
            clubInfoView.showDeleteDeptDialog(1, "部门1");
        });
    */
});

var controller = {
    /**
     * 获取用户信息
     */
    getUser: function() {
        let userInfo = localStorage.getItem(USER_INFO);
        let user = JSON.parse(userInfo);
        return user;
    },

    /**
     * 获取社团信息
     */
    getClubInfo: function() {
        NetworkHelper.post({
            url: Apis.getUploadClubDesc(),
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            data: {
                desc: clubDesc,
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    alert("编辑社团简介成功");
                    clubInfoView.showClubDesc("#desc", result.desc);
                } else {
                    alert(result.message);
                }
            },
            onException: function(err) {
                console.log(err);
            },
            onError: function(status) {
                console.log(status);
            },
        });
        //信息
        //修改排版
    },

    /**
     * 社团简介信息上传(还在写)
     */
    uploadClubDesc: function() {
        var clubDesc = $("#desc").val();
        NetworkHelper.post({
            url: Apis.getUploadClubDesc(),
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            data: {
                desc: clubDesc,
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    alert("编辑社团简介成功");
                    clubInfoView.showClubDesc("#desc", result.desc);
                } else {
                    alert(result.message);
                }
            },
            onException: function(err) {
                console.log(err);
            },
            onError: function(status) {
                console.log(status);
            },
        });
    },

    /**
     * deptName 部门名称
     * deptDesc 部门简介
     * 上传到后台 + 页面更新
     */
    addDept: function(deptName, deptDesc) {
        NetworkHelper.post({
            url: Apis.getUploadDeptDesc(),
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            data: {
                deptName: deptName,
                deptDesc: deptDesc,
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    clubInfoView.showDeptCard(deptName, deptDesc, result.id);
                } else {
                    alert(result.message);
                }
            },
            onException: function(err) {
                console.log(err);
            },
            onError: function(status) {
                console.log(status);
            },
        });
    },

    /**
     * deptName 部门名称
     * 删除部门信息
     * 后台删除 + 页面删除
     */
    deleteDept: function(deptName) {
        //让后台删除数据的删除函数
        NetworkHelper.post({
            url: Apis.getDeleteDept(),
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            data: {
                deptName: deptName,
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    clubInfoView.moveDeptCard(deptName);
                } else {
                    alert(result.message);
                }
            },
            onException: function(err) {
                console.log(err);
            },
            onError: function(status) {
                console.log(status);
            },
        });
    },
};