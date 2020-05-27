function TokenUtils() {}

const HTTP_TOKEN = "http_token";

/**
 * 检查本地是否含有token
 */
TokenUtils.checkToken = function() {
    let token = localStorage.getItem(HTTP_TOKEN);
    return token == null;
};

/**
 * 保存token
 */
TokenUtils.saveToken = function(token) {
    localStorage.setItem(HTTP_TOKEN, token);
};

/**
 * 获取token
 */
TokenUtils.getToken = function() {
    return localStorage.getItem(HTTP_TOKEN);
};

/**
 * token过期，清除token
 */
TokenUtils.clearToken = function() {
    localStorage.removeItem(HTTP_TOKEN);
};