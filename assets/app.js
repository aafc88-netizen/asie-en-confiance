var q=document.getElementById('q');
if(q){q.addEventListener('input',function(){var v=q.value.trim().toLowerCase();
document.querySelectorAll('[data-s]').forEach(function(e){var li=e.closest('li')||e;li.hidden=v&&e.textContent.toLowerCase().indexOf(v)<0;});});}
