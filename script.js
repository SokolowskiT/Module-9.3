var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = "triceratops",
	dinosaurUpper = dinosaur.toUpperCase(),
	textChanged = text.replace('Velociraptor', dinosaurUpper),
	charToDisplay = textChanged.length/2,
	textFirstHalf = textChanged.substr(0, charToDisplay);

console.log(textFirstHalf);
