// 定义对象
function NetworkHelper() {}

/**
 * 定义该对象的静态方法
 * 发送get请求
 * param request 传入一个对象
 * request: {
 *  url:string 请求的地址
 * onSuccess(data): function 返回成功的回调函数（status == 200）
 * onException(e): function 发生异常的回调函数
 * onError(status): function 发生错误的回调函数 status (status != 200)
 * }
 */
NetworkHelper.get = function (request) {
  try {
    $.get(request.url, function (data, status) {
      if (status == 200) {
        if (request.onSuccess != undefined && request.onSuccess != null) {
          request.onSuccess(data);
        }
      } else {
        if (request.onError != undefined && request.onError != null) {
          request.onError(status);
        }
      }
    });
  } catch (err) {
    if (request.onException != undefined && request.onException != null) {
      request.onException(err);
    }
  }
};

/**
 * 定义该对象的静态方法
 * 发送post请求
 * param request 传入一个对象
 * request: {
 * url:string 请求的地址
 * data:object 请求数据的对象
 * onSuccess(data): function 返回成功的回调函数（status == 200）
 * onException(e): function 发生异常的回调函数
 * onError(status): function 发生错误的回调函数 status (status != 200)
 * }
 */
NetworkHelper.get = function (request) {
  try {
    $.get(request.url, request.data, function (data, status) {
      if (status == 200) {
        if (request.onSuccess != undefined && request.onSuccess != null) {
          request.onSuccess(data);
        }
      } else {
        if (request.onError != undefined && request.onError != null) {
          request.onError(status);
        }
      }
    });
  } catch (err) {
    if (request.onException != undefined && request.onException != null) {
      request.onException(err);
    }
  }
};
