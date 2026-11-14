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
      "https://zxwu.azurewebsites.net/"
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
      "https://gr.xjtu.edu.cn/fengtian/zh_CN/zhym/976526/list/index.htm"
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
        "url": "https://arxiv.org/pdf/2310.18339v2",
        "outcome": "existing",
        "note": "本人同期简历具名列腾讯合作及本篇，已确认。"
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
      "https://zhfzhmsra.github.io/"
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
      "https://dblp.org/pid/59/2741.html"
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
      }
    ],
    "note": "目前完成吴子杰公开研究项目的部分论文。"
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
      "https://aclanthology.org/people/jiale-cheng/"
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
      "https://doi.org/10.1145/3770855.3818320"
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
      "https://astl.xmu.edu.cn/People.htm"
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
      "https://dblp.org/pid/161/9965.html"
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
      }
    ],
    "note": "已部分梳理本组扩散语言模型方向，其他研究方向仍需继续。"
  },
  "FbJrKzkAAAAJ": {
    "from": "2023-01-01",
    "through": "2026-11-12",
    "exhausted": false,
    "sources": [
      "https://3s.whu.edu.cn/info/1025/1451.htm",
      "https://xiangyuezhang.com/cv/",
      "https://xiangyuezhang.com/publications/"
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
      "https://henglin-liu.github.io/HenglinLiu/"
    ],
    "papers": [
      {
        "title": "DiverseGRPO: Mitigating Mode Collapse in Image Generation via Diversity-Aware GRPO",
        "url": "https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_DiverseGRPO_Mitigating_Mode_Collapse_in_Image_Generation_via_Diversity-Aware_GRPO_CVPR_2026_paper.pdf",
        "outcome": "existing",
        "note": "同篇已在关系索引收录；导师和在快手实研证据已核实，不重复计数。"
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
      "https://jiangllan.github.io/"
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
      }
    ],
    "note": "已核对陈林个人成果的一部分和 R-4B。未完成向世明全部论文综排。"
  }
};
