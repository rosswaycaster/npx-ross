"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _blessed = require("blessed");

var _blessed2 = _interopRequireDefault(_blessed);

var _reactBlessed = require("react-blessed");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel-register")({});

// Rendering a simple centered box
var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "box",
        {
          top: "center",
          left: "center",
          width: "90%",
          height: "90%",
          align: "right",
          border: { type: "line" },
          style: { border: { fg: "blue" } }
        },
        _react2.default.createElement(
          "text",
          { top: 0, align: "center", width: "100%" },
          "Ross Waycaster"
        ),
        _react2.default.createElement("line", { top: 1, orientation: "horizontal" }),
        _react2.default.createElement(
          "text",
          { top: 2 },
          "More to come!"
        )
      );
    }
  }]);

  return App;
}(_react.Component);

// Creating our screen


var screen = _blessed2.default.screen({
  autoPadding: true,
  smartCSR: true,
  title: "Ross Waycaster = Full Stack Developer"
});

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
var component = (0, _reactBlessed.render)(_react2.default.createElement(App, null), screen);