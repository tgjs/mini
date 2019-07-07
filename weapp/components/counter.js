"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _store = _interopRequireDefault(require('../store/index.js'));

var _x = require('../vendor.js')(2);

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].component({
  store: _store["default"],
  props: {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      "default": 50
    }
  },
  computed: (0, _x.mapState)(['counter']),
  events: {
    'index-broadcast': function indexBroadcast() {
      var _ref;

      var $event = (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]);
      console.log("".concat(_this.$name, " receive ").concat($event.name, " from ").concat($event.source.$name));
    }
  },
  watch: {
    num: function num(curVal, oldVal) {
      console.log("\u65E7\u503C\uFF1A".concat(oldVal, "\uFF0C\u65B0\u503C\uFF1A").concat(curVal));
    }
  },
  methods: _objectSpread({}, (0, _x.mapActions)(['increment', 'decrement', 'incrementAsync']), {
    plus: function plus() {
      this.num = this.num + 1;
      console.log('plus tapped in component');
      this.$emit('index-emit', this.num);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  })
}, {info: {"components":{},"on":{}}, handlers: {'14-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.plus($event)
      })();
    
  }},'14-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.minus($event)
      })();
    
  }},'14-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.increment($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.decrement($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.incrementAsync($event)
      })();
    
  }}}, models: {} });