var clubInfoView = {
    /**
     * 展示社团简介
     * 
     */
    showClubDesc: function(id, desc) {
        //传入弹窗输入的信息
        //这里要改，如果没有找到id，那么就自己添加代码进去
        //找到了，它的text变成desc就好了
        //id的名字叫desc，根据getelementbyid判断是否已经有了社团简介的卡片
        document.getElementById(id)
        $(id).text(desc);
    },

    /**
     * 展示编辑社团简介的弹窗
     */
    showAddClubDialog: function() {

    },
    /**
     * 展示社团负责人头像
     * @param {headImg:string(url) } headImg 社团负责人头像
     */
    showHeadImg: function(headImg) { ///TODO我们还没有上传头像的功能
        document.getElementById("headImg").src = headImg;
    },

    /**
     * @param 
     *  deptName:string
     *  deptDesc:string
     *  id:int(position)
     * 展示部门简介
     */
    showDeptCard: function(deptName, deptDesc, id) {
        var html =
            '<textarea type="text" id="' +
            deptName +
            '" name="' +
            id +
            '" cols="30" rows="10" maxlength="5000" readonly>' +
            deptName +
            ":" +
            deptDesc +
            '</textarea>';
        $("#card-wrapper").append(html);
    },

    /**
     * 社团信息卡片移除
     * @param DeptName  部门名，同一个部门不会有重复的部门
     */
    moveDeptCard: function(deptName) {
        var element = document.getElementById(deptName);
        element.parentNode.removeChild(element);
    },

    /**
     * 显示添加部门的弹窗
     */
    showAddDeptDialog: function() {
        let dialog = new InfoDialog({
            onSuccess: function(title, content) {
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