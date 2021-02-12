function scroll(var imgframe, var directory, int amount, int speed){
	
	var currentImg;
	var fileListArray[];
	
	//get filenames from folder
	const fs = require('fs');	
	
	fs.readdir(directory, (err, files) => {
		files.forEach(file => {
			fileListArray.push(file);
		});
	});
	
	imgArray.sort();
	
	//get image frame to change src
	var getFrame = document.getElementById($'imgframe');
	getFrame.src = currentImg;

	//create array from file amount
	
	
	
	//change image after interval
	var i = 0;
	setTimeout( while(i <= amount){
		currentImg = ;
		i++;
		
	}, speed)
	
	if(i > amount){
		i = 0;
	}

}