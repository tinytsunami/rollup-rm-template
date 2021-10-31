# rollup-rm-template
A simple rollup configuration for RPG Maker plugin

# rollup-plugin-banner 需要修改

`.\node_modules\rollup-plugin-banner\dist\banner.js` 內容應該把註解拿掉：

```
// fix content
if (content) {
  var tmpl = template(content);
  var text = '';
  var arr = tmpl({
    pkg: this._pkg
  }).split('\n');

  if (arr.length === 1) {
    text = '// ' + arr[0] + '\n';
  } else {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      text += item + '\n';
      // if (i === 0) {
      //   text += '/**\n * ' + item + '\n';
      // } else if (i === arr.length - 1) {
      //   text += ' * ' + item + '\n */\n\n';
      // } else {
      //   text += ' * ' + item + '\n';
      // }
    }
  }
  res = text + code;
}
```
