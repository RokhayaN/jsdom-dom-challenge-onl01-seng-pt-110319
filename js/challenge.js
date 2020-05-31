document.addEventListener("DOMContentLoaded", () => {
    
//acess counter element
let counter = document.getElementById("counter") 

///the timer increment every second 
let i = setInterval(function(){
counter.innerHTML++;
},1000);

// increment and decrement the counter using the plus and minus elements
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")

minus.addEventListener("click", function() {
    counter.innerHTML-- ;
});
plus.addEventListener("click", function(){
    counter.innerHTML++ ;
});


//acess heart element
let heart = document.getElementById("heart")
//Fire event when heart button is clicked 
heart.addEventListener("click",function(){
let heartsClicked = counter.innerHTML;
let li = document.createElement("li");

li.innerHTML = `${heartsClicked} is loved`;
console.log(li);
likes[0].appendChild("li");

});

//access likes element
let likes = document.getElementsByClassName("likes");

//access pause element
let pause = document.getElementById("pause")
//fire event when pause button is clicked
pause.addEventListener(function(){
    if (pause.innerHTML === "pause"){
        clearInterval(i);
        pause.innerHTML = "resume";

        minus.disabled = true 
        plus.disabled = true 
        heart.disabled = true 
        submit.disabled = true 
        
    }else{
        i = setInterval(function(){
            counter.innerHTML++;
            },1000);
            pause.innerHTML = "pause";
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
    }
});
//access comment element 
let comment = document.getElementById("comment-input");
//access submit element 
let submit = document.getElementById("submit"); 
//access comment space 
let commentSpace = document.getElementById("list");

//fire event when comment is submitted 

submit.addEventListener("click",function(event){
event.preventDefault();
let pTag = document.createElement("P");
console.log(comment.value); 
pTag.innerHTML = comment.value;
commentsArea.appendChild(pTag);
comment.value = "";

});















});