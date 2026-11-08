// Desktop: scale the fixed 1440px canvas to the window width.
// Phone (matches mobile.css): let the canvas reflow, and shrink fixed-pixel
// charts (the compass) to fit their column.
(function () {
  var DESIGN_WIDTH = 1440;
  var phone = window.matchMedia('(max-width: 899px)');
  var stage = document.getElementById('stage');
  var frame = document.getElementById('frame');
  if (!stage || !frame) return;
  var designHeight = Number(stage.getAttribute('data-height'));
  var charts = stage.querySelectorAll('[style*="width: 600px; height: 600px"]');

  function fitCharts(isPhone) {
    charts.forEach(function (chart) {
      var room = chart.parentElement.clientWidth;
      chart.style.zoom = isPhone ? String(Math.min(1, room / 600)) : '';
    });
  }

  function fit() {
    if (phone.matches) {
      stage.style.transform = '';
      frame.style.width = '';
      frame.style.height = '';
      fitCharts(true);
      return;
    }
    // clientWidth excludes the vertical scrollbar, so the canvas never overflows sideways.
    var w = Math.min(document.documentElement.clientWidth, DESIGN_WIDTH), k = w / DESIGN_WIDTH;
    stage.style.transform = 'scale(' + k + ')';
    frame.style.width = w + 'px';
    frame.style.height = (designHeight * k) + 'px';
    fitCharts(false);
  }

  window.addEventListener('resize', fit);
  fit();

  var current = document.querySelector('.site-nav a[aria-current="page"]');
  if (current && phone.matches) current.scrollIntoView({ inline: 'center', block: 'nearest' });
})();
