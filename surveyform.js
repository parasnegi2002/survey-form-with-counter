//onkeyup on form then update counter value
document.getElementById("form").onkeyup = function() {
  countFields()
}
document.getElementById("form").onclick = function() {
  countFields()
}
       
function countFields(){
const charactersCount = document.getElementById('cCount');
var text = document.querySelectorAll('.input-text');
var radio = document.querySelectorAll('.input-radio');
var checkbox = document.querySelectorAll('.input-checkbox');
var date = document.querySelectorAll('.input-date');
var count = 0;


for( var i = 0; i< text.length; i++){
    if(text[i].value != ''){
        count++ ;
    };
    console.log(count)
  }
  for( var i = 0; i< radio.length; i++){
    if(radio[i].checked){
        count++ ;
        break;
    }
  
  }
  for( var i = 0; i< checkbox.length; i++){
    if(checkbox[i].checked){
        count++ ;
        break;
    }
  }
  for( var i = 0; i< date.length; i++){
    if(date[i].value !=''){
        count++ ;
      
    }
  }
  charactersCount.innerText=count;      
};
    

