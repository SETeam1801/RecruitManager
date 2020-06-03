$(document).ready(function() {
    var user = controller.getUser();
    $("#leaderName").text(user.userName); //用户名
    $("#clubName").text(user.clubName); //社团名字

    controller.getClubInfo();

    $("#addClubInfo").click(function() { //编辑社团简介
        clubInfoView.showAddClubDialog();
    });

    $("#addClubDeptInfo").click(function() { //添加部门功能
        clubInfoView.showAddDeptDialog();
    });

    $("#addRecruitInfo").click(function() {
        window.location.href = "/publishRecruitInfo.html";
    });

    $("#changeRecruitInfo").click(function() {
        window.location.href = "/publishRecruitInfo.html";
    });

    $("#deleteClubDeptInfo").click(function() { //删除部门功能
        var DeptName = prompt("请输入要删除的社团名：", "例如：后台组");
        var element = document.getElementById(DeptName);
        if (element != null) {
            controller.deleteDept(DeptName);
        } else {
            alert("没有查找到这个部门");
        }
    });

    $("#deleteRecruitInfo").click(function() {
        var DeptName = prompt("请输入招新信息对应的社团名：", "例如：后台组");
        var element = document.getElementById(DeptName + "Rec");
        if (element != null) {
            controller.deleteRec(DeptName);
        } else {
            alert("没有查找到这个部门的招新信息");
        }
    });
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
            url: Apis.getClubInfo(),
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    clubInfoView.showClubDesc("#desc", result.data.clubDesc);
                    for (i = 0; i < result.data.clubPictureUrl.length; i++) {
                        //TODO creat picture
                    }
                    for (i = 0; i < result.data.dept.length; i++) {
                        clubInfoView.showDeptCard(result.data.dept[i].deptName, result.data.dept[i].deptDesc, result.data.dept[i].deptId);
                    }
                    for (i = 0; i < result.data.dept.length; i++) { //展示招新信息
                        clubInfoView.showRecruitingCard(result.data.dept[i]);
                    }
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
     * 社团简介信息上传
     */
    uploadClubDesc: function(clubDesc) {
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
                    location.reload();
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
        NetworkHelper.post({ //让后台删除数据的删除函数
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

    /**
     * 删除招新信息
     * deptNameRec: 部门名
     */
    deleteRec: function(deptName) {
        NetworkHelper.post({
            url: Apis.getPublishRecruitment(), ///TODO等后台添加
            headers: {
                AUTHORIZATION: "Bearer " + TokenUtils.getToken(),
            },
            data: {
                deptName: deptName,
            },
            onSuccess: function(result) {
                if (result != null && result.code == 100) {
                    clubInfoView.moveRecruitingCard(deptName);
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