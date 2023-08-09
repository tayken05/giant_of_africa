function openNav() {
  let sideBar = document.querySelector('.navbar_links');
  
  
  if (sideBar.classList.contains ('add')) {
  
  	sideBar.classList.remove('add'); 
  
  } else {
  
  	sideBar.classList.add('add');
  
  }
};