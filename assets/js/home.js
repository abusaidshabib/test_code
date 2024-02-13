const hamburger_menu = document.querySelector('#hm-menu');
const sidebar = document.getElementById('sidebar')
const closeButton = document.querySelector('#menu-close')

hamburger_menu.addEventListener('click', function(event){
    event.preventDefault();
   if(sidebar.classList.contains('hidden')){
    sidebar.classList.remove('hidden');
    sidebar.classList.add('flex');
   }else{
    sidebar.classList.remove('flex');
    sidebar.classList.add('hidden');
   }
})

closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.add('hidden');
});
