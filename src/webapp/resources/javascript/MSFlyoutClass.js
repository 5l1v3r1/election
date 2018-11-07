/**
 * The MSFlyout Class handles the Flyout Menus on the website.
 * It offers timeout values that can be different for each
 * flyout type. This class depends on the daimler_basic.js!
 * 
 * @author Stefan.Bechtold(at)namics.com
 * @version 1.0
 * @requires daimler_basic.js
 * @requires navigation.js
 */

// Class MSFlyout, Constructor
function MSFlyout(/*String*/ id, /*int*/ type) {
	this.id = id;
	this.type = type;
	this.active = false;
	
	// Get Layer for this Flyout
	if (id) {
		this.flyout = getLayer(id);
	}

	// Check and extend global MSFlyout list if necessary
	if (!MSFlyout.flyouts[type]) {
		MSFlyout.flyouts[type] = new Array();
	}

	// Add flyout to global MSFlyout object
	MSFlyout.flyouts[type][id] = this;
	
	// Add event listener for this flyout
	if (this.flyout) {
		addEvent(this.flyout, "mouseover", function() { MSFlyout.flyouts[type][id].activate() }, true);
		addEvent(this.flyout, "mouseout", function() { MSFlyout.flyouts[type][id].deactivate() }, true);
	}
}

// Static Flyout Types
MSFlyout.TYPE_CORENAV1 = 1;
MSFlyout.TYPE_CORENAV2 = 2;
MSFlyout.TYPE_PCN_BUTTON = 3;
MSFlyout.TYPE_PCN_MENU = 4;

// Static Timeout Settings
MSFlyout.ACTIVATION_TIMEOUT = new Array();
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1] = 200;
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV2] = 500;
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON] = 200;
MSFlyout.ACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_MENU] = 250;

MSFlyout.DEACTIVATION_TIMEOUT = new Array();
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV1] = 200;
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_CORENAV2] = 200;
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_BUTTON] = 200;
MSFlyout.DEACTIVATION_TIMEOUT[MSFlyout.TYPE_PCN_MENU] = 200;

// Static CSS Settings
MSFlyout.CSS_CLASS_ACTIVE = "ms-active";
MSFlyout.CSS_CLASS_HOVER = "ms-fly-hover";

// Static Vars
MSFlyout.flyouts = new Array();
MSFlyout.openFlyout = new Array();
MSFlyout.changeTimeout = new Array();
MSFlyout.closeTimeout = new Array();

// Static Methods
MSFlyout.change = function(/*String*/ id, /*int*/ type) {
	// Close open MSFlyout Menu
	if (MSFlyout.openFlyout[type]) {
		MSFlyout.openFlyout[type].handleDeactivate();
	}
	
	// Open new MSFlyout Menu
	if (MSFlyout.flyouts[type][id]) {
		MSFlyout.flyouts[type][id].handleActivate();
	}
}

MSFlyout.closeAll = function(/*int*/ type) {
	// Close all open MSFlyout Menus
	for (var flyout in MSFlyout.flyouts[type]) {
		if (MSFlyout.flyouts[type][flyout].active) {
			MSFlyout.flyouts[type][flyout].handleDeactivate();
		}
	}
	
	// Reset openFlyout Reference
	MSFlyout.openFlyout[type] = undefined;
}

MSFlyout.pushClass = function(object, className) {
	var /*String*/ objClasses = getClassName(object);
	if (objClasses.indexOf(className) == -1) {
		objClasses += " " + className;
	}
	setClass(object, objClasses);
}

MSFlyout.popClass = function(object, className) {
	var /*String*/ objClasses = getClassName(object);
	var /*int*/ posClassName = objClasses.indexOf(className);
	if (posClassName != -1) {
		if (posClassName + className.length < objClasses.length) {
			objClasses = objClasses.substring(0, posClassName) + objClasses.substring(posClassName + className.length);
		} else {
			objClasses = objClasses.substring(0, posClassName);
		}
	}
	setClass(object, objClasses);
}



// Methods
MSFlyout.prototype.activate = function() {
	// Clear Closing Timeout
	clearTimeout(MSFlyout.changeTimeout[this.type]);
	clearTimeout(MSFlyout.closeTimeout[this.type]);

	// Closing all independend, open menus
	for (var type in MSFlyout.openFlyout) {
		var /*boolean*/ isIndependend = true;
		switch (this.type) {
			// Core Navigation flyouts
			case MSFlyout.TYPE_CORENAV1:
			case MSFlyout.TYPE_CORENAV2:
				isIndependend = ((type != MSFlyout.TYPE_CORENAV1)
						&& (type != MSFlyout.TYPE_CORENAV2));
				break;
			
			// PCN Flyouts
			case MSFlyout.TYPE_PCN_BUTTON:
			case MSFlyout.TYPE_PCN_MENU:
				isIndependend = ((type != MSFlyout.TYPE_PCN_BUTTON)
						&& (type != MSFlyout.TYPE_PCN_MENU));
				break;
		}
		
		// If current flyout type is independend and has open flyouts, close them
		if (isIndependend && MSFlyout.openFlyout[type]) {
			MSFlyout.closeAll(type);
		}
	}

	if (MSFlyout.openFlyout[this.type] == undefined) {
		// If no MSFlyout Menu is open, strictly open the current one
		this.handleActivate();
	} else if (MSFlyout.openFlyout[this.type] != this) {
		MSFlyout.changeTimeout[this.type] = setTimeout("MSFlyout.change(\"" + this.id + "\", \"" + this.type + "\")", MSFlyout.ACTIVATION_TIMEOUT[this.type]);
	}
}

MSFlyout.prototype.handleActivate = function() {
	// Call Ajax Request for Core Navigation 2 Flyout
	if (this.type == MSFlyout.TYPE_CORENAV2) {
		var /*String[]*/ values = this.id.split("@");
		var /*String*/ elementId = values[0];
		var /*String*/ handle = values[1];
		//auskommentiert, da bei BAIs keine Untermen�s zum Einsatz kommen und sonst ein Fehler gemeldet wird
		//ms_corenav_loadFlyoutData(elementId, handle);
	}
	
	// Activate MSFlyout
	this.active = true;
	MSFlyout.pushClass(this.flyout, MSFlyout.CSS_CLASS_HOVER);
	
	// Set openFlyout Reference
	MSFlyout.openFlyout[this.type] = this;
}

MSFlyout.prototype.deactivate = function() {
	// Set Closing Timeout
	MSFlyout.closeTimeout[this.type] = setTimeout("MSFlyout.closeAll(\"" + this.type + "\")", MSFlyout.DEACTIVATION_TIMEOUT[this.type]);
}

MSFlyout.prototype.handleDeactivate = function() {
	// Deactivate MSFlyout
	this.active = false;
	MSFlyout.popClass(this.flyout, MSFlyout.CSS_CLASS_HOVER);
}
