var valentinesDayRect = document.querySelector('rect[data-date="2016-02-14"]') || 
                        document.querySelector('rect[data-date="2017-02-14"]') ||
                        document.querySelector('rect[data-date="2018-02-14"]');

if (valentinesDayRect) {
  var fill = valentinesDayRect.getAttribute('fill');

  if (fill != '#eeeeee') {
    valentinesDayRect.setAttribute('fill', '#ec272a');
  }
}