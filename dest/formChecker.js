javascript:(function(){var e=function(e,n){var o=$("<div class='formChecker_notice'>"+n+"</div>");e.append(o),o.delay(1).queue(function(e){$(this).addClass("active"),e()}).delay(700).queue(function(e){$(this).removeClass("active"),e()}).delay(200).queue(function(e){$(this).remove(),e()})},n=function(){$.fn.serializeObject=function(){var e=this,n={},o={},r={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/};return this.build=function(e,n,o){return e[n]=o,e},this.push_counter=function(e){return void 0===o[e]&&(o[e]=0),o[e]++},$.each($(this).serializeArray(),function(){if(r.validate.test(this.name)){for(var o,t=this.name.match(r.key),a=this.value,i=this.name;void 0!==(o=t.pop());)i=i.replace(new RegExp("\\["+o+"\\]$"),""),o.match(r.push)?a=e.build([],e.push_counter(i),a):o.match(r.fixed)?a=e.build([],o,a):o.match(r.named)&&(a=e.build({},o,a));n=$.extend(!0,n,a)}}),n};var n=$("<div class='formChecker'></div>"),o='<div class="formChecker_box">\n           <div class="formChecker_inputBox">\n               <input type="text" class="formChecker_input" value="form" placeholder="Enter the selector of the form (exp. #form .form form">\n           </div>\n           <textarea class="formChecker_textarea" placeholder="If you push Get-Code button, The form Json will be filled in here"></textarea>\n           <div class="formChecker_btnWrap">\n               <button class="formChecker_bottomBtn formCheckerJson">Get Code</button>\n               <button class="formChecker_bottomBtn formCheckerSave">Save</button>\n               <button class="formChecker_bottomBtn formCheckerLoad">Load</button>\n               <button class="formChecker_bottomBtn formCheckerAuto">Auto Fill</button>\n           </div>\n        </div>';n.append(o);var r="<style>\n        .formChecker{\n            background-color:rgba(0,0,0,0.3);\n            width:100%;\n            height:100%;\n            position:fixed;\n            top:0;\n            left:0;\n        }\n        .formChecker * {\n            -webkit-box-sizing: border-box;\n            -moz-box-sizing: border-box;\n            box-sizing: border-box;\n        }\n        .formChecker_box{\n            position:absolute;\n            background-color:#FFFFFF;\n            top:50%;\n            left:50%;\n            width:500px;\n            margin-left:-250px;\n            margin-top: -78px;\n            padding: 10px;\n            border-radius:5px;\n        }\n        .formChecker_inputBox{\n            width:100%;\n            margin-bottom:5px;\n            border: 1px solid #CCCCCC;\n        }\n        .formChecker_input{\n            width:100%;\n            display:table-cell;\n            line-height: 25px;\n        }\n        .formChecker_btnWrap{\n            display:table;\n            margin-top:5px;\n            float:right;\n        }\n        .formChecker_btn{\n            display: table-cell;\n            width: 1px;\n            white-space: nowrap;\n            background-color: #333333;\n            color: #FFF;\n            line-height: 25px;\n            z-index: 1;\n            padding: 0 20px;\n            -webkit-border-bottom-right-radius: 3px;\n                    border-bottom-right-radius: 3px;\n            -webkit-border-top-right-radius: 3px;\n                    border-top-right-radius: 3px;\n            cursor: pointer;\n        }\n        .formChecker_textarea{\n            border-radius: 3px;\n            border: 1px solid #CCCCCC;\n            width: 100%;\n            height: 100px;\n        }\n        .formChecker_bottomBtn{\n            background-color: #333333;\n            color: #FFF;\n            line-height: 25px;\n            padding: 0 20px;\n            border:none;\n            -webkit-transition: background-color .3s;\n            -o-transition: background-color .3s;\n            transition: background-color .3s;\n        }\n        .formChecker_bottomBtn:hover{\n            background-color: #AAAAAA;\n        }\n        .formChecker_bottomBtn:first-child{\n            border-bottom-left-radius:3px;\n            border-top-left-radius:3px;\n        }\n        .formChecker_bottomBtn:last-child{\n            border-bottom-right-radius:3px;\n            border-top-right-radius:3px;\n        }\n        .formChecker_notice{\n            position: fixed;\n            top: 50%;\n            left: 0;\n            background-color:rgba(0,0,0,0);\n            padding: 10px;\n            color:#FFFFFF;\n            text-align: center;\n            width: 100%;\n            -webkit-transition: background-color .2s ease-in;\n               -moz-transition: background-color .2s ease-in;\n                -ms-transition: background-color .2s ease-in;\n                 -o-transition: background-color .2s ease-in;\n                    transition: background-color .2s ease-in;\n        }\n        .formChecker_notice.active{\n            background-color:rgba(0,0,0,0.9);\n        }\n        </style>";n.append(r),$("body").append(n),$(document).on("click",".formChecker",function(e){$(e.target).hasClass("formChecker")&&$(this).remove()}),$(document).on("keydown",".formChecker_input",function(e){var n=$(".formChecker_input").val();13===e.which&&$(".formChecker_textarea").val(JSON.stringify($(n).serializeObject(),null,4))}),$(document).on("click",".formCheckerJson",function(o){var r=$(".formChecker_input").val();$(".formChecker_textarea").val(JSON.stringify($(r).serializeObject(),null,4)),e(n,"Finished filling in the textarea")}),$(document).on("click",".formCheckerSave",function(o){var r=location.pathname,t=$(".formChecker_input").val()+r,a=JSON.stringify($(".formChecker_textarea").val());localStorage.setItem(t,a),e(n,"The data is saved in the localstorage")}),$(document).on("click",".formCheckerLoad",function(o){var r=location.pathname,t=$(".formChecker_input").val()+r,a=JSON.parse(localStorage.getItem(t));$(".formChecker_textarea").val(a),e(n,"The data is loaded from the localstorage")}),$(document).on("click",".formCheckerAuto",function(o){var r=JSON.parse($(".formChecker_textarea").val());for(var t in r){var a=$("[name='"+t+"']"),i=$("[name^='"+t+"\\[']"),c=a.attr("type")||i.attr("type"),d=r[t];if("hidden"!=c)if("radio"==c||"checkbox"==c)Array.isArray(d)?i.each(function(){for(var e=0,n=d.length;n>e;e++)$(this).val()==d[e]&&($(this).click(),$(this).prop("checked",!0))}):a.each(function(){$(this).val()==d&&($(this).click(),$(this).prop("checked",!0))});else if(Array.isArray(d)){var s=0;i.each(function(){$(this).val(d[s]),s++})}else a.val(d)}e(n,"Finished filling in the form")})};if(void 0===window.jQuery){var o=!1,r=document.createElement("script");r.src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",r.onload=r.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,n())},document.getElementsByTagName("head")[0].appendChild(r)}else n()})();