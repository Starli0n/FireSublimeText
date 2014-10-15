var contextMenu = require("sdk/context-menu");
 var menuItem = contextMenu.Item({
  label: "Sublime Text",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    const {Cc, Ci} = require("chrome");
    var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
    var name = "extensions.sublimetext.exe";
    var SublimeTextBin = require("sdk/preferences/service").get(name);
    file.initWithPath(SublimeTextBin);
    var params = [selectionText];
    var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
    process.init(file);
    process.run(false, params, params.length);
    console.log(selectionText);
  }
});
