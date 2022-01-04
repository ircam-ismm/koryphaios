var data = {
  triggers: [],
};

var dict = new Dict('triggers');

function triggers() {
  var arr = arrayfromargs(arguments);

  data.triggers = [];
  var numElements = 2;
  var numTriggers = arr.length / numElements;
  
  for (var i = 0; i < numTriggers; i++) {

    var x = arr[i * numElements + 0];
    var y = arr[i * numElements + 1];


    if (x != -1 && y != -1) {
      var trigger = { x: x, y: y };
      data.triggers.push(trigger);
    }
  }

  dict.parse(JSON.stringify(data));

  outlet(0, 'dictionary', 'triggers');
}
