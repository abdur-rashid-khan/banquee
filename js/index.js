// const menu_btn = document.getElementById('menu_btn');
// menu_btn.addEventListener('click',()=>{
//    console.log('clicked');
// })
// 
// const menuContent = document.getElementById('mobile_menu_content');

const menuBtn = () => {
   let closeBtn = document.getElementById("menu_cancel_btn");
   let x = document.getElementById("mobile_menu_content");
   let openBtn = document.getElementById("menu_btn");
   if (x.style.display === "none") {
      x.style.display = "block";
      openBtn.style.display = "none";
      closeBtn.style.display = "block";
   } else {
      x.style.display = "none";
   }
}
// use for close menu list 
const closeBtn = () => {
   let x = document.getElementById("mobile_menu_content");
   let openBtn = document.getElementById("menu_btn");
   let closeBtn = document.getElementById("menu_cancel_btn");
   if (x.style.display === "block") {
      x.style.display = "none";
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
   } else {
      x.style.display = "block";
   }
}