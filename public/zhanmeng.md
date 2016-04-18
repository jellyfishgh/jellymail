# 进度和任务说明文档

[TOC]

## 20160404-20160411

### iOS

#### 上周任务

1. 盟友圈消息通知的显示优化；
1. 照片编辑输入框样式调整，返回时提示保存的逻辑更正；
1. 渲染盟友圈单图动态时依据图片尺寸信息提前渲染；
1. 解决本地缓存的赞列表不显示的问题；
1. 清除本地数据完成时的泡泡提示；
1. 相册和照片在未加载完数据之前的友好显示；
1. 标记未读时根据当前对象的消息提醒设置增加逻辑判断；
1. 扫码登录时增加请求超时的异常判断；
1. 群禁言;
1. 招聘群;

> 程序均标记为已结单，部分任务需要等待服务端更新后测试。

#### 本周计划

1. 多设备登录过的帐号，公众号推送消息的通知异常；
1. 自定义表情预览；
1. 评论和转发输入框中的内容本地保存；
1. 发布动态时选择查看权限；
1. 发布动态时已选图片支持 gif 播放；增加选择图片的“+”入口；
1. @消息的特殊处理；

### Andriod

#### 上周任务

1. 快速登录已经实现;
1. 授权登录也基本功能实现，现在只能在内网测试;
1. 翟浩然要兼职做andriod框架的东西，预计时间半年;
1. 网络优化;
1. 键盘优化;
1. 群禁言;
1. 招聘群;

#### 本周任务

1. 登录优化;
1. 头像预览优化;
1. 二维码优化扫描角度;
1. 修复键盘输入文字导致崩溃;
1. 修复群多人邀请时候不成功问题;
1. 修复图片定位不准确问题;
1. 内嵌浏览器支持对图片的预览及相关操作，支持二维码识别;
1. 跟进pc端扫一扫进度;
1. 优化聊天背景;
1. 优化内存溢出导致崩溃问题;
1. @消息的特殊处理；

> 预计本周发布1.1.9版本。最迟下周。看实际情况。

## 20160411-20160418

### iOS

#### 上周任务

##### 罗宁
##### 高哲
##### 蒋家豪
##### 林斌泽
1. 聊天窗中 gif 下载完成后自动播放；
2. 自定义表情长按预览；
3. 二级评论草稿发送时crash；
4. 邀请群成员入口调整；
5. 复制或转发@消息时只提取纯文本；
6. 浏览器菜单项；
7. 清空消息列表时加上确认消息已读的逻辑；
8. 资料页的数据更改异常；
9. 消息 tab 的单击和双击事件响应；
10. 盟友圈发布时选择权限；

#### 本周计划

1. 合并群搜索和战友搜索界面；
2. 对异常群(被解散或已退出)操作时的相关提示；
3. 加强讨论组协议，异常操作时的提醒；
4. 其它端处理过的系统消息的状态同步；
5. 删除相册中的第一张照片之后，无法获取到该相册的封面；
6. 战友系统消息中的来源；
7. 多人聊天中的消息接收设置多端同步；
8. 盟友圈中点开他人分享的相册时，照片详情界面显示“来自null”；
9. 更改个人资料中的省市信息，编辑时的初始状态应该为当前状态；
10. 收到的缩略图添加到表情之后，还是会出现“添加”的按钮；
11. 聊天图片预览时，长按菜单项中包含添加到表情；
12. 当且仅当 单张图片，自定义表情，吉祥表情 显示时不加气泡，其中只有单张图片加圆角；
13. 长按聊天气泡时，弹出菜单中不显示“添加到表情”菜单项；