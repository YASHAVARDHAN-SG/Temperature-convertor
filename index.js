
const textbox=document.getElementById("textbox");
const tofarenhient=document.getElementById("tofahient");
const tocelcius=document.getElementById("tocel");
const result=document.getElementById("result");
let temp;
function convert() {
    if(tofarenhient.checked){
      temp=Number(textbox.value);
      temp=temp * 9/5 +32;
      result.textContent= temp.toFixed(1) +"°F";
    }
    else if(tocelcius.checked){
        temp=Number(textbox.value);
      temp=(temp-32)*(5/9);
      result.textContent= temp.toFixed(1) +"°C";
    }
    else{
        result.textContent="SELECT A UNIT";
    }
}