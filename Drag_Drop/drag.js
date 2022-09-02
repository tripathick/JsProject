const dragArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");
let button = document.querySelector(".button");
let input = document.querySelector("input"); 

let file;

button.onclick = () =>{
    input.click();
}
//When browse
input.addEventListener('change' , function(){
    file = this.files[0];
 
    dragArea.classList.add('active');

    displayFile();
})

// When file is inside the dragArea 
dragArea.addEventListener('dragover' , (event) =>{
    event.preventDefault();
    dragText.textContent = 'Relaese to UpLoad';
    dragArea.classList.add('active');
   //console.log('File is inside the Drag Area');
});


// When file leave the text Area
dragArea.addEventListener('dragleave' , () => {
    dragText.textContent = 'Drag and drop';
    dragArea.classList.remove('active');
   // console.log('File left the drag-Area');
});

//When the file is dropped in dragged area..
dragArea.addEventListener('drop' , (event) =>{
    event.preventDefault();

     file = event.dataTransfer.files[0];
     //console.log("file");

     displayFile();
    
});

function displayFile(){
    let fileType = file.type;
    // console.log(fileType);

    let validExtensions = ['image/jpeg' , 'image/jpg' , 'image/png'];
    
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
           let imgTag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgTag;
               // console.log(fileURL);
        };
        fileReader.readAsDataURL(file);
     }else{
         alert("This is not an Image file..");
          dragArea.classList.remove('active');
     }

     //console.log("the file is dropped in drag area");

}