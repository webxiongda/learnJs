Function.prototype.myCall = function () {
  debugger
  let context = arguments[0] || global;
  context.fn = this;
  var args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  context.fn(...args);
  delete context.fn;
};

Function.prototype.myBind = function () {
  let context = arguments[0] || global;
  context.fn = this;
  let args = arguments.length > 1 ? arguments[1] : [];
  context.fn(...args);
  delete context.fn;
};

Function.prototype.myBind = function () {
  let context = arguments[0] || global;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return function () {
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    context.fn(...args);
    delete context.fn;
  };
};

function show(...args) {
  console.log(...args);
  console.log(this.name);
}

let obj = {
  name: "conghuhu",
};

show.myCall(obj, "1", "2");
show.myCall(obj, ["3", "4"]);
let bind = show.myBind(obj, "5", "6");
bind("7");
