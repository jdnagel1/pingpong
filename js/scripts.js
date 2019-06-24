

// user interface logic vvv

$(document).ready(function() {
  $('#pingForm').submit(function(event){
      event.preventDefault();
      var intNum = $('input#number').val();
      // stringNum = [];
      pushNum(intNum);
      divNum();
      $("ul#answer").empty();
      answer();
      console.log(stringNum);
    });
  });

  // Business Logic vvv

  var stringNum = [];
  function pushNum(num) {
    for(var i = 0; i <= num; i++){
      stringNum.push("" + i);
    };
  };


function divNum() {
var holdNum = "";
for(var x = 0; x < stringNum.length; x++) {
  holdNum = stringNum[x];
  if(holdNum % 3 === 0){
    stringNum[x] = "ping";
  }else if(holdNum % 5 === 0){
    stringNum[x] = "pong";
  // }else if(holdNum % 15 === 0){
  //   stringNum[x] = "pingpong!";
    };
  };
};



function answer() {
  for(var y = 0; y < stringNum.length; y++){
    $('ul#answer').append("<li>" + stringNum[y] + "</li>");
  };
};
