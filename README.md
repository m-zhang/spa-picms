# spa-picms
这个算是个人REACT的一个spa项目应用前后端分离，采用restful api设计、webpack自动化构建，前端路由react-router管理。感谢Samuele Zaza:https://scotch.io/tutorials/retrogames-library-with-node-react-and-redux-1-server-api-and-react-frontend
## 说明：
其中的大部分代码及结构都来源于教程，有些代码个人感觉不合理的地方做了些调整比如在发布图片信息教程中直接从页面中document.getElementById获取value,调整后：
```javascript
handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'picture' ? target.src : target.value;
        this.setState({
            [name]: value
        });

    }

```
同时对mongoose odm老版本的数据连接（已废弃）做出了调整，对es6 fetch方式做了一些兼容处理（需引入两个库es6-promise，isomorphic-fetch）等。

```javascript
// 项目配置命令说明
yarn api //用来启动express 服务
yarn start //用于开发环境启动webpack-dev-serve服务

yarn build //用于上线生产环境的构建

```
