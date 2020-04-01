parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Qd94":[function(require,module,exports) {
"use strict";var e,r,o;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(e=exports.Direction||(exports.Direction={})),function(e){e[e.Base=0]="Base",e[e.Mover=1]="Mover",e[e.Adder=2]="Adder",e[e.Subtractor=3]="Subtractor",e[e.MemoryAssigner=4]="MemoryAssigner",e[e.MemoryAdder=5]="MemoryAdder",e[e.MemorySubtractor=6]="MemorySubtractor",e[e.MemorySplitter=7]="MemorySplitter"}(r=exports.Conveyors||(exports.Conveyors={})),function(e){e[e.A=0]="A",e[e.B=1]="B",e[e.C=2]="C"}(o=exports.MemoryType||(exports.MemoryType={}));
},{}],"jHoq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(){var t=this;this.boxes=[],this.boxIndex=0,this.draw=function(e,i,n,o){t.boxes.forEach(function(t){t.draw(e,i,n,o)})},this.reset=function(e){t.boxIndex=0,t.boxes=[],e&&(document.getElementById("level_name").style.color="green")}}return t.prototype.update=function(t,i,n){0==this.boxes.length?this.boxes.push(new e(Math.floor(i.size/2),0,t.input[this.boxIndex])):this.boxes.forEach(function(t){t.update(i.board)});var o=this.boxes.find(function(t){var e=t.x==Math.floor(i.size/2),n=t.y==i.size;return e&&n});if(o){if(!(o.value==t.output[this.boxIndex]))return void n();this.boxes=[],this.boxIndex++,this.boxIndex>=t.input.length&&n(!0)}this.boxes.find(function(t){var e=t.x<0,n=t.x>=i.size,o=t.y<0,s=t.y>=i.size;return e||n||o||s})&&n()},t}();exports.BoxHandler=t;var e=function(){return function(t,e,i){var n=this;void 0===i&&(i=0),this.update=function(t){t[n.x][n.y].update(n)},this.draw=function(t,e,i,o){t.fillStyle="#000000",t.fillRect(e/o*n.x,i/o*n.y,e/o,i/o),t.fillStyle="#ffffff",t.font="50px sans-serif",t.fillText(n.value.toString(),e/o*n.x,i/o*(n.y+1))},this.value=i,this.x=t,this.y=e}}();exports.Box=e;
},{}],"ugIp":[function(require,module,exports) {
module.exports="base.aaecf010.png";
},{}],"qe1Z":[function(require,module,exports) {
module.exports="down_mover.63a3a8b0.png";
},{}],"iZ0x":[function(require,module,exports) {
module.exports="left_mover.c1a880ef.png";
},{}],"xKsc":[function(require,module,exports) {
module.exports="right_mover.8118e182.png";
},{}],"w72g":[function(require,module,exports) {
module.exports="up_mover.aaecf010.png";
},{}],"BMKk":[function(require,module,exports) {
module.exports={down:require("./down_mover.png"),left:require("./left_mover.png"),right:require("./right_mover.png"),up:require("./up_mover.png")};
},{"./down_mover.png":"qe1Z","./left_mover.png":"iZ0x","./right_mover.png":"xKsc","./up_mover.png":"w72g"}],"zuYV":[function(require,module,exports) {
module.exports="down_adder.da87cc1c.png";
},{}],"JYZi":[function(require,module,exports) {
module.exports="left_adder.5cb2e559.png";
},{}],"AOZl":[function(require,module,exports) {
module.exports="right_adder.a9f6d3d2.png";
},{}],"q1GP":[function(require,module,exports) {
module.exports="up_adder.b81c2717.png";
},{}],"UwzB":[function(require,module,exports) {
module.exports={down:require("./down_adder.png"),left:require("./left_adder.png"),right:require("./right_adder.png"),up:require("./up_adder.png")};
},{"./down_adder.png":"zuYV","./left_adder.png":"JYZi","./right_adder.png":"AOZl","./up_adder.png":"q1GP"}],"I5YL":[function(require,module,exports) {
module.exports="down_subtractor.7b405195.png";
},{}],"VCi9":[function(require,module,exports) {
module.exports="left_subtractor.22e6a8de.png";
},{}],"DIFs":[function(require,module,exports) {
module.exports="right_subtractor.b5e2daa9.png";
},{}],"bemA":[function(require,module,exports) {
module.exports="up_subtractor.e96d10dd.png";
},{}],"DCz6":[function(require,module,exports) {
module.exports={down:require("./down_subtractor.png"),left:require("./left_subtractor.png"),right:require("./right_subtractor.png"),up:require("./up_subtractor.png")};
},{"./down_subtractor.png":"I5YL","./left_subtractor.png":"VCi9","./right_subtractor.png":"DIFs","./up_subtractor.png":"bemA"}],"sJS8":[function(require,module,exports) {
module.exports="down_memory.6440a8fb.png";
},{}],"EsA0":[function(require,module,exports) {
module.exports="left_memory.95d018c8.png";
},{}],"u8Ku":[function(require,module,exports) {
module.exports="right_memory.9c123a69.png";
},{}],"dprY":[function(require,module,exports) {
module.exports="up_memory.cc6b6127.png";
},{}],"bOrH":[function(require,module,exports) {
module.exports={down:require("./down_memory.png"),left:require("./left_memory.png"),right:require("./right_memory.png"),up:require("./up_memory.png")};
},{"./down_memory.png":"sJS8","./left_memory.png":"EsA0","./right_memory.png":"u8Ku","./up_memory.png":"dprY"}],"qc3s":[function(require,module,exports) {
module.exports="down_memory_plus.ea1936c8.png";
},{}],"QJ0S":[function(require,module,exports) {
module.exports="left_memory_plus.a3708abb.png";
},{}],"RIsq":[function(require,module,exports) {
module.exports="right_memory_plus.aaaa7208.png";
},{}],"HuUN":[function(require,module,exports) {
module.exports="up_memory_plus.543809e5.png";
},{}],"CJE3":[function(require,module,exports) {
module.exports={down:require("./down_memory_plus.png"),left:require("./left_memory_plus.png"),right:require("./right_memory_plus.png"),up:require("./up_memory_plus.png")};
},{"./down_memory_plus.png":"qc3s","./left_memory_plus.png":"QJ0S","./right_memory_plus.png":"RIsq","./up_memory_plus.png":"HuUN"}],"Qcfh":[function(require,module,exports) {
module.exports="down_memory_minus.71bef81b.png";
},{}],"jK7t":[function(require,module,exports) {
module.exports="left_memory_minus.439b79e5.png";
},{}],"foNl":[function(require,module,exports) {
module.exports="right_memory_minus.aafe6b27.png";
},{}],"w9fx":[function(require,module,exports) {
module.exports="up_memory_minus.a1d3c8be.png";
},{}],"kFdr":[function(require,module,exports) {
module.exports={down:require("./down_memory_minus.png"),left:require("./left_memory_minus.png"),right:require("./right_memory_minus.png"),up:require("./up_memory_minus.png")};
},{"./down_memory_minus.png":"Qcfh","./left_memory_minus.png":"jK7t","./right_memory_minus.png":"foNl","./up_memory_minus.png":"w9fx"}],"M7NQ":[function(require,module,exports) {
module.exports="down_memory_splitter.5256687c.png";
},{}],"pJIP":[function(require,module,exports) {
module.exports="left_memory_splitter.e4bb7434.png";
},{}],"Ou2x":[function(require,module,exports) {
module.exports="right_memory_splitter.fd2149b2.png";
},{}],"jz2n":[function(require,module,exports) {
module.exports="up_memory_splitter.44513d4e.png";
},{}],"ci8n":[function(require,module,exports) {
module.exports={down:require("./down_memory_splitter.png"),left:require("./left_memory_splitter.png"),right:require("./right_memory_splitter.png"),up:require("./up_memory_splitter.png")};
},{"./down_memory_splitter.png":"M7NQ","./left_memory_splitter.png":"pJIP","./right_memory_splitter.png":"Ou2x","./up_memory_splitter.png":"jz2n"}],"Z9MZ":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./base.png")),t=e(require("./*_mover.png")),u=e(require("./*_adder.png")),o=e(require("./*_subtractor.png")),a=e(require("./*_memory.png")),d=e(require("./*_memory_plus.png")),n=e(require("./*_memory_minus.png")),l=e(require("./*_memory_splitter.png")),f=require("../types"),i=function(e){var r=new Image;return r.src=e,r},s=function(e,r){var t;switch(r){case f.Conveyors.Base:return exports.getBlank();case f.Conveyors.Mover:t=p.mover;break;case f.Conveyors.Adder:t=p.adder;break;case f.Conveyors.Subtractor:t=p.subtractor;break;case f.Conveyors.MemoryAssigner:t=p.memory;break;case f.Conveyors.MemoryAdder:t=p.memory_adder;break;case f.Conveyors.MemorySubtractor:t=p.memory_subtractor;break;case f.Conveyors.MemorySplitter:t=p.memory_splitter}switch(e){case f.Direction.Up:return t.up;case f.Direction.Down:return t.down;case f.Direction.Left:return t.left;case f.Direction.Right:return t.right}},p={mover:{up:i(t.default.up),down:i(t.default.down),left:i(t.default.left),right:i(t.default.right)},adder:{up:i(u.default.up),down:i(u.default.down),left:i(u.default.left),right:i(u.default.right)},subtractor:{up:i(o.default.up),down:i(o.default.down),left:i(o.default.left),right:i(o.default.right)},memory:{up:i(a.default.up),down:i(a.default.down),left:i(a.default.left),right:i(a.default.right)},memory_adder:{up:i(d.default.up),down:i(d.default.down),left:i(d.default.left),right:i(d.default.right)},memory_subtractor:{up:i(n.default.up),down:i(n.default.down),left:i(n.default.left),right:i(n.default.right)},memory_splitter:{up:i(l.default.up),down:i(l.default.down),left:i(l.default.left),right:i(l.default.right)}};exports.default=s,exports.getBlank=function(){return i(r.default)};
},{"./base.png":"ugIp","./*_mover.png":"BMKk","./*_adder.png":"UwzB","./*_subtractor.png":"DCz6","./*_memory.png":"bOrH","./*_memory_plus.png":"CJE3","./*_memory_minus.png":"kFdr","./*_memory_splitter.png":"ci8n","../types":"Qd94"}],"f31C":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../types"),o=t(require("../images/loader")),n=function(){function e(e){this.type=r.Conveyors.Base,this.direction=e}return e.prototype.update=function(e){},e.prototype.draw=function(e,t,r,n,i,a){var c=o.default(this.direction,this.type);e.drawImage(c,t/n*i,r/n*a,t/n,r/n)},e}();exports.Base=n;var i=function(t){function o(e){var o=t.call(this,e)||this;return o.type=r.Conveyors.Mover,o}return e(o,t),o.prototype.update=function(e){switch(t.prototype.update.call(this,e),this.direction){case r.Direction.Right:e.x++;break;case r.Direction.Down:e.y++;break;case r.Direction.Left:e.x--;break;case r.Direction.Up:e.y--}},o}(n);exports.Mover=i;var a=function(t){function o(e){var o=t.call(this,e)||this;return o.type=r.Conveyors.Adder,o}return e(o,t),o.prototype.update=function(e){t.prototype.update.call(this,e),e.value++},o}(i);exports.Adder=a;var c=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=r.Conveyors.Subtractor,e.update=function(r){t.prototype.update.call(e,r),r.value--},e}return e(o,t),o}(i);exports.Subtractor=c;var y=function(t){function o(e,o,n){var i=t.call(this,e)||this;return i.type=r.Conveyors.MemoryAssigner,i.update=function(e){t.prototype.update.call(i,e),console.log(i.memory.A)},i.draw=function(e,o,n,a,c,y){var s;switch(t.prototype.draw.call(i,e,o,n,a,c,y),e.fillStyle="#ff0000",e.font="50px sans-serif",i.memory_type){case r.MemoryType.A:s=i.memory.A;break;case r.MemoryType.B:s=i.memory.B;break;case r.MemoryType.C:s=i.memory.C}e.fillText(s.toString(),o/a*c,n/a*(y+1))},i.memory_type=o,i.memory=n,i}return e(o,t),o}(i);exports.MemoryAssigner=y;var s=function(t){function o(e,o,n){var i=t.call(this,e)||this;return i.type=r.Conveyors.MemoryAdder,i.update=function(e){switch(t.prototype.update.call(i,e),i.memory_type){case r.MemoryType.A:i.memory.A++;break;case r.MemoryType.B:i.memory.B++;break;case r.MemoryType.C:i.memory.C++}},i.memory_type=o,i.memory=n,i}return e(o,t),o}(i);exports.MemoryAdder=s;var p=function(t){function o(e,o,n){var i=t.call(this,e)||this;return i.type=r.Conveyors.MemorySubtractor,i.update=function(e){switch(t.prototype.update.call(i,e),i.memory_type){case r.MemoryType.A:i.memory.A--;break;case r.MemoryType.B:i.memory.B--;break;case r.MemoryType.C:i.memory.C--}},i.memory_type=o,i.memory=n,i}return e(o,t),o}(i);exports.MemorySubtractor=p;var u=function(t){function o(e,o,n){var i=t.call(this,e)||this;return i.type=r.Conveyors.MemorySplitter,i.update=function(e){switch(i.memory_type){case r.MemoryType.A:m(e,i.direction,i.memory.A);break;case r.MemoryType.B:m(e,i.direction,i.memory.B);break;case r.MemoryType.C:m(e,i.direction,i.memory.C)}},i.memory_type=o,i.memory=n,i}return e(o,t),o}(i);function m(e,t,o){if(o>0)switch(t){case r.Direction.Right:e.y--;break;case r.Direction.Down:e.x++;break;case r.Direction.Left:e.y++;break;case r.Direction.Up:e.x--}else if(o<0)switch(t){case r.Direction.Right:e.y++;break;case r.Direction.Down:e.x--;break;case r.Direction.Left:e.y--;break;case r.Direction.Up:e.x++}else switch(t){case r.Direction.Right:e.x++;break;case r.Direction.Down:e.y++;break;case r.Direction.Left:e.x--;break;case r.Direction.Up:e.y--}}exports.MemorySplitter=u;
},{"../types":"Qd94","../images/loader":"Z9MZ"}],"wX7z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./conveyors"),e=require("../types"),i=function(){function i(i){var t=this;this.memory={A:0,B:0,C:0},this.size=i,this.board=new Array(this.size).fill(1).map(function(){return Array(t.size).fill(1).map(function(){return new r.Base(e.Direction.Right)})})}return i.prototype.draw=function(r,e,i){for(var t=0;t<this.size;t++)for(var s=0;s<this.size;s++)this.board[t][s].draw(r,e,i,this.size,t,s)},i}();exports.Board=i;
},{"./conveyors":"f31C","../types":"Qd94"}],"Pk7j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./types"),r=require("./objects/conveyors");exports.inputHandler=function(o){document.onkeydown=function(r){switch(r.key){case"ArrowRight":console.log("right"),o.direction=e.Direction.Right;break;case"ArrowDown":console.log("down"),o.direction=e.Direction.Down;break;case"ArrowLeft":console.log("left"),o.direction=e.Direction.Left;break;case"ArrowUp":console.log("up"),o.direction=e.Direction.Up;break;case"Enter":o.isRunning?o.reset():o.start()}};var t=function(r){switch(r.target.id){case"base":o.selectedPiece=e.Conveyors.Base;break;case"mover":o.selectedPiece=e.Conveyors.Mover;break;case"adder":o.selectedPiece=e.Conveyors.Adder;break;case"subtractor":o.selectedPiece=e.Conveyors.Subtractor;break;case"memory":o.selectedPiece=e.Conveyors.MemoryAssigner;break;case"memory_adder":o.selectedPiece=e.Conveyors.MemoryAdder;break;case"memory_subtractor":o.selectedPiece=e.Conveyors.MemorySubtractor;break;case"memory_splitter":o.selectedPiece=e.Conveyors.MemorySplitter;break;case"memory_a":o.selectedMemory=e.MemoryType.A;break;case"memory_b":o.selectedMemory=e.MemoryType.B;break;case"memory_c":o.selectedMemory=e.MemoryType.C;break;case"start":o.isRunning?o.reset():o.start();break;case"next_level":o.nextLevel();break;case"prev_level":o.prevLevel()}},a=document.getElementsByTagName("button");Array.from(a).forEach(function(e){e.onclick=t});o.canvas.onmousedown=function(t){if(!o.isRunning){var a,c=t.target.clientHeight/o.boardState.size,s=Math.floor(t.offsetX/c),n=Math.floor(t.offsetY/c);switch(o.selectedPiece){case e.Conveyors.Base:a=new r.Base(o.direction);break;case e.Conveyors.Mover:a=new r.Mover(o.direction);break;case e.Conveyors.Adder:a=new r.Adder(o.direction);break;case e.Conveyors.Subtractor:a=new r.Subtractor(o.direction);break;case e.Conveyors.MemoryAssigner:a=new r.MemoryAssigner(o.direction,o.selectedMemory,o.boardState.memory);break;case e.Conveyors.MemoryAdder:a=new r.MemoryAdder(o.direction,o.selectedMemory,o.boardState.memory);break;case e.Conveyors.MemorySubtractor:a=new r.MemorySubtractor(o.direction,o.selectedMemory,o.boardState.memory);break;case e.Conveyors.MemorySplitter:a=new r.MemorySplitter(o.direction,o.selectedMemory,o.boardState.memory)}o.boardState.board[s][n]=a,o.boardState.draw(o.context,o.canvas.width,o.canvas.height)}}};
},{"./types":"Qd94","./objects/conveyors":"f31C"}],"kM9h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={name:"Get a move on",description:"Move the box from top to the bottom using the mover-conveyor",input:[1,2,5],output:[1,2,5],size:3},t={name:"Adding up",description:"Add one to each input using the adder-conveyor",input:[1,5,-1],output:[2,6,0],size:3},o={name:"Take it away",description:"Subtract three from each input using the subtract-conveyor",input:[3,8,0],output:[0,5,-3],size:3},i={name:"Null null null",description:"Turn the input into zeroes using the memory-conveyor",input:[3,8,0],output:[0,0,0],size:5},n={name:"Two and a half boxes",description:"Divide the input by two",input:[2,6,-4],output:[1,3,-2],size:5},u={name:"Two and a half boxes 2: Electric boogaloo",description:"Divide the input by two, round up for odd numbers",input:[2,3,7,-3,-4],output:[1,2,4,-2,-2],size:7},p={name:"Remember the last one",description:"Add the previous output to the input",input:[1,1,1],output:[1,2,3],size:5},r=[e,t,o,i,n,u,p];exports.default=r;
},{}],"PUau":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./types"),n=require("./objects/boxes"),l=require("./objects/board"),i=require("./input"),a=e(require("./levels")),r=require("./images/loader"),o=function(){return function(){var e=this;this.selectedPiece=t.Conveyors.Mover,this.selectedMemory=t.MemoryType.A,this.direction=t.Direction.Down,this.levelIndex=0,this.isRunning=!1,this.nextLevel=function(){e.isRunning||(e.levelIndex=e.levelIndex<a.default.length-1?e.levelIndex+1:e.levelIndex,e.setLevel())},this.prevLevel=function(){e.isRunning||(e.levelIndex=e.levelIndex>0?e.levelIndex-1:e.levelIndex,e.setLevel())},this.setLevel=function(){e.level=a.default[e.levelIndex],e.boardState=new l.Board(e.level.size);var t=128*e.level.size;e.canvas.height=t,e.canvas.width=t,e.draw(),document.getElementById("level_name").innerHTML=e.level.name,document.getElementById("level_name").style.color="black",document.getElementById("level_description").innerHTML=e.level.description,document.getElementById("input").innerHTML="Input: "+e.level.input.toString(),document.getElementById("output").innerHTML="Output: "+e.level.output.toString()},this.update=function(){e.boxHandler.update(e.level,e.boardState,e.reset)},this.draw=function(){e.context.fillStyle="#eeeeee",e.context.fillRect(0,0,e.canvas.width,e.canvas.height),e.boardState.draw(e.context,e.canvas.width,e.canvas.height),e.boxHandler.draw(e.context,e.canvas.width,e.canvas.height,e.boardState.size)},this.start=function(){document.getElementById("level_name").style.color="black",document.getElementById("start").innerHTML="Stop",e.isRunning=!0,e.update(),e.draw(),e.interval=setInterval(function(){e.update(),e.draw()},300)},this.reset=function(t){void 0===t&&(t=!1),document.getElementById("start").innerHTML="Start",e.boxHandler.reset(t),clearInterval(e.interval),e.isRunning=!1,e.boardState.memory.A=0,e.boardState.memory.B=0,e.boardState.memory.C=0,e.draw()},this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.boxHandler=new n.BoxHandler,this.setLevel(),r.getBlank().onload=function(){e.draw()},i.inputHandler(this)}}(),d=new o;exports.default=d;
},{"./types":"Qd94","./objects/boxes":"jHoq","./objects/board":"wX7z","./input":"Pk7j","./levels":"kM9h","./images/loader":"Z9MZ"}],"B6dB":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./state")),i=e(require("./images/loader")),r=function(){var e=document.getElementById("grid"),t=e.parentElement.clientWidth,i=e.parentElement.clientHeight,r=t>i?i:t;e.style.height=r+"px",e.style.width=1.5*r+"px"};window.onload=r,window.onresize=r,i.default,t.default;
},{"./state":"PUau","./images/loader":"Z9MZ"}]},{},["B6dB"], null)
//# sourceMappingURL=src.5d688910.js.map