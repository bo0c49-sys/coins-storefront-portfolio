const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.product-card')];
const search=document.getElementById('productSearch');
const empty=document.getElementById('emptyState');
let active='all';

function render(){
  const q=search.value.trim().toLowerCase();
  let visible=0;
  cards.forEach(card=>{
    const okCategory=active==='all'||card.dataset.category===active;
    const okSearch=!q||card.dataset.name.toLowerCase().includes(q);
    const show=okCategory&&okSearch;
    card.hidden=!show;
    if(show) visible++;
  });
  empty.hidden=visible!==0;
}
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  active=btn.dataset.filter;
  render();
}));
search.addEventListener('input',render);
menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));