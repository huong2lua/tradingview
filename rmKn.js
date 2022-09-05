// ==UserScript==
// @name         Auto Connect Tradingview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vn.tradingview.com/chart/VnvNenY8/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tradingview.com
// @grant        none
// ==/UserScript==

function onElementInserted(containerSelector, elementSelector, callback) {
    var onMutationsObserved = function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                var elements = $(mutation.addedNodes).find(elementSelector);
                for (var i = 0, len = elements.length; i < len; i++) {
                    callback(elements[i]);
                }
            }
        });
    };
    var target = $(containerSelector)[0];
    var config = { childList: true, subtree: true };
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(onMutationsObserved);
    observer.observe(target, config);

}

function setupAutoClickCloseButtonInside(selector) {
  onElementInserted('body', selector, function(element) {
    console.log("close " + selector);
    $(selector + ' > button').click()
  });
}

(function() {
  'use strict';
  const checkAd = setInterval(() => {
      setupAutoClickCloseButtonInside('[data-dialog-name="gopro"]');
  }, 500);
})();
