(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    document.querySelector('ivx-context-menu').addEventListener('item-selected', function(e) {
      console.log(e.type + ': ' + e.detail.item);
    });
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
