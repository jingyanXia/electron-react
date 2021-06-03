这个是electron+react的初始化库，里面安装了各种方便的插件，大大提高效率。

## 插件

1.   ```  electron-is-dev ```

   npm地址：https://www.npmjs.com/package/electron-is-dev

   作用：判断electron是否在开发环境

   安装： npm install electron-is-dev --save-dev

   

   使用：

   main.js
   
   ``` javascript
   const {app ,BrowserWindow} = require('electron')
      const isDev = require('electron-is-dev')
      let mainWindow
      app.on('ready',() => {
           mainWindow = new BrowserWindow({
               windth:1024,
               height:680,
               webPreferences:{
                   nodeIntergration:true
               }
           })
        const urlLocation = isDev ? 'http://localhost:3000':'kaifa'
   
        mainWindow.loadURL(urlLocation)
       })
   ```
   
2. ``` concurrently``` 
   
   npm 地址：https://www.npmjs.com/package/concurrently
   
   作用：我们在运行electron程序的时候需要用yarn start与electron .两个命令来执行。我们可以使用yarn start &  elecreon . 来执行。 但这种办法很难跟踪不同的输出。此外，如果一个进程失败，其他进程仍会继续运行，我们甚至不会注意到其中的差异。 ``` concurrently``` 这个依赖就能解决这个问题
   
   安装：``` yarn add concurrently --dev ``` 
   
   使用：
   
   改造package.json文件。以前的package.json文件：
   
   ``` javascript
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject",
       "dev": "electron ."
     },
   ```
   
   现在的package.json文件
   
   ``` javascript
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject",
       "dev": "concurrently  \"yarn start \" \"electron .\""
     },
   ```
   
   现在的启动命令只要输入``` yarn run dev `````` 
   
3. ``` wait-on ```
   
      npm地址：https://www.npmjs.com/package/wait-on
   
      作用：我们使用了上面两个插件后还有一个问题，就是每次运行启动命令后，electron总会白屏一段时间，白屏的原因是react还在加载中。那我们可以先加载完react后在启动electron程序吗，wait-on这个依赖就能解决这个问题。
   
      安装 ：``` yarn add wait-on --dev ```
   
      使用：改造package.json文件，只要修改运行命令即可
   
      ``` javascript
       "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject",
          "dev": "concurrently  \"wait-on http://localhost:3000 && electron .\" \" yarn start\""
        },
      ```
   
4. ``` cross-env ``` 

   npm地址：https://www.npmjs.com/package/cross-env
   
   作用：在运行electron的时候每次都会在浏览器添加一个新的react标签，但是这个标签我们通常使用不到，而且每次还要去手动关机标签。那我们怎么不在浏览器里添加新标签呢，cross-env就可以解决这个问题。
   
   安装： ``` yarn add cross-env --dev ```
   
   使用：改造package.json文件，只要修改运行命令即可
   
   
   
   
   
   
   