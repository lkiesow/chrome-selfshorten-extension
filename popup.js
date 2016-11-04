// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. We ask for the active one which should always be exactly one.
    var url = tabs[0].url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function setContent(id, c) {
  document.getElementById(id).value = c;
}

function shortenPollin(url) {
  var re = /^https{0,1}:\/\/.{0,4}(pollin.de\/shop\/dt\/[^-]*-).*$/;
  return url.replace(re, function(match, x, offset, string) {
    return 'http://' + x;
  });
}

function shortenDealExtreme(url) {
  var re = /^https{0,1}:\/\/.{0,4}dx.com\/p\/.*-(\d*)(?:$|#.*$)/;
  return url.replace(re, function(match, x, offset, string) {
    return 'http://dx.com/p/-' + x;
  });
}

function shortenReichelt(url) {
  var re = /^https{0,1}:\/\/.{0,4}reichelt.de\/.*ARTICLE=(\d*).*$/;
  return url.replace(re, function(match, x, offset, string) {
    return 'http://reichelt.de?ARTICLE=' + x;
  });
}

function shortenAmazon(url) {
  var re = /^https{0,1}:\/\/.{0,4}(amazon\..{2,3})\/.*\/(\w{8,12}).*$/;
  url = url.replace(/\/ref=.*$/, '');
  return url.replace(re, function(match, domain, x, offset, string) {
    return 'http://' + domain + '/dp/' + x;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    setContent('original-url', url);
	 url.indexOf('pollin.de') >= 0 && setContent('short-url', shortenPollin(url));
	 url.indexOf('dx.com') >= 0 && setContent('short-url', shortenDealExtreme(url));
	 url.indexOf('reichelt.de') >= 0 && setContent('short-url', shortenReichelt(url));
	 url.indexOf('amazon.') >= 0 && setContent('short-url', shortenAmazon(url));

    document.getElementById('short-url').focus();
    document.getElementById('short-url').select();
  });
});
