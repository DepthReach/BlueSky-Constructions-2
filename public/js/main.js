(function(){
  var d=document,h=d.documentElement;
  var hdr=d.querySelector('.hdr'),nav=d.getElementById('nav'),bg=d.querySelector('.burger');
  function s(){hdr.classList.toggle('solid',window.scrollY>40)}
  s();window.addEventListener('scroll',s,{passive:true});
  bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded','false')}});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    d.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  }else{d.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
  var f=d.getElementById('quote');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(n){return (f.elements[n].value||'').trim()};
    var lines=['Hi Blue Sky, I\'d like to request a quote.','','Name: '+v('name'),'Phone: '+v('phone'),'Estate / area: '+v('area'),'Service: '+v('service')];
    if(v('msg'))lines.push('Details: '+v('msg'));
    window.open('https://wa.me/27766133663?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
  })}
})();