var nav = document.querySelector("header")
window.addEventListener("scroll", ()=> {
   if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
   }else{
      nav.classList.remove("sticky");
   }
})

// transisi 
const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
         entry.target.classList.add('show');
      } else{
         entry.target.classList.remove('show');
      }
   });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// tombol dan report popup
const getTombol = document.getElementById("tombol");
window.addEventListener("scroll", function(){
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      getTombol.style.display = "block"
   }else{
      getTombol.style.display = "none";
   }
});
getTombol.addEventListener("click", function(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});


const con = document.querySelector(".container6");
window.addEventListener("scroll", function(){
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      con.style.display = "block"
   }else{
      con.style.display = "none";
   }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
 