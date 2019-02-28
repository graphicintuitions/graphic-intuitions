"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _jsxFileName = "/Users/nickv/Projects/graphicintuitions2019/plugins/gatsby-plugin-google-optimize-anti-flicker/src/gatsby-ssr.js";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            <!-- Anti-flicker snippet (recommended)  -->\n            (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;\n            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};\n            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;\n            })(window,document.documentElement,'async-hide','dataLayer',4000,\n            {'", "':true});"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)([".async-hide { opacity: 0 !important}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPreBodyComponents = _ref.setPreBodyComponents;

  if (process.env.NODE_ENV === "production" || pluginOptions.includeInDevelopment) {
    setHeadComponents([_react.default.createElement("style", {
      key: "plugin-google-optimize-anti-flicker-style",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject())
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), _react.default.createElement("script", {
      key: "plugin-google-optimize-anti-flicker-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2(), pluginOptions.id)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })]);
  }
};