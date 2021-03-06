'use strict';

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-15');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// setup file
(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

//jest polyfills
global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};
