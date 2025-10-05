// Portionsrechner
(function(){
  var BASE = 12;

  var input = document.getElementById('ck-servings');
  var minus = document.getElementById('ck-minus');
  var plus  = document.getElementById('ck-plus');
  var yieldLabel = document.getElementById('ck-yield');
  var list = document.getElementById('ck-ingredient-list');

  if (!input || !list) return; // Falls Elemente fehlen, nichts tun

  // Scrollrad auf dem Number-Input verhindern (sonst ändern sich Werte ungewollt)
  input.addEventListener('wheel', function(e){ e.preventDefault(); }, { passive:false });

  function fmt(val, unit){
    var smallUnits = ['Stk','Pck.','Prise','EL'];
    var isSmall = smallUnits.indexOf(unit) !== -1;
    var n = isSmall ? Math.round(val * 100) / 100 : Math.round(val * 10) / 10;
    var pretty = Math.abs(n - Math.trunc(n)) < 1e-9 ? Math.trunc(n) : n;
    return (pretty + ' ' + (unit || '')).trim();
  }

  function recalc(){
    var target = Math.max(1, Number(input.value || BASE));
    if (yieldLabel) yieldLabel.textContent = target;

    var items = list.querySelectorAll('li[data-qty]');
    for (var i=0; i<items.length; i++){
      var li = items[i];
      var qty  = Number(li.getAttribute('data-qty'));
      var unit = li.getAttribute('data-unit') || '';
      var scaled = qty * (target / BASE);
      var span = li.querySelector('.ck-qty');
      if (span) span.textContent = fmt(scaled, unit);
    }
  }

  // Events
  if (minus) minus.addEventListener('click', function(){
    input.value = Math.max(1, Number(input.value || BASE) - 1);
    recalc();
  });
  if (plus) plus.addEventListener('click', function(){
    input.value = Math.max(1, Number(input.value || BASE) + 1);
    recalc();
  });
  input.addEventListener('input', recalc);

  // Initial anzeigen
  recalc();
})();

// Einkaufsliste als TXT (optional)
(function(){
  var btn = document.getElementById('btnList');
  if (!btn) return;

  btn.addEventListener('click', function(){
    var items = document.querySelectorAll('#ck-ingredient-list li');
    var lines = [];
    for (var i=0; i<items.length; i++){
      var qty = items[i].querySelector('.ck-qty') ? items[i].querySelector('.ck-qty').textContent : '';
      var text = items[i].textContent.replace(qty, '').trim();
      lines.push((qty + ' ' + text).trim());
    }
    var blob = new Blob([lines.join('\n')], {type:'text/plain;charset=utf-8'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'einkaufsliste.txt';
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });
})();
