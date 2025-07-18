## 开发起因
由于组会汇报时，在所难免的需要使用公式，但是PPT和Word中的公式编辑器使用不惯，并且之前写博客都是使用markdown编辑的，而markdown中的LaTeX公式编辑就非常方便，所以就打算开发一个使用LaTeX的公式编辑器

## 技术选型
本人技术太菜，对windows软件开发并没怎么接触过，只用C#写过上位机，使用最多的还是前端JS等语言，所以打算使用JS来开发桌面应用，用JS开发还有一个好处就是可以跨平台，综上所述，就选择了使用electron-vue来进行开发,并且vue框架下还有许多markdown编辑器，这里使用的是
mavonEditor
### electron-vue
Electron是一个基于node.js的跨平台桌面应用
它最大的有点在于可以使用JavaScript 和 HTML来构建跨平台的桌面应用。
我们常见的文本编辑器 atom，vscode就是基于Electron开发的。

## 软件功能
- 使用LaTeX语法编辑公式
- 保存公式
- 查找公式
- 将Latex格式转化为MathML格式，并复制到剪贴板，可以直接粘贴到Word中
## 代码地址
[fast-formula](https://github.com/cjpnice/fast-formula/releases)
喜欢的话给个star吧
![[Pasted image 20250718161011.png]]
![[Pasted image 20250718161039.png]]