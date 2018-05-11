function forLoop(array) {
  for(let i=0; i < 25; i++) {
    
    if(i<=0) {
      array.unshift('I am a strange loop.');
    }
    else {
      array.unshift('I am ${i} strange loops.')
    }
    
    return array;
  
}}