// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Direction;

(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction = exports.Direction || (exports.Direction = {}));

var Conveyors;

(function (Conveyors) {
  Conveyors[Conveyors["Base"] = 0] = "Base";
  Conveyors[Conveyors["Mover"] = 1] = "Mover";
  Conveyors[Conveyors["Adder"] = 2] = "Adder";
  Conveyors[Conveyors["Subtractor"] = 3] = "Subtractor";
  Conveyors[Conveyors["MemoryAssigner"] = 4] = "MemoryAssigner";
  Conveyors[Conveyors["MemoryAdder"] = 5] = "MemoryAdder";
  Conveyors[Conveyors["MemorySubtractor"] = 6] = "MemorySubtractor";
  Conveyors[Conveyors["MemorySplitter"] = 7] = "MemorySplitter";
  Conveyors[Conveyors["Returner"] = 8] = "Returner";
})(Conveyors = exports.Conveyors || (exports.Conveyors = {}));

var MemoryType;

(function (MemoryType) {
  MemoryType[MemoryType["A"] = 0] = "A";
  MemoryType[MemoryType["B"] = 1] = "B";
  MemoryType[MemoryType["C"] = 2] = "C";
})(MemoryType = exports.MemoryType || (exports.MemoryType = {}));
},{}],"src/images/base.png":[function(require,module,exports) {
module.exports = "/base.b0b1b963.png";
},{}],"src/images/down_mover.png":[function(require,module,exports) {
module.exports = "/down_mover.2b389d48.png";
},{}],"src/images/left_mover.png":[function(require,module,exports) {
module.exports = "/left_mover.f72c2cc9.png";
},{}],"src/images/right_mover.png":[function(require,module,exports) {
module.exports = "/right_mover.9675724f.png";
},{}],"src/images/up_mover.png":[function(require,module,exports) {
module.exports = "/up_mover.9c888df7.png";
},{}],"src/images/*_mover.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_mover.png"),
  "left": require("./left_mover.png"),
  "right": require("./right_mover.png"),
  "up": require("./up_mover.png")
};
},{"./down_mover.png":"src/images/down_mover.png","./left_mover.png":"src/images/left_mover.png","./right_mover.png":"src/images/right_mover.png","./up_mover.png":"src/images/up_mover.png"}],"src/images/down_adder.png":[function(require,module,exports) {
module.exports = "/down_adder.ab8fce9d.png";
},{}],"src/images/left_adder.png":[function(require,module,exports) {
module.exports = "/left_adder.23d56d3f.png";
},{}],"src/images/right_adder.png":[function(require,module,exports) {
module.exports = "/right_adder.2fed5c8a.png";
},{}],"src/images/up_adder.png":[function(require,module,exports) {
module.exports = "/up_adder.47d0df9f.png";
},{}],"src/images/*_adder.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_adder.png"),
  "left": require("./left_adder.png"),
  "right": require("./right_adder.png"),
  "up": require("./up_adder.png")
};
},{"./down_adder.png":"src/images/down_adder.png","./left_adder.png":"src/images/left_adder.png","./right_adder.png":"src/images/right_adder.png","./up_adder.png":"src/images/up_adder.png"}],"src/images/down_subtractor.png":[function(require,module,exports) {
module.exports = "/down_subtractor.84a220a4.png";
},{}],"src/images/left_subtractor.png":[function(require,module,exports) {
module.exports = "/left_subtractor.e3328405.png";
},{}],"src/images/right_subtractor.png":[function(require,module,exports) {
module.exports = "/right_subtractor.72c2f91c.png";
},{}],"src/images/up_subtractor.png":[function(require,module,exports) {
module.exports = "/up_subtractor.81beb04d.png";
},{}],"src/images/*_subtractor.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_subtractor.png"),
  "left": require("./left_subtractor.png"),
  "right": require("./right_subtractor.png"),
  "up": require("./up_subtractor.png")
};
},{"./down_subtractor.png":"src/images/down_subtractor.png","./left_subtractor.png":"src/images/left_subtractor.png","./right_subtractor.png":"src/images/right_subtractor.png","./up_subtractor.png":"src/images/up_subtractor.png"}],"src/images/down_memory.png":[function(require,module,exports) {
module.exports = "/down_memory.325a0e3b.png";
},{}],"src/images/left_memory.png":[function(require,module,exports) {
module.exports = "/left_memory.bfd1003f.png";
},{}],"src/images/right_memory.png":[function(require,module,exports) {
module.exports = "/right_memory.020b46b2.png";
},{}],"src/images/up_memory.png":[function(require,module,exports) {
module.exports = "/up_memory.4f8ee76e.png";
},{}],"src/images/*_memory.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory.png"),
  "left": require("./left_memory.png"),
  "right": require("./right_memory.png"),
  "up": require("./up_memory.png")
};
},{"./down_memory.png":"src/images/down_memory.png","./left_memory.png":"src/images/left_memory.png","./right_memory.png":"src/images/right_memory.png","./up_memory.png":"src/images/up_memory.png"}],"src/images/down_memory_plus.png":[function(require,module,exports) {
module.exports = "/down_memory_plus.bba4f085.png";
},{}],"src/images/left_memory_plus.png":[function(require,module,exports) {
module.exports = "/left_memory_plus.8b0b952c.png";
},{}],"src/images/right_memory_plus.png":[function(require,module,exports) {
module.exports = "/right_memory_plus.cb21ce10.png";
},{}],"src/images/up_memory_plus.png":[function(require,module,exports) {
module.exports = "/up_memory_plus.7b7ff77a.png";
},{}],"src/images/*_memory_plus.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_plus.png"),
  "left": require("./left_memory_plus.png"),
  "right": require("./right_memory_plus.png"),
  "up": require("./up_memory_plus.png")
};
},{"./down_memory_plus.png":"src/images/down_memory_plus.png","./left_memory_plus.png":"src/images/left_memory_plus.png","./right_memory_plus.png":"src/images/right_memory_plus.png","./up_memory_plus.png":"src/images/up_memory_plus.png"}],"src/images/down_memory_minus.png":[function(require,module,exports) {
module.exports = "/down_memory_minus.8ad3ebea.png";
},{}],"src/images/left_memory_minus.png":[function(require,module,exports) {
module.exports = "/left_memory_minus.665b6d00.png";
},{}],"src/images/right_memory_minus.png":[function(require,module,exports) {
module.exports = "/right_memory_minus.e9817950.png";
},{}],"src/images/up_memory_minus.png":[function(require,module,exports) {
module.exports = "/up_memory_minus.409459ac.png";
},{}],"src/images/*_memory_minus.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_minus.png"),
  "left": require("./left_memory_minus.png"),
  "right": require("./right_memory_minus.png"),
  "up": require("./up_memory_minus.png")
};
},{"./down_memory_minus.png":"src/images/down_memory_minus.png","./left_memory_minus.png":"src/images/left_memory_minus.png","./right_memory_minus.png":"src/images/right_memory_minus.png","./up_memory_minus.png":"src/images/up_memory_minus.png"}],"src/images/down_memory_splitter.png":[function(require,module,exports) {
module.exports = "/down_memory_splitter.d8a3c2a9.png";
},{}],"src/images/left_memory_splitter.png":[function(require,module,exports) {
module.exports = "/left_memory_splitter.fc6a6159.png";
},{}],"src/images/right_memory_splitter.png":[function(require,module,exports) {
module.exports = "/right_memory_splitter.2a3810d5.png";
},{}],"src/images/up_memory_splitter.png":[function(require,module,exports) {
module.exports = "/up_memory_splitter.3afc5778.png";
},{}],"src/images/*_memory_splitter.png":[function(require,module,exports) {
module.exports = {
  "down": require("./down_memory_splitter.png"),
  "left": require("./left_memory_splitter.png"),
  "right": require("./right_memory_splitter.png"),
  "up": require("./up_memory_splitter.png")
};
},{"./down_memory_splitter.png":"src/images/down_memory_splitter.png","./left_memory_splitter.png":"src/images/left_memory_splitter.png","./right_memory_splitter.png":"src/images/right_memory_splitter.png","./up_memory_splitter.png":"src/images/up_memory_splitter.png"}],"src/image-loader.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var base_png_1 = __importDefault(require("./images/base.png"));

var __mover_png_1 = __importDefault(require("./images/*_mover.png"));

var __adder_png_1 = __importDefault(require("./images/*_adder.png"));

var __subtractor_png_1 = __importDefault(require("./images/*_subtractor.png"));

var __memory_png_1 = __importDefault(require("./images/*_memory.png"));

var __memory_plus_png_1 = __importDefault(require("./images/*_memory_plus.png"));

var __memory_minus_png_1 = __importDefault(require("./images/*_memory_minus.png"));

var __memory_splitter_png_1 = __importDefault(require("./images/*_memory_splitter.png"));

var types_1 = require("./types");

var loadImage = function loadImage(src) {
  var img = new Image();
  img.src = src;
  return img;
};

exports.getImage = function (direction, type) {
  var imageType;

  switch (type) {
    case types_1.Conveyors.Base:
      return images.base;

    case types_1.Conveyors.Mover:
      imageType = images.mover;
      break;

    case types_1.Conveyors.Adder:
      imageType = images.adder;
      break;

    case types_1.Conveyors.Subtractor:
      imageType = images.subtractor;
      break;

    case types_1.Conveyors.MemoryAssigner:
      imageType = images.memory;
      break;

    case types_1.Conveyors.MemoryAdder:
      imageType = images.memory_adder;
      break;

    case types_1.Conveyors.MemorySubtractor:
      imageType = images.memory_subtractor;
      break;

    case types_1.Conveyors.MemorySplitter:
      imageType = images.memory_splitter;
      break;

    case types_1.Conveyors.Returner:
      imageType = images.memory_splitter;
      break;
  }

  switch (direction) {
    case types_1.Direction.Up:
      return imageType.up;

    case types_1.Direction.Down:
      return imageType.down;

    case types_1.Direction.Left:
      return imageType.left;

    case types_1.Direction.Right:
      return imageType.right;
  }
};

var images = {
  base: loadImage(base_png_1.default),
  mover: {
    up: loadImage(__mover_png_1.default.up),
    down: loadImage(__mover_png_1.default.down),
    left: loadImage(__mover_png_1.default.left),
    right: loadImage(__mover_png_1.default.right)
  },
  adder: {
    up: loadImage(__adder_png_1.default.up),
    down: loadImage(__adder_png_1.default.down),
    left: loadImage(__adder_png_1.default.left),
    right: loadImage(__adder_png_1.default.right)
  },
  subtractor: {
    up: loadImage(__subtractor_png_1.default.up),
    down: loadImage(__subtractor_png_1.default.down),
    left: loadImage(__subtractor_png_1.default.left),
    right: loadImage(__subtractor_png_1.default.right)
  },
  memory: {
    up: loadImage(__memory_png_1.default.up),
    down: loadImage(__memory_png_1.default.down),
    left: loadImage(__memory_png_1.default.left),
    right: loadImage(__memory_png_1.default.right)
  },
  memory_adder: {
    up: loadImage(__memory_plus_png_1.default.up),
    down: loadImage(__memory_plus_png_1.default.down),
    left: loadImage(__memory_plus_png_1.default.left),
    right: loadImage(__memory_plus_png_1.default.right)
  },
  memory_subtractor: {
    up: loadImage(__memory_minus_png_1.default.up),
    down: loadImage(__memory_minus_png_1.default.down),
    left: loadImage(__memory_minus_png_1.default.left),
    right: loadImage(__memory_minus_png_1.default.right)
  },
  memory_splitter: {
    up: loadImage(__memory_splitter_png_1.default.up),
    down: loadImage(__memory_splitter_png_1.default.down),
    left: loadImage(__memory_splitter_png_1.default.left),
    right: loadImage(__memory_splitter_png_1.default.right)
  }
};
},{"./images/base.png":"src/images/base.png","./images/*_mover.png":"src/images/*_mover.png","./images/*_adder.png":"src/images/*_adder.png","./images/*_subtractor.png":"src/images/*_subtractor.png","./images/*_memory.png":"src/images/*_memory.png","./images/*_memory_plus.png":"src/images/*_memory_plus.png","./images/*_memory_minus.png":"src/images/*_memory_minus.png","./images/*_memory_splitter.png":"src/images/*_memory_splitter.png","./types":"src/types.ts"}],"src/objects/conveyors.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("../types");

var image_loader_1 = require("../image-loader");

function ConveyorFactory(type, direction, memory_type, memory) {
  switch (type) {
    case types_1.Conveyors.Base:
      return new Base(direction);

    case types_1.Conveyors.Mover:
      return new Mover(direction);

    case types_1.Conveyors.Adder:
      return new Adder(direction);

    case types_1.Conveyors.Subtractor:
      return new Subtractor(direction);

    case types_1.Conveyors.MemoryAssigner:
      return new MemoryAssigner(direction, memory_type, memory);

    case types_1.Conveyors.MemoryAdder:
      return new MemoryAdder(direction, memory_type, memory);

    case types_1.Conveyors.MemorySubtractor:
      return new MemorySubtractor(direction, memory_type, memory);

    case types_1.Conveyors.MemorySplitter:
      return new MemorySplitter(direction, memory_type, memory);

    case types_1.Conveyors.Returner:
      return new Returner(direction);

    default:
      return new Base(direction);
  }
}

exports.ConveyorFactory = ConveyorFactory;

var Base =
/** @class */
function () {
  function Base(direction) {
    this.type = types_1.Conveyors.Base;
    this.direction = direction;
  }

  Base.prototype.update = function (box) {};

  ;

  Base.prototype.draw = function (ctx, width, height, size, x, y) {
    var img = image_loader_1.getImage(this.direction, this.type);
    ctx.drawImage(img, width / size * x, height / size * y, width / size, height / size);
  };

  return Base;
}();

exports.Base = Base;

var Returner =
/** @class */
function (_super) {
  __extends(Returner, _super);

  function Returner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.type = types_1.Conveyors.Returner;
    return _this;
  }

  Returner.prototype.update = function (box) {
    box.returned = true;
  };

  return Returner;
}(Base);

exports.Returner = Returner;

var Mover =
/** @class */
function (_super) {
  __extends(Mover, _super);

  function Mover(direction) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.Mover;
    return _this;
  }

  Mover.prototype.update = function (box) {
    switch (this.direction) {
      case types_1.Direction.Right:
        box.x++;
        break;

      case types_1.Direction.Down:
        box.y++;
        break;

      case types_1.Direction.Left:
        box.x--;
        break;

      case types_1.Direction.Up:
        box.y--;
        break;
    }
  };

  return Mover;
}(Base);

exports.Mover = Mover;

var Adder =
/** @class */
function (_super) {
  __extends(Adder, _super);

  function Adder(direction) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.Adder;
    return _this;
  }

  Adder.prototype.update = function (box) {
    _super.prototype.update.call(this, box);

    box.value++;
  };

  return Adder;
}(Mover);

exports.Adder = Adder;

var Subtractor =
/** @class */
function (_super) {
  __extends(Subtractor, _super);

  function Subtractor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.type = types_1.Conveyors.Subtractor;

    _this.update = function (box) {
      _super.prototype.update.call(_this, box);

      box.value--;
    };

    return _this;
  }

  return Subtractor;
}(Mover);

exports.Subtractor = Subtractor;

var MemoryAssigner =
/** @class */
function (_super) {
  __extends(MemoryAssigner, _super);

  function MemoryAssigner(direction, memory_type, memory) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.MemoryAssigner;

    _this.update = function (box) {
      _super.prototype.update.call(_this, box);

      switch (_this.memory_type) {
        case types_1.MemoryType.A:
          _this.memory.A = box.value;
          break;

        case types_1.MemoryType.B:
          _this.memory.B = box.value;
          break;

        case types_1.MemoryType.C:
          _this.memory.C = box.value;
          break;
      }
    };

    _this.memory_type = memory_type;
    _this.memory = memory;
    return _this;
  }

  return MemoryAssigner;
}(Mover);

exports.MemoryAssigner = MemoryAssigner;

var MemoryAdder =
/** @class */
function (_super) {
  __extends(MemoryAdder, _super);

  function MemoryAdder(direction, memory_type, memory) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.MemoryAdder;

    _this.update = function (box) {
      _super.prototype.update.call(_this, box);

      switch (_this.memory_type) {
        case types_1.MemoryType.A:
          _this.memory.A++;
          break;

        case types_1.MemoryType.B:
          _this.memory.B++;
          break;

        case types_1.MemoryType.C:
          _this.memory.C++;
          break;
      }
    };

    _this.memory_type = memory_type;
    _this.memory = memory;
    return _this;
  }

  return MemoryAdder;
}(Mover);

exports.MemoryAdder = MemoryAdder;

var MemorySubtractor =
/** @class */
function (_super) {
  __extends(MemorySubtractor, _super);

  function MemorySubtractor(direction, memory_type, memory) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.MemorySubtractor;

    _this.update = function (box) {
      _super.prototype.update.call(_this, box);

      switch (_this.memory_type) {
        case types_1.MemoryType.A:
          _this.memory.A--;
          break;

        case types_1.MemoryType.B:
          _this.memory.B--;
          break;

        case types_1.MemoryType.C:
          _this.memory.C--;
          break;
      }
    };

    _this.memory_type = memory_type;
    _this.memory = memory;
    return _this;
  }

  return MemorySubtractor;
}(Mover);

exports.MemorySubtractor = MemorySubtractor;

var MemorySplitter =
/** @class */
function (_super) {
  __extends(MemorySplitter, _super);

  function MemorySplitter(direction, memory_type, memory) {
    var _this = _super.call(this, direction) || this;

    _this.type = types_1.Conveyors.MemorySplitter;

    _this.update = function (box) {
      switch (_this.memory_type) {
        case types_1.MemoryType.A:
          Splitter(box, _this.direction, _this.memory.A);
          break;

        case types_1.MemoryType.B:
          Splitter(box, _this.direction, _this.memory.B);
          break;

        case types_1.MemoryType.C:
          Splitter(box, _this.direction, _this.memory.C);
          break;
      }
    };

    _this.memory_type = memory_type;
    _this.memory = memory;
    return _this;
  }

  return MemorySplitter;
}(Mover);

exports.MemorySplitter = MemorySplitter;

function Splitter(box, direction, value) {
  if (value > 0) {
    switch (direction) {
      case types_1.Direction.Right:
        box.y--;
        break;

      case types_1.Direction.Down:
        box.x++;
        break;

      case types_1.Direction.Left:
        box.y++;
        break;

      case types_1.Direction.Up:
        box.x--;
        break;
    } // If value < 0, go to the left

  } else if (value < 0) {
    switch (direction) {
      case types_1.Direction.Right:
        box.y++;
        break;

      case types_1.Direction.Down:
        box.x--;
        break;

      case types_1.Direction.Left:
        box.y--;
        break;

      case types_1.Direction.Up:
        box.x++;
        break;
    } // If value == 0, follow direction

  } else {
    switch (direction) {
      case types_1.Direction.Right:
        box.x++;
        break;

      case types_1.Direction.Down:
        box.y++;
        break;

      case types_1.Direction.Left:
        box.x--;
        break;

      case types_1.Direction.Up:
        box.y--;
        break;
    }
  }
}
},{"../types":"src/types.ts","../image-loader":"src/image-loader.ts"}],"src/state.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("./types");

var conveyors_1 = require("./objects/conveyors");

var StateClass =
/** @class */
function () {
  function StateClass() {
    var _this = this;

    this.menu = {
      selectedConveyor: types_1.Conveyors.Base,
      selectedMemory: types_1.MemoryType.A,
      selectedDirection: types_1.Direction.Down
    };
    this.level = {
      size: 3,
      initialInput: [0, 0, 0],
      input: [],
      expectedOutput: [1, 1, 1],
      actualOutput: []
    };
    this.box = {
      x: 0,
      y: 0,
      value: 0,
      returned: false
    };
    this.boxOperations = {};
    this.board = {
      memory: {
        A: 0,
        B: 0,
        C: 0
      },
      resetMemory: function resetMemory() {
        _this.board.memory.A = 0;
        _this.board.memory.B = 0;
        _this.board.memory.C = 0;
      },
      grid: [],
      createGrid: function createGrid(size) {
        var grid = Array(size).fill(undefined).map(function () {
          return Array(size).fill(undefined);
        });
        _this.board.grid = grid.map(function (row) {
          return row.map(function () {
            return conveyors_1.ConveyorFactory(types_1.Conveyors.Base, types_1.Direction.Up, undefined, undefined);
          });
        });
      },
      resetGrid: function resetGrid() {
        _this.board.createGrid(_this.level.size);

        _this.board.grid[0][0] = conveyors_1.ConveyorFactory(types_1.Conveyors.Mover, types_1.Direction.Down, undefined, undefined);
      },
      updateGrid: function updateGrid(x, y) {
        _this.board.grid[x][y] = conveyors_1.ConveyorFactory(_this.menu.selectedConveyor, _this.menu.selectedDirection, _this.menu.selectedMemory, _this.board.memory);
      }
    };
    this.levelIndex = 0;
    this.isRunning = false;
    this.board.resetGrid();
    this.box = undefined;
  }

  return StateClass;
}();

exports.StateClass = StateClass;
},{"./types":"src/types.ts","./objects/conveyors":"src/objects/conveyors.ts"}],"src/utils/stringTo.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("../types");

exports.stringToDirection = function (name) {
  switch (name) {
    case 'up':
      return types_1.Direction.Up;

    case 'down':
      return types_1.Direction.Down;

    case 'left':
      return types_1.Direction.Left;

    case 'right':
      return types_1.Direction.Right;
  }
};

exports.stringToConveyor = function (name) {
  switch (name) {
    case 'base':
      return types_1.Conveyors.Base;

    case 'mover':
      return types_1.Conveyors.Mover;

    case 'adder':
      return types_1.Conveyors.Adder;

    case 'subtractor':
      return types_1.Conveyors.Subtractor;

    case 'memory_assigner':
      return types_1.Conveyors.MemoryAssigner;

    case 'memory_adder':
      return types_1.Conveyors.MemoryAdder;

    case 'memory_subtractor':
      return types_1.Conveyors.MemorySubtractor;

    case 'memory_splitter':
      return types_1.Conveyors.MemorySplitter;

    case 'returner':
      return types_1.Conveyors.Returner;
  }
};
},{"../types":"src/types.ts"}],"src/view.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types_1 = require("./types");

var image_loader_1 = require("./image-loader");

var stringTo_1 = require("./utils/stringTo");

var ViewClass =
/** @class */
function () {
  function ViewClass(direction) {
    var _this = this;

    this.drawBox = function (box, size) {
      if (box == undefined) return;
      var width = _this.canvas.width;
      var height = _this.canvas.height;
      _this.ctx.fillStyle = "#000000";

      _this.ctx.fillRect(width / size * box.x, height / size * box.y, width / size, height / size);
    };

    this.drawCells = function (grid, size) {
      var width = _this.canvas.width;
      var height = _this.canvas.height;

      for (var x = 0; x < grid.length; x++) {
        for (var y = 0; y < grid.length; y++) {
          var conveyor = grid[x][y];
          var img = image_loader_1.getImage(conveyor.direction, conveyor.type);

          _this.ctx.drawImage(img, width / size * x, height / size * y, width / size, height / size); // TODO: Modify to draw 0,0 as special cell

        }
      }
    };

    this.initializeCanvas = function () {
      // TODO: Resize on level change
      _this.canvas.setAttribute("height", "48");

      _this.canvas.setAttribute("width", "48");

      _this.ctx.fillStyle = "#eeeeee";

      _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
    };

    this.setConveyorButtonBorderColor = function (element) {
      var buttons = document.querySelectorAll(".conveyor_buttons");
      buttons.forEach(function (button) {
        button.style.borderColor = "#000000";
      });
      element.style.borderColor = "#00FF00";
    };

    this.initializeButtons = function (direction) {
      _this.updateConveyorButtonImages(direction);

      _this.directionButtons.forEach(function (element) {
        var direction = undefined;

        switch (element.id) {
          case 'up':
            direction = types_1.Direction.Up;
            break;

          case 'down':
            direction = types_1.Direction.Down;
            break;

          case 'left':
            direction = types_1.Direction.Left;
            break;

          case 'right':
            direction = types_1.Direction.Right;
            break;
        }

        var imageSource = image_loader_1.getImage(direction, types_1.Conveyors.Mover).src;
        element.setAttribute('src', imageSource);
      });

      document.querySelector("#base").style.borderColor = "#00FF00";

      _this.menuButtons.forEach(function (element) {
        element.ondragstart = function (e) {
          e.preventDefault();
        };
      });
    };

    this.updateConveyorButtonImages = function (direction) {
      _this.conveyorButtons.forEach(function (element) {
        var imageSource = image_loader_1.getImage(direction, stringTo_1.stringToConveyor(element.getAttribute('id'))).src;
        element.setAttribute('src', imageSource);
      });
    };

    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.initializeCanvas();
    this.menuButtons = document.querySelectorAll(".menu_buttons");
    this.conveyorButtons = document.querySelectorAll(".conveyor_buttons");
    this.directionButtons = document.querySelectorAll(".direction_buttons");
    this.initializeButtons(direction);
  }

  return ViewClass;
}();

exports.ViewClass = ViewClass;
},{"./types":"src/types.ts","./image-loader":"src/image-loader.ts","./utils/stringTo":"src/utils/stringTo.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var state_1 = require("./state");

var view_1 = require("./view");

var stringTo_1 = require("./utils/stringTo");

var setSize = function setSize() {
  var grid = document.getElementById('grid');
  var width = grid.parentElement.clientWidth;
  var height = grid.parentElement.clientHeight;
  var size = width > height ? height : width;
  grid.style.height = size + "px";
  grid.style.width = size * 1.5 + "px";

  if (width > height * 1.5) {
    grid.style.height = height + "px";
    grid.style.width = height * 1.5 + "px";
    console.log("height");
  }

  if (height * 1.5 > width) {
    grid.style.height = width * 2 / 3 + "px";
    grid.style.width = width + "px";
    console.log("width");
  }
};

var Controller =
/** @class */
function () {
  function Controller() {
    var _this = this;

    this.gameLoop = {
      // Functions and data that relates to the main gameloop
      timerId: undefined,
      isRunning: false,
      update: function update() {
        // TODO: Move most of this into state
        if (_this.state.box == undefined) {
          _this.state.box = {
            x: 0,
            y: 0,
            value: _this.state.level.input.shift(),
            returned: false
          };
        } else {
          var x = _this.state.box.x;
          var y = _this.state.box.y;

          _this.state.board.grid[x][y].update(_this.state.box);
        }

        if (_this.state.box.returned) {
          // TODO: Move into state as function
          _this.state.level.actualOutput.push(_this.state.box.value);

          _this.state.box = undefined;
        }

        if (_this.gameLoop.failureStateDetector()) {
          _this.gameLoop.stop();

          console.log("failed");
          return;
        }

        if (_this.state.level.actualOutput.length === _this.state.level.expectedOutput.length) {
          _this.gameLoop.stop();

          console.log("ya did it"); // TODO: Add level completion handling

          return;
        }

        _this.gameLoop.draw();
      },
      draw: function draw() {
        _this.view.drawCells(_this.state.board.grid, _this.state.level.size);

        _this.view.drawBox(_this.state.box, _this.state.level.size);
      },
      failureStateDetector: function failureStateDetector() {
        // TODO: Move into state
        var wrongNumber = !_this.state.level.actualOutput.every(function (value, index) {
          return value === _this.state.level.expectedOutput[index];
        });

        if (_this.state.box === undefined) {
          return wrongNumber;
        }

        var failure = _this.state.box.x < 0 || _this.state.box.y < 0 || _this.state.box.x >= _this.state.level.size || _this.state.box.y >= _this.state.level.size; // TODO: Add displaying reason for failure

        return failure;
      },
      start: function start() {
        if (_this.gameLoop.isRunning) return;
        _this.gameLoop.isRunning = true;
        _this.state.level.input = __spreadArrays(_this.state.level.initialInput);
        _this.gameLoop.timerId = setInterval(_this.gameLoop.update, 300);
      },
      stop: function stop() {
        _this.gameLoop.isRunning = false;
        clearInterval(_this.gameLoop.timerId);
        _this.state.box = undefined;
        _this.state.board.memory = {
          A: 0,
          B: 0,
          C: 0
        };
        _this.state.level.actualOutput = [];

        _this.gameLoop.draw();
      }
    };

    this.conveyorButtonOnClick = function (e) {
      var element = e.target;
      _this.state.menu.selectedConveyor = stringTo_1.stringToConveyor(element.id);

      _this.view.setConveyorButtonBorderColor(element);
    };

    this.directionButtonOnClick = function (e) {
      var element = e.target;
      _this.state.menu.selectedDirection = stringTo_1.stringToDirection(element.id);

      _this.view.updateConveyorButtonImages(_this.state.menu.selectedDirection);
    };

    this.canvasOnClick = function (e) {
      if (_this.gameLoop.isRunning) return;
      var divisor = e.target.clientHeight / _this.state.level.size;
      var xclick = Math.floor(e.offsetX / divisor);
      var yclick = Math.floor(e.offsetY / divisor);

      if (xclick == 0 && yclick == 0) {
        return;
      }

      _this.state.board.updateGrid(xclick, yclick);

      _this.gameLoop.draw();
    };

    this.state = new state_1.StateClass();
    this.view = new view_1.ViewClass(this.state.menu.selectedDirection);
    var canvas = document.querySelector("#canvas");
    canvas.onclick = this.canvasOnClick;
    var conveyorButtons = document.querySelectorAll(".conveyor_buttons");
    conveyorButtons.forEach(function (button) {
      button.onclick = _this.conveyorButtonOnClick;
    });
    var directionButtons = document.querySelectorAll(".direction_buttons");
    directionButtons.forEach(function (button) {
      button.onclick = _this.directionButtonOnClick;
    }); // TEMP remove later

    document.querySelector("#tmpbutton").onclick = this.gameLoop.start;
    document.querySelector("#tmpbutton2").onclick = this.gameLoop.stop;
    document.querySelector("#mover").onload = this.gameLoop.draw; // TEMP
  }

  return Controller;
}();

window.onload = setSize;
window.onresize = setSize;
new Controller();
},{"./state":"src/state.ts","./view":"src/view.ts","./utils/stringTo":"src/utils/stringTo.ts"}],"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37931" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map