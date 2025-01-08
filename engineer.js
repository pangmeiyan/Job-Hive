var nav = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box1, .box2, .box3, .box4, .box5, .box6, .box7");
  const details = document.querySelectorAll(".detail1, .detail2, .detail3, .detail4, .detail5, .detail6, .detail7");
  const detailAwal = document.querySelector(".detail-awal");

  // Sembunyikan semua detail saat halaman dimuat
  details.forEach(detail => {
    detail.style.display = "none";
  });

  // Tambahkan event listener untuk setiap kotak
  boxes.forEach((box, index) => {
    box.addEventListener("click", function() {
      // Sembunyikan detail awal
      detailAwal.style.display = "none";
      // Sembunyikan semua detail
      details.forEach(detail => {
        detail.style.display = "none";
      });
      // Tampilkan detail yang sesuai dengan kotak yang diklik
      details[index].style.display = "block";
    });
  });
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
con.addEventListener("click", function(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});


//480 px
document.addEventListener("DOMContentLoaded", function(){
  const box1 = document.querySelector(".box1");
  box1.addEventListener("click", function(){
    const jobId = box1.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job1.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box2 = document.querySelector(".box2");
  box2.addEventListener("click", function(){
    const jobId = box2.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job2.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box3 = document.querySelector(".box3");
  box3.addEventListener("click", function(){
    const jobId = box3.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job3.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box4 = document.querySelector(".box4");
  box4.addEventListener("click", function(){
    const jobId = box4.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job4.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box5 = document.querySelector(".box5");
  box5.addEventListener("click", function(){
    const jobId = box5.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job5.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box6 = document.querySelector(".box6");
  box6.addEventListener("click", function(){
    const jobId = box6.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job6.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){
  const box7 = document.querySelector(".box7");
  box7.addEventListener("click", function(){
    const jobId = box7.dataset.job;
    if(window.innerWidth <= 480){
      let url = "job7.html";
      url += "?job=" + jobId;
        window.location.href = url;
    }
  });
});
