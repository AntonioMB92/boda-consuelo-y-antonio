parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cWTO":[function(require,module,exports) {
var e=function(){var e=new Date("November 30, 2024 16:30:00").getTime()-new Date,t=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),n=Math.floor(e%36e5/6e4),o=Math.floor(e%6e4/1e3);document.querySelector(".day").innerText=t,document.querySelector(".hour").innerText=a<10?"0"+a:a,document.querySelector(".minute").innerText=n<10?"0"+n:n,document.querySelector(".second").innerText=o<10?"0"+o:o};setInterval(e,1e3);var t=document.getElementById("audio"),a=document.getElementById("playIcon");function n(e){return!e.paused}function o(){n(t)?(t.pause(),a.classList.remove("fa-pause"),a.classList.add("fa-play")):(t.play(),a.classList.add("fa-pause"),a.classList.remove("fa-play"))}var r=document.getElementById("playBtn");r.onclick=o,document.body.onload=function(){n(t)&&(a.classList.add("fa-pause"),a.classList.remove("fa-play"))};
},{}]},{},["cWTO"], null)
//# sourceMappingURL=app.bed32e33.js.map