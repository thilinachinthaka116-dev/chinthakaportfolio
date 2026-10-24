const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('chinthaka-theme');
if(savedTheme){root.dataset.theme=savedTheme;themeToggle.textContent=savedTheme==='dark'?'☀':'☾';}
themeToggle.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';if(next==='light')delete root.dataset.theme;else root.dataset.theme=next;localStorage.setItem('chinthaka-theme',next);themeToggle.textContent=next==='dark'?'☀':'☾';});
const menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.textContent=nav.classList.contains('open')?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.textContent='☰';}));
const revealTargets=document.querySelectorAll('.section-heading,.timeline-card,.skill-card,.education-item,.strip-item,.contact-link,.about-content');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});revealTargets.forEach(el=>observer.observe(el));}else revealTargets.forEach(el=>el.classList.add('visible'));
