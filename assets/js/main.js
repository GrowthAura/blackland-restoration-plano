/* Blackland Restoration Co. — interactions */
(function(){
  "use strict";
  var header=document.querySelector('.site-header');
  var toTop=document.querySelector('.to-top');
  var burger=document.querySelector('.hamburger');
  var nav=document.querySelector('.nav');
  var overlay=document.querySelector('.menu-overlay');
  function closeMenu(){
    if(!nav) return;
    nav.classList.remove('open');
    if(overlay) overlay.classList.remove('show');
    document.body.style.overflow='';
    if(burger) burger.setAttribute('aria-expanded','false');
  }
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      if(overlay) overlay.classList.toggle('show',open);
      document.body.style.overflow=open?'hidden':'';
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  if(overlay) overlay.addEventListener('click',closeMenu);
  /* auto-close the open mobile menu when the user starts scrolling */
  var lastY=window.scrollY;
  window.addEventListener('scroll',function(){
    var y=window.scrollY;
    if(header) header.classList.toggle('scrolled',y>10);
    if(toTop) toTop.classList.toggle('show',y>700);
    if(nav&&nav.classList.contains('open')&&Math.abs(y-lastY)>60){closeMenu();}
    lastY=y;
  },{passive:true});
  if(toTop) toTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  /* current year */
  var yr=document.querySelector('[data-year]');
  if(yr) yr.textContent=new Date().getFullYear();
})();
