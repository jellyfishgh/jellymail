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

*序均标记为已结单，部分任务需要等待服务端更新后测试。*

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

*预计本周发布1.1.9版本。最迟下周。看实际情况。*

---

## 20160411-20160418

### iOS

#### 上周任务

##### 罗宁

1. 自定义表情长按预览；
2. 二级评论草稿发送时crash；
3. 清空消息列表时加上确认消息已读的逻辑；
4. @消息的特殊处理；

##### 高哲

1. 复制或转发@消息时只提取纯文本；
2. 资料页的数据更改异常；
3. 邀请群成员入口调整；
4. 消息 tab 的单击和双击事件响应；
5. 群资料获取异常时的提示；

##### 蒋家豪

1. 浏览器菜单项；
2. 盟友圈发布时选择权限；
3. 清除时的过渡动画；
4. 各类型的资料界面的生成规则；

##### 林彬泽

1. 聊天窗中 gif 下载完成后自动播放；

#### 本周计划

##### 高哲

1. 群权限设置导致群主也不能发送消息；
2. 删除相册第一张照片后无法获取到相册封面或者本地仍然显示被删除的封面；
3. 盟友圈中点开他人分享的相册时，照片详情界面显示“来自null”；
4. 异常群或讨论组的操作提示；
5. 清除消息再漫游时消息界面上的最近一条消息显示；

##### 罗宁

1. 盟友圈视频类型
2. “添加到表情”判断异常；
3. 气泡显示规则优化；
4. 帮派切换界面上的帮派不显示消息接收设置的标记；
5. 取消关注公众号移除相关数据；

##### 蒋家豪

1. 优化省市信息的更改；
2. 发布动态时权限的选择；
3. 合并群搜索和战友搜索；
4. 系统消息状态的同步；
5. 消息接收设置多端同步；
6. 只读文本框的样式优化；

##### 林彬泽

1. 本地搜索；
2. spotlight；
3. 快速回复；

### Andriod

#### 上周任务

##### 任东阳

1. 修复输入框输入文字超过限制后crash；
2. 盟友圈、我的相册某些界面返回点击两次才成功返回；
3. 修复图片定位不准确；

##### 邹汉耀

1. 头像预览缩放以及保存到本地；
2. 优化二维码；
3. 修复搜索好友无结果bug；

##### 黄浩源

1. 解决局部的内存泄漏问题；
2. 修复前后台被刷后的数据传输问题；
3. 优化登录；

##### 翟浩然

1. 内嵌浏览器支持对图片的预览及相关操作；
2. 盟友圈缓存用户输入但未发送的评论；

#### 本周计划

##### 翟浩然

1. 盟友圈自己评论支持删除；
2. 修复盟友圈下拉加载出现的问题；
3. 修复盟友圈第一次打开图片预览不显示问题；

##### 黄浩源

1. 修复插入耳机听语音还是外放问题；
2. 优化图片选择器；

##### 任东阳

1. 新增长文章和链接；

##### 邹汉耀

1. 新增消息和战友底部tab点击事件；
2. 内嵌浏览器支持对图片的长按识别二维码；

---

## 20160418-20160425

### iOS

#### 上周任务

##### 高哲

1. 群权限设置导致群主也不能发送消息；
2. 删除相册第一张照片后无法获取到相册封面或者本地仍然显示被删除的封面；
3. 盟友圈中点开他人分享的相册时，照片详情界面显示“来自null”；
4. 异常群或讨论组的操作提示；
5. 清除消息再漫游时消息界面上的最近一条消息显示；

##### 罗宁

1. 盟友圈视频类型
2. “添加到表情”判断异常；
3. 气泡显示规则优化；
4. 帮派切换界面上的帮派不显示消息接收设置的标记；
5. 取消关注公众号移除相关数据；

##### 蒋家豪

1. 优化省市信息的更改；
2. 发布动态时权限的选择；
3. 合并群搜索和战友搜索；
4. 系统消息状态的同步；
5. 消息接收设置多端同步；
6. 只读文本框的样式优化；

##### 林彬泽

1. 本地搜索；
2. spotlight；
3. 快速回复；

#### 本周计划

##### 罗宁

1. 撤回语音无效；
2. 空聊天对象中撤回后位置有问题；
3. 浏览器中对图片的预览，保存到本地和识别二维码；
4. 增加绑定手机号的入口；
5. 通过手机号更改密码；

##### 高哲

1. 访问被删除了的相册时没有提示；
2. 相册中照片批量管理时可以按照时间选择；
3. 多条消息同时操作；
4. 盟友圈通知的数字标记异常消失；

##### 蒋家豪

1. 修改昵称时达到了输入的最大值后无法删除且被卡死；
2. 注册和登录时限制邮箱后缀里面出现大写字母；
3. 他人也能看到我的权限设置；
4. 10级时可以增加一次昵称修改机会；
5. 浏览器标题获取前显示“加载中...”，加载完了之后显示正常标题；
6. 浏览器菜单项中“刷新”下面增加“关闭”菜单项，几个特殊的浏览器中也需要；

##### 林彬泽

1. 本地搜索；
2. spotlight;
3. 快速回复；

*申请提交 1.1.0*

### Andriod

#### 上周任务

##### 翟浩然

1. 盟友圈自己评论支持删除；
2. 修复盟友圈下拉加载出现的问题；
3. 修复盟友圈第一次打开图片预览不显示问题；

##### 黄浩源

1. 修复插入耳机听语音还是外放问题；
2. 优化图片选择器；

##### 任东阳

1. 新增长文章和链接；

##### 邹汉耀

1. 新增消息和战友底部tab点击事件；
2. 内嵌浏览器支持对图片的长按识别二维码；

#### 本周计划

##### 任东阳

1. 盟友圈发布权限；
2. 小昕优化；

##### 邹汉耀

1. 讨论组和帮派新消息提醒的同步处理；
2. 帮派相册；

##### 黄浩源

1. 修复1.0.9crash；
2. 优化图片选择器；
3. 获取消息和战友界面数据时整体刷新列表；

##### 翟浩然

1. 底部虚拟按键自适应；
2. 和游戏对接授权登录；

*打算三个星期左右发布下一个版本*

---

## 20160425-20160502

### iOS

#### 上周任务

##### 罗宁

1. 撤回语音无效；
2. 空聊天对象中撤回后位置有问题；
3. 浏览器中对图片的预览，保存到本地和识别二维码；
4. 增加绑定手机号的入口；
5. 通过手机号更改密码；

##### 高哲

1. 访问被删除了的相册时没有提示；
2. 相册中照片批量管理时可以按照时间选择；
3. 多条消息同时操作；
4. 盟友圈通知的数字标记异常消失；

##### 蒋家豪

1. 修改昵称时达到了输入的最大值后无法删除且被卡死；
2. 注册和登录时限制邮箱后缀里面出现大写字母；
3. 他人也能看到我的权限设置；
4. 10级时可以增加一次昵称修改机会；
5. 浏览器标题获取前显示“加载中...”，加载完了之后显示正常标题；
6. 浏览器菜单项中“刷新”下面增加“关闭”菜单项，几个特殊的浏览器中也需要；

##### 林彬泽

1. 本地搜索；
2. spotlight;
3. 快速回复；

#### 本周计划

##### 罗宁

1. 绑定手机号与更改密码;
2. 对网页中图片的处理;
3. 文章推送时显示的配图不压缩处理;
4. 新增自定义表情无法点击发送;
5. 盟友圈中优先显示备注;

##### 高哲

1. 消息界面上多人聊天的最近一条消息显示发送者;
2. 导航栏上返回箭头的位置固定;
3. 低版本系统中 emoji 表情生成的动态显示异常;
4. 照片描述中带有@结构时显示异常;
5. 帮派默认角色的多端同步以及发言异常时提示切换角色;

##### 蒋家豪

1. 本地搜索无结果时的提示;
2. 好友资料页面上加上权限设置：不看他的动态和不让他看我的动态；
3. 盟友圈主页上的不显示按钮，只显示被操作的个数，把按钮隐藏起来做成点击后弹出菜单；
4. 对接盟友圈系统消息及其推送
5. 优化战友系统消息和战友资料界面上的好友来源；

##### 林彬泽

1. 本地搜索；
2. spotlight;
3. 快速回复；

> 申请提交 1.1.0

### Android

#### 上周任务

##### 任东阳

1. 盟友圈发布权限；
2. 小昕优化；

##### 邹汉耀

1. 讨论组和帮派新消息提醒的同步处理；
2. 帮派相册；

##### 黄浩源

1. 修复1.0.9crash；
2. 优化图片选择器；
3. 获取消息和战友界面数据时整体刷新列表；

##### 翟浩然

1. 底部虚拟按键自适应；
2. 和游戏对接授权登录；

#### 本周计划

##### 任东阳

1. 盟友圈发布权限；
2. 小昕优化；
3. 我的动态点击后的界面的顶栏标题为我的昵称；别人的主页顶栏显示别人的昵称；
4. 小昕头像更换；
5. 盟友圈，草稿箱红点位置移动；
6. 好友盟友圈主页上没有显示为备注；
7. 盟友圈评论中表情在动态详情页面无法显示；

##### 邹汉耀

1. 部分bug；
2. 帮派相册；

##### 黄浩源

1. 优化图片选择器；

##### 翟浩然

1. 盟友圈支持输入网址；
2. 评论的复制、删除；
3. 详情中，回复别人的评论要加上：回复xxx：评论内容；