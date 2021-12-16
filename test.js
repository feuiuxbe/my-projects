var iterations = 1000000;
console.time('Function #1');

for(var i = 0; i < iterations; i++ ){
  function fakeBin(str){
        var newStr = "0123456789012345678901234567890";
        for(var i=0;i<str.length;i++){
          if(Number(str[i])>=5){
            newStr += "1"
          }
          else{
            newStr += "0";
          }
        }
        return newStr;
      }
};

console.timeEnd('Function #1');

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
  function fakeBin(str){
        var newStr = "0123456789012345678901234567890";
        for(var i=0;i<str.length;i++){
          if(Number(str[i])>=5){
            newStr += "1"
          }
          else{
            newStr += "0";
          }
        }
        return newStr;
      }
};
console.timeEnd('Function #2')

console.time('Function #3');
for(var i = 0; i < iterations; i++ ){
  function fakeBin(str){
        var newStr = "0123456789012345678901234567890";
        for(var i=0;i<str.length;i++){
          if(Number(str[i])>=5){
            newStr += "1"
          }
          else{
            newStr += "0";
          }
        }
        return newStr;
      }
};
console.timeEnd('Function #3')

console.time('Function #4');
for(var i = 0; i < iterations; i++ ){
  function fakeBin(str){
        var newStr = "0123456789012345678901234567890";
        for(var i=0;i<str.length;i++){
          if(Number(str[i])>=5){
            newStr += "1"
          }
          else{
            newStr += "0";
          }
        }
        return newStr;
      }
};
console.timeEnd('Function #4')

console.time('Function #5');
for(var i = 0; i < iterations; i++ ){
  function fakeBin(str){
        var newStr = "0123456789012345678901234567890";
        for(var i=0;i<str.length;i++){
          if(Number(str[i])>=5){
            newStr += "1"
          }
          else{
            newStr += "0";
          }
        }
        return newStr;
      }
};
console.timeEnd('Function #5')
