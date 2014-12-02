(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    document.querySelector('ivx-context-menu').addEventListener('item-selected', function(e) {
      console.log(e.type + ': ' + e.detail.item);
    });

    // workaround to fix the height of the inner <ivx-main-content> area. There seems to be a bug.
    var contentHeight = document.querySelector('#hPanel').clientHeight - document.querySelector('#toolbar').clientHeight;
    document.querySelector('#mainContent').contentHeight = contentHeight + 'px';
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
