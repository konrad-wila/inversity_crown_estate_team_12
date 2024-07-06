document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });