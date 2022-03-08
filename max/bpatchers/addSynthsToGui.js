inlets = 1;
outlets = 0;

var freePos = [0];
var synthsList = [];

function anything() {
	var incSynths = arrayfromargs(arguments);

	for (var i = 0; i < incSynths.length; i++) {
		if (synthsList.indexOf(incSynths[i]) < 0) {
			var synthName = incSynths[i];
			//create button
			var patch = this.patcher;
			
			var pos = freePos.shift();			
			const row = pos%4
			const column = Math.floor(pos/4)
			const y = 100+row*30;
			const x = 75+column*100;
			
			var mess = patch.newdefault(x, y, 'message');
			mess.set(synthName)
			mess.setattr('patching_rect', x, y, 90., 35.);
			mess.setattr('presentation', 1);
			mess.setattr('varname', synthName);
			
			var dispSetter = patch.getnamed('synthSetter');
			
			patch.connect(mess, 0, dispSetter, 0);	
			
			if (freePos.length === 0) {
				freePos.push(pos+1);
			}
			
			if (pos >= synthsList.length) {
				synthsList.push(synthName);
			} else {
				synthsList[pos] = synthName;
			} 
		}	
	}
	
	var j = 0;
	var pos = 0;
	var newPos = [];
	
	for (var j = 0; j < synthsList.length; j++) {
		if (incSynths.indexOf(synthsList[j]) < 0) {
			var synthName = synthsList[j];
			//dispatchStrategies.splice(j, 1);
			synthsList[j] = null;
			//remove button
			var mess = this.patcher.getnamed(synthName);
			this.patcher.remove(mess);
			newPos.push(j);
		} 
	}
	freePos = newPos.concat(freePos);
}


function bang() {
	post(synthsList);
	post();
}

//loadbang