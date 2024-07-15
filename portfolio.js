var toggler_btn = document.querySelector(".toggler-btn");
var side_nav = document.querySelector(".side-nav");

toggler_btn.onclick = function(){
    side_nav.classList.toggle("active")
}


var title = document.querySelector("#title");
var array = ["Front end developer ","Web developer"]
var arrIndex = 0;
var charIndex = 0;
function updateTitle() {
    charIndex++;
    title.innerHTML = " I'm <span>"+array[arrIndex].slice(0,charIndex)+"</span>";
    if (charIndex==array[arrIndex].length){
        arrIndex++;
        charIndex=0;
        }
        if (arrIndex == array.length) {
            arrIndex = 0;
        }
        setTimeout(updateTitle,500);
}
updateTitle();



$(document).ready(function(){
    var c =$(".c").html();
    var sql =$(".sql").html();
    var html =$(".html").html();
    var css =$(".css").html();
    var javascript =$(".javascript").html();
    var jqueary =$(".jqueary").html();
    var bootstrap =$(". bootstrap").html();
    $(".progress-c").animate({'width':c},50,function(){
        $(".progress-sql").animate({'width':sql},50,function(){
            $(".progress-html").animate({'width':html},50,function(){
                $(".progress-javascript").animate({'width':javascript},50,function(){
                    $(".progress-css").animate({'width':css},50,function(){

                    });
                });
            });
        });
    });
})