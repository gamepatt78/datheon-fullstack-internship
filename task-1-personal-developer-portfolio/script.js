const projects=[
 {title:'Task Manager',description:'A persistent productivity app with task CRUD, filters and categories.',technology:'HTML · CSS · JavaScript',gradient:'linear-gradient(135deg,#2563eb,#67e8f9)'},
 {title:'Weather Dashboard',description:'Live global weather and five-day forecasts with condition visuals.',technology:'REST API · JavaScript',gradient:'linear-gradient(135deg,#0f172a,#38bdf8)'},
 {title:'E-Commerce Store',description:'A responsive catalog with searching, filtering and a persistent cart.',technology:'Fetch API · Local Storage',gradient:'linear-gradient(135deg,#7c3aed,#fb7185)'},
 {title:'ML Sentiment Tool',description:'A machine-learning interface for analysing text sentiment.',technology:'Python · NLP',gradient:'linear-gradient(135deg,#059669,#bef264)'}
];
const grid=document.querySelector('#projectGrid');
grid.innerHTML=projects.map((p,i)=>`<article class="project-card" data-index="${i}"><div class="project-image" style="--card-gradient:${p.gradient}"></div><div class="project-info"><h4>${p.title}</h4><p>${p.description}</p><small>${p.technology}</small></div></article>`).join('');
const modal=document.querySelector('#projectModal');
grid.addEventListener('click',e=>{const card=e.target.closest('.project-card');if(!card)return;const p=projects[card.dataset.index];document.querySelector('#modalContent').innerHTML=`<h2>${p.title}</h2><p>${p.description}</p><strong>${p.technology}</strong>`;modal.showModal()});
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
const menu=document.querySelector('.menu-button'),links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const stored=localStorage.getItem('portfolio-theme');if(stored==='dark')document.documentElement.dataset.theme='dark';
document.querySelector('#themeToggle').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'light':'dark';localStorage.setItem('portfolio-theme',dark?'light':'dark');document.querySelector('#themeToggle').textContent=dark?'☾':'☀';});
