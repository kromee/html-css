   // Evitar que los contenidos se solapen cuando la barra de navegación se encuentra fija.
   var shiftWindow = function() { scrollBy(0, -100) };
   window.addEventListener("hashchange", shiftWindow);
   function load() { if (window.location.hash) shiftWindow(); }