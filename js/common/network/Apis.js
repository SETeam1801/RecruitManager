const baseUrl = "https://re.boycharse.top/clubRecruitment/";

function Apis() {}

/**
 * 登录接口Api
 */
Apis.getLoginUrl = function () {
  return baseUrl + "managerSide/login/";
};

/**
 * 注册接口Api
 */
Apis.getRegisterUrl = function () {
  return baseUrl + "managerSide/register/";
};

/**
 * 获取部门的url
 */
Apis.getDeptUrl = function () {
  return baseUrl + "managerSide/findDept/";
};

Apis.getPublishRecruitment = function () {
  return baseUrl + "managerSide/editRecruitment/";
};

/**
 * 获取上传社团简介信息的url
 */
Apis.getUploadClubDesc = function () {
  return baseUrl + "managerSide/clubDesc/";
};

/**
 * 获取上传部门简介信息的url
 */
Apis.getUploadDeptDesc = function () {
  return baseUrl + "managerSide/addDept/";
};

/**
 * 获取上传社团简介的url
 */
Apis.getUploadClubDesc = function () {
  return baseUrl + "managerSide/clubDesc/";
};

/**
 * 获取删除社团简介的url
 */
<<<<<<< HEAD
Apis.getDeleteDept = function() {
    return baseUrl + "managerSide/deleteDept/";
}

/**
 * 获取 获取社团信息的url
 */
Apis.getClubInfo = function() {
    return baseUrl + "managerSide/clubInfo/";
}
=======
Apis.getDeleteDept = function () {
  return baseUrl + "managerSide/deleteDept/";
};

/**
 * 获取报名人员列表url
 */
Apis.getEnrollUrl = function () {
  return baseUrl + "managerSide/findApps/";
};

/**
 * 获取
 */
Apis.getDetailUrl = function () {
  return baseUrl + "managerSide/findStu/";
};

/**
 * 拒绝学生通过接口
 */
Apis.getRefuseUrl = function () {
  return baseUrl + "managerSide/stopApply/";
};

/**
 * 删除学生接口
 */
Apis.getDeleteUrl = function () {
  return baseUrl + "managerSide/deleteApply/";
};

/**
 * 发送邮件接口
 */
Apis.getMailUrl = function () {
  return baseUrl + "managerSide/sendMails/";
};

/**
 * 获取进入下一轮接口
 */
Apis.getNextRoundUrl = function () {
  return baseUrl + "managerSide/nextRound/";
};
>>>>>>> bc2e9c80897cbf714c4a76d1dd8d83410c4325c4
