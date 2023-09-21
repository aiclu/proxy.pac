"use strict";
/*
* Generated from https://github.com/NewFuture/pac
* see all pac files https://pac.newfuture.cc
*/
var domains = {
    "google.com": 1,
    "youtube.com": 1
};
 
var proxy = "SOCKS5 desktop-m0ekchs:7890; SOCKS desktop-m0ekchs:7890; PROXY desktop-m0ekchs:7890; DIRECT;";
 
var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
};