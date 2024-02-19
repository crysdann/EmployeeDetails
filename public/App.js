"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}
var EmployeeSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(EmployeeSearch, _React$Component);
  function EmployeeSearch() {
    _classCallCheck(this, EmployeeSearch);
    return _callSuper(this, EmployeeSearch, arguments);
  }
  _createClass(EmployeeSearch, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "employee-search-container"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Search employee...",
        className: "search-input"
      }));
    }
  }]);
  return EmployeeSearch;
}(React.Component);
function Employeerow(props) {
  var employee = props.employee;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.firstname), /*#__PURE__*/React.createElement("td", null, employee.lastname), /*#__PURE__*/React.createElement("td", null, employee.age), /*#__PURE__*/React.createElement("td", null, employee.dateofjoining instanceof Date ? employee.dateofjoining.toDateString() : ""), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.department), /*#__PURE__*/React.createElement("td", null, employee.employeetype), /*#__PURE__*/React.createElement("td", null, employee.currentstatus));
}
function EmployeeTable(props) {
  var employeeRows = props.employees.map(function (employee) {
    return /*#__PURE__*/React.createElement(Employeerow, {
      key: employee.employeeid,
      employee: employee
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "employee-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "firstname"), /*#__PURE__*/React.createElement("th", null, "lastname"), /*#__PURE__*/React.createElement("th", null, "age"), /*#__PURE__*/React.createElement("th", null, "dateofjoining"), /*#__PURE__*/React.createElement("th", null, "title"), /*#__PURE__*/React.createElement("th", null, "department"), /*#__PURE__*/React.createElement("th", null, "employeetype"), /*#__PURE__*/React.createElement("th", null, "currentstatus"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
}
var EmployeeCreate = /*#__PURE__*/function (_React$Component2) {
  _inherits(EmployeeCreate, _React$Component2);
  function EmployeeCreate() {
    var _this;
    _classCallCheck(this, EmployeeCreate);
    _this = _callSuper(this, EmployeeCreate);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(EmployeeCreate, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.employeeCreate;
      var defaultCurrentStatus = "1";
      var employee = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        age: parseInt(form.age.value, 10),
        dateofjoining: new Date(form.dateofjoining.value).toISOString(),
        title: form.title.value,
        department: form.department.value,
        employeetype: form.employeetype.value,
        currentstatus: defaultCurrentStatus
      };
      this.props.createEmployee(employee);
      form.firstname.value = "";
      form.lastname.value = "";
      form.age.value = "";
      form.dateofjoining.value = "";
      form.title.value = "";
      form.department.value = "";
      form.employeetype.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      var titleOptions = ["Employee", "Manager", "Director", "VP"];
      var departmentOptions = ["IT", "Marketing", "HR", "Engineering"];
      var employeeTypeOptions = ["FullTime", "PartTime", "Contract", "Seasonal"];
      return /*#__PURE__*/React.createElement("form", {
        name: "employeeCreate",
        onSubmit: this.handleSubmit,
        className: "form-container"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "firstname",
        placeholder: "firstname",
        className: "input-field"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "lastname",
        placeholder: "lastname",
        className: "input-field"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "age",
        placeholder: "age",
        className: "input-field"
      }), /*#__PURE__*/React.createElement("input", {
        type: "date",
        name: "dateofjoining",
        placeholder: "dateofjoining",
        className: "input-field"
      }), /*#__PURE__*/React.createElement("select", {
        name: "title",
        defaultValue: "",
        className: "select-field"
      }, /*#__PURE__*/React.createElement("option", {
        value: "",
        disabled: true,
        hidden: true
      }, "Choose Title"), titleOptions.map(function (title) {
        return /*#__PURE__*/React.createElement("option", {
          key: title,
          value: title
        }, title);
      })), /*#__PURE__*/React.createElement("select", {
        name: "department",
        defaultValue: "",
        className: "select-field"
      }, /*#__PURE__*/React.createElement("option", {
        value: "",
        disabled: true,
        hidden: true
      }, "Choose Department"), departmentOptions.map(function (department) {
        return /*#__PURE__*/React.createElement("option", {
          key: department,
          value: department
        }, department);
      })), /*#__PURE__*/React.createElement("select", {
        name: "employeetype",
        defaultValue: "",
        className: "select-field"
      }, /*#__PURE__*/React.createElement("option", {
        value: "",
        disabled: true,
        hidden: true
      }, "Employee Type"), employeeTypeOptions.map(function (employeetype) {
        return /*#__PURE__*/React.createElement("option", {
          key: employeetype,
          value: employeetype
        }, employeetype);
      })), /*#__PURE__*/React.createElement("button", {
        className: "add-button"
      }, "Add"));
    }
  }]);
  return EmployeeCreate;
}(React.Component);
var EmployeeDirectory = /*#__PURE__*/function (_React$Component3) {
  _inherits(EmployeeDirectory, _React$Component3);
  function EmployeeDirectory() {
    var _this2;
    _classCallCheck(this, EmployeeDirectory);
    _this2 = _callSuper(this, EmployeeDirectory);
    _this2.state = {
      employees: []
    };
    _this2.createEmployee = _this2.createEmployee.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(EmployeeDirectory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var query, response, body, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              query = "query{\n      employeeList{\n        employeeid firstname lastname age dateofjoining title department employeetype currentstatus\n      }\n    }";
              _context.next = 3;
              return fetch("/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.text();
            case 6:
              body = _context.sent;
              console.log(body);
              result = JSON.parse(body, jsonDateReviver);
              this.setState({
                employees: result.data.employeeList
              });
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadData() {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }()
  }, {
    key: "createEmployee",
    value: function () {
      var _createEmployee = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(employee) {
        var formattedDateOfJoining, query, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              formattedDateOfJoining = employee.dateofjoining ? "\"".concat(new Date(employee.dateofjoining).toISOString(), "\"") : "null";
              query = "mutation{\n      employeeAdd(employee:{\n          firstname:\"".concat(employee.firstname, "\",\n          lastname:\"").concat(employee.lastname, "\",\n          age:").concat(employee.age, ",\n          dateofjoining:").concat(formattedDateOfJoining, ",\n          title:\"").concat(employee.title, "\",\n          department:\"").concat(employee.department, "\",\n          employeetype:\"").concat(employee.employeetype, "\",\n          currentstatus:\"").concat(employee.currentstatus, "\"\n      }){\n        employeeid\n      }\n    }");
              _context2.next = 4;
              return fetch("/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 4:
              response = _context2.sent;
              this.loadData();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createEmployee(_x) {
        return _createEmployee.apply(this, arguments);
      }
      return createEmployee;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
        className: "employee-details-heading"
      }, "Employee Details"), /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
        employees: this.state.employees
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeCreate, {
        createEmployee: this.createEmployee
      }), /*#__PURE__*/React.createElement("hr", null));
    }
  }]);
  return EmployeeDirectory;
}(React.Component);
var contentdiv = ReactDOM.createRoot(document.getElementById("content"));
var element = /*#__PURE__*/React.createElement(EmployeeDirectory, null);
contentdiv.render(element);