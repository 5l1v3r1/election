/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/
// Original Code adapted

// Script needs the configuration in language_config.js
/* languages */
// var menu1=new Array()
// menu1.push('<a href="../../de/default.htm">Deutsch</a>');
// menu1.push('<a href="../../en/default.htm">English</a>');

var menuwidth=''; //default menu width
var menubgcolor='#f6f6f6';  //menu bgcolor
var disappeardelay=250;  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes"; //hide menu when user clicks within menu?

var ie4=document.all;
var ns6=document.getElementById&&!document.all;

if (ie4||ns6)
	document.write('<div id="dropmenudiv" style="visibility:hidden;background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>');


function getposOffset(what, offsettype){
	var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop-8;
	var parentEl=what.offsetParent;
	while (parentEl!=null){
		totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
		parentEl=parentEl.offsetParent;
	}
	return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
	if (ie4||ns6){
		// alle anderen
		var s = window.innerHeight-633;
		// IE (7,8,9)
		if( window.clipboardData && document.compatMode ){
			var s = document.documentElement.clientHeight-633;
		}
		dropmenuobj.style.left="500px";
		dropmenuobj.style.bottom=s+"px";
		//dropmenuobj.style.bottom="27px";
		//alert(s);
	}
	if (menuwidth!=""){
		dropmenuobj.widthobj=dropmenuobj.style;
		dropmenuobj.widthobj.width=menuwidth;
	}
	if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
		obj.visibility=visible;
	else if (e.type=="click")
		obj.visibility=hidden;
}

function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

function clearbrowseredge(obj, whichedge){
	var edgeoffset=0;
	if (whichedge=="rightedge"){
		var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15;
		dropmenuobj.contentmeasure=dropmenuobj.offsetWidth;
		if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
			edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth;
	}
	else{
		var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset;
		var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18;
		dropmenuobj.contentmeasure=dropmenuobj.offsetHeight;
		if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
			edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight;
			if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
				edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge;
		}
		//alert(edgeoffset);
	}
	return edgeoffset;
}



function populatemenu(what){
	if (ie4||ns6)
	dropmenuobj.innerHTML=what.join("");
}


function dropdownmenu(obj, e, menucontents, menuwidth){
	if (window.event) event.cancelBubble=true;
	else if (e.stopPropagation) e.stopPropagation()
	clearhidemenu();
	dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv;
	// change style of link
	document.getElementById("footer_language").className="language_link_hover";
	if (document.language_menu_off) { document.getElementById("language_menu_off").id="language_menu"; }
	populatemenu(menucontents);
	if (ie4||ns6){
		showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth);
		dropmenuobj.x=getposOffset(obj, "left");
		dropmenuobj.y=getposOffset(obj, "top");
		dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+0+"px";
		var windowoffset=ie4 && !window.opera? 0 : window.pageYOffset+window.innerHeight-dropmenuobj.offsetHeight-27;
		//dropmenuobj.style.top=windowoffset+"px"; // mozilla
		//dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px" // ie6 
		//dropmenuobj.style.top=ie4 && !window.opera? dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+9+"px" : windowoffset+"px";
		//dropmenuobj.style.bottom=window.pageYOffset+window.innerHeight-dropmenuobj.contentmeasure+"px"; // mozilla
		//alert(dropmenuobj.offsetHeight);
	}
	return clickreturnvalue()
}


function hideLanguageMenu(){
	// positioniert das sprachmenue neu
	hidemenu();
}

// Sprachmenue beim scrollen entfernen
//addEvent(window, "scroll", hidemenu);


function clickreturnvalue(){
	if (ie4||ns6) return false;
	else return true;
}

function contains_ns6(a, b) {
	while (b.parentNode)
		if ((b = b.parentNode) == a) return true;
	return false;
}

function dynamichide(e){
	if (ie4&&!dropmenuobj.contains(e.toElement))
		delayhidemenu();
	else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
		delayhidemenu();
}

function hidemenu(e){
	if (typeof dropmenuobj!="undefined"){
		if (ie4||ns6) {
			//change style of link  // hide menu
			document.getElementById("footer_language").className="language_link";
			if (document.language_menu) { document.getElementById("language_menu").id="language_menu_off";}
			dropmenuobj.style.visibility="hidden";
		}
	}
}

function delayhidemenu(){
	if (ie4||ns6){
		delayhide=setTimeout("hidemenu()",disappeardelay);
	}
}

function clearhidemenu(){
	if (typeof delayhide!="undefined")
		clearTimeout(delayhide);
}

if (hidemenu_onclick=="yes")
	document.onclick=hidemenu;


var current_part;
var current_language;

function get_url_param( name )
{
	// read the URL Parameter
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );

	if ( results == null )
		return "";
	else
		return results[1];
}

function getFrameURL()
{
	var id=get_url_param('id');
	if (id != '' && (id.indexOf(':') == -1)) {
		return id;	
	} else {
		// defaultFrameURL defined in language_config.js
		if (typeof defaultFrameURL=="undefined") defaultFrameURL="in-depth/index_a.shtml";
		// replace [language] in pathnwith current_language
		//alert(defaultFrameURL);
		defaultFrameURL=defaultFrameURL.replace("[language]", current_language);
	 	return defaultFrameURL;
	}

}

function getFramePart()
{

	var part=get_url_param('part');
	if (part != '') {
		return part;	
	} else {
		if (typeof defaultPart=="undefined") defaultPart="in-depth";
		// defaultFrameURL defined above
		return defaultPart;
	}

}


function writeIFrame() {
	// writes the iFrame
	document.write('<iframe id="body-iframe" src="'+getFrameURL()+'" frameborder="0"></iframe>');

}

function setActiveTab() {
	// Tab aktivieren
	current_part=getFramePart();
	
	myTabId="tab_"+current_part;
	var element = document.getElementById(myTabId);
	if (element) {
		element.className="bai-modelmenu-li-act";
	}
}

