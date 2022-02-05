var K=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Ee=K(G=>{(function(i){i.parser=function(n,e){return new s(n,e)},i.SAXParser=s,i.SAXStream=O,i.createStream=Me,i.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];i.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function s(n,e){if(!(this instanceof s))return new s(n,e);var c=this;l(c),c.q=c.c="",c.bufferCheckPosition=i.MAX_BUFFER_LENGTH,c.opt=e||{},c.opt.lowercase=c.opt.lowercase||c.opt.lowercasetags,c.looseCase=c.opt.lowercase?"toLowerCase":"toUpperCase",c.tags=[],c.closed=c.closedRoot=c.sawRoot=!1,c.tag=c.error=null,c.strict=!!n,c.noscript=!!(n||c.opt.noscript),c.state=r.BEGIN,c.strictEntities=c.opt.strictEntities,c.ENTITIES=c.strictEntities?Object.create(i.XML_ENTITIES):Object.create(i.ENTITIES),c.attribList=[],c.opt.xmlns&&(c.ns=Object.create(Ge)),c.trackPosition=c.opt.position!==!1,c.trackPosition&&(c.position=c.line=c.column=0),B(c,"onready")}Object.create||(Object.create=function(n){function e(){}e.prototype=n;var c=new e;return c}),Object.keys||(Object.keys=function(n){var e=[];for(var c in n)n.hasOwnProperty(c)&&e.push(c);return e});function o(n){for(var e=Math.max(i.MAX_BUFFER_LENGTH,10),c=0,a=0,d=t.length;a<d;a++){var F=n[t[a]].length;if(F>e)switch(t[a]){case"textNode":U(n);break;case"cdata":A(n,"oncdata",n.cdata),n.cdata="";break;case"script":A(n,"onscript",n.script),n.script="";break;default:j(n,"Max buffer length exceeded: "+t[a])}c=Math.max(c,F)}var h=i.MAX_BUFFER_LENGTH-c;n.bufferCheckPosition=h+n.position}function l(n){for(var e=0,c=t.length;e<c;e++)n[t[e]]=""}function E(n){U(n),n.cdata!==""&&(A(n,"oncdata",n.cdata),n.cdata=""),n.script!==""&&(A(n,"onscript",n.script),n.script="")}s.prototype={end:function(){ue(this)},write:We,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){E(this)}};var m;try{m=require("stream").Stream}catch(n){m=function(){}}var y=i.EVENTS.filter(function(n){return n!=="error"&&n!=="end"});function Me(n,e){return new O(n,e)}function O(n,e){if(!(this instanceof O))return new O(n,e);m.apply(this),this._parser=new s(n,e),this.writable=!0,this.readable=!0;var c=this;this._parser.onend=function(){c.emit("end")},this._parser.onerror=function(a){c.emit("error",a),c._parser.error=null},this._decoder=null,y.forEach(function(a){Object.defineProperty(c,"on"+a,{get:function(){return c._parser["on"+a]},set:function(d){if(!d)return c.removeAllListeners(a),c._parser["on"+a]=d,d;c.on(a,d)},enumerable:!0,configurable:!1})})}O.prototype=Object.create(m.prototype,{constructor:{value:O}}),O.prototype.write=function(n){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(n)){if(!this._decoder){var e=require("string_decoder").StringDecoder;this._decoder=new e("utf8")}n=this._decoder.write(n)}return this._parser.write(n.toString()),this.emit("data",n),!0},O.prototype.end=function(n){return n&&n.length&&this.write(n),this._parser.end(),!0},O.prototype.on=function(n,e){var c=this;return!c._parser["on"+n]&&y.indexOf(n)!==-1&&(c._parser["on"+n]=function(){var a=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);a.splice(0,0,n),c.emit.apply(c,a)}),m.prototype.on.call(c,n,e)};var Ve="[CDATA[",je="DOCTYPE",Y="http://www.w3.org/XML/1998/namespace",H="http://www.w3.org/2000/xmlns/",Ge={xml:Y,xmlns:H},L=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,Q=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,ke=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,qe=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function I(n){return n===" "||n===`
`||n==="\r"||n==="	"}function V(n){return n==='"'||n==="'"}function Xe(n){return n===">"||I(n)}function w(n,e){return n.test(e)}function Ye(n,e){return!w(n,e)}var r=0;i.STATE={BEGIN:r++,BEGIN_WHITESPACE:r++,TEXT:r++,TEXT_ENTITY:r++,OPEN_WAKA:r++,SGML_DECL:r++,SGML_DECL_QUOTED:r++,DOCTYPE:r++,DOCTYPE_QUOTED:r++,DOCTYPE_DTD:r++,DOCTYPE_DTD_QUOTED:r++,COMMENT_STARTING:r++,COMMENT:r++,COMMENT_ENDING:r++,COMMENT_ENDED:r++,CDATA:r++,CDATA_ENDING:r++,CDATA_ENDING_2:r++,PROC_INST:r++,PROC_INST_BODY:r++,PROC_INST_ENDING:r++,OPEN_TAG:r++,OPEN_TAG_SLASH:r++,ATTRIB:r++,ATTRIB_NAME:r++,ATTRIB_NAME_SAW_WHITE:r++,ATTRIB_VALUE:r++,ATTRIB_VALUE_QUOTED:r++,ATTRIB_VALUE_CLOSED:r++,ATTRIB_VALUE_UNQUOTED:r++,ATTRIB_VALUE_ENTITY_Q:r++,ATTRIB_VALUE_ENTITY_U:r++,CLOSE_TAG:r++,CLOSE_TAG_SAW_WHITE:r++,SCRIPT:r++,SCRIPT_ENDING:r++},i.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},i.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(i.ENTITIES).forEach(function(n){var e=i.ENTITIES[n],c=typeof e=="number"?String.fromCharCode(e):e;i.ENTITIES[n]=c});for(var re in i.STATE)i.STATE[i.STATE[re]]=re;r=i.STATE;function B(n,e,c){n[e]&&n[e](c)}function A(n,e,c){n.textNode&&U(n),B(n,e,c)}function U(n){n.textNode=se(n.opt,n.textNode),n.textNode&&B(n,"ontext",n.textNode),n.textNode=""}function se(n,e){return n.trim&&(e=e.trim()),n.normalize&&(e=e.replace(/\s+/g," ")),e}function j(n,e){return U(n),n.trackPosition&&(e+=`
Line: `+n.line+`
Column: `+n.column+`
Char: `+n.c),e=new Error(e),n.error=e,B(n,"onerror",e),n}function ue(n){return n.sawRoot&&!n.closedRoot&&N(n,"Unclosed root tag"),n.state!==r.BEGIN&&n.state!==r.BEGIN_WHITESPACE&&n.state!==r.TEXT&&j(n,"Unexpected end"),U(n),n.c="",n.closed=!0,B(n,"onend"),s.call(n,n.strict,n.opt),n}function N(n,e){if(typeof n!="object"||!(n instanceof s))throw new Error("bad call to strictFail");n.strict&&j(n,e)}function He(n){n.strict||(n.tagName=n.tagName[n.looseCase]());var e=n.tags[n.tags.length-1]||n,c=n.tag={name:n.tagName,attributes:{}};n.opt.xmlns&&(c.ns=e.ns),n.attribList.length=0,A(n,"onopentagstart",c)}function W(n,e){var c=n.indexOf(":"),a=c<0?["",n]:n.split(":"),d=a[0],F=a[1];return e&&n==="xmlns"&&(d="xmlns",F=""),{prefix:d,local:F}}function z(n){if(n.strict||(n.attribName=n.attribName[n.looseCase]()),n.attribList.indexOf(n.attribName)!==-1||n.tag.attributes.hasOwnProperty(n.attribName)){n.attribName=n.attribValue="";return}if(n.opt.xmlns){var e=W(n.attribName,!0),c=e.prefix,a=e.local;if(c==="xmlns")if(a==="xml"&&n.attribValue!==Y)N(n,"xml: prefix must be bound to "+Y+`
Actual: `+n.attribValue);else if(a==="xmlns"&&n.attribValue!==H)N(n,"xmlns: prefix must be bound to "+H+`
Actual: `+n.attribValue);else{var d=n.tag,F=n.tags[n.tags.length-1]||n;d.ns===F.ns&&(d.ns=Object.create(F.ns)),d.ns[a]=n.attribValue}n.attribList.push([n.attribName,n.attribValue])}else n.tag.attributes[n.attribName]=n.attribValue,A(n,"onattribute",{name:n.attribName,value:n.attribValue});n.attribName=n.attribValue=""}function p(n,e){if(n.opt.xmlns){var c=n.tag,a=W(n.tagName);c.prefix=a.prefix,c.local=a.local,c.uri=c.ns[a.prefix]||"",c.prefix&&!c.uri&&(N(n,"Unbound namespace prefix: "+JSON.stringify(n.tagName)),c.uri=a.prefix);var d=n.tags[n.tags.length-1]||n;c.ns&&d.ns!==c.ns&&Object.keys(c.ns).forEach(function(fe){A(n,"onopennamespace",{prefix:fe,uri:c.ns[fe]})});for(var F=0,h=n.attribList.length;F<h;F++){var v=n.attribList[F],D=v[0],P=v[1],b=W(D,!0),S=b.prefix,ze=b.local,le=S===""?"":c.ns[S]||"",Z={name:D,value:P,prefix:S,local:ze,uri:le};S&&S!=="xmlns"&&!le&&(N(n,"Unbound namespace prefix: "+JSON.stringify(S)),Z.uri=S),n.tag.attributes[D]=Z,A(n,"onattribute",Z)}n.attribList.length=0}n.tag.isSelfClosing=!!e,n.sawRoot=!0,n.tags.push(n.tag),A(n,"onopentag",n.tag),e||(!n.noscript&&n.tagName.toLowerCase()==="script"?n.state=r.SCRIPT:n.state=r.TEXT,n.tag=null,n.tagName=""),n.attribName=n.attribValue="",n.attribList.length=0}function J(n){if(!n.tagName){N(n,"Weird empty close tag."),n.textNode+="</>",n.state=r.TEXT;return}if(n.script){if(n.tagName!=="script"){n.script+="</"+n.tagName+">",n.tagName="",n.state=r.SCRIPT;return}A(n,"onscript",n.script),n.script=""}var e=n.tags.length,c=n.tagName;n.strict||(c=c[n.looseCase]());for(var a=c;e--;){var d=n.tags[e];if(d.name!==a)N(n,"Unexpected close tag");else break}if(e<0){N(n,"Unmatched closing tag: "+n.tagName),n.textNode+="</"+n.tagName+">",n.state=r.TEXT;return}n.tagName=c;for(var F=n.tags.length;F-- >e;){var h=n.tag=n.tags.pop();n.tagName=n.tag.name,A(n,"onclosetag",n.tagName);var v={};for(var D in h.ns)v[D]=h.ns[D];var P=n.tags[n.tags.length-1]||n;n.opt.xmlns&&h.ns!==P.ns&&Object.keys(h.ns).forEach(function(b){var S=h.ns[b];A(n,"onclosenamespace",{prefix:b,uri:S})})}e===0&&(n.closedRoot=!0),n.tagName=n.attribValue=n.attribName="",n.attribList.length=0,n.state=r.TEXT}function Qe(n){var e=n.entity,c=e.toLowerCase(),a,d="";return n.ENTITIES[e]?n.ENTITIES[e]:n.ENTITIES[c]?n.ENTITIES[c]:(e=c,e.charAt(0)==="#"&&(e.charAt(1)==="x"?(e=e.slice(2),a=parseInt(e,16),d=a.toString(16)):(e=e.slice(1),a=parseInt(e,10),d=a.toString(10))),e=e.replace(/^0+/,""),isNaN(a)||d.toLowerCase()!==e?(N(n,"Invalid character entity"),"&"+n.entity+";"):String.fromCodePoint(a))}function ce(n,e){e==="<"?(n.state=r.OPEN_WAKA,n.startTagPosition=n.position):I(e)||(N(n,"Non-whitespace before first tag."),n.textNode=e,n.state=r.TEXT)}function oe(n,e){var c="";return e<n.length&&(c=n.charAt(e)),c}function We(n){var e=this;if(this.error)throw this.error;if(e.closed)return j(e,"Cannot write after close. Assign an onready handler.");if(n===null)return ue(e);typeof n=="object"&&(n=n.toString());for(var c=0,a="";a=oe(n,c++),e.c=a,!!a;)switch(e.trackPosition&&(e.position++,a===`
`?(e.line++,e.column=0):e.column++),e.state){case r.BEGIN:if(e.state=r.BEGIN_WHITESPACE,a==="\uFEFF")continue;ce(e,a);continue;case r.BEGIN_WHITESPACE:ce(e,a);continue;case r.TEXT:if(e.sawRoot&&!e.closedRoot){for(var d=c-1;a&&a!=="<"&&a!=="&";)a=oe(n,c++),a&&e.trackPosition&&(e.position++,a===`
`?(e.line++,e.column=0):e.column++);e.textNode+=n.substring(d,c-1)}a==="<"&&!(e.sawRoot&&e.closedRoot&&!e.strict)?(e.state=r.OPEN_WAKA,e.startTagPosition=e.position):(!I(a)&&(!e.sawRoot||e.closedRoot)&&N(e,"Text data outside of root node."),a==="&"?e.state=r.TEXT_ENTITY:e.textNode+=a);continue;case r.SCRIPT:a==="<"?e.state=r.SCRIPT_ENDING:e.script+=a;continue;case r.SCRIPT_ENDING:a==="/"?e.state=r.CLOSE_TAG:(e.script+="<"+a,e.state=r.SCRIPT);continue;case r.OPEN_WAKA:if(a==="!")e.state=r.SGML_DECL,e.sgmlDecl="";else if(!I(a))if(w(L,a))e.state=r.OPEN_TAG,e.tagName=a;else if(a==="/")e.state=r.CLOSE_TAG,e.tagName="";else if(a==="?")e.state=r.PROC_INST,e.procInstName=e.procInstBody="";else{if(N(e,"Unencoded <"),e.startTagPosition+1<e.position){var F=e.position-e.startTagPosition;a=new Array(F).join(" ")+a}e.textNode+="<"+a,e.state=r.TEXT}continue;case r.SGML_DECL:(e.sgmlDecl+a).toUpperCase()===Ve?(A(e,"onopencdata"),e.state=r.CDATA,e.sgmlDecl="",e.cdata=""):e.sgmlDecl+a==="--"?(e.state=r.COMMENT,e.comment="",e.sgmlDecl=""):(e.sgmlDecl+a).toUpperCase()===je?(e.state=r.DOCTYPE,(e.doctype||e.sawRoot)&&N(e,"Inappropriately located doctype declaration"),e.doctype="",e.sgmlDecl=""):a===">"?(A(e,"onsgmldeclaration",e.sgmlDecl),e.sgmlDecl="",e.state=r.TEXT):(V(a)&&(e.state=r.SGML_DECL_QUOTED),e.sgmlDecl+=a);continue;case r.SGML_DECL_QUOTED:a===e.q&&(e.state=r.SGML_DECL,e.q=""),e.sgmlDecl+=a;continue;case r.DOCTYPE:a===">"?(e.state=r.TEXT,A(e,"ondoctype",e.doctype),e.doctype=!0):(e.doctype+=a,a==="["?e.state=r.DOCTYPE_DTD:V(a)&&(e.state=r.DOCTYPE_QUOTED,e.q=a));continue;case r.DOCTYPE_QUOTED:e.doctype+=a,a===e.q&&(e.q="",e.state=r.DOCTYPE);continue;case r.DOCTYPE_DTD:e.doctype+=a,a==="]"?e.state=r.DOCTYPE:V(a)&&(e.state=r.DOCTYPE_DTD_QUOTED,e.q=a);continue;case r.DOCTYPE_DTD_QUOTED:e.doctype+=a,a===e.q&&(e.state=r.DOCTYPE_DTD,e.q="");continue;case r.COMMENT:a==="-"?e.state=r.COMMENT_ENDING:e.comment+=a;continue;case r.COMMENT_ENDING:a==="-"?(e.state=r.COMMENT_ENDED,e.comment=se(e.opt,e.comment),e.comment&&A(e,"oncomment",e.comment),e.comment=""):(e.comment+="-"+a,e.state=r.COMMENT);continue;case r.COMMENT_ENDED:a!==">"?(N(e,"Malformed comment"),e.comment+="--"+a,e.state=r.COMMENT):e.state=r.TEXT;continue;case r.CDATA:a==="]"?e.state=r.CDATA_ENDING:e.cdata+=a;continue;case r.CDATA_ENDING:a==="]"?e.state=r.CDATA_ENDING_2:(e.cdata+="]"+a,e.state=r.CDATA);continue;case r.CDATA_ENDING_2:a===">"?(e.cdata&&A(e,"oncdata",e.cdata),A(e,"onclosecdata"),e.cdata="",e.state=r.TEXT):a==="]"?e.cdata+="]":(e.cdata+="]]"+a,e.state=r.CDATA);continue;case r.PROC_INST:a==="?"?e.state=r.PROC_INST_ENDING:I(a)?e.state=r.PROC_INST_BODY:e.procInstName+=a;continue;case r.PROC_INST_BODY:if(!e.procInstBody&&I(a))continue;a==="?"?e.state=r.PROC_INST_ENDING:e.procInstBody+=a;continue;case r.PROC_INST_ENDING:a===">"?(A(e,"onprocessinginstruction",{name:e.procInstName,body:e.procInstBody}),e.procInstName=e.procInstBody="",e.state=r.TEXT):(e.procInstBody+="?"+a,e.state=r.PROC_INST_BODY);continue;case r.OPEN_TAG:w(Q,a)?e.tagName+=a:(He(e),a===">"?p(e):a==="/"?e.state=r.OPEN_TAG_SLASH:(I(a)||N(e,"Invalid character in tag name"),e.state=r.ATTRIB));continue;case r.OPEN_TAG_SLASH:a===">"?(p(e,!0),J(e)):(N(e,"Forward-slash in opening tag not followed by >"),e.state=r.ATTRIB);continue;case r.ATTRIB:if(I(a))continue;a===">"?p(e):a==="/"?e.state=r.OPEN_TAG_SLASH:w(L,a)?(e.attribName=a,e.attribValue="",e.state=r.ATTRIB_NAME):N(e,"Invalid attribute name");continue;case r.ATTRIB_NAME:a==="="?e.state=r.ATTRIB_VALUE:a===">"?(N(e,"Attribute without value"),e.attribValue=e.attribName,z(e),p(e)):I(a)?e.state=r.ATTRIB_NAME_SAW_WHITE:w(Q,a)?e.attribName+=a:N(e,"Invalid attribute name");continue;case r.ATTRIB_NAME_SAW_WHITE:if(a==="=")e.state=r.ATTRIB_VALUE;else{if(I(a))continue;N(e,"Attribute without value"),e.tag.attributes[e.attribName]="",e.attribValue="",A(e,"onattribute",{name:e.attribName,value:""}),e.attribName="",a===">"?p(e):w(L,a)?(e.attribName=a,e.state=r.ATTRIB_NAME):(N(e,"Invalid attribute name"),e.state=r.ATTRIB)}continue;case r.ATTRIB_VALUE:if(I(a))continue;V(a)?(e.q=a,e.state=r.ATTRIB_VALUE_QUOTED):(N(e,"Unquoted attribute value"),e.state=r.ATTRIB_VALUE_UNQUOTED,e.attribValue=a);continue;case r.ATTRIB_VALUE_QUOTED:if(a!==e.q){a==="&"?e.state=r.ATTRIB_VALUE_ENTITY_Q:e.attribValue+=a;continue}z(e),e.q="",e.state=r.ATTRIB_VALUE_CLOSED;continue;case r.ATTRIB_VALUE_CLOSED:I(a)?e.state=r.ATTRIB:a===">"?p(e):a==="/"?e.state=r.OPEN_TAG_SLASH:w(L,a)?(N(e,"No whitespace between attributes"),e.attribName=a,e.attribValue="",e.state=r.ATTRIB_NAME):N(e,"Invalid attribute name");continue;case r.ATTRIB_VALUE_UNQUOTED:if(!Xe(a)){a==="&"?e.state=r.ATTRIB_VALUE_ENTITY_U:e.attribValue+=a;continue}z(e),a===">"?p(e):e.state=r.ATTRIB;continue;case r.CLOSE_TAG:if(e.tagName)a===">"?J(e):w(Q,a)?e.tagName+=a:e.script?(e.script+="</"+e.tagName,e.tagName="",e.state=r.SCRIPT):(I(a)||N(e,"Invalid tagname in closing tag"),e.state=r.CLOSE_TAG_SAW_WHITE);else{if(I(a))continue;Ye(L,a)?e.script?(e.script+="</"+a,e.state=r.SCRIPT):N(e,"Invalid tagname in closing tag."):e.tagName=a}continue;case r.CLOSE_TAG_SAW_WHITE:if(I(a))continue;a===">"?J(e):N(e,"Invalid characters in closing tag");continue;case r.TEXT_ENTITY:case r.ATTRIB_VALUE_ENTITY_Q:case r.ATTRIB_VALUE_ENTITY_U:var h,v;switch(e.state){case r.TEXT_ENTITY:h=r.TEXT,v="textNode";break;case r.ATTRIB_VALUE_ENTITY_Q:h=r.ATTRIB_VALUE_QUOTED,v="attribValue";break;case r.ATTRIB_VALUE_ENTITY_U:h=r.ATTRIB_VALUE_UNQUOTED,v="attribValue";break}a===";"?(e[v]+=Qe(e),e.entity="",e.state=h):w(e.entity.length?qe:ke,a)?e.entity+=a:(N(e,"Invalid character in entity name"),e[v]+="&"+e.entity+a,e.entity="",e.state=h);continue;default:throw new Error(e,"Unknown state: "+e.state)}return e.position>=e.bufferCheckPosition&&o(e),e}String.fromCodePoint||function(){var n=String.fromCharCode,e=Math.floor,c=function(){var a=16384,d=[],F,h,v=-1,D=arguments.length;if(!D)return"";for(var P="";++v<D;){var b=Number(arguments[v]);if(!isFinite(b)||b<0||b>1114111||e(b)!==b)throw RangeError("Invalid code point: "+b);b<=65535?d.push(b):(b-=65536,F=(b>>10)+55296,h=b%1024+56320,d.push(F,h)),(v+1===D||d.length>a)&&(P+=n.apply(null,d),d.length=0)}return P};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:c,configurable:!0,writable:!0}):String.fromCodePoint=c}()})(typeof G=="undefined"?G.sax={}:G)});var k=K((ht,me)=>{me.exports={isArray:function(i){return Array.isArray?Array.isArray(i):Object.prototype.toString.call(i)==="[object Array]"}}});var q=K((bt,Te)=>{var Je=k().isArray;Te.exports={copyOptions:function(i){var t,s={};for(t in i)i.hasOwnProperty(t)&&(s[t]=i[t]);return s},ensureFlagExists:function(i,t){(!(i in t)||typeof t[i]!="boolean")&&(t[i]=!1)},ensureSpacesExists:function(i){(!("spaces"in i)||typeof i.spaces!="number"&&typeof i.spaces!="string")&&(i.spaces=0)},ensureAlwaysArrayExists:function(i){(!("alwaysArray"in i)||typeof i.alwaysArray!="boolean"&&!Je(i.alwaysArray))&&(i.alwaysArray=!1)},ensureKeyExists:function(i,t){(!(i+"Key"in t)||typeof t[i+"Key"]!="string")&&(t[i+"Key"]=t.compact?"_"+i:i)},checkFnExists:function(i,t){return i+"Fn"in t}}});var ee=K((_t,be)=>{var Ze=Ee(),$e={on:function(){},parse:function(){}},T=q(),R=k().isArray,u,$=!0,f;function et(i){return u=T.copyOptions(i),T.ensureFlagExists("ignoreDeclaration",u),T.ensureFlagExists("ignoreInstruction",u),T.ensureFlagExists("ignoreAttributes",u),T.ensureFlagExists("ignoreText",u),T.ensureFlagExists("ignoreComment",u),T.ensureFlagExists("ignoreCdata",u),T.ensureFlagExists("ignoreDoctype",u),T.ensureFlagExists("compact",u),T.ensureFlagExists("alwaysChildren",u),T.ensureFlagExists("addParent",u),T.ensureFlagExists("trim",u),T.ensureFlagExists("nativeType",u),T.ensureFlagExists("nativeTypeAttributes",u),T.ensureFlagExists("sanitize",u),T.ensureFlagExists("instructionHasAttributes",u),T.ensureFlagExists("captureSpacesBetweenElements",u),T.ensureAlwaysArrayExists(u),T.ensureKeyExists("declaration",u),T.ensureKeyExists("instruction",u),T.ensureKeyExists("attributes",u),T.ensureKeyExists("text",u),T.ensureKeyExists("comment",u),T.ensureKeyExists("cdata",u),T.ensureKeyExists("doctype",u),T.ensureKeyExists("type",u),T.ensureKeyExists("name",u),T.ensureKeyExists("elements",u),T.ensureKeyExists("parent",u),T.checkFnExists("doctype",u),T.checkFnExists("instruction",u),T.checkFnExists("cdata",u),T.checkFnExists("comment",u),T.checkFnExists("text",u),T.checkFnExists("instructionName",u),T.checkFnExists("elementName",u),T.checkFnExists("attributeName",u),T.checkFnExists("attributeValue",u),T.checkFnExists("attributes",u),u}function ge(i){var t=Number(i);if(!isNaN(t))return t;var s=i.toLowerCase();return s==="true"?!0:s==="false"?!1:i}function M(i,t){var s;if(u.compact){if(!f[u[i+"Key"]]&&(R(u.alwaysArray)?u.alwaysArray.indexOf(u[i+"Key"])!==-1:u.alwaysArray)&&(f[u[i+"Key"]]=[]),f[u[i+"Key"]]&&!R(f[u[i+"Key"]])&&(f[u[i+"Key"]]=[f[u[i+"Key"]]]),i+"Fn"in u&&typeof t=="string"&&(t=u[i+"Fn"](t,f)),i==="instruction"&&("instructionFn"in u||"instructionNameFn"in u)){for(s in t)if(t.hasOwnProperty(s))if("instructionFn"in u)t[s]=u.instructionFn(t[s],s,f);else{var o=t[s];delete t[s],t[u.instructionNameFn(s,o,f)]=o}}R(f[u[i+"Key"]])?f[u[i+"Key"]].push(t):f[u[i+"Key"]]=t}else{f[u.elementsKey]||(f[u.elementsKey]=[]);var l={};if(l[u.typeKey]=i,i==="instruction"){for(s in t)if(t.hasOwnProperty(s))break;l[u.nameKey]="instructionNameFn"in u?u.instructionNameFn(s,t,f):s,u.instructionHasAttributes?(l[u.attributesKey]=t[s][u.attributesKey],"instructionFn"in u&&(l[u.attributesKey]=u.instructionFn(l[u.attributesKey],s,f))):("instructionFn"in u&&(t[s]=u.instructionFn(t[s],s,f)),l[u.instructionKey]=t[s])}else i+"Fn"in u&&(t=u[i+"Fn"](t,f)),l[u[i+"Key"]]=t;u.addParent&&(l[u.parentKey]=f),f[u.elementsKey].push(l)}}function ye(i){if("attributesFn"in u&&i&&(i=u.attributesFn(i,f)),(u.trim||"attributeValueFn"in u||"attributeNameFn"in u||u.nativeTypeAttributes)&&i){var t;for(t in i)if(i.hasOwnProperty(t)&&(u.trim&&(i[t]=i[t].trim()),u.nativeTypeAttributes&&(i[t]=ge(i[t])),"attributeValueFn"in u&&(i[t]=u.attributeValueFn(i[t],t,f)),"attributeNameFn"in u)){var s=i[t];delete i[t],i[u.attributeNameFn(t,i[t],f)]=s}}return i}function tt(i){var t={};if(i.body&&(i.name.toLowerCase()==="xml"||u.instructionHasAttributes)){for(var s=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,o;(o=s.exec(i.body))!==null;)t[o[1]]=o[2]||o[3]||o[4];t=ye(t)}if(i.name.toLowerCase()==="xml"){if(u.ignoreDeclaration)return;f[u.declarationKey]={},Object.keys(t).length&&(f[u.declarationKey][u.attributesKey]=t),u.addParent&&(f[u.declarationKey][u.parentKey]=f)}else{if(u.ignoreInstruction)return;u.trim&&(i.body=i.body.trim());var l={};u.instructionHasAttributes&&Object.keys(t).length?(l[i.name]={},l[i.name][u.attributesKey]=t):l[i.name]=i.body,M("instruction",l)}}function de(i,t){var s;if(typeof i=="object"&&(t=i.attributes,i=i.name),t=ye(t),"elementNameFn"in u&&(i=u.elementNameFn(i,f)),u.compact){if(s={},!u.ignoreAttributes&&t&&Object.keys(t).length){s[u.attributesKey]={};var o;for(o in t)t.hasOwnProperty(o)&&(s[u.attributesKey][o]=t[o])}!(i in f)&&(R(u.alwaysArray)?u.alwaysArray.indexOf(i)!==-1:u.alwaysArray)&&(f[i]=[]),f[i]&&!R(f[i])&&(f[i]=[f[i]]),R(f[i])?f[i].push(s):f[i]=s}else f[u.elementsKey]||(f[u.elementsKey]=[]),s={},s[u.typeKey]="element",s[u.nameKey]=i,!u.ignoreAttributes&&t&&Object.keys(t).length&&(s[u.attributesKey]=t),u.alwaysChildren&&(s[u.elementsKey]=[]),f[u.elementsKey].push(s);s[u.parentKey]=f,f=s}function Ne(i){u.ignoreText||!i.trim()&&!u.captureSpacesBetweenElements||(u.trim&&(i=i.trim()),u.nativeType&&(i=ge(i)),u.sanitize&&(i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),M("text",i))}function Ae(i){u.ignoreComment||(u.trim&&(i=i.trim()),M("comment",i))}function Fe(i){var t=f[u.parentKey];u.addParent||delete f[u.parentKey],f=t}function nt(i){u.ignoreCdata||(u.trim&&(i=i.trim()),M("cdata",i))}function it(i){u.ignoreDoctype||(i=i.replace(/^ /,""),u.trim&&(i=i.trim()),M("doctype",i))}function he(i){i.note=i}be.exports=function(i,t){var s=$?Ze.parser(!0,{}):s=new $e.Parser("UTF-8"),o={};if(f=o,u=et(t),$?(s.opt={strictEntities:!0},s.onopentag=de,s.ontext=Ne,s.oncomment=Ae,s.onclosetag=Fe,s.onerror=he,s.oncdata=nt,s.ondoctype=it,s.onprocessinginstruction=tt):(s.on("startElement",de),s.on("text",Ne),s.on("comment",Ae),s.on("endElement",Fe),s.on("error",he)),$)s.write(i).close();else if(!s.parse(i))throw new Error("XML parsing error: "+s.getError());if(o[u.elementsKey]){var l=o[u.elementsKey];delete o[u.elementsKey],o[u.elementsKey]=l,delete o.text}return o}});var Ie=K((xt,xe)=>{var _e=q(),at=ee();function rt(i){var t=_e.copyOptions(i);return _e.ensureSpacesExists(t),t}xe.exports=function(i,t){var s,o,l,E;return s=rt(t),o=at(i,s),E="compact"in s&&s.compact?"_parent":"parent","addParent"in s&&s.addParent?l=JSON.stringify(o,function(m,y){return m===E?"_":y},s.spaces):l=JSON.stringify(o,null,s.spaces),l.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}});var ne=K((It,Pe)=>{var g=q(),st=k().isArray,_,x;function ut(i){var t=g.copyOptions(i);return g.ensureFlagExists("ignoreDeclaration",t),g.ensureFlagExists("ignoreInstruction",t),g.ensureFlagExists("ignoreAttributes",t),g.ensureFlagExists("ignoreText",t),g.ensureFlagExists("ignoreComment",t),g.ensureFlagExists("ignoreCdata",t),g.ensureFlagExists("ignoreDoctype",t),g.ensureFlagExists("compact",t),g.ensureFlagExists("indentText",t),g.ensureFlagExists("indentCdata",t),g.ensureFlagExists("indentAttributes",t),g.ensureFlagExists("indentInstruction",t),g.ensureFlagExists("fullTagEmptyElement",t),g.ensureFlagExists("noQuotesForNativeAttributes",t),g.ensureSpacesExists(t),typeof t.spaces=="number"&&(t.spaces=Array(t.spaces+1).join(" ")),g.ensureKeyExists("declaration",t),g.ensureKeyExists("instruction",t),g.ensureKeyExists("attributes",t),g.ensureKeyExists("text",t),g.ensureKeyExists("comment",t),g.ensureKeyExists("cdata",t),g.ensureKeyExists("doctype",t),g.ensureKeyExists("type",t),g.ensureKeyExists("name",t),g.ensureKeyExists("elements",t),g.checkFnExists("doctype",t),g.checkFnExists("instruction",t),g.checkFnExists("cdata",t),g.checkFnExists("comment",t),g.checkFnExists("text",t),g.checkFnExists("instructionName",t),g.checkFnExists("elementName",t),g.checkFnExists("attributeName",t),g.checkFnExists("attributeValue",t),g.checkFnExists("attributes",t),g.checkFnExists("fullTagEmptyElement",t),t}function C(i,t,s){return(!s&&i.spaces?`
`:"")+Array(t+1).join(i.spaces)}function X(i,t,s){if(t.ignoreAttributes)return"";"attributesFn"in t&&(i=t.attributesFn(i,x,_));var o,l,E,m,y=[];for(o in i)i.hasOwnProperty(o)&&i[o]!==null&&i[o]!==void 0&&(m=t.noQuotesForNativeAttributes&&typeof i[o]!="string"?"":'"',l=""+i[o],l=l.replace(/"/g,"&quot;"),E="attributeNameFn"in t?t.attributeNameFn(o,l,x,_):o,y.push(t.spaces&&t.indentAttributes?C(t,s+1,!1):" "),y.push(E+"="+m+("attributeValueFn"in t?t.attributeValueFn(l,o,x,_):l)+m));return i&&Object.keys(i).length&&t.spaces&&t.indentAttributes&&y.push(C(t,s,!1)),y.join("")}function ve(i,t,s){return _=i,x="xml",t.ignoreDeclaration?"":"<?xml"+X(i[t.attributesKey],t,s)+"?>"}function De(i,t,s){if(t.ignoreInstruction)return"";var o;for(o in i)if(i.hasOwnProperty(o))break;var l="instructionNameFn"in t?t.instructionNameFn(o,i[o],x,_):o;if(typeof i[o]=="object")return _=i,x=l,"<?"+l+X(i[o][t.attributesKey],t,s)+"?>";var E=i[o]?i[o]:"";return"instructionFn"in t&&(E=t.instructionFn(E,o,x,_)),"<?"+l+(E?" "+E:"")+"?>"}function Ce(i,t){return t.ignoreComment?"":"<!--"+("commentFn"in t?t.commentFn(i,x,_):i)+"-->"}function Oe(i,t){return t.ignoreCdata?"":"<![CDATA["+("cdataFn"in t?t.cdataFn(i,x,_):i.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function we(i,t){return t.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in t?t.doctypeFn(i,x,_):i)+">"}function te(i,t){return t.ignoreText?"":(i=""+i,i=i.replace(/&amp;/g,"&"),i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in t?t.textFn(i,x,_):i)}function ct(i,t){var s;if(i.elements&&i.elements.length)for(s=0;s<i.elements.length;++s)switch(i.elements[s][t.typeKey]){case"text":if(t.indentText)return!0;break;case"cdata":if(t.indentCdata)return!0;break;case"instruction":if(t.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function ot(i,t,s){_=i,x=i.name;var o=[],l="elementNameFn"in t?t.elementNameFn(i.name,i):i.name;o.push("<"+l),i[t.attributesKey]&&o.push(X(i[t.attributesKey],t,s));var E=i[t.elementsKey]&&i[t.elementsKey].length||i[t.attributesKey]&&i[t.attributesKey]["xml:space"]==="preserve";return E||("fullTagEmptyElementFn"in t?E=t.fullTagEmptyElementFn(i.name,i):E=t.fullTagEmptyElement),E?(o.push(">"),i[t.elementsKey]&&i[t.elementsKey].length&&(o.push(Se(i[t.elementsKey],t,s+1)),_=i,x=i.name),o.push(t.spaces&&ct(i,t)?`
`+Array(s+1).join(t.spaces):""),o.push("</"+l+">")):o.push("/>"),o.join("")}function Se(i,t,s,o){return i.reduce(function(l,E){var m=C(t,s,o&&!l);switch(E.type){case"element":return l+m+ot(E,t,s);case"comment":return l+m+Ce(E[t.commentKey],t);case"doctype":return l+m+we(E[t.doctypeKey],t);case"cdata":return l+(t.indentCdata?m:"")+Oe(E[t.cdataKey],t);case"text":return l+(t.indentText?m:"")+te(E[t.textKey],t);case"instruction":var y={};return y[E[t.nameKey]]=E[t.attributesKey]?E:E[t.instructionKey],l+(t.indentInstruction?m:"")+De(y,t,s)}},"")}function Ke(i,t,s){var o;for(o in i)if(i.hasOwnProperty(o))switch(o){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||s)return!0;break;case t.cdataKey:if(t.indentCdata||s)return!0;break;case t.instructionKey:if(t.indentInstruction||s)return!0;break;case t.doctypeKey:case t.commentKey:return!0;default:return!0}return!1}function lt(i,t,s,o,l){_=i,x=t;var E="elementNameFn"in s?s.elementNameFn(t,i):t;if(typeof i=="undefined"||i===null||i==="")return"fullTagEmptyElementFn"in s&&s.fullTagEmptyElementFn(t,i)||s.fullTagEmptyElement?"<"+E+"></"+E+">":"<"+E+"/>";var m=[];if(t){if(m.push("<"+E),typeof i!="object")return m.push(">"+te(i,s)+"</"+E+">"),m.join("");i[s.attributesKey]&&m.push(X(i[s.attributesKey],s,o));var y=Ke(i,s,!0)||i[s.attributesKey]&&i[s.attributesKey]["xml:space"]==="preserve";if(y||("fullTagEmptyElementFn"in s?y=s.fullTagEmptyElementFn(t,i):y=s.fullTagEmptyElement),y)m.push(">");else return m.push("/>"),m.join("")}return m.push(pe(i,s,o+1,!1)),_=i,x=t,t&&m.push((l?C(s,o,!1):"")+"</"+E+">"),m.join("")}function pe(i,t,s,o){var l,E,m,y=[];for(E in i)if(i.hasOwnProperty(E))for(m=st(i[E])?i[E]:[i[E]],l=0;l<m.length;++l){switch(E){case t.declarationKey:y.push(ve(m[l],t,s));break;case t.instructionKey:y.push((t.indentInstruction?C(t,s,o):"")+De(m[l],t,s));break;case t.attributesKey:case t.parentKey:break;case t.textKey:y.push((t.indentText?C(t,s,o):"")+te(m[l],t));break;case t.cdataKey:y.push((t.indentCdata?C(t,s,o):"")+Oe(m[l],t));break;case t.doctypeKey:y.push(C(t,s,o)+we(m[l],t));break;case t.commentKey:y.push(C(t,s,o)+Ce(m[l],t));break;default:y.push(C(t,s,o)+lt(m[l],E,t,s,Ke(m[l],t)))}o=o&&!y.length}return y.join("")}Pe.exports=function(i,t){t=ut(t);var s=[];return _=i,x="_root_",t.compact?s.push(pe(i,t,0,!0)):(i[t.declarationKey]&&s.push(ve(i[t.declarationKey],t,0)),i[t.elementsKey]&&i[t.elementsKey].length&&s.push(Se(i[t.elementsKey],t,0,!s.length))),s.join("")}});var Le=K((vt,Re)=>{var ft=ne();Re.exports=function(i,t){i instanceof Buffer&&(i=i.toString());var s=null;if(typeof i=="string")try{s=JSON.parse(i)}catch(o){throw new Error("The JSON structure is invalid")}else s=i;return ft(s,t)}});var Ue=K((Dt,Be)=>{var Et=ee(),mt=Ie(),Tt=ne(),gt=Le();Be.exports={xml2js:Et,xml2json:mt,js2xml:Tt,json2xml:gt}});var yt=Ue(),Ct=require("fs"),ie="http://xspf.org/ns/0/",ae="1",dt={title:{},creator:{},annotation:{},info:{},location:{},identifier:{},image:{},date:{},license:{},attribution:{},link:{},meta:{},extension:{},trackList:{}};function Nt(i){if(!i)throw new Error("no input");let t=yt.xml2js(i,{compact:!1});if(!t.hasOwnProperty("declaration"))throw new Error('XML declaration not found: <?xml version="1.0" encoding="UTF-8"?>');if(t.elements.length===0)throw new Error("empty elements");let s=t.elements[0];if(s.name!=="playlist")throw new Error("invalid element");let o=s.attributes;if(o.version!==ae)throw new Error(`invalid xspf version: wanted ${ae}, got ${o.version}`);if(o.xmlns!==ie)throw new Error(`invalid xml namespace: wanted ${ie}, got ${o.namespace}`);let l={version:ae,xmlns:ie};if(!s.elements)return l.playlist={},l;let E=s.elements,m=Object.keys(dt);return E.forEach(y=>{if(y.type!=="element")throw new Error("beep");m.indexOf(y.name)!==-1&&(l[y.name]=y.elements[0].text)}),l}module.exports=Nt;
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */