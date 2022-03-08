inlets = 1;
outlets = 0;

var freePos = [0];
var dispatchStrategies = [];

function anything() {
	var incStrategies = arrayfromargs(arguments);

	for (var i = 0; i < incStrategies.length; i++) {
		if (dispatchStrategies.indexOf(incStrategies[i]) < 0) {
			var stratName = incStrategies[i];
			//create button
			var patch = this.patcher;
			
			var pos = freePos.shift();			
			const row = pos%3
			const column = Math.floor(pos/3)
			const y = 40+row*30;
			const x = 25+column*100;
			
			var mess = patch.newdefault(x, y, 'message');
			mess.set(stratName)
			mess.setattr('patching_rect', x, y, 90., 35.);
			mess.setattr('presentation', 1);
			mess.setattr('varname', stratName);
			
			var dispSetter = patch.getnamed('dispSetter');
			
			patch.connect(mess, 0, dispSetter, 0);	
			
			if (freePos.length === 0) {
				freePos.push(pos+1);
			}
			
			if (pos >= dispatchStrategies.length) {
				dispatchStrategies.push(stratName);
			} else {
				dispatchStrategies[pos] = stratName;
			} 
		}	
	}
	
	var j = 0;
	var pos = 0;
	var newPos = [];
	
	for (var j = 0; j < dispatchStrategies.length; j++) {
		if (incStrategies.indexOf(dispatchStrategies[j]) < 0) {
			var stratName = dispatchStrategies[j];
			//dispatchStrategies.splice(j, 1);
			dispatchStrategies[j] = null;
			//remove button
			var mess = this.patcher.getnamed(stratName);
			this.patcher.remove(mess);
			newPos.push(j);
		} 
	}
	freePos = newPos.concat(freePos);
}


function bang() {
	var test = patcher.getnamed('testmess');
	test.setattr('presentation', 1);
}

//loadbang