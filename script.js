const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function()   
 {
  if (sidebar.style.right === "-250px") {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-250px";
  }
});


const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;