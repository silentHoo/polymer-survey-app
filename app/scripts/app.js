(function(document) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // it's elegant and clean to change the document things here
    window.addEventListener('theme-changed', function (e) {
      var linkEl = document.querySelector('#themeLink');
      if (linkEl) {
        linkEl.href = 'styles/theme-' + e.detail.themeName + '.css';
      }
    });
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
