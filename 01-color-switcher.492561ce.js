!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}var n,e=document.getElementById("startButton"),o=document.getElementById("stopButton");e.addEventListener("click",(function(){this.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor=t()}),1e3)})),o.addEventListener("click",(function(){e.disabled=!1,clearInterval(n)})),console.log(t)}();
//# sourceMappingURL=01-color-switcher.492561ce.js.map
