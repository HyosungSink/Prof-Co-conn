// Indexed by verified Google Scholar ID so joint appointments share the same audit.
const facultyPaperAudits = {
  "7t12hVkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://zxwu.azurewebsites.net/",
      "https://fvl.fudan.edu.cn/publications.html",
      "https://gulucaptain.github.io/"
    ],
    "papers": [
      {
        "title": "CameraNoise: Enabling Faithful Camera Control in Video Diffusion through Geometry-Flow-Guided Noise Warping",
        "url": "https://arxiv.org/html/2605.30774v1",
        "outcome": "confirmed",
        "note": "两位共同指导教师，同一篇论文只计一次；实际入库待主审核对。"
      },
      {
        "title": "DCDM: Divide-and-Conquer Diffusion Models for Consistency-Preserving Video Generation",
        "url": "https://arxiv.org/html/2602.13637v1",
        "outcome": "confirmed",
        "note": "两位共同指导教师，同一篇论文只计一次；实际入库待主审核对。"
      },
      {
        "title": "CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation",
        "url": "https://arxiv.org/html/2604.09201v1",
        "outcome": "existing",
        "note": "已在全站关系索引。"
      },
      {
        "title": "MagDiff: Multi-Alignment Diffusion for High-Fidelity Video Generation and Editing",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02738.pdf",
        "outcome": "existing",
        "note": "已在全站关系索引。"
      },
      {
        "title": "DynamiCtrl: Rethinking the Basic Structure and the Role of Text for High-quality Human Image Animation",
        "url": "https://arxiv.org/html/2503.21246v1",
        "outcome": "lead",
        "note": "署名复旦及华为，实习期最后一个月首发。作者本人署名的校企项目页可证参与，但暂无具名实习脚注或独立原始流程来源；寻找直接绑定。"
      },
      {
        "title": "LSTD: Long Short-Term Temporal Diffusion for Video Generation",
        "url": "https://doi.org/10.1109/TMM.2026.3651052",
        "outcome": "lead",
        "note": "华为与腾讯均在团队中；需追原稿提交及合作过程，确认在具体公司研究。"
      },
      {
        "title": "SPEED: One-Step Pixel Diffusion for High-quality Video Frame Interpolation",
        "url": "https://arxiv.org/abs/2607.15585",
        "outcome": "no-evidence",
        "note": "唯一企业为哔哩哔哩，范围外。"
      },
      {
        "title": "ShoulderShot: Generating Over-the-Shoulder Dialogue Videos",
        "url": "https://arxiv.org/abs/2508.07597",
        "outcome": "no-evidence",
        "note": "同一学生在腾讯参与，但两位复旦导师没有本篇署名。"
      },
      {
        "title": "ReFocusEraser: Refocusing for Small Object Removal with Robust Context-Shadow Repair",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/8936fa1691764912d9519e1b5673ea66-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "赵浩宇有署名，两位复旦导师均不在作者表。"
      },
      {
        "title": "UniCam: Taming Unified Diffusion Models in Noise Space for Camera-controllable Video Rendering",
        "url": "https://rdcu.be/fhEZc",
        "outcome": "no-evidence",
        "note": "本人列三位作者均为复旦；未见企业作者。"
      },
      {
        "title": "UniAdapter: All-in-One Control for Flexible Video Generation",
        "url": "https://dblp.org/db/journals/tcsv/tcsv35.html",
        "outcome": "no-evidence",
        "note": "学生在该项华为研究作者表，两位复旦导师均不在刊物署名。"
      },
      {
        "title": "EDEN: Enhanced Diffusion for High-quality Large-motion Video Frame Interpolation",
        "url": "https://arxiv.org/abs/2503.15831",
        "outcome": "existing",
        "note": "已有同一论文关系，以第一作者张子豪纳入。"
      }
    ],
    "note": "目前为赵浩宇同导师的论文子集，未穷尽两位导师全期索引。"
  },
  "f3_FP8AAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://teai.fudan.edu.cn/faculty-detail.html?id=110",
      "https://fvl.fudan.edu.cn/publications.html",
      "https://gulucaptain.github.io/",
      "https://zxwu.azurewebsites.net/",
      "https://sxjyjay.github.io/"
    ],
    "papers": [
      {
        "title": "CameraNoise: Enabling Faithful Camera Control in Video Diffusion through Geometry-Flow-Guided Noise Warping",
        "url": "https://arxiv.org/html/2605.30774v1",
        "outcome": "confirmed",
        "note": "两位共同指导教师，同一篇论文只计一次；实际入库待主审核对。"
      },
      {
        "title": "DCDM: Divide-and-Conquer Diffusion Models for Consistency-Preserving Video Generation",
        "url": "https://arxiv.org/html/2602.13637v1",
        "outcome": "confirmed",
        "note": "两位共同指导教师，同一篇论文只计一次；实际入库待主审核对。"
      },
      {
        "title": "CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation",
        "url": "https://arxiv.org/html/2604.09201v1",
        "outcome": "existing",
        "note": "已在全站关系索引。"
      },
      {
        "title": "MagDiff: Multi-Alignment Diffusion for High-Fidelity Video Generation and Editing",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02738.pdf",
        "outcome": "existing",
        "note": "已在全站关系索引。"
      },
      {
        "title": "LSTD: Long Short-Term Temporal Diffusion for Video Generation",
        "url": "https://doi.org/10.1109/TMM.2026.3651052",
        "outcome": "lead",
        "note": "华为与腾讯均在团队中；需追原稿提交及合作过程，确认在具体公司研究。"
      },
      {
        "title": "SPEED: One-Step Pixel Diffusion for High-quality Video Frame Interpolation",
        "url": "https://arxiv.org/abs/2607.15585",
        "outcome": "no-evidence",
        "note": "唯一企业为哔哩哔哩，范围外。"
      },
      {
        "title": "ShoulderShot: Generating Over-the-Shoulder Dialogue Videos",
        "url": "https://arxiv.org/abs/2508.07597",
        "outcome": "no-evidence",
        "note": "同一学生在腾讯参与，但两位复旦导师没有本篇署名。"
      },
      {
        "title": "ReFocusEraser: Refocusing for Small Object Removal with Robust Context-Shadow Repair",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/8936fa1691764912d9519e1b5673ea66-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "赵浩宇有署名，两位复旦导师均不在作者表。"
      },
      {
        "title": "UniCam: Taming Unified Diffusion Models in Noise Space for Camera-controllable Video Rendering",
        "url": "https://rdcu.be/fhEZc",
        "outcome": "no-evidence",
        "note": "本人列三位作者均为复旦；未见企业作者。"
      },
      {
        "title": "UniAdapter: All-in-One Control for Flexible Video Generation",
        "url": "https://dblp.org/db/journals/tcsv/tcsv35.html",
        "outcome": "no-evidence",
        "note": "学生在该项华为研究作者表，两位复旦导师均不在刊物署名。"
      },
      {
        "title": "Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "NeurIPS 论文首页的第一作者脚注明确说明焦洋在美团实习时完成 Lumen。第一作者当时为复旦在读博士，并同时署名复旦与美团；本人简历将该技术列于美团 2023–2024 研究实习期间。"
      },
      {
        "title": "UniToken: Harmonizing Multimodal Understanding and Generation through Unified Visual Encoding",
        "url": "https://arxiv.org/pdf/2504.04423",
        "outcome": "confirmed",
        "note": "第一作者焦洋的 2024 年两版简历均在美团实习项目栏明确列出其研发统一图像理解和文生图的原生多模态模型。本人主页将该模型具名列为 UniToken；原文与项目库均列三位他本人注明的在美团实习时的合作伙伴，且均署美团。论文在实习结束后发布。"
      }
    ],
    "note": "目前为赵浩宇同导师的论文子集，未穷尽两位导师全期索引。"
  },
  "Nkm9r2IAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2511.18793v2",
      "https://arxiv.org/html/2506.16114v3",
      "https://dave-adamswang.github.io/",
      "https://www.cityu.edu.hk/stfprofile/xyzhao.htm",
      "https://openreview.net/pdf/70344285d0f2f98baec78b3ab203069e8ca59a03.pdf",
      "https://scholars.cityu.edu.hk/en/publications/gflowgr-fine-tuning-generative-recommendation-frameworks-with-gen/",
      "https://doi.org/10.1145/3805712.3809663",
      "https://arxiv.org/abs/2506.16114",
      "https://arxiv.org/html/2605.21967",
      "https://gaojingtong.github.io/",
      "https://arxiv.org/html/2608.00750",
      "https://kaifengguo.github.io/",
      "https://qingpengcai.github.io/",
      "https://scholars.cityu.edu.hk/en/publications/hierarchical-residual-policy-optimization-for-generative-recommen/",
      "https://doi.org/10.1145/3770855.3818206",
      "https://arxiv.org/html/2504.14587",
      "https://scholars.cityu.edu.hk/en/studentTheses/open-world-recommendation-knowledge-transfer-scenario-adaptation-/",
      "https://doi.org/10.1145/3726302.3729987",
      "https://personal.ntu.edu.sg/boan/papers/SIGIR25_autobidding.pdf",
      "https://doi.org/10.1145/3770855.3818422",
      "https://scholars.cityu.edu.hk/en/publications/generative-auto-bidding-in-large-scale-auctions-via-diffusion-com/",
      "https://arxiv.org/html/2509.03348",
      "https://arxiv.org/pdf/2310.18339v2",
      "https://liuqidong07.github.io/",
      "https://arxiv.org/html/2402.02803v2",
      "https://jarvislab.tencent.com/index-en.html",
      "https://arxiv.org/abs/2402.02803v1",
      "https://liuqidong07.github.io/cv/resume_20240326.pdf",
      "https://doi.org/10.1145/3706631",
      "https://jarvislab.tencent.com/aca-publications.html",
      "https://gr.xjtu.edu.cn/fengtian/zh_CN/zhym/976526/list/index.htm",
      "https://aclanthology.org/2026.findings-acl.1621/",
      "https://aml-cityu.github.io/team/",
      "https://scholars.cityu.edu.hk/en/persons/xianzhao/",
      "https://aclanthology.org/2026.findings-acl.1621.pdf",
      "https://aclanthology.org/2026.findings-acl.1646/",
      "https://aclanthology.org/2026.findings-acl.1646.pdf",
      "https://aclanthology.org/2026.findings-acl.2098/",
      "https://fzkuji.github.io/cv/",
      "https://fzkuji.github.io/",
      "https://aclanthology.org/2026.findings-acl.2098.pdf",
      "https://scholars.cityu.edu.hk/en/persons/zichuanfu2/",
      "https://arxiv.org/abs/2502.18845",
      "https://arxiv.org/pdf/2502.18845",
      "https://aclanthology.org/2025.acl-industry.30/",
      "https://aclanthology.org/2025.acl-industry.30.pdf",
      "https://aclanthology.org/2025.acl-long.1588/",
      "https://aclanthology.org/2025.acl-long.1588.pdf",
      "https://doi.org/10.1145/3698878",
      "https://openreview.net/profile?id=~Xiangyang_Li2",
      "https://batmanzzmc.github.io/papers/TOIS2024.pdf",
      "https://scholars.cityu.edu.hk/en/publications/a-unified-framework-for-multi-domain-ctr-prediction-via-large-lan/",
      "https://aclanthology.org/2026.findings-acl.900/",
      "https://morin.wang/",
      "https://ml-summit.org/speaker/1207?lang=en&uid=c1047",
      "https://aclanthology.org/2026.findings-acl.900.pdf",
      "https://arxiv.org/abs/2505.20192",
      "https://doi.org/10.1145/3626772.3657722",
      "https://www.ccf.org.cn/Collaboration/Enterprise_Fund/yxxmal/2025/",
      "https://doi.org/10.1145/3711896.3737036",
      "https://zhang-yingyi.github.io/",
      "https://zhang-yingyi.github.io/assets/files/YingyiZhang_CV.pdf",
      "https://advanced-recommender-systems.github.io/AutoML-Recommendations/doc/WSDM23-Tutorial-AutoML%20for%20Deep%20Recommender%20Systems.pdf",
      "https://arxiv.org/html/2505.05031",
      "https://ojs.aaai.org/index.php/AAAI/article/view/38679",
      "https://arxiv.org/abs/2604.25291",
      "https://jia-py.github.io/",
      "https://www.linkedin.com/in/shuchang-liu-1b737b104",
      "https://arxiv.org/html/2604.25291v1",
      "https://arxiv.org/abs/2605.10527",
      "https://arxiv.org/html/2605.10527v1",
      "https://aclanthology.org/2026.emnlp-main.2081/",
      "https://dongjiancheng77.github.io/pdfs/jiancheng-dong-cv.pdf",
      "https://www.ds.cityu.edu.hk/en/people/phd-students",
      "https://cn.linkedin.com/in/sqwang",
      "https://aclanthology.org/2026.emnlp-main.2081.pdf",
      "https://doi.org/10.1145/3799682.3840759",
      "https://arxiv.org/abs/2511.23271",
      "https://arxiv.org/abs/2510.07842",
      "https://jypeng28.github.io/files/CV_jypeng.pdf",
      "https://jypeng28.github.io/",
      "https://arxiv.org/pdf/2510.07842"
    ],
    "papers": [
      {
        "title": "NEZHA: A Zero-sacrifice and Hyperspeed Decoding Architecture for Generative Recommendations",
        "url": "https://arxiv.org/html/2511.18793v2",
        "outcome": "existing",
        "note": "本论文已收录。"
      },
      {
        "title": "GFlowGR: Fine-tuning Generative Recommendation Frameworks with Generative Flow Networks",
        "url": "https://arxiv.org/html/2506.16114v3",
        "outcome": "confirmed",
        "note": "论文首页具名注明第一作者 Yejing Wang 在阿里巴巴实习期间开展本论文研究；论文还记录系统于 2025 年年中上线淘宝搜索广告。港城大博士导师赵翔宇是同篇通讯作者，阿里妈妈首席算法架构师 Jian Xu 为同篇企业作者。"
      },
      {
        "title": "Reinforced Preference Optimization for Reasoning-Augmented Recommendations",
        "url": "https://arxiv.org/html/2605.21967",
        "outcome": "existing",
        "note": "本人在快手完成本篇已有发布。"
      },
      {
        "title": "Hierarchical Residual Policy Optimization for Generative Recommendations",
        "url": "https://arxiv.org/html/2608.00750",
        "outcome": "confirmed",
        "note": "论文脚注明确说明由 Kaifeng Guo 在快手实习时完成。本人主页显示其于该研究期间在港城大读博，并将本篇列为个人成果、2026 年 5 月录用。博士导师赵翔宇与快手高级总监蔡庆芃均是本篇通讯作者。"
      },
      {
        "title": "Generative Auto-Bidding with Value-Guided Explorations",
        "url": "https://arxiv.org/html/2504.14587",
        "outcome": "confirmed",
        "note": "Jingtong Gao 为第一作者；其主页将这项成果明确标为在快手上线，并列同期快手实习。学校学位论文将 GAVE 列为作者本人博士研究，说明在快手用于实际竞价。原文列赵翔宇和快手高级总监蔡庆芃同为作者，记载快手资助和线上 A/B 测试。"
      },
      {
        "title": "Generative Auto-Bidding in Large-Scale Auctions via Diffusion Completer-Aligner",
        "url": "https://doi.org/10.1145/3770855.3818422",
        "outcome": "confirmed",
        "note": "Jingtong Gao 个人履历将这篇具体成果列为快手上线项目，并列同期快手科研实习。2025 年公开首版正值其快手实习与港城大博士在读阶段，原文记载在快手广告线上系统实际测试；正式会议列其为第二作者，博士导师赵翔宇与快手高级总监蔡庆芃均为同篇作者。"
      },
      {
        "title": "When MOE Meets LLMs: Parameter Efficient Fine-tuning for Multi-task Medical Applications",
        "url": "https://doi.org/10.1145/3626772.3657722",
        "outcome": "existing",
        "note": "同篇在起始基线已记录。CCF 腾讯联合项目具名把 MOELoRA 列为成果，刘启东公开履历证明与 Xiangyu Zhao 的港城大、西交大联合培养及同期在腾讯 Jarvis 的实习。"
      },
      {
        "title": "Large Language Model Distilling Medication Recommendation Model",
        "url": "https://arxiv.org/html/2402.02803v2",
        "outcome": "confirmed",
        "note": "刘启东 2024 年 3 月简历写明，他于 2023 年 11 月至 2024 年 1 月在腾讯天衍与吴宪开展基于 LLaMA-7B 的用药推荐蒸馏，在 MIMIC-III 与 MIMIC-IV 验证，与本篇的方法和数据完全对应，首版即发表于 2024 年 2 月。腾讯正式员工吴宪与港城大联培导师赵翔宇同为本篇通讯作者。"
      },
      {
        "title": "A Contrastive Pretrain Model with Prompt Tuning for Multi-center Medication Recommendation",
        "url": "https://doi.org/10.1145/3706631",
        "outcome": "confirmed",
        "note": "刘启东同期简历在腾讯天衍多中心用药推荐项目项下逐字列出该论文作为项目产出，并给出企业指导者与工作日期。腾讯天衍收录论文，赵翔宇博士联培导师和腾讯天衍正式员工吴宪均为同篇作者。"
      },
      {
        "title": "AdapTime: Enabling Adaptive Temporal Reasoning in Large Language Models",
        "url": "https://aclanthology.org/2026.findings-acl.1621/",
        "outcome": "confirmed",
        "note": "正式论文首页由第一作者邓怡敏的星号脚注指明工作在腾讯 Jarvis Lab 完成；港城大明确列赵翔宇指导该生，课题组列为与西交大联合培养。导师是通讯作者；腾讯官网确认论文的企业通讯作者 Xian Wu 加入时间与雇用职务。"
      },
      {
        "title": "MultiDx: A Multi-Source Knowledge Integration Framework towards Diagnostic Reasoning",
        "url": "https://aclanthology.org/2026.findings-acl.1646/",
        "outcome": "confirmed",
        "note": "正式论文首页由第一作者邓怡敏的星号脚注指明工作在腾讯 Jarvis Lab 完成；港城大明确列赵翔宇指导该生，课题组列为与西交大联合培养。导师是通讯作者；腾讯官网确认论文的企业通讯作者 Xian Wu 加入时间与雇用职务。"
      },
      {
        "title": "Tandem: Riding Together with Large and Small Language Models for Efficient Reasoning",
        "url": "https://aclanthology.org/2026.findings-acl.2098/",
        "outcome": "confirmed",
        "note": "正式论文具名实习脚注明确署给第一作者。 傅子川个人主页列明港城大博士导师 Xiangyu Zhao。教师和腾讯正式雇员 Xian Wu 均在同篇，其在腾讯的任职由实验室官网确认。"
      },
      {
        "title": "Sliding Window Attention Training for Efficient Large Language Models",
        "url": "https://arxiv.org/abs/2502.18845",
        "outcome": "confirmed",
        "note": "预印本首页明确说明第一作者在腾讯优图实习期间开展本研究。 傅子川个人主页列明港城大博士导师 Xiangyu Zhao。教师和腾讯正式雇员 Xian Wu 均在同篇，其在腾讯的任职由实验室官网确认。"
      },
      {
        "title": "Model Merging for Knowledge Editing",
        "url": "https://aclanthology.org/2025.acl-industry.30/",
        "outcome": "confirmed",
        "note": "正式论文首页用星号脚注把腾讯 Jarvis 实习研究归于第一作者；其公开履历列出相同部门的模型融合和知识编辑职责。 傅子川个人主页列明港城大博士导师 Xiangyu Zhao。教师和腾讯正式雇员 Xian Wu 均在同篇，其在腾讯的任职由实验室官网确认。"
      },
      {
        "title": "Training-free LLM Merging for Multi-task Learning",
        "url": "https://aclanthology.org/2025.acl-long.1588/",
        "outcome": "confirmed",
        "note": "第一作者的实名履历将 2024 年 8 月起在腾讯 Jarvis 开发多任务学习的模型融合方法列为该岗位工作，恰与本论文方法对应；论文致谢列同一企业研究计划。 傅子川个人主页列明港城大博士导师 Xiangyu Zhao。教师和腾讯正式雇员 Xian Wu 均在同篇，其在腾讯的任职由实验室官网确认。"
      },
      {
        "title": "A Unified Framework for Multi-Domain CTR Prediction via Large Language Models",
        "url": "https://doi.org/10.1145/3698878",
        "outcome": "confirmed",
        "note": "学生的具名履历将用大语言模型开展跨域点击率预测列为在华为诺亚期间实际工作，并明确列企业导师 Xiangyang Li；原文同为第一作者，其机构归属及华为正式岗位由履历与同年企业资料相互核对。导师 Xiangyu Zhao 是同篇作者，学生本人说明其指导博士研究。"
      },
      {
        "title": "BalanceSFT: Improving LLM Function Calling with Balanced Training Signals and Data Hardness",
        "url": "https://aclanthology.org/2026.findings-acl.900/",
        "outcome": "confirmed",
        "note": "正式论文首页将并列第一作者 Maolin Wang 标记为在蚂蚁完成该研究；其履历列明同期在读导师 Xiangyu Zhao 与蚂蚁函式调用实习工作。早期预印本已在 Maolin Wang 毕业前将上述三位列为作者；2025 年议程对企业通讯作者 Chenyi Zhuang 的蚂蚁 AWorld 岗位有实名介绍。"
      },
      {
        "title": "LSRP: A Leader–Subordinate Retrieval Framework for Privacy-Preserving Cloud–Device Collaboration",
        "url": "https://doi.org/10.1145/3711896.3737036",
        "outcome": "confirmed",
        "note": "Yingyi Zhang 的履历将 云端及设备上的大模型与小模型协作框架 逐项列为该华为项目产出，并对应到 KDD 2025 的正式论文。LSRP 正式版列其为第一作者或共同第一作者；港城大联合博士导师赵翔宇与同篇华为研究员 Huifeng Guo 均在正式作者名单。"
      },
      {
        "title": "Personalize Before Retrieve: LLM-based Personalized Query Expansion for User-Centric Retrieval",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38679",
        "outcome": "confirmed",
        "note": "Yingyi Zhang 的履历将 个性化检索前处理方案 逐项列为该华为项目产出，并对应到 AAAI 2026 的正式论文。PBR 正式版列其为第一作者或共同第一作者；港城大联合博士导师赵翔宇与同篇华为研究员 Huifeng Guo 均在正式作者名单。"
      },
      {
        "title": "From Local Indices to Global Identifiers: Generative Reranking for Recommender Systems via Global Action Space",
        "url": "https://arxiv.org/abs/2604.25291",
        "outcome": "confirmed",
        "note": "贾鹏越是GloRank的第一作者或共同第一作者；本人把该篇标记为部署在快手应用，并明确列出同期在快手的研究实习。论文报告该平台具名团队提供的线上 A/B 验证，港城大博士导师赵翔宇与快手正式研究人员 Shuchang Liu 同篇署名。"
      },
      {
        "title": "UniRank: Unified List-wise Reranking via Confidence-Ordered Denoising",
        "url": "https://arxiv.org/abs/2605.10527",
        "outcome": "confirmed",
        "note": "贾鹏越是UniRank的第一作者或共同第一作者；本人把该篇标记为部署在快手应用，并明确列出同期在快手的研究实习。论文报告该平台具名团队提供的线上 A/B 验证，港城大博士导师赵翔宇与快手正式研究人员 Shuchang Liu 同篇署名。"
      },
      {
        "title": "How to Utilize Complementary Vision-Text Information for 2D Structure Understanding",
        "url": "https://aclanthology.org/2026.emnlp-main.2081/",
        "outcome": "confirmed",
        "note": "论文首页明确逐人列出第一作者的港城大和百度署名；学系导师表及履历确认赵翔宇是博士导师。 赵翔宇同篇通讯，与同一论文中列明的百度搜索研究人员王帅强分别对应高校指导和企业正式任职。"
      },
      {
        "title": "Learning a Single Token to Replace Long System Prompts in LLMs",
        "url": "https://doi.org/10.1145/3799682.3840759",
        "outcome": "confirmed",
        "note": "论文第一版在港城大入学后且处于百度实习期间；学生履历将相同的长提示词压缩方法和实验结果列为百度项目。 赵翔宇同篇通讯，与同一论文中列明的百度搜索研究人员王帅强分别对应高校指导和企业正式任职。"
      },
      {
        "title": "AdaSwitch: Balancing Exploration and Guidance in Knowledge Distillation via Adaptive Switching",
        "url": "https://arxiv.org/abs/2510.07842",
        "outcome": "confirmed",
        "note": "正式预印本第一作者以港城大、中科大、百度署名；其个人主页注明港城大指导老师为赵翔宇，企业履历所列蒸馏技术与该论文一致。 赵翔宇同篇通讯，与同一论文中列明的百度搜索研究人员王帅强分别对应高校指导和企业正式任职。"
      }
    ]
  },
  "K6zhweAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/pdf/2511.07931",
      "https://arxiv.org/html/2508.16332v2",
      "https://www.zhangxueyao.com/",
      "https://www.zhangxueyao.com/data/presentations/20250428_nus_vevo.pdf"
    ],
    "papers": [
      {
        "title": "SpeechJudge: Towards Human-Level Judgment for Speech Naturalness",
        "url": "https://arxiv.org/pdf/2511.07931",
        "outcome": "existing",
        "note": "本论文已收录。"
      },
      {
        "title": "Vevo2: A Unified and Controllable Framework for Speech and Singing Voice Generation",
        "url": "https://arxiv.org/html/2508.16332v2",
        "outcome": "lead",
        "note": "原文有导师和 Seed 正式人员；第一作者同期参加字节校企明确的语音生成项目，自述 4 月已在做本论文。追求同篇精确项目证据，暂未入数。"
      }
    ]
  },
  "FeJrzPMAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cse.ust.hk/~weiwa/papers/diflow-sosp26.pdf",
      "https://www.fengtianyu.com/",
      "https://www.lingyunyang.com/",
      "https://fty1777.github.io/file/CV_TianyuFENG.pdf"
    ],
    "papers": [
      {
        "title": "DiFlow: A System for Micro-Serving Text-to-Image Diffusion Workflows",
        "url": "https://www.cse.ust.hk/~weiwa/papers/diflow-sosp26.pdf",
        "outcome": "lead",
        "note": "有同篇学生、在读博士导师、阿里正式人员；追查对学生工作的原文/实习报告互证。"
      }
    ]
  },
  "ChCjAAwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm",
      "https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm",
      "https://dongguanting.github.io/",
      "https://xiaoxi-li1.github.io/",
      "https://wxjiao.github.io/",
      "https://zhfzhmsra.github.io/",
      "https://dengchenlong.com/",
      "https://dongyu888.github.io/",
      "https://aclanthology.org/2025.acl-long.241.pdf",
      "https://openreview.net/pdf/8757228d10c75444816024ec46d5a907c5baeebc.pdf"
    ],
    "papers": [
      {
        "title": "OmniGAIA: Towards Native Omni-Modal AI Agents",
        "url": "https://arxiv.org/pdf/2602.22897v1",
        "outcome": "confirmed",
        "note": "李晓熙，小红书；论文脚注和在读履历齐全。"
      },
      {
        "title": "Agentic Entropy-Balanced Policy Optimization",
        "url": "https://arxiv.org/pdf/2510.14545v1",
        "outcome": "confirmed",
        "note": "董冠霆，快手；论文脚注和共导/任职履历齐全。"
      },
      {
        "title": "Agentic Reinforced Policy Optimization",
        "url": "https://arxiv.org/pdf/2507.19849v1",
        "outcome": "confirmed",
        "note": "董冠霆，快手；论文脚注和共导/任职履历齐全。"
      },
      {
        "title": "DeepAgent: A General Reasoning Agent with Scalable Toolsets",
        "url": "https://arxiv.org/pdf/2510.21618v3",
        "outcome": "existing",
        "note": "已在基线。"
      },
      {
        "title": "Tool-Star: Empowering LLM-Brained Multi-Tool Reasoner via Reinforcement Learning",
        "url": "https://arxiv.org/pdf/2505.16410",
        "outcome": "lead",
        "note": "有同期实习和快手合著；原文未发现实习脚注，待查项目归属。"
      },
      {
        "title": "A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression",
        "url": "https://aclanthology.org/2025.acl-long.241.pdf",
        "outcome": "confirmed",
        "note": "正式版具名腾讯实习脚注，导师及腾讯作者可核。"
      },
      {
        "title": "UniGist: Towards General and Hardware-aligned Sequence-level Long Context Compression",
        "url": "https://openreview.net/pdf/8757228d10c75444816024ec46d5a907c5baeebc.pdf",
        "outcome": "confirmed",
        "note": "正式版具名腾讯实习脚注，导师及腾讯作者可核。"
      }
    ],
    "note": "仅对李晓熙、董冠霆的部分成果开展扩查。"
  },
  "tbxCHJgAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm",
      "https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm",
      "https://dongguanting.github.io/",
      "https://xiaoxi-li1.github.io/",
      "https://wxjiao.github.io/",
      "https://zhfzhmsra.github.io/"
    ],
    "papers": [
      {
        "title": "Agentic Entropy-Balanced Policy Optimization",
        "url": "https://arxiv.org/pdf/2510.14545v1",
        "outcome": "confirmed",
        "note": "同一篇仅计一次；董冠霆本人将文继荣列为共同导师。"
      },
      {
        "title": "Agentic Reinforced Policy Optimization",
        "url": "https://arxiv.org/pdf/2507.19849v1",
        "outcome": "confirmed",
        "note": "同一篇仅计一次；董冠霆本人将文继荣列为共同导师。"
      }
    ],
    "note": "仅对董冠霆的部分成果开展扩查。"
  },
  "UeltiQ4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://jarrentwu1031.github.io/",
      "https://richardych.github.io/",
      "https://dblp.org/pid/59/2741.html",
      "https://faculty.hust.edu.cn/xiangbai/zh_CN/index.htm",
      "https://torrvision.com/people/",
      "https://wjf5203.github.io/",
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09666.pdf",
      "https://openaccess.thecvf.com/content/CVPR2024/papers/Wu_General_Object_Foundation_Model_for_Images_and_Videos_at_Scale_CVPR_2024_paper.pdf",
      "https://openaccess.thecvf.com/content/CVPR2023/papers/Liu_InstMove_Instance_Motion_for_Object-Centric_Video_Segmentation_CVPR_2023_paper.pdf"
    ],
    "papers": [
      {
        "title": "SC4D: Sparse-Controlled Video-to-4D Generation and Motion Transfer",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02109.pdf",
        "outcome": "existing",
        "note": "华中科大学生同篇的达摩院实习已有记录。"
      },
      {
        "title": "AnimateAnyMesh: A Feed-Forward 4D Foundation Model for Text-Driven Universal Mesh Animation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_AnimateAnyMesh_A_Feed-Forward_4D_Foundation_Model_for_Text-Driven_Universal_Mesh_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "学生本人将这一篇列为阿里达摩院实习成果，预印本在实习区间内。"
      },
      {
        "title": "R-DMesh: Video-Guided 3D Animation via Rectified Dynamic Mesh Flow",
        "url": "https://arxiv.org/pdf/2605.13838",
        "outcome": "existing",
        "note": "腾讯混元 3D 实习成果已有记录。"
      },
      {
        "title": "AnimateAnyMesh++: A Flexible 4D Foundation Model for High-Fidelity Text-Driven Mesh Animation",
        "url": "https://arxiv.org/abs/2604.26917",
        "outcome": "lead",
        "note": "同一导师及达摩院研究员参与；新版本未注明实习，初版公开时学生已离开阿里，需核查实际研发归属。"
      },
      {
        "title": "PartGLEE: A Foundation Model for Recognizing and Parsing Any Objects",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09666.pdf",
        "outcome": "confirmed",
        "note": "ECCV 正式版首页直接具名 Junfeng Wu 在字节跳动实习完成此项研究。 白翔及字节跳动研究科学家 Song Bai 在同一篇署名。"
      },
      {
        "title": "General Object Foundation Model for Images and Videos at Scale",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Wu_General_Object_Foundation_Model_for_Images_and_Videos_at_Scale_CVPR_2024_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式版明确具名 Junfeng Wu 在字节跳动实习时进行本论文的研究。 白翔及字节跳动研究科学家 Song Bai 在同一篇署名。"
      },
      {
        "title": "InstMove: Instance Motion for Object-Centric Video Segmentation",
        "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Liu_InstMove_Instance_Motion_for_Object-Centric_Video_Segmentation_CVPR_2023_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 首页以星号联结两位并列第一作者（含 Junfeng Wu）和本项字节跳动实习说明；学生履历也具名列此论文及同期实习。 白翔及字节跳动研究科学家 Song Bai 在同一篇署名。"
      }
    ],
    "note": "已经逐篇核对该合作簇及部分论文来源，未覆盖该教师全部公开书目。"
  },
  "8D_9JI0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://npu-cvpg.org/group",
      "https://xhuangcv.github.io/",
      "https://qzhang-cv.github.io/"
    ],
    "papers": [
      {
        "title": "Local Implicit Ray Function for Generalizable Radiance Field Representation",
        "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Huang_Local_Implicit_Ray_Function_for_Generalizable_Radiance_Field_Representation_CVPR_2023_paper.pdf",
        "outcome": "confirmed",
        "note": "正式论文具名说明黄鑫在腾讯实习期间完成该工作，论文作者中包含校内指导教师和企业实习导师。"
      },
      {
        "title": "Inverting the Imaging Process by Learning an Implicit Camera Model",
        "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Huang_Inverting_the_Imaging_Process_by_Learning_an_Implicit_Camera_Model_CVPR_2023_paper.pdf",
        "outcome": "existing",
        "note": "已有西北工业大学与腾讯的确认记录。"
      },
      {
        "title": "LTM-NeRF: Embedding 3D Local Tone Mapping in HDR Neural Radiance Field",
        "url": "https://doi.org/10.1109/TPAMI.2024.3448620",
        "outcome": "lead",
        "note": "同组作者具名，但需判断是否与 2022 年的 HDR-NeRF 为同稿延伸，以及本项的实际企业参与时间。"
      },
      {
        "title": "HumanNorm: Learning Normal Diffusion Model for High-quality and Realistic 3D Human Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Huang_HumanNorm_Learning_Normal_Diffusion_Model_for_High-quality_and_Realistic_3D_CVPR_2024_paper.pdf",
        "outcome": "no-evidence",
        "note": "正式论文的具名脚注说明研究在清华大学实习期间完成，作者署名也没有调查范围内的企业。"
      }
    ],
    "note": "当前仅梳理黄鑫的合作论文；仍需核对教师的完整论文清单。"
  },
  "P1jPSzMAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://coai.cs.tsinghua.edu.cn/hml",
      "https://aclanthology.org/people/jiale-cheng/",
      "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm",
      "https://zhuoerfeng.github.io/"
    ],
    "papers": [
      {
        "title": "VPO: Aligning Text-to-Video Generation Models with Prompt Optimization",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Cheng_VPO_Aligning_Text-to-Video_Generation_Models_with_Prompt_Optimization_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "论文脚注明确其研究在智谱实习期间完成，已用公开资料核实三位作者角色。"
      },
      {
        "title": "AutoDetect: Towards a Unified Framework for Automated Weakness Detection in Large Language Models",
        "url": "https://arxiv.org/html/2406.16714v2",
        "outcome": "confirmed",
        "note": "论文脚注明确其研究在智谱实习期间完成，已用公开资料核实三位作者角色。"
      },
      {
        "title": "SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models",
        "url": "https://arxiv.org/html/2412.11605v2",
        "outcome": "confirmed",
        "note": "论文脚注明确其研究在智谱实习期间完成，已用公开资料核实三位作者角色。"
      },
      {
        "title": "LongSafety: Evaluating Long-Context Safety of Large Language Models",
        "url": "https://arxiv.org/html/2502.16971",
        "outcome": "confirmed",
        "note": "论文脚注明确其研究在智谱实习期间完成，已用公开资料核实三位作者角色。"
      },
      {
        "title": "Black-Box Prompt Optimization: Aligning Large Language Models without Model Training",
        "url": "https://aclanthology.org/2024.acl-long.176.pdf",
        "outcome": "lead",
        "note": "有校企署名，但未发现将学生参与与该企业研究明确关联的材料。"
      },
      {
        "title": "PAL: Persona-Augmented Emotional Support Conversation Generation",
        "url": "https://aclanthology.org/2023.findings-acl.34.pdf",
        "outcome": "no-evidence",
        "note": "原文所列作者署名均为清华大学，未见目标企业参与证据。"
      },
      {
        "title": "RAVEL: Reasoning Agents for Validating and Evaluating LLM Text Synthesis",
        "url": "https://arxiv.org/html/2603.00686",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "RLAR: An Agentic Reward System for Multi-task Reinforcement Learning on Large Language Models",
        "url": "https://arxiv.org/html/2603.00724",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "HoWToBench: Holistic Evaluation for LLM’s Capability in Human-level Writing using Tree of Writing",
        "url": "https://aclanthology.org/2026.acl-long.317.pdf",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "AlignBench: Benchmarking Chinese Alignment of Large Language Models",
        "url": "https://aclanthology.org/2024.acl-long.624.pdf",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "Training Language Model to Critique for Better Refinement",
        "url": "https://aclanthology.org/2025.findings-acl.1373.pdf",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "CritiqueLLM: Towards an Informative Critique Generation Model for Evaluation of Large Language Model Generation",
        "url": "https://aclanthology.org/2024.acl-long.704.pdf",
        "outcome": "lead",
        "note": "学生和导师及在企实研已有材料，尚未核实同篇企业作者在实际研究期间的正式任职。"
      }
    ],
    "note": "先核对程家乐与黄民烈的部分合作论文，尚未完成该导师整个调查期的公开题录。"
  },
  "SQ9UbHIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2611.01129",
      "https://zhuohangjiang.com/",
      "https://arxiv.org/html/2606.10357",
      "https://www.polyu.edu.hk/comp/people/academic-staff/prof-fan-wenqi/",
      "https://astl.xmu.edu.cn/People.htm",
      "https://doi.org/10.1145/3770855.3818320",
      "https://arxiv.org/html/2608.04625",
      "https://aclanthology.org/2025.acl-long.1317/",
      "https://sjay-wang.github.io/services/cv.pdf",
      "https://sjay-wang.github.io/",
      "https://www.yindawei.com/wp-content/uploads/2023/08/DaweiCV.pdf",
      "https://aclanthology.org/2025.acl-long.1317.pdf",
      "https://arxiv.org/abs/2501.02226",
      "https://wenqifan03.github.io/members.html",
      "https://gsai.ruc.edu.cn/uploads/20241128/1b3ae4a05f14ae1836ac6f07e07d369e.pdf",
      "https://arxiv.org/html/2508.05197",
      "https://openaccess.thecvf.com/content/CVPR2026F/html/Jiang_SuperGlasses_Benchmarking_Vision_Language_Models_as_Intelligent_Agents_for_AI_CVPRF_2026_paper.html"
    ],
    "papers": [
      {
        "title": "HiGenTrans: Hierarchical LLM Knowledge Transfer for Generative Recommendation",
        "url": "https://arxiv.org/html/2611.01129",
        "outcome": "existing",
        "note": "同篇论文已收录。蒋卓航的个人主页同时列 Fan Wenqi 与 Li Qing 为校方共同导师。"
      },
      {
        "title": "Atomic Intent Reasoning: Bringing LLM Semantics to Industrial Cross-Domain Recommendations",
        "url": "https://arxiv.org/html/2606.10357",
        "outcome": "confirmed",
        "note": "原文脚注指明 Zhuohang Jiang 的工作在快手科技实习时完成；其个人主页将 AIR 明确列在快手电商实习项下，同一时期就读香港理工大学博士。校方共同导师 Wenqi Fan、Qing Li 与快手员工周进东均列于作者栏。"
      },
      {
        "title": "A/B Agent: A Self-Evolving Agent for Strategy Iteration in Industrial A/B Testing",
        "url": "https://arxiv.org/html/2608.04625",
        "outcome": "existing",
        "note": "同篇已收录。原文把快手实习脚注明确附在 Zhuohang Jiang 名下；他的个人主页把 A/B Agent 列为快手实习项目并列明两位校内共同导师。"
      },
      {
        "title": "Knowledge Graph Retrieval-Augmented Generation for LLM-based Recommendation",
        "url": "https://aclanthology.org/2025.acl-long.1317/",
        "outcome": "confirmed",
        "note": "第一作者 Shijie Wang 的实名简历明确把 K-RagRec 列为其在百度搜索科学组实习期间开发的系统，并点名实习导师尹大伟、王帅强；同期预印本在实习期间已发布。ACL 正式论文共同列出学校导师范文琦以及两位在职百度研究人员。"
      },
      {
        "title": "QA-Dragon: Query-Aware Dynamic RAG System for Knowledge-Intensive Visual Question Answering",
        "url": "https://arxiv.org/html/2508.05197",
        "outcome": "lead",
        "note": "港理工两位具名导师共同署名，全部所载作者为港理工。学生在 2025 年 10 月加入快手的履历晚于这篇论文；比赛主办方不等于同篇在职作者。"
      },
      {
        "title": "SuperGlasses: Benchmarking Vision Language Models as Intelligent Agents for AI Smart Glasses",
        "url": "https://openaccess.thecvf.com/content/CVPR2026F/html/Jiang_SuperGlasses_Benchmarking_Vision_Language_Models_as_Intelligent_Agents_for_AI_CVPRF_2026_paper.html",
        "outcome": "lead",
        "note": "两位导师均署名；同期学生在快手的个人履历未列此篇为快手项目，原文尚未标出可确认的同篇快手正式员工。"
      }
    ]
  },
  "D1LEg-YAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2611.01129",
      "https://zhuohangjiang.com/",
      "https://arxiv.org/html/2606.10357",
      "https://astl.xmu.edu.cn/People.htm",
      "https://arxiv.org/html/2608.04625",
      "https://aclanthology.org/2025.acl-long.1317/",
      "https://sjay-wang.github.io/",
      "https://sjay-wang.github.io/services/cv.pdf",
      "https://arxiv.org/html/2508.05197",
      "https://openaccess.thecvf.com/content/CVPR2026F/html/Jiang_SuperGlasses_Benchmarking_Vision_Language_Models_as_Intelligent_Agents_for_AI_CVPRF_2026_paper.html"
    ],
    "papers": [
      {
        "title": "HiGenTrans: Hierarchical LLM Knowledge Transfer for Generative Recommendation",
        "url": "https://arxiv.org/html/2611.01129",
        "outcome": "existing",
        "note": "同篇论文已收录。蒋卓航的个人主页同时列 Fan Wenqi 与 Li Qing 为校方共同导师。"
      },
      {
        "title": "Atomic Intent Reasoning: Bringing LLM Semantics to Industrial Cross-Domain Recommendations",
        "url": "https://arxiv.org/html/2606.10357",
        "outcome": "confirmed",
        "note": "原文脚注指明 Zhuohang Jiang 的工作在快手科技实习时完成；其个人主页将 AIR 明确列在快手电商实习项下，同一时期就读香港理工大学博士。校方共同导师 Wenqi Fan、Qing Li 与快手员工周进东均列于作者栏。"
      },
      {
        "title": "A/B Agent: A Self-Evolving Agent for Strategy Iteration in Industrial A/B Testing",
        "url": "https://arxiv.org/html/2608.04625",
        "outcome": "existing",
        "note": "同篇已收录。原文把快手实习脚注明确附在 Zhuohang Jiang 名下；他的个人主页把 A/B Agent 列为快手实习项目并列明两位校内共同导师。"
      },
      {
        "title": "Knowledge Graph Retrieval-Augmented Generation for LLM-based Recommendation",
        "url": "https://aclanthology.org/2025.acl-long.1317/",
        "outcome": "lead",
        "note": "该生的共同导师李青未在此篇 ACL 论文作者栏；该证据已通过同篇导师范文琦收录。"
      },
      {
        "title": "QA-Dragon: Query-Aware Dynamic RAG System for Knowledge-Intensive Visual Question Answering",
        "url": "https://arxiv.org/html/2508.05197",
        "outcome": "lead",
        "note": "港理工两位具名导师共同署名，全部所载作者为港理工。学生在 2025 年 10 月加入快手的履历晚于这篇论文；比赛主办方不等于同篇在职作者。"
      },
      {
        "title": "SuperGlasses: Benchmarking Vision Language Models as Intelligent Agents for AI Smart Glasses",
        "url": "https://openaccess.thecvf.com/content/CVPR2026F/html/Jiang_SuperGlasses_Benchmarking_Vision_Language_Models_as_Intelligent_Agents_for_AI_CVPRF_2026_paper.html",
        "outcome": "lead",
        "note": "两位导师均署名；同期学生在快手的个人履历未列此篇为快手项目，原文尚未标出可确认的同篇快手正式员工。"
      }
    ]
  },
  "UKMcQn4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://zhenxuan00.github.io/#group",
      "https://yyyouy.github.io/",
      "https://www.newx.sg/scholar/cAz9PToAAAAJ",
      "https://sites.google.com/site/leeplus/",
      "https://dblp.org/pid/161/9965.html",
      "https://zhenxuan00.github.io/",
      "https://nieshenx.github.io/",
      "https://cn.linkedin.com/in/%E5%8B%87-%E5%8D%95-8a821b120/en",
      "https://nesa.zju.edu.cn/download/Towards_Practical_Backdoor_Attacks_on_Federated_Learning_Systems.pdf",
      "https://raw.githubusercontent.com/mlresearch/v267/main/assets/you25d/you25d.pdf"
    ],
    "papers": [
      {
        "title": "Large Language Diffusion Models",
        "url": "https://arxiv.org/html/2502.09992",
        "outcome": "existing",
        "note": "原有 LLaDA 论文，不重复计入。"
      },
      {
        "title": "LLaDA 1.5: Variance-Reduced Preference Optimization for Large Language Diffusion Models",
        "url": "https://aclanthology.org/2026.acl-long.524.pdf",
        "outcome": "confirmed",
        "note": "ACL 正式版和作者项目页的具名脚注均说明第一作者 Fengqi Zhu 在蚂蚁集团实习期间完成此工作；李崇轩与张晓露均同篇署名。"
      },
      {
        "title": "LLaDA-V: Large Language Diffusion Models with Visual Instruction Tuning",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/You_LLaDA-V_Large_Language_Diffusion_Models_with_Visual_Instruction_Tuning_CVPR_2026_paper.html",
        "outcome": "confirmed",
        "note": "2025 年预印本具名脚注把第一作者游泽彬和蚂蚁实习对应；该生本人写明人大博士导师和蚂蚁实习导师。两位导师都列于正式论文。"
      },
      {
        "title": "LLaDA-o: An Effective and Length-Adaptive Omni Diffusion Model",
        "url": "https://arxiv.org/pdf/2603.01068v1",
        "outcome": "confirmed",
        "note": "原文首页把第一作者游泽彬单独标注为在蚂蚁集团实习期间完成工作；其已公开的在读和实习经历显示校内导师与蚂蚁实习导师，二人均为原文作者。"
      },
      {
        "title": "LLaDA-MoE: A Sparse MoE Diffusion Language Model",
        "url": "https://arxiv.org/pdf/2509.24389v1",
        "outcome": "confirmed",
        "note": "原文将处于蚂蚁集团研究实习期的游泽彬列为具名核心贡献者，并列人大与蚂蚁集团双署。学校科研处公开报道指明是两方合作开发的同一项目。游泽彬本人说明实习研究方向和校内导师；同篇通讯作者李建国的主页明确其负责该系列在蚂蚁的研发。"
      },
      {
        "title": "LLaDA MoE v2: Scaling Mixture-of-Experts Diffusion Language Models",
        "url": "https://arxiv.org/pdf/2608.03457v1",
        "outcome": "confirmed",
        "note": "首页具名说明第一作者 Fengqi Zhu 在蚂蚁集团实习期间完成该论文。人大在读和导师见课题组博士生名录；李建国同时在论文署蚂蚁并在本人主页明确列为该项目的技术负责人。"
      },
      {
        "title": "UltraLLaDA: Scaling the Context Length to 128K for Diffusion Large Language Models",
        "url": "https://openreview.net/pdf?id=68DGlhlvD9",
        "outcome": "no-evidence",
        "note": "作者单位为港科大、人大、国科大和上海人工智能实验室，未见本调查口径内企业合作证据。"
      },
      {
        "title": "Improved Large Language Diffusion Models",
        "url": "https://arxiv.org/pdf/2606.25331v1",
        "outcome": "confirmed",
        "note": "具名 Seed 实习脚注、本人学籍与导师、同期企业作者证据齐全。"
      },
      {
        "title": "Consistent Diffusion Language Models",
        "url": "https://arxiv.org/html/2605.00161v1",
        "outcome": "no-evidence",
        "note": "论文标注实习单位为 Microsoft，在本项目企业名单之外。"
      },
      {
        "title": "Effective and Efficient Masked Image Generation Models",
        "url": "https://raw.githubusercontent.com/mlresearch/v267/main/assets/you25d/you25d.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式论文首页在第一作者游泽彬姓名后标注匕首，明确其在蚂蚁集团实习时做了本研究；同篇还有人大导师李崇轩、当时在蚂蚁任职的周俊。"
      }
    ],
    "note": "已按学生实习项目和会议原文逐篇查证一部分书目，未覆盖全部论文。"
  },
  "FbJrKzkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://3s.whu.edu.cn/info/1025/1451.htm",
      "https://xiangyuezhang.com/cv/",
      "https://xiangyuezhang.com/publications/",
      "https://kebii.github.io/data/ZhangJiaxu-CV-2026.pdf",
      "https://kebii.github.io/"
    ],
    "papers": [
      {
        "title": "EchoMask: Speech-Queried Attention-based Mask Modeling for Holistic Co-Speech Motion Generation",
        "url": "https://doi.org/10.1145/3746027.3754847",
        "outcome": "confirmed",
        "note": "履历具名确认是在通义实习的成果。"
      },
      {
        "title": "SemTalk: Holistic Co-speech Motion Generation with Frame-level Semantic Emphasis",
        "url": "https://xiangyuezhang.com/SemTalk/",
        "outcome": "existing",
        "note": "已收录武大与通义的同一论文关系。"
      },
      {
        "title": "Mitigating Error Accumulation in Co-Speech Motion Generation via Global Rotation Diffusion and Multi-Level Constraints",
        "url": "https://arxiv.org/html/2511.10076v1",
        "outcome": "no-evidence",
        "note": "原版未列涂志刚为同篇作者。"
      },
      {
        "title": "StreamTalk: Streaming Co-Speech Gesture Generation with Key-Pose Anchoring",
        "url": "https://arxiv.org/abs/2608.01643",
        "outcome": "no-evidence",
        "note": "原版未列涂志刚为同篇作者。"
      },
      {
        "title": "Skinned Motion Retargeting with Residual Perception of Motion Semantics & Geometry",
        "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Skinned_Motion_Retargeting_With_Residual_Perception_of_Motion_Semantics__CVPR_2023_paper.pdf",
        "year": 2023,
        "outcome": "confirmed",
        "note": "CVPR 正式论文首页具名标注张嘉旭在腾讯实习时完成本研究的大部分工作，与腾讯导师 Junwu Weng 和武汉大学校内导师涂志刚共同署名。"
      },
      {
        "title": "TapMo: Shape-aware Motion Generation of Skeleton-free Characters",
        "url": "https://openreview.net/pdf/eaf38c128dca2c1b7c1287fadcae96f534386467.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "ICLR 正式论文首页注明张嘉旭在腾讯 AI Lab 实习时完成本项研究的大部分工作。该学生的博士简历具名涂志刚，腾讯同篇作者 Shaoli Huang 有同期任职来源。"
      },
      {
        "title": "Generative Motion Stylization of Cross-structure Characters within Canonical Motion Space",
        "url": "https://doi.org/10.1145/3664647.3680864",
        "year": 2024,
        "outcome": "lead",
        "note": "已核实同篇校内导师及腾讯企业合作者；学生对这篇项目的实习归属仍待直接来源。"
      }
    ],
    "note": "先梳理章湘粤公开的相关论文，不代表已覆盖涂志刚的全部论文。"
  },
  "vTC9TSQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/xueguangtao.html",
      "https://news.sjtu.edu.cn/jdyw/20230303/179470.html",
      "https://ruiming-lu.github.io/",
      "https://master-chen-xin-qi.github.io/",
      "https://dblp.org/pid/79/1810.html"
    ],
    "papers": [
      {
        "title": "Perseus: A Fail-Slow Detection Framework for Cloud Storage Systems",
        "url": "https://www.usenix.org/conference/fast23/presentation/lu",
        "outcome": "confirmed",
        "note": "交大同期说明具名导师和阿里云实研；在读实习及企业正式员工证据齐全。其期刊扩展稿并入同一篇。"
      },
      {
        "title": "MasterPlan: A Reinforcement Learning Based Scheduler for Archive Storage",
        "url": "https://doi.org/10.1145/3708542",
        "outcome": "lead",
        "note": "交大导师、阿里云正式署名及在读学生已对应，尚缺明确指向这篇合作的在企实研证明。"
      },
      {
        "title": "How Soon is Now? Preloading Images for Virtual Disks with ThinkAhead",
        "url": "https://www.usenix.org/conference/fast26/presentation/chen",
        "outcome": "no-evidence",
        "note": "学生在阿里云 EBS 团队、导师和企业作者可匹配；原文预加载算法未采用所引机器学习方法，未计入 AI 论文范围。"
      }
    ],
    "note": "按学生论文和正式出版题录部分核查，完整调查期题录仍待核对。"
  },
  "Xrh1OIUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://henglin-liu.github.io/HenglinLiu/",
      "https://github.com/RyanLiu112",
      "https://caip.org.cn/news/detail?id=29199",
      "https://wonderno.github.io/",
      "https://chengyufang.tech/"
    ],
    "papers": [
      {
        "title": "DiverseGRPO: Mitigating Mode Collapse in Image Generation via Diversity-Aware GRPO",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_DiverseGRPO_Mitigating_Mode_Collapse_in_Image_Generation_via_Diversity-Aware_GRPO_CVPR_2026_paper.pdf",
        "outcome": "existing",
        "note": "同篇已在关系索引收录；导师和在快手实研证据已核实，不重复计数。"
      },
      {
        "title": "Attention as a Compass: Efficient Exploration for Process-Supervised RL in Reasoning Models",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/b5758cf47184e79c7e3564a0285b5783-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "ICLR 正式论文首页脚注挂在清华学生 Runze Liu 姓名后，明确在快手实习期间完成；同期本人学术履历列清华硕士学籍。"
      },
      {
        "title": "Realistic Human Motion Generation with Cross-Diffusion Models",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03045.pdf",
        "outcome": "confirmed",
        "note": "ECCV 正式论文首页将第一作者 Zeping Ren 标为腾讯 AI Lab 实习期间完成工作；学生本人主页明确当时在清华大学深圳国际研究生院读硕士。"
      },
      {
        "title": "Photon: Speedup Volume Understanding with Efficient Multimodal Large Language Models",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/633780c1344d0c95e4d2dd3431fe08d9-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "ICLR 正式论文首页具名 Chengyu Fang 与另一作者分别于阿里达摩院实习期间完成本研究。第一作者履历列同期在清华攻读硕士、2025 年 4 月至 2026 年 4 月在达摩院任实习研究员。"
      }
    ],
    "note": "仅核对刘恒林部分合作论文；本调查期完整题录待继续。"
  },
  "n1zDCkQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://tengjiayan20.github.io/",
      "https://criliasmiller.github.io/Kaleido_Project/"
    ],
    "papers": [
      {
        "title": "Kaleido",
        "url": "https://arxiv.org/abs/2510.18573",
        "outcome": "lead",
        "note": "学生具名为项目负责人及导师具名；原文实习脚注未发现可明确适用于该学生。"
      },
      {
        "title": "GFD-OPD",
        "url": "https://arxiv.org/abs/2609.39692",
        "outcome": "lead",
        "note": "学生与导师可对应，尚未找到可归属这一篇的企业实研材料。"
      }
    ],
    "note": "仅核对滕佳言部分合作论文；完整题录待继续。"
  },
  "tnRV5QYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2606.01143",
      "https://azency.github.io/pengboli.github.io/assets/pengbo-li-cv-en.pdf",
      "https://cse.hkust.edu.hk/pg/defenses/F26/plibt-23-10-2026.html",
      "https://facultyprofiles.hkust.edu.hk/profiles.php?profile=kai-chen-kaichen",
      "https://www.liziniu.org/",
      "https://arxiv.org/abs/2606.01143v1",
      "https://openreview.net/forum?id=FPJ4b4JwEE",
      "https://farrenzhang.github.io/",
      "https://arxiv.org/html/2608.29296",
      "https://openreview.net/pdf/ddf5536d927c46b6cd41023605878b3ab046c3b0.pdf"
    ],
    "papers": [
      {
        "title": "PrefixFlow: Training-Time KV Caching for Schedule-Level Prefix Reuse in LLM RL Training",
        "url": "https://arxiv.org/html/2606.01143",
        "outcome": "confirmed",
        "note": "李鹏博的同期简历明确写明，其腾讯混元实习的前缀复用工作产出了这篇第一作者论文。港科大博士资格考核公告标明 Kai Chen 为其导师。原文列李鹏博、Kai Chen 和已于 2026 年 2 月入职腾讯混元任研究科学家的 Ziniu Li 为共同作者。以调查期内公开的预印本计一条。"
      },
      {
        "title": "Canopy: Tree-Aware Rollout Scheduling for Agent Reinforcement Learning",
        "url": "https://openreview.net/forum?id=FPJ4b4JwEE",
        "outcome": "lead",
        "note": "两位港科大学生与校方导师均署名；腾讯同篇作者任职可核，待核对论文致谢或分工是否把至少一位受指导学生的劳动明确连到此次企业研究。"
      },
      {
        "title": "When Do Larger Batches Help Scale LLM Reinforcement Learning?",
        "url": "https://arxiv.org/html/2608.29296",
        "outcome": "no-evidence",
        "note": "作者中有其在读学生，但校方导师 Kai Chen 未署名。"
      },
      {
        "title": "Unlocking Full Efficiency of Token Filtering in Large Language Model Training",
        "url": "https://openreview.net/pdf/ddf5536d927c46b6cd41023605878b3ab046c3b0.pdf",
        "outcome": "no-evidence",
        "note": "学生简历所列研究期为 2025 年 1–10 月，早于李鹏博 2026 年 3 月入职腾讯混元实习。现有论文材料未说明另一位受指导学生在企业完成本研究。"
      }
    ]
  },
  "Jk4vJU8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2510.04204",
      "https://tangzhy.github.io/CV_Zhengyang_Tang.pdf",
      "https://itso.cuhk.edu.cn/en/article/523",
      "https://sds.cuhk.edu.cn/en/teacher/571",
      "https://www.alibabacloud.com/help/en/model-studio/qwen-vl-ocr",
      "https://tangzhy.github.io/",
      "https://arxiv.org/html/2501.05727",
      "https://openreview.net/pdf/67171a4d26bdcd50f955d395efa0276253dc1056.pdf",
      "https://arxiv.org/html/2506.09820",
      "https://arxiv.org/abs/2403.02884",
      "https://arxiv.org/abs/2402.13064",
      "https://arxiv.org/html/2606.17861",
      "https://tongxuluo.github.io/",
      "https://www.liziniu.org/",
      "https://arxiv.org/html/2503.02875",
      "https://1ke-ji.github.io/",
      "https://wabyking.github.io/old",
      "https://tuzhaopeng.github.io/",
      "https://openreview.net/pdf/b261818533917595d3cba6ac4e58c4a6d02409ce.pdf",
      "https://dblp.uni-trier.de/pid/145/1166.html",
      "https://arxiv.org/html/2604.00986"
    ],
    "papers": [
      {
        "title": "CALM Before the STORM: Unlocking Native Reasoning for Optimization Modeling",
        "url": "https://arxiv.org/html/2510.04204",
        "outcome": "confirmed",
        "note": "香港中文大学（深圳）的同篇成果报道写明共同一作 Zhengyang Tang 是王本友指导的在读博士，并正在通义千问团队实习。本人同期简历在通义千问实习项下逐项列出 STORM。论文将王本友与通义千问刘大一恒列为通讯作者。"
      },
      {
        "title": "Self-Evolving Critique Abilities in Large Language Models",
        "url": "https://arxiv.org/html/2501.05727",
        "outcome": "confirmed",
        "note": "Zhengyang Tang 的同期简历将 SCRIT 明确列为在阿里巴巴 Qwen 团队实习时共同开发的框架。香港中文大学（深圳）的公告确认当时博士学籍与王本友的指导；COLM 版同列王本友与阿里巴巴 Qwen 员工刘大一恒。"
      },
      {
        "title": "CoRT: Code-integrated Reasoning within Thinking",
        "url": "https://arxiv.org/html/2506.09820",
        "outcome": "confirmed",
        "note": "Zhengyang Tang 的同期简历写明，在阿里巴巴 Qwen 团队实习的智能体强化学习项目产出 CoRT；学校公告确认在读和王本友的指导。论文标明他为共同一作、王本友为共同作者，以及阿里巴巴 Qwen 的刘大一恒为通讯作者。"
      },
      {
        "title": "MathScale: Scaling Instruction Tuning for Mathematical Reasoning",
        "url": "https://arxiv.org/abs/2403.02884",
        "outcome": "no-evidence",
        "note": "学生、导师和企业工作能够对应，公开来源指向微软亚洲研究院；该企业不在调查范围。"
      },
      {
        "title": "Synthetic Data (Almost) from Scratch: Generalized Instruction Tuning for Language Models",
        "url": "https://arxiv.org/abs/2402.13064",
        "outcome": "no-evidence",
        "note": "学生简历将该项成果列为微软亚洲研究院实习产出；该企业不在调查范围。"
      },
      {
        "title": "GameCraft-Bench: Can Agents Build Playable Games End-to-End in a Real Game Engine?",
        "url": "https://arxiv.org/html/2606.17861",
        "outcome": "lead",
        "note": "腾讯正式研究人员、学校和作者已核对，第一作者亦记录现为腾讯实习；尚无明确说明他在腾讯完成本篇，同时须确认本篇研究期间的校方具体指导身份。"
      },
      {
        "title": "The First Few Tokens Are All You Need: An Efficient and Effective Unsupervised Prefix Fine-Tuning Method for Reasoning Models",
        "url": "https://arxiv.org/html/2503.02875",
        "outcome": "confirmed",
        "note": "论文首页的脚注明确写明冀轲在腾讯 AI Lab 实习期间完成本研究。校方博士导师王本友和腾讯员工涂兆鹏是本篇共同通讯作者。"
      },
      {
        "title": "WebExplorer: Explore and Evolve for Training Long-Horizon Web Agents",
        "url": "https://dblp.uni-trier.de/pid/145/1166.html",
        "outcome": "no-evidence",
        "note": "冀轲参加 MiniMax 同期研究，但王本友未在同篇署名。"
      },
      {
        "title": "Do Phone-Use Agents Respect Your Privacy?",
        "url": "https://arxiv.org/html/2604.00986",
        "outcome": "lead",
        "note": "同篇有腾讯作者；冀轲的腾讯实习在 2025 年 5 月结束，来源没有把他的工作和该篇 2026 年论文的腾讯合作对应。继续核对其他在读作者。"
      }
    ]
  },
  "dW3gcXoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.mlr.press/v306/li26v.html",
      "https://x.com/ZiniuLi/status/1973626847511585267",
      "https://www.liziniu.org/docs/CV_Ziniu_Li.pdf",
      "https://sds.cuhk.edu.cn/en/teacher/214",
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/hyvsmeh7uhobf/sdiff_updated.pdf",
      "https://arxiv.org/html/2509.25849",
      "https://www.liziniu.org/",
      "https://arxiv.org/abs/2510.25741",
      "https://ouro-llm.github.io/",
      "https://arxiv.org/abs/2303.07046"
    ],
    "papers": [
      {
        "title": "Knapsack RL: Compute-Efficient Reinforcement Learning via Heterogeneous Rollout Allocation",
        "url": "https://proceedings.mlr.press/v306/li26v.html",
        "outcome": "confirmed",
        "note": "第一作者李子牛在 2025 年发布本篇时称为在字节跳动 Seed 完成的研究，个人同期简历记载其在 2025 年 5 月起由 Ge Zhang 指导在字节跳动实习并开展在线强化学习论文。原文同列其校方博士导师罗智泉以及字节跳动 Seed 的通讯作者 Ge Zhang。"
      },
      {
        "title": "Scaling Latent Reasoning via Looped Language Models",
        "url": "https://arxiv.org/abs/2510.25741",
        "outcome": "no-evidence",
        "note": "该生在字节跳动实习期间参加了 Ouro 基础模型研究；导师罗智泉未署名本篇。"
      },
      {
        "title": "Deploying Offline Reinforcement Learning with Human Feedback",
        "url": "https://arxiv.org/abs/2303.07046",
        "outcome": "no-evidence",
        "note": "同篇作者和本人简历可核腾讯实习工作，但导师罗智泉未署名本篇。"
      }
    ]
  },
  "0ggsACEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ia.cas.cn/rcdw/yjy/202404/t20240425_7131981.html",
      "https://clqwq.press/",
      "https://dblp.org/pid/81/6575.html",
      "https://ccbr99.cn/2025/keynotes.html",
      "https://houwenpeng.com/index.html",
      "https://jiangllan.github.io/",
      "https://people.ucas.ac.cn/~xiangshiming",
      "https://cqu-student.github.io/",
      "https://lubinfan.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_CC-VQA_Conflict-_and_Correlation-Aware_Method_for_Mitigating_Knowledge_Conflict_in_CVPR_2026_paper.pdf",
      "https://arxiv.org/html/2608.30209v1",
      "https://people.ucas.ac.cn/~gfmeng",
      "https://yannqi.github.io/",
      "https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25at/yang25at.pdf"
    ],
    "papers": [
      {
        "title": "Beyond Next-Token Alignment: Distilling Multimodal Large Language Models via Token Interactions",
        "url": "https://proceedings.mlr.press/v306/chen26gr.html",
        "outcome": "confirmed",
        "note": "同篇实习脚注、学校指导关系、企业任职及三人署名已核对。"
      },
      {
        "title": "Beyond Sequential Distance: Inter-Modal Distance Invariant Position Encoding",
        "url": "https://doi.org/10.1007/978-3-032-37627-5_30",
        "outcome": "confirmed",
        "note": "同篇实习脚注、学校指导关系、企业任职及三人署名已核对。"
      },
      {
        "title": "How Far Are We from Removing the Visual Encoder? Scaling Laws for Encoder-Free Multimodal Pretraining",
        "url": "https://arxiv.org/html/2609.35457",
        "outcome": "confirmed",
        "note": "同篇实习脚注、学校指导关系、企业任职及三人署名已核对。"
      },
      {
        "title": "R-4B: Incentivizing General-Purpose Auto-Thinking Capability in MLLMs via Bi-Mode Annealing and Reinforce Learning",
        "url": "https://arxiv.org/abs/2508.21113",
        "outcome": "lead",
        "note": "CASIA 与腾讯共同署名，彭厚文记有指导齐阳实习。尚未确认向世明是否为齐阳该阶段的校内导师。"
      },
      {
        "title": "CC-VQA: Conflict- and Correlation-Aware Method for Mitigating Knowledge Conflict in Knowledge-Based Visual Question Answering",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_CC-VQA_Conflict-_and_Correlation-Aware_Method_for_Mitigating_Knowledge_Conflict_in_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "原文具名实习脚注，学生个人履历明确在读及学企双方导师。"
      },
      {
        "title": "DICS: Exploring Data Intrinsic Consistency for Visual Instruction Selection",
        "url": "https://arxiv.org/html/2608.30209v1",
        "outcome": "confirmed",
        "note": "原文具名实习脚注，学生个人履历明确在读及学企双方导师。"
      },
      {
        "title": "Knowledge-based Visual Question Answer with Multimodal Processing, Retrieval and Filtering",
        "url": "https://arxiv.org/abs/2510.14605",
        "outcome": "lead",
        "note": "2025 年 10 月预印本早于学生公开履历 12 月阿里实习开始时间，且未找到具名实习脚注或其他项目贡献说明。"
      },
      {
        "title": "BERAG: Bayesian Ensemble Retrieval-Augmented Generation for Knowledge-based Visual Question Answering",
        "url": "https://arxiv.org/abs/2604.22678",
        "outcome": "lead",
        "note": "在读及阿里同期实习可核实，原文尚未找到直接把该学生的实习与该项目对应的依据。"
      },
      {
        "title": "Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger",
        "url": "https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25at/yang25at.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式版首页注明杨奇在阿里巴巴实习期间完成此研究；同篇含校内博士生导师向世明及阿里员工张承灏。"
      }
    ],
    "note": "已查部分学生项目、论文与正式会议，未覆盖全部书目。"
  },
  "qkdvKNoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.tsinghua.edu.cn/info/1122/5712.htm",
      "https://zhuoerfeng.github.io/"
    ],
    "papers": [
      {
        "title": "RAVEL: Reasoning Agents for Validating and Evaluating LLM Text Synthesis",
        "url": "https://arxiv.org/html/2603.00686",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "RLAR: An Agentic Reward System for Multi-task Reinforcement Learning on Large Language Models",
        "url": "https://arxiv.org/html/2603.00724",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "HoWToBench: Holistic Evaluation for LLM’s Capability in Human-level Writing using Tree of Writing",
        "url": "https://aclanthology.org/2026.acl-long.317.pdf",
        "outcome": "confirmed",
        "note": "论文脚注直接核验该学生在企业参加同一研究，另核对导师与企业人员的具名身份。"
      },
      {
        "title": "CritiqueLLM: Towards an Informative Critique Generation Model for Evaluation of Large Language Model Generation",
        "url": "https://aclanthology.org/2024.acl-long.704.pdf",
        "outcome": "lead",
        "note": "学生和导师及在企实研已有材料，尚未核实同篇企业作者在实际研究期间的正式任职。"
      }
    ],
    "note": "先核对具名博士生的部分论文；尚未遍查全部公开发表论文。"
  },
  "rTQ9XoQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2406.02230",
      "https://xiefan-guo.github.io/index.html",
      "https://scse.buaa.edu.cn/info/1131/3219.htm",
      "https://www.icaigc.org/2023.html",
      "https://xiefan-guo.github.io/i4vgen/",
      "https://arxiv.org/html/2507.22604",
      "https://xiefan-guo.github.io/papers.html",
      "https://arxiv.org/html/2404.04650",
      "https://xiefan-guo.github.io/initno/",
      "https://dreamoving.github.io/",
      "https://k-knowledge.kr/srch/read.jsp?id=273309255"
    ],
    "papers": [
      {
        "title": "I4VGen: Image as Free Stepping Stone for Text-to-Video Generation",
        "url": "https://arxiv.org/html/2406.02230",
        "outcome": "confirmed",
        "note": "预印本在第一作者郭谢帆名字旁直接注明阿里巴巴实习，其本人项目页将这项成果列为阿里巴巴智能计算研究工作；本人主页核实北航博士学籍与导师黄迪。具名导师黄迪和阿里巴巴实验室负责人薄列峰都是同篇作者。"
      },
      {
        "title": "ShortFT: Diffusion Model Alignment via Shortcut-based Fine-Tuning",
        "url": "https://arxiv.org/html/2507.22604",
        "outcome": "lead",
        "note": "学生、导师与企业作者已确定；还需找到郭谢帆在阿里巴巴实习期间参与本篇的具名说明。"
      },
      {
        "title": "InitNO: Boosting Text-to-Image Diffusion Models via Initial Noise Optimization",
        "url": "https://arxiv.org/html/2404.04650",
        "outcome": "lead",
        "note": "有同一组阿里巴巴合著人员，但原文没有指明具体学生在阿里巴巴完成本篇研究。"
      },
      {
        "title": "DreaMoving: A Human Video Generation Framework based on Diffusion Models",
        "url": "https://dreamoving.github.io/",
        "outcome": "no-evidence",
        "note": "郭谢帆参与阿里巴巴研究且同项目有专利，但作者列表未列其校方导师黄迪。"
      }
    ]
  },
  "j8K1FqEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/lyk/index.htm",
      "https://keven980716.github.io/",
      "https://ruobingxie.github.io/"
    ],
    "papers": [
      {
        "title": "LaSeR: Reinforcement Learning with Last-Token Self-Rewarding",
        "url": "https://openreview.net/pdf?id=1OhgEmix20",
        "outcome": "confirmed",
        "note": "腾讯实习脚注、博士导师与企业署名相互支持。"
      },
      {
        "title": "Learning beyond Teacher: Generalized On-Policy Distillation with Reward Extrapolation",
        "url": "https://arxiv.org/abs/2602.12125",
        "outcome": "existing",
        "note": "已列关系，Wenkai Yang、谢若冰、林衍凯。"
      },
      {
        "title": "Towards Thinking-Optimal Scaling of Test-Time Compute for LLM Reasoning",
        "url": "https://papers.neurips.cc/paper_files/paper/2025/file/3e22bea3b170f4c2aebb9c48d98ae64d-Paper-Conference.pdf",
        "outcome": "no-evidence",
        "note": "首版未载而正式版载实习脚注，但企业为微软，不在企业调查名单。"
      },
      {
        "title": "Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents",
        "url": "https://arxiv.org/abs/2402.11208",
        "outcome": "lead",
        "note": "与腾讯人员合著，第一作者在同一时期在腾讯实习，尚无这篇为该实习项目的证据。"
      },
      {
        "title": "Distilling Rule-based Knowledge into Large Language Models",
        "url": "https://arxiv.org/abs/2311.08883",
        "outcome": "lead",
        "note": "与腾讯作者合著、日期与实习重合，尚无证据把具体研究指向实习。"
      },
      {
        "title": "Exploring Backdoor Vulnerabilities of Chat Models",
        "url": "https://arxiv.org/abs/2404.02406",
        "outcome": "no-evidence",
        "note": "脚注指第一作者在高校实习，没有企业作者。"
      },
      {
        "title": "DeepCritic: Deliberate Critique with Large Language Models",
        "url": "https://arxiv.org/abs/2505.00662",
        "outcome": "no-evidence",
        "note": "署名未出现调查范围企业员工。"
      }
    ],
    "note": "已核对 Wenkai Yang 列出的部分论文，未完成林衍凯所有论文综排。"
  },
  "pA88bm4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~xphan",
      "https://chenjiawei30.github.io/",
      "https://jw.beijing.gov.cn/gjc/tzgg_15688/202606/t20260615_4700536.html",
      "https://lazyc81.github.io/",
      "https://www.sciencedirect.com/science/article/pii/S2667325826000324",
      "https://proceedings.mlr.press/v267/li25cw.html",
      "https://wenxueru.github.io/",
      "https://people.ucas.ac.cn/~benhe"
    ],
    "papers": [
      {
        "title": "OmniSimulator: Aligning Small Language Models for Authentic Heterogeneous Behavior Modeling",
        "url": "https://arxiv.org/html/2610.29472",
        "outcome": "confirmed",
        "note": "学生本人将该具名项目归快手，且同篇有校内导师和正式员工。"
      },
      {
        "title": "Towards Real-world Human Behavior Simulation: Benchmarking Large Language Models on Long-horizon, Cross-scenario, Heterogeneous Behavior Traces",
        "url": "https://arxiv.org/abs/2604.08362",
        "outcome": "existing",
        "note": "OmniBehavior 已在基线。"
      },
      {
        "title": "Learning from What Users Do Not Say: Self-Evolving Assistants by Internalizing Latent Thoughts",
        "url": "https://chenjiawei30.github.io/",
        "outcome": "lead",
        "note": "本人主页标注为快手项目并具名论文作者，尚未找到可打开的独立论文。"
      },
      {
        "title": "ConsistentChat: Building Skeleton-Guided Consistent Multi-Turn Dialogues for Large Language Models from Scratch",
        "url": "https://arxiv.org/abs/2506.03558",
        "outcome": "no-evidence",
        "note": "首版公开早于 Jiawei Chen 的快手实习，论文没有快手署名。"
      },
      {
        "title": "The Devil Is in the Details: Tackling Unimodal Spurious Correlations for Generalizable Multimodal Reward Models",
        "url": "https://proceedings.mlr.press/v267/li25cw/li25cw.pdf",
        "outcome": "confirmed",
        "note": "国科大李梓超在小红书具名实习；两位校内导师同篇，仅计一种研究成果。"
      },
      {
        "title": "Cheems: A Practical Guidance for Building and Evaluating Chinese Reward Models from Scratch",
        "url": "https://arxiv.org/abs/2502.17173",
        "outcome": "lead",
        "note": "同篇作者有研读范围内导师、同校学生和在任小红书研究员，首版和修订版论文未提具体实习；先保留线索。"
      },
      {
        "title": "Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?",
        "url": "https://openreview.net/notes/edits/attachment?id=8L1kbRDNJY&name=pdf",
        "outcome": "no-evidence",
        "note": "同篇虽有署名，但学生本人只确认何苯为校内导师；本论文已记到何苯，不再按其他同篇作者重复追加。"
      }
    ],
    "note": "已对李梓超和 Xueru Wen 合作论文的部分书目及正式版脚注进行了交叉核查，尚未覆盖全部书目。"
  },
  "F7bvTOEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://hou9612.github.io/",
      "https://ai.ruc.edu.cn/szdw/zrjs/hd/index.htm",
      "https://github.com/GeWu-Lab/WCAE"
    ],
    "papers": [
      {
        "title": "Learning to Predict Advertisement Expansion Moments in Short-Form Video Platforms",
        "url": "https://doi.org/10.1145/3731715.3733372",
        "outcome": "lead",
        "note": "项目感谢三名腾讯员工支持，但致谢人员未署名；第二作者 Kaibing Yang 的身份尚未确认。"
      }
    ],
    "note": "仅核对侯文轩这一条项目线索。"
  },
  "v5LctN8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/srh/index.htm",
      "https://aman-4-real.github.io/",
      "https://yhlleo.github.io/",
      "https://ruc-aimind.github.io/team/",
      "https://alberttan.tech/about/",
      "https://cn.linkedin.com/in/weihang-chen-180a6a2b5",
      "https://github.com/redai-studio",
      "https://ai.ruc.edu.cn/xsjz/index4.htm",
      "https://zhfzhmsra.github.io/",
      "https://aclanthology.org/2024.acl-long.525.pdf"
    ],
    "papers": [
      {
        "title": "DPWriter: Reinforcement Learning with Diverse Planning Branching for Creative Writing",
        "url": "https://aclanthology.org/2026.acl-long.647.pdf",
        "outcome": "confirmed",
        "note": "曹乾、刘亚辉、宋睿华同篇，实习脚注明确。"
      },
      {
        "title": "Evaluating Text Creativity across Diverse Domains: A Dataset and Large Language Model Evaluator",
        "url": "https://arxiv.org/abs/2505.19236",
        "outcome": "lead",
        "note": "同篇有快手作者，但曹乾列快手实习始于 2025 年 6 月，原始公开稿 5 月，无更早研发参与证据。"
      },
      {
        "title": "Think Silently, Think Fast: Dynamic Latent Compression of LLM Reasoning Chains",
        "url": "https://papers.nips.cc/paper_files/paper/2025/file/0706261aedab63814a2b73c32564b4c4-Paper-Conference.pdf",
        "outcome": "no-evidence",
        "note": "论文直接归属小米实习项目；小米不在当前调查名单。"
      },
      {
        "title": "Pair-In, Pair-Out: Latent Multi-Token Prediction for Efficient LLMs",
        "url": "https://arxiv.org/html/2605.27255",
        "outcome": "confirmed",
        "note": "小红书同团队公开 PIPO 原始署名项目与第一作者在该团队实习的证据互证。"
      },
      {
        "title": "Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents",
        "url": "https://arxiv.org/abs/2608.03327",
        "outcome": "no-evidence",
        "note": "学生在小红书团队的合著项目，但其校内导师宋睿华未同篇署名。"
      },
      {
        "title": "Parrot: Enhancing Multi-Turn Instruction Following for Large Language Models",
        "url": "https://aclanthology.org/2024.acl-long.525.pdf",
        "outcome": "confirmed",
        "note": "论文正式版具名实习；大学官方研究生研讨会报道明确写明指导关系。"
      }
    ],
    "note": "核对孙宇冲的部分论文，未遍历教师全部书目。"
  },
  "dZJy8_8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://keg.cs.tsinghua.edu.cn/yuxiao/",
      "https://xiao9905.github.io/AutoGLM/",
      "https://extreme1228.github.io/extreme1228/"
    ],
    "papers": [
      {
        "title": "AgentRL: Scaling Agentic Reinforcement Learning with a Multi-Turn, Multi-Task Framework",
        "url": "https://arxiv.org/pdf/2510.04206",
        "outcome": "confirmed",
        "note": "论文首页具名标注清华学生 Bowen Lv 在智谱实习期间完成此项研究，他的个人履历独立列出该篇项目；同篇作者刘潇的职务由 2025 年大会页面核实。"
      },
      {
        "title": "MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents",
        "url": "https://openreview.net/pdf?id=C3F0G9nXhl",
        "outcome": "confirmed",
        "note": "正式论文首页标明 Yifan Xu 为第一作者，脚注注明在智谱实习时完成部分工作；东昱晓为清华署名通讯作者，刘潇署智谱且任职已独立核实。"
      },
      {
        "title": "AutoGLM: Autonomous Foundation Agents for GUIs",
        "url": "https://arxiv.org/pdf/2411.00820",
        "outcome": "confirmed",
        "note": "作者项目页面具名标记 Yifan Xu 的同一论文实习和清华学籍，清华主页列出导师关系；刘潇是论文第一作者，同时期公开介绍明确称其智谱 AutoGLM 技术负责人。"
      },
      {
        "title": "SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL",
        "url": "https://arxiv.org/pdf/2607.11185v1",
        "outcome": "existing",
        "note": "已有确认证据和同导师记录，不重复计数。"
      }
    ],
    "note": "已核对一部分具名博士生的企业合作工作；完整调查期题录仍待继续。"
  },
  "Pq4Yp_kAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.fudan.edu.cn/c5/46/c30604a443718/page.htm",
      "https://aclanthology.org/people/xipeng-qiu/",
      "https://junzhan2000.github.io/",
      "https://ngc7292.github.io/",
      "https://ngc7292.github.io/en/",
      "https://yinzhangyue.github.io/",
      "https://zhiyuanzeng.github.io/",
      "https://landisen.github.io/"
    ],
    "papers": [
      {
        "title": "VStyle: A Benchmark for Voice Style Adaptation with Spoken Instructions",
        "url": "https://arxiv.org/pdf/2509.09716",
        "outcome": "confirmed",
        "note": "已确认论文、复旦师生关系、实习具名项目与阿里巴巴正式员工任职。"
      },
      {
        "title": "Turn Waste into Worth: Rectifying Top-k Router of MoE",
        "url": "https://aclanthology.org/2024.emnlp-main.739.pdf",
        "outcome": "no-evidence",
        "note": "虽与费朝烨在华为的研究方向相近，此篇仅有复旦与上海人工智能实验室署名；脚注明确指向后者。"
      },
      {
        "title": "World-aware Planning Narratives Enhance Large Vision-Language Model Planner",
        "url": "https://proceedings.nips.cc/paper_files/paper/2025/hash/48992045205729796194da77690a4547-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "作者名单仅见复旦、上海创智学院和上海人工智能实验室。"
      },
      {
        "title": "Rethinking Label Smoothing on Multi-hop Question Answering",
        "url": "https://aclanthology.org/2023.ccl-1.53.pdf",
        "outcome": "lead",
        "note": "复旦共同导师与华为正式署名已核对；尚未找到一名在读同篇学生对此项目的华为实研材料。"
      },
      {
        "title": "Understanding by Reconstruction: Reversing the Software Development Process for LLM Pretraining",
        "url": "https://arxiv.org/pdf/2603.11103",
        "outcome": "confirmed",
        "note": "曾致远为复旦与字节 Seed 联培在读博士；本人主页把此篇标为 SEED 项目，对应其在 Seed Edge 的长上下文合成数据实习方向。原文首页将其列为具名核心贡献者、署复旦及字节 Seed，并列两位导师。"
      },
      {
        "title": "Morphing into Hybrid Attention Models",
        "url": "https://arxiv.org/pdf/2606.30562",
        "outcome": "confirmed",
        "note": "蓝迪森在复旦攻读博士并在字节跳动 Seed 实习；本人主页把本项目列为 Seed 技术报告，原文首页的第一作者脚注明确本工作在字节跳动 Seed 完成。"
      }
    ],
    "note": "按学生个人履历与作者发表记录抽取并核对部分论文；全期题录仍待继续。"
  },
  "e-4LoEcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://doi.org/10.1145/3696630.3728552",
      "https://asc8384.github.io/assets/pdf/Resume_ST.pdf",
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/1fe6f635fe265292aba3987b5123ae3d-Abstract-Conference.html",
      "https://asc8384.github.io/",
      "https://teacher.buaa.edu.cn/08055/zh_CN/index/42647/list/index.htm",
      "https://arxiv.org/html/2505.17104",
      "https://arxiv.org/abs/2406.07436",
      "https://mceval.github.io/",
      "https://aclanthology.org/2024.acl-long.100/"
    ],
    "papers": [
      {
        "title": "BitsAI-CR: Automated Code Review via LLM in Practice",
        "url": "https://doi.org/10.1145/3696630.3728552",
        "outcome": "no-evidence",
        "note": "第一作者简历可以把论文和字节跳动实习相对应，但导师李舟军未署名。"
      },
      {
        "title": "P2P: Automated Paper-to-Poster Generation and Fine-Grained Benchmark",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/1fe6f635fe265292aba3987b5123ae3d-Abstract-Conference.html",
        "outcome": "lead",
        "note": "李舟军在同期仍是北航教师，且为署名通讯作者及该生校方导师。第一作者孙涛同期在字节跳动实习，对这项成果称为 BitsAI-P2P，论文亦列字节跳动署名；简历未明写此项目是该段企业实习成果，继续找项目归属的具体文字。"
      },
      {
        "title": "McEval: Massively Multilingual Code Evaluation",
        "url": "https://arxiv.org/abs/2406.07436",
        "outcome": "no-evidence",
        "note": "公开首版早于孙涛的字节跳动实习，企业研究缺少具名证据。"
      },
      {
        "title": "UniCoder: Scaling Code Large Language Model via Universal Code",
        "url": "https://aclanthology.org/2024.acl-long.100/",
        "outcome": "lead",
        "note": "同篇有导师和在读学生，研究时段与本人美团实习可能重叠。论文作者全部为高校，未找到同篇企业员工或企业项目证据。"
      }
    ]
  },
  "4uE10I0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/pdf/2506.04228",
      "https://sihuiji.github.io/",
      "https://arxiv.org/pdf/2512.14699",
      "https://arxiv.org/html/2506.09995",
      "https://yuanpengtu.github.io/",
      "https://www.ai.hku.hk/index.php/people/academic-staff/hszhao",
      "https://ieeexplore.ieee.org/abstract/document/10559458/authors",
      "https://openreview.net/pdf/8576828492200a77b6a51d1791f2e5e21da22d2c.pdf",
      "https://hub.hku.hk/bitstream/10722/370044/1/content.pdf?accept=1",
      "https://doi.org/10.1145/3721238.3730647",
      "https://arxiv.org/html/2510.13809",
      "https://www.xtao.website/",
      "https://sihuiji.github.io/PhysMaster-Page/",
      "https://arxiv.org/html/2501.02048",
      "https://hub.hku.hk/handle/10722/370046",
      "https://arxiv.org/html/2412.14168",
      "https://arxiv.org/html/2603.21002",
      "https://arxiv.org/html/2506.23690",
      "https://tanshuai0219.github.io/index.html",
      "https://i.cs.hku.hk/~hszhao/lab.html",
      "https://shenyujun.github.io/",
      "https://arxiv.org/html/2601.11096",
      "https://arxiv.org/html/2508.09454",
      "https://arxiv.org/html/2401.10891",
      "https://liheyoung.github.io/",
      "https://ai.hku.hk/news-events/news-and-announcements/two-phd-students-awarded-research-grants-and-scholarship",
      "https://developer.volcengine.com/articles/7389112553802039315",
      "https://depth-anything.github.io/",
      "https://proceedings.neurips.cc/paper_files/paper/2024/file/26cfdcd8fe6fd75cc53e92963a656c58-Paper-Conference.pdf",
      "https://depth-anything-v2.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_Video_Depth_Anything_Consistent_Depth_Estimation_for_Super-Long_Videos_CVPR_2025_paper.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Ding_SURF_Signature-Retained_Fast_Video_Generation_CVPR_2026_paper.pdf",
      "https://kxding.github.io/",
      "https://kxding.github.io/project/SURF/",
      "https://arxiv.org/pdf/2512.16905",
      "https://github.com/KlingAIResearch/Alchemist",
      "https://arxiv.org/pdf/2608.13552",
      "https://kxding.github.io/project/PlayWorld/",
      "https://proceedings.mlr.press/v306/huang26bm.html",
      "https://huangrh99.github.io/",
      "https://wujie1010.github.io/",
      "https://arxiv.org/html/2605.12495v1",
      "https://arxiv.org/abs/2607.11886",
      "https://arxiv.org/html/2607.11886v1",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Tu_Hint2Gen_Bridging_Understanding_and_Generation_via_Code-structured_Hints_CVPR_2026_paper.pdf",
      "https://sg.linkedin.com/in/cypw",
      "https://arxiv.org/abs/2509.20427",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Tu_Temporal_Equilibrium_MeanFlow_Bridging_the_Scale_Gap_for_One-Step_Generation_CVPR_2026_paper.pdf"
    ],
    "papers": [
      {
        "title": "LayerFlow: A Unified Model for Layer-aware Video Generation",
        "url": "https://arxiv.org/pdf/2506.04228",
        "outcome": "existing",
        "note": "已收录。本人主页和作品的具名实习脚注已核对。"
      },
      {
        "title": "MemFlow: Flowing Adaptive Memory for Consistent and Efficient Long Video Narratives",
        "url": "https://arxiv.org/pdf/2512.14699",
        "outcome": "existing",
        "note": "已收录。本人主页和作品的具名实习脚注已核对。"
      },
      {
        "title": "PlayerOne: Egocentric World Simulator",
        "url": "https://arxiv.org/html/2506.09995",
        "outcome": "confirmed",
        "note": "NeurIPS 论文在第一作者 Yuanpeng Tu 处注明论文工作在阿里巴巴达摩院实习期间完成，致谢也确认为达摩院实习项目。其个人主页证实当时学籍及博士导师赵恒爽，论文同列赵恒爽和阿里巴巴员工 Hao Luo。"
      },
      {
        "title": "VideoAnydoor: High-fidelity Video Object Insertion with Precise Motion Control",
        "url": "https://doi.org/10.1145/3721238.3730647",
        "outcome": "confirmed",
        "note": "正式出版原文以具名脚注把第一作者 Yuanpeng Tu 的企业实习对应到本篇，且导师赵恒爽在同一作者表。学生及港大实验室明确具名导师和同期博士在读；企业合著者的正式员工岗位由职业档案或出版社作者简介核实。"
      },
      {
        "title": "PhysMaster: Mastering Physical Representation for Video Generation via Reinforcement Learning",
        "url": "https://arxiv.org/html/2510.13809",
        "outcome": "confirmed",
        "note": "原文注明在快手可灵实习期间完成，第一作者 Sihui Ji 本人主页明确列 2025 年可灵实习及港大博士学籍与导师。赵恒爽和快手可灵员工 Xin Tao 均为本篇作者。"
      },
      {
        "title": "DreamMask: Boosting Open-vocabulary Panoptic Segmentation with Synthetic Data",
        "url": "https://arxiv.org/html/2501.02048",
        "outcome": "no-evidence",
        "note": "同期达摩院实习和校方导师均可核，但原文没有标签指明该研究在达摩院完成，也未找到同篇阿里巴巴员工。"
      },
      {
        "title": "FashionComposer: Compositional Fashion Image Generation",
        "url": "https://hub.hku.hk/handle/10722/370046",
        "outcome": "lead",
        "note": "同篇有港大导师、在读学生及阿里巴巴员工，时间与达摩院实习吻合。所查的预印本没有给出项目实习脚注，需查出版版本。"
      },
      {
        "title": "SURF: Signature-Retained Fast Video Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Ding_SURF_Signature-Retained_Fast_Video_Generation_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "论文首页 † 脚注明确该第一作者的工作在快手可灵团队完成。丁凯欣及港大方面均明确其博士导师赵恒爽且二人同篇署名。在职技术负责人 Xin Tao 同篇署名，个人履历确认直属企业团队。"
      },
      {
        "title": "SynMotion: Semantic-Visual Adaptation for Motion Customized Video Generation",
        "url": "https://arxiv.org/html/2506.23690",
        "outcome": "lead",
        "note": "确有谭帅本人的蚂蚁集团实习脚注、赵恒爽通讯署名及同期员工 Yujun Shen。谭帅本人及港大实验室说明其上海交大学籍，港大将其列为 2025 年起访问博士；未找到跨校共同指导或联合培养的明确依据。"
      },
      {
        "title": "CoDance: An Unbind-Rebind Paradigm for Robust Multi-Subject Animation",
        "url": "https://arxiv.org/html/2601.11096",
        "outcome": "lead",
        "note": "确有谭帅本人的蚂蚁集团实习脚注、赵恒爽通讯署名及同期员工 Yujun Shen。谭帅本人及港大实验室说明其上海交大学籍，港大将其列为 2025 年起访问博士；未找到跨校共同指导或联合培养的明确依据。"
      },
      {
        "title": "Animate-X++: Universal Character Image Animation with Dynamic Backgrounds",
        "url": "https://arxiv.org/html/2508.09454",
        "outcome": "lead",
        "note": "港大师生和蚂蚁员工同篇署名，但未见本项目具名实习说明及同期跨校指导记录；低版本也不能替代扩展论文的证据。"
      },
      {
        "title": "Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data",
        "url": "https://arxiv.org/html/2401.10891",
        "outcome": "confirmed",
        "note": "原论文注明工作在 TikTok 实习期间完成。第一作者 Lihe Yang 的公开学籍、博士导师、字节跳动实习经历均能核实，原文同列导师赵恒爽和字节跳动旗下 TikTok 的在职研究员 Bingyi Kang。"
      },
      {
        "title": "Depth Anything V2",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/26cfdcd8fe6fd75cc53e92963a656c58-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "原论文注明工作在 TikTok 实习期间完成。第一作者 Lihe Yang 的公开学籍、博士导师、字节跳动实习经历均能核实，原文同列导师赵恒爽和字节跳动旗下 TikTok 的在职研究员 Bingyi Kang。"
      },
      {
        "title": "Video Depth Anything: Consistent Depth Estimation for Super-Long Videos",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_Video_Depth_Anything_Consistent_Depth_Estimation_for_Super-Long_Videos_CVPR_2025_paper.pdf",
        "outcome": "no-evidence",
        "note": "这篇后续拓展并未署名赵恒爽或 Lihe Yang，独立于 Depth Anything 两篇。"
      },
      {
        "title": "Alchemist: Unlocking Efficiency in Text-to-Image Model Training via Meta-Gradient Data Selection",
        "url": "https://arxiv.org/pdf/2512.16905",
        "outcome": "confirmed",
        "note": "论文首页 † 脚注明确该第一作者的工作在快手可灵团队完成。丁凯欣及港大方面均明确其博士导师赵恒爽且二人同篇署名。在职技术负责人 Xin Tao 同篇署名，个人履历确认直属企业团队。"
      },
      {
        "title": "PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives",
        "url": "https://arxiv.org/pdf/2608.13552",
        "outcome": "confirmed",
        "note": "论文首页 † 脚注明确该第一作者的工作在快手可灵团队完成。丁凯欣及港大方面均明确其博士导师赵恒爽且二人同篇署名。在职技术负责人 Xin Tao 同篇署名，个人履历确认直属企业团队。"
      },
      {
        "title": "AlphaGRPO: Unlocking Self-Reflective Multimodal Generation in Unified Multimodal Models via Decompositional Verifiable Reward",
        "url": "https://proceedings.mlr.press/v306/huang26bm.html",
        "outcome": "lead",
        "note": "第一作者、导师和字节 Seed 员工同篇署名；第一作者的主页同列项目和 2025 年 9 月入职字节 Seed 研究实习。但目前仅见校方署名，论文未把他的实习工作单独对应到这两篇项目，继续找作者履历、企业公开材料或实验室项目记录。"
      },
      {
        "title": "Read It Back: Pretrained MLLMs Are Zero-Shot Reward Models for Text-to-Image Generation",
        "url": "https://arxiv.org/abs/2607.11886",
        "outcome": "lead",
        "note": "第一作者、导师和字节 Seed 员工同篇署名；第一作者的主页同列项目和 2025 年 9 月入职字节 Seed 研究实习。但目前仅见校方署名，论文未把他的实习工作单独对应到这两篇项目，继续找作者履历、企业公开材料或实验室项目记录。"
      },
      {
        "title": "Hint2Gen: Bridging Understanding and Generation via Code-structured Hints",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Tu_Hint2Gen_Bridging_Understanding_and_Generation_via_Code-structured_Hints_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "正式出版原文以具名脚注把第一作者 Yuanpeng Tu 的企业实习对应到本篇，且导师赵恒爽在同一作者表。学生及港大实验室明确具名导师和同期博士在读；企业合著者的正式员工岗位由职业档案或出版社作者简介核实。"
      },
      {
        "title": "Temporal Equilibrium MeanFlow: Bridging the Scale Gap for One-Step Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Tu_Temporal_Equilibrium_MeanFlow_Bridging_the_Scale_Gap_for_One-Step_Generation_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "正式出版原文以具名脚注把第一作者 Yuanpeng Tu 的企业实习对应到本篇，且导师赵恒爽在同一作者表。学生及港大实验室明确具名导师和同期博士在读；企业合著者的正式员工岗位由职业档案或出版社作者简介核实。"
      }
    ]
  },
  "DDXcKKcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/mjx/index.htm",
      "https://emanual20.github.io/",
      "https://cn.linkedin.com/in/ruidong-han-a3232a148",
      "https://orcid.org/0009-0004-1671-5016",
      "https://pygongnlp.github.io/",
      "https://arxiv.org/pdf/2510.10095"
    ],
    "papers": [
      {
        "title": "Beyond Persuasiveness: A User-Centric Evaluation Framework of Explanations for Food Recommendation",
        "url": "https://link.springer.com/chapter/10.1007/978-3-032-21300-6_41",
        "outcome": "confirmed",
        "note": "ECIR 同篇实习脚注，结合研究期学籍、实习与毕业后变更的署名单位。"
      },
      {
        "title": "Aligning Explanations for Recommendation with Rating and Feature via Maximizing Mutual Information",
        "url": "https://doi.org/10.1145/3627673.3679663",
        "outcome": "lead",
        "note": "与孙一丁的美团实习吻合，同项目具名作者，待确认这篇 CIKM 的公开归属说明。"
      },
      {
        "title": "BaichuanSEED: Sharing the Potential of ExtensivE Data Collection and Deduplication by Introducing a Competitive Large Language Model Baseline",
        "url": "https://arxiv.org/abs/2408.15079",
        "outcome": "no-evidence",
        "note": "孙一丁列百川智能实习，百川不在企业调查名单。"
      },
      {
        "title": "CardRewriter: Leveraging Knowledge Cards for Long-Tail Query Rewriting on Short-Video Platforms",
        "url": "https://arxiv.org/pdf/2510.10095",
        "outcome": "confirmed",
        "note": "论文作者注释点名公培元实习，博士生履历列出校内导师及实名企业实习导师。"
      }
    ],
    "note": "已核对公培元与快手的具名论文，尚未逐篇覆盖全部公开成果。"
  },
  "4tku-lwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://faculty.hust.edu.cn/cgao/zh_CN/more/1104201/jsjjgd/index.htm",
      "https://www.toutiao.com/article/7688899252721943103/",
      "https://www.wangyunhe.site/",
      "https://github.com/ali-vilab/ProMoE",
      "https://filmworld-ai.github.io/"
    ],
    "papers": [
      {
        "title": "UFineBench: Towards Text-based Person Retrieval with Ultra-fine Granularity",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Zuo_UFineBench_Towards_Text-based_Person_Retrieval_with_Ultra-fine_Granularity_CVPR_2024_paper.pdf",
        "outcome": "confirmed",
        "note": "左嘉龙在华为的同篇实习注、校内教师和企业雇员已确认。"
      },
      {
        "title": "PLIP: Language-Image Pre-training for Person Representation Learning",
        "url": "https://arxiv.org/abs/2305.08386",
        "outcome": "lead",
        "note": "同一师生合著，但尚未找出校内导师、企业正式员工与本篇明确企业实习归属三项同证。"
      },
      {
        "title": "FilmWorld: Agentic Novel-to-Film Generation through Dynamic Cinematic World Modeling",
        "url": "https://arxiv.org/abs/2607.19038",
        "outcome": "confirmed",
        "note": "具名项目页和学会活动都能追溯左嘉龙参与的阿里项目，以及同篇指导老师、企业研究人员。"
      }
    ],
    "note": "已核对左嘉龙部分论文，未完成高常鑫的全部题录。"
  },
  "urC8meQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/wxt/index.htm",
      "https://curryxiaohu.github.io/",
      "https://github.com/SKURA502/ProtoTS"
    ],
    "papers": [
      {
        "title": "Unlocking Implicit Experience: Synthesizing Tool-Use Trajectories from Text",
        "url": "https://aclanthology.org/2026.acl-long.452.pdf",
        "outcome": "lead",
        "note": "许志豪在美团 LongCat 实习的同篇脚注和在读材料齐全；未找到王希廷具名为其校内导师的原始来源。"
      },
      {
        "title": "ProtoTS: Learning Hierarchical Prototypes for Explainable Time Series Forecasting",
        "url": "https://arxiv.org/html/2509.23159",
        "outcome": "lead",
        "note": "第一作者在阿里达摩期间研究有具名脚注，王希廷的校内指导角色缺独立证据。"
      },
      {
        "title": "Safe-SAIL: Towards a Fine-grained Safety Landscape of Large Language Models via Sparse Autoencoder Interpretation Framework",
        "url": "https://aclanthology.org/2026.findings-acl.944/",
        "outcome": "lead",
        "note": "有阿里合著；尚不能把任一具体校内学生、指导教师与同篇实习三者绑定。"
      }
    ],
    "note": "核对了若干校企候选，未完成王希廷的全部题录。"
  },
  "Qddov9wAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://lxie.npu-aslp.org/en/",
      "https://dblp.org/pid/25/4011-2.html",
      "https://asru2023.xlog.com.tw/motion.asp?menuid=49654&postid=697219&siteid=1007526"
    ],
    "papers": [
      {
        "title": "MFCCA: Multi-Frame Cross-Channel Attention for Multi-Speaker ASR in Multi-Party Meeting Scenario",
        "url": "https://doi.org/10.1109/SLT54892.2023.10022715",
        "outcome": "confirmed",
        "note": "正式会议论文发表于 2023 年 1 月。论文致谢、同期阿里语音实验室技术报告和学位论文名单可交叉核对。"
      },
      {
        "title": "The Second Multi-Channel Multi-Party Meeting Transcription Challenge (M2MeT 2.0): A Benchmark for Speaker-Attributed ASR",
        "url": "https://asru2023.xlog.com.tw/motion.asp?menuid=49654&postid=697219&siteid=1007526",
        "outcome": "lead",
        "note": "该届于 2023 年底发表，原文列俞帆为阿里达摩院作者；需核对该届研究阶段是否早于毕业，或另找在读参与者。"
      },
      {
        "title": "BA-MoE: Boundary-Aware Mixture-of-Experts Adapter for Code-Switching Speech Recognition",
        "url": "https://arxiv.org/abs/2310.02629",
        "outcome": "lead",
        "note": "校企共同署名。西工大学生是否参与对应的华为研究仍待核对。"
      },
      {
        "title": "An Exploration of Task-Decoupling on Two-Stage Neural Post Filter for Real-Time Personalized Acoustic Echo Cancellation",
        "url": "https://arxiv.org/abs/2310.04715",
        "outcome": "lead",
        "note": "同篇含西工大与字节跳动作者，校内指导和学生参与企业项目的具名证据待查。"
      }
    ],
    "note": "先梳理阿里会议语音项目及部分校企合著。继续核查谢磊的完整论文清单。"
  },
  "EM-l50cAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://zheng-kai.com/",
      "https://thisislegit.github.io/",
      "https://frakeyc.github.io/",
      "https://www.news.uestc.edu.cn/?Id=94073&n=UestcNews.Front.DocumentV2.ArticlePage"
    ],
    "papers": [
      {
        "title": "LEON: A New Framework for ML-Aided Query Optimization",
        "url": "https://www.vldb.org/pvldb/vol16/p2261-chen.pdf",
        "outcome": "lead",
        "note": "论文明确列陈旭在华为云 DWS 实习。本人的硕士、博士导师不同，2023 年项目发生时郑凯是否已指导他仍待直接材料。"
      },
      {
        "title": "BASE: Bridging the Gap between Cost and Latency for Query Optimization",
        "url": "https://www.vldb.org/pvldb/vol16/p1958-chen.pdf",
        "outcome": "lead",
        "note": "原文确认阿里巴巴同篇作者。陈旭个人主页确认在阿里达摩院的经历，该论文和实习的具体对应关系仍待核实。"
      },
      {
        "title": "ESTELLE: An Efficient and Cost-effective Cloud Log Engine",
        "url": "https://doi.org/10.1145/3626246.3653387",
        "outcome": "lead",
        "note": "论文与华为云技术解读确认合作成果；学生的具名指导和参与企业工作的依据待补。"
      },
      {
        "title": "LEON+: towards robust ML-aided query optimization",
        "url": "https://zheng-kai.com/paper/2026_vldbj_chen.pdf",
        "outcome": "lead",
        "note": "需核查论文是哪篇的扩展稿，并核实学生对相应企业工作的参与依据。"
      },
      {
        "title": "A Database-Agnostic Cost Estimator",
        "url": "https://zheng-kai.com/paper/icde_2024_liang.pdf",
        "outcome": "lead",
        "note": "待补学生具体参与企业研究的证据。"
      },
      {
        "title": "DBAgent: An RL-Based Agent for Autonomous Database Operations and Maintenance",
        "url": "https://www.vldb.org/pvldb/vol19/p3928-chen.pdf",
        "outcome": "existing",
        "note": "原文与华为云生产部署材料已被关系索引引用。"
      },
      {
        "title": "Optimizing Block Skipping for High-Dimensional Data with Learned Adaptive Curve",
        "url": "https://doi.org/10.1145/3709710",
        "outcome": "existing",
        "note": "原文明确标注陈旭在华为云实习，电子科大同期公告确认博士生身份。"
      },
      {
        "title": "Efficient High-Dimensional Time Series Forecasting with Transformers: A Channel Reordering Perspective",
        "url": "https://doi.org/10.1145/3774904.3792392",
        "outcome": "existing",
        "note": "原文脚注直接注明方雨晨在字节跳动完成该工作。"
      }
    ],
    "note": "当前优先核对该校数据库优化、时序预测论文，以及学生在读、实习、导师三个时间段。"
  },
  "Hsff1lcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/ZhouZhi",
      "https://warpmatrix.github.io/",
      "https://www.usenix.org/conference/osdi24/poster-session"
    ],
    "papers": [
      {
        "title": "Injecting Adrenaline into LLM Serving: Boosting Resource Utilization and Throughput via Attention Disaggregation",
        "url": "https://arxiv.org/abs/2503.20552",
        "outcome": "existing",
        "note": "已收录中山大学与华为云的关系。"
      },
      {
        "title": "PipeDecode: Efficient LLM Inference using Pipelines within Decoding",
        "url": "https://www.usenix.org/conference/osdi24/poster-session",
        "outcome": "lead",
        "note": "会议官网仅列海报及作者，学生确认博士阶段与华为云左鹏飞研究推理。需补能将特定成果与企业实习对应的独立材料。"
      },
      {
        "title": "Laser: Unlocking Layer-Level Scheduling for Efficient Multi-SLO LLM Serving",
        "url": "https://doi.org/10.1145/3774934.3786413",
        "outcome": "no-evidence",
        "note": "会议正式资料列全体作者为中山大学。现有资料未见调查范围内的企业研究者同篇。"
      }
    ],
    "note": "已核对梁云凯公开发表的部分论文与博士阶段华为云实习，教师完整清单仍待梳理。"
  },
  "s_zdg_IAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/ChenChuan",
      "https://dblp.org/pid/116/8489-1.html",
      "https://github.com/SKYLENAGE-AI/SWE-CI"
    ],
    "papers": [
      {
        "title": "SWE-CI: Evaluating Agent Capabilities in Maintaining Codebases via Continuous Integration",
        "url": "https://arxiv.org/html/2603.03823v1",
        "outcome": "lead",
        "note": "首版明确列陈家龙在阿里巴巴实习完成本项工作，陈川同篇署名。需补陈川对此学生的具名指导依据。"
      }
    ],
    "note": "已核对 SWE-CI 首版署名和实习脚注，继续查陈川的其他论文及具名指导依据。"
  },
  "nGDBb0kAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://faculty.uestc.edu.cn/caishimin/zh_CN/index.htm",
      "https://faculty.swjtu.edu.cn/huzheng12/zh_CN/index.htm",
      "https://kdd2026.kdd.org/papers/"
    ],
    "papers": [
      {
        "title": "Stop Treating Collisions Equally: Qualification-Aware Semantic ID Learning for Recommendation at Industrial Scale",
        "url": "https://arxiv.org/pdf/2603.00632v1",
        "outcome": "lead",
        "note": "可确认胡铮在电子科大就读及在快手完成本项工作；蔡世民在同期另一篇论文指导过该生，但本篇对应指导仍待核实。"
      }
    ],
    "note": "优先梳理胡铮与蔡世民共同署名的推荐系统研究。"
  },
  "mgOYhtoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.nju.edu.cn/_redirect?siteId=391&columnId=18540&articleId=429391",
      "https://www.lamda.nju.edu.cn/yehj/",
      "https://sun-hailong.github.io/",
      "https://www.lamda.nju.edu.cn/zhangyk/",
      "https://www.lamda.nju.edu.cn/jiangjp/",
      "https://hunter-wrynn.github.io/"
    ],
    "papers": [
      {
        "title": "Mitigating Visual Forgetting via Take-along Visual Conditioning for Multi-modal Long CoT Reasoning",
        "url": "https://aclanthology.org/2025.acl-long.257.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Parrot: Multilingual Visual Instruction Tuning",
        "url": "https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25ad/sun25ad.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Wings: Learning Multimodal LLMs without Text-only Forgetting",
        "url": "https://papers.neurips.cc/paper_files/paper/2024/file/3852f6d247ba7deb46e4e4be9e702601-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Multimodal Tabular Reasoning with Privileged Structured Information",
        "url": "https://arxiv.org/pdf/2506.04088",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "OvisOCR: End-to-End Document Parsing via Aligning Specialized Perception with General Reasoning",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/jiang26ag/jiang26ag.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Dissecting Post-Training: Uncovering the Complementary Roles of SFT and RL for Document Parsing",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/jiang26q/jiang26q.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "ZooProbe: A Data Engine for Evaluating, Exploring, and Evolving Large-scale Training Data for Multimodal LLMs",
        "url": "https://openreview.net/pdf/3ac83a695e7603d731a2e40278edaf03209acf13.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "V0: A Generalist Value Model for Any Policy at State Zero",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26hu/zhang26hu.pdf",
        "outcome": "confirmed",
        "note": "张逸凯为南京大学博士生，具名列出 2025 年 12 月至 2026 年 6 月美团 LongCat 实习并由顾奇指导；其主页列此项为本人主导的价值模型。项目在该实习期发布，原文有 LongCat 标识，第一作者署南京大学和美团，同一实习导师顾奇为美团侧通讯作者。"
      },
      {
        "title": "V0.5: Generalist Value Model as a Prior for Sparse RL Rollouts",
        "url": "https://arxiv.org/pdf/2603.10848",
        "outcome": "lead",
        "note": "学生在美团实习及师生关系有具名证据；预印本列顾奇，COLM 正式节目单改列 Xierui Song，后者同期正式任职及署名差异待复核。"
      },
      {
        "title": "Let the LLM Stick to Its Strengths: Learning to Route Economical LLM",
        "url": "https://papers.nips.cc/paper_files/paper/2025/file/305a5630c29aaca434e3415fc4638eb2-Paper-Conference.pdf",
        "outcome": "lead",
        "note": "原文列出南大师生和阿里企业作者，但没有具名实习脚注，尚需该项目和学生在 AIDC 实习的对应材料。"
      },
      {
        "title": "Token-Disentangled Latent Test-Time Scaling for Vision-Language Reasoning",
        "url": "https://aclanthology.org/2026.findings-emnlp.2219.pdf",
        "outcome": "lead",
        "note": "千问团队发布项目代码，通讯作者周梦宇公开列出此论文，马浩轩为论文具名双署名首位核心贡献者；其本人主页和职业档案未公开千问阶段的实习任职详情，暂缺把本人参与同一项目直接归入该企业的材料。"
      }
    ],
    "note": "逐篇核对公开论文及导师、学生、企业任职材料；尚未穷尽调查期内全部题录。"
  },
  "mYJf4TcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.nju.edu.cn/_redirect?siteId=391&columnId=18540&articleId=322030",
      "https://www.lamda.nju.edu.cn/yehj/",
      "https://www.lamda.nju.edu.cn/zhangyk/",
      "https://www.lamda.nju.edu.cn/jiangjp/"
    ],
    "papers": [
      {
        "title": "Wings: Learning Multimodal LLMs without Text-only Forgetting",
        "url": "https://papers.neurips.cc/paper_files/paper/2024/file/3852f6d247ba7deb46e4e4be9e702601-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Multimodal Tabular Reasoning with Privileged Structured Information",
        "url": "https://arxiv.org/pdf/2506.04088",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "OvisOCR: End-to-End Document Parsing via Aligning Specialized Perception with General Reasoning",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/jiang26ag/jiang26ag.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "Dissecting Post-Training: Uncovering the Complementary Roles of SFT and RL for Document Parsing",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/jiang26q/jiang26q.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "ZooProbe: A Data Engine for Evaluating, Exploring, and Evolving Large-scale Training Data for Multimodal LLMs",
        "url": "https://openreview.net/pdf/3ac83a695e7603d731a2e40278edaf03209acf13.pdf",
        "outcome": "confirmed",
        "note": "原文首页的具名实习脚注、校方导师组学生名录及企业作者的职业履历形成同期证据。"
      },
      {
        "title": "V0: A Generalist Value Model for Any Policy at State Zero",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26hu/zhang26hu.pdf",
        "outcome": "confirmed",
        "note": "张逸凯为南京大学博士生，具名列出 2025 年 12 月至 2026 年 6 月美团 LongCat 实习并由顾奇指导；其主页列此项为本人主导的价值模型。项目在该实习期发布，原文有 LongCat 标识，第一作者署南京大学和美团，同一实习导师顾奇为美团侧通讯作者。"
      },
      {
        "title": "V0.5: Generalist Value Model as a Prior for Sparse RL Rollouts",
        "url": "https://arxiv.org/pdf/2603.10848",
        "outcome": "lead",
        "note": "学生在美团实习及师生关系有具名证据；预印本列顾奇，COLM 正式节目单改列 Xierui Song，后者同期正式任职及署名差异待复核。"
      },
      {
        "title": "Let the LLM Stick to Its Strengths: Learning to Route Economical LLM",
        "url": "https://papers.nips.cc/paper_files/paper/2025/file/305a5630c29aaca434e3415fc4638eb2-Paper-Conference.pdf",
        "outcome": "lead",
        "note": "原文列出南大师生和阿里企业作者，但没有具名实习脚注，尚需该项目和学生在 AIDC 实习的对应材料。"
      }
    ],
    "note": "逐篇核对公开论文及导师、学生、企业任职材料；尚未穷尽调查期内全部题录。"
  },
  "XPAkzTEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/pdf/2512.07831",
      "https://jackailab.github.io/",
      "https://researchportal.hkust.edu.hk/en/persons/jiaya-jia/",
      "https://s2025.conference-schedule.org/presenter/?uid=544893",
      "https://arxiv.org/abs/2512.07831",
      "https://jackailab.github.io/Projects/UnityVideo/",
      "https://arxiv.org/pdf/2606.21661",
      "https://arxiv.org/abs/2606.21661",
      "https://jackailab.github.io/Projects/UnityShots/"
    ],
    "papers": [
      {
        "title": "UnityVideo: Unified Multi-Modal Multi-Task Learning for Enhancing World-Aware Video Generation",
        "url": "https://arxiv.org/pdf/2512.07831",
        "outcome": "confirmed",
        "note": "论文首页在第一作者黄杰辉姓名旁标 †，对应脚注明确该工作于其在快手可灵团队实习期间完成。其个人主页证实港科大博士学籍和贾佳亚的指导关系。两位具名同篇作者贾佳亚和快手员工 Xin Tao 分别承担高校指导和企业研究角色。"
      },
      {
        "title": "UnityShots: Memory-Driven Multi-Shot Audio-Video Generation with Boundary-Aware Gating",
        "url": "https://arxiv.org/pdf/2606.21661",
        "outcome": "confirmed",
        "note": "论文首页在第一作者黄杰辉姓名旁标 †，对应脚注明确该工作于其在快手可灵团队实习期间完成。其个人主页证实港科大博士学籍和贾佳亚的指导关系。两位具名同篇作者贾佳亚和快手员工 Xin Tao 分别承担高校指导和企业研究角色。"
      }
    ]
  },
  "lLMX9hcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/pdf/2611.06518",
      "https://mingzhezheng.homes/",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/cqf",
      "https://cn.linkedin.com/in/changlin-li-b00064170",
      "https://github.com/Tencent-Hunyuan/EmoReward",
      "https://arxiv.org/abs/2511.18870",
      "https://arxiv.org/html/2512.20615",
      "https://xuanhuahe.github.io/",
      "https://tianyu-yang.com/",
      "https://www.cqf.io/lab.html",
      "https://xuanhuahe.github.io/ORCA/",
      "https://arxiv.org/pdf/2301.04604v2",
      "https://cse.hkust.edu.hk/pg/defenses/Summer25/jzhubt-22-07-2025.html",
      "https://shenyujun.github.io/",
      "https://iccv2023.thecvf.com/iccv2023.main.conference.program-38--MTE.php",
      "https://arxiv.org/html/2603.21872",
      "https://arxiv.org/html/2309.13956",
      "https://arxiv.org/abs/2603.21872",
      "https://arxiv.org/abs/2412.03603",
      "https://github.com/Tencent-Hunyuan/SAGE-GRPO",
      "https://dungeonmassster.github.io/SAGE-GRPO-Page/",
      "https://github.com/Tencent-Hunyuan/OmniWeaving",
      "https://cqf.io/papers/FateZero_ICCV2023.pdf",
      "https://chenyangqiqi.github.io/data/CV_Chenyang_Qi_2024_0203.pdf",
      "https://vinthony.github.io/academic/",
      "https://openaccess.thecvf.com/content/ICCV2023/html/QI_FateZero_Fusing_Attentions_for_Zero-shot_Text-based_Video_Editing_ICCV_2023_paper.html",
      "https://fate-zero-edit.github.io/",
      "https://arxiv.org/html/2310.19512",
      "https://yingqinghe.github.io/",
      "https://ailab-cvc.github.io/videocrafter1/",
      "https://cse.hkust.edu.hk/event/RTF2024/slides/cqf-VideoSynthesis_Apr_2024.pdf",
      "https://arxiv.org/html/2307.06940",
      "https://arxiv.org/html/2310.07702",
      "https://arxiv.org/html/2406.01900",
      "https://ojs.aaai.org/index.php/AAAI/article/download/28206/28408",
      "https://doi.org/10.1109/ICCV51701.2025.01417",
      "https://bqy.info/",
      "https://cqf.io/lab.html",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Bai_Edicho_Consistent_Image_Editing_in_the_Wild_ICCV_2025_paper.pdf",
      "https://github.com/ant-research/edicho",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_MagicQuill_An_Intelligent_Interactive_Image_Editing_System_CVPR_2025_paper.pdf",
      "https://zliucz.github.io/",
      "https://github.com/ant-research/MagicQuill",
      "https://magicquill.art/",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_MagicQuill_V2_Precise_and_Interactive_Image_Editing_with_Layered_Visual_CVPR_2026_paper.pdf",
      "https://github.com/zliucz/MagicQuillV2",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_MangaNinja_Line_Art_Colorization_with_Precise_Reference_Following_CVPR_2025_paper.pdf",
      "https://felixcheng97.github.io/",
      "https://johanan528.github.io/MangaNinjia/",
      "https://arxiv.org/html/2412.18153",
      "https://github.com/robbyant-research/DepthLab",
      "https://johanan528.github.io/depthlab_web/",
      "https://arxiv.org/html/2605.12496",
      "https://yihao-meng.github.io/CausalCine/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Liu_Dynamic_Typography_Bringing_Text_to_Life_via_Video_Diffusion_Prior_ICCV_2025_paper.pdf"
    ],
    "papers": [
      {
        "title": "EmoReward: Self-Evolving Reward Calibration for Emotional Video Generation RL",
        "url": "https://arxiv.org/pdf/2611.06518",
        "outcome": "confirmed",
        "note": "论文首页分别列港科大博士生郑名哲、其联合导师陈启峰及腾讯混元工程师 Changlin Li。星号明确标在郑名哲姓名旁，说明该篇研究是其腾讯混元实习期间完成的工作。"
      },
      {
        "title": "Active Intelligence in Video Avatars via Closed-loop World Modeling",
        "url": "https://arxiv.org/html/2512.20615",
        "outcome": "confirmed",
        "note": "论文首页在第一作者何炫华姓名处标明美团实习；他和陈启峰的指导关系以及实习日期有作者主页和课题组交叉证实。同篇通讯作者 Tianyu Yang 的研究者主页和论文写明美团任职。"
      },
      {
        "title": "LinkGAN: Linking GAN Latents to Pixels for Controllable Image Synthesis",
        "url": "https://arxiv.org/pdf/2301.04604v2",
        "outcome": "confirmed",
        "note": "ICCV 论文原文在 Jiapeng Zhu 姓名处标出蚂蚁集团实习脚注；2025 年港科大论文答辩公告具名确认其博士导师，同篇作者陈启峰及蚂蚁在职研究员 Yujun Shen 均在首页列名。"
      },
      {
        "title": "Manifold-Aware Exploration for Reinforcement Learning in Video Generation",
        "url": "https://arxiv.org/abs/2603.21872",
        "outcome": "confirmed",
        "note": "腾讯混元团队正式发布项目，在署名旁说明此工作于混元实习期间完成。共同第一作者中，郑名哲明确记录为混元视频模型实习生，在读学校与在校导师陈启峰由本人履历确认；同篇还有混元正式研究人员 Weijie Kong。"
      },
      {
        "title": "In-Domain GAN Inversion for Faithful Reconstruction and Editability",
        "url": "https://arxiv.org/html/2309.13956",
        "outcome": "lead",
        "note": "在读学生、同篇导师及蚂蚁员工署名可确认；未找到该扩展论文的具名企业项目参与记录。"
      },
      {
        "title": "HunyuanVideo 1.5 Technical Report",
        "url": "https://arxiv.org/abs/2511.18870",
        "outcome": "no-evidence",
        "note": "郑名哲的个人介绍及报告贡献章节均具名，但陈启峰和 Harry Yang 未见同篇署名。"
      },
      {
        "title": "FateZero: Fusing Attentions for Zero-shot Text-based Video Editing",
        "url": "https://cqf.io/papers/FateZero_ICCV2023.pdf",
        "outcome": "confirmed",
        "note": "正式论文首页以星号在 Chenyang Qi 项注明腾讯 AI Lab 实习。本人履历确认同期港科大学籍和博士导师陈启峰；陈启峰与当时在腾讯 AI Lab 任职的寸晓东同列为论文通讯作者。"
      },
      {
        "title": "VideoCrafter1: Open Diffusion Models for High-Quality Video Generation",
        "url": "https://arxiv.org/html/2310.19512",
        "outcome": "confirmed",
        "note": "腾讯 AI Lab 的项目页具名列何盈庆为共同第一作者。其主页列本人在腾讯从事视频基础模型研发、所处日期并明确称参与发布 VideoCrafter 1。导师陈启峰在港科大同期报告明确将该具体模型归为腾讯项目，正式技术报告还共同列出陈启峰与在职腾讯研究员寸晓东。"
      },
      {
        "title": "Animate-A-Story: Storytelling with Retrieval-Augmented Video Generation",
        "url": "https://arxiv.org/html/2307.06940",
        "outcome": "lead",
        "note": "何盈庆与在职腾讯研究人员、港科大导师均在同篇署名；此版缺少针对该项目的具名实习或贡献说明。"
      },
      {
        "title": "ScaleCrafter: Tuning-free Higher-Resolution Visual Generation with Diffusion Models",
        "url": "https://arxiv.org/html/2310.07702",
        "outcome": "lead",
        "note": "何盈庆及其他同篇学生可能为腾讯项目贡献者，当前只核对到任职日期和部分双重署名；没有找到公开的具名项目参与说明。"
      },
      {
        "title": "Follow-Your-Emoji: Fine-Controllable and Expressive Freestyle Portrait Animation",
        "url": "https://arxiv.org/html/2406.01900",
        "outcome": "lead",
        "note": "腾讯作者和港科大导师同篇，何盈庆已知同期腾讯实习，未有这个项目的具名企业参与记录。"
      },
      {
        "title": "Follow Your Pose: Pose-Guided Text-to-Video Generation Using Pose-Free Videos",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/28206/28408",
        "outcome": "lead",
        "note": "具名腾讯实习脚注适用于当时在清华的 Yue Ma；该生同期主要导师 Xiu Li 的资格和证据链应另核。港科大何盈庆共同一作，但原文没将脚注附在其姓名处。"
      },
      {
        "title": "Edicho: Consistent Image Editing in the Wild",
        "url": "https://doi.org/10.1109/ICCV51701.2025.01417",
        "outcome": "confirmed",
        "note": "ICCV 正文在第一作者 Qingyan Bai 处加星号，首页脚注明确该工作在蚂蚁实习期间完成；该生主页和实验室资料核实同期师生关系。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "MagicQuill: An Intelligent Interactive Image Editing System",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_MagicQuill_An_Intelligent_Interactive_Image_Editing_System_CVPR_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "学生在本人主页明示领衔该项目，列同期蚂蚁实习和指导教师。正式论文明确获蚂蚁研究实习项目支持，第一作者双重署名，蚂蚁保有具名的官方实现。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "MagicQuill V2: Precise and Interactive Image Editing with Layered Visual Cues",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_MagicQuill_V2_Precise_and_Interactive_Image_Editing_with_Layered_Visual_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "第二代为新增分层处理模块的独立 CVPR 2026 论文。本人的实习履历和项目资料称其领衔第二代，论文致谢明确指出 Ant Group Research Intern Program，记录第一作者双重机构并列出两位指导角色作者。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "MangaNinja: Line Art Colorization with Precise Reference Following",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_MangaNinja_Line_Art_Colorization_with_Precise_Reference_Following_CVPR_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "正式论文致谢分别写明阿里通义和蚂蚁研究实习计划支持；其第二顺位共同一作郑嘉亮在论文和具名项目页署港科大及蚂蚁，与其本人同期蚂蚁实习履历一致。这里核实郑嘉亮及蚂蚁一侧。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "DepthLab: From Partial to Complete",
        "url": "https://arxiv.org/html/2412.18153",
        "outcome": "confirmed",
        "note": "郑嘉亮为共同第一作者，2024 年公开报告和技术项目把他标作港科大与蚂蚁双重署名；蚂蚁研究官方仓库具名发布这一具体模型。本人的实习时间与论文和项目发布一致。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "CausalCine: Real-Time Autoregressive Generation for Multi-Shot Video Narratives",
        "url": "https://arxiv.org/html/2605.12496",
        "outcome": "confirmed",
        "note": "该生履历明确表示参与这篇论文的模型研发，并由本人于 2026 年 5 月列出项目发布；正式论文及作者项目页明确同一研究项目中他以两家机构署名，导师陈启峰与蚂蚁研究全职科研人员Yujun Shen同篇。 蚂蚁同篇共同作者Yujun Shen的公开任职时间覆盖该项目。"
      },
      {
        "title": "Dynamic Typography: Bringing Text to Life via Video Diffusion Prior",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Liu_Dynamic_Typography_Bringing_Text_to_Life_via_Video_Diffusion_Prior_ICCV_2025_paper.pdf",
        "outcome": "lead",
        "note": "Zichen Liu 与蚂蚁的同篇工作明确；博士导师陈启峰只出现在致谢部分，未共同署名。另查共同一作 Yihao Meng 的博士导师 Huamin Qu。"
      }
    ]
  },
  "BBLD3z8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.whu.edu.cn/info/1019/2892.htm",
      "https://www.qihuangzhong.top/",
      "https://www.qihuangzhong.top/publication.html",
      "https://liamding.cc/"
    ],
    "papers": [
      {
        "title": "Knowledge Graph Augmented Network Towards Multiview Representation Learning for Aspect-Based Sentiment Analysis",
        "url": "https://doi.org/10.1109/TKDE.2023.3250499",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "Can ChatGPT Understand Too? A Comparative Study on ChatGPT and Fine-tuned BERT",
        "url": "https://arxiv.org/abs/2302.10198",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "PANDA: Prompt Transfer Meets Knowledge Distillation for Efficient Model Adaptation",
        "url": "https://doi.org/10.1109/TKDE.2024.3376453",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "E2S2: Encoding-Enhanced Sequence-to-Sequence Pretraining for Language Understanding and Generation",
        "url": "https://doi.org/10.1109/TKDE.2023.3341917",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "Revisiting Token Dropping Strategy in Efficient BERT Pretraining",
        "url": "https://aclanthology.org/2023.acl-long.579.pdf",
        "outcome": "existing",
        "note": "该篇已确认；学生本人列两位导师。"
      },
      {
        "title": "Self-Evolution Learning for Discriminative Language Model Pretraining",
        "url": "https://aclanthology.org/2023.findings-acl.254/",
        "outcome": "lead",
        "note": "京东作者与武大博士导师均同篇；需补学生参加这项企业工作的具名证据。"
      },
      {
        "title": "Zero-shot Sharpness-Aware Quantization for Pre-trained Language Models",
        "url": "https://aclanthology.org/2023.emnlp-main.696/",
        "outcome": "lead",
        "note": "已核对武大导师与京东署名。论文投稿和学生实习时间可能重叠，仍需证明学生在京东完成对应项目。"
      },
      {
        "title": "Unified Instance and Knowledge Alignment Pretraining for Aspect-Based Sentiment Analysis",
        "url": "https://doi.org/10.1109/TASLP.2023.3290431",
        "outcome": "lead",
        "note": "两位导师、京东作者均具名；首发时学生尚在京东实习期间，仍需补同一项目的具体参与证据。"
      }
    ],
    "note": "先核对钟起煌在京东探索研究院期间的论文。教师名录所列范围内的完整论文清单还有待梳理。"
  },
  "wN-rIgIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://jszy.whu.edu.cn/liujuhua1/zh_CN/index.htm",
      "https://www.qihuangzhong.top/",
      "https://www.qihuangzhong.top/publication.html",
      "https://liamding.cc/"
    ],
    "papers": [
      {
        "title": "Knowledge Graph Augmented Network Towards Multiview Representation Learning for Aspect-Based Sentiment Analysis",
        "url": "https://doi.org/10.1109/TKDE.2023.3250499",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "Can ChatGPT Understand Too? A Comparative Study on ChatGPT and Fine-tuned BERT",
        "url": "https://arxiv.org/abs/2302.10198",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "PANDA: Prompt Transfer Meets Knowledge Distillation for Efficient Model Adaptation",
        "url": "https://doi.org/10.1109/TKDE.2024.3376453",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "E2S2: Encoding-Enhanced Sequence-to-Sequence Pretraining for Language Understanding and Generation",
        "url": "https://doi.org/10.1109/TKDE.2023.3341917",
        "outcome": "confirmed",
        "note": "原文有具名实习脚注；现有期刊版与预印本按同篇统计。"
      },
      {
        "title": "Revisiting Token Dropping Strategy in Efficient BERT Pretraining",
        "url": "https://aclanthology.org/2023.acl-long.579.pdf",
        "outcome": "existing",
        "note": "该篇已确认；学生本人列两位导师。"
      },
      {
        "title": "Self-Evolution Learning for Discriminative Language Model Pretraining",
        "url": "https://aclanthology.org/2023.findings-acl.254/",
        "outcome": "lead",
        "note": "京东作者与武大博士导师均同篇；需补学生参加这项企业工作的具名证据。"
      },
      {
        "title": "Zero-shot Sharpness-Aware Quantization for Pre-trained Language Models",
        "url": "https://aclanthology.org/2023.emnlp-main.696/",
        "outcome": "lead",
        "note": "已核对武大导师与京东署名。论文投稿和学生实习时间可能重叠，仍需证明学生在京东完成对应项目。"
      },
      {
        "title": "Unified Instance and Knowledge Alignment Pretraining for Aspect-Based Sentiment Analysis",
        "url": "https://doi.org/10.1109/TASLP.2023.3290431",
        "outcome": "lead",
        "note": "两位导师、京东作者均具名；首发时学生尚在京东实习期间，仍需补同一项目的具体参与证据。"
      }
    ],
    "note": "先核对钟起煌在京东探索研究院期间的论文。教师名录所列范围内的完整论文清单还有待梳理。"
  },
  "DC5FEjoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.nju.edu.cn/zlj/",
      "https://www.lamda.nju.edu.cn/yangwh/",
      "https://www.lamda.nju.edu.cn/wangyb/"
    ],
    "papers": [
      {
        "title": "Not All Embeddings are Created Equal: Towards Robust Cross-domain Recommendation via Contrastive Learning",
        "url": "https://ai.nju.edu.cn/zlj/pdf/WWW-2024-Yang.pdf",
        "outcome": "confirmed",
        "note": "在读博士的校方主页将具体论文与阿里实习成果明确对应。原文列导师及由独立职业资料核实的阿里算法工程师。"
      },
      {
        "title": "Towards Unbiased Information Extraction and Adaptation in Cross-Domain Recommendation",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/33391/35546",
        "outcome": "confirmed",
        "note": "原文具名实习脚注、学生校方履历的项目与导师、企业作者的任职记载互相印证。"
      },
      {
        "title": "Advancing Tool-Augmented Large Language Models: Integrating Insights from Errors in Inference Trees",
        "url": "https://papers.nips.cc/paper_files/paper/2024/file/c0f7ee1901fef1da4dae2b88dfd43195-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "会议原文的具名实习脚注与校方博士生导师信息、阿里同期公开员工履历均已核对。"
      },
      {
        "title": "Deep But Reliable: Advancing Multi-turn Reasoning for Thinking with Images",
        "url": "https://arxiv.org/pdf/2512.17306",
        "outcome": "confirmed",
        "note": "原文具名实习脚注、学生校方履历所列项目和导师及企业作者的任职吻合。"
      },
      {
        "title": "Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization",
        "url": "https://arxiv.org/pdf/2602.13653",
        "outcome": "confirmed",
        "note": "王一博为南京大学在读博士，原文第一作者脚注明确在阿里巴巴实习期间完成该 Ovis 项目。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "djdBwxwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.nju.edu.cn/_redirect?siteId=391&columnId=18540&articleId=321868",
      "https://www.lamda.nju.edu.cn/sunh/"
    ],
    "papers": [
      {
        "title": "MDP3: A Training-free Approach for List-wise Frame Selection in Video-LLMs",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Sun_MDP3_A_Training-free_Approach_for_List-wise_Frame_Selection_in_Video-LLMs_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "学生主页明确具名指定其在阿里实习期间对该论文的贡献及博士生导师，会议原文与独立员工履历一致。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "nSlIK18AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.edu.cn/~geyang_ia",
      "https://tangyuxing.github.io/index.html",
      "https://www.cs.jhu.edu/~lelu/",
      "https://papers.miccai.org/miccai-2025/paper/0082_paper.pdf",
      "https://papers.nips.cc/paper_files/paper/2025/file/2456a42386e445ba884511aa17ca4a30-Paper-Conference.pdf",
      "https://yanfeng-zhou.github.io/",
      "https://dblp.org/pid/348/9667.html",
      "https://dblp.org/pid/48/4561-2.html",
      "https://orcid.org/0000-0001-6176-3130",
      "https://orcid.org/0000-0003-1154-2895",
      "https://cbmi-group.github.io/publications.html",
      "https://openreview.net/profile?id=~Shangwu_Feng1"
    ],
    "papers": [
      {
        "title": "Dual-Res Tandem Mamba-3D: Bilateral Breast Lesion Detection and Classification on Non-contrast Chest CT",
        "url": "https://papers.nips.cc/paper_files/paper/2025/file/2456a42386e445ba884511aa17ca4a30-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "正式论文将达摩院实习脚注直接标给周嘉恒，学校公开列杨戈为导师，企业研究人员同篇署名。"
      },
      {
        "title": "Opportunistic Osteoporosis Diagnosis via Texture-Preserving Self-Supervision, Mixture of Experts and Multi-Task Integration",
        "url": "https://papers.miccai.org/miccai-2025/paper/0082_paper.pdf",
        "outcome": "lead",
        "note": "已有论文、导师和企业证据；论文仅致谢阿里研究实习计划，未具名把黄家兴本人连到该项实习，保留线索。"
      },
      {
        "title": "Mamba-3D as Masked Autoencoders for Accurate and Data-Efficient Analysis of Medical Ultrasound Videos",
        "url": "https://arxiv.org/html/2503.20258v1",
        "outcome": "lead",
        "note": "同组师生和达摩院员工同篇；公开稿未发现把周嘉恒或周岩峰的实习与这一篇绑定。"
      },
      {
        "title": "MaRS: A Fast Sampler for Mean Reverting Diffusion Based on ODE and SDE Solvers",
        "url": "https://openreview.net/pdf/bc06d66af9a37a8dbca8de65f9cbe7ae98f26b65.pdf",
        "outcome": "lead",
        "note": "实习计划支持及导师、企业同时确认；国科大双共同一作中仅李奥是该教师名单中的学生，致谢未明确是哪位学生参与实习。"
      },
      {
        "title": "Representing Topological Self-Similarity Using Fractal Feature Maps for Accurate Segmentation of Tubular Structures",
        "url": "https://arxiv.org/html/2407.14754",
        "outcome": "lead",
        "note": "有达摩院合作者和明确在读师生；本篇未发现学生实习说明。"
      },
      {
        "title": "Towards a Comprehensive, Efficient and Promptable Anatomic Structure Segmentation Model using 3D Whole-body CT Scans",
        "url": "https://arxiv.org/abs/2403.15063",
        "outcome": "no-evidence",
        "note": "可用于证实在读的黄家兴在阿里达摩院项目中的身份，但本人导师杨戈未在本篇作者名单。"
      },
      {
        "title": "nnWNet: Rethinking the Use of Transformers in Biomedical Image Segmentation and Calling for a Unified Evaluation Benchmark",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Zhou_nnWNet_Rethinking_the_Use_of_Transformers_in_Biomedical_Image_Segmentation_CVPR_2025_paper.html",
        "outcome": "no-evidence",
        "note": "杨戈指导的周岩峰署名达摩院并有实习计划致谢；杨戈未在本篇署名。"
      },
      {
        "title": "Benchmarking the Scientific Mind: A Pathology-Derived Biomedical VQA Benchmark for Complex Scientific Reasoning",
        "url": "https://proceedings.mlr.press/v306/zhao26ac.html",
        "outcome": "no-evidence",
        "note": "已核对论文作者与代码；作者名单含教师与该导师学生周嘉恒，但未发现同篇企业实习证据。"
      },
      {
        "title": "Diffusion prior-based zero-shot denoising for real-world fluorescence microscopy images via encoder-decoder guided sampling",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12795429/",
        "outcome": "no-evidence",
        "note": "校方和项目页列三位作者；未发现企业作者或同篇实习说明。"
      },
      {
        "title": "Endoplasmic reticulum junctions serve as a platform for endosome-lysosome interactions through their stop-and-go motion switching",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12442848/",
        "outcome": "no-evidence",
        "note": "对照期刊作者及贡献部分，单位为科研院所、高校与实验室，未见范围内企业参与。"
      },
      {
        "title": "Blaze3DM: Integrating Triplane Representation with Diffusion for Solving 3D Inverse Problems in Medical Imaging",
        "url": "https://arxiv.org/html/2405.15241",
        "outcome": "no-evidence",
        "note": "原文作者列中科院、国科大及高校，未见范围内企业作者或实习说明。"
      },
      {
        "title": "IYNet: Asymmetric Multi-Input Network with Wavelet-Driven LF/HF Perturbation for Semi-Supervised Biomedical Image Segmentation",
        "url": "https://openreview.net/pdf?id=5qjAJkeUmS",
        "outcome": "no-evidence",
        "note": "现已打开 BIBM 正式版。三位作者仅署中科院自动化所和国科大；冯尚武公开履历列杨戈为导师，未见任何范围内企业作者。"
      },
      {
        "title": "SATO: Straighten Any 3D Tubular Object",
        "url": "https://pubmed.ncbi.nlm.nih.gov/40392649/",
        "outcome": "no-evidence",
        "note": "核对正式索引及作者项目页；未找到范围内企业署名或在读学生在企业完成本篇的记录。"
      },
      {
        "title": "A semi-supervised fracture-attention model for segmenting tubular objects with improved topological connectivity",
        "url": "https://doi.org/10.1093/bioinformatics/btaf013",
        "outcome": "no-evidence",
        "note": "已核对四位论文署名及项目页；未找到同篇企业和实习佐证。"
      },
      {
        "title": "DeepETPicker: Fast and accurate 3D particle picking for cryo-electron tomography using weakly supervised deep learning",
        "url": "https://www.nature.com/articles/s41467-024-46041-0",
        "outcome": "no-evidence",
        "note": "正式稿署中科院、国科大和生物医学公共实验室，未列范围内企业。"
      },
      {
        "title": "Accurate segmentation of intracellular organelle networks using low-level features and topological self-similarity",
        "url": "https://academic.oup.com/bioinformatics/article/40/10/btae559/7762635",
        "outcome": "no-evidence",
        "note": "按正式稿作者及机构核对，未见范围内企业参与或具名实习。"
      },
      {
        "title": "GeneCompass: deciphering universal gene regulatory mechanisms with a knowledge-informed cross-species foundation model",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11615217/",
        "outcome": "no-evidence",
        "note": "正式稿列的 14 种单位地址为中科院体系和高校，未见范围内企业单位。"
      },
      {
        "title": "Stay in touch with the endoplasmic reticulum",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38212460/",
        "outcome": "no-evidence",
        "note": "校方书目和正式索引是同一条；作者机构未见范围内企业。"
      },
      {
        "title": "Physical Contacts Between Mitochondria and WPBs Participate in WPB Maturation",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37942609/",
        "outcome": "no-evidence",
        "note": "已核对论文索引，未找到同篇实习证据。"
      },
      {
        "title": "SCTS: Instance Segmentation of Single Cells Using a Transformer-Based Semantic-Aware Model and Space-Filling Augmentation",
        "url": "https://openaccess.thecvf.com/content/WACV2023/html/Zhou_SCTS_Instance_Segmentation_of_Single_Cells_Using_a_Transformer-Based_Semantic-Aware_WACV_2023_paper.html",
        "outcome": "no-evidence",
        "note": "按正式场刊作者及作者项目资料核对，未发现范围内三方关系证据。"
      },
      {
        "title": "Improving Generalization of Adversarial Training via Robust Critical Fine-Tuning",
        "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhu_Improving_Generalization_of_Adversarial_Training_via_Robust_Critical_Fine-Tuning_ICCV_2023_paper.pdf",
        "outcome": "no-evidence",
        "note": "正式稿中的企业单位是 Microsoft Research，目前不在企业名单。"
      },
      {
        "title": "Longitudinal real world correlation study of blood pressure and novel features of cerebral magnetic resonance angiography by artificial intelligence analysis on elderly cognitive impairment",
        "url": "https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2023.1121152/full",
        "outcome": "no-evidence",
        "note": "期刊作者单位为医院、科研院所等。未见范围内企业科研实习。"
      },
      {
        "title": "XNet: Wavelet-Based Low and High Frequency Fusion Networks for Fully- and Semi-Supervised Semantic Segmentation of Biomedical Images",
        "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhou_XNet_Wavelet-Based_Low_and_High_Frequency_Fusion_Networks_for_Fully-_ICCV_2023_paper.pdf",
        "outcome": "no-evidence",
        "note": "正式稿企业为 BioMap Research，目前不在企业名单。"
      },
      {
        "title": "XNet v2: Fewer Limitations, Better Results and Greater Universality",
        "url": "https://arxiv.org/abs/2409.00947",
        "outcome": "no-evidence",
        "note": "作者项目资料和论文页面未找到企业实习与本篇的对应证据。"
      },
      {
        "title": "Confidence-aware dual-consistency and pixel-sampled dual-contrastive learning for semi-supervised biomedical image segmentation",
        "url": "https://doi.org/10.1016/j.neucom.2025.132422",
        "outcome": "no-evidence",
        "note": "逐项查出版方作者贡献，三位作者；单位均国科大/中科院，没有企业作者。"
      },
      {
        "title": "AI-driven Large-scale Electron Microscopy enables Whole-tissue Subcellular Digitization",
        "url": "https://doi.org/10.21203/rs.3.rs-9065308/v1",
        "outcome": "no-evidence",
        "note": "arXiv:2511.02860 与 Research Square 是同篇；后者全文十人署高校、医院和科研院所。"
      },
      {
        "title": "Benchmarking robustness of deep neural networks in semantic segmentation of fluorescence microscopy images",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39164632/",
        "outcome": "no-evidence",
        "note": "正式索引三位作者，均列高校、科研院所。"
      },
      {
        "title": "Universal Transformer-Based Tracker for Accurate Tracking of Particles and Cells in Microscopy",
        "url": "https://doi.org/10.1101/2025.05.09.653028",
        "outcome": "no-evidence",
        "note": "bioRxiv 原文三名作者均为国科大或中科院自动化所。"
      },
      {
        "title": "Multi-Volume Isotropic Super-Resolution Wrist MRI Using Fourier-Guided Implicit Fusion",
        "url": "https://doi.org/10.1109/ISBI60581.2025.10980917",
        "outcome": "no-evidence",
        "note": "IEEE ISBI 官方技术日程完整列出共同作者，都是华北医院、研究机构及高校。"
      },
      {
        "title": "Artificial Intelligence-Enhanced Quantitative 3D Analysis of Distal Radioulnar Ligament Insertion Footprints of the Triangular Fibrocartilage Complex With Interactive Validation",
        "url": "https://doi.org/10.1111/os.70231",
        "outcome": "no-evidence",
        "note": "Wiley 全文作者单位、作者贡献和致谢均未见范围内企业。"
      },
      {
        "title": "GobletNet: Wavelet-Based High-Frequency Fusion Network for Semantic Segmentation of Electron Microscopy Images",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39365717/",
        "outcome": "no-evidence",
        "note": "按 IEEE DOI 与作者代码核对实现和共同作者，尚未发现相关企业研究。"
      },
      {
        "title": "DUET: Dual-Domain Unification with Error-Aware Trajectory for Low-Dose CT Reconstruction",
        "url": "https://dblp.org/rec/conf/ijcnn/QuFZY26",
        "outcome": "lead",
        "note": "四作者可核对，IEEE 正式全文未能公开访问，未证实企业参与，待补。"
      },
      {
        "title": "AngioDiff: Structure-Preserving and 3D-Consistent Diffusion for CT Angiography Synthesis",
        "url": "https://doi.org/10.1109/BIBM66473.2025.11356786",
        "outcome": "lead",
        "note": "BIBM 四作者含国科大导师和达摩院合作者；尚未打开全文及具名学生项目资料，保留待核线索。"
      }
    ],
    "note": "已对照校方近年出版信息、DBLP、ORCID、作者小组与学生书目，核对可获得的正式版和预印本；两项 IEEE 正式版待补，若干校企联名缺学生同篇贡献说明，仍记部分梳理。"
  },
  "wn9hc6UAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://jszy.whu.edu.cn/liyansheng",
      "https://github.com/kang-wu",
      "https://image-1305984033.cos.ap-nanjing.myqcloud.com/pdf/resume.pdf",
      "https://www.wangfaye.cn/scholar/",
      "https://dblp.org/pid/133/4525-1.html"
    ],
    "papers": [
      {
        "title": "A semantic-enhanced multi-modal remote sensing foundation model for Earth observation",
        "url": "https://www.nature.com/articles/s42256-025-01078-8",
        "outcome": "confirmed",
        "note": "武汉大学确认该版是与蚂蚁集团共同研发的后续模型，提供语义增强与无微调部署。原文及武汉大学同期报道具名列武康为在读博士和共同第一作者，校方李彦胜和企业陈景东为同篇通讯作者。"
      },
      {
        "title": "SkySense-VITA: Towards Universal In-context Segmentation of Multi-modal Remote Sensing Imagery",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wu_SkySense-VITA_Towards_Universal_In-context_Segmentation_of_Multi-modal_Remote_Sensing_Imagery_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式论文首页在武康和罗俊伟两人署名处标注蚂蚁集团实习。本项研究有具名的核心作者、武大导师李彦胜，以及同篇蚂蚁研究者陈景东。其任务为多模态遥感图像上下文分割。"
      },
      {
        "title": "Learning to reason over multi-granularity knowledge graph for zero-shot urban land-use mapping",
        "url": "https://doi.org/10.1016/j.rse.2025.114961",
        "outcome": "confirmed",
        "note": "王宇自述在蚂蚁参与知识图谱与多模态城市功能分类项目，该项目产出在蚂蚁的风控模型中使用。其履历单列对应论文，原文将王宇、校内硕士导师李彦胜与蚂蚁研究者陈景东列为同篇作者。企业研究经历与武大在读硕士阶段重叠。"
      },
      {
        "title": "Urban Socio-Semantic Segmentation with Vision-Language Reasoning",
        "url": "https://openreview.net/pdf/ada44556555b1122d047de155b2bf82fa4d8ba9d.pdf",
        "outcome": "confirmed",
        "note": "原文首页明确列王宇在阿里高德实习期间完成本项工作，其简历列在读时间与同名项目。论文署名中同时有武大硕士导师李彦胜及高德在职研究者初祥祥。"
      },
      {
        "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
        "url": "https://arxiv.org/pdf/2610.18356",
        "outcome": "confirmed",
        "note": "王宇的履历明确把 Urbex 列为 2025 年 5 月至 2026 年 5 月在阿里做的项目，此阶段他在武汉大学读硕士。论文虽在毕业后公开，仍按项目发生在读期间考核；原文列他与同篇武大导师李彦胜、高德员工初祥祥。"
      },
      {
        "title": "SkySense: A Multi-Modal Remote Sensing Foundation Model Towards Universal Interpretation for Earth Observation Imagery",
        "url": "https://arxiv.org/abs/2312.10115",
        "outcome": "existing",
        "note": "首个 SkySense 版本已收录，后续各自按独立发表成果核对。"
      },
      {
        "title": "SkySense V2: A Unified Foundation Model for Multi-modal Remote Sensing",
        "url": "https://arxiv.org/abs/2507.13812",
        "outcome": "lead",
        "note": "原文明示三方同篇，武康对本篇企业项目的具名参与依据仍待复核。"
      },
      {
        "title": "SkySenseGPT: A Fine-Grained Instruction Tuning Dataset and Model for Remote Sensing Vision-Language Understanding",
        "url": "https://arxiv.org/abs/2406.10100",
        "outcome": "lead",
        "note": "原文署武大、蚂蚁，未见具名证据说明在读学生参与这项企业研究。"
      },
      {
        "title": "Unleashing the potential of remote sensing foundation models via bridging data and computility islands",
        "url": "https://doi.org/10.1016/j.xinn.2025.100841",
        "outcome": "lead",
        "note": "武大原始报道核实共同研发，仍需核对学生在具体项目中的具名参与。"
      }
    ],
    "note": "已核对部分武大—蚂蚁遥感成果与王宇在读期间的企业项目。此前未核对的论文仍需逐篇检查。"
  },
  "QePM4u8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://saids.ustc.edu.cn/2022/0317/c36359a549216/page.htm",
      "https://whi497.github.io/leaf.github.io/",
      "https://cn.linkedin.com/in/yiyan-xu-617165355/zh-cn",
      "https://baiyimeng.github.io/",
      "https://hexiangnan.github.io/papers/tkde25-CoLLM.pdf"
    ],
    "papers": [
      {
        "title": "CAST: Game Solvers as Turn-Level Teachers for LLM Agents",
        "url": "https://arxiv.org/pdf/2607.25308",
        "outcome": "confirmed",
        "note": "Ziang Ye 的个人学术主页将 CAST 具名列于 2026 年起在美团 LongCat 的实习成果，并说明其研究内容；发表时在中国科学技术大学读研。"
      },
      {
        "title": "Look Before You Leap: Autonomous Exploration for LLM Agents",
        "url": "https://arxiv.org/pdf/2605.16143",
        "outcome": "confirmed",
        "note": "Ziang Ye 为中国科学技术大学在读硕士，个人学术主页将这个项目具名列在美团 LongCat 实习成果中；原文第一作者脚注也直接写明研究完成于美团实习。"
      },
      {
        "title": "UniCustom: Unified Visual Conditioning for Multi-Reference Image Generation",
        "url": "https://arxiv.org/pdf/2605.12088",
        "outcome": "confirmed",
        "note": "Yiyan Xu 为中国科学技术大学在读研究生；原文及本人项目主页的共同作者脚注均明确指出其于快手可灵团队实习期间完成研究。"
      },
      {
        "title": "MAP: A Map-then-Act Paradigm for Long-Horizon Interactive Agent Reasoning",
        "url": "https://arxiv.org/pdf/2605.13037",
        "outcome": "lead",
        "note": "学生个人主页明确列为 LongCat 实习成果，美团员工具名；冯福利不在原文作者名单。尚未确认另一位署名高校教师与同篇实习学生的同期具名指导关系。"
      },
      {
        "title": "Travel Back To Move Forward: Retrospective Exploration and Evolving for Long Horizon Agents",
        "url": "https://arxiv.org/pdf/2610.13058",
        "outcome": "lead",
        "note": "原文具名实习脚注及学生个人学术履历确认冯福利的指导。美团署名作者 Xierui Song 的独立同期正式任职证据尚待补足；原文列顾奇的邮箱，但顾奇未列于该版本作者名单。"
      },
      {
        "title": "ReList: A Multi-objective Reasoning Framework for Diversified Listwise Query Recommendation",
        "url": "https://aclanthology.org/2026.acl-industry.97.pdf",
        "outcome": "lead",
        "note": "原文具名美团实习脚注且有正式员工，尚无可直接确认 Shuxian Bi 同期硕博学籍和正式导师的材料。"
      },
      {
        "title": "Personalized Image Generation with Large Multimodal Models",
        "url": "https://staff.ustc.edu.cn/~hexn/papers/www25-Pigeon.pdf",
        "outcome": "lead",
        "note": "第一作者与冯福利具名导师关系及美团研究者可核验，原文仅给出企业合作者，缺第一作者参与美团该项目的独立证据。"
      },
      {
        "title": "Leveraging Watch-time Feedback for Short-Video Recommendations: A Causal Labeling Framework",
        "url": "https://arxiv.org/pdf/2306.17426",
        "outcome": "confirmed",
        "note": "Yimeng Bai 在中国科学技术大学攻读博士，个人学术主页具名记录 2022 年 12 月至 2024 年 8 月赴快手实习。原文在 Yimeng Bai 署名下以星号明示该项工作在快手完成，同篇也列出其具名企业实习导师 Jing Lu。"
      },
      {
        "title": "LabelCraft: Empowering Short Video Recommendations with Automated Label Crafting",
        "url": "https://arxiv.org/pdf/2312.10947",
        "outcome": "confirmed",
        "note": "Yimeng Bai 在中国科学技术大学攻读博士，个人学术主页具名记录 2022 年 12 月至 2024 年 8 月赴快手实习。原文在 Yimeng Bai 署名下以星号明示该项工作在快手完成，同篇也列出其具名企业实习导师 Jing Lu。"
      },
      {
        "title": "GradCraft: Elevating Multi-task Recommendations through Holistic Gradient Crafting",
        "url": "https://arxiv.org/pdf/2407.19682",
        "outcome": "confirmed",
        "note": "Yimeng Bai 在中国科学技术大学攻读博士，个人学术主页具名记录 2022 年 12 月至 2024 年 8 月赴快手实习。原文在 Yimeng Bai 署名下以星号明示该项工作在快手完成，同篇也列出其具名企业实习导师 Jing Lu。"
      },
      {
        "title": "HellaSwag-Pro: A Large-Scale Bilingual Benchmark for Evaluating the Robustness of LLMs in Commonsense Reasoning",
        "url": "https://aclanthology.org/2025.findings-acl.472.pdf",
        "outcome": "confirmed",
        "note": "同期 IEEE 论文作者履历证实其为中科大在读博士，正式版首页脚注明确具名注明 Keqin Bao 在阿里巴巴实习时完成这项研究。"
      },
      {
        "title": "Disentangling Reasoning Tokens and Boilerplate Tokens For Language Model Fine-tuning",
        "url": "https://arxiv.org/abs/2412.14780",
        "outcome": "lead",
        "note": "Ziang Ye 把该成果明确列在 Qwen 实习经历并具名列企业导师马坚鑫；但公开履历中的实习（2024 年 2–9 月）和冯福利硕士指导（2024 年 9 月起）仅在同一个月份相接，尚未找到本科时同项目指导或项目延续到研究生阶段的具体证据。"
      },
      {
        "title": "Leveraging Unpaired Feedback for Long-Term LLM-based Recommendation Tuning",
        "url": "https://aclanthology.org/2025.findings-emnlp.1332.pdf",
        "outcome": "confirmed",
        "note": "中科大博士生 Jizhi Zhang 是正式版本的第一作者；首页明确标注他在美团实习期间完成这项研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "UT3NzFAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://person.zju.edu.cn/shenyongliang",
      "https://lll6gg.github.io/",
      "https://yanyc428.github.io/"
    ],
    "papers": [
      {
        "title": "Self-Distilled Agentic Reinforcement Learning",
        "url": "https://arxiv.org/pdf/2605.15155",
        "outcome": "confirmed",
        "note": "Zhengxi Lu 为浙江大学在读博士，原文第一作者脚注明确该项目在美团实习期间完成；其主页列 2026 年 3 月起的美团 LongCat 实习及实习导师顾奇。"
      },
      {
        "title": "VerifyBench: Benchmarking Reference-based Reward Systems for Large Language Models",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/e812af67a942c21dd0104bd929f99da1-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "原文把具名实习脚注标在第一作者颜聿辰名后，明确该项工作是在美团实习期间完成；本人履历列在读博士和 2023 年 6 月至 2025 年 7 月的美团实习。"
      },
      {
        "title": "MathFimer: Enhancing Mathematical Reasoning by Expanding Reasoning Steps through Fill-in-the-Middle Task",
        "url": "https://arxiv.org/html/2502.11684",
        "outcome": "confirmed",
        "note": "原文把具名实习脚注标在第一作者颜聿辰名后，明确该项工作是在美团实习期间完成；本人履历列在读博士和 2023 年 6 月至 2025 年 7 月的美团实习。"
      },
      {
        "title": "InftyThink+: Effective and Efficient Infinite-Horizon Reasoning via Reinforcement Learning",
        "url": "https://arxiv.org/html/2602.06960",
        "outcome": "confirmed",
        "note": "在读博士颜聿辰完整履历列 2025 年 8 月至 2026 年 4 月为蚂蚁 Ling 实习生；论文「Conflict of Interest」明确具名其为蚂蚁实习生、在论文使用蚂蚁团队研发算法，并在致谢具名蚂蚁研究实习生项目。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "-xQ-C1sAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2510.01546",
      "https://csuhan.com/attaches/CV_Jiaming-Han.pdf",
      "https://csuhan.com/",
      "https://xyue.io/",
      "https://haochen-rye.github.io/images/hao_cv.pdf",
      "https://arxiv.org/pdf/2510.01546",
      "https://hywang66.github.io/bridge/",
      "https://arxiv.org/html/2506.18898",
      "https://huggingface.co/ByteDance-Seed/Tar-1.5B",
      "https://arxiv.org/pdf/2602.14041",
      "https://bitdance.csuhan.com/",
      "https://arxiv.org/pdf/2602.14178",
      "https://shallowdream204.github.io/",
      "https://arxiv.org/abs/2510.10518",
      "https://qunzhongwang.github.io/cv/Qunzhong_WANG_CV_1123.pdf",
      "https://proceedings.mlr.press/v306/gong26b.html",
      "https://kxgong.github.io/",
      "https://www.ie.cuhk.edu.hk/people/xyyue.shtml",
      "https://www.jarvis73.com/about/",
      "https://arxiv.org/html/2607.22531v1",
      "https://github.com/Tencent-Hunyuan/Twins",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/gong26b/gong26b.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/html/Lai_LATTICE_Democratize_High-Fidelity_3D_Generation_at_Scale_CVPR_2026_paper.html",
      "https://zeqiang-lai.github.io/",
      "https://sa2025.conference-schedule.org/contributor/?uid=9990288653133639651",
      "https://lattice3d.github.io/",
      "https://zeqiang-lai.github.io/assets/pdf/Zeqiang_Lai_CV_2025_12.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/html/Lai_NaTex_Seamless_Texture_Generation_as_Latent_Color_Diffusion_CVPR_2026_paper.html",
      "https://natex-ldm.github.io/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Lai_Unleashing_Vecset_Diffusion_Model_for_Fast_Shape_Generation_ICCV_2025_paper.pdf",
      "https://github.com/Tencent-Hunyuan/FlashVDM",
      "https://arxiv.org/abs/2609.34621",
      "https://github.com/wangjiangshan0725/Tex-Zero",
      "https://arxiv.org/abs/2610.10342",
      "https://ouyangziheng.github.io/Position-Forcing-Page/",
      "https://zeqiang-lai.github.io/research.html",
      "https://arxiv.org/abs/2610.06801",
      "https://arxiv.org/pdf/2610.06801",
      "https://arxiv.org/abs/2512.03043",
      "https://tulerfeng.github.io/",
      "https://manyuan97.github.io/",
      "https://arxiv.org/pdf/2512.03043v1",
      "https://xyue.io/publications.html",
      "https://aclanthology.org/2026.findings-acl.95/",
      "https://aclanthology.org/2026.findings-acl.95.pdf",
      "https://doi.org/10.1109/CVPRF71909.2026.00431",
      "https://onevfall.github.io/personal_page/",
      "https://xinntao.github.io/",
      "https://github.com/KlingAIResearch/VideoCanvas",
      "https://arxiv.org/html/2510.08555v1",
      "https://onevfall.github.io/project_page/videocanvas/",
      "https://openaccess.thecvf.com/content/CVPR2025/html/Cai_DiTCtrl_Exploring_Attention_Control_in_Multi-Modal_Diffusion_Transformer_for_Tuning-Free_CVPR_2025_paper.html",
      "https://xiaoyu258.github.io/",
      "https://openreview.net/pdf/81301222d54e4d7455e85a1269b1c9a1b7bce1d5.pdf",
      "https://github.com/TencentARC/DiTCtrl",
      "https://hk.linkedin.com/in/minghong-cai-425bb4274",
      "https://arxiv.org/pdf/2512.18772",
      "https://ywcmaike.github.io/",
      "https://arxiv.org/html/2607.26860v1",
      "https://arxiv.org/abs/2401.14405",
      "https://arxiv.org/abs/2511.18780"
    ],
    "papers": [
      {
        "title": "Growing Visual Generative Capacity for Pre-Trained MLLMs",
        "url": "https://arxiv.org/html/2510.01546",
        "outcome": "confirmed",
        "note": "论文在共同一作 Jiaming Han 的署名处附字节跳动实习说明，作者履历列明港中文博士学籍及在字节跳动 Seed 实习。岳翔宇同篇署名且为其博士导师；论文与 Hao Chen 公开简历均标明他以在职研究员身份负责本项目。"
      },
      {
        "title": "Vision as a Dialect: Unifying Visual Understanding and Generation via Text-Aligned Representations",
        "url": "https://arxiv.org/html/2506.18898",
        "outcome": "existing",
        "note": "Tar（Vision as a Dialect）已在关系库。此次交叉核对该生港中文学籍、字节跳动实习与企业项目。"
      },
      {
        "title": "BitDance: Scaling Autoregressive Generative Models with Binary Tokens",
        "url": "https://arxiv.org/pdf/2602.14041",
        "outcome": "lead",
        "note": "论文确认两位港中文共同一作双署字节跳动，岳翔宇通讯，具任职时间的 Xuefeng Hu 同篇；Jiaming Han 最新主页仍处在实习区间，但简历截止时间不同，暂未看到指名项目实习或详细贡献说明。"
      },
      {
        "title": "UniWeTok: An Unified Binary Tokenizer with Codebook Size 2^128 for Unified Multimodal Large Language Model",
        "url": "https://arxiv.org/pdf/2602.14178",
        "outcome": "lead",
        "note": "岳翔宇、Jiaming Han、Yuang Ai 及字节跳动员工 Zhenheng Yang 都列名。学生履历可印证同期企业经历，原文未确认哪个学生是在企业完成此项目，尚待项目贡献记录。"
      },
      {
        "title": "VR-Thinker: Boosting Video Reward Models through Thinking-with-Image Reasoning",
        "url": "https://arxiv.org/abs/2510.10518",
        "outcome": "lead",
        "note": "Qunzhong Wang 在读港中文并明确表示在可灵做视频生成后训练和奖励模型研究，但履历只提港中文 MMLab 合作交流，未举明岳翔宇指导；继续查其他同篇学生。"
      },
      {
        "title": "Twins: Learn to Predict Unified Representations with Focal Loss",
        "url": "https://proceedings.mlr.press/v306/gong26b.html",
        "outcome": "confirmed",
        "note": "论文首页具名说明龚凯雄在腾讯混元实习期间完成本篇，并标出张建伟为项目负责人。龚凯雄的公开履历列岳翔宇为港中文博士导师、张建伟为同期混元企业导师，两者均为作者；张建伟的公开履历确认毕业后于 2023 年即入职腾讯混元。"
      },
      {
        "title": "LATTICE: Democratize High-Fidelity 3D Generation at Scale",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Lai_LATTICE_Democratize_High-Fidelity_3D_Generation_at_Scale_CVPR_2026_paper.html",
        "outcome": "confirmed",
        "note": "公开履历在腾讯混元任职条目逐项把 LATTICE 列为本人第一作者成果；项目说明该研究实际用于腾讯混元 3D 2.5 与 3.0。 学生本人学术资料明确在香港中文大学由岳翔宇指导，2025 年起于腾讯混元实习。腾讯混元 3D 负责人 Chunchao Guo 与学术导师均作为本篇共同通讯作者。"
      },
      {
        "title": "NaTex: Seamless Texture Generation as Latent Color Diffusion",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Lai_NaTex_Seamless_Texture_Generation_as_Latent_Color_Diffusion_CVPR_2026_paper.html",
        "outcome": "confirmed",
        "note": "公开履历在腾讯混元任职条目逐项把 NaTex 列为本人第一作者成果；正式共同作者分别署名香港中文大学和腾讯混元。 学生本人学术资料明确在香港中文大学由岳翔宇指导，2025 年起于腾讯混元实习。腾讯混元 3D 负责人 Chunchao Guo 与学术导师均作为本篇共同通讯作者。"
      },
      {
        "title": "Unleashing Vecset Diffusion Model for Fast Shape Generation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Lai_Unleashing_Vecset_Diffusion_Model_for_Fast_Shape_Generation_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "公开履历在腾讯混元任职条目逐项把 FlashVDM 列为本人第一作者成果；腾讯官方项目资料说明该研究已部署到混元 3D 产品。 学生本人学术资料明确在香港中文大学由岳翔宇指导，2025 年起于腾讯混元实习。腾讯混元 3D 负责人 Chunchao Guo 与学术导师均作为本篇共同通讯作者。"
      },
      {
        "title": "Does Native 3D Texture Generation Necessarily Require 3D Assets for Training?",
        "url": "https://arxiv.org/abs/2609.34621",
        "outcome": "confirmed",
        "note": "项目原始作者名册具名赖泽强同时署香港中文大学和腾讯混元，且担任本篇项目负责人；学生研究书目列出项目，项目开始时的企业在读履历已核实。 学生本人学术资料明确在香港中文大学由岳翔宇指导，2025 年起于腾讯混元实习。腾讯混元 3D 负责人 Chunchao Guo 与学术导师均作为本篇共同通讯作者。"
      },
      {
        "title": "Position Forcing: Self-Conditioning 3D Generation",
        "url": "https://arxiv.org/abs/2610.10342",
        "outcome": "confirmed",
        "note": "正式项目原始作者表标记赖泽强为本篇项目负责人，并列他的腾讯混元与香港中文大学双重署名；学生本人同期履历明确从 2025 年起为混元实习生，博士导师是同篇香港中文大学作者岳翔宇。已确认同篇腾讯通讯作者 Chunchao Guo 的混元负责人身份。"
      },
      {
        "title": "MC-Sparse: Deconstructing and Closing the Dense-Sparse Attention Gap in Diffusion Transformers",
        "url": "https://arxiv.org/abs/2610.06801",
        "outcome": "confirmed",
        "note": "论文 PDF 首页标记赖泽强为本篇项目负责人，并列他的腾讯混元与香港中文大学双重署名；学生本人同期履历明确从 2025 年起为混元实习生，博士导师是同篇香港中文大学作者岳翔宇。已确认同篇腾讯通讯作者 Chunchao Guo 的混元负责人身份。"
      },
      {
        "title": "OneThinker: All-in-one Reasoning Model for Image and Video",
        "url": "https://arxiv.org/abs/2512.03043",
        "outcome": "confirmed",
        "note": "正式原稿为唯一第一作者 Kaituo Feng 具体标注美团 LongCat 和港中文双单位，美团团队为本篇明确合作方，同一作者表同时具名企业项目负责人。"
      },
      {
        "title": "Exploring Reasoning Reward Model for Agents",
        "url": "https://aclanthology.org/2026.findings-acl.95/",
        "outcome": "confirmed",
        "note": "正式论文为主作者 Kaituo Feng 具体标注美团和港中文双单位，公司员工 Manyuan Zhang 为项目负责人。学生导师岳翔宇本人于正式论文中共同署名及担任通讯作者。"
      },
      {
        "title": "VideoCanvas: Unified Video Completion from Arbitrary Spatiotemporal Patches via In-Context Conditioning",
        "url": "https://doi.org/10.1109/CVPRF71909.2026.00431",
        "outcome": "confirmed",
        "note": "论文与作者原始项目把在快手可灵完成本篇的脚注标给第一作者蔡明宏。蔡本人资料确认同期港中文在读和同篇通讯作者岳翔宇的博士导师身份；同篇作者王鑫涛的个人履历确认其领导可灵多模态生成团队及对应研发。"
      },
      {
        "title": "DiTCtrl: Exploring Attention Control in Multi-Modal Diffusion Transformer for Tuning-Free Multi-Prompt Longer Video Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Cai_DiTCtrl_Exploring_Attention_Control_in_Multi-Modal_Diffusion_Transformer_for_Tuning-Free_CVPR_2025_paper.html",
        "outcome": "confirmed",
        "note": "CVPR 原文及腾讯 ARC 原始项目把实习脚注明确标给第一作者蔡明宏。蔡本人列港中文博士导师为同篇岳翔宇；腾讯通讯作者 Xiaoyu Li 的公开任职履历确认当期是腾讯 ARC 高级研究员。"
      },
      {
        "title": "In-Context Audio Control of Video Diffusion Transformers",
        "url": "https://arxiv.org/pdf/2512.18772",
        "outcome": "lead",
        "note": "论文首页明确标为在快手完成的第一作者是港中文 Wenze Liu。同期研究员工 Kuaishou 的通讯作者 Weicai Ye 可核，但未找到直接指认 Wenze Liu 的博士导师或论文指导者的资料。"
      },
      {
        "title": "Amortized Moment Matching for Visual Generation",
        "url": "https://arxiv.org/html/2607.26860v1",
        "outcome": "lead",
        "note": "同样具名第一作者 Wenze Liu 在快手完成本篇、同篇只有港中大岳翔宇为高校通讯作者，应另找明确指导佐证。"
      },
      {
        "title": "Multimodal Pathway: Improve Transformers with Irrelevant Data from Other Modalities",
        "url": "https://arxiv.org/abs/2401.14405",
        "outcome": "lead",
        "note": "港中大第一作者 Yiyuan Zhang 与腾讯 AI Lab 多位人员同篇，但原文和官方代码没有学生具体在腾讯工作的说明；个人主页只点名后来字节工作。"
      },
      {
        "title": "ConceptGuard: Proactive Safety in Text-and-Image-to-Video Generation through Multimodal Risk Detection",
        "url": "https://arxiv.org/abs/2511.18780",
        "outcome": "lead",
        "note": "广东香港中大与阿里未来实验室同篇，但尚未找到港中大学生具名参与本篇对应阿里工作或在企实习的文件。"
      }
    ]
  },
  "OuSPv-AAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/html/2603.00586",
      "https://guoqincode.github.io/",
      "https://tech.meituan.com/2026/06/29/ICML-2026.html",
      "https://arxiv.org/html/2606.30332",
      "https://arxiv.org/html/2507.02713",
      "https://openaccess.thecvf.com/content/ICCV2025/html/Hong_Audio-visual_Controlled_Video_Diffusion_with_Masked_Selective_State_Spaces_Modeling_ICCV_2025_paper.html",
      "https://harlanhong.github.io/Projects/Resume/FatingHong_CV.pdf",
      "https://cse.hkust.edu.hk/pg/defenses/S26/fhongac-06-05-2026.html",
      "https://openaccess.thecvf.com/content/CVPR2024/papers/Zhong_CVT-xRF_Contrastive_In-Voxel_Transformer_for_3D_Consistent_Radiance_Fields_from_CVPR_2024_paper.pdf",
      "https://racheltechie.github.io/",
      "https://facultyprofiles.hkust.edu.hk/profiles.php?profile=dan-xu-danxu",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/danxu",
      "https://zhongyingji.github.io/CVT-xRF/",
      "https://zhongyingji.github.io/"
    ],
    "papers": [
      {
        "title": "WildActor: Unconstrained Identity-Preserving Video Generation",
        "url": "https://arxiv.org/html/2603.00586",
        "outcome": "existing",
        "note": "已入库；原文及美团技术团队报道证实该项目在美团完成，第一作者本人确认导师徐旦及 2025 至 2026 年美团实习。"
      },
      {
        "title": "UniGP: Taming Diffusion Transformer for Prior-Preserved Unified Generation and Perception",
        "url": "https://arxiv.org/html/2606.30332",
        "outcome": "lead",
        "note": "Qin Guo 和徐旦具名指导关系明确，部分合著者在阿里巴巴，但论文没有指明 Qin Guo 此次企业参与，且他在此研究期附近亦有美团经历。"
      },
      {
        "title": "UniMC: Taming Diffusion Transformer for Unified Keypoint-Guided Multi-Class Image Generation",
        "url": "https://arxiv.org/html/2507.02713",
        "outcome": "lead",
        "note": "同篇可见腾讯署名，Qin Guo 在港科大读博前后学籍及学校指导需要与项目实际进行日期核对，未找到此次腾讯实习证据。"
      },
      {
        "title": "Audio-visual Controlled Video Diffusion with Masked Selective State Spaces Modeling for Natural Talking Head Generation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Hong_Audio-visual_Controlled_Video_Diffusion_with_Masked_Selective_State_Spaces_Modeling_ICCV_2025_paper.html",
        "outcome": "existing",
        "note": "作品已在关系库。学生履历把本篇列为 2024–25 年腾讯混元实习项目，港科大答辩确认 Dan Xu 指导本篇，腾讯企业导师 Qinglin Lu 同篇。"
      },
      {
        "title": "CVT-xRF: Contrastive In-Voxel Transformer for 3D Consistent Radiance Fields from Sparse Inputs",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Zhong_CVT-xRF_Contrastive_In-Voxel_Transformer_for_3D_Consistent_Radiance_Fields_from_CVPR_2024_paper.pdf",
        "outcome": "confirmed",
        "note": "论文署名列港科大研究生、导师与华为高级研究员。华为高级研究员自己的公开研究与实习名录同时给出该论文和该实习学生；港科大正式教师档案具名 Yingji Zhong。"
      }
    ]
  },
  "zp2Kz44AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/pdf/2610.36713",
      "https://loop.frontiersin.org/people/3043975/publications",
      "https://sites.duke.edu/dkusmiip/publications/",
      "https://sai.cuhk.edu.cn/teacher/258",
      "https://www.linkedin.com/in/bo-xiao",
      "https://arxiv.org/html/2610.36713",
      "https://theorg.com/org/meituan/person/bo-xiao",
      "https://sites.duke.edu/dkusmiip/files/2026/01/Multimodal_Laryngoscopic_Video_Analysis_for_Assisted_Diagnosis_of_Vocal_Fold_Paralysis-1.pdf",
      "https://arxiv.org/abs/2607.10596",
      "https://arxiv.org/abs/2509.23833",
      "https://www.cmsworkshops.com/ICASSP2026/view_paper.php?PaperNum=8862"
    ],
    "papers": [
      {
        "title": "From Voiceprints to User Entities: Online Speaker-Memory Construction for Multi-User Spoken Agents",
        "url": "https://arxiv.org/pdf/2610.36713",
        "outcome": "confirmed",
        "note": "原文页首将美团实习脚注同时标在 Yucong Zhang 和 Cancan Li 两位作者姓名旁，列两人为武汉大学计算机学院作者。武汉大学学生 Yucong Zhang 被李明的公开课题组明确列入受指导人员，同时署香港中文大学（深圳）。李明同篇通讯，独立任职资料明确署名作者 Bo Xiao 供职于美团。"
      },
      {
        "title": "ECHOv2: Two-Level Band-Splitting Representation Learning for Anomalous Sound Detection",
        "url": "https://arxiv.org/abs/2607.10596",
        "outcome": "no-evidence",
        "note": "与同一位受指导学生共同发表，但署名没有调查范围内企业的人员，也没有在企业开展此篇研究的据证。"
      },
      {
        "title": "AISHELL6-Whisper: A Chinese Mandarin Audio-Visual Whisper Speech Dataset with Speech Recognition Baselines",
        "url": "https://arxiv.org/abs/2509.23833",
        "outcome": "no-evidence",
        "note": "Cancan Li 为课题组指导的作者，企业合著者所属 AISHELL 与 OPPO 不在调查范围内。"
      }
    ]
  },
  "uQnBgK0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://doi.org/10.1109/ISSRE62328.2024.00046",
      "https://wenweigu.github.io/",
      "https://www.cse.cuhk.edu.hk/lyu/_media/thesis/presentation_wenweigu.pdf?cache=cache&id=students%3Aphd",
      "https://www.cse.cuhk.edu.hk/people/faculty/michael-rung-tsong-lyu/",
      "https://xjtu-netverify.github.io/papers/NetMiner/NetMiner_TON.pdf",
      "https://nkcs.iops.ai/wenweigu/",
      "https://conf.researchr.org/profile/fse-2025/yongqiangyang",
      "https://wenweigu.github.io/publications/issre24/issre24.pdf",
      "https://doi.org/10.1109/ICSE55347.2025.00084",
      "https://zbchern.github.io/papers/icse25.pdf",
      "https://doi.org/10.1145/3702978",
      "https://research.cuhk.edu.hk/en/publications/identifying-performance-issues-in-cloud-service-systems-based-on-/",
      "https://arxiv.org/abs/2307.10869",
      "https://arxiv.org/abs/2506.04569",
      "https://ojs.aaai.org/index.php/AAAI/article/view/28622",
      "https://arxiv.org/abs/2205.15228",
      "https://doi.org/10.1109/ASE63991.2025.00283",
      "https://yichenli00.github.io/",
      "https://jinyang88.github.io/",
      "https://zbchern.github.io/papers/ase25b.pdf",
      "https://research.cuhk.edu.hk/en/publications/automated-proactive-logging-quality-improvement-for-large-scale-c/",
      "https://yichenli00.github.io/publications/",
      "https://doi.org/10.1109/ASE63991.2025.00272",
      "https://zhihan-jiang.com/files/ASE25/LogPilot.pdf",
      "https://research.cuhk.edu.hk/en/publications/logpilot-intent-aware-and-scalable-alert-diagnosis-for-large-scal/",
      "https://doi.org/10.1109/DSN-S65789.2025.00034",
      "https://research.cuhk.edu.hk/en/publications/llmprism-black-box-performance-diagnosis-for-production-llm-train/",
      "https://arxiv.org/html/2505.00342",
      "https://dsn2025.github.io/cpaccepted.html",
      "https://doi.org/10.1109/DSN-S65789.2025.00045",
      "https://www.jiazhengu.com/",
      "https://wenweigu.github.io/publications/dsn25/dsn25-1.pdf",
      "https://research.cuhk.edu.hk/en/publications/cordial-cross-row-failure-prediction-method-based-on-bank-level-e/"
    ],
    "papers": [
      {
        "title": "KPIRoot: Efficient Monitoring Metric-based Root Cause Localization in Large-scale Cloud Systems",
        "url": "https://doi.org/10.1109/ISSRE62328.2024.00046",
        "outcome": "confirmed",
        "note": "KPIRoot 是学生的博士论文第三项成果，其答辩文件逐项列出华为云真实环境中的实验与 18 项核心网络服务的生产部署。 第一作者 Wenwei Gu 的公开履历确认同期学籍、导师和华为云研究岗位。Lyu 与在职华为云研究人员 Yongqiang Yang 在正式论文上共同署名。"
      },
      {
        "title": "ADAMAS: Adaptive Domain-Aware Performance Anomaly Detection in Cloud Service Systems",
        "url": "https://doi.org/10.1109/ICSE55347.2025.00084",
        "outcome": "confirmed",
        "note": "ADAMAS 是学生答辩第二项成果，具名报告注明自 2023 年 10 月起部署在华为云 OBS 等服务中，处于该生在读并在华为云参与联合项目的时间内。 第一作者 Wenwei Gu 的公开履历确认同期学籍、导师和华为云研究岗位。Lyu 与在职华为云研究人员 Yongqiang Yang 在正式论文上共同署名。"
      },
      {
        "title": "Identifying Performance Issues in Cloud Service Systems Based on Relational-Temporal Features",
        "url": "https://doi.org/10.1145/3702978",
        "outcome": "confirmed",
        "note": "ISOLATE 是学生答辩第一项成果，答辩文件记录华为云的实际部署，预印本于 2023 年 7 月在其在读与华为云联合项目任期内发布，港中文研究门户给出正式发表版本。 第一作者 Wenwei Gu 的公开履历确认同期学籍、导师和华为云研究岗位。Lyu 与在职华为云研究人员 Yongqiang Yang 在正式论文上共同署名。"
      },
      {
        "title": "KPIRoot+: An Efficient Integrated Framework for Anomaly Detection and Root Cause Analysis in Large-Scale Cloud Systems",
        "url": "https://arxiv.org/abs/2506.04569",
        "outcome": "lead",
        "note": "期刊论文自行注明扩展了 ISSRE 2024 的 KPIRoot，暂不作为独立新增关系。"
      },
      {
        "title": "Curvature-Invariant Adversarial Attacks for 3D Point Clouds",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28622",
        "outcome": "lead",
        "note": "答辩材料将其列入旁支成果，未确认其与华为云实习项目相关；不计。"
      },
      {
        "title": "Revisiting, Benchmarking and Exploring API Recommendation: How Far Are We?",
        "url": "https://arxiv.org/abs/2205.15228",
        "outcome": "lead",
        "note": "学生名列共同作者，未发现同期参与对应企业项目的公开证据；不计。"
      },
      {
        "title": "Automated Proactive Logging Quality Improvement for Large-Scale Codebases",
        "url": "https://doi.org/10.1109/ASE63991.2025.00283",
        "outcome": "confirmed",
        "note": "LogImprover 已在字节跳动的代码库中部署；论文 2025 年 9 月获接收，处于该生港中文博士在读和字节实习重叠期。 学生本人提供同期博士、导师和字节跳动实习的起止日期；企业共同作者亦明确列此为其公司指导的实习生项目，正式论文把 Yichen Li 与同篇 Jinyang Liu 列在字节跳动署名下。"
      },
      {
        "title": "LogPilot: Intent-aware and Scalable Alert Diagnosis for Large-scale Online Service Systems",
        "url": "https://doi.org/10.1109/ASE63991.2025.00272",
        "outcome": "confirmed",
        "note": "LogPilot 的预印本于 2025 年 9 月发布；正式论文详述字节跳动火山引擎生产部署。以原文中明确署名字节的第三作者 Yichen Li 补齐同期实习证据，不推定同篇第一作者在字节实习。 学生本人提供同期博士、导师和字节跳动实习的起止日期；企业共同作者亦明确列此为其公司指导的实习生项目，正式论文把 Yichen Li 与同篇 Jinyang Liu 列在字节跳动署名下。"
      },
      {
        "title": "LLMPrism: Black-box Performance Diagnosis for Production LLM Training Platforms",
        "url": "https://doi.org/10.1109/DSN-S65789.2025.00034",
        "outcome": "confirmed",
        "note": "南开课题组具名履历把 Wenwei Gu 列为 2024 年 7 月起华为—港中文实验室的「基于事务流的大模型训练全链路故障分析」项目成员。论文具体采用网络流水重建训练时间线并记录 2024 年底的企业生产部署。其学籍与项目任期相交，博士导师 Lyu 和华为云在职负责人 Yongqiang Yang 同篇。"
      },
      {
        "title": "Cordial: Cross-row Failure Prediction Method Based on Bank-level Error Locality for HBMs",
        "url": "https://doi.org/10.1109/DSN-S65789.2025.00045",
        "outcome": "confirmed",
        "note": "第一作者 Wenwei Gu 的博士答辩为 Cordial 单列技术分节并将其收进论文清单，正式论文记录在华为的 HBM 研究与数据，通讯作者为学生同期实习机构的在职研究人员 Jiazhen Gu；博士导师 Lyu 同篇共同署名。成果于该生在华为香港研究中心实习最后一个月报告。"
      }
    ]
  },
  "vVhmzbAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/ly/index.htm",
      "https://gjyin.github.io/",
      "https://jinsong8.github.io/"
    ],
    "papers": [
      {
        "title": "TagPR: Tag-Guided Process Supervision for Personalization Reasoning in Large Language Models",
        "url": "https://arxiv.org/html/2509.23140v1",
        "outcome": "confirmed",
        "note": "金松：首版具名实习脚注；美团员工、校内指导均核实。"
      },
      {
        "title": "DiningBench: A Hierarchical Multi-view Benchmark for Perception and Reasoning in the Dietary Domain",
        "url": "https://aclanthology.org/2026.acl-long.1630.pdf",
        "outcome": "confirmed",
        "note": "公司项目发布具名列第一作者，首版明确贡献与双署，博士实习时段与公开时间重叠。"
      }
    ],
    "note": "目前只调查金松可见的主要成果，尚未全部覆盖刘勇的发表书目。"
  },
  "UJpwap8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sse.sysu.edu.cn/node/463",
      "https://angrychow.github.io/",
      "https://jinyang88.github.io/",
      "https://zbchern.github.io/",
      "https://dblp.org/pid/195/1927.html"
    ],
    "papers": [
      {
        "title": "ErrorPrism: Reconstructing Error Propagation Paths in Cloud Service Systems",
        "url": "https://zbchern.github.io/papers/ase25a.pdf",
        "outcome": "confirmed",
        "note": "原文具名列蒲俊宋为第一作者、陈壮彬为共同通讯作者、字节跳动研究科学家刘金杨为同篇作者，并报告在该公司的生产环境完成系统评估。刘金杨在接收时将 ErrorPrism 具名列为其实习生项目。院系名录明确将同届 ASE 工业论文列为蒲俊宋本科产出，并列其实习期与研究重叠。"
      },
      {
        "title": "Automated Proactive Logging Quality Improvement for Large-Scale Codebases",
        "url": "https://zbchern.github.io/papers/ase25b.pdf",
        "outcome": "lead",
        "note": "陈壮彬、蒲俊宋均署名；蒲是否在字节实习岗位参与该特定任务尚待具名说明。另查港中大导师与首位作者。"
      },
      {
        "title": "CAST: Automated Resilience Testing for Production Cloud Service Systems",
        "url": "https://zbchern.github.io/papers/icse-seip26.pdf",
        "outcome": "lead",
        "note": "原文明示华为云生产部署，同篇三名在读学生曾于华为云实习；仍需能明确定位各学生在该企业项目的贡献来源。"
      },
      {
        "title": "AutoSQL: Extracting SQL Templates from Imperative ORM Code in Large-Scale Repositories",
        "url": "https://arxiv.org/abs/2608.15595",
        "outcome": "lead",
        "note": "导师和在读学生同篇；尚未核实研究对应的企业和参与时间。"
      },
      {
        "title": "TypeScript Repository Indexing for Code Agent Retrieval",
        "url": "https://arxiv.org/abs/2604.18413",
        "outcome": "lead",
        "note": "蒲俊宋本人具名记录对企业开源项目组件的贡献；同篇合作者李已在 2026 年 3 月由曾实习的字节跳动转职腾讯，暂无相同项目中符合条件的字节正式员工。"
      },
      {
        "title": "Tracezip: Efficient Distributed Tracing via Trace Compression",
        "url": "https://zbchern.github.io/papers/issta25.pdf",
        "outcome": "no-evidence",
        "note": "原文仅有高校作者单位，未见企业作者或具名学生参与企业研发的证据。"
      },
      {
        "title": "MICRORACER: Detecting Concurrency Bugs for Cloud Service Systems",
        "url": "https://doi.org/10.1109/APSEC66846.2025.00025",
        "outcome": "no-evidence",
        "note": "两位在读学生及校内导师同篇；未见同篇企业正式员工和对应企业研究。"
      },
      {
        "title": "ADAMAS: Adaptive Domain-Aware Performance Anomaly Detection in Cloud Service Systems",
        "url": "https://zbchern.github.io/papers/icse25.pdf",
        "outcome": "lead",
        "note": "作者与学位论文核实港中大学生进行华为项目；未找到本名录教师与该学生的同期具名指导关系。"
      }
    ],
    "note": "已核对组内学生在校与企业实习经历、相关 ASE 和 ICSE 论文。作者书目还需继续逐篇交叉核对。"
  },
  "HEuN8PcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.nju.edu.cn/2f/cc/c2639a274380/pagem.htm",
      "https://yi.fan/zh/",
      "https://y-sisyphus.github.io/",
      "https://www.ecice06.com/CN/10.19678/j.issn.1000-3428.0253281",
      "https://grawww.nju.edu.cn/_upload/article/files/1f/c2/55aff0984fedac523b87726beeb0/45c3df1f-16c2-421a-8be4-5898c5f9d775.pdf",
      "https://home.j-zh.top/"
    ],
    "papers": [
      {
        "title": "PercepCap: Video Captioner with Structured Spatio-Temporal Perception",
        "url": "https://arxiv.org/pdf/2607.20389",
        "outcome": "confirmed",
        "note": "许一凡自述 2023 年起在南京大学攻读博士、2025 年 10 月起在快手可灵实习；本论文首页标注并说明其主要工作在快手可灵团队实习期间完成。"
      },
      {
        "title": "MIMFlow: Integrating Masked Image Modeling with Normalizing Flows for End-to-End Image Generation",
        "url": "https://arxiv.org/pdf/2606.26016",
        "outcome": "confirmed",
        "note": "陈阳自述 2023 年起攻读南京大学博士、2025 年 3 月至 2026 年 4 月在阿里妈妈从事图像生成。本人列此论文为一作成果，原文及官方实现明确陈阳同时以南京大学和阿里巴巴署名。"
      },
      {
        "title": "Flowing Backwards: Improving Normalizing Flows via Reverse Representation Alignment",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/37300/41262",
        "outcome": "existing",
        "note": "AAAI 正式版明确第一作者双署名南京大学与阿里巴巴；已在既有关系索引。"
      },
      {
        "title": "TempR1: Improving Temporal Understanding of MLLMs via Temporal-Aware Multi-Task Reinforcement Learning",
        "url": "https://arxiv.org/html/2512.03963",
        "outcome": "confirmed",
        "note": "南京大学在读博士吴涛是第一作者；预印本与 CVPR 正式版本都具名标注他在字节跳动实习中完成本项工作。同年正式期刊的作者简介明确列出其博士研究生身份。"
      },
      {
        "title": "TimeLens: Rethinking Video Temporal Grounding with Multimodal LLMs",
        "url": "https://arxiv.org/html/2512.14698v1",
        "outcome": "confirmed",
        "note": "张峻为南京大学 2023–2026 年在读硕士，个人履历列 2025 年在腾讯 ARC Lab 实习。正式版首页星号注明第一作者在腾讯实习时完成本项研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "yFI_RjUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://is.nju.edu.cn/ljh/main.htm",
      "https://liujiaheng.github.io/group.html?v=ecb4e245a982",
      "https://www.nju-link.com/zh/post/25-7-21-recruit2/"
    ],
    "papers": [
      {
        "title": "CodeCap-Bench: Can Code Serve as a Good Video Caption?",
        "url": "https://arxiv.org/pdf/2610.37341",
        "outcome": "confirmed",
        "note": "南京大学 LINK 团队记录汤家福为 2026 年起在读硕士，2025 年 12 月起在快手可灵实习；其在 2026 年 10 月公开的本文为并列第一作者，明确同时以南京大学及 Kling AI 署名。"
      },
      {
        "title": "IF-VidCap: Can Video Caption Models Follow Instructions?",
        "url": "https://arxiv.org/pdf/2510.18726",
        "outcome": "lead",
        "note": "已核对在读学生、导师和企业研究员名单；原文将学生署为南京大学，未查到具名证据确认李世昊在快手参与此项研究。"
      },
      {
        "title": "ViDiC: Video Difference Captioning",
        "url": "https://arxiv.org/pdf/2512.03405",
        "outcome": "lead",
        "note": "李世昊为共同第一作者，南京大学和快手可灵团队合作；可灵团队的后续技术报告使用该基准，但仍待查明李世昊如何以快手实习生身份参与此项目。"
      },
      {
        "title": "T2AV-Compass: Towards Unified Evaluation for Text-to-Audio-Video Generation",
        "url": "https://proceedings.mlr.press/v306/cao26v.html",
        "outcome": "lead",
        "note": "同篇有刘佳恒、快手张远行及硕士汪洋海；原文将汪洋海仅署南京大学，现有资料尚未具名说明其同项企业工作。"
      },
      {
        "title": "AVSCap: Orchestrating Audio-Visual Synergy for Omni-modal Video Captioning",
        "url": "https://arxiv.org/pdf/2607.12820",
        "outcome": "lead",
        "note": "同篇有刘佳恒、张远行和学生汪洋海；后者的实习区间已知，但仍缺该篇学生参与企业研究的直接材料。"
      },
      {
        "title": "DR³-Eval: Towards Realistic and Reproducible Deep Research Evaluation",
        "url": "https://aclanthology.org/2026.emnlp-main.1691/",
        "outcome": "lead",
        "note": "核对题录和预印本署名，合作企业为九天研究机构；暂无证据确认所涉目标企业中的正式员工和学生的同一项目。"
      },
      {
        "title": "OmniCap-IF: Benchmarking and Improving Instruction Following Abilities for Omni-Video Captioning",
        "url": "https://arxiv.org/pdf/2606.08572",
        "outcome": "lead",
        "note": "王佳豪主页确认该项目为校企合作；仍需核对学生在项目中的企业研究角色。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "eSiKPqUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.iclr.cc/paper_files/paper/2024/file/635351dc3d18116d1a44ca31592e2f9a-Paper-Conference.pdf",
      "https://gaoruiyuan.com/assets/pdf/Resume_RuiyuanGao.pdf",
      "https://gaoruiyuan.com/",
      "https://www.cse.cuhk.edu.hk/people/faculty/qiang-xu/",
      "https://zhenguol.github.io/",
      "https://cure-lab.github.io/",
      "https://racheltechie.github.io/",
      "https://gaoruiyuan.com/news/hdc2024/",
      "https://openaccess.thecvf.com/content/WACV2026/html/Gao_MagicDrive3D_Controllable_3D_Generation_for_Any-View_Rendering_in_Street_Scenes_WACV_2026_paper.html",
      "https://arxiv.org/abs/2405.14475",
      "https://github.com/flymin/MagicDrive3D",
      "https://doi.org/10.1109/ICCV51701.2025.02612",
      "https://huggingface.co/flymin/MagicDriveDiT-stage3-40k-ft",
      "https://github.com/Ascend/DrivingSDK/blob/master/model_examples/MagicDrive-V2/README.md",
      "https://arxiv.org/abs/2411.13807",
      "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_DetDiffusion_Synergizing_Generative_and_Perceptive_Models_for_Enhanced_Data_Generation_CVPR_2024_paper.html",
      "https://arxiv.org/abs/2403.13304",
      "https://openaccess.thecvf.com/content/ICCV2023/papers/Gao_DIFFGUARD_Semantic_Mismatch-Guided_Out-of-Distribution_Detection_Using_Pre-Trained_Diffusion_Models_ICCV_2023_paper.pdf",
      "https://openaccess.thecvf.com/content/ICCV2025/html/Ju_FullDiT_Video_Generative_Foundation_Models_with_Multimodal_Control_via_Full_ICCV_2025_paper.html",
      "https://juxuan27.github.io/",
      "https://juxuan27.github.io/assets/cv/CV_Xuan.pdf",
      "https://xinntao.github.io/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Ju_FullDiT_Video_Generative_Foundation_Models_with_Multimodal_Control_via_Full_ICCV_2025_paper.pdf",
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/ba8d1b46292c5e82cbfb3b3dc3b968af-Abstract-Conference.html",
      "https://yxbian23.github.io/",
      "https://chenxin.tech/uploads/resume.pdf",
      "https://bytedance.github.io/Video-As-Prompt/",
      "https://arxiv.org/abs/2510.20888",
      "https://doi.org/10.1007/978-3-031-72661-3_9",
      "https://arxiv.org/pdf/2403.06976",
      "https://tencentarc.github.io/BrushNet/",
      "https://proceedings.neurips.cc/paper_files/paper/2024/hash/57f6683e550eb067936c9e9f0bcb8e31-Abstract-Datasets_and_Benchmarks_Track.html",
      "https://zzyfd.github.io/",
      "https://proceedings.neurips.cc/paper_files/paper/2024/file/57f6683e550eb067936c9e9f0bcb8e31-Paper-Datasets_and_Benchmarks_Track.pdf",
      "https://arxiv.org/abs/2407.06358",
      "https://arxiv.org/abs/2606.04527",
      "https://echo-team-joy-future-academy-jd.github.io/Echo-Infinity/",
      "https://xuezeyue.github.io/cv/",
      "https://arxiv.org/abs/2503.05639",
      "https://openreview.net/pdf/5340694f24091f0ebf93e7be367380a96b06a86a.pdf",
      "https://github.com/TencentARC/VideoPainter"
    ],
    "papers": [
      {
        "title": "MagicDrive: Street View Generation with Diverse 3D Geometry Control",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2024/file/635351dc3d18116d1a44ca31592e2f9a-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "学生的华为实习履历直接列名其共同第一作者工作 MagicDrive 为在职项目；本人技术报告与华为同篇研究人员均证实该项目用于华为盘古 5.0，并于 HDC 2024 展示。 Gao 本人简历及主页确认同期学籍、导师徐强和在华为李政国团队的实习。徐强、李政国和高瑞元在正式论文共同署名。"
      },
      {
        "title": "MagicDrive3D: Controllable 3D Generation for Any-View Rendering in Street Scenes",
        "url": "https://openaccess.thecvf.com/content/WACV2026/html/Gao_MagicDrive3D_Controllable_3D_Generation_for_Any-View_Rendering_in_Street_Scenes_WACV_2026_paper.html",
        "outcome": "confirmed",
        "note": "学生在华为实习期间具名发布的华为大会技术说明，将由其任第一作者的 MagicDrive3D 明确关联到展示的跨视角一致三维场景生成；2024 年 5 月预印本当时即注明与团队导师等共同署名。 Gao 本人简历及主页确认同期学籍、导师徐强和在华为李政国团队的实习。徐强、李政国和高瑞元在正式论文共同署名。"
      },
      {
        "title": "MagicDrive-V2: High-Resolution Long Video Generation for Autonomous Driving with Adaptive Control",
        "url": "https://doi.org/10.1109/ICCV51701.2025.02612",
        "outcome": "confirmed",
        "note": "学生华为实习任期内担任该自动驾驶生成项目第一作者，个人同步记录在 2024 年 11、12 月完成技术报告、训练代码和权重发布；正式论文的多位华为共同作者包括该生的实际实习导师。华为昇腾官方 SDK 2025 年 4 月另列此具体模型及项目链接。V2 有独立论文标识和 DiT 架构，早期名为 MagicDriveDiT。 Gao 本人简历及主页确认同期学籍、导师徐强和在华为李政国团队的实习。徐强、李政国和高瑞元在正式论文共同署名。"
      },
      {
        "title": "DetDiffusion: Synergizing Generative and Perceptive Models for Enhanced Data Generation and Perception",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_DetDiffusion_Synergizing_Generative_and_Perceptive_Models_for_Enhanced_Data_Generation_CVPR_2024_paper.html",
        "outcome": "confirmed",
        "note": "华为科研人员 Lanqing Hong 的公开项目履历，将由该生共同第一署名的 DetDiffusion、MagicDrive 和 GeoDiffusion 具名列为其在华为的可控自动驾驶场景生成项目；项目和论文均在 Gao 所列的华为实习和港中文学籍期内。 Gao 本人简历及主页确认同期学籍、导师徐强和在华为李政国团队的实习。徐强、李政国和高瑞元在正式论文共同署名。"
      },
      {
        "title": "DiffGuard: Semantic Mismatch-Guided Out-of-Distribution Detection using Pre-trained Diffusion Models",
        "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Gao_DIFFGUARD_Semantic_Mismatch-Guided_Out-of-Distribution_Detection_Using_Pre-Trained_Diffusion_Models_ICCV_2023_paper.pdf",
        "outcome": "lead",
        "note": "导师徐强、博士生高瑞元和华为员工Lanqing Hong同篇；同期实习履历明确为自动驾驶合成，尚未核实这篇分布外检测具体在华为实习期如何贡献。"
      },
      {
        "title": "FullDiT: Video Generative Foundation Models with Multimodal Control via Full Attention",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Ju_FullDiT_Video_Generative_Foundation_Models_with_Multimodal_Control_via_Full_ICCV_2025_paper.html",
        "outcome": "confirmed",
        "note": "ICCV 正式出版论文以星号脚注注明第一作者鞠璇在快手可灵实习期间完成该研究。学生履历写明当时的港中文博士学籍、导师许强与快手实习导师王鑫涛；两者均同篇署名，许强为共同通讯。"
      },
      {
        "title": "Video-As-Prompt: Unified Semantic Control for Video Generation",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/ba8d1b46292c5e82cbfb3b3dc3b968af-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "字节跳动正式项目页在第一作者卞宇轩的双单位署名标注工作在智能创作实验室完成，学生主页确认该段实习和具名企业导师。许强为其港中文博士导师并署论文共同通讯，陈欣为企业在职研究员和明确项目负责人。"
      },
      {
        "title": "BrushNet: A Plug-and-Play Image Inpainting Model with Decomposed Dual-Branch Diffusion",
        "url": "https://doi.org/10.1007/978-3-031-72661-3_9",
        "outcome": "confirmed",
        "note": "出版论文或项目主页面将共同第一作者鞠璇分别标为腾讯 ARC Lab 和港中文；其 CV 列明博士在读期间的当期腾讯岗位及与原文相符的图像／视频研究，且列出此作品。公开学生履历确认其导师许强同篇署名。论文企业通讯作者或负责人任职可由独立资料验证。"
      },
      {
        "title": "MiraData: A Large-Scale Video Dataset with Long Durations and Structured Captions",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/57f6683e550eb067936c9e9f0bcb8e31-Abstract-Datasets_and_Benchmarks_Track.html",
        "outcome": "confirmed",
        "note": "出版论文或项目主页面将共同第一作者鞠璇分别标为腾讯 ARC Lab 和港中文；其 CV 列明博士在读期间的当期腾讯岗位及与原文相符的图像／视频研究，且列出此作品。公开学生履历确认其导师许强同篇署名。论文企业通讯作者或负责人任职可由独立资料验证。"
      },
      {
        "title": "Echo-Infinity: Learning Evolving Memory for Real-Time Infinite Video Generation",
        "url": "https://arxiv.org/abs/2606.04527",
        "outcome": "lead",
        "note": "卞宇轩同篇学校署名，港中文许强博士指导和同期公开京东学术项目无疑；学生主页虽确认在京东由同篇两名员工指导工作，论文和项目仍只给他港中文署名。等待把具体成果明确映射到当期实习的证据。"
      },
      {
        "title": "VideoPainter: Any-length Video Inpainting and Editing with Plug-and-Play Context Control",
        "url": "https://arxiv.org/abs/2503.05639",
        "outcome": "lead",
        "note": "企业发布页与正式论文的第一作者署名不一致。Zhaoyang Zhang 明确同篇为腾讯项目负责人，学生卞宇轩把本人放置在与主题匹配的腾讯实习且确实由他指导，需再确认原始正式版或项目指名。"
      }
    ]
  },
  "su14mcEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/xj/index.htm",
      "https://www.linkedin.com/in/xiaoxue-zang-53b275137",
      "https://tengshi-ruc.github.io/",
      "https://jeryi-sun.github.io/",
      "https://arxiv.org/html/2606.06260v1",
      "https://jianghaopg11.github.io/",
      "https://quchangle1.github.io/",
      "https://cn.linkedin.com/in/sqwang",
      "https://aclanthology.org/2026.acl-long.549.pdf"
    ],
    "papers": [
      {
        "title": "UniSAR: Modeling User Transition Behaviors between Search and Recommendation",
        "url": "https://arxiv.org/html/2404.09520v1",
        "outcome": "confirmed",
        "note": "本篇首页明确标注 Teng Shi 与 Zihua Si 在快手实习期间完成；第一作者本人确认研究发生期及博士导师。"
      },
      {
        "title": "Retrieval Augmented Generation with Collaborative Filtering for Personalized Text Generation",
        "url": "https://arxiv.org/html/2504.05731v1",
        "outcome": "confirmed",
        "note": "首页具名脚注明确论文在 Teng Shi 的快手实习期间完成，导师与快手员工在同篇。"
      },
      {
        "title": "GenSAR: Unifying Balanced Search and Recommendation with Generative Retrieval",
        "url": "https://ai.ruc.edu.cn/uploads/20251110/b7c61d80d495d8b4fcc0742a93d8831a.pdf",
        "outcome": "confirmed",
        "note": "人大公开的正式稿首页明确声明 Teng Shi 在快手实习期间完成论文，署名另含徐君和快手员工。"
      },
      {
        "title": "SAQRec: Aligning Recommender Systems to User Satisfaction via Questionnaire Feedback",
        "url": "https://gsai.ruc.edu.cn/uploads/20241023/683f0db249cd0b32fce84298a4c4618b.pdf",
        "outcome": "confirmed",
        "note": "正式稿首页具名注明 Teng Shi 和 Kepu Zhang 在快手实习期间完成论文；同篇有 Teng Shi 的校内导师徐君，以及快手 Xiaoxue Zang。"
      },
      {
        "title": "When Search Meets Recommendation: Learning Disentangled Search Representation for Recommendation",
        "url": "https://gsai.ruc.edu.cn/uploads/20230518/9d1f9b4bc1c31dad014b1e624fbdea05.pdf",
        "outcome": "confirmed",
        "note": "正式稿具名实习、本人主页同时具名两个导师。"
      },
      {
        "title": "KuaiSAR: A Unified Search And Recommendation Dataset",
        "url": "https://arxiv.org/html/2306.07705",
        "outcome": "lead",
        "note": "同一团队于在读及实习期间合著；首版未找到与本论文具名匹配的实习证据。"
      },
      {
        "title": "Large Language Models Enhanced Collaborative Filtering",
        "url": "https://ai.ruc.edu.cn/uploads/20241023/ad5edba483957f7f3ed623be97172224.pdf",
        "outcome": "lead",
        "note": "三位同篇、期间重合；原文未找到实习具名。"
      },
      {
        "title": "OneReason Technical Report",
        "url": "https://arxiv.org/html/2606.06260v1",
        "outcome": "confirmed",
        "note": "快手原文与学生履历均把施腾列入 OneReason 项目核心贡献者。"
      },
      {
        "title": "MatchTIR: Fine-Grained Supervision for Tool-Integrated Reasoning via Bipartite Matching",
        "url": "https://aclanthology.org/2026.acl-long.549.pdf",
        "outcome": "confirmed",
        "note": "ACL 2026 正式版首页具名实习脚注、教师与百度作者均已确认。"
      }
    ],
    "note": "目前重点核对徐君学生在快手的研究，未覆盖完整发表书目。"
  },
  "loPoqy0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/cx/index.htm",
      "https://tangjiakai.github.io/index.html",
      "https://www.acmturc.com/2023/en/mobile/SIGAI_China.html",
      "https://shenshiqi.com/academic/",
      "https://www.ai-engine-lab.com/team",
      "https://www.kdd.org/kdd2025/applied-data-science-ads-track-papers-2/",
      "https://gcastle-hub.github.io/csl-competition/",
      "https://zeyu-zhang.cn/",
      "https://gcastle-hub.github.io/csl-competition/organizers/",
      "https://proceedings.neurips.cc/paper_files/paper/2025/file/826aea2253363fe04e8c4991b2a8869e-Paper-Conference.pdf",
      "https://aclanthology.org/2025.findings-acl.307.pdf"
    ],
    "papers": [
      {
        "title": "KAPA: A Deliberative Agent Framework with Tree-Structured Knowledge Base for Multi-Domain User Intent Understanding",
        "url": "https://aclanthology.org/2025.findings-acl.319.pdf",
        "outcome": "confirmed",
        "note": "同行评议版本标注唐嘉凯在腾讯访问期间完成，实习、学籍、校内导师、企业在岗互证。"
      },
      {
        "title": "Interactive Recommendation Agent with Active User Commands",
        "url": "https://arxiv.org/html/2509.21317v1",
        "outcome": "confirmed",
        "note": "原文注明阿里实习完成；学生博士教育和同篇企业员工身份明确。"
      },
      {
        "title": "GenSim: A General Social Simulation Platform with Large Language Model based Agents",
        "url": "https://aclanthology.org/2025.naacl-demo.15.pdf",
        "outcome": "lead",
        "note": "作者实习期与阿里团队合著重叠，但正式全文和初版未发现具名实习或在阿里完成的说明。"
      },
      {
        "title": "RecGPT-V2 Technical Report",
        "url": "https://arxiv.org/html/2512.14503v1",
        "outcome": "lead",
        "note": "淘宝线上项目明确本人核心贡献且实习期重合；正在查是否有企业正式具名表述。"
      },
      {
        "title": "Think Before Recommend: Unleashing the Latent Reasoning Power for Sequential Recommendation",
        "url": "https://arxiv.org/html/2503.22675v1",
        "outcome": "confirmed",
        "note": "学生本人具名实习脚注、公开导师和同篇员工。"
      },
      {
        "title": "From Local Skills to Long-Horizon Web Tasks: Progressive Skill Exploration for LLM Web Agents",
        "url": "https://arxiv.org/html/2611.03116v1",
        "outcome": "confirmed",
        "note": "首页具名将华为实习与论文结合；校内导师公开唯一署名。"
      },
      {
        "title": "MemSim: A Bayesian Simulator for Evaluating Memory of LLM-based Personal Assistants",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2025/file/826aea2253363fe04e8c4991b2a8869e-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "采用 NeurIPS 正式版，首页具名华为实习脚注未见于早期版本。"
      },
      {
        "title": "Expectation Confirmation Preference Optimization for Multi-Turn Conversational Recommendation Agent",
        "url": "https://aclanthology.org/2025.findings-acl.307.pdf",
        "outcome": "confirmed",
        "note": "正式版本具名脚注确认 Xueyang Feng 在华为开展此项研究。"
      }
    ],
    "note": "目前重点核对唐嘉凯、Xueyang Feng 的部分校企成果，尚未覆盖陈旭全部书目。"
  },
  "x_sgJskAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sai.sjtu.edu.cn/cn/facultydetails/zzjs/wangyanfeng",
      "https://code-kunkun.github.io/",
      "https://sunarker.github.io/group.html"
    ],
    "papers": [
      {
        "title": "POINTS-Long: Adaptive Dual-Mode Visual Reasoning in MLLMs",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_POINTS-Long_Adaptive_Dual-Mode_Visual_Reasoning_in_MLLMs_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "Yikun Liu 自述为上海交大在读博士，2025 年 5 月起在腾讯实习。CVPR 正式版列其为具名核心贡献者，同时署交大和腾讯微信 AI，项目页和企业团队仓库佐证同项参与。"
      },
      {
        "title": "POINTS-Seeker: An Open Recipe for Multimodal Search Agents with Visual Memory Management",
        "url": "https://arxiv.org/pdf/2604.14029",
        "outcome": "confirmed",
        "note": "Yikun Liu 自述为上海交大在读博士，2025 年 5 月起在腾讯实习。本人主页列 POINTS-Seeker 为技术报告及本人并列第一作者成果；同一模型及精确论文编号由腾讯账号正式发布，腾讯微信 AI 柳源为另一并列第一作者及通讯作者。"
      },
      {
        "title": "LamRA: Large Multimodal Model as Your Advanced Retrieval Assistant",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_LamRA_Large_Multimodal_Model_as_Your_Advanced_Retrieval_Assistant_CVPR_2025_paper.pdf",
        "outcome": "existing",
        "note": "正式版首页注明学生于小红书实习期间完成，原关系已经入库。"
      },
      {
        "title": "VersaViT: Enhancing MLLM Vision Backbones via Task-Guided Optimization",
        "url": "https://arxiv.org/abs/2602.09934",
        "outcome": "existing",
        "note": "学生个人履历、项目发表时间、导师名单以及原关系已入库。"
      },
      {
        "title": "A Sanity Check on Composed Image Retrieval",
        "url": "https://arxiv.org/abs/2604.12904",
        "outcome": "no-evidence",
        "note": "核对原文及学生完整的公开署名，目前没有目标公司正式员工及该项企业参与的证据。"
      },
      {
        "title": "POINTS-GUI-G: GUI-Grounding Journey",
        "url": "https://arxiv.org/abs/2602.06391",
        "outcome": "no-evidence",
        "note": "有同一学生和腾讯作者，但其具名上海交大博士导师王延峰、谢维迪和姚江超均未署名。"
      },
      {
        "title": "GenMask: Adapting DiT for Segmentation via Direct Mask Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_GenMask_Adapting_DiT_for_Segmentation_via_Direct_Mask_Generation_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "Yuhuan Yang 为上海交大博士生；会议论文首页脚注明确第一作者在阿里巴巴实习期间完成本项研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "ArIg7-0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.whu.edu.cn/info/1019/2496.htm",
      "https://sunzc-sunny.github.io/",
      "https://fireredteam.github.io/",
      "https://sites.google.com/view/yongchaoxu"
    ],
    "papers": [
      {
        "title": "CQ-DINO: Mitigating Gradient Dilution via Category Queries for Vast Vocabulary Object Detection",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/21168020249eccddcc1736ec79bd096f-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "小红书 FireRed 团队明确把 CQ-DINO 列为自身公开研发项目并具名列孙智超，项目初稿在其小红书 AIGC 实习期间发布，本人主页也列为对应的第一作者成果。正式论文同列许永超和小红书研究者 Xu Tang。"
      },
      {
        "title": "IVC-Prune: Revealing the Implicit Visual Coordinates in LVLMs for Vision Token Pruning",
        "url": "https://openreview.net/pdf?id=46LbXtFgBm",
        "outcome": "confirmed",
        "note": "小红书团队的发布项目清单具名列出孙智超作为 IVC-Prune 首位作者，企业维护的公开项目与他在小红书 AllSpark 研究实习时间相符。正式论文由在读博士孙智超、武大导师许永超以及小红书研究者 Xu Tang 共同完成。"
      },
      {
        "title": "FinishStrong: Learning to End Well after Imperfect Start in Video Temporal Grounding",
        "url": "https://arxiv.org/abs/2611.01765",
        "outcome": "lead",
        "note": "原文第一作者邹宇达双署武大和小红书、许永超同篇；待具名指导资料及具体企业研究角色。"
      },
      {
        "title": "RefDrone: A Challenging Benchmark for Drone Scene Referring Expression Comprehension",
        "url": "https://sunzc-sunny.github.io/",
        "outcome": "no-evidence",
        "note": "学生个人书目列本成果由武大团队完成，目前未见研究企业及同期正式员工。"
      }
    ],
    "note": "已交叉核对部分武大与小红书联合成果及就读、指导、实习时间。其余书目待续。"
  },
  "Vtrqj4gAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sai.sjtu.edu.cn/cn/facultydetails/zzjs/xieweidi",
      "https://code-kunkun.github.io/"
    ],
    "papers": [
      {
        "title": "POINTS-Long: Adaptive Dual-Mode Visual Reasoning in MLLMs",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_POINTS-Long_Adaptive_Dual-Mode_Visual_Reasoning_in_MLLMs_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "Yikun Liu 自述为上海交大在读博士，2025 年 5 月起在腾讯实习。CVPR 正式版列其为具名核心贡献者，同时署交大和腾讯微信 AI，项目页和企业团队仓库佐证同项参与。"
      },
      {
        "title": "POINTS-Seeker: An Open Recipe for Multimodal Search Agents with Visual Memory Management",
        "url": "https://arxiv.org/pdf/2604.14029",
        "outcome": "confirmed",
        "note": "Yikun Liu 自述为上海交大在读博士，2025 年 5 月起在腾讯实习。本人主页列 POINTS-Seeker 为技术报告及本人并列第一作者成果；同一模型及精确论文编号由腾讯账号正式发布，腾讯微信 AI 柳源为另一并列第一作者及通讯作者。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "tpXiQkYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1078/1673.htm",
      "https://yaolinli.github.io/"
    ],
    "papers": [
      {
        "title": "TimeChat-Captioner: Scripting Multi-Scene Videos with Time-Aware and Structural Audio-Visual Captions",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/yao26o/yao26o.pdf",
        "outcome": "confirmed",
        "note": "姚林丽是北京大学在读博士，履历记录 2024 年 12 月至 2025 年 12 月在快手可灵实习、导师张远行；本项发表于实习结束后，原文明确其为一作并以北京大学及快手可灵共同署名。"
      },
      {
        "title": "TimeChat-Online: 80% Visual Tokens are Naturally Redundant in Streaming Videos",
        "url": "https://arxiv.org/pdf/2504.17343",
        "outcome": "confirmed",
        "note": "姚林丽首发该项目时正在快手可灵实习；快手导师张远行在其公开科研履历明确将该具名成果列入所领导团队的项目列表，两方项目页均列姚林丽为共同第一作者。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "8UkYbCMAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://info.ruc.edu.cn/jsky/szdw/ajxjgcx/jsjkxyjsx1/js2/260ab5295d334a67beb7620e931268b1.htm",
      "https://yaolinli.github.io/",
      "https://www.ruc-aim3.com/people.html",
      "https://sites.google.com/view/fei-huang",
      "https://aclanthology.org/2025.acl-long.291.pdf"
    ],
    "papers": [
      {
        "title": "Edit As You Wish: Video Caption Editing with Multi-grained User Control",
        "url": "https://arxiv.org/pdf/2305.08389v1",
        "outcome": "confirmed",
        "note": "2023 年 5 月最早的公开稿将一作姚林丽同时列为中国人民大学和阿里巴巴的作者；此时她正在人大读硕士，并由阿里妈妈实习导师葛铁铮指导，后者也在同一篇署名。2024 年正式版更名并更新了学生署名。"
      },
      {
        "title": "mPLUG-DocOwl2: High-resolution Compressing for OCR-free Multi-page Document Understanding",
        "url": "https://aclanthology.org/2025.acl-long.291.pdf",
        "outcome": "confirmed",
        "note": "ACL 正式版标出张良在阿里实习；人大金琴团队名录载博士年份，校方报道对照中英文姓名。"
      }
    ],
    "note": "核对学生张良的部分成果，未遍历金琴全部论文。"
  },
  "HdhaQB0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://saids.ustc.edu.cn/2022/0321/c36359a549612/page.htm",
      "https://junkangwu.github.io/",
      "https://syr-cn.github.io/",
      "https://proceedings.mlr.press/v306/shi26l.html",
      "https://arxiv.org/abs/2509.01322",
      "https://arxiv.org/pdf/2601.21468",
      "https://github.com/meituan/MemOCR",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/shi26l/shi26l.pdf",
      "https://yongduosui.github.io/"
    ],
    "papers": [
      {
        "title": "AlphaDPO: Adaptive Reward Margin for Direct Preference Optimization",
        "url": "https://arxiv.org/pdf/2410.10148v1",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "Larger or Smaller Reward Margins to Select Preferences for LLM Alignment?",
        "url": "https://arxiv.org/pdf/2503.01864v1",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。两位共同第一作者均有脚注说明工作在阿里巴巴实习期间完成。"
      },
      {
        "title": "Towards Robust Alignment of Language Models: Distributionally Robustifying Direct Preference Optimization",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2025/file/294fd30f8cbb89ce328d5a01fef47fb4-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "β-DPO: Direct Preference Optimization with Dynamic β",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/ea888178abdb6fc233226d12321d754f-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "RePO: Understanding Preference Learning Through ReLU-Based Optimization",
        "url": "https://arxiv.org/abs/2503.07426",
        "outcome": "existing",
        "note": "阿里实习与两位具名导师均已收录。"
      },
      {
        "title": "On the Direction of RLVR Updates for LLM Reasoning: Identification and Exploitation",
        "url": "https://arxiv.org/abs/2603.22117",
        "outcome": "lead",
        "note": "有两名导师及阿里通义员工作者，正式版署“独立研究者”，暂缺论文归属学生实习工作的直接材料。"
      },
      {
        "title": "Quantile Advantage Estimation for Entropy-Safe Reasoning",
        "url": "https://arxiv.org/abs/2509.22611",
        "outcome": "lead",
        "note": "吴俊康在首发时正在字节实习，但暂无证明本项目是在该企业完成的材料。"
      },
      {
        "title": "MemOCR: Layout-Aware Visual Memory for Efficient Long-Horizon Reasoning",
        "url": "https://proceedings.mlr.press/v306/shi26l.html",
        "outcome": "confirmed",
        "note": "论文首页脚注明确第一作者 Yaorui Shi 在美团实习时完成本篇研究，学生本人学术主页具名王翔为博士联合导师、本人在美团 LongCat 实习，二者同篇署名。美团研究人员 Qi Gu 以企业通讯作者发表，项目亦由美团官方账号发布。"
      },
      {
        "title": "Unleashing the Power of Graph Data Augmentation on Covariate Distribution Shift",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/file/3a33ddacb2798fc7d83b8334d552e05a-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "2023 年 NeurIPS 正式版首页具名说明第一作者在蚂蚁集团实习时完成当前研究。本人履历列中国科大 2021–2024 在读博士、蚂蚁 2023 年 3 月至 2024 年 6 月实习和此篇蚂蚁同作者为企业导师；2022 年公开的旧稿标题和作者表不同，没有蚂蚁合作方。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "X45Go24AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://saids.ustc.edu.cn/2019/0604/c36359a382217/page.htm",
      "https://junkangwu.github.io/",
      "https://yongduosui.github.io/"
    ],
    "papers": [
      {
        "title": "AlphaDPO: Adaptive Reward Margin for Direct Preference Optimization",
        "url": "https://arxiv.org/pdf/2410.10148v1",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "Larger or Smaller Reward Margins to Select Preferences for LLM Alignment?",
        "url": "https://arxiv.org/pdf/2503.01864v1",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。两位共同第一作者均有脚注说明工作在阿里巴巴实习期间完成。"
      },
      {
        "title": "Towards Robust Alignment of Language Models: Distributionally Robustifying Direct Preference Optimization",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2025/file/294fd30f8cbb89ce328d5a01fef47fb4-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "β-DPO: Direct Preference Optimization with Dynamic β",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/ea888178abdb6fc233226d12321d754f-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "吴俊康的履历记录 2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，并于 2023 年 10 月至 2025 年 4 月在阿里通义实验室实习。首页第一作者脚注明确此项研究在阿里巴巴完成。"
      },
      {
        "title": "RePO: Understanding Preference Learning Through ReLU-Based Optimization",
        "url": "https://arxiv.org/abs/2503.07426",
        "outcome": "existing",
        "note": "阿里实习与两位具名导师均已收录。"
      },
      {
        "title": "On the Direction of RLVR Updates for LLM Reasoning: Identification and Exploitation",
        "url": "https://arxiv.org/abs/2603.22117",
        "outcome": "lead",
        "note": "有两名导师及阿里通义员工作者，正式版署“独立研究者”，暂缺论文归属学生实习工作的直接材料。"
      },
      {
        "title": "Quantile Advantage Estimation for Entropy-Safe Reasoning",
        "url": "https://arxiv.org/abs/2509.22611",
        "outcome": "lead",
        "note": "吴俊康在首发时正在字节实习，但暂无证明本项目是在该企业完成的材料。"
      },
      {
        "title": "Unleashing the Power of Graph Data Augmentation on Covariate Distribution Shift",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/file/3a33ddacb2798fc7d83b8334d552e05a-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "2023 年 NeurIPS 正式版首页具名说明第一作者在蚂蚁集团实习时完成当前研究。本人履历列中国科大 2021–2024 在读博士、蚂蚁 2023 年 3 月至 2024 年 6 月实习和此篇蚂蚁同作者为企业导师；2022 年公开的旧稿标题和作者表不同，没有蚂蚁合作方。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "e5AJDrEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://doi.org/10.1609/aaai.v39i8.32908",
      "https://ojs.aaai.org/index.php/AAAI/article/download/32908/35063",
      "https://www.cse.cuhk.edu.hk/~cwfu/",
      "https://www.cse.cuhk.edu.hk/people/faculty/fu-chi-wing/",
      "https://zhaoyuzhi.github.io/",
      "https://research.cuhk.edu.hk/en/publications/icm-assistant-instruction-tuning-multimodal-large-language-models/",
      "https://arxiv.org/abs/2412.18216"
    ],
    "papers": [
      {
        "title": "ICM-Assistant: Instruction-tuning Multimodal Large Language Models for Rule-based Explainable Image Content Moderation",
        "url": "https://doi.org/10.1609/aaai.v39i8.32908",
        "outcome": "confirmed",
        "note": "正式 AAAI 论文首页将从事华为香港研究中心实习的说明明确附在第一作者 Mengyang Wu 姓名处。港中文教授傅志伟的官方主页列其为所指导的博士生，两人同篇；共同第一作者且项目负责人赵昱植的实名任职资料确认在当时受雇于华为香港研究中心并负责上述多模态内容审核研究。"
      }
    ]
  },
  "J7a5zGEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openaccess.thecvf.com/content/CVPR2025/html/Meng_AniDoc_Animation_Creation_Made_Easier_CVPR_2025_paper.html",
      "https://yihao-meng.github.io/",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/huamin",
      "https://shenyujun.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Meng_AniDoc_Animation_Creation_Made_Easier_CVPR_2025_paper.pdf",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Liu_Dynamic_Typography_Bringing_Text_to_Life_via_Video_Diffusion_Prior_ICCV_2025_paper.pdf",
      "https://ken-ouyang.github.io/",
      "https://animate-your-word.github.io/demo/",
      "https://openaccess.thecvf.com/content/CVPR2026/html/Meng_HoloCine_Holistic_Generation_of_Cinematic_Multi-Shot_Long_Video_Narratives_CVPR_2026_paper.html",
      "https://github.com/yihao-meng/HoloCine"
    ],
    "papers": [
      {
        "title": "AniDoc: Animation Creation Made Easier",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Meng_AniDoc_Animation_Creation_Made_Easier_CVPR_2025_paper.html",
        "outcome": "confirmed",
        "note": "正式论文致谢注明资助来自蚂蚁研究实习项目，第一作者注明港科大与蚂蚁双重署名。蚂蚁研究名下发布该项目官方实现。 三位的真实姓名和时期均可在论文与本人任职履历中核对。"
      },
      {
        "title": "Dynamic Typography: Bringing Text to Life via Video Diffusion Prior",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Liu_Dynamic_Typography_Bringing_Text_to_Life_via_Video_Diffusion_Prior_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "ICCV 正式论文致谢注明 Ant Group Research Intern Program，学生以港科大和蚂蚁双重机构列为共同第一作者，蚂蚁实习导师和港科大博士导师分别为通讯作者。 三位的真实姓名和时期均可在论文与本人任职履历中核对。"
      },
      {
        "title": "HoloCine: Holistic Generation of Cinematic Multi-Shot Long Video Narratives",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Meng_HoloCine_Holistic_Generation_of_Cinematic_Multi-Shot_Long_Video_Narratives_CVPR_2026_paper.html",
        "outcome": "confirmed",
        "note": "技术报告于 2025 年 10 月、学生在蚂蚁研究世界模型与视频生成组工作期间公开；作者对该具体项目同时提供署名和所维护的模型实现，注明其为以两机构参与的第一作者。学生实习导师Yujun Shen与校方导师屈华民均同篇。 三位的真实姓名和时期均可在论文与本人任职履历中核对。"
      }
    ]
  },
  "45HM9IgAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://scst.sysu.edu.cn/teacher/YaoLiang",
      "https://azyoung233.github.io/",
      "https://yao8839836.github.io/"
    ],
    "papers": [
      {
        "title": "G-Cap: A Game Character Caption Generator",
        "url": "https://aclanthology.org/2026.acl-long.248.pdf",
        "outcome": "confirmed",
        "note": "ACL 正式论文首页将具名的腾讯实习脚注标在第一作者 Yang Yang 的姓名后。个人履历可对应中山大学博士学籍和姚亮导师；姚亮与腾讯互娱的同篇作者共同发表。"
      },
      {
        "title": "Friend Ranking in Online Games via Pre-training Edge Transformers",
        "url": "https://arxiv.org/abs/2302.10043",
        "outcome": "no-evidence",
        "note": "姚亮在这篇研究期间的正式身份为腾讯研究员；中山大学任职始于 2024 年末。"
      },
      {
        "title": "Large Language Models are Contrastive Reasoners",
        "url": "https://doi.org/10.1016/j.eswa.2025.130407",
        "outcome": "no-evidence",
        "note": "早期公开稿仅姚亮署名；正式期刊版新增杨洋，未见同篇具名企业员工，杨洋在其他项目的实习不能作为此篇证据。"
      }
    ],
    "note": "逐篇检查了当前重点书目，仍需继续对照完整公开论文清单。"
  },
  "G_Hg-j0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.whu.edu.cn/info/1019/2501.htm",
      "https://cs.ccnu.edu.cn/info/1348/14276.htm",
      "https://dblp.org/pid/62/1637-13.html"
    ],
    "papers": [
      {
        "title": "Complete or Abstain? Aligning SQL Completion with User Preferences",
        "url": "https://aclanthology.org/2026.emnlp-industry.16.pdf",
        "outcome": "lead",
        "note": "原文具名列 Xintong Hu 在腾讯 TEG 实习期间完成研究；目前未找到可确认其与江佳伟指导关系的公开材料。"
      },
      {
        "title": "MTGenRec: An Efficient Distributed Training System for Generative Recommendation Models in Meituan",
        "url": "https://kdd2026.kdd.org/papers/",
        "year": 2026,
        "outcome": "lead",
        "note": "江佳伟与公司及学校作者同篇署名，已对照出版名单或论文首版。还需能具名对应具体学生、项目参与及校内指导的来源。"
      },
      {
        "title": "Self-Supervised Learning for Graph Dataset Condensation",
        "url": "https://obbusiness-private.oss-cn-shanghai.aliyuncs.com/resource-download/report/self-supervised%20learning%20for%20graph%20dataset%20condensation.pdf",
        "year": 2026,
        "outcome": "lead",
        "note": "江佳伟与公司及学校作者同篇署名，已对照出版名单或论文首版。还需能具名对应具体学生、项目参与及校内指导的来源。"
      },
      {
        "title": "DevPiolt: Operation Recommendation for IoT Devices at Xiaomi Home",
        "url": "https://arxiv.org/abs/2511.14227",
        "year": 2025,
        "outcome": "lead",
        "note": "江佳伟与公司及学校作者同篇署名，已对照出版名单或论文首版。还需能具名对应具体学生、项目参与及校内指导的来源。"
      },
      {
        "title": "Rethinking Positional Encoding and Interaction Granularity for CTR Prediction",
        "url": "https://arxiv.org/abs/2610.37140",
        "year": 2026,
        "outcome": "lead",
        "note": "江佳伟与公司及学校作者同篇署名，已对照出版名单或论文首版。还需能具名对应具体学生、项目参与及校内指导的来源。"
      }
    ],
    "note": "已核对部分面向工业数据系统的论文；待同篇项目与学生导师补证。"
  },
  "IIoFY90AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://person.zju.edu.cn/zhaozhou",
      "https://myjokerml.github.io/"
    ],
    "papers": [
      {
        "title": "Speaking While Listening: A Survey and Empirical Audit of Full-Duplex Spoken Dialogue Systems",
        "url": "https://aclanthology.org/2026.emnlp-main.1126.pdf",
        "outcome": "confirmed",
        "note": "陆晶宇是浙江大学在读硕士，个人履历列 2026 年 4 月起在阿里千问语音组实习，具体从事全双工语音对话；正式论文具名列其为首位作者，并同时注明浙江大学和阿里千问双重署名。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "XfqR3yYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.fudan.edu.cn/5b/f8/c30604a482296/page.htm",
      "https://refrain-wbh.github.io/",
      "https://hwcoder.top/about/"
    ],
    "papers": [
      {
        "title": "Outcome Accuracy is Not Enough: Aligning the Reasoning Process of Reward Models",
        "url": "https://aclanthology.org/2026.acl-long.1924.pdf",
        "outcome": "confirmed",
        "note": "复旦硕博连读生汪冰海在个人履历中记载 2024 年 10 月至 2026 年 5 月在阿里千问后训练组实习，并列此篇为一作成果。该论文在实习期内首发；正式版具名以复旦和阿里双署名，并单独注明他是阿里千问实习生。"
      },
      {
        "title": "Distill Visual Chart Reasoning Ability from LLMs to MLLMs",
        "url": "https://aclanthology.org/2025.findings-emnlp.172.pdf",
        "outcome": "confirmed",
        "note": "何为同期在复旦读硕士，2024 年 8 月至 2025 年 2 月在腾讯微信数据中心实习，并在本人履历中将 ReachQA 明确归为这段实习的成果。正式版在首页脚注专门确认了何为的腾讯实习。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "RGsMgZA4H78C": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.fudan.edu.cn/c3/e8/c30604a443368/page.htm",
      "https://refrain-wbh.github.io/",
      "https://lululuyi.github.io/"
    ],
    "papers": [
      {
        "title": "Outcome Accuracy is Not Enough: Aligning the Reasoning Process of Reward Models",
        "url": "https://aclanthology.org/2026.acl-long.1924.pdf",
        "outcome": "confirmed",
        "note": "复旦硕博连读生汪冰海在个人履历中记载 2024 年 10 月至 2026 年 5 月在阿里千问后训练组实习，并列此篇为一作成果。该论文在实习期内首发；正式版具名以复旦和阿里双署名，并单独注明他是阿里千问实习生。"
      },
      {
        "title": "R-Horizon: How Far Can Your Large Reasoning Model Really Go in Breadth and Depth?",
        "url": "https://openreview.net/pdf?id=rRB1bYErbL",
        "outcome": "confirmed",
        "note": "Yi Lu 在 2023 年 9 月至 2026 年 6 月在复旦读硕士，2025 年 6 月至 2026 年 3 月由王嘉宁指导，在美团 LongCat 后训练组实习。原文将该学生列为双署名第一作者；美团官方研究组发布同一项目。"
      },
      {
        "title": "Adaptive Test-Time Compute Allocation for Block Diffusion Language Models in Complex Reasoning",
        "url": "https://arxiv.org/abs/2602.09555",
        "outcome": "existing",
        "note": "第一作者 Yi Lu 在复旦读研、在美团实习，正式作者信息列黄萱菁。此篇已在基线收录。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "klJBYrAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-industry.65/",
      "https://zhangfw123.github.io/",
      "https://iai.buaa.edu.cn/info/1131/1741.htm",
      "https://xidongbo.github.io/",
      "https://aclanthology.org/2026.emnlp-industry.65.pdf",
      "https://aclanthology.org/2026.emnlp-industry.199/",
      "https://chrissie-law.github.io/",
      "https://finance.sina.com.cn/tech/roll/2025-01-09/doc-ineeitpc6547801.shtml",
      "https://aclanthology.org/2026.emnlp-industry.199.pdf",
      "https://arxiv.org/abs/2602.13134"
    ],
    "papers": [
      {
        "title": "From Historical Queries to Actionable Rubrics: Category-Aware Rubric Generation for Local-Life AI Search",
        "url": "https://aclanthology.org/2026.emnlp-industry.65/",
        "outcome": "confirmed",
        "note": "论文首页明确说明北航学生张富威等在美团实习期间完成本篇研究，且庄福振提供远程学术指导。张富威本人说明庄福振为其博士导师；合著者奚冬博的公开履历列出本论文及美团研究工程师身份。"
      },
      {
        "title": "Awakening Dormant Users: Modeling Intent Evolution via LLM-based Functional Role Reasoning for Generative Recommendation",
        "url": "https://aclanthology.org/2026.emnlp-industry.199/",
        "outcome": "confirmed",
        "note": "论文首页仅在第一作者罗慧诗姓名处注明快手实习期间完成；罗慧诗的学术主页明确写明庄福振是她的博士导师，庄福振为论文通讯作者。快手方合著者欧文武的任职记录与同篇论文署名互证。"
      }
    ]
  },
  "shKATh0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.993/",
      "https://zhensun.cn/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue#new_tab",
      "https://zicofish.github.io/",
      "https://aclanthology.org/2026.emnlp-main.993.pdf"
    ],
    "papers": [
      {
        "title": "When New Generators Arrive: Lifelong Machine-Generated Text Attribution via Ridge Feature Transfer",
        "url": "https://aclanthology.org/2026.emnlp-main.993/",
        "outcome": "confirmed",
        "note": "论文首页在 Zhen Sun 姓名旁用星号标注该研究由其在蚂蚁集团实习期间完成；学生本人列明 Yutao Yue 的博士协同指导职责，两人均在正式论文署名；合著者黄智聪的公开履历列出同期的蚂蚁正式研究岗位。"
      }
    ]
  },
  "6hZNEtoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.993/",
      "https://zhensun.cn/",
      "https://zicofish.github.io/",
      "https://aclanthology.org/2026.emnlp-main.993.pdf",
      "https://xinleihe.github.io/",
      "https://dblp.org/pid/227/7262-1.html"
    ],
    "papers": [
      {
        "title": "When New Generators Arrive: Lifelong Machine-Generated Text Attribution via Ridge Feature Transfer",
        "url": "https://aclanthology.org/2026.emnlp-main.993.pdf",
        "outcome": "confirmed",
        "note": "EMNLP 正式论文具名标注 Zhen Sun 的蚂蚁实习，公开履历同时给出两地校方指导及企业导师，和论文通讯作者相符。"
      }
    ],
    "note": "核对了实名学生及对应研究，其余论文继续梳理。"
  },
  "JNhNacoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://rui-yang.ren/index.html",
      "https://legendarydan.github.io/",
      "https://aclanthology.org/2023.acl-long.336.pdf",
      "https://aclanthology.org/2024.findings-emnlp.50.pdf",
      "https://aclanthology.org/2025.coling-main.250.pdf",
      "https://aoidragon.github.io/",
      "https://sites.google.com/site/qiumh0727",
      "https://aclanthology.org/2026.acl-long.934.pdf",
      "https://aibox.ruc.edu.cn/ryjs/index.htm",
      "https://ai.ruc.edu.cn/szdw/zrjs/zx/index.htm",
      "https://grs.ruc.edu.cn/info/1033/3376.htm",
      "https://aclanthology.org/2026.acl-long.612.pdf",
      "https://ojs.aaai.org/index.php/AAAI/article/download/40664/44625",
      "https://aclanthology.org/2023.findings-emnlp.1057.pdf",
      "https://arxiv.org/html/2505.11995v1"
    ],
    "papers": [
      {
        "title": "TOME: A Two-stage Approach for Model-based Retrieval",
        "url": "https://aclanthology.org/2023.acl-long.336.pdf",
        "outcome": "confirmed",
        "note": "分别复核正式版首页具名实习脚注及两方指导关系。"
      },
      {
        "title": "BASES: Large-scale Web Search User Simulation with Large Language Model based Agents",
        "url": "https://aclanthology.org/2024.findings-emnlp.50.pdf",
        "outcome": "existing",
        "note": "分别复核正式版首页具名实习脚注及两方指导关系。"
      },
      {
        "title": "Investigating the Factual Knowledge Boundary of Large Language Models with Retrieval Augmentation",
        "url": "https://aclanthology.org/2025.coling-main.250.pdf",
        "outcome": "confirmed",
        "note": "分别复核正式版首页具名实习脚注及两方指导关系。"
      },
      {
        "title": "Beyond the Last Frame: Process-aware Evaluation for Generative Video Reasoning",
        "url": "https://aclanthology.org/2026.acl-long.934.pdf",
        "outcome": "confirmed",
        "note": "正式版与预印本具名实习脚注一致；中文姓名和导师从李依凡主页核实。"
      },
      {
        "title": "Reinforced Informativeness Optimization for Long-Form Retrieval-Augmented Generation",
        "url": "https://aclanthology.org/2026.acl-long.612.pdf",
        "outcome": "confirmed",
        "note": "正式会议版只给王禹淏标百度实习，校内同一教师的成员名录具名对应。"
      },
      {
        "title": "BEE-RAG: Balanced Entropy Engineering for Retrieval-Augmented Generation",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/40664/44625",
        "outcome": "confirmed",
        "note": "正式会议版只给王禹淏标百度实习，校内同一教师的成员名录具名对应。"
      },
      {
        "title": "A Thorough Examination on Zero-shot Dense Retrieval",
        "url": "https://aclanthology.org/2023.findings-emnlp.1057.pdf",
        "outcome": "confirmed",
        "note": "正式版 2023-12 公开，关联 2022 年预印本，并以正式版脚注核准。"
      },
      {
        "title": "Unveiling Knowledge Utilization Mechanisms in LLM-based Retrieval-Augmented Generation",
        "url": "https://arxiv.org/html/2505.11995v1",
        "outcome": "confirmed",
        "note": "正式会议版只给王禹淏标百度实习，校内同一教师的成员名录具名对应。"
      }
    ],
    "note": "已围绕任瑞阳分期核对部分公开成果，尚未遍历教师全部论文。"
  },
  "7gYVOO8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://hongtengxu.github.io/students.html",
      "https://linear95.github.io/files/CV_Pengyu_Cheng_online.pdf",
      "https://aclanthology.org/2026.findings-emnlp.1070.pdf"
    ],
    "papers": [
      {
        "title": "GD2PO: Group-Dynamic Reward-Decoupled Policy Optimization for Mitigating Multi-Reward RL Conflicts",
        "url": "https://aclanthology.org/2026.findings-emnlp.1070.pdf",
        "outcome": "confirmed",
        "note": "EMNLP 正式版具名阿里实习脚注；教师个人学生名单确认为博士生。"
      }
    ],
    "note": "已针对刘浩天的部分研究核对，未覆盖教师全部论文。"
  },
  "p4RNNCQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.whu.edu.cn/info/3421/37491.htm",
      "https://lichenliang.net/",
      "https://scholar.google.com/citations?user=p4RNNCQAAAAJ"
    ],
    "papers": [
      {
        "title": "Learning to Translate by Translating: Stabilizing the Dual Loop via Semantic-Aware Self-Evolution",
        "url": "https://aclanthology.org/2026.findings-acl.723.pdf",
        "outcome": "confirmed",
        "note": "正式论文首页的实习标记明确指向第一作者 Kui Liu；导师名单与同篇署名可分别核对其武汉大学研究生身份、导师与蚂蚁在职共同作者。"
      },
      {
        "title": "Generative Auto-Bidding with Unified Modeling and Exploration",
        "url": "https://doi.org/10.1145/3805712.3809661",
        "outcome": "confirmed",
        "note": "SIGIR 作者稿将两位武汉大学硕士生点名列为淘天集团实习期间完成研究；通讯作者和阿里员工均有同篇署名。"
      },
      {
        "title": "Q-Regularized Generative Auto-Bidding: From Suboptimal Trajectories to Optimal Policies",
        "url": "https://doi.org/10.1145/3770854.3783950",
        "outcome": "confirmed",
        "note": "KDD 论文第一版及发表版均对两位共同第一作者明确记载淘天实习；李晨亮课题组名录和论文共同署名相互印证。与 SIGIR 的 GUIDE 是不同方法与不同正式出版 DOI。"
      },
      {
        "title": "Token-level Preference Self-Alignment Optimization for Multi-style Outline Controllable Generation",
        "url": "https://aclanthology.org/2025.findings-acl.823.pdf",
        "outcome": "confirmed",
        "note": "具名实习脚注、武汉大学课题组在读博士名单，以及同篇腾讯微信的企业员工署名闭环。"
      },
      {
        "title": "Multi-Interest Recommendation: A Survey",
        "url": "https://arxiv.org/abs/2506.15284",
        "outcome": "lead",
        "note": "学生已核实在读且同篇存在微信员工；论文未明确该篇在企业完成，待项目级材料。"
      }
    ],
    "note": "核对了部分会议原文及课题组实名学生名单；其余公开论文仍在梳理。"
  },
  "3Fdv_mIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.ustc.edu.cn/2020/0828/c23236a615416/page.htm",
      "https://gpzlx1.github.io/gpzlx1-markdown-cv/"
    ],
    "papers": [
      {
        "title": "HATA: Trainable and Hardware-Efficient Hash-Aware Top-k Attention for Scalable Large Model Inference",
        "url": "https://aclanthology.org/2025.findings-acl.1275.pdf",
        "outcome": "confirmed",
        "note": "Ping Gong 是中国科学技术大学在读研究生。正文首页具名写明此项工作是 Ping 在华为实习期间完成，并列该学生为第一作者。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "Xu8NbhYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://homepage.hit.edu.cn/fengxiaocheng",
      "https://hit-scir-tg.netlify.app/",
      "https://ir.hit.edu.cn/2026/0109/c19589a386130/page.htm"
    ],
    "papers": [
      {
        "title": "Fine-Mem: Fine-Grained Feedback Alignment for Long-Horizon Memory Management",
        "url": "https://aclanthology.org/2026.acl-long.900.pdf",
        "outcome": "confirmed",
        "note": "哈尔滨工业大学 SCIR 课题组公开名录列马伟涛为 2023 级博士生。原文第一作者与美团双署名，首页脚注明确这一项研究在美团实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "LKnCub0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://homepage.hit.edu.cn/qinbing",
      "https://hit-scir-tg.netlify.app/",
      "https://ir.hit.edu.cn/2026/0109/c19589a386130/page.htm"
    ],
    "papers": [
      {
        "title": "Fine-Mem: Fine-Grained Feedback Alignment for Long-Horizon Memory Management",
        "url": "https://aclanthology.org/2026.acl-long.900.pdf",
        "outcome": "confirmed",
        "note": "哈尔滨工业大学 SCIR 课题组公开名录列马伟涛为 2023 级博士生。原文第一作者与美团双署名，首页脚注明确这一项研究在美团实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "H6vHKJoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/zhaohai.html",
      "https://zouyingcao.github.io/"
    ],
    "papers": [
      {
        "title": "PGPO: Enhancing Agent Reasoning via Pseudocode-style Planning Guided Preference Optimization",
        "url": "https://aclanthology.org/2025.findings-acl.774.pdf",
        "outcome": "confirmed",
        "note": "曹邹颖履历明确列上海交通大学 2023 年 9 月至 2026 年 3 月在读，2024 年 7 月至 2025 年 6 月在阿里巴巴未来生活实验室实习时开展 PGPO；正式版具名脚注确认该研究在阿里实习期间开展。"
      },
      {
        "title": "Remember Me, Refine Me: A Dynamic Procedural Memory Framework for Experience-Driven Agent Evolution",
        "url": "https://aclanthology.org/2026.findings-acl.829.pdf",
        "outcome": "confirmed",
        "note": "曹邹颖 2023 年 9 月至 2026 年 3 月就读上海交通大学，履历明确 ReMe 是 2025 年 6 月起在阿里通义实验室实习所做项目，参与搭建程序记忆框架。正式版首页具名脚注确认实习，研究在学生仍就读且实习期间首发。"
      },
      {
        "title": "SCANS: Mitigating the Exaggerated Safety for LLMs via Safety-Conscious Activation Steering",
        "url": "https://arxiv.org/abs/2408.11491",
        "outcome": "no-evidence",
        "note": "学生曹邹颖及指导教师赵海已核实，第三位共同作者为校方，无调查范围内企业正式员工作者。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "d1YlKkAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1083/1705.htm",
      "https://jamydon.online/",
      "https://jamydon.online/cv/"
    ],
    "papers": [
      {
        "title": "Think Outside the Policy: In-Context Steered Policy Optimization",
        "url": "https://aclanthology.org/2026.findings-acl.132.pdf",
        "outcome": "confirmed",
        "note": "北京大学在读硕士 Chenming Tang 是正式版具名共同第一作者，首页脚注标明该工作于腾讯实习期间完成；其公开履历将首发所处的 2025 年 7 月至 2026 年 5 月列为在腾讯混元实习并开展强化学习研究。"
      },
      {
        "title": "Do Not Step Into the Same River Twice: Learning to Reason from Trial and Error",
        "url": "https://arxiv.org/pdf/2510.26109v1",
        "outcome": "existing",
        "note": "北京大学硕士 Chenming Tang 为具名第一作者；最早预印本在其腾讯混元实习期间发布，其首页脚注说明所做研究完成于腾讯实习。正式版保留相同三位作者和企业署名。"
      },
      {
        "title": "Democratizing Tool Learning with Environments Fully Simulated by a Free 8B Language Model",
        "url": "https://arxiv.org/pdf/2604.17739v1",
        "outcome": "confirmed",
        "note": "北京大学硕士 Chenming Tang 的腾讯混元实习为 2025 年 7 月至 2026 年 5 月；最早公开稿同期标记他为共同第一作者，并明确脚注说明该工作于腾讯实习期间完成。更新后的标题由作者与北大官网交叉确认。"
      },
      {
        "title": "ORBIT: On-policy Exploration-Exploitation for Controllable Multi-Budget Reasoning",
        "url": "https://arxiv.org/pdf/2601.08310",
        "outcome": "confirmed",
        "note": "Chenming Tang 的在读履历说明 2025 年 7 月至 2026 年 5 月在腾讯混元实习；正文星号同时标出三名北大具名作者，其中包括 Chenming Tang，并明确说明其研究于腾讯实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "y6m820wAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.1420/",
      "https://shiweijiezero.github.io/weijie.github.io/",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/zxf",
      "https://sites.google.com/site/yaliangli/",
      "https://aclanthology.org/2026.emnlp-main.1420.pdf"
    ],
    "papers": [
      {
        "title": "R3L: Reflect-then-Retry Reinforcement Learning with Language-Guided Exploration, Pivotal Credit, and Positive Amplification",
        "url": "https://aclanthology.org/2026.emnlp-main.1420/",
        "outcome": "confirmed",
        "note": "正式论文首页具名写明史伟杰在通义实验室实习期间完成此研究；其本人将 R³L 列在通义实习项目下，且写明港科大博士导师 Xiaofang Zhou。正式论文中阿里方同篇作者 Yaliang Li 的履历列出 2018 年以来的正式任职。"
      }
    ]
  },
  "1gSbcYoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.findings-acl.1306/",
      "https://gknl.github.io/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/LI-Jia/jialee#new_tab",
      "https://jinchaoli.com/",
      "https://aclanthology.org/2026.findings-acl.1306.pdf",
      "https://github.com/Tongyi-Zhiwen/Qwen-Doc",
      "https://doi.org/10.1145/3711896.3737248",
      "https://phoveran.fyi/",
      "https://sites.google.com/view/lijia",
      "https://cdn.aaai.org/ojs/5357/5357-13-8582-1-10-20200508.pdf",
      "https://arxiv.org/html/2506.11037v1",
      "https://doi.org/10.1145/3770854.3783924",
      "https://patents.google.com/patent/US10728033B2/en",
      "https://www.youtube.com/watch?v=eEMgqDldqZQ"
    ],
    "papers": [
      {
        "title": "Incentivizing In-depth Reasoning over Long Contexts with Process Advantage Shaping",
        "url": "https://aclanthology.org/2026.findings-acl.1306/",
        "outcome": "confirmed",
        "note": "第一作者彭淼的首页脚注具名写明在阿里巴巴通义实验室实习期间进行；其公开履历记录实习起止时间及同篇通讯作者 Jia Li 的博士导师身份。当期通义企业作者 Ming Yan 在该论文及多篇正式通义项目为企业通讯作者，并由在通义工作作者的履历确认其在通义实验室指导职责。"
      },
      {
        "title": "Mini-Game Lifetime Value Prediction in WeChat",
        "url": "https://doi.org/10.1145/3711896.3737248",
        "outcome": "confirmed",
        "note": "本人明确逐项列为在读期间参与的微信企业研究；作者开放原稿记录微信小游戏投放系统的真实线上 A/B 实验，并具名列出资深腾讯研发合作者 Gong Chen。 学生公开主页同时明确在香港科技大学（广州）就读及 Jia Li 为本篇同署名的博士导师。"
      },
      {
        "title": "Merchant Category Identification in Weixin Pay",
        "url": "https://doi.org/10.1145/3770854.3783924",
        "outcome": "confirmed",
        "note": "本人明确逐项列为参与的微信支付企业研究；该论文作者表及 ACM 公开报告明确指向腾讯微信支付体系，并非将另一腾讯实习自动归于本篇。 学生公开主页同时明确在香港科技大学（广州）就读及 Jia Li 为本篇同署名的博士导师。"
      }
    ]
  },
  "gfB8UaIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.993/",
      "https://zhensun.cn/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/WEI-Jiaheng/jiahengwei#new_tab",
      "https://zicofish.github.io/",
      "https://aclanthology.org/2026.emnlp-main.993.pdf"
    ],
    "papers": [
      {
        "title": "When New Generators Arrive: Lifelong Machine-Generated Text Attribution via Ridge Feature Transfer",
        "url": "https://aclanthology.org/2026.emnlp-main.993/",
        "outcome": "confirmed",
        "note": "正式论文首页星号明确注明第一作者 Zhen Sun 在蚂蚁集团实习期间完成论文；其本人主页列 Jiaheng Wei 为港科大（广州）博士主导师。蚂蚁正式研究人员黄智聪自 2023 年起任职，正式论文为通讯作者。"
      }
    ]
  },
  "nVk-7EAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.332/",
      "https://enjundu.com/",
      "https://yzhangee.github.io/group/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/ZHANG-Yongqi/yongqizhang#new_tab",
      "https://pujunfu.github.io/",
      "https://aclanthology.org/2026.emnlp-main.332.pdf",
      "https://aclanthology.org/2026.findings-emnlp.955/",
      "https://aclanthology.org/2026.findings-emnlp.955.pdf"
    ],
    "papers": [
      {
        "title": "EviRank: Structured Relevance Evidence for Multimodal Image Re-ranking",
        "url": "https://aclanthology.org/2026.emnlp-main.332/",
        "outcome": "lead",
        "note": "待复核后再列入关系索引。"
      },
      {
        "title": "SnapBench: Benchmarking Snap-and-Ask Multimodal Retrieval for Mobile Interactions",
        "url": "https://aclanthology.org/2026.findings-emnlp.955/",
        "outcome": "lead",
        "note": "待复核后再列入关系索引。"
      }
    ]
  },
  "HsLdRZYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.findings-acl.1193/",
      "https://shi.buaa.edu.cn/liuzeming/zh_CN/lwcg/206022/content/33212.htm"
    ],
    "papers": [
      {
        "title": "Live-Aid: A Large-Scale Dialogue Dataset and Benchmark for Interleaved Multi-party Interactions in Live Streaming",
        "url": "https://aclanthology.org/2026.findings-acl.1193/",
        "outcome": "lead",
        "note": "第一作者和次作者都有同篇快手实习脚注；尚无实名材料证明 Liu 或 Wang 与二人在研究时是公开的师生指导关系。"
      }
    ]
  },
  "0ez7lA0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.findings-acl.1193/",
      "https://shi.buaa.edu.cn/liuzeming/zh_CN/lwcg/206022/content/33212.htm"
    ],
    "papers": [
      {
        "title": "Live-Aid: A Large-Scale Dialogue Dataset and Benchmark for Interleaved Multi-party Interactions in Live Streaming",
        "url": "https://aclanthology.org/2026.findings-acl.1193/",
        "outcome": "lead",
        "note": "论文中有明确快手实习脚注；尚欠 Wang 是具名实习学生的校内指导教师的记录。"
      }
    ]
  },
  "KQ2S01UAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.2683/",
      "https://liliu-avril.github.io/"
    ],
    "papers": [
      {
        "title": "Closing the Verification Loop: Self-Check Captioning for Long-Paragraph Detailed Audio Captioning",
        "url": "https://aclanthology.org/2026.emnlp-main.2683/",
        "outcome": "lead",
        "note": "正文附 Fengji Ma、Yan Rong 的准确实习脚注，但尚未找到 Li Liu 的官方学生名录、公开学位论文或本人履历确认指导。"
      }
    ]
  },
  "cVDF1tkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.acl-long.1047/",
      "https://liyichen-cly.github.io/"
    ],
    "papers": [
      {
        "title": "Anti-Length Shift: Dynamic Outlier Truncation for Training Efficient Reasoning Models",
        "url": "https://aclanthology.org/2026.acl-long.1047/",
        "outcome": "lead",
        "note": "小红书实习脚注专属于 USTC 博士生 Wei Wu，正式员工 Liyi Chen 确认；目前未查到校际共培或论文指导材料将 Wei Wu 交由港科大（广州）Hui Xiong 指导。同篇 Liyi Chen 曾为其学生但已于 2025 年毕业。"
      }
    ]
  },
  "Nir-EDYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.986/",
      "https://www.alphaxiv.org/@wenxuan-jiang"
    ],
    "papers": [
      {
        "title": "TR-ICRL: Test-Time Rethinking for In-Context Reinforcement Learning",
        "url": "https://aclanthology.org/2026.emnlp-main.986/",
        "outcome": "lead",
        "note": "Wenxuan Jiang 的美团研究实习于 2026 年 5 月结束，其本科毕业于东北大学，2026 年 9 月才进入港理工由 Ninghao Liu 指导；尚无资料证明当初的同期指导或对本文中其他学生的指导。"
      }
    ]
  },
  "KE6AzvoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://wlr737.github.io/",
      "https://bitwjg.github.io/",
      "https://openreview.net/pdf/635fffd836636e1c56d6f86742d8b5a11c3e617d.pdf"
    ],
    "papers": [
      {
        "title": "NeedleInATable: Exploring Long-Context Capability of Large Language Models towards Long-Structured Tables",
        "url": "https://openreview.net/pdf/635fffd836636e1c56d6f86742d8b5a11c3e617d.pdf",
        "outcome": "confirmed",
        "note": "NeurIPS 正式版的联合工作脚注标给王岚睿本人；其主页确认在读期导师，另不推定本篇为实习。"
      }
    ],
    "note": "仅核对部分受指导学生的公开成果，未遍历教师全部书目。"
  },
  "voxznZAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ise.sysu.edu.cn/teacher/LiangXiaodan",
      "https://menik1126.github.io/Jing_Xiong_s_CV_10_25.pdf",
      "https://menik1126.github.io/",
      "https://dblp.org/pid/78/3967.html",
      "https://zhanglk9.github.io/",
      "https://chen-xw.github.io/",
      "https://xuhangcn.github.io/",
      "https://kun-xiang.github.io/",
      "https://tangtaogo.github.io/",
      "https://agist.org/iccsi2022/AutumnSchoolBios.html",
      "https://tangtaogo.github.io/publications/",
      "https://graduate.sysu.edu.cn/zsw/sites/default/files/2025-06/%E9%99%84%E4%BB%B6%EF%BC%9A%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A62025%E5%B9%B4%E5%8D%9A%E5%A3%AB%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8B%9F%E5%BD%95%E5%8F%96%E5%90%8D%E5%8D%95%EF%BC%88%E4%B8%8D%E5%90%AB%E7%9B%B4%E5%8D%9A%E7%94%9F%EF%BC%89%20.pdf",
      "https://hanjianhua44.github.io/",
      "https://www.sysu.edu.cn/news/info/2331/1397411.htm"
    ],
    "papers": [
      {
        "title": "DT-Solver: Automated Theorem Proving with Dynamic-Tree Sampling Guided by Proof-level Value Function",
        "url": "https://aclanthology.org/2023.acl-long.706.pdf",
        "outcome": "confirmed",
        "note": "正式论文脚注另外明确第一作者 Haiming Wang 在华为实习；此条的在读作者采用熊璟，其本人简历明确列出在华为负责 DT-Solver 的证明环境及同期中山大学校内指导。"
      },
      {
        "title": "TRIGO: Benchmarking Formal Mathematical Proof Reduction for Generative Language Models",
        "url": "https://aclanthology.org/2023.emnlp-main.711.pdf",
        "outcome": "confirmed",
        "note": "熊璟在同期简历的华为实习责任项明确列出他开发 TRIGO；正式 EMNLP 论文署熊璟为共同第一作者、梁小丹为通讯作者，华为实习导师 Yichun Yin 同篇署名。"
      },
      {
        "title": "LEGO-Prover: Neural Theorem Proving with Growing Libraries",
        "url": "https://arxiv.org/abs/2310.00656",
        "outcome": "lead",
        "note": "正式版有华为人员，熊璟已证实同期在华为从事定理证明；尚未在本人实习任务或官方材料中找到此篇具名关联。"
      },
      {
        "title": "AtomicVLA: Unlocking the Potential of Atomic Skill Learning in Robots",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_AtomicVLA_Unlocking_the_Potential_of_Atomic_Skill_Learning_in_Robots_CVPR_2026_paper.html",
        "note": "正式论文的第一作者与通讯作者分别为张立魁和梁小丹，徐航署引望。学生本人具体列出该课题，华为年报披露引望承接其智能汽车解决方案；按论文中的引望团队名称展示。",
        "outcome": "confirmed"
      },
      {
        "title": "Latent Visual States for Efficient Multimodal Reasoning",
        "url": "https://arxiv.org/pdf/2606.24233",
        "note": "作者原文将 D-GSPO 列为方法，张立魁的实习履历点名该训练项目；梁小丹为校方通讯作者，徐航为引望企业作者，同篇另有华为诺亚方舟实验室署名。",
        "outcome": "confirmed"
      },
      {
        "title": "SemHiTok: A Unified Image Tokenizer via Semantic-Guided Hierarchical Codebook for Multimodal Understanding and Generation",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/49ffa271264808cf500ea528ed8ec9b3-Paper-Conference.pdf",
        "year": 2026,
        "outcome": "lead",
        "note": "实习脚注专指第一作者 Zisheng Chen 而非同组 Xiuwei Chen；前者在读已确认，待找其具名校内导师。"
      },
      {
        "title": "TransMamba: Fast Universal Architecture Adaption from Transformers to Mamba",
        "url": "https://arxiv.org/html/2502.15130",
        "year": 2025,
        "outcome": "lead",
        "note": "校内师生、两位华为员工和学生同期在华为实习均可核查；原文暂未找到将这份工作归为实习产出的说明。"
      },
      {
        "title": "SyncLoop: A Multimodal Dual-Loop Framework for Self-Improving Mathematical Reasoning",
        "url": "https://arxiv.org/html/2507.16518v3",
        "year": 2026,
        "outcome": "lead",
        "note": "原文具名作者和华为研究人员，仍需查学生参与企业一侧的具体研究任务；C2-Evo 为同一稿件的旧题名。"
      },
      {
        "title": "Beyond the Eye: Efficient Multimodal Reasoning via Self-Regulated Implicit Visual Tools",
        "url": "https://doi.org/10.1109/TPAMI.2026.3745877",
        "year": 2026,
        "outcome": "lead",
        "note": "同篇在读生、导师与引望员工都有具名来源，还需逐篇证明该项目属于学生引望实习期间的工作。"
      },
      {
        "title": "RynnUnify: Towards Unified Embodied Brain",
        "url": "https://arxiv.org/html/2610.32965v1",
        "year": 2026,
        "outcome": "confirmed",
        "note": "达摩院正式项目与 arXiv 原文均将项鲲列为核心作者、Xin Li 为项目负责人，梁小丹共同署名。学生本人履历明确区分其博士导师和企业实习导师。"
      },
      {
        "title": "Benchmarking the Robustness of LiDAR-Camera Fusion for 3D Object Detection",
        "url": "https://openaccess.thecvf.com/content/CVPR2023W/E2EAD/papers/Yu_Benchmarking_the_Robustness_of_LiDAR-Camera_Fusion_for_3D_Object_Detection_CVPRW_2023_paper.pdf",
        "year": 2023,
        "outcome": "confirmed",
        "note": "CVPR 工作坊出版原文把达摩院实习脚注具名标在中大唐涛身上，并列梁小丹为通讯作者、Dayang Hao 为阿里方作者。唐涛履历说明同期的中大学籍、校方导师和达摩院实习。"
      },
      {
        "title": "LiDAR-NeRF: Novel LiDAR View Synthesis via Neural Radiance Fields",
        "url": "https://doi.org/10.1145/3664647.3681482",
        "year": 2024,
        "outcome": "confirmed",
        "note": "原文在唐涛名下标注研究于达摩院实习期间完成。正式出版名单与研究项目页都列中山大学博士导师梁小丹及阿里自动驾驶团队合作者 Dayang Hao。实习导师同期履历还把 LiDAR 点云仿真列为唐涛的实习课题。"
      },
      {
        "title": "RoboPearls: Editable Video Simulation for Robot Manipulation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Tao_RoboPearls_Editable_Video_Simulation_for_Robot_Manipulation_ICCV_2025_paper.pdf",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "论文将唐涛的实习明确归于理想汽车，该公司不在本次调查范围；另一企业作者署字节跳动，但未见学生亦为字节开展该篇研究。"
      },
      {
        "title": "OmniGen: Unified Multimodal Sensor Generation for Autonomous Driving",
        "url": "https://westlake-autolab.github.io/assets/pdf/MM25_UniGen__Camera_ready.pdf",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "正式稿明确唐涛在理想汽车实习完成研究；未发现他在本篇参与范围内企业研究。"
      },
      {
        "title": "UA-Track: Uncertainty-Aware End-to-End 3D Multi-Object Tracking",
        "url": "https://liautoad.github.io/ua-track-website/",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "作者项目页和本人履历均将该时期的企业研究指向理想汽车，超出范围。"
      },
      {
        "title": "S2-Track: A Simple yet Strong Approach for End-to-End 3D Multi-Object Tracking",
        "url": "https://proceedings.mlr.press/v267/tang25p.html",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "正式版延续同一项理想汽车项目，超出企业范围；不把先期 UA-Track 另计关系。"
      },
      {
        "title": "BEV-TSR: Text-Scene Retrieval in BEV Space for Autonomous Driving",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/32782",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "AAAI 出版页面列唐涛、梁小丹和理想汽车作者；无范围内企业作者。"
      },
      {
        "title": "AlignMiF: Geometry-Aligned Multimodal Implicit Field for LiDAR-Camera Joint Synthesis",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Tao_AlignMiF_Geometry-Aligned_Multimodal_Implicit_Field_for_LiDAR-Camera_Joint_Synthesis_CVPR_2024_paper.pdf",
        "year": 2024,
        "outcome": "lead",
        "note": "原文署菜鸟集团作者并列唐涛为中大学生，没有实习声明。学生履历的达摩院实习方向与技术相符，但尚未逐篇确认。"
      },
      {
        "title": "Thinking with Geometry: Active Geometry Integration for Spatial Reasoning",
        "url": "https://proceedings.mlr.press/v306/li26j.html",
        "year": 2026,
        "outcome": "confirmed",
        "note": "ICML 首页在中大第一作者李浩源名字后标记在引望实习完成研究。中大公告具名将同一项目归于梁小丹课题组与引望，并由李浩源撰稿；学校名单列他硕博连读。正式版列引望研究人员 Jianhua Han 为共同作者。"
      },
      {
        "title": "UniGS: Unified Language-Image-3D Pretraining with Gaussian Splatting",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2025/file/d826f5aadb26db488b8686097ceea2d1-Paper-Conference.pdf",
        "year": 2025,
        "outcome": "lead",
        "note": "ICLR 原文确证李浩源在华为诺亚方舟实习期间完成；校方硕士入学材料与同篇通讯作者吻合，尚需拟确认该篇校内指导的具名来源。"
      },
      {
        "title": "GeoThinker-F: Endogenous Predictive World Representations for Fast Spatial Intelligence",
        "url": "https://arxiv.org/html/2610.20592",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "本篇是新的论文，实习脚注归小鹏汽车，当前企业范围不含小鹏，不能沿用前篇引望关系。"
      },
      {
        "title": "AtomThink: Multimodal Slow Thinking with Atomic Step Reasoning",
        "url": "https://ieeexplore.ieee.org/abstract/document/11347549/authors",
        "year": 2026,
        "outcome": "lead",
        "note": "项鲲确为中大学生、梁小丹为其导师，且同期任华为实习生，企业导师也参与署名；暂缺该篇参与企业项目的公开说明。两份 arXiv 稿件都属于同一个项目。"
      },
      {
        "title": "SeePhys: Does Seeing Help Thinking? – Benchmarking Vision-Based Physics Reasoning",
        "url": "https://arxiv.org/abs/2505.19099",
        "year": 2025,
        "outcome": "lead",
        "note": "项鲲当期为华为诺亚方舟实习生，华为实习导师同篇；项目页及论文首版均未见具名说明他以企业实习身份开展本项。"
      }
    ],
    "note": "已逐篇梳理部分自动定理证明与多模态成果；其余公开书目仍在核查。"
  },
  "W-FGd_UAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~0009513",
      "https://xlchen0205.github.io/"
    ],
    "papers": [
      {
        "title": "AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration",
        "url": "https://openreview.net/pdf/0eee20e215f987e2c76d393d0a0fb6f2f88e100a.pdf",
        "outcome": "confirmed",
        "note": "陈鑫龙履历列他自 2025 年 9 月在中科院自动化所攻读博士，自 2024 年 11 月在快手可灵实习。原文具名列他为本篇第一作者，脚注明确这项工作完成于可灵实习期间。"
      },
      {
        "title": "DiaDem: Advancing Dialogue Descriptions in Audiovisual Video Captioning for Multimodal Large Language Models",
        "url": "https://arxiv.org/pdf/2601.19267",
        "outcome": "confirmed",
        "note": "陈鑫龙履历列他自 2025 年 9 月在中科院自动化所攻读博士，自 2024 年 11 月在快手可灵实习。原文具名列他为本篇第一作者，脚注明确这项工作完成于可灵实习期间。"
      },
      {
        "title": "PIGEONS: Incremental Long-Video Captioning with Persistent Identity Gallery and Evolving Overarching Narrative Summary",
        "url": "https://arxiv.org/pdf/2610.16066",
        "outcome": "confirmed",
        "note": "陈鑫龙履历列他自 2025 年 9 月在中科院自动化所攻读博士，自 2024 年 11 月在快手可灵实习。原文具名列他为本篇第一作者，脚注明确这项工作完成于可灵实习期间。"
      },
      {
        "title": "VidCapBench: A Comprehensive Benchmark of Video Captioning for Controllable Text-to-Video Generation",
        "url": "https://arxiv.org/abs/2502.12782",
        "outcome": "lead",
        "note": "一作实习与快手员工作者可核，但最早公开时陈鑫龙仍在华中科技大学读本科。国科大博士导师的同期指导材料尚缺。"
      },
      {
        "title": "VidBridge-R1: Bridging QA and Captioning for RL-based Video Understanding Models with Intermediate Proxy Tasks",
        "url": "https://arxiv.org/abs/2506.09079",
        "outcome": "lead",
        "note": "一作实习与快手员工作者可核，但最早公开时陈鑫龙仍在华中科技大学读本科。国科大博士导师的同期指导材料尚缺。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "fyMni2cAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2024.acl-long.832/",
      "https://kwanwaichung.github.io/files/cv.pdf",
      "https://www.se.cuhk.edu.hk/news-events/news-archive/",
      "http://www.se.cuhk.edu.hk/people/kfwong.html",
      "https://dev3.noahlab.com.hk/Qun_Liu.html",
      "https://aclanthology.org/2024.acl-long.832.pdf",
      "https://aclanthology.org/2024.emnlp-main.1124/",
      "https://aclanthology.org/2024.emnlp-main.1124.pdf"
    ],
    "papers": [
      {
        "title": "M4LE: A Multi-Ability Multi-Range Multi-Task Multi-Domain Long-Context Evaluation Benchmark for Large Language Models",
        "url": "https://aclanthology.org/2024.acl-long.832/",
        "outcome": "confirmed",
        "note": "正式论文首页的华为诺亚方舟实习脚注附在第一作者 Wai-Chung Kwan 名下，学术简历同时给出其博士阶段与实习期，写明构建了两项大模型评测基准。港中文院系具名确认博士导师黄锦辉；华为官网确认企业作者刘群的正式岗位。"
      },
      {
        "title": "MT-Eval: A Multi-Turn Capabilities Evaluation Benchmark for Large Language Models",
        "url": "https://aclanthology.org/2024.emnlp-main.1124/",
        "outcome": "confirmed",
        "note": "正式论文首页的华为诺亚方舟实习脚注附在第一作者 Wai-Chung Kwan 名下，学术简历同时给出其博士阶段与实习期，写明构建了两项大模型评测基准。港中文院系具名确认博士导师黄锦辉；华为官网确认企业作者刘群的正式岗位。"
      }
    ]
  },
  "wLtu3FYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2024.acl-long.257/",
      "https://yjiangcm.github.io/internship/",
      "https://yjiangcm.github.io/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/WANG-Wei/weiwcs#new_tab",
      "https://dev3.noahlab.com.hk/Qun_Liu.html",
      "https://aclanthology.org/2024.acl-long.257.pdf",
      "https://dsa.hkust-gz.edu.cn/zh/blog/2024/06/02/towards-the-enhancement-of-large-language-models/",
      "https://aclanthology.org/2024.acl-long.258/"
    ],
    "papers": [
      {
        "title": "FollowBench: A Multi-level Fine-grained Constraints Following Benchmark for Large Language Models",
        "url": "https://aclanthology.org/2024.acl-long.257/",
        "outcome": "confirmed",
        "note": "第一作者姜宇心的履历在华为诺亚方舟实习条目下明确列其构建 FollowBench，同篇有实习脚注；其博士导师王伟列为共同作者，华为诺亚负责人刘群按企业署名。"
      },
      {
        "title": "Learning to Edit: Aligning LLMs with Knowledge Editing",
        "url": "https://aclanthology.org/2024.acl-long.258/",
        "outcome": "existing",
        "note": "同一导师及学生的华为联合研究已有记录；论文具名华为实习脚注，学生公开履历将 LTE 列为具体实习工作。"
      }
    ]
  },
  "f1hBi5wAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2024.acl-long.163/",
      "https://aclanthology.org/2024.acl-long.163.pdf",
      "https://zhaoxlpku.github.io/",
      "https://www.ai.hku.hk/index.php/people/academic-staff/lpk",
      "https://dsa.hkust-gz.edu.cn/blog/2022/12/02/towards-diverse-informative-and-robust-natural-language-generation/",
      "https://aclanthology.org/2024.acl-long.407/",
      "https://aclanthology.org/2024.acl-long.407.pdf",
      "https://timhuang1.github.io/",
      "https://aclanthology.org/2024.findings-acl.433/",
      "https://aclanthology.org/2024.findings-acl.433.pdf",
      "https://aclanthology.org/2023.findings-acl.715/",
      "https://aclanthology.org/2023.findings-acl.715.pdf",
      "https://lemaoliu.github.io/",
      "https://aclanthology.org/2025.findings-acl.935/",
      "https://aclanthology.org/2025.findings-acl.935.pdf",
      "https://jianguanthu.github.io/"
    ],
    "papers": [
      {
        "title": "GSM-Plus: A Comprehensive Benchmark for Evaluating the Robustness of LLMs as Mathematical Problem Solvers",
        "url": "https://aclanthology.org/2024.acl-long.163/",
        "outcome": "confirmed",
        "note": "两位学生共同作者 Qintong Li 与 Xueliang Zhao 都标有腾讯实习脚注，均公开列出 Lingpeng Kong 为香港大学在读阶段导师；这里登记 Xueliang Zhao 链。 同篇作者 Lingpeng Kong 的校内博士指导身份由学生本人证实；企业共同作者的正式任职和同篇署名已核对。"
      },
      {
        "title": "SEGO: Sequential Subgoal Optimization for Mathematical Problem-Solving",
        "url": "https://aclanthology.org/2024.acl-long.407/",
        "outcome": "confirmed",
        "note": "论文首页具名第一作者 Xueliang Zhao 的腾讯 AI Lab 实习，博士就读及 2023–2024 腾讯实习均由其本人确认。 同篇作者 Lingpeng Kong 的校内博士指导身份由学生本人证实；企业共同作者的正式任职和同篇署名已核对。"
      },
      {
        "title": "BBA: Bi-Modal Behavioral Alignment for Reasoning with Large Vision-Language Models",
        "url": "https://aclanthology.org/2024.findings-acl.433/",
        "outcome": "confirmed",
        "note": "正式论文首页具名注明第一作者在腾讯 AI Lab 实习时完成正文研究。 同篇作者 Lingpeng Kong 的校内博士指导身份由学生本人证实；企业共同作者的正式任职和同篇署名已核对。"
      },
      {
        "title": "SORTIE: Dependency-Aware Symbolic Reasoning for Logical Data-to-text Generation",
        "url": "https://aclanthology.org/2023.findings-acl.715/",
        "outcome": "confirmed",
        "note": "论文首页脚注明确点名 Xueliang Zhao 与 Tingchen Fu 两位并列第一作者均在腾讯 AI Lab 的实习中参与此篇。 同篇作者 Lingpeng Kong 的校内博士指导身份由学生本人证实；企业共同作者的正式任职和同篇署名已核对。"
      },
      {
        "title": "PromptCoT: Synthesizing Olympiad-level Problems for Mathematical Reasoning in Large Language Models",
        "url": "https://aclanthology.org/2025.findings-acl.935/",
        "outcome": "confirmed",
        "note": "论文首页将第一作者 Xueliang Zhao 的工作具名标为蚂蚁集团实习期完成。 同篇作者 Lingpeng Kong 的校内博士指导身份由学生本人证实；企业共同作者的正式任职和同篇署名已核对。"
      }
    ]
  },
  "1Op_wVUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://cma.hkust-gz.edu.cn/faculty-regular/rachel-franz/",
      "https://orcid.org/0000-0001-9760-8538",
      "https://dblp.dagstuhl.de/pid/135/6924.html",
      "https://rachelfranz.com/publications/",
      "https://depts.washington.edu/acelab/people.html"
    ],
    "papers": [
      {
        "title": "Comparing Locomotion Techniques in Virtual Reality for People with Upper-Body Motor Impairments",
        "url": "https://faculty.washington.edu/wobbrock/pubs/assets-23.02.pdf",
        "outcome": "no-evidence",
        "note": "ASSETS 会议全文首页三位作者均署华盛顿大学，未见范围内企业共同作者。"
      },
      {
        "title": "A Virtual Reality Scene Taxonomy: Identifying and Designing Accessible Scene-Viewing Techniques",
        "url": "https://doi.org/10.1145/3635142",
        "outcome": "no-evidence",
        "note": "出版社作者单位列华盛顿大学与微软研究院；该项目不涉及现有 14 家范围内企业，研究期间 Franz 为华盛顿大学博士生。"
      },
      {
        "title": "Improving the accessibility of virtual reality for people with motor and visual impairments",
        "url": "https://faculty.washington.edu/wobbrock/pubs/chi-24.02.pdf",
        "outcome": "no-evidence",
        "note": "华盛顿大学实验室论文清单及工作坊全文列三位作者为华盛顿大学，同篇未见范围内企业作者。"
      },
      {
        "title": "Supporting the Design, Selection, and Evaluation of Accessible Interaction Techniques for Virtual Reality",
        "url": "https://eric.ed.gov/?id=ED662234",
        "outcome": "no-evidence",
        "note": "华盛顿大学单作者博士论文；学位论文中的资助与指导不构成当前口径的同篇三类作者。"
      },
      {
        "title": "Locability: An Ability-Based Ranking Model for Virtual Reality Locomotion Techniques",
        "url": "https://arxiv.org/abs/2510.05679",
        "outcome": "no-evidence",
        "note": "核对预印本首页，两位署名分别为港科大（广州）和华盛顿大学，未见范围内企业合著。"
      },
      {
        "title": "Quantifying Locomotion Differences Between Virtual Reality Users With and Without Motor Impairments",
        "url": "https://arxiv.org/abs/2510.07987",
        "outcome": "no-evidence",
        "note": "核对预印本首页，两位署名分别为港科大（广州）和华盛顿大学，未见范围内企业合著。"
      },
      {
        "title": "Can My Robot Relax Me? Comparing Robotic and Human Self-Touch for Stress Reduction",
        "url": "https://programs.sigchi.org/chi/2026/program/content/229454",
        "outcome": "no-evidence",
        "note": "会议官方作者、机构资料及出版元数据列为港科大（广州）或港科大署名，未见范围内企业作者。"
      },
      {
        "title": "FocalFlow: Facilitating Decision-Making in Multi-Step Mobile Tasks for Blind and Low Vision People",
        "url": "https://doi.org/10.1145/3831982",
        "outcome": "no-evidence",
        "note": "正式出版元数据逐名列单位均为港科大（广州）；第一作者的项目页及学籍履历未指出企业研究角色。"
      },
      {
        "title": "Negotiated Adoption of Health Sensing Systems: A Co-Design Study with Older Adults and Family Members",
        "url": "https://doi.org/10.1145/3797867.3829012",
        "outcome": "no-evidence",
        "note": "正式出版元数据逐名列作者均为港科大（广州）；学生个人主页和会议正式日程均可互证。"
      }
    ],
    "note": "交叉核对本人书目、ORCID、DBLP、学位机构书目、arXiv 与出版社署名；对时间窗内可归属的公开论文、预印本和学位论文均已逐条核验。"
  },
  "oTU0v5IAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/wangrui.html",
      "https://wangruinlp.github.io/",
      "https://yikang0131.github.io/",
      "https://zwhe99.github.io/"
    ],
    "papers": [
      {
        "title": "Enhancing Machine Translation with Self-Supervised Preference Data",
        "url": "https://aclanthology.org/2025.acl-long.1165.pdf",
        "outcome": "confirmed",
        "note": "论文第一作者 Haoxiang Sun 署上海交大；首页以星号注明本项研究在通义实验室实习期间完成。"
      },
      {
        "title": "Draft Model Knows When to Stop: Self-Verification Speculative Decoding for Long-Form Generation",
        "url": "https://aclanthology.org/2025.emnlp-main.844.pdf",
        "outcome": "confirmed",
        "note": "正式版本列 Ziyin Zhang 为第一作者且脚注明确具名标注此项工作在腾讯实习期间完成。"
      },
      {
        "title": "Translationese-index: Using Likelihood Ratios for Graded and Generalizable Measurement of Translationese",
        "url": "https://arxiv.org/abs/2507.12260",
        "outcome": "confirmed",
        "note": "正式版具名实习脚注、刘逸康本人公开的硕士导师记录和唐家龙在阿里通义任职记录均已核对。"
      },
      {
        "title": "Debt Collection Negotiations with Large Language Models: An Evaluation System and Optimizing Decision Making with Multi-Agent",
        "url": "https://arxiv.org/abs/2502.18228",
        "outcome": "lead",
        "note": "王瑞名录和正式版脚注确认 Xiaofeng Wang 在校期间在蚂蚁实习完成此项工作；两位蚂蚁署名作者尚缺独立任职来源。"
      },
      {
        "title": "Can Watermarks Survive Translation? On the Cross-lingual Consistency of Text Watermark for Large Language Models",
        "url": "https://arxiv.org/abs/2402.14007",
        "outcome": "lead",
        "note": "论文只有校园及企业署名；星号表示等贡献，暂无本项工作在企业完成的具名实习证据。"
      },
      {
        "title": "A Systematic Assessment of Language Models with Linguistic Minimal Pairs in Chinese",
        "url": "https://aclanthology.org/2026.tacl-1.34.pdf",
        "outcome": "confirmed",
        "note": "正式版具名实习脚注、刘逸康本人公开的硕士导师记录和唐家龙在阿里通义任职记录均已核对。"
      },
      {
        "title": "Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate",
        "url": "https://aclanthology.org/2024.emnlp-main.992.pdf",
        "outcome": "confirmed",
        "note": "正式论文第一页面具名何志威和 Tian Liang 在腾讯 AI Lab 实习期间完成本文；何志威是上海交通大学在读博士，学生及腾讯实习导师两方履历都记载其参与。"
      },
      {
        "title": "Exploring Human-Like Translation Strategy with Large Language Models",
        "url": "https://aclanthology.org/2024.tacl-1.13.pdf",
        "outcome": "confirmed",
        "note": "正式论文第一页面具名何志威和 Tian Liang 在腾讯 AI Lab 实习期间完成本文；何志威是上海交通大学在读博士，学生及腾讯实习导师两方履历都记载其参与。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "ewA4NAcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://aclanthology.org/2026.emnlp-main.1392/",
      "https://aclanthology.org/2026.emnlp-main.1392.pdf",
      "https://www1.se.cuhk.edu.hk/~textmine/",
      "http://www.se.cuhk.edu.hk/people/wlam.html",
      "https://tqfang.github.io/",
      "https://aclanthology.org/2024.findings-acl.730/",
      "https://aclanthology.org/2024.findings-acl.730.pdf",
      "https://wwxu21.github.io/",
      "https://jcyk.github.io/",
      "https://arxiv.org/abs/2605.01688",
      "https://arxiv.org/html/2605.01688",
      "https://ysunbp.github.io/cv.pdf",
      "https://arxiv.org/abs/2607.00394",
      "https://arxiv.org/html/2607.00394",
      "https://proceedings.neurips.cc/paper_files/paper/2024/file/7fa5a377b7ffabcce43cd00231bb3f9c-Paper-Conference.pdf",
      "https://arxiv.org/abs/2406.10248"
    ],
    "papers": [
      {
        "title": "InComeS: Integrating Compression and Selection Mechanisms into LLMs for Efficient Model Editing",
        "url": "https://aclanthology.org/2026.emnlp-main.1392/",
        "outcome": "confirmed",
        "note": "首页在第一作者 Shuaiyi Li 和另一位作者位置以同符号标注研究期间在腾讯 AI Lab 实习。Wai Lam 的大学站课题组把 Shuaiyi Li 列为 2022 年入学博士生。 教师与腾讯正式职员均在同篇按校、企署名。"
      },
      {
        "title": "Reasons to Reject? Aligning Language Models with Judgments",
        "url": "https://aclanthology.org/2024.findings-acl.730/",
        "outcome": "confirmed",
        "note": "论文首页第一作者脚注注明 Weiwen Xu 在腾讯 AI Lab 实习期间开展此研究。第一作者公开履历给出港中文博士在读时间 2020–2024，并具体列 Wai Lam 为博士导师。 教师与腾讯正式职员均在同篇按校、企署名。"
      },
      {
        "title": "GRAVITY: Architecture-Agnostic Structured Anchoring for Long-Horizon Conversational Memory",
        "url": "https://arxiv.org/abs/2605.01688",
        "outcome": "confirmed",
        "note": "论文首页或署名脚注明确对应 Bowen Cao 的腾讯实习工作。港中文教授 Wai Lam 的学校课题组网页具名列其为自己的在读博士生；两人均为同篇作者。同篇企业一方主要作者或通讯作者经公开履历确认研究期间受雇于腾讯。"
      },
      {
        "title": "When Classic Cache Policies Fail: Learning-Augmented Replacement for Semantic Retrieval Buffers",
        "url": "https://arxiv.org/abs/2607.00394",
        "outcome": "confirmed",
        "note": "论文首页或署名脚注明确对应 Bowen Cao 的腾讯实习工作。港中文教授 Wai Lam 的学校课题组网页具名列其为自己的在读博士生；两人均为同篇作者。同篇企业一方主要作者或通讯作者经公开履历确认研究期间受雇于腾讯。"
      },
      {
        "title": "On the Worst Prompt Performance of Large Language Models",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/7fa5a377b7ffabcce43cd00231bb3f9c-Paper-Conference.pdf",
        "outcome": "lead",
        "note": "论文明确为 Bowen Cao 在腾讯 AI Lab 实习工作且署港中文；但 2024 年 6 月已发布预印本，导师课题组只给 2024 年入学，仍缺实习研究当时已在读或正式联培的日期。"
      }
    ]
  },
  "-oTraZ4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02634.pdf",
      "https://gyhdog99.github.io/files/CV_of_Yunhao.pdf",
      "https://gyhdog99.github.io/",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/jamesk",
      "https://racheltechie.github.io/",
      "https://gyhdog99.github.io/projects/ecso/",
      "https://openaccess.thecvf.com/content/CVPR2025/html/Chen_EMOVA_Empowering_Language_Models_to_See_Hear_and_Speak_with_CVPR_2025_paper.html",
      "https://emova-ollm.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2023/html/Gou_Leveraging_per_Image-Token_Consistency_for_Vision-Language_Pre-Training_CVPR_2023_paper.html",
      "https://sai.cuhk.edu.cn/en/teacher/331",
      "https://openaccess.thecvf.com/content/CVPR2023/papers/Gou_Leveraging_per_Image-Token_Consistency_for_Vision-Language_Pre-Training_CVPR_2023_paper.pdf",
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03200.pdf",
      "https://capricious-liu.github.io/files/Zhili_CV.pdf",
      "https://capricious-liu.github.io/",
      "https://kaichen1998.github.io/projects/geom-erasing/",
      "https://aclanthology.org/2025.acl-long.151.pdf",
      "https://aclanthology.org/2025.acl-long.151/",
      "https://doi.org/10.1109/TIP.2026.3678087",
      "https://arxiv.org/html/2312.12379",
      "https://aclanthology.org/2025.emnlp-main.1317.pdf",
      "https://aclanthology.org/2025.emnlp-main.1317/",
      "https://openreview.net/forum?id=i8iQUM33s",
      "https://arxiv.org/abs/2402.05382",
      "https://valser.org/2023/static/VALSE2023_HYSC.pdf",
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/e36b276fdade9ed7f8e680cb2f1658ba-Abstract-Conference.html",
      "https://zhenguol.github.io/",
      "https://arxiv.org/abs/2506.04559",
      "https://github.com/gyhdog99/RAPID"
    ],
    "papers": [
      {
        "title": "Eyes Closed, Safety On: Protecting Multimodal LLMs via Image-to-Text Transformation",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02634.pdf",
        "outcome": "confirmed",
        "note": "华为诺亚资深研究员 Lanqing Hong 的技术履历将 ECSO 明列于该实验室的对齐项目，其团队也将苟耘豪列为本组实习生；苟耘豪本人项目页和论文署其为共同第一作者。 论文的另一位合著者 James T. Kwok 为学生具名港科大博士导师。"
      },
      {
        "title": "EMOVA: Empowering Language Models to See, Hear and Speak with Vivid Emotions",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Chen_EMOVA_Empowering_Language_Models_to_See_Hear_and_Speak_with_CVPR_2025_paper.html",
        "outcome": "confirmed",
        "note": "华为诺亚项目技术负责人 Lanqing Hong 明列 EMOVA 为其华为组于 2024 年发布的项目，具名学生苟耘豪是共同第一作者，公开履历显示在此确切时期由 Lanqing Hong 指导，在华为进行多模态模型研究。 论文的另一位合著者 James T. Kwok 为学生具名港科大博士导师。"
      },
      {
        "title": "Leveraging per Image-Token Consistency for Vision-Language Pre-Training",
        "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Gou_Leveraging_per_Image-Token_Consistency_for_Vision-Language_Pre-Training_CVPR_2023_paper.html",
        "outcome": "confirmed",
        "note": "CVPR 正式论文首页明确注明第一作者苟耘豪在字节跳动 AI Lab 实习期间完成这项视觉语言预训练研究；个人履历明确标注该实习 2022 年 1 月至 2023 年 3 月并由同篇作者 Tom Ko 指导。港科大博士自 2022 年 9 月起，与上述工作后期及 2022 年 11 月的预印本节点重叠。 论文的另一位合著者 James T. Kwok 为学生具名港科大博士导师。"
      },
      {
        "title": "Implicit Concept Removal of Diffusion Models",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03200.pdf",
        "outcome": "confirmed",
        "note": "论文署名、在读博士的项目列表与公开研究履历，以及华为研究员公开实习名录，分别对应此篇合作、研究实习和企业员工身份。学生学术主页明确 James Kwok 为博士导师。"
      },
      {
        "title": "Mixture of insighTful Experts (MoTE): The Synergy of Reasoning Chains and Expert Mixtures in Self-Alignment",
        "url": "https://aclanthology.org/2025.acl-long.151.pdf",
        "outcome": "confirmed",
        "note": "论文署名、在读博士的项目列表与公开研究履历，以及华为研究员公开实习名录，分别对应此篇合作、研究实习和企业员工身份。学生学术主页明确 James Kwok 为博士导师。"
      },
      {
        "title": "Mixture of Cluster-Conditional LoRA Experts for Vision-Language Instruction Tuning",
        "url": "https://doi.org/10.1109/TIP.2026.3678087",
        "outcome": "confirmed",
        "note": "论文署名、在读博士的项目列表与公开研究履历，以及华为研究员公开实习名录，分别对应此篇合作、研究实习和企业员工身份。学生学术主页明确 James Kwok 为博士导师。"
      },
      {
        "title": "Corrupted but Not Broken: Understanding and Mitigating the Negative Impacts of Corrupted Data in Visual Instruction Tuning",
        "url": "https://aclanthology.org/2025.emnlp-main.1317.pdf",
        "outcome": "confirmed",
        "note": "论文署名、在读博士的项目列表与公开研究履历，以及华为研究员公开实习名录，分别对应此篇合作、研究实习和企业员工身份。学生学术主页明确 James Kwok 为博士导师。"
      },
      {
        "title": "Task-customized Masked Autoencoder via Mixture of Cluster-conditional Experts",
        "url": "https://openreview.net/forum?id=i8iQUM33s",
        "outcome": "confirmed",
        "note": "同期 VALSE 官方展示名单将本篇归入华为诺亚项目，刘智立履历将其列为在港科大攻读博士且在华为诺亚任实习生期间的成果，主页具名 James Kwok 博士指导。华为员工 Lanqing Hong 同篇且公开列刘智立为实习成员。"
      },
      {
        "title": "Reasoning-Aligned Perception Decoupling for Scalable Multi-modal Reasoning",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/e36b276fdade9ed7f8e680cb2f1658ba-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "ICLR 正式论文把刘智立列为同时署名香港科技大学与华为诺亚方舟实验室的共同第一作者。其履历列出本篇工作，其个人主页具名 James Kwok 为博士导师、Zhenguo Li 为华为实习指导者。双方导师均在本篇署名，Zhenguo Li 同期担任华为 AI Theory Lab 主任。"
      }
    ]
  },
  "2WsrETAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cheng-bdal.github.io/",
      "https://kxlkxl1999.github.io/",
      "https://www.xinghaochen.xyz/",
      "https://proceedings.mlr.press/v306/kang26q.html",
      "https://github.com/kxlkxl1999/MP-MoE"
    ],
    "papers": [
      {
        "title": "Breaking the Echo Chamber: A Dynamic Ensemble Pruning Perspective on MoE",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/kang26q/kang26q.pdf",
        "outcome": "confirmed",
        "note": "共同一作身份、本人项目、相同企业实验室的实习时间及其博士导师可交叉确认；正式论文仅双署名，无具名实习脚注。"
      }
    ],
    "note": "仅针对已公开的华为相关论文扩查，未覆盖教师全部成果。"
  },
  "3RpqutsAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://isbd.ruc.edu.cn/sztd/5f23bd0f39ab47899e1eafe32fcd6f83.htm",
      "https://sites.google.com/view/wenlindai/research",
      "https://sites.google.com/view/wenlindai/students",
      "https://orcid.org/0000-0002-4858-1145",
      "https://dblp.uni-trier.de/pid/203/7224.html",
      "https://isbd.ruc.edu.cn/cslm/b59f1add104043d2a205770efec541f7.htm",
      "https://sites.google.com/view/maoyuzhang/research",
      "https://yansong996.github.io/",
      "https://sapphirexdy.github.io/"
    ],
    "papers": [
      {
        "title": "On difference-based gradient estimation in nonparametric regression",
        "url": "https://onlinelibrary.wiley.com/doi/10.1002/sam.11644",
        "outcome": "no-evidence",
        "note": "两作者均署中国人民大学；未发现目标企业员工合著。"
      },
      {
        "title": "A Community Hawkes Model for Continuous-Time Networks with Interaction Heterogeneity",
        "url": "https://www3.stat.sinica.edu.tw/statistica/j36n1/j36n109/j36n109.html",
        "outcome": "no-evidence",
        "note": "两作者均署中国人民大学，期刊收录 2026；未发现企业作者。"
      },
      {
        "title": "Exploratory analysis of dynamic networks using latent functions",
        "url": "https://link.springer.com/article/10.1007/s11222-025-10573-2",
        "outcome": "no-evidence",
        "note": "两作者均署中国人民大学；未发现目标企业员工合著。"
      },
      {
        "title": "Fast Robust Location and Scatter Estimation: A Depth-based Method",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/00401706.2023.2216246",
        "outcome": "no-evidence",
        "note": "三人均署中国人民大学；合并 arXiv:2305.07813。"
      },
      {
        "title": "Fast Community Detection in Dynamic and Heterogeneous Networks",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/10618600.2023.2232852",
        "outcome": "no-evidence",
        "note": "三人署中国人民大学或埃默里大学，论文使用 Yelp 评论数据不代表企业参与；合并 2022 预印本。"
      },
      {
        "title": "Multiplex Depth for Network-Valued Data and Applications",
        "url": "https://www.tandfonline.com/doi/full/10.1080/10618600.2025.2475137",
        "outcome": "no-evidence",
        "note": "署名中国人民大学、埃默里大学和香港中文大学（深圳），未发现目标企业员工合著。"
      },
      {
        "title": "Robust Functional Ward's Linkages With Applications in EEG Data Clustering",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42872565/",
        "outcome": "no-evidence",
        "note": "三人署安徽大学或中国人民大学，合并 arXiv:2501.11081。"
      },
      {
        "title": "Large-Scale Low-Rank Gaussian Process Prediction with Support Points",
        "url": "https://www.tandfonline.com/doi/full/10.1080/01621459.2024.2403188",
        "outcome": "no-evidence",
        "note": "三人署中国人民大学或阿卜杜拉国王科技大学；人大官方报道确认为代文林与毕业生宋妍合作，未发现企业参与；合并 2022 预印本。"
      },
      {
        "title": "Robust two-layer partition clustering of sparse multivariate functional data",
        "url": "https://repository.kaust.edu.sa/server/api/core/bitstreams/7d41bf2e-4230-4496-928c-8853ecc129c4/content",
        "outcome": "no-evidence",
        "note": "中国人民大学与阿卜杜拉国王科技大学合作；2023 在线，2026 卷期；合并 2022 预印本。"
      },
      {
        "title": "Optimal subsampling for principal component analysis",
        "url": "https://link.springer.com/article/10.1007/s11425-023-2343-7",
        "outcome": "no-evidence",
        "note": "中国人民大学、西安交通大学与苏黎世联邦理工学院，未发现目标企业员工合著。"
      },
      {
        "title": "Beyond Truncation: Rethinking LLM Decoding as Ensemble Pruning",
        "url": "https://aclanthology.org/2026.emnlp-main.743.pdf",
        "outcome": "no-evidence",
        "note": "校内博士生薛敦耀具名列孟澄和代文林为导师；五作者全部为中国人民大学，未发现该论文关联目标企业员工；合并 arXiv:2609.18723。"
      },
      {
        "title": "Exploratory functional data analysis",
        "url": "https://link.springer.com/article/10.1007/s11749-024-00952-8",
        "outcome": "no-evidence",
        "note": "出版列中国人民大学、阿卜杜拉国王科技大学等高校合作，未发现目标企业员工合著。"
      },
      {
        "title": "Rejoinder to the discussion on “Exploratory Functional Data Analysis”",
        "url": "https://link.springer.com/article/10.1007/s11749-025-00976-8",
        "outcome": "no-evidence",
        "note": "与主论文分列的期刊讨论答复；未发现目标企业员工合著。"
      },
      {
        "title": "Learning Brain Connectivity in Social Cognition with Dynamic Network Regression",
        "url": "https://doi.org/10.1214/24-aoas1942",
        "outcome": "no-evidence",
        "note": "合作单位为中国人民大学和海外高校，未发现目标企业正式员工参与；合并 arXiv:2303.12677。"
      },
      {
        "title": "Interplay between astrocyte reactivity and APOE ε4 status is associated with accelerated pTau-related tau pathology in Alzheimer’s disease",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12573940/",
        "outcome": "no-evidence",
        "note": "期刊列人大、医学院校及医院，未发现目标企业员工合著。"
      },
      {
        "title": "Plasma Glial Fibrillary Acid Protein and Phosphorated Tau 181 Association with Presynaptic Density-Dependent Tau Pathology at 18F-SynVesT-1 Brain PET Imaging",
        "url": "https://pubs.rsna.org/doi/10.1148/radiol.233019",
        "outcome": "no-evidence",
        "note": "核对代文林 ORCID；联合医院与医学成像机构，Shanghai Conlight Medical 不在企业调查范围。"
      },
      {
        "title": "Deterministic subsampling for logistic regression with massive data",
        "url": "https://link.springer.com/article/10.1007/s00180-022-01319-z",
        "outcome": "no-evidence",
        "note": "2022 在线、2024 卷期；校内师生两人，未发现目标企业员工合著。"
      },
      {
        "title": "A Subsampling Method for Regression Problems Based on Minimum Energy Criterion",
        "url": "https://www.tandfonline.com/doi/full/10.1080/00401706.2022.2127915",
        "outcome": "no-evidence",
        "note": "2022 在线、2023 卷期；人大与北京理工大学人员合著，无目标企业。"
      },
      {
        "title": "Rate-Preserving Shrinking-Support Gaussian Process Prediction",
        "url": "https://arxiv.org/html/2609.31284",
        "outcome": "no-evidence",
        "note": "港科大（广州）、人大、阿卜杜拉国王科技大学、新加坡国立大学；未发现目标企业员工合著。"
      },
      {
        "title": "Synthetic Data Augmentation for Functional Data: Wasserstein Risk Bounds and Diffusion-Based Conditional Generation",
        "url": "https://arxiv.org/html/2610.34120",
        "outcome": "no-evidence",
        "note": "三作者署中国人民大学或西安交大，未发现目标企业员工合著。"
      },
      {
        "title": "Statistical Depth for Interval Data: A Closeness-Based Approach and Its Applications",
        "url": "https://arxiv.org/html/2609.24641",
        "outcome": "no-evidence",
        "note": "两作者均署中国人民大学；未发现目标企业员工合著。"
      },
      {
        "title": "Reference-Null Calibrated Thresholds for E-Processes with Applications to Conformal Martingales",
        "url": "https://arxiv.org/html/2609.32678",
        "outcome": "no-evidence",
        "note": "只列西安交通大学和中国人民大学，未发现目标企业参与。"
      },
      {
        "title": "Optimal-k difference sequence in nonparametric regression",
        "url": "https://international2023.icsa.org/wp-content/uploads/2023/07/ICSAHK2023ProgramBook-7.pdf",
        "outcome": "no-evidence",
        "note": "2022 预印本，2023 ICSA 会议报告；人大、北师大和香港浸会大学合作。"
      },
      {
        "title": "An Innovative Subsampling Approach for Efficient SVM Training with Large Datasets",
        "url": "https://doi.org/10.1109/icicml67980.2025.11333554",
        "outcome": "lead",
        "note": "Crossref 核实有 Wenlin Dai、Shuo Sun、Dianpeng Wang，后者曾与人大代文林合著；正式全文及作者单位尚未查证，不能断定企业或学籍身份。"
      }
    ],
    "note": "逐篇核对 2023-01-01 至 2026-11-12 的 23 篇可归属公开成果，合并预印本与期刊版并排除清华语音、怀化化学、温州儿科及绵阳激光同名作者。尚有 1 篇 IEEE 会议作品待查署名机构，未标为全量完成。"
  },
  "TApLOhkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_MeshMosaic_Scaling_Artist_Mesh_Generation_via_Local-to-Global_Assembly_CVPR_2026_paper.pdf",
      "https://ruixu.me/",
      "https://hku-cg.github.io/people/",
      "https://www.ai.hku.hk/index.php/people/academic-staff/taku",
      "https://arxiv.org/html/2609.25832v2"
    ],
    "papers": [
      {
        "title": "MeshMosaic: Scaling Artist Mesh Generation via Local-to-Global Assembly",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_MeshMosaic_Scaling_Artist_Mesh_Generation_via_Local-to-Global_Assembly_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 首页 * 明确第一作者徐瑞在腾讯实习中完成此研究。个人主页列 2025 年 4–8 月腾讯 Visvise 实习以及其港大博士导师 Taku Komura。论文通讯为该导师；Le Wan 以腾讯 Visvise 署名，另有同一团队正式论文对应腾讯邮箱。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "Nav8m8gAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/LinLiang",
      "https://arxiv.org/html/2604.20100v2",
      "https://zhanglk9.github.io/"
    ],
    "papers": [
      {
        "title": "JoyAI-RA 0.1: A Foundation Model for Robotic Autonomy",
        "url": "https://arxiv.org/html/2604.20100v2",
        "year": 2026,
        "outcome": "confirmed",
        "note": "报告附录 A 具名列出校内师生和企业作者；学生本人履历明确课题职责。"
      }
    ]
  },
  "NKaiUasAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://is.nju.edu.cn/ty/main.htm",
      "https://znan-chen.github.io/",
      "https://tyshiwo.github.io/"
    ],
    "papers": [
      {
        "title": "DiP: Taming Diffusion Models in Pixel Space",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_DiP_Taming_Diffusion_Models_in_Pixel_Space_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "陈振南的学术履历列他 2024 年 9 月起在南大攻读博士，2025 年 1 月至 2026 年 6 月在腾讯优图实习；正式版首页星号标清他在腾讯实习时完成这项研究。"
      },
      {
        "title": "LUVE: Latent-Cascaded Ultra-High-Resolution Video Generation with Dual Frequency Experts",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhao26d/zhao26d.pdf",
        "outcome": "confirmed",
        "note": "第一作者赵晨是南京大学在读博士，ICML 正式原文点名确认其在美团实习期间完成这项工作。"
      },
      {
        "title": "Temporal and Cross-Modal Alignment for Enhanced Audiovisual Video Captioning",
        "url": "https://arxiv.org/html/2607.01667",
        "outcome": "confirmed",
        "note": "南京大学博士生赵晨的论文首发正式稿脚注具名说明该研究在其美团实习期间完成，研究署名南京大学和美团。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "7phvKK4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1086/1731.htm",
      "https://zehong-ma.github.io/"
    ],
    "papers": [
      {
        "title": "DeCo: Frequency-Decoupled Pixel Diffusion for End-to-End Image Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Ma_DeCo_Frequency-Decoupled_Pixel_Diffusion_for_End-to-End_Image_Generation_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "马泽红履历列 2022 年起在北京大学读博、2025 年 3–12 月在华为实习研究像素扩散。正式版首页对第一作者具名标注：该工作在华为实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "LbzoQBsAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1086/1730.htm",
      "https://yushengzhao.github.io/"
    ],
    "papers": [
      {
        "title": "Switch Attention: Towards Dynamic and Fine-grained Hybrid Transformers",
        "url": "https://aclanthology.org/2026.emnlp-main.2079.pdf",
        "outcome": "confirmed",
        "note": "Yusheng Zhao 是北大在读博士及论文首作者。正式版首页给他单独标了华为实习贡献脚注，明确指向本项研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "GNDtwWQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.tsinghua.edu.cn/info/1116/3535.htm",
      "https://cg.cs.tsinghua.edu.cn/people/~Yongjin/Yongjin.htm",
      "https://hyzcluster.github.io/"
    ],
    "papers": [
      {
        "title": "StreamAvatar: Streaming Diffusion Models for Real-Time Interactive Human Avatars",
        "url": "https://arxiv.org/html/2512.22065",
        "outcome": "confirmed",
        "note": "孙志尧在清华大学导师主页列为 2021 年起的直博生；首发原文严格把实习脚注标在其名字旁，注明在腾讯混元实习中完成本项研究。"
      },
      {
        "title": "CHARM: Control-point-based 3D Anime Hairstyle Auto-Regressive Modeling",
        "url": "https://arxiv.org/html/2509.21114",
        "outcome": "confirmed",
        "note": "原文脚注明确第一作者何雨泽在腾讯 AIPD 实习期间完成本项；个人履历列出清华博士身份、2024 年 7 月至 2025 年 8 月腾讯实习及同篇 Yanning Zhou 为企业导师。"
      },
      {
        "title": "StdGEN: Semantic-Decomposed 3D Character Generation from Single Images",
        "url": "https://arxiv.org/html/2411.05738",
        "outcome": "confirmed",
        "note": "原文明确具名何雨泽在腾讯 AI Lab 实习期间完成本研究；学生本人履历列出同期在清华读博士、2024–2025 年腾讯实习及企业导师 Yanning Zhou。"
      },
      {
        "title": "PrimitiveAnything: Human-Crafted 3D Primitive Assembly Generation with Auto-Regressive Transformer",
        "url": "https://arxiv.org/html/2505.04622",
        "outcome": "confirmed",
        "note": "项目当时的第一作者共同贡献和机构原文将何雨泽列为清华与腾讯 AIPD 共同第一作者；2025 年 5 月初稿落在其本人履历所记 2024 年 7 月至 2025 年 8 月腾讯视觉实习内，项目明确列其具名实习导师 Yanning Zhou 和 Xiao Han 为腾讯通讯作者。"
      },
      {
        "title": "Persistent Planar Memory for Video World Models",
        "url": "https://arxiv.org/html/2610.23795",
        "outcome": "confirmed",
        "note": "蚂蚁 RobbyAnt 官方仓库公开本项目；项目页将在读博士何雨泽列为蚂蚁和清华共同署名的第一作者、将其公开实习履历具名列出的同一蚂蚁导师 Nan Xue 和 Yinghao Xu 列在合作作者，Nan Xue 为通讯作者。其本人 2026 年 RobbyAnt 实习时间覆盖 10 月。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "Ae2kRCEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/shenwei.html",
      "https://jumpat.github.io/jumpcat/"
    ],
    "papers": [
      {
        "title": "Text-Image Conditioned 3D Generation",
        "url": "https://arxiv.org/html/2603.21295",
        "outcome": "confirmed",
        "note": "第一作者 Jiazhong Cen 自 2023 年在上海交大攻读博士，2024 年至 2026 年 6 月在华为实习；原文首页明确以脚注具名其华为实习与本项研究的关系。"
      },
      {
        "title": "Tackling View-Dependent Semantics in 3D Language Gaussian Splatting",
        "url": "https://raw.githubusercontent.com/mlresearch/v267/main/assets/cen25a/cen25a.pdf",
        "outcome": "confirmed",
        "note": "第一作者 Jiazhong Cen 自 2023 年在上海交大攻读博士，2024 年至 2026 年 6 月在华为实习；原文首页明确以脚注具名其华为实习与本项研究的关系。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "8hZIngIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.nju.edu.cn/d2/3f/c57761a643647/pagem.htm",
      "https://zijian-wu.github.io/"
    ],
    "papers": [
      {
        "title": "UIKA: Fast Universal Head Avatar from Pose-Free Images",
        "url": "https://arxiv.org/html/2601.07603",
        "outcome": "confirmed",
        "note": "巫子健自 2024 年 9 月在南京大学攻读硕士、自 2025 年 6 月在蚂蚁研究院交互智能实验室实习；正文首作的具名脚注说明具体工作在蚂蚁实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "YRxe0FkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://is.nju.edu.cn/zh/main.htm",
      "https://zijian-wu.github.io/"
    ],
    "papers": [
      {
        "title": "UIKA: Fast Universal Head Avatar from Pose-Free Images",
        "url": "https://arxiv.org/html/2601.07603",
        "outcome": "confirmed",
        "note": "巫子健自 2024 年 9 月在南京大学攻读硕士、自 2025 年 6 月在蚂蚁研究院交互智能实验室实习；正文首作的具名脚注说明具体工作在蚂蚁实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "Z7FOfV0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://conf.researchr.org/track/issta-2026/issta-2026-research-papers",
      "https://jzuming.github.io/publication.html",
      "https://dblp.org/pid/237/8586.html",
      "https://www.cs.hku.hk/people/academic-staff/jzuming/",
      "https://zenodo.org/records/21383195",
      "https://www.vldb.org/pvldb/vol19/p1198-jiang.pdf",
      "https://arxiv.org/abs/2408.07525",
      "https://www.ndss-symposium.org/wp-content/uploads/2025-1912-paper.pdf",
      "https://ast.ethz.ch/ast-news/2025/08/a-successful-phd-defense-for-zu-ming-jiang.html",
      "https://www.usenix.org/conference/osdi24/presentation/jiang",
      "https://www.usenix.org/system/files/osdi24-jiang.pdf",
      "https://doi.org/10.1109/TDSC.2023.3288876",
      "https://jzuming.github.io/paper/tdsc23-bai.pdf",
      "https://www.usenix.org/conference/osdi23/presentation/jiang",
      "https://www.usenix.org/system/files/osdi23-jiang.pdf",
      "https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf"
    ],
    "papers": [
      {
        "title": "Testing Computation Pushdown in Distributed Database Systems",
        "url": "https://conf.researchr.org/track/issta-2026/issta-2026-research-papers",
        "outcome": "no-evidence",
        "note": "原创论文及正式会议署名：江祖铭在港大，Jinsheng Ba 与 Zhendong Su 为学术合作者。论文工件列研究时为 ETH 和港大，Ba 的官方简历表明该期为博士后，未见同篇企业作者或学生在企角色。"
      },
      {
        "title": "Dinkel: State-Aware and Granular Framework for Validating Graph Databases",
        "url": "https://www.vldb.org/pvldb/vol19/p1198-jiang.pdf",
        "outcome": "no-evidence",
        "note": "PVLDB 原文三位作者仅有港大、苏黎世联邦理工机构；没有企业作者或学生在企项目。2024 年公开预印本 2408.07525 为同一项目早期稿，参与作者和项目一致，不重复计数。"
      },
      {
        "title": "Blackbox Fuzzing of Distributed Systems with Multi-Dimensional Inputs and Symmetry-Based Feedback Pruning",
        "url": "https://www.ndss-symposium.org/wp-content/uploads/2025-1912-paper.pdf",
        "outcome": "no-evidence",
        "note": "正式论文署北航、北大、ETH、ASU 等高校；江祖铭仍为 ETH 博士，无已具名的范围内企业作者或学生在企项目。"
      },
      {
        "title": "Detecting Logic Bugs in Database Engines via Equivalent Expression Transformation",
        "url": "https://www.usenix.org/conference/osdi24/presentation/jiang",
        "outcome": "no-evidence",
        "note": "USENIX 正式记录两位作者均为 ETH 苏黎世，江祖铭是博士研究者。论文检测企业数据库软件本身不构成企业员工或在企学生同篇关系。"
      },
      {
        "title": "Testing Error Handling Code With Software Fault Injection and Error-Coverage-Guided Fuzzing",
        "url": "https://doi.org/10.1109/TDSC.2023.3288876",
        "outcome": "no-evidence",
        "note": "已核对作者稿及港大知识库：署名北航、清华与 ETH；江祖铭当时在 ETH，没有范围内企业作者。"
      },
      {
        "title": "Detecting Transactional Bugs in Database Engines via Graph-Based Oracle Construction",
        "url": "https://www.usenix.org/conference/osdi23/presentation/jiang",
        "outcome": "no-evidence",
        "note": "正式作者单位只涉及 ETH 和新加坡国立大学。测试或汇报企业的数据库产品不能替代同篇的员工、导师与学生角色。"
      },
      {
        "title": "DynSQL: Stateful Fuzzing for Database Management Systems with Complex and Valid SQL Query Generation",
        "url": "https://www.usenix.org/system/files/usenixsecurity23-jiang-zu-ming.pdf",
        "outcome": "no-evidence",
        "note": "USENIX 原文列两名 ETH 作者、一名清华作者。江祖铭为当时的 ETH 博士，未见企业作者和该工作在企业完成的证据。"
      }
    ],
    "note": "已交叉核对本人完整公开书目与 DBLP，并对截止日内的 7 篇不同正式论文逐篇核查原文署名；Dinkel 预印本与正式版本合并。2027 年作品与 2023 年以前的论文未纳入本轮。"
  },
  "3s9f9VIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openaccess.thecvf.com/content/CVPR2026/html/Cheng_Video-as-Answer_Predict_and_Generate_Next_Video_Event_with_Joint-GRPO_CVPR_2026_paper.html",
      "https://donahowe.github.io/",
      "https://scholars.cityu.edu.hk/en/persons/jingliao/",
      "https://scholars.cityu.edu.hk/en/persons/jing-liao(45757c38-f737-420d-8a7f-73b58d30c1fd).html",
      "https://www.xtao.website/",
      "https://arxiv.org/pdf/2511.16669v1",
      "https://scholars.cityu.edu.hk/en/persons/junhao-cheng/",
      "https://arxiv.org/abs/2606.02564",
      "https://arxiv.org/pdf/2606.02564v1",
      "https://openaccess.thecvf.com/ICCV2025?day=2025-10-22",
      "https://arxiv.org/abs/2505.21374"
    ],
    "papers": [
      {
        "title": "Video-as-Answer: Predict and Generate Next Video Event with Joint-GRPO",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Cheng_Video-as-Answer_Predict_and_Generate_Next_Video_Event_with_Joint-GRPO_CVPR_2026_paper.html",
        "outcome": "confirmed",
        "note": "核对论文首次发布版本，† 脚注明确第一作者程钧豪是在快手可灵团队实习期间完成研究。香港城市大学正式导师与学生名录确认廖菁指导其研究型硕士，双方同篇署名。企业作者 Xin Tao 以可灵团队署名，公开履历确认其为该团队技术负责人。"
      },
      {
        "title": "VLMs are Good Teachers for Video Reasoning via Adaptive Test-Time Optimization",
        "url": "https://arxiv.org/abs/2606.02564",
        "outcome": "confirmed",
        "note": "核对论文首次发布版本，† 脚注明确第一作者程钧豪是在快手可灵团队实习期间完成研究。香港城市大学正式导师与学生名录确认廖菁指导其研究型硕士，双方同篇署名。企业作者 Xin Tao 以可灵团队署名，公开履历确认其为该团队技术负责人。"
      },
      {
        "title": "AnimeGamer: Infinite Anime Life Simulation with Next Game State Prediction",
        "url": "https://openaccess.thecvf.com/ICCV2025?day=2025-10-22",
        "outcome": "lead",
        "note": "学生腾讯实习至 2025 年 6 月且论文预印本已在 2025 年 4 或 5 月发布；学生为中山大学本科，与他读香港城市大学 MPhil 的阶段不同，廖菁在当时是否正式指导尚无明确证据。中山大学本科导师虽已具名，但没有同篇署名。"
      },
      {
        "title": "Video-Holmes: Can MLLM Think Like Holmes for Complex Video Reasoning?",
        "url": "https://arxiv.org/abs/2505.21374",
        "outcome": "lead",
        "note": "学生腾讯实习至 2025 年 6 月且论文预印本已在 2025 年 4 或 5 月发布；学生为中山大学本科，与他读香港城市大学 MPhil 的阶段不同，廖菁在当时是否正式指导尚无明确证据。中山大学本科导师虽已具名，但没有同篇署名。"
      }
    ]
  },
  "9uPDtI4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.yuliang-liu.com/",
      "https://www.yuliang-liu.com/group",
      "https://bytedance.github.io/WildDoc/",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_TextPecker_Rewarding_Structural_Anomaly_Quantification_for_Enhancing_Visual_Text_Rendering_CVPR_2026_paper.pdf"
    ],
    "papers": [
      {
        "title": "TextPecker: Rewarding Structural Anomaly Quantification for Enhancing Visual Text Rendering",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_TextPecker_Rewarding_Structural_Anomaly_Quantification_for_Enhancing_Visual_Text_Rendering_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "官方小组名单列在读博士；CVPR 正式版具名实习脚注和雇员项目负责人身份均明确。"
      }
    ]
  },
  "AwqDDGoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/ZhengWeishi",
      "https://www.isee-ai.cn/~zhwshi/selected_paper_list.html",
      "https://lyman-smoker.github.io/",
      "https://tc.ccf.org.cn/tcmt/xsdt/lwdd/2026-07-10/913884.shtml",
      "https://gaoypeng.github.io/",
      "https://zhengdian1.github.io/",
      "https://bls.ccf.org.cn/posts/calendar/19.html"
    ],
    "papers": [
      {
        "title": "WeDetect: Fast Open-Vocabulary Object Detection as Retrieval",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Fu_WeDetect_Fast_Open-Vocabulary_Object_Detection_as_Retrieval_CVPR_2026_paper.pdf",
        "year": 2026,
        "outcome": "confirmed",
        "note": "正式论文脚注明示付盛豪在腾讯实习期间完成此项工作，企业合作者饶峰云为腾讯署名通讯作者。中大郑伟诗的公开书目在本篇具名标注他所指导的学生；论文单位则按原文为琶洲实验室（黄埔）及深圳环形实验室。"
      },
      {
        "title": "Frozen-DETR: Enhancing DETR with Image Understanding from Frozen Foundation Models",
        "url": "https://papers.nips.cc/paper_files/paper/2024/file/bf7262e692f3a5c7d676e9e06a1d919a-Paper-Conference.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "NeurIPS 正式论文首页具名标明付盛豪在阿里实习期间完成研究、杨琪泽为项目组负责人、郑伟诗为通讯作者；郑伟诗本人论文列表逐篇标注指导关系。"
      },
      {
        "title": "LLMDet: Learning Strong Open-Vocabulary Object Detectors under the Supervision of Large Language Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Fu_LLMDet_Learning_Strong_Open-Vocabulary_Object_Detectors_under_the_Supervision_of_CVPR_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "正式论文补充材料首页具名标出付盛豪在阿里实习时参与此项工作，致谢确认阿里实习项目。杨琪泽署阿里通义，郑伟诗为通讯作者，导师本人公开书目分别具名标注。"
      },
      {
        "title": "ViSpeak: Visual Instruction Feedback in Streaming Videos",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Fu_ViSpeak_Visual_Instruction_Feedback_in_Streaming_Videos_ICCV_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICCV 正式论文首页专门标出付盛豪和 Yi-Xing Peng 的阿里实习完成该项课题。杨琪泽署阿里通义，郑伟诗在同篇署名并在本人公开书目明确列两人为指导学生。"
      },
      {
        "title": "LOVE-R1: Advancing Long Video Understanding with an Adaptive Zoom-in Mechanism via Multi-Step Reasoning",
        "url": "https://arxiv.org/html/2509.24786v1",
        "year": 2025,
        "outcome": "confirmed",
        "note": "论文首页具名记录 Yuan-Ming Li 与付盛豪在阿里实习期间做此研究，杨琪泽为阿里作者，郑伟诗为通讯作者；Yuan-Ming Li 的博士履历同时确认校内导师和该公司实习时间。"
      },
      {
        "title": "IRG-MotionLLM: Interleaving Motion Generation, Assessment and Refinement for Text-to-Motion Generation",
        "url": "https://arxiv.org/html/2512.10730v2",
        "year": 2026,
        "outcome": "confirmed",
        "note": "首作者 Yuan-Ming Li 的原文双署中山大学与阿里通义，研究内容与其同期公开实习项目（统一文本动作模型）一致；其博士导师郑伟诗与同期阿里作者杨琪泽共同署名。郑伟诗本人也将其标为该项目中所指导的中大学生。"
      },
      {
        "title": "DreamView: Injecting View-Specific Text Guidance into Text-to-3D Generation",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03660.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "正式稿首页具名注明严俊楷与 Yipeng Gao 在阿里巴巴实习期间完成论文；导师书目确认后者的科研指导关系，学生本人主页确认 2024 年中山大学硕士毕业。"
      },
      {
        "title": "Panorama Generation From NFoV Image Done Right",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Zheng_Panorama_Generation_From_NFoV_Image_Done_Right_CVPR_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "CVPR 正式论文首页具名说明郑典在阿里巴巴实习期间完成该研究。郑典本人的履历记录 2024 年 5–11 月阿里实习及其 2025 年获中山大学硕士学位，具名列郑伟诗为导师；同篇作者吕承飞为阿里正式研究员。"
      }
    ]
  },
  "amkOUMoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openreview.net/profile?id=~Jiesong_Lian1",
      "http://faculty.hust.edu.cn/haoyixue1/zh_CN/index.htm",
      "http://faculty.hust.edu.cn/hulong/zh_CN/index/585065/list/index.htm",
      "https://zixiangzhou916.github.io/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Hong_Audio-visual_Controlled_Video_Diffusion_with_Masked_Selective_State_Spaces_Modeling_ICCV_2025_paper.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Lian_SoliReward_Mitigating_Susceptibility_to_Reward_Hacking_and_Annotation_Noise_in_CVPR_2026_paper.pdf",
      "https://arxiv.org/pdf/2605.07800v2"
    ],
    "papers": [
      {
        "title": "SoliReward: Mitigating Susceptibility to Reward Hacking and Annotation Noise in Video Generation Reward Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Lian_SoliReward_Mitigating_Susceptibility_to_Reward_Hacking_and_Annotation_Noise_in_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "学生公开履历明确写两名博士生导师和在读年份；原文具名标注腾讯混元实习；同篇全站只算一条。"
      },
      {
        "title": "SARA: Semantically Adaptive Relational Alignment for Video Diffusion Models",
        "url": "https://arxiv.org/pdf/2605.07800v2",
        "outcome": "confirmed",
        "note": "学生公开履历明确写两名博士生导师和在读年份；原文具名标注腾讯混元实习；同篇全站只算一条。"
      }
    ],
    "note": "目前核对 Jiesong Lian 的腾讯合作项目，未覆盖教师全部论文。"
  },
  "SLHwj-oAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openreview.net/profile?id=~Jiesong_Lian1",
      "http://faculty.hust.edu.cn/haoyixue1/zh_CN/index.htm",
      "http://faculty.hust.edu.cn/hulong/zh_CN/index/585065/list/index.htm",
      "https://zixiangzhou916.github.io/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Hong_Audio-visual_Controlled_Video_Diffusion_with_Masked_Selective_State_Spaces_Modeling_ICCV_2025_paper.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Lian_SoliReward_Mitigating_Susceptibility_to_Reward_Hacking_and_Annotation_Noise_in_CVPR_2026_paper.pdf",
      "https://arxiv.org/pdf/2605.07800v2"
    ],
    "papers": [
      {
        "title": "SoliReward: Mitigating Susceptibility to Reward Hacking and Annotation Noise in Video Generation Reward Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Lian_SoliReward_Mitigating_Susceptibility_to_Reward_Hacking_and_Annotation_Noise_in_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "学生公开履历明确写两名博士生导师和在读年份；原文具名标注腾讯混元实习；同篇全站只算一条。"
      },
      {
        "title": "SARA: Semantically Adaptive Relational Alignment for Video Diffusion Models",
        "url": "https://arxiv.org/pdf/2605.07800v2",
        "outcome": "confirmed",
        "note": "学生公开履历明确写两名博士生导师和在读年份；原文具名标注腾讯混元实习；同篇全站只算一条。"
      }
    ],
    "note": "目前核对 Jiesong Lian 的腾讯合作项目，未覆盖教师全部论文。"
  },
  "7_BkyxEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~jinqiaowang",
      "https://sites.google.com/site/qiumh0727",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhan_GThinker_Towards_General_Multimodal_Reasoning_via_Cue-Guided_Rethinking_CVPR_2026_paper.pdf",
      "https://www.nlpr.ia.ac.cn/iva/homepage/jqwang/index.htm",
      "https://arxiv.org/pdf/2506.11571v2"
    ],
    "papers": [
      {
        "title": "GThinker: Towards General Multimodal Reasoning via Cue-Guided Rethinking",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhan_GThinker_Towards_General_Multimodal_Reasoning_via_Cue-Guided_Rethinking_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "官方导师档案列詹宇飞为博士生；CVPR 原文具名，且有同篇在职研究员。"
      },
      {
        "title": "VFaith: Do Large Multimodal Models Really Reason on Seen Images Rather than Previous Memories?",
        "url": "https://arxiv.org/pdf/2506.11571v2",
        "outcome": "confirmed",
        "note": "2025-07 修订稿具名注明詹宇飞字节实习，2025-06 首次公开；王金桥是其导师，且与字节员工同篇。"
      }
    ],
    "note": "仅完成上述论文与部分合作线索，未覆盖教师全部论文。"
  },
  "yd58y_0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/malizhuang.html",
      "https://digitalmedia.sjtu.edu.cn/people/",
      "https://www.seiee.sjtu.edu.cn/via/yjspy_zsgz_bszs/11645.html",
      "https://huchengyang.notion.site/"
    ],
    "papers": [
      {
        "title": "Beyond [CLS] Token: Query-Driven Token-Level Forgery Purification for Generalizable Deepfake Detection",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Beyond_CLS_Token_Query-Driven_Token-Level_Forgery_Purification_for_Generalizable_Deepfake_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "实验室官网将王昌硕列为自 2025 年春季起的上海交大博士生，邮件与原文一致；会议正式原文首页注明该项研究在腾讯优图实习期间完成，且他是该文唯一同时署上海交大和腾讯优图的共同第一作者。"
      },
      {
        "title": "Domain-Hallucinated Updating for Multi-Domain Face Anti-spoofing",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/27992/28001",
        "outcome": "confirmed",
        "note": "胡澄洋于上海交大博士阶段开展该研究；AAAI 正式原文以单独脚注明确第一作者在腾讯优图实习期间完成该研究，本人学术主页亦列腾讯实习。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "bjSi-dIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.nju.edu.cn/_redirect?siteId=391&columnId=18540&articleId=321886",
      "https://ai.nju.edu.cn/rinc/student/tudunwei/index.html"
    ],
    "papers": [
      {
        "title": "ScaleEnv: Scaling Environment Synthesis from Scratch for Generalist Interactive Tool-Use Agent Training",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/tu26a/tu26a.pdf",
        "outcome": "confirmed",
        "note": "南大官方实验室主页列涂敦炜为博士生；ICML 正式原文在第一作者涂敦炜姓名后标出美团实习脚注，确认其在该实习中完成该研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "E1vVpg4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://mypage.zju.edu.cn/xzhou",
      "https://kune1008.github.io/"
    ],
    "papers": [
      {
        "title": "Natural Human Motion Recovery by Aligning High-Order Temporal Dynamics from Monocular Videos",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wei_Natural_Human_Motion_Recovery_by_Aligning_High-Order_Temporal_Dynamics_from_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "魏鼎坤在个人学术页记载 2024 年 9 月起攻读浙大硕士和 2025 年 9 月起在蚂蚁实习；原文首页点名确认本研究在其蚂蚁实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "BcX7GJcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://saids.ustc.edu.cn/2025/1030/c36359a706859/page.htm",
      "https://syr-cn.github.io/"
    ],
    "papers": [
      {
        "title": "MemOCR: Layout-Aware Visual Memory for Efficient Long-Horizon Reasoning",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/shi26l/shi26l.pdf",
        "outcome": "confirmed",
        "note": "第一作者 Yaorui Shi 的本人学术主页明确他为中国科学技术大学在读博士和美团 LongCat 实习生，并点名 MemOCR 为在美团完成的项目。ICML 正式原文也以具名脚注说明在美团实习时开展。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "FIirppQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://doi.org/10.1145/3832092",
      "https://bajinsheng.github.io/publications/",
      "https://dblp.org/pid/318/0975.html",
      "https://sds.cuhk.edu.cn/en/teacher/2436",
      "https://zenodo.org/records/21383195",
      "https://doi.org/10.1145/3832104",
      "https://arxiv.org/html/2508.16307",
      "https://arxiv.org/html/2605.22992v1",
      "https://arxiv.org/abs/2605.22992",
      "https://arxiv.org/html/2510.06452v1",
      "https://arxiv.org/abs/2510.06452",
      "https://bajinsheng.github.io/assets/pdf/uplan_icde25.pdf",
      "https://arxiv.org/abs/2408.07857",
      "https://doi.org/10.1145/3725300",
      "https://sigmodconf.hosting.acm.org/2025/sigmod_papers.shtml",
      "https://doi.org/10.1145/3654991",
      "https://nus-test.github.io/publication/",
      "https://doi.org/10.1145/3597503.3639076",
      "https://zenodo.org/records/10476847",
      "https://doi.org/10.1145/3597503.3623307",
      "https://yuanchengjiang.github.io/docs/GraphGenie-ICSE24.pdf",
      "https://doi.org/10.1109/ICSE48619.2023.00174",
      "https://conf.researchr.org/details/icse-2023/icse-2023-technical-track/55/Testing-Database-Engines-via-Query-Plan-Guidance"
    ],
    "papers": [
      {
        "title": "Testing Computation Pushdown in Distributed Database Systems",
        "url": "https://doi.org/10.1145/3832092",
        "outcome": "no-evidence",
        "note": "论文和工件仅列 ETH、港大及作者后续所在港中深；无范围内在企学生或企业员工同篇记录。"
      },
      {
        "title": "Metamorphic Coverage",
        "url": "https://doi.org/10.1145/3832104",
        "outcome": "no-evidence",
        "note": "终稿仅港中深和新加坡国立大学，未发现企业作者及企业实习。期刊稿合并同名预印本。"
      },
      {
        "title": "Finding Performance Issues in Database Systems by Exploiting Dormant Code Paths",
        "url": "https://arxiv.org/html/2605.22992v1",
        "outcome": "no-evidence",
        "note": "公开预印本列两位 ETH 合作者；测试商业数据库并不提供共同作者在企业任职的证据。"
      },
      {
        "title": "Code Semantic Zooming",
        "url": "https://arxiv.org/html/2510.06452v1",
        "outcome": "no-evidence",
        "note": "公开原文三位作者均署 ETH；文中讨论企业模型和开发环境，但无具名在企学生或企业作者。"
      },
      {
        "title": "Towards a Unified Query Plan Representation",
        "url": "https://bajinsheng.github.io/assets/pdf/uplan_icde25.pdf",
        "outcome": "no-evidence",
        "note": "两位作者分别署名 ETH、新加坡国立大学；正式附注指出第一作者在新加坡国立大学开始该项目，不存在有证据的范围内企业角色。同早期预印本合并。"
      },
      {
        "title": "Finding Logic Bugs in Graph-processing Systems via Graph-cutting",
        "url": "https://doi.org/10.1145/3725300",
        "outcome": "no-evidence",
        "note": "ACM 公开作者单位只覆盖港中深、ETH 和新加坡国立大学；没有具名范围内企业员工/学生在企角色。"
      },
      {
        "title": "Keep It Simple: Testing Databases via Differential Query Plans",
        "url": "https://doi.org/10.1145/3654991",
        "outcome": "no-evidence",
        "note": "两位作者在新加坡国立大学；论文目录、原稿和作者履历一致。"
      },
      {
        "title": "CERT: Finding Performance Issues in Database Systems Through the Lens of Cardinality Estimation",
        "url": "https://doi.org/10.1145/3597503.3639076",
        "outcome": "no-evidence",
        "note": "两位作者及正式工件均标为新加坡国立大学；早期预印本题名略有变化，合并。"
      },
      {
        "title": "Detecting Logic Bugs in Graph Database Management Systems via Injective and Surjective Graph Query Transformation",
        "url": "https://doi.org/10.1145/3597503.3623307",
        "outcome": "no-evidence",
        "note": "正式会议原文六位研究者均来自新加坡国立大学，未见范围内企业作者。"
      },
      {
        "title": "Testing Database Engines via Query Plan Guidance",
        "url": "https://doi.org/10.1109/ICSE48619.2023.00174",
        "outcome": "no-evidence",
        "note": "ICSE 正式议程具名列表为两位新加坡国立大学学术人员。与同名 arXiv 和工件合并。"
      }
    ],
    "note": "对照个人完整公开书目与 DBLP，对截至调查日期公开可查的 10 篇不同论文/预印本逐篇核对。不同稿版已合并；仅列为在审且未公开原文的条目和学位论文不计入。"
  },
  "oZJbK4AAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://mang-zhao.com/papers/",
      "https://dblp.org/pid/270/6872.html",
      "https://cse.whu.edu.cn/info/3501/38471.htm"
    ],
    "papers": [
      {
        "title": "On the State-Compromise Security of End-to-End Real-Time Group Communication",
        "url": "https://eprint.iacr.org/2026/1165",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "IACR 作者单位均为武汉大学。Zoom 和 Microsoft Teams 是研究对象，未见企业作者或在企业参与该研究的在读学生。"
      },
      {
        "title": "An Extended Hierarchy of Security Notions for Threshold Signature Schemes and Automated Analysis of Protocols That Use Them",
        "url": "https://eprint.iacr.org/2024/1920",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "作者单位列 CISPA 与独立研究者；2024 年预印本与教师名单所列 2026 年 ACM CCS 论文合并。"
      },
      {
        "title": "ETK: External-Operations TreeKEM and the Security of MLS in RFC 9420",
        "url": "https://eprint.iacr.org/2025/229",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "原文列 CISPA、Hasso Plattner Institute 和武汉大学，未见范围内企业作者或相应的企业学生研究。"
      },
      {
        "title": "Multi-Stage Group Key Distribution and PAKEs: Securing Zoom Groups against Malicious Servers without New Security Elements",
        "url": "https://eprint.iacr.org/2023/1243",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "Zoom 是研究对象，作者署 CISPA 和特拉维夫大学；IACR 与 IEEE S&P 版本合并。"
      },
      {
        "title": "Secure Messaging with Strong Compromise Resilience, Temporal Privacy, and Immediate Decryption",
        "url": "https://eprint.iacr.org/2022/1481",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "IEEE S&P 2024 正式版，早期预印本 2022 年；两位作者均署 CISPA，无学生与范围内企业作者。"
      },
      {
        "title": "Automated Analysis of Protocols that use Authenticated Encryption: How Subtle AEAD Differences can impact Protocol Security",
        "url": "https://eprint.iacr.org/2023/1246",
        "year": 2023,
        "outcome": "no-evidence",
        "note": "作者署 CISPA 和 Inria，未见范围内企业作者；IACR 和 USENIX 重复版本合并。"
      },
      {
        "title": "FIDO2, CTAP 2.1, and WebAuthn 2: Provable Security and Post-Quantum Instantiation",
        "url": "https://eprint.iacr.org/2022/1029",
        "year": 2023,
        "outcome": "no-evidence",
        "note": "正式版 2023 年；企业作者署 SandboxAQ，超出本站企业范围，且未见范围内在读学生。"
      },
      {
        "title": "Provable Security and Real-World Protocols: Theory and Practice",
        "url": "https://publikationen.sulb.uni-saarland.de/bitstream/20.500.11880/37410/3/thesis_MangZhao.pdf",
        "year": 2023,
        "outcome": "no-evidence",
        "note": "萨尔大学图书馆存档的单作者博士论文，DBLP 标识为论文集外的学位研究。"
      }
    ],
    "note": "逐项比对作者的公开书目、DBLP 和 IACR 署名及学校存档。七篇论文与一篇学位论文；各预印本及正式版合并。"
  },
  "SUgR5VAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.au.tsinghua.edu.cn/info/1080/3178.htm",
      "https://cloud-qu.github.io/"
    ],
    "papers": [
      {
        "title": "Small Generalizable Prompt Predictive Models Can Steer Efficient RL Post-Training of Large Reasoning Models",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/qu26f/qu26f.pdf",
        "outcome": "confirmed",
        "note": "曲云在论文相关实习时为清华在读博士，原文姓名后的脚注明确研究是在腾讯实习期间完成。本人履历公开腾讯混元实习时间为 2025 年 11 月至 2026 年 5 月。"
      },
      {
        "title": "Listwise Policy Optimization: Group-based RLVR as Target-Projection on the LLM Response Simplex",
        "url": "https://arxiv.org/html/2605.06139",
        "outcome": "confirmed",
        "note": "曲云在论文相关实习时为清华在读博士，原文姓名后的脚注明确研究是在腾讯实习期间完成。本人履历公开腾讯混元实习时间为 2025 年 11 月至 2026 年 5 月。"
      },
      {
        "title": "TRACE: A Unified Rollout Budget Allocation Framework for Efficient Agentic Reinforcement Learning",
        "url": "https://aclanthology.org/2026.emnlp-main.1610.pdf",
        "outcome": "confirmed",
        "note": "曲云在论文相关实习时为清华在读博士，原文姓名后的脚注明确研究是在腾讯实习期间完成。本人履历公开腾讯混元实习时间为 2025 年 11 月至 2026 年 5 月。"
      },
      {
        "title": "Hokoff: Real Game Dataset from Honor of Kings and its Offline Reinforcement Learning Benchmarks",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/file/464fefa022aaefc85d901317bbf13f85-Paper-Datasets_and_Benchmarks.pdf",
        "outcome": "confirmed",
        "note": "曲云从 2022 年起在清华攻读博士；本人公开履历明确把这篇论文列为 2023 年 2 月至 6 月在腾讯天美工作室实习期间完成的研究成果，腾讯 AI Lab 官方代码库也以该文章名发布。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "cQe4OeYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.mlr.press/v306/qiao26a.html",
      "https://qiaodan-cuhk.github.io/",
      "https://sds.cuhk.edu.cn/en/teacher/330",
      "https://tieyingzhang.github.io/home/",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/qiao26a/qiao26a.pdf",
      "https://developer.volcengine.com/articles/7501163777204125733"
    ],
    "papers": [
      {
        "title": "Epistemic Gain, Aleatoric Cost: Uncertainty Decomposition in Multi-Agent Debate for Math Reasoning",
        "url": "https://proceedings.mlr.press/v306/qiao26a.html",
        "outcome": "confirmed",
        "note": "ICML 正式论文首页的具名脚注说明第一作者 Dan Qiao 在字节跳动 ByteBrain 实习期间完成本篇研究。学生本人学术主页明确列出本校的两位博士联合导师以及 2025 年 4–11 月 ByteBrain 实习，两位博士导师均同篇署名。同期 ByteBrain 研究总监 Tieying Zhang 作为企业通讯作者同篇署名。"
      }
    ]
  },
  "n1DQMIsAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.mlr.press/v306/qiao26a.html",
      "https://qiaodan-cuhk.github.io/",
      "https://sds.cuhk.edu.cn/en/teacher/65",
      "https://tieyingzhang.github.io/home/",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/qiao26a/qiao26a.pdf",
      "https://developer.volcengine.com/articles/7501163777204125733"
    ],
    "papers": [
      {
        "title": "Epistemic Gain, Aleatoric Cost: Uncertainty Decomposition in Multi-Agent Debate for Math Reasoning",
        "url": "https://proceedings.mlr.press/v306/qiao26a.html",
        "outcome": "confirmed",
        "note": "ICML 正式论文首页的具名脚注说明第一作者 Dan Qiao 在字节跳动 ByteBrain 实习期间完成本篇研究。学生本人学术主页明确列出本校的两位博士联合导师以及 2025 年 4–11 月 ByteBrain 实习，两位博士导师均同篇署名。同期 ByteBrain 研究总监 Tieying Zhang 作为企业通讯作者同篇署名。"
      }
    ]
  },
  "Kzi4rW0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~jiaweile",
      "https://openreview.net/profile?id=~Yan_Wang81",
      "https://openreview.net/profile?id=~Chang_Si1",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26gy/wang26gy.pdf",
      "https://arxiv.org/pdf/2607.23250v2"
    ],
    "papers": [
      {
        "title": "AdaHC: Accelerating Multi-Token Prediction with Adaptive Head Chunking with Pipeline Parallelism",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26gy/wang26gy.pdf",
        "outcome": "confirmed",
        "note": "具名阿里实习脚注；学生和企业人员各自的公开专业履历能记录同期的学籍、任职和师生关系。"
      },
      {
        "title": "Libra: Taming Attention Workload Skew in Long-Context LLM Training with Bounded Attention Pools",
        "url": "https://arxiv.org/pdf/2607.23250v2",
        "outcome": "confirmed",
        "note": "具名阿里实习脚注；学生和企业人员各自的公开专业履历能记录同期的学籍、任职和师生关系。"
      }
    ],
    "note": "已核对 Yan Wang 的两篇具名合作及补查同组项目；未覆盖教师全部论文。"
  },
  "zb1oVGIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "http://jszy.whu.edu.cn/luoyong6/zh_CN/index.htm",
      "https://proceedings.mlr.press/v306/wang26cj.html",
      "https://dreammr.github.io/"
    ],
    "papers": [
      {
        "title": "TranX-Adapter: Bridging Artifacts and Semantics within MLLMs for Robust AI-generated Image Detection",
        "url": "https://proceedings.mlr.press/v306/wang26cj.html",
        "year": 2026,
        "outcome": "confirmed",
        "note": "ICML 正式论文首页具名标注第一作者王文斌在腾讯优图实习期间完成该工作，企业作者 Shouhong Ding 与校内导师罗勇同时署名。学生本人主页注明校内博士身份并确认该论文。"
      }
    ]
  },
  "ayrg9AUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.mlr.press/v306/lin26ak.html",
      "https://github.com/1229095296",
      "https://gjyin.github.io/",
      "https://rhe-web.github.io/people.html",
      "https://openreview.net/pdf/6927046535afb180c4ba1d33a96a3b59d4b5999d.pdf",
      "https://openreview.net/profile?id=~Hongbo_Wang3",
      "https://people.ucas.ac.cn/~heran",
      "https://openreview.net/profile?id=~Jinhua_Hao1",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26ch/wang26ch.pdf"
    ],
    "papers": [
      {
        "title": "ResRL: Boosting LLM Reasoning via Negative Sample Projection Residual Reinforcement Learning",
        "url": "https://proceedings.mlr.press/v306/lin26ak.html",
        "outcome": "lead",
        "note": "ICML 正式论文具名第一作者 Zihan Lin 在美团实习期间完成本篇、国科大学生主页与论文同标，企业资深研究员殷国君和国科大研究员赫然同篇通讯；暂无独立具名导师、组员或论文作者贡献说明。"
      },
      {
        "title": "ReST: Reshaping Token-Level Policy Gradients for Tool-Use Large Language Models",
        "url": "https://openreview.net/pdf/6927046535afb180c4ba1d33a96a3b59d4b5999d.pdf",
        "outcome": "lead",
        "note": "ICLR 正式论文具名第一作者 Zihan Lin 在美团实习期间完成本篇、国科大学生主页与论文同标，企业资深研究员殷国君和国科大研究员赫然同篇通讯；暂无独立具名导师、组员或论文作者贡献说明。"
      },
      {
        "title": "Coloring the Noise: Adversarial Sobolev Alignment for Faithful Image Super Resolution",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26ch/wang26ch.pdf",
        "outcome": "confirmed",
        "note": "国科大博士指导、具名快手实习及独立快手员工履历均有直接资料。"
      }
    ],
    "note": "已逐篇查本合作簇，未覆盖教师全部成果。"
  },
  "d3g2VJQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/sb/index.htm",
      "https://openreview.net/profile?id=~Dongsheng_Jiang2",
      "https://openreview.net/profile?id=~Niuxin1",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Niu_ReAttnCLIP_Training-Free_Open-Vocabulary_Remote_Sensing_Image_Segmentation_via_Re-defined_Attention_CVPR_2026_paper.pdf"
    ],
    "papers": [
      {
        "title": "ReAttnCLIP: Training-Free Open-Vocabulary Remote Sensing Image Segmentation via Re-defined Attention in CLIP",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Niu_ReAttnCLIP_Training-Free_Open-Vocabulary_Remote_Sensing_Image_Segmentation_via_Re-defined_Attention_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式版具名华为实习；学生和企业作者的公开履历分别明确师生关系及华为任职。"
      }
    ],
    "note": "已核对这篇和部分论文线索，未覆盖教师全部成果。"
  },
  "lTTeBdkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.ai.pku.edu.cn/info/1314/1717.htm",
      "https://github.com/XavierZhang2002"
    ],
    "papers": [
      {
        "title": "SCOUT: Active Information Foraging for Long-Text Understanding with Decoupled Epistemic States",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26fz/zhang26fz.pdf",
        "outcome": "confirmed",
        "note": "正式论文将第一作者 Zhenliang Zhang 和第二作者标为此研究在腾讯微信实习期间完成。第一作者在本人学术履历具体列该篇为腾讯微信实习工作；学生为北大在读。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "RvBDhSwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1071/1680.htm",
      "https://dwzhu-pku.github.io/",
      "https://eugeneyujunhao.github.io/"
    ],
    "papers": [
      {
        "title": "PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf",
        "outcome": "no-evidence",
        "note": "正式论文具名标注在微软亚洲研究院实习期间完成；微软不在 14 家目标企业内。"
      },
      {
        "title": "LongEmbed: Extending Embedding Models for Long Context Retrieval",
        "url": "https://aclanthology.org/2024.emnlp-main.47/",
        "outcome": "no-evidence",
        "note": "正式论文具名标注在微软亚洲研究院实习期间贡献；微软不在 14 家目标企业内。"
      },
      {
        "title": "FormAct: Agentic Source Editing for Rich-Format Document Generation",
        "url": "https://proceedings.mlr.press/v306/yu26bt.html",
        "outcome": "no-evidence",
        "note": "正式论文具名标注在微软实习期间完成；微软不在 14 家目标企业内。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "yAE-Av4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.fudan.edu.cn/31/f9/c30604a733689/page.htm",
      "https://admis.fudan.edu.cn/sgzhou/27420/list.htm"
    ],
    "papers": [
      {
        "title": "Towards Policy-Adaptive Image Guardrail: Benchmark and Method",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Piao_Towards_Policy-Adaptive_Image_Guardrail_Benchmark_and_Method_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "正式 CVPR 论文将朴彩咏标为在腾讯实习期间完成该研究；复旦校方导师名录列朴彩咏为 2025 年 9 月入学的博士生。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "ogXIdlYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.au.tsinghua.edu.cn/info/1080/3160.htm",
      "https://carlyx.github.io/",
      "https://s2026.conference-schedule.org/presenter/?uid=969304"
    ],
    "papers": [
      {
        "title": "MAViD: A Multimodal Framework for Audio-Visual Dialogue Understanding and Generation",
        "url": "https://arxiv.org/html/2512.03034v1",
        "outcome": "confirmed",
        "note": "论文首发第一作者脚注具名说明研究在其美团实习期间完成；SIGGRAPH 正式报告人履历说明其从 2024 年秋起为清华自动化系博士生。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "AhLXqHbth54C": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://arxiv.org/abs/2611.12296",
      "https://yxr620.github.io/",
      "https://yimingqiu.me/",
      "https://www.cs.hku.hk/people/academic-staff/yimingq/",
      "https://arxiv.org/abs/2506.13695",
      "https://arxiv.org/html/2611.12296v1",
      "https://arxiv.org/abs/2609.12399",
      "https://atcworkshop-rec.github.io/",
      "https://arxiv.org/abs/2611.04715",
      "https://arxiv.org/abs/2610.21264",
      "https://dblp.org/pid/25/9687-1.html",
      "https://hub.hku.hk/cris/rp/rp03552",
      "https://ziqianliu423.github.io/",
      "https://arxiv.org/html/2610.21264v1",
      "https://doi.org/10.1145/3789240.3829153",
      "https://www.comp.nus.edu.sg/~lijl/papers/horizon_sigcomm26.pdf",
      "https://doi.org/10.1145/3820441.3820465",
      "https://daqianding.github.io/",
      "https://arxiv.org/abs/2505.24785",
      "https://websites.umich.edu/~amberljc/",
      "https://www.usenix.org/conference/nsdi26/presentation/guo-shixian",
      "https://doi.org/10.1145/3772356.3772397",
      "https://archit-bhatnagar.github.io/publication/remotedx.pdf",
      "https://doi.org/10.1145/3772356.3772404",
      "https://archit-bhatnagar.github.io/publication/cloud-emu.pdf",
      "https://doi.org/10.1145/3759441.3759443",
      "https://yunmingxiao.github.io/publication/",
      "https://doi.org/10.1145/3725783.3764389",
      "https://huangyibo.github.io/publications/",
      "https://huangyibo.github.io/files/apnet2025-SwiftRDMA.pdf",
      "https://ieeexplore.ieee.org/abstract/document/11029328",
      "https://cloudintelligenceworkshop.org/",
      "https://ieeexplore.ieee.org/abstract/document/11029329",
      "https://www.usenix.org/system/files/nsdi25-hogan.pdf",
      "https://www.usenix.org/conference/nsdi25/presentation/hogan",
      "https://openreview.net/forum?id=7TCK0aBL1C",
      "https://yimingqiu.me/pdf/Yiming_Qiu_CV_2024_12.pdf",
      "https://doi.org/10.1145/3694715.3695974",
      "https://doi.org/10.1145/3626111.3628206",
      "https://doi.org/10.1145/3603269.3604882",
      "https://www.usenix.org/conference/nsdi23/presentation/qiu",
      "https://www.usenix.org/system/files/nsdi23-qiu.pdf",
      "https://arxiv.org/abs/2502.16069",
      "https://arxiv.org/abs/2607.25883",
      "https://arxiv.org/abs/2607.25792",
      "https://arxiv.org/abs/2604.24658",
      "https://arxiv.org/abs/2608.23842",
      "https://project-vera.github.io/blogs/cloudemu/cloudemu/",
      "https://arxiv.org/abs/2610.37080",
      "https://yunmingxiao.github.io/publication/26-tessera/"
    ],
    "papers": [
      {
        "title": "RecoGEM: A Serving System for Production-Scale Generative Recommendation",
        "url": "https://arxiv.org/abs/2611.12296",
        "outcome": "confirmed",
        "note": "第一作者 Xiangrui Yang 明确在香港大学由邱一鸣指导攻读博士，2026 年 4 月起在快手算法引擎平台实习并负责 OneRec 和 OneRec-V2 的线上生成式推荐服务。原文明确报告这项服务已部署并在同一代 OneRec-V2 线上系统测试；文章共同第一作者 Yunfeng Zhao 在更早的快手 OneRec 技术报告中已为企业团队成员，博士导师邱一鸣与企业合作者 Yunfeng Zhao 均同篇署名。"
      },
      {
        "title": "OneLA: Scaling Linear-Attention Decoding to Large Beams in Generative Recommendation",
        "url": "https://arxiv.org/abs/2609.12399",
        "outcome": "lead",
        "note": "作者主页有快手生成推荐实习、同主题公开的 OneLA，论文与会议档案列名快手员工，无具名脚注或能证明该篇算法在企业研究范围的特定项目链接。"
      },
      {
        "title": "ZeroGR: Filtering-First Constrained Decoding for Generative Recommendation",
        "url": "https://arxiv.org/abs/2611.04715",
        "outcome": "lead",
        "note": "论文有快手同篇员工与工业数据，第一作者同一团队实习，但个人主页未列该论文和特定算法，目前缺项目归属原证。"
      },
      {
        "title": "AdaBool: Sparse Boolean Matrix Processing with Adaptive Data Representation",
        "url": "https://arxiv.org/abs/2610.21264",
        "outcome": "lead",
        "note": "原文用腾讯广告类生产数据，具名团队作者；学生在腾讯实习最晚于 2025 年 6 月结束，港大博士后于 2025 年入学/导师页面从 2026 年列名，未能证明学校指导与企业研究重叠。"
      },
      {
        "title": "Horizon: A Hyper-Edge Observability Engine for Live Streaming Networks",
        "url": "https://doi.org/10.1145/3789240.3829153",
        "outcome": "lead",
        "note": "第一作者及第二作者均由邱一鸣指导。同篇有字节员工和实际直播系统，但两位学生的公开实习履历可定位到微软和上海人工智能实验室，缺本篇在字节参与角色。"
      },
      {
        "title": "Towards Learned Switch Behavior Modeling",
        "url": "https://doi.org/10.1145/3820441.3820465",
        "outcome": "no-evidence",
        "note": "正式论文的具名企业作者来自微软研究院；其正式研究实习不属于目标企业。"
      },
      {
        "title": "EXP-Bench: Can AI Conduct AI Research Experiments?",
        "url": "https://arxiv.org/abs/2505.24785",
        "outcome": "no-evidence",
        "note": "原文、作者履历和 ICLR 记录明示主要密歇根合作者，没有该校教师在目标企业研究期间对其中一位相关在校作者指导的材料。"
      },
      {
        "title": "Skyline: A Cloud Centric Internet Monitoring Engine",
        "url": "https://www.usenix.org/conference/nsdi26/presentation/guo-shixian",
        "outcome": "lead",
        "note": "正式论文列港大博士与字节网络员工，但至少 2025 年 12 月已有接受通知；第一学生自 2026 年 2 月开始攻读港大博士，且没有先前字节在企学生或同期具名校内指导记录。"
      },
      {
        "title": "Remote Direct Code Execution",
        "url": "https://doi.org/10.1145/3772356.3772397",
        "outcome": "no-evidence",
        "note": "作者公开正式 PDF 列大学署名；没有范围内企业员工。"
      },
      {
        "title": "A Case for Learned Cloud Emulators",
        "url": "https://doi.org/10.1145/3772356.3772404",
        "outcome": "no-evidence",
        "note": "正式论文是密歇根、伯克利和港大合作；使用其他云服务并不构成目标企业作者。"
      },
      {
        "title": "Cloud Infrastructure Management in the Age of AI Agents",
        "url": "https://doi.org/10.1145/3759441.3759443",
        "outcome": "no-evidence",
        "note": "正式作者名单与机构无相关目标企业在企学生。真实企业合作者 Martin Casado 的机构不在范围。"
      },
      {
        "title": "Towards Fully Disaggregated Recommendation Model Serving",
        "url": "https://doi.org/10.1145/3725783.3764389",
        "outcome": "no-evidence",
        "note": "正式论文作者表中未检索到在读学生经同篇邱一鸣指导参与本篇范围企业研究的具名材料。"
      },
      {
        "title": "Exposing RDMA NIC Resources for Software-Defined Scheduling",
        "url": "https://huangyibo.github.io/files/apnet2025-SwiftRDMA.pdf",
        "outcome": "no-evidence",
        "note": "原文首页列学术机构署名；没有目标企业技术人员。"
      },
      {
        "title": "Automated Bug Discovery in Cloud Infrastructure-as-Code Updates with LLM Agents",
        "url": "https://ieeexplore.ieee.org/abstract/document/11029328",
        "outcome": "no-evidence",
        "note": "IEEE 在该工作中的行业团队和案例不对应任何目标企业证据；未见学生在企业做本篇工作的公开证明。"
      },
      {
        "title": "Automated Lifting for Cloud Infrastructure-as-Code Programs",
        "url": "https://ieeexplore.ieee.org/abstract/document/11029329",
        "outcome": "no-evidence",
        "note": "正式作者和个人书目没有任何目标企业作者实习证明。"
      },
      {
        "title": "Efficient Multi-WAN Transport for 5G with OTTER",
        "url": "https://www.usenix.org/system/files/nsdi25-hogan.pdf",
        "outcome": "no-evidence",
        "note": "正式版为微软与密歇根/美国学校的合作，无范围内企业。"
      },
      {
        "title": "IaC-Eval: A Code Generation Benchmark for Infrastructure-as-Code Programs",
        "url": "https://openreview.net/forum?id=7TCK0aBL1C",
        "outcome": "no-evidence",
        "note": "NeurIPS 原文及报告是邱一鸣仍在美国入读博士期间的研究，组内无本项目要求的港大在读学生及同期指导。"
      },
      {
        "title": "Unearthing Semantic Checks for Cloud Infrastructure-as-Code Programs",
        "url": "https://doi.org/10.1145/3694715.3695974",
        "outcome": "no-evidence",
        "note": "邱一鸣本人 CV 显示他当时是密歇根博士；微软而非目标企业共同署名。"
      },
      {
        "title": "Simplifying Cloud Management with Cloudless Computing",
        "url": "https://doi.org/10.1145/3626111.3628206",
        "outcome": "no-evidence",
        "note": "本人仍是美国博士，出版当时不以香港大学导师身份开展研究，不符合所求关系。"
      },
      {
        "title": "Unleashing SmartNIC Packet Processing Performance in P4",
        "url": "https://doi.org/10.1145/3603269.3604882",
        "outcome": "no-evidence",
        "note": "原论文及本人履历显示为在美国攻读博士期间的研究，企业为 NVIDIA/Mellanox。"
      },
      {
        "title": "Synthesizing Runtime Programmable Switch Updates",
        "url": "https://www.usenix.org/conference/nsdi23/presentation/qiu",
        "outcome": "no-evidence",
        "note": "本人在 Rice 读博士，同篇企业合作者 Ryan Beckett 为微软员工。"
      },
      {
        "title": "Curie: Toward Rigorous and Automated Scientific Experimentation with AI Agents",
        "url": "https://arxiv.org/abs/2502.16069",
        "outcome": "no-evidence",
        "note": "论文语料跨研究领域，但共同第一作者的任职轨迹均在美国，未发现目标企业的本篇学生研究。"
      },
      {
        "title": "Towards a Systems Foundation for Agentic Cloud Management",
        "url": "https://arxiv.org/abs/2607.25883",
        "outcome": "no-evidence",
        "note": "论文的企业共同作者供职微软，运行 Azure；该企业不在调查范围。"
      },
      {
        "title": "The Model in the Middle: Toward AI-Native Real-Time Communication",
        "url": "https://arxiv.org/abs/2607.25792",
        "outcome": "no-evidence",
        "note": "原文三位作者署港大，无同篇目标企业员工。"
      },
      {
        "title": "The Last Human-Written Paper: Agent-Native Research Artifacts",
        "url": "https://arxiv.org/abs/2604.24658",
        "outcome": "no-evidence",
        "note": "同篇诸多作者非香港大学邱一鸣名下的具名研究生；现有贡献档案无可定位到三类角色的关系。"
      },
      {
        "title": "Automated Synthesis of Cloud Emulators",
        "url": "https://arxiv.org/abs/2608.23842",
        "outcome": "no-evidence",
        "note": "原稿仅密歇根、伯克利和港大三方学术署名。"
      },
      {
        "title": "Tessera: Structure-Completed Evidence Units for Web Retrieval-Augmented Generation",
        "url": "https://arxiv.org/abs/2610.37080",
        "outcome": "no-evidence",
        "note": "原稿七位研究者署港中深、港大和北邮。未见目标企业员工或参与本篇的在企学生证据。"
      }
    ],
    "note": "交叉对照本人公开书目和 ORCID 消歧的 DBLP 名录，补查本人课题组、合作者公开书目及正式出版记录。逐篇核查截至 2026-11-12 可公开查到的不同论文与预印本。同篇版本合并，尚未发布原文的 SkyRDMA 暂列为界外。保留公开资料中角色或时间仍不齐全的候选。"
  },
  "caQ-OmYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://xiaokunfeng.github.io/",
      "https://people.ucas.ac.cn/~huangkaiqi",
      "https://cxxgtxy.github.io/cv/",
      "https://raw.githubusercontent.com/mlresearch/v306/main/assets/feng26ac/feng26ac.pdf",
      "https://wmeiqi.github.io/",
      "https://arxiv.org/pdf/2603.22212",
      "https://arxiv.org/pdf/2507.11245v1",
      "https://arxiv.org/html/2601.20504",
      "https://arxiv.org/pdf/2510.14847v2",
      "https://ai.ucas.ac.cn/index.php/zh-cn/tzgg/6664-2022-03-21-06-48-19",
      "https://openaccess.thecvf.com/content/CVPR2024/papers/Chen_PeLK_Parameter-efficient_Large_Kernel_ConvNets_with_Peripheral_Convolution_CVPR_2024_paper.pdf",
      "https://raw.githubusercontent.com/mlresearch/v235/main/assets/chen24bb/chen24bb.pdf",
      "https://junshutang.github.io/",
      "https://arxiv.org/pdf/2610.25959v2"
    ],
    "papers": [
      {
        "title": "Enhancing Train-Free Infinite-Frame Generation for Consistent Long Videos",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/feng26ac/feng26ac.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式版具名阿里实习，学生和企业负责人的个人履历能各自核对身份。"
      },
      {
        "title": "Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models",
        "url": "https://arxiv.org/pdf/2603.22212",
        "outcome": "confirmed",
        "note": "学生本人履历确认在国科大持续就读和指导；本篇原文明确把阿里高德实习符号标给武美奇。"
      },
      {
        "title": "NarrLV: Towards a Comprehensive Narrative-Centric Evaluation for Long Video Generation",
        "url": "https://arxiv.org/pdf/2507.11245v1",
        "outcome": "confirmed",
        "note": "论文明确说明国科大学生在阿里高德实习时完成；学籍、具名指导及阿里任职各有公开材料。"
      },
      {
        "title": "Latent Temporal Discrepancy as Motion Prior: A Loss-Weighting Strategy for Dynamic Fidelity in T2V",
        "url": "https://arxiv.org/html/2601.20504",
        "outcome": "confirmed",
        "note": "论文明确说明国科大学生在阿里高德实习时完成；学籍、具名指导及阿里任职各有公开材料。"
      },
      {
        "title": "ImagerySearch: Adaptive Test-Time Search for Video Generation Beyond Semantic Dependency Constraints",
        "url": "https://arxiv.org/pdf/2510.14847v2",
        "outcome": "confirmed",
        "note": "预印本 PDF 的星号只标武美奇，明确将本论文工作对应她在高德的实习。"
      },
      {
        "title": "PeLK: Parameter-efficient Large Kernel ConvNets with Peripheral Convolution",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Chen_PeLK_Parameter-efficient_Large_Kernel_ConvNets_with_Peripheral_Convolution_CVPR_2024_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式版首页的美团实习脚注只标记陈宏昊，由其博士导师黄凯奇与同篇在职美团员工初祥祥合著。作者于 2024 年 3 月 12 日发布预印本。"
      },
      {
        "title": "Revealing the Dark Secrets of Extremely Large Kernel ConvNets on Robustness",
        "url": "https://raw.githubusercontent.com/mlresearch/v235/main/assets/chen24bb/chen24bb.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式版把美团实习明确标给前两位作者，其中第一作者陈宏昊为黄凯奇指导的国科大博士生。合作者初祥祥在原始投稿阶段尚为美团高级技术经理。"
      },
      {
        "title": "EmbodiedWorld-200K: Toward Embodied World Agents via Embodied-Planning Dataset and Interactive World Models",
        "url": "https://arxiv.org/pdf/2610.25959v2",
        "outcome": "confirmed",
        "note": "论文稿注明实习期间在腾讯混元完成。共同一作唐俊姝在本人书目单独标出丰效坤是本篇实习作者，与丰效坤本人履历及同篇国科大、腾讯双署名吻合。博士导师黄凯奇同篇署名。"
      }
    ],
    "note": "已逐篇检查部分书目和学生科研实习，尚未覆盖全部论文。"
  },
  "cuJ3QG8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~zlei",
      "https://jingdongwang2017.github.io/index_cn.html",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_From_Intuition_to_Investigation_A_Tool-Augmented_Reasoning_MLLM_Framework_for_CVPR_2026_paper.pdf",
      "https://orcid.org/0000-0002-6159-619X",
      "https://erictan7.github.io/",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/6d13e085b79d454da5910e4ca82a3d9d-Paper-Conference.pdf"
    ],
    "papers": [
      {
        "title": "From Intuition to Investigation: A Tool-Augmented Reasoning MLLM Framework for Generalizable Face Anti-Spoofing",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_From_Intuition_to_Investigation_A_Tool-Augmented_Reasoning_MLLM_Framework_for_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "正式版具名百度实习；学籍、指导和百度研究人员均有第一方资料。"
      },
      {
        "title": "Veritas: Generalizable Deepfake Detection via Pattern-Aware Reasoning",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/6d13e085b79d454da5910e4ca82a3d9d-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "ICLR 正式版将第一作者在蚂蚁集团实习与本论文研究直接关联。谭淏与校内导师雷震及蚂蚁正式员工王伟强均为同篇作者。"
      }
    ],
    "note": "已按学生实习项目和会议原文逐篇查证一部分书目，未覆盖全部论文。"
  },
  "Ihj2Rw8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sites.google.com/view/intelligent-computing-lab/people"
    ],
    "papers": [
      {
        "title": "Generative Optimization for Incentivized Advertising with Global Level Constraints",
        "url": "https://arxiv.org/html/2608.04421v1",
        "year": 2026,
        "outcome": "lead",
        "note": "论文具名确认电子科大硕士陈格格参与快手实习项目；电子科大实验室名录列学生和同篇教授周帆，但团队含多位教师，仍查具名指导关系。"
      },
      {
        "title": "Reward Balancing Revisited: Enhancing Offline Reinforcement Learning for Recommender Systems",
        "url": "https://arxiv.org/html/2506.22112v1",
        "year": 2025,
        "outcome": "lead",
        "note": "作者含电子科大学生舒文正及周帆教授，数位作者署名快手；原文没有具名说明舒文正的企业参与，仍查个人资料和项目档案。"
      }
    ]
  },
  "pbjw9sMAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sai.sjtu.edu.cn/cn/facultydetails/zzjs/zhangya",
      "https://sii-ferenas.github.io/"
    ],
    "papers": [
      {
        "title": "ConText: Driving In-context Learning for Text Removal and Segmentation",
        "url": "https://proceedings.mlr.press/v267/zhang25dg.html",
        "outcome": "confirmed",
        "note": "论文首页具名题注说明研究在第一作者张菲的阿里通义实习期间完成；张菲个人主页列上海交大博士学籍与共同指导。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "zX7i1EkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://iiis.tsinghua.edu.cn/rydw/qzjs/lijian.htm",
      "https://outsider565.github.io/",
      "https://iiis.tsinghua.edu.cn/info/1193/4651.htm"
    ],
    "papers": [
      {
        "title": "AdaRoPE: Not All Attention Heads Should Rotate and Scale Equally",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/wang26lk/wang26lk.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式论文首页明确写明本研究在 Shaowen Wang 腾讯实习期间完成；本人主页和校方课题组网站一致确认他是清华在读研究生。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "y2EaftAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1078/1672.htm",
      "https://o-l1ru1.github.io/"
    ],
    "papers": [
      {
        "title": "FIRE: Learning to Navigate and Act on Real-World Files via Stateful Reinforcement Learning",
        "url": "https://raw.githubusercontent.com/mlresearch/v306/main/assets/ma26q/ma26q.pdf",
        "outcome": "confirmed",
        "note": "ICML 正式论文把 Rui Li、Zheng Li、Jingyuan Ma 并列署为北大作者，三个姓名均标注实习脚注，具名说明此研究在字节跳动 BandAI 实习期间完成；Rui Li 本人也列明从 2025 年 10 月起的字节算法实习及北大硕士学籍与导师。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "_wop6KgAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~0064227",
      "https://hambaobao.me/about/"
    ],
    "papers": [
      {
        "title": "SWE-Flow: Synthesizing Software Engineering Data in a Test-Driven Manner",
        "url": "https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cn/zhang25cn.pdf",
        "outcome": "confirmed",
        "note": "首位作者张磊的同名脚注标注该研究在阿里 Qwen 实习完成；本人所列实习时间为 2024 年 8 月至 2026 年 3 月。 中国科学院大学导师名录与论文机构署名互证学生身份。"
      },
      {
        "title": "MegaFlow: Large-Scale Distributed Orchestration System for the Agentic Era",
        "url": "https://arxiv.org/html/2601.07526",
        "outcome": "confirmed",
        "note": "首位作者张磊的同名脚注标注该研究在阿里 Qwen 实习完成；本人所列实习时间为 2024 年 8 月至 2026 年 3 月。 中国科学院大学导师名录与论文机构署名互证学生身份。"
      },
      {
        "title": "Iterative Forward Tuning Boosts In-Context Learning in Language Models",
        "url": "https://aclanthology.org/2024.acl-long.825.pdf",
        "outcome": "confirmed",
        "note": "ACL 正式论文首页将实习脚注标在首位作者杨家玺姓名后，明确工作在阿里巴巴实习期间完成。 中国科学院大学导师名录与论文机构署名互证学生身份。"
      },
      {
        "title": "One-Shot Learning as Instruction Data Prospector for Large Language Models",
        "url": "https://aclanthology.org/2024.acl-long.252.pdf",
        "outcome": "confirmed",
        "note": "ACL 正式论文首页将实习脚注标在首位作者李云水姓名后，明确工作在阿里巴巴实习期间完成。 中国科学院大学导师名录与论文机构署名互证学生身份。"
      },
      {
        "title": "Diverse AI Feedback For Large Language Model Alignment",
        "url": "https://aclanthology.org/2025.tacl-1.19.pdf",
        "outcome": "confirmed",
        "note": "TACL 正式版首页具名写明该研究在余天枢于通义实验室实习期间完成；国科大导师名录和深圳先进院新闻确认其硕士生身份。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "66KKZR4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/abs/2608.15265",
      "https://yasning.github.io/homepage/",
      "https://raymondhliu.github.io/students/",
      "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/LIU-Hao/liuh#new_tab",
      "https://s2025.conference-schedule.org/organization/?inst=8491162979695427896",
      "https://usail-hkust.github.io/VibeWorlding-Gym/",
      "https://data.epo.org/publication-server/rest/v1.2/patents/EP4571756NWA1/document.pdf"
    ],
    "papers": [
      {
        "title": "VibeWorlding: Can Multimodal Agents Construct 3D Open Worlds End-to-End?",
        "url": "https://arxiv.org/abs/2608.15265",
        "outcome": "confirmed",
        "note": "第一作者在正式预印本和原始项目明示在腾讯实习时完成本篇，其学术主页列港科大（广州）在读博士和具名博士导师刘浩。原文的腾讯 AIPD 作者叶靖雯有同期公开的任职和研发依据，同篇发表；与另一篇 HRBench 为不同研究。"
      }
    ]
  },
  "6bFNhtwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~lesun",
      "https://lazyc81.github.io/",
      "https://www.sciencedirect.com/science/article/pii/S2667325826000324",
      "https://proceedings.mlr.press/v267/li25cw.html",
      "https://wenxueru.github.io/",
      "https://people.ucas.ac.cn/~benhe"
    ],
    "papers": [
      {
        "title": "The Devil Is in the Details: Tackling Unimodal Spurious Correlations for Generalizable Multimodal Reward Models",
        "url": "https://proceedings.mlr.press/v267/li25cw/li25cw.pdf",
        "outcome": "confirmed",
        "note": "国科大李梓超在小红书具名实习；两位校内导师同篇，仅计一种研究成果。"
      },
      {
        "title": "Cheems: A Practical Guidance for Building and Evaluating Chinese Reward Models from Scratch",
        "url": "https://arxiv.org/abs/2502.17173",
        "outcome": "lead",
        "note": "同篇作者有研读范围内导师、同校学生和在任小红书研究员，首版和修订版论文未提具体实习；先保留线索。"
      },
      {
        "title": "Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?",
        "url": "https://openreview.net/notes/edits/attachment?id=8L1kbRDNJY&name=pdf",
        "outcome": "no-evidence",
        "note": "同篇虽有署名，但学生本人只确认何苯为校内导师；本论文已记到何苯，不再按其他同篇作者重复追加。"
      }
    ],
    "note": "已对李梓超和 Xueru Wen 合作论文的部分书目及正式版脚注进行了交叉核查，尚未覆盖全部书目。"
  },
  "EmTFUdQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~benhe",
      "https://wenxueru.github.io/",
      "https://openreview.net/notes/edits/attachment?id=8L1kbRDNJY&name=pdf",
      "https://openreview.net/forum?id=Cnwz9jONi5",
      "https://aclanthology.org/2025.acl-long.737/",
      "https://aclanthology.org/2025.findings-acl.271/",
      "https://arxiv.org/abs/2512.12576",
      "https://www.sciencedirect.com/science/article/pii/S2667325826000324"
    ],
    "papers": [
      {
        "title": "Rethinking Reward Model Evaluation: Are We Barking up the Wrong Tree?",
        "url": "https://openreview.net/notes/edits/attachment?id=8L1kbRDNJY&name=pdf",
        "outcome": "confirmed",
        "note": "温学儒、何苯、张德兵；本人学业、具名实习脚注和在任期间交叉证实。"
      },
      {
        "title": "Cheems: A Practical Guidance for Building and Evaluating Chinese Reward Models from Scratch",
        "url": "https://aclanthology.org/2025.acl-long.737/",
        "outcome": "lead",
        "note": "同一时期的学生、导师和企业作者同篇，但暂无本项具体实习证据。"
      },
      {
        "title": "On-Policy Self-Alignment with Fine-grained Knowledge Feedback for Hallucination Mitigation",
        "url": "https://aclanthology.org/2025.findings-acl.271/",
        "outcome": "lead",
        "note": "同一时期的学生、导师和企业作者同篇，但暂无本项具体实习证据。"
      },
      {
        "title": "Coupled Variational Reinforcement Learning for Language Model General Reasoning",
        "url": "https://arxiv.org/abs/2512.12576",
        "outcome": "lead",
        "note": "同一时期的学生、导师和企业作者同篇，但暂无本项具体实习证据。"
      }
    ],
    "note": "已核查温学儒与何苯近期合著中的一部分，仍需覆盖何苯其他公开作者组书目。"
  },
  "5YZ3kvoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/XieXiaohua",
      "https://yanzuo.lu/",
      "https://pangzecheung.github.io/Homepage/",
      "https://ur.tencent.com/article/1473",
      "https://www.isee-ai.cn/~zhwshi/selected_paper_list.html",
      "https://www.ipd.gov.hk/hkipjournal/04022022/Patent_04022022.pdf",
      "https://ira.lib.polyu.edu.hk/bitstream/10397/105457/1/Zhang_Interactive_Self-Training_Mean.pdf",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Zheng_Dense2MoE_Restructuring_Diffusion_Transformer_to_MoE_for_Efficient_Text-to-Image_Generation_ICCV_2025_paper.pdf",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Xia_Training-free_and_Adaptive_Sparse_Attention_for_Efficient_Long_Video_Generation_ICCV_2025_paper.pdf"
    ],
    "papers": [
      {
        "title": "Adversarial Distribution Matching for Diffusion Distillation Towards Efficient Image and Video Synthesis",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Lu_Adversarial_Distribution_Matching_for_Diffusion_Distillation_Towards_Efficient_Image_and_ICCV_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICCV 正式论文列卢彦作为中山大学和字节跳动 Seed Vision 双署名第一作者，项目组负责人 Xuefeng Xiao 和其校内导师为同篇作者。该会议在 2025 年 3 月锁定投稿作者名单，当时卢彦作仍在中大攻读硕士并在字节 Seed 实习研究这类扩散模型蒸馏；学生本人公开履历列出参与课题、硕士导师及企业负责人，6 月毕业后才转为全职。"
      },
      {
        "title": "Dense2MoE: Restructuring Diffusion Transformer to MoE for Efficient Text-to-Image Generation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Zheng_Dense2MoE_Restructuring_Diffusion_Transformer_to_MoE_for_Efficient_Text-to-Image_Generation_ICCV_2025_paper.html",
        "year": 2025,
        "outcome": "confirmed",
        "note": "正式出版版把第一作者郑有为同时署于中大和字节，并明确注明本篇在字节智能创作实习完成。谢晓华的中大官方档案具名列其指导的郑有为成果，校方研究生公示列他为计算机学院 2023 级硕士；谢晓华与字节研究作者肖雪峰均同篇。"
      },
      {
        "title": "Coarse-to-Fine Latent Diffusion for Pose-Guided Person Image Synthesis",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Lu_Coarse-to-Fine_Latent_Diffusion_for_Pose-Guided_Person_Image_Synthesis_CVPR_2024_paper.pdf",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "全文作者单位为中大、实验室等；在公开机构署名中未找到范围内企业作者。"
      },
      {
        "title": "Formulating Discrete Probability Flow Through Optimal Transport",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/file/e6e706454d72c18582b9c1ff70b11f7d-Paper-Conference.pdf",
        "year": 2023,
        "outcome": "confirmed",
        "note": "正式论文具名说明张鹏泽在微信实习期间完成本研究。张鹏泽履历、校方教师档案和腾讯高校合作资料分别确认中大博士学籍、谢晓华为导师及同期企业作者 Hubery Yin 的微信视觉正式任职。"
      },
      {
        "title": "Tackling the Singularities at the Endpoints of Time Intervals in Diffusion Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Zhang_Tackling_the_Singularities_at_the_Endpoints_of_Time_Intervals_in_CVPR_2024_paper.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "正式论文具名说明张鹏泽在微信实习期间完成本研究。张鹏泽履历、校方教师档案和腾讯高校合作资料分别确认中大博士学籍、谢晓华为导师及同期企业作者 Hubery Yin 的微信视觉正式任职。"
      },
      {
        "title": "WeDetect: Fast Open-Vocabulary Object Detection as Retrieval",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Fu_WeDetect_Fast_Open-Vocabulary_Object_Detection_as_Retrieval_CVPR_2026_paper.pdf",
        "year": 2026,
        "outcome": "confirmed",
        "note": "正式论文脚注明示付盛豪在腾讯实习期间完成此项工作，企业合作者饶峰云为腾讯署名通讯作者。中大郑伟诗的公开书目在本篇具名标注他所指导的学生；论文单位则按原文为琶洲实验室（黄埔）及深圳环形实验室。 同篇作者谢晓华也在中山大学教师档案中被明确列为付盛豪的共同指导教师。"
      },
      {
        "title": "Frozen-DETR: Enhancing DETR with Image Understanding from Frozen Foundation Models",
        "url": "https://papers.nips.cc/paper_files/paper/2024/file/bf7262e692f3a5c7d676e9e06a1d919a-Paper-Conference.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "NeurIPS 正式论文首页具名标明付盛豪在阿里实习期间完成研究、杨琪泽为项目组负责人、郑伟诗为通讯作者；郑伟诗本人论文列表逐篇标注指导关系。 同篇作者谢晓华也在中山大学教师档案中被明确列为付盛豪的共同指导教师。"
      },
      {
        "title": "LLMDet: Learning Strong Open-Vocabulary Object Detectors under the Supervision of Large Language Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Fu_LLMDet_Learning_Strong_Open-Vocabulary_Object_Detectors_under_the_Supervision_of_CVPR_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "正式论文补充材料首页具名标出付盛豪在阿里实习时参与此项工作，致谢确认阿里实习项目。杨琪泽署阿里通义，郑伟诗为通讯作者，导师本人公开书目分别具名标注。 同篇作者谢晓华也在中山大学教师档案中被明确列为付盛豪的共同指导教师。"
      },
      {
        "title": "ViSpeak: Visual Instruction Feedback in Streaming Videos",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Fu_ViSpeak_Visual_Instruction_Feedback_in_Streaming_Videos_ICCV_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICCV 正式论文首页专门标出付盛豪和 Yi-Xing Peng 的阿里实习完成该项课题。杨琪泽署阿里通义，郑伟诗在同篇署名并在本人公开书目明确列两人为指导学生。 同篇作者谢晓华也在中山大学教师档案中被明确列为付盛豪的共同指导教师。"
      }
    ]
  },
  "w3GjGqoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/LaiJianhuang",
      "https://yanzuo.lu/"
    ],
    "papers": [
      {
        "title": "Adversarial Distribution Matching for Diffusion Distillation Towards Efficient Image and Video Synthesis",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Lu_Adversarial_Distribution_Matching_for_Diffusion_Distillation_Towards_Efficient_Image_and_ICCV_2025_paper.pdf",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICCV 正式论文列卢彦作为中山大学和字节跳动 Seed Vision 双署名第一作者，项目组负责人 Xuefeng Xiao 和其校内导师为同篇作者。该会议在 2025 年 3 月锁定投稿作者名单，当时卢彦作仍在中大攻读硕士并在字节 Seed 实习研究这类扩散模型蒸馏；学生本人公开履历列出参与课题、硕士导师及企业负责人，6 月毕业后才转为全职。"
      }
    ]
  },
  "SAUCVsEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://jszy.whu.edu.cn/xiaguisong/zh_CN/index.htm"
    ],
    "papers": [
      {
        "title": "UNIC-Adapter: Unified Image-instruction Adapter with Multi-modal Transformer for Image Generation",
        "url": "https://arxiv.org/abs/2412.18928",
        "year": 2025,
        "outcome": "lead",
        "note": "CVPR 正式论文具名确认武汉大学作者 Lunhao Duan 在阿里实习；武大夏桂松同篇为通讯，需找具名指导与学籍来源。"
      }
    ]
  },
  "4pg3rtYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://toneyaya.github.io/",
      "https://faculty.sist.shanghaitech.edu.cn/yangsibei/",
      "https://cse.sysu.edu.cn/teacher/Yangsibei"
    ],
    "papers": [
      {
        "title": "Chart Deep Research in LVLMs via Parallel Relative Policy Optimization",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/504bfc60c2a7fed53aed76eeed409cd1-Paper-Conference.pdf",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "第一作者唐嘉晋公开履历证明在上海科技大学读博并由杨思蓓指导；杨在本篇仅署中山大学，但未发现上海科技大学在调查高校范围内。"
      }
    ]
  },
  "T4gqdPkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.ai.pku.edu.cn/info/1139/2949.htm",
      "https://jianzongwu.github.io/"
    ],
    "papers": [
      {
        "title": "VMoBA: Mixture-of-Block Attention for Video Diffusion Models",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/d6c4014ff8d95025aa35d831c0f81faa-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "ICLR 正式论文明确写研究在第一作者吴健宗的快手可灵实习期间完成；本人主页说明 2024 年 12 月开始可灵实习及北大博士学籍。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "BN2Ze-QAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/abs/2606.13679",
      "https://zhengdian1.github.io/",
      "https://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/professors/prof-hongsheng-li",
      "https://manyuan97.github.io/",
      "https://arxiv.org/pdf/2606.13679",
      "https://arxiv.org/abs/2512.05965",
      "https://arxiv.org/html/2512.05965v1",
      "https://arxiv.org/abs/2511.22663",
      "https://arxiv.org/pdf/2511.22663v1",
      "https://zhengdian1.github.io/AIA-project/",
      "https://openaccess.thecvf.com/content/ICCV2025/html/He_CameraCtrl_II_Dynamic_Scene_Exploration_via_Camera-controlled_Video_Diffusion_Models_ICCV_2025_paper.html",
      "https://hehao13.github.io/",
      "https://ceyuan.me/",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/He_CameraCtrl_II_Dynamic_Scene_Exploration_via_Camera-controlled_Video_Diffusion_Models_ICCV_2025_paper.pdf",
      "https://arxiv.org/abs/2503.10592",
      "https://arxiv.org/abs/2604.21921",
      "https://omni-model.com/"
    ],
    "papers": [
      {
        "title": "InterleaveThinker: Reinforcing Agentic Interleaved Generation",
        "url": "https://arxiv.org/abs/2606.13679",
        "outcome": "confirmed",
        "note": "论文首页将美团实习注释具名挂给第一作者郑典，并标示产业项目负责人 Manyuan Zhang 与香港中文大学的通讯作者李鸿升；学生本人记录实习起止和两端导师姓名。"
      },
      {
        "title": "EditThinker: Unlocking Iterative Reasoning for Any Image Editor",
        "url": "https://arxiv.org/abs/2512.05965",
        "outcome": "confirmed",
        "note": "论文原稿把在读博士郑典逐人绑定港中文与美团两个单位，学生列本篇为研究成果，公开履历给出同期美团实习及具名企业导师 Manyuan Zhang，并明确同篇李鸿升为其博士导师。"
      },
      {
        "title": "AIA: Rethinking Architecture Decoupling Strategy In Unified Multimodal Model",
        "url": "https://arxiv.org/abs/2511.22663",
        "outcome": "confirmed",
        "note": "预印本首页把美团实习期间完成本篇的脚注明确指向第一作者郑典。学生公开履历确认香港中文大学在读、同篇学术导师李鸿升以及美团 LongCat 实习中由 Manyuan Zhang 指导；原始论文和项目同时把后者具名列为美团项目负责人。该文后续预印本改题，仍是同一编号的一篇。"
      },
      {
        "title": "CameraCtrl II: Dynamic Scene Exploration via Camera-controlled Video Diffusion Models",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/He_CameraCtrl_II_Dynamic_Scene_Exploration_via_Camera-controlled_Video_Diffusion_Models_ICCV_2025_paper.html",
        "outcome": "confirmed",
        "note": "ICCV 论文在第一作者何昊名下注明研究是在字节跳动 Seed 实习期间完成。本人主页确认港中文博士指导老师李鸿升与公司实习导师 Ceyuan Yang，二者同篇署名；Ceyuan Yang 的研究主页和署名验证该时期在 Seed 任研究科学家。"
      },
      {
        "title": "Context Unrolling in Omni Models",
        "url": "https://arxiv.org/abs/2604.21921",
        "outcome": "confirmed",
        "note": "这篇论文是字节跳动 Seed 技术报告，项目页明确把何昊列为具名共同第一作者；何昊自身主页将这篇工作列于自己的研究，同时注明当时就在 Seed 做该类多模态模型研发。其港中文导师李鸿升同篇署名，实际任职的 Ceyuan Yang 为共同通讯作者。"
      }
    ]
  },
  "RxvYlNQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~zhaodongbin",
      "https://fyqqyf.github.io/",
      "https://gjyin.github.io/",
      "https://github.com/Simple-Efficient/Tool-Factory",
      "https://people.ucas.edu.cn/~0001598"
    ],
    "papers": [
      {
        "title": "SRFT: A Single-Stage Method with Supervised and Reinforcement Fine-Tuning for Reasoning",
        "url": "https://openreview.net/pdf?id=n6E0r6kQWQ",
        "outcome": "confirmed",
        "note": "傅宇千公开履历将本篇对应美团实习，正式论文与双方人员身份一致。"
      },
      {
        "title": "RLAE: Reinforcement Learning-Assisted Ensemble for LLMs",
        "url": "https://aclanthology.org/2025.emnlp-main.680.pdf",
        "outcome": "confirmed",
        "note": "傅宇千公开履历将本篇对应美团实习，正式论文与双方人员身份一致。"
      },
      {
        "title": "Revisiting On-Policy Distillation: Empirical Failure Modes and Simple Fixes",
        "url": "https://arxiv.org/html/2603.25562",
        "outcome": "lead",
        "note": "部分方法与字节实习项目吻合，但论文未署字节；Zhuo Jiang 为独立研究者，未确认研究时的公司身份和论文关系。"
      }
    ],
    "note": "已核对傅宇千公开履历所涉主要论文，未覆盖该教师全部合作者和书目。"
  },
  "AMnkOiIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~zhuyuanheng",
      "https://fyqqyf.github.io/",
      "https://gjyin.github.io/",
      "https://github.com/Simple-Efficient/Tool-Factory",
      "https://people.ucas.edu.cn/~0001598"
    ],
    "papers": [
      {
        "title": "SRFT: A Single-Stage Method with Supervised and Reinforcement Fine-Tuning for Reasoning",
        "url": "https://openreview.net/pdf?id=n6E0r6kQWQ",
        "outcome": "confirmed",
        "note": "傅宇千公开履历将本篇对应美团实习，正式论文与双方人员身份一致。"
      },
      {
        "title": "RLAE: Reinforcement Learning-Assisted Ensemble for LLMs",
        "url": "https://aclanthology.org/2025.emnlp-main.680.pdf",
        "outcome": "confirmed",
        "note": "傅宇千公开履历将本篇对应美团实习，正式论文与双方人员身份一致。"
      },
      {
        "title": "Revisiting On-Policy Distillation: Empirical Failure Modes and Simple Fixes",
        "url": "https://arxiv.org/html/2603.25562",
        "outcome": "lead",
        "note": "部分方法与字节实习项目吻合，但论文未署字节；Zhuo Jiang 为独立研究者，未确认研究时的公司身份和论文关系。"
      }
    ],
    "note": "已核对傅宇千公开履历所涉主要论文，未覆盖该教师全部合作者和书目。"
  },
  "pGZtPjcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/ChenLiang",
      "https://zzoomd.github.io/",
      "https://www.cse.cuhk.edu.hk/upcoming-events/learning-molecular-graphs-under-label-scarcity-and-distribution-shift/",
      "https://edisonleeeee.github.io/",
      "https://isda2023.github.io/",
      "https://chenliang.tech/publications",
      "https://www.antgroup.com/technology/new-tech-Technology-dynamics-detail/1713974400000",
      "https://chenliang.tech/group",
      "https://csxzjin.github.io/"
    ],
    "papers": [
      {
        "title": "Measuring Diversity in Synthetic Datasets",
        "url": "https://proceedings.mlr.press/v267/zhu25ac.html",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICML 正式论文首页标明朱裕昌在腾讯 AI Lab 实习期间完成该研究，其履历逐篇将此成果列为腾讯实习产出。中大博士导师陈亮和当时的腾讯 AI Lab 研究员卞亚涛共同通讯。"
      },
      {
        "title": "A Graph Is Worth 1-Bit Spikes: When Graph Contrastive Learning Meets Spiking Neural Networks",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2024/file/abb4847bbd60f38b1b7649d26c7a0067-Paper-Conference.pdf",
        "year": 2024,
        "outcome": "confirmed",
        "note": "ICLR 正式论文首页明确标明李金膛在蚂蚁集团实习时完成该研究，与中大博士导师陈亮及蚂蚁高级工程师 Baokun Wang 共同署名。李金膛本人列出其研究时的中大博士学籍、校内指导者及蚂蚁实习时段。"
      },
      {
        "title": "One Fits All: Learning Fair Graph Neural Networks for Various Sensitive Attributes",
        "url": "https://arxiv.org/html/2406.13544v1",
        "year": 2024,
        "outcome": "lead",
        "note": "在读博士和企业作者均可核实，原文未说明这篇论文在实习期间完成；学生履历只把后续 ICML 论文明确列为腾讯实习成果。"
      },
      {
        "title": "LoopGR: Parameter-Efficient Scaling for Generative Recommendation via Recurrent Depth",
        "url": "https://arxiv.org/html/2610.34157v1",
        "year": 2026,
        "outcome": "lead",
        "note": "原文明确列 Huizhe Zhang 在腾讯 PCG 实习时完成该研究，陈亮为校方通讯；仍查具名导师或贡献声明。"
      },
      {
        "title": "GT-SNT: A Linear-Time Transformer for Large-Scale Graphs via Spiking Node Tokenization",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38667",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "正式出版页的署名机构包括中山大学和厦门大学，未发现范围内企业作者。"
      },
      {
        "title": "SGHormer: An Energy-Saving Graph Transformer Driven by Spikes",
        "url": "https://arxiv.org/abs/2403.17656",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "查作者与机构，未见企业署名或本篇学生参与企业研究的公开记录。"
      },
      {
        "title": "Scalable and Efficient Joint Spiking Embedding Predictive Architecture for Large-Scale Dynamic Graphs",
        "url": "https://arxiv.org/abs/2607.18412",
        "year": 2026,
        "outcome": "no-evidence",
        "note": "预印本作者为已知校内研究组成员，未发现同篇企业署名或具名项目材料。"
      },
      {
        "title": "What's Behind the Mask: Understanding Masked Graph Modeling for Graph Autoencoders",
        "url": "https://doi.org/10.1145/3580305.3599546",
        "year": 2023,
        "outcome": "confirmed",
        "note": "2022 年 5 月首版 PDF 将博士生李金膛同时署于中大和蚂蚁；学生公开履历确认同期为蚂蚁研究实习。2023 年 KDD 正式版仍列中大导师陈亮、郑子彬和同一蚂蚁作者王维强；本人项目仓库把预印本和正式版列为同一成果。"
      },
      {
        "title": "GUARD: Graph Universal Adversarial Defense",
        "url": "https://doi.org/10.1145/3583780.3614903",
        "year": 2023,
        "outcome": "confirmed",
        "note": "2022 年 4 月首版将李金膛同时署于中大和蚂蚁，时间落在其公开披露的蚂蚁科研实习内。中大两位学位导师陈亮、郑子彬和蚂蚁员工王维强同篇署名；正式出版于 CIKM 2023。"
      },
      {
        "title": "Revisiting Modularity Maximization for Graph Clustering: A Contrastive Learning Perspective",
        "url": "https://doi.org/10.1145/3637528.3671967",
        "year": 2024,
        "outcome": "confirmed",
        "note": "KDD 论文把在读博士李金膛列为蚂蚁署名的共同第一作者；官方全文截稿日落在其第二段蚂蚁科研实习内。陈亮本人书目和获录用公告明确称同一篇为与蚂蚁集团合作，学生也具名列陈亮为博士导师。陈亮在论文署名处未列机构，中大身份由本人团队、导师事实和前后持续的高校材料独立确认。王维强同篇蚂蚁署名。"
      },
      {
        "title": "Decomposition for Enhancing Attention: Improving LLM-based Text-to-SQL through Workflow Paradigm",
        "url": "https://aclanthology.org/2024.findings-acl.641/",
        "year": 2024,
        "outcome": "lead",
        "note": "陈亮称该篇为与腾讯合作；硕士生金信洲的腾讯数据挖掘实习与论文首发重合，论文仅列他为中大作者，未指明其在腾讯参与本篇。继续核实相应项目经历。"
      },
      {
        "title": "Enhancing Graph Collaborative Filtering via Neighborhood Structure Embedding",
        "url": "https://doi.org/10.1109/ICDM58522.2023.00028",
        "year": 2023,
        "outcome": "lead",
        "note": "金信洲及导师和腾讯研究人员同篇；发表日期在腾讯实习中，但现有来源未指明在腾讯参与本篇。"
      },
      {
        "title": "L2CL: Embarrassingly Simple Layer-to-Layer Contrastive Learning for Graph Collaborative Filtering",
        "url": "https://arxiv.org/abs/2407.14266",
        "year": 2024,
        "outcome": "lead",
        "note": "论文机构是中大和腾讯 PCG；金信洲当时的名单列腾讯音乐实习，缺在腾讯 PCG 的同篇工作说明。"
      },
      {
        "title": "Scaling Up Dynamic Graph Representation Learning via Spiking Neural Networks",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/26034",
        "year": 2023,
        "outcome": "lead",
        "note": "正式版仅列李金膛在中大，首发晚于第一段蚂蚁实习；尚无同篇实习参与证据。"
      },
      {
        "title": "SAD: Semi-Supervised Anomaly Detection on Dynamic Graphs",
        "url": "https://www.ijcai.org/proceedings/2023/0256.pdf",
        "year": 2023,
        "outcome": "lead",
        "note": "最早公开稿日期在李金膛两段蚂蚁实习之间。正式版具名列其为中大作者；待查是否作为前段实习成果。"
      },
      {
        "title": "Parameter-Efficient Fine-Tuning with Discrete Fourier Transform",
        "url": "https://proceedings.mlr.press/v235/gao24o.html",
        "year": 2024,
        "outcome": "lead",
        "note": "论文的企业作者来自腾讯 AI Lab；高子奇、王启超等学生的本篇企业工作证据待核。"
      }
    ]
  },
  "j-HxRy0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://marswhu.github.io/index.html"
    ],
    "papers": [
      {
        "title": "FedPissa: Towards Federated Personalized Adaptation of Foundation Models via LoRA Subspace Mapping",
        "url": "https://proceedings.mlr.press/v306/he26p.html",
        "year": 2026,
        "outcome": "lead",
        "note": "ICML 论文具名黄文柯在腾讯实习，实习者在本篇只署南洋理工；武汉大学公开资料已证实曾就读，尚需确认他参与该研究时是否仍在武大攻读博士。"
      }
    ]
  },
  "8e7H3PcAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://mypage.zju.edu.cn/siliang",
      "https://zhuyun97.github.io/"
    ],
    "papers": [
      {
        "title": "Graph Retrieval-Augmented Generation: A Survey",
        "url": "https://arxiv.org/html/2408.08921",
        "outcome": "confirmed",
        "note": "朱赟为浙江大学在读博士，原文致谢明确论文由蚂蚁研究实习项目支持；本人履历和实习导师公开名录均确认其 2024–2025 年蚂蚁研究实习，方向覆盖 GraphRAG 与基础模型，初版处于同一实习期。"
      },
      {
        "title": "GraphCLIP: Enhancing Transferability in Graph Foundation Models for Text-Attributed Graphs",
        "url": "https://arxiv.org/html/2410.10329",
        "outcome": "confirmed",
        "note": "朱赟为浙江大学在读博士，原文致谢明确论文由蚂蚁研究实习项目支持；本人履历和实习导师公开名录均确认其 2024–2025 年蚂蚁研究实习，方向覆盖 GraphRAG 与基础模型，初版处于同一实习期。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "OUXS8doAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://ai.ruc.edu.cn/szdw/zrjs/lzw/index.htm",
      "https://cxxgtxy.github.io/cv/",
      "https://yanqidai.github.io/",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/1cac8326ce3fbe79171db9754211530c-Paper-Conference.pdf",
      "https://dl.acm.org/doi/pdf/10.1145/3774904.3792371"
    ],
    "papers": [
      {
        "title": "Harder Is Better: Boosting Mathematical Reasoning via Difficulty-Aware GRPO and Multi-Aspect Question Reformulation",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/1cac8326ce3fbe79171db9754211530c-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "ICLR 正式版明确将该论文对应代彦琪在阿里高德的实习。 人大校内导师卢志武和高德负责人初祥祥也在同一篇署名。"
      },
      {
        "title": "Adaptive Task Balancing for Visual Instruction Tuning via Inter-Task Contribution and Intra-Task Difficulty",
        "url": "https://dl.acm.org/doi/pdf/10.1145/3774904.3792371",
        "outcome": "confirmed",
        "note": "ACM 正式版首页明确注明部分工作在代彦琪的阿里高德实习期间完成。 人大校内导师卢志武和高德负责人初祥祥也在同一篇署名。"
      }
    ],
    "note": "已经逐篇核对该合作簇及部分论文来源，未覆盖该教师全部公开书目。"
  },
  "5hti_r0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~gfmeng",
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04016.pdf"
    ],
    "papers": [
      {
        "title": "AddressCLIP: Empowering Vision-Language Models for City-wide Image Address Localization",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/04016.pdf",
        "outcome": "confirmed",
        "note": "ECCV 正式版明确将本作品归入第一作者许世雄的阿里云实习；其校内导师孟高峰及已毕业在阿里云工作的张承灏为同篇作者。"
      }
    ],
    "note": "已经逐篇核对该合作簇及部分论文来源，未覆盖该教师全部公开书目。"
  },
  "n4csXw0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://person.zju.edu.cn/qianhui/0.html",
      "https://zituitui.github.io/"
    ],
    "papers": [
      {
        "title": "BELM: Bidirectional Explicit Linear Multi-step Sampler for Exact Inversion in Diffusion Models",
        "url": "https://openreview.net/pdf/7f3c70feb6ff46ecefa67a1d30b459467fd6fdd3.pdf",
        "outcome": "confirmed",
        "note": "第一作者 Fangyikang Wang 本人履历列 2023.09–2026.03 浙江大学硕士及 2024.03–2025.08 腾讯微信视觉实习，原文首页脚注明确本项工作在微信实习期间完成。"
      },
      {
        "title": "Efficiently Access Diffusion Fisher: Within the Outer Product Span Space",
        "url": "https://openreview.net/pdf/16507a473ad0b5e0a4f2b28c9fbcbcc6e4be0c72.pdf",
        "outcome": "confirmed",
        "note": "第一作者 Fangyikang Wang 本人履历列 2023.09–2026.03 浙江大学硕士及 2024.03–2025.08 腾讯微信视觉实习，原文首页脚注明确本项工作在微信实习期间完成。"
      },
      {
        "title": "Unleashing High-Quality Image Generation in Diffusion Sampling Using Second-Order Levenberg-Marquardt-Langevin",
        "url": "https://www.openaccess.thecvf.com/content/ICCV2025/papers/Wang_Unleashing_High-Quality_Image_Generation_in_Diffusion_Sampling_Using_Second-Order_Levenberg-Marquardt-Langevin_ICCV_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "第一作者 Fangyikang Wang 本人履历列 2023.09–2026.03 浙江大学硕士及 2024.03–2025.08 腾讯微信视觉实习，原文首页脚注明确本项工作在微信实习期间完成。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "l4Dyt7EAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://person.zju.edu.cn/shengyuzhang",
      "https://jiajianxie.github.io/"
    ],
    "papers": [
      {
        "title": "ETC: training-free diffusion models acceleration with Error-aware Trend Consistency",
        "url": "https://arxiv.org/html/2510.24129",
        "outcome": "confirmed",
        "note": "原文首页脚注直接具名该研究在谢嘉健于腾讯微信实习期间完成；谢嘉健本人履历列 2024 年起在浙江大学读硕士，2025 年 6–12 月在腾讯微信视觉任研究实习生。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "IFX5C-cAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1084/1717.htm",
      "https://soar.group/chenren/team/",
      "https://cs.pku.edu.cn/info/1263/3003.htm"
    ],
    "papers": [
      {
        "title": "Reasoning about Network Traffic Load Property at Production Scale",
        "url": "https://www.usenix.org/system/files/nsdi24-li-ruihan.pdf",
        "outcome": "confirmed",
        "note": "第一作者李睿涵在北大就读博士期间也以阿里云署名；该篇正式论文致谢明示阿里云研究实习项目支持。"
      },
      {
        "title": "A General and Efficient Approach to Verifying Traffic Load Properties under Arbitrary k Failures",
        "url": "https://ennanzhai.github.io/pub/sigcomm24-yu.pdf",
        "outcome": "confirmed",
        "note": "第一作者李睿涵在北大就读博士期间也以阿里云署名；该篇正式论文致谢明示阿里云研究实习项目支持。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "bWYvvkUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ef0c0a23a1a8219c4fc381614664df3e-Abstract-Conference.html",
      "https://andrewluo.net/",
      "https://dblp.org/pid/234/8054.html",
      "https://hub.hku.hk/cris/rp/rp03416",
      "https://www.hendersonneurolab.com/publications/",
      "https://doi.org/10.1101/2023.03.17.533179",
      "https://arxiv.org/abs/2310.04420",
      "https://arxiv.org/html/2407.11333v1",
      "https://arxiv.org/abs/2406.05191",
      "https://arxiv.org/abs/2406.13735",
      "https://arxiv.org/abs/2410.05266",
      "https://openaccess.thecvf.com/content/CVPR2025/html/Yeung_Reanimating_Images_using_Neural_Representations_of_Dynamic_Stimuli_CVPR_2025_paper.html",
      "https://papers.nips.cc/paper_files/paper/2025/hash/f0990f6e98785d38035a607e7c2de2ae-Abstract-Conference.html",
      "https://arxiv.org/abs/2505.21501",
      "https://arxiv.org/abs/2505.15813",
      "https://proceedings.neurips.cc/paper_files/paper/2025/hash/2a095b46705d7e6f81fc50270fe770c2-Abstract-Conference.html",
      "https://openreview.net/pdf/e3359bd3f47d742acf429bf1b35cfb26386fe6f6.pdf",
      "https://ojs.aaai.org/index.php/AAAI/article/view/42413",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/f7fc38fdd95fd146a471791b93ff9f12-Paper-Conference.pdf",
      "https://arxiv.org/html/2602.12633v1",
      "https://arxiv.org/html/2603.13994v1",
      "https://arxiv.org/abs/2604.08537",
      "https://arxiv.org/html/2604.09817v1",
      "https://arxiv.org/html/2605.12491v1",
      "https://arxiv.org/html/2605.13548v1",
      "https://doi.org/10.64898/2026.05.12.724119",
      "https://arxiv.org/pdf/2606.12995",
      "https://arxiv.org/pdf/2609.18293",
      "https://arxiv.org/html/2609.36391v1",
      "https://connect.biorxiv.org/group/content/19?page=3",
      "https://gradsch.hku.hk/news_and_events/newsletter/awards-and-achievements-12"
    ],
    "papers": [
      {
        "title": "Brain Diffusion for Visual Exploration: Cortical Discovery using Large Scale Generative Models",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ef0c0a23a1a8219c4fc381614664df3e-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "CMU 时期论文，同篇仅校方作者，教师当时为 CMU 在读；无符合范围企业的研究身份。"
      },
      {
        "title": "Neural Selectivity for Real-World Object Size In Natural Images",
        "url": "https://doi.org/10.1101/2023.03.17.533179",
        "outcome": "no-evidence",
        "note": "核对同一 DOI 2023 初版与 2026-10-21 更名再版，计为同一公开论文。新版追加第一作者 Hlayhel；合著为 CMU / 港大等学界，无 14 家企业参与的具名证据。"
      },
      {
        "title": "BrainSCUBA: Fine-Grained Natural Language Captions of Visual Cortex Selectivity",
        "url": "https://arxiv.org/abs/2310.04420",
        "outcome": "no-evidence",
        "note": "核对论文及 ICLR 2024 版，CMU 研究团队学界作者；使用预训练视觉语言模型不代表企业人员参与。"
      },
      {
        "title": "Disentangled Acoustic Fields for Multimodal Physical Scene Understanding",
        "url": "https://arxiv.org/html/2407.11333v1",
        "outcome": "no-evidence",
        "note": "第一作者上海交大；Luo 在论文署 CMU。真正具名工业作者为三菱电机 MERL，另有 MIT–IBM，均不在 14 家企业调查范围。"
      },
      {
        "title": "DiffusionPID: Interpreting Diffusion via Partial Information Decomposition",
        "url": "https://arxiv.org/abs/2406.05191",
        "outcome": "no-evidence",
        "note": "核对 NeurIPS 2024 与 arXiv，同一论文计一次；作者学籍及作者表不支持港大学生的范围内企业研究。"
      },
      {
        "title": "StableSemantics: A Synthetic Language-Vision Dataset of Semantic Representations in Naturalistic Images",
        "url": "https://arxiv.org/abs/2406.13735",
        "outcome": "no-evidence",
        "note": "共同作者来自 CMU 学术团队，Luo 此时以 CMU 为机构，生成工具采用无同篇企业身份的外部产品。"
      },
      {
        "title": "Brain Mapping with Dense Features: Grounding Cortical Semantic Selectivity in Natural Images with Vision Transformers",
        "url": "https://arxiv.org/abs/2410.05266",
        "outcome": "no-evidence",
        "note": "ICLR 2025 同源预印本，作者研究为 CMU 等校内，未见范围内企业员工或项目。"
      },
      {
        "title": "Reanimating Images using Neural Representations of Dynamic Stimuli",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Yeung_Reanimating_Images_using_Neural_Representations_of_Dynamic_Stimuli_CVPR_2025_paper.html",
        "outcome": "no-evidence",
        "note": "与 arXiv 2406.02659 同作者的 Neural Representations 初稿去重为一篇；同篇团队未见具名范围内企业或研究实习。"
      },
      {
        "title": "In Silico Mapping of Visual Categorical Selectivity Across the Whole Brain",
        "url": "https://papers.nips.cc/paper_files/paper/2025/hash/f0990f6e98785d38035a607e7c2de2ae-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "原始稿署 Columbia 与香港大学，企业模型作为工具；没有企业职员及学生参与该企研究的公开信息。"
      },
      {
        "title": "Vision Transformers with Self-Distilled Registers",
        "url": "https://arxiv.org/abs/2505.21501",
        "outcome": "no-evidence",
        "note": "NeurIPS 2025 原作品与 arXiv 共一篇。原稿作者单位为港大、浙大、新加坡南洋理工，实验室名册中一名后来去业界的合作者没有同期企业署名及企业参与说明。"
      },
      {
        "title": "Meta-Learning an In-Context Transformer Model of Human Higher Visual Cortex",
        "url": "https://arxiv.org/abs/2505.15813",
        "outcome": "no-evidence",
        "note": "学生个人 CV 列清楚这是港大校内指导项目。同行作者公开资料与正式稿未显示范围内企业研究。"
      },
      {
        "title": "SynBrain: Enhancing Visual-to-fMRI Synthesis via Probabilistic Representation Learning",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/2a095b46705d7e6f81fc50270fe770c2-Abstract-Conference.html",
        "outcome": "no-evidence",
        "note": "第一作者是 Luo 指导的香港大学博士，也明确实习于上海人工智能实验室，该机构不在 14 家企业范围。"
      },
      {
        "title": "CONFORM: A Project to Create Crowd-Sourced Open Neuroscience fMRI Foundation Models",
        "url": "https://openreview.net/pdf/e3359bd3f47d742acf429bf1b35cfb26386fe6f6.pdf",
        "outcome": "no-evidence",
        "note": "NeurIPS 工作坊公开论文；机构名单含 MIT–IBM Watson AI Lab，IBM 不在范围，未见受 Luo 指导的范围内企业参与身份。"
      },
      {
        "title": "BrainLMM: A Label-Free Framework for Mapping Multi-Semantic Representation in the Human Visual Cortex",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/42413",
        "outcome": "no-evidence",
        "note": "AAAI 正式论文名列北京理工大学与香港大学学术研究员，未见范围内企业角色。"
      },
      {
        "title": "Compose Your Policies! Improving Diffusion-based or Flow-based Robot Policies via Test-time Distribution-level Composition",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/f7fc38fdd95fd146a471791b93ff9f12-Paper-Conference.pdf",
        "outcome": "no-evidence",
        "note": "具名港大博士 Jiahang Cao 亦署北京人形机器人创新中心和上海 AI 实验室，这两个机构不在范围。同期获腾讯奖学金，不能据此把本篇归给腾讯。"
      },
      {
        "title": "Real-to-Sim for Highly Cluttered Environments via Physics-Consistent Inter-Object Reasoning",
        "url": "https://arxiv.org/html/2602.12633v1",
        "outcome": "no-evidence",
        "note": "与 IEEE RA-L 版同一篇。原文各作者署港大或港科大（广州），其中指导关系清楚但无企业参与。"
      },
      {
        "title": "Human-like Object Grouping in Self-supervised Vision Transformers",
        "url": "https://arxiv.org/html/2603.13994v1",
        "outcome": "no-evidence",
        "note": "独立预印本由香港大学与美国、韩国和新加坡大学参与；无范围内企业员工。"
      },
      {
        "title": "Meta-Learning In-Context Enables Training-Free Cross Subject Brain Decoding",
        "url": "https://arxiv.org/abs/2604.08537",
        "outcome": "no-evidence",
        "note": "CVPR 2026 与公开预印本同一篇。学生在读及师生同篇明确；外部研究方上海人工智能实验室、河套学院及其他学校，无范围内企业。"
      },
      {
        "title": "NeuroFlow: Toward Unified Visual Encoding and Decoding from Neural Activity",
        "url": "https://arxiv.org/html/2604.09817v1",
        "outcome": "no-evidence",
        "note": "CVPR 与预印本合并。作者稿致谢精确指出在读学生本篇实习发生于上海人工智能实验室，不在企业范围。"
      },
      {
        "title": "Elastic Attention Cores for Scalable Vision Transformers",
        "url": "https://arxiv.org/html/2605.12491v1",
        "outcome": "no-evidence",
        "note": "研究单位为香港大学、CMU、Columbia；有具名学生，但未查见范围内企业署名或参与。"
      },
      {
        "title": "AttenA+: Rectifying Action Inequality in Robotic Foundation Models",
        "url": "https://arxiv.org/html/2605.13548v1",
        "outcome": "no-evidence",
        "note": "并列一作 Jiahang Cao 和 Luo 同篇，工业或研究机构署 IDEA、X-Humanoid，不在范围。无腾讯在该论文中角色的原始材料。"
      },
      {
        "title": "Diffusion-based stimulus optimization reveals functional organization across higher visual cortex",
        "url": "https://doi.org/10.64898/2026.05.12.724119",
        "outcome": "no-evidence",
        "note": "共同作者实验室正式报告及 VSS 名册列 CMU 和 HKU 学术合作，无范围内企业作者。"
      },
      {
        "title": "GenHOI: Contact-Aware Humanoid-Object Interaction by Imitating Generated Videos without Task-Specific Training",
        "url": "https://arxiv.org/pdf/2606.12995",
        "outcome": "no-evidence",
        "note": "原文署港大、港科大（广州）、中科大及新加坡国立；使用 Seedance 等模型不构成产品公司的具名论文关系。"
      },
      {
        "title": "Function-Preserving Data Generation for Zero-Shot Real-to-Sim-to-Real Manipulation",
        "url": "https://arxiv.org/pdf/2609.18293",
        "outcome": "no-evidence",
        "note": "原始论文将全部作者绑定港大或港科大（广州）；无可核的范围内企业研究。"
      },
      {
        "title": "Receptive-field-constrained stimulus optimization for human early and intermediate visual cortex",
        "url": "https://arxiv.org/html/2609.36391v1",
        "outcome": "no-evidence",
        "note": "用原文和共同作者实验室书目复核，该公开稿仅 CMU 和 HKU 学术单位，导师与范围内企业学生链条不成立。"
      }
    ]
  },
  "qH0rU44AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/ZhangQing",
      "https://www.zhangqing-home.net/students.html",
      "https://yandanyang.github.io/",
      "https://amap-cvlab.github.io/index.zh.html"
    ],
    "papers": [
      {
        "title": "World-Env: Leveraging World Model as a Virtual Environment for VLA Post-Training",
        "url": "https://arxiv.org/html/2509.24948v1",
        "year": 2025,
        "outcome": "confirmed",
        "note": "论文首页把第一作者肖俊锦同时列在中山大学和阿里巴巴高德，并说明研究在高德实习期间完成；高德项目目录收录同一研究。同篇合作者 Yandan Yang 公布其高德正式岗位。中大共同作者张青的学生名录列肖俊锦自 2023 年开始攻读硕士。"
      },
      {
        "title": "Learning Action Manifold with Multi-view Latent Priors for Robotic Manipulation",
        "url": "https://junjxiao.github.io/Multi-view-VLA.github.io/",
        "year": 2026,
        "outcome": "lead",
        "note": "项目页双列中大与阿里高德；没有明确两名学生参与企业研究的贡献或实习声明，需补证。"
      }
    ]
  },
  "r0FIQBAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/liugongshen.html",
      "https://jometeorie.github.io/"
    ],
    "papers": [
      {
        "title": "MineExplorer: Evaluating Open-World Exploration of MLLM Agents in Minecraft",
        "url": "https://arxiv.org/html/2605.30931",
        "outcome": "confirmed",
        "note": "原文脚注直接具名该研究在鞠天杰与吴铮于美团实习期间完成；鞠天杰于 2026 年 6 月获得上海交通大学博士学位，初版 2026 年 5 月时仍在读。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "NhsdGBUAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cs.pku.edu.cn/info/1069/1635.htm",
      "https://bingyangwu.github.io/"
    ],
    "papers": [
      {
        "title": "XRON: A Hybrid Elastic Cloud Overlay Network for Video Conferencing at Planetary Scale",
        "url": "https://xinjin.github.io/files/SIGCOMM23_XRON.pdf",
        "outcome": "confirmed",
        "note": "第一作者在北大攻读博士且自述于 2021 年 11 月至 2023 年 9 月在阿里达摩院任研究实习生；本研究直接服务阿里云视频会议，原文双署北大和阿里云并明确致谢阿里研究实习项目。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "JqOOSuIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~0022723",
      "https://people.ucas.ac.cn/~liutingwen?language=en",
      "https://jiaweisheng.github.io/",
      "https://liutingwen.ac.cn/",
      "https://arxiv.org/pdf/2607.25344v1",
      "https://arxiv.org/pdf/2602.09401v1",
      "https://arxiv.org/abs/2607.24439",
      "https://arxiv.org/abs/2602.23132",
      "https://arxiv.org/abs/2602.08612",
      "https://arxiv.org/abs/2502.09375"
    ],
    "papers": [
      {
        "title": "Reward Guided Decoding for Generative Recommendation",
        "url": "https://arxiv.org/pdf/2607.25344v1",
        "outcome": "confirmed",
        "note": "论文首页在杨若琛姓名后标星，说明本研究在快手实习期间完成；国科大导师柳厅文与快手在职研究人员同篇署名。"
      },
      {
        "title": "SARM: LLM-Augmented Semantic Anchor for End-to-End Live-Streaming Ranking",
        "url": "https://arxiv.org/pdf/2602.09401v1",
        "outcome": "confirmed",
        "note": "论文首页在杨若琛姓名后标星，说明本研究在快手实习期间完成；国科大导师柳厅文与快手在职研究人员同篇署名。"
      },
      {
        "title": "Unifying Generative Recall and Multi-Objective Ranking in a Single Decoder-Only Sequence",
        "url": "https://arxiv.org/abs/2607.24439",
        "outcome": "lead",
        "note": "有柳厅文、杨若琛和快手在职员工同篇；原文未找到将杨若琛与快手此项目对应的声明。"
      },
      {
        "title": "From Agnostic to Specific: Latent Preference Diffusion for Multi-Behavior Sequential Recommendation",
        "url": "https://arxiv.org/abs/2602.23132",
        "outcome": "lead",
        "note": "快手与国科大人员同篇，未找到杨若琛的该项目企业研究依据。"
      },
      {
        "title": "OneLive: Dynamically Unified Generative Framework for Live-Streaming Recommendation",
        "url": "https://arxiv.org/abs/2602.08612",
        "outcome": "lead",
        "note": "论文具名杨若琛实习，但导师柳厅文并非作者。"
      },
      {
        "title": "FARM: Frequency-Aware Model for Cross-Domain Live-Streaming Recommendation",
        "url": "https://arxiv.org/abs/2502.09375",
        "outcome": "lead",
        "note": "脚注说明快手资助和江霞曹领导；没有注明国科大学生在快手参与本项目的分工。"
      }
    ],
    "note": "已按作者官方指导名单、公开书目及部分论文原文核查，尚未覆盖全部书目。"
  },
  "MdQZ-q8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openreview.net/forum?id=sfrVLzsmlf",
      "https://jiayangcheng.com/",
      "https://home.cse.ust.hk/~yqsong/",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/yqsong",
      "https://arxiv.org/abs/2601.16725",
      "https://openreview.net/pdf?id=sfrVLzsmlf",
      "https://agi-eval-official.github.io/amemgym/",
      "https://arxiv.org/abs/2603.01966",
      "https://arxiv.org/abs/2605.01489",
      "https://stonetzheng.github.io/",
      "https://cse.hkust.edu.hk/pg/ourgraduates/",
      "https://arxiv.org/html/2605.01489v1",
      "https://tqfang.github.io/",
      "https://arxiv.org/abs/2510.18560",
      "https://lcy2723.github.io/assets/CV.pdf",
      "https://lcy2723.github.io/",
      "https://openreview.net/pdf/6616ae1e45e2386e9704232fec117db7edafda8f.pdf",
      "https://cse.hkust.edu.hk/pg/defenses/Summer26/cliei-07-08-2026.html",
      "https://aclanthology.org/2025.findings-emnlp.513/",
      "https://zhaowei-wang-nlp.github.io/assets/pdf/CV-Homepage.pdf",
      "https://cse.hkust.edu.hk/pg/defenses/F26/zwanggy-02-11-2026.html",
      "https://xplorestaging.ieee.org/author/37419739100",
      "https://aclanthology.org/2025.findings-emnlp.513.pdf",
      "https://arxiv.org/abs/2410.02730",
      "https://aclanthology.org/2026.findings-emnlp.1366/",
      "https://zongqing0068.github.io/",
      "https://aclanthology.org/2026.findings-emnlp.1366.pdf",
      "https://arxiv.org/pdf/2610.11552",
      "https://zongqing0068.github.io/EvolvingWorld_page/"
    ],
    "papers": [
      {
        "title": "AMemGym: Interactive Memory Benchmarking for Assistants in Long-Horizon Conversations",
        "url": "https://openreview.net/forum?id=sfrVLzsmlf",
        "outcome": "confirmed",
        "note": "ICLR 正式论文给共同一作 Cheng Jiayang 标明香港科技大学与美团两项署名；他的主页列明在读期间到 LongCat 研究智能体记忆。导师与学生主页相互印证博士指导关系，宋陽秋同篇署名。美团研究人员 Lin Qiu 在原文和项目主页被标为本项目负责人，并有同期美团 LongCat 技术报告署名。"
      },
      {
        "title": "SciResearcher: Scaling Deep Research Agents for Frontier Scientific Reasoning",
        "url": "https://arxiv.org/abs/2605.01489",
        "outcome": "confirmed",
        "note": "论文作者脚注明确点名第一作者郑天石在腾讯实习期间完成本工作。郑天石与导师课题组的页面相互印证博士培养关系，宋陽秋同篇列名。腾讯 AI Lab 正式研究人员 Tianqing Fang 与 Xiyun Li 同篇署腾讯，港科大官方毕业生名录及 Fang 本人主页证实其任职。"
      },
      {
        "title": "WebDevJudge: Evaluating (M)LLMs as Critiques for Web Development Quality",
        "url": "https://arxiv.org/abs/2510.18560",
        "outcome": "confirmed",
        "note": "ICLR 正式论文将李春阳同时署名港科大和腾讯 AI Lab，首页脚注明确其在腾讯实习期间完成本工作。个人简历与学位答辩资料印证当时学籍及实际课题，宋陽秋同篇署名并为其硕士导师。共同作者 Tianqing Fang 仅署腾讯，由港科大毕业生目录印证其正式任职。"
      },
      {
        "title": "DivScene: Towards Open-Vocabulary Object Navigation with Large Vision Language Models in Diverse Scenes",
        "url": "https://aclanthology.org/2025.findings-emnlp.513/",
        "outcome": "confirmed",
        "note": "第一作者 Zhaowei Wang 的简历明确记录他于港科大博士在读时到腾讯 AI Lab 做具身智能研究，并点名他在当地完成 DivScene 场景建设和导航模型。港科大答辩公告列宋陽秋为导师并列出本研究，宋陽秋和同期腾讯 AI Lab 研究负责人俞栋同篇署名。"
      },
      {
        "title": "EvolvingWorld: An Open-Schema Framework for Co-Evolving Role-Play Agents and World Model in Interactive Literary World",
        "url": "https://aclanthology.org/2026.findings-emnlp.1366/",
        "outcome": "confirmed",
        "note": "港科大博士生宗晴在个人履历逐项写明，她在腾讯光子技术开发部实习时负责 EvolvingWorld；导师与学生主页均确认宋陽秋的博士指导，宋陽秋在正式论文署共同通讯。同行评审出版原文首页明确将 Yue Guo 标为唯一企业单位作者，并列腾讯邮箱；同一企业身份另有同期论文验证。"
      }
    ]
  },
  "fSBdNg0AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~caojuan",
      "https://imxuyu.github.io/",
      "https://tiankaihang.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_TAG-MoE_Task-Aware_Gating_for_Unified_Generative_Mixture-of-Experts_CVPR_2026_paper.pdf"
    ],
    "papers": [
      {
        "title": "TAG-MoE: Task-Aware Gating for Unified Generative Mixture-of-Experts",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_TAG-MoE_Task-Aware_Gating_for_Unified_Generative_Mixture-of-Experts_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式版明确标注徐榆在腾讯混元实习时完成此项研究；徐榆公开履历也列为该实习主要成果。校内导师曹娟和腾讯混元研究员 Tiankai Hang 同篇署名。"
      }
    ],
    "note": "已逐篇检查部分书目和学生科研实习，不是全部论文。"
  },
  "-QtVtNEAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.neurips.cc/paper_files/paper/2024/hash/37611b0fc2b65cdbb60865af5f6cf453-Abstract-Conference.html",
      "https://proceedings.neurips.cc/paper_files/paper/2024/file/37611b0fc2b65cdbb60865af5f6cf453-Paper-Conference.pdf",
      "https://colalab.net/team/",
      "https://iai.buaa.edu.cn/info/1131/1745.htm",
      "https://developer.volcengine.com/articles/7389112553802039315",
      "https://colalab.net/media/paper/Room-Object_Entity_Prompting_and_Reasoning_for_Embodied_Referring_Expression.pdf",
      "https://arxiv.org/abs/2411.04406"
    ],
    "papers": [
      {
        "title": "Image Understanding Makes for A Good Tokenizer for Image Generation",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/37611b0fc2b65cdbb60865af5f6cf453-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "NeurIPS 正式论文在共同一作 Luting Wang 的北航署名处附字节跳动实习脚注。北航刘偲课题组确认为同一邮箱的博士生，论文中刘偲为学术通讯作者。字节跳动研究人员 Bingyi Kang 署企业邮箱并被该论文指定为项目负责人。"
      }
    ]
  },
  "b2gLqsgAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/061238f13b8e65ce435c4a691ff5d7f1-Abstract-Conference.html",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/061238f13b8e65ce435c4a691ff5d7f1-Paper-Conference.pdf",
      "https://www1.se.cuhk.edu.hk/~swang/group.html",
      "https://www.se.cuhk.edu.hk/people/academic-staff/prof-wang-sibo/",
      "https://cn.linkedin.com/in/biaobin-jiang-46682b26",
      "https://openreview.net/pdf?id=dGxAYNK6JU",
      "https://ouyang-song.com/cv/"
    ],
    "papers": [
      {
        "title": "PoinnCARE: Hyperbolic Multi-Modal Learning for Enzyme Classification",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/061238f13b8e65ce435c4a691ff5d7f1-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "原文首页具名指出第一作者 Kun Xie 是在香港中文大学博士在读、同时在腾讯实习时完成研究。王思博的官方课题组名单印证学籍及实际指导，王思博同篇通讯。腾讯 AI for Life Sciences Lab 的 Biaobin Jiang 同篇通讯，腾讯任职和企业研究角色有独立证据。"
      }
    ]
  },
  "MTHO7DsAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://arxiv.org/abs/2602.07106",
      "https://haoyu-ha.github.io/",
      "https://mypage.cuhk.edu.cn/yutianshu/lab.html",
      "https://sds.cuhk.edu.cn/en/teacher/448",
      "https://arxiv.org/html/2508.04141v1",
      "https://arxiv.org/html/2602.07106v1",
      "https://github.com/Tencent/Ex-Omni",
      "https://arxiv.org/abs/2608.10720",
      "https://arxiv.org/html/2608.10720v1",
      "https://github.com/LOGO-CUHKSZ/Ex-Omni-2D-Code"
    ],
    "papers": [
      {
        "title": "Ex-Omni: Enabling 3D Facial Animation Generation for Omni-modal Large Language Models",
        "url": "https://arxiv.org/abs/2602.07106",
        "outcome": "confirmed",
        "note": "原文首页在第一作者 Haoyu Zhang 处用星号标注本研究在腾讯光子实习期间完成；在读、实习时间与学生和校方页面吻合。于天舒的大学站博士生名录确认实际课题组指导，他同篇任通讯。论文列 Zhipeng Li 为腾讯光子单位作者，同一企业邮箱在 2025 年另篇论文可交叉验证。"
      },
      {
        "title": "Ex-Omni-2D: Expressive Omni-Modal Dialogue Models with Native Visual Presence",
        "url": "https://arxiv.org/abs/2608.10720",
        "outcome": "confirmed",
        "note": "原文首页在第一作者 Haoyu Zhang 处用星号标注本研究在腾讯光子实习期间完成；在读、实习时间与学生和校方页面吻合。于天舒的大学站博士生名录确认实际课题组指导，他同篇任通讯。论文列 Zhipeng Li 为腾讯光子单位作者，同一企业邮箱在 2025 年另篇论文可交叉验证。"
      }
    ]
  },
  "FjoRmF4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://gpcv.whu.edu.cn/index.html",
      "https://zhang-tao-whu.github.io/",
      "https://openreview.net/pdf?id=jjvUeB2XlM",
      "https://lxtgh.github.io/",
      "https://zhouyiks.github.io/"
    ],
    "papers": [
      {
        "title": "DVIS: Decoupled Video Instance Segmentation Framework",
        "url": "https://openaccess.thecvf.com/content/ICCV2023/html/Zhang_DVIS_Decoupled_Video_Instance_Segmentation_Framework_ICCV_2023_paper.html",
        "year": 2023,
        "outcome": "confirmed",
        "note": "ICCV 首页列张韬及通讯作者季顺平属武大，实习导师 Xingye Tian 和万鹏飞属快手 Y-Tech。张韬履历具名列两方导师与实习日期，并列这一课题。TPAMI 扩展和两次竞赛报告随主成果追溯。"
      },
      {
        "title": "Sa2VA: Marrying SAM2 with MLLM for Dense Grounded Understanding of Images and Videos",
        "url": "https://doi.org/10.1109/TPAMI.2026.3720379",
        "year": 2026,
        "outcome": "confirmed",
        "note": "作者组将并列第一作者张韬同时署于武汉大学与字节 Seed，列李响泰为项目负责人；季顺平为同篇武大教师。张韬主页具名列学位导师和字节实习导师，字节代码组织发布了同一项目。"
      },
      {
        "title": "Pixel-SAIL: Single Transformer For Pixel-Grounded Understanding",
        "url": "https://arxiv.org/pdf/2504.10465",
        "year": 2025,
        "outcome": "confirmed",
        "note": "预印本首页把第一作者张韬同时署于武大和字节 Seed，季顺平署武大，李响泰和 Jiashi Feng 署字节。学生履历具名说明此时在字节实习和两位企业导师，企业开源项目独立列出 Pixel-SAIL 方法。"
      },
      {
        "title": "SAMTok: Representing Any Mask with Two Words",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_SAMTok_Representing_Any_Mask_with_Two_Words_CVPR_2026_paper.html",
        "year": 2026,
        "outcome": "confirmed",
        "note": "CVPR 正文列周义康为共同第一作者、季顺平为通讯作者及李响泰为字节项目负责人。作者项目页把周义康同时列在武大和字节，企业开源仓库发布 SAMTok 项目。周义康的公开教育经历具名列季顺平为博士导师。"
      },
      {
        "title": "DVIS++: Improved Decoupled Framework for Universal Video Segmentation",
        "url": "https://doi.org/10.1109/TPAMI.2025.3552694",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "沿用同一基础分割项目；与原 ICCV DVIS 合并为一条确认关系，期刊扩展可从原记录查看。"
      },
      {
        "title": "1st Place Solution for the 5th LSVOS Challenge: Video Instance Segmentation",
        "url": "https://arxiv.org/abs/2308.14392",
        "year": 2023,
        "outcome": "no-evidence",
        "note": "快手和武大联合项目的竞赛报告，作者发布在同一个 DVIS 代码库，与主成果合并确认。"
      },
      {
        "title": "1st Place Solution for PVUW Challenge 2023: Video Panoptic Segmentation",
        "url": "https://arxiv.org/abs/2306.04091",
        "year": 2023,
        "outcome": "no-evidence",
        "note": "快手和武大联合项目的竞赛报告，作者发布在同一个 DVIS 代码库，与主成果合并确认。"
      },
      {
        "title": "OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding",
        "url": "https://papers.nips.cc/paper_files/paper/2024/hash/83eb86be3e2f9fd66c44d9073c51ba4d-Abstract-Conference.html",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "正式版具名张韬在 Skywork AI 实习时完成本篇，虽另有字节署名，未见学生参与字节的同篇证据。"
      },
      {
        "title": "Improving Video Segmentation via Dynamic Anchor Queries",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/6733_ECCV_2024_paper.php",
        "year": 2024,
        "outcome": "no-evidence",
        "note": "ECCV 原文列张韬此篇在 Skywork AI 实习时完成，企业超出范围。"
      },
      {
        "title": "Are They the Same? Exploring Visual Correspondence Shortcomings of Multimodal LLMs",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Zhou_Are_They_the_Same_Exploring_Visual_Correspondence_Shortcomings_of_Multimodal_ICCV_2025_paper.html",
        "year": 2025,
        "outcome": "lead",
        "note": "正式版有字节项目负责人及武大学生，学生只署武大。还需确认首版作者机构和逐篇实习归属。"
      },
      {
        "title": "Beyond Appearance: Geometric Cues for Robust Video Instance Segmentation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025W/LSVOS/papers/Niu_Beyond_Appearance_Geometric_Cues_for_Robust_Video_Instance_Segmentation_ICCVW_2025_paper.pdf",
        "year": 2025,
        "outcome": "no-evidence",
        "note": "出版版本各作者同署武汉大学；无范围内企业研究记录。"
      }
    ]
  },
  "klFoxpYAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/4bbeef01d9753fd5a29e9fd02d275698-Abstract-Conference.html",
      "https://haozheh3.github.io/",
      "https://facultyprofiles.hkust.edu.hk/profiles.php?profile=fangzhen-lin-flin",
      "https://cse.hkust.edu.hk/admin/people/faculty/profile/flin",
      "https://seed.bytedance.com/en/blog/call-for-papers-for-iclr-2025-workshop-promoting-open-source-sharing-and-reproducibility-of-foundation-models",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/4bbeef01d9753fd5a29e9fd02d275698-Paper-Conference.pdf",
      "https://m-a-p.ai/REER_DeepWriter/"
    ],
    "papers": [
      {
        "title": "Reverse-Engineered Reasoning for Open-Ended Generation",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/4bbeef01d9753fd5a29e9fd02d275698-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "原文将第一作者 Haozhe Wang 同时署港科大和 Seed，具名脚注明确本研究在 Seed 完成；当事人主页把论文列为自己在 Seed 与 M-A-P 的实习项目。港科大教师官方档案核实林方真的博士指导关系，林方真与字节跳动官网认定的公司研究员 Ge Zhang 同篇通讯。"
      }
    ]
  },
  "RfSQKrIAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/c747d1894b5d0a3a0ee6889cf7bf741d-Abstract-Conference.html",
      "https://lg-li.github.io/",
      "https://tianfan.info/",
      "https://www.ie.cuhk.edu.hk/people/tfxue.shtml",
      "https://wangguangzhi.com/",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/c747d1894b5d0a3a0ee6889cf7bf741d-Paper-Conference.pdf",
      "https://github.com/TencentARC/ToonComposer",
      "https://openaccess.thecvf.com/content/CVPR2025/html/Li_NVComposer_Boosting_Generative_Novel_View_Synthesis_with_Multiple_Sparse_and_CVPR_2025_paper.html",
      "https://zzyfd.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Li_NVComposer_Boosting_Generative_Novel_View_Synthesis_with_Multiple_Sparse_and_CVPR_2025_paper.pdf",
      "https://github.com/TencentARC/NVComposer",
      "https://arxiv.org/abs/2603.04291",
      "https://arxiv.org/html/2603.04291v1",
      "https://lg-li.github.io/project/cubecomposer"
    ],
    "papers": [
      {
        "title": "ToonComposer: Streamlining Cartoon Production with Generative Post-Keyframing",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/c747d1894b5d0a3a0ee6889cf7bf741d-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "正式出版论文在第一作者李林根的港中文署名处有星号脚注，指出工作于腾讯 ARC Lab 实习期间完成。学生主页把薛天帆列为博士导师之一，导师主页列有该生及共同指导人员；薛天帆同篇通讯。在职腾讯 ARC 研究人员同篇具名负责该企业项目。"
      },
      {
        "title": "NVComposer: Boosting Generative Novel View Synthesis with Multiple Sparse and Unposed Images",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Li_NVComposer_Boosting_Generative_Novel_View_Synthesis_with_Multiple_Sparse_and_CVPR_2025_paper.html",
        "outcome": "confirmed",
        "note": "正式出版论文在第一作者李林根的港中文署名处有星号脚注，指出工作于腾讯 ARC Lab 实习期间完成。学生主页把薛天帆列为博士导师之一，导师主页列有该生及共同指导人员；薛天帆同篇通讯。在职腾讯 ARC 研究人员同篇具名负责该企业项目。"
      },
      {
        "title": "CubeComposer: Spatio-Temporal Autoregressive 4K 360° Video Generation from Perspective Video",
        "url": "https://arxiv.org/abs/2603.04291",
        "outcome": "lead",
        "note": "导师、学生和同项目企业负责人具名；预印本首页只有学生学校署名且不含实习字段。已确认的其他 ARC 实习论文不能替代此篇证明。"
      }
    ]
  },
  "z-rqsR4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/05708_ECCV_2024_paper.php",
      "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/05708.pdf",
      "https://mutianxu.github.io/CV.pdf"
    ],
    "papers": [
      {
        "title": "Free-ATM: Harnessing Free Attention Masks for Representation Learning on Diffusion-Generated Images",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/05708_ECCV_2024_paper.php",
        "outcome": "lead",
        "note": "北大博士前经历无关；原文实习脚注实际对应 NUS 学生 David Junhao Zhang。港中深博士许牧天是项目负责人但脚注没有标其为实习者，自己的履历亦未证明该企业实习。"
      }
    ]
  },
  "JNTG1KoAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openaccess.thecvf.com/content/ICCV2025/html/Wang_BadVideo_Stealthy_Backdoor_Attack_against_Text-to-Video_Generation_ICCV_2025_paper.html",
      "https://openaccess.thecvf.com/content/ICCV2025/papers/Wang_BadVideo_Stealthy_Backdoor_Attack_against_Text-to-Video_Generation_ICCV_2025_paper.pdf",
      "https://sds.cuhk.edu.cn/en/student-search?page=8",
      "https://sai.cuhk.edu.cn/zh-hans/teacher/121",
      "https://www.xtao.website/",
      "https://arxiv.org/abs/2609.00206",
      "https://arxiv.org/pdf/2609.00206"
    ],
    "papers": [
      {
        "title": "BadVideo: Stealthy Backdoor Attack against Text-to-Video Generation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Wang_BadVideo_Stealthy_Backdoor_Attack_against_Text-to-Video_Generation_ICCV_2025_paper.html",
        "outcome": "confirmed",
        "note": "原文把实习脚注标在港中大（深圳）第一作者 Ruotong Wang 的姓名上，说明该工作在快手可灵实习期间完成。学校学生名录列吴保元为博士导师，吴保元通讯。快手可灵技术负责人 Xin Tao 同篇署名，时任身份由其职业主页验证。"
      },
      {
        "title": "Distributed Implicit Harm: A Compositional Safety Blind Spot in MLLM-Based Video Moderation",
        "url": "https://arxiv.org/abs/2609.00206",
        "outcome": "confirmed",
        "note": "原文把实习脚注标在港中大（深圳）第一作者 Ruotong Wang 的姓名上，说明该工作在快手可灵实习期间完成。学校学生名录列吴保元为博士导师，吴保元通讯。快手可灵技术负责人 Xin Tao 同篇署名，时任身份由其职业主页验证。"
      }
    ]
  },
  "396o2BAAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://faculty.hust.edu.cn/caozhiguo1/zh_CN/index.htm",
      "https://leoshen917.github.io/",
      "https://wtjiang98.github.io/",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Shen_Identity-Preserving_Image-to-Video_Generation_via_Reward-Guided_Optimization_CVPR_2026_paper.pdf",
      "http://faculty.hust.edu.cn/caozhiguo1/zh_CN/index.htm",
      "https://lijia7.github.io/",
      "https://www.sshao.com/ShuaiShao_CV.pdf",
      "https://arxiv.org/pdf/2506.17201v1",
      "https://junshutang.github.io/",
      "https://en-aia.hust.edu.cn/info/1030/1072.htm",
      "https://pzzz-cv.github.io/",
      "https://orange-3dv-team.github.io/MoVerse/",
      "https://arxiv.org/html/2606.23105v1"
    ],
    "papers": [
      {
        "title": "Identity-Preserving Image-to-Video Generation via Reward-Guided Optimization",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Shen_Identity-Preserving_Image-to-Video_Generation_via_Reward-Guided_Optimization_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "CVPR 正式稿致谢明确说明本项目由阿里巴巴研究实习计划支持；2025 年首版在学生就读期间已公开，申立奥是唯一同时署名华科和阿里的作者，并与在任企业研究员姜文韬并列第一作者。双方个人项目书目均列 IPRO。"
      },
      {
        "title": "Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition",
        "url": "https://arxiv.org/pdf/2506.17201v1",
        "outcome": "confirmed",
        "note": "腾讯混元共同一作唐俊姝在本人公开书目将黎家骐标记为本篇研究实习生，腾讯官方仓库确认项目及作者。黎家骐与华中科技大学导师曹治国、当时的混元首席研究员邵帅同篇署名。"
      },
      {
        "title": "Compression and Retrieval: Implicit Memory Retrieval for Video World Models",
        "url": "https://arxiv.org/html/2606.23105v1",
        "outcome": "confirmed",
        "note": "原文首页星号标注彭展在虎鲸文娱实习时完成本研究。虎鲸文娱是阿里巴巴集团业务。彭展在华中科技大学的导师曹治国和虎鲸文娱的 Jun Liang 同为本篇通讯作者。"
      }
    ],
    "note": "逐篇检查了部分出版书目与学生研究实习来源，尚未覆盖全部论文。"
  },
  "AjJ2rf8AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://www.cs.sjtu.edu.cn/jiaoshiml/huangweiran.html",
      "https://mifa.sjtu.edu.cn/"
    ],
    "papers": [
      {
        "title": "AutoEval-Video: An Automatic Benchmark for Assessing Large Vision Language Models in Open-Ended Video Question Answering",
        "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/08542.pdf",
        "outcome": "confirmed",
        "note": "原文首页直接标记第一作者陈修元在字节跳动研究院实习期间完成本工作；学生为交大 MIFA 硕士，实验室记录对应其 2024 年 ECCV 第一作者。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "Wl4tl4QAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://people.ucas.ac.cn/~huweiming",
      "https://yoyo000.github.io/group.html",
      "https://richardych.github.io/",
      "https://tengfei-wang.github.io/",
      "https://proceedings.nips.cc/paper_files/paper/2024/file/e3b53f89136b1bc69a5714ea465f01b6-Paper-Conference.pdf",
      "https://arxiv.org/pdf/2607.10840v1",
      "https://people.ucas.ac.cn/~jgao?language=en"
    ],
    "papers": [
      {
        "title": "Animate3D: Animating Any 3D Model with Multi-view Video Diffusion",
        "url": "https://proceedings.nips.cc/paper_files/paper/2024/file/e3b53f89136b1bc69a5714ea465f01b6-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "正式版首页具名注明 Yanqin Jiang 在阿里巴巴达摩院实习期间完成本研究；主管其博士学业的胡卫明与 2020 年 7 月入职达摩院的 Chaohui Yu 同篇署名。"
      },
      {
        "title": "OmniX: Any-View and Any-Time 4D Reconstruction via Feed-Forward Trajectory Fields",
        "url": "https://arxiv.org/pdf/2607.10840v1",
        "outcome": "confirmed",
        "note": "原文首页的实习脚注只对应 Yanqin Jiang；以腾讯混元署名的通讯作者王腾飞在个人书目再次标记他是这篇论文的组内实习生。其国科大博士导师胡卫明与两人同篇署名。"
      },
      {
        "title": "PolarFormer: Multi-Camera 3D Object Detection with Polar Transformer",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/25185/24957",
        "outcome": "lead",
        "note": "本篇有阿里巴巴达摩院共同作者，但 Yanqin Jiang 仅署学校，全文未找到其参与本篇企业研究的证据。"
      }
    ],
    "note": "已逐篇检查部分书目和学生科研实习，尚未覆盖全部论文。"
  },
  "WPC6ED4AAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://sse.sysu.edu.cn/teacher/100",
      "https://edisonleeeee.github.io/",
      "https://www.antgroup.com/technology/new-tech-Technology-dynamics-detail/1713974400000"
    ],
    "papers": [
      {
        "title": "What's Behind the Mask: Understanding Masked Graph Modeling for Graph Autoencoders",
        "url": "https://doi.org/10.1145/3580305.3599546",
        "year": 2023,
        "outcome": "confirmed",
        "note": "2022 年 5 月首版 PDF 将博士生李金膛同时署于中大和蚂蚁；学生公开履历确认同期为蚂蚁研究实习。2023 年 KDD 正式版仍列中大导师陈亮、郑子彬和同一蚂蚁作者王维强；本人项目仓库把预印本和正式版列为同一成果。"
      },
      {
        "title": "GUARD: Graph Universal Adversarial Defense",
        "url": "https://doi.org/10.1145/3583780.3614903",
        "year": 2023,
        "outcome": "confirmed",
        "note": "2022 年 4 月首版将李金膛同时署于中大和蚂蚁，时间落在其公开披露的蚂蚁科研实习内。中大两位学位导师陈亮、郑子彬和蚂蚁员工王维强同篇署名；正式出版于 CIKM 2023。"
      }
    ]
  },
  "uh1-AvwAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": true,
    "sources": [
      "https://arxiv.org/abs/2607.08303",
      "https://fwm94.github.io/publications.html",
      "https://dblp.org/pid/132/0888-1.html",
      "https://cs.hku.hk/people/academic-staff/wfeng",
      "https://fwm94.github.io/",
      "https://jessenyoung.github.io/",
      "https://arxiv.org/abs/2607.05248",
      "https://arxiv.org/abs/2604.00963",
      "https://arxiv.org/abs/2609.26197",
      "https://arxiv.org/abs/2609.15268",
      "https://arxiv.org/abs/2605.03839",
      "https://arxiv.org/abs/2608.02523",
      "https://arxiv.org/abs/2509.13112",
      "https://arxiv.org/abs/2511.02487",
      "https://arxiv.org/abs/2509.05016",
      "https://arxiv.org/abs/2507.11031",
      "https://arxiv.org/abs/2504.02740",
      "https://arxiv.org/abs/2410.23225",
      "https://arxiv.org/abs/2407.04672",
      "https://arxiv.org/abs/2502.05437",
      "https://arxiv.org/abs/2409.07892",
      "https://arxiv.org/abs/2503.11099",
      "https://arxiv.org/abs/2407.04576",
      "https://arxiv.org/abs/2410.22267",
      "https://arxiv.org/abs/2306.14867",
      "https://arxiv.org/abs/2310.00938",
      "https://arxiv.org/abs/2309.14696",
      "https://doi.org/10.1137/24M1663806",
      "https://arxiv.org/abs/2211.03487",
      "https://arxiv.org/abs/2302.06172",
      "https://doi.org/10.1016/j.ic.2023.105066",
      "https://arxiv.org/abs/2205.01985",
      "https://arxiv.org/abs/2208.00740"
    ],
    "papers": [
      {
        "title": "Learning AC^0 under locally sampleable graphical models",
        "url": "https://arxiv.org/abs/2607.08303",
        "outcome": "no-evidence",
        "note": "作者单位为港大、UC Santa Barbara、南京大学；校方组名单和作者主页表明参与为大学研究助理。2026 年已有公开预印本，列入本期；SODA 2027 不另计。"
      },
      {
        "title": "Fast counting and sampling for ferromagnetic two-spin systems",
        "url": "https://arxiv.org/abs/2607.05248",
        "outcome": "no-evidence",
        "note": "列港大、爱丁堡等大学研究作者，合作者 Yichun Yang 在导师页面被记为校内科研助理。2026 年已有公开预印本，SODA 2027 不另计。"
      },
      {
        "title": "Rapid mixing in positively weighted restricted Boltzmann machines",
        "url": "https://arxiv.org/abs/2604.00963",
        "outcome": "no-evidence",
        "note": "Minji Yang 为作者具名博士生且将此文列入本人书目；原文与公开资料仅确认学术合作。"
      },
      {
        "title": "An $\\widetilde{O}\\left(n^2\\right)$-time sampler for zero-field ferromagnetic Ising models",
        "url": "https://arxiv.org/abs/2609.26197",
        "outcome": "no-evidence",
        "note": "Yiyao Zhang 个人主页与凤维明实验室相符；见该论文作者单位和致谢，未识别范围内企业科研角色。"
      },
      {
        "title": "Learning CNF formulas from uniform random solutions: Near-tight sample complexity for Valiant's algorithm",
        "url": "https://arxiv.org/abs/2609.15268",
        "outcome": "no-evidence",
        "note": "Yixiao Yu、Yiyao Zhang 被导师网页列入校内研究协作成员，原文未提供范围内企业参与两环节证据。"
      },
      {
        "title": "On computing total variation distance between mixtures of product distributions",
        "url": "https://arxiv.org/abs/2605.03839",
        "outcome": "no-evidence",
        "note": "Minji Yang 是本人具名港大博士，Yucheng Fu 为校内科研助理，论文没有相应企业共同作者和在企业开展研究的角色。"
      },
      {
        "title": "Approximating two-terminal network reliability",
        "url": "https://arxiv.org/abs/2608.02523",
        "outcome": "no-evidence",
        "note": "Yucheng Fu 在凤维明主页被列为港大校内本科科研助理；没有此篇范围内企业共同作者。"
      },
      {
        "title": "Sublinear-time algorithms for diagonally dominant systems and applications to the Friedkin-Johnsen model",
        "url": "https://arxiv.org/abs/2509.13112",
        "outcome": "no-evidence",
        "note": "Zelin Li 正式列入教师课题组校内研究助理；论文将社交平台公开图作为数据，不形成范围内企业共同作者或实习关系。"
      },
      {
        "title": "Learning CNF formulas from uniform random solutions in the local lemma regime",
        "url": "https://arxiv.org/abs/2511.02487",
        "outcome": "no-evidence",
        "note": "原文作者单位为港大、UC Santa Barbara、南京大学。学校研究人员的共同署名未显示符合范围的企业科研。"
      },
      {
        "title": "On approximating the $f$-divergence between two Ising models",
        "url": "https://arxiv.org/abs/2509.05016",
        "outcome": "no-evidence",
        "note": "致谢明确学生 Yucheng Fu 参加的是香港大学计算与数据科学学院暑期科研实习；无范围内企业共同作者。"
      },
      {
        "title": "Rapid mixing of Glauber dynamics for monotone systems via entropic independence",
        "url": "https://arxiv.org/abs/2507.11031",
        "outcome": "no-evidence",
        "note": "导师与港大博士生 Minji Yang 同篇，出版单位及学生书目无企业科研记录。"
      },
      {
        "title": "Faster mixing of the Jerrum-Sinclair chain",
        "url": "https://arxiv.org/abs/2504.02740",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Deterministic counting from coupling independence",
        "url": "https://arxiv.org/abs/2410.23225",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Rapid mixing via coupling independence for spin systems with unbounded degree",
        "url": "https://arxiv.org/abs/2407.04672",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Approximating the total variation distance between spin systems",
        "url": "https://arxiv.org/abs/2502.05437",
        "outcome": "no-evidence",
        "note": "Minji Yang 出现在其港大学籍期间的自列论文，未发现可把这篇论文归入范围内企业的单位或角色。"
      },
      {
        "title": "Rapid mixing of the flip chain over non-crossing spanning trees",
        "url": "https://arxiv.org/abs/2409.07892",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Approximating the total variation distance between Gaussians",
        "url": "https://arxiv.org/abs/2503.11099",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Optimal mixing for randomly sampling edge colorings on trees down to the max degree",
        "url": "https://arxiv.org/abs/2407.04576",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Approximately counting knapsack solutions in subquadratic time",
        "url": "https://arxiv.org/abs/2410.22267",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Approximate counting for spin systems in sub-quadratic time",
        "url": "https://arxiv.org/abs/2306.14867",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "An FPRAS for two terminal reliability in directed acyclic graphs",
        "url": "https://arxiv.org/abs/2310.00938",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "On deterministically approximating total variation distance",
        "url": "https://arxiv.org/abs/2309.14696",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Towards derandomising Markov chain Monte Carlo",
        "url": "https://doi.org/10.1137/24M1663806",
        "outcome": "no-evidence",
        "note": "2022 早期稿、2023 FOCS 与 2025 SIAM J. Comput. 扩展版同一方向、同一作者和共享公开稿，合并核查。正式版列 ETH、爱丁堡、南京大学作者及 ERC 经费，无符合口径企业。"
      },
      {
        "title": "On the mixing time of Glauber dynamics for the hard-core and related models on G(n,d/n)",
        "url": "https://arxiv.org/abs/2302.06172",
        "outcome": "no-evidence",
        "note": "原文作者及单位/致谢与教师公开书目作者列表相符；仅见高校科研合作或公共课题支持，未找到同篇范围内企业作者与学生企业研究证据。"
      },
      {
        "title": "Swendsen-Wang dynamics for the ferromagnetic Ising model with external fields",
        "url": "https://doi.org/10.1016/j.ic.2023.105066",
        "outcome": "no-evidence",
        "note": "2022 预印本至 2023 期刊版作者一致。研究在爱丁堡等高校开展，未找到所列企业人员同篇参加。"
      },
      {
        "title": "A simple polynomial-time approximation algorithm for the total variation distance between two product distributions",
        "url": "https://arxiv.org/abs/2208.00740",
        "outcome": "no-evidence",
        "note": "2022 预印本和 2023 年正式发表版本用同一作者顺序及核心方法，合并核查，未发现目标企业的在职合著者。"
      }
    ]
  },
  "2A2Bx2UAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://cse.sysu.edu.cn/teacher/LiGuanbin",
      "https://guanbinli.com/",
      "https://arxiv.org/html/2511.06272",
      "https://tanxchong.github.io/",
      "https://cse.sysu.edu.cn/article/2718",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Dan_OptiMVMap_Offline_Vectorized_Map_Construction_via_Optimal_Multi-vehicle_Perspectives_CVPR_2026_paper.pdf",
      "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Cross-Modal_Attention_Calibration_for_LVLM_Hallucination_Mitigation_CVPR_2026_paper.pdf",
      "https://forestlinma.com/",
      "https://cse.sysu.edu.cn/article/2674",
      "https://proceedings.neurips.cc/paper_files/paper/2025/file/3b00f67a2e03916b26f56b66b38445f7-Paper-Conference.pdf"
    ],
    "papers": [
      {
        "title": "Cross-Modal Attention Calibration for LVLM Hallucination Mitigation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Cross-Modal_Attention_Calibration_for_LVLM_Hallucination_Mitigation_CVPR_2026_paper.pdf",
        "year": 2026,
        "outcome": "confirmed",
        "note": "CVPR 论文具名标注共同第一作者李佳铭在美团实习时完成该工作。校方博士招生公示具名列李冠彬为其导师，李冠彬同篇通讯；美团正式研究员马琳同篇署名。作者预印本和正式发表成果按同一项目追溯。"
      },
      {
        "title": "LaneDiffusion: Improving Centerline Graph Learning via Prior Injected BEV Feature Generation",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/html/Wang_LaneDiffusion_Improving_Centerline_Graph_Learning_via_Prior_Injected_BEV_Feature_Generation_ICCV_2025_paper.html",
        "year": 2025,
        "outcome": "confirmed",
        "note": "ICCV 正式论文列王子杰和李冠彬为中大作者，谭啸为百度作者。同稿 arXiv 首页将实习脚注直接标注在一作王子杰姓名；学校官方博士公示具名列李冠彬为导师。"
      },
      {
        "title": "OptiMVMap: Offline Vectorized Map Construction via Optimal Multi-vehicle Perspectives",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Dan_OptiMVMap_Offline_Vectorized_Map_Construction_via_Optimal_Multi-vehicle_Perspectives_CVPR_2026_paper.html",
        "year": 2026,
        "outcome": "confirmed",
        "note": "正式稿在王子杰姓名标注实习脚注，指出这项离线多车建图工作在百度参与；中大院系招生公示具名列其博士导师李冠彬，同篇由李冠彬通讯，百度视觉技术负责人谭啸为合著者。该研究的多车建图任务与前一篇车道中心线生成不同。"
      },
      {
        "title": "World Models as Group Actions",
        "url": "https://arxiv.org/abs/2605.24578",
        "year": 2026,
        "outcome": "lead",
        "note": "第一作者为中大及深圳环带院，论文同篇有百度研究人员、李冠彬。仍缺学生在企业做本篇及具名校内指导。"
      },
      {
        "title": "ARDepth: Auto-regressive Monocular Depth Estimation with Progressive Visual Conditioning",
        "url": "https://arxiv.org/abs/2607.12433",
        "year": 2026,
        "outcome": "lead",
        "note": "论文称第一作者为中大与深圳环带院，另有百度和腾讯合著人员。仍缺同篇研究的学生企业角色。"
      },
      {
        "title": "GUIDED: Granular Understanding via Identification, Detection, and Discrimination for Fine-Grained Open-Vocabulary Object Detection",
        "url": "https://proceedings.nips.cc/paper_files/paper/2025/hash/3b00f67a2e03916b26f56b66b38445f7-Abstract-Conference.html",
        "year": 2025,
        "outcome": "confirmed",
        "note": "NeurIPS 正式版首页明确将美团实习脚注标注于李佳铭本人；马琳为美团正式研究员同篇署名。中山大学公示具名列李冠彬为博士导师，他是正式论文通讯作者。该项目为细粒度开放词汇目标检测，与同一学生的模型幻觉校准论文不同。"
      }
    ]
  },
  "Yjt0uzMAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://teacher.bupt.edu.cn/lianghongliang/zh_CN/index.htm",
      "https://gitee.com/organizations/tsislab/",
      "https://dblp.org/pid/92/283.html",
      "https://api.crossref.org/works?filter=orcid:0000-0001-6877-780X,from-pub-date:2023-01-01&rows=100",
      "https://conf.researchr.org/details/icse-2026/icse-2026-software-engineering-in-practice/54/ViTAL-LLM-Powered-Taint-Analysis-for-GUI-Field-Visualization-Auditing-in-Android"
    ],
    "papers": [
      {
        "title": "ViTAL: LLM-Powered Taint Analysis for GUI Field Visualization Auditing in Android",
        "url": "https://doi.org/10.1145/3786583.3786912",
        "outcome": "lead",
        "note": "会方和出版方列论文为北邮、抖音合著，实验证实用抖音、今日头条、番茄小说构造数据。第一作者 Liuyang Jiang 只署北邮；未查到他作为在读学生参与抖音项目的具名信息和梁洪亮的指导证据。"
      },
      {
        "title": "Detecting vulnerabilities in IoT firmware via keyword identification and path optimization",
        "url": "https://doi.org/10.1016/j.iot.2025.101808",
        "outcome": "lead",
        "note": "期刊列梁洪亮参与研究指导，公开摘要未逐名列单位或实习；需要进一步核查合作者身份。"
      },
      {
        "title": "Data-independent generation of targeted universal adversarial perturbations",
        "url": "https://doi.org/10.1016/j.knosys.2025.114684",
        "outcome": "lead",
        "note": "出版社公开页面列北邮团队作者，当前可读取页面未展示完整单位和在职情况。"
      }
    ],
    "note": "逐篇查验 DBLP 与 Crossref 同人 ORCID 合集；目前已有 16 篇核查结果，仍有书目待完成，保留为部分梳理。"
  },
  "DfWdqzQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://jingjing1.github.io/#teach",
      "https://sxjyjay.github.io/"
    ],
    "papers": [
      {
        "title": "Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "NeurIPS 论文首页的第一作者脚注明确说明焦洋在美团实习时完成 Lumen。第一作者当时为复旦在读博士，并同时署名复旦与美团；本人简历将该技术列于美团 2023–2024 研究实习期间。"
      },
      {
        "title": "UniToken: Harmonizing Multimodal Understanding and Generation through Unified Visual Encoding",
        "url": "https://arxiv.org/pdf/2504.04423",
        "outcome": "confirmed",
        "note": "第一作者焦洋的 2024 年两版简历均在美团实习项目栏明确列出其研发统一图像理解和文生图的原生多模态模型。本人主页将该模型具名列为 UniToken；原文与项目库均列三位他本人注明的在美团实习时的合作伙伴，且均署美团。论文在实习结束后发布。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "sSy7nvsAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://doi.org/10.1145/3543507.3583237",
      "https://arxiv.org/html/2303.11700",
      "https://scholars.cityu.edu.hk/en/studentTheses/dynamic-adaptation-of-recommendation-models-structures-representa/",
      "https://scholars.cityu.edu.hk/en/persons/chen-ma(8295a3d5-52ec-463b-86cf-1f477c0cb316).html",
      "https://cn.linkedin.com/in/xu-he-98b98b1a7",
      "https://proceedings.iclr.cc/paper_files/paper/2026/hash/180d2acb13633fe78688d0d2347c731f-Abstract-Conference.html",
      "https://arxiv.org/abs/2502.12594",
      "https://www.eda2.com/iseda2024/tutorials.html",
      "https://proceedings.iclr.cc/paper_files/paper/2026/file/180d2acb13633fe78688d0d2347c731f-Paper-Conference.pdf",
      "https://proceedings.iclr.cc/paper_files/paper/2025/file/a48e5877c7bf86a513950ab23b360498-Paper-Conference.pdf",
      "https://forrest-stone.github.io/files/Yansen%20Zhang_CV.pdf",
      "https://scholars.cityu.edu.hk/en/studentTheses/trustworthy-decision-making-in-learning-and-optimization/",
      "https://ijcai.org/proceedings/2025/1192.pdf",
      "https://proceedings.mlr.press/v306/zhang26cb.html",
      "https://ai4math2026.github.io/",
      "https://arxiv.org/html/2510.05115v1"
    ],
    "papers": [
      {
        "title": "Dynamically Expandable Graph Convolution for Streaming Recommendation",
        "url": "https://doi.org/10.1145/3543507.3583237",
        "outcome": "confirmed",
        "note": "何博威 · Bowei He 是港城大在读博士及第一作者，原文具名脚注将 DEGC 与华为诺亚方舟实验室实习直接关联。港城大正式学位论文记录列马辰为该生博士导师，马辰同篇通讯；Xu He 同篇署华为并有独立的同时期任职资料。"
      },
      {
        "title": "PASER: Post-Training Data Selection for Efficient Pruned Large Language Model Recovery",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/180d2acb13633fe78688d0d2347c731f-Abstract-Conference.html",
        "outcome": "confirmed",
        "note": "何博威 · Bowei He 是港城大在读博士及第一作者，原文具名脚注将 PASER 与华为诺亚方舟实验室实习直接关联。港城大正式学位论文记录列马辰为该生博士导师，马辰同篇通讯；Hui-Ling Zhen 同篇署华为并有独立的同时期任职资料。"
      },
      {
        "title": "Decision Information Meets Large Language Models: The Future of Explainable Operations Research",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2025/file/a48e5877c7bf86a513950ab23b360498-Paper-Conference.pdf",
        "outcome": "confirmed",
        "note": "张岩森 · Yansen Zhang 是港城大在读博士及第一作者，原文具名脚注将 Explainable OR 与华为诺亚方舟实验室实习直接关联。港城大正式学位论文记录列马辰为该生博士导师，马辰同篇通讯；Qingcan Kang 同篇署华为并有独立的同时期任职资料。"
      },
      {
        "title": "SAC-Opt: Semantic Anchors for Iterative Correction in Optimization Modeling",
        "url": "https://proceedings.mlr.press/v306/zhang26cb.html",
        "outcome": "confirmed",
        "note": "张岩森 · Yansen Zhang 是港城大在读博士及第一作者，原文具名脚注将 SAC-Opt 与华为诺亚方舟实验室实习直接关联。港城大正式学位论文记录列马辰为该生博士导师，马辰同篇通讯；Mingxuan Yuan 同篇署华为并有独立的同时期任职资料。早期预印本、ICLR workshop 与 ICML 正式版为同一工作。"
      }
    ]
  },
  "g20Q12MAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://openaccess.thecvf.com/content/CVPR2026/html/Ye_Visual-Aware_CoT_Achieving_High-Fidelity_Visual_Consistency_in_Unified_Models_CVPR_2026_paper.html",
      "https://zixuan-ye.github.io/",
      "https://liuquande.github.io/",
      "https://arxiv.org/abs/2506.04216",
      "https://openreview.net/pdf?id=Vb4nE3WWf5",
      "https://arxiv.org/abs/2412.07744",
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Ye_StyleMaster_Stylize_Your_Video_with_Artistic_Generation_and_Translation_CVPR_2025_paper.pdf"
    ],
    "papers": [
      {
        "title": "Visual-Aware CoT: Achieving High-Fidelity Visual Consistency in Unified Models",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Ye_Visual-Aware_CoT_Achieving_High-Fidelity_Visual_Consistency_in_Unified_Models_CVPR_2026_paper.html",
        "outcome": "existing",
        "note": "原文核对后确认已在基线，保留原记录及原有统计。"
      },
      {
        "title": "UNIC: Unified In-Context Video Editing",
        "url": "https://arxiv.org/abs/2506.04216",
        "outcome": "lead",
        "note": "叶紫璇具名快手实习，但 2025 年 6 月第一版论文早于本人主页记载的 2025 年 9 月港科大博士入学，当时仍属华中科大硕士；初步核查未见当时罗文寒对该生具名同步指导、联合培养或被列为另一学生的导师。"
      },
      {
        "title": "StyleMaster: Stylize Your Video with Artistic Generation and Translation",
        "url": "https://arxiv.org/abs/2412.07744",
        "outcome": "lead",
        "note": "原文具名快手实习；实验、预印本及会议均早于学生港科大博士入学。正式署港科大不能替代证实当时在该校联合培养的学籍资料，华中科大硕士导师也未同篇署名。"
      }
    ]
  },
  "LKPpmXQAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://gr.xjtu.edu.cn/feynmanw/zh_CN/index.htm",
      "https://nuo1wang.github.io/DiffListener/",
      "https://jyt.shaanxi.gov.cn/index/ztzl/wq/2024/gggsygd/202407/P020250123575620838259.pdf",
      "https://nuo1wang.github.io/MimicTalker/"
    ],
    "papers": [
      {
        "title": "Diffusion-based Realistic Listening Head Generation via Hybrid Motion Modeling",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Wang_Diffusion-based_Realistic_Listening_Head_Generation_via_Hybrid_Motion_Modeling_CVPR_2025_paper.pdf",
        "outcome": "confirmed",
        "note": "王一诺为西安交大人工智能研究团队学生，2024 年同一领域的国赛项目具名有其在校指导关系。本篇 CVPR 正式版首页单独具名说明王一诺于蚂蚁集团实习期间完成本研究。"
      },
      {
        "title": "MimicTalker: A Multimodal Interactive and Memory-Enhanced Framework for Real-Time Dyadic 3D Head Generation",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_MimicTalker_A_Multimodal_Interactive_and_Memory-Enhanced_Framework_for_Real-Time_Dyadic_CVPR_2026_paper.pdf",
        "outcome": "confirmed",
        "note": "王一诺为西安交大人工智能研究团队学生，2024 年同一领域的国赛项目具名有其在校指导关系。本篇 CVPR 正式版首页单独具名说明王一诺于蚂蚁集团实习期间完成本研究。"
      }
    ],
    "note": "逐篇核对公开题录、个人履历、论文及任职证据，未穷尽全期论文。"
  },
  "6m-ZQ1EAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://li-xirong.github.io/",
      "https://xxayt.github.io/",
      "https://yangjie-cv.github.io/",
      "https://arxiv.org/html/2605.20035v1",
      "https://ruixiangzhao.github.io/",
      "https://ruc-aimc-lab.github.io/people/"
    ],
    "papers": [
      {
        "title": "Stage-adaptive Token Selection for Efficient Omni-modal LLMs",
        "url": "https://arxiv.org/html/2605.20035v1",
        "outcome": "confirmed",
        "note": "论文首版首页脚注明确指出辛梓杰、赵瑞祥在腾讯实习期间完成这项工作。两人均为中国人民大学在读博士生，且各自公开档案明确李锡荣为校内导师。腾讯微信视觉高级研究员杨杰为同篇企业通讯作者。"
      },
      {
        "title": "OmniPro: A Comprehensive Benchmark for Omni-Proactive Streaming Video Understanding",
        "url": "https://arxiv.org/html/2605.18577v1",
        "outcome": "lead",
        "note": "本篇首版只见微信与人大合作，未找到两名博士生参与该篇企业研究的具名说明；不沿用 SEATS 的实习脚注。"
      },
      {
        "title": "Hybrid-Tower: Fine-grained Pseudo-query Interaction and Generation for Text-to-Video Retrieval",
        "url": "https://arxiv.org/html/2509.04773v1",
        "outcome": "lead",
        "note": "原文具名兰邦翔本篇腾讯实习；校方报道证实学籍、课题组仅列李锡荣为博导，尚需该学生具名指导。"
      },
      {
        "title": "Music Grounding by Short Video",
        "url": "https://openaccess.thecvf.com/content/ICCV2025/papers/Xin_Music_Grounding_by_Short_Video_ICCV_2025_paper.pdf",
        "outcome": "lead",
        "note": "辛梓杰同期明确为快手实习生并完成项目，但研究始于其四川大学在读期间。本人 2023 年 10 月加入人大 AIMC 实验室、2024 年 9 月入学，需进一步区分跨校指导起点，暂不确认为人大的在读关系。"
      },
      {
        "title": "ASR-enhanced Multimodal Representation Learning for Cross-Domain Product Retrieval",
        "url": "https://arxiv.org/html/2408.02978v1",
        "outcome": "lead",
        "note": "正式研究有快手共同作者，未找到赵瑞祥具名实习或本篇企业科研参与的独立证明。"
      },
      {
        "title": "ChinaOpen: A Dataset for Open-world Multimodal Learning",
        "url": "https://arxiv.org/html/2305.05880v1",
        "outcome": "lead",
        "note": "可核腾讯作者和人大博士生，但预印本未说明博士生以企业项目成员参与该篇。"
      }
    ],
    "note": "已核查教师自列书目中与多模态校企合作相关的一组论文，并对照实验室学生履历；仍需检查其余作品。"
  }
};
