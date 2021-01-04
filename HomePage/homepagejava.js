var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'recursos/doutor1.jpg';
	images[1] = 'recursos/doutor2.jpg';
	images[2] = 'recursos/doutor3.jpg';
    images[3] = 'recursos/doutor4.jpg';
    images[4] = 'recursos/doutor5.jpg';
	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
