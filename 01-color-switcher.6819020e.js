let t;const e=document.getElementById("startButton"),n=document.getElementById("stopButton");e.addEventListener("click",(function(){this.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)})),console.log(e);
//# sourceMappingURL=01-color-switcher.6819020e.js.map
