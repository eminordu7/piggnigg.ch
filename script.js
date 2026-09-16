const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const galleryLinks=[...document.querySelectorAll('.gallery-item,.press-photo-card')];
const lightbox=document.createElement('div');
lightbox.className='lightbox';
lightbox.innerHTML='<button class="lightbox-close" aria-label="Schliessen">×</button><button class="lightbox-prev" aria-label="Vorheriges Bild">‹</button><img class="lightbox-image" alt=""><button class="lightbox-next" aria-label="Nächstes Bild">›</button>';
document.body.appendChild(lightbox);
const lightboxImage=lightbox.querySelector('.lightbox-image');let current=0;
function showImage(index){current=(index+galleryLinks.length)%galleryLinks.length;const img=galleryLinks[current].querySelector('img');lightboxImage.src=galleryLinks[current].href;lightboxImage.alt=img?img.alt:'';lightbox.classList.add('open');document.body.classList.add('lightbox-open');}
galleryLinks.forEach((link,index)=>link.addEventListener('click',e=>{e.preventDefault();showImage(index)}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>{lightbox.classList.remove('open');document.body.classList.remove('lightbox-open')});
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>showImage(current-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>showImage(current+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('open');document.body.classList.remove('lightbox-open')}});
document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')lightbox.querySelector('.lightbox-close').click();if(e.key==='ArrowLeft')showImage(current-1);if(e.key==='ArrowRight')showImage(current+1)});
