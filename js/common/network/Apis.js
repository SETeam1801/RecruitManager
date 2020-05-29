const baseUrl = "https://re.boycharse.top/clubRecruitment/";

function Apis() {}

/**
 * 登录接口Api
 */
Apis.getLoginUrl = function() {
    return baseUrl + "managerSide/login/";
};

/**
 * 注册接口Api
 */
Apis.getRegisterUrl = function() {
    return baseUrl + "managerSide/register/";
};

/**
 * 获取部门的url
 */
Apis.getDeptUrl = function() {
    return baseUrl + "managerSide/findDept/";
};

Apis.getPublishRecruitment = function() {
    return baseUrl + "managerSide/editRecruitment/";
};

/**
 * 获取上传社团简介信息的url
 */
Apis.getUploadClubDesc = function() {
    return baseUrl + "managerSide/clubDesc/";
}

/**
 * 获取上传部门简介信息的url
 */
Apis.getUploadDeptDesc = function() {
    return baseUrl + "managerSide/addDept/";
}

/**
 * 获取上传社团简介的url
 */
Apis.getUploadClubDesc = function() {
    return baseUrl + "managerSide/clubDesc/";
}

/**
 * 获取删除社团简介的url
 */
Apis.getDeleteDept = function() {
    return baseUrl + "managerSide/deleteDept/";
}

/**
 * 获取 获取社团信息的url
 */
Apis.getClubInfo = function() {
    return baseUrl + "managerSide/clubInfo/";
}