Firefox Sublime Text Add-On
===========================

- Open selection in Sublime Text from context menu
- Locate Profile Folder (`about:support > Profile Folder [Show Folder]`)
- Add an entry to `user.js`
````
// Sublime Text AddOn
user_pref("extensions.sublimetext.exe", "C:\\Tools\\SublimeText\\sublime_text.exe");
````
- Or add it as a new string in `about:config`
