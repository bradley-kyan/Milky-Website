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

function scroll(imgframe, directory, speed){
	
	//directory = the directory of the images as given through function
	//amount = the amount of images located in the directory
	//speed = the speed of imagae changing
		console.log(imgframe + ' / ' + directory + ' / ' + speed);

	var currentImg;
	var fileListArray = new Array();
	
	//get filenames from folder

	const fs = require('fs');
	fs.readdir(directory, function (err, files) {
    
	if(err){
	return;
	};
	
    //listing all files using forEach
    files.forEach(function (file) {
		fileListArray.push(file);
    })
	})
	
	fileListArray.sort();
	
	//change image after interval
	var i = 0;
	
	setTimeout(
		function(){	
			while(i <= fileListArray.length)
			{
			
				currentImg = diectory + '/' + fileListArray[i];
				i++;
				
				//get image frame to change src
				document.getElementById(imgframe).src = currentImg;
			
			}
		}, 
	speed);
	
	if(i > fileListArray.length){
		i = 0;
	}
}


