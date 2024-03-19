const hexbutton=document.querySelector(".hexbutton");
const hexcolorvalue=document.querySelector('.hex-color-value');
const hexcolorcontainer=document.querySelector('.hex-color-container');
const hexCopybtn=document.querySelector('.hex-copy');

//below are the code for create random hex color

hexbutton.addEventListener("click",()=>{
  let charset='0123456789ABCDEF';
  let hexcloroutput="";
  for(let i=0,charsetlength=charset.length;i<6;++i){
//    hexcloroutput+=charset.charAt(Math.floor(Math.random()*charsetlength));

hexcloroutput+=charset.charAt(Math.random()*charsetlength);
  }

  hexcolorvalue.textContent=`#${hexcloroutput}`
  hexcolorcontainer.style.backgroundColor=`#${hexcloroutput}`
  // console.log(hexcloroutput);
  hexbutton.style.color=`#${hexcloroutput}`
});


//rgb color genertator

const rgbbtn=document.querySelector(".rgb-btn");
const getRedInputRange=document.querySelector("#red");
const getGreenInputRange=document.querySelector("#green");
const getBlueInputRange=document.querySelector("#blue");
const rgbColorContainer=document.querySelector(".rgb-color-container");
const rgbCopybtn=document.querySelector('.rgb-copy');
const rgbcolorvalue=document.querySelector(".rgb-color-value");


rgbbtn.addEventListener("click" ,()=>{
   let extractRedValue=getRedInputRange.value;
   let extractGreenValue=getGreenInputRange.value;
   let extractBlueValue=getBlueInputRange.value;


   rgbcolorvalue.textContent=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;

   rgbColorContainer.style.backgroundColor=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
   rgbbtn.style.color=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`

   //console.log(extractRedValue,extractGreenValue,extractBlueValue);
});

function copyHexColorToClipBoard(){
//  console.log(hexcolorvalue.textContent);
 navigator.clipboard.writeText(hexcolorvalue.textContent);
 alert("hex color is copied to clipboard");
}

hexCopybtn.addEventListener('click', copyHexColorToClipBoard);
function copyRgbColorToClipBoard(){
     navigator.clipboard.writeText(rgbcolorvalue.textContent);
     alert("RGB color is copied to clipboard");
}

rgbCopybtn.addEventListener("click",copyRgbColorToClipBoard);