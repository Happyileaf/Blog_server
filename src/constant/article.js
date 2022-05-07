module.exports ='\n' +
    '\n' +
    '「这是我参与2022首次更文挑战的第1天，活动详情查看：[2022首次更文挑战](https://juejin.cn/post/7052884569032392740 "https://juejin.cn/post/7052884569032392740")」。\n' +
    '\n' +
    '## Node 包，Npm，搜索包的过程\n' +
    '\n' +
    'Node的生态系统中，各种各样的模块，包给我们的开发带来了非常多的便利。最早学习vue的时候，其实就有用到Node的相关功能了，比如安装功能依赖，运行脚本（npm run serve）等等。这篇文章主要是学习Node中和包，Npm相关的概念。\n' +
    '\n' +
    '### 一、包\n' +
    '\n' +
    '#### 1. 包简介\n' +
    '包实际上就是一个压缩文件，解压以后还原为目录。一个包就是一组特定功能的模块的集合。说到包就不得不说到**CommonJS**规范。CommonJS规范中的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具，也就是包。  \n' +
    '\n' +
    'CommonJS规范中**包由包结构和包描述文件两个部分组成**。 \n' +
    '- **包结构** – 用于组织包中的各种文件 \n' +
    '- **包描述文件** – 描述包的相关信息，以供外部读取分析\n' +
    '\n' +
    '符合CommonJS规范的目录，应该包含如下文件：   \n' +
    '\n' +
    '| 文件或目录 | 内容 | 必需性 |\n' +
    '| --- | --- | --- |\n' +
    '| `package.json` | `包描述文件` | `必需` | \n' +
    '| bin | 可执行二进制文件 | 非必需 | \n' +
    '| lib | js代码 | 非必需 | \n' +
    '| doc | 文档 | 非必需 | \n' +
    '| test | 单元测试用例 | 非必需 | \n' +
    '\n' +
    '虽然文档和单元测试不是必需的，但是一个有详细文档和严格单元测试的包往往会被认为更踏实可靠，尤其是在对外发布的时候。\n' +      
    '\n' +
    '\n' +
    '#### 2. 包描述文件\n' +
    '\n' +
    'package.json —— 包描述文件。用来描述包的相关信息，就像是一个说明书。它是一个**JSON格式**的文件，位于**包的根目录**下，是包的**重要且必需**的组成部分。\n' +
    '\n' +
    'package.json的属性非常非常多，具体的大家可以去查阅文档。这里主要讲一讲重要且常用的一些属性。\n' +
    '\n' +
    '| 字段 | 含义 | 重要性 |\n' +
    '| --- | --- | --- |\n' +
    '| name | 包名 | `必需` | \n' +
    '| description | 描述 | `必需` | \n' +
    '| version | 版本 | `必需` | \n' +
    '| keywords | 关键词，用于包的搜索 | `必需` | \n' +
    '| maintainers | 包维护者列表 | `必需` | \n' +
    '| contributors | 包贡献者列表 | `必需` | \n' +
    '| bugs | 反馈bug的网页或邮件地址 | `必需` | \n' +
    '| licenses | 包所使用的的许可证列表 | `必需` | \n' +
    '| repositories | 托管源代码的位置列表 | `必需` | \n' +
    '| dependencies | 依赖包列表 | `必需` | \n' +
    '| author | 包作者 | **常用** | \n' +
    '| bin | 包作为命令行工具使用的配置 | **常用** | \n' +
    '| main | 包入口文件 | **常用** | \n' +
    '| scripts | 脚本说明对象 | **常用** | \n' +
    '| engine | 支持的JavaScript引擎列表 | **常用** | \n' +
    '| devDependencies | 开发依赖包列表 | **常用** | \n' +
    '\n' +
    '这里讲一讲dependencies，devDependencies，scripts\n' +
    '\n' +
    '- dependencies，依赖包列表，这个属性会记录当前包所依赖的其他包。在用NPM安装包的时候，会**递归地安装**所依赖的包。在运行 `npm install` 指令的时候，会根据这个属性为当前包安装好所有的依赖\n' +
    '- devDependencies，开发依赖包列表，一些只在开发环境所需的依赖。配置这个属性，可以让后续的开发者安装依赖包。\n' +
    '- scripts，脚本说明对象，主要用来声明一些功能脚本。比如vue-cli中常用的npm run serve等等。\n' +
    '\n' +
    '\n' +
    '```js\n' +
    '  "scripts": {\n' +
    '    "serve": "vue-cli-service serve",\n' +
    '    "build": "vue-cli-service build",\n' +
    '    "test:unit": "vue-cli-service test:unit",\n' +
    '  },\n' +
    '```\n' +
    '\n' +
    '### 二、NPM\n' +
    '\n' +
    '#### 1. NPM 简介\n' +
    'NPM(Node Package Manager)   顾名思义，就是Node的包管理工具。包和NPM的关系就有点像app和应用商店的关系。通过NPM，我们可以非常方便地对包进行管理，比如发布，安装和依赖构建等。 \n' +
    '\n' +
    '• CommonJS包规范是理论，**NPM是CommonJS包规范的其中一种实践**。   \n' +
    '• 对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等。借助NPM，Node与第三方模块之间形成了很好的一个生态系统。\n' +  
    '\n' +
    '#### 2. NPM 常用指令\n' +
    '\n' +
    '| 命令 | 作用 |\n' +
    '| --- | --- |\n' +
    '| npm –v | – 查看版本  |\n' +
    '| npm search 包名 | – 搜索模块包 |\n' +
    '| npm install  | – 根据 `package.json` 中的 `dependencies` 在当前目录安装包  |\n' +
    '| npm install 包名 | – 在当前目录安装包  |\n' +
    '| npm install 包名 –g | – 全局模式安装包 |\n' +
    '| npm install 文件路径 | – 从本地安装  |\n' +
    '| npm install 包名 –registry=地址 | – 从镜像源安装  |\n' +
    '| npm remove 包名 | – 删除一个模块  |\n' +
    '| npm config set registry 地址 | – 设置镜像源为默认源 |\n' +
    '\n' +
    '\n' +
    '#### 3. 设置镜像源\n' +
    '因为npm官方源的服务器在国外，可能会有速度不稳定的问题，一般可以替换为国内的镜像源，比如[淘宝的镜像源](https://npmmirror.com/)。\n' +
    '\n' +
    '一般有两种做法：\n' +
    '- **设置淘宝的镜像源为默认源**\n' +
    '```shell\n' +
    'npm config set registry https://registry.npm.taobao.org\n' +
    '```\n' +
    '\n' +
    '- **安装淘宝的cnpm工具**\n' +
    '\n' +
    '\n' +
    '```shell\n' +
    'npm install -g cnpm --registry=https://registry.npm.taobao.org\n' +
    '```\n' +
    '\n' +
    '#### 4. npm install 参数的区别\n' +
    '\n' +
    '\n' +
    '| 命令 | 参数 | 简写 | 作用 | \n' +
    '| --- | --- | --- | --- |\n' +
    '| npm install  |    |    |  安装`dependencies`和`dependencies`中的依赖 |\n' +
    '| npm install  |  --production  |    |  安装`dependencies`中的依赖  |\n' +
    '| npm install moduleName |    |    |  安装某个module到本地项目的node_modules，但不会把安装包的信息添加到package.json文件  |\n' +
    '| npm install moduleName |  --save  |  -S  |  安装某个module,同时把相关模块依赖添加到package.json文件的`dependencies`中  |\n' +
    '| npm install moduleName |  --save-dev  |  -D  |  安装某个module,同时把相关模块依赖添加到package.json文件的`devDependencies`  |\n' +
    '| npm install moduleName |  -g  |    |  与npm install module一样，只是module的安装是全局的  |\n' +
    '\n' +
    '注意：\n' +
    '- -S 或 -D 和 -g 可以组合使用\n' +
    '\n' +
    '## 三、 包的搜索过程\n' +
    '\n' +
    '\n' +
    '通过npm下载的包都放到node_modules文件夹中。我们通过npm下载的包，直接通过包名引入即可\n' +
    '\n' +
    'node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块\n' +
    '- 如果有则直接使用，如果没有则去上一级目录的node_modules中寻找\n' +
    '- 如果有则直接使用，如果没有则再去上一级目录寻找，直到找到为止\n' +
    '- 直到找到磁盘的根目录，如果依然没有，则报错\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n'
    

    