var clubInfoView = {
    /**
     * 展示社团简介
     * 
     */
    showClubDesc: function(id, desc) {
        var element = document.getElementById(id)
        if (element != null) {
            $(id).text(desc);
        } else {
            if (desc != undefined) {
                var html =
                    '<textarea type="text" id="' +
                    id +
                    '" cols="30" rows="10" maxlength="5000" readonly>' +
                    desc +
                    '</textarea>';
                $("#card-wrapper").append(html);
            }
        }

    },

    /**
     * 展示编辑社团简介的弹窗
     */
    showAddClubDialog: function() {
        var element = document.getElementById("#desc");
        var title = "";
        var content = "";
        if (element != null) {
            title = element.id;
            content = element.desc;
        }
        let dialog = new InfoDialog({
            haveTitle: false,
            titleName: "标题",
            contentName: "社团简介",
            title: title,
            content: content,
            onSuccess: function(title, content) {
                controller.uploadClubDesc(content); //上传给后台,并展示卡片
            },
            onError: function(msg) {
                alert(msg);
            },
        });
        dialog.show();
    },
    /**
     * 展示社团负责人头像
     * @param {headImg:string(url) } headImg 社团负责人头像
     */
    showHeadImg: function(headImg) { ///TODO我们还没有上传头像的功能
        document.getElementById("#headImg").src = headImg;
    },

    /**
     * @param 
     *  deptName:string
     *  deptDesc:string
     *  id:int(position)
     * 展示部门简介
     */
    showDeptCard: function(deptName, deptDesc, id) {
        if (deptName != undefined) {
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
        }
    },

    /**
     * 展示招新信息
     * startTime:开始时间
     * endTime:截止时间
     * deptId:部门id
     * qq:qq群
     * times：考核轮数
     * maxNum：最大报名人数
     * recruitNum：招新人数
     * standard：考核标准
     * add：补充说明
     */
    showRecruitingCard: function(dept) {
        if (dept.recruitment != null) {
            var html =
                '<textarea type="text" id="' +
                dept.deptName + "Rec" +
                '" name="' +
                dept.deptId +
                '" cols="30" rows="10" maxlength="5000" readonly>' +
                dept.deptName + "招新信息:" +
                "\r开始时间：" + dept.recruitment.startTime +
                "     截止时间：" + dept.recruitment.endTime +
                "\rQQ群：" + dept.recruitment.qq +
                "                            考核轮数：" + dept.recruitment.times +
                "\r最大报名人数：" + dept.recruitment.maxNum +
                "                   招新人数：" + dept.recruitment.recruitNum +
                "\r考核标准：" + dept.recruitment.standard +
                "\r补充说明："
            '</textarea>';
            $("#card-wrapper").append(html);
        }
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
            haveTitle: true,
            titleName: "部门",
            contentName: "部门简介",
            ///TODO
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
     * 
     * 移除招新信息的卡片
     */
    moveRecruitingCard: function(deptName) {
        var element = document.getElementById(deptName + "Rec");
        element.parentNode.removeChild(element);
        console.log("fuck");
    }
};