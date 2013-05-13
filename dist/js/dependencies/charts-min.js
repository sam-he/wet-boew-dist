/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.1-development Build: 2013-05-13 02:34 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.chartsGraph={generate:function(ah){var I={},aa,s=b(ah),ai=s,p,Z;if(typeof wet_boew_charts!=="undefined"&&wet_boew_charts!==null){I=wet_boew_charts}aa=b.extend(true,{"default-namespace":["wb-charts","wb-chart","wb-graph"],"graphclass-autocreate":true,"graphclass-overwrite-array-mode":true,"graphclass-typeof":"string","noencapsulation-autocreate":true,uniformtick:true,"uniformtick-typeof":"boolean","uniformtick-autocreate":true,"labelposition-typeof":"number","labelposition-autocreate":true,"legendinline-typeof":"boolean","legendinline-autocreate":true,"nolegend-typeof":"boolean","nolegend-autocreate":true,"percentlegend-typeof":"boolean","percentlegend-autocreate":true,"topvalue-autocreate":true,"topvalue-typeof":"number","topvaluenegative-autocreate":true,"topvaluenegative-typeof":"boolean","bottomvalue-autocreate":true,"bottomvalue-typeof":"number","bottomvaluenegative-autocreate":true,"bottomvaluenegative-typeof":"boolean","ticks-autocreate":true,"ticks-typeof":"number","decimal-autocreate":true,"decimal-typeof":"number",pieradius:100,"pieradius-typeof":"number",pielblradius:100,"pielblradius-typeof":"number","piethreshold-autocreate":true,"piethreshold-typeof":"number","pietilt-autocreate":true,"pietilt-typeof":"number","pieinnerradius-autocreate":true,"pieinnerradius-typeof":"number","piestartangle-autocreate":true,"piestartangle-typeof":"number","piehighlight-autocreate":true,"piehighlight-typeof":"number","piehoverable-autocreate":true,"piehoverable-typeof":"boolean","default-option":"type",type:"bar","type-autocreate":true,width:b(ah).width(),"width-typeof":"number",height:b(ah).height(),"height-typeof":"number",parsedirection:"x","parsedirection-typeof":"string","parsedirection-autocreate":true},I);function e(i){var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32","accent-1":"#8d201c","accent-2":"#EE8310","accent-3":"#2a7da6","accent-4":"#5a306b","accent-5":"#285228","accent-6":"#154055","accent-7":"#555555","accent-8":"#f6d200","accent-9":"#d73d38","accent-10":"#418541","accent-11":"#87aec9","accent-12":"#23447e","accent-13":"#999999"};if(typeof i==="number"){i="accent-"+(i+1)}return(j[i.toLowerCase()]!=="undefined"?j[i.toLowerCase()]:(b.isArray(aa.colors)?aa.colors[0]:aa.colors))}function n(j,ao,o){var an="",am="",ak=false,al,i;if(typeof j!=="object"){return{}}j=jQuery.extend(true,{},j);if(typeof ao!=="string"||ao.lenght===0){return j}if(typeof o!=="string"||o.lenght===0){if(j["default-namespace"]&&(typeof j["default-namespace"]==="string"||b.isArray(j["default-namespace"]))){o=j["default-namespace"]}else{return j}}if(j["default-namespace-separator"]&&typeof j["default-namespace-separator"]==="string"){an=j["default-namespace-separator"]}else{an="-"}if(j["default-separator"]&&typeof j["default-separator"]==="string"){am=j["default-separator"]}else{am=" "}if(j["default-autocreate"]){ak=true}i=ao.split(am);b.each(i,function(){var aB,av=j,ax,aw,aC,au,ay,aq,ap,at=false,az=false,aA,ar;if(b.isArray(o)){for(aw=0,aC=o.length;aw<aC;aw+=1){if(o[aw]===(this.length>o[aw].length+an.length?this.slice(0,o[aw].length):"")){al=o[aw].split(an);aB=this.split(an).slice(al.length);ax=al[al.length-1];break}}}else{if(o===(this.length>o.length+an.length?this.slice(0,o.length):"")){al=o.split(an);aB=this.split(an).slice(al.length);ax=al[al.length-1]}}if(aB&&ax){for(aw=0,aC=aB.length;aw<aC;aw+=1){ay=(aw+2===aC?true:false);aq=(aw+1===aC?true:false);if(aq&&aC===1&&j["default-option"]){ax=j["default-option"]}else{if(!aq){ax=aB[aw]}}if(av[ax+"-typeof"]){ap=[];for(au=(aw+1);au<aC;au+=1){ap.push(aB[au])}aB[aw]=ap.join(an);ay=false;aq=true;switch(av[ax+"-typeof"]){case"boolean":if(aB[aw]==="true"||aB[aw]==="1"||aB[aw]==="vrai"||aB[aw]==="yes"||aB[aw]==="oui"){aB[aw]=true}else{if(aB[aw]==="false"||aB[aw]==="0"||aB[aw]==="faux"||aB[aw]==="no"||aB[aw]==="non"){aB[aw]=false}else{aB[aw]=undefined}}break;case"number":if(!isNaN(parseInt(aB[aw],10))){aB[aw]=parseInt(aB[aw],10)}else{aB[aw]=undefined}break;case"string":break;case"undefined":case"function":case"locked":aB[aw]=undefined;break;default:break}}if(av[ax+"-overwrite-array-mode"]){at=true}if(av[ax+"-autocreate"]){az=true}if(ay&&aB[aw]!==undefined){ax=aB[aw]}else{if(aq&&aB[aw]!==undefined){if(av[ax]&&at){if(b.isArray(av[ax])){av[ax].push(aB[aw])}else{ar=av[ax];av[ax]=[];av[ax].push(ar);av[ax].push(aB[aw])}}else{if(av[ax]||ak||az||av[ax]===0||av[ax]===false){aA="";if(typeof aB[aw]==="boolean"||typeof aB[aw]==="number"){aA='{"'+ax+'": '+aB[aw]+"}"}else{aA='{"'+ax+'": "'+aB[aw]+'"}'}av=jQuery.extend(true,av,jQuery.parseJSON(aA))}}aw=aC}else{if(aB[aw]!==undefined&&av[aB[aw]]){av=av[aB[aw]];ax=aB[aw]}else{if((ak||az)&&aB[aw]!==undefined){aA='{"'+aB[aw]+'": {}}';av=jQuery.extend(true,av,jQuery.parseJSON(aA));av=av[aB[aw]]}else{aw=aC}}}}}}});return j}aa=n(aa,(b(s).attr("class")!==undefined?b(s).attr("class"):""));function af(ap){var aq,ao,an,am,az,o;for(aq=0;aq<ap.theadRowStack.length;aq+=1){az=ap.theadRowStack[aq];for(ao=0;ao<az.cell.length;ao+=1){o=az.cell[ao];if((o.type===1||o.type===7)&&(!(ao>0&&o.uid===az.cell[ao-1].uid)&&!(aq>0&&o.uid===ap.theadRowStack[aq-1].cell[ao].uid))){if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}if(aq>0){for(an=0;an<ap.theadRowStack[aq-1].cell[ao].header.length;an+=1){o.headers.push(ap.theadRowStack[aq-1].cell[ao].header[an]);ap.theadRowStack[aq-1].cell[ao].header[an].childs.push(o)}o.headers.push(ap.theadRowStack[aq-1].cell[ao]);o.header.push(ap.theadRowStack[aq-1].cell[ao]);ap.theadRowStack[aq-1].cell[ao].child.push(o)}if(o.descCell){o.descCell.header=o;o.descCell.headers=o}}}}for(aq=0;aq<ap.row.length;aq+=1){az=ap.row[aq];var ay=[],aw=[],ax=[],au=[],ak=[];if(az.headerset&&!az.idsheaderset){for(ao=0;ao<az.headerset.length;ao+=1){ay=ay.concat(az.headerset[ao])}az.idsheaderset=ay}if(az.header){for(ao=0;ao<az.header.length;ao+=1){aw=aw.concat(az.header[ao])}}aw=az.idsheaderset.concat(aw);for(ao=0;ao<az.cell.length;ao+=1){if((ao===0)||(ao>0&&az.cell[ao].uid!==az.cell[(ao-1)].uid)){o=az.cell[ao];ak=[];if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(o.col&&!o.col.dataheader){var al=o.col;var at=[],av=[];if(al.headerLevel){for(am=0;am<al.headerLevel.length;am+=1){av=av.concat(al.headerLevel[am])}}if(al.header){for(am=0;am<al.header.length;am+=1){at=at.concat(al.header[am])}}if(!al.dataheader){al.dataheader=[]}al.dataheader=al.dataheader.concat(av);al.dataheader=al.dataheader.concat(at)}if(o.col&&o.col.dataheader){ak=o.col.dataheader}if(o.type===1){if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}for(am=0;am<au.length;am+=1){if(o.colpos===(au[am].colpos+au[am].width)){var ar=au[am].child.length;if(ar===0||(ar>0&&au[am].child[ar-1].uid!==o.uid)){au[am].child.push(o)}}au[am].childs.push(o)}for(am=0;am<az.idsheaderset.length;am+=1){if(!az.idsheaderset[am].childs){az.idsheaderset[am].childs=[]}az.idsheaderset[am].childs.push(o)}o.header=o.header.concat(au);o.headers=o.headers.concat(ak);o.headers=o.headers.concat(az.idsheaderset);o.headers=o.headers.concat(au);au=au.concat(o)}if(o.type===2||o.type===3){ax=aw;if(o.addcolheaders){for(am=0;am<o.addcolheaders.length;am+=1){ak=ak.concat(o.addcolheaders[am])}}if(o.addrowheaders){for(am=0;am<o.addrowheaders.length;am+=1){ax=ax.concat(o.addrowheaders[am])}}o.headers=o.headers.concat(ak);o.headers=o.headers.concat(ax);o.header=o.headers}}}}}function U(j){j=j.replace(/\s\s+/g," ");j=j.replace(/^\s+|\s+$/g,"");var i={cellUnit:j.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/),cellValue:parseFloat(j.match(/[\+\-0-9]+[0-9,\. ]*/))};return i}var F=[],K=[],D,B;function u(j,i){var o;i+=1;F.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){if(j.child[o].child.length>0){i=u(j.child[o],i)}}i-=1;return i}function E(j,i){var o;i+=1;var al=0;al=j.flotValue-j.flotDelta;var ak=(j.flotDelta/j.child.length);if(!Z||ak<Z){Z=ak}for(o=0;o<j.child.length;o+=1){j.child[o].flotDelta=ak;al=al+ak;j.child[o].flotValue=al;if(i===D){K.push([(j.child[o].flotValue-ak),b(j.child[o].elem).text()])}if(j.child[o].child.length>0){E(j.child[o],i)}}i-=1}function J(ao){var ak=0;var o=0;var j;var al;F=[];if(!ao.colgrouphead){return}for(al=0;al<ao.colgrouphead.col[0].cell.length;al+=1){j=ao.colgrouphead.col[0].cell[al];if(al===0||(al>0&&ao.colgrouphead.col[0].cell[al-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){ak+=1;if(j.child.length>0){o=u(j,o)}}}}F.push([ak,o]);var an=F[0][0];for(al=1;al<F.length;al+=1){an=an*F[al][0]}D=ao.colgrouphead.col.length-1;K=[];var am=0;o=0;for(al=0;al<ao.colgrouphead.col[0].cell.length;al+=1){j=ao.colgrouphead.col[0].cell[al];if(al===0||(al>0&&ao.colgrouphead.col[0].cell[al-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){j.flotDelta=(an/ak);if(!Z||j.flotDelta<Z){Z=j.flotDelta}am+=j.flotDelta;j.flotValue=am;if(o===D||((j.colpos-1)<D&&D<=((j.colpos-1)+(j.width-1)))){K.push([(j.flotValue-j.flotDelta),b(j.elem).text()])}if(j.child.length>0){E(j,o)}}}}return K}function f(j,i){var o;if(j.child.length===0){return}i+=1;F.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){f(j.child[o],i)}i-=1}function y(o,j){var ak,i=o.groupZero.theadRowStack.length-1;if(o.child.length===0){return}j+=1;var am=0;am=o.flotValue;var al=(!aa.uniformtick?(o.flotDelta/o.child.length):1);if(!p||al<p){p=al}for(ak=0;ak<o.child.length;ak+=1){o.child[ak].flotDelta=al;if(j===D){K.push([(!aa.uniformtick?am:B),b(o.child[ak].elem).text()])}if(j===i||((o.rowpos-1)<i&&i<=((o.rowpos-1)+(o.height-1)))||i===((o.rowpos-1)+(o.height-1))){B+=al}o.child[ak].flotValue=am;am=am+al;y(o.child[ak],j)}j-=1}function g(ar){if(!ar.theadRowStack){return}var al=-1;var o=-1;var ao;for(ao=0;ao<ar.colgroup.length;ao+=1){if(ar.colgroup[ao].type===2){al=ar.colgroup[ao].start;o=ar.colgroup[ao].end;break}}var an=0,j,aq=0,ak=0;F=[];for(ao=0;ao<ar.theadRowStack[0].elem.cells.length;ao+=1){j=b(ar.theadRowStack[0].elem.cells[ao]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=al&&(j.type===1||j.type===7)){an+=1;aq+=j.width;f(j,ak)}}F.push([an,ak]);var am=F[0][0];for(ao=1;ao<F.length;ao+=1){am=am*F[ao][0]}D=(!aa.labelposition||(aa.labelposition&&aa.labelposition>ar.theadRowStack.length)?ar.theadRowStack.length:aa.labelposition)-1;K=[];var ap=0;B=0;ak=0;for(ao=0;ao<ar.theadRowStack[0].elem.cells.length;ao+=1){j=b(ar.theadRowStack[0].elem.cells[ao]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=al&&(j.type===1||j.type===7)){j.flotDelta=(!aa.uniformtick?(am/an):1);if(!p||j.flotDelta<p){p=j.flotDelta}j.flotValue=ap;if(ak===D||((j.rowpos-1)<D&&D<=((j.rowpos-1)+(j.height-1)))){K.push([(!aa.uniformtick?ap:B),b(j.elem).text()])}if(ak===(ar.theadRowStack.length-1)||((j.rowpos-1)<(ar.theadRowStack.length-1)&&(ar.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(ar.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){B+=j.flotDelta}ap+=j.flotDelta;y(j,ak)}}return K}function N(){var ak=[],am=0,at,al=0,ax="Table caption tag is missing",ao=10,aw=0,au,av=[],o,aq,ap,an,ar;ax=b("caption",ai).text();b("tr ",ai).each(function(){ao+=1;if(aw<1){b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}ao+=Number(b(this).attr("colspan"))})}aw+=1});for(aw=0;aw<ao;aw+=1){av[aw]=[];for(au=0;au<ao;au+=1){av[aw][au]=0}}b("tr ",ai).each(function(){al=0;var j=1,i=1;b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}if(b(this).attr("rowspan")===undefined){b(this).attr("rowspan",1)}j=Number(b(this).attr("colspan"));i=Number(b(this).attr("rowspan"));while(av[am][al]===3){al+=1}var az=am,aC=am+i-1,aB,ay,aA;if(i>1&&j>1){aB=al;ay=al+j-1;for(aB=al;aB<=ay;aB+=1){for(az=am;az<=aC;az+=1){av[az][aB]=3}}}else{if(i>1){for(az=am;az<=aC;az+=1){av[az][al]=3}}}aA=b(this).clone();aA.attr("colspan",i);aA.attr("rowspan",j);(ak[al]=ak[al]||[])[am]=aA;al=al+j});am+=1});o=b("<table>");b.each(ak,function(j){var i=b("<tr>");o.append(i);b.each(ak[j],function(ay,az){i.append(az)})});aq=o.html();ap='<table id="swappedGraph"><caption>'+ax+" (Horizontal to Vertical)</caption><thead>";aq=aq.replace(/<tbody>/gi,ap);aq=aq.replace(/<\/tbody>/gi,"</tbody></table>");aq=aq.replace(/\n/g,"");aq=aq.replace(/<tr/gi,"\n<tr");an=aq.split("\n");for(am=0,at=an.length;am<at;am+=1){ar=an[am];if(ar.match(/<td/i)!==null){an[am]="</thead><tbody>"+ar;break}}aq=an.join("\n");b(aq).insertAfter(ai).hide();return b(aq)}if(aa.parsedirection==="y"){s=N(ai)}if(!b(s).data().tblparser){a.fn.parsertable.parse(b(s))}var O={"default-option":"type","default-namespace":["wb-charts","wb-chart","wb-graph"],"type-autocreate":true,"color-typeof":"string","color-autocreate":true},C=b(s).data().tblparser,X,P;af(C);X=g(C);P=J(C);K=X;var W=[],q,k=[],G=0,m,t,ag,ae,ac,d,H,v,ab;if(aa.type==="pie"){var Y,S=b("<figure />").insertAfter(ai),c;Y=function(j,o){var i;if(!aa.decimal){i=Math.round(o.percent)}else{i=Math.round(o.percent*Math.pow(10,aa.decimal));i=i/Math.pow(10,aa.decimal)}if(aa.nolegend){i=j+"<br/>"+i}return i+"%"};S.addClass("wb-charts");if(aa.graphclass){if(b.isArray(aa.graphclass)){for(ag=0,c=aa.graphclass.length;ag<c;ag+=1){S.addClass(aa.graphclass[ag])}}else{S.addClass(aa.graphclass)}}ac=b("<figcaption />");b(S).append(ac);d=b("caption",ai).html();var M=b("caption",ai).text();b(ac).append(d);var V=(C.colgroup[0].type===1?C.colgroup[1]:C.colgroup[0]);for(t=C.lstrowgroup[0].row.length-1;t>=0;t-=1){for(ag=0;ag<V.col.length;ag+=1){k=[];G=0;for(ae=0;ae<V.col[ag].cell.length;ae+=1){if(V.col[ag].cell[ae].rowgroup.type!==2||(ae>0&&V.col[ag].cell[ae-1].rowgroup.uid!==V.col[ag].cell[ae].rowgroup.uid)){break}m=V.col[ag].cell[ae].row.header;k.push([G,U(b(V.col[ag].cell[t].elem).text()).cellValue]);G+=m[m.length-1].flotDelta}var R=n(O,(b(V.col[ag].cell[t].elem).attr("class")!==undefined?b(V.col[ag].cell[t].elem).attr("class"):""));W.push({data:k,label:b(V.col[ag].dataheader[V.col[ag].dataheader.length-1].elem).text(),color:(!R.color?e(ag):e(R.color))})}H=b("<div />");var h="";if(C.lstrowgroup[0].row.length===1&&(b(C.lstrowgroup[0].row[0].header[0].elem).html()===d||C.lstrowgroup[0].row[0].header.length===0)){h=M;b(S).append(H)}else{var x=b("<figure />").appendTo(S),Q=b("<figcaption />");m=C.lstrowgroup[0].row[t].header;h=b(m[m.length-1].elem).text();x.append(Q);Q.append(b(m[m.length-1].elem).html());x.append(H)}H.css("height",aa.height).css("width",aa.width);H.attr("role","img");H.attr("aria-label",h+" "+a.dic.get("%table-following"));var z={series:{pie:{show:true}}};if(aa.nolegend){z.legend={show:false}}if(aa.percentlegend){z.series.pie.radius=aa.pieradius/100;z.series.pie.label={show:true,radius:aa.pielblradius/100,formatter:Y};if(aa.piethreshold){z.series.pie.label.threshold=aa.piethreshold/100}}if(aa.pietilt){z.series.pie.tilt=aa.pietilt/100}if(aa.pieinnerradius){z.series.pie.innerRadius=aa.pieinnerradius/100}if(aa.piestartangle){z.series.pie.startAngle=aa.piestartangle/100}if(aa.piehighlight){z.series.pie.highlight=aa.piehighlight/100}if(aa.piehoverable){z.grid={hoverable:true}}b.plot(H,W,z);if(!aa.legendinline){b(".legend > div",H).remove();b(".legend > table",H).removeAttr("style").addClass("font-small");H.css("height","auto")}W=[]}if(!aa.noencapsulation){v=b("<details />");ab=b("<summary />");b(v).appendTo(S);b(ab).text(d+" "+a.dic.get("%table-mention")).appendTo(v).after(ai);a.polyfills.enhance("detailssummary",v)}else{b(ai).appendTo(S)}if(aa.parsedirection==="y"){b(s).remove()}return}var L=0,w,T;for(ag=0;ag<C.lstrowgroup[0].row.length;ag++){T=n(O,(b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).attr("class")!==undefined?b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).attr("class"):""));if((!T.type&&(aa.type==="bar"||aa.type==="stacked"))||(T.type&&(T.type==="bar"||T.type==="stacked"))){L+=1;T.chartBarOption=L;if(!w&&((T.type&&T.type==="bar")||(!T.type&&aa.type==="bar"))){w=true}}C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].chartOption=T}for(ag=0;ag<C.lstrowgroup[0].row.length;ag++){k=[];var aj=0;G=0;T=C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].chartOption;for(ae=0;ae<C.lstrowgroup[0].row[ag].cell.length;ae++){if(aj>1&&C.lstrowgroup[0].row[ag].cell[ae].col.groupstruct.type!==2){break}if(C.lstrowgroup[0].row[ag].cell[ae].col.groupstruct.type===2){m=C.lstrowgroup[0].row[ag].cell[ae].col.header;var l=G;if(w&&T.chartBarOption){l=G-(p/2)+((p/L)*(T.chartBarOption-1));if(L===1){l=G}}k.push([l,U(b(C.lstrowgroup[0].row[ag].cell[ae].elem).text()).cellValue]);G+=m[m.length-1].flotDelta;aj++}}if(!T.type){T.type=aa.type}if(T.type==="line"){W.push({data:k,label:b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).text(),color:(!T.color?e(ag):e(T.color))})}else{if(T.type==="area"){W.push({data:k,label:b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).text(),color:(!T.color?e(ag):e(T.color)),lines:{show:true,fill:true}})}else{if(T.type==="bar"||(w&&T.type==="stacked")){W.push({data:k,label:b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).text(),color:(!T.color?e(ag):e(T.color)),bars:{show:true,barWidth:(1/L*0.9),align:"center"}})}else{if(T.type==="stacked"){W.push({data:k,label:b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).text(),color:(!T.color?e(ag):e(T.color)),bars:{show:true,barWidth:0.9,align:"center"}})}else{if(T.type==="pie"){W.push({data:k,label:b(C.lstrowgroup[0].row[ag].header[C.lstrowgroup[0].row[ag].header.length-1].elem).text(),color:(!T.color?e(ag):e(T.color))});q=true}}}}}}var r=b("<figure />").insertAfter(ai),ad;r.addClass("wb-charts");if(aa.graphclass){if(b.isArray(aa.graphclass)){for(ag=0,ad=aa.graphclass.length;ag<ad;ag+=1){r.addClass(aa.graphclass[ag])}}else{r.addClass(aa.graphclass)}}ac=b("<figcaption />");b(r).append(ac);d=b("caption",ai).html();b(ac).append(d);H=b("<div />");b(r).append(H);H.css("height",aa.height).css("width",aa.width);H.attr("role","img");H.attr("aria-label",b("caption",ai).text()+" "+a.dic.get("%table-following"));if(!aa.noencapsulation){v=b("<details />");ab=b("<summary />");b(v).appendTo(r);b(ab).text(d+" "+a.dic.get("%table-mention")).appendTo(v).after(ai);a.polyfills.enhance("detailssummary",v)}else{b(ai).appendTo(r)}var A={xaxis:(K.length>0?{ticks:K}:{})};if(aa.topvalue){if(!A.yaxis){A.yaxis={}}if(aa.topvaluenegative){aa.topvalue*=-1}A.yaxis.max=aa.topvalue}if(aa.bottomvalue){if(!A.yaxis){A.yaxis={}}if(aa.bottomvaluenegative){aa.bottomvalue*=-1}A.yaxis.min=aa.bottomvalue}if(aa.steps){if(!A.yaxis){A.yaxis={}}A.yaxis.ticks=aa.steps}b.plot(H,W,A);if(!aa.legendinline){b(".legend > div",H).remove();b(".legend > table",H).removeAttr("style").addClass("font-small");H.css("height","auto")}if(aa.nolegend){b(".legend",H).remove()}if(aa.parsedirection==="y"){b(s).remove()}}};window.pe=a;return a}(jQuery));