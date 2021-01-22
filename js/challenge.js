document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const likes = document.getElementsByClassName("likes")[0]
    const pause = document.getElementById("pause")
    const submit = document.getElementById("submit")
    const form = document.getElementsByTagName("input")[0]
    const commentsList = document.getElementById("list")


    let constantCounter = setInterval(countUp, 1000)
    let counterAdding = true

    function countUp() {
        if (counterAdding === true){
            counter.innerHTML++
        }
    };

    heart.addEventListener('click', function(event) {
        const list = document.createElement("li")
        let likeNumber = document.createTextNode(`${counter.innerHTML} has been liked 1 times.`)
        list.appendChild(likeNumber)
        likes.appendChild(list)
    })

    plus.addEventListener('click', function(event) {
        counter.innerHTML++
    });

    minus.addEventListener('click', function(event) {
        counter.innerHTML--
    })

    pause.addEventListener('click', function(event) {
        if (counterAdding === true) {
            pause.innerHTML = 'resume';
            counterAdding = false;
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            form.disabled = true;
        }
        else {
            pause.innerHTML = 'pause';
            counterAdding = true;
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            form.disabled = false;
        }

    })

    submit.addEventListener('click', function(event) {
        event.preventDefault();
        const newComment = document.createElement("p")
        let fullComment = document.createTextNode(`${form.value}`)
        newComment.appendChild(fullComment)
        commentsList.appendChild(newComment)
        form.value = '';
    })

    countUp();
    // "use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var playing=!0,timer=function(){return setInterval(function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1},1e3)},interval=timer(),minus=document.getElementById("minus"),plus=document.getElementById("plus"),heart=document.getElementById("heart"),pause=document.getElementById("pause"),commentForm=document.getElementsByTagName("form")[0];minus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b-1}),plus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1}),heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});
});