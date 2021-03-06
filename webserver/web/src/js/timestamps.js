/* global moment:false */

(function() {
  function updateTime(elem) {
    const ts = elem.dataset.timestamp;
    if (ts === undefined) {
      return;
    }

    const m = moment.utc(ts).local();

    elem.innerHTML = m.fromNow();
    elem.title = m.format('LLL');
  }

  function updateAllTimes() {
    for (const ts of document.getElementsByClassName('timestamp')) {
      updateTime(ts);
    }
  }

  (function() {
    if (navigator.languages) {
      moment.locale(navigator.languages);
    }

    updateAllTimes();

    setInterval(updateAllTimes, 60 * 1000);
  })();
})();
