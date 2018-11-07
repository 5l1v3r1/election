function changeButton (element,myName) {
	if(element == null) {
		return;
	}
	if(document.all && !window.opera) {
		document.getElementById(element).className = myName;
		//document.getElementById(element).style.backgroundPosition = "0px -1px";
	} else{
		//alert('backPosFirefox');
		document.getElementById(element).className = myName;
		//element.setAttribute("class", myName);
	}
}


function init_survey() {}

function initPage(statustext) {
	setStatusText(escape(statustext));
}


/* HPC */
var ishpc = false;

function setApplicationType(type) {
	if(document.all && !window.opera) {
		embflashlayer = getLayer("embflashie");
	} else {
		embflashlayer = getLayer("embflash");
	}

	if(type != null && type != "") {
		if(type == "hpc") {
			ishpc = true;

			if(location.href.indexOf(".nowelcome") != -1) {
				embflashlayer.SetVariable("nowelcome", true);
			}

			addEvent(embflashlayer, "mouseover", ms_restartFlash);
		}
	}
}

/**
 * sets the default status text
 */
function setStatusText(statusText) {
	window.status = unescape(statusText);
	window.defaultStatus = unescape(statusText);
}


/**
	some common helper functions
*/

function getLayer( strID )
{
	if( document.all && !window.opera )
		return document.all[ strID ];
	else
		return document.getElementById( strID );
}

function setClass(element, className) {
	if(element == null || className == null) {
		return;
	}

	if(document.all && !window.opera) {
		element.className = className;
	} else{
		element.setAttribute("class", className);
	}
}

function removeClass(element) {
	if(element == null) {
		return;
	}

	if(document.all && !window.opera) {
		element.className = "";
	} else{
		element.removeAttribute("class");
	}
}

function getClassName(element) {
	if(element == null) {
		return "";
	}
	var className = document.all && !window.opera ? element.className : element.getAttribute("class");
	return className == null ? "" : className;
}

/**
* set events, w3c-compatible and ie
*/
function addEvent(obj, eventType, func, useCaption)
{
	if (!obj || !eventType || !func) {
		return false;
	} else if (obj.addEventListener) {
		obj.addEventListener(eventType, func, useCaption);
		return true;
	} else if (obj.attachEvent) {
		var retVal = obj.attachEvent("on"+eventType, func);
		return retVal;
	} else {
		return false;
	}
}


/**
 * special handling for ie 6, to place the bottom of the window
 */
if(document.all && !window.opera) {

	addEvent(window, "load", initFooterIE);
}

function initFooterIE() {
	window.onscroll = positionFooter;
	window.onresize = positionFooter;
	positionFooter();
}

function positionFooter() {
	try {
	/*	document.getElementById("ms-footer").style.position = "absolute";
		document.getElementById("ms-footer").style.display = "block";
		document.getElementById("ms-footer").style.top = (document.documentElement.clientHeight + document.documentElement.scrollTop - document.getElementById("ms-footer").offsetHeight);*/
	} catch(e) {}
}



function showFooter() {
	/*document.getElementById('ms-footer').style.display = 'block';*/
}


