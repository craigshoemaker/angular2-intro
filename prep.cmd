xcopy /I .vscode _demo\.vscode
xcopy /I app _demo\app
xcopy /I img _demo\img
xcopy /I typings _demo\typings

xcopy *.html _demo
xcopy *.js _demo
xcopy *.css _demo
xcopy *.json _demo

copy edit.cmd _demo
copy start.cmd _demo

cd _demo

npm install