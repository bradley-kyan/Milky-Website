function scroll(var imgframe, var directory, int amount, int speed, var type){
	
	//imgframe = manual set of the current frame
	//directory = the directory of the images as given through function
	//amount = the amount of images located in the directory
	//speed = the speed of imagae changing
	
	var currentImg;
	var fileListArray[];
	
	//get filenames from folder
	const fs = require('fs');	
	
	fs.readdir(directory, (err, files) => {
		files.forEach(file => {
			fileListArray.push(file);
		});
	});
	
	fileListArray.sort();
	

	//create array from file amount
	
	while(fileListArray.length > amount){
		fileListArray.pop();
	}
	
	//change image after interval
	var i = 0;
	setTimeout(while(i <= amount){
		currentImg = diectory + '/' + fileListArray[i] + '.' + type;
		i++;
		
	}, speed)
	
	if(i > amount){
		i = 0;
	}

}	

	//get image frame to change src
	var getFrame = document.getElementById($'imgframe');
	getFrame.src = currentImg;
