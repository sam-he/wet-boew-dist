/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.5-development Build: 2013-09-17 12:55 PM EDT
 *
 */
(function(a){a.fn.datalist=function(){return a(this).each(function(g){var h=a(this),k=this.id,e=k+"-label",i=pe.main.find("label").filter("[for="+k+"]"),m=a("#"+h.attr("list")),f,n,d=[],j,c,l,b;if(i.length!==0){i.attr("id",e)}j=function(q){var o,p;if(q.length!==0){o=q.toLowerCase();p=n.filter(function(){var s=a(this),r=s.find("span.al-value").html();if(r.length===0){r=s.find("span.al-label").html()}return(o.length===0||r.toLowerCase().indexOf(o)!==-1)})}else{p=n}f.empty().append(p);if(p.length!==0){l();f.removeClass("al-hide");h.attr("aria-expanded","true")}else{f.addClass("al-hide");h.attr("aria-expanded","false")}};c=function(){f.addClass("al-hide").empty();h.attr({"aria-expanded":"false","aria-activedescendent":""})};l=function(){f.css("width",h.innerWidth());if(pe.preIE8){f.css("top",h.innerHeight()+13)}};pe.resize(l);m.find("option").each(function(r){var q=a(this),p=q.attr("value"),o=q.attr("label");if(typeof p==="undefined"){p=q.text()}d.push('<li class="al-option" id="al-option-'+g+"-"+r+'"><a href="javascript:;"><span class="al-value">'+(typeof p!=="undefined"?p:"")+'</span><span class="al-label">'+(typeof o!=="undefined"&&p!==o?o:"")+"</span></a></li>")});h.attr({autocomplete:"off",role:"textbox","aria-haspopup":"true","aria-autocomplete":"list","aria-owns":"wb-autolist-"+g,"aria-activedescendent":""}).wrap('<div class="wb-al-container" role="application" aria-'+(i.length!==0?'labelledby="'+e:'-label="'+h.attr("title"))+'"/>');b=h.parent();f=a('<ul role="listbox" id="wb-autolist-'+g+'" class="wb-autolist al-hide" aria-hidden="true" aria-live="polite"></ul>');n=a(d.join(""));h.after(f);h.on("keyup keydown click vclick touchstart focus",function(s){var q=s.type,p=s.button,r=s.keyCode,o;if(q==="keyup"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if((r>47&&r<91)||(r>95&&r<112)||(r>185&&r<223)||r===32||r===8){j(h.val())}}}else{if(q==="keydown"){if(!(s.ctrlKey||s.metaKey)){if(!s.altKey&&!f.hasClass("al-hide")){if(r===27){c();return false}else{if((r===38||r===40)&&h.attr("aria-activedescendent")===""){if(r===38){o=f.find("a").last()}else{o=f.find("a").eq(0)}h.attr("aria-activedescendent",o.parent().attr("id"));pe.focus(o);return false}}}else{if(r===38||r===40){j("");return false}}}}else{if(q==="click"||q==="vclick"){if(typeof p==="undefined"||p===pe.leftMouseButton){if(!f.hasClass("al-hide")){c()}}return false}else{if(pe.preIE8&&q==="focus"){f.addClass("al-hide").empty()}}}}});f.on("keyup keydown click vclick touchstart","a, span",function(s){var u=s.type,x=s.keyCode,q=s.button,t=a(s.target),o,r,w,p=h.val(),v;if(u==="keyup"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if((x>47&&x<91)||(x>95&&x<112)||(x>185&&x<223)||x===32){h.val(p+String.fromCharCode(x));pe.focus(h);j(h.val())}else{if(x===8){if(h.val().length>0){h.val(p.substring(0,p.length-1));j(h.val())}pe.focus(h)}}}}else{if(u==="keydown"){if(!(s.ctrlKey||s.altKey||s.metaKey)){if(x===13){v=t.find("span.al-value").html();if(v.length===0){v=t.find("span.al-label").html()}h.val(v);pe.focus(h);c();return false}else{if(x===9||x===27){pe.focus(h);c();return false}else{if(x===38||x===40){o=f.find("a");if(o.length!==0){r=o.index(t);if(x===38){w=((r-1)===-1?o.last():o.eq(r-1))}else{w=((r+1)===o.length?o.eq(0):o.eq(r+1))}h.attr("aria-activedescendent",w.parent().attr("id"));pe.focus(w)}return false}}}}}else{if(u==="click"||u==="vclick"||u==="touchstart"){if(typeof q==="undefined"||q===pe.leftMouseButton){if(!t.hasClass("al-option")){t=t.parent()}v=t.find("span.al-value").html();if(v.length===0){v=t.find("span.al-label").html()}h.val(v);pe.focus(h);c()}}}}});pe.document.on("click vclick touchstart",function(p){var o=p.button;if(typeof o==="undefined"||o===pe.leftMouseButton){if(!f.hasClass("al-hide")&&!a(p.target).is(h)){c()}}})})};a("input[list]").datalist()}(jQuery));