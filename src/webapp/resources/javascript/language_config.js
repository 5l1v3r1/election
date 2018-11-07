// Sprachmenue Konfiguration
// nicht benoetigte Menueeintraege mit // in allen 3 Bereichen auskommentieren (languages, countycode, available_parts)
// die Sprache erscheint dann nicht mehr im Menue
// verfuegbare Bereiche der einzelnen Sprachen bei available_parts eintragen

// current_part und current_language muessen in den einzelnen Seiten gesetzt sein.
// current_part ist der Bereich, der beim Sprachwechsel erscheint (wenn vorhanden)
// current_language ist die aktuelle Sprache
// 	  var current_part='in-depth';
//	  var current_language='de';

// Default URL des iFrame bei Aufruf ohne Parameter
var defaultFrameURL = '../../204/[language]/in-depth/index_start.shtml'; // gilt fuer Baureihen, deren iFrame in einem Verzeichnis ausserhalb der Baureihe liegt, z.B. W/S 212, W/S 204
//var defaultFrameURL = 'in-depth/index_a.shtml'; // gilt fuer alle Baureihen, deren iFrame sich innerhalb der Baureihe befinden
var defaultPart = "in-depth";

// Sprachmenue-Liste
var languages = new Array();
// Wording des Sprachmenüs
languages.push('Deutsch');    // de
languages.push('English');    // en
languages.push('Italiano');   // it
languages.push('Français');   // fr
languages.push('Español');    // es
languages.push('Português');  // pt
languages.push('Nederlands'); // nl
languages.push('Dansk');      // da
languages.push('Svenska');    // sv
languages.push('&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;'); // ru
languages.push('suomi');      // fi
languages.push('Ελληνικά');   // el
languages.push('Polski');     // pl
languages.push('Čeština');    // cs
languages.push('Türkçe');     // tr
languages.push('عربي');       // ar
languages.push('日本語');      // jp
//languages.push('中文（简体）');  // zh

// Laenderkuerzel-Liste
var countrycodes = new Array();
// Laenderkuerzel der Sprachen in der Reihenfolge des Sprachmenues (languages)
countrycodes.push('de'); // de
countrycodes.push('en'); // en
countrycodes.push('it'); // it
countrycodes.push('fr'); // fr
countrycodes.push('es'); // es
countrycodes.push('pt'); // pt
countrycodes.push('nl'); // nl
countrycodes.push('da'); // da
countrycodes.push('sv'); // sv
countrycodes.push('ru'); // ru
countrycodes.push('fi'); // fi
countrycodes.push('el'); // el
countrycodes.push('pl'); // pl
countrycodes.push('cs'); // cs
countrycodes.push('tr'); // tr
countrycodes.push('ar'); // ar
countrycodes.push('jp'); // jp
//countrycodes.push('zh'); // zh

// Liste der verfuegbaren Bereiche der Sprachen
var available_parts = new Array();
// Verfuegbare Bereiche der Sprachen in der Reihenfolge des Sprachmenues (languages)
// nach folgendem Schema:
// 0 - Sprachhinweis, Disclaimer, Startseite, Ueberblick, Erleben, Transparent, 6 - Vertiefen, 7 - Kommunizieren, Informieren,  9- Audio 20, 10 - Audio 50, 11 - Comand, Sonderfahrzeug Marco Polo, Sprachsteuerung, Sound 5, Kühlfahrzeug, CD Radio (NFZ), CD Radio mit Bluetooth (NFZ), CD Radio mit Bluetooth Festeinbau (NFZ), Bluetooth Komfort (NFZ), Truck Navigation, Taxi
// languages, disclaimer, home, overview, experience, transparent, in-depth, bluetooth (communication), information, audio20, audio50, comand, fun_marcopolo, linguatronic, sound5, reefer, cd_radio, cd_radio_bt, cd_radio_bt_fix, bt_comfort, navigation, taxi
// jede Zeile steht für eine Sprache
//                                                                         1                          2
//                                             0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
available_parts.push(new Array(1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // de
available_parts.push(new Array(1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // en
available_parts.push(new Array(1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // it
available_parts.push(new Array(1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // fr
available_parts.push(new Array(1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // es
available_parts.push(new Array(1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // pt
available_parts.push(new Array(1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // nl
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // da
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // sv
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // ru
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // fi
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0)); // el
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0));  //pl
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0));  //cs
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0));  //tr
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0));  //ar
available_parts.push(new Array(1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0));  //jp
//available_parts.push(new Array(1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0));  //zh

//alert(available_parts[1][6]);

var part_names = new Array();
// Namen der Bereiche der BAi
// Bereichsvariale wird im Head der HTML-Dateien gesetzt (current_part)
part_names.push('languages'); // 0
part_names.push('disclaimer'); // 1 
part_names.push('home');  // 2
part_names.push('overview'); // 3
part_names.push('experience'); // 4
part_names.push('transparent'); // 5
part_names.push('in-depth'); // 6
part_names.push('bluetooth'); // 7 
part_names.push('information'); // 8
part_names.push('audio20'); // 9
part_names.push('audio50'); // 10
part_names.push('comand-online'); // 11
part_names.push('fun_marcopolo'); // 12 
part_names.push('linguatronic'); // 13
part_names.push('sound5'); // 14
part_names.push('reefer'); // 15
part_names.push('cd_radio'); // 16
part_names.push('cd_radio_bt'); // 17
part_names.push('cd_radio_bt_fix'); // 18
part_names.push('bt_comfort'); // 19
part_names.push('navigation'); // 20
part_names.push('taxi'); // 21


var part_paths = new Array();
// Pfade der Bereiche der Frame-Seite, ausgehend von manual_base.shtml (Pfad: /cars/[BR]/[Sprache])
// Pfade und Dateinamen jeweils der Startseiten der Bereiche
// Bei Pfaden, die sich ausserhalb des Sprachverzeichnisses befinden, kann die Sprache durch [language] ersetzt werden.
// Dieser Platzhalter wird dann vom Skript ersetzt.
// Reihenfolge der Bereiche:
// languages, disclaimer, home, overview, experience, transparent, in-depth, bluetooth (communication), information, audio20, audio50, comand, fun_marcopolo, linguatronic, sound5, reefer, cd_radio, cd_radio_bt, cd_radio_bt_fix, bt_comfort, navigation, taxi
part_paths.push('languages.html');
part_paths.push('index.html'); 
part_paths.push('flash8.html'); 
part_paths.push('overview/index.html'); 
part_paths.push('experience/index.html'); 
part_paths.push('transparent/index.html'); 
part_paths.push('../../204/[language]/in-depth/index_start.shtml'); 
part_paths.push('../../../hu_cars/NTG4_5_Gen3_ECE/[language]/bluetooth/index.shtml');
part_paths.push('information/index.html');
part_paths.push('../../../hu_cars/NTG4_5_ECE/[language]/audio20/index_start.shtml');
part_paths.push('');
part_paths.push('../../../hu_cars/NTG4_5_ECE/[language]/comand-online/index_start.shtml'); 
part_paths.push('fun_marcopolo/index_a.shtml'); 
part_paths.push('linguatronic/index_a.shtml'); 
part_paths.push('sound5/index_a.shtml'); 
part_paths.push('reefer/index_a.shtml'); 
part_paths.push('cd_radio/index_a.shtml'); 
part_paths.push('cd_radio_bt/index_a.shtml'); 
part_paths.push('cd_radio_bt_fix/index_a.shtml'); 
part_paths.push('bt_comfort/index_a.shtml'); 
part_paths.push('navigation/index_a.shtml'); 
part_paths.push('taxi/index_a.shtml');


function getLanguagePath(theCountryCode, thePart){
	// liefert den Pfad (inkl. Dateiname) zum Bereich der gewaehlten Sprache
	// theCountryCode: Laenderkuerzel (de, en, ...)
	// thePart: Name des Bereichs (disclaimer, home, ...)
	var partPage="languages.html"; // defaultseite
	var partName="languages"; // defaultbereich
	var pathUp="";
	var langId=countrycodes.findIndex(theCountryCode);
	var partId=part_names.findIndex(thePart);
	if (partId>-1&&langId>-1) {
		var isAvailable=available_parts[langId][partId];
		if (isAvailable>0) { 
			partPage=part_paths[partId];
			// [language] ersetzen
			partPage=partPage.replace("[language]", theCountryCode);
			partName=part_names[partId];
		} else {
			if (partId>=3 && partId<6) {
				partId=-1;
			} else {
				partId=0;
			}
		}
	}
	// Ausnahme fuer Sitemap, da in jeder Sprache vorhanden
	if (thePart=='sitemap') {
		var isAvailable=available_parts[langId][1];
		if (isAvailable>0) {
                    partPage='sitemap.html';
                    partName = 'sitemap';
                }
		partId=1; // damit die naechste zeile nicht pathUp setzt
	}
	// Bereiche 3-5 (overview, experience, transparent) befinden sich zwei Pfadebenen höher
	if ((partId>=3 && partId<6) || partId<0) {
		pathUp="../";
		var myPath=pathUp+"../"+theCountryCode+"/"+partPage;
		return myPath;
	} else {
			// Bereiche 0-2 (languages, disclaimer, home) befinden sich eine Pfadebene höher
			if (partId<3) {
				var myPath="../"+theCountryCode+"/"+partPage;
				return myPath;
			} else {
				// Bereiche ab 6 (in-depth) werden in iFrame geladen; Pfad des iFrame wird als id in URL angegeben
				var myPath="../"+theCountryCode+"/"+"manual_base.shtml?id="+partPage+"&part="+partName;
				return myPath;
			}
	}
}


function changeLanguage(theCountryCode){
	// liefert den Pfad (inkl. Dateiname) zum Bereich der gewaehlten Sprache
	// theCountryCode: Laenderkuerzel (de, en, ...)
	var myPath = getLanguagePath(theCountryCode, current_part);
	document.location.href=myPath;
	
}


Array.prototype.findIndex = function(value){
// ermittelt den Index eines Elements aus einer Liste
	var defRet = -1;
	for (var i=0; i < this.length; i++) {
		if (this[i] == value) {
			return i;
		}
	}
	return defRet;
};


var menu1=new Array();
if (typeof current_part=="undefined"){
// falls auf Seite nicht definiert, Defaultwert setzen (language)
	var current_part=part_names[0];
}
if (typeof current_language=="undefined"){
// falls auf Seite nicht definiert, Defaultwert setzen (de)
	var current_language=countrycodes[0];
}
// Generierung Sprachmenue aus den Listen
for (var i=0; i < languages.length; i++) {
	var my_language=languages[i];
	var my_countrycode=countrycodes[i];
	//var my_path=getLanguagePath(my_countrycode, current_part);
	//var my_link='<a href="'+my_path+'">'+my_language+'</a>';
	var my_link='<a href="javascript:;" onclick="changeLanguage(\''+my_countrycode+'\')">'+my_language+'</a>';
	menu1.push(my_link);
}


function writeIsPartAvailable(theCountryCode, thePart){
// setzt die Kreuze der verfuegbaren Bereiche/Sprachen auf der Hinweis-Seite (language.html)
// Aufruf: writeIsPartAvailable(theCountryCode, thePart);
	
	var langId=countrycodes.findIndex(theCountryCode);
	if (langId==-1) {
		document.write('&nbsp;');
	} else {
		var isAvailable=available_parts[langId][thePart];
		var deleteLine=available_parts[0][thePart];
		
			if (isAvailable==1) {
				document.write('X');
			} else {
				document.write('&nbsp;');
			}
	}
}

// eof
