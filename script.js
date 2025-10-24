
document.addEventListener("DOMContentLoaded", () => {
  console.log("Forsiden lastet! Scroll-effekter aktivert.");

  // Lag en progressbar øverst som viser hvor langt ned du har scrollet
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  // Legg til CSS via JS
  const style = document.createElement('style');
  style.innerHTML = `
    #scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 6px;
      background: linear-gradient(to right, #1a73e8, #34a853);
      width: 0%;
      z-index: 9999;
      border-radius: 0 0 6px 6px;
      transition: width 0.1s ease-out;
    }
  `;
  document.head.appendChild(style);

  // Oppdater progressbar når man scroller
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
});
