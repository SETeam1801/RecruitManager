function TextUtils() {}

/**
 * str 字符串
 * 返回值：true str不为空 false str为空
 */
TextUtils.isEmpty = function (str) {
  if (str != null && str != "") {
    return false;
  }

  return true;
};

/**
 * 检查字符串是否是数字
 * 返回值 true 是数字 false不是数字
 */
TextUtils.checkNumber = function (str) {
  var rex = /^[0-9]n+$/;

  if (rex.test(rex)) {
    return true;
  } else {
    return false;
  }
};
