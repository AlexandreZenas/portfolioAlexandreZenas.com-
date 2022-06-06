
var i = 0;
var images = [];
var slideTime = 8000; // 8 seconds
var animation01 = document.querySelectorAll('.section-paginaInicial')[0];

images[0] = 'section-paginaInicial';
images[1] = 'background01';
images[2] = 'background02';

function changePicture() {
  animation01.classList.add(images[i]); 
  
  if (i < images.length - 1) {
      i++;
  } else {
      i = 0;
  }
  setTimeout(changePicture, slideTime );

  setTimeout(()=>{    
    animation01.classList.remove(images[i+1]);
  }, 8000);
}
window.onload = changePicture;
