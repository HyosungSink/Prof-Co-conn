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
      "https://arxiv.org/html/2608.04625"
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
      "https://arxiv.org/html/2608.04625"
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
      "https://jw.beijing.gov.cn/gjc/tzgg_15688/202606/t20260615_4700536.html"
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
      }
    ],
    "note": "已核对 Jiawei Chen 主页上所列几篇论文，未完成韩先培所有论文综排。"
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
      "https://github.com/redai-studio"
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
      }
    ],
    "note": "核对了曹乾、Wenhui Tan 两人部分已知研究，尚未完成导师的全部论文综排。"
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
      "https://zhiyuanzeng.github.io/"
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
      "https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_Video_Depth_Anything_Consistent_Depth_Estimation_for_Super-Long_Videos_CVPR_2025_paper.pdf"
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
        "url": "https://hub.hku.hk/bitstream/10722/370044/1/content.pdf?accept=1",
        "outcome": "confirmed",
        "note": "港大保存的 SIGGRAPH 正式论文实名注明由 Yuanpeng Tu 在阿里巴巴达摩院实习期间完成。其本人主页证实在港大读博和导师赵恒爽，同篇作者 Hao Luo 的同期任职资料与达摩院署名一致。"
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
        "url": "https://arxiv.org/html/2603.21002",
        "outcome": "lead",
        "note": "同篇含快手人员和在读学生；两版预印本都未见该生在快手完成这篇的明确说明。"
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
      "https://orcid.org/0009-0004-1671-5016"
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
      }
    ],
    "note": "核对了孙一丁本人列出的一部分成果，未完成毛佳昕的完整公开题录。"
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
      "https://www.lamda.nju.edu.cn/jiangjp/"
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
      "https://fate-zero-edit.github.io/"
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
      "https://dblp.org/pid/348/9667.html"
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
        "note": "本论文致谢阿里研究实习计划、同期另一篇黄家兴确署达摩院；仍缺公开资料把黄家兴本人同这篇的实习绑定。"
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
        "outcome": "lead",
        "note": "已核对校方列出的三位作者。当前公开论文页面验证挡住正式稿核验，尚未确认企业来源；待补。"
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
      }
    ],
    "note": "逐条筛查了学校官网出版清单时间窗内所列 (1)–(20) 及若干补充成果；IYNet 正式全文仍待打开，官方清单之外的书目尚未查全，故仍记部分梳理。"
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
      "https://whi497.github.io/leaf.github.io/"
    ],
    "papers": [
      {
        "title": "CAST: Game Solvers as Turn-Level Teachers for LLM Agents",
        "url": "https://arxiv.org/pdf/2607.25308",
        "outcome": "confirmed",
        "note": "Ziang Ye 的个人学术主页将 CAST 具名列于 2026 年起在美团 LongCat 的实习成果，并说明其研究内容；发表时在中国科学技术大学读研。"
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
      "https://lll6gg.github.io/"
    ],
    "papers": [
      {
        "title": "Self-Distilled Agentic Reinforcement Learning",
        "url": "https://arxiv.org/pdf/2605.15155",
        "outcome": "confirmed",
        "note": "Zhengxi Lu 为浙江大学在读博士，原文第一作者脚注明确该项目在美团实习期间完成；其主页列 2026 年 3 月起的美团 LongCat 实习及实习导师顾奇。"
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
      "https://qunzhongwang.github.io/cv/Qunzhong_WANG_CV_1123.pdf"
    ],
    "papers": [
      {
        "title": "Growing Visual Generative Capacity for Pre-Trained MLLMs",
        "url": "https://arxiv.org/html/2510.01546",
        "outcome": "lead",
        "note": "待复核后再列入关系索引。"
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
      "https://arxiv.org/html/2507.02713"
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
  }
};
