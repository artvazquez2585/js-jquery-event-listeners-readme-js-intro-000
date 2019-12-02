//define functions here
function getIt(){
  $("p:first").on('click',function(){
    alert("Hey!")
  })
};

function frameIt(){
$("img").on('load',function(){
  $("img")[0].className = "tasty";
})
};

$(document).ready(function(){
// call functions here
getIt();
frameIt();
});
