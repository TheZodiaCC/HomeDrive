function getFileName(myFile){
   var file = myFile.files[0];

   document.getElementById("file_name").innerHTML = file.name;
   document.getElementById("upload_button").style.display = "block";
}