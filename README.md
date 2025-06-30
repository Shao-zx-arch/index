# 前端学习与实践平台
## 项目简介

基于Next.js 15构建的新一代前端技术实践平台，主要特性包括：

<mcfile name="exercises.json" path="src/app/exercises.json"></mcfile>
- **渐进式学习体系**：包含15+个渐进式练习模块，覆盖从HTML基础到React高级应用的完整学习路径
- **开发效能分析**：集成<mcurl name="WakaTime" url="https://wakatime.com"></mcurl>进行开发时间追踪与可视化
- **智能辅助系统**：通过<mcsymbol name="useQAClient" filename="qanything/page.tsx" path="src/app/practice/qanything/page.tsx" startline="5" type="function"></mcsymbol>实现智能问答集成
- **遗产代码管理**：采用<mcfile name="LegacyViewer" path="src/components/LegacyViewer.tsx"></mcfile>组件实现旧作业的无缝整合
- **中式美学设计**：基于<mcfile name="chinese-theme.ts" path="src/lib/chinese-theme.ts"></mcfile>的主题系统，实现古典与现代的完美融合

## 技术栈
- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS + 自定义中式美学主题
- **代码质量**: ESLint + TypeScript 5
- **开发工具**: WakaTime IDE插件集成

## QAnything集成
### 实现架构
集成路径：<mcfile name="qanything" path="src/app/practice/qanything"></mcfile>

1. **API路由层**
   - 端点：<mcsymbol name="POST /api/qanything" filename="route.ts" path="src/app/api/qanything/route.ts" startline="15" type="function"></mcsymbol>
   - 功能：处理自然语言查询，调用知识图谱接口
   
2. **客户端交互**
   - 使用<mcsymbol name="useQAClient" filename="page.tsx" path="src/app/practice/qanything/page.tsx" startline="8" type="function"></mcsymbol>管理会话状态
   - 实现历史记录本地存储（localStorage）

3. **UI组件设计**
   - 基于<mcfile name="ChatWindow.tsx" path="src/components/ChatWindow.tsx"></mcfile>构建
   - 特色功能：
     - 书法字体动态渲染
     - 水墨动画过渡效果
     - 响应式布局适配

## WakaTime配置
1. 安装依赖：`npm install wakatime`
2. 创建`.wakatime.cfg`文件：
```ini
[settings]
api_key = 您的WakaTime API密钥
```
3. 已配置开发数据统计面板：
   - 周开发时间趋势图
   - 语言使用占比饼图
   - 组件开发耗时排名

## 项目结构
```
src/app/
├── practice/               # 练习组件
│   ├── 03-css-*/         # CSS基础系列
│   ├── 04-layout/        # 布局专题
│   ├── 05-news/         # 新闻模板实践
│   └── my-app/          # 完整应用示例
├── components/           # 通用组件
│   ├── navbar.tsx       # 导航栏
│   └── stamp.tsx        # 印章角标组件
└── lib/                  # 工具库
    └── chinese-theme.ts # 中式主题配置
```

## 旧作业整合
迁移路径：`public/legacy/`  
整合方式：
1. HTML文件转存至`public/legacy/html`
2. 样式文件保留在`public/legacy/css`
3. 通过Iframe组件实现无缝集成：
```tsx
<LegacyViewer path="/legacy/html/03-css-01.html" />
```

## 运行指南
```bash
# 安装依赖
npm install

# 开发模式（端口3000）
npm run dev

# 生产构建
npm run build

# 配置环境变量
cp .env.example .env.local
```

## 系统截图
https://img.picui.cn/free/2025/06/30/6862ade552701.png
https://img.picui.cn/free/2025/06/30/6862ade7f3e67.png
https://img.picui.cn/free/2025/06/30/6862ade69bd4b.png
https://img.picui.cn/free/2025/06/30/6862adeaac10b.png
https://img.picui.cn/free/2025/06/30/6862adef1a6a4.png
https://img.picui.cn/free/2025/06/30/6862adf10561f.png
https://img.picui.cn/free/2025/06/30/6862adee96cb8.png
https://img.picui.cn/free/2025/06/30/6862adf4c20df.png
https://img.picui.cn/free/2025/06/30/6862adf66fb3d.png
https://img.picui.cn/free/2025/06/30/6862ade7c1a7d.png
https://img.picui.cn/free/2025/06/30/6862adf976245.png
https://img.picui.cn/free/2025/06/30/6862adfccb4ac.png
https://img.picui.cn/free/2025/06/30/6862adfd7cb90.png
https://img.picui.cn/free/2025/06/30/6862adff6cb05.png
https://img.picui.cn/free/2025/06/30/6862ade85e43a.png
https://img.picui.cn/free/2025/06/30/6862adfe8282e.png
### 开发效能分析
![WakaTime数据统计](/public/screenshots/wakatime-dashboard.png)  
<通过<mcurl name="WakaTime插件" url="https://wakatime.com/plugins"></mcurl>采集的开发者行为数据>

### 智能问答界面
![QAnything交互界面](/public/screenshots/qanything-chatflow.png)  
<基于<mcsymbol name="ChatWindow" filename="ChatWindow.tsx" path="src/components/ChatWindow.tsx" startline="23" type="function"></mcsymbol>实现的智能会话流程>

### 古典组件库示例
![中式组件展示](/public/screenshots/components-showcase.gif)  
<包含<mcsymbol name="StampBadge" filename="StampBadge.tsx" path="src/components/StampBadge.tsx" startline="12" type="function"></mcsymbol>印章组件在内的12种传统样式控件>

> 提示：实际截图需由开发者补充至public/screenshots目录
