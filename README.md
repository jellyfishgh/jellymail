# [NodeJS应用示例](http://4zb86n8592.sinaapp.com)

## 本地运行

```
$ git clone https://github.com/sinacloud/nodejs-getting-started.git
$ cd nodejs-getting-started
$ npm install
$ npm start
```

现在，本示例应用已经跑在了你的 localhost:5050 端口上了。

## 部署到sinacloud

首先，提交代码到你的sinacloud应用的git仓库。

```
$ git remote add sinacloud $GIT_REPOS_URL_FOR_YOUR_APPLICATIRON
$ git push sinacloud master:1
```

登陆sinacloud容器云的管理页面，在部署页面中，点击部署。

部署完成之后，你就可以通过 http://$APPNAME.sinaapp.com 来访问你的应用了。

## 更多示例

本git仓库的其它分支里还包含了Socket.io、MySQL服务、Memcached服务等的使用示例。

## 相关文档

- [NodeJS应用部署指南](http://www.sinacloud.com/doc/sc2/nodejs-getting-started.html)

## 学习
- [Git分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)
- [Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)
- [Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)
- [常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [Writing middleware for use in Express apps](http://expressjs.com/en/guide/writing-middleware.html)
- [Express 4.x API](http://expressjs.com/en/4x/api.html)
- [Express @ GitHub](https://github.com/strongloop/express)