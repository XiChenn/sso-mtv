window.app = {
  SSOServerUrl: "http://www.sso.com:8090",
  siteUrl: "http://www.mtv.com:8080/sso-mtv",
  cookieDomain: ".mtv.com",

  getCookie: function(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  },

  setCookie: function(name, value, days=365) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;domain=" + this.cookieDomain + ";expires=" + exp.toGMTString();
  },

  deleteCookie: function(name) {
    this.setCookie(name, '', -1);
  },

  getUrlParam(paramName) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get(paramName);
  }
};
