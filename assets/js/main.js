// ===== i18n =====
const translations = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá! Eu sou',
    'hero.subtitle': 'Um desenvolvedor que programa com',
    'hero.subtitle2': 'determinação.',
    'about.title': 'Sobre mim',
    'about.label1': 'O Começo',
    'about.label2': 'Formação & Carreira',
    'about.label3': 'Hoje',
    'about.p1': 'Aos 12 anos tive curiosidade em saber como os personagens dos jogos se movimentavam, e essa curiosidade me levou à programação Web. Sedento pela curiosidade de saber mais, encontrei uma <a href="https://designa.com.br" target="_blank">startup</a> que me ensinou conceitos como: Framework, Scrum, Ágil, MVC e Ruby on Rails.',
    'about.p2': 'Formado em Análise e Desenvolvimento de Sistemas pela Unopar em 2019, ao longo da minha carreira profissional me deparei com diversas tecnologias como: Delphi, Python e Powerbuilder. Mas meu coração sempre esteve definitivamente voltado para Web, onde tive oportunidade de ver muitas coisas que surgiram: RoR, AdonisJS, React, Angular, TypeScript, Node...',
    'about.p3': 'A paixão pela tecnologia ainda se mantém, porém com novos desafios. O foco tem sido em Arquitetura de Software, Inteligência Artificial, Code Review e Testes Automatizados.',
    'projects.title': 'Alguns Projetos',
    'projects.carousel.title': 'Artigo - Carrossel com HTML + CSS',
    'projects.carousel.desc': 'Artigo publicado no Tableless com resultado final no <span class="code-link">CodePen</span>.',
    'projects.iphone.title': 'IPhone 3D',
    'projects.iphone.desc': 'Um iPhone em 3D feito exclusivamente com HTML, CSS e JS.',
    'projects.cache.title': 'APP Cache',
    'projects.cache.desc': 'Projeto de gerenciamento de finanças pessoais com controle de lançamentos e integração com IA. Está em desenvolvimento.',
    'skills.title': 'Habilidades',
    'skills.tech': 'Técnicas',
    'skills.lang': 'Idiomas',
    'skills.pt': 'Português BR',
    'skills.native': 'Nativo',
    'skills.en': 'Inglês',
    'skills.en_level': 'Comunicação',
    'skills.soft': 'Soft Skills',
    'skills.chill': 'Tranquilo - Chill Guy',
    'skills.curiosity': 'Curiosidade',
    'skills.teamwork': 'Bom relacionamento / Trabalho em Equipe',
    'contact.title': 'Contato',
  },
  'en-US': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi! I am',
    'hero.subtitle': 'A developer who codes with',
    'hero.subtitle2': 'determination.',
    'about.title': 'About me',
    'about.label1': 'The Beginning',
    'about.label2': 'Education & Career',
    'about.label3': 'Today',
    'about.p1': 'At 12 years old I was curious about how game characters moved, and that curiosity led me to Web development. Eager to learn more, I found a <a href="https://designa.com.br" target="_blank">startup</a> that taught me concepts like: Framework, Scrum, Agile, MVC and Ruby on Rails.',
    'about.p2': 'Graduated in Systems Analysis and Development from Unopar in 2019. Throughout my career I\'ve worked with many technologies like Delphi, Python and Powerbuilder. But my heart has always been in Web development, where I had the opportunity to see many things emerge: RoR, AdonisJS, React, Angular, TypeScript, Node...',
    'about.p3': 'The passion for technology still remains, but with new challenges. The focus has been on Software Architecture, Artificial Intelligence, Code Review and Automated Testing.',
    'projects.title': 'Some Projects',
    'projects.carousel.title': 'Article - Carousel with HTML + CSS',
    'projects.carousel.desc': 'Article published on Tableless with the final result on <span class="code-link">CodePen</span>.',
    'projects.iphone.title': 'IPhone 3D',
    'projects.iphone.desc': 'An iPhone in 3D made exclusively with HTML, CSS and JS.',
    'projects.cache.title': 'APP Cache',
    'projects.cache.desc': 'Project for personal finance management with AI integration. Is working in progress.',
    'skills.title': 'Skills',
    'skills.tech': 'Technical',
    'skills.lang': 'Languages',
    'skills.pt': 'Portuguese BR',
    'skills.native': 'Native',
    'skills.en': 'English',
    'skills.en_level': 'Communication',
    'skills.soft': 'Soft Skills',
    'skills.chill': 'Chill Guy',
    'skills.curiosity': 'Curiosity',
    'skills.teamwork': 'Good relationships / Teamwork',
    'contact.title': 'Contact',
  }
};

let currentLang = 'pt-BR';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';
  document.getElementById('lang-toggle').textContent = lang === 'pt-BR' ? 'EN' : 'PT';
  localStorage.setItem('lang', lang);
}

// ===== Dark Mode =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  localStorage.setItem('theme', theme);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Language
  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  setLanguage(savedLang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'pt-BR' ? 'en-US' : 'pt-BR');
  });

  // Mobile menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Navbar scroll - invisible at top, visible when scrolled
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
