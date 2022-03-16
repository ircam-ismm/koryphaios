inlets = 1;
outlets = 0;

var x0 = 485;
var y0 = 140;
var x0_pres = 0;
var y0_pres = 5;
var widthBloc = 120;

var playkeysObj;
var dictkeysObj;

var midElements = [];
var playkeysParams = [];
var dictkeysParams = [];

function playkeys() {
	var incMess = arrayfromargs(arguments);
	
	patcher.remove(playkeysObj);
	playkeysParams = [];
	
	var j = 0;
	while (j < incMess.length) {
		if (incMess[j] === '[slot') {
			//var slotNumber = incMess[j+1];
			//slotNumber = slotNumber.slice(0, -1);
			playkeysParams.push('slot');
			j += 2;
		} else {
			playkeysParams.push(incMess[j]);
			j++;
		}
	} 
	
	var objName = 'bach.playkeys '
	for (var p = 0; p < incMess.length; p++) {
		objName += incMess[p] + ' ';
	}
	
	objName = objName + '@out m';
	
	playkeysObj = patcher.newdefault(x0, y0, objName);
	playkeysObj.setattr('presentation', 1);
	playkeysObj.setattr('patching_rect', x0, y0, 100*playkeysParams.length, 25);
	playkeysObj.setattr('presentation_rect', x0_pres, y0_pres, 100*playkeysParams.length, 25);
	
	var inlet1 = patcher.getnamed('inlet1');
	patcher.connect(inlet1, 0, playkeysObj, 0);
	buildMidPart();
}

function dictkeys() {
	var incMess = arrayfromargs(arguments);

	patcher.remove(dictkeysObj);
	dictkeysParams = [];
	
	var objName = 'dict.pack '
	for (var p = 0; p < incMess.length; p++) {
		dictkeysParams.push(incMess[p]);
		objName += incMess[p] + ': ';
	}

	dictkeysObj = patcher.newdefault(x0, y0+100, objName);
	dictkeysObj.setattr('presentation', 1);
	dictkeysObj.setattr('patching_rect', x0, y0+100, 100*dictkeysParams.length, 25);
	dictkeysObj.setattr('presentation_rect', x0_pres, y0_pres + 30, 100*dictkeysParams.length, 25);
	
	var dictPackChord = patcher.getnamed('dictPackChord');
	var dictViz = patcher.getnamed('dictViz');
	patcher.connect(dictkeysObj, 0, dictPackChord, 0);
	patcher.connect(dictkeysObj, 0, dictViz, 0);
	buildMidPart();
}


function buildMidPart() {
	for (var i = 0; i < midElements.length; i++) {
		var bloc = midElements[i];
		for (var j = 0; j < bloc.length; j++) {
			var elem = bloc[j];
			patcher.remove(elem);
		}
	}
	
	midElements = [];
	
	var nIn = playkeysParams.length;
	var nOut = dictkeysParams.length;
	
	var nBlocs = Math.max(nIn, nOut);
	
	
	for (var p = 0; p < nBlocs; p++) {
		var bloc = [];
		switch (playkeysParams[p]) {
			case 'cents':
				var obj1 = patcher.newdefault(x0+p*widthBloc, y0+30, 'bach.mc2f @out m');
				var envCollect = patcher.newdefault(x0+p*widthBloc, y0+70, 'kp.env-collect');
				patcher.connect(obj1, 0, envCollect, 0);
				bloc.push(obj1); 
				bloc.push(envCollect);
				break;
			case 'velocity':
				var obj1 = patcher.newdefault(x0+p*widthBloc, y0+30, '/ 127.');
				var obj2 = patcher.newdefault(x0+p*widthBloc, y0+50, 'atodb');
				var envCollect = patcher.newdefault(x0+p*widthBloc, y0+70, 'kp.env-collect');
				patcher.connect(obj1, 0, obj2, 0);
				patcher.connect(obj2, 0, envCollect, 0);
				bloc.push(obj1); 
				bloc.push(obj2); 
				bloc.push(envCollect);
				break;
			case 'duration':
				var obj1 = patcher.newdefault(x0+p*widthBloc, y0+30, '/ 1000.');
				var envCollect = patcher.newdefault(x0+p*widthBloc, y0+70, 'kp.env-collect');
				patcher.connect(obj1, 0, envCollect, 0);
				bloc.push(obj1); 
				bloc.push(envCollect);
				break;
			default:
			 	var envCollect = patcher.newdefault(x0+p*widthBloc, y0+70, 'kp.env-collect');
				bloc.push(envCollect);
				break;
		}
		midElements.push(bloc);
	}
	
	for (var p = 0; p < nIn; p++) {
		var bloc = midElements[p];
		patcher.connect(playkeysObj, p, bloc[0], 0); 
	}
	for (var p = 0; p < nIn; p++) {
		var bloc = midElements[p];
		patcher.connect(bloc[bloc.length-1], 0, dictkeysObj, p); 
	}
}