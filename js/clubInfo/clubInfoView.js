var clubInfoView = {
  /**
   * 展示负责人的名称
   * @param {string} name 负责人名
   */
  showLeaderName: function (name) {},

  /**
   * 展示社团简介
   */
  showClubDesc: function (desc) {},

  /**
   * 展示社团名字
   * @param {str} name 社团名字
   */
  showClubName: function (name) {},

  /**
   *
   * @param {object} data 对象
   * {
   *  deptName:string
   * deptDesc:string
   * headImg:string(url)
   * id:int(position)
   * }
   */
  showDeptCard: function (data) {},

  /**
   * 社团信息卡片移除
   * @param {int} id  唯一标识
   */
  moveDeptCard: function (id) {},

  /**
   * 显示添加部门的弹窗
   */
  showAddDeptDialog: function () {
    // 显示弹窗
    // 确定
    // TODO 设置确定按钮的点击事件，点击事件controller.addDept(deptName, deptDesc);
    // 取消
  },

  /**
   * 隐藏添加部门的弹窗
   */
  hideAddDeptDialog: function () {},

  /**
   * 展示是否删除该部门的提示弹窗
   */
  showDeleteDeptDialog: function (id, deptName) {
    // TODO 点击事件里面调用controller.configDelete(id, deptName);
  },
};
