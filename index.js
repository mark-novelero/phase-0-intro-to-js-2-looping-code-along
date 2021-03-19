
var arrayNames = ['Ada', 'Brendan', 'Ali']; 
var eventName = 'surprise'; 

function writeCards(arrayNames, eventName){
  var finalArray = [];
  
  for(var i = 0; i < arrayNames.length; i++){
    var iArray = arrayNames[i]; 
    var sentence = `Thank you, ${iArray}, for the wonderful ${eventName} gift!`;
    finalArray.push(sentence); 
  }

  return finalArray; 
}




function countDown(){
    var num = 10;

    while(num >= 0){
        console.log(num--);
    }
}