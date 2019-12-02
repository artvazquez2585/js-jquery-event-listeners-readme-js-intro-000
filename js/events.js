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

function pressIt(){
  $("input[type='text']").on('keydown',function(key){
    if(key.which === 71){
      alert("You typed G!");
    }
  })
};

function submitIt(){
  $("form").on('submit',function(){
    alert("Your form will be submitted now")
  })
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
});
