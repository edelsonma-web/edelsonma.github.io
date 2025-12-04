// Pequeñas interacciones: nav toggle, año dinámico, smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle && navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // cerrar menu en mobile
        if(window.innerWidth < 900){
          navLinks.style.display = 'none';
        }
      }
    });
  });
});
