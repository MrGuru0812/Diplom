!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=function(){document.querySelectorAll(".panel-heading");var e=document.querySelectorAll('a[data-parent="#accordion"]'),t=document.getElementById("collapseOne"),n=document.getElementById("collapseTwo"),l=document.getElementById("collapseThree"),o=document.getElementById("collapseFour");t.style.maxHeight=t.scrollHeight+"px",e.forEach((function(e){e.addEventListener("click",(function(u){u.preventDefault(),e.closest("#headingOne")&&("none"===t.style.display?(t.style.display="block",n.style.display="none",l.style.display="none",o.style.display="none"):t.style.display="block"),(e.closest("#headingTwo")||e.matches(".btnOne"))&&("block"===n.style.display?n.style.display="block":(t.style.display="none",n.style.display="block",l.style.display="none",o.style.display="none")),(e.closest("#headingThree")||e.matches(".btnTwo"))&&("block"===l.style.display?l.style.display="block":(t.style.display="none",n.style.display="none",l.style.display="block",o.style.display="none")),(e.closest("#headingFour")||e.matches(".btnThree"))&&("block"===o.style.display||(t.style.display="none",n.style.display="none",l.style.display="none"),o.style.display="block")}))}))},o=function(){var e=document.querySelectorAll(".col-xs-12.col-sm-6.col-md-4"),t=document.querySelector(".add-sentence-btn");t.addEventListener("click",(function(n){n.preventDefault(),e.forEach((function(e){(e.matches(".visible-sm-block")||e.matches(".hidden"))&&(e.classList.remove("visible-sm-block","hidden"),t.style.cssText="transform: scale(0)")}))}))},u=function(){var e=document.querySelectorAll(".pan"),t=document.getElementById("collapseTwo-two"),n=document.getElementById("collapseThree-two");t.classList.remove("in"),n.classList.remove("in"),e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.children[1].classList.remove("in")})),t.children[1].classList.add("in")}))}))},r=function(){var e=function(e,t,n,l){e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),t.style.display="block"}))})),t.addEventListener("click",(function(e){var n=function(){t.style.display="none"},l=e.target;l.matches(".popup-close")?(e.preventDefault(),n()):(l=l.closest(".popup-content"))||n()}))};!function(){var t=document.querySelector(".popup-call"),n=document.querySelectorAll(".call-btn");document.querySelectorAll(".popup-content")[0],document.querySelectorAll(".capture-form")[1];e(n,t)}();!function(){var t=document.querySelectorAll(".discount-btn"),n=document.querySelector(".popup-discount");document.querySelectorAll(".popup-content")[1],document.querySelectorAll(".capture-form")[2];e(t,n)}();!function(){var t=document.querySelectorAll(".gauging-button"),n=document.querySelector(".popup-check");document.querySelectorAll(".popup-content")[2],document.querySelectorAll(".capture-form")[3];e(t,n)}();!function(){var t=document.querySelectorAll(".btnFour"),n=document.querySelector(".popup-discount-calculation");document.querySelectorAll(".popup-content")[4],document.querySelectorAll(".capture-form")[5];e(t,n)}();!function(){var t=document.querySelectorAll(".consultation-btn"),n=document.querySelector(".popup-consultation");document.querySelectorAll(".popup-content")[3],document.querySelectorAll(".capture-form")[4];e(t,n)}()};function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,r=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){a=!0,u=e},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw u}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.obj={priseOne:1e4,priseTwo:15e3,wellTwo:0,wellOne:0},this.obj2={result:0,distance:0,diameter1:"1.4 метра",diameter2:"1.4 метра",number1:"1 штука",number2:"1 штука"},this.elemDoc={formDiameterOne:document.querySelectorAll(".form-control")[0],formNumberOne:document.querySelectorAll(".form-control")[1],formDiameterTwo:document.querySelectorAll(".form-control")[2],formNumberTwo:document.querySelectorAll(".form-control")[3],inputDistance:document.querySelector(".distance"),calcResult:document.getElementById("calc-result")},this.error=new Set}var t,n,l;return t=e,(n=[{key:"maskPhoneUse",value:function(){document.querySelectorAll(".phone-user").forEach((function(e){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+7 (___) ___-__-__";function n(n){var l=n.keyCode,o=t,u=o.replace(/\D/g,""),r=e.value.replace(/\D/g,""),a=0,c=o.replace(/[_\d]/g,(function(e){return a<r.length?r.charAt(a++)||u.charAt(a):e}));-1!==(a=c.indexOf("_"))&&(c=c.slice(0,a));var i=o.substr(0,e.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(e.value)||e.value.length<5||l>47&&l<58)&&(e.value=c),"blur"===n.type&&e.value.length<5&&(e.value="")}e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}()}))}},{key:"start",value:function(){this.inputCheck(),this.maskPhoneUse(),this.calculator(),this.sendForm()}},{key:"inputCheck",value:function(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("input",(function(){"user_name"===e.name&&(e.value=e.value.replace(/[^а-яё\s]/gi,""),e.setAttribute("maxlength","25")),"user_phone"===e.name&&e.setAttribute("maxlength","18"),"user_quest"===e.name&&(e.value=e.value.replace(/[^a-zа-яё\s\d?!\.,:;]/gi,""),e.setAttribute("maxlength","120")),e.matches(".distance")&&(e.value=e.value.replace(/\D/,""),e.setAttribute("maxlength","10"))}))}))}},{key:"calculator",value:function(){var e=this,t=document.getElementById("calc-result"),n=document.querySelector(".sumpTwo"),l=document.querySelectorAll(".form-control")[0],o=document.querySelectorAll(".form-control"),u=document.querySelectorAll(".form-control")[2],r=document.querySelectorAll(".form-control")[1],a=document.querySelectorAll(".form-control")[3],c=document.querySelector(".btnFour"),i=document.getElementById("collapseFour"),s=document.querySelector(".distance"),d=document.getElementById("myonoffswitch"),v=document.getElementById("myonoffswitch-two");d.checked&&(n.style.cssText="display: none"),d.checked&&(n.style.cssText="display: none",t.value=+e.obj.priseOne+1e3,o.forEach((function(n){n.addEventListener("change",(function(){"1.4 метра"===l.value&&("1 штука"===r.value&&(t.value=1e4),"2 штуки"===r.value?t.value=13e3:"3 штуки"===r.value&&(t.value=15e3)),"2 метра"===l.value&&(t.value=12e3,"1 штука"===r.value&&(t.value=12e3),"2 штуки"===r.value?t.value=15e3:"3 штуки"===r.value&&(t.value=17e3)),e.obj.wellOne=t.value,t.value=+t.value+1e3}))}))),d.addEventListener("change",(function(){d.checked?(n.style.cssText="display: none",t.value=+e.obj.priseOne+1e3,o.forEach((function(n){n.addEventListener("change",(function(){"1.4 метра"===l.value&&("1 штука"===r.value&&(t.value=1e4),"2 штуки"===r.value?t.value=13e3:"3 штуки"===r.value&&(t.value=15e3)),"2 метра"===l.value&&(t.value=12e3,"1 штука"===r.value&&(t.value=12e3),"2 штуки"===r.value?t.value=15e3:"3 штуки"===r.value&&(t.value=17e3)),e.obj.wellOne=t.value,t.value=+t.value+1e3}))}))):d.checked||(n.style.display="block",t.value=+e.obj.priseTwo+2e3,o.forEach((function(o){o.addEventListener("change",(function(){"block"===n.style.display&&("1.4 метра"===l.value&&"1.4 метра"===u.value&&("1 штука"===r.value&&("1 штука"===a.value?t.value=15e3:"2 штуки"===a.value?t.value=19500:"3 штуки"===a.value&&(t.value=22500)),"2 штуки"===r.value&&("1 штука"===a.value?t.value=19500:"2 штуки"===a.value?t.value=24e3:"3 штуки"===a.value&&(t.value=27e3)),"3 штуки"===r.value&&("1 штука"===a.value?t.value=22500:"2 штуки"===a.value?t.value=27e3:"3 штуки"===a.value&&(t.value=3e4))),("2 метра"===l.value&&"1.4 метра"===u.value||"1.4 метра"===l.value&&"2 метра"===u.value)&&(e.elemDoc.calcResult.value=18e3,"1 штука"===r.value&&("1 штука"===a.value?t.value=18e3:"2 штуки"===a.value?t.value=22500:"3 штуки"===a.value&&(t.value=25500)),"2 штуки"===r.value&&("1 штука"===a.value?e.elemDoc.calcResult.value=22500:"2 штуки"===a.value?t.value=27e3:"3 штуки"===a.value&&(t.value=3e4)),"3 штуки"===r.value&&("1 штука"===a.value?t.value=25500:"2 штуки"===a.value?t.value=3e4:"3 штуки"===a.value&&(t.value=33e3))),"2 метра"===l.value&&"2 метра"===u.value&&(t.value=21e3,"1 штука"===e.elemDoc.formNumberOne.value&&("1 штука"===a.value?t.value=21e3:"2 штуки"===a.value?t.value=25500:"3 штуки"===a.value&&(t.value=28500)),"2 штуки"===r.value&&("1 штука"===a.value?t.value=25500:"2 штуки"===a.value?t.value=3e4:"3 штуки"===a.value&&(t.value=33e3)),"3 штуки"===r.value&&("1 штука"===a.value?t.value=28500:"2 штуки"===a.value?t.value=33e3:"3 штуки"===a.value&&(t.value=36e3))),e.obj.wellTwo=t.value,t.value=+t.value+2e3)}))})))})),v.addEventListener("change",(function(){v.checked?("none"===n.style.display&&(+e.obj.wellOne>0?t.value=+e.obj.wellOne+1e3:0==+e.obj.wellOne&&(t.value=+e.obj.priseOne+1e3)),"block"===n.style.display&&(+e.obj.wellTwo>0?t.value=+e.obj.wellTwo+2e3:0==+e.obj.wellTwo&&(t.value=+e.obj.priseTwo+2e3))):v.checked||("none"===n.style.display&&(+e.obj.wellOne>0?t.value=+e.obj.wellOne:t.value=+e.obj.priseOne),"block"===n.style.display&&(+e.obj.wellTwo>0?t.value=+e.obj.wellTwo:t.value=+e.obj.priseTwo))}));var m=function(){e.obj2.diameter2="",e.obj2.number2=""};o.forEach((function(t){t.addEventListener("change",(function(){"block"===n.style.display&&(t===l?e.obj2.diameter1=t.value:t===r?e.obj2.number1=t.value:t===u?e.obj2.diameter2=t.value:t===a&&(e.obj2.number2=t.value)),"none"===n.style.display&&(t===l?e.obj2.diameter1=t.value:t===r&&(e.obj2.number1=t.value),m())}))})),s.addEventListener("input",(function(){e.obj2.result=+t.value,e.obj2.distance=+s.value})),c.addEventListener("click",(function(){"none"===n.style.display&&m(),"block"===i.style.display&&(i.style.display="none")}))}},{key:"sendForm",value:function(){var e=this,t=document.querySelector(".main-form"),n=document.querySelectorAll(".capture-form")[0],l=document.querySelectorAll(".capture-form")[1],o=document.querySelectorAll(".capture-form")[2],u=document.querySelectorAll(".capture-form")[3],r=document.querySelectorAll(".capture-form")[5],c=document.querySelectorAll(".capture-form")[4],i=document.querySelector(".director-form"),s=document.querySelector(".popup-discount"),d=document.querySelector(".popup-discount-calculation"),v=document.querySelector(".popup-call"),m=document.querySelector(".popup-check"),f=document.querySelector(".popup-consultation"),p=document.createElement("div");p.classList.add("statusmessage");var y=document.createElement("div");y.classList.add("statusdiv");var b=function(t,n){var l,o=[],u=a(n.elements);try{for(u.s();!(l=u.n()).done;){var r=l.value;"button"!==r.tagName.toLowerCase()&&"button"!==r.type&&o.push(r)}}catch(e){u.e(e)}finally{u.f()}o.forEach((function(n){""===n.value.trim()||"user_phone"===n.name&&!/^[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}$/.test(n.value)||"user_name"===n.name&&!/^[а-яё\s]+$/i.test(n.value)?(t.preventDefault(),n.style.border="2px solid red",e.error.add(n)):(t.preventDefault(),e.error.delete(n),n.style.border="")}))},h=function(t,n,l,o){e.error.size||(function(e,t,n,l){e.preventDefault(),t.appendChild(y),y.appendChild(p),p.textContent="Идёт отправка";var o={},u=new FormData(t);if(n){var r,c=a(n.elements);try{for(c.s();!(r=c.n()).done;){var i=r.value;"button"!==i.tagName.toLowerCase()&&"button"!==i.type&&u.append(i.name,i.value)}}catch(e){c.e(e)}finally{c.f()}}if(l)for(var s in l)o[s]=l[s];u.forEach((function(e,t){o[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",cache:"default"})}(o).then((function(e){if(200!==e.status)throw new Error("status network not 200");p.textContent="Сообщение отправлено"})).catch((function(e){p.style.color="#bd1717",p.textContent="Что-то пошло не так...",console.error(e)})),setTimeout((function(){t.removeChild(y)}),3e3)}(t,n,l,o),function(t,n,l){var o,u=a(t.elements);try{for(u.s();!(o=u.n()).done;){var r=o.value;"button"!==r.tagName.toLowerCase()&&"button"!==r.type&&(r.value="",r.removeAttribute("required"))}}catch(e){u.e(e)}finally{u.f()}if(n){var c,i=a(n.elements);try{for(i.s();!(c=i.n()).done;){var s=c.value;"button"!==s.tagName.toLowerCase()&&"button"!==s.type&&(s.value="",s.removeAttribute("required"))}}catch(e){i.e(e)}finally{i.f()}}l&&(e.elemDoc.calcResult.value="",e.elemDoc.inputDistance.value="",e.obj={priseOne:1e4,priseTwo:15e3,wellTwo:0,wellOne:0},e.obj2={result:0,distance:0,diameter1:"1.4 метра",diameter2:"1.4 метра",number1:"1 штука",number2:"1 штука"},e.elemDoc.formDiameterOne.value="1.4 метра",e.elemDoc.formNumberOne.value="1 штука",e.elemDoc.formDiameterTwo.value="1.4 метра",e.elemDoc.formNumberTwo.value="1 штука")}(n,l,o))},g=function(t){e.error.size||setTimeout((function(){t.style.display="none"}),6e3)};t.addEventListener("submit",(function(e){e.preventDefault(),b(e,t),h(e,t)})),n.addEventListener("submit",(function(e){e.preventDefault(),b(e,n),h(e,n)})),l.addEventListener("submit",(function(e){e.preventDefault(),b(e,l),h(e,l),g(v)})),o.addEventListener("submit",(function(e){e.preventDefault(),b(e,o),h(e,o),g(s)})),u.addEventListener("submit",(function(e){e.preventDefault(),b(e,u),h(e,u),g(m)})),c.addEventListener("submit",(function(e){e.preventDefault(),b(e,c),h(e,c,i),g(f)})),r.addEventListener("submit",(function(t){t.preventDefault(),b(t,r),h(t,r,null,e.obj2),g(d)}))}}])&&i(t.prototype,n),l&&i(t,l),e}());l(),o(),s.start(),u(),r()}]);