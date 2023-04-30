// let array = ['Hayk', 'Mher', 'Tigran', 'Gayane', 'Mariam', 'Daniel'];

// for (let i = 0; i < array.length; i++) {
//    if (i < 10) {  
//     console.log(i);
//    }

//    else {
//     alert('Eli anun kiri!');
//    }
   

// }

var ShowPrevBtn = document.getElementById('prev');
var ShowNextBtn = document.getElementById('next');
var SlideImage = document.getElementById('images');

ShowPrevBtn.addEventListener('click', onShowPrevBtnClick);
ShowNextBtn.addEventListener('click', onShowNextBtnClick);


var ImgsArayy = [];
ImgsArayy.push('https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg?w=2000');
ImgsArayy.push('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg');
ImgsArayy.push('https://static7.depositphotos.com/1297553/795/i/950/depositphotos_7951909-stock-photo-team-of-lifting-it-information.jpg');
ImgsArayy.push('https://img.anews.com/thumbor/unsafe/1200x/https%3A%2F%2Fimg.anews.com%2Fmedia%2Fposts%2Fimages%2F20190827%2F115874201.jpg');



var currentImg = 0;
SlideImage.src = ImgsArayy [currentImg];  
ShowPrevBtn.disabled = true;


function onShowPrevBtnClick() {
   currentImg--;
   SlideImage.src = ImgsArayy [currentImg]; 
   ShowNextBtn = false;

   if (currentImg === 0 ){
      ShowPrevBtn.disabled = true;
   }
}

function onShowNextBtnClick() {
   currentImg++;
   SlideImage.src = ImgsArayy [currentImg]; 
   ShowPrevBtn.disabled = false;

   if (currentImg === (ImgsArayy.length -1) ){
      ShowNextBtn.disabled = true;
   }
}