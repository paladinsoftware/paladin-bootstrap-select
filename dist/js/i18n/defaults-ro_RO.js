/*!
 * Bootstrap-select v1.7.9 (https://github.com/paladinsoftware/paladin-bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/paldinsoftware/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function () {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Nu a fost selectat nimic',
    noneResultsText: 'Nu exista niciun rezultat {0}',
    countSelectedText: '{0} din {1} selectat(e)',
    maxOptionsText: ['Limita a fost atinsa ({n} {var} max)', 'Limita de grup a fost atinsa ({n} {var} max)', ['iteme', 'item']],
    multipleSeparator: ', '
  };
})(jQuery);


}));
