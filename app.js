const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){closeMenu();toggle.focus();}});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const filters=[...document.querySelectorAll('[data-filter]')];
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let visible=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)visible++;});document.querySelector('#filter-status').textContent=`${visible} projects shown`; }));
const form=document.querySelector('#enquiry');
if(form){const params=new URLSearchParams(location.search);const choices=[...form.elements.interest.options].map(o=>o.value);if(choices.includes(params.get('interest')))form.elements.interest.value=params.get('interest');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=`Tafiti enquiry: ${data.get('interest')}`;const body=`Hello Tafiti,\n\nI'm interested in ${data.get('interest')}.\n\n${data.get('message')}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nOrganisation: ${data.get('organisation')||'Not specified'}`;const result=document.querySelector('#draft-output');result.hidden=false;document.querySelector('#draft').value=body;document.querySelector('#email-draft').href=`mailto:tafitiinnovationhub@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;document.querySelector('#draft-heading').focus();});
document.querySelector('#copy-draft').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.querySelector('#draft').value);document.querySelector('#copy-status').textContent='Copied. Paste this into your email to Tafiti.';}catch{document.querySelector('#draft').select();document.querySelector('#copy-status').textContent='Select and copy the message above.';}});}

// Progressive enhancement: reveal only when observation is supported.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && typeof IntersectionObserver !== 'undefined') {
  const revealTargets = document.querySelectorAll('.section-head, .project-card, .detail-card, .community > *, .service-layout > *, .article, .team-grid article');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
    observer.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
  const showAll = () => {
    document.documentElement.classList.remove('motion-ready');
    observer.disconnect();
  };
  motionPreference.addEventListener('change', event => { if (event.matches) showAll(); });
  // Prevent a failed observer from hiding content indefinitely.
  setTimeout(showAll, 7000);
}
