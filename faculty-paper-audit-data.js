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
      "https://arxiv.org/abs/2506.16114"
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
  }
};
