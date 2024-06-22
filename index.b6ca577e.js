var t=Array.from(document.querySelectorAll(".population")).map(function(t){return parseInt(t.textContent.replace(/,/g,""),10)}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,r=e.toLocaleString(),o=Math.round(n).toLocaleString();document.querySelector(".total").textContent=r,document.querySelector(".average").textContent=o;
//# sourceMappingURL=index.b6ca577e.js.map
