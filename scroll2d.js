/*
TO DO:

	1. Get src of folder
	2. Get folder contents
	3. Folder contents to array
	4. Sort array
	5. Timed function from speed
	6. Get current image from array
	7. Image change src string build
	8. Change src of element

*/

/*
(function ($) {

	var methods = {
		
		init: function (options) {
			
			var p = {
				
				speed: 66,
				type: .png,
				amount: 1,
				href: ./
								
			}
			
			if (options) {
				$.extend(p, options);
			}
			
			
			
		}
		
	}

}


*/

function scroll(directory, amount, speed, type){
	
	//directory = the directory of the images as given through function
	//amount = the amount of images located in the directory
	//speed = the speed of imagae changing
	
	var currentImg;
	var fileListArray = new Array(100).fill(undefined);;
	
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
	setTimeout(while(var i <= amount){
		currentImg = diectory + '/' + fileListArray[i] + '.' + type;
		i++;
		
		//get image frame to change src
		
		var getFrame = document.getElementById(imgframe);
		getFrame.src = currentImg;
		
	}, speed)
	
	if(i > amount){
		i = 0;
	}

}	


