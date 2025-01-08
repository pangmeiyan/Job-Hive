var nav = document.querySelector("header")
window.addEventListener("scroll", ()=> {
   if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
   }else{
      nav.classList.remove("sticky");
   }
})

function toggleInternship() {
   var internshipJobs = document.querySelectorAll('.internship .box-inter');
   internshipJobs.forEach(function(job) {
       job.style.display = 'block';
   });

   var temporaryJobs = document.querySelectorAll('.temporary .box-tempo');
   temporaryJobs.forEach(function(job) {
       job.style.display = 'none';
   });
}

function toggleTemporary() {
   var internshipJobs = document.querySelectorAll('.internship .box-inter');
   internshipJobs.forEach(function(job) {
       job.style.display = 'none';
   });

   var temporaryJobs = document.querySelectorAll('.temporary .box-tempo');
   temporaryJobs.forEach(function(job) {
       job.style.display = 'block';
   });
}

// Untuk memastikan hanya satu jenis pekerjaan yang ditampilkan saat halaman dimuat
window.onload = function() {
   toggleInternship();
};

// Untuk memastikan hanya satu jenis pekerjaan yang ditampilkan saat halaman dimuat
window.onload = function() {
   toggleInternship();
};

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

 