const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.lang-toggle');
const storedTheme = localStorage.getItem('wangwen-theme');

const messages = {
  zh: {
    metaTitle: '汪文 | Agent Infrastructure · 编译器 · 代码智能',
    metaDescription: '从 Workflow 编译到 Agent Harness 与 Agent Runtime 的工程实践。',
    navLabel: '主要导航', navAbout: '关于', navExperience: '经历', navResearch: '研究', navContact: '联系',
    themeLabel: '切换深浅色主题', eyebrow: 'AI 工程师 · 上海 / 杭州',
    heroTitle: '让 Agent 的每一步<span>运行得更稳</span>',
    heroLead: '从编译器、代码智能到大模型推理，我的工作始终围绕一个问题展开：怎样把复杂能力变成可靠的工程系统。现在，我主要投入 <strong>Agent Harness 与 Agent Runtime</strong>，让任务从表达、编译到执行形成完整链路。',
    viewExperience: '查看经历', contactMe: '与我联系', systemProfile: '系统概览', sourceLabel: '任务输入',
    focusLabel: '方向', langLabel: '语言', modeLabel: '链路', statYears: '年工程实践', statProduct: '代码智能产品落地',
    statOptimize: '调试信息体积优化', statPapers: '篇国际期刊论文', aboutIndex: '01 关于',
    aboutTitle: '从编译器走向 Agent 运行时',
    aboutIntro: '我的经历看起来跨了几个方向，但核心一直没有变：理解一项复杂能力如何被表达、被转换，最后在真实环境里稳定执行。从编译器到 Agent Runtime，这条线也逐渐变得完整。',
    capAgentTitle: 'Agent 基础设施', capAgentText: '从 Workflow 编译到 Agent Harness 与 Runtime，连接任务表达、可执行代码、能力接入与运行时生命周期。',
    capCodeTitle: '代码智能', capCodeText: '从模型训练、ONNX 部署到 IDE 插件体验，构建端到端智能代码补全与搜索系统。',
    capCompilerTitle: '编译器', capCompilerText: '编译器调试信息、LLVM IR、DWARF、语言类型系统与传统调试工具链适配。',
    experienceIndex: '02 经历', experienceTitle: '工作经历', dateByteDance: '2023.11 — 至今', current: '现在', companyByteDance: '字节跳动',
    byteDanceText: '<strong>Workflow 编译：</strong>负责 Coze Workflow 到 Flowlang（Python-based）的编译，将上层节点、依赖关系与执行逻辑转换为可运行的代码表达。近半年工作重点转向 <strong>Agent Harness 与 Agent Runtime</strong>，围绕 Agent 任务承载、能力接入、执行编排与生命周期管理开展建设，将既有的编译链路进一步延伸为从高层任务语义到稳定运行时的完整执行基础设施。',
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
    contactText: '如果你也在关注 Agent Harness、Agent Runtime、Workflow 编译或代码智能，欢迎来聊聊正在解决的问题。', backToTop: '返回顶部 ↑',
  },
  en: {
    metaTitle: 'Wang Wen | Agent Infrastructure · Compilers · Code Intelligence',
    metaDescription: 'Engineering Agent systems from workflow compilation to harness and runtime.',
    navLabel: 'Main navigation', navAbout: 'About', navExperience: 'Experience', navResearch: 'Research', navContact: 'Contact',
    themeLabel: 'Toggle color theme', eyebrow: 'AI ENGINEER · SHANGHAI / HANGZHOU',
    heroTitle: 'Making every Agent step <span>run reliably</span>',
    heroLead: 'From compilers and code intelligence to LLM inference, my work has centered on one question: how do we turn complex capabilities into reliable systems? Today I focus on <strong>Agent Harness and Agent Runtime</strong>, connecting task representation, compilation, and execution into one coherent path.',
    viewExperience: 'View experience', contactMe: 'Get in touch', systemProfile: 'SYSTEM PROFILE', sourceLabel: 'SOURCE',
    focusLabel: 'FOCUS', langLabel: 'LANG', modeLabel: 'MODE', statYears: 'years in engineering', statProduct: 'code intelligence product delivery',
    statOptimize: 'debug info size reduction', statPapers: 'international journal papers', aboutIndex: '01 ABOUT',
    aboutTitle: 'From compilers to Agent runtime',
    aboutIntro: 'My path spans several domains, but the core question has stayed the same: how is a complex capability represented, transformed, and ultimately executed reliably in the real world? From compilers to Agent Runtime, that path has become increasingly complete.',
    capAgentTitle: 'Agent Infrastructure', capAgentText: 'Connecting task representation, executable code, capability integration, and runtime lifecycle through Workflow compilation, Agent Harness, and Runtime.',
    capCodeTitle: 'Code Intelligence', capCodeText: 'Building end-to-end code completion and search systems, from model training and ONNX deployment to the IDE experience.',
    capCompilerTitle: 'Compilers', capCompilerText: 'Compiler debug information, LLVM IR, DWARF, language type systems, and traditional debugger toolchains.',
    experienceIndex: '02 EXPERIENCE', experienceTitle: 'Experience', dateByteDance: '2023.11 — Present', current: 'CURRENT', companyByteDance: 'ByteDance',
    byteDanceText: '<strong>Workflow compilation:</strong> Built the compiler from Coze Workflow to Flowlang, a Python-based executable representation of nodes, dependencies, and control logic. Over the past six months, my focus has shifted to <strong>Agent Harness and Agent Runtime</strong>, covering Agent task hosting, capability integration, execution orchestration, and lifecycle management—extending the compiler path into a complete execution foundation from high-level task semantics to a reliable runtime.',
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
    contactText: 'If you are working on Agent Harness, Agent Runtime, workflow compilation, or code intelligence, I would be glad to compare notes.', backToTop: 'BACK TO TOP ↑',
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
  localStorage.setItem('wangwen-language', language);
}

if (storedTheme === 'dark') {
  root.dataset.theme = 'dark';
  toggle?.setAttribute('aria-pressed', 'true');
}

toggle?.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem('wangwen-theme', 'light');
  } else {
    root.dataset.theme = 'dark';
    localStorage.setItem('wangwen-theme', 'dark');
  }
  toggle.setAttribute('aria-pressed', String(!isDark));
});

languageToggle?.addEventListener('click', () => {
  applyLanguage(root.dataset.language === 'en' ? 'zh' : 'en');
});

applyLanguage(localStorage.getItem('wangwen-language') === 'en' ? 'en' : 'zh');

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
