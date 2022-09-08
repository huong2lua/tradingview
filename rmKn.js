// ==UserScript==
// @name         Tradingview auto clear auto connect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  close the confirmnation pop when new location login
// @author       You
// @match        https://vn.tradingview.com/chart/VnvNenY8/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tradingview.com
// @grant        none
// ==/UserScript==

const hideAds = setInterval(() => {
  const adDialog = document.querySelector("div[data-dialog-name='gopro']");
  if (adDialog)
  {
      adDialog.querySelector("button").click();
      console.log('popup closed');
  }
}, 10);
