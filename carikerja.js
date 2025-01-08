var nav = document.querySelector("header")
window.addEventListener("scroll", ()=> {
   if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
   }else{
      nav.classList.remove("sticky");
   }
})

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


document.addEventListener('DOMContentLoaded', function() {
   var mixer = mixitup('.product-filter-items');
});


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

document.addEventListener("DOMContentLoaded", function() {
   const reportButton = document.getElementById("report");
   const formContainer = document.querySelector(".container7");
   const overlay = document.querySelector(".overlay");

   reportButton.addEventListener("click", function() {
       formContainer.style.display = "block";
       overlay.style.display = "block";
   });

   document.getElementById("ror-btn").addEventListener("click", function() {
       formContainer.style.display = "none";
       overlay.style.display = "none";
   });
});
