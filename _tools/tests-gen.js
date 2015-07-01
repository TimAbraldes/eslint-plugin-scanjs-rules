
var scanJsRules = [
  {
    "name": "eval",
    "source": "eval()",
    "testhit": "eval('jsCode'+usercontrolledVal )",
    "testmiss": "eval",
    "desc": "Controlling of the first argument to eval(...) results in direct script execution.",
    "threat": "Execution Sink"
  },
  {
    "name": "global.eval",
    "source": "$_any.eval()",
    "testhit": "window.eval('jsCode'+usercontrolledVal )",
    "testmiss": "eval",
    "desc": "Controlling of the first argument to eval(...) results in direct script execution.",
    "threat": "Execution Sink"
  },
  {
    "name": "new Function",
    "source": "new Function()",
    "testhit": "new Function('jsCode'+usercontrolledVal ) ;\n new Function('arg','arg2','jsCode'+usercontrolledVal )",
    "testmiss": "Function",
    "desc": "Controlling of the first argument to Function(...) results in direct script execution.",
    "threat": "Execution Sink"
  },
  {
    "name": "call Function",
    "source": "Function()",
    "testhit": "Function('jsCode'+usercontrolledVal ) ;\n Function('arg','arg2','jsCode'+usercontrolledVal )",
    "testmiss": "Function",
    "desc": "Controlling of the first argument to Function(...) results in direct script execution.",
    "threat": "Execution Sink"
  },
  {
    "name": "setTimeout",
    "source": "setTimeout()",
    "testhit": "setTimeout('jsCode'+usercontrolledVal ,timeMs)",
    "testmiss": "setTimeout",
    "desc": "Calling setTimeout with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "global.setTimeout",
    "source": "$_any.setTimeout()",
    "testhit": "global.setTimeout('jsCode'+usercontrolledVal ,timeMs)",
    "testmiss": "setTimeout",
    "desc": "Calling setTimeout with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "setInterval",
    "source": "setInterval()",
    "testhit": "setInterval('jsCode'+usercontrolledVal ,timMs)",
    "testmiss": "setInterval",
    "desc": "Calling setInterval with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "global.setInterval",
    "source": "$_any.setInterval()",
    "testhit": "global.setInterval('jsCode'+usercontrolledVal ,timMs)",
    "testmiss": "setInterval",
    "desc": "Calling setInterval with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "setImmediate",
    "source": "setImmediate()",
    "testhit": "setImmediate('jsCode'+usercontrolledVal )",
    "testmiss": "setImmediate",
    "desc": "Calling setImmediate with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "global.setImmediate",
    "source": "$_any.setImmediate()",
    "testhit": "global.setImmediate('jsCode'+usercontrolledVal )",
    "testmiss": "setImmediate",
    "desc": "Calling setImmediate with a first argument as string (or string concatenation) with user input may lead to XSS",
    "threat": "Execution Sink"
  },
  {
    "name": "execScript",
    "source": "execScript()",
    "testhit": "execScript('jsCode'+usercontrolledVal ,'JScript')",
    "testmiss": "execSript",
    "desc": "Using execScript with user input leads to Cross Site Scripting (Internet Explorer only)",
    "threat": "Execution Sink"
  },
  {
    "name": "crypto.generateCRMFRequest",
    "source": "crypto.generateCRMFRequest()",
    "testhit": "crypto.generateCRMFRequest('CN=0',0,0,null,'jsCode'+usercontrolledVal,384,null,'rsa-dual-use')",
    "testmiss": "crypto.generateCRMFRequest",
    "desc": "Due to a bug in Firefox, this function may be used as an obfuscated way to call execute scripts from strings (like eval). This may lead to Cross-Site-Scripting.",
    "threat": "Execution Sink"
  },
  {
    "name": "document.write ",
    "source": "document.write()",
    "testhit": "document.write('test')",
    "testmiss": "document.write",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": "HTMLElement Sink"
  },
  {
    "name": "document.writeln",
    "source": "document.writeln()",
    "testhit": "document.writeln('test')",
    "testmiss": "document.writeln",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": "HTMLElement Sink"
  },
  {
    "name": ".innerHTML ",
    "source": "$_any.innerHTML=$_unsafe",
    "testhit": "a.innerHTML=foo;a.innerHTML=foo+'bar'",
    "testmiss": "a.innerHTML='foo';a.innerHTML='foo'+'bar'",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": "HTMLElement Sink"
  },
  {
    "name": ".outerHTML ",
    "source": "$_any.outerHTML=$_unsafe",
    "testhit": "a.outerHTML=foo",
    "testmiss": "outerHTML",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": "HTMLElement Sink"
  },
  {
    "name": "insertAdjacentHTML()",
    "source": "insertAdjacentHTML()",
    "testhit": "insertAdjacentHTML(foo)",
    "testmiss": "insertAdjacentHTML",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": "HTMLElement Sink"
  },
  {
    "name": "$_any.createContextualFragment",
    "source": "$_any.createContextualFragment",
    "testhit": "foo.createContextualFragment",
    "testmiss": "createContextualFragment",
    "desc": "",
    "threat": "HTMLElement Sink"
  },
  {
    "name": "$_any.location=",
    "source": "$_any.location=$_unsafe",
    "testhit": "foo.location=bar",
    "testmiss": "foo.location==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects. Furthermore, it can cause Cross-Site Scripting, when javascipt: URIs are used",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.href=",
    "source": "$_any.href=$_unsafe",
    "testhit": "foo.href=bar",
    "testmiss": "foo.href==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects. Furthermore, it can cause Cross-Site Scripting, when javascipt: URIs are used",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.pathname=",
    "source": "$_any.pathname=$_unsafe",
    "testhit": "foo.pathname=bar",
    "testmiss": "foo.pathname==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects.",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.search=",
    "source": "$_any.search=$_unsafe",
    "testhit": "foo.search=bar",
    "testmiss": "foo.search==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects.",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.protocol=",
    "source": "$_any.protocol=$_unsafe",
    "testhit": "foo.protocol=bar",
    "testmiss": "foo.protocol==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects.",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.hostname=",
    "source": "$_any.hostname=$_unsafe",
    "testhit": "foo.hostname=bar",
    "testmiss": "foo.hostname==bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects.",
    "threat": "Location Sink"
  },
  {
    "name": "$_any.src=",
    "source": "$_any.src=$_unsafe",
    "testhit": "bar.src=foo",
    "testmiss": "src.bar",
    "desc": "Assignments to the document's location may lead to spoofing and unexpected redirects. It may also lead to script execution, depending on the affected HTML Tag (i.e. object)",
    "threat": "Location Sink"
  },
  {
    "name": "parseFromString()",
    "source": "parseFromString()",
    "testhit": "parseFromString(bar+'bar')",
    "testmiss": "parseFromString",
    "desc": "This function creates a DOM from strings. Depending on their source it is likely important to sanitize it before an insertion into the DOM happens",
    "threat": "Interesting Function"
  },
  {
    "name": "addEventListener()",
    "source": "$_any.addEventListener()",
    "testhit": "foo.addEventListener(bar+'bar')",
    "testmiss": "addEventListener",
    "desc": "Certain events (like message) may cause untrusted third party data",
    "threat": "Input Sink"
  },
  {
    "name": "message handler",
    "source": "$_any.addEventListener('message')",
    "testhit": "window.addEventListener('message', receiveMessage, false); ",
    "testmiss": "window.addEventListener('notmessage', receiveMessage, false); ",
    "desc": "Check to make sure message handler validates to protect against malicious cross-origin message.",
    "threat": "Input Validation"
  },
  {
    "name": "onmessage=",
    "source": "onmessage=$_any",
    "testhit": "onmessage=bar",
    "testmiss": "onmessage",
    "desc": "Check to make sure message handler validates to protect against malicious cross-origin message.",
    "threat": "Input Validation"
  },
  {
    "name": "Indexeddb",
    "source": "indexedDB",
    "testhit": "indexedDB.open('MyTestDatabase');",
    "testmiss": " 'indexeddb'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "localStorage",
    "source": "localStorage",
    "testhit": "localStorage.setItem('name', 'user1'); ",
    "testmiss": " 'localStorage'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "sessionStorage",
    "source": "sessionStorage",
    "testhit": "sessionStorage.setItem('name', 'user1'); ",
    "testmiss": " 'sessionStorage'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "Indexeddb",
    "source": "$_any.indexedDB",
    "testhit": "window.indexedDB.open('MyTestDatabase');",
    "testmiss": " 'indexeddb'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "localStorage",
    "source": "$_any.localStorage",
    "testhit": "window.localStorage.setItem('name', 'user1'); ",
    "testmiss": " 'localStorage'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "sessionStorage",
    "source": "$_any.sessionStorage",
    "testhit": "window.sessionStorage.setItem('name', 'user1'); ",
    "testmiss": " 'sessionStorage'",
    "desc": "Client-side data storage.",
    "threat": ""
  },
  {
    "name": "DomParser",
    "source": "$_any.parseFromString()",
    "testhit": "window.doc = parser.parseFromString(someVar, 'text/html'); ",
    "testmiss": "parseFromString()",
    "desc": "Writing user specified HTML to the DOM may lead to Cross-Site Scripting",
    "threat": ""
  },
  {
    "name": "start mozActivity",
    "source": "new MozActivity()",
    "testhit": "new MozActivity({type:'pick'})",
    "testmiss": "MozActivity +1",
    "desc": "This function creates new Web Activities and can transfer data from one app to another",
    "threat": ""
  },
  {
    "name": "handle mozActivity",
    "source": "$_any.mozSetMessageHandler('activity')",
    "testhit": "navigator.mozSetMessageHandler('activity',callback)",
    "testmiss": "",
    "desc": "This function allows registering message handlers for Web Activities.",
    "threat": ""
  },
  {
    "name": "handle system message",
    "source": "$_any.mozSetMessageHandler()",
    "testhit": "navigator.mozSetMessageHandler()",
    "testmiss": "",
    "desc": "This function allows registering message handlers for Web Activities.",
    "threat": ""
  },
  {
    "name": "access datastore",
    "source": "navigator.getDataStores",
    "testhit": "navigator.getDataStores()",
    "testmiss": "",
    "desc": "This API allows access to datastores that may be used to serve or retrieve data from third party apps",
    "threat": ""
  },
  {
    "name": "Make InterAppCommunication",
    "source": "$_any.connect()",
    "testhit": "app.connect('bluetoothTransfercomms')",
    "testmiss": "",
    "desc": "",
    "threat": ""
  },
  {
    "name": "Recieve InterAppCommunication",
    "source": "$_any.setMessageHandler('connect')",
    "testhit": " navigator.setMessageHandler('connect',callback)",
    "testmiss": "",
    "desc": "This function sets a handler for inter app communication messages. In general, mozSetMessageHandler allows handling WebActivities. The origin of the activity and its data might be untrusted.",
    "threat": ""
  },
  {
    "name": "alarms permission",
    "source": "navigator.mozAlarms",
    "testhit": "navigator.mozAlarms",
    "testmiss": "MozAlarms",
    "desc": "This function is only available to higher privileged Firefox OS applications and allows setting and editing alarms. Frequent alarms might prevent power saving and drain the battery.",
    "threat": "Privileged API"
  },
  {
    "name": "attention permission",
    "source": "window.open($_any, $_any, 'attention')",
    "testhit": "window.open('oncall.html', '', 'attention');",
    "testmiss": "",
    "desc": "Attention popups fill the whole display. URLs pointing to javascript: and data: protocols can lead to XSS. Popups can also confuse and misdirect users.",
    "threat": ""
  },
  {
    "name": "audio-capture permission",
    "source": "navigator.getUserMedia",
    "testhit": "navigator.getUserMedia({audio:true});",
    "testmiss": "",
    "desc": "This function allows prompting for audio and video recording.",
    "threat": ""
  },
  {
    "name": "audio-channel-alarm permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'alarm'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-content permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'content'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-normal permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'normal'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications",
    "threat": ""
  },
  {
    "name": "audio-channel-notification permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'notification'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-publicnotification permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'publicnotification'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-ringer permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'ringer'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-telephony permission",
    "source": "$_any.mozAudioChannelType=$_any",
    "testhit": "ringtonePlayer.mozAudioChannelType = 'telephony'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-content permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'content';",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-alarm permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'alarm'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-normal permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'normal'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-notification permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'notification'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-publicnotification permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'publicnotification'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-ringer permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'ringer'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "audio-channel-telephony permission",
    "source": "$_any.mozAudioChannel=$_any",
    "testhit": "ringtonePlayer.mozAudioChannel = 'telephony'",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "background-sensors permission",
    "source": "$_any.addEventListener('deviceproximity', callback)",
    "testhit": "window.addEventListener('deviceproximity', callback)",
    "testmiss": "",
    "desc": "This exercizes the proximity API to check whether the phone is close to something (i.e. held to the ear).",
    "threat": ""
  },
  {
    "name": "bluetooth permission",
    "source": "navigator.mozBluetooth",
    "testhit": "window.navigator.mozBluetooth",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": "Certified API"
  },
  {
    "name": "browser permission",
    "source": "$_any.setAttribute('mozbrowser')",
    "testhit": "iframe.setAttribute('mozbrowser', true);",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. MozBrowser frames have specific, elevated permissions.",
    "threat": ""
  },
  {
    "name": "camera permission",
    "source": "$_any.mozCameras",
    "testhit": "this.mozCameras[0].onShutter = this.onShutter;",
    "testmiss": "",
    "desc": "This function allows reading and modifying camera settings and is only available to higher privileged Firefox OS application.",
    "threat": ""
  },
  {
    "name": "cellbroadcast permission",
    "source": "$_any.addEventListener('cellbroadcastmsgchanged')",
    "testhit": "window.addEventListener('cellbroadcastmsgchanged', callback)",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "contacts permission",
    "source": "$_any.mozContacts",
    "testhit": "navigator.mozContacts.oncontactchange = callback",
    "testmiss": "",
    "desc": "This function allows reading and modifying the phone's contacts. It is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "desktop-notification permission",
    "source": "new Notification()",
    "testhit": "var notification = new Notification(title, {body: body, icon: iconURL});",
    "testmiss": "",
    "desc": "This function generate notifications from the app. It is only available to higher privileged Firefox OS applications. ",
    "threat": ""
  },
  {
    "name": "device-storage catch-all",
    "source": "$_any.getDeviceStorage",
    "testhit": "apps = navigator.getDeviceStorage('apps');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "device-storage:apps permission",
    "source": "$_any.getDeviceStorage('apps')",
    "testhit": "apps = navigator.getDeviceStorage('apps');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "device-storage:crashes permission",
    "source": "$_any.getDeviceStorage('crashes')",
    "testhit": "crashes = navigator.getDeviceStorage('crashes');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "device-storage:music permission",
    "source": "$_any.getDeviceStorage('music')",
    "testhit": "storage = navigator.getDeviceStorage('music');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "device-storage:pictures permission",
    "source": "$_any.getDeviceStorage('pictures')",
    "testhit": "this.image = navigator.getDeviceStorage('pictures');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "device-storage:sdcard permission",
    "source": "$_any.getDeviceStorage('sdcard')",
    "testhit": "var storage = navigator.getDeviceStorage('sdcard');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "device-storage:videos permission",
    "source": "$_any.getDeviceStorage('videos')",
    "testhit": "this.video = navigator.getDeviceStorage('videos');",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "downloads permission",
    "source": "navigator.mozDownloadManager",
    "testhit": "navigator.mozDownloadManager",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "embed-apps permission",
    "source": "$_any.setAttribute('mozapp')",
    "testhit": "browser.setAttribute('mozapp', config.manifestURL);",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "fmradio permission",
    "source": "navigator.mozFMRadio",
    "testhit": "navigator.mozFMRadio",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": "Certified API"
  },
  {
    "name": "geolocation permission",
    "source": "navigator.geolocation",
    "testhit": "var geolocation = navigator.geolocation;",
    "testmiss": "",
    "desc": "This function gives access to information about the user's location.",
    "threat": ""
  },
  {
    "name": "idle permission",
    "source": "navigator.addIdleObserver",
    "testhit": "navigator.addIdleObserver",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "input permission",
    "source": "navigator.mozInputMethod",
    "testhit": "window.navigator.mozInputMethod",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "input-manage permission",
    "source": "$_any.mgmt.hide()",
    "testhit": "navigator.mozInputMethod.mgmt.hide()",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "mobileconnection permission",
    "source": "navigator.mozMobileConnections",
    "testhit": "navigator.mozMobileConnections",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "mobilenetwork permission",
    "source": "$_any.lastKnownHomeNetwork",
    "testhit": "connection.lastKnownHomeNetwork && connection.lastKnownNetwork",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "mobilenetwork permission",
    "source": "$_any.lastKnownNetwork",
    "testhit": "connection.lastKnownHomeNetwork && connection.lastKnownNetwork",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "network-events permission",
    "source": "$_any.addEventListener('moznetworkupload')",
    "testhit": "window.addEventListener('moznetworkupload', uploadHandler);",
    "testmiss": "window.addEventListener('moznetworkdownload', downloadHandler);",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "network-events permission",
    "source": "$_any.addEventListener('moznetworkdownload')",
    "testhit": "window.addEventListener('moznetworkdownload', downloadHandler);",
    "testmiss": "window.addEventListener('moznetworkupload', uploadHandler);",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "networkstats-manage permission",
    "source": "navigator.mozNetworkStats",
    "testhit": "var networks = navigator.mozNetworkStats.getAvailableNetworks();",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "nfc permission",
    "source": "navigator.mozNfc",
    "testhit": "navigator.mozNfc",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "open-remote-window permission",
    "source": "window.open($_any,$_any, 'remote=true');",
    "testhit": "window.open(target.dataset.url, '_blank', 'remote=true');",
    "testmiss": "",
    "desc": "Not sure if testhit example is right here..",
    "threat": "Certified API"
  },
  {
    "name": "permissions permission",
    "source": "navigator.mozPermissionSettings",
    "testhit": "var mozPerms = navigator.mozPermissionSettings;",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. It allows managing and revoking apps permissions.",
    "threat": "Certified API"
  },
  {
    "name": "phonenumberservice permission",
    "source": "navigator.mozPhoneNumberService",
    "testhit": "var service = navigator.mozPhoneNumberService;",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "power permission",
    "source": "navigator.mozPower",
    "testhit": "navigator.mozPower",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. It allows access to power management features.",
    "threat": "Certified API"
  },
  {
    "name": "settings permission",
    "source": "navigator.mozSettings",
    "testhit": "window.navigator.mozSettings",
    "testmiss": "",
    "desc": "Usage of sensThis function is only available to higher privileged Firefox OS applications. It allows access to the phone's settingsitive API",
    "threat": "Certified API"
  },
  {
    "name": "sms permission",
    "source": "navigator.mozMobileMessage",
    "testhit": "navigator.mozMobileMessage",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "speaker-control permission",
    "source": "new MozSpeakerManager()",
    "testhit": "var mgr = new MozSpeakerManager();",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "systemXHR permission",
    "source": "new XMLHttpRequest({mozSystem: true});",
    "testhit": "var xhr = new XMLHttpRequest({mozSystem: true});",
    "testmiss": "",
    "desc": "XMLHttpRequests of type system may contact and read data from third party origins",
    "threat": ""
  },
  {
    "name": "tcp-socket permission",
    "source": "navigator.mozTCPSocket;",
    "testhit": "var TCPSocket = navigator.mozTCPSocket;",
    "testmiss": "",
    "desc": "This function allows creating connections and communicating with remote servers.",
    "threat": ""
  },
  {
    "name": "telephony permission",
    "source": "navigator.mozTelephony",
    "testhit": "navigator.mozTelephony.stopTone(this.serviceId);",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": "Certified API"
  },
  {
    "name": "time permission",
    "source": "navigator.mozTime",
    "testhit": "_mozTime = window.navigator.mozTime;",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications.",
    "threat": ""
  },
  {
    "name": "video-capture permission",
    "source": "navigator.getUserMedia",
    "testhit": "navigator.getUserMedia({video:true});",
    "testmiss": "",
    "desc": "This function allows prompting for audio and video recording.",
    "threat": ""
  },
  {
    "name": "voicemail permission",
    "source": "navigator.mozVoicemail",
    "testhit": "var voicemail = navigator.mozVoicemail;",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. It allows controlling the phone's Voicemail features.",
    "threat": "Certified API"
  },
  {
    "name": "wappush permission",
    "source": "$_any.mozSetMessageHandler('wappush-received')",
    "testhit": "window.navigator.mozSetMessageHandler('wappush-received', wpm_onWapPushReceived);",
    "testmiss": "",
    "desc": "This specifies a handler for WAP Push notifications. In general, mozSetMessageHandler allows handling WebActivities. The origin of the activity and its data might be untrusted.",
    "threat": ""
  },
  {
    "name": "webapps manage",
    "source": "$_any.mgmt",
    "testhit": "var req = navigator.mozApps.mgmt.getAll();",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. It allows managing the phone's app.",
    "threat": ""
  },
  {
    "name": "wifi-manage permission",
    "source": "navigator.mozWifiManager",
    "testhit": "navigator.mozWifiManager",
    "testmiss": "",
    "desc": "This function is only available to higher privileged Firefox OS applications. It allows managing the Wifi features of the phone.",
    "threat": "Certified API"
  },
  {
    "name": "mozkeyboard",
    "source": "navigator.mozKeyboard",
    "testhit": "var keyboard = navigator.mozKeyboard || navigator.mozInputMethod;",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "cell broadcasts",
    "source": "navigator.mozCellBroadcast",
    "testhit": "navigator.mozCellBroadcast.onreceived = this.show.bind(this);",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "mobile connection api",
    "source": "navigator.mozMobileConnection",
    "testhit": "var conn = window.navigator.mozMobileConnection || window.navigator.mozMobileConnections",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
  {
    "name": "notification api",
    "source": "navigator.mozNotification",
    "testhit": "var notification = navigator.mozNotification.createNotification(title, body, icon);",
    "testmiss": "",
    "desc": "Usage of sensitive API",
    "threat": ""
  },
/*  {
    "name": "assignment typo",
    "source": "if($_contains('AssignmentExpression'));",
    "testhit": "if(x=y){};",
    "testmiss": "if(x==y){x=0;}",
    "desc": "Unintended use of AssignmentExpression in If Statement",
    "threat": "Typo"
  }*/
]
///////////////////////////////

var legacyRules = {};

function ruleTransform(rule) {
  var source = rule.source;
  var type;
  var newRule;
  if (rule.source.indexOf("'") !== -1) {
    // specific rule that change for special strings, like remote=true, attention etc.
    var funcName = rule.source.match(/(\w+)\(.*\)/)[1];
    var lit = rule.source.match(/\'(.*)\'/)[1];
    type = `call-${funcName}-${lit}`;    
    newRule = (new Function('context', `return {
        "CallExpression": function(node) {
            if (node.callee.name == '${funcName}') {
            for (var i=0; i < node.arguments.length; i++) {
              var arg = node.arguments[i];
              if ((arg.type == "Literal") && (arg.value == '${lit}')) {
                context.report(node, "The function ${funcName} with parameter ${lit} can be unsafe");
              }
            }
          }
        }
      }`
    ));
  } else if (rule.source.indexOf("=") !== -1) {
    if (rule.source.indexOf(".") !== -1) {
      // for property assignments
      var propName = rule.source.match(/.*\.(\w+)\s*=/)[1];
      type = `assign-to-${propName}`;          
      newRule = (Function ('context', `return {
          "AssignmentExpression:exit": function (node) {
            if ("property" in node.left) { // member assignment, so yeah.
              if (['+', '+='].indexOf(node.operator) !== -1) {
                if (node.left.property.name === '${propName}') {
                  if (!allowedExpression(node.right, node.parent)) {
                    context.report(node, "Assignment to ${propName} can be unsafe");
                  }
                }
              }
            }
          }
        };
      `));
    } else {
    /* outright assignments. only 2 are interesting:
        -> onmessage=…  and location…
        (XXX location is missing from the core ruleset, we just have .href)
     */
      var assigned = rule.source.match(/(\w+)\s*=/)[1];
      type = `assign-to-${assigned}`;
      newRule = (Function ('context', `
        return {
          "AssignmentExpression:exit": function (node) {
            if (node.left == '${assigned}') {
              context.report(node, "Assignment to ${assigned} can be unsafe");
            }
          }
        };
      `));
    }
  } else if (rule.source.indexOf("()") !== -1) {
    if (rule.source.indexOf("new ") === -1) {
      // call rule:
      var funcName = rule.source.match(/(\w+)\(\)/)[1];
    type = `call-${funcName}`;          
      newRule = (Function ('context', `return {
          "CallExpression": function (node) {
            if (node.callee.name == '${funcName}') {
              context.report(node, "The function ${funcName} can be unsafe");
            }
          }
        };
      `));
    } else { // constructor rule
      /*TODO this is awfully similar to the callExpression thing
        (except for, well, the expression being checked on), maybe
        we should merge this somehow?
       */
      type = "new expression";
      var funcName = rule.source.match(/(\w+)\(\)/)[1];      
    type = `new-${funcName}`;          
      newRule = (Function ('context', `return {
          "NewExpression": function (node) {
            if (node.callee.name == '${funcName}') {
              context.report(node, "The ${funcName} constructor can be unsafe");
            }
            }
          };
        `));
      }
    } else if (rule.source.indexOf("mozSystem") !== -1) {
    type = `object-mozSystem`;          
    newRule = (Function('context', `return {
        "ObjectExpression": function (node) {
          for (var i=0; i < node.properties.length; i++) {
            var prop = node.properties[i];
            if (prop.key.type == "Identifier") {
              if (prop.key.name == "mozSystem") {

              }
            } else if (prop.key.type == "Literal") {
              if (prop.key.value == "mozSystem") {
                context.report(node, "mozSystem can be unsafe");
              }
            }
          }
        }
      }
    `));
  } else if (rule.source.indexOf(".") !== -1) {
    type = "member statement";
    // member
      var property = rule.source.match(/\.(\w+);?$/)[1];
    type = `property-${property}`;        
    newRule = (Function('context', `return {
       "MemberExpression": function(node) {
          if (node.property.name == '${property}') {
            context.report(node, "${property} can be unsafe");

          }
       }
     }
   `));                                               f
  } else {
    type = `identifier-${rule.source}`;

    newRule = (Function('context', `
      return {
        "Identifier": function(node) {
          if (node.name == "${rule.source}") {
            context.report(node, "${rule.source} can be unsafe");
          }
        }
      }
    `))
  }
  //console.log("identified " + rule.name + " (`"+rule.source+"`) as a "+type+' rule');
  return [type, newRule];
}

//var fs = require("fs");
fw = {};
missing=[];
for (var i=0; i < scanJsRules.length; i++) {
  var rule = scanJsRules[i];
  var eslintRule = ruleTransform(rule);
  var fname = eslintRule[0].replace(/\-/g,"_");
  var template="/**\n"
    +" * @fileoverview Test for "+fname+" rule\n"
    +" * @author ScanJS contributors\n"
    +" * @copyright 2015 Mozilla Corporation. All rights reserved\n"
    +" */\n"
    +"\"use strict\";\n"
    +"\n"
    +"//------------------------------------------------------------------------------\n"
    +"// Requirements\n"
    +"//------------------------------------------------------------------------------\n"
    +"\n"
    +"var eslint = require(\"eslint\"),\n"
    +"    ESLintTester = require(\"eslint-tester\");\n"
    +"\n"
    +"//------------------------------------------------------------------------------\n"
    +"// Tests\n"
    +"//------------------------------------------------------------------------------\n"
    +"\n"
    +"var eslintTester = new ESLintTester(eslint.linter);\n"
    +"eslintTester.addRuleTest(\"lib/rules/"+fname+"\", {\n"
    +"    valid: [\n";
  var warntestmiss=false;
  if (!rule.testmiss) {
    rule.testmiss = "foo()"
    warntestmiss=true;
  }  
  for (var m of rule.testmiss.replace("\n","").split(";"))
      if (m.trim() == "") { continue; }    
    //console.log(rule.testmiss, '|', m);  
    template+="        { code: \""+m+"\" }";
  if (warntestmiss)
    {
      console.log("miss", m, eslintRule[0])
      template+= " // XXX no need to test for code that does not trigger.";
    }
  template +="\n    ]\n,"
    template +="    // Examples of code that should trigger the rule\n"
    +"    invalid: [\n"
    +"\n";
    for (var c of rule.testhit.replace("\n","").split(";")) {
      if (c.trim() == "") { continue; }
    template+="        {\n"
    +"            code: \""+c+"\",\n"
    +"            errors: [\n"
    +"                { message: \"can be unsafe\" }\n"
    +"            ]\n"
    +"        },\n";
    }
    template+="    ]\n";

    template+="});  // auto-generated from scanjs rules.json"

  //console.log("\n\n");
  //fs.writeFile('../tests/rules/'+fname+'.js', template);
  fw['../tests/rules/'+fname+'.js'] = template;
}


fw.toSource();
