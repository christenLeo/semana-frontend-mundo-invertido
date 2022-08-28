const switchTheme = () => {
   const source = document.querySelector('#source');
   document.body.classList.toggle("dark-theme");
   document.body.classList.toggle("light-theme");

   if (document.body.classList.contains('dark-theme')) {
      source.src = "./assets/musics/inverted-world.mpeg";
   }
   else {
      source.src = "./assets/musics/normal-world.mpeg";
   }
};