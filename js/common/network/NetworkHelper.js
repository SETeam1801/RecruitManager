// 定义对象
function NetworkHelper() {}

/**
 * 定义该对象的静态方法
 * 发送get请求
 * param request 传入一个对象
 * request: {
 *  url:string 请求的地址
 * onSuccess(result): function 返回成功的回调函数（status == 200）
 * onException(e): function 发生异常的回调函数
 * onError(status): function 发生错误的回调函数 status (status != 200)
 * onComplete(status): onSuccess,onError执行后将执行
 * headers:可添加请求头
 * }
 */
NetworkHelper.get = function (request) {
  try {
    var setting = {
      // get请求
      type: "GET",
      // 请求地址
      url: request.url,
      // 请求成功的回调函数
      success: function (result, status, xhr) {
        if (request.onSuccess != undefined && request.onSuccess != null) {
          request.onSuccess(result);
        }
      },
      // 请求失败的回调函数
      error: function (xhr, status, error) {
        if (request.onError != undefined && request.onError != null) {
          request.onError(status);
        }
      },
      complete: function (xhr, status) {
        if (request.onComplete != undefined && request.onComplete != null) {
          request.onComplete(status);
        }
      },
      headers: request.headers,
      dataType: "json",
    };
    $.ajax(setting);
  } catch (err) {
    if (request.onException != undefined && request.onException != null) {
      request.onException(err);
    }
  }
};

/**
 * 定义该对象的静态方法
 * 发送post请求
 * 发送json数据
 * param request 传入一个对象
 * request: {
 * url:string 请求的地址
 * data:object 请求数据的对象
 * onSuccess(result): function 返回成功的回调函数（status == 200） result是一个对象
 * onException(e): function 发生异常的回调函数
 * onError(status): function 发生错误的回调函数 status (status != 200)
 * headers:可添加请求头
 * }
 */
NetworkHelper.post = function (request) {
  try {
    //转化为json 数据
    var json = JSON.stringify(request.data);
    var setting = {
      // post请求
      type: "POST",
      // 请求地址
      url: request.url,
      // json交互
      contentType: "application/json",
      // json数据
      data: json,
      // 成功回调函数
      success: function (result, status, xhr) {
        if (request.onSuccess != undefined && request.onSuccess != null) {
          request.onSuccess(result);
        }
      },
      // 请求失败的回调函数
      error: function (xhr, status, error) {
        if (request.onError != undefined && request.onError != null) {
          request.onError(status);
        }
      },
      complete: function (xhr, status) {
        if (request.onComplete != undefined && request.onComplete != null) {
          request.onComplete(status);
        }
      },
      // 请求头
      headers: request.headers,
      // 返回数据为json
      dataType: "json",
    };
    $.ajax(setting);
  } catch (err) {
    if (request.onException != undefined && request.onException != null) {
      request.onException(err);
    }
  }
};
