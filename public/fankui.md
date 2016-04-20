# 20160419

[TOC]

## iOS

### 1.黄艺文

1.LOGO与PC端统一

> <span style="color:red">忽略</span> PC的不好看

2.IOS新消息提示

> <span style="color:red">忽略</span> 测试方法错误

3.IOS与android统一

> <span style="color:red">忽略</span> 测试版本有误

### 2.王进强

1.前面的引导页应该有跳过按键

> <span style="color:red">忽略</span> 有直接进入的按钮

2.登录页，咋户厕战盟号建议改成注册帐号(对新人不知道什么叫战盟号)

> <span style="color:green">待处理</span> 改成“注册多益通帐号”，注册时标注“可以直接登录多益游戏” 20160421

3.登录页，帐号栏的登录邮箱，可以改成：输入邮箱或战盟ID ；密码改成：输入密码。

> <span style="color:green">待处理</span> ID 无法登录 20160421

4.消息列表的小昕，建议把‘小昕来了……‘的文字内容优化一下。

> <span style="color:red">忽略</span> 抄的PC

5.消息的搜索，点了后有BUG（包括输入没内容，没返回等）

> <span style="color:green">待处理</span> 本地搜索整体优化 20160429

6.点小昕后在返回，上标栏出现显示混乱

> <span style="color:green">待处理</span> 系统bug，换一种实现方式 20160429

7.战盟号还是战盟ID，建议和PC端统一用一个

> <span style="color:red">忽略</span> 微信号

8.盟友圈 和 我的主页 还有我的相册 内容有点怪，重复。

> <span style="color:red">忽略</span> 

9.盟友圈是否可以取消方块内容布局，优化一下。

> <span style="color:green">待处理</span> 美术设计 20160429

10.公众号加上标签

> <span style="color:red">忽略</span> 现在公众号少且是玩家玩过的游戏，现在公众号方案后面会取消，不做无用功

### 3.孙永春

1.优化表情分页标签，现在的过于生硬，不友好

> <span style="color:green">待处理</span> 美术重新设计 20160429

2.消息界面查找群和好友合并，查找玩成之后支持点击查看好友搜索结果和群搜索结果。

> <span style="color:green">待处理</span> 20160429

3.消息页面，将某个消息置顶之后取消置顶，没有恢复到原来的位置；

> <span style="color:red">忽略</span> 存在多个置顶情况，要记录多个消息对象原来的位置实现复杂，现有方案实现简单且体验更好；

4.不能发送消息不要在输入完消息点击发送之后提示，建议在输入框提示

> <span style="color:red">忽略</span> 异常是由服务端在发送消息后返回的，不可能每次点击输入框都去请求

5.群资料界面，作为普通成员没有设置权限建议不要显示，不要点了之后才告知

> <span style="color:red">忽略</span> 普通成员也需要知道当前群的设置情况，才能知道自己的操作异常是因为群设置而不是bug

6.加战友的附加消息不应该是：你好，我是战盟昵称，这样的吗？

> <span style="color:red">忽略</span> 对方看到的是这样的，自己看到的是等待验证；

7.帮派圈切换帮派的时候，显示我的帮派群消息的接收状态，建议不用显示；帮派圈和帮派群消息不一样。

> <span style="color:green">待处理</span> 20160421

8.建议减少清空选择按钮，只留下清空缓存的按钮。

> <span style="color:red">忽略</span> 都有需求，可以考虑合并进二级 

9.群简介非群主不可以修改，建议普通群成员界面修改显示方式，现在给人一种可以修改的感觉。

> <span style="color:green">待处理</span> 20160422

10.关于字数限制，建议在输入达上限之后无法继续输入，不要输入完成点击确定时提示，

> <span style="color:red">忽略</span> 有数字角标提示

### 4.王汝

1.导航页图标和盟友圈图标不一致

> <span style="color:green">待处理</span> 美术再设计 20160429

2.没有“添加战友”

> <span style="color:red">忽略</span> 有添加入口

3.Ipad横屏状态下显示BUG

> <span style="color:green">待处理</span> 20160422

4.查看群资料，编号显示信息和其它信息位置不同

> <span style="color:red">忽略</span> 存在头像

5.【更新记录】-【更多】的功能按键

> <span style="color:red">忽略</span> 跟普通内置浏览器保持一致，便于扩展新菜单项，例如“关闭”

6.战友列表【添加战友】动画有点卡，键盘是后出的，感觉不畅顺

> <span style="color:green">待处理</span> 20160429

7.小昕资料，当前资料显示服务区不明显

> <span style="color:red">忽略</span> 已有明显入口，不刷存在感造成过分干扰

8.相册的icon十分不明显，进去了【TA的相册】

> <span style="color:red">忽略</span> 他人主页进入的就是他人的相册

9.现在这套icon质量有点差，现在主流的都是以轻简为主，用简单线条表述icon

> <span style="color:red">忽略</span> 美术设计 20160429

10.【我的二维码】，显示过小，我的头像和PC的不同步

> <span style="color:red">忽略</span> 以手机为标准实现的

### 5.陈宇峰

1.搜索功能没必要默认显示出来吧，下拉显示会好点？

> <span style="color:red">忽略</span> 不能隐藏太深

2.战友列表右侧的快速定位功能，蓝色不好看吧。

> <span style="color:red">忽略</span> iOS 标准色，参考系统通讯录

3.还是快速定位功能，一般的设计不是使用时，屏幕上显示灰色字母么？

> <span style="color:red">忽略</span> iOS 跟 Android 差异化

4.讨论组里只有一个时，仍然显示了分隔线，不该显示。

> <span style="color:red">忽略</span> item 的底部边框样式，不用做特殊处理

5.好友资料-TA的游戏里的游戏，应该是可以点击跳转的，是准备游戏新闻页上了后，加上去么？

> <span style="color:green">待处理</span> 游戏公众号

6.发送消息-加号，里面图片的样式不怎么对齐

> <span style="color:red">忽略</span> 程序实现的标准对齐

7.还是加号，点击后应该变成键盘图标吧？

> <span style="color:red">忽略</span> 原来的方案是这样的，新的美术方案设计成县级后变成选择状态

8.公众号，不再关注后，是不是该从会话界面移除？

> <span style="color:green">待处理</span> 应该移除 20160422

9.我使用时遇到BUG，好多按钮点了没反应。

> <span style="color:red">忽略</span> 具体什么情况下什么按钮

10.我的-主页按钮，感觉有点偏右。

> <span style="color:red">忽略</span> 美术设计，icon跟文字间距合理

### 6.夏俊

1.首页可以改名为战盟，使app主题更明确，加深用户产品印象

> <span style="color:green">待处理</span> 战盟，战友，探索，我的

2.首页有未读消息时可以在标题处显示数目

> <span style="color:red">忽略</span> 底部tab有未读消息数目

3.顶部可以考虑用一种颜色，使app更有个性风格

> <span style="color:green">待处理</span> 美术设计

4.图标过大，感觉和页面不太和谐

> <span style="color:green">待处理</span> 美术设计

5.个人资料点击打开盟友圈不合理，盟友圈不是战盟app的主要功能，应该在个人资料某个地方另外加进入盟友圈的入口

> <span style="color:red">忽略</span> 个人资料页面东西太多了，减少item

6.战盟的页面标题不合理，盟友圈，帮派圈，秀一秀不是战盟的主要功能，应改名为分享，发现，秀场或者类似

> <span style="color:green">待处理</span> 战盟，战友，探索，我的

7.草稿箱放在战盟页面感觉有点怪，可以考虑放在我的页面内

> <span style="color:green">待处理</span> 20160422

8.盟友圈刷新时顶部提示会重合，可以考虑加个banner

> <span style="color:green">待处理</span> 20160429

9.搜索无结果时没任何提示

> <span style="color:green">待处理</span> 集中优化本地搜索方案

10.扫一扫可以放到发现里面

> <span style="color:green">待处理</span> 20160422

### 7.何睦

1.本地搜搜方案优化：本地聊天对象，本地消息记录，成员列表；

> <span style="color:green">待处理</span> 20160429

2.删除评论后关联评论也要删除；

> <span style="color:green">待处理</span> 20160429

3.清空了本地消息记录后，漫游拉取后消息返回到消息界面上不显示最近一条消息；

> <span style="color:green">待处理</span> 20160422

4.相册中照片批量管理时可以按照时间批量选择

> <span style="color:green">待处理</span> 20160422

5.群禁言时自己群主也被禁止了

> <span style="color:green">待处理</span> 20160422

6.盟友圈主页上的评论列表长按时选中效果应该不消失；

> <span style="color:green">待处理</span> 20160422

7.离线后重新登录时系统消息状态没有同步

> <span style="color:green">待处理</span> 20160429

8.聊天图片和盟友圈图片相互打通

> <span style="color:green">待处理</span> 20160429

9.绑定手机号并实现手机号更改密码

> <span style="color:green">待处理</span> 20160429

10.等级详情

> <span style="color:green">待处理</span> 20160429

## Android

### 1.鲁立志

1.战友列表可以缩小头像，常见做法是好友列表比消息列表头像要小，方便用户在列表的滚动浏览。

> <span style="color:red">忽略</span> 美术效果图当初就是这样设计。

2.战友列表当好友不在线时，能不能显示他最近在玩的游戏。

> <span style="color:red">忽略</span> 这样会导致几乎所有的战友右边都有游戏，给用户理解产生混乱。也会导致界面混乱。

3.好友不在线时，现在是灰色头像，移动端有没有考虑取消在线和不在线的区别？像QQ之前改动头像全亮不再区分在不在线。

> <span style="color:red">忽略</span> QQ也是有区分的。

4.草稿箱功能建议删除，改用自动保留未发布的内容。

> <span style="color:orange">已处理</span> 盟友圈帮派圈的评论已经做了自动保留。至于草稿箱是否删除，现阶段不必考虑，草稿箱算是一个额外的功能，没有对用户带来什么不好的影响，在某些方面也可以增加用户体验。

5.资料页面，建议直接展示更多信息，少用二级菜单，减少步骤。

> <span style="color:green">待处理</span> 资料界面会继续优化，具体时间会排后。

6.【扫一扫】可以移动到【战盟】中？

> <span style="color:green">待处理</span> 4/26号前修改完毕。

7.建议增加语音房间：快速发起多人语音，可以用来玩游戏指挥。

> <span style="color:green">待处理</span> 后续会做的功能。具体看实际情况安排。

8.战盟启动页面可以换得活泼鲜艳一些，游戏角色构成的那种。

> <span style="color:green">待处理</span> 等新的logo。

9.隐私设置里增加一项【角色管理】，显示当前账号下的角色，可以设置某些角色隐藏关系。隐藏后游戏中这个角色不会与当前战盟号产生关联。防止用户小号被暴露。

> <span style="color:red">忽略</span> 后续会增加一个帐号管理功能。觉得角色管理在战盟中没什么必要，毕竟角色是游戏中的。

10.群设置页面好长，能否参考其他优化下。

> <span style="color:green">待处理</span> 群设置界面会继续优化，具体实际情况安排。

### 2.黄艺文

1.android新消息显示。

> <span style="color:red">忽略</span> 这是QQ的做法。

2.android选择图片。

> <span style="color:orange">已处理</span>

3.一个返回功能，容易误导用户使用。游戏昵称与服务器名称没有在并列一行，从设计上看视觉感受不好。

> <span style="color:orange">已处理</span>

4.盟友圈右上角LOGO设计与整体所有LOGO相比偏大。

> <span style="color:orange">已处理</span>

5.草稿箱内没有增加草稿的按钮功能。

> <span style="color:red">忽略</span> 草稿箱功能是记录用户在某些情况发送失败的动态.转发.评论等。并不是让用户自主增加草稿。

6.盟友圈消息中不同内容层级之间空隙不统一。

> <span style="color:red">忽略</span> 微信也是这样。我们也做了优化，请下载最新的版本。

### 3.孙永涛

1.查找群-你可能感兴趣的群，已经加入的群不应该再做推荐，推荐的群可以更多些，采用下滑刷新方式显示更多。

> <span style="color:orange">已处理</span> 这个是规则问题，pc上周在处理这个推荐的问题。

2.设为接收但不提示消息后，不应该用数字显示新消息，建议采用红点显示，减少对用户的干扰和压力。

> <span style="color:red">忽略</span> QQ也是这样。

3.除了语音外，其他消息类型应该也能支持可撤回。

> <span style="color:red">忽略</span> 性价比低。

4.如果用户不能再创建战盟群，应该在创建战盟群入口就判断为不能创建，并且“创建战盟群”按钮应改为灰色不可点击，点击时显示提示文字，不应该在创建群快要完成时才提示用户创建不了。

> <span style="color:red">忽略</span> 减少没必要的请求。

5.@群成员应该也列出帮派职务和角色名，但是用核心成员和普通成员来分类感觉不太好，把核心成员显示在上方就可以了。

> <span style="color:red">忽略</span> 游戏中就是这样分类的。

6.帮派规模应有简短说明，现在的用户会很困惑。

> <span style="color:red">忽略</span> 玩游戏的会知道，我们的产品是针对公司游戏的用户。

7.感觉没必要区分我创建的群和我加入的群，可以在我创建的群后边加图标标识，同时在创建战盟群入口处给予剩余可创建群数量提示。

> <span style="color:red">忽略</span> 王进强也觉得不错。区分就会很清晰的知道哪些自己创建的哪些不是。避免太多群混乱。

8.第三个tab名称不应该为“战盟”，本身产品的名字就是战盟，这样命名会造成认知混乱，可以改为“发现”。

> <span style="color:red">忽略</span> 以前是叫做“发现”探索。后来改名字为战盟。

9.“找回密码”.“注册帐号”建议固定在登录下方，不应该上下移动。

> <span style="color:green">待处理</span> 会修改。

10.昵称修改如无权限应该在入口处设为禁止点击，点击时提示战盟等级到达10级可改名，不应该点进去改好名最后一步才提示改不了。

> <span style="color:red">忽略</span> 减少没必要的请求。

11.下图页面显示有问题，不应该有空白出现。

> <span style="color:red">忽略</span> 内容不够。

### 4.罗子健

1.在内置浏览器中点击后上角的发送给战友后返回错乱；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

2.点击创建群，若达到上限，点击提示返回错乱；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

3.若达到创建群上限，重复创建的过程中会导致crash；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

4.盟友圈第一次发布图片动态预览图片不成功；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

5.表情键盘底部选中后应该有颜色区分；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

6.性别加上保密选项；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

7.帮派界面的清空聊天记录颜色为蓝色；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

8.我的相册中，详情界面点赞后，列表中昵称居中；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

9.头像预览中，右上角的保存到手机的点击区域下方没有加上圆角；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。

10.手机号注册邮箱切入有问题：顶栏和横条切入时间不一致；

> <span style="color:green">待处理</span> 会修改。4/26号前修改完毕。