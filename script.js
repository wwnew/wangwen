const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.lang-toggle');
function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}

const storedTheme = readPreference('wangwen-theme');

const messages = {
  zh: {
    skipLink: '跳到主要内容', homeLabel: '返回首页', statsLabel: '职业概览',
    metaTitle: '汪文 | Agent Harness · Runtime · 编译器',
    metaDescription: '汪文的个人主页：Agent Harness / Runtime、工具调用优化、上下文压缩与模型切换管理，以及 Workflow 编译与代码智能实践。',
    navLabel: '主要导航', navAbout: '关于', navExperience: '经历', navResearch: '研究', navContact: '联系',
    navResume: '简历', viewResume: '预览完整简历', resumeNote: '站内直接阅读 · 中文简历', downloadResume: '下载 .md',
    themeLabel: '切换深浅色主题', eyebrow: 'AGENT HARNESS / RUNTIME · 上海 / 杭州',
    heroTitle: '让 Agent 的每一步<span>运行得更稳</span>',
    heroLead: '我主要从事 <strong>Agent Runtime</strong> 开发，已上线工具调用效果优化、上下文压缩策略与模型切换管理。此前负责 Workflow 编译，并有编译器开发与代码智能产品落地经验。',
    viewExperience: '查看经历', systemProfile: '当前工作', systemLabel: 'Agent 执行框架的能力概览',
    systemIntro: '从执行框架到具体能力，关注 Agent 如何完成实际任务。',
    focusTools: '工具调用', focusToolsText: '调用流程与效果优化', focusContext: '上下文压缩', focusContextText: '压缩策略与上下文管理',
    focusModels: '模型切换', focusModelsText: '运行时模型切换管理', inProduction: '已上线',
    statYears: '工程实践起点', statProduct: '代码智能产品落地',
    statOptimize: '调试信息体积优化', statPapers: '篇国际期刊论文', aboutIndex: '01 关于',
    aboutTitle: '从编译器走向 Agent 运行时',
    aboutIntro: '从编译器调试工具链、智能代码补全，到 Workflow 编译与 Agent Runtime，我的工作逐步走向 Agent 执行框架。现在的重点是工具调用、上下文压缩和模型切换管理，让这些能力在实际任务中发挥作用。',
    capAgentTitle: 'Agent Harness', capAgentText: '基于 Agent Runtime 开展工具调用效果优化、上下文压缩策略与模型切换管理，相关能力已上线。',
    capCodeTitle: '代码智能', capCodeText: '从模型训练、ONNX 部署到 IDE 插件体验，构建端到端智能代码补全与搜索系统。',
    capCompilerTitle: '编译器', capCompilerText: '编译器调试信息、LLVM IR、DWARF、语言类型系统与传统调试工具链适配。',
    experienceIndex: '02 经历', experienceTitle: '工作经历', dateByteDance: '2023.11 — 至今', current: '现在', companyByteDance: '字节跳动',
    harnessPeriod: '近一年', workflowPeriod: '入职初期',
    harnessIntro: '主要从事 Agent Runtime 开发，围绕任务执行、工具调用、上下文管理与模型切换完善 Agent 执行框架。',
    harnessTools: '<strong>工具调用效果优化</strong>：参与工具调用流程与能力接入建设，相关优化已上线。',
    harnessContext: '<strong>上下文压缩策略</strong>：完成策略开发与上线，并研究摘要位置、消息语义保留及缓存影响。',
    harnessModels: '<strong>模型切换管理</strong>：完成 Agent Runtime 中模型切换管理能力的开发与上线。',
    workflowText: '负责 Coze Workflow 到 Flowlang（Python-based）的编译，将节点、依赖关系与执行逻辑转换为可运行代码，连接产品侧任务编排与底层执行环境。',
    companyZiyou: '自由量级', ziyouText: '使用 LMDeploy、TensorRT-LLM 与 Continuous Batching 等技术进行大模型部署与推理性能优化。',
    companyAlibaba: '阿里云智能', alibabaRole: 'AI 基础设施 · 编译与异构计算', alibabaText: '参与大模型分布式推理，围绕 Kubernetes、Device Plugin 与算力原生 CRD 建立异构资源、虚拟算力与网络拓扑抽象。',
    companyHuawei: '华为 · 编译器与编程语言实验室', huaweiAIRole: 'AI 软件工程 · 智能代码补全', huaweiAIText: '从 0 到 1 完成智能代码补全原型并推动产品化，覆盖 tokenizer、模型训练、IDE 插件、gRPC 通信与 ONNX 本地部署。',
    huaweiAIImpact: '典型场景开发效率提升 30%，项目获杭研所长奖先锋奖。', huaweiCompilerRole: '编译器与编程语言 · 调试器',
    huaweiCompilerText: '参与 Java 静态化调试、DWARF 调试信息重构及新语言 LLVM IR 调试信息生成，打通从前端到调试器的完整流程。',
    huaweiCompilerImpact: '将生成的 SO 中 DWARF 信息体积缩小 87%。', researchIndex: '03 研究', researchTitle: '研究与教育',
    paperOneTopics: '动态社区发现 · 粒子群优化 · 共识社区', viewDoi: '查看 DOI', paperTwoTopics: '神经网络 · 链接预测 · 生物信息学',
    education: '教育经历', xiamenUniversity: '厦门大学', xiamenDegree: '计算机科学与技术 · 工学硕士', oceanUniversity: '中国海洋大学',
    oceanDegree: '计算机科学与技术（保密方向）· 工学学士', contactIndex: '04 联系',
    contactTitle: '一起把复杂的事<span>做得可靠</span>',
    contactText: '欢迎交流 Agent Harness、工具调用、上下文管理与 Agent Runtime 相关的工作机会和技术问题。', backToTop: '返回顶部 ↑',
  },
  en: {
    skipLink: 'Skip to main content', homeLabel: 'Back to home', statsLabel: 'Career overview',
    metaTitle: 'Wang Wen | Agent Harness · Runtime · Compilers',
    metaDescription: 'Agent Harness and Runtime engineering: tool-calling improvements, context compression, model switching, workflow compilation, and code intelligence.',
    navLabel: 'Main navigation', navAbout: 'About', navExperience: 'Experience', navResearch: 'Research', navContact: 'Contact',
    navResume: 'Résumé', viewResume: 'Preview full résumé', resumeNote: 'Read on this site · Chinese résumé', downloadResume: 'Download .md',
    themeLabel: 'Toggle color theme', eyebrow: 'AGENT HARNESS / RUNTIME · SHANGHAI / HANGZHOU',
    heroTitle: 'Making every Agent step <span>run reliably</span>',
    heroLead: 'I work on <strong>Agent Runtime</strong>, with tool-calling improvements, context compression strategies, and model-switching management shipped to production. My earlier work spans workflow compilation, compilers, and code intelligence products.',
    viewExperience: 'View experience', systemProfile: 'CURRENT WORK', systemLabel: 'Agent execution framework capabilities',
    systemIntro: 'Building runtime capabilities that help Agents carry out real tasks.',
    focusTools: 'Tool calling', focusToolsText: 'Calling flows and quality improvements', focusContext: 'Context compression', focusContextText: 'Compression strategies and context management',
    focusModels: 'Model switching', focusModelsText: 'Model-switching management in the runtime', inProduction: 'Shipped',
    statYears: 'engineering since', statProduct: 'code intelligence product delivery',
    statOptimize: 'debug info size reduction', statPapers: 'international journal papers', aboutIndex: '01 ABOUT',
    aboutTitle: 'From compilers to Agent runtime',
    aboutIntro: 'My work has progressed from compiler debugging and code completion to workflow compilation and Agent Runtime. Today I focus on tool calling, context compression, and model-switching management for real Agent tasks.',
    capAgentTitle: 'Agent Harness', capAgentText: 'Shipped tool-calling improvements, context compression strategies, and model-switching management as part of Agent Runtime development.',
    capCodeTitle: 'Code Intelligence', capCodeText: 'Building end-to-end code completion and search systems, from model training and ONNX deployment to the IDE experience.',
    capCompilerTitle: 'Compilers', capCompilerText: 'Compiler debug information, LLVM IR, DWARF, language type systems, and traditional debugger toolchains.',
    experienceIndex: '02 EXPERIENCE', experienceTitle: 'Experience', dateByteDance: '2023.11 — Present', current: 'CURRENT', companyByteDance: 'ByteDance',
    harnessPeriod: 'Past year', workflowPeriod: 'Earlier work',
    harnessIntro: 'Developing Agent Runtime capabilities across task execution, tool calling, context management, and model switching.',
    harnessTools: '<strong>Tool-calling quality</strong>: Contributed to calling flows and tool integration, with improvements shipped to production.',
    harnessContext: '<strong>Context compression</strong>: Implemented and shipped compression strategies; researched summary placement, message semantics, and cache implications.',
    harnessModels: '<strong>Model switching</strong>: Implemented and shipped model-switching management in Agent Runtime.',
    workflowText: 'Built the compiler from Coze Workflow to Flowlang, a Python-based representation of nodes, dependencies, and execution logic, connecting workflow orchestration to the execution environment.',
    companyZiyou: 'Ziyou Liangji', ziyouText: 'Optimized LLM deployment and inference with LMDeploy, TensorRT-LLM, and continuous batching.',
    companyAlibaba: 'Alibaba Cloud Intelligence', alibabaRole: 'AI Infrastructure · Compilation & Heterogeneous Computing', alibabaText: 'Worked on distributed LLM inference and built abstractions for heterogeneous resources, virtual compute capacity, and network topology with Kubernetes, Device Plugins, and compute-native CRDs.',
    companyHuawei: 'Huawei · Compiler & Programming Languages Lab', huaweiAIRole: 'AI for Software Engineering · Intelligent Code Completion', huaweiAIText: 'Built a code completion prototype from zero to one and drove it toward production, covering tokenization, model training, IDE integration, gRPC communication, and local ONNX deployment.',
    huaweiAIImpact: 'Improved development efficiency by 30% in representative scenarios and received the Hangzhou Research Institute Pioneer Award.', huaweiCompilerRole: 'Compilers & Programming Languages · Debuggers',
    huaweiCompilerText: 'Worked on static Java debugging, DWARF debug information refactoring, and LLVM IR debug information generation for a new programming language, connecting the full path from frontend to debugger.',
    huaweiCompilerImpact: 'Reduced DWARF information size in generated shared objects by 87%.', researchIndex: '03 RESEARCH', researchTitle: 'Research & Education',
    paperOneTopics: 'Dynamic community detection · Particle swarm optimization · Consensus community', viewDoi: 'View DOI', paperTwoTopics: 'Neural networks · Link prediction · Bioinformatics',
    education: 'EDUCATION', xiamenUniversity: 'Xiamen University', xiamenDegree: 'M.Eng. in Computer Science and Technology', oceanUniversity: 'Ocean University of China',
    oceanDegree: 'B.Eng. in Computer Science and Technology', contactIndex: '04 CONTACT',
    contactTitle: 'Let’s make complex systems <span>reliable</span>',
    contactText: 'Open to opportunities and technical conversations around Agent Harness, tool calling, context management, and Agent Runtime.', backToTop: 'BACK TO TOP ↑',
  },
};

function applyLanguage(language) {
  const copy = messages[language];
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  root.dataset.language = language;
  document.title = copy.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.metaTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });

  if (languageToggle) {
    languageToggle.textContent = language === 'zh' ? 'EN' : '中文';
    languageToggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  }
  savePreference('wangwen-language', language);
}

if (storedTheme === 'dark') {
  root.dataset.theme = 'dark';
  toggle?.setAttribute('aria-pressed', 'true');
}

function updateThemeColor() {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', root.dataset.theme === 'dark' ? '#191e1d' : '#f7f6f2');
}
updateThemeColor();

toggle?.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  if (isDark) {
    delete root.dataset.theme;
    savePreference('wangwen-theme', 'light');
  } else {
    root.dataset.theme = 'dark';
    savePreference('wangwen-theme', 'dark');
  }
  toggle.setAttribute('aria-pressed', String(!isDark));
  updateThemeColor();
});

languageToggle?.addEventListener('click', () => {
  applyLanguage(root.dataset.language === 'en' ? 'zh' : 'en');
});

applyLanguage(readPreference('wangwen-language') === 'en' ? 'en' : 'zh');

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );
  revealItems.forEach((item) => {
    item.classList.add('is-pending');
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
