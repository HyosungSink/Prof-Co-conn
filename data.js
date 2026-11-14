const survey = {
  from: '2023-01-01',
  through: '2026-11-12',
  schools: [
    [ '清华大学', 'Tsinghua University', 'C9' ],
    [ '北京大学', 'Peking University · PKU', 'C9' ],
    [ '复旦大学', 'Fudan University', 'C9' ],
    [ '上海交通大学', 'Shanghai Jiao Tong University · SJTU', 'C9' ],
    [ '浙江大学', 'Zhejiang University · ZJU', 'C9' ],
    [ '南京大学', 'Nanjing University · NJU', 'C9' ],
    [ '中国科学技术大学', 'University of Science and Technology of China · USTC', 'C9' ],
    [ '哈尔滨工业大学', 'Harbin Institute of Technology · HIT', 'C9' ],
    [ '西安交通大学', 'Xi’an Jiaotong University · XJTU', 'C9' ],
    [ '香港大学', 'The University of Hong Kong · HKU', '港五' ],
    [ '香港中文大学', 'The Chinese University of Hong Kong · CUHK', '港五' ],
    [ '香港科技大学', 'The Hong Kong University of Science and Technology · HKUST', '港五' ],
    [ '香港城市大学', 'City University of Hong Kong · CityUHK', '港五' ],
    [ '香港理工大学', 'The Hong Kong Polytechnic University · PolyU', '港五' ],
    [ '香港中文大学（深圳）', 'The Chinese University of Hong Kong, Shenzhen · CUHK-SZ', '合作大学' ],
    [ '香港科技大学（广州）', 'The Hong Kong University of Science and Technology (Guangzhou) · HKUST(GZ)', '合作大学' ],
    [ '北京航空航天大学', 'Beihang University · BUAA', '新增高校' ],
    [ '北京邮电大学', 'Beijing University of Posts and Telecommunications · BUPT', '新增高校' ],
    [ '中国科学院大学', 'University of Chinese Academy of Sciences · UCAS', '新增高校' ],
    [ '中国人民大学', 'Renmin University of China · RUC', '新增高校' ],
    [ '华中科技大学', 'Huazhong University of Science and Technology · HUST', '新增高校' ],
    [ '武汉大学', 'Wuhan University · WHU', '新增高校' ],
    [ '电子科技大学', 'University of Electronic Science and Technology of China · UESTC', '新增高校' ],
    [ '西安电子科技大学', 'Xidian University', '新增高校' ],
    [ '西北工业大学', 'Northwestern Polytechnical University · NWPU', '新增高校' ],
    [ '中山大学', 'Sun Yat-sen University · SYSU', '新增高校' ]
  ],
  companies: [
    [ '华为', 'Huawei · Noah’s Ark Lab' ],
    [ '腾讯', 'Tencent · Hunyuan · ARC · AI Lab' ],
    [ '字节跳动', 'ByteDance · Seed' ],
    [ '阿里巴巴', 'Alibaba · DAMO Academy · Alimama · Taobao & Tmall · Tongyi' ],
    [ '百度', 'Baidu · NLP Department · Wenxin' ],
    [ '京东', 'JD.com · JD Explore Academy' ],
    [ 'DeepSeek', 'DeepSeek-AI' ],
    [ '月之暗面（Kimi）', 'Moonshot AI · Kimi' ],
    [ '智谱（GLM / Z.ai）', 'Zhipu AI · Z.ai · GLM' ],
    [ 'MiniMax', 'MiniMax · MiniMax-M3' ],
    [ '美团', 'Meituan · LongCat' ],
    [ '小红书', 'Xiaohongshu · REDnote · DeepExperience' ],
    [ '快手', 'Kuaishou · KwaiVGI · Kling · Kolors' ],
    [ '蚂蚁集团', 'Ant Group · Ant Research' ]
  ],
  records: [
    {
      id: 'deepagent',
      company: '小红书',
      team: 'DeepExperience',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '窦志成 · Zhicheng Dou', '中国人民大学高瓴人工智能学院教授', 'https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm' ],
      employee: [ '焦文祥 · Wenxiang Jiao', '2025 年 9 月起在小红书担任大模型算法专家。', 'https://wxjiao.github.io/' ],
      student: [ 'Xiaoxi Li', '2023 年起在中国人民大学读博，2025 年 9 月开始小红书 RedStar 科研实习。', 'https://xiaoxi-li1.github.io/' ],
      title: 'DeepAgent: A General Reasoning Agent with Scalable Toolsets',
      short: 'DeepAgent',
      date: '2026-04',
      venue: 'The Web Conference',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2510.21618v3',
      extra: [ [ '正式会议版', 'https://doi.org/10.1145/3774904.3792460' ] ],
      evidence: '原文在 Xiaoxi Li 名下标注工作于小红书实习期间完成；其主页给出人大学籍、窦志成指导关系和实习起始月份。',
      advising: [ '校内导师', 'Xiaoxi Li 的教育经历明确列 窦志成 为当时的校内导师。', 'https://xiaoxi-li1.github.io/' ]
    },
    {
      id: 'galla',
      company: '蚂蚁集团',
      team: 'Ant Research',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '王睿 · Rui Wang', '上海交通大学计算机学院副教授，2021 年起在上交大任教。', 'https://cs.sjtu.edu.cn/en/jiaoshiml/wangrui.html' ],
      employee: [ 'Jianguo Li', '2020 年 6 月加入蚂蚁集团，担任蚂蚁研究技术总监。', 'https://sites.google.com/site/leeplus/' ],
      student: [ 'Ziyin Zhang', '王睿课题组名单显示，2023 年继续在上交大攻读硕士。', 'https://wangruinlp.github.io/' ],
      title: 'GALLa: Graph Aligned Large Language Models for Improved Source Code Understanding',
      short: 'GALLa',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.676.pdf',
      evidence: 'Ziyin Zhang 双署名上交大和蚂蚁集团。首页脚注点名说明工作在其蚂蚁实习期间完成，导师名录补足在读身份。',
      advising: [ '课题组指导', '王睿的个人课题组名录将 Ziyin Zhang 列在自己的硕士生名单中，并记载其 2023 年起在上海交通大学攻读硕士。', 'https://wangruinlp.github.io/' ]
    },
    {
      id: 'dsec',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · DSec',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [
        '章明星 · Mingxing Zhang',
        '清华大学 MADSys 教师及博士生导师，论文署名清华。实验室另记其 2026 年转至北大。',
        'https://madsys.cs.tsinghua.edu.cn/author/mingxing-zhang/'
      ],
      employee: [ '梁文锋 · Wenfeng Liang', 'DeepSeek 创始人，署名该技术报告。', 'https://www.ehangzhou.gov.cn/2025-01/22/c_292410.htm' ],
      student: [ '黄嘉良 · Jialiang Huang', '清华大学 MADSys 博士生，由章明星指导。', 'https://madsys.cs.tsinghua.edu.cn/author/jialiang-huang/' ],
      title: 'DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale',
      short: 'DeepSeek DSec',
      date: '2026-09-19',
      venue: 'arXiv 预印本',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2609.22978v1',
      extra: [ [ 'MADSys 团队任职更新', 'https://madsys.cs.tsinghua.edu.cn/people/' ] ],
      evidence: '作者说明同时写明清华博士生黄嘉良的高校导师章明星和 DeepSeek 实习导师 Liyue Zhang。企业岗位用另一位同篇作者梁文锋核验。教师高校按论文署名记录。',
      advising: [ '校内导师', '论文首页作者说明具名写明黄嘉良的博士导师为章明星，并另列其 DeepSeek 实习导师。', 'https://arxiv.org/html/2609.22978v1' ]
    },
    {
      id: 'patchvsr',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '季向阳 · Xiangyang Ji', '清华大学自动化系教师，Shian Du 在其课题组攻读硕士。', 'https://shiandu.github.io/' ],
      employee: [ 'Menghan Xia', '2024 至 2025 年在快手可灵团队任高级研究员。', 'https://menghanxia.github.io/' ],
      student: [ 'Shian Du', '2023 年 9 月起为清华硕士，2024 年起在快手可灵团队实习。', 'https://shiandu.github.io/' ],
      title: 'PatchVSR: Breaking Video Diffusion Resolution Limits with Patch-wise Video Super-Resolution',
      short: 'PatchVSR',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Du_PatchVSR_Breaking_Video_Diffusion_Resolution_Limits_with_Patch-wise_Video_Super-Resolution_CVPR_2025_paper.pdf',
      evidence: '首页脚注将工作关联至 Shian Du 的快手实习。本人主页列出清华导师以及快手研究指导者 Menghan Xia 和 Xintao Wang。',
      advising: [ '校内导师', 'Shian Du 的教育经历明确列 季向阳 为当时的校内导师。', 'https://shiandu.github.io/' ]
    },
    {
      id: 'pidro',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '林彥民 · Edmund Y. Lam', '研究期间任香港大学电机电子工程系教授，并于 2023 年获计算机科学系兼任教席。', 'https://web.ece.hku.hk/~elam/cv.html' ],
      employee: [ 'Hang Xu', '博士毕业后于 2018 年加入华为，论文署名华为诺亚方舟实验室。', 'https://xuhangcn.github.io/' ],
      student: [ 'Peiyan Guan', '港大成像系统实验室列为 2018 至 2023 年研究生。', 'https://isl.eee.hku.hk/team' ],
      title: 'PIDRo: Parallel Isomeric Attention with Dynamic Routing for Text-Video Retrieval',
      short: 'PIDRo',
      date: '2023-10',
      venue: 'ICCV',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/ICCV2023/papers/Guan_PIDRo_Parallel_Isomeric_Attention_with_Dynamic_Routing_for_Text-Video_Retrieval_ICCV_2023_paper.pdf',
      evidence: '第一作者 Peiyan Guan 的脚注明确指向华为实习。港大实验室列出其在读期间，且将该论文列为实验室研究成果。',
      advising: [ '校内共同导师', '香港大学学位论文库将 Edmund Y. Lam 列为 Peiyan Guan 的两位博士导师之一。', 'https://hub.hku.hk/handle/10722/343777' ]
    },
    {
      id: 'glesam',
      company: '华为',
      team: '视觉研究',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '高山 · Shan Gao', '西北工业大学教职人员，学生本人确认由其指导。', 'https://wurenxitong.nwpu.edu.cn/info/1107/2263.htm' ],
      employee: [ 'Yong Guo', '华为研究员及团队负责人。论文首页确认其为这项实习工作的指导者。', 'https://www.guoyongcs.com/' ],
      student: [ 'Guangqian Guo', '2023 年起为西工大博士生；2024 年 7 月至 2025 年 4 月在华为科研实习。', 'https://guangqian-guo.github.io/' ],
      title: 'Segment Any-Quality Images with Generative Latent Space Enhancement',
      short: 'GleSAM',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Guo_Segment_Any-Quality_Images_with_Generative_Latent_Space_Enhancement_CVPR_2025_paper.pdf',
      evidence: '论文对学生同时标注西工大和华为，并点名实习与华为指导者。学生履历列明学籍、月份及同一研究主题。该文另有腾讯署名。',
      advising: [ '校内导师', '郭光乾的主页在教育介绍中列出高山为其博士导师。', 'https://guangqian-guo.github.io/' ]
    },
    {
      id: 'adaspa',
      company: '字节跳动',
      team: 'Seed',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '崔斌 · Bin Cui', '北京大学计算机学科教授。', 'https://eecs.pku.edu.cn/xxkxjsxy/info/1500/6771.htm' ],
      employee: [
        'Xuefeng Xiao',
        '2024 年已以字节身份领导 Hyper-SD，2025 年在本论文署名字节 Seed。',
        'https://proceedings.neurips.cc/paper_files/paper/2024/file/d4e1c24ac41ff0b82ca1b171731f0b23-Paper-Conference.pdf'
      ],
      student: [ 'Yifei Xia', '北京大学博士生，由崔斌指导，2024 年 9 月起在字节 Seed 科研实习。', 'https://yifei1532.github.io/' ],
      title: 'Training-free and Adaptive Sparse Attention for Efficient Long Video Generation',
      short: 'AdaSpa',
      date: '2025-10',
      venue: 'ICCV',
      area: 'AI 系统',
      paper: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Xia_Training-free_and_Adaptive_Sparse_Attention_for_Efficient_Long_Video_Generation_ICCV_2025_paper.pdf',
      extra: [ [ '企业作者的长期任职记录', 'https://lacuna.tiptreesystems.com/author/xuefeng-xiao' ], [ '公开预印本及作者表', 'https://arxiv.org/abs/2502.21079' ] ],
      evidence: '论文明确 Yifei Xia 等北大及字节双署名作者的贡献发生于字节实习。企业作者身份由同期项目领导记录和持续任职记录交叉支持。',
      advising: [ '校内导师', 'Yifei Xia 的教育经历明确列 崔斌 为当时的校内导师。', 'https://yifei1532.github.io/' ]
    },
    {
      id: 'cfont',
      company: '阿里巴巴',
      team: '阿里妈妈（Alimama）',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '徐威威 · Weiwei Xu', '浙江大学 CAD&CG 实验室教授、论文通讯作者。', 'https://person.zju.edu.cn/en/0015060' ],
      employee: [ '葛铁铮 · Tiezheng Ge', '阿里妈妈资深算法工程师，论文署名阿里巴巴。', 'https://www.alphaxiv.org/zh/%40tiezheng-ge' ],
      student: [ '王驰 · Chi Wang', '研究期间为浙江大学博士生，个人履历列出阿里妈妈实习。', 'https://cv.wangchi.art/zh/' ],
      title: 'CF-Font: Content Fusion for Few-Shot Font Generation',
      short: 'CF-Font',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Wang_CF-Font_Content_Fusion_for_Few-Shot_Font_Generation_CVPR_2023_paper.pdf',
      extra: [ [ '学生教育与实习时间', 'https://cv.wangchi.art/uploads/resume.pdf' ] ],
      evidence: '首页对王驰列出浙大与阿里双署名及实习脚注；其履历把该论文列为博士阶段成果，并区分后续正式岗位。',
      advising: [ '校内导师', '王驰 的教育经历明确列 徐威威 为当时的校内导师。', 'https://cv.wangchi.art/uploads/resume.pdf' ]
    },
    {
      id: 'bases',
      company: '百度',
      team: 'NLP Department',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '赵鑫 · Wayne Xin Zhao', '中国人民大学教师，2017 年起在人大任教。', 'https://ai.ruc.edu.cn/GSAI_HOME/FACULTYn/XinZhao/index.htm' ],
      employee: [ '王海峰 · Haifeng Wang', '百度首席技术官，2024 年年报列明其岗位。', 'https://ir.baidu.com/static-files/e5b08279-6737-4883-88fb-abc47589738f' ],
      student: [ 'Ruiyang Ren', '人大博士阶段与百度 NLP 部门 2020 年 5 月至 2024 年 7 月的科研实习重叠。', 'https://rui-yang.ren/index.html' ],
      title: 'BASES: Large-scale Web Search User Simulation with Large Language Model based Agents',
      short: 'BASES',
      date: '2024-11',
      venue: 'Findings of EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.findings-emnlp.50.pdf',
      evidence: '论文脚注明确第一作者在百度实习期间完成研究。本人履历写明人大导师赵鑫、该段实习起止时间及百度侧指导者 Jing Liu。',
      advising: [ '校内导师', 'Ruiyang Ren 的教育经历明确列 赵鑫 为当时的校内导师。', 'https://rui-yang.ren/index.html' ]
    },
    {
      id: 'vos-llb',
      company: '京东',
      team: '京东探索研究院',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '张乐飞 · Lefei Zhang', '武汉大学计算机学院教授，Meng Lan 博士导师之一。', 'https://jszy.whu.edu.cn/zhanglefei/en/index/427766/list/index.htm' ],
      employee: [ '陶大程 · Dacheng Tao', '研究期间担任京东高级副总裁、京东探索研究院首任负责人。', 'https://sai.pku.edu.cn/znxyenglish/info/1082/2356.htm' ],
      student: [ 'Meng Lan', '武汉大学计算机学院博士生，2020 年 12 月至 2023 年 4 月在京东探索研究院实习。', 'https://lanmng.github.io/homepage/' ],
      title: 'Learning to Learn Better for Video Object Segmentation',
      short: 'VOS-LLB',
      date: '2023-06-26',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://doi.org/10.1609/aaai.v37i1.25203',
      extra: [ [ '作者稿实习说明', 'https://openreview.net/pdf?id=DHlgYcGLIH' ], [ '同一团队与该导师的另一项在读实习成果 DeMT', 'https://arxiv.org/pdf/2301.03461' ] ],
      evidence: '作者稿注明该工作在 Meng Lan 的京东实习期间完成；学生主页给出在读和实习时间，明确由京东侧合著者陶大程等指导。预印本始于 2022 年，正式会议版发表于 2023 年。',
      advising: [ '校内共同导师', 'Meng Lan 的教育经历明确列 张乐飞 为当时的校内共同导师。', 'https://lanmng.github.io/homepage/' ]
    },
    {
      id: 'g1',
      company: '月之暗面（Kimi）',
      team: 'Moonshot AI',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '常宝宝 · Baobao Chang', '北京大学计算机学院副教授。', 'https://cs.pku.edu.cn/info/1237/2150.htm' ],
      employee: [ 'Yuxin Wu', '在月之暗面负责基础模型研发。', 'https://ppwwyyxx.com/' ],
      student: [ '陈亮 · Liang Chen', '北大博士生，导师为常宝宝；论文标记该工作在月之暗面实习期间完成。', 'https://chenllliang.github.io/' ],
      title: 'G1: Bootstrapping Perception and Reasoning Abilities of Vision-Language Model via Reinforcement Learning',
      short: 'G1',
      date: '2025-05-19',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2505.13426v1',
      evidence: '第一作者同时署名北大和月之暗面，带有具名实习脚注。高校导师和月之暗面研发人员均在同一篇论文的作者名单中。',
      advising: [ '校内导师', '陈亮的个人主页在北大博士阶段明确列常宝宝为导师。', 'https://chenllliang.github.io/' ]
    },
    {
      id: 'mooncake',
      company: '月之暗面（Kimi）',
      team: 'AI Infra',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '章明星 · Mingxing Zhang', '清华大学 MADSys 教师；校方报道确认其为 Ruoyu Qin 的导师。', 'https://www.cs.tsinghua.edu.cn/info/1034/6611.htm' ],
      employee: [ 'Xinran Xu', 'GOSIM China 2024 会议简介列为 Moonshot AI 工程副总裁；同篇通讯作者。', 'https://china2024.gosim.org/speakers/xinran-xu.html' ],
      student: [ '秦若愚 · Ruoyu Qin', '2023 年 9 月开始实习时在清华读本科，2024 年本科毕业，FAST 2025 发表时为清华博士生。', 'https://qinruoyu.com/static/media/cv-qinruoyu.pdf' ],
      title: 'Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot',
      short: 'Mooncake',
      date: '2025-02',
      venue: 'USENIX FAST',
      area: 'AI 系统',
      paper: 'https://www.usenix.org/system/files/fast25-qin.pdf',
      extra: [
        [ '会议发表记录', 'https://www.usenix.org/conference/fast25/presentation/qin' ],
        [ '清华大学报道：项目团队及秦若愚导师', 'https://www.tsinghua.edu.cn/info/1175/117420.htm' ]
      ],
      evidence: 'FAST 论文首页确认 Ruoyu Qin 在月之暗面实习期间完成其贡献。清华报道和本人简历确认博士学籍、校内导师和实习时间；简历也列同篇企业通讯作者 Xinran Xu 为实习导师。',
      advising: [ '校内导师', 'Ruoyu Qin 的教育经历明确列 章明星 为当时的校内导师。', 'https://qinruoyu.com/static/media/cv-qinruoyu.pdf' ]
    },
    {
      id: 'glm45',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM 后训练',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '唐杰 · Jie Tang', '清华大学计算机系教授，同时参与智谱创立。按论文作者的已知教职记录。', 'https://www.cs.tsinghua.edu.cn/csen/info/1303/4319.htm' ],
      employee: [ '吕鑫 · Xin Lv', '智谱研究员，负责包含 GLM-4.5 的推理强化学习团队；本人列明此前已完成清华博士学位。', 'https://davidlvxin.github.io/' ],
      student: [ '杜晋华 · Jinhua Du', '2022 级清华大学计算机系博士生，在读期间参与智谱大模型研发。个人主页将 GLM-4.5 列为代表成果。', 'https://dujh22.github.io/Dujinhua_wiki/' ],
      title: 'GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models',
      short: 'GLM-4.5',
      date: '2025-08',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2508.06471',
      evidence: 'GLM-4.5 报告的贡献表分别列杜晋华、唐杰及吕鑫。杜晋华的个人主页与博士经历列出智谱研发实习及 GLM-4.5，吕鑫的公开履历列出对应的智谱正式岗位。',
      advising: [ '博士导师', '杜晋华的个人主页在清华计算机系博士经历中明确列唐杰为导师。', 'https://dujh22.github.io/Dujinhua_wiki/' ]
    },
    {
      id: 'maxproof',
      company: 'MiniMax',
      team: 'MiniMax-M3',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Yu Cheng', '香港中文大学计算机系教员，校方记载 2024 年加入。本人履历记载其曾在 MiniMax 任职至 2025 年。', 'https://www.cse.cuhk.edu.hk/people/faculty/yu-cheng/' ],
      employee: [ '赵鹏宇 · Pengyu Zhao', '2023 年 8 月加入 MiniMax，2025 年 6 月起为执行董事及大模型研发负责人。', 'https://ir.minimax.cn/en/corporate-information/management' ],
      student: [ 'Jiacheng Chen', '2025 年 10 月起在港中大读博，自述曾在 MiniMax 实习并负责或共同负责 MaxProof。', 'https://jc-chen1.github.io/' ],
      title: 'MaxProof: Scaling Mathematical Proof with Generative-Verifier RL and Population-Level Test-Time Scaling',
      short: 'MaxProof',
      date: '2026-06-11',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2606.13473v1',
      extra: [ [ '教师历史任职', 'https://ych133.github.io/' ] ],
      evidence: '第一作者双署名 MiniMax 与港中大，个人主页明确把该研究与其企业经历关联。使用另一位作者赵鹏宇确认企业岗位。',
      advising: [ '校内共同导师', 'Jiacheng Chen 的教育经历明确列 Yu Cheng 为当时的校内共同导师。', 'https://jc-chen1.github.io/' ]
    },
    {
      id: 'glm-vision',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM-V',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '李涓子 · Juanzi Li', '清华大学计算机系教授，Shangqing Tu 的博士导师。', 'https://www.cs.tsinghua.edu.cn/info/1111/3487.htm' ],
      employee: [ '黄世宇 · Shiyu Huang', '曾任智谱首席研究员，2024 年的研究署名和 2025 年 GLM-V 贡献表对应同一研究人员。', 'https://huangshiyu13.github.io/' ],
      student: [ 'Shangqing Tu', '清华大学博士生，2024 年 7 月起在智谱后训练团队实习，自述参与 GLM-4.5V。', 'https://shangqingtu.github.io/' ],
      title: 'GLM-4.1V-Thinking and GLM-4.5V: Towards Versatile Multimodal Reasoning with Scalable Reinforcement Learning',
      short: 'GLM-4.1V / GLM-4.5V',
      date: '2025-07',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2507.01006',
      extra: [ [ '学生论文列表', 'https://shangqingtu.github.io/publications/' ], [ '企业作者的同期单位', 'https://arxiv.org/pdf/2408.01072' ] ],
      evidence: '报告贡献表列出李涓子、黄世宇及拼作 Shangqin Tu 的贡献者；Shangqing Tu 本人的成果页明确认领同一报告，主页将其关联到在读智谱实习。',
      advising: [ '校内导师', 'Shangqing Tu 的教育经历明确列 李涓子 为当时的校内导师。', 'https://shangqingtu.github.io/' ]
    },
    {
      id: 'gme',
      company: '阿里巴巴',
      team: '通义实验室（Tongyi Lab）',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ 'Wenjie Li', '香港理工大学计算机学系教授。', 'https://research.polyu.edu.hk/en/persons/wenjie-li/' ],
      employee: [ 'Dingkun Long', '2024 年会议简介列为阿里通义实验室算法专家，论文脚注标注其技术负责人角色。', 'https://ml-summit.org/speaker/863?lang=en&uid=c1038' ],
      student: [ 'Xin Zhang', '2024 年 9 月起为香港理工大学计算机学系博士生，至 2025 年 7 月在阿里通义实验室科研实习。', 'https://izhx.github.io/' ],
      title: 'Bridging Modalities: Improving Universal Multimodal Retrieval by Multimodal Large Language Models',
      short: 'GME / Bridging Modalities',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_Bridging_Modalities_Improving_Universal_Multimodal_Retrieval_by_Multimodal_Large_Language_CVPR_2025_paper.pdf',
      evidence: '论文首页注明 XZ 等人在实习期间完成相关工作、DL 为技术负责人。学生履历补充香港理工学籍及阿里实习时间。',
      advising: [ '博士共同导师', 'Xin Zhang 在博士教育经历中列明 Wenjie Li 和 Min Zhang 共同指导。', 'https://izhx.github.io/' ],
      extra: [ [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.16855' ] ]
    },
    {
      id: 'gve',
      company: '阿里巴巴',
      team: '通义实验室（Tongyi Lab）',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ '褚晓文 · Xiaowen Chu', '香港科技大学（广州）教授、论文通讯作者。', 'https://www.hkust-gz.edu.cn/about/governance/governing-bodies/senate/membership/' ],
      employee: [ 'Dingkun Long', '阿里通义实验室算法专家。', 'https://ml-summit.org/speaker/863?lang=en&uid=c1038' ],
      student: [ 'Zhuoning Guo', '港科大（广州）博士生；2025 年 3 月至 2026 年 1 月在阿里通义实验室科研实习。', 'https://gzn00417.github.io/cv/' ],
      title: 'Towards Universal Video Retrieval: Generalizing Video Embedding via Synthesized Multimodal Pyramid Curriculum',
      short: 'GVE',
      date: '2026',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/abs/2510.27571',
      extra: [ [ '作者项目页与会议记录', 'https://gzn00417.github.io/GVE/' ], [ '高校导师学生名单', 'https://sites.google.com/view/chuxiaowen/students' ] ],
      evidence: '第一作者在 2025 年预印本发布时兼署港科大（广州）和通义。本人履历、导师的 2025 年入学记录、作者项目页及企业合著者岗位互相印证。',
      advising: [ '校内导师', 'Zhuoning Guo 的教育经历明确列 褚晓文 为当时的校内导师。', 'https://gzn00417.github.io/cv/' ]
    },
    {
      id: 'implicit-camera',
      company: '腾讯',
      team: '腾讯 AI Lab · 视觉计算中心',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ 'Qing Wang', '西北工业大学计算机学院教授，Xin Huang 的博士导师。', 'https://npu-cvpg.org/group' ],
      employee: [ '张琦 · Qi Zhang', '2021 至 2023 年在腾讯 AI Lab 任研究员。', 'https://qzhang-cv.github.io/data/QiZhang-CV.pdf' ],
      student: [ '黄鑫 · Xin Huang', '2020 年起为西北工业大学博士生，2021 年 8 月至 2023 年 5 月在腾讯 AI Lab 实习。', 'https://xhuangcv.github.io/about/xinhuangCV.pdf' ],
      title: 'Inverting the Imaging Process by Learning an Implicit Camera Model',
      short: 'Implicit Camera Model',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Huang_Inverting_the_Imaging_Process_by_Learning_an_Implicit_Camera_Model_CVPR_2023_paper.pdf',
      extra: [
        [
          '同一师生和企业导师合作发表的 LIRF',
          'https://openaccess.thecvf.com/content/CVPR2023/papers/Huang_Local_Implicit_Ray_Function_for_Generalizable_Radiance_Field_Representation_CVPR_2023_paper.pdf'
        ],
        [ '企业视觉计算中心', 'https://ailab-cvc.github.io/' ]
      ],
      evidence: '原文标明黄鑫实习期间完成工作。学生简历列出西工大学籍、腾讯实习区间，并明确同篇作者张琦为企业导师。',
      advising: [ '校内导师', '黄鑫 的教育经历明确列 Qing Wang 为当时的校内导师。', 'https://xhuangcv.github.io/about/xinhuangCV.pdf' ]
    },
    {
      id: 'skysense',
      company: '蚂蚁集团',
      team: '智能遥感联合实验室',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '李彦胜 · Yansheng Li', '武汉大学遥感信息工程学院教职人员、论文通讯作者。', 'https://jszy.whu.edu.cn/liyansheng/en/index/447146/list/index.htm' ],
      employee: [ 'Jingdong Chen', '蚂蚁集团资深算法专家，论文署名蚂蚁集团。', 'https://hangzhou2025.gosim.org/speakers/jingdong-chen/' ],
      student: [ '党博 · Bo Dang', '武汉大学同期报道记载，SkySense 研究期间为在读硕士生。', 'https://news.whu.edu.cn/info/1015/453267.htm' ],
      title: 'SkySense: A Multi-Modal Remote Sensing Foundation Model Towards Universal Interpretation for Earth Observation Imagery',
      short: 'SkySense',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Guo_SkySense_A_Multi-Modal_Remote_Sensing_Foundation_Model_Towards_Universal_Interpretation_CVPR_2024_paper.pdf',
      extra: [
        [ '武汉大学关于联合实验室的报道', 'https://news.whu.edu.cn/info/1015/453267.htm' ],
        [
          '同期作者履历',
          'https://liangqiy.com/publication/rest_holistic_learning_for_end-to-end_semantic_segmentation_of_whole-scene_remote_sensing_imagery/REST_Holistic_Learning_for_End-to-End_Semantic_Segmentation_of_Whole-Scene_Remote_Sensing_Imagery.pdf'
        ]
      ],
      evidence: '原文将蚂蚁集团实习脚注附在武大作者党博和武康名下。武大公开报道确认论文来自武大与蚂蚁的联合实验室。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 李彦胜 对 党博 的指导关系。', 'https://jszy.whu.edu.cn/liyansheng/en/index/447146/list/index.htm' ]
    },
    {
      id: 'ant-compression',
      company: '蚂蚁集团',
      team: 'CTO Research',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ 'Xiangyu Zhao', '香港城市大学数据科学教授，论文通讯作者。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ],
      employee: [ 'Jingdong Chen', '蚂蚁集团资深算法专家，论文署名 AntGroup。', 'https://hangzhou2025.gosim.org/speakers/jingdong-chen/' ],
      student: [ 'Maolin Wang · Morin Wang', '2021 年 9 月至 2025 年 10 月在香港城市大学读博；2023 年 6 月起在蚂蚁集团研究实习。', 'https://morin.wang/' ],
      title: 'Large Multimodal Model Compression via Efficient Pruning and Distillation',
      short: 'AntGroup LMM Compression',
      date: '2024',
      venue: 'The Web Conference',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2312.05795v2',
      evidence: '原文注明 Maolin Wang 的研究在蚂蚁实习期间完成。本人主页给出导师、在读区间、蚂蚁实习起止和正式会议出处。',
      advising: [ '校内共同导师', 'Maolin Wang 的教育经历明确列 Xiangyu Zhao 为当时的校内共同导师。', 'https://morin.wang/' ]
    },
    {
      id: 'dualtalk',
      company: '蚂蚁集团',
      team: 'Ant Research',
      school: '清华大学',
      studentSchool: '中国人民大学',
      faculty: [ '刘红岩 · Hongyan Liu', '清华大学经济管理学院管理科学与工程系教授。', 'https://sem.tsinghua.edu.cn/en/info/1219/7259.htm' ],
      employee: [ 'Yanbo Fan', '2023 年 10 月至 2025 年 6 月在 Ant Research 任高级研究员。', 'https://sites.google.com/site/yanbofan0124' ],
      student: [ '彭子乔 · Ziqiao Peng', '中国人民大学博士生；论文具名注明蚂蚁实习。', 'https://ziqiaopeng.github.io/' ],
      title: 'DualTalk: Dual-Speaker Interaction for 3D Talking Head Conversations',
      short: 'DualTalk',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Peng_DualTalk_Dual-Speaker_Interaction_for_3D_Talking_Head_Conversations_CVPR_2025_paper.pdf',
      evidence: '第一作者署名中国人民大学，首页点名蚂蚁实习。刘红岩是清华合著教师，研究生学籍另记为人大。',
      advising: [ '跨校共同导师', '彭子乔 的在读履历明确列 刘红岩 为同期跨校共同导师。', 'https://ziqiaopeng.github.io/' ]
    },
    {
      id: 'dualpath',
      company: 'DeepSeek',
      team: '推理基础设施',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '金鑫 · Xin Jin', '北京大学计算机学科教职人员、Yongtong Wu 的博士导师。', 'https://xinjin.github.io/index.html' ],
      employee: [ 'Yixuan Tan', '同篇作者，ORCID 公开任职资料列出 DeepSeek-AI。', 'https://orcid.org/0009-0004-9899-2550' ],
      student: [ 'Yongtong Wu', '2025 年起在北大读博，同年 8 月起参与 DeepSeek 的推理及强化学习基础设施工作。', 'https://jokerwyt.github.io/' ],
      title: 'DualPath: Accelerating Agentic LLM Inference by Harvesting Disaggregated KV-Cache Storage I/O',
      short: 'DualPath',
      date: '2026',
      venue: 'ACM SIGCOMM',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2602.21548v2',
      extra: [ [ '会议正式记录', 'https://conferences.sigcomm.org/sigcomm/2026/accepted/' ], [ '报道中的实习身份', 'https://eu.36kr.com/en/p/3701088020721285' ] ],
      evidence: '会议记录列第一作者双署名北大及 DeepSeek。本人列明博士、导师与 DeepSeek 项目，报道说明其为实习生。',
      advising: [ '校内导师', 'Yongtong Wu 的教育经历明确列 金鑫 为当时的校内导师。', 'https://jokerwyt.github.io/' ]
    },
    {
      id: 'deepseek-grm-liu',
      company: 'DeepSeek',
      team: '奖励模型研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '刘洋 · Yang Liu', '清华计算机系教授，刘子君的博士导师；论文首页列为清华作者。', 'https://www.cs.tsinghua.edu.cn/csen/info/1312/4390.htm' ],
      employee: [ 'Runxin Xu', '硕士毕业后加入 DeepSeek，个人主页列为研究员；同篇署名 DeepSeek。', 'https://runxinxu.github.io/' ],
      student: [ '刘子君 · Zijun Liu', '该论文的 2025 年同期报告简介确认其为清华计算机系博士一年级学生，导师为刘洋，并列 DeepSeek 实习经历。', 'https://hub.baai.ac.cn/view/45080' ],
      title: 'Inference-Time Scaling for Generalist Reward Modeling',
      short: 'DeepSeek-GRM',
      date: '2025-04',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2504.02495v3',
      evidence: 'PDF 首页在第一作者刘子君名下标注清华和 DeepSeek 双署名，并用匕首脚注明确实习。同期论文报告确认其博士学籍与在 DeepSeek 的实习经历。',
      advising: [ '校内导师', '刘子君 的教育经历明确列 刘洋 为当时的校内导师。', 'https://hub.baai.ac.cn/view/45080' ]
    },
    {
      id: 'her',
      company: 'MiniMax',
      team: 'MiniMax-M2-her · Talkie／星野角色扮演',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '肖仰华 · Yanghua Xiao', '复旦大学计算机科学技术学院教授。', 'https://cgaig.fudan.edu.cn/ba/82/c54664a768642/page.htm' ],
      employee: [ '赵鹏宇 · Pengyu Zhao', '2023 年 8 月加入 MiniMax，2025 年起为执行董事和大模型研发负责人。', 'https://ir.minimax.cn/en/corporate-information/management' ],
      student: [ '陈艾利 · Aili Chen', '2024 年起在复旦读博，2025 年 1 月起在 MiniMax 科研实习。', 'https://sheep333c.github.io/' ],
      title: 'HER: Human-like Reasoning and Reinforcement Learning for LLM Role-playing',
      short: 'HER',
      date: '2026-07',
      venue: 'Findings of ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-acl.1283.pdf',
      extra: [
        [ '论文预印本', 'https://arxiv.org/html/2601.21459v4' ],
        [ 'MiniMax 对 Talkie／星野角色扮演项目的说明', 'https://www.minimax.io/blog/minimax-m2-her' ]
      ],
      evidence: 'Aili Chen 在该论文同时署名复旦和 MiniMax，个人履历确认此时在读并在 MiniMax 做研究。肖仰华和赵鹏宇均在作者表中。',
      advising: [ '校内导师', '陈艾利 的教育经历明确列 肖仰华 为当时的校内导师。', 'https://sheep333c.github.io/' ]
    },
    {
      id: 'rporec',
      company: '快手',
      team: '推荐算法',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ 'Xiangyu Zhao', '香港城市大学数据科学系教师，为 Jingtong Gao 博士导师。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ],
      employee: [ '蔡庆芃 · Qingpeng Cai', '快手高级总监，论文共同通讯作者。', 'https://qingpengcai.github.io/' ],
      student: [ 'Jingtong Gao', '香港城市大学数据科学博士生，2024 年 8 月起在快手科研实习。', 'https://gaojingtong.github.io/' ],
      title: 'Reinforced Preference Optimization for Reasoning-Augmented Recommendations',
      short: 'RPORec',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2605.21967',
      evidence: '论文点名 Jingtong Gao 的工作在快手完成；个人履历确认当时的快手实习和香港城市大学在读身份。',
      advising: [ '校内导师', 'Jingtong Gao 的教育经历明确列 Xiangyu Zhao 为当时的校内导师。', 'https://gaojingtong.github.io/' ]
    },
    {
      id: 'higentrans',
      company: '快手',
      team: '电商团队',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ 'Wenqi Fan', '香港理工大学计算机系助理教授。', 'https://www.polyu.edu.hk/comp/people/academic-staff/' ],
      employee: [ '彭江 · Peng Jiang', '快手推荐算法负责人，会议讲者资料列明其推荐业务职责，论文署名快手。', 'https://ml-summit.org/speaker/581?lang=en&uid=c1014' ],
      student: [ 'Zhuohang Jiang', '2024 年 9 月起为香港理工大学博士生，在快手电商团队实习。', 'https://zhuohangjiang.com/' ],
      title: 'HiGenTrans: Hierarchical LLM Knowledge Transfer for Generative Recommendation',
      short: 'HiGenTrans',
      date: '2026-11',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2611.01129',
      evidence: '首页将快手实习脚注直接附在 Zhuohang Jiang 名下。其主页列出博士学籍、两位论文合著导师及快手电商团队实习。',
      advising: [ '校内共同导师', 'Zhuohang Jiang 的教育经历明确列 Wenqi Fan 为当时的校内共同导师。', 'https://zhuohangjiang.com/' ]
    },
    {
      id: 'inftythink',
      company: '美团',
      team: 'LongCat · 基础模型',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '沈永亮 · Yongliang Shen', '浙江大学 REAL Lab 负责人、论文通讯作者及颜聿辰的博士导师。', 'https://zjureal.com/people' ],
      employee: [ '张梦迪 · Mengdi Zhang', '曾负责美团 LongCat 基础模型团队，论文署名美团。', 'https://www.mengdiz.com/' ],
      student: [ '颜聿辰 · Yuchen Yan', '2022 年 9 月起在浙江大学读博，2023 年 6 月至 2025 年 7 月在美团 LongCat 基础模型团队实习。', 'https://yanyc428.github.io/cv/' ],
      title: 'InftyThink: Breaking the Length Limits of Long-Context Reasoning in Large Language Models',
      short: 'InftyThink',
      date: '2026',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/abs/2503.06692',
      extra: [ [ '实习脚注与 ICLR 会议记录', 'https://zjureal.com/InftyThink/' ] ],
      evidence: '论文作者项目页标注第一作者的美团实习及双署名；其博士导师和美团研究负责人同为合著者。',
      advising: [ '博士导师', '颜聿辰的公开履历具名列沈永亮为其浙大博士导师。', 'https://yanyc428.github.io/cv/' ]
    },
    {
      id: 'audiovisual-diffusion',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '徐旦 · Dan Xu', '香港科技大学计算机科学与工程系教师，论文通讯作者。', 'https://researchportal.hkust.edu.hk/en/persons/dan-xu/' ],
      employee: [ 'Qinglin Lu', '腾讯混元研究人员，学生履历列为混元研究指导者。', 'https://cn.linkedin.com/in/qinglin-lu-b2a85b176' ],
      student: [ 'Fa-Ting Hong', '2021 年 8 月至 2026 年 5 月在港科大读博，2024 年 10 月开始腾讯混元实习。', 'https://harlanhong.github.io/' ],
      title: 'Audio-visual Controlled Video Diffusion with Masked Selective State Spaces Modeling for Natural Talking Head Generation',
      short: 'Audio-visual Controlled Video Diffusion',
      date: '2025-10',
      venue: 'ICCV',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Hong_Audio-visual_Controlled_Video_Diffusion_with_Masked_Selective_State_Spaces_Modeling_ICCV_2025_paper.pdf',
      extra: [ [ '企业实习与论文列表', 'https://harlanhong.github.io/Projects/Resume/FatingHong_CV.pdf' ] ],
      evidence: '论文列明腾讯混元与香港科技大学合著。Fa-Ting Hong 的公开简历和论文首页共同支持企业实习、研究贡献与学籍时间。',
      advising: [ '校内导师', 'Fa-Ting Hong 的教育经历明确列 徐旦 为当时的校内导师。', 'https://harlanhong.github.io/' ]
    },
    {
      id: 'longvideo-r1',
      company: '华为',
      team: '消费者业务集团',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '叶齐祥 · Qixiang Ye', '中国科学院大学教师、论文通讯作者，也是 Jihao Qiu 的博士导师。', 'https://people.ucas.ac.cn/~qxye?language=en' ],
      employee: [ '田奇 · Qi Tian', '华为消费者业务集团首席 AI 科学家。', 'https://www.qitian1987.com/index.html' ],
      student: [ '邱纪豪 · Jihao Qiu', '中国科学院大学博士生，公开主页列明导师与该项成果。', 'https://qiujihao19.github.io/' ],
      title: 'LongVideo-R1: Smart Navigation for Low-cost Long Video Understanding',
      short: 'LongVideo-R1',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_LongVideo-R1_Smart_Navigation_for_Low-cost_Long_Video_Understanding_CVPR_2026_paper.pdf',
      evidence: 'CVPR 原文以星号关联第一作者及华为实习。学生博士身份、校内导师和华为通讯作者的岗位均有公开来源。',
      advising: [ '校内导师', '邱纪豪 的教育经历明确列 叶齐祥 为当时的校内导师。', 'https://qiujihao19.github.io/' ]
    },
    {
      id: 'pink',
      company: '蚂蚁集团',
      team: '多模态研究',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ 'Shiliang Zhang', '北京大学计算机学科教师、Shiyu Xuan 的博士导师。', 'https://eecs.pku.edu.cn/xxkxjsxy/info/1481/9873.htm' ],
      employee: [ 'Ming Yang', '蚂蚁集团多模态认知部门负责人，论文以蚂蚁集团署名并使用企业邮箱。', 'https://www.researchgate.net/profile/Ming-Yang-28' ],
      student: [ 'Shiyu Xuan', '2020 年 9 月起在北大读博，研究工作于在读时的蚂蚁实习期间完成。', 'https://sy-xuan.github.io/' ],
      title: 'Pink: Unveiling the Power of Referential Comprehension for Multi-modal LLMs',
      short: 'Pink',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Xuan_Pink_Unveiling_the_Power_of_Referential_Comprehension_for_Multi-modal_LLMs_CVPR_2024_paper.pdf',
      evidence: '首页脚注指明第一作者在蚂蚁集团实习期间完成工作。作者的北大学生域署名与个人主页的入学和指导记录吻合。',
      advising: [ '校内导师', 'Shiyu Xuan 的教育经历明确列 Shiliang Zhang 为当时的校内导师。', 'https://sy-xuan.github.io/' ],
      extra: [ [ '企业任职及同期研究', 'https://www.linkedin.com/in/ming-yang-29ba294' ] ]
    },
    {
      id: 'dreamcraft3d',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 视觉生成',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '刘烨斌 · Yebin Liu', '清华大学自动化系教授，孙景翔的博士导师及论文通讯作者。', 'https://www.au.tsinghua.edu.cn/en/info/1096/3380.htm' ],
      employee: [ 'Zhenda Xie', 'DeepSeek 研究员；会议稿列为 DeepSeek 作者。', 'https://github.com/zdaxie' ],
      student: [ '孙景翔 · Jingxiang Sun', '在清华攻读博士期间于 DeepSeek 进行学生科研，其个人主页列明主导 DreamCraft3D。', 'https://mrtornado24.github.io/' ],
      title: 'DreamCraft3D: Hierarchical 3D Generation with Bootstrapped Diffusion Prior',
      short: 'DreamCraft3D',
      date: '2024-05',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2024/file/3170de57bc1899315b97712043d8bb22-Paper-Conference.pdf',
      extra: [
        [ 'DeepSeek 项目仓库', 'https://github.com/deepseek-ai/DreamCraft3D' ],
        [ '企业作者任职起始', 'https://lacuna.tiptreesystems.com/author/zhenda-xie' ],
        [ '公开预印本及作者表', 'https://arxiv.org/abs/2310.16818' ]
      ],
      evidence: '第一作者的脚注说明部分工作在 DeepSeek 实习期间完成。其主页给出博士导师、实习与项目经历；企业仓库确认全部论文作者。',
      advising: [ '校内导师', '孙景翔 的教育经历明确列 刘烨斌 为当时的校内导师。', 'https://mrtornado24.github.io/' ]
    },
    {
      id: 'megascale-omni',
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '陈全 · Quan Chen', '上海交通大学计算机学院教授，Chunyu Xue 的博士导师，同篇通讯作者。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/chenquan.html' ],
      employee: [ 'Ningxin Zheng', '毕业后曾就职微软亚洲研究院，2023 年加入字节 Seed 从事训练系统研发。', 'https://zheng-ningxin.github.io/' ],
      student: [ 'Chunyu Xue', '上交大 EPCC 博士生，曾在字节 Seed 训练基础设施团队实习。', 'https://github.com/DicardoX/DicardoX' ],
      title: 'MegaScale-Omni: A Hyper-Scale, Workload-Resilient System for MultiModal LLM Training in Production',
      short: 'MegaScale-Omni',
      date: '2026-04',
      venue: 'EuroSys',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2605.08962',
      extra: [ [ '正式会议版', 'https://doi.org/10.1145/3767295.3803587' ] ],
      evidence: '第一作者主页将该工作列为博士阶段成果并列出字节 Seed 训练基础设施实习。原文列校内导师为通讯作者，研究为字节 Seed 多模态模型训练系统，Seed 工程研究员同篇署名。',
      advising: [ '校内导师', 'Chunyu Xue 的教育经历明确列 陈全 为当时的校内导师。', 'https://github.com/DicardoX/DicardoX' ]
    },
    {
      id: 'grpo-guard',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '梁小丹 · Xiaodan Liang', '中山大学教员，王晶的博士导师及论文通讯作者。', 'https://cse.sysu.edu.cn/hcp/cat/65' ],
      employee: [ 'Jiajun Liang', '个人主页列明 2024 至 2026 年在快手可灵从事多模态视频生成；论文项目负责人。', 'https://jiajunvision.github.io/' ],
      student: [ '王晶 · Jing Wang', '2024 年 9 月起在中山大学攻读博士，2025 年 4 月至 2026 年 4 月在快手可灵实习。', 'https://jingw193.github.io/wangjing/' ],
      title: 'GRPO-Guard: Mitigating Implicit Over-Optimization in Flow Matching via Regulated Clipping',
      short: 'GRPO-Guard',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_GRPO-Guard_Mitigating_Implicit_Over-Optimization_in_Flow_Matching_via_Regulated_Clipping_CVPR_2026_paper.pdf',
      evidence: '原文的具名实习脚注和快手可灵双署名均对应第一作者。王晶主页列出实习时间及企业导师 Jiajun Liang，与论文标注的项目负责人一致。',
      advising: [ '校内导师', '王晶 的教育经历明确列 梁小丹 为当时的校内导师。', 'https://jingw193.github.io/wangjing/' ]
    },
    {
      id: 'tempact',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '梁小丹 · Xiaodan Liang', '中山大学教员，王晶的博士导师及论文通讯作者。', 'https://cse.sysu.edu.cn/hcp/cat/65' ],
      employee: [ '庞天宇 · Tianyu Pang', '腾讯混元多模态强化学习负责人，同篇署名混元。', 'https://p2333.github.io/' ],
      student: [ '王晶 · Jing Wang', '中山大学博士生，2026 年 5 月开始在腾讯混元进行视频生成和强化学习实习，庞天宇指导。', 'https://jingw193.github.io/wangjing/' ],
      title: 'TempAct: Advancing Temporal Plausibility in Autoregressive Video Generation via Planner-Executor RL',
      short: 'TempAct',
      date: '2026-06-26',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2606.28016',
      evidence: '第一作者王晶双署中山大学和腾讯混元，个人主页写明同期混元科研实习和企业导师。论文共同通讯作者梁小丹和庞天宇分别为其校内导师与企业实习导师。',
      extra: [],
      advising: [ '校内导师', '王晶 的教育经历明确列 梁小丹 为当时的校内导师。', 'https://jingw193.github.io/wangjing/' ]
    },
    {
      id: 'protocol-rubrics',
      company: '字节跳动',
      team: 'Data · 智能体研究',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '方全 · Quan Fang', '北京邮电大学人工智能学院特聘研究员，刘茂琦的校内导师，论文通讯作者。', 'https://quanfang.github.io/index.html' ],
      employee: [ 'Junwei He', '字节跳动大模型研究员，同篇项目负责人。', 'https://jweihe.github.io/' ],
      student: [ '刘茂琦 · Maoqi Liu', '北邮研究生，2026 年 6 月起在字节 Data 实习，企业导师为 Junwei He。', 'https://estrellajer.github.io/' ],
      title: 'Scoring Higher, Answering Worse: Mitigating Reward Hacking in Rubric-Based RL via Protocol-Level Rubrics',
      short: 'Protocol-Level Rubrics',
      date: '2026-09',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2609.38847',
      evidence: '原文标注该工作在字节实习期间完成。第一作者公开履历明确北邮学籍和字节 Data 实习，并点名同篇作者方全和 Junwei He 分别担任校内及企业导师。',
      advising: [ '校内导师', '刘茂琦在个人主页分别列方全为北邮导师、何俊伟为企业导师。', 'https://estrellajer.github.io/' ]
    },
    {
      id: 'generalized-opd',
      company: '腾讯',
      team: 'LLM 部门',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '林衍凯 · Yankai Lin', '中国人民大学高瓴人工智能学院教师，Wenkai Yang 的博士导师，论文通讯作者。', 'https://ai.ruc.edu.cn/GSAI_HOME/FACULTYn/YankaiLin/index.htm' ],
      employee: [ '谢若冰 · Ruobing Xie', '腾讯混元高级研究员，同篇署名腾讯 LLM 部门。', 'https://ruobingxie.github.io/' ],
      student: [ 'Wenkai Yang', '2023 年 9 月起为人大博士生，2025 年 7 月至 2026 年 3 月在腾讯实习。', 'https://keven980716.github.io/' ],
      title: 'Learning beyond Teacher: Generalized On-Policy Distillation with Reward Extrapolation',
      short: 'Generalized On-Policy Distillation',
      date: '2026-02',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2602.12125',
      evidence: '原文第一作者名下标注腾讯实习，公开作者资料列出其在读、校内导师及实习起止时间。腾讯正式岗位由同篇合作者的个人主页核验。',
      advising: [ '校内导师', 'Wenkai Yang 的教育经历明确列 林衍凯 为当时的校内导师。', 'https://keven980716.github.io/' ]
    },
    {
      id: 'accent-normalization-cuhksz',
      company: '腾讯',
      team: 'Ethereal Audio Lab',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '李海洲 · Haizhou Li', '研究期间任香港中文大学（深圳）数据科学学院讲席教授，以港中大（深圳）署名。', 'https://sds.cuhk.edu.cn/en/article/562' ],
      employee: [ 'Yannan Wang', '腾讯 Ethereal Audio Lab 研究人员，企业官网报道其团队工作；同篇署名该实验室。', 'https://www.tencent.com/en-us/articles/2201176.html' ],
      student: [ 'Qibing Bai', '2023 年起在港中大（深圳）读博，2024 年 6 月至 2026 年 7 月于腾讯 Ethereal Audio Lab 实习，课题为口音转换等。', 'https://p1ping.github.io/' ],
      title: 'Accent Normalization Using Self-Supervised Discrete Tokens with Non-Parallel Data',
      short: 'Accent Normalization',
      date: '2025-08',
      venue: 'Interspeech',
      area: '语音与音频',
      paper: 'https://www.isca-archive.org/interspeech_2025/bai25_interspeech.pdf',
      evidence: '会议论文第一作者 Qibing Bai 署香港中文大学（深圳）及腾讯。个人履历列出该论文、校内博士导师李海洲，以及 2024 年 6 月至 2026 年 7 月在腾讯进行的口音转换科研实习。两位合作者李海洲和 Yannan Wang 均在原文作者表中。',
      extra: [ [ '通讯作者学生名录', 'https://shuaiwang-nju.github.io/' ] ],
      advising: [ '博士导师', 'Qibing Bai 的个人主页列李海洲为香港中文大学（深圳）的博士导师。', 'https://p1ping.github.io/' ]
    },
    {
      id: 'accent-normalization-nju',
      company: '腾讯',
      team: 'Ethereal Audio Lab',
      school: '南京大学',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ 'Shuai Wang', '南京大学智能科学与技术学院教师，以该校为第一署名的通讯作者；课题组名录确认 Qibing Bai 的学生及企业实习身份。', 'https://shuaiwang-nju.github.io/' ],
      employee: [ 'Yannan Wang', '腾讯 Ethereal Audio Lab 研究人员，企业官网报道其团队工作；同篇署名该实验室。', 'https://www.tencent.com/en-us/articles/2201176.html' ],
      student: [ 'Qibing Bai', '2023 年起在港中大（深圳）读博，2024 年 6 月至 2026 年 7 月于腾讯 Ethereal Audio Lab 实习，课题为口音转换等。', 'https://p1ping.github.io/' ],
      title: 'Accent Normalization Using Self-Supervised Discrete Tokens with Non-Parallel Data',
      short: 'Accent Normalization',
      date: '2025-08',
      venue: 'Interspeech',
      area: '语音与音频',
      paper: 'https://www.isca-archive.org/interspeech_2025/bai25_interspeech.pdf',
      evidence: '会议论文第一作者 Qibing Bai 同时署名港中大（深圳）和腾讯语音实验室。个人履历给出口音转换实习课题和日期，通讯作者的学生名录独立确认该实习。',
      extra: [ [ '通讯作者学生名录', 'https://shuaiwang-nju.github.io/' ] ],
      advising: [ '跨校共同导师', 'Qibing Bai 的在读履历明确列 Shuai Wang 为同期跨校共同导师。', 'https://p1ping.github.io/' ]
    },
    {
      id: 'vision-dialect',
      company: '字节跳动',
      team: 'Seed · 视频生成',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Xiangyu Yue', '香港中文大学信息工程系助理教授，Jiaming Han 的博士导师，论文通讯作者。', 'https://xyue.io/' ],
      employee: [ 'Lu Jiang', '2024 年 2 月至 2025 年 6 月任字节跳动／TikTok 研究总监；论文通讯作者。', 'https://www.lujiang.info/CV.pdf' ],
      student: [ 'Jiaming Han', '2023 年 9 月起在香港中文大学攻读博士，2024 年 6 月至 2025 年 9 月在字节 Seed 视频生成组实习。', 'https://csuhan.com/attaches/CV_Jiaming-Han.pdf' ],
      title: 'Vision as a Dialect: Unifying Visual Understanding and Generation via Text-Aligned Representations',
      short: 'Vision as a Dialect',
      date: '2025-06',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2506.18898',
      extra: [ [ '字节 Seed 官方模型页', 'https://huggingface.co/ByteDance-Seed/Tar-TA-Tok' ] ],
      evidence: '在读博士简历将该论文列为成果，实习主题和发表时段与字节 Seed 官方模型项目吻合。原文两位通讯作者分别为其高校导师及字节实习导师。',
      advising: [ '校内导师', 'Jiaming Han 的教育经历明确列 Xiangyu Yue 为当时的校内导师。', 'https://csuhan.com/attaches/CV_Jiaming-Han.pdf' ]
    },
    {
      id: 'long-context-tuning',
      company: '字节跳动',
      team: 'Seed · 视频生成',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [
        '林达华 · Dahua Lin',
        '香港中文大学信息工程系教员、Yuwei Guo 的博士导师，原文署港中大。',
        'https://stip.hk/en/%E7%8D%B2%E7%8D%8E%E8%80%85%E5%90%8D%E5%96%AE/laureate-in-artificial-intelligence-and-robotics/dahua-lin'
      ],
      employee: [ 'Ceyuan Yang', '博士毕业后任字节跳动研究科学家，同篇署字节 Seed。', 'https://ceyuan.me/' ],
      student: [ 'Yuwei Guo', '香港中文大学多媒体实验室在读博士，个人主页列明 2025 年字节 Seed 视频生成实习。', 'https://guoyww.github.io/' ],
      title: 'Long Context Tuning for Video Generation',
      short: 'Long Context Tuning',
      date: '2025-03',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2503.10589',
      extra: [ [ '作者项目页', 'https://guoyww.github.io/projects/long-context-video/' ] ],
      evidence: '第一作者兼署港中大和字节 Seed。个人主页给出博士导师、同年字节视频生成实习及该论文；高校导师与字节研究员同篇合著。',
      advising: [ '校内导师', 'Yuwei Guo 的教育经历明确列 林达华 为当时的校内导师。', 'https://guoyww.github.io/' ]
    },
    {
      id: 'svgfaith',
      company: '腾讯',
      team: '优图实验室',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '于茜 · Qian Yu', '2020 年起在北京航空航天大学软件学院任教，Guotao Liang 的硕士导师和同篇作者。', 'https://yuqian1023.github.io/' ],
      employee: [ '孙星 · Xing Sun', '腾讯优图实验室首席研究员兼团队经理，同篇署名腾讯优图。', 'https://www.sunxing.org/' ],
      student: [ 'Guotao Liang', '2024 年 9 月起为北航硕士生，2026 年 6 月起在腾讯优图实习，研究涉及文本生成 SVG 的忠实度评估。', 'https://yukinonooo.github.io/' ],
      title: 'SVGFaith: A Two-Layer Meta-Evaluation of Faithfulness Metrics for Text-to-SVG Generation',
      short: 'SVGFaith',
      date: '2026-11',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2611.06048',
      evidence: '第一作者同时署名腾讯优图与视觉计算课题组。本人主页明确北航学籍、于茜的指导关系与优图实习内容。于茜同篇署课题组，该校任职及与该生同期合著可在主页复核。',
      advising: [ '校内导师', 'Guotao Liang 的教育经历明确列 于茜 为当时的校内导师。', 'https://yukinonooo.github.io/' ]
    },
    {
      id: 'diversegrpo',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '李秀 · Xiu Li', '清华大学深圳国际研究生院教员，刘恒霖的硕士导师和论文共同通讯作者。', 'https://www.sigs.tsinghua.edu.cn/lx/list.psp' ],
      employee: [
        'Huijuan Huang',
        '快手研究人员，AAAI 2026 程序委员会名单列其任职机构为快手，本篇为可灵团队项目负责人和通讯作者。',
        'https://aaai.org/conference/aaai/aaai-26/2026-program-committee/'
      ],
      student: [ '刘恒霖 · Henglin Liu', '清华大学硕士生，2025 年 5 月开始在快手可灵进行科研实习。', 'https://henglin-liu.github.io/HenglinLiu/' ],
      title: 'DiverseGRPO: Mitigating Mode Collapse in Image Generation via Diversity-Aware GRPO',
      short: 'DiverseGRPO',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_DiverseGRPO_Mitigating_Mode_Collapse_in_Image_Generation_via_Diversity-Aware_GRPO_CVPR_2026_paper.pdf',
      evidence: '原文在第一作者刘恒霖名下标注工作于快手可灵实习期间完成；本人主页给出硕士身份、校内导师与快手实习起始。快手合作者 Huijuan Huang 标为项目负责人。',
      advising: [ '校内共同导师', '刘恒霖 的教育经历明确列 李秀 为当时的校内共同导师。', 'https://henglin-liu.github.io/HenglinLiu/' ],
      extra: [ [ '早期快手署名与企业邮箱', 'https://cdn.aaai.org/ojs/19956/19956-13-23969-1-2-20220628.pdf' ] ]
    },
    {
      id: 'higher-dimensional-rope',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Yu Cheng', '香港中文大学计算机科学与工程系教员、论文通讯作者。', 'https://www.cse.cuhk.edu.hk/people/faculty/yu-cheng/' ],
      employee: [ '谢若冰 · Ruobing Xie', '腾讯混元高级研究员、论文通讯作者及学生实习导师。', 'https://ruobingxie.github.io/' ],
      student: [ 'Yixing Li', '2025 年 1 月起在香港中文大学读博，2024 年 10 月起在腾讯研究实习，由谢若冰指导。', 'https://yixing-li.github.io/index.html' ],
      title: 'Higher-Dimensional Rotary Position Embedding',
      short: 'Higher-Dimensional RoPE',
      date: '2026-08-30',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2608.29715v1',
      evidence: '原文首页将腾讯实习脚注直接标于第一作者。第一作者的主页给出其港中大学籍及腾讯指导经历，两位通讯作者分别为港中大教员和腾讯混元研究员。',
      advising: [ '校内导师', 'Yixing Li 的教育经历明确列 Yu Cheng 为当时的校内导师。', 'https://yixing-li.github.io/index.html' ]
    },
    {
      id: 'learning-trial-error',
      company: '腾讯',
      team: 'LLM 部门',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '吴云芳 · Yunfang Wu', '北京大学计算机学院教授、Chenming Tang 的校内导师和论文通讯作者。', 'https://cs.pku.edu.cn/info/1230/2024.htm' ],
      employee: [
        'Weijie Liu',
        '腾讯高级研究员，同篇署名腾讯 LLM 部门并任企业通讯作者。',
        'https://lacuna.tiptreesystems.com/author/weijie-liu-0002/aut_8a24f0ed2a224ea58769ecb6bde14d8f'
      ],
      student: [ 'Chenming Tang', '北京大学计算机硕士生，2025 年 7 月至 2026 年 5 月在腾讯混元实习。', 'https://jamydon.online/' ],
      title: 'Do Not Step Into the Same River Twice: Learning to Reason from Trial and Error',
      short: 'Learning to Reason from Trial and Error',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.363.pdf',
      extra: [ [ '企业作者指导另一名实习生的同期记录', 'https://keven980716.github.io/' ] ],
      evidence: 'ACL 原文在第一作者名下标注在腾讯实习期间完成工作。学生主页明确北大硕士学籍、导师与腾讯实习日期，论文通讯作者分别为高校导师与腾讯合作者。',
      advising: [ '校内导师', 'Chenming Tang 的教育经历明确列 吴云芳 为当时的校内导师。', 'https://jamydon.online/' ]
    },
    {
      id: 'flexpart',
      company: '腾讯',
      team: '混元 3D 生成团队',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '高盛华 · Shenghua Gao', '香港大学计算与数据科学学院副教授、论文通讯作者，也是 Yiqun Zhao 的博士导师。', 'https://datascience.hku.hk/people/shenghua-gao/' ],
      employee: [ 'Xintong Han', '腾讯混元 3D 生成团队研究员；原文以腾讯混元署名。', 'https://xthan.github.io/index.html' ],
      student: [ 'Yiqun Zhao', '2024 年起在香港大学读博；原文同时署名港大及腾讯混元并标注实习。', 'https://www.alphaxiv.org/@yiqun-zhao' ],
      title: 'FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity',
      short: 'FlexPart',
      date: '2026-10-16',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2610.23659v1',
      evidence: 'PDF 首页将腾讯混元的科研实习脚注附于第一作者 Yiqun Zhao，并列出其港大学籍署名、高校导师及腾讯混元 3D 团队作者。',
      advising: [ '课题组指导', '高盛华的课题组名录将赵逸群列为学生，其公开履历记录港大博士阶段由高盛华指导。', 'https://svip-lab.github.io/team.html' ]
    },
    {
      id: 'terminal-universe',
      company: '阿里巴巴',
      team: 'Qwen 团队',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '杨余久 · Yujiu Yang', '清华大学深圳国际研究生院教授，论文通讯作者，也是 Jie Wu 的清华导师。', 'https://openfiesta.sigs.tsinghua.edu.cn/pi/3/24' ],
      employee: [ '刘大一恒 · Dayiheng Liu', '阿里算法专家，论文通讯作者；学生主页将他列为企业侧导师。', 'https://liudayiheng.github.io/' ],
      student: [ 'Jie Wu', '清华硕士生，个人主页列明清华导师、Qwen 实习导师以及该项研发。', 'https://jiewu02.github.io/' ],
      title: 'Terminal-Universe: Turning Agent Trajectories into Scalable Terminal Environments',
      short: 'Terminal-Universe',
      date: '2026-09',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2609.04148',
      evidence: '第一作者双署 Qwen 和清华，原文脚注明确研究在 Qwen 实习期间完成。本人主页点名本论文项目、校内导师和两位企业导师。',
      advising: [ '校内导师', 'Jie Wu 的教育经历明确列 杨余久 为当时的校内导师。', 'https://jiewu02.github.io/' ]
    },
    {
      id: 'rectified-diffusion-guidance',
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '刘永进 · Yong-Jin Liu', '清华大学计算机系教授、论文通讯作者及 Mengfei Xia 的博士导师。', 'https://cg.cs.tsinghua.edu.cn/people/~Yongjin/Yongjin.htm' ],
      employee: [ '沈渝钧 · Yujun Shen', '个人简历列明在蚂蚁集团的研究岗位；论文以蚂蚁署名，担任通讯作者。', 'https://shenyujun.github.io/' ],
      student: [ 'Mengfei Xia', '2020 年 9 月至 2025 年 6 月就读清华博士，2023 年 9 月至 2025 年 7 月在蚂蚁集团实习。', 'https://thuxmf.github.io/' ],
      title: 'Rectified Diffusion Guidance for Conditional Generation',
      short: 'Rectified Diffusion Guidance',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Xia_Rectified_Diffusion_Guidance_for_Conditional_Generation_CVPR_2025_paper.pdf',
      evidence: '首页实习脚注直接附于双署名第一作者；个人主页明确蚂蚁实习、清华学籍以及同期指导关系。',
      advising: [ '校内导师', 'Mengfei Xia 的教育经历明确列 刘永进 为当时的校内导师。', 'https://thuxmf.github.io/' ]
    },
    {
      id: 'llada-ant-ruc',
      company: '蚂蚁集团',
      team: '扩散语言模型研究',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '李崇轩 · Chongxuan Li', '中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。', 'https://zhenxuan00.github.io/' ],
      employee: [ '张晓露 · Xiaolu Zhang', '蚂蚁集团资深算法工程师，论文将其列为项目负责人。', 'https://newx.sg/scholar/cAz9PToAAAAJ' ],
      student: [ '聂燊 · Shen Nie', '2022 年起在中国人民大学高瓴人工智能学院攻读博士，由李崇轩指导。', 'https://nieshenx.github.io/' ],
      title: 'Large Language Diffusion Models',
      short: 'LLaDA',
      date: '2025-02',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2502.09992',
      extra: [
        [ '官方项目页', 'https://ml-gsai.github.io/LLaDA-demo/' ],
        [ '企业任职交叉来源', 'https://theorg.com/org/ant-group/teams/algorithm-development' ]
      ],
      evidence: '原文在首位作者姓名后直接标注蚂蚁集团实习。个人主页给出人大博士期间与校内导师，论文明确标注企业侧项目负责人。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 李崇轩 对 聂燊 的指导关系。', 'https://zhenxuan00.github.io/' ]
    },
    {
      id: 'xiaohongshu-adamuon',
      company: '小红书',
      team: '大模型研究',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '沈为 · Wei Shen', '上海交通大学人工智能学院教授，Chongjie Si 的博士导师。', 'https://shenwei1231.github.io/team/' ],
      employee: [
        '张德兵 · Debing Zhang',
        '小红书大模型团队负责人，为 Chongjie Si 的企业实习导师。',
        'https://pandaily.com/xiaohongshu-starts-exploring-large-language-model'
      ],
      student: [ 'Chongjie Si', '2022 年 9 月起在上交大攻读博士，2025 年 6 至 12 月在小红书 REDstar 进行预训练科研实习。', 'https://chongjiesi.site/uploads/chongjie-cv.pdf' ],
      title: 'AdaMuon: Adaptive Muon Optimizer',
      short: 'AdaMuon',
      date: '2025-07',
      venue: 'arXiv 预印本',
      area: '训练优化',
      paper: 'https://arxiv.org/html/2507.11005',
      evidence: '论文署名 Chongjie Si、张德兵和沈为。第一作者简历将优化器研发列于小红书实习项，时间覆盖 2025 年 7 月预印本公开；两位合著者分别是企业与校内导师。',
      advising: [ '校内导师', 'Chongjie Si 的教育经历明确列 沈为 为当时的校内导师。', 'https://chongjiesi.site/uploads/chongjie-cv.pdf' ]
    },
    {
      id: 'baidu-mill',
      company: '百度',
      team: 'Search Science Team',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ 'Xiangyu Zhao', '香港城市大学数据科学教师、论文通讯作者及贾鹏越博士导师。', 'https://zhaoxyai.github.io/' ],
      employee: [ 'Yiding Liu', '百度搜索高级研发工程师，百度团队名录给出岗位。', 'https://searchscience.baidu.com/team.html' ],
      student: [ '贾鹏越 · Pengyue Jia', '2023 年 1 月起在香港城市大学读博，同年 6 月起在百度 Search Science Team 实习。', 'https://jia-py.github.io/' ],
      title: 'MILL: Mutual Verification with Large Language Models for Zero-Shot Query Expansion',
      short: 'MILL',
      date: '2024-06',
      venue: 'NAACL',
      area: '信息检索',
      paper: 'https://aclanthology.org/2024.naacl-long.138.pdf',
      extra: [ [ '同期预印本', 'https://arxiv.org/abs/2310.19056' ], [ '作者报告及百度署名', 'https://www.alphaxiv.org/@pengyue-jia' ] ],
      evidence: '首版于 2023 年 10 月公开，处于第一作者公开履历给出的博士学习及百度搜索科研实习重叠区间。论文为其检索研究，校内导师和百度搜索正式员工均同篇合著。',
      advising: [ '校内导师', '贾鹏越 的教育经历明确列 Xiangyu Zhao 为当时的校内导师。', 'https://jia-py.github.io/' ]
    },
    {
      id: 'native-sparse-attention',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 稀疏注意力',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '张铭 · Ming Zhang', '北京大学计算机学院教授、同篇通讯作者，袁境阳和罗钧宇的导师。', 'https://cs.pku.edu.cn/info/1263/3901.htm' ],
      employee: [ '梁文锋 · Wenfeng Liang', 'DeepSeek 创始人，同篇企业通讯作者。', 'https://www.ehangzhou.gov.cn/2025-01/22/c_292410.htm' ],
      student: [ '袁境阳 · Jingyang Yuan', '北大硕转博学生。北大同期公告确认其在 DeepSeek 实习并参与模型研发。', 'https://cs.pku.edu.cn/info/1263/3901.htm' ],
      title: 'Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention',
      short: 'Native Sparse Attention',
      date: '2025-07',
      venue: 'ACL',
      area: 'AI 系统',
      paper: 'https://aclanthology.org/2025.acl-long.1126/',
      extra: [ [ '论文首页', 'https://aclanthology.org/2025.acl-long.1126.pdf' ] ],
      evidence: '正式版列袁境阳双署名北大和 DeepSeek，张铭与梁文锋为通讯作者。北大获奖公告明确该论文是校企合作，确认袁境阳的学籍、企业实习和校内导师。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 张铭 对 袁境阳 的指导关系。', 'https://cs.pku.edu.cn/info/1263/3901.htm' ]
    },
    {
      id: 'zhipu-motionbench',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM-V',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '唐杰 · Jie Tang', '清华计算机系教授、洪文毅的博士导师及论文通讯作者。', 'https://www.cs.tsinghua.edu.cn/csen/info/1303/4319.htm' ],
      employee: [ '黄世宇 · Shiyu Huang', '曾任智谱首席研究员；CVPR 原文列智谱署名。', 'https://huangshiyu13.github.io/' ],
      student: [ '洪文毅 · Wenyi Hong', '2022 年起为清华计算机系博士生，原文脚注将其工作与在智谱实习关联。', 'https://wenyihong.github.io/' ],
      title: 'MotionBench: Benchmarking and Improving Fine-grained Video Motion Understanding for Vision Language Models',
      short: 'MotionBench',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2501.02955v2',
      extra: [
        [
          'CVPR 附录',
          'https://openaccess.thecvf.com/content/CVPR2025/supplemental/Hong_MotionBench_Benchmarking_and_CVPR_2025_supplemental.pdf'
        ]
      ],
      evidence: '首页脚注明示洪文毅与朱奕洋在智谱实习期间完成工作。洪文毅个人主页确认入学时间、指导教师并列出该成果。黄世宇同篇署名智谱。',
      advising: [ '校内导师', '洪文毅 的教育经历明确列 唐杰 为当时的校内导师。', 'https://wenyihong.github.io/' ]
    },
    {
      id: 'moonshot-tcsexam-yuan',
      company: '月之暗面（Kimi）',
      team: 'Moonshot AI',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '袁洋 · Yang Yuan', '清华交叉信息研究院教师、罗逸凡博士导师，同篇署清华。', 'https://luobots.github.io/' ],
      employee: [ '杨植麟 · Zhilin Yang', '月之暗面联合创始人兼首席执行官，同篇署月之暗面。', 'https://apnews.com/article/0d8a5e268deb11a673f4d444fc597cc5' ],
      student: [ '罗逸凡 · Yifan Luo', '2024 年 9 月起攻读清华博士，原文双署清华及月之暗面，并使用清华研究生邮箱。', 'https://luobots.github.io/files/CV.pdf' ],
      title: 'TCSExam: Evaluating Frontier LLMs on the Full Range of TCS Research',
      short: 'TCSExam',
      date: '2026-11-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2611.07962v1',
      extra: [ [ '月之暗面项目页', 'https://moonshotai.github.io/TCSExam/' ], [ '学生主页与导师', 'https://luobots.github.io/' ] ],
      evidence: '第一作者双署名及校内邮箱、本人学籍简历和月之暗面官方项目页互证其在读期间参与企业项目。月之暗面 CEO 与清华教授同篇合著。此条依据公开双署名和项目归属核验。',
      advising: [ '校内导师', '罗逸凡 的教育经历明确列 袁洋 为当时的校内导师。', 'https://luobots.github.io/files/CV.pdf' ]
    },
    {
      id: 'moonshot-kimi-dev',
      company: '月之暗面（Kimi）',
      team: 'Kimi 编程智能体',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '高阳 · Yang Gao', '清华交叉信息研究院教员，王圣杰的博士导师，同篇署清华。', 'https://iiis.tsinghua.edu.cn/en/People/Faculty/GaoYang.htm' ],
      employee: [ '杨植麟 · Zhilin Yang', '月之暗面联合创始人兼首席执行官，列为同篇作者。', 'https://apnews.com/article/0d8a5e268deb11a673f4d444fc597cc5' ],
      student: [ '王圣杰 · Shengjie Wang', '清华交叉信息研究院在读博士，个人主页确认在月之暗面 Kimi 编程智能体团队参与同一论文。', 'https://shengjiewang-jason.github.io/index.html' ],
      title: 'Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents',
      short: 'Kimi-Dev',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf/56a196a3a0ca98fa4aa64ce3ef7e7c05f19bde18.pdf',
      extra: [
        [ 'arXiv 作者稿', 'https://arxiv.org/html/2509.23045v3' ],
        [ '企业代码仓库', 'https://github.com/MoonshotAI/Kimi-Dev' ],
        [ '公开预印本及作者表', 'https://arxiv.org/abs/2509.23045' ]
      ],
      evidence: '王圣杰的履历确认清华在读、校内导师及本人在月之暗面编程智能体团队的具体工作。原文与公司项目仓库确认其为共同第一作者。',
      advising: [ '校内导师', '王圣杰 的教育经历明确列 高阳 为当时的校内导师。', 'https://shengjiewang-jason.github.io/index.html' ]
    },
    {
      id: 'zhipu-if-rewardbench',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM 后训练',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '黄民烈 · Minlie Huang', '清华大学计算机系教师，GLM-5 报告列其为学术指导作者。', 'https://hml.coai.cs.tsinghua.edu.cn/hml' ],
      employee: [ 'Cunxiang Wang', '2024 年博士毕业后任智谱评测负责人，报告列为核心贡献者。', 'https://westlakenlp.com/team.html' ],
      student: [ 'Andrew Zhuoer Feng', '2022 年起为清华计算机系博士生，2023 年 8 月起在智谱评测团队科研实习，个人主页确认参与 GLM-5。', 'https://zhuoerfeng.github.io/' ],
      title: 'GLM-5: from Vibe Coding to Agentic Engineering',
      short: 'GLM-5',
      date: '2026-02',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2602.15763',
      extra: [ [ '作者与指导者贡献表', 'https://arxiv.org/html/2602.15763#S9' ] ],
      evidence: 'GLM-5 技术报告列该生为贡献者，Cunxiang Wang 为核心贡献者。学生的个人履历把 GLM-5 明确列为其智谱评测组实习成果，并给出在读和实习时间。',
      advising: [ '博士导师', 'Andrew Zhuoer Feng 的清华博士履历明确列出黄民烈为博士导师。', 'https://zhuoerfeng.github.io/' ]
    },
    {
      id: 'zhipu-if-rewardbench-wang',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM 后训练',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '王宏宁 · Hongning Wang', '清华大学计算机系教师，GLM-5 报告列其为学术指导作者。', 'https://www.cs.tsinghua.edu.cn/info/1122/5712.htm' ],
      employee: [ 'Cunxiang Wang', '2024 年博士毕业后任智谱评测负责人，报告列为核心贡献者。', 'https://westlakenlp.com/team.html' ],
      student: [ 'Andrew Zhuoer Feng', '2022 年起为清华计算机系博士生，2023 年 8 月起在智谱评测团队科研实习，个人主页确认参与 GLM-5。', 'https://zhuoerfeng.github.io/' ],
      title: 'GLM-5: from Vibe Coding to Agentic Engineering',
      short: 'GLM-5',
      date: '2026-02',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2602.15763',
      extra: [ [ '作者与指导者贡献表', 'https://arxiv.org/html/2602.15763#S9' ] ],
      evidence: 'GLM-5 技术报告列该生为贡献者，Cunxiang Wang 为核心贡献者。学生的个人履历把 GLM-5 明确列为其智谱评测组实习成果，并给出在读和实习时间。',
      advising: [ '博士共同导师', 'Andrew Zhuoer Feng 的清华博士履历明确列出王宏宁为博士共同导师。', 'https://zhuoerfeng.github.io/' ]
    },
    {
      id: 'space-ali-nju',
      company: '阿里巴巴',
      team: '阿里国际数字商业集团',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '张利军 · Lijun Zhang', '南京大学人工智能学院教授，论文通讯作者。', 'https://ai.nju.edu.cn/zlj/' ],
      employee: [
        '张凯夫 · Kaifu Zhang',
        '阿里巴巴对外发布资料列为阿里国际数字商业集团副总裁兼 AI 业务负责人，同篇合著。',
        'https://www.alizila.com/podcast/ai-meets-global-commerce-finding-the-right-hammer-for-every-nail/'
      ],
      student: [ '王一博 · Yibo Wang', '实验室履历列明自 2023 年 9 月起在南京大学读博，并列该 NeurIPS 论文。', 'https://www.lamda.nju.edu.cn/wangyb/' ],
      title: 'SPACE: Noise Contrastive Estimation Stabilizes Self-Play Fine-Tuning for Large Language Models',
      short: 'SPACE',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2512.07175',
      extra: [ [ 'NeurIPS 官方会议记录', 'https://neurips.cc/virtual/2025/loc/san-diego/poster/118244' ] ],
      evidence: '原文在第一作者王一博名下标注阿里国际数字商业集团实习，并同时列出南大及企业署名。学籍和企业高管岗位各有独立资料。',
      advising: [ '校内导师', '王一博 的教育经历明确列 张利军 为当时的校内导师。', 'https://www.lamda.nju.edu.cn/wangyb/' ]
    },
    {
      id: 'template-registers-ali-nju',
      company: '阿里巴巴',
      team: 'AI Engine · RTP Compression',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '张绍群 · Shao-Qun Zhang', '南京大学人工智能学院教师、论文通讯作者。', 'https://njusz.nju.edu.cn/bb/79/c52366a637817/page.htm' ],
      employee: [ 'Hanlin Tang', '公开履历列为 2025 至 2026 年的阿里研究员；同篇标注为项目负责人。', 'https://lacuna.tiptreesystems.com/author/hanlin-tang-9n8n' ],
      student: [ 'Maohua Li', '南大 LAMDA 硕士生，列张绍群为学校导师、Hanlin Tang 为阿里实习导师，主页列出此论文。', 'https://met4physics.github.io/' ],
      title: 'Text Template Tokens Are Implicit Semantic Registers in Diffusion Transformers',
      short: 'Text Template Tokens',
      date: '2026-07',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2607.19139',
      extra: [ [ '同组三人前序研究的阿里 RTP 署名', 'https://arxiv.org/html/2605.20708' ] ],
      evidence: 'PDF 首页将阿里实习脚注附于双署名第一作者。学生履历列出同一项目的校内和企业导师，两位导师都在作者栏。',
      advising: [ '校内导师', 'Maohua Li 的教育经历明确列 张绍群 为当时的校内导师。', 'https://met4physics.github.io/' ]
    },
    {
      id: 'jd-rethinking-calibration',
      company: '京东',
      team: '京东零售搜索广告',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '许建峰 · Jianfeng Xu', '2023 年 9 月起为上海交通大学特聘教授，徐虎校内导师及论文通讯作者。', 'https://law.sjtu.edu.cn/flfs/20231125/7796.html' ],
      employee: [ 'Congcong Liu', '京东零售资深算法专家、搜索广告排序模型负责人，见机器学习峰会嘉宾介绍。', 'https://www.ml-summit.org/speaker/1188?lang=en&uid=c1047' ],
      student: [ '徐虎 · Hu Xu', '2024 年起在上交大攻读硕士，2025 年 7 月至 2026 年 3 月在京东从事算法研究实习。', 'https://xuhu0115.github.io/resume.html' ],
      title: 'Rethinking Calibration for High-Sparsity LLM Pruning: From Single Sources to Capability Coverage',
      short: 'Rethinking Calibration',
      date: '2026-06',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2606.03328',
      evidence: '论文首页将在京东实习期间完成的脚注具名附于第一作者，原文给出京东与上交大双署名。第一作者履历确认在读区间和导师，另有京东正式员工同篇。',
      advising: [ '校内导师', '徐虎 的教育经历明确列 许建峰 为当时的校内导师。', 'https://xuhu0115.github.io/resume.html' ]
    },
    {
      id: 'meituan-skill1-anzhang',
      company: '美团',
      team: 'LongCat',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ 'An Zhang', '中国科学技术大学教授，Yaorui Shi 的博士导师与论文通讯作者。', 'https://anzhang314.github.io/index.html' ],
      employee: [ 'Qi Gu', '美团 LongCat 团队研究员，论文企业侧通讯作者。', 'https://www.alphaxiv.org/zh-TW/@qi-gu' ],
      student: [ 'Yaorui Shi', '中科大博士生，在美团 LongCat 研究实习，公开主页列出此论文。', 'https://syr-cn.github.io/' ],
      title: 'Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning',
      short: 'Skill1',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2605.06130',
      evidence: '第一作者兼署中科大和美团，本人主页载明博士在读、导师、在美团 LongCat 实习及本项成果。校企双方通讯作者同篇发表。',
      advising: [ '校内共同导师', 'Yaorui Shi 的教育经历明确列 An Zhang 为当时的校内共同导师。', 'https://syr-cn.github.io/' ]
    },
    {
      id: 'meituan-skill1-xiangwang',
      company: '美团',
      team: 'LongCat',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '王翔 · Xiang Wang', '中科大人工智能与数据科学学院教职人员，Yaorui Shi 的博士导师之一。', 'https://saids.ustc.edu.cn/2022/0321/c36359a549612/page.htm' ],
      employee: [ 'Qi Gu', '美团 LongCat 团队研究员，论文企业侧通讯作者。', 'https://www.alphaxiv.org/zh-TW/@qi-gu' ],
      student: [ 'Yaorui Shi', '中科大博士生，在美团 LongCat 研究实习，公开主页列出此论文。', 'https://syr-cn.github.io/' ],
      title: 'Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning',
      short: 'Skill1',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2605.06130',
      evidence: '第一作者主页列王翔和 An Zhang 为两位博士导师；二人均在论文署名，第一作者兼署中科大和美团。',
      advising: [ '校内共同导师', 'Yaorui Shi 的教育经历明确列 王翔 为当时的校内共同导师。', 'https://syr-cn.github.io/' ]
    },
    {
      id: 'deepseek-aux-loss-free',
      company: 'DeepSeek',
      team: 'DeepSeek-AI',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '孙栩 · Xu Sun', '北京大学长聘副教授，同篇通讯作者和王乐安的博士导师。', 'https://xusun26.github.io/' ],
      employee: [ '高华佐 · Huazuo Gao', '已从北大毕业，2024 年为 DeepSeek 模型架构核心研发人员，同篇署 DeepSeek。', 'https://news.pku.edu.cn/info/2901/815451.htm' ],
      student: [ '王乐安 · Lean Wang', '2023 年起在北大攻读博士，2024 年 1 月开始 DeepSeek 科研实习；主页列出该论文。', 'https://leanwang326.github.io/.github.io/' ],
      title: 'Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts',
      short: '无辅助损失负载均衡',
      date: '2024-08-28',
      venue: 'arXiv 预印本',
      area: 'AI 系统',
      paper: 'https://arxiv.org/pdf/2408.15664v1',
      extra: [ [ '企业研究人员毕业和任职背景', 'https://static.nfnews.com/content/202502/19/c11004610.html?enterColumnId=41' ] ],
      evidence: 'PDF 在王乐安名下标注 DeepSeek 实习期间贡献，并列其北大、DeepSeek 双署名。个人履历确认实习月份及校内导师。同期研发人员高华佐同篇署名。',
      advising: [ '校内导师', '王乐安 的教育经历明确列 孙栩 为当时的校内导师。', 'https://leanwang326.github.io/.github.io/' ]
    },
    {
      id: 'meituan-uniedit-hongsheng-li',
      company: '美团',
      team: 'LongCat',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [
        '李鸿升 · Hongsheng Li',
        '研究时为香港中文大学电子工程系副教授，Dian Zheng 的博士导师。',
        'https://www.ee.cuhk.edu.hk/images/content/news-events/seminars/2025/20250915-hsli.pdf'
      ],
      employee: [ '张满园 · Manyuan Zhang', '美团 LongCat 的 Staff Researcher。原文署美团并标为项目负责人，也是郑典的企业实习导师。', 'https://manyuan97.github.io/' ],
      student: [ '郑典 · Dian Zheng', '2025 年获中山大学硕士学位后在香港中文大学读博；2025 年 7 月至 2026 年 5 月在美团 LongCat 进行科研实习。', 'https://zhengdian1.github.io/' ],
      title: 'Uni-Edit: Intelligent Editing Is A General Task For Unified Model Tuning',
      short: 'Uni-Edit',
      date: '2026-05-20',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2605.21487',
      extra: [ [ '预印本首次公开时间', 'https://arxiv.org/abs/2605.21487' ] ],
      evidence: '首页将美团实习脚注附于第一作者郑典，其同时署港中大 MMLab 与美团。郑典的个人主页列出李鸿升的博士指导关系和张满园指导的美团 LongCat 实习。两位导师均为该论文作者。',
      advising: [ '校内导师', '郑典 的教育经历明确列 李鸿升 为当时的校内导师。', 'https://zhengdian1.github.io/' ]
    },
    {
      id: 'meituan-discrete-vision-xinggang',
      company: '美团',
      team: 'LongCat',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '王兴刚 · Xinggang Wang', '华中科技大学电子信息与通信学院教授，Jialv Zou 的博士导师和论文合著者。', 'https://sites.google.com/site/cvxwang/home' ],
      employee: [ 'Xiaotong Li', '美团 LongCat 研究人员，论文项目负责人；第一作者主页列为企业指导者。', 'https://www.alphaxiv.org/organizations/meituan/people' ],
      student: [ 'Jialv Zou', '2025 年 9 月起为华中科技大学博士生，2025 年 12 月起在美团 LongCat 做北斗科研实习。', 'https://doctor-james.github.io/' ],
      title: 'Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?',
      short: 'Discrete Visual Tokens',
      date: '2026-10',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.37662',
      evidence: '论文首页在 Jialv Zou 名下列明美团 LongCat 实习。他的主页明确实习和在读时间，原文中的企业项目负责人和华中科大教师均可在其履历核对。',
      advising: [ '校内共同导师', 'Jialv Zou 的教育经历明确列 王兴刚 为当时的校内共同导师。', 'https://doctor-james.github.io/' ]
    },
    {
      id: 'meituan-discrete-vision-wenyu',
      company: '美团',
      team: 'LongCat',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '刘文予 · Wenyu Liu', '华中科技大学电子信息与通信学院教授，论文署名华中科技大学。', 'https://eic.hust.edu.cn/professor/liuwenyu/' ],
      employee: [ 'Xiaotong Li', '美团 LongCat 研究人员，论文项目负责人；第一作者主页列为企业指导者。', 'https://www.alphaxiv.org/organizations/meituan/people' ],
      student: [ 'Jialv Zou', '2025 年 9 月起为华中科技大学博士生，2025 年 12 月起在美团 LongCat 做北斗科研实习。', 'https://doctor-james.github.io/' ],
      title: 'Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?',
      short: 'Discrete Visual Tokens',
      date: '2026-10',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.37662',
      evidence: '同一篇带具名美团实习脚注的论文中，刘文予也是华中科大教师合著者。第一作者履历确认博士学籍、企业实习和企业侧指导者。',
      advising: [ '校内共同导师', 'Jialv Zou 的教育经历明确列 刘文予 为当时的校内共同导师。', 'https://doctor-james.github.io/' ]
    },
    {
      id: 'xiaohongshu-beyondwords-shen',
      company: '小红书',
      team: '多模态搜索与 RedNote',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '沈永亮 · Yongliang Shen', '浙江大学 REAL Lab 教师，原文署名浙江大学。', 'https://zjureal.com/people.html' ],
      employee: [ '张道鑫 · Daoxin Zhang', '2025 全球机器学习技术大会列为小红书多模态搜索和 RedNote 算法团队负责人，原文署名小红书。', 'https://ml-summit.org/speaker/1186?uid=c1047' ],
      student: [ 'Dingming Li', '浙江大学 REAL 研究组博士生，原文署名浙江大学及小红书。', 'https://github.com/lidingm/' ],
      title: 'Beyond Words Alone: Disentangling Distributed Evidence for Visually Grounded Cultural Translation',
      short: 'Beyond Words Alone',
      date: '2026-10',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.35482',
      evidence: '同篇论文的另一位浙大教职合著者，与第一作者同属 REAL Lab。原文实习脚注和学生双署名确认其在小红书实习期间参与该研究。',
      advising: [ '课题组指导', '浙江大学 REAL Lab 名录列沈永亮为负责人，并将 Dingming Li 列为组内博士生。', 'https://zjureal.com/people.html' ]
    },
    {
      id: 'oprd-ant-zju',
      company: '蚂蚁集团',
      team: '大模型后训练研究',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '王浩博 · Haobo Wang', '浙江大学博士生导师、论文通讯作者，并为 Shenzhi Yang 的浙大导师。', 'https://hbzju.github.io/index.html' ],
      employee: [ '王维强 · Weiqiang Wang', '蚂蚁集团公开资料列为机器智能部门总经理，同篇以蚂蚁集团署名。', 'https://www.antgroup.com/en/technology' ],
      student: [ 'Shenzhi Yang', '2025 年起为浙江大学博士生，2025 年 5 月起在蚂蚁集团实习；本人主页列明 OPRD。', 'https://shenzhiyang2000.github.io/' ],
      title: 'OPRD: On-Policy Representation Distillation',
      short: 'OPRD',
      date: '2026-06',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2606.06021',
      extra: [
        [ '博士及企业实习时间交叉来源', 'https://www.alphaxiv.org/@shenzhi-yang' ],
        [ '企业岗位同期会议资料', 'https://unctad.org/system/files/official-document/ecn162024inf1_en.pdf' ]
      ],
      evidence: 'PDF 第一作者双署浙江大学与蚂蚁集团。本人履历把企业实习、浙大博士学籍及论文列在一起，导师及同篇企业合著者岗位有独立资料。',
      advising: [ '校内导师', 'Shenzhi Yang 的教育经历明确列 王浩博 为当时的校内导师。', 'https://shenzhiyang2000.github.io/' ]
    },
    {
      id: 'gapmllm-huawei-hit',
      company: '华为',
      team: '2012 实验室 · 多模态大模型',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '江俊君 · Junjun Jiang', '哈尔滨工业大学教授，张佳鑫的校内导师及论文通讯作者。', 'https://sai.hit.edu.cn/zrjs/list.htm' ],
      employee: [ 'Dave Zhenyu Chen', '公开履历列为华为诺亚方舟实验室 AI 研究科学家，原文署名华为，学生履历将其列为企业导师。', 'https://cn.linkedin.com/in/dave-zhenyu-chen' ],
      student: [ '张佳鑫 · Jiaxin Zhang', '哈工大硕士生，2025 年 5 月至 2026 年 9 月于华为 2012 实验室科研实习。', 'https://zestfuljx.github.io/' ],
      title: 'GAP-MLLM: Geometry-Aligned Pre-training for Activating 3D Spatial Perception in Multimodal Large Language Models',
      short: 'GAP-MLLM',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2603.16461',
      extra: [ [ 'ECCV 收录书目', 'https://dblp.dagstuhl.de/rec/conf/eccv/ZhangJLCJC26.html' ], [ '同一华为作者的后续署名', 'https://arxiv.org/html/2609.33616' ] ],
      evidence: '首页点名第一作者为华为实习生。该生列出高校和企业两位导师，两人均为论文作者，企业导师公开履历给出华为正式研究岗位。',
      advising: [ '校内导师', '张佳鑫 的教育经历明确列 江俊君 为当时的校内导师。', 'https://zestfuljx.github.io/' ]
    },
    {
      id: 'moonshot-opencua-hku',
      company: '月之暗面（Kimi）',
      team: '计算机使用智能体',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ 'Tao Yu', '香港大学计算机学科助理教授、XLANG Lab 负责人，Bowen Wang 的博士导师及同篇作者。', 'https://taoyds.github.io/' ],
      employee: [ 'Hao Hu', '2024 年清华博士毕业，后任月之暗面技术人员，研究计算机使用与深度检索智能体，亦为学生在企业的导师。', 'https://mousehu.github.io/' ],
      student: [ 'Bowen Wang', '2024 年 9 月起在港大读博；2025 年 2 月至 12 月在月之暗面负责计算机使用智能体后训练实习。', 'https://bowenbryanwang.github.io/' ],
      title: 'OpenCUA: Open Foundations for Computer-Use Agents',
      short: 'OpenCUA',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2025/file/cc7ae529e945226b0d52ea4ac478c4f3-Paper-Conference.pdf',
      extra: [ [ '作者与单位', 'https://opencua.xlang.ai/' ], [ 'arXiv 作者稿', 'https://arxiv.org/html/2508.09123' ] ],
      evidence: '港大博士生 Bowen Wang 为并列第一作者，其主页列出论文及时间重叠的在读、月之暗面计算机使用智能体实习和企业导师 Hao Hu。两名导师均在同篇署名。',
      advising: [ '校内导师', 'Bowen Wang 的教育经历明确列 Tao Yu 为当时的校内导师。', 'https://bowenbryanwang.github.io/' ]
    },
    {
      id: 'kuaishou-ab-agent-qingli',
      company: '快手',
      team: '电商团队',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ '李青 · Qing Li', '香港理工大学计算学系讲席教授，论文署名港理工。', 'https://www.polyu.edu.hk/comp/people/academic-staff/prof-li-qing/?sc_lang=en' ],
      employee: [ 'Wenwu Ou', '公开职业资料列为快手技术合伙人；原文使用快手企业邮箱。', 'https://www.alphaxiv.org/zh/@ou-wenwu' ],
      student: [ 'Zhuohang Jiang', '2024 年 9 月起为香港理工大学博士生，在快手电商团队进行科研实习。', 'https://zhuohangjiang.com/' ],
      title: 'A/B Agent: A Self-Evolving Agent for Strategy Iteration in Industrial A/B Testing',
      short: 'A/B Agent',
      date: '2026-08',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2608.04625',
      extra: [ [ '企业岗位和研究履历', 'https://lacuna.tiptreesystems.com/author/wenwu-ou/aut_e6f28e4613e347979d06c37a30465a3e' ] ],
      evidence: '首页具名注明第一作者在快手实习期间开展此研究，并使用港理工学生邮箱；港理工教授李青和快手正式研究人员 Wenwu Ou 均同篇合著。',
      advising: [ '校内共同导师', 'Zhuohang Jiang 的教育经历明确列 李青 为当时的校内共同导师。', 'https://zhuohangjiang.com/' ]
    },
    {
      id: 'smap-ali-xidian',
      company: '阿里巴巴',
      team: '高德地图（Amap）',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [ '席博博 · Bobo Xi', '西安电子科技大学通信工程学院副教授、张文捷的学校导师和论文通讯作者。', 'https://b-xi.github.io/' ],
      employee: [ 'Yue Liu', '同篇署名阿里高德并负责项目；IEEE 论文作者简介列其为高德出行智能部门负责人，企业邮箱与本篇一致。', 'https://arxiv.org/pdf/2608.29073' ],
      student: [ '张文捷 · Wenjie Zhang', '个人主页列 2023 年 9 月至 2026 年 7 月就读西电硕士、由席博博指导，原文注明高德实习。', 'https://wenj-zhang.github.io/' ],
      title: 'SMAP: Semantic Route Planning with Map-Grounded Multimodal Alignment',
      short: 'SMAP',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_SMAP_Semantic_Route_Planning_with_Map-Grounded_Multimodal_Alignment_CVPR_2026_paper.pdf',
      evidence: 'CVPR 首页在双署名第一作者名下直接标注阿里高德实习，学生主页同时给出西电学籍与高校导师。企业项目负责人的邮箱与其 2026 年 IEEE 论文正式任职简介一致。',
      extra: [ [ '阿里高德项目页', 'https://amap-mobility-intelligence.github.io/SMAP/' ] ],
      advising: [ '校内导师', '张文捷 的教育经历明确列 席博博 为当时的校内导师。', 'https://wenj-zhang.github.io/' ]
    },
    {
      id: 'jd-stssl-jingyuan',
      company: '京东',
      team: '京东智能城市研究院',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '王晶元 · Jingyuan Wang', '北京航空航天大学计算机学院教职人员，是 Jiahao Ji 的博士导师及同篇作者。', 'https://www.bigscity.net/jingyuan-wang/index.html' ],
      employee: [ '郑宇 · Yu Zheng', '京东集团副总裁及京东智能城市负责人；是论文企业作者和 Jiahao Ji 的企业实习导师。', 'https://urban-computing.com/pdf/YuZheng-CV_2023.pdf' ],
      student: [ 'Jiahao Ji', '2025 年获北航博士学位，2021 年 3 月至 2023 年 1 月在京东智能城市科研实习。', 'https://echo-ji.github.io/academicpages/' ],
      title: 'Spatio-Temporal Self-Supervised Learning for Traffic Flow Prediction',
      short: 'ST-SSL',
      date: '2023-06-26',
      venue: 'AAAI',
      area: '时空预测',
      paper: 'https://doi.org/10.1609/aaai.v37i4.25555',
      extra: [ [ '正式会议版', 'https://doi.org/10.1609/aaai.v37i4.25555' ], [ '预印本', 'https://arxiv.org/abs/2212.04475' ] ],
      evidence: '第一作者的主页列明北航博士和京东智能城市科研实习，京东的两名实习导师和北航博士导师同篇合著。预印本发布时间处于该实习期内，正式会议版发表于 2023 年。',
      advising: [ '校内导师', 'Jiahao Ji 的个人主页列王晶元为其北航博士导师。', 'https://echo-ji.github.io/academicpages/' ]
    },
    {
      id: 'minimax-vtp-hust',
      company: 'MiniMax',
      team: 'H3 Team',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '王兴刚 · Xinggang Wang', '华中科技大学电子信息与通信学院教授，论文通讯作者及姚劲枫的博士导师。', 'https://english.eic.hust.edu.cn/info/1018/1131.htm' ],
      employee: [
        '周禹聪 · Yucong Zhou',
        '2022 年 3 月加入 MiniMax，2025 年 6 月获任董事，同篇署 MiniMax。',
        'https://ir.minimax.cn/en/corporate-information/management'
      ],
      student: [ '姚劲枫 · Jingfeng Yao', '华中科技大学在读博士，预计 2027 年毕业；个人主页列 2024 年起在 MiniMax H3 Team 实习，并列出该论文。', 'https://jingfengyao.github.io/' ],
      title: 'Towards Scalable Pre-training of Visual Tokenizers for Generation',
      short: 'VTP',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2512.13687',
      extra: [
        [ 'MiniMax 的 ECCV 论文仓库', 'https://github.com/MiniMax-AI/VTP' ],
        [ '港交所披露的企业任职时间', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0422/2026042202118.pdf' ],
        [ '2025 年 12 月公开的首版作者稿', 'https://arxiv.org/abs/2512.13687v1' ]
      ],
      evidence: '第一作者主页同时列华中科大博士学籍、H3 Team 实习时间与 VTP。企业官方论文仓库、论文首页和港交所披露交叉确认企业参与和周禹聪的正式职务。',
      advising: [ '校内导师', '姚劲枫 的教育经历明确列 王兴刚 为当时的校内导师。', 'https://jingfengyao.github.io/' ]
    },
    {
      id: 'moonshot-yue-xue',
      company: '月之暗面（Kimi）',
      team: 'Kimi 音频',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '雪巍 · Wei Xue', '香港科技大学艺术与机器创造学部助理教授，论文署港科大并列为通讯作者。', 'https://researchportal.hkust.edu.hk/en/persons/wei-xue/' ],
      employee: [ '周昕宇 · Xinyu Zhou', '月之暗面联合创始人，论文贡献表署 Moonshot.ai。', 'https://www.nbd.com.cn/articles/2024-04-24/3351487.html' ],
      student: [ '袁锐斌 · Ruibin Yuan', '2023 年 9 月起在香港科技大学攻读博士，2024 年 9 月至 2025 年 4 月在月之暗面实习，个人主页明确将 YuE 列为实习项目。', 'https://a43992899.github.io/' ],
      title: 'YuE: Scaling Open Foundation Models for Long-Form Music Generation',
      short: 'YuE',
      date: '2026-04',
      venue: 'ICLR',
      area: '语音与音频',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/a6a21421022d1da16eadbba533980530-Abstract-Conference.html',
      extra: [
        [ '作者稿逐人贡献与单位', 'https://arxiv.org/html/2503.08638#S15' ],
        [ '实习期间公开的 2025 年 3 月首版', 'https://arxiv.org/html/2503.08638v1#S15' ],
        [ '同一企业音频团队报告', 'https://arxiv.org/abs/2504.18425' ]
      ],
      evidence: '贡献表将袁锐斌列为项目负责人并署港科大及月之暗面，将联合创始人周昕宇署月之暗面。袁锐斌自述在读期间实习并完成 YuE 和 Kimi-Audio。正式版作者表与首版贡献表可交叉复核。',
      advising: [ '课题组指导', '雪巍的个人团队页将 2023 年秋入学的袁锐斌列为自己的音频方向研究生。', 'https://wei-xue.com/index-team.htm' ]
    },
    {
      id: 'meituan-tdar-gui',
      company: '美团',
      team: 'LongCat',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '桂韬 · Tao Gui', '复旦大学自然语言处理实验室青年副研究员，论文通讯作者及 Yi Lu 的硕士导师。', 'https://cs.fudan.edu.cn/_t4218/7b/d6/c24781a490454/page.psp' ],
      employee: [ '王嘉宁 · Jianing Wang', '2024 年 6 月起为美团 LongCat 全职资深工程师，原文同篇署 LongCat。', 'https://github.com/wjn1996' ],
      student: [ 'Yi Lu', '2023 年本科毕业后在复旦攻读硕士，2026 年获得学位，2025 年 6 月加入美团 LongCat 后训练组实习。', 'https://lululuyi.github.io/' ],
      title: 'Adaptive Test-Time Compute Allocation for Block Diffusion Language Models in Complex Reasoning',
      short: 'TDAR',
      date: '2026-02',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2602.09555',
      extra: [ [ '预印本提交记录', 'https://arxiv.org/abs/2602.09555' ], [ '企业作者个人主页', 'https://wjn1996.github.io/' ] ],
      evidence: '原文第一作者 Yi Lu 同时署复旦大学和美团 LongCat。其主页列明硕士学籍、实习起点和这篇研究；北大、复旦教职合作者与美团全职工程师在同一篇论文中。',
      advising: [ '校内共同导师', 'Yi Lu 的教育经历明确列 桂韬 为当时的校内共同导师。', 'https://lululuyi.github.io/' ]
    },
    {
      id: 'meituan-tdar-huang',
      company: '美团',
      team: 'LongCat',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '黄萱菁 · Xuanjing Huang', '复旦大学计算机科学技术学院教授、博士生导师，Yi Lu 的硕士导师及同篇合著者。', 'https://cs.fudan.edu.cn/_t4218/7b/d6/c24781a490454/page.psp' ],
      employee: [ '王嘉宁 · Jianing Wang', '2024 年 6 月起为美团 LongCat 全职资深工程师，原文同篇署 LongCat。', 'https://github.com/wjn1996' ],
      student: [ 'Yi Lu', '2023 年本科毕业后在复旦攻读硕士，2026 年获得学位，2025 年 6 月加入美团 LongCat 后训练组实习。', 'https://lululuyi.github.io/' ],
      title: 'Adaptive Test-Time Compute Allocation for Block Diffusion Language Models in Complex Reasoning',
      short: 'TDAR',
      date: '2026-02',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2602.09555',
      extra: [ [ '预印本提交记录', 'https://arxiv.org/abs/2602.09555' ], [ '企业作者个人主页', 'https://wjn1996.github.io/' ] ],
      evidence: '原文第一作者 Yi Lu 同时署复旦大学和美团 LongCat。其主页列明硕士学籍、实习起点和这篇研究；北大、复旦教职合作者与美团全职工程师在同一篇论文中。',
      advising: [ '校内共同导师', 'Yi Lu 的教育经历明确列 黄萱菁 为当时的校内共同导师。', 'https://lululuyi.github.io/' ]
    },
    {
      id: 'meituan-bidfcl-zheng',
      company: '美团',
      team: '美团 · 营销优化',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '郑嘉琦 · Jiaqi Zheng', '南京大学计算机学院准聘副教授、博士生导师，论文通讯作者；课题组名录列有第一作者。', 'https://cs.nju.edu.cn/96/44/c56396a235076/pagem.htm' ],
      employee: [ 'Guibin Jiang', '自 2021 年起为美团研究员，同篇企业合著者，使用美团邮箱，连续发表多项美团营销因果优化研究。', 'https://lacuna.tiptreesystems.com/author/guibin-jiang' ],
      student: [ 'Shuli Zhang', '2023—2026 年在南京大学课题组就读，论文标注在美团实习期间完成。', 'https://jzheng369.github.io/students.html' ],
      title: 'Bi-Level Decision-Focused Causal Learning for Large-Scale Marketing Optimization: Bridging Observational and Experimental Data',
      short: 'Bi-DFCL',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '推荐、检索与数据挖掘',
      paper: 'https://papers.neurips.cc/paper_files/paper/2025/file/93427bc08aef8f9d6d5366d70284f571-Paper-Conference.pdf',
      extra: [
        [ '美团研究员同期合著', 'https://arxiv.org/abs/2506.00959' ],
        [ '同团队 2023 年的营销算法论文', 'https://ojs.aaai.org/index.php/AAAI/article/download/25677/25449' ]
      ],
      evidence: '论文首页脚注明确 Shuli Zhang 在美团实习时完成该项工作；导师名录给出其南京大学在读年份。美团研究员 Guibin Jiang 和南京大学教师同篇合著，论文报告成果已在美团营销场景部署。',
      advising: [ '课题组指导', '郑嘉琦的个人学生名录将 Shuli Zhang 列为 2023 至 2026 年的学生。', 'https://jzheng369.github.io/students.html' ]
    },
    {
      id: 'instructvideo-ali-zju',
      company: '阿里巴巴',
      team: '达摩院（DAMO Academy）',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '倪东 · Dong Ni', '浙江大学教授、博士生导师，学生的高校导师及该论文通讯作者。', 'https://person.zju.edu.cn/en/nidong' ],
      employee: [ 'Shiwei Zhang', '阿里研究员，该论文企业合作者及学生自述的企业实习指导人。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '袁杭杰 · Hangjie Yuan', '2019 年 9 月至 2024 年夏为浙江大学博士生，2021 年 3 月至 2024 年 8 月在阿里达摩院参与视频生成研究。', 'https://jacobyuan7.github.io/' ],
      title: 'InstructVideo: Instructing Video Diffusion Models with Human Feedback',
      short: 'InstructVideo',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Yuan_InstructVideo_Instructing_Video_Diffusion_Models_with_Human_Feedback_CVPR_2024_paper.pdf',
      extra: [ [ '保留实习脚注的预印本', 'https://arxiv.org/pdf/2312.12490' ], [ '作者项目页', 'https://instructvideo.github.io/' ] ],
      evidence: '预印本首页脚注明示第一作者在阿里达摩院实习时完成工作。学生履历交叉确认浙大学籍、企业实习、双方指导人及成果。',
      advising: [ '校内导师', '袁杭杰 的教育经历明确列 倪东 为当时的校内导师。', 'https://jacobyuan7.github.io/' ]
    },
    {
      id: 'dreamvideo-ali-fudan',
      company: '阿里巴巴',
      team: '通义实验室（Tongyi Lab）',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '单洪铭 · Hongming Shan', '复旦大学教师，第一作者的博士生导师及论文通讯作者。', 'https://faculty.fudan.edu.cn/hmshan/en/index/1129623/list/index.htm' ],
      employee: [ '周靖人 · Jingren Zhou', '研究时任阿里云首席技术官，原文署名阿里并列企业邮箱。', 'https://home.alibabagroup.com/en-US/document-1582482069362049024' ],
      student: [ '卫昱杰 · Yujie Wei', '2022 年 9 月起就读复旦大学博士，论文第一作者，预印本脚注明示其以阿里实习生身份参与。', 'https://weilllllls.github.io/' ],
      title: 'DreamVideo: Composing Your Dream Videos with Customized Subject and Motion',
      short: 'DreamVideo',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Wei_DreamVideo_Composing_Your_Dream_Videos_with_Customized_Subject_and_Motion_CVPR_2024_paper.pdf',
      extra: [
        [ '保留阿里实习脚注的预印本', 'https://arxiv.org/pdf/2312.04433' ],
        [ '哥伦比亚大学讲座所列企业任职及研发职责', 'https://www.columbia.edu/content/events/lecture-series-ai-jingren-zhou-cto-alibaba-cloud' ]
      ],
      evidence: '预印本以同一脚注标明卫昱杰等作者在阿里实习期间完成工作。学生履历确认复旦博士起止时间、校方导师与对应论文。阿里公告确认周靖人的正式岗位。',
      advising: [ '校内导师', '卫昱杰 的教育经历明确列 单洪铭 为当时的校内导师。', 'https://weilllllls.github.io/' ]
    },
    {
      id: 'aegaeon-ali-pku',
      company: '阿里巴巴',
      team: '阿里云 · Model Studio 基础设施',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '金鑫 · Xin Jin', '北京大学计算机学院长聘副教授，第一作者的博士导师及论文共同作者。', 'https://cs.pku.edu.cn/info/1069/1635.htm' ],
      employee: [
        '周靖人 · Jingren Zhou',
        '研究时任阿里云首席技术官，原文署名阿里。',
        'https://www.alibabacloud.com/en/press-room/alibaba-cloud-empowers-customers-and-partners-with?_p_lc=1'
      ],
      student: [ '向昱行 · Yuxing Xiang', '北京大学本科毕业后继续攻读博士，2024 年 5 月至 2025 年 6 月于阿里云实习研究大模型服务系统。', 'https://echostone1101.github.io/' ],
      title: 'Aegaeon: Effective GPU Pooling for Concurrent LLM Serving on the Market',
      short: 'Aegaeon',
      date: '2025-10',
      venue: 'ACM SOSP',
      area: '系统与效率',
      paper: 'https://ennanzhai.github.io/pub/sosp25-aegaeon.pdf',
      extra: [
        [ 'ACM 会议论文记录', 'https://doi.org/10.1145/3731569.3764815' ],
        [ '同一企业实习方向的后续 ServeGen', 'https://www.usenix.org/system/files/nsdi26-xiang-servegen.pdf' ]
      ],
      evidence: '第一作者在原文同时署名北大和阿里，学生主页列出同期阿里云大模型服务研究实习及该成果。原文说明系统在阿里云 Model Studio 实际部署，并有学校导师及阿里云 CTO 共同署名。',
      advising: [ '校内导师', '向昱行 的教育经历明确列 金鑫 为当时的校内导师。', 'https://echostone1101.github.io/' ]
    },
    {
      id: 'deepseek-coder-pku-xiong',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 代码推理',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '熊英飞 · Yingfei Xiong', '北京大学计算机学院教员，论文署北京大学。本人同期研究动态点名其博士生朱琪豪与 DeepSeek 合作并主导论文项目。', 'https://cs.pku.edu.cn/info/1231/2034.htm' ],
      employee: [ '梁文锋 · Wenfeng Liang', 'DeepSeek 创始人，同篇作者署 DeepSeek。', 'https://www.ehangzhou.gov.cn/2025-01/22/c_292410.htm' ],
      student: [
        '朱琪豪 · Qihao Zhu',
        '北大 2024 届博士，论文首发时为熊英飞指导的博士生。原文并列一作、双署北大和 DeepSeek，导师同期确认其在读期间负责企业项目。',
        'https://pl.cs.pku.edu.cn/en/info/1082/1942.htm'
      ],
      title: 'DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence',
      short: 'DeepSeek-Coder',
      date: '2024-01-25',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2401.14196',
      extra: [
        [ '北大导师 2024 年 1 月的合作记录', 'https://xiongyingfei.github.io/news.html' ],
        [ '学生论文与项目列表', 'https://pkuzqh.github.io/' ],
        [ '企业模型仓库', 'https://github.com/deepseek-ai/DeepSeek-Coder' ]
      ],
      evidence: '原文署名、北大博士论文记录和导师在 2024 年 1 月发布的项目消息相互印证，确认其博士研究与 DeepSeek 同篇科研合作。创始人梁文锋为独立的企业作者。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 熊英飞 对 朱琪豪 的指导关系。', 'https://pl.cs.pku.edu.cn/en/info/1082/1942.htm' ]
    },
    {
      id: 'difuada-huawei-cuhk',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Farzan Farnia', '香港中文大学计算机科学与工程系助理教授，第一作者的博士导师。', 'https://www.cse.cuhk.edu.hk/people/faculty/farzan-farnia/' ],
      employee: [ 'Yinchuan Li', '华为诺亚方舟实验室 AI 研究员，同篇署名华为。', 'https://orcid.org/0000-0002-4263-5130' ],
      student: [ '雷浩瑀 · Haoyu Lei', '2022 年 8 月至 2026 年 7 月为香港中文大学计算机博士生，履历列明华为诺亚方舟的多段研究实习。', 'https://lh218.github.io/assets/cv.pdf' ],
      title: 'Boosting Cross-problem Generalization in Diffusion-Based Neural Combinatorial Solver via Inference Time Adaptation',
      short: 'DIFU-Ada',
      date: '2026-03',
      venue: 'AAAI',
      area: '机器学习与优化',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/40948/44909',
      extra: [ [ 'AAAI 正式会议记录', 'https://ojs.aaai.org/index.php/AAAI/article/view/40948' ], [ '预印本', 'https://arxiv.org/abs/2502.12188' ] ],
      evidence: 'AAAI 论文首页在第一作者名下明示华为诺亚方舟实验室实习，并由该生的港中大博士导师和华为研究人员共同署名。学生简历列出学籍及华为研究经历。',
      advising: [ '校内导师', '雷浩瑀 的教育经历明确列 Farzan Farnia 为当时的校内导师。', 'https://lh218.github.io/assets/cv.pdf' ]
    },
    {
      id: 'detclipv3-huawei-hkust',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '徐旦 · Dan Xu', '香港科技大学计算机科学与工程系教师，第一作者的博士导师及论文共同通讯作者。', 'https://cse.hkust.edu.hk/admin/people/faculty/profile/danxu?u=danxu' ],
      employee: [ '徐航 · Hang Xu', '2018 年博士毕业后入职华为，论文华为诺亚方舟实验室署名及共同通讯作者。', 'https://xuhangcn.github.io/' ],
      student: [
        'Lewei Yao',
        '2025 年获香港科技大学博士学位，学位论文收录这项研究。在读时与港科大导师及华为诺亚方舟团队连续合著并作双署名。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/towards-open-world-visual-perception-from-vision-language-pretrai/'
      ],
      title: 'DetCLIPv3: Towards Versatile Generative Open-vocabulary Object Detection',
      short: 'DetCLIPv3',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Yao_DetCLIPv3_Towards_Versatile_Generative_Open-vocabulary_Object_Detection_CVPR_2024_paper.pdf',
      extra: [
        [
          '同一学生与校企导师连续合著的 DetCLIPv2',
          'https://openaccess.thecvf.com/content/CVPR2023/papers/Yao_DetCLIPv2_Scalable_Open-Vocabulary_Object_Detection_Pre-Training_via_Word-Region_Alignment_CVPR_2023_paper.pdf'
        ],
        [ '港科大学籍、毕业时间和毕业去向', 'https://cse.hkust.edu.hk/pg/ourgraduates/' ],
        [ '港科大博士答辩记录', 'https://cse.hkust.edu.hk/pg/defenses/F24/' ]
      ],
      evidence: '第一作者连续两年用港科大和华为诺亚方舟实验室双署名，与同一港科大导师、中大教师及华为企业研究员合著。港科大博士论文明确收录该项目，校方名录将 2025 年博士毕业及随后华为研究岗位分别列出。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 徐旦 对 Lewei Yao 的指导关系。', 'https://cse.hkust.edu.hk/pg/ourgraduates/' ]
    },
    {
      id: 'illumeplus-huawei-hku',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '赵恒爽 · Hengshuang Zhao', '香港大学计算与数据科学学院助理教授、第一作者的博士生导师。', 'https://i.cs.hku.hk/~hszhao/' ],
      employee: [ '徐航 · Hang Xu', '2018 年博士毕业后入职华为，同篇华为诺亚方舟实验室署名。', 'https://xuhangcn.github.io/' ],
      student: [ '黄润辉 · Runhui Huang', '2024 年 9 月起在香港大学攻读博士，并于同月开始华为诺亚方舟实验室香港研究实习。', 'https://huangrh99.github.io/' ],
      title: 'ILLUME+: Illuminating Unified MLLM with Dual Visual Tokenization and Diffusion Refinement',
      short: 'ILLUME+',
      date: '2025-04',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2504.01934',
      extra: [ [ '第一作者在港大学籍与导师实验室名录', 'https://i.cs.hku.hk/~hszhao/lab.html' ], [ '作者项目页', 'https://illume-unified-mllm.github.io/' ] ],
      evidence: '第一作者主页同时列出港大学籍、诺亚方舟研究实习及此论文。论文在实习期内公开，学生及其港大导师和九位诺亚方舟实验室研究者合著，并承接该华为团队的 ILLUME 系列。',
      advising: [ '校内导师', '黄润辉 的教育经历明确列 赵恒爽 为当时的校内导师。', 'https://huangrh99.github.io/' ]
    },
    {
      id: 'eden-huawei-fudan',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '吴祖煊 · Zuxuan Wu', '复旦大学计算机科学技术学院副教授、博士生导师，学生的复旦导师及该论文通讯作者。', 'https://ai.fudan.edu.cn/_t4218/7b/d6/c24781a490454/page.psp' ],
      employee: [ '徐航 · Hang Xu', '2018 年博士毕业后正式加入华为，原文华为诺亚方舟实验室署名。', 'https://xuhangcn.github.io/' ],
      student: [ 'Zihao Zhang', '2023 年 9 月至 2026 年 6 月为复旦大学硕士生，2024 年 7 月至 2025 年 3 月于华为诺亚方舟科研实习。', 'https://bbldcver.github.io/' ],
      title: 'EDEN: Enhanced Diffusion for High-quality Large-motion Video Frame Interpolation',
      short: 'EDEN',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_EDEN_Enhanced_Diffusion_for_High-quality_Large-motion_Video_Frame_Interpolation_CVPR_2025_paper.pdf',
      extra: [ [ '实习期间公开的同一论文预印本', 'https://arxiv.org/abs/2503.15831' ] ],
      evidence: '学生履历在华为诺亚方舟实习条目下点名 EDEN。实习末月预印本公开，正式版列复旦导师、复旦教师和两位华为研究者。',
      advising: [ '校内导师', 'Zihao Zhang 的教育经历明确列 吴祖煊 为当时的校内导师。', 'https://bbldcver.github.io/' ]
    },
    {
      id: 'quickllama-huawei-cuhk',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ '贾佳亚 · Jiaya Jia', '研究发生时任香港中文大学教授，论文署名港中大及 SmartMore。', 'https://jiaya.me/file/home/cv%281%29.pdf' ],
      employee: [ '李政国 · Zhenguo Li', '时任华为诺亚方舟实验室 AI 理论实验室负责人，原文华为署名共同作者。', 'https://zhenguol.github.io/' ],
      student: [ 'Jingyao Li', '2022 年 8 月至 2026 年 10 月为香港中文大学博士生，2024 年 4 月至 11 月于华为诺亚方舟科研实习。', 'https://julietljy.github.io/Jingyao_Li.pdf' ],
      title: 'QuickLLaMA: Query-aware Inference Acceleration for Large Language Models',
      short: 'QuickLLaMA',
      date: '2025-01',
      venue: 'COLING',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.coling-main.34.pdf',
      extra: [
        [ 'COLING 正式论文记录', 'https://aclanthology.org/2025.coling-main.34/' ],
        [ '2024 年 6 月公开的实习阶段预印本', 'https://arxiv.org/abs/2406.07528' ]
      ],
      evidence: '第一作者公开简历在华为诺亚方舟实习条目下点名第一作者成果 QuickLLaMA。实习期内公开的预印本已同时列出两位港中大教师及企业负责人。',
      advising: [ '校内导师', '李靖瑶的个人主页列贾佳亚为其港中大博士导师。', 'https://julietljy.github.io/' ]
    },
    {
      id: 'decoding-matters-huawei-ustc',
      company: '华为',
      team: '华为云',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '冯福利 · Fuli Feng', '中国科学技术大学教授、博士生导师，论文校方通讯作者。', 'https://fulifeng.github.io/' ],
      employee: [ '陈冲 · Chong Chen', '博士毕业后正式加入华为，任华为云高级研究员及团队负责人，原文华为署名。', 'https://chenchongthu.github.io/' ],
      student: [ 'Keqin Bao', '中国科学技术大学博士生，原文校企双署名，第一作者脚注明示华为实习。', 'https://hexiangnan.github.io/papers/tkde25-CoLLM.pdf' ],
      title: 'Decoding Matters: Addressing Amplification Bias and Homogeneity Issue for LLM-based Recommendation',
      short: 'Decoding Matters',
      date: '2024-11',
      venue: 'EMNLP',
      area: '推荐与检索',
      paper: 'https://aclanthology.org/2024.emnlp-main.589.pdf',
      extra: [
        [ '会议教程对同期博士生身份的交叉验证', 'https://generative-rec.github.io/tutorial-sigir25/files/WWW_24_tutorial_Final.pdf' ],
        [ '同一论文预印本', 'https://arxiv.org/abs/2406.14900' ]
      ],
      evidence: 'EMNLP 正式 PDF 首位作者的华为实习脚注与科大、华为双署名相互印证。同期共同作者简介核实博士在读和师承，陈冲履历列明华为研究岗位。',
      advising: [ '校内导师', 'Keqin Bao 的教育经历明确列 冯福利 为当时的校内导师。', 'https://hexiangnan.github.io/papers/tkde25-CoLLM.pdf' ]
    },
    {
      id: 'rfmem-huawei-cityu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ '赵翔宇 · Xiangyu Zhao', '香港城市大学数据科学系教师，2021 年起任教、2025 年 7 月晋升长聘副教授，论文共同通讯作者。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ],
      employee: [ 'Yichao Wang', '华为诺亚方舟研究员，原文华为署名共同通讯作者，同一华为邮箱在此前推荐论文中可复核。', 'https://www.alphaxiv.org/zh/%40yichao-wang' ],
      student: [ 'Yingyi Zhang', '2022 年起为大连理工大学和香港城市大学联合博士生，2024 年 10 月至 2026 年 4 月于华为诺亚方舟科研实习。', 'https://zhang-yingyi.github.io/' ],
      title: 'Evoking User Memory: Personalizing LLM via Recollection-Familiarity Adaptive Retrieval',
      short: 'Evoking User Memory',
      date: '2026-04',
      venue: 'ICLR',
      area: '推荐与检索',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/58f2612e86e2671432499017d049fcb0-Abstract-Conference.html',
      extra: [
        [ '原文作者署名与企业邮箱', 'https://iclr.cc/media/iclr-2026/Slides/10008269.pdf' ],
        [ '学生简历的华为项目产出', 'https://zhang-yingyi.github.io/assets/files/YingyiZhang_CV.pdf' ],
        [ '城大官方成果与华为项目', 'https://scholars.cityu.edu.hk/en/publications/evoking-user-memory-personalizing-llm-via-recollection-familiarit/' ],
        [ '同一企业作者的同期身份与同一邮箱', 'https://ojs.aaai.org/index.php/AAAI/article/download/28699/29354' ]
      ],
      evidence: '学生简历将个性化检索及 ICLR 投稿列在华为科研实习项目下。论文及会议幻灯确认该生具有港城大学籍署名、校方和华为双方通讯作者，校方成果记录确认华为项目资助。',
      advising: [
        '联合博士导师',
        'Yingyi Zhang 的简历列出大连理工大学与香港城市大学的联合博士学籍，并列赵翔宇为港城大一侧的导师。',
        'https://zhang-yingyi.github.io/assets/files/YingyiZhang_CV.pdf'
      ]
    },
    {
      id: 'mdtdist-huawei-sjtu',
      company: '华为',
      team: '小艺 3D 团队',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '沈为 · Wei Shen', '上海交通大学计算机学院教授，第一作者实验室导师及论文共同通讯作者。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/shenwei.html' ],
      employee: [ '方杰民 · Jiemin Fang', '华为高级研究员，领导三维生成及神经渲染研发小组，同篇署名华为共同通讯作者。', 'https://asia.siggraph.org/2024/presenter/?uid=959373' ],
      student: [ 'Zanwei Zhou', '上海交通大学博士生，列名沈为研究组。论文脚注标明第一作者与共同一作在华为实习期间开展研究。', 'https://shenwei1231.github.io/team/' ],
      title: 'Few-step Flow for 3D Generation via Marginal-Data Transport Distillation',
      short: 'MDT-dist',
      date: '2026',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/38394/42356',
      extra: [
        [ '项目页的联合一作实习脚注', 'https://zanue.github.io/mdt-dist/' ],
        [ '华中科大共同一作的学生履历及企业指导', 'https://taoranyi.com/' ],
        [ '企业团队负责人履历及同一成果', 'https://jaminfong.cn/' ],
        [
          '同一校企团队与交大在读实习生岑佳仲的 CVPR 论文',
          'https://openaccess.thecvf.com/content/CVPR2026/papers/Cen_Text-Image_Conditioned_3D_Generation_CVPR_2026_paper.pdf'
        ],
        [ '岑佳仲的在读、企业实习和指导记录', 'https://jumpat.github.io/jumpcat/' ],
        [ '同一校企团队后续论文 SCULPT', 'https://arxiv.org/html/2608.13541' ]
      ],
      evidence: '原文将两位共同一作标为华为实习期间完成研究。校内实验室确认交大学籍，华中科大共同一作个人履历亦列学校导师和方杰民等具名华为导师。',
      advising: [ '课题组指导', '沈为的个人团队页将 Zanwei Zhou 列为博士生。', 'https://shenwei1231.github.io/team/' ]
    },
    {
      id: 'mdtdist-huawei-hust',
      company: '华为',
      team: '小艺 3D 团队',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '王兴刚 · Xinggang Wang', '华中科技大学教授，第二作者易陶然的高校导师及同篇合作者。', 'https://xwcv.github.io/' ],
      employee: [ '方杰民 · Jiemin Fang', '华为高级研究员，领导三维生成及神经渲染研发小组，同篇署名华为共同通讯作者。', 'https://asia.siggraph.org/2024/presenter/?uid=959373' ],
      student: [ '易陶然 · Taoran Yi', '研究期间为华中科技大学电子信息与通信学院硕士生，MDT-dist 共同第一作者。论文明确列其华为实习。', 'https://taoranyi.com/' ],
      title: 'Few-step Flow for 3D Generation via Marginal-Data Transport Distillation',
      short: 'MDT-dist',
      date: '2026',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/38394/42356',
      extra: [
        [ '项目页的联合一作实习脚注', 'https://zanue.github.io/mdt-dist/' ],
        [ '华中科大共同一作的学生履历及企业指导', 'https://taoranyi.com/' ],
        [ '企业团队负责人履历及同一成果', 'https://jaminfong.cn/' ],
        [
          '同一校企团队与交大在读实习生岑佳仲的 CVPR 论文',
          'https://openaccess.thecvf.com/content/CVPR2026/papers/Cen_Text-Image_Conditioned_3D_Generation_CVPR_2026_paper.pdf'
        ],
        [ '岑佳仲的在读、企业实习和指导记录', 'https://jumpat.github.io/jumpcat/' ],
        [ '同一校企团队后续论文 SCULPT', 'https://arxiv.org/html/2608.13541' ]
      ],
      evidence: '正式论文将易陶然标为共同第一作者，具名脚注说明该工作在华为实习期间完成。易陶然的主页记录华中科技大学硕士学籍、校内导师和企业研究指导。',
      advising: [ '校内共同导师', '易陶然的个人主页明确列王兴刚、刘文予为华中科技大学硕士阶段导师。', 'https://taoranyi.com/' ]
    },
    {
      id: 'gaussiandreamerpro-huawei-hust',
      company: '华为',
      team: '小艺 3D 团队',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '刘文予 · Wenyu Liu', '华中科技大学电子信息与通信学院教授、博士生导师，第一作者的高校导师。', 'https://eic.hust.edu.cn/professor/liuwenyu/' ],
      employee: [ '方杰民 · Jiemin Fang', '华为高级研究员，三维生成与神经渲染研究团队负责人及第一作者的企业实习导师。', 'https://asia.siggraph.org/2024/presenter/?uid=959373' ],
      student: [ '易陶然 · Taoran Yi', '华中科技大学硕士生，2023 年 11 月起在华为云实习，个人主页列明方杰民等企业导师与该研究成果。', 'https://taoranyi.com/' ],
      title: 'GaussianDreamerPro: Text to Manipulable 3D Gaussians with Highly Enhanced Quality',
      short: 'GaussianDreamerPro',
      date: '2024-06',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2406.18462',
      extra: [ [ '作者项目页', 'https://taoranyi.com/gaussiandreamerpro/' ], [ '同一学生与企业导师持续合著且明确标注实习的 MDT-dist', 'https://arxiv.org/html/2509.04406' ] ],
      evidence: '第一作者在华中科大硕士在读期间加入华为云开展三维生成研究。公开履历确认同一篇论文、校方导师刘文予、方杰民等华为企业实习导师。三方均为原文作者。',
      advising: [ '校内共同导师', '易陶然 的教育经历明确列 刘文予 为当时的校内共同导师。', 'https://taoranyi.com/' ]
    },
    {
      id: 'baidu-beamlora-fu',
      company: '百度',
      team: 'NLP Department',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '傅鹏 · Peng Fu', '国科大网安学院研究生导师、中科院信工所副研究员，论文通讯作者之一，也是学生导师。', 'https://people.ucas.ac.cn/~fupeng' ],
      employee: [ '吴华 · Hua Wu', '2010 年加入百度，任百度技术委员会主席、自然语言处理及知识图谱部门技术负责人。', 'https://wuhuanlp.github.io/index.html' ],
      student: [ '顾佴彬 · Naibin Gu', '2022 年 9 月起为国科大信工所直博生。2024 年 10 月至 2025 年 5 月在百度 NLP 部门实习，后继续在该部门科研实习。', 'https://gccnlp.github.io/' ],
      title: 'BeamLoRA: Beam-Constraint Low-Rank Adaptation',
      short: 'BeamLoRA',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.582.pdf',
      extra: [ [ '会议论文索引', 'https://aclanthology.org/2025.acl-long.582/' ], [ '课题组导师名录', 'https://iienlp.github.io/' ] ],
      evidence: 'ACL 论文首页具名说明顾佴彬在百度实习期间完成工作。他的个人主页明确国科大学籍、该论文、百度实习阶段和双侧导师；百度技术负责人及高校导师为同篇作者。',
      advising: [ '校内共同导师', '顾佴彬 的教育经历明确列 傅鹏 为当时的校内共同导师。', 'https://gccnlp.github.io/' ]
    },
    {
      id: 'baidu-beamlora-lin',
      company: '百度',
      team: 'NLP Department',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '林政 · Zheng Lin', '国科大网安学院研究生导师、中科院信工所研究员，论文署国科大，也是学生导师。', 'https://people.ucas.ac.cn/~linzheng' ],
      employee: [ '吴华 · Hua Wu', '2010 年加入百度，任百度技术委员会主席、自然语言处理及知识图谱部门技术负责人。', 'https://wuhuanlp.github.io/index.html' ],
      student: [ '顾佴彬 · Naibin Gu', '2022 年 9 月起为国科大信工所直博生。2024 年 10 月至 2025 年 5 月在百度 NLP 部门实习，后继续在该部门科研实习。', 'https://gccnlp.github.io/' ],
      title: 'BeamLoRA: Beam-Constraint Low-Rank Adaptation',
      short: 'BeamLoRA',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.582.pdf',
      extra: [ [ '会议论文索引', 'https://aclanthology.org/2025.acl-long.582/' ], [ '课题组导师名录', 'https://iienlp.github.io/' ] ],
      evidence: 'ACL 论文首页具名说明顾佴彬在百度实习期间完成工作。他的个人主页明确国科大学籍、该论文、百度实习阶段和双侧导师；百度技术负责人及高校导师为同篇作者。',
      advising: [ '校内共同导师', '顾佴彬 的教育经历明确列 林政 为当时的校内共同导师。', 'https://gccnlp.github.io/' ]
    },
    {
      id: 'baidu-beamlora-wang',
      company: '百度',
      team: 'NLP Department',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '王伟平 · Weiping Wang', '国科大博士生导师、中科院信工所副所长，学生主页列其为校方共同导师，同篇署名。', 'https://people.ucas.edu.cn/~wwp' ],
      employee: [ '吴华 · Hua Wu', '2010 年加入百度，任百度技术委员会主席、自然语言处理及知识图谱部门技术负责人。', 'https://wuhuanlp.github.io/index.html' ],
      student: [ '顾佴彬 · Naibin Gu', '2022 年 9 月起为国科大信工所直博生。2024 年 10 月至 2025 年 5 月在百度 NLP 部门实习，后继续在该部门科研实习。', 'https://gccnlp.github.io/' ],
      title: 'BeamLoRA: Beam-Constraint Low-Rank Adaptation',
      short: 'BeamLoRA',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.582.pdf',
      extra: [ [ '会议论文索引', 'https://aclanthology.org/2025.acl-long.582/' ], [ '课题组导师名录', 'https://iienlp.github.io/' ] ],
      evidence: 'ACL 论文首页具名说明顾佴彬在百度实习期间完成工作。他的个人主页明确国科大学籍、该论文、百度实习阶段和双侧导师；百度技术负责人及高校导师为同篇作者。',
      advising: [ '校内共同导师', '顾佴彬 的教育经历明确列 王伟平 为当时的校内共同导师。', 'https://gccnlp.github.io/' ]
    },
    {
      id: 'minimax-spatialimaginer-jingjing',
      company: 'MiniMax',
      team: '视觉与多模态研究',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '陈静静 · Jingjing Chen', '复旦大学教员，原文署复旦大学可信具身人工智能研究院，是焦洋的博士导师。', 'https://ai.fudan.edu.cn/7b/d6/c24781a490454/page.htm' ],
      employee: [ '陈绍祥 · Shaoxiang Chen', '2022 届复旦博士，2025 年起任 MiniMax 研究员；同篇仅署 MiniMax。', 'https://www.alphaxiv.org/zh/@shaoxiang-chen' ],
      student: [
        '焦洋 · Yang Jiao',
        '2026 年 2 月的个人主页版本同时记载复旦博士在读和 MiniMax Top Talent 实习，现有主页列 SpatialImaginer，MiniMax-M2 同期报告也列其为贡献者。',
        'https://github.com/SxJyJay/SxJyJay.github.io/commit/3b61e2ac1010ea86c955f24979e74d12404c993f'
      ],
      title: 'SpatialImaginer: Towards Adaptive Visual Imagination for Spatial Reasoning',
      short: 'SpatialImaginer',
      date: '2026-11-11',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2604.17385',
      extra: [
        [ 'ACM Multimedia 正式会议议程', 'https://2026.acmmm.org/site/ACMMM2026_Full_Programme.pdf' ],
        [ '焦洋个人成果页', 'https://sxjyjay.github.io/' ],
        [ '复旦校方确认陈绍祥博士毕业背景', 'https://news.fudan.edu.cn/2023/0217/c40a133883/page.htm' ],
        [ '同期 MiniMax-M2 报告', 'https://arxiv.org/html/2605.26494#A1' ]
      ],
      evidence: '论文首版于 2026 年 4 月公开，明确列出复旦在读学生、复旦教员和 MiniMax 研究员。焦洋 2025 年至 2026 年间的个人主页版本记录了在学期间 MiniMax 实习，并与企业技术报告的同期作者身份吻合。焦洋和陈绍祥同篇合作。',
      advising: [ '校内共同导师', '焦洋的个人主页列姜育刚和陈静静为其复旦大学博士导师。', 'https://sxjyjay.github.io/' ]
    },
    {
      id: 'minimax-spatialimaginer-jiang',
      company: 'MiniMax',
      team: '视觉与多模态研究',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '姜育刚 · Yu-Gang Jiang', '复旦大学教授、博士生导师，论文署复旦大学可信具身人工智能研究院，是焦洋的博士导师。', 'https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp' ],
      employee: [ '陈绍祥 · Shaoxiang Chen', '2022 届复旦博士，2025 年起任 MiniMax 研究员；同篇仅署 MiniMax。', 'https://www.alphaxiv.org/zh/@shaoxiang-chen' ],
      student: [
        '焦洋 · Yang Jiao',
        '2026 年 2 月的个人主页版本同时记载复旦博士在读和 MiniMax Top Talent 实习，现有主页列 SpatialImaginer，MiniMax-M2 同期报告也列其为贡献者。',
        'https://github.com/SxJyJay/SxJyJay.github.io/commit/3b61e2ac1010ea86c955f24979e74d12404c993f'
      ],
      title: 'SpatialImaginer: Towards Adaptive Visual Imagination for Spatial Reasoning',
      short: 'SpatialImaginer',
      date: '2026-11-11',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2604.17385',
      extra: [
        [ 'ACM Multimedia 正式会议议程', 'https://2026.acmmm.org/site/ACMMM2026_Full_Programme.pdf' ],
        [ '焦洋个人成果页', 'https://sxjyjay.github.io/' ],
        [ '复旦校方确认陈绍祥博士毕业背景', 'https://news.fudan.edu.cn/2023/0217/c40a133883/page.htm' ],
        [ '同期 MiniMax-M2 报告', 'https://arxiv.org/html/2605.26494#A1' ]
      ],
      evidence: '论文首版于 2026 年 4 月公开，明确列出复旦在读学生、复旦教员和 MiniMax 研究员。焦洋 2025 年至 2026 年间的个人主页版本记录了在学期间 MiniMax 实习，并与企业技术报告的同期作者身份吻合。焦洋和陈绍祥同篇合作。',
      advising: [ '校内共同导师', '焦洋的个人主页列姜育刚和陈静静为其复旦大学博士导师。', 'https://sxjyjay.github.io/' ]
    },
    {
      id: 'crowd-judge-huawei-cityu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ '马辰 · Chen Ma', '香港城市大学计算机科学系教师，学生的博士导师和该论文通讯作者。', 'https://scholars.cityu.edu.hk/en/persons/chenma/' ],
      employee: [ 'Lifeng Shang', '华为诺亚方舟实验室首席研究员，原文以华为署名。', 'https://www.jstage.jst.go.jp/article/ipsjjip/26/0/26_768/_pdf' ],
      student: [
        '张启源 · Qiyuan Zhang',
        '香港城市大学博士生，2024 年 3 月至 2025 年 3 月在华为诺亚方舟研究实习，简历在该条目下列出论文所研究的群体比较评估方法。',
        'https://zhangqiyuan-rico.github.io/cv/Qiyuan_CV.pdf'
      ],
      title: 'Crowd Comparative Reasoning: Unlocking Comprehensive Evaluations for LLM-as-a-Judge',
      short: 'Crowd Comparative Reasoning',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.252.pdf',
      extra: [
        [ '香港城市大学博士生名录', 'https://scholars.cityu.edu.hk/en/persons/qzhang732/' ],
        [ '实习期间公开的预印本', 'https://arxiv.org/abs/2502.12501' ],
        [ '学生在同一华为实习期间的后续会议论文', 'https://arxiv.org/abs/2410.05193' ]
      ],
      evidence: '学生简历列明华为实习日期、企业导师 Yufei Wang 及群体比较评估项目，三项均与正式论文及实习期内的预印本对应。论文同时列城大导师及正式华为研究人员。',
      advising: [ '校内导师', '张启源 的教育经历明确列 马辰 为当时的校内导师。', 'https://zhangqiyuan-rico.github.io/cv/Qiyuan_CV.pdf' ]
    },
    {
      id: 'mix-grm-tencent-cityu',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ '马辰 · Chen Ma', '香港城市大学计算机科学系教师，第一作者的博士导师及论文通讯作者。', 'https://scholars.cityu.edu.hk/en/persons/chenma/' ],
      employee: [ 'Qingfeng Sun', '腾讯混元 X 高级研究员，原文以腾讯混元署名。', 'https://victorqsun.github.io/' ],
      student: [ '张启源 · Qiyuan Zhang', '香港城市大学博士生，2025 年 3 月至 9 月及 2026 年 1 月起于腾讯混元 X 科研实习。', 'https://zhangqiyuan-rico.github.io/cv/Qiyuan_CV.pdf' ],
      title: 'Beyond Length Scaling: Synergizing Breadth and Depth for Generative Reward Models',
      short: 'Mix-GRM',
      date: '2026-07',
      venue: 'ACL Findings',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-acl.709.pdf',
      extra: [
        [ '香港城市大学博士生名录及同一成果', 'https://scholars.cityu.edu.hk/en/persons/qzhang732/' ],
        [ '同组校企署名与学生简历点名的另一篇论文', 'https://aclanthology.org/2026.acl-long.1439.pdf' ]
      ],
      evidence: 'ACL 正式版将第一作者列为城大与腾讯混元双署名。学生简历分别列出两段混元 X 实习、具名企业导师 Yufei Wang 和本论文所述的生成式奖励模型研究。',
      advising: [ '校内导师', '张启源 的教育经历明确列 马辰 为当时的校内导师。', 'https://zhangqiyuan-rico.github.io/cv/Qiyuan_CV.pdf' ]
    },
    {
      id: 'specsearch-huawei-ustc',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '王杰 · Jie Wang', '中国科学技术大学教师，论文通讯作者。学校主页列该校任职及同一学生的共同成果。', 'https://iatyz.ustc.edu.cn/teacher/profile/name/%E7%8E%8B%E6%9D%B0' ],
      employee: [ '袁明轩 · Mingxuan Yuan', '华为诺亚方舟实验室首席研究员，原文华为共同作者。', 'https://www.eda2.com/iseda2024/tutorials.html' ],
      student: [ 'Zhihai Wang', '2022 至 2025 年为中国科学技术大学博士生，2022 年 6 月至 2025 年 4 月为华为诺亚方舟研究实习生。', 'https://zhihaiwangx.github.io/' ],
      title: 'Accelerating Large Language Model Reasoning via Speculative Search',
      short: 'SpecSearch',
      date: '2025-07',
      venue: 'ICML',
      area: 'AI 系统',
      paper: 'https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25di/wang25di.pdf',
      extra: [ [ 'PMLR 会议记录', 'https://proceedings.mlr.press/v267/wang25di.html' ], [ '华为作者职业履历', 'https://orcid.org/0000-0002-2236-8784' ] ],
      evidence: 'ICML 正式 PDF 首页点名工作在第一作者的华为实习期间完成。其个人履历列出同一成果、科大学籍和实习时间，论文列华为正式研究员和两位科大教师。',
      advising: [ '校内导师', 'Zhihai Wang 的教育经历明确列 王杰 为当时的校内导师。', 'https://zhihaiwangx.github.io/' ]
    },
    {
      id: 'tencent-codable-watermark-pku',
      company: '腾讯',
      team: 'WeChat AI · 模式识别中心',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '孙栩 · Xu Sun', '北京大学计算机学院长聘副教授，两版均署北京大学。', 'https://cs.pku.edu.cn/info/1078/1673.htm' ],
      employee: [ '陈德里 · Deli Chen', '2021–2023 年任腾讯 WeChat AI 正式研究员；2023 年 7 月首版署腾讯并使用企业邮箱。', 'https://victorchen96.github.io/' ],
      student: [
        'Wenkai Yang',
        '2020 年 9 月至 2023 年 7 月为北大硕士生，2021 年 1 月至 2024 年 8 月在腾讯 WeChat AI 实习，原文首版脚注明确实习和在北大期间的贡献。后于 2023 年 9 月入读人大。',
        'https://keven980716.github.io/'
      ],
      title: 'Towards Codable Watermarking for Injecting Multi-Bits Information to LLMs',
      short: 'Codable Watermarking',
      date: '2024-05',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2024/file/abdc8c031aa6c6917c3b593166e5e340-Paper-Conference.pdf',
      extra: [ [ '2023 年 7 月首版作者稿和腾讯署名', 'https://arxiv.org/pdf/2307.15992v1' ] ],
      evidence: '首版给出在研阶段陈德里的腾讯正式署名和企业邮箱，其个人履历明确为腾讯研究员。首版具名说明 Wenkai Yang 实习且部分工作发生在其北大学籍期间。后续论文署人大及腾讯，与其博士入学和实习的履历一致。陈德里在正式版改署后来雇主 DeepSeek。',
      advising: [ '校内导师', 'Wenkai Yang 的教育经历明确列 孙栩 为当时的校内导师。', 'https://keven980716.github.io/' ]
    },
    {
      id: 'diffuasr-huawei-xjtu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [
        '田锋 · Feng Tian',
        '西安交通大学计算机科学与技术学院教授、第一作者博士导师，同篇署名西安交通大学。',
        'https://faculty.xjtu.edu.cn/fengtian/zh_CN/zhym/976524/list/index.htm'
      ],
      employee: [ 'Ruiming Tang', '2014 年入职华为，研究时任华为诺亚方舟实验室推荐与搜索团队负责人，论文华为通讯作者。', 'https://dlp4rec.github.io/org/' ],
      student: [
        '刘启东 · Qidong Liu',
        '研究时在西安交通大学攻读博士，并在香港城市大学联合培养。公开简历将该华为诺亚方舟合作研究列于 2023 年 2 月至 6 月。',
        'https://liuqidong07.github.io/cv/resume_20240326.pdf'
      ],
      title: 'Diffusion Augmentation for Sequential Recommendation',
      short: 'DiffuASR',
      date: '2023-10',
      venue: 'CIKM',
      area: '推荐与检索',
      paper: 'https://arxiv.org/pdf/2309.12858',
      extra: [
        [ '西交大教师履历回溯本人博士学籍', 'https://gr.xjtu.edu.cn/lqdong/' ],
        [ '城大官方收录的正式会议信息', 'https://scholars.cityu.edu.hk/en/publications/diffusion-augmentation-for-sequential-recommendation/' ],
        [ '新加坡国立大学讲座中的华为入职履历', 'https://events.comp.nus.edu.sg/view/15579' ]
      ],
      evidence: '学生公开简历在华为诺亚方舟项目下写明该论文、开展月份及两位具名华为指导者。原文的校方及企业作者，与官方履历核实的博士生、校方导师和华为研究岗位相符。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 田锋 对 刘启东 的指导关系。', 'https://gr.xjtu.edu.cn/lqdong/' ]
    },
    {
      id: 'allospatial-huawei-buaa',
      company: '华为',
      team: '2012 实验室 · 基础大模型部',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '韦星星 · Xingxing Wei', '北京航空航天大学人工智能研究院教师、第一作者博士导师及论文通讯作者。', 'https://rose-vision.github.io/team/' ],
      employee: [ 'Yubin Wang', '论文华为通讯作者，其公开职业履历列诺亚方舟实验室岗位，2024 年已结束港科大硕士阶段。', 'https://cn.linkedin.com/in/yubinwang11/zh-cn' ],
      student: [ '阮受炜 · Shouwei Ruan', '北京航空航天大学博士生，2026 年 1 月至 9 月在华为 2012 实验室基础大模型部做多模态与空间智能研究。', 'https://heathcliff-saku.github.io/' ],
      title: 'AlloSpatial: Agentic Harness Framework for Spatial Reasoning in Foundation Models',
      short: 'AlloSpatial',
      date: '2026-06',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2606.08952',
      extra: [ [ '同一学生和华为团队连续合著的 World2Mind', 'https://arxiv.org/pdf/2603.09774' ], [ '北航高校教师与博士生团队名录', 'https://rose-vision.github.io/team/' ] ],
      evidence: '论文在第一作者华为研究实习期间公开，学生主页列该成果及同期空间智能研究方向。两篇前后衔接的研究均由该生与同一华为通讯作者及企业研究团队合著。',
      advising: [ '校内导师', '阮受炜 的教育经历明确列 韦星星 为当时的校内导师。', 'https://heathcliff-saku.github.io/' ]
    },
    {
      id: 'world2mind-huawei-thu',
      company: '华为',
      team: '2012 实验室 · 基础大模型部',
      school: '清华大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '苏航 · Hang Su', '清华大学计算机系副研究员，学生在清华的联合培养导师，同篇以清华署名。', 'https://ml.cs.tsinghua.edu.cn/people.html' ],
      employee: [ 'Yubin Wang', '论文华为通讯作者，公开职业履历列诺亚方舟实验室，2024 年已结束港科大硕士阶段。', 'https://cn.linkedin.com/in/yubinwang11/zh-cn' ],
      student: [ '阮受炜 · Shouwei Ruan', '北航博士生，2026 年 1 月至 9 月为华为 2012 实验室基础大模型部研究实习生，研究多模态空间智能。', 'https://heathcliff-saku.github.io/' ],
      title: 'World2Mind: Cognition Toolkit for Allocentric Spatial Reasoning in Foundation Models',
      short: 'World2Mind',
      date: '2026-03',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2603.09774',
      extra: [
        [ '同一华为团队和学生延续该项目的 AlloSpatial', 'https://arxiv.org/pdf/2606.08952' ],
        [ '清华导师及北航学籍的学生本人履历', 'https://heathcliff-saku.github.io/files/%E9%98%AE%E5%8F%97%E7%82%9C%E7%AE%80%E5%8E%862024-07.pdf' ]
      ],
      evidence: '学生在华为 2012 实验室的多模态空间智能实习期间，与其清华联合培养导师及三位华为作者合著，两个月后延续此成果的 AlloSpatial 再次与同一华为研究团队合著。',
      advising: [ '跨校共同导师', '阮受炜的个人主页列明北航博士学籍和 2023 年起在清华访问培养的经历，点名苏航为清华的共同导师。', 'https://heathcliff-saku.github.io/#experience' ]
    },
    {
      id: 'fans-huawei-polyu',
      company: '华为',
      team: '终端业务',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ 'Xiao-Ming Wu', '香港理工大学数据科学与人工智能学系副教授、学生博士导师及论文通讯作者。', 'https://www.polyu.edu.hk/rcpst/people/prof-wu-xiaoming/' ],
      employee: [ 'Zhenhua Dong', '华为诺亚方舟实验室推荐与因果推断研究团队技术专家，同篇华为署名。', 'https://rgm-cikm23.github.io/' ],
      student: [ '刘奇煚 · Qijiong Liu', '2021 年起为港理工博士生，2022 年 4 月至 8 月于华为终端业务科研实习并研发 FANS。', 'https://liu.qijiong.work/' ],
      title: 'FANS: Fast Non-Autoregressive Sequence Generation for Item List Continuation',
      short: 'FANS',
      date: '2023-04',
      venue: 'The Web Conference',
      area: '推荐与检索',
      paper: 'https://arxiv.org/pdf/2304.00545',
      extra: [
        [ 'ACM 会议正式版', 'https://doi.org/10.1145/3543507.3583430' ],
        [ '学校博士论文对同一成果的记录', 'https://theses.lib.polyu.edu.hk/bitstream/200/13274/3/7720.pdf' ],
        [ '2023 年学生简历列华为实习及 FANS 项目', 'https://liu.qijiong.work/resume/index.html' ]
      ],
      evidence: '该文于 2023 年首次公开。学生在博士阶段于华为终端业务研发 FANS，论文由港理工导师与华为研究人员共同署名，后纳入学生的港理工博士论文。',
      advising: [ '校内导师', '刘奇煚 的教育经历明确列 Xiao-Ming Wu 为当时的校内导师。', 'https://liu.qijiong.work/' ]
    },
    {
      id: 'future-priors-ali-buaa',
      company: '阿里巴巴',
      team: '高德（Amap）',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '崔志勇 · Zhiyong Cui', '2023 年起任北京航空航天大学教授、博士生导师，学生校方导师和论文通讯作者。', 'https://teacher.buaa.edu.cn/cuizhiyong/zh_CN/index.htm' ],
      employee: [
        'Xinyuan Chang',
        '公开学术履历列 2021 年硕士毕业后任阿里研究员，高德项目页列其团队负责人职责，原文以高德署名。',
        'https://lacuna.tiptreesystems.com/author/xinyuan-chang/aut_c8f336fb84334978a642af0fa6d97f4b'
      ],
      student: [ '李睿楷 · Ruikai Li', '2024 年 9 月起为北航博士生，2025 年 6 月至 12 月在阿里高德研究实习。', 'https://buaa-rickyli.github.io/' ],
      title: 'AMap: Distilling Future Priors for Ahead-Aware Online HD Map Construction',
      short: 'AMap',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Li_AMap_Distilling_Future_Priors_for_Ahead-Aware_Online_HD_Map_Construction_CVPR_2026_paper.pdf',
      extra: [
        [ '实习期内公开的预印本', 'https://arxiv.org/pdf/2512.19150' ],
        [ '高德项目中的企业人员正式职责', 'https://amap-cvlab.github.io/ABot-Manipulation/' ],
        [ '同时期论文中的两位北航教师任职', 'https://ieeexplore.ieee.org/abstract/document/11433455/authors' ]
      ],
      evidence: '共同一作本人在履历中将该论文明确标注为高德实习成果，给出北航博士入学和实习月份，论文以校企双署名，并同篇列有北航导师、其他校方教授及高德研究人员。',
      advising: [ '校内导师', '李睿楷 的教育经历明确列 崔志勇 为当时的校内导师。', 'https://buaa-rickyli.github.io/' ]
    },
    {
      id: 'jd-instantdiscriminability-cheng',
      company: '京东',
      team: '京东探索研究院',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '程健 · Jian Cheng', '2022 年起为北京航空航天大学计算机学院副教授，是石鼎丰的博士导师及同篇通讯作者。', 'https://jian-cheng.org/resume.html' ],
      employee: [ '曹琼 · Qiong Cao', '京东探索研究院 Staff Research Scientist，同篇京东合作者。', 'https://qiongcao.github.io/' ],
      student: [ '石鼎丰 · Dingfeng Shi', '研究时为北航博士生，2025 年取得博士学位，个人主页明确曾在京东探索研究院实习并与曹琼共同开展研究。', 'https://dingfengshi.github.io/' ],
      title: 'Temporal Action Localization with Enhanced Instant Discriminability',
      short: 'Enhanced Instant Discriminability',
      date: '2023-09',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2309.05590',
      extra: [ [ '企业研究员任职履历', 'https://qiongcao.github.io/files/CV_QiongCao.pdf.pdf' ] ],
      evidence: '论文首页注明工作在京东实习期间完成。第一作者公开履历明确学籍、企业科研实习和同篇企业研究员曹琼；北航教师与京东研究员同篇署名。',
      advising: [ '校内共同导师', '石鼎丰的博士经历同时列朱皞罡和程健为指导教师。', 'https://dingfengshi.github.io/' ]
    },
    {
      id: 'jd-instantdiscriminability-zhu',
      company: '京东',
      team: '京东探索研究院',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '朱皞罡 · Haogang Zhu', '北京航空航天大学计算机学院教授，是石鼎丰的博士导师及同篇通讯作者。', 'https://ecpkn.buaa.edu.cn/info/1138/2728.htm' ],
      employee: [ '曹琼 · Qiong Cao', '京东探索研究院 Staff Research Scientist，同篇京东合作者。', 'https://qiongcao.github.io/' ],
      student: [ '石鼎丰 · Dingfeng Shi', '研究时为北航博士生，2025 年取得博士学位，个人主页明确曾在京东探索研究院实习并与曹琼共同开展研究。', 'https://dingfengshi.github.io/' ],
      title: 'Temporal Action Localization with Enhanced Instant Discriminability',
      short: 'Enhanced Instant Discriminability',
      date: '2023-09',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2309.05590',
      extra: [ [ '企业研究员任职履历', 'https://qiongcao.github.io/files/CV_QiongCao.pdf.pdf' ] ],
      evidence: '论文首页注明工作在京东实习期间完成。第一作者公开履历明确学籍、企业科研实习和同篇企业研究员曹琼；北航教师与京东研究员同篇署名。',
      advising: [ '校内共同导师', '石鼎丰的博士经历同时列朱皞罡和程健为指导教师。', 'https://dingfengshi.github.io/' ]
    },
    {
      id: 'baidu-instructeval-li',
      company: '百度',
      team: 'NLP Department',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '李素建 · Sujian Li', '北京大学计算语言学研究所副教授、TANGENT 实验室负责人，论文通讯作者。', 'https://eecs.pku.edu.cn/xxkxjsxy/info/1467/9616.htm' ],
      employee: [ 'Xinyan Xiao', '2016 年起为百度 NLP 研究员，同篇署百度，另有同期署名百度的相关研究。', 'https://www.alphaxiv.org/zh/@xinyan-xiao' ],
      student: [ 'Wenhao Wu', '北大 TANGENT 组公开名录列为博士生，论文同一邮箱署北大，首页具名注明百度实习。', 'https://pku-tangent.github.io/' ],
      title: 'InstructEval: Instruction-Tuned Text Evaluator from Human Preference',
      short: 'InstructEval',
      date: '2024-08',
      venue: 'Findings of ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.findings-acl.799.pdf',
      extra: [
        [ '2021—2025 北大博士就读年份', 'https://lacuna.tiptreesystems.com/author/wenhao-wu/aut_18de757390d74dd6b5ef9d4cd76a6a6c' ],
        [ '同一三方早期合著', 'https://aclanthology.org/2023.acl-long.18.pdf' ]
      ],
      evidence: 'ACL 论文在北大第一作者名下注明在百度实习期间完成工作。其导师课题组名单确认北大博士生身份，百度正式研究员同篇合著。',
      advising: [ '课题组指导', '李素建 的个人团队或学生名录将 Wenhao Wu 列为当时的学生。', 'https://pku-tangent.github.io/' ]
    },
    {
      id: 'kuaishou-orthus-deng',
      company: '快手',
      team: '推荐算法',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '邓志杰 · Zhijie Deng', '上海交通大学清源研究院教员，寇思麒博士导师及同篇作者。', 'https://www.qingyuan.sjtu.edu.cn/a/Zhijie-Deng.html' ],
      employee: [ '彭江 · Peng Jiang', '快手推荐算法负责人，同篇署快手。', 'https://ml-summit.org/speaker/581?lang=en&uid=c1014' ],
      student: [ '寇思麒 · Siqi Kou', '上海交通大学数学本科生毕业后留校读博，主页列导师邓志杰及 Orthus。论文首页具名附快手实习脚注。', 'https://karrykkk.github.io/' ],
      title: 'Orthus: Autoregressive Interleaved Image-Text Generation with Modality-Specific Heads',
      short: 'Orthus',
      date: '2025-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mlresearch/v267/main/assets/kou25a/kou25a.pdf',
      extra: [
        [ '正式会议论文索引', 'https://proceedings.mlr.press/v267/kou25a.html' ],
        [ '2024 年起攻读上交博士', 'https://lacuna.tiptreesystems.com/author/siqi-kou' ]
      ],
      evidence: 'ICML 论文首页说明寇思麒在快手实习期间参与研究。学生履历和导师信息与论文一致，快手推荐算法负责人及上交教师同篇合著。',
      advising: [ '校内导师', '寇思麒 的教育经历明确列 邓志杰 为当时的校内导师。', 'https://karrykkk.github.io/' ]
    },
    {
      id: 'bytedance-beyond-data-schedule',
      company: '字节跳动',
      team: 'Seed',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [
        '张景昭 · Jingzhao Zhang',
        '清华大学交叉信息研究院助理教授，Jiazheng Li 的博士导师及论文通讯作者。',
        'https://iiis.tsinghua.edu.cn/en/People/Faculty/ZhangJingzhao.htm'
      ],
      employee: [ '蔡天乐 · Tianle Cai', '2025 年毕业后入职字节跳动 Seed Edge，预印本以 ByteDance Seed 署名。', 'https://ai4s.fyi/people/tianle-cai' ],
      student: [ 'Jiazheng Li', '2025 年 9 月进入清华大学人工智能学院攻读博士，2025 年 11 月起在字节跳动 Seed 从事大模型高效预训练实习。', 'https://jiazhenglithu.github.io/' ],
      title: 'Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting',
      short: 'Beyond Data Schedule',
      date: '2026-10',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2610.32141',
      extra: [ [ '同组实习生本人列蔡天乐为字节跳动导师', 'https://lithiumda.github.io/' ], [ '学生公开简历中的入学日期', 'https://jiazhenglithu.github.io/files/main.pdf' ] ],
      evidence: '预印本首页给第一作者清华与字节跳动 Seed 双署名，并注明研究在 Seed 完成；第一作者个人履历给出博士入学、清华导师及企业实习开始时间。',
      advising: [ '校内导师', 'Jiazheng Li 的教育经历明确列 张景昭 为当时的校内导师。', 'https://jiazhenglithu.github.io/' ]
    },
    {
      id: 'bytedance-swe-swiss',
      company: '字节跳动',
      team: 'Seed',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '贺笛 · Di He', '北京大学智能学院助理教授，何震宇的博士导师及论文通讯作者。', 'https://www.ai.pku.edu.cn/en/info/1459/2079.htm' ],
      employee: [ 'Jiaze Chen', '字节跳动 AI Lab 研究人员、曾指导该公司实习生，后以 ByteDance Seed 署名担任该项目联合负责人。', 'https://cn.linkedin.com/in/jiaze-chen-00ab2681' ],
      student: [ '何震宇 · Zhenyu He', '研究时为北大博士生，在字节跳动 Seed 实习，个人主页列该研究开展于 2025 年 2 月至 8 月。', 'https://zhenyuhe00.github.io/' ],
      title: 'SWE-Swiss: A Multi-Task Fine-Tuning and RL Recipe for High-Performance Issue Resolution',
      short: 'SWE-Swiss',
      date: '2026-07',
      venue: 'Findings of ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-acl.790.pdf',
      extra: [
        [ '同组研究员履历列其任企业导师', 'https://jiangjiechen.github.io/uploads/resume.pdf' ],
        [ '同期以 Seed 团队成员署名的技术论文', 'https://arxiv.org/abs/2504.13914' ]
      ],
      evidence: '论文首页在北大第一作者和企业项目负责人所在的脚注中注明工作于何震宇的字节跳动实习期间完成。学生本人列出该项目与学校导师。',
      advising: [ '校内导师', '何震宇 的教育经历明确列 贺笛 为当时的校内导师。', 'https://zhenyuhe00.github.io/' ]
    },
    {
      id: 'bytedance-futurex',
      company: '字节跳动',
      team: 'Seed Edge',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '邱锡鹏 · Xipeng Qiu', '复旦大学计算机科学技术学院教授、曾致远的校方博士导师及论文共同通讯作者。', 'https://cs.fudan.edu.cn/7b/d6/c24781a490454/page.htm' ],
      employee: [ 'Wenhao Huang', '研究时为字节跳动 Seed 研究人员与企业博士导师，以 Seed 署名担任论文共同通讯作者。', 'https://openreview.net/attachment?id=MQc4ICdob3&name=pdf' ],
      student: [ '曾致远 · Zhiyuan Zeng', '2023 年起为复旦大学博士生，与字节跳动 Seed 联合培养，2025 年 4 月起在 Seed Edge 实习并参加 FutureX。', 'https://zhiyuanzeng.github.io/' ],
      title: 'FutureX: An Advanced Live Benchmark for LLM Agents in Future Prediction',
      short: 'FutureX',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf/9bb95ba3a934d5298f085a174891a7d0b729563e.pdf',
      extra: [
        [ '预印本与三方署名', 'https://arxiv.org/abs/2508.11987' ],
        [ '企业人员职业资料', 'https://cn.linkedin.com/in/wenhao-huang-476a0aaa' ],
        [ '复旦—字节联培及导师的同期报道', 'https://k.sina.com.cn/article_7517400647_1c0126e4705908o41i.html' ]
      ],
      evidence: '论文作者贡献说明明确曾致远在项目中为 Seed 实习生。其主页写明复旦大学与字节跳动联合培养关系、两位具名导师及 FutureX 项目。',
      advising: [ '校内导师', '曾致远的个人主页列邱锡鹏为复旦大学博士导师，并列字节跳动联培。', 'https://zhiyuanzeng.github.io/' ]
    },
    {
      id: 'bytedance-seed-diffusion-ma',
      company: '字节跳动',
      team: 'Seed',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '马维英 · Wei-Ying Ma', '清华大学智能产业研究院讲席教授、宋宇轩博士导师，原文列为研究指导。', 'https://air.tsinghua.edu.cn/weiyingma.html' ],
      employee: [
        '吴永辉 · Yonghui Wu',
        '2025 年 2 月入职字节跳动负责 Seed 基础研究；原文以字节跳动 Seed 署名并列为研究指导。',
        'https://www.yicaiglobal.com/news/chinas-tiktok-owner-taps-google-ai-expert-wu-yonghui-for-basic-ai-research-source-says'
      ],
      student: [
        '宋宇轩 · Yuxuan Song',
        '2022 年 9 月起为清华大学博士生，2024 年 5 月起在字节跳动 Seed 大模型团队实习；研究报告列为联合负责人。',
        'https://yuxuansong.com/data/Yuxuan_CV_update.pdf'
      ],
      title: 'Seed Diffusion: A Large-Scale Diffusion Language Model with High-Speed Inference',
      short: 'Seed Diffusion',
      date: '2025-08',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/abs/2508.02193',
      extra: [
        [ '原报告的校企联合实验室及作者分工', 'https://lf3-static.bytednsdoc.com/obj/eden-cn/hyvsmeh7uhobf/sdiff_updated.pdf' ],
        [
          '字节跳动 Seed 官方论文页',
          'https://seed.bytedance.com/en/public_papers/seed-diffusion-a-large-scale-diffusion-language-model-with-high-speed-inference'
        ]
      ],
      evidence: '清华 AIR 与字节跳动 Seed 联合实验室的研究报告明确列出学生双署名及校企研究指导人员。学生的公开简历确认博士在读期间在 Seed 实习，研究包括扩散语言模型。',
      advising: [ '校内导师', '宋宇轩 的教育经历明确列 马维英 为当时的校内导师。', 'https://yuxuansong.com/data/Yuxuan_CV_update.pdf' ]
    },
    {
      id: 'infiniverse-huawei-cuhksz',
      company: '华为',
      team: '基础大模型部 · 空间智能',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '李臻 · Zhen Li', '香港中文大学（深圳）理工学院教师、Deep Bit 实验室负责人及论文共同通讯作者。', 'https://mypage.cuhk.edu.cn/academics/lizhen/' ],
      employee: [ '颜旭 · Xu Yan', '港中大（深圳）博士毕业后任华为基础大模型部空间智能团队技术专家，论文华为通讯作者。', 'https://yanx27.github.io/' ],
      student: [ 'Xiaoyu Ye', '2024 年 9 月起在香港中文大学（深圳）Deep Bit 实验室攻读博士，论文校企双署名并标注华为科研实习。', 'https://www.alphaxiv.org/zh/%40xiaoyu-ye' ],
      title: 'InfiniVerse: Occupancy Guided Unbounded Scene Generation for Autonomous Driving',
      short: 'InfiniVerse',
      date: '2026-06',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2606.31109',
      extra: [
        [ '预印本首次公开时间', 'https://arxiv.org/abs/2606.31109' ],
        [ '港科大（广州）共同一作的在读履历', 'https://len-li.github.io/' ],
        [ '同团队早期具名实习论文 RadOcc', 'https://ojs.aaai.org/index.php/AAAI/article/download/28533/29039' ]
      ],
      evidence: '原文两位共同一作均用校企双署名并标明华为实习，分别在港中大（深圳）和港科大（广州）攻读博士。论文华为共同通讯作者的个人履历明确其技术专家岗位及研究团队。',
      advising: [ '课题组指导', '李臻的香港中文大学（深圳）课题组主页将 Xiaoyu Ye 列在其在读博士生名单。', 'https://mypage.cuhk.edu.cn/academics/lizhen/' ]
    },
    {
      id: 'infiniverse-huawei-hkustgz-chen',
      company: '华为',
      team: '基础大模型部 · 空间智能',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ 'Ying-Cong Chen', '香港科技大学（广州）教师、ENVISION 实验室负责人，原文以港科大（广州）署名。', 'https://envision-research.hkust-gz.edu.cn/people-page.html' ],
      employee: [ '颜旭 · Xu Yan', '港中大（深圳）博士毕业后任华为基础大模型部空间智能团队技术专家，论文华为通讯作者。', 'https://yanx27.github.io/' ],
      student: [ 'Leheng Li', '香港科技大学（广州）在读博士生，论文以港科大（广州）与华为双署名，为共同第一作者。', 'https://len-li.github.io/' ],
      title: 'InfiniVerse: Occupancy Guided Unbounded Scene Generation for Autonomous Driving',
      short: 'InfiniVerse',
      date: '2026-06',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2606.31109',
      extra: [
        [ '预印本首次公开时间', 'https://arxiv.org/abs/2606.31109' ],
        [ '港科大（广州）共同一作的在读履历', 'https://len-li.github.io/' ],
        [ '同团队早期具名实习论文 RadOcc', 'https://ojs.aaai.org/index.php/AAAI/article/download/28533/29039' ]
      ],
      evidence: 'InfiniVerse 原文在 Leheng Li 名下列港科大（广州）及华为双署名和实习标记；其个人主页确认博士学籍和导师，企业通讯作者的履历列明华为的正式研发岗位。',
      advising: [ '校内导师', 'Len Li 的个人主页明确列 Ying-Cong Chen 为其港科大（广州）博士导师。', 'https://len-li.github.io/' ]
    },
    {
      id: 'barbell-huawei-cuhksz',
      company: '华为',
      team: '华为云',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '钟叶青 · Yeh-Ching Chung', '2018 年加入香港中文大学（深圳），任数据科学学院教授、第一作者博士导师。', 'https://sds.cuhk.edu.cn/teacher/316' ],
      employee: [ '陈爽 · Shuang Chen', '2021 年 8 月至 2026 年 4 月任华为云软硬件协同技术专家，以华为云署名参与研究。', 'https://sc2682cornell.github.io/' ],
      student: [ '刘宇轩 · Yuxuan Liu', '2022 年起在香港中文大学（深圳）攻读博士，2023 年 2 月至 2024 年 6 月在华为云系统工程部门开展交互负载生成研究实习。', 'https://tonyyxliu.github.io/cv/' ],
      title: 'Barbell: An Extensible Generator of On-demand Loads for Interactive Cloud Services',
      short: 'Barbell',
      date: '2026-07',
      venue: 'APPT',
      area: 'AI 系统',
      paper: 'https://tonyyxliu.github.io/files/Papers/APPT26__Barbell__An_Extensible_Generator_of_On_Demand_Interactive_Cloud_Service_Workloads__Camera_Ready_.pdf',
      extra: [
        [ 'Springer 正式会议论文集', 'https://link.springer.com/book/10.1007/978-981-92-4805-6?page=1' ],
        [ '第一作者自述项目贡献和华为合作内容', 'https://tonyyxliu.github.io/publication/2026-07-28-Barbell' ]
      ],
      evidence: '学生履历列在华为云系统工程部门实习期间实现交互负载生成器。学生和企业作者均列出同一篇论文，论文说明在多个交互服务中验证，其中包括 vLLM 推理。',
      advising: [ '校内导师', '刘宇轩 的教育经历明确列 钟叶青 为当时的校内导师。', 'https://tonyyxliu.github.io/cv/' ]
    },
    {
      id: 'xhs-vad-liu',
      company: '小红书',
      team: 'DeepExperience',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '刘维文 · Weiwen Liu', '上海交通大学计算机学院准聘副教授，论文共同通讯作者。', 'https://cs.sjtu.edu.cn/en/jiaoshiml/liuweiwen.html' ],
      employee: [ '焦文祥 · Wenxiang Jiao', '小红书 DeepExperience 大模型算法专家，同篇署小红书并列为通讯作者。', 'https://wxjiao.github.io/' ],
      student: [ 'Kangning Zhang', '上海交通大学计算机方向在读博士生，个人主页记录 2025 年起在小红书 DeepExperience 进行科研实习。', 'https://zkangning.github.io/' ],
      title: 'VAD: Attributing Visual Evidence for Target Reconstruction in Multimodal On-Policy Distillation',
      short: 'VAD',
      date: '2026-07',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2607.28590v1',
      extra: [
        [ '作者与预印本时间', 'https://arxiv.org/abs/2607.28590' ],
        [ 'DeepExperience 团队项目仓库', 'https://github.com/DeepExperience/VAD_Multimodal_OPD' ]
      ],
      evidence: 'PDF 首页在上海交通大学与小红书双署名的 Kangning Zhang 名下标注科研实习。其主页确认入组与在读，DeepExperience 官方仓库、企业算法专家和同篇高校教师信息一致。',
      advising: [ '校内共同导师', 'Kangning Zhang 的教育经历明确列 刘维文 为当时的校内共同导师。', 'https://zkangning.github.io/' ]
    },
    {
      id: 'xhs-vad-zhang',
      company: '小红书',
      team: 'DeepExperience',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [
        '张伟楠 · Weinan Zhang',
        '上海交通大学计算机学院教师，约翰·霍普克罗夫特计算机科学中心副主任，同篇共同通讯作者。',
        'https://jhc.sjtu.edu.cn/people/members/deputy_director/weinan-zhang.html'
      ],
      employee: [ '焦文祥 · Wenxiang Jiao', '小红书 DeepExperience 大模型算法专家，同篇署小红书并列为通讯作者。', 'https://wxjiao.github.io/' ],
      student: [ 'Kangning Zhang', '上海交通大学计算机方向在读博士生，个人主页记录 2025 年起在小红书 DeepExperience 进行科研实习。', 'https://zkangning.github.io/' ],
      title: 'VAD: Attributing Visual Evidence for Target Reconstruction in Multimodal On-Policy Distillation',
      short: 'VAD',
      date: '2026-07',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2607.28590v1',
      extra: [
        [ '作者与预印本时间', 'https://arxiv.org/abs/2607.28590' ],
        [ 'DeepExperience 团队项目仓库', 'https://github.com/DeepExperience/VAD_Multimodal_OPD' ]
      ],
      evidence: 'PDF 首页在上海交通大学与小红书双署名的 Kangning Zhang 名下标注科研实习。其主页确认入组与在读，DeepExperience 官方仓库、企业算法专家和同篇高校教师信息一致。',
      advising: [ '校内共同导师', 'Kangning Zhang 的教育经历明确列 张伟楠 为当时的校内共同导师。', 'https://zkangning.github.io/' ]
    },
    {
      id: 'xhs-vad-yu',
      company: '小红书',
      team: 'DeepExperience',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '俞勇 · Yong Yu', '上海交通大学计算机学院教授，同篇共同通讯作者。', 'https://en.zhiyuan.sjtu.edu.cn/en/faculty/153/detail?type=Academic+Council' ],
      employee: [ '焦文祥 · Wenxiang Jiao', '小红书 DeepExperience 大模型算法专家，同篇署小红书并列为通讯作者。', 'https://wxjiao.github.io/' ],
      student: [ 'Kangning Zhang', '上海交通大学计算机方向在读博士生，个人主页记录 2025 年起在小红书 DeepExperience 进行科研实习。', 'https://zkangning.github.io/' ],
      title: 'VAD: Attributing Visual Evidence for Target Reconstruction in Multimodal On-Policy Distillation',
      short: 'VAD',
      date: '2026-07',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2607.28590v1',
      extra: [
        [ '作者与预印本时间', 'https://arxiv.org/abs/2607.28590' ],
        [ 'DeepExperience 团队项目仓库', 'https://github.com/DeepExperience/VAD_Multimodal_OPD' ]
      ],
      evidence: 'PDF 首页在上海交通大学与小红书双署名的 Kangning Zhang 名下标注科研实习。其主页确认入组与在读，DeepExperience 官方仓库、企业算法专家和同篇高校教师信息一致。',
      advising: [ '校内共同导师', 'Kangning Zhang 的教育经历明确列 俞勇 为当时的校内共同导师。', 'https://zkangning.github.io/' ]
    },
    {
      id: 'tinyjudge-huawei-hit-liu',
      company: '华为',
      team: '小艺基础算法部',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '刘挺 · Ting Liu', '哈尔滨工业大学计算学部教授、第一作者博士导师，原文署名哈工大。', 'https://homepage.hit.edu.cn/liuting?lang=zh' ],
      employee: [
        '涂丹丹 · Dandan Tu',
        '华为长期任职的团队负责人。华为官方材料明确其正式管理岗位，同篇署名华为。',
        'https://www-file.huawei.com/-/media/corp/facts/interview/caifang-zhongwen/in%20his%20own%20words%20dialogues%20with%20ren%208.pdf?la=en'
      ],
      student: [ '曾屹荣 · Yirong Zeng', '2022 年 9 月起为哈工大直博生，2024 年 9 月至 2026 年 9 月在华为小艺基础算法部科研实习。', 'https://zeng-yirong.github.io/en/' ],
      title: 'TinyJudge: Unverifiable Constraint Alignment via Lightweight Specialist Ensembles',
      short: 'TinyJudge',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.1204.pdf',
      extra: [
        [ '华为企业作者同期同名论文', 'https://aclanthology.org/2024.semeval-1.232.pdf' ],
        [ '第一作者实习期间与秦兵等同一校企团队的另一成果', 'https://aclanthology.org/2025.emnlp-main.701.pdf' ]
      ],
      evidence: 'ACL 正式论文首页点名共同一作在华为实习时完成工作。学生本人列出博士入学、哈工大导师、华为小艺实习年月和论文，企业作者正式岗位有公司原始材料交叉核实。',
      advising: [ '校内导师', '曾屹荣 的教育经历明确列 刘挺 为当时的校内导师。', 'https://zeng-yirong.github.io/en/' ]
    },
    {
      id: 'factost-huawei-hkustgz',
      company: '华为',
      team: '2012 实验室 · 时空基础模型',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ '梁宇轩 · Yuxuan Liang', '香港科技大学（广州）智能交通及数据科学与分析助理教授，学生博士导师及论文共同通讯作者。', 'https://yuxuanliang.com/' ],
      employee: [ 'Zhongwen Rao', '华为 2012 实验室时序研究人员，原文华为署名与此前华为研究成果的同一企业邮箱相符。', 'https://www.alphaxiv.org/zh/%40zhongwen-rao' ],
      student: [ 'Siru Zhong', '2025 年 2 月起在港科大（广州）攻读博士，2025 年 2 月至 12 月在华为 2012 实验室研究时空基础模型。', 'https://siruzhong.github.io/' ],
      title: 'Learning to Factorize Spatio-Temporal Foundation Models',
      short: 'FactoST',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '机器学习与优化',
      paper: 'https://papers.nips.cc/paper_files/paper/2025/file/7fa2a1f2122a4dd76e6b9ac518cfce14-Paper-Conference.pdf',
      extra: [
        [ '同一学生及华为团队的扩展论文', 'https://arxiv.org/abs/2601.12083' ],
        [ '华为研究人员此前同邮箱署名', 'https://openreview.net/pdf/b7a4821bd37c38ceab7ae0306e421eccbc1b63a3.pdf' ]
      ],
      evidence: '论文在第一作者的华为时空基础模型实习期间发表，学校导师和华为 2012 实验室研究人员共同署名。学生履历与成果页列出该方向和论文，后续论文由同一校企团队持续合著。',
      advising: [ '校内导师', 'Siru Zhong 的教育经历明确列 梁宇轩 为当时的校内导师。', 'https://siruzhong.github.io/' ]
    },
    {
      id: 'tencent-idol-nju-cao',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '曹汛 · Xun Cao', '南京大学教授，庄义昱的博士导师，论文署南京大学。', 'https://www.nju.edu.cn/info/3181/49851.htm' ],
      employee: [
        'Ailing Zeng',
        '2024 年 SIGGRAPH Asia 公开履历列腾讯 AI Lab 高级研究员；本人主页回溯腾讯混元人像研究团队岗位，论文署腾讯。',
        'https://asia.siggraph.org/2024/presenter/?uid=049193'
      ],
      student: [ '庄义昱 · Yiyu Zhuang', '2026 年在南京大学取得博士学位，2022 至 2024 年在腾讯 AI Lab 和混元团队进行三维重建研究，CVPR 正文具名实习。', 'https://yiyuzhuang.github.io/' ],
      title: 'IDOL: Instant Photorealistic 3D Human Creation from a Single Image',
      short: 'IDOL',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Zhuang_IDOL_Instant_Photorealistic_3D_Human_Creation_from_a_Single_Image_CVPR_2025_paper.pdf',
      extra: [ [ '三位具名腾讯实习生与论文署名', 'https://yiyuzhuang.github.io/IDOL/' ], [ '研究期公开的 2024 年预印本', 'https://arxiv.org/abs/2412.14963' ] ],
      evidence: 'CVPR 原文注明庄义昱等人的腾讯实习，并列出南京大学、清华大学和腾讯作者。第一作者履历交叉验证南大博士阶段和腾讯团队的研究方向与时间。',
      advising: [ '校内导师', '庄义昱 的教育经历明确列 曹汛 为当时的校内导师。', 'https://yiyuzhuang.github.io/' ]
    },
    {
      id: 'tencent-l2p-nju-tai',
      company: '腾讯',
      team: '优图实验室（Youtu Lab）',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '邰颖 · Ying Tai', '南京大学智能科学与技术学院教师，陈振南的博士导师及论文通讯作者。', 'https://is.nju.edu.cn/41/7e/c61838a737662/page.htm' ],
      employee: [ 'Jiangning Zhang', '腾讯优图研究人员，论文署名 Youtu Lab；同组论文作者简介明确为优图研究科学家。', 'https://zhangzjn.github.io/' ],
      student: [ '陈振南 · Zhennan Chen', '2024 年秋起为南大博士生，2025 年 1 月至 2026 年 6 月在腾讯优图实习。', 'https://tyshiwo.github.io/group.html' ],
      title: 'L2P: Unlocking Latent Potential for Pixel Generation',
      short: 'L2P',
      date: '2026-05',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/abs/2605.12013',
      extra: [
        [ '项目页具名实习和校企署名', 'https://nju-pcalab.github.io/projects/L2P/' ],
        [ '同篇腾讯研究员的学术履历', 'https://april.zju.edu.cn/wp-content/papercite-data/pdf/han2024rta.pdf' ]
      ],
      evidence: '南大项目页给第一作者标注腾讯实习及南大、优图双署名；导师公开名录列博士入学期、实习团队和起止月份，预印本在该实习期间公开。',
      advising: [ '校内导师', '陈振南的个人主页明确列邰颖为南京大学博士导师。', 'https://znan-chen.github.io/' ]
    },
    {
      id: 'bvtima-alibaba-xidian-xie',
      company: '阿里巴巴',
      team: '达摩院',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [ '谢雪梅 · Xuemei Xie', '西安电子科技大学人工智能学院教授、博士生导师，第一作者博士导师和论文主要通讯作者。', 'https://web.xidian.edu.cn/xmxie/' ],
      employee: [ '罗浩 · Hao Luo', '阿里巴巴达摩院高级算法工程师，原文以达摩院及同一企业邮箱署名，为通讯作者。', 'https://news.sciencenet.cn/sbhtmlnews/2022/7/370187.shtm' ],
      student: [
        '汪振宇 · Zhenyu Wang',
        '西安电子科技大学 2018 级博士生、导师谢雪梅，2023 年博士学位论文，2024 年 1 月起受聘西电杭州研究院。AAAI 工作在达摩院实习期间完成。',
        'https://cnki.istiz.org.cn/kcms/detail/detail.aspx?dbcode=CDFD&dbname=CDFD2025&filename=1024464784.nh'
      ],
      title: 'BVT-IMA: Binary Vision Transformer with Information-Modified Attention',
      short: 'BVT-IMA',
      date: '2024-03',
      venue: 'AAAI',
      area: '机器学习与优化',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/29505/30837',
      extra: [
        [ '西电实验室 2018 级在读名单', 'https://ipiu.xidian.edu.cn/yjsjy/zdyjs.htm' ],
        [ '导师官方学生名单', 'https://faculty.xidian.edu.cn/XXM/zh_CN/xsxx/295367/list/index.htm' ],
        [ 'AAAI-24 的 2023 年投稿与接收日程', 'https://aaai.org/aaai-24-conference/submission-instructions/' ],
        [ '西电任职起始日期', 'https://faculty.xidian.edu.cn/WANGZHENYU/zh_CN/zhym/456763/list/index.htm' ]
      ],
      evidence: '论文首页点名第一作者汪振宇在达摩院实习期间完成研究。西电在读名单和博士论文核实学籍、入学届别和导师。AAAI 主会在 2023 年收稿并通知录用，早于汪振宇 2024 年 1 月受聘西电杭州研究院；会议于 2024 年 2 月举办，论文集于 3 月公开。',
      advising: [ '指导教师', '西安电子科技大学导师主页将汪振宇列在谢雪梅名下的博士研究生名单中。', 'https://faculty.xidian.edu.cn/XXM/zh_CN/xsxx/295367/list/index.htm' ]
    },
    {
      id: 'deepseek-visual-primitives-pku-gang',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 多模态团队',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '曾刚 · Gang Zeng', '北京大学智能学院研究员及博士生导师，同篇署名北京大学，并担任陆睿杰的博士导师。', 'https://www.ai.pku.edu.cn/en/info/1404/1798.htm' ],
      employee: [ '潘梓正 · Zizheng Pan', '自 2024 年起任 DeepSeek 多模态研究员，公开主页另列该组正式岗位与实习招聘，同篇署 DeepSeek 并为核心作者。', 'https://zizhengpan.github.io/' ],
      student: [ '陆睿杰 · Ruijie Lu', '北京大学在读博士，其个人主页确认在 DeepSeek 实习，从事多模态理解；原文列为首位核心作者，双署北京大学和 DeepSeek。', 'https://jason-aplp.github.io/Ruijie-Lu/' ],
      title: 'Thinking with Visual Primitives',
      short: 'Thinking with Visual Primitives',
      date: '2026-04-30',
      venue: '公开预印本',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mitkox/Thinking-with-Visual-Primitives/main/Thinking_with_Visual_Primitives.pdf',
      extra: [
        [ '预印本作者页及公开日期', 'https://www.alphaxiv.org/abs/2604.visual-primitives' ],
        [ '同期发布记录及原发布地址', 'https://www.36kr.com/p/3789208597372165' ]
      ],
      evidence: '原文首页列出陆睿杰的北京大学及 DeepSeek 双署名、潘梓正的企业核心作者身份及两位教师的各自高校署名。两位当事人的个人主页确认研究实习与正式研究岗位。原发布仓库当前返回 404，论文链接为原始 PDF 的归档副本。',
      advising: [ '校内导师', '陆睿杰 的教育经历明确列 曾刚 为当时的校内导师。', 'https://jason-aplp.github.io/Ruijie-Lu/' ]
    },
    {
      id: 'tencent-vfa-whu',
      company: '腾讯',
      team: '优图实验室（Youtu Lab）',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '夏桂松 · Gui-Song Xia', '武汉大学遥感信息工程国家重点实验室教职人员，第一作者的硕士导师及论文通讯作者。', 'https://irsip.whu.edu.cn/resultsv2/paper/p47.pdf' ],
      employee: [ 'Yuqiang Ren', '2018 年起任腾讯研究员，原文署名腾讯优图。学生主页列为在优图研究目标检测的导师。', 'https://lacuna.tiptreesystems.com/author/yuqiang-ren' ],
      student: [ 'Jiaming Han', '2021 年 5 月至 2022 年 5 月在腾讯优图实习，同期攻读武汉大学硕士学位，2023 年 9 月后才在港中大读博。', 'https://csuhan.com/' ],
      title: 'Few-Shot Object Detection via Variational Feature Aggregation',
      short: 'VFA',
      date: '2023-02',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2301.13411',
      extra: [
        [ 'AAAI 正式论文', 'https://ojs.aaai.org/index.php/AAAI/article/view/25153' ],
        [ '同一研究员早期腾讯署名与邮箱', 'https://github.com/Anymake/DRN_CVPR2020' ],
        [
          '同一师企组合与另一位具名实习生的 ICCV 论文',
          'https://openaccess.thecvf.com/content/ICCV2025/papers/Li_Fuse_Before_Transfer_Knowledge_Fusion_for_Heterogeneous_Distillation_ICCV_2025_paper.pdf'
        ],
        [ '另一位实习生的校企履历', 'https://github.com/liguopeng0923/liguopeng0923' ]
      ],
      evidence: '论文首页具名注明第一作者在腾讯优图实习时完成研究；本人主页确认当时的武大学籍、实习月份和同篇企业导师。',
      advising: [ '校内导师', 'Jiaming Han 的履历分别列出武汉大学硕士经历及该阶段的导师夏桂松。', 'https://csuhan.com/attaches/CV_Jiaming-Han.pdf' ]
    },
    {
      id: 'tencent-weviscut-xidian-deng',
      company: '腾讯',
      team: '微信视觉（WeChat Vision）',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [ '邓成 · Cheng Deng', '西安电子科技大学电子工程学院教授、学生的校内导师及论文通讯作者。', 'https://web.xidian.edu.cn/showcollege.php?col_num=2' ],
      employee: [ 'Chen Li', '腾讯微信资深研究员，负责微信应用视觉团队，以同一团队署名。', 'https://s2026.conference-schedule.org/presenter/?uid=529743' ],
      student: [ 'Chenyu Mu', '西电电子工程学院在读硕士，2026 年 4 月起在腾讯 WXG 实习，主页列两位西电导师及该论文。', 'https://xd-mu.github.io/' ],
      title: 'WeVisCut: The Whole Editing Room in One Agent From Narration to Long-Form Video',
      short: 'WeVisCut',
      date: '2026-10',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.38352v1',
      extra: [
        [ '腾讯微信视觉正式项目页', 'https://tencent.github.io/WeVisCut/' ],
        [ '同篇企业研究人员的作者消歧', 'https://dblp.org/pid/164/3294-31.html' ],
        [ '硕士起止年份', 'https://lacuna.tiptreesystems.com/author/chenyu-mu/aut_3a314db998cc4f74a5f0d34164151899' ]
      ],
      evidence: '预印本用星号具名注明腾讯微信实习；第一作者个人主页给出微信事业群实习起始时间、在读学位与两位西电通讯作者。微信视觉官方项目页列同一作者组。',
      advising: [ '校内导师', 'Chenyu Mu 的教育经历明确列 邓成 为当时的校内导师。', 'https://xd-mu.github.io/' ]
    },
    {
      id: 'tencent-weviscut-xidian-yang',
      company: '腾讯',
      team: '微信视觉（WeChat Vision）',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [
        'Erkun Yang',
        '西安电子科技大学电子工程学院副教授、学生的校内导师及论文通讯作者。',
        'https://see.xidian.edu.cn/faculty/chdeng/Welcome%20to%20Cheng%20Deng%27s%20Homepage_files/Papers/Journal/TIP2024_Xiao.pdf'
      ],
      employee: [ 'Chen Li', '腾讯微信资深研究员，负责微信应用视觉团队，以同一团队署名。', 'https://s2026.conference-schedule.org/presenter/?uid=529743' ],
      student: [ 'Chenyu Mu', '西电电子工程学院在读硕士，2026 年 4 月起在腾讯 WXG 实习，主页列两位西电导师及该论文。', 'https://xd-mu.github.io/' ],
      title: 'WeVisCut: The Whole Editing Room in One Agent From Narration to Long-Form Video',
      short: 'WeVisCut',
      date: '2026-10',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.38352v1',
      extra: [
        [ '腾讯微信视觉正式项目页', 'https://tencent.github.io/WeVisCut/' ],
        [ '同篇企业研究人员的作者消歧', 'https://dblp.org/pid/164/3294-31.html' ],
        [ '硕士起止年份', 'https://lacuna.tiptreesystems.com/author/chenyu-mu/aut_3a314db998cc4f74a5f0d34164151899' ]
      ],
      evidence: '预印本用星号具名注明腾讯微信实习；第一作者个人主页给出微信事业群实习起始时间、在读学位与两位西电通讯作者。微信视觉官方项目页列同一作者组。',
      advising: [ '校内导师', 'Chenyu Mu 的教育经历明确列 Erkun Yang 为当时的校内导师。', 'https://xd-mu.github.io/' ]
    },
    {
      id: 'kuaishou-cpga-uestc',
      company: '快手',
      team: '视频质量与增强团队',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ 'Shuyuan Zhu', '电子科技大学信息与通信工程学院教师，第一作者的博士导师及同篇通讯作者。', 'https://www.sice.uestc.edu.cn/sice_en/info/1603/1424.htm' ],
      employee: [ 'Ming Sun', '2021 年 3 月起担任快手研究员，曾负责视频质量及生成方向，也是第一作者的快手实习导师。', 'https://msunming.github.io/' ],
      student: [ 'Qiang Zhu', '2019 年 9 月至 2025 年 6 月为电子科技大学博士生，2023 年 8 月至 12 月在快手科研实习。', 'https://qz1-boy.github.io/' ],
      title: 'CPGA: Coding Priors-Guided Aggregation Network for Compressed Video Quality Enhancement',
      short: 'CPGA',
      date: '2024-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Zhu_CPGA_Coding_Priors-Guided_Aggregation_Network_for_Compressed_Video_Quality_Enhancement_CVPR_2024_paper.pdf',
      extra: [ [ '快手视频增强团队报告', 'https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s52305/' ] ],
      evidence: '第一作者主页列出 CPGA 与快手报道，明确在读、实习起止及快手侧导师 Ming Sun。该导师和电子科技大学导师同篇合著。',
      advising: [ '校内导师', 'Qiang Zhu 的教育经历明确列 Shuyuan Zhu 为当时的校内导师。', 'https://qz1-boy.github.io/' ]
    },
    {
      id: 'tencent-wegenedit-sysu',
      company: '腾讯',
      team: '微信视觉（WeChat Vision）',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '张翔 · Xiang Zhang', '中山大学遥感科学与技术学院教授、博士生导师，Jun He 的校方导师和论文通讯作者。', 'https://sges.sysu.edu.cn/teacher/998' ],
      employee: [ 'Chen Li', '腾讯微信资深研究员，负责微信应用视觉团队，原文以同团队署名。', 'https://s2026.conference-schedule.org/presenter/?uid=529743' ],
      student: [ 'Jun He', '2024 年在中山大学本科毕业后继续在该校就读，项目公开页列其为学生、校内导师为张翔；该预印本明确具名微信视觉实习。', 'https://picotrex.github.io/PicoTrex/' ],
      title: 'From Evaluation to Evolution: Benchmarking Image Editing and Evolving Image Models',
      short: 'WeGenEditBench',
      date: '2026-10',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2610.41210v1',
      extra: [
        [ '企业研究员任职起始月份和职责', 'https://www.jdl.link/doc/2011/20211231_Zhu_TPAMI21.pdf' ],
        [ '同期由第一作者与中山大学及清华教师合著的论文', 'https://aclanthology.org/2026.acl-long.416.pdf' ]
      ],
      evidence: '预印本首页列中山大学与微信视觉双署名并明确写出 Jun He 的实习；学生与高校两位作者此前在同一研究主题持续合作。企业合著者有同期公开的正式岗位介绍。',
      advising: [ '校内导师', 'Jun He 的教育经历明确列 张翔 为当时的校内导师。', 'https://picotrex.github.io/PicoTrex/' ]
    },
    {
      id: 'rangepq-alibaba-cuhk-wang',
      company: '阿里巴巴',
      team: '阿里云 · 数据库',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [
        '王思博 · Sibo Wang',
        '香港中文大学系统工程与工程管理学系教职人员，论文通讯作者。港中大校方资料载明自 2018 年 12 月起任教。',
        'https://www.se.cuhk.edu.hk/wp-content/uploads/2024/10/24-SEEM-Brochure-1409.pdf'
      ],
      employee: [ '李飞飞 · Feifei Li', '阿里巴巴集团副总裁及阿里云数据库产品负责人，原文以阿里云和集团邮箱署名。', 'https://www.eea.tsinghua.edu.cn/en/info/1041/2135.htm' ],
      student: [ '张芳源 · Fangyuan Zhang', '2021 年 8 月至 2025 年 3 月为港中大博士生，2024 年 8 月至 2025 年 3 月在阿里云研究向量数据库混合检索。', 'https://zzzzzfy.github.io/' ],
      title: 'Efficient Dynamic Indexing for Range Filtered Approximate Nearest Neighbor Search',
      short: 'RangePQ',
      date: '2025-06',
      venue: 'SIGMOD / PACMMOD',
      area: '机器学习与优化',
      paper: 'https://ira.lib.polyu.edu.hk/bitstream/10397/115424/1/3725401.pdf',
      extra: [
        [ 'ACM DOI', 'https://doi.org/10.1145/3725401' ],
        [ '同一实习作者和团队的同期 DIGRA 论文', 'https://www1.se.cuhk.edu.hk/~swang/V3mod148-DIGRA.pdf' ],
        [
          '阿里云同期高管公告',
          'https://alizila.oss-us-west-1.aliyuncs.com/uploads/2025/09/Press-Release_Alibaba-Cloud-Announces-New-Data-Centers-Expansion-Plan-to-Power-the-Next-Waves-of-AI-Innovation.pdf'
        ]
      ],
      evidence: '论文首页具名注明第一作者在阿里巴巴实习时完成工作。作者个人履历列出港中大博士在读与阿里云实习的重叠区间，实习研究即向量数据库检索。论文将动态索引用于机器学习及大语言模型相关的高维向量检索。',
      advising: [ '课题组指导', '王思博的个人团队名录将张芳源列在其博士毕业生名单中，并注明 2025 年 3 月获学位。', 'https://www1.se.cuhk.edu.hk/~swang/group.html' ]
    },
    {
      id: 'minimax-audio-controlnet-sjtu',
      company: 'MiniMax',
      team: '音频模型技术部',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '陈熙 · Xie Chen', '上海交通大学计算机学院副教授，原文署上交大并任通讯作者，是朱海纳的硕士导师。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/chenxie.html' ],
      employee: [
        '杨明祺 · Mingqi Yang',
        '已于 2019 年毕业并在企业从事语音研发；2025 年为 MiniMax 音频模型报告作者及集团旗下上海稀宇极智语音发明的具名研发人员，本篇署 MiniMax。',
        'https://patents.google.com/patent/CN120600002A/zh'
      ],
      student: [
        '朱海纳 · Haina Zhu',
        '2024 年 9 月起在上海交通大学攻读硕士，2025 年 8 月至 2026 年 4 月在 MiniMax 音频模型技术部实习，个人履历列其为该论文第一作者。',
        'https://muse-um.oss-cn-shenzhen.aliyuncs.com/cv/HainaZhu.CV.pdf'
      ],
      title: 'Audio ControlNet for Fine-Grained Audio Generation and Editing',
      short: 'Audio ControlNet',
      date: '2026-02-04',
      venue: 'arXiv 预印本',
      area: '语音与音频',
      paper: 'https://arxiv.org/html/2602.04680',
      extra: [
        [ '学生公开主页的实习及论文记录', 'https://github.com/juhayna-zh/profile/blob/main/gitprofile.config.ts' ],
        [ '企业音频报告具名研发人员', 'https://minimax-ai.github.io/tts_tech_report/MiniMax_Speech.pdf' ],
        [ '港交所披露研发实体归属', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0422/2026042202118.pdf' ],
        [ '杨明祺的毕业与早期语音从业采访', 'https://www.sohu.com/a/459513668_120868902' ]
      ],
      evidence: '第一作者朱海纳的履历与公开主页同时列明上交大学籍、MiniMax 音频模型技术部实习、论文作者身份和企业音频模型项目。原文在其学籍和实习重叠期公开，同时署名上交大教师陈熙与 MiniMax 音频研发人员杨明祺。',
      advising: [ '校内导师', '朱海纳 的教育经历明确列 陈熙 为当时的校内导师。', 'https://muse-um.oss-cn-shenzhen.aliyuncs.com/cv/HainaZhu.CV.pdf' ]
    },
    {
      id: 'balancehead-alibaba-cuhksz-han',
      company: '阿里巴巴',
      team: '通义实验室 · 三维生成',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '韩晓光 · Xiaoguang Han', '香港中文大学（深圳）理工学院教师，第一作者博士导师，论文共同通讯作者。', 'https://sse.cuhk.edu.cn/faculty/hanxiaoguang' ],
      employee: [ '邱陵腾 · Lingteng Qiu', '2024 年 10 月从港中大（深圳）博士毕业并加入阿里巴巴通义实验室，论文列为企业团队负责人。', 'https://github.com/lingtengqiu' ],
      student: [ '李贺元 · Heyuan Li', '港中大（深圳）在读博士生，预期 2027 年 6 月毕业。论文具名注明在阿里通义实验室实习期间完成。', 'https://lhyfst.github.io/' ],
      title: 'Condition Matters in Full-head 3D GANs',
      short: 'BalanceHead',
      date: '2026-02',
      venue: 'arXiv / ICLR 2026',
      area: '视觉与多模态',
      paper: 'https://openreview.net/pdf?id=LmTceJPy6B',
      extra: [
        [ '论文最早 arXiv 版本', 'https://arxiv.org/abs/2602.07198' ],
        [ '作者项目主页和具名实习脚注', 'https://lhyfst.github.io/balancehead/' ],
        [ '公开预印本及作者表', 'https://arxiv.org/abs/2602.07198' ]
      ],
      evidence: '原文首页为共同一作李贺元标注通义实验室实习。学生主页证实学籍和导师，企业作者的个人履历证实其在该研究前已毕业并正式入职阿里。',
      advising: [ '校内导师', '李贺元的个人主页明确列韩晓光为香港中文大学（深圳）的博士导师。', 'https://lhyfst.github.io/' ]
    },
    {
      id: 'rm-bias-alibaba-cuhksz-chang',
      company: '阿里巴巴',
      team: 'Qwen · 大模型应用团队',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [
        '张纵辉 · Tsung-Hui Chang',
        '2024–2025 年任港中大（深圳）理工学院教授、副院长，2025 年起任该校人工智能学院教授、副院长，为第一作者博士导师。',
        'https://www.slai.edu.cn/en/teacher/189'
      ],
      employee: [
        'Pengyu Cheng',
        '2025 年 7 月起任阿里 Qwen 大模型应用团队正式研究员、负责强化学习训练，论文共同通讯作者及实习导师。',
        'https://linear95.github.io/files/CV_Pengyu_Cheng_online.pdf'
      ],
      student: [ 'Zhuo Li', '港中大（深圳）博士生，2026 年毕业。2025 年 7 月至 2026 年 2 月在 Qwen 实习并在 Pengyu Cheng 指导下研究奖励模型和 RLHF。', 'https://birlz.github.io/' ],
      title: 'Eliminating Inductive Bias in Reward Models with Information-Theoretic Guidance',
      short: 'Eliminating Inductive Bias in Reward Models',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf/82a2aa83302848e2377bcd0d58c60a46e6dd9274.pdf',
      extra: [
        [ '同期同一团队的 RLHF 扩展成果', 'https://openreview.net/pdf/2b44e66ef22c66b8a66b47e5df243fae039a1605.pdf' ],
        [ '公开预印本及作者表', 'https://arxiv.org/abs/2512.23461' ]
      ],
      evidence: '正式论文首页点名港中大（深圳）第一作者 Zhuo Li 在阿里实习时完成研究。本人及其企业导师的履历同时核实工作主题和相互重叠的研究时期，校方材料确认同篇两位导师的教职。',
      advising: [ '校内导师', 'Zhuo Li 的教育经历明确列 张纵辉 为当时的校内导师。', 'https://birlz.github.io/' ]
    },
    {
      id: 'rm-bias-alibaba-cuhksz-wan',
      company: '阿里巴巴',
      team: 'Qwen · 大模型应用团队',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [
        '万翔 · Xiang Wan',
        '香港中文大学（深圳）数据科学学院兼职副教授、深圳市大数据研究院医疗大数据实验室主任，第一作者博士导师及论文共同通讯作者。',
        'https://med.cuhk.edu.cn/sites/default/files/2023-10/%E9%A6%96%E5%B1%8A%E5%A4%A7%E6%B9%BE%E5%8C%BA%E6%99%BA%E8%83%BD%E5%8C%BB%E5%AD%A6%E6%95%99%E8%82%B2%E5%A4%A7%E4%BC%9A%E4%BC%9A%E8%AE%AE%E6%89%8B%E5%86%8C.pdf'
      ],
      employee: [
        'Pengyu Cheng',
        '2025 年 7 月起任阿里 Qwen 大模型应用团队正式研究员、负责强化学习训练，论文共同通讯作者及实习导师。',
        'https://linear95.github.io/files/CV_Pengyu_Cheng_online.pdf'
      ],
      student: [ 'Zhuo Li', '港中大（深圳）博士生，2026 年毕业。2025 年 7 月至 2026 年 2 月在 Qwen 实习并在 Pengyu Cheng 指导下研究奖励模型和 RLHF。', 'https://birlz.github.io/' ],
      title: 'Eliminating Inductive Bias in Reward Models with Information-Theoretic Guidance',
      short: 'Eliminating Inductive Bias in Reward Models',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf/82a2aa83302848e2377bcd0d58c60a46e6dd9274.pdf',
      extra: [
        [ '同期同一团队的 RLHF 扩展成果', 'https://openreview.net/pdf/2b44e66ef22c66b8a66b47e5df243fae039a1605.pdf' ],
        [ '公开预印本及作者表', 'https://arxiv.org/abs/2512.23461' ]
      ],
      evidence: '正式论文首页点名港中大（深圳）第一作者 Zhuo Li 在阿里实习时完成研究。本人及其企业导师的履历同时核实工作主题和相互重叠的研究时期，校方材料确认同篇两位导师的教职。',
      advising: [ '校内导师', 'Zhuo Li 的教育经历明确列 万翔 为当时的校内导师。', 'https://birlz.github.io/' ]
    },
    {
      id: 'tencent-fuse-before-transfer-gao',
      company: '腾讯',
      team: '优图实验室（Youtu Lab）',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ 'Yuan Gao', '武汉大学人工智能学院副教授、学生导师及论文共同通讯作者。', 'https://yuan-gao.net/' ],
      employee: [ 'Shouhong Ding', '香港浸会大学同期学术活动记录其为腾讯优图实验室负责人，同篇署腾讯优图。', 'https://www.comp.hkbu.edu.hk/wsb2025/lecturer_details.php?lect_id=2' ],
      student: [ 'Guopeng Li', '武汉大学学生，个人主页说明在武汉大学就读时由夏桂松和 Yuan Gao 指导，并曾在腾讯优图实习。', 'https://github.com/liguopeng0923/liguopeng0923' ],
      title: 'Fuse Before Transfer: Knowledge Fusion for Heterogeneous Distillation',
      short: 'Fuse Before Transfer',
      date: '2025-10',
      venue: 'ICCV',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Li_Fuse_Before_Transfer_Knowledge_Fusion_for_Heterogeneous_Distillation_ICCV_2025_paper.pdf',
      extra: [ [ '武汉大学教师的论文页面', 'https://yuan-gao.net/pdf/ICCV25_fuse.pdf' ] ],
      evidence: '论文具名标注武汉大学第一作者的腾讯优图实习，个人主页确认两位武大导师及腾讯优图实习；Yuan Gao 和企业正式员工均为同篇作者。',
      advising: [ '校内导师', 'Guopeng Li 的教育经历明确列 Yuan Gao 为当时的校内导师。', 'https://github.com/liguopeng0923/liguopeng0923' ]
    },
    {
      id: 'mvimgnet2-alibaba-cuhksz-cui',
      company: '阿里巴巴',
      team: '通义实验室 · 三维生成',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '崔曙光 · Shuguang Cui', '2018 年加入港中大（深圳），时任理工学院校长学勤讲座教授，论文同校作者及学生博士导师。', 'https://gdklfnii.cuhk.edu.cn/teacher/197' ],
      employee: [ '原玮浩 · Weihao Yuan', '阿里巴巴通义实验室三维视觉及多模态研究员，原文以阿里集团署名，脚注确认其为此项企业实习的导师。', 'https://www.weihao-yuan.com/cv/' ],
      student: [ '吴毓双 · Yushuang Wu', '2019 年 8 月起在港中大（深圳）攻读博士，2024 年仍在读，原文注明在阿里巴巴由原玮浩指导完成研究。', 'https://yushuang-wu.github.io/' ],
      title: 'MVImgNet2.0: A Larger-scale Dataset of Multi-view Images',
      short: 'MVImgNet2.0',
      date: '2024-11',
      venue: 'ACM TOG / SIGGRAPH Asia',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2412.01430v1',
      extra: [ [ 'ACM 正式版', 'https://doi.org/10.1145/3687973' ], [ '同一学生与同一校企团队的 IPoD 论文项目及具名实习说明', 'https://github.com/yushuang-wu/IPoD' ] ],
      evidence: '原文点名共同一作吴毓双在阿里巴巴、由原玮浩指导完成该研究。学生本人的同期主页列出港中大（深圳）博士身份、崔曙光及韩晓光两位学校导师和阿里 XR 实习。同期 IPoD 也由同一校企团队发表并有学生本人的实习说明。',
      advising: [ '校内共同导师', '吴毓双 的教育经历明确列 崔曙光 为当时的校内共同导师。', 'https://yushuang-wu.github.io/' ]
    },
    {
      id: 'kuaishou-memlearner-hku',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '刘希慧 · Xihui Liu', '香港大学电机电子工程系及数据科学研究院助理教授，第一作者的博士导师及论文通讯作者。', 'https://hub.hku.hk/cris/rp/rp02982' ],
      employee: [ 'Quande Liu', '快手可灵团队高级研究员，论文以快手署名。', 'https://liuquande.github.io/' ],
      student: [ '余济闻 · Jiwen Yu', '研究时为香港大学博士生，曾在快手可灵担任学生研究员，个人主页列出该论文。', 'https://yujiwen.github.io/' ],
      title: 'MemLearner: Learning to Query Context Memory for Video World Models',
      short: 'MemLearner',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2606.31734',
      extra: [
        [ '香港大学的正式会议信息', 'https://hub.hku.hk/handle/10722/375430' ],
        [ '港大博士生论坛', 'https://datascience.hku.hk/hku-ai-forum-2025/' ],
        [ '另一位复旦在读实习合作者的同项目履历', 'https://jianxgao.github.io/' ]
      ],
      evidence: '预印本具名说明余济闻等作者在快手可灵实习时完成研究；学生和高校名录确认香港大学博士阶段及其导师。',
      advising: [ '校内导师', '余济闻 的教育经历明确列 刘希慧 为当时的校内导师。', 'https://yujiwen.github.io/' ]
    },
    {
      id: 'kuaishou-duovsr-hku',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ 'Kwan-Yee K. Wong', '香港大学计算机系副教授，第一作者的博士导师及论文通讯作者。', 'https://aimed.hku.hk/people?lang=zh' ],
      employee: [ 'Xintao Wang', '快手可灵多模态生成与后训练技术负责人，同篇以 Kling Team 署名。', 'https://xinntao.github.io/?trk=public_post-text' ],
      student: [ '吕峥瑶 · Zhengyao Lv', '2023 年 8 月起为香港大学博士生，CVPR 首页在其名下注明快手可灵实习。', 'https://i.cs.hku.hk/~kykwong/people.html' ],
      title: 'DUO-VSR: Dual-Stream Distillation for One-Step Video Super-Resolution',
      short: 'DUO-VSR',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://i.cs.hku.hk/~kykwong/publications/zlv_cvpr2026.pdf',
      extra: [ [ '学生主页的博士身份及本人论文记录', 'https://cszy98.github.io/' ], [ '项目主页及具名实习脚注', 'https://cszy98.github.io/DUO-VSR/' ] ],
      evidence: 'CVPR 论文和作者项目页都将快手实习脚注附于第一作者，导师课题组确认其港大博士身份和入学月份。高校导师与快手可灵技术负责人同篇署名。',
      advising: [ '课题组指导', 'Kwan-Yee K. Wong 的学生名录列吕峥瑶自 2023 年 8 月起在其组内攻读博士。', 'https://i.cs.hku.hk/~kykwong/people.html' ]
    },
    {
      id: 'cross-layer-injection-ant-uestc-gao',
      company: '蚂蚁集团',
      team: '多模态大模型研究',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ '高联丽 · Lianli Gao', '电子科技大学计算机学院教授、博导，学生本人列其为博士导师。ECCV 正式版注明她以独立研究者身份署名。', 'https://faculty.uestc.edu.cn/gaolianli/zh_CN/index.htm' ],
      employee: [ 'Peng Di', '2020–2026 年在蚂蚁集团任 Senior Staff Engineer，曾负责智能平台工程团队，本文为蚂蚁署名共同作者。', 'https://pengd.github.io/' ],
      student: [
        'Cheng Chen',
        '2022 年 9 月至 2026 年 6 月在电子科技大学攻读博士；2025 年 6 月至 2026 年 1 月在蚂蚁集团实习并明确列出本文的 CLI 方法和 18 项评测。',
        'https://zackschen.github.io/'
      ],
      title: 'From One-to-One to Many-to-Many: Dynamic Cross-Layer Injection for Deep Vision-Language Fusion',
      short: 'Cross-Layer Injection',
      date: '2026-01-15',
      venue: 'ECCV 2026',
      area: '视觉与多模态',
      paper: 'https://link.springer.com/chapter/10.1007/978-3-032-37167-6_35',
      extra: [
        [ '首个公开版本及时间', 'https://arxiv.org/abs/2601.10710' ],
        [ '2025 年同期高校任职报道', 'https://zs.sicau.edu.cn/info/1041/4365.htm' ],
        [ '电子科技大学 2026 年任职报道', 'https://news.uestc.edu.cn/info/1005/43731.htm' ]
      ],
      evidence: '一作本人披露电子科大博士学籍、两名博士导师及蚂蚁实习起止，同时以本文的 Cross-Layer Injection 方法和 18 项评测描述实习成果。正式版列高联丽为独立研究者，并给 Cheng Chen 署名同济和蚂蚁；研究期内两人的电子科大任职、博士学籍及师生关系有独立证据。',
      advising: [ '校内导师', 'Cheng Chen 的教育经历明确列 高联丽 为当时的校内导师。', 'https://zackschen.github.io/' ]
    },
    {
      id: 'minimax-dive-fudan-xiao',
      company: 'MiniMax',
      team: 'MiniMax-M2 · Agentic Cowork',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '肖仰华 · Yanghua Xiao', '复旦大学计算机科学技术学院教授、博士生导师，论文署复旦大学并任通讯作者。', 'https://kw.fudan.edu.cn/people/xiaoyanghua/' ],
      employee: [
        '赵鹏宇 · Pengyu Zhao',
        '2023 年加入 MiniMax，2025 年起为执行董事及大模型研发负责人；原文署 MiniMax。',
        'https://ir.minimax.cn/en/corporate-information/management'
      ],
      student: [ '陈艾利 · Aili Chen', '复旦大学在读博士，2025 年 1 月起在 MiniMax 科研实习，研究大模型推理及语言智能体；原文并署复旦和 MiniMax，任第一作者。', 'https://sheep333c.github.io/' ],
      title: 'DIVE: Scaling Diversity in Agentic Task Synthesis for Generalizable Tool Use',
      short: 'DIVE',
      date: '2026-07-07',
      venue: 'ICML',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2603.11076',
      extra: [
        [ 'ICML 正式会议与作者表', 'https://icml.cc/virtual/2026/poster/66305' ],
        [ '论文作者开放的项目与模型', 'https://github.com/sheep333c/DIVE' ],
        [ 'MiniMax-M2 报告 Agentic Cowork 的 DIVE 实际应用', 'https://arxiv.org/html/2605.26494#S4.SS2.SSS3.p2.1' ],
        [ 'MiniMax-M2-her 的独立角色扮演项目', 'https://www.minimax.io/blog/minimax-m2-her' ]
      ],
      evidence: '原文和第一作者个人主页将陈艾利的复旦博士学籍、MiniMax 科研实习和 DIVE 双署名对应。企业 M2 报告在 Agentic Cowork 章节记载 DIVE 用于金融分析和表格操作，另有企业专文单独记载 M2-her 为 Talkie／星野角色扮演项目。两项研究分别有公开的研发项目及产品归属。',
      advising: [ '校内导师', '陈艾利 的教育经历明确列 肖仰华 为当时的校内导师。', 'https://sheep333c.github.io/' ]
    },
    {
      id: 'minimax-claimdiff-cuhk-cheng',
      company: 'MiniMax',
      team: '视觉强化学习',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Yu Cheng', '2024 年起任香港中文大学计算机科学与工程系教员，论文署香港中文大学，是 Jiacheng Chen 的博士导师。', 'https://www.cse.cuhk.edu.hk/people/faculty/yu-cheng/' ],
      employee: [ '周禹聪 · Yucong Zhou', '2022 年加入 MiniMax，2025 年 6 月获任董事，论文署 MiniMax。', 'https://ir.minimax.cn/en/corporate-information/management' ],
      student: [
        'Jiacheng Chen',
        '香港中文大学在读博士，个人主页及实验室名录确认曾在 MiniMax 实习；2026 年 5 月 19 日首版作者稿将其署为 MiniMax，修订版署为香港中文大学。',
        'https://jc-chen1.github.io/'
      ],
      title: 'ClaimDiff-RL: Fine-Grained Caption Reinforcement Learning through Visual Claim Comparison',
      short: 'ClaimDiff-RL',
      date: '2026-05-19',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2605.20278v1',
      extra: [
        [ '修订版学生学校署名', 'https://arxiv.org/html/2605.20278v2' ],
        [ '作者维护的视觉奖励研究项目', 'https://github.com/ltl3A87/ClaimDiff-RL' ],
        [ '企业官方视觉强化学习 V-Triune 项目', 'https://github.com/MiniMax-AI/One-RL-to-See-Them-All' ],
        [ 'V-Triune 作者与人员分工', 'https://arxiv.org/pdf/2505.18129v1' ],
        [ 'MiniMax 单独发布的 M3 数学证明项目', 'https://www.minimax.io/blog/minimax-maxproof-math-proof-evolution' ],
        [ '博士生与导师实验室名录', 'https://spherelab.ai/people.html' ]
      ],
      evidence: '两版署名及实验室资料确认 Jiacheng Chen 在读期间参与 MiniMax。ClaimDiff-RL 的沈旭阳、Yan Ma、陈绍祥同为 MiniMax 官方视觉强化学习项目 V-Triune 的具名贡献者，沈旭阳又是本篇企业联络作者。MiniMax 另行发布 MaxProof，明确归入 MiniMax-M3 的数学证明训练项目。按两项公开研究项目归属分别计入。',
      advising: [ '校内导师', 'Jiacheng Chen 的教育经历明确列 Yu Cheng 为当时的校内导师。', 'https://jc-chen1.github.io/' ]
    },
    {
      id: 'tencent-enconda-sysu',
      company: '腾讯',
      team: '优图 · Youtu-LLM',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '沈颖 · Ying Shen', '中山大学计算机学院副教授、博士生导师，论文校方通讯作者。', 'https://cse.sysu.edu.cn/node/3471' ],
      employee: [ '孙星 · Xing Sun', '腾讯优图实验室负责人及首席研究员，原文署名 Youtu-LLM 团队。', 'https://www.alphaxiv.org/zh/%40xing-sun' ],
      student: [ '况佳杙 · Jiayi Kuang', '在中山大学攻读硕士期间于腾讯优图实习，个人主页把 EnConda-Bench 与教育、实习经历相对应。', 'https://eternity-gaga.github.io/' ],
      title: 'Process-Level Trajectory Evaluation for Environment Configuration in Software Engineering Agents',
      short: 'EnConda-Bench',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf/1e68baed3e61cede2c920ae07ce29489e7cc1cb0.pdf',
      extra: [
        [ '早期预印本的企业与学校双署名', 'https://arxiv.org/pdf/2510.25694' ],
        [ '2025 年中山大学教师活动记录', 'https://bschool.sysu.edu.cn/newscenter/news/1417402.htm' ]
      ],
      evidence: '论文在中山大学和腾讯优图双署名的一作名下明确标注企业实习。学生自述在读及实习，沈颖和企业研究负责人同篇署名。',
      advising: [ '校内导师', '况佳杙 的教育经历明确列 沈颖 为当时的校内导师。', 'https://eternity-gaga.github.io/' ]
    },
    {
      id: 'tencent-poseidon-hkustgz-li',
      company: '腾讯',
      team: '混元（Hunyuan）',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ 'Jia Li', '香港科技大学（广州）数据科学与分析学域副教授、彭淼的博士导师，原文校方通讯作者。', 'https://sites.google.com/view/lijia' ],
      employee: [ 'Nuo Chen', '腾讯混元基础模型团队首席研究员，负责语言及视觉语言模型中训练；同篇以腾讯署名并列研究指导。', 'https://nuochenpku.github.io/' ],
      student: [ '彭淼 · Miao Peng', '2024 年 9 月起为港科大（广州）博士生，2026 年 1 月起在腾讯混元基础模型团队实习，同篇校企双署名。', 'https://gknl.github.io/' ],
      title: 'POSEIDON: Scaling Training Environments for Scientific Agents from Code Repositories',
      short: 'POSEIDON',
      date: '2026-10',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2610.32448',
      extra: [ [ '港科大广州高校教师名录', 'https://infh.hkust-gz.edu.cn/academics/dsa/faculty-members/' ] ],
      evidence: '论文首页列彭淼港科大广州、腾讯混元双署名。公开履历确认博士在读与腾讯混元基础模型实习时间重叠，并给出校方导师，原文同时有该校两位教师和混元正式研究人员。',
      advising: [ '校内导师', '彭淼 的教育经历明确列 Jia Li 为当时的校内导师。', 'https://gknl.github.io/' ]
    },
    {
      id: 'baidu-dgtr-nwpu-zhang',
      company: '百度',
      team: '百度 VIS',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '张鼎文 · Dingwen Zhang', '西北工业大学自动化学院教授、博士生导师，李昊的博士导师和该论文通讯作者。', 'https://zdhxy.nwpu.edu.cn/info/1081/7883.htm' ],
      employee: [ '王井东 · Jingdong Wang', '时任百度计算机视觉首席科学家，论文署百度 VIS。', 'https://jingdongwang2017.github.io/CV_Jingdong_Wang.pdf' ],
      student: [ '李昊 · Hao Li', '西北工业大学 2022 级直博生，个人履历说明在百度 VIS 实习时由同篇作者陈明武、王井东指导。', 'https://lifuguan.github.io/' ],
      title: 'DGTR: Distributed Gaussian Turbo-Reconstruction for Sparse-View Vast Scenes',
      short: 'DGTR',
      date: '2025',
      venue: 'ICRA',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2411.12309v2',
      extra: [
        [ '西工大官方直博年级与导师', 'https://zdhxy.nwpu.edu.cn/info/1081/31723.htm' ],
        [ '原始项目', 'https://3d-aigc.github.io/DGTR/' ],
        [ '预印本发表记录', 'https://arxiv.org/abs/2411.12309' ]
      ],
      evidence: '论文首页给第一作者李昊同时标注西北工业大学和百度 VIS，两位百度实习导师均为同篇作者。学校记录其 2022 级直博身份及张鼎文指导，个人履历记录在读期间的百度实习。',
      advising: [ '指导教师', '校方或课题组的具名记录确认 张鼎文 对 李昊 的指导关系。', 'https://zdhxy.nwpu.edu.cn/info/1081/31723.htm' ]
    },
    {
      id: 'bytedance-craft-uestc-zheng',
      company: '字节跳动',
      team: '供应链算法团队',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ '郑凯 · Kai Zheng', '2021 年 2 月起任电子科技大学（深圳）高等研究院教授、博士生导师，原文署电子科技大学并为通讯作者。', 'https://faculty.uestc.edu.cn/zhengkai/zh_CN/index.htm' ],
      employee: [
        'Shiyu Wang',
        '2025 年国际预测学会的会议资料列为字节跳动资深研究员和供应链算法团队主任，同篇署字节跳动并由原文注明为项目负责人。',
        'https://forecasters.org/wp-content/uploads/FS77_-author-version.pdf'
      ],
      student: [ '方雨晨 · Yuchen Fang', '2024 年 9 月起为电子科技大学博士生，原文首页具名说明其工作在字节跳动完成，会议论文集作者表列其并署电子科技大学与字节跳动。', 'https://frakeyc.github.io/' ],
      title: 'Efficient High-Dimensional Time Series Forecasting with Transformers: A Channel Reordering Perspective',
      short: 'CRAFT',
      date: '2026-04',
      venue: 'ACM Web Conference',
      area: '时序预测与数据挖掘',
      paper: 'https://zheng-kai.com/paper/2026_www_fang.pdf',
      extra: [
        [ 'ACM DOI', 'https://doi.org/10.1145/3774904.3792392' ],
        [ '会议论文集双署名', 'https://publications.hse.ru/pubs/share/direct/1152301113.pdf' ]
      ],
      evidence: '论文脚注明确第一作者方雨晨在字节跳动完成该研究，并标注同篇企业项目负责人。以博士学籍、论文脚注和会议论文集双署名确认其在读期间参加这项企业研究。个人主页另列 2026 年 7 月开始的 Frontier Tech 实习。',
      advising: [ '校内导师', '方雨晨 的教育经历明确列 郑凯 为当时的校内导师。', 'https://frakeyc.github.io/' ]
    },
    {
      id: 'baidu-showmaker-ustc',
      company: '百度',
      team: '百度 VIS',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [
        '谢洪涛 · Hongtao Xie',
        '中国科学技术大学教授、论文通讯作者，学生 Quanwei Yang 本人确认由其指导。',
        'https://iatyz.ustc.edu.cn/teacher/profile/name/%E8%B0%A2%E6%B4%AA%E6%B6%9B'
      ],
      employee: [ '王井东 · Jingdong Wang', '时任百度计算机视觉首席科学家，同篇署名百度 VIS。', 'https://jingdongwang2017.github.io/CV_Jingdong_Wang.pdf' ],
      student: [ 'Quanwei Yang', '2020 年 9 月至 2026 年 6 月为中国科学技术大学博士生，2023 年 11 月起在百度 VIS 实习。', 'https://mumuwei.github.io/' ],
      title: 'ShowMaker: Creating High-Fidelity 2D Human Video via Fine-Grained Diffusion Modeling',
      short: 'ShowMaker',
      date: '2024-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2024/file/5b0c0b2c2efdd736a53688ebfdc3bcdb-Paper-Conference.pdf',
      extra: [ [ '论文项目主页', 'https://mumuwei.github.io/ShowMaker' ] ],
      evidence: '正式版首页第一作者 Quanwei Yang 名下的脚注确认论文工作在百度实习时完成。本人履历说明百度 VIS 实习起始时间及同期中国科大博士学籍和导师。',
      advising: [ '校内导师', 'Quanwei Yang 的教育经历明确列 谢洪涛 为当时的校内导师。', 'https://mumuwei.github.io/' ]
    },
    {
      id: 'ultrapixel-huawei-hkustgz-zhu',
      company: '华为',
      team: '诺亚方舟实验室 · 视觉生成',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [
        '朱磊 · Lei Zhu',
        '香港科技大学（广州）机器人与自主系统学域助理教授，论文通讯作者及第一作者博士导师。',
        'https://calendar.hkust.edu.hk/events/frontier-technologies-seminars-2023-hkust-bdr-joint-research-institute-ai-vision'
      ],
      employee: [
        '宋风龙 · Fenglong Song',
        '华为首席工程师，2024 年同期论文及华为专利分别列其诺亚方舟实验室署名和华为雇主；UltraPixel 同一作者。',
        'https://theorg.com/org/huawei/person/fenglong-song'
      ],
      student: [
        '任菁菁 · Jingjing Ren',
        '2022 年 9 月至 2026 年 8 月在港科大（广州）读博；2023 年 12 月至 2025 年 5 月在华为诺亚方舟实验室研究实习。',
        'https://jingjingrenabc.github.io/'
      ],
      title: 'UltraPixel: Advancing Ultra-High-Resolution Image Synthesis to New Peaks',
      short: 'UltraPixel',
      date: '2024-07-02',
      venue: 'NeurIPS 2024',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2024/file/c9028f7874df04843e7bf435ee4cd3c3-Paper-Conference.pdf',
      extra: [
        [ '首个公开预印本', 'https://arxiv.org/abs/2407.02158' ],
        [ '教师实验室列其博士在读区间', 'https://sites.google.com/site/indexlzhu/people' ],
        [ '企业员工同期论文及公司邮箱', 'https://faculty.ucmerced.edu/mhyang/papers/ijcv24_uhd_deblurring.pdf' ],
        [ '同一学生、导师和华为团队延续研究 Turbo2K', 'https://jingjingrenabc.github.io/' ]
      ],
      evidence: '一作本人列出港科大（广州）博士学籍、华为诺亚方舟实习区间、同题论文与项目。该实习覆盖预印本到 NeurIPS 发表时间。同一校企团队延续合作 Turbo2K，导师组名录给出任菁菁的博士起止日期。',
      advising: [ '校内导师', '任菁菁 的教育经历明确列 朱磊 为当时的校内导师。', 'https://jingjingrenabc.github.io/' ]
    },
    {
      id: 'agentic-consensus-tencent-hkustgz-xiong',
      company: '腾讯',
      team: 'CodeBuddy / WorkBuddy',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ '熊辉 · Hui Xiong', '香港科技大学（广州）人工智能学域讲席教授，论文通讯作者及第一作者博士导师。', 'https://ailab.hkust-gz.edu.cn/' ],
      employee: [
        'Hande Dong',
        '2023 年 8 月起任腾讯云资深 AI 研究员，后负责 WorkBuddy 模型研发，本文腾讯署名通讯作者和实习导师。',
        'https://donghande.github.io/files/Hande_Dong_s_CV.pdf'
      ],
      student: [
        'Tianfu Wang',
        '2025 年 8 月起为港科大（广州）人工智能博士生，2026 年 1–4 月在腾讯 CodeBuddy / WorkBuddy 实习，由同篇作者 Hande Dong 指导。',
        'https://tianfu.wang/cv/'
      ],
      title: 'Scaling Human-AI Coding Collaboration Requires a Governable Consensus Layer',
      short: 'Agentic Consensus',
      date: '2026-04-20',
      venue: 'arXiv 预印本',
      area: '智能体与大语言模型',
      paper: 'https://arxiv.org/abs/2604.17883',
      extra: [
        [ '一作维护的论文项目与团队署名', 'https://tianfu.wang/AgenticConsensus/' ],
        [ '腾讯 WorkBuddy 模型研发负责人介绍', 'https://ml-summit.org/speaker/1356?lang=en&uid=c1051' ]
      ],
      evidence: '港科大（广州）博士生 Tianfu Wang 为一作，学术导师熊辉和同期腾讯 CodeBuddy / WorkBuddy 实习导师 Hande Dong 均为通讯作者。预印本首发落在实习末月，项目针对智能体编程协作，与实习业务相符。',
      advising: [ '校内导师', 'Tianfu Wang 的教育经历明确列 熊辉 为当时的校内导师。', 'https://tianfu.wang/cv/' ]
    },
    {
      id: 'alibaba-fantasytalking-bupt-qi',
      company: '阿里巴巴',
      team: '高德 · 视觉技术中心',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '齐勇刚 · Yonggang Qi', '北京邮电大学副教授，同篇署北邮并任通讯作者。', 'https://qugank.github.io/index.html' ],
      employee: [ 'Fan Jiang', '2025 年在阿里巴巴高德担任资深算法工程师，原文列为项目负责人并以企业邮箱署名。', 'https://orcid.org/0009-0008-5801-6431' ],
      student: [ '张云鹏 · Yunpeng Zhang', '北邮齐勇刚课题组 2026 届毕业生。2025 年首版使用高德邮箱，作者维护的同篇项目页将其双署高德和北邮。', 'https://qugank.github.io/#team' ],
      title: 'FantasyTalking: Realistic Talking Portrait Generation via Coherent Motion Synthesis',
      short: 'FantasyTalking',
      date: '2025-10',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://doi.org/10.1145/3746027.3755217',
      extra: [
        [ '正式项目页作者双署名', 'https://fantasy-amap.github.io/fantasy-talking/' ],
        [ '2025 年 4 月作者稿和企业邮箱', 'https://arxiv.org/html/2504.04842v1' ],
        [ '企业研究员公开履历', 'https://frankjiang.github.io/' ],
        [ '高德视觉技术中心项目归属', 'https://amap-cvlab.github.io/index.zh.html' ]
      ],
      evidence: '在北邮课题组所列的 2026 年毕业之前，张云鹏已在 2025 年首版使用高德机构与邮箱署名，高德维护的同一研究项目将其双署高德和北邮；同篇项目负责人 Fan Jiang 的任职和齐勇刚的校内身份可交叉复核。公开材料能确认在读期间参与高德项目。',
      advising: [ '课题组指导', '齐勇刚 的个人团队或学生名录将 张云鹏 列为当时的学生。', 'https://qugank.github.io/index.html' ]
    },
    {
      id: 'scriptagent-tencent-xidian-deng',
      company: '腾讯',
      team: '混元多模态部 · 数字人算法团队',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [ '邓成 · Cheng Deng', '西安电子科技大学电子工程学院教授，为同篇作者和第一作者的校内导师；ORCID 同列自 2025 年 9 月起任河海大学副校长。', 'https://orcid.org/0000-0003-2620-3247' ],
      employee: [ 'Zhaopeng Tu', '腾讯混元多模态部数字人算法负责人，论文腾讯署名通讯作者，使用公司邮箱；2025 年同期论文亦以腾讯混元数字人团队署名。', 'https://tuzhaopeng.github.io/' ],
      student: [ 'Chenyu Mu', '2024 年 6 月起在西电电子工程学院攻读硕士，2025 年 7–12 月在腾讯混元实习；同篇西电、腾讯混元多模态部双署名共同一作。', 'https://xd-mu.github.io/' ],
      title: 'The Script is All You Need: An Agentic Framework for Long-Horizon Dialogue-to-Cinematic Video Generation',
      short: 'The Script is All You Need',
      date: '2026-01-25',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2601.17737v2',
      extra: [
        [ '首次公开预印本', 'https://arxiv.org/abs/2601.17737v1' ],
        [ '2025 年腾讯混元数字人署名的正式会议论文', 'https://aclanthology.org/anthology-files/pdf/emnlp/2025.emnlp-main.1389.pdf' ]
      ],
      evidence: '同篇共同一作同时署名西电和腾讯混元多模态部。其本人主页列出 2025 年 7–12 月混元实习、同题论文和两位同篇西电导师；预印本在实习结束后的次月首发。同期同团队的正式论文及团队负责人主页确认企业通讯作者的腾讯岗位。这与另一条微信视觉实习属不同部门与研究项目。',
      advising: [ '校内导师', 'Chenyu Mu 的教育经历明确列 邓成 为当时的校内导师。', 'https://xd-mu.github.io/' ]
    },
    {
      id: 'scriptagent-tencent-xidian-yang',
      company: '腾讯',
      team: '混元多模态部 · 数字人算法团队',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [
        'Erkun Yang',
        '西安电子科技大学电子工程学院副教授，为同篇作者和第一作者的校内导师。',
        'https://see.xidian.edu.cn/faculty/chdeng/Welcome%20to%20Cheng%20Deng%27s%20Homepage_files/Papers/Journal/TIP2024_Xiao.pdf'
      ],
      employee: [ 'Zhaopeng Tu', '腾讯混元多模态部数字人算法负责人，论文腾讯署名通讯作者，使用公司邮箱；2025 年同期论文亦以腾讯混元数字人团队署名。', 'https://tuzhaopeng.github.io/' ],
      student: [ 'Chenyu Mu', '2024 年 6 月起在西电电子工程学院攻读硕士，2025 年 7–12 月在腾讯混元实习；同篇西电、腾讯混元多模态部双署名共同一作。', 'https://xd-mu.github.io/' ],
      title: 'The Script is All You Need: An Agentic Framework for Long-Horizon Dialogue-to-Cinematic Video Generation',
      short: 'The Script is All You Need',
      date: '2026-01-25',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2601.17737v2',
      extra: [
        [ '首次公开预印本', 'https://arxiv.org/abs/2601.17737v1' ],
        [ '2025 年腾讯混元数字人署名的正式会议论文', 'https://aclanthology.org/anthology-files/pdf/emnlp/2025.emnlp-main.1389.pdf' ]
      ],
      evidence: '同篇共同一作同时署名西电和腾讯混元多模态部。其本人主页列出 2025 年 7–12 月混元实习、同题论文和两位同篇西电导师；预印本在实习结束后的次月首发。同期同团队的正式论文及团队负责人主页确认企业通讯作者的腾讯岗位。这与另一条微信视觉实习属不同部门与研究项目。',
      advising: [ '校内导师', 'Chenyu Mu 的教育经历明确列 Erkun Yang 为当时的校内导师。', 'https://xd-mu.github.io/' ]
    },
    {
      id: 'meituan-dynamic-gradient-gating-whu',
      company: '美团',
      team: 'LongCat · Agent',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '张乐飞 · Lefei Zhang', '武汉大学计算机学院教授、博士生导师。论文通讯作者，学生公开履历列为校内导师。', 'https://jszy.whu.edu.cn/zhanglefei/en/index/427766/list/index.htm' ],
      employee: [ '蔡勋梁 · Xunliang Cai', '美团 LongCat 团队共同作者，任美团自然语言处理部负责人。', 'https://www.biendata.xyz/competition/ccfbdci2020/discussion/694/' ],
      student: [ '苗雨春 · Yuchun Miao', '武汉大学博士生，2026 年 1 月起在美团 LongCat Agent 团队实习。', 'https://miaoyuchun.github.io/' ],
      title: 'When to Stop Reusing: Dynamic Gradient Gating for Sample-Efficient RLVR',
      short: 'Dynamic Gradient Gating',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '基础模型与推理',
      paper: 'https://arxiv.org/html/2605.19425',
      extra: [ [ '预印本发表日期', 'https://arxiv.org/abs/2605.19425' ], [ '美团 LongCat 同组论文与通讯邮箱', 'https://arxiv.org/html/2604.26256' ] ],
      evidence: '论文首页在武汉大学第一作者苗雨春名下注明其在美团 LongCat 团队实习期间完成这项研究。公开履历确认实习起始时间和博士导师。',
      advising: [ '校内导师', '苗雨春 的教育经历明确列 张乐飞 为当时的校内导师。', 'https://miaoyuchun.github.io/' ]
    },
    {
      id: 'kuaishou-coft2i-pku',
      company: '快手',
      team: '可灵 AI（Kling）',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '张文涛 · Wentao Zhang', '北京大学助理教授、博士生导师，论文通讯作者及 Yuran Wang 的北大导师。', 'https://zwt233.github.io/' ],
      employee: [ '万鹏飞 · Pengfei Wan', '快手视觉生成与互动中心负责人，带领可灵团队，论文署快手可灵。', 'https://2024.baai.ac.cn/speakers' ],
      student: [ 'Yuran Wang', '北京大学在读硕士，2025 年 6 月起在快手可灵实习；公开履历同时列出校内导师与论文。', 'https://ryann-ran.github.io/' ],
      title: 'CoF-T2I: Video Models as Pure Visual Reasoners for Text-to-Image Generation',
      short: 'CoF-T2I',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://proceedings.mlr.press/v306/tong26a.html',
      extra: [ [ '项目作者及机构表', 'https://cof-t2i.github.io/' ], [ '2026 年 1 月预印本记录', 'https://arxiv.org/abs/2601.10061' ] ],
      evidence: '项目为 Yuran Wang 标注北京大学及快手可灵双署名，公开履历确认北大硕士身份、同篇校内导师、可灵实习起始和本项工作。',
      advising: [ '校内导师', 'Yuran Wang 的教育经历明确列 张文涛 为当时的校内导师。', 'https://ryann-ran.github.io/' ]
    },
    {
      id: 'jd-bert-pretraining-juhua-liu',
      company: '京东',
      team: '京东探索研究院',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '刘菊华 · Juhua Liu', '研究期间任武汉大学计算机学院教授、钟起煌的博士导师，论文以武汉大学署名。', 'https://jszy.whu.edu.cn/liujuhua1/zh_CN/index.htm' ],
      employee: [ '丁亮 · Liang Ding', '时任京东探索研究院 NLP 研究组研究人员、钟起煌的实习导师，以京东探索研究院署名。', 'https://liamding.cc/' ],
      student: [ '钟起煌 · Qihuang Zhong', '2020 年 9 月至 2025 年 12 月在武汉大学读博，2021 年 9 月至 2023 年 5 月在京东探索研究院 NLP 组科研实习。', 'https://www.qihuangzhong.top/' ],
      title: 'Revisiting Token Dropping Strategy in Efficient BERT Pretraining',
      short: 'Revisiting Token Dropping',
      date: '2023-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2023.acl-long.579.pdf',
      extra: [ [ 'ACL 论文索引', 'https://aclanthology.org/2023.acl-long.579/' ], [ '2023 年 5 月预印本', 'https://arxiv.org/abs/2305.15273' ] ],
      evidence: '钟起煌的个人履历列明武汉大学博士阶段、京东探索研究院 NLP 组实习日期及企业导师丁亮，并将该论文列为高效预训练方向成果。预印本于京东实习结束当月公开。',
      advising: [ '博士导师', '钟起煌的教育经历同时列明杜博和刘菊华为武汉大学博士导师。', 'https://www.qihuangzhong.top/' ]
    },
    {
      id: 'jd-bert-pretraining-bo-du',
      company: '京东',
      team: '京东探索研究院',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '杜博 · Bo Du', '研究期间任武汉大学计算机学院教授、钟起煌的博士导师，论文以武汉大学署名。', 'https://ai.wzu.edu.cn/info/1340/10750.htm' ],
      employee: [ '丁亮 · Liang Ding', '时任京东探索研究院 NLP 研究组研究人员、钟起煌的实习导师，以京东探索研究院署名。', 'https://liamding.cc/' ],
      student: [ '钟起煌 · Qihuang Zhong', '2020 年 9 月至 2025 年 12 月在武汉大学读博，2021 年 9 月至 2023 年 5 月在京东探索研究院 NLP 组科研实习。', 'https://www.qihuangzhong.top/' ],
      title: 'Revisiting Token Dropping Strategy in Efficient BERT Pretraining',
      short: 'Revisiting Token Dropping',
      date: '2023-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2023.acl-long.579.pdf',
      evidence: '钟起煌的个人履历列明武汉大学博士阶段、京东探索研究院 NLP 组实习日期及企业导师丁亮，并将该论文列为高效预训练方向成果。预印本于京东实习结束当月公开。',
      extra: [ [ 'ACL 论文索引', 'https://aclanthology.org/2023.acl-long.579/' ], [ '2023 年 5 月预印本', 'https://arxiv.org/abs/2305.15273' ] ],
      advising: [ '博士导师', '钟起煌的教育经历同时列明杜博和刘菊华为武汉大学博士导师。', 'https://www.qihuangzhong.top/' ]
    },
    {
      id: 'bytedance-cola2-hku-zhao',
      company: '字节跳动',
      team: 'Seedance',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '赵恒爽 · Hengshuang Zhao', '香港大学计算与数据科学学院教师，原文港大通讯作者。', 'https://i.cs.hku.hk/~hszhao/index.html' ],
      employee: [ '魏国强 · Guoqiang Wei', '2023 年 6 月博士毕业后加入字节 AI Lab / Seed，原文以字节 Seed 署名，为共同主要贡献者及郭泓灿的实习导师。', 'https://guoqiangwei.xyz/' ],
      student: [ '郭泓灿 · Hongcan Guo', '2026 年 9 月起在港大读博，2025 年 6 月起在字节 Seedance 做科研实习。', 'https://hongcanguo.github.io/' ],
      title: 'Cola2: Co-Adaptive Hierarchical Language Modeling with Continuous Semantic Compression and Balanced Discrete Generation',
      short: 'Cola2',
      date: '2026-10-22',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/abs/2610.31305',
      extra: [ [ '作者项目与校企署名', 'https://hongcanguo.github.io/Cola2/' ] ],
      evidence: '作者项目页标明该研究属于 Seedance，第一作者署港大及字节 Seed。学生主页同时列出同篇港大博士导师赵恒爽及字节实习导师魏国强。',
      advising: [ '博士导师', '郭泓灿在港大博士阶段的公开教育经历列赵恒爽为导师。', 'https://hongcanguo.github.io/' ]
    },
    {
      id: 'bytedance-promptda-zju-zhou',
      company: '字节跳动',
      team: 'Seed · 空间智能',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '周晓巍 · Xiaowei Zhou', '浙江大学计算机学院教授。', 'https://xzhou.me/' ],
      employee: [
        '冯佳时 · Jiashi Feng',
        '香港理工大学 2025 年 2 月研讨会资料列其为字节跳动视觉研究负责人，论文署名字节 Seed。',
        'https://www.polyu.edu.hk/comp/news-and-events/event/2025/02/dsai-250214/'
      ],
      student: [ 'Haotong Lin', '2021 至 2026 年在浙大攻读博士。2024 年 4 月至 2026 年 6 月在字节 Seed 实习，随后转为正式研究人员。', 'https://haotongl.github.io/' ],
      title: 'Prompting Depth Anything for 4K Resolution Accurate Metric Depth Estimation',
      short: 'Prompt Depth Anything',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Lin_Prompting_Depth_Anything_for_4K_Resolution_Accurate_Metric_Depth_Estimation_CVPR_2025_paper.pdf',
      extra: [
        [
          '字节 Seed 的项目记录',
          'https://seed.bytedance.com/en/public_papers/prompting-depth-anything-for-4k-resolution-accurate-metric-depth-estimation'
        ],
        [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.14015' ]
      ],
      evidence: '第一作者同时署名浙大和字节 Seed，字节将该论文列为团队研究成果。学生主页将论文列在博士阶段成果中，并给出当时的实习经历及两位同篇指导教师。',
      advising: [ '博士共同导师', 'Haotong Lin 的个人主页列周晓巍及彭思达为其浙大博士导师。', 'https://haotongl.github.io/' ]
    },
    {
      id: 'bytedance-promptda-zju-peng',
      company: '字节跳动',
      team: 'Seed · 空间智能',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '彭思达 · Sida Peng', '2023 年 7 月起在浙江大学软件学院任教，论文通讯作者。', 'https://pengsida.net/' ],
      employee: [
        '冯佳时 · Jiashi Feng',
        '香港理工大学 2025 年 2 月研讨会资料列其为字节跳动视觉研究负责人，论文署名字节 Seed。',
        'https://www.polyu.edu.hk/comp/news-and-events/event/2025/02/dsai-250214/'
      ],
      student: [ 'Haotong Lin', '2021 至 2026 年在浙大攻读博士。2024 年 4 月至 2026 年 6 月在字节 Seed 实习，随后转为正式研究人员。', 'https://haotongl.github.io/' ],
      title: 'Prompting Depth Anything for 4K Resolution Accurate Metric Depth Estimation',
      short: 'Prompt Depth Anything',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Lin_Prompting_Depth_Anything_for_4K_Resolution_Accurate_Metric_Depth_Estimation_CVPR_2025_paper.pdf',
      extra: [
        [
          '字节 Seed 的项目记录',
          'https://seed.bytedance.com/en/public_papers/prompting-depth-anything-for-4k-resolution-accurate-metric-depth-estimation'
        ],
        [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.14015' ]
      ],
      evidence: '第一作者同时署名浙大和字节 Seed，字节将该论文列为团队研究成果。学生主页将论文列在博士阶段成果中，并给出当时的实习经历及两位同篇指导教师。',
      advising: [ '博士共同导师', 'Haotong Lin 的个人主页列周晓巍及彭思达为其浙大博士导师。', 'https://haotongl.github.io/' ]
    },
    {
      id: 'bytedance-unitime-sjtu-xie',
      company: '字节跳动',
      team: 'Seed · 视频理解',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '谢维迪 · Weidi Xie', '上海交通大学人工智能学院教师，论文署名上交大。', 'https://weidixie.github.io/' ],
      employee: [ 'Weilin Huang', '字节 Seed 的研究人员。公开职业资料列任职机构为字节 Seed，论文以该团队署名。', 'https://cn.linkedin.com/in/weilin-huang-7a398649' ],
      student: [ '狄尚哲 · Shangzhe Di', '2023 年起在上交大读博，2024 年 11 月至 2025 年 12 月在字节 Seed 进行 TopSeed 科研实习。', 'https://dszdsz.cn/' ],
      title: 'Universal Video Temporal Grounding with Generative Multi-modal Large Language Models',
      short: 'UniTime',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://papers.neurips.cc/paper_files/paper/2025/file/5d2e24df9cfaad3189833b819c40b392-Paper-Conference.pdf',
      extra: [
        [ '2025 年 6 月预印本', 'https://arxiv.org/abs/2506.18883' ],
        [ '字节 Seed 的研究组同期报告', 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/SeedEdit.pdf' ]
      ],
      evidence: '论文署名上交大及字节 Seed 的狄尚哲在个人主页列出该研究。2025 年 6 月预印本公开时，他同时处于上交大博士阶段和字节 TopSeed 实习期。',
      advising: [ '博士导师', '狄尚哲的教育经历明确列谢维迪为其上海交通大学博士导师。', 'https://dszdsz.cn/' ]
    },
    {
      id: 'bytedance-ditmup-ruc-li',
      company: '字节跳动',
      team: 'Seed · 视觉预训练',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '李崇轩 · Chongxuan Li', '中国人民大学高瓴人工智能学院教师，论文通讯作者。', 'https://zhenxuan00.github.io/' ],
      employee: [ 'Weilin Huang', '字节 Seed 的研究人员。公开职业资料列任职机构为字节 Seed，论文以该团队署名。', 'https://cn.linkedin.com/in/weilin-huang-7a398649' ],
      student: [ 'Chenyu Zheng', '2023 年本科毕业后在中国人民大学读博，在字节 Seed Vision 进行预训练研究实习。', 'https://chen-yu-zheng.github.io/' ],
      title: 'Scaling Diffusion Transformers Efficiently via μP',
      short: 'Scaling Diffusion Transformers via μP',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://papers.nips.cc/paper_files/paper/2025/file/1bf3dbbd6346f50627e2ab1795f90435-Paper-Conference.pdf',
      extra: [ [ '在读和企业实习履历', 'https://chen-yu-zheng.github.io/chenyu_cv_en.pdf' ], [ '2025 年 5 月预印本', 'https://arxiv.org/abs/2505.15270' ] ],
      evidence: '论文中第一作者同时署中国人民大学和字节 Seed。学生主页与简历记录博士学籍、字节视觉预训练实习和这篇论文，同篇有其博士导师和字节研究人员。',
      advising: [ '博士导师', 'Chenyu Zheng 的个人主页明确列李崇轩为其人大博士导师。', 'https://chen-yu-zheng.github.io/' ]
    },
    {
      id: 'bytedance-simplerl-hkust-he',
      company: '字节跳动',
      team: 'TikTok AI Innovation Center',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [
        '何俊贤 · Junxian He',
        '香港科技大学计算机科学与工程学系助理教授，校方名录列出其指导的博士生黄裕振。',
        'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=junxian-he-junxianh'
      ],
      employee: [
        '刘乾 · Qian Liu',
        '2024 年 11 月至 2025 年 12 月为 TikTok 新加坡研究员，同篇以 TikTok 署名共同一作。其履历将本项目列在 2024 年 12 月至 2025 年 3 月。',
        'https://siviltaram.github.io/'
      ],
      student: [ '黄裕振 · Yuzhen Huang', '研究时为港科大计算机博士生，2025 年 1 月至 12 月在 TikTok AI Innovation Center 实习，企业导师为刘乾。', 'https://hyz17.github.io/' ],
      title: 'SimpleRL-Zoo: Investigating and Taming Zero Reinforcement Learning for Open Base Models in the Wild',
      short: 'SimpleRL-Zoo',
      date: '2025-10',
      venue: 'COLM',
      area: '语言模型与智能体',
      paper: 'https://openreview.net/pdf?id=vSMCBUgrQj',
      extra: [ [ '2025 年 3 月预印本', 'https://arxiv.org/abs/2503.18892' ] ],
      evidence: '学生公开履历列出该作及实习导师刘乾。刘乾的履历同时确认 TikTok 任职和该项目时间，原文列两人共同一作并有校内导师何俊贤署名。',
      advising: [ '博士导师', '黄裕振的个人主页及港科大教师名录均确认何俊贤指导其博士研究。', 'https://hyz17.github.io/' ]
    },
    {
      id: 'bytedance-cuda-agent-thu-zhang',
      company: '字节跳动',
      team: 'Seed · SIA 联合实验室',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '张亚勤 · Ya-Qin Zhang', '清华大学智能产业研究院创院院长，论文署名清华 AIR 及校企联合实验室。', 'https://www.cs.tsinghua.edu.cn/csen/info/1364/4703.htm' ],
      employee: [
        '王明轩 · Mingxuan Wang',
        '清华发布的联合研究中心资料列其为字节豆包大模型团队高级研究员、中心联合主任。论文署名字节 Seed 及联合实验室。',
        'https://air.tsinghua.edu.cn/en/info/1007/1886.htm'
      ],
      student: [ '高焕昂 · Huan-ang Gao', '2024 年起攻读清华计算机博士。公开主页将本项目列于一年期的字节 Seed 科研实习工作。', 'https://c7w.tech/' ],
      title: 'CUDA Agent: Large-Scale Agentic RL for High-Performance CUDA Kernel Generation',
      short: 'CUDA Agent',
      date: '2026-02',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/abs/2602.24286',
      extra: [ [ '论文项目与作者署名', 'https://cuda-agent.github.io/' ] ],
      evidence: '原文列高焕昂为清华 AIR、字节 Seed 及 SIA 联合实验室作者。高焕昂本人把 CUDA Agent 列在企业实习期间的研究，并给出清华博士导师张亚勤。',
      advising: [ '博士导师', '高焕昂的博士教育经历明确列张亚勤为导师。', 'https://c7w.tech/' ]
    },
    {
      id: 'alibaba-race-ruc-dou',
      company: '阿里巴巴',
      team: 'Alibaba Token Hub',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '窦志成 · Zhicheng Dou', '中国人民大学高瓴人工智能学院长聘教授，论文通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm' ],
      employee: [ '谢朋峻 · Pengjun Xie', '阿里巴巴官方资料列其为智能引擎事业部搜索算法负责人，原文署名 Alibaba Token Hub。', 'https://tianchi.aliyun.com/MultiCPR' ],
      student: [
        'Yiruo Cheng',
        '中国人民大学高瓴人工智能学院博士生，原文首页注明在阿里巴巴集团 Alibaba Token Hub 实习期间完成该研究。',
        'https://ruc-nlpir.github.io/members/yiruo-cheng.html'
      ],
      title: 'When Should Agents Think? Adaptive Reasoning via Cross-Turn Estimation',
      short: 'RACE',
      date: '2026-10-08',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2610.12061',
      evidence: '论文首页在人大第一作者 Yiruo Cheng 名下明确标注阿里实习。人大课题组学生名录列出两位同篇指导教师。',
      advising: [ '博士共同指导', 'Yiruo Cheng 的人大课题组个人介绍列窦志成和文继荣共同指导其博士研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ]
    },
    {
      id: 'alibaba-race-ruc-wen',
      company: '阿里巴巴',
      team: 'Alibaba Token Hub',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '文继荣 · Ji-Rong Wen', '2019 年起任中国人民大学高瓴人工智能学院长聘教授，论文署名中国人民大学。', 'https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm' ],
      employee: [ '谢朋峻 · Pengjun Xie', '阿里巴巴官方资料列其为智能引擎事业部搜索算法负责人，原文署名 Alibaba Token Hub。', 'https://tianchi.aliyun.com/MultiCPR' ],
      student: [
        'Yiruo Cheng',
        '中国人民大学高瓴人工智能学院博士生，原文首页注明在阿里巴巴集团 Alibaba Token Hub 实习期间完成该研究。',
        'https://ruc-nlpir.github.io/members/yiruo-cheng.html'
      ],
      title: 'When Should Agents Think? Adaptive Reasoning via Cross-Turn Estimation',
      short: 'RACE',
      date: '2026-10-08',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2610.12061',
      evidence: '论文首页在人大第一作者 Yiruo Cheng 名下明确标注阿里实习。人大课题组学生名录列出两位同篇指导教师。',
      advising: [ '博士共同指导', 'Yiruo Cheng 的人大课题组个人介绍列窦志成和文继荣共同指导其博士研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ]
    },
    {
      id: 'alibaba-semtalk-whu-tu',
      company: '阿里巴巴',
      team: '通义实验室 · 三维生成',
      school: '武汉大学',
      studentSchool: '武汉大学',
      faculty: [ '涂志刚 · Zhigang Tu', '武汉大学研究人员，论文署名武大并为通讯作者。', 'https://www.hfuu.edu.cn/aibd/7e/90/c7287a163472/page.htm' ],
      employee: [ '薄列峰 · Liefeng Bo', '2024 年研究开展时任阿里通义实验室 XR 团队负责人，原文以通义实验室署名。', 'https://zhidx.com/p/422525.html' ],
      student: [
        '章湘粤 · Xiangyue Zhang',
        '2023 年 9 月起在武汉大学攻读硕士。2024 年 6 月至 2025 年 11 月在阿里通义实验室实习。',
        'https://xiangyuezhang.com/assets/pdf/resume_xiangyue_zhang.pdf'
      ],
      title: 'SemTalk: Holistic Co-speech Motion Generation with Frame-level Semantic Emphasis',
      short: 'SemTalk',
      date: '2025-10',
      venue: 'ICCV',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_SemTalk_Holistic_Co-speech_Motion_Generation_with_Frame-level_Semantic_Emphasis_ICCV_2025_paper.html',
      extra: [ [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.16563' ], [ '论文项目与作者署名', 'https://xiangyuezhang.com/SemTalk/' ] ],
      evidence: '章湘粤的简历在通义实验室实习条目下列明 SemTalk，论文署名武大及通义实验室。预印本公开于 2024 年 12 月，三位作者的学籍和任职均按该研究阶段核对。',
      advising: [ '硕士导师', '章湘粤在武大读研期间的公开简历具名列涂志刚为硕士导师。', 'https://xiangyuezhang.com/assets/pdf/resume11.8_web.pdf' ]
    },
    {
      id: 'bytedance-ssg-hit-zuo',
      company: '字节跳动',
      team: '智能创作团队',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '左旺孟 · Wangmeng Zuo', '哈尔滨工业大学计算学部教授，论文署名哈工大并为通讯作者。', 'https://homepage.hit.edu.cn/wangmengzuo?lang=zh' ],
      employee: [
        '冯佳时 · Jiashi Feng',
        '研究时已在字节跳动从事视觉研究，同篇使用字节署名及企业邮箱。字节开发者社区的讲者简介列其为公司研究科学家。',
        'https://developer.volcengine.com/articles/7413957978627244059'
      ],
      student: [
        '张亚博 · Yabo Zhang',
        '2021 年 9 月至 2023 年 6 月为哈工大硕士生，2022 年 6 月至 2023 年 1 月在字节跳动实习。',
        'https://ybybzhang.github.io/data/YaboZhang-CV.pdf'
      ],
      title: 'Associating Spatially-Consistent Grouping with Text-supervised Semantic Segmentation',
      short: 'Spatially-Consistent Grouping',
      date: '2023-04-03',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2304.01114',
      extra: [ [ '学生主页与实习团队', 'https://ybybzhang.github.io/' ] ],
      evidence: '原文首页具名标注哈工大第一作者在字节实习期间完成研究。其简历在该段字节实习中列出文本监督语义分割项目、研究日期和企业指导者。',
      advising: [ '硕士导师', '张亚博的公开履历明确列左旺孟为哈工大硕士导师。', 'https://ybybzhang.github.io/data/YaboZhang-CV.pdf' ]
    },
    {
      id: 'tencent-lol-xjtu-lan',
      company: '腾讯',
      team: 'QQ 多模态大模型',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [ '兰旭光 · Xuguang Lan', '西安交通大学人工智能学院教授、博士生导师，论文校方通讯作者。', 'https://gr.xjtu.edu.cn/zeuslan/' ],
      employee: [ 'Dian Li', '论文具名列为腾讯 QQ 多模态大模型项目负责人，使用企业邮箱并为通讯作者。CVPR 2022 官方名录同期可追溯其腾讯任职。', 'https://cvpr2022.thecvf.com/node/326' ],
      student: [ '王涵 · Han Wang', '2020 级西安交通大学直博生。论文标注其为腾讯 QQ 多模态大模型项目实习生。', 'https://gr.xjtu.edu.cn/zeuslan/zh_CN/zhym/1067945/list/index.htm' ],
      title: 'Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps',
      short: 'Innovative Thinking, Infinite Humor',
      date: '2025-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf',
      extra: [ [ '2024 年 10 月预印本及实习脚注', 'https://arxiv.org/html/2410.10370' ] ],
      evidence: 'ICLR 论文首页对王涵注明在腾讯 QQ 实习期间完成，三人同篇署名。西交大教师官网的博士生名录确认王涵和入学年份。',
      advising: [ '课题组指导', '兰旭光在西安交通大学的个人页面将王涵列入本人在读博士生名录，标记为 2020 级直博生。', 'https://gr.xjtu.edu.cn/zeuslan/zh_CN/zhym/1067945/list/index.htm' ]
    },
    {
      id: 'baidu-hft-bupt-xu',
      company: '百度',
      team: '文心（ERNIE）',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '徐蔚然 · Weiran Xu', '北京邮电大学 PRIS-NLP 课题组负责人，任副教授和硕博导师，论文署北邮。', 'https://pris-nlp.github.io/en/' ],
      employee: [ 'Zhenyu Zhang', '2022 年博士毕业后在百度任职，履历列为文心团队资深算法工程师。论文以百度机构及邮箱署名，为通讯作者。', 'https://zhenyu.ac.cn/' ],
      student: [ 'Tingfeng Hui', '2024 年在北邮就读研究生，课题组名单中的校内邮箱和论文一致。原文确认在百度实习。', 'https://pris-nlp.github.io/en/' ],
      title: 'HFT: Half Fine-Tuning for Large Language Models',
      short: 'HFT',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.626.pdf',
      extra: [ [ '2024 年 4 月预印本', 'https://arxiv.org/abs/2404.19733' ] ],
      evidence: 'ACL 正式版首页对第一作者具名注明在百度实习期间完成。北邮 PRIS-NLP 组名录列第一作者为研究生，并将徐蔚然列为导师。',
      advising: [ '课题组指导', '北邮徐蔚然课题组学生名录列 Tingfeng Hui 为研究生，并给出与原文相同的校内邮箱。', 'https://pris-nlp.github.io/en/' ]
    },
    {
      id: 'kuaishou-rofigr-bupt-fang',
      company: '快手',
      team: '生成式推荐',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '方全 · Quan Fang', '北京邮电大学人工智能学院特聘研究员，论文校方通讯作者。', 'https://quanfang.github.io/index.html' ],
      employee: [
        'Fei Pan',
        '快手推荐研究人员。2026 年 ACM RecSys 官方名录列为快手，RoFiGR 及同组 2026 年的 SinkRec 均列其为企业通讯作者。',
        'https://programs.sigchi.org/recsys/2026/people/list/270185'
      ],
      student: [ 'Ji Dai', '北京邮电大学硕士生，2026 年 3 月起在快手实习，研究生成式推荐。', 'https://github.com/jidaivita' ],
      title: 'RoFiGR: Coarse Routing, Fine Refinement via Level-Adaptive Distillation in Multimodal Generative Recommendation',
      short: 'RoFiGR',
      date: '2026-10-29',
      venue: 'arXiv',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/pdf/2610.39470',
      extra: [
        [ '同一快手企业通讯作者和学生的同期论文', 'https://arxiv.org/pdf/2606.09888' ],
        [ '企业通讯作者 2025 年的快手署名', 'https://personal.ntu.edu.sg/boan/papers/WWW25_GAS.pdf' ]
      ],
      evidence: 'Ji Dai 的公开履历具名列方全为北邮导师，明确自 2026 年 3 月在快手研究生成式推荐。实习期间连续与同一快手推荐团队合著，RoFiGR 同篇列北邮导师及快手通讯作者。',
      advising: [ '硕士共同导师', 'Ji Dai 的个人介绍具名列方全与 Jun Hu 为北邮硕士阶段的指导老师。', 'https://github.com/jidaivita' ]
    },
    {
      id: 'meituan-skill0-zju-shen',
      company: '美团',
      team: 'LongCat · Agent',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '沈永亮 · Yongliang Shen', '浙江大学 REAL Lab 教师，论文校方通讯作者。', 'https://zjureal.com/people.html' ],
      employee: [ '蔡勋梁 · Xunliang Cai', '美团龙猫大模型负责人，清华大学的校企联合研究中心报道确认其岗位，论文以美团署名。', 'https://www.ee.tsinghua.edu.cn/info/1076/5309.htm' ],
      student: [ '卢政希 · Zhengxi Lu', '2024 年 9 月起为浙江大学博士生，2026 年 3 月起在美团 LongCat 做北斗科研实习。', 'https://lll6gg.github.io/' ],
      title: 'Skill0: In-Context Agentic Reinforcement Learning for Skill Internalization',
      short: 'Skill0',
      date: '2026-04',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.02268',
      extra: [ [ '美团 LongCat 负责人的会议简介', 'https://sigkg.cn/ccks2026/%E7%89%B9%E9%82%80%E6%8A%A5%E5%91%8A/' ] ],
      evidence: '原文在浙大和美团双署名的第一作者名下注明美团实习。卢政希的主页给出博士学籍、校内导师及企业实习开始时间。',
      advising: [ '博士导师', '卢政希主页明确列沈永亮为其浙大博士导师。', 'https://lll6gg.github.io/' ]
    },
    {
      id: 'huawei-saidpo-hit-liu',
      company: '华为',
      team: '诺亚方舟实验室 · 大模型数据技术',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '刘学博 · Xuebo Liu', '哈尔滨工业大学（深圳）教师，论文校方通讯作者。', 'https://sunbowliu.github.io/' ],
      employee: [
        'Jiansheng Wei',
        '2025 年 4 月南京大学校企研讨会列为华为诺亚 AI 数据技术实验室主任，论文使用华为数据技术实验室机构及企业邮箱。',
        'https://is.nju.edu.cn/is_en/7e/72/c57786a753266/page.htm'
      ],
      student: [ '饶隽 · Jun Rao', '哈工大（深圳）在读博士，2025 年 1 月至 12 月在华为诺亚方舟实验室实习，研究大模型数据与数学推理。', 'https://raojay7.github.io/' ],
      title: 'Dynamic Sampling that Adapts: Self-Aware Iterative Data Persistent Optimization for Mathematical Reasoning',
      short: 'SAI-DPO',
      date: '2026-07',
      venue: 'Findings of ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-acl.1412.pdf',
      extra: [ [ '同段实习的另一篇论文 MathAgent', 'https://aclanthology.org/2026.findings-acl.1410.pdf' ] ],
      evidence: '饶隽在履历中把两篇 ACL 2026 数学推理工作列为该段华为实习成果，并具名指出企业指导者 Xiaojun Meng。该文同时列两位校内导师和华为实验室主任。',
      advising: [ '博士共同导师', '饶隽的博士履历明确列刘学博和张民为哈工大（深圳）共同导师。', 'https://raojay7.github.io/' ]
    },
    {
      id: 'huawei-saidpo-hit-zhang',
      company: '华为',
      team: '诺亚方舟实验室 · 大模型数据技术',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '张民 · Min Zhang', '哈尔滨工业大学（深圳）教师，论文以哈工大署名。', 'https://zhangmin-nlp-ai.github.io/' ],
      employee: [
        'Jiansheng Wei',
        '2025 年 4 月南京大学校企研讨会列为华为诺亚 AI 数据技术实验室主任，论文使用华为数据技术实验室机构及企业邮箱。',
        'https://is.nju.edu.cn/is_en/7e/72/c57786a753266/page.htm'
      ],
      student: [ '饶隽 · Jun Rao', '哈工大（深圳）在读博士，2025 年 1 月至 12 月在华为诺亚方舟实验室实习，研究大模型数据与数学推理。', 'https://raojay7.github.io/' ],
      title: 'Dynamic Sampling that Adapts: Self-Aware Iterative Data Persistent Optimization for Mathematical Reasoning',
      short: 'SAI-DPO',
      date: '2026-07',
      venue: 'Findings of ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-acl.1412.pdf',
      extra: [ [ '同段实习的另一篇论文 MathAgent', 'https://aclanthology.org/2026.findings-acl.1410.pdf' ] ],
      evidence: '饶隽在履历中把两篇 ACL 2026 数学推理工作列为该段华为实习成果，并具名指出企业指导者 Xiaojun Meng。该文同时列两位校内导师和华为实验室主任。',
      advising: [ '博士共同导师', '饶隽的博士履历明确列刘学博和张民为哈工大（深圳）共同导师。', 'https://raojay7.github.io/' ]
    },
    {
      id: 'baidu-diffusion-distributions-ruc-li',
      company: '百度',
      team: '百度 VIS',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '李崇轩 · Chongxuan Li', '中国人民大学高瓴人工智能学院教师，论文署名人大并为通讯作者。', 'https://zhenxuan00.github.io/' ],
      employee: [ '王井东 · Jingdong Wang', '2021 年 9 月起任百度计算机视觉首席科学家，论文正式版和预印本均署百度 VIS。', 'https://jingdongwang2017.github.io/CV_Jingdong_Wang.pdf' ],
      student: [ '游泽彬 · Zebin You', '研究期间为中国人民大学博士生，2024 年 1 月至 5 月在百度 VIS 实习，从事扩散模型研究。', 'https://yyyouy.github.io/' ],
      title: 'Are Images Indistinguishable to Humans Also Indistinguishable to Classifiers?',
      short: 'Are Images Indistinguishable to Classifiers?',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/You_Are_Images_Indistinguishable_to_Humans_Also_Indistinguishable_to_Classifiers_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 5 月预印本与具名实习脚注', 'https://arxiv.org/html/2405.18029v1' ] ],
      evidence: '首版对第一作者具名注明在百度 VIS 实习期间完成。学生主页给出该段实习日期和人大导师，王井东在正式版与首版均有百度署名。',
      advising: [ '博士导师', '游泽彬的学术主页明确列李崇轩为其中国人民大学博士导师。', 'https://yyyouy.github.io/' ]
    },
    {
      id: 'bytedance-sailunify-xjtu-sun',
      company: '字节跳动',
      team: '抖音内容团队',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [ '孙鹤立 · Heli Sun', '西安交通大学计算机科学与技术学院教授、硕博导师。会议作者名单署西交大。', 'https://faculty.xjtu.edu.cn/hlsun/zh_CN/tzybd/977862/list/index.htm' ],
      employee: [ 'Ran Jiao', '公开履历列其负责字节跳动抖音内容算法团队。2025 年该团队正式论文与本篇 ACM 论文均以字节署名。', 'https://cn.linkedin.com/in/ran-jiao-1722a216' ],
      student: [ 'Xuecheng Wu', '2023 年 9 月至 2026 年 7 月在西安交通大学攻读硕士，2025 年 5 月至 12 月在字节跳动 Data-Douyin 科研实习。', 'https://xuecwu.github.io/' ],
      title: 'SAIL-Unify: Hierarchical Interleaving Augmented Holistic Bilateral Synergy in Unified Multimodal Models',
      short: 'SAIL-Unify',
      date: '2026-11-09',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://doi.org/10.1145/3767308.3835522',
      extra: [
        [ '会议正式作者及机构名单', 'https://2026.acmmm.org/site/ACMMM2026_Full_Programme.pdf' ],
        [ '企业团队同期 SAIL 系列论文', 'https://aclanthology.org/2025.acl-long.1595.pdf' ]
      ],
      evidence: '第一作者在个人履历的 2025 年 Data-Douyin 实习条目中描述分层交错增强的统一多模态模型，与 SAIL-Unify 的研究相符。会议名单列出该学生、硕士导师和同一抖音内容团队的正式员工。',
      advising: [ '硕士导师', 'Xuecheng Wu 的教育经历具名列孙鹤立为西安交通大学硕士导师。', 'https://xuecwu.github.io/' ]
    },
    {
      id: 'alibaba-uis1-zju-shen',
      company: '阿里巴巴',
      team: '通义实验室（Tongyi Lab）',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '沈永亮 · Yongliang Shen', '浙江大学 REAL Lab 教师，论文校方通讯作者。', 'https://zjureal.com/people.html' ],
      employee: [ 'Fei Huang', '2025 年会议资料列其为阿里云副总裁、通义 NLP 实验室负责人。原文署名阿里通义实验室。', 'https://www.luohanacademy.com/en//conference/1104/' ],
      student: [ '卢政希 · Zhengxi Lu', '2024 年 9 月起在浙大攻读博士，2025 年 6 月至 11 月在阿里巴巴通义实验室科研实习。', 'https://lll6gg.github.io/' ],
      title: 'UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning',
      short: 'UI-S1',
      date: '2025-09',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2509.11543',
      evidence: '原文首页具名注明浙大与通义双署名的第一作者在阿里实习期间完成。学生公开履历列出同期学籍、实习月份和同篇博士导师。',
      advising: [ '博士导师', '卢政希的学术主页明确列沈永亮为浙大博士导师。', 'https://lll6gg.github.io/' ]
    },
    {
      id: 'jd-reel-ustc-zhao',
      company: '京东',
      team: '京东探索研究院 · JoyAI-Echo',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '赵峰 · Feng Zhao', '中科大自动化系教授、Xiaoxiao Ma 的博士导师。该论文使用京东探索研究院项目署名。', 'https://auto.ustc.edu.cn/2021/0510/c25976a484874/page.htm' ],
      employee: [
        '段楠 · Nan Duan',
        '2026 年任京东集团副总裁兼京东探索研究院副院长，同篇署京东探索研究院。',
        'https://lead.hku.hk/tc/news/2026/11/fireside-chat-hku-talent-forum-beijing/'
      ],
      student: [ 'Xiaoxiao Ma', '2025 年 9 月起在中科大攻读博士，2026 年 3 月起在京东探索研究院做 TGT 科研实习。', 'https://krennic999.github.io/' ],
      title: 'REEL: Learning to Retrieve, Evaluate, and Evolve Visual Memory for Any Long-Horizon Multi-Shot Video Generation',
      short: 'REEL',
      date: '2026-10-12',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2610.16632',
      extra: [ [ '同一中科大导师、学生和京东团队同期合著', 'https://arxiv.org/html/2603.28049' ], [ '学生博士课题组名录', 'https://bivlab123.github.io/team/' ] ],
      evidence: '学生在博士阶段、京东实习期内参加了 JoyAI-Echo 系列研究。REEL 原文列其为中科大作者，与其博士导师、京东探索研究院副院长及同一 JoyAI-Echo 团队合著。',
      advising: [ '博士导师', 'Xiaoxiao Ma 的个人主页具名列赵峰为中科大博士导师。', 'https://krennic999.github.io/' ]
    },
    {
      id: 'meituan-stage-ustc-zhao',
      company: '美团',
      team: 'LongCat · 多模态基础模型',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '赵峰 · Feng Zhao', '中国科学技术大学自动化系教授，论文校方通讯作者。', 'https://auto.ustc.edu.cn/2021/0510/c25976a484874/page.htm' ],
      employee: [ '邱海波 · Haibo Qiu', '博士毕业后在美团担任多模态研究员，个人主页将 STAGE 列为由其负责的美团项目。', 'https://haibo-qiu.github.io/' ],
      student: [ 'Xiaoxiao Ma', '2025 年 9 月起在中科大攻读博士，2025 年 4 月至 11 月在美团 LongCat 多模态基础模型组实习。', 'https://krennic999.github.io/' ],
      title: 'STAGE: Stable and Generalizable GRPO for Autoregressive Image Generation',
      short: 'STAGE',
      date: '2025-09-29',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2509.25027',
      evidence: '原文首版在其博士入学后、美团实习结束前公开。第一作者中科大与美团双署名，学生及美团项目负责人均在公开履历中列出该作。',
      advising: [ '博士导师', 'Xiaoxiao Ma 的个人主页具名列赵峰为中科大博士导师。', 'https://krennic999.github.io/' ]
    },
    {
      id: 'huawei-commonit-hit-liu',
      company: '华为',
      team: '华为云',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '刘学博 · Xuebo Liu', '哈尔滨工业大学（深圳）教师，原文校方通讯作者。', 'https://sunbowliu.github.io/' ],
      employee: [ 'Lian Lian', '华为云研究人员。个人职业资料列华为任职，EMNLP 同期两篇论文使用同一华为云署名和企业邮箱，学生履历明确列其为企业侧导师。', 'https://cn.linkedin.com/in/lian-lian-8b604b7a' ],
      student: [ '饶隽 · Jun Rao', '研究时为哈尔滨工业大学（深圳）博士生，2024 年 1 月至 12 月在华为云进行 NLP 研究实习。', 'https://raojay7.github.io/' ],
      title: 'CommonIT: Commonality-Aware Instruction Tuning for Large Language Models via Data Partitions',
      short: 'CommonIT',
      date: '2024-11',
      venue: 'EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.emnlp-main.561.pdf',
      extra: [ [ '同期华为云校企合著', 'https://aclanthology.org/2024.emnlp-main.768.pdf' ], [ '2024 年 10 月预印本', 'https://arxiv.org/abs/2410.03077' ] ],
      evidence: '饶隽的履历将 EMNLP 2024 工作列于华为云实习成果，并具名列同篇华为云作者 Lian Lian 为企业导师。两位哈工大博士导师和华为云导师均在论文作者名单中。',
      advising: [ '博士共同导师', '饶隽本人具名列刘学博和张民为哈工大（深圳）博士共同导师。', 'https://raojay7.github.io/' ]
    },
    {
      id: 'huawei-commonit-hit-zhang',
      company: '华为',
      team: '华为云',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '张民 · Min Zhang', '哈尔滨工业大学（深圳）教师，原文署名哈工大。', 'https://zhangmin-nlp-ai.github.io/' ],
      employee: [ 'Lian Lian', '华为云研究人员。个人职业资料列华为任职，EMNLP 同期两篇论文使用同一华为云署名和企业邮箱，学生履历明确列其为企业侧导师。', 'https://cn.linkedin.com/in/lian-lian-8b604b7a' ],
      student: [ '饶隽 · Jun Rao', '研究时为哈尔滨工业大学（深圳）博士生，2024 年 1 月至 12 月在华为云进行 NLP 研究实习。', 'https://raojay7.github.io/' ],
      title: 'CommonIT: Commonality-Aware Instruction Tuning for Large Language Models via Data Partitions',
      short: 'CommonIT',
      date: '2024-11',
      venue: 'EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.emnlp-main.561.pdf',
      extra: [ [ '同期华为云校企合著', 'https://aclanthology.org/2024.emnlp-main.768.pdf' ], [ '2024 年 10 月预印本', 'https://arxiv.org/abs/2410.03077' ] ],
      evidence: '饶隽的履历将 EMNLP 2024 工作列于华为云实习成果，并具名列同篇华为云作者 Lian Lian 为企业导师。两位哈工大博士导师和华为云导师均在论文作者名单中。',
      advising: [ '博士共同导师', '饶隽本人具名列刘学博和张民为哈工大（深圳）博士共同导师。', 'https://raojay7.github.io/' ]
    },
    {
      id: 'bytedance-molesyn-hit-che',
      company: '字节跳动',
      team: 'Seed',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '车万翔 · Wanxiang Che', '哈尔滨工业大学计算学部教授和博士生导师，论文哈工大通讯作者。', 'https://homepage.hit.edu.cn/wanxiang' ],
      employee: [
        'Wenhao Huang',
        '字节 Seed 研究人员，在复旦大学与字节 Seed 联培中任企业导师。该论文和同期 FutureX 正式版均以字节 Seed 署名。',
        'https://cn.linkedin.com/in/wenhao-huang-476a0aaa'
      ],
      student: [
        '陈麒光 · Qiguang Chen',
        '哈工大 SCIR 在读博士，在博士阶段赴字节 Seed 科研实习，由同篇作者 Yantao Du、Ge Zhang 和 Wenhao Huang 指导。',
        'https://lightchen233.github.io/'
      ],
      title: 'The Molecular Structure of Thought: Mapping the Topology of Long Chain-of-Thought Reasoning',
      short: 'The Molecular Structure of Thought',
      date: '2026-01',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2601.06002',
      extra: [
        [ '企业作者的字节联培指导记录', 'https://zhiyuanzeng.github.io/' ],
        [ '企业作者同期的 Seed Edge 项目', 'https://openreview.net/pdf/93c3dea7af512a2adbc1ba647f1853c6d6634440.pdf' ]
      ],
      evidence: '第一作者同时署名哈工大和字节 Seed，其主页列出该文和博士阶段的字节实习，并将同篇字节作者具名列为实习指导者。',
      advising: [ '博士导师', '陈麒光的公开教育经历具名列车万翔为其哈工大博士导师。', 'https://lightchen233.github.io/' ]
    },
    {
      id: 'huawei-retrievalfree-hit-xu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '徐睿峰 · Ruifeng Xu', '哈工大深圳计算机学科教授、博士生导师，论文共同通讯作者。', 'https://homepage.hit.edu.cn/xuruifeng' ],
      employee: [ '糜飞 · Fei Mi', '华为诺亚方舟实验室主任研究科学家，原文署华为诺亚方舟并使用公司邮箱。', 'https://mifei.github.io/' ],
      student: [ '王睿 · Rui Wang', '哈工大深圳 2021 级硕士生，2023 年 ACL 原文署哈工大，脚注注明在华为实习完成此项研究。', 'https://homepage.hit.edu.cn/xuruifeng' ],
      title: 'Retrieval-free Knowledge Injection through Multi-Document Traversal for Dialogue Models',
      short: 'Retrieval-free Knowledge Injection',
      date: '2023-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2023.acl-long.364v1.pdf',
      extra: [ [ '哈工大深圳研究团队学生名录', 'https://hlt.hitsz.edu.cn/tdjs.htm' ], [ '同一校企团队的同期对话模型研究', 'https://aclanthology.org/2023.acl-long.608v2.pdf' ] ],
      evidence: 'ACL 原文在第一作者王睿名下点明华为实习。徐睿峰的哈工大导师页列明王睿为所指导的 2021 级硕士，团队名录记录其硕士毕业后赴香港中文大学读博。',
      advising: [ '硕士导师', '徐睿峰的哈工大导师主页在指导硕士生名单中具名列出王睿。', 'https://homepage.hit.edu.cn/xuruifeng' ]
    },
    {
      id: 'alibaba-grid-xjtu-gong',
      company: '阿里巴巴',
      team: '达摩院（DAMO Academy）',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [ '龚怡宏 · Yihong Gong', '西安交通大学人工智能学院教授、研究生导师，预印本以西安交通大学署名。', 'https://gr.xjtu.edu.cn/ygong/zh_CN/jsxx/999255/jsxx/jsxx.htm' ],
      employee: [ '罗浩 · Hao Luo', '达摩院算法专家、AI Earth 遥感大模型算法负责人，在原文扩展版以阿里巴巴达摩院署名。', 'https://www.taibo.cn/live/422' ],
      student: [
        '万聪 · Cong Wan',
        '2024 年 9 月起在西安交通大学攻读硕士，2024 年 12 月加入阿里巴巴达摩院科研实习，个人主页在该经历下列出 GRID。',
        'https://vancyland.github.io/acad-homepage.github.io/'
      ],
      title: 'Grid: Omni Visual Generation',
      short: 'Grid',
      date: '2025-06',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2412.10718v5',
      extra: [
        [ '预印本版本和作者', 'https://arxiv.org/abs/2412.10718' ],
        [ '达摩院作者同一时期的岗位报道', 'https://news.sciencenet.cn/sbhtmlnews/2022/7/370187.shtm' ]
      ],
      evidence: '万聪本人将 GRID 列入达摩院实习经历。2025 年 6 月扩展版同时列出万聪、其西交大硕士导师龚怡宏及达摩院正式研究人员罗浩。',
      advising: [ '硕士导师', '万聪在西安交通大学硕士教育经历中具名列出龚怡宏为导师。', 'https://vancyland.github.io/acad-homepage.github.io/' ]
    },
    {
      id: 'alibaba-gam-ruc-qi',
      company: '阿里巴巴',
      team: '阿里妈妈（Alimama）',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '祁琦 · Qi Qi', '中国人民大学高瓴人工智能学院长聘副教授、博士生导师，以该院署名。', 'https://ai.ruc.edu.cn/szdw/zrjs/qq/index.htm' ],
      employee: [ 'Zhilin Zhang', '阿里妈妈资深算法工程师，论文署名阿里巴巴。窦越嘉主页具名列其为企业实习导师。', 'https://openreview.net/pdf?id=ZejUjZUF6i' ],
      student: [ '窦越嘉 · Yuejia Dou', '2024 年 9 月起在中国人民大学读博，2025 年 2 月至 2026 年 4 月在阿里妈妈从事决策智能与计算广告科研实习。', 'https://douyuejia.github.io/' ],
      title: 'GAM: A Generative Auto-Marketing Framework in Online E-commerce Platforms',
      short: 'GAM',
      date: '2026-04',
      venue: 'The Web Conference',
      area: '推荐与搜索',
      paper: 'https://doi.org/10.1145/3774904.3792805',
      extra: [
        [ '会议官方名单与机构署名', 'https://www2026.thewebconf.org/accepted/industry.html' ],
        [ '与同一企业导师合作的后续自动出价研究', 'https://arxiv.org/abs/2607.17281' ]
      ],
      evidence: '窦越嘉本人列出阿里妈妈计算广告实习和实习导师 Zhilin Zhang。GAM 为其在读、实习期间的生成式广告出价论文，会议官方名单列出其本人及两侧指导者。',
      advising: [ '博士导师', '窦越嘉的教育经历具名列出祁琦为人大博士导师。', 'https://douyuejia.github.io/' ]
    },
    {
      id: 'bytedance-chatts-thu-pei',
      company: '字节跳动',
      team: 'AI for Infrastructure · AIOps',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '裴丹 · Dan Pei', '清华大学计算机系教授、博士生导师，正式论文以清华大学署名并任通讯作者。', 'https://www.cs.tsinghua.edu.cn/info/1126/7243.htm' ],
      employee: [ '李则言 · Zeyan Li', '2023 年获清华大学博士学位，个人主页列其为字节跳动 AI for Infrastructure 与 AIOps 研发工程师，原文署名字节跳动。', 'https://github.com/lizeyan' ],
      student: [ '谢哲 · Zhe Xie', '清华大学计算机系在读博士，2024 年 8 月至 2026 年 5 月在字节跳动研究时序多模态模型。', 'https://xiez22.github.io/' ],
      title: 'ChatTS: Aligning Time Series with LLMs via Synthetic Data for Enhanced Understanding and Reasoning',
      short: 'ChatTS',
      date: '2025-04',
      venue: 'PVLDB',
      area: '视觉与多模态',
      paper: 'https://www.vldb.org/pvldb/vol18/p2385-xie.pdf',
      extra: [
        [ '清华实验室留存预印本', 'https://netman.aiops.org/wp-content/uploads/2024/12/ChatTS_arXiv.pdf' ],
        [ '正式出版记录', 'https://doi.org/10.14778/3742728.3742735' ]
      ],
      evidence: '谢哲在个人履历的字节跳动实习项下明确列出 ChatTS。正式稿中他、博士导师裴丹、字节正式研发人员李则言共同署名。',
      advising: [ '博士导师', '谢哲在清华大学博士教育经历中具名列出裴丹为导师。', 'https://xiez22.github.io/' ]
    },
    {
      id: 'tencent-rise-cuhksz-he',
      company: '腾讯',
      team: 'AI Lab',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '贺品嘉 · Pinjia He', '香港中文大学（深圳）数据科学学院教师，同篇以该校署名并任通讯作者。', 'https://sai.cuhk.edu.cn/en/teacher/120' ],
      employee: [ 'Tian Liang', '腾讯 AI Lab 研究科学家，个人主页在任职和论文列表中列出腾讯 AI Lab 及此项工作。', 'https://skytliang.github.io/' ],
      student: [ 'Xiaoyuan Liu', '2024 年 9 月起在香港中文大学（深圳）读博，2024 年 8 月至 2026 年 3 月在腾讯 AI Lab 科研实习。', 'https://xyliu-cs.github.io/' ],
      title: 'Trust, But Verify: A Self-Verification Approach to Reinforcement Learning with Verifiable Rewards',
      short: 'Trust, But Verify',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://papers.nips.cc/paper_files/paper/2025/file/bd3d106d8e9789ce4fd40e1edafe71d5-Paper-Conference.pdf',
      extra: [ [ '2025 年 5 月预印本', 'https://arxiv.org/abs/2505.13445' ] ],
      evidence: 'NeurIPS 正式版首页注明第一作者在腾讯实习期间完成研究。其主页列出在读时间、腾讯 AI Lab 实习月份及同篇企业侧导师 Zhaopeng Tu。',
      advising: [ '博士导师', 'Xiaoyuan Liu 的公开履历具名列出贺品嘉为香港中文大学（深圳）博士导师。', 'https://xyliu-cs.github.io/' ]
    },
    {
      id: 'xiaohongshu-lamra-sjtu-xie',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '谢维迪 · Weidi Xie', '上海交通大学人工智能学院副教授，同篇上交大作者。', 'https://weidixie.github.io/' ],
      company: '小红书',
      team: '多模态检索',
      employee: [
        'Yao Hu',
        '公开职业资料列其为小红书首席研究员。CVPR 正式版及同期小红书推荐与检索论文均署名小红书。',
        'https://lacuna.tiptreesystems.com/author/yao-hu-0002/aut_d204690eb40b4e2598a57516148eee86'
      ],
      student: [ 'Yikun Liu', '2023 年获北邮学士学位后进入上海交通大学读博。2024 年 7 月至 2025 年 4 月在小红书实习。', 'https://code-kunkun.github.io/' ],
      title: 'LamRA: Large Multimodal Model as Your Advanced Retrieval Assistant',
      short: 'LamRA',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_LamRA_Large_Multimodal_Model_as_Your_Advanced_Retrieval_Assistant_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.01720' ], [ '企业作者同期的小红书工业应用论文', 'https://arxiv.org/abs/2512.00968' ] ],
      evidence: 'CVPR 论文首页在第一作者名下注明研究在小红书实习期间完成。本人主页列出该论文、学籍和小红书实习年月。三位校内共同导师均在同一正式版署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将谢维迪具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'xiaohongshu-lamra-sjtu-wang',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '王延峰 · Yanfeng Wang', '上海交通大学教授、博士生导师，2024 年任人工智能学院执行院长，同篇上交大作者。', 'https://cmic.sjtu.edu.cn/wangyanfeng/' ],
      company: '小红书',
      team: '多模态检索',
      employee: [
        'Yao Hu',
        '公开职业资料列其为小红书首席研究员。CVPR 正式版及同期小红书推荐与检索论文均署名小红书。',
        'https://lacuna.tiptreesystems.com/author/yao-hu-0002/aut_d204690eb40b4e2598a57516148eee86'
      ],
      student: [ 'Yikun Liu', '2023 年获北邮学士学位后进入上海交通大学读博。2024 年 7 月至 2025 年 4 月在小红书实习。', 'https://code-kunkun.github.io/' ],
      title: 'LamRA: Large Multimodal Model as Your Advanced Retrieval Assistant',
      short: 'LamRA',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_LamRA_Large_Multimodal_Model_as_Your_Advanced_Retrieval_Assistant_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.01720' ], [ '企业作者同期的小红书工业应用论文', 'https://arxiv.org/abs/2512.00968' ] ],
      evidence: 'CVPR 论文首页在第一作者名下注明研究在小红书实习期间完成。本人主页列出该论文、学籍和小红书实习年月。三位校内共同导师均在同一正式版署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将王延峰具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'xiaohongshu-lamra-sjtu-yao',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '姚江超 · Jiangchao Yao', '2022 年起任教于上海交通大学，2026 年起任副教授。论文署名上海交通大学 CMIC。', 'https://icisee.sjtu.edu.cn/jiaoshiml/yaojiangchao.html' ],
      company: '小红书',
      team: '多模态检索',
      employee: [
        'Yao Hu',
        '公开职业资料列其为小红书首席研究员。CVPR 正式版及同期小红书推荐与检索论文均署名小红书。',
        'https://lacuna.tiptreesystems.com/author/yao-hu-0002/aut_d204690eb40b4e2598a57516148eee86'
      ],
      student: [ 'Yikun Liu', '2023 年获北邮学士学位后进入上海交通大学读博。2024 年 7 月至 2025 年 4 月在小红书实习。', 'https://code-kunkun.github.io/' ],
      title: 'LamRA: Large Multimodal Model as Your Advanced Retrieval Assistant',
      short: 'LamRA',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_LamRA_Large_Multimodal_Model_as_Your_Advanced_Retrieval_Assistant_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 12 月预印本', 'https://arxiv.org/abs/2412.01720' ], [ '企业作者同期的小红书工业应用论文', 'https://arxiv.org/abs/2512.00968' ] ],
      evidence: 'CVPR 论文首页在第一作者名下注明研究在小红书实习期间完成。本人主页列出该论文、学籍和小红书实习年月。三位校内共同导师均在同一正式版署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将姚江超具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'tencent-versavit-sjtu-xie',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '谢维迪 · Weidi Xie', '上海交通大学人工智能学院副教授，同篇上交大作者。', 'https://weidixie.github.io/' ],
      company: '腾讯',
      team: '微信 AI（WeChat AI）',
      employee: [ '柳源 · Yuan Liu', '腾讯微信 AI 资深研究员，个人主页明确任职与大模型研究方向，论文以微信 AI 署名并任通讯作者。', 'https://yuanliuuuuuu.github.io/' ],
      student: [ 'Yikun Liu', '上海交通大学博士生，2025 年 5 月起在腾讯实习。个人主页将 VersaViT 列为博士阶段成果。', 'https://code-kunkun.github.io/' ],
      title: 'VersaViT: Enhancing MLLM Vision Backbones via Task-Guided Optimization',
      short: 'VersaViT',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2602.09934',
      extra: [
        [ 'ECCV 正式会议版', 'https://link.springer.com/chapter/10.1007/978-3-032-37577-3_5' ],
        [ '同期同团队合作论文 POINTS-Seeker', 'https://arxiv.org/pdf/2604.14029' ]
      ],
      evidence: '论文首页标注第一作者在微信实习期间完成工作。本人履历给出上海交大学籍及腾讯实习起始月份，具名的三位校内共同导师均在原文署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将谢维迪具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'tencent-versavit-sjtu-wang',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '王延峰 · Yanfeng Wang', '上海交通大学教授、博士生导师，2024 年任人工智能学院执行院长，同篇上交大作者。', 'https://cmic.sjtu.edu.cn/wangyanfeng/' ],
      company: '腾讯',
      team: '微信 AI（WeChat AI）',
      employee: [ '柳源 · Yuan Liu', '腾讯微信 AI 资深研究员，个人主页明确任职与大模型研究方向，论文以微信 AI 署名并任通讯作者。', 'https://yuanliuuuuuu.github.io/' ],
      student: [ 'Yikun Liu', '上海交通大学博士生，2025 年 5 月起在腾讯实习。个人主页将 VersaViT 列为博士阶段成果。', 'https://code-kunkun.github.io/' ],
      title: 'VersaViT: Enhancing MLLM Vision Backbones via Task-Guided Optimization',
      short: 'VersaViT',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2602.09934',
      extra: [
        [ 'ECCV 正式会议版', 'https://link.springer.com/chapter/10.1007/978-3-032-37577-3_5' ],
        [ '同期同团队合作论文 POINTS-Seeker', 'https://arxiv.org/pdf/2604.14029' ]
      ],
      evidence: '论文首页标注第一作者在微信实习期间完成工作。本人履历给出上海交大学籍及腾讯实习起始月份，具名的三位校内共同导师均在原文署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将王延峰具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'tencent-versavit-sjtu-yao',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '姚江超 · Jiangchao Yao', '2022 年起任教于上海交通大学，2026 年起任副教授。论文署名上海交通大学 CMIC。', 'https://icisee.sjtu.edu.cn/jiaoshiml/yaojiangchao.html' ],
      company: '腾讯',
      team: '微信 AI（WeChat AI）',
      employee: [ '柳源 · Yuan Liu', '腾讯微信 AI 资深研究员，个人主页明确任职与大模型研究方向，论文以微信 AI 署名并任通讯作者。', 'https://yuanliuuuuuu.github.io/' ],
      student: [ 'Yikun Liu', '上海交通大学博士生，2025 年 5 月起在腾讯实习。个人主页将 VersaViT 列为博士阶段成果。', 'https://code-kunkun.github.io/' ],
      title: 'VersaViT: Enhancing MLLM Vision Backbones via Task-Guided Optimization',
      short: 'VersaViT',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2602.09934',
      extra: [
        [ 'ECCV 正式会议版', 'https://link.springer.com/chapter/10.1007/978-3-032-37577-3_5' ],
        [ '同期同团队合作论文 POINTS-Seeker', 'https://arxiv.org/pdf/2604.14029' ]
      ],
      evidence: '论文首页标注第一作者在微信实习期间完成工作。本人履历给出上海交大学籍及腾讯实习起始月份，具名的三位校内共同导师均在原文署名。',
      advising: [ '博士共同导师', 'Yikun Liu 的公开教育经历将姚江超具名列为上海交通大学博士阶段的指导教师。', 'https://code-kunkun.github.io/' ]
    },
    {
      id: 'meituan-skp-bupt-xu',
      company: '美团',
      team: 'NLP 中心',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '徐蔚然 · Weiran Xu', '北京邮电大学 PRIS-NLP 课题组负责人，任副教授、硕博导师。原文署名北邮并任通讯作者。', 'https://pris-nlp.github.io/' ],
      employee: [ 'Sirui Wang', '美团 NLP 中心研究人员。曾以企业身份指导美团科研实习生周昆，2023 年同篇以美团机构及企业邮箱署名。', 'https://lancelot39.github.io/' ],
      student: [ '董冠霆 · Guanting Dong', '2021 至 2024 年在北京邮电大学攻读硕士。2022 年 9 月至 2023 年 5 月在美团 NLP 中心研究知识增强生成。', 'https://dongguanting.github.io/' ],
      title: 'Bridging the KB-Text Gap: Leveraging Structured Knowledge-aware Pre-training for KBQA',
      short: 'Bridging the KB-Text Gap',
      date: '2023-10',
      venue: 'CIKM',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2308.14436v1',
      extra: [
        [ '正式会议版', 'https://doi.org/10.1145/3583780.3615150' ],
        [ '北邮课题组的硕士生名录', 'https://pris-nlp.github.io/author/%E8%91%A3%E5%86%A0%E9%9C%86/' ],
        [ '企业作者同期美团署名', 'https://aclanthology.org/2023.findings-acl.831.pdf' ]
      ],
      evidence: '论文首页标注第一作者的美团实习，董冠霆的北邮硕士履历和美团 NLP 实习时间重叠。原文同时列出校内导师徐蔚然及美团正式研究人员 Sirui Wang。',
      advising: [ '硕士导师', '董冠霆将徐蔚然具名列为北邮阶段导师。徐蔚然课题组名录明确列董冠霆为硕士研究生。', 'https://dongguanting.github.io/' ]
    },
    {
      id: 'tencent-lighthouse-fudan-yang',
      company: '腾讯',
      team: '混元多模态部 · 数字人算法团队',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '阳德青 · Deqing Yang', '复旦大学大数据学院副教授、博士生导师，论文署复旦大学并任通讯作者。', 'https://sds.fudan.edu.cn/a4/2f/c22442a238639/page.htm' ],
      employee: [ 'Jian Li', '腾讯自然语言处理研究员，论文署腾讯混元并任通讯作者，亦是第一作者履历列出的企业导师。', 'https://jack57lee.github.io/' ],
      student: [ '杨睿涵 · Ruihan Yang', '复旦大学统计学博士生，2024 年 10 月至 2025 年 10 月在腾讯混元数字人团队科研实习。', 'https://rhyang2021.github.io/' ],
      title: 'The Lighthouse of Language: Enhancing LLM Agents via Critique-Guided Improvement',
      short: 'The Lighthouse of Language',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://papers.nips.cc/paper_files/paper/2025/file/f09e8dd9274cb7c2dd0dc65ffc6f427a-Paper-Conference.pdf',
      extra: [ [ '带实习脚注的预印本', 'https://arxiv.org/pdf/2503.16024v2' ], [ '第一作者与同一团队的后续合作', 'https://arxiv.org/pdf/2602.12662' ] ],
      evidence: '论文在杨睿涵名下标注研究在腾讯混元实习期间完成。其履历将两位同篇腾讯作者 Fanghua Ye 与 Jian Li 列为混元数字人阶段的企业导师。',
      advising: [ '博士导师', '杨睿涵的教育经历具名列阳德青为复旦大学统计学博士导师。', 'https://rhyang2021.github.io/' ]
    },
    {
      id: 'tencent-logu-fudan-yang',
      company: '腾讯',
      team: 'AI Lab',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '阳德青 · Deqing Yang', '复旦大学大数据学院副教授、博士生导师，论文署复旦大学并任通讯作者。', 'https://sds.fudan.edu.cn/a4/2f/c22442a238639/page.htm' ],
      employee: [ '黄昕庭 · Xinting Huang', '腾讯 AI Lab 自然语言处理组资深研究员。个人主页记载正式任职，论文以腾讯 AI Lab 署名。', 'https://timhuang1.github.io/' ],
      student: [ '杨睿涵 · Ruihan Yang', '复旦大学统计学博士生，2024 年 3 月至 10 月在腾讯 AI Lab 科研实习，负责长文本不确定性表达方向。', 'https://rhyang2021.github.io/' ],
      title: 'LoGU: Long-form Generation with Uncertainty Expressions',
      short: 'LoGU',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.928.pdf',
      extra: [ [ 'ACL 正式出版记录', 'https://aclanthology.org/2025.acl-long.928/' ] ],
      evidence: 'ACL 首页在杨睿涵名下标注腾讯 AI Lab 实习。本人履历明确注明该段实习的研究方向与企业导师，企业导师 Zhisong Zhang 和腾讯资深研究员黄昕庭均为同篇作者。',
      advising: [ '博士导师', '杨睿涵的教育经历具名列阳德青为复旦大学统计学博士导师。', 'https://rhyang2021.github.io/' ]
    },
    {
      id: 'alibaba-anylogo-ustc-zhao',
      company: '阿里巴巴',
      team: '达摩院（DAMO Academy）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '赵峰 · Feng Zhao', '中国科学技术大学自动化系教授、博士生导师，原文以中国科大署名并任通讯作者。', 'https://auto.ustc.edu.cn/2021/0510/c25976a484874/page.htm' ],
      employee: [ '罗浩 · Hao Luo', '阿里巴巴达摩院算法专家，公开活动资料列为 AI Earth 遥感大模型算法负责人，预印本署达摩院。', 'https://www.taibo.cn/live/422' ],
      student: [ '张景皓 · Jinghao Zhang', '中国科大研究生，2023 年 11 月至 2024 年 8 月在达摩院开展视觉生成模型科研实习。', 'https://jinghaoleven.github.io/' ],
      title: 'AnyLogo: Symbiotic Subject-Driven Diffusion System with Gemini Status',
      short: 'AnyLogo',
      date: '2024-09',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2409.17740v1',
      extra: [ [ '预印本与作者', 'https://arxiv.org/abs/2409.17740' ], [ '赵峰课题组成员名录', 'https://bivlab123.github.io/team/' ] ],
      evidence: '预印本首页在张景皓名下标注阿里巴巴实习，并同时列出中国科大教师赵峰及达摩院员工罗浩。张景皓在个人履历中列出该论文与相应方向的实习时间。',
      advising: [ '研究生导师', '张景皓公开履历列赵峰为中国科大导师，赵峰实验室亦将其列为组内研究生。', 'https://jinghaoleven.github.io/' ]
    },
    {
      id: 'zhipu-alignmmbench-thu-dong',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM-V',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '东昱晓 · Yuxiao Dong', '清华大学计算机系副教授，论文以清华大学署名。', 'https://keg.cs.tsinghua.edu.cn/persons/yuxiao/' ],
      employee: [ 'Ming Ding', '2023 年取得清华博士学位后在智谱任研究科学家。斯坦福 CS25 讲座介绍其当时岗位。', 'https://web.stanford.edu/class/cs25/past/cs25-v4/' ],
      student: [ 'Yuhang Wu', '2022 至 2026 年为清华大学本科生，2024 年 1 月至 2025 年 6 月在智谱做多模态理解科研实习。', 'https://wuyuhang05.github.io/' ],
      title: 'AlignMMBench: Evaluating Chinese Multimodal Alignment in Large Vision-Language Models',
      short: 'AlignMMBench',
      date: '2025-07',
      venue: 'ACL',
      area: '视觉与多模态',
      paper: 'https://aclanthology.org/2025.acl-long.327.pdf',
      extra: [ [ '2024 年 6 月作者预印本', 'https://arxiv.org/abs/2406.09295' ], [ '团队研究代码', 'https://github.com/THUDM/AlignMMBench' ] ],
      evidence: 'ACL 首页以具名脚注注明 Yuhang Wu 在智谱实习期间参与这项研究。其履历确认当时为清华本科生，在清华 KEG 获东昱晓指导。智谱研究科学家 Ming Ding 同篇署智谱。',
      advising: [ '本科科研导师', 'Yuhang Wu 在介绍本科阶段科研经历时具名列东昱晓为清华 KEG 指导教师。', 'https://wuyuhang05.github.io/' ]
    },
    {
      id: 'zhipu-cogview3-thu-tang',
      company: '智谱（GLM / Z.ai）',
      team: '视觉生成（CogView / CogVideo）',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '唐杰 · Jie Tang', '清华大学计算机系教授及论文通讯作者。本人在清华主页列 Wendi Zheng 为所指导的学生。', 'https://keg.cs.tsinghua.edu.cn/jietang/' ],
      employee: [ 'Ming Ding', '2023 年取得清华博士学位后在智谱任研究科学家。斯坦福 CS25 讲座介绍其当时岗位。', 'https://web.stanford.edu/class/cs25/past/cs25-v4/' ],
      student: [ 'Wendi Zheng', '清华大学计算机系学生、KEG 组博士生。ECCV 正式版将其标为并列第一作者并具名注明智谱实习。', 'https://lacuna.tiptreesystems.com/author/wendi-zheng' ],
      title: 'CogView3: Finer and Faster Text-to-Image Generation via Relay Diffusion',
      short: 'CogView3',
      date: '2024-10',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/09827.pdf',
      extra: [
        [ '2024 年 3 月预印本', 'https://arxiv.org/abs/2403.05121' ],
        [ '智谱 CogView 系列项目', 'https://github.com/zai-org/CogView4' ],
        [
          '同一研究方向中具名的实习与指导分工',
          'https://proceedings.iclr.cc/paper_files/paper/2024/file/522ef98b1e52f5918e5abc868651175d-Paper-Conference.pdf'
        ]
      ],
      evidence: 'ECCV 首页明确标注 Wendi Zheng 在智谱实习期间完成工作。论文企业通讯作者 Ming Ding 署智谱。同一团队的 Relay Diffusion 贡献说明将 Wendi Zheng 的研究实习和唐杰的项目指导列在同一研究中。',
      advising: [ '校内导师', '唐杰在清华个人主页的学生名单中具名列出 Wendi Zheng。', 'https://keg.cs.tsinghua.edu.cn/jietang/' ]
    },
    {
      company: '美团',
      team: '美团机器人',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      employee: [
        '张满园 · Manyuan Zhang',
        '2025 年起任美团 M17 研究员（Staff Researcher），研究 LongCat 基础模型。列名美团机器人技术报告。',
        'https://manyuan97.github.io/#experience'
      ],
      student: [ 'Heqing Yang', '2024 年 9 月起在北航攻读人工智能博士，2025 年 10 月起在美团 LongCat 研究实习，方向为机器人基础模型。', 'https://noietch.github.io/' ],
      title: 'Meituan-Robotics-0: A Vision-Language-Action Foundation Model for Desktop Manipulation',
      short: 'Meituan-Robotics-0',
      date: '2026-11',
      venue: 'arXiv 预印本',
      area: '具身智能与机器人',
      paper: 'https://arxiv.org/html/2611.08577v1',
      extra: [ [ '提交日期及完整作者名单', 'https://arxiv.org/abs/2611.08577v1' ] ],
      evidence: '美团机器人团队的报告列出学生 Heqing Yang、北航教师刘偲和黄林江、美团研究员张满园。学生履历确认其在美团开展的科研实习专攻机器人基础模型。',
      id: 'meituan-mr0-buaa-liu',
      faculty: [ '刘偲 · Si Liu', '北航人工智能学院教授、博士生导师。美团机器人报告列名作者。', 'https://shi.buaa.edu.cn/liusi/zh_CN/' ],
      advising: [ '博士导师', 'Heqing Yang 的教育经历明确列刘偲为其北航博士导师，黄林江为共同导师。', 'https://noietch.github.io/' ]
    },
    {
      company: '美团',
      team: '美团机器人',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      employee: [
        '张满园 · Manyuan Zhang',
        '2025 年起任美团 M17 研究员（Staff Researcher），研究 LongCat 基础模型。列名美团机器人技术报告。',
        'https://manyuan97.github.io/#experience'
      ],
      student: [ 'Heqing Yang', '2024 年 9 月起在北航攻读人工智能博士，2025 年 10 月起在美团 LongCat 研究实习，方向为机器人基础模型。', 'https://noietch.github.io/' ],
      title: 'Meituan-Robotics-0: A Vision-Language-Action Foundation Model for Desktop Manipulation',
      short: 'Meituan-Robotics-0',
      date: '2026-11',
      venue: 'arXiv 预印本',
      area: '具身智能与机器人',
      paper: 'https://arxiv.org/html/2611.08577v1',
      extra: [ [ '提交日期及完整作者名单', 'https://arxiv.org/abs/2611.08577v1' ] ],
      evidence: '美团机器人团队的报告列出学生 Heqing Yang、北航教师刘偲和黄林江、美团研究员张满园。学生履历确认其在美团开展的科研实习专攻机器人基础模型。',
      id: 'meituan-mr0-buaa-huang',
      faculty: [ '黄林江 · Linjiang Huang', '2024 年起任北航人工智能学院准聘教授、博士生导师。美团机器人报告列名作者。', 'https://iai.buaa.edu.cn/info/1131/1733.htm' ],
      advising: [ '博士共同导师', 'Heqing Yang 的教育经历明确列黄林江为其北航博士共同导师，刘偲为导师。', 'https://noietch.github.io/' ]
    },
    {
      company: '智谱（GLM / Z.ai）',
      team: 'AutoGLM',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [
        '刘潇 · Xiao Liu',
        '2025 年 QCon 讲者资料列为智谱 AutoGLM 部门负责人及研究员。论文署清华与智谱，作者脚注明确标注同期研究实习者。',
        'https://qcon.infoq.cn/2025/beijing/speaker/9381'
      ],
      area: '语言模型与智能体',
      id: 'zhipu-scalecua-thu-dong',
      faculty: [ '东昱晓 · Yuxiao Dong', '清华大学计算机系副教授，预印本署清华。', 'https://keg.cs.tsinghua.edu.cn/persons/yuxiao/' ],
      student: [ 'Bowen Lv', '2025 年起在清华攻读计算机科学博士。在智谱科研实习期间参与 GUI 智能体强化学习，主导本论文。', 'https://extreme1228.github.io/extreme1228/' ],
      title: 'SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL',
      short: 'ScaleCUA',
      date: '2026-07',
      venue: 'arXiv 预印本',
      paper: 'https://arxiv.org/pdf/2607.11185v1',
      extra: [ [ '提交日期和完整作者名单', 'https://arxiv.org/abs/2607.11185v1' ], [ 'AutoGLM 官方项目', 'https://github.com/zai-org/Open-AutoGLM' ] ],
      evidence: '论文实名脚注标明第一作者 Bowen Lv 在智谱实习期间完成研究。学生的履历也将 ScaleCUA 列为该段企业实习的成果。同篇作者刘潇任智谱 AutoGLM 部门负责人。',
      advising: [ '博士导师', '东昱晓在清华个人主页的博士生名录中具名列出 Bowen Lv，入学年为 2025 年。', 'https://keg.cs.tsinghua.edu.cn/yuxiao/' ]
    },
    {
      company: '智谱（GLM / Z.ai）',
      team: 'AutoGLM',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [
        '刘潇 · Xiao Liu',
        '2025 年 QCon 讲者资料列为智谱 AutoGLM 部门负责人及研究员。论文署清华与智谱，作者脚注明确标注同期研究实习者。',
        'https://qcon.infoq.cn/2025/beijing/speaker/9381'
      ],
      area: '语言模型与智能体',
      id: 'zhipu-computerrl-thu-tang',
      faculty: [ '唐杰 · Jie Tang', '清华大学计算机系教授，论文通讯作者。', 'https://keg.cs.tsinghua.edu.cn/jietang/' ],
      student: [ 'Hanyu Lai', '论文署清华大学。唐杰在清华主页的本科生指导名单列名，论文具名标注在智谱科研实习。', 'https://keg.cs.tsinghua.edu.cn/jietang/' ],
      title: 'ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents',
      short: 'ComputerRL',
      date: '2026-04',
      venue: 'ICLR',
      paper: 'https://openreview.net/pdf/a68a37d0387ee6b4a287584b114eefbe575bad8b.pdf',
      extra: [ [ '2025 年 8 月作者预印本', 'https://arxiv.org/abs/2508.14040' ], [ '含完整脚注的作者预印本', 'https://arxiv.org/pdf/2508.14040v2' ] ],
      evidence: '论文首页在 Hanyu Lai 名下标注其在智谱实习期间参与研究。企业共同作者刘潇任 AutoGLM 部门负责人。预印本说明方法被用于 AutoGLM。',
      advising: [ '本科科研导师', '唐杰的清华主页在本科生指导名单中具名列出 Hanyu Lai。', 'https://keg.cs.tsinghua.edu.cn/jietang/' ]
    },
    {
      id: 'tencent-fusellm-sysu-quan',
      company: '腾讯',
      team: 'AI Lab',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ 'Xiaojun Quan', '2017 年 7 月至 2025 年 12 月任中山大学计算机学院教授。论文署中山大学，任通讯作者。', 'https://slit-ai.github.io/cv/' ],
      employee: [ '黄昕庭 · Xinting Huang', '腾讯 AI Lab 自然语言处理组资深研究员，论文署腾讯 AI Lab 并任通讯作者。', 'https://timhuang1.github.io/' ],
      student: [ '万凡琦 · Fanqi Wan', '中山大学计算机硕士生，2023 年 3 月至 2024 年 5 月在腾讯 AI Lab 科研实习。', 'https://fanqiwan.github.io/' ],
      title: 'Knowledge Fusion of Large Language Models',
      short: 'FuseLLM',
      date: '2024-05',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2024/file/4fd5cfd2e31bebbccfa5ffa354c04bdc-Paper-Conference.pdf',
      extra: [ [ '2024 年 1 月预印本', 'https://arxiv.org/abs/2401.10491' ], [ '中山大学教师档案', 'https://cse.sysu.edu.cn/en/node/2510' ] ],
      evidence: 'ICLR 首页在第一作者万凡琦名下明确标注研究在腾讯 AI Lab 实习期间完成。学生履历将 FuseLLM 列为成果，并给出对应在读和实习经历。',
      advising: [ '硕士导师', '万凡琦在个人主页明确列 Xiaojun Quan 为其中山大学硕士导师。', 'https://fanqiwan.github.io/' ]
    },
    {
      id: 'huawei-adrenaline-sysu-zhou',
      company: '华为',
      team: '华为云',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '周知 · Zhi Zhou', '中山大学计算机学院教授、博士生导师。论文署中山大学，任通讯作者。', 'https://cse.sysu.edu.cn/node/2591' ],
      employee: [ 'Pengfei Zuo', '研究期间任华为云 AI 与云基础设施技术负责人和技术专家，同篇署华为云并任通讯作者。', 'https://pfzuo.github.io/' ],
      student: [ 'Yunkai Liang', '中山大学计算机博士生，在华为云随 Pengfei Zuo 实习，研究大语言模型推理系统。', 'https://warpmatrix.github.io/' ],
      title: 'Injecting Adrenaline into LLM Serving: Boosting Resource Utilization and Throughput via Attention Disaggregation',
      short: 'Adrenaline',
      date: '2025-03',
      venue: 'arXiv 预印本',
      area: '训练与推理系统',
      paper: 'https://arxiv.org/html/2503.20552',
      extra: [ [ '作者与发表时间', 'https://arxiv.org/abs/2503.20552' ], [ '作者项目代码', 'https://github.com/ASISys/Adrenaline' ] ],
      evidence: '预印本首页在共同第一作者 Yunkai Liang 名下具名注明其在华为云实习期间完成工作。学生履历列明华为云的企业指导人 Pengfei Zuo，与原文共同通讯作者一致。',
      advising: [ '博士导师', 'Yunkai Liang 的个人主页具名列周知为中山大学博士导师。', 'https://warpmatrix.github.io/' ]
    },
    {
      id: 'alibaba-say-more-ustc-ling',
      company: '阿里巴巴',
      team: '通义实验室 · 语音（Tongyi Fun）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [
        '凌震华 · Zhen-Hua Ling',
        '中国科大信息科学技术学院教授、博士生导师。论文署中国科学技术大学。',
        'https://iatyz.ustc.edu.cn/teacher/profile/name/%E5%87%8C%E9%9C%87%E5%8D%8E'
      ],
      employee: [ '陈谦 · Qian Chen', '阿里巴巴语音研究员，论文署阿里巴巴通义 Fun 团队，亦是学生履历具名列出的企业实习指导人。', 'https://www.alphaxiv.org/@qian-chen-chen-qian' ],
      student: [ '郑瑞晨 · Rui-Chen Zheng', '中国科大信息与通信工程博士生，2025 年 3 月至 8 月在阿里通义语音组实习。', 'https://zhengrachel.github.io/' ],
      title: 'Say More with Less: Variable-Frame-Rate Speech Tokenization via Adaptive Clustering and Implicit Duration Coding',
      short: 'Say More with Less',
      date: '2026-01',
      venue: 'AAAI',
      area: '语音与音频',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/40807/44768',
      extra: [
        [ '2025 年 9 月作者预印本', 'https://arxiv.org/html/2509.04685' ],
        [ 'AAAI 出版记录', 'https://ojs.aaai.org/index.php/AAAI/article/view/40807' ]
      ],
      evidence: '郑瑞晨履历注明 2025 年 3 月至 8 月的通义语音实习，具名列出陈谦、Chong Deng、Qinglin Zhang。三位实习导师都以通义 Fun 团队身份与其同篇署名，校内导师凌震华亦在作者名单中。',
      advising: [ '博士导师', '郑瑞晨的教育经历明确列出凌震华为中国科大博士导师，2021 年 9 月入学。', 'https://zhengrachel.github.io/' ]
    },
    {
      company: '腾讯',
      team: '机器学习平台部（MLPD）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      employee: [ '谢若冰 · Ruobing Xie', '腾讯高级研究员，论文署腾讯机器学习平台部。学生履历具名列为该段腾讯实习的企业导师。', 'https://ruobingxie.github.io/' ],
      student: [ 'Jiayi Liao', '2023 年 9 月起为中国科大硕士生，2024 年 6 月至 2025 年 3 月在腾讯混元随谢若冰科研实习。', 'https://ljy0ustc.github.io/JiayiLiao.github.io/' ],
      title: 'Multi-Grained Patch Training for Efficient LLM-based Recommendation',
      short: 'PatchRec',
      date: '2025-07',
      venue: 'SIGIR',
      area: '搜索与推荐',
      paper: 'https://dl.acm.org/doi/10.1145/3726302.3730042',
      extra: [ [ '2025 年 1 月作者预印本', 'https://arxiv.org/html/2501.15087v1' ], [ '同一实习阶段的另一项推荐研究', 'https://arxiv.org/html/2410.12519v1' ] ],
      evidence: '学生在个人履历列出 PatchRec 和对应时期的腾讯实习。2025 年 1 月首版发布于实习期间，企业实习导师谢若冰以腾讯机器学习平台部署名，校内两位导师同篇以中国科大署名。',
      id: 'tencent-patchrec-ustc-he',
      faculty: [ '何向南 · Xiangnan He', '中国科大教师、论文通讯作者，研究期间署中国科学技术大学。', 'https://saids.ustc.edu.cn/2019/0604/c36359a382217/page.htm' ],
      advising: [ '硕士导师', 'Jiayi Liao 在个人主页具名列何向南和王翔为中国科大硕士导师。', 'https://ljy0ustc.github.io/JiayiLiao.github.io/' ]
    },
    {
      company: '腾讯',
      team: '机器学习平台部（MLPD）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      employee: [ '谢若冰 · Ruobing Xie', '腾讯高级研究员，论文署腾讯机器学习平台部。学生履历具名列为该段腾讯实习的企业导师。', 'https://ruobingxie.github.io/' ],
      student: [ 'Jiayi Liao', '2023 年 9 月起为中国科大硕士生，2024 年 6 月至 2025 年 3 月在腾讯混元随谢若冰科研实习。', 'https://ljy0ustc.github.io/JiayiLiao.github.io/' ],
      title: 'Multi-Grained Patch Training for Efficient LLM-based Recommendation',
      short: 'PatchRec',
      date: '2025-07',
      venue: 'SIGIR',
      area: '搜索与推荐',
      paper: 'https://dl.acm.org/doi/10.1145/3726302.3730042',
      extra: [ [ '2025 年 1 月作者预印本', 'https://arxiv.org/html/2501.15087v1' ], [ '同一实习阶段的另一项推荐研究', 'https://arxiv.org/html/2410.12519v1' ] ],
      evidence: '学生在个人履历列出 PatchRec 和对应时期的腾讯实习。2025 年 1 月首版发布于实习期间，企业实习导师谢若冰以腾讯机器学习平台部署名，校内两位导师同篇以中国科大署名。',
      id: 'tencent-patchrec-ustc-wang',
      faculty: [ '王翔 · Xiang Wang', '中国科大人工智能与数据科学学院教师，论文署中国科学技术大学。', 'https://xiangwang1223.github.io/' ],
      advising: [ '硕士导师', 'Jiayi Liao 在个人主页具名列王翔和何向南为中国科大硕士导师。', 'https://ljy0ustc.github.io/JiayiLiao.github.io/' ]
    },
    {
      company: '腾讯',
      team: '优图实验室（Youtu Lab）',
      studentSchool: '香港理工大学',
      employee: [ '孙星 · Xing Sun', '腾讯优图实验室首席研究员兼团队经理，论文署名腾讯优图实验室。', 'https://www.sunxing.org/' ],
      student: [ 'Xin Zhang', '2024 年 9 月起在香港理工大学攻读博士，2025 年 7 月至 11 月在腾讯优图实习。', 'https://izhx.github.io/' ],
      title: 'AOEB: Benchmarking Agent-Oriented Multimodal Embeddings',
      short: 'AOEB',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26hf/zhang26hf.pdf',
      extra: [ [ 'ICML 正式索引', 'https://proceedings.mlr.press/v306/zhang26hf.html' ] ],
      evidence: '会议论文首页在 Xin Zhang 名下注明工作于腾讯实习期间完成。其个人主页列明实习时间、香港理工大学博士学籍和两位共同导师。两位共同导师与腾讯优图研究员孙星均为论文作者。',
      id: 'tencent-aoeb-polyu-li',
      school: '香港理工大学',
      faculty: [ 'Wenjie Li', '香港理工大学计算机学系教授，论文署名香港理工大学。', 'https://research.polyu.edu.hk/en/persons/wenjie-li/' ],
      advising: [ '博士共同导师', 'Xin Zhang 的博士教育经历具名列 Wenjie Li 为共同导师。', 'https://izhx.github.io/' ]
    },
    {
      company: '腾讯',
      team: '优图实验室（Youtu Lab）',
      studentSchool: '香港理工大学',
      employee: [ '孙星 · Xing Sun', '腾讯优图实验室首席研究员兼团队经理，论文署名腾讯优图实验室。', 'https://www.sunxing.org/' ],
      student: [ 'Xin Zhang', '2024 年 9 月起在香港理工大学攻读博士，2025 年 7 月至 11 月在腾讯优图实习。', 'https://izhx.github.io/' ],
      title: 'AOEB: Benchmarking Agent-Oriented Multimodal Embeddings',
      short: 'AOEB',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26hf/zhang26hf.pdf',
      extra: [ [ 'ICML 正式索引', 'https://proceedings.mlr.press/v306/zhang26hf.html' ] ],
      evidence: '会议论文首页在 Xin Zhang 名下注明工作于腾讯实习期间完成。其个人主页列明实习时间、香港理工大学博士学籍和两位共同导师。两位共同导师与腾讯优图研究员孙星均为论文作者。',
      id: 'tencent-aoeb-hit-zhang',
      school: '哈尔滨工业大学',
      faculty: [ '张民 · Min Zhang', '哈尔滨工业大学（深圳）特聘教授，论文署名哈尔滨工业大学（深圳）。', 'https://zhangmin-nlp-ai.github.io/' ],
      advising: [ '跨校博士共同指导', '香港理工大学博士生 Xin Zhang 的教育经历具名列哈工大（深圳）教师张民为共同导师。', 'https://izhx.github.io/' ]
    },
    {
      id: 'kuaishou-stable-velocity-hku-qi',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ 'Xiaojuan Qi', '香港大学电机电子工程系副教授、论文通讯作者和项目负责人。', 'https://ece.hku.hk/people/xjqi/' ],
      employee: [ '万鹏飞 · Pengfei Wan', '快手视觉生成与互动中心负责人，带领可灵团队，论文署名快手可灵。', 'https://2024.baai.ac.cn/speakers' ],
      student: [ '杨东霖 · Donglin Yang', '2025 年为香港大学电机电子工程系在读研究生，7 月加入快手可灵科研实习，公开履历将本论文列为该段实习成果。', 'https://linydthu.github.io/cv/' ],
      title: 'Stable Velocity: A Variance Perspective on Flow Matching',
      short: 'Stable Velocity',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2602.05435v1',
      extra: [ [ 'ICML 正式索引', 'https://proceedings.mlr.press/v306/yang26dq.html' ] ],
      evidence: '预印本首页在第一作者杨东霖名下注明研究在快手可灵团队实习期间完成。港大院系在 2025 年的学术活动中确认其在读身份及指导教师，快手可灵负责人万鹏飞同篇署名。',
      advising: [ '校内导师', '香港大学电机电子工程系 2025 年的讲座公告明确记载杨东霖由 Xiaojuan Qi 指导。', 'https://ece.hku.hk/events/20251128-3/' ]
    },
    {
      id: 'bytedance-dplm-nju-huang',
      company: '字节跳动',
      team: 'Seed · AI for Science',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '黄书剑 · Shujian Huang', '南京大学计算机科学与技术系教授、博士生导师，论文署名南京大学。', 'https://nlp.nju.edu.cn/huangsj/' ],
      employee: [ '郑在翔 · Zaixiang Zheng', '字节跳动 Seed AI for Science 研究员，论文署名字节跳动研究部门，学生主页具名列其为企业实习导师。', 'https://zhengzx-nlp.github.io/' ],
      student: [ 'Xinyou Wang', '2021 年 9 月起为南京大学博士生，2023 年 6 月加入字节跳动研究部门开展 AI for Science 实习。', 'https://wxy-nlp.github.io/' ],
      title: 'Diffusion Language Models Are Versatile Protein Learners',
      short: 'DPLM',
      date: '2024-07',
      venue: 'ICML',
      area: 'AI for Science',
      paper: 'https://arxiv.org/html/2402.18567v1',
      extra: [ [ 'ICML 正式索引', 'https://proceedings.mlr.press/v235/wang24ct.html' ], [ '字节跳动项目仓库', 'https://github.com/bytedance/dplm' ] ],
      evidence: '论文首页具名说明第一作者在字节跳动研究部门实习期间完成工作。其个人主页确认博士学籍、校内导师黄书剑和企业导师郑在翔，两位导师均为同篇作者。',
      advising: [ '校内博士导师', 'Xinyou Wang 的南京大学博士履历具名列黄书剑为导师。', 'https://wxy-nlp.github.io/' ]
    },
    {
      id: 'alibaba-treasures-quantization-nju-wu',
      company: '阿里巴巴',
      team: '阿里云 · PAI',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '吴建鑫 · Jianxin Wu', '南京大学人工智能学院教授，论文通讯作者。', 'https://cs.nju.edu.cn/wujx/' ],
      employee: [
        'Shen Li',
        '英特尔的阿里云 PAI-Blade 客户资料将其列为阿里云算法工程师。论文为阿里云署名的共同通讯作者。',
        'https://www.intel.com/content/www/us/en/developer/articles/community/hpc-testimonial-alibaba-cloud.html'
      ],
      student: [ '余浩 · Hao Yu', '2019 年 9 月至 2025 年 3 月为南京大学博士生，2023 年 5 月至 2024 年 11 月在阿里云 PAI 科研实习。', 'https://yuhao318.github.io/' ],
      title: 'Treasures in Discarded Weights for LLM Quantization',
      short: 'Treasures in Discarded Weights',
      date: '2025-02',
      venue: 'AAAI',
      area: '大模型量化',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/view/34376',
      extra: [
        [ '论文全文及双署名', 'https://cs.nju.edu.cn/wujx/paper/AAAI2025_Quant.pdf' ],
        [ '同一实习阶段与校企两方合作的 KV 压缩研究', 'https://arxiv.org/abs/2406.07056' ]
      ],
      evidence: 'AAAI 论文的第一作者余浩同时署名南京大学与阿里云，个人履历确认博士阶段在阿里云 PAI 的实习，并将论文列为成果。校内导师吴建鑫和阿里云算法工程师 Shen Li 同为通讯作者，三人也在其 PAI 实习期间共同发布 KV 压缩预印本。',
      advising: [ '校内博士导师', '余浩的个人履历具名列吴建鑫为南京大学博士导师。', 'https://yuhao318.github.io/' ]
    },
    {
      id: 'huawei-magcache-pku-zhang',
      company: '华为',
      team: '华为 · 多模态研究',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ 'Shiliang Zhang', '北京大学计算机学院教师，论文署名北京大学并任通讯作者。', 'https://eecs.pku.edu.cn/xxkxjsxy/info/1481/9873.htm' ],
      employee: [ 'Longhui Wei', '华为高级研究员，负责多模态研究，论文署名华为并担任项目负责人。', 'https://joinwei-pku.github.io/longhuiwei.github.io/' ],
      student: [ '马泽红 · Zehong Ma', '研究时为北京大学在读博士生，2025 年 3 月至 12 月在华为科研实习。', 'https://zehong-ma.github.io/' ],
      title: 'MagCache: Fast Video Generation with Magnitude-Aware Cache',
      short: 'MagCache',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2506.09045v1',
      extra: [
        [
          'NeurIPS 正式索引',
          'https://proceedings.neurips.cc/paper_files/paper/2025/hash/311207bb626e36a8f1d3eb92aa67af22-Abstract-Conference.html'
        ],
        [ '项目页及具名实习脚注', 'https://zehong-ma.github.io/MagCache/' ]
      ],
      evidence: '论文及项目页在第一作者马泽红名下标注研究在华为实习期间完成。其个人主页明确北大博士学籍、华为实习时间和校内导师，华为高级研究员 Longhui Wei 为项目负责人。',
      advising: [ '校内博士导师', '马泽红的个人主页明确列 Shiliang Zhang 为其北京大学博士导师。', 'https://zehong-ma.github.io/' ]
    },
    {
      company: '美团',
      team: 'LongCat',
      studentSchool: '中山大学',
      employee: [ 'Yong Zhang', '美团视频生成方向团队负责人。论文署名美团并任通讯作者，学生主页列其为这段美团实习的企业导师。', 'https://auto202603.github.io/' ],
      student: [ 'Zhe Kong', '研究时为中山大学在读博士生，2024 年 9 月起在美团从事视频生成科研实习。', 'https://kongzhecn.github.io/' ],
      title: 'Let Them Talk: Audio-Driven Multi-Person Conversational Video Generation',
      short: 'Let Them Talk',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2505.22647v1',
      extra: [
        [ 'NeurIPS 正式版', 'https://proceedings.nips.cc/paper_files/paper/2025/file/66fdfe692a360dfbad1fba32f64694da-Paper-Conference.pdf' ],
        [ '作者项目页', 'https://meigen-ai.github.io/multi-talk/' ]
      ],
      evidence: '第一作者署名中山大学、美团及港科大，并在履历中列出该项目、美团实习时间和企业导师 Yong Zhang。企业导师与其两位具名博士导师均为同篇作者。',
      id: 'meituan-multitalk-sysu-chen',
      school: '中山大学',
      faculty: [ '陈冠英 · Guanying Chen', '中山大学网络空间安全学院教师，论文署名中山大学。', 'https://scst.sysu.edu.cn/node/323' ],
      advising: [ '博士共同导师', 'Zhe Kong 的中山大学博士履历具名列陈冠英为共同导师。', 'https://kongzhecn.github.io/' ]
    },
    {
      company: '美团',
      team: 'LongCat',
      studentSchool: '中山大学',
      employee: [ 'Yong Zhang', '美团视频生成方向团队负责人。论文署名美团并任通讯作者，学生主页列其为这段美团实习的企业导师。', 'https://auto202603.github.io/' ],
      student: [ 'Zhe Kong', '研究时为中山大学在读博士生，2024 年 9 月起在美团从事视频生成科研实习。', 'https://kongzhecn.github.io/' ],
      title: 'Let Them Talk: Audio-Driven Multi-Person Conversational Video Generation',
      short: 'Let Them Talk',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2505.22647v1',
      extra: [
        [ 'NeurIPS 正式版', 'https://proceedings.nips.cc/paper_files/paper/2025/file/66fdfe692a360dfbad1fba32f64694da-Paper-Conference.pdf' ],
        [ '作者项目页', 'https://meigen-ai.github.io/multi-talk/' ]
      ],
      evidence: '第一作者署名中山大学、美团及港科大，并在履历中列出该项目、美团实习时间和企业导师 Yong Zhang。企业导师与其两位具名博士导师均为同篇作者。',
      id: 'meituan-multitalk-hkust-luo',
      school: '香港科技大学',
      faculty: [ 'Wenhan Luo', '2024 年 6 月起任香港科技大学副教授，论文署名香港科技大学。', 'https://whluo.github.io/assets/WenhanLuo_CV.pdf' ],
      advising: [ '跨校博士共同指导', '中山大学博士生 Zhe Kong 的主页具名列港科大教师 Wenhan Luo 为共同导师。', 'https://kongzhecn.github.io/' ]
    },
    {
      id: 'meituan-wildactor-hkust-xu',
      company: '美团',
      team: 'LongCat',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '徐旦 · Dan Xu', '香港科技大学计算机科学与工程系教师，原文署港科大并任通讯作者。', 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=dan-xu-danxu' ],
      employee: [ 'Yong Zhang', '美团视频生成方向团队负责人，论文署名美团并标注为项目负责人。', 'https://auto202603.github.io/' ],
      student: [ 'Qin Guo', '2025 年起为香港科技大学计算机博士生，2025 至 2026 年在美团科研实习。', 'https://guoqincode.github.io/' ],
      title: 'WildActor: Unconstrained Identity-Preserving Video Generation',
      short: 'WildActor',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2603.00586v1',
      extra: [ [ 'ICML 正式索引', 'https://proceedings.mlr.press/v306/guo26ad.html' ], [ '美团 LongCat 视频团队技术报告', 'https://arxiv.org/abs/2605.26486' ] ],
      evidence: '原文在第一作者 Qin Guo 名下标注论文工作于美团实习期间完成。其主页列出博士学籍、校内导师徐旦与美团实习。原文将美团研究员 Yong Zhang 标注为项目负责人。',
      advising: [ '校内博士导师', 'Qin Guo 的教育经历明确列徐旦为香港科技大学博士导师。', 'https://guoqincode.github.io/' ]
    },
    {
      id: 'tencent-pattern-eval-ucas-zhang',
      company: '腾讯',
      team: '大模型部 · 混元多模态理解',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '张煦尧 · Xu-Yao Zhang', '中国科学院自动化研究所研究员、中国科学院大学导师，原文署名中科院自动化所并任通讯作者。', 'https://people.ucas.edu.cn/~0049542?language=en' ],
      employee: [ 'Han Hu', '参与研究期间担任腾讯混元视觉语言模型负责人，原文署名腾讯大模型部。学生在实习经历中具名列其为企业导师。', 'https://ancientmooner.github.io/' ],
      student: [ 'Xinming Wang', '研究期间为中国科学院大学博士生，在中国科学院自动化所与中关村学院联培。2025 年 6 月起参加腾讯混元多模态研究实习。', 'https://gudehhh666.github.io/einwang/' ],
      title: 'Beyond Correctness: Benchmarking and Aligning Response Behaviors in Hybrid-Thinking MLLMs',
      short: 'Beyond Correctness',
      date: '2026-08',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2608.12781v2',
      extra: [
        [ '同一学生与导师的国科大学籍和署名', 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.175459840.02185500/v1' ],
        [ '企业研究团队及岗位报道', 'https://eu.36kr.com/en/p/3907934819521670' ]
      ],
      evidence: '预印本首页的实习脚注标注第一作者 Xinming Wang。其公开履历明确具名的校内博士导师及腾讯混元 VLM 实习导师，同一研究阶段的论文列出其国科大学籍。两位导师均为本篇作者。',
      advising: [ '校内博士共同导师', 'Xinming Wang 在个人主页列张煦尧与刘成林为其博士导师。本篇有张煦尧署名。', 'https://gudehhh666.github.io/einwang/' ]
    },
    {
      id: 'minimax-synlogic-hkust-he',
      company: 'MiniMax',
      team: '大模型后训练 · 逻辑推理',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '何俊贤 · Junxian He', '香港科技大学计算机科学与工程学系助理教授，同篇以港科大署名。', 'https://researchportal.hkust.edu.hk/en/persons/junxian-he/' ],
      employee: [
        '赵鹏宇 · Pengyu Zhao',
        '2023 年 8 月以自然语言处理研究员和工程师身份加入 MiniMax，负责大模型研发，同篇署 MiniMax。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf#page=362'
      ],
      student: [
        'Junteng Liu',
        '2024 年本科毕业后入读香港科技大学博士。2025 年 2 月起在 MiniMax 做科研实习，参与逻辑推理强化学习；正式论文同时署港科大和 MiniMax。',
        'https://mcpmark-eval-1031.github.io/'
      ],
      title: 'SynLogic: Synthesizing Verifiable Reasoning Data at Scale for Learning Logical Reasoning and Beyond',
      short: 'SynLogic',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://papers.nips.cc/paper_files/paper/2025/file/926ec82c83afe07db613956ae48c6700-Paper-Conference.pdf',
      extra: [
        [ '2025 年 5 月预印本', 'https://arxiv.org/abs/2505.19641' ],
        [ 'MiniMax 官方项目', 'https://github.com/MiniMax-AI/SynLogic' ],
        [ '作者的研究经历', 'https://vicent0205.github.io/' ]
      ],
      evidence: '正式论文首页列 Junteng Liu 为第一作者并列出校企双署名，何俊贤和 MiniMax 研发人员赵鹏宇同篇合著。学生的履历将逻辑推理强化学习列为其 MiniMax 实习期间的工作，MiniMax 官方仓库公开了同名研究。',
      advising: [ '博士导师', '何俊贤的课题组名录列 Junteng Liu 为博士生，学生本人也具名确认何俊贤为其博士导师。', 'https://jxhe.github.io/group/' ]
    },
    {
      company: '快手',
      team: '基础模型与应用团队',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      employee: [ '吴翔宇 · Xiangyu Wu', '快手算法专家，负责大模型在直播和商业化场景中的应用，同篇以快手署名并担任共同通讯作者。', 'https://aicon.infoq.cn/202512/beijing/speaker/9965' ],
      title: 'Towards Real-world Human Behavior Simulation: Benchmarking Large Language Models on Long-horizon, Cross-scenario, Heterogeneous Behavior Traces',
      short: 'OmniBehavior',
      date: '2026-04',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.08362v3',
      extra: [ [ '预印本发布日期和录用说明', 'https://arxiv.org/abs/2604.08362' ], [ '项目页', 'https://omnibehavior.github.io/' ] ],
      evidence: '论文首页具名注明两位国科大合著学生 Jiawei Chen 和 Ruoxi Xu 在快手实习期间完成研究。论文机构、学生在读经历和企业作者岗位均有独立来源。',
      id: 'kuaishou-omnibehavior-ucas-han',
      faculty: [ '韩先培 · Xianpei Han', '中国科学院软件研究所研究员、博士生导师，在国科大培养研究生；原文以软件所署名。', 'https://people.ucas.ac.cn/~xphan' ],
      student: [ 'Jiawei Chen', '在国科大培养单位中国科学院软件所读硕士，2025 年 9 月起在快手基础模型与应用团队做大模型科研实习，个人主页明确列本项目。', 'https://chenjiawei30.github.io/' ],
      advising: [ '校内硕士共同导师', 'Jiawei Chen 本人明确列韩先培和陆垚杰为其硕士共同导师。', 'https://chenjiawei30.github.io/' ]
    },
    {
      company: '快手',
      team: '基础模型与应用团队',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      employee: [ '吴翔宇 · Xiangyu Wu', '快手算法专家，负责大模型在直播和商业化场景中的应用，同篇以快手署名并担任共同通讯作者。', 'https://aicon.infoq.cn/202512/beijing/speaker/9965' ],
      title: 'Towards Real-world Human Behavior Simulation: Benchmarking Large Language Models on Long-horizon, Cross-scenario, Heterogeneous Behavior Traces',
      short: 'OmniBehavior',
      date: '2026-04',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.08362v3',
      extra: [ [ '预印本发布日期和录用说明', 'https://arxiv.org/abs/2604.08362' ], [ '项目页', 'https://omnibehavior.github.io/' ] ],
      evidence: '论文首页具名注明两位国科大合著学生 Jiawei Chen 和 Ruoxi Xu 在快手实习期间完成研究。论文机构、学生在读经历和企业作者岗位均有独立来源。',
      id: 'kuaishou-omnibehavior-ucas-lu',
      faculty: [ '陆垚杰 · Yaojie Lu', '国科大导师、中国科学院软件研究所副研究员，原文以软件所署名。', 'https://people.ucas.ac.cn/~luyaojie' ],
      student: [ 'Jiawei Chen', '在国科大培养单位中国科学院软件所读硕士，2025 年 9 月起在快手基础模型与应用团队做大模型科研实习，个人主页明确列本项目。', 'https://chenjiawei30.github.io/' ],
      advising: [ '校内硕士共同导师', 'Jiawei Chen 本人明确列韩先培和陆垚杰为其硕士共同导师。', 'https://chenjiawei30.github.io/' ]
    },
    {
      company: '快手',
      team: '基础模型与应用团队',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      employee: [ '吴翔宇 · Xiangyu Wu', '快手算法专家，负责大模型在直播和商业化场景中的应用，同篇以快手署名并担任共同通讯作者。', 'https://aicon.infoq.cn/202512/beijing/speaker/9965' ],
      title: 'Towards Real-world Human Behavior Simulation: Benchmarking Large Language Models on Long-horizon, Cross-scenario, Heterogeneous Behavior Traces',
      short: 'OmniBehavior',
      date: '2026-04',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.08362v3',
      extra: [ [ '预印本发布日期和录用说明', 'https://arxiv.org/abs/2604.08362' ], [ '项目页', 'https://omnibehavior.github.io/' ] ],
      evidence: '论文首页具名注明两位国科大合著学生 Jiawei Chen 和 Ruoxi Xu 在快手实习期间完成研究。论文机构、学生在读经历和企业作者岗位均有独立来源。',
      id: 'kuaishou-omnibehavior-ucas-sun',
      faculty: [ '孙乐 · Le Sun', '国科大导师、中国科学院软件研究所研究员，原文以软件所署名。', 'https://people.ucas.ac.cn/~lesun' ],
      student: [ 'Ruoxi Xu', '2020 年 9 月起在国科大培养单位中科院软件所攻读博士；论文首页注明她在快手实习完成该项研究。', 'https://rossixu.github.io/' ],
      advising: [ '校内博士共同导师', 'Ruoxi Xu 本人明确列韩先培和孙乐为其博士导师。', 'https://rossixu.github.io/' ]
    },
    {
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      employee: [ '沈渝钧 · Yujun Shen', '2022 年 4 月至 2024 年 7 月为蚂蚁集团 Staff Research Scientist；原文署名蚂蚁集团。', 'https://shenyujun.github.io/' ],
      student: [ 'Zifan Shi', '港科大计算机系博士在读期间，于 2022 年 6 月至 2023 年 4 月在 Ant Research 实习，企业导师为论文作者 Yujun Shen。', 'https://vivianszf.github.io/' ],
      title: 'Learning 3D-Aware Image Synthesis With Unknown Pose Distribution',
      short: 'PoF3D',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2301.07702v2',
      extra: [
        [
          '港科大收录的 CVPR 发表版',
          'https://researchportal.hkust.edu.hk/en/publications/learning-3d-aware-image-synthesis-with-unknown-pose-distribution/'
        ],
        [ '香港科技大学陈启峰学术团队学生名录', 'https://cqf.x10host.com/lab.html' ]
      ],
      evidence: '预印本首页的实习脚注附于第一作者 Zifan Shi；本人履历确认在蚂蚁的实习日期和研究指导者，并具名列出两位港科大校内导师，两人皆同篇署名。',
      advising: [ '校内博士共同导师', 'Zifan Shi 的主页明确列陈启峰及 Dit-Yan Yeung 为她在香港科技大学读博期间的导师。', 'https://vivianszf.github.io/' ],
      id: 'ant-pof3d-hkust-chen',
      faculty: [ '陈启峰 · Qifeng Chen', '香港科技大学计算机科学与工程系及电子与计算机工程学系教师，同篇署名港科大。', 'https://cse.hkust.edu.hk/admin/people/faculty/profile/cqf' ]
    },
    {
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      employee: [ '沈渝钧 · Yujun Shen', '2022 年 4 月至 2024 年 7 月为蚂蚁集团 Staff Research Scientist；原文署名蚂蚁集团。', 'https://shenyujun.github.io/' ],
      student: [ 'Zifan Shi', '港科大计算机系博士在读期间，于 2022 年 6 月至 2023 年 4 月在 Ant Research 实习，企业导师为论文作者 Yujun Shen。', 'https://vivianszf.github.io/' ],
      title: 'Learning 3D-Aware Image Synthesis With Unknown Pose Distribution',
      short: 'PoF3D',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2301.07702v2',
      extra: [
        [
          '港科大收录的 CVPR 发表版',
          'https://researchportal.hkust.edu.hk/en/publications/learning-3d-aware-image-synthesis-with-unknown-pose-distribution/'
        ],
        [ '香港科技大学陈启峰学术团队学生名录', 'https://cqf.x10host.com/lab.html' ]
      ],
      evidence: '预印本首页的实习脚注附于第一作者 Zifan Shi；本人履历确认在蚂蚁的实习日期和研究指导者，并具名列出两位港科大校内导师，两人皆同篇署名。',
      advising: [ '校内博士共同导师', 'Zifan Shi 的主页明确列陈启峰及 Dit-Yan Yeung 为她在香港科技大学读博期间的导师。', 'https://vivianszf.github.io/' ],
      id: 'ant-pof3d-hkust-yeung',
      faculty: [ '杨瓞仁 · Dit-Yan Yeung', '香港科技大学计算机科学与工程系教授，同篇署名港科大。', 'https://seng.hkust.edu.hk/about/people/faculty/dit-yan-yeung' ]
    },
    {
      id: 'ant-glead-tsinghua-yang',
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '杨余久 · Yujiu Yang', '清华大学深圳国际研究生院教授；原文署名清华并为通讯作者。', 'https://openfiesta.sigs.tsinghua.edu.cn/pi/3/24' ],
      employee: [ '沈渝钧 · Yujun Shen', '2022 年 4 月至 2024 年 7 月为蚂蚁集团 Staff Research Scientist；原文署名蚂蚁集团。', 'https://shenyujun.github.io/' ],
      student: [ 'Qingyan Bai', '2020 至 2023 年在清华大学深圳国际研究生院攻读硕士，在蚂蚁集团参与生成模型研究实习。', 'https://bqy.info/' ],
      title: 'GLeaD: Improving GANs With a Generator-Leading Task',
      short: 'GLeaD',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Bai_GLeaD_Improving_GANs_With_a_Generator-Leading_Task_CVPR_2023_paper.pdf',
      extra: [
        [
          'CVPR 补充材料及实习脚注',
          'https://openaccess.thecvf.com/content/CVPR2023/supplemental/Bai_GLeaD_Improving_GANs_CVPR_2023_supplemental.pdf'
        ],
        [ '杨余久实验室学生名录及清华硕士时间', 'https://iigroup.github.io/members/' ],
        [ '预印本及版本记录', 'https://arxiv.org/abs/2212.03752' ]
      ],
      evidence: 'CVPR 论文及补充材料首页均将蚂蚁实习脚注附于 Qingyan Bai；本人主页和导师名录给出清华硕士身份。预印本首发于 2022 年，正式论文发表于 2023 年。',
      advising: [ '校内硕士导师', 'Qingyan Bai 的主页明确区分清华硕士导师杨余久与其后港科大博士导师陈启峰。', 'https://bqy.info/' ]
    },
    {
      id: 'zhipu-zr0-ruc-zhang',
      company: '智谱（GLM / Z.ai）',
      team: '具身智能研发团队',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '张静 · Jing Zhang', '中国人民大学信息学院教授，论文通讯作者。', 'https://xiaojingzi.github.io/' ],
      employee: [ 'Tong Yang', '2024 年 7 月起担任智谱具身智能研发项目负责人，本论文以智谱署名。', 'https://zjutongyang.github.io/' ],
      student: [ 'Haoyang Li', '2021 至 2026 年为中国人民大学博士生；预印本首页具名说明其智谱实习中完成部分工作。', 'https://xiaojingzi.github.io/' ],
      title: 'Training Vision-Language-Action Models with Dense Embodied Chain-of-Thought Supervision',
      short: 'ZR-0',
      date: '2026-06',
      venue: 'arXiv 预印本',
      area: '具身智能与机器人',
      paper: 'https://arxiv.org/pdf/2606.30552v2',
      extra: [ [ '原文 HTML 与具名实习脚注', 'https://arxiv.org/html/2606.30552' ], [ '首次公开日期', 'https://arxiv.org/abs/2606.30552' ] ],
      evidence: '预印本作者注将智谱实习标于 Haoyang Li；张静公开学生名录列出其博士年份和学位论文，Tong Yang 的履历注明智谱正式岗位及本项目。',
      advising: [ '校内博士导师', '张静个人主页的学生及毕业生名录列出 Haoyang Li 的博士年份和学位论文。', 'https://xiaojingzi.github.io/#students' ]
    },
    {
      id: 'arjudge-huawei-polyu-wenjie-li',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [
        'Wenjie Li',
        '香港理工大学计算学系教授，论文共同作者及 Xu 的博士导师。',
        'https://www.polyu.edu.hk/mtri/news-and-events/news/2024/20241120---polyu-caict-and-hkpc-signed-a-strategic-partnership/'
      ],
      employee: [
        '刘群 · Qun Liu',
        '华为诺亚方舟实验室语音和语言计算首席科学家，原文署名华为诺亚方舟实验室。',
        'https://aclanthology.org/anthology-files/pdf/emnlp/2025.emnlp-tutorials.1v1.pdf'
      ],
      student: [ 'Kaishuai Xu', '2021 年 9 月起于香港理工大学攻读计算机博士，2024 年 6 月至 2025 年 7 月于华为香港研究中心诺亚方舟实验室实习。', 'https://kaishxu.github.io/kaishxu_cv.pdf' ],
      title: 'Learning to Align Multi-Faceted Evaluation: A Unified and Robust Framework',
      short: 'ARJudge',
      date: '2025-07',
      venue: 'ACL Findings',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.findings-acl.494.pdf',
      extra: [
        [ '华为作者任职的同期学术会议材料', 'https://neurips2024-enlsp.github.io/' ],
        [ '2025 年 2 月预印本', 'https://arxiv.org/abs/2502.18874' ],
        [ '同一师生与企业研究人员的另一篇同期合作', 'https://aclanthology.org/2025.acl-long.1506.pdf' ]
      ],
      evidence: '论文首页以脚注标明第一作者于华为诺亚方舟实验室实习时开展该项研究。学生简历将 ARJudge 明确列在华为实习产出中。校内导师和企业首席科学家均为同篇作者。',
      advising: [ '校内博士导师', 'Xu 的简历及导师组名录均证实其博士导师为 Wenjie Li。', 'https://web.comp.polyu.edu.hk/cswjli/Group.html' ]
    },
    {
      id: 'ma-rag-huawei-nju-zhi-wang',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '王志 · Zhi Wang', '南京大学工程管理学院控制科学与智能工程系准聘副教授、博士生导师，论文共同通讯作者。', 'https://sme.nju.edu.cn/wz1/list.htm' ],
      employee: [ 'Mingxuan Yuan', '华为诺亚方舟实验室研究员，论文署名华为。', 'https://sse.tongji.edu.cn/info/1125/1973.htm' ],
      student: [ '吴文浩 · Wenhao Wu', '2024 年 9 月起于南京大学攻读硕士，2025 年 7 月至 2026 年 1 月于华为诺亚方舟实验室实习。', 'https://wuwenhao09.github.io/' ],
      title: 'From Conflict to Consensus: Boosting Medical Reasoning via Multi-Round Agentic RAG',
      short: 'MA-RAG',
      date: '2026-07',
      venue: 'ICML',
      area: '推荐与检索',
      paper: 'https://proceedings.mlr.press/v306/wu26ba.html',
      extra: [
        [ '作者与单位（预印本）', 'https://arxiv.org/html/2603.03292' ],
        [ '导师组成员页', 'https://heyuanmingong.github.io/' ],
        [ '华为研究员报告简介', 'https://sse.tongji.edu.cn/info/1125/1973.htm' ]
      ],
      evidence: '学生公开履历将医疗问答、冲突引导的多轮检索、BERT 重排序列作华为实习工作，与同页所列 MA-RAG 的具体方法对应。预印本给该生南大和华为双署名，南大导师与华为正式研究员同篇。',
      advising: [ '校内硕士导师', 'Wu 的学术主页具名列王志为其南京大学硕士导师。', 'https://wuwenhao09.github.io/' ]
    },
    {
      id: 'reasoning-under-uncertainty-tencent-thu-yong-jiang',
      company: '腾讯',
      team: '腾讯 · 网络研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '蒋勇 · Yong Jiang', '清华大学深圳国际研究生院教授、博士生导师，原文署名清华大学及鹏城实验室，并任通讯作者。', 'https://www.sigs.tsinghua.edu.cn/jy_en/main.psp' ],
      employee: [ 'Congcong Miao', '在腾讯全职任高级研究员或工程师，论文中署名腾讯。', 'https://congcongmiao.github.io/' ],
      student: [ '史镇宁 · Zhenning Shi', '2023 至 2026 年在清华大学攻读硕士，2025 年 1 月至 2026 年 3 月于腾讯担任科研实习生。', 'https://sznnzs.github.io/' ],
      title: 'Reasoning under Uncertainty: Efficient LLM Inference via Unsupervised Confidence Dilution and Convergent Adaptive Sampling',
      short: 'Reasoning under Uncertainty',
      date: '2025-11',
      venue: 'EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.emnlp-main.1638.pdf',
      extra: [ [ '会议论文索引', 'https://aclanthology.org/2025.emnlp-main.1638/' ] ],
      evidence: '研究在腾讯实习期内发表，第一作者有清华、鹏城实验室及腾讯三重署名。学生个人履历具名列蒋勇为校内导师、Congcong Miao 为企业实习导师，两人均在同篇署名。',
      advising: [ '校内硕士导师', '个人履历明确列出蒋勇为清华硕士阶段导师之一。', 'https://sznnzs.github.io/' ]
    },
    {
      id: 'beef-tencent-nju-ye',
      company: '腾讯',
      team: '腾讯 AI Lab',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '叶翰嘉 · Han-Jia Ye', '南京大学人工智能学院教师，论文署名南京大学并任通讯作者。', 'https://ai.nju.edu.cn/8d/4f/c18540a429391/pagem.htm' ],
      employee: [
        'Yatao Bian',
        '研究时在腾讯 AI Lab 任职，2022 年为腾讯 AI Lab 机器学习中心资深研究员，原文署名腾讯 AI Lab 并任通讯作者。',
        'https://www.shanghaitech.edu.cn/en/2022/0608/c1272a609626/page.htm'
      ],
      student: [ '汪福运 · Fu-Yun Wang', '2019 至 2023 年南京大学本科生，2022 年 6 月至 12 月在腾讯 AI Lab 科研实习。', 'https://g-u-n.github.io/' ],
      title: 'BEEF: Bi-Compatible Class-Incremental Learning via Energy-Based Expansion and Fusion',
      short: 'BEEF',
      date: '2023-05',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://openreview.net/references/pdf?id=8G-EGfFx4A',
      extra: [
        [ 'ICLR 论文记录', 'https://openreview.net/forum?id=iP77_axu0h3' ],
        [ '指导教师实验室的学籍与共同指导名录', 'https://www.lamda.nju.edu.cn/zhoudw/team.html' ],
        [ '企业作者同期项目经历', 'https://yataobian.com/' ]
      ],
      evidence: 'ICLR 论文首页具名注明第一作者在腾讯 AI Lab 实习期间完成此项研究。个人履历列南大本科时间及指导教师，校方课题组名录亦明确具名共同指导关系。',
      advising: [ '校内科研指导', '学生本人列叶翰嘉与周大蔚为南京大学阶段指导老师，学校团队名录亦记载该关系。同篇叶翰嘉任通讯作者。', 'https://g-u-n.github.io/' ]
    },
    {
      id: 'recreate-tencent-zju-jiawei-chen',
      company: '腾讯',
      team: 'CodeBuddy / WorkBuddy',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '陈佳伟 · Jiawei Chen', '浙江大学计算机科学与技术学院研究员，论文署名浙江大学并任通讯作者。', 'https://jiawei-chen.github.io/index.html' ],
      employee: [
        'Hande Dong',
        '2023 年起任腾讯资深 AI 研究员，后负责 CodeBuddy / WorkBuddy 的大模型研发；原文以腾讯署名任通讯作者。',
        'https://donghande.github.io/files/Hande_Dong_s_CV.pdf'
      ],
      student: [ 'Zhezheng Hao', '2025 年获西北工业大学硕士学位后于浙江大学攻读博士，在腾讯 CodeBuddy 团队担任科研实习生，个人主页明确列为 ReCreate 的核心贡献者。', 'https://zz-haooo.github.io/' ],
      title: 'ReCreate: Reasoning and Creating Domain Agents Driven by Experience',
      short: 'ReCreate',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.1432.pdf',
      extra: [
        [ '同一工作 ICLR 研讨会稿的腾讯 CodeBuddy 说明', 'https://openreview.net/pdf/2188b955f6b610650720f367fbe3daf387a79f66.pdf' ],
        [ '同一研究的 2026 年 1 月初版', 'https://arxiv.org/abs/2601.11100' ],
        [ '企业作者的团队及职务', 'https://donghande.github.io/' ],
        [ '同篇实习合作者将 ReCreate 列为腾讯实习成果', 'https://wanghong1700.github.io/zh/' ]
      ],
      evidence: '正式论文列第一作者的浙大学籍单位、企业作者的腾讯署名，以及浙大校内导师的通讯作者身份。第一作者明确列出 CodeBuddy 实习和 ReCreate 核心贡献，同篇实习合作者将该作列作腾讯实习成果，同作研讨会稿明确由腾讯 CodeBuddy 支持。',
      advising: [ '校内博士导师', '学生个人履历具名列陈佳伟为其浙江大学博士导师。', 'https://zz-haooo.github.io/' ]
    },
    {
      id: 'fedbat-tencent-hust-ruixuan-li',
      company: '腾讯',
      team: '金融科技（FiT）',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '李瑞轩 · Ruixuan Li', '华中科技大学计算机科学与技术学院教授，同篇署名华中科技大学并任通讯作者。', 'https://idc.hust.edu.cn/rxli/index.htm' ],
      employee: [ '何秀强 · Xiuqiang He', '2022 年 1 月至 2025 年 1 月为腾讯 FiT 智能应用中心高级总监及研究负责人，同篇署名腾讯 FiT。', 'https://he-xiuqiang.github.io/' ],
      student: [ 'Shiwei Li', '研究时为华中科技大学智能与分布计算实验室博士生，论文首页具名注明在腾讯 FiT 实习期间完成工作。', 'https://leopold1423.github.io/' ],
      title: 'FedBAT: Communication-Efficient Federated Learning via Learnable Binarization',
      short: 'FedBAT',
      date: '2024-07',
      venue: 'ICML',
      area: '基础模型与学习方法',
      paper: 'https://raw.githubusercontent.com/mlresearch/v235/main/assets/li24ca/li24ca.pdf',
      extra: [ [ 'ICML 正式论文索引', 'https://proceedings.mlr.press/v235/li24ca.html' ], [ '导师组同期成果', 'https://idc.hust.edu.cn/info/1021/1844.htm' ] ],
      evidence: '论文脚注直接将第一作者与腾讯 FiT 实习和该项工作相连。学生个人主页具名确认博士导师，导师主页列其为在读博士。论文中还有同期在腾讯 FiT 任高级总监的何秀强。',
      advising: [ '校内博士导师', 'Li 的个人履历具名列李瑞轩为华中科技大学博士导师；李瑞轩的学生名录也列 Li 为博士生。', 'https://leopold1423.github.io/' ]
    },
    {
      id: 'rerum-tencent-cityu-chen-ma',
      company: '腾讯',
      team: '金融科技（FiT）',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ '马辰 · Chen Ma', '香港城市大学计算机科学系教师，论文校方通讯作者，学校学位库列为 Bowei He 的导师。', 'https://scholars.cityu.edu.hk/en/persons/chenma/' ],
      employee: [ '何秀强 · Xiuqiang He', '2022 年 1 月至 2025 年 1 月为腾讯 FiT 智能应用中心高级总监及研究负责人，同篇署名腾讯 FiT。', 'https://he-xiuqiang.github.io/' ],
      student: [
        'Bowei He',
        '研究期间为香港城市大学博士生，论文首页具名注明研究在腾讯 FiT 实习时完成。',
        'https://scholars.cityu.edu.hk/en/studentTheses/dynamic-adaptation-of-recommendation-models-structures-representa/'
      ],
      title: 'Rankability-enhanced Revenue Uplift Modeling Framework for Online Marketing',
      short: 'RERUM',
      date: '2024-08',
      venue: 'KDD',
      area: '推荐与检索',
      paper: 'https://xingt-tang.github.io/assets/pdf/rerum_kdd24.pdf',
      extra: [
        [ '正式出版索引', 'https://doi.org/10.1145/3637528.3671516' ],
        [ 'KDD 官方名单', 'https://kdd.org/kdd2024/applied-data-science-track-papers/' ],
        [ '学生维护的同一项目', 'https://github.com/hebowei2000/revenue_uplift' ]
      ],
      evidence: 'KDD 论文首页的星号脚注对应第一作者 Bowei He，标明该工作由其在腾讯 FiT 实习期间完成。香港城市大学学位库具名列马辰为其博士导师；导师及同期 FiT 高级总监均是同篇作者。',
      advising: [
        '校内博士导师',
        '城大博士论文记录将马辰明确列为导师，博士学位授予时间晚于本研究。',
        'https://scholars.cityu.edu.hk/en/studentTheses/dynamic-adaptation-of-recommendation-models-structures-representa/'
      ]
    },
    {
      id: 'mango-huawei-hkust-jun-zhang',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '张军 · Jun Zhang', '香港科技大学电子与计算机工程学系教授，同篇通讯作者。', 'https://ece.hkust.edu.hk/eejzhang' ],
      employee: [ 'Zhitang Chen', '华为诺亚方舟实验室首席研究员，同篇署名华为。', 'https://www.cse.cuhk.edu.hk/~byu/papers/J83-TCAD2023-Causal-Root.pdf' ],
      student: [
        'Tailin Zhou',
        '研究发生时在香港科技大学攻读博士，论文的致谢明确项目在其华为诺亚方舟实习期间启动和训练。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/understanding-improving-and-implementing-federated-learning-on-he/'
      ],
      title: 'Learning design-score manifold to guide diffusion models for offline optimization',
      short: 'ManGO',
      date: '2026-01-07',
      venue: 'npj Artificial Intelligence',
      area: '基础模型与学习方法',
      paper: 'https://www.nature.com/articles/s44387-025-00055-1',
      extra: [ [ '博士在读期间公开的初版', 'https://arxiv.org/abs/2506.05680' ], [ '同期华为研究活动记录', 'https://www.comp.hkbu.edu.hk/v1/?id=568&page=news' ] ],
      evidence: '正式论文致谢写明主要构思和训练工作是在 Tailin Zhou 于华为诺亚方舟实习期间完成。2025 年 6 月初版早于 同年登记的博士学位论文。博士论文列出导师，企业作者的岗位见既往 IEEE 论文作者简介。',
      advising: [
        '校内博士导师',
        '博士论文的学校公开记录具名列张军为导师。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/understanding-improving-and-implementing-federated-learning-on-he/'
      ]
    },
    {
      id: 'mango-huawei-hkustgz-danny-tsang',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学',
      faculty: [ '曾宪国 · Danny Hin Kwok Tsang', '香港科技大学（广州）物联网学域教授及学域主任，论文署港科大和港科大（广州）。', 'https://iott.hkust-gz.edu.cn/' ],
      employee: [ 'Zhitang Chen', '华为诺亚方舟实验室首席研究员，同篇署名华为。', 'https://www.cse.cuhk.edu.hk/~byu/papers/J83-TCAD2023-Causal-Root.pdf' ],
      student: [
        'Tailin Zhou',
        '研究发生时在香港科技大学攻读博士，论文的致谢明确项目在其华为诺亚方舟实习期间启动和训练。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/understanding-improving-and-implementing-federated-learning-on-he/'
      ],
      title: 'Learning design-score manifold to guide diffusion models for offline optimization',
      short: 'ManGO',
      date: '2026-01-07',
      venue: 'npj Artificial Intelligence',
      area: '基础模型与学习方法',
      paper: 'https://www.nature.com/articles/s44387-025-00055-1',
      extra: [ [ '博士在读期间公开的初版', 'https://arxiv.org/abs/2506.05680' ], [ '港科大（广州）学域的学生公开名录', 'https://iott.hkust-gz.edu.cn/people/p_students/' ] ],
      evidence: '同篇致谢说明学生在华为诺亚方舟实习期间提出主要构思并完成训练。曾宪国在正式稿署名港科大（广州），其共同指导关系由香港科技大学的博士论文记录直接确认。',
      advising: [
        '跨校博士共同导师',
        '由香港科技大学公开的博士论文记录具名列港科大（广州）教授曾宪国为共同导师。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/understanding-improving-and-implementing-federated-learning-on-he/'
      ]
    },
    {
      id: 'chronosteer-huawei-bupt-qi-qi',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '戚琦 · Qi Qi', '北京邮电大学网络智能研究中心教员、博士生导师，2025 年预印本署北京邮电大学。', 'https://nirc.top/people/?query-1-page=2' ],
      employee: [ '潘璐伽 · Lujia Pan', '华为诺亚方舟实验室专家研究员，论文署华为诺亚方舟实验室。', 'https://gcastle-hub.github.io/csl-competition/organizers/' ],
      student: [ 'Chengsen Wang', '2023 年 9 月起为北京邮电大学博士生，2025 年 2 月至 5 月赴华为诺亚方舟实验室科研实习。', 'https://home.chengsen.net.cn/' ],
      title: 'ChronoSteer: Bridging Large Language Model and Time Series Foundation Model via Synthetic Cross-Modal Alignment Dataset',
      short: 'ChronoSteer',
      date: '2026-10-11',
      venue: 'ACM TKDD',
      area: '基础模型与学习方法',
      paper: 'https://arxiv.org/html/2505.10083',
      extra: [
        [ 'ACM 论文索引', 'https://doi.org/10.1145/3849868' ],
        [ '实习期间发表的初版和作者脚注', 'https://arxiv.org/html/2505.10083v1' ],
        [ '同期华为研究署名与同一企业邮箱', 'https://www.vldb.org/pvldb/vol17/p386-wang.pdf' ]
      ],
      evidence: '第一作者脚注明确说明在华为实习期间开展该项研究。个人主页具名列戚琦与王敬宇为北邮校内导师，两人同篇。另有华为诺亚方舟实验室专家研究员潘璐伽同篇署名。',
      advising: [ '校内博士共同导师', '学生主页具名列戚琦及王敬宇为北邮博士导师。', 'https://home.chengsen.net.cn/' ]
    },
    {
      id: 'chronosteer-huawei-bupt-jingyu-wang',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '北京邮电大学',
      studentSchool: '北京邮电大学',
      faculty: [ '王敬宇 · Jingyu Wang', '北京邮电大学计算机学院长聘教授，研究时为网络智能研究中心主任。', 'https://jericwang.github.io/' ],
      employee: [ '潘璐伽 · Lujia Pan', '华为诺亚方舟实验室专家研究员，论文署华为诺亚方舟实验室。', 'https://gcastle-hub.github.io/csl-competition/organizers/' ],
      student: [ 'Chengsen Wang', '2023 年 9 月起为北京邮电大学博士生，2025 年 2 月至 5 月赴华为诺亚方舟实验室科研实习。', 'https://home.chengsen.net.cn/' ],
      title: 'ChronoSteer: Bridging Large Language Model and Time Series Foundation Model via Synthetic Cross-Modal Alignment Dataset',
      short: 'ChronoSteer',
      date: '2026-10-11',
      venue: 'ACM TKDD',
      area: '基础模型与学习方法',
      paper: 'https://arxiv.org/html/2505.10083',
      extra: [
        [ 'ACM 论文索引', 'https://doi.org/10.1145/3849868' ],
        [ '实习期间发表的初版和作者脚注', 'https://arxiv.org/html/2505.10083v1' ],
        [ '同期华为研究署名与同一企业邮箱', 'https://www.vldb.org/pvldb/vol17/p386-wang.pdf' ]
      ],
      evidence: '第一作者脚注明确说明在华为实习期间开展该项研究。个人主页具名列王敬宇为北邮博士共同导师；导师和华为正式研究员均为同篇作者。',
      advising: [ '校内博士共同导师', '学生主页具名列戚琦及王敬宇为北邮博士导师。', 'https://home.chengsen.net.cn/' ]
    },
    {
      id: 'dail-tencent-thu-xueqian-wang',
      company: '腾讯',
      team: '腾讯 AI Lab',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '王学谦 · Xueqian Wang', '清华大学深圳国际研究生院信息科学与技术学部教授，同篇署清华。', 'https://www.sigs.tsinghua.edu.cn/wxq_en/list.htm' ],
      employee: [ '赵沛霖 · Peilin Zhao', '研究时在腾讯 AI Lab 担任主任研究员，同篇企业通讯作者。', 'https://peilinzhao.github.io/' ],
      student: [ '刘子轩 · Zixuan Liu', '2021 年 9 月至 2024 年 6 月于清华大学攻读硕士，2022 年 1 月至 2023 年 8 月在腾讯 AI Lab 科研实习。', 'https://panda-shawn.github.io/' ],
      title: 'Dynamics Adapted Imitation Learning',
      short: 'DAIL',
      date: '2023-07',
      venue: 'TMLR',
      area: '基础模型与学习方法',
      paper: 'https://www.global-optimization.com/boyuan/Mypaper/TMLR-2023a.pdf',
      extra: [
        [ '企业作者的同期职务', 'https://www.cs.toronto.edu/~sven/Papers/PAMIStateOfTheJournal2022.pdf' ],
        [ '正式发表作者稿', 'https://openreview.net/notes/edits/attachment?id=mpbEHYAB9Q&name=pdf' ]
      ],
      evidence: '论文首页列刘子轩为第一作者，兼署清华和腾讯 AI Lab。学生本人明确说明其在清华硕士期间于腾讯 AI Lab 实习，并将这篇同署论文列入发表成果；同期腾讯 AI Lab 主任研究员赵沛霖也参与了该研究。',
      advising: [ '校内硕士导师', '刘子轩在个人学术页具名说明硕士学位来自清华大学，导师为王学谦。', 'https://panda-shawn.github.io/' ]
    },
    {
      id: 'mmpd-huawei-sjtu-junchi-yan',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '严骏驰 · Junchi Yan', '上海交通大学人工智能学院长聘教授，同篇署上海交大并任通讯作者。', 'https://thinklab.sjtu.edu.cn/' ],
      employee: [ '潘璐伽 · Lujia Pan', '华为诺亚方舟实验室专家研究员，论文署华为且使用企业邮箱，也是第一作者具名的实习导师。', 'https://gcastle-hub.github.io/csl-competition/organizers/' ],
      student: [ '张昀浩 · Yunhao Zhang', '2021 年 9 月起在上海交通大学读博，2025 年 7 月至 2026 年 1 月在华为诺亚方舟实验室开展时序建模研究实习。', 'https://yunhaozhang-mars.github.io/' ],
      title: 'MMPD: Diverse Time Series Forecasting via Multi-Mode Patch Diffusion Loss',
      short: 'MMPD',
      date: '2026-04',
      venue: 'ICLR',
      area: '基础模型与学习方法',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2026/file/be7b70477c8fca697f14b1dbb1c086d1-Paper-Conference.pdf',
      extra: [
        [ '正式会议信息', 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/be7b70477c8fca697f14b1dbb1c086d1-Abstract-Conference.html' ],
        [ '同一课题的 OpenReview 投审稿及日期', 'https://openreview.net/forum?id=NEUgHT8dvH' ],
        [ '校方课题组代码与作者记录', 'https://github.com/Thinklab-SJTU/MMPD' ]
      ],
      evidence: '学生主页具名列出华为诺亚实习导师潘璐伽和郑嘉乐，两人均为 MMPD 企业署名作者。其博士导师严骏驰任同篇通讯作者。此作研究时序预测，与学生在华为所述时序建模研究方向相符。',
      advising: [ '校内博士导师', '学生本人具名列严骏驰为上海交通大学博士导师。', 'https://yunhaozhang-mars.github.io/' ]
    },
    {
      id: 'alibaba-asi-hkust-wei-wang',
      company: '阿里巴巴',
      team: '基础设施与可靠性工程（TRE）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '王威 · Wei Wang', '香港科技大学计算机科学与工程学系教师，同篇署名港科大。', 'https://researchportal.hkust.edu.hk/en/persons/wei-wang/' ],
      employee: [
        'Liping Zhang',
        '阿里巴巴系统软件资深技术人员。阿里云公开资料列其为 Principal Engineer，2025 年及本论文持续署阿里集团。',
        'https://www.alibabacloud.com/en/campaign/gsac2018?_p_lc=1'
      ],
      student: [ 'Tianyuan Wu', '自 2024 年在港科大攻读计算机科学博士。履历记载 2023 年 10 月起在阿里科研实习，并在企业经历下列出本论文的大规模生产 AI 集群分析。', 'https://wutianyuan1.github.io/cv/' ],
      title: 'Heterogeneity at Hyperscale: Characterization and Scheduling of Large Production AI Clusters at Alibaba',
      short: 'Heterogeneity at Hyperscale',
      date: '2026-07',
      venue: 'USENIX OSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/osdi26-li-suyi.pdf',
      extra: [
        [ '会议原文索引', 'https://www.usenix.org/conference/osdi26/presentation/li-suyi' ],
        [ '企业作者 2025 年任职交叉核对', 'https://cs.sjtu.edu.cn/~lichao/publications/EXIST_Enabling_ASPLOS-2025-Wang.pdf' ],
        [ '阿里 TRE 同篇作者的项目记录', 'https://www.lingyunyang.com/' ]
      ],
      evidence: '论文分析阿里巴巴的生产 AI 集群。Tianyuan Wu 的企业实习履历明确描述其参与分析阿里集群的 GPU 使用率与可靠性，同页列出本篇 OSDI 论文。博士导师王威与阿里工程人员 Liping Zhang 均为同篇作者。',
      advising: [ '博士导师', 'Tianyuan Wu 的公开简历将王威列为港科大博士导师。', 'https://wutianyuan1.github.io/cv/' ]
    },
    {
      id: 'alibaba-itryon-sysu-xiaodan-liang',
      company: '阿里巴巴',
      team: '淘天 · 拍立淘虚拟试衣',
      school: '中山大学',
      studentSchool: '中山大学',
      faculty: [ '梁小丹 · Xiaodan Liang', '中山大学教师，正式稿署中山大学深圳校区并任通讯作者。', 'https://cse.sysu.edu.cn/hcp/cat/65' ],
      employee: [ 'Mengting Chen', '阿里巴巴算法研究员，论文署阿里淘天。同一批作者参与的拍立淘技术报告明确列其为企业项目负责人。', 'https://mengtingchen.github.io/' ],
      student: [ 'Jun Zheng', '中山大学在读硕士，2025 年 2 月起在阿里虚拟试衣团队实习。2026 年 6 月硕士毕业，7 月转任阿里算法工程师。', 'https://zhengjun-ai.github.io/' ],
      title: 'iTryOn: Mastering Interactive Video Virtual Try-On with Spatial-Semantic Guidance',
      short: 'iTryOn',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mlresearch/v306/main/assets/zheng26y/zheng26y.pdf',
      extra: [
        [ '正式会议索引', 'https://proceedings.mlr.press/v306/zheng26y.html' ],
        [ '实习与在读期间发布的预印本', 'https://arxiv.org/abs/2605.21431' ],
        [ '同一企业团队的技术报告及具名贡献', 'https://arxiv.org/html/2604.19748' ]
      ],
      evidence: '论文首版发表于 Jun Zheng 硕士毕业和阿里转正之前，正式稿署中山大学。本人把 iTryOn 列为在读阶段成果；同期开源报告把他列入拍立淘虚拟试衣团队，同篇企业作者 Mengting Chen 为该团队的项目负责人。',
      advising: [ '硕士导师', 'Jun Zheng 的公开履历具名列梁小丹为其中山大学硕士导师。', 'https://zhengjun-ai.github.io/' ]
    },
    {
      id: 'bytedance-acetone-ucas-qixiang-ye',
      company: '字节跳动',
      team: '智能创作团队',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '叶齐祥 · Qixiang Ye', '2022 年起任中国科学院大学特聘教授；原文署国科大并任通讯作者。', 'https://people.ucas.ac.cn/~qxye?language=en' ],
      employee: [ 'Xijin Zhang', '字节跳动智能创作团队研究人员。既往学生公开履历将其列为该团队的企业实习导师，字节专利和跨年公司论文记录其参与研发，本篇署字节跳动。', 'https://xiezhy6.github.io/files/cv.pdf' ],
      student: [ '马天仁 · Tianren Ma', '中国科学院大学在读博士，2025 年 8 月至 2026 年 2 月在字节跳动智能创作团队实习。', 'https://martian422.github.io/' ],
      title: 'AceTone: Bridging Words and Colors for Conditional Image Grading',
      short: 'AceTone',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2604.00530',
      extra: [
        [
          'CVPR 正式论文索引',
          'https://openaccess.thecvf.com/content/CVPR2026/html/Ma_AceTone_Bridging_Words_and_Colors_for_Conditional_Image_Grading_CVPR_2026_paper.html'
        ],
        [ '企业作者的字节研发记录', 'https://patents.google.com/patent/US20220292875A1/en' ],
        [ '企业作者之前的字节论文与邮箱', 'https://arxiv.org/pdf/2303.13756' ]
      ],
      evidence: '原文首页在第一作者马天仁名下明确注明字节跳动实习，兼署国科大与字节。学生公开履历列出其实习团队、时间和校内导师，导师及企业研发人员同文。',
      advising: [ '博士导师', '马天仁的中英文主页均明确列叶齐祥为其国科大博士导师。', 'https://martian422.github.io/' ]
    },
    {
      id: 'alibaba-depo-thu-jia',
      company: '阿里巴巴',
      team: '淘天 · 视觉生成研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '贾珈 · Jia Jia', '清华大学计算机系教师，同篇署清华并任通讯作者。', 'https://www.cs.tsinghua.edu.cn/csen/info/1306/4330.htm' ],
      employee: [ '葛铁铮 · Tiezheng Ge', '阿里巴巴算法研究人员。同期任企业科研实习导师，持续以淘天身份发表电商图像生成研究；本篇署阿里淘天并列企业邮箱。', 'https://dingyiyang.github.io/' ],
      student: [ 'Shikun Sun', '2021 年获清华本科学位后在清华大学计算机系攻读博士。论文首页注明项目在其淘天实习期间完成。', 'https://skipper17.github.io/' ],
      title: 'DEPO: Enhancing E-commerce Image Background Generation with Short Trajectory Direct Expected Preference Optimization',
      short: 'DEPO',
      date: '2025-10',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://hcsi.cs.tsinghua.edu.cn/Paper/paper25/MM2025_Shikun%20Sun_DEPO_Enhancing%20E-commerce%20Image%20Background%20Generation%20with%20Short%20Trajectory%20Direct%20Expected%20Preference%20Optimizatio.pdf',
      extra: [
        [
          '阿里研究人员的同期企业署名',
          'https://proceedings.neurips.cc/paper_files/paper/2024/file/a07e5160196058120105ad7cb3505d3c-Paper-Conference.pdf'
        ]
      ],
      evidence: '论文首页具名标注第一作者在阿里淘天实习时完成该研究；学生本人说明清华博士导师为同篇通讯作者贾珈，企业研究人员葛铁铮同篇署名。',
      advising: [ '博士导师', '第一作者学术主页具名列贾珈为其清华博士导师。', 'https://skipper17.github.io/' ]
    },
    {
      id: 'alibaba-captioning-ruc-jin',
      company: '阿里巴巴',
      team: '视觉生成研究',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [
        '金琴 · Qin Jin',
        '中国人民大学信息学院教授，论文署人大并任通讯作者。',
        'https://info.ruc.edu.cn/jsky/szdw/ajxjgcx/jsjkxyjsx1/js2/260ab5295d334a67beb7620e931268b1.htm'
      ],
      employee: [ '葛铁铮 · Tiezheng Ge', '阿里巴巴算法研究人员，学生本人具名列其为阿里实习导师。论文署阿里集团，并使用企业邮箱。', 'https://dingyiyang.github.io/' ],
      student: [ 'Dingyi Yang', '在中国人民大学攻读博士期间赴阿里巴巴科研实习，原文具名标注本研究在其阿里实习期间完成。', 'https://dingyiyang.github.io/' ],
      title: 'Visual Captioning at Will: Describing Images and Videos Guided by a Few Stylized Sentences',
      short: 'Visual Captioning at Will',
      date: '2023-10',
      venue: 'ACM Multimedia',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2307.16399',
      extra: [ [ '同一师生与企业研究人员的后续合著', 'https://aclanthology.org/2024.acl-long.513/' ] ],
      evidence: '预印本的具名实习注直接对应第一作者。学生履历分别列金琴为人大博士导师、葛铁铮为阿里实习导师；两人均为该论文作者，企业导师署阿里巴巴。',
      advising: [ '博士导师', 'Dingyi Yang 的公开教育履历明确列金琴为人大博士导师。', 'https://dingyiyang.github.io/' ]
    },
    {
      id: 'alibaba-flowing-backwards-nju-limin-wang',
      company: '阿里巴巴',
      team: '阿里妈妈 · 视觉生成',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '王利民 · Limin Wang', '南京大学计算机学院教师，同篇以南京大学署名。', 'https://wanglimin.github.io/' ],
      employee: [ '葛铁铮 · Tiezheng Ge', '阿里巴巴算法研究人员，研究期间参与阿里图像生成项目和企业实习指导，论文以阿里集团署名。', 'https://dingyiyang.github.io/' ],
      student: [ 'Yang Chen', '2023 年 9 月起在南京大学攻读博士，2025 年 3 月至 2026 年 4 月在阿里妈妈研究图像生成和扩散蒸馏。', 'https://y-sisyphus.github.io/' ],
      title: 'Flowing Backwards: Improving Normalizing Flows via Reverse Representation Alignment',
      short: 'Flowing Backwards',
      date: '2026-03',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2511.22345',
      extra: [ [ '正式会议索引', 'https://doi.org/10.1609/aaai.v40i4.37300' ], [ '2025 年 11 月首版', 'https://arxiv.org/abs/2511.22345' ] ],
      evidence: '第一作者的双署名、实习履历与论文首版时间相互印证。学生在阿里妈妈从事图像生成研究时公开这项工作，同文列南京大学博士导师王利民及阿里作者葛铁铮。',
      advising: [ '博士导师', 'Yang Chen 的公开主页具名列王利民为其南京大学博士导师。', 'https://y-sisyphus.github.io/' ]
    },
    {
      id: 'learned-curve-huawei-uestc-kai-zheng',
      company: '华为',
      team: '华为云 · GaussDB（DWS）',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ '郑凯 · Kai Zheng', '电子科技大学教授、博士生导师，校方介绍确认他为该项论文的通讯作者。', 'https://faculty.uestc.edu.cn/zhengkai/zh_CN/index.htm' ],
      employee: [ 'Kai Zeng', '华为云数据与 AI 融合首席架构师，论文列华为公司署名及企业邮箱。', 'https://kai-zeng.github.io/' ],
      student: [ '陈旭 · Xu Chen', '研究时为电子科技大学在读博士生，论文首页具名说明工作于华为云 GaussDB（DWS）实习期间完成。', 'https://thisislegit.github.io/' ],
      title: 'Optimizing Block Skipping for High-Dimensional Data with Learned Adaptive Curve',
      short: 'Learned Adaptive Curve',
      date: '2025-06',
      venue: 'SIGMOD',
      area: '系统与推理优化',
      paper: 'https://zheng-kai.com/paper/2025_sigmod_chen.pdf',
      extra: [
        [ 'ACM 正式出版索引', 'https://doi.org/10.1145/3709710' ],
        [ '电子科技大学论文公告及同期博士学籍', 'https://new1.uestc.edu.cn/?Id=94073&n=UestcNews.Front.DocumentV2.ArticlePage' ]
      ],
      evidence: '正式论文首页的实习脚注对应第一作者，明确指向华为云 GaussDB（DWS）团队。学校新闻确认该生博士在读及郑凯同篇通讯，学生学术页另外确认郑凯是博士导师。共同作者 Kai Zeng 的职业主页明确其华为云岗位。',
      advising: [ '校内博士导师', '陈旭的学术主页具名列郑凯为电子科技大学博士导师；同页另将韩苏列为硕士阶段导师。', 'https://thisislegit.github.io/' ]
    },
    {
      id: 'learning-to-edit-huawei-hkustgz-wei-wang',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学',
      faculty: [ '王伟 · Wei Wang', '香港科技大学（广州）数据科学与分析学域长聘教授，同时附属于港科大，两校均为论文署名单位。', 'https://dbwangwei.github.io/' ],
      employee: [
        '刘群 · Qun Liu',
        '在华为诺亚方舟实验室任语音和语言计算首席科学家，论文同篇署华为。',
        'https://aclanthology.org/anthology-files/pdf/emnlp/2025.emnlp-tutorials.1v1.pdf'
      ],
      student: [ '姜宇心 · Yuxin Jiang', '在港科大（广州）数据科学与分析学域接受指导，在港科大攻读博士学位。论文双署港科大（广州）及港科大，脚注确认在华为实习期间完成此项工作。', 'https://arxiv.org/pdf/2506.09329' ],
      title: 'Learning to Edit: Aligning LLMs with Knowledge Editing',
      short: 'Learning to Edit',
      date: '2024-08',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.acl-long.258.pdf',
      extra: [
        [ '学生个人学术页与博士导师记录', 'https://yjiangcm.github.io/' ],
        [ '同一师生在华为实习期的另一合作 FollowBench', 'https://aclanthology.org/2024.acl-long.257.pdf' ],
        [ '企业作者的同期任职', 'https://neurips2024-enlsp.github.io/' ]
      ],
      evidence: 'ACL 论文首页第一作者脚注明确说明在华为诺亚方舟实习期间完成本作。港科大（广州）的博士答辩公告具名列王伟为导师，亦将 Learning to Edit 列为博士成果。王伟及同期华为诺亚首席科学家刘群均为同篇作者。',
      advising: [
        '跨校博士指导',
        '港科大（广州）博士答辩公告明确姜宇心的主要导师为王伟。其博士论文封面列香港科技大学为学位单位。',
        'https://dsa.hkust-gz.edu.cn/blog/2025/05/21/towards-efficient-and-effective-alignment-of-large-language-models/'
      ]
    },
    {
      id: 'ant-tier-nju-he',
      company: '蚂蚁集团',
      team: '图智能与基础模型研究',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '何铁科 · Tieke He', '南京大学软件学院副教授，论文以南京大学署名。', 'https://hetieke.cn/' ],
      employee: [ 'Yongchao Liu', '2017 年 7 月起任蚂蚁集团 Staff Engineer，负责数据智能基础技术研发，同篇署蚂蚁集团并为通讯作者。', 'https://yongchao-liu.github.io/' ],
      student: [ '刘云辉 · Yunhui Liu', '2024 年 9 月起在南京大学软件学院读博，2025 年 7 月至 2026 年 2 月在蚂蚁集团参与图学习实习。', 'https://cloudy1225.github.io/' ],
      title: 'Learning Hierarchical Knowledge in Text-Rich Networks with Taxonomy-Informed Representation Learning',
      short: 'TIER',
      date: '2026-08',
      venue: 'KDD',
      area: '图学习与推荐系统',
      paper: 'https://arxiv.org/html/2603.08159',
      extra: [ [ 'ACM 正式会议论文', 'https://doi.org/10.1145/3770854.3780260' ] ],
      evidence: '论文首页显示刘云辉双署南京大学和蚂蚁集团，致谢注明蚂蚁集团研究实习计划。本人履历在蚂蚁实习条目直接链接该 KDD 成果，具名列出企业导师和校内博士导师。',
      advising: [ '校内博士共同导师', '刘云辉在个人主页列何铁科及赵建华为南京大学博士导师，本篇有何铁科署名。', 'https://cloudy1225.github.io/' ]
    },
    {
      id: 'jd-factosr-hkustgz-zhu',
      company: '京东',
      team: '京东探索研究院 · JoyAI-Image',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ 'Lei Zhu', '香港科技大学（广州）机器人与自主系统及数据科学与分析学域助理教授，论文以港科大（广州）署名并任通讯作者。', 'https://sites.google.com/site/indexlzhu/home' ],
      employee: [ '段楠 · Nan Duan', '京东集团副总裁、京东探索研究院副院长，负责基础模型研发，本篇署京东探索研究院。', 'https://nanduan.github.io/' ],
      student: [ 'Yijun Yang', '2022 年 9 月至 2026 年 10 月为港科大（广州）博士生，2025 年 9 月起参加京东探索研究院 TGT 科研实习。', 'https://yijun-yang.github.io/' ],
      title: 'Unfold The World: Factorize 4D Properties in Reinforcing Spatial Reasoning',
      short: 'FactoSR',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2609.03729v1',
      extra: [
        [ '预印本题名与首次公开日期', 'https://arxiv.org/abs/2609.03729' ],
        [ 'ECCV 正式题名与作者', 'https://eccv.ecva.net/Conferences/2026/AcceptedPapers' ],
        [ '导师名录：博士阶段与毕业后任职', 'https://sites.google.com/site/indexlzhu/people' ]
      ],
      evidence: '预印本首页把第一作者双署港科大（广州）和京东探索研究院，致谢京东资助与计算资源。本人履历把论文列为 JoyAI-Image-Understanding 后训练成果，并记录当时为京东实习生；导师名录区分博士毕业与后来京东正式职位。',
      advising: [ '校内博士导师', 'Yijun Yang 的履历具名列 Lei Zhu 为港科大（广州）博士导师，导师的学生名录列出该段博士时间。', 'https://yijun-yang.github.io/' ]
    },
    {
      id: 'baidu-a2r-ustc-xu',
      company: '百度',
      team: '文心（ERNIE）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '徐童 · Tong Xu', '中国科学技术大学计算机学院副教授，论文以中国科大署名。', 'https://faculty.ustc.edu.cn/xutong/en/index.htm' ],
      employee: [ '刘璟 · Jing Liu', '2017 年 12 月加入百度，现任杰出架构师并负责大模型后训练。同篇署百度，学生履历具名列为文心实习指导。', 'https://legendarydan.github.io/' ],
      student: [ '王梓齐 · Ziqi Wang', '中国科大人工智能与数据科学学院在读硕士，2025 年 4 至 12 月在百度文心团队研究实习。', 'https://pppp-kaqiu.github.io/ppppkaqiu.github.io/' ],
      title: 'A2R: An Asymmetric Two-Stage Reasoning Framework for Parallel Reasoning',
      short: 'A2R',
      date: '2025-09',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2509.22044v1',
      extra: [ [ '同篇企业通讯作者的百度年报岗位', 'https://ir.baidu.com/static-files/aa26913e-2e09-4ca2-be14-ce755b68adac' ] ],
      evidence: '预印本 PDF 首页标明第一作者同时署中国科大、百度，公开日期处于学生履历所列文心科研实习期。两位具名企业导师刘璟、王海峰均为论文作者；其校内导师徐童同篇署中国科大。',
      advising: [ '校内硕士共同导师', '王梓齐的个人主页列徐童与陈恩红为硕士导师。', 'https://pppp-kaqiu.github.io/ppppkaqiu.github.io/' ]
    },
    {
      id: 'baidu-a2r-ustc-chen',
      company: '百度',
      team: '文心（ERNIE）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [
        '陈恩红 · Enhong Chen',
        '中国科学技术大学教授、博士生导师，PDF 首页署中国科大并任通讯作者。',
        'https://iatyz.ustc.edu.cn/teacher/profile/name/%E9%99%88%E6%81%A9%E7%BA%A2'
      ],
      employee: [ '刘璟 · Jing Liu', '2017 年 12 月加入百度，现任杰出架构师并负责大模型后训练。同篇署百度，学生履历具名列为文心实习指导。', 'https://legendarydan.github.io/' ],
      student: [ '王梓齐 · Ziqi Wang', '中国科大人工智能与数据科学学院在读硕士，2025 年 4 至 12 月在百度文心团队研究实习。', 'https://pppp-kaqiu.github.io/ppppkaqiu.github.io/' ],
      title: 'A2R: An Asymmetric Two-Stage Reasoning Framework for Parallel Reasoning',
      short: 'A2R',
      date: '2025-09',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2509.22044v1',
      extra: [ [ '同篇企业通讯作者的百度年报岗位', 'https://ir.baidu.com/static-files/aa26913e-2e09-4ca2-be14-ce755b68adac' ] ],
      evidence: '预印本 PDF 首页标明第一作者同时署中国科大、百度，公开日期处于学生履历所列文心科研实习期。两位具名企业导师刘璟、王海峰均为论文作者；校内共同导师陈恩红同篇署中国科大并任通讯作者。',
      advising: [ '校内硕士共同导师', '王梓齐的个人主页列徐童与陈恩红为硕士导师。', 'https://pppp-kaqiu.github.io/ppppkaqiu.github.io/' ]
    },
    {
      id: 'jd-rlvr-schedule-ustc-zhao',
      company: '京东',
      team: '京东探索研究院 · 大模型后训练',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '赵峰 · Feng Zhao', '中国科学技术大学自动化系教授、博士生导师，以中国科大署名。', 'https://auto.ustc.edu.cn/2021/0510/c25976a484874/page.htm' ],
      employee: [ 'Jiaqi Wang', '京东探索研究院研究总监，负责大语言模型和视觉语言模型研发，原文同时署京东及上海创智学院。', 'https://myownskyw7.github.io/' ],
      student: [ '张景皓 · Jinghao Zhang', '中国科大与上海创智学院联培博士生，2025 年 10 月起在京东探索研究院参加 TGT 科研实习。', 'https://jinghaoleven.github.io/' ],
      title: 'Not only where, But when: Temporal Scheduling for RLVR',
      short: 'RLVR-Schedule',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2605.25381v1',
      extra: [ [ '京东探索研究院 NeurIPS 论文动态', 'https://research.joyai.com/blog/neurips-2026-papers' ] ],
      evidence: '原文在张景皓姓名下同时标注中国科大、上海创智学院和京东。本人履历明确论文公开处于京东科研实习期，具名列中国科大导师赵峰及共同导师 Jiaqi Wang；二人均为合著者。',
      advising: [ '校内博士导师', '张景皓本人将赵峰列为中国科大博士导师。', 'https://jinghaoleven.github.io/' ]
    },
    {
      id: 'ant-orientation-zju-liao',
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ 'Yiyi Liao', '浙江大学教师、X-D Lab 负责人，同篇署名浙江大学。', 'https://yiyiliao.github.io/' ],
      employee: [ '沈渝钧 · Yujun Shen', '研究期间担任蚂蚁集团资深研究科学家，原文署蚂蚁集团，是学生该段实习的企业导师。', 'https://shenyujun.github.io/' ],
      student: [ 'Yichong Lu', '2023 至 2026 年在浙大攻读硕士，2025 年 1 至 10 月在蚂蚁集团由 Yujun Shen 指导做科研实习。', 'https://yichonglu.github.io/' ],
      title: 'Orientation Matters: Making 3D Generative Models Orientation-Aligned',
      short: 'Orientation Matters',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2506.08640v2',
      extra: [
        [ 'NeurIPS 正式会议索引', 'https://papers.nips.cc/paper_files/paper/2025/hash/da75d2bbf862b86f10241d0887613b41-Abstract-Conference.html' ],
        [ '项目页', 'https://xdimlab.github.io/Orientation_Matters/' ],
        [ '预印本时间记录', 'https://arxiv.org/abs/2506.08640' ]
      ],
      evidence: '第一作者个人履历给出浙大硕士期、蚂蚁科研实习期及企业导师；原稿在该实习期间公开，具名列企业导师和两位实际硕士导师，并在致谢中列明蚂蚁集团对研究的支持。',
      advising: [ '校内硕士共同导师', 'Yichong Lu 本人主页将 Yiyi Liao 与 Huimin Yu 列为浙大硕士导师。本篇有两人同篇署名。', 'https://yichonglu.github.io/' ]
    },
    {
      id: 'bytedance-plenvdb-sjtu-chao-ma',
      company: '字节跳动',
      team: '视觉工程（Vision Engineering）',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '马超 · Chao Ma', '上海交通大学教师，论文以该校署名并任通讯作者。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/machao.html' ],
      employee: [ 'Xing Mei', '曾领导字节跳动视觉工程团队，论文以字节跳动署名并任通讯作者。', 'https://xingmei.io/' ],
      student: [ '严涵 · Han Yan', '2023 年获得上海交通大学本科学位，本科研究由马超指导；论文在其本科阶段完成，原文具名标注字节实习。', 'https://wolfball.github.io/' ],
      title: 'PlenVDB: Memory Efficient VDB-Based Radiance Fields for Fast Training and Rendering',
      short: 'PlenVDB',
      date: '2023-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Yan_PlenVDB_Memory_Efficient_VDB-Based_Radiance_Fields_for_Fast_Training_and_CVPR_2023_paper.pdf',
      extra: [ [ '项目及作者名单', 'https://plenvdb.github.io/' ] ],
      evidence: 'CVPR 首页注明第一作者严涵在字节跳动实习期间完成此项研究。学生履历确认本科阶段由马超指导，字节实习由 Xing Mei 与 Celong Liu 指导。三人均为同文作者。',
      advising: [ '本科阶段科研导师', '严涵的公开主页明确说明本科期间由马超指导，并另列同一教师为其后续博士导师。', 'https://wolfball.github.io/' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 通用智能体',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      employee: [ '钟宛君 · Wanjun Zhong', '2025 年加入字节 Seed 任资深研究员，负责通用智能体方向。Agent-World 署字节 Seed 并任通讯作者。', 'https://zhongwanjun.github.io/' ],
      student: [ '董冠霆 · Guanting Dong', '中国人民大学在读博士生，2026 年 3 月起在字节 Seed 通用智能体团队科研实习，具名企业导师为钟宛君和 Yujia Qin。', 'https://dongguanting.github.io/' ],
      title: 'Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence',
      short: 'Agent-World',
      date: '2026-04-20',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.18292v1',
      extra: [ [ '原文作者及实习脚注', 'https://arxiv.org/html/2604.18292' ], [ '公开项目主页', 'https://agent-tars-world.github.io/' ] ],
      evidence: '论文贡献声明将字节 Seed 实习脚注附于第一作者董冠霆名下。其公开履历列字节实习及校内共同导师，同文有两位中国人民大学导师和具名企业导师钟宛君。',
      advising: [ '博士共同导师', '董冠霆本人具名列窦志成和文继荣为人大博士导师。', 'https://dongguanting.github.io/' ],
      id: 'bytedance-agentworld-ruc-dou',
      faculty: [ '窦志成 · Zhicheng Dou', '中国人民大学高瓴人工智能学院教授，同篇署人大并任通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 通用智能体',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      employee: [ '钟宛君 · Wanjun Zhong', '2025 年加入字节 Seed 任资深研究员，负责通用智能体方向。Agent-World 署字节 Seed 并任通讯作者。', 'https://zhongwanjun.github.io/' ],
      student: [ '董冠霆 · Guanting Dong', '中国人民大学在读博士生，2026 年 3 月起在字节 Seed 通用智能体团队科研实习，具名企业导师为钟宛君和 Yujia Qin。', 'https://dongguanting.github.io/' ],
      title: 'Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence',
      short: 'Agent-World',
      date: '2026-04-20',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2604.18292v1',
      extra: [ [ '原文作者及实习脚注', 'https://arxiv.org/html/2604.18292' ], [ '公开项目主页', 'https://agent-tars-world.github.io/' ] ],
      evidence: '论文贡献声明将字节 Seed 实习脚注附于第一作者董冠霆名下。其公开履历列字节实习及校内共同导师，同文有两位中国人民大学导师和具名企业导师钟宛君。',
      advising: [ '博士共同导师', '董冠霆本人具名列窦志成和文继荣为人大博士导师。', 'https://dongguanting.github.io/' ],
      id: 'bytedance-agentworld-ruc-wen',
      faculty: [ '文继荣 · Ji-Rong Wen', '中国人民大学高瓴人工智能学院教授，论文以人大署名。', 'https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm' ]
    },
    {
      id: 'bytedance-dupo-nju-huang',
      company: '字节跳动',
      team: 'Seed · 跨语言智能体',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '黄书剑 · Shujian Huang', '南京大学计算机科学与技术系教授，论文署名南京大学并任通讯作者。', 'https://nlp.nju.edu.cn/huangsj/' ],
      employee: [
        '程善伯 · Shanbo Cheng',
        '字节 Seed 首席机器学习研究工程师，其履历列曾任跨语言智能体研究组负责人，同篇以字节 Seed 署名并任通讯作者。',
        'https://sites.google.com/view/chengshanbo/home'
      ],
      student: [ '佘帅杰 · Shuaijie She', '南京大学在读博士生，2024 年 4 月开始在字节参与跨语言模型研究实习。', 'https://ricardokevins.github.io/' ],
      title: 'DuPO: Enabling Reliable LLM Self-Verification via Dual Preference Optimization',
      short: 'DuPO',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2508.14460',
      extra: [ [ 'ICLR 正式论文信息', 'https://iclr.cc/virtual/2026/poster/10011746' ], [ '字节跨语言智能体项目', 'https://byteresearchcla.github.io/' ] ],
      evidence: '原文的具名脚注注明第一作者在字节 Seed 实习时完成该工作；其个人主页列出实习团队、研究、时间和学校导师。南京大学导师黄书剑与企业研究负责人程善伯同篇署名。',
      advising: [ '博士导师', '佘帅杰本人明确列黄书剑为其南京大学博士导师。', 'https://ricardokevins.github.io/' ]
    },
    {
      id: 'bytedance-aegis-thu-jidong-zhai',
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '翟季冬 · Jidong Zhai', '清华大学计算机系教师，论文以清华大学署名。', 'https://hpc.cs.tsinghua.edu.cn/en/info/1537/2711.htm' ],
      employee: [ '肖文聪 · Wencong Xiao', '字节 Seed 训练基础设施团队负责人，论文以字节跳动署名。', 'https://wencongxiao.github.io/' ],
      student: [
        'Kinman Lei',
        '2022 至 2026 年在清华大学读博，2024 年 9 月至 2026 年 6 月在字节 Seed 做大模型训练基础设施科研实习，2026 年 7 月转任企业研究员。',
        'https://kinman0224.github.io/'
      ],
      title: 'Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours',
      short: 'Safeguarding LLM Training',
      date: '2026-07',
      venue: 'USENIX OSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/osdi26-lei.pdf',
      extra: [ [ 'USENIX 正式论文索引', 'https://www.usenix.org/conference/osdi26/presentation/lei' ] ],
      evidence: '论文评估字节生产训练集群中的 AEGIS。学生个人履历记载其在清华读博时的 Seed 训练基础设施实习及该项研究。博士导师翟季冬与字节训练基础设施负责人肖文聪均为同篇作者。',
      advising: [ '博士导师', '学生公开履历具名确认翟季冬为清华博士导师。', 'https://kinman0224.github.io/' ]
    },
    {
      id: 'discover-prove-huawei-pku-ming-zhang',
      company: '华为',
      team: '基础大模型部 · 语言实验室',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '张铭 · Ming Zhang', '北京大学计算机学院数据科学与工程所教授、博士生导师，论文通讯作者。', 'https://cs.pku.edu.cn/info/1238/2063.htm' ],
      employee: [ 'Lifeng Shang', '学术主页明确列华为诺亚方舟实验室研究员，同篇 ACL 论文署华为。', 'https://sites.google.com/site/lifengshang/' ],
      student: [
        '刘成武 · Chengwu Liu',
        '北京大学计算机学院 2023 级博士生。北大校方确认他在华为基础大模型部语言实验室实习。',
        'https://dse.pku.edu.cn/news/xwdt/27f3da29e3d1495ab73d91d1e358dc9a.htm'
      ],
      title: 'Discover and Prove: An Open-source Agentic Framework for Hard Mode Automated Theorem Proving in Lean 4',
      short: 'Discover and Prove',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.3.pdf',
      extra: [
        [ '预印本第一作者的具名华为实习脚注', 'https://arxiv.org/html/2604.15839v1' ],
        [ 'ACL 正式出版索引', 'https://aclanthology.org/2026.acl-long.3/' ],
        [ '张铭实验室论文公告', 'https://pkudlib.github.io/' ]
      ],
      evidence: '2026 年 4 月预印本首页将华为实习脚注标在第一作者刘成武名下，明确本研究在华为实习期间完成。北京大学公告列明实习团队并将该篇 DAP 列作刘成武的研究成果。张铭及同期署华为的长期研究员 Lifeng Shang 同篇合著。',
      advising: [ '校内博士导师', '北京大学数据科学与工程研究所学生名录列刘成武为 2023 级博士生，具名注明导师为张铭。', 'https://dse.pku.edu.cn/rcpy/xyxs/9575e34fd76044cb8327daa3fb47b8a5.htm' ]
    },
    {
      id: 'memengine-huawei-ruc-xu-chen',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '陈旭 · Xu Chen', '中国人民大学高瓴人工智能学院副教授、博士生导师，论文通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/cx/index.htm' ],
      employee: [ '董振华 · Zhenhua Dong', '华为诺亚方舟实验室首席研究员，曾任 ACM RecSys 2024 产业联席主席，论文署名华为诺亚方舟实验室。', 'https://rgm-cikm23.github.io/' ],
      student: [ '张泽宇 · Zeyu Zhang', '中国人民大学高瓴人工智能学院博士生，2024 年 2 月至 2025 年 5 月在华为诺亚方舟实验室实习，具名列戴全宇和董振华为企业指导者。', 'https://zeyu-zhang.cn/' ],
      title: 'MemEngine: A Unified and Modular Library for Developing Advanced Memory of LLM-based Agents',
      short: 'MemEngine',
      date: '2025-04',
      venue: 'The Web Conference Companion',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2505.02099',
      extra: [
        [ 'ACM 正式出版索引', 'https://doi.org/10.1145/3701716.3715299' ],
        [ '校企研究团队对 MemEngine 系列成果的介绍', 'https://www.sohu.com/a/921685484_211762' ],
        [ 'ACM RecSys 2024 产业联席主席及企业署名', 'https://recsys.acm.org/wp-content/uploads/2024/10/RecSys_2024_Handbook_Bari_Italy_compressed.pdf' ],
        [ '作者公开的论文代码和项目历史', 'https://github.com/nuster1128/MemEngine' ]
      ],
      evidence: '张泽宇在华为诺亚方舟实习期间公开了该研究；他个人主页列出的两名企业实习指导者董振华、戴全宇均以该实验室署名同篇，校内导师陈旭亦同篇且为通讯作者。系列成果介绍明确将 MemEngine 列为中国人大与华为诺亚方舟的合作。该篇没有单独的实习脚注。',
      advising: [ '校内博士导师', '学生学术主页的教育记录具名列陈旭为中国人民大学硕士、博士阶段的导师。', 'https://zeyu-zhang.cn/' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      employee: [ '肖文聪 · Wencong Xiao', '字节 Seed 大模型训练基础设施团队负责人，同篇以字节 Seed 署名并任通讯作者。', 'https://wencongxiao.github.io/' ],
      student: [ 'Wenxin Zheng', '上海交通大学软件学院在读博士。同篇正式稿明确注明第一作者在字节实习期间完成项目，并同时署上交大和字节 Seed。', 'https://peterzheng98.github.io/' ],
      title: 'SDCs in the Wild: Characterizing and Diagnosing SDC-Defective GPUs in Production LLM Training',
      short: 'SDCs in the Wild',
      date: '2026-07',
      venue: 'USENIX OSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/osdi26-zheng.pdf#page=2',
      extra: [ [ 'USENIX 正式会议索引', 'https://www.usenix.org/conference/osdi26/presentation/zheng' ] ],
      evidence: 'USENIX 正式稿第 2 页的星号脚注标注第一作者在字节实习期间开展本研究。本人主页列出两位同篇上交大导师，企业负责人肖文聪亦在作者表中。',
      advising: [ '博士共同导师', '学生的公开主页具名列出陈海波、臧斌宇和古金宇为博士导师。本篇包含陈海波和古金宇。', 'https://peterzheng98.github.io/' ],
      id: 'bytedance-sdc-sjtu-haibo-chen',
      faculty: [ '陈海波 · Haibo Chen', '上海交通大学软件学院教授、博士生导师，论文以上海交大署名。', 'https://ipads.sjtu.edu.cn/pub/members/haibo_chen' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      employee: [ '肖文聪 · Wencong Xiao', '字节 Seed 大模型训练基础设施团队负责人，同篇以字节 Seed 署名并任通讯作者。', 'https://wencongxiao.github.io/' ],
      student: [ 'Wenxin Zheng', '上海交通大学软件学院在读博士。同篇正式稿明确注明第一作者在字节实习期间完成项目，并同时署上交大和字节 Seed。', 'https://peterzheng98.github.io/' ],
      title: 'SDCs in the Wild: Characterizing and Diagnosing SDC-Defective GPUs in Production LLM Training',
      short: 'SDCs in the Wild',
      date: '2026-07',
      venue: 'USENIX OSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/osdi26-zheng.pdf#page=2',
      extra: [ [ 'USENIX 正式会议索引', 'https://www.usenix.org/conference/osdi26/presentation/zheng' ] ],
      evidence: 'USENIX 正式稿第 2 页的星号脚注标注第一作者在字节实习期间开展本研究。本人主页列出两位同篇上交大导师，企业负责人肖文聪亦在作者表中。',
      advising: [ '博士共同导师', '学生的公开主页具名列出陈海波、臧斌宇和古金宇为博士导师。本篇包含陈海波和古金宇。', 'https://peterzheng98.github.io/' ],
      id: 'bytedance-sdc-sjtu-jinyu-gu',
      faculty: [ '古金宇 · Jinyu Gu', '上海交通大学软件学院教员，论文以上海交大署名并任通讯作者。', 'https://ipads.sjtu.edu.cn/pub/members/jinyu_gu' ]
    },
    {
      id: 'kuaishou-vacot-hkust-luo',
      company: '快手',
      team: 'Kling · KwaiVGI',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '罗文寒 · Wenhan Luo', '香港科技大学副教授，以港科大署名并担任论文通讯作者。', 'https://researchportal.hkust.edu.hk/en/persons/wenhan-luo/' ],
      employee: [ 'Quande Liu', '快手 Kling 团队高级研究员，同篇署快手可灵并任通讯作者，学生本人列其为企业实习导师。', 'https://liuquande.github.io/' ],
      student: [ '叶紫璇 · Zixuan Ye', '2025 年 9 月起在港科大读博，2025 年 2 月至 2026 年 6 月在快手可灵做视频生成实习。', 'https://zixuan-ye.github.io/' ],
      title: 'Visual-Aware CoT: Achieving High-Fidelity Visual Consistency in Unified Models',
      short: 'Visual-Aware CoT',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2512.19686v1',
      extra: [
        [
          '港科大正式论文索引',
          'https://researchportal.hkust.edu.hk/en/publications/visual-aware-cot-achieving-high-fidelity-visual-consistency-in-un/'
        ],
        [ 'CVPR 版项目主页', 'https://zixuan-ye.github.io/VACoT/' ]
      ],
      evidence: '2025 年 12 月公开的预印本首页将可灵团队实习脚注附于叶紫璇。她的履历确认这时已在港科大博士在读，并列明快手导师 Quande Liu；同篇校内指导教师为罗文寒。',
      advising: [ '校内博士共同导师', '叶紫璇个人主页具名列罗文寒及 Hongbo Fu 为 2025 年 9 月起的港科大博士共同导师。', 'https://zixuan-ye.github.io/' ]
    },
    {
      id: 'tencent-dart-nju-dechuan-zhan',
      company: '腾讯',
      team: '语言模型推理研究',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '詹德川 · De-Chuan Zhan', '南京大学人工智能学院教授，同篇以南京大学署名。', 'https://www.lamda.nju.edu.cn/zhandc.MainPage.ashx' ],
      employee: [ 'Ziming Wu', '2020 年获得博士学位后在腾讯任研究员，港科大导师公开资料列明其任职，同篇以腾讯署名并担任通讯作者。', 'https://cse.hkust.edu.hk/~mxj/students.html' ],
      student: [ 'Nan Jiang', '2023 年进入南京大学人工智能学院攻读硕士；原文注明在腾讯的实习期间完成该项研究。', 'https://www.lamda.nju.edu.cn/jiangn/' ],
      title: 'DART: Distilling Autoregressive Reasoning to Silent Thought',
      short: 'DART',
      date: '2025-11',
      venue: 'EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.emnlp-main.256.pdf',
      extra: [
        [ '正式会议索引', 'https://aclanthology.org/2025.emnlp-main.256/' ],
        [ '企业作者的同期岗位记录', 'https://cse.hkust.edu.hk/~mxj/file/cv2024_XiaojuanMa-EN.pdf#page=18' ]
      ],
      evidence: '论文首页的具名脚注注明第一作者 Nan Jiang 在腾讯实习期间完成该项研究。学生履历具名列南大硕士导师，詹德川同篇署名；企业研究员 Ziming Wu 以腾讯署名并任通讯作者。',
      advising: [ '硕士共同导师', 'Nan Jiang 在南京大学公开学术主页具名列詹德川和叶翰嘉共同指导硕士研究。本篇列詹德川为作者。', 'https://www.lamda.nju.edu.cn/jiangn/' ]
    },
    {
      id: 'ant-orientation-zju-yu',
      company: '蚂蚁集团',
      team: '视觉生成研究',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '于慧敏 · Huimin Yu', '浙江大学信息与电子工程学院教授、博士生导师，论文署名浙大，也是该生硕士共同导师。', 'https://pi.zju.edu.cn/2019/1203/c69073a2551045/page.htm' ],
      employee: [ '沈渝钧 · Yujun Shen', '研究期间担任蚂蚁集团资深研究科学家，原文署蚂蚁集团，是学生该段实习的企业导师。', 'https://shenyujun.github.io/' ],
      student: [ 'Yichong Lu', '2023 至 2026 年在浙大攻读硕士，2025 年 1 至 10 月在蚂蚁集团由 Yujun Shen 指导做科研实习。', 'https://yichonglu.github.io/' ],
      title: 'Orientation Matters: Making 3D Generative Models Orientation-Aligned',
      short: 'Orientation Matters',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2506.08640v2',
      extra: [
        [ 'NeurIPS 正式会议索引', 'https://papers.nips.cc/paper_files/paper/2025/hash/da75d2bbf862b86f10241d0887613b41-Abstract-Conference.html' ],
        [ '项目页', 'https://xdimlab.github.io/Orientation_Matters/' ],
        [ '预印本时间记录', 'https://arxiv.org/abs/2506.08640' ],
        [ '原作者在浙大校刊的姓名与单位', 'https://www.zjujournals.com/eng/article/2021/1008-973X/202111002.shtml' ]
      ],
      evidence: '第一作者个人履历给出浙大硕士期、蚂蚁科研实习期及企业导师；原稿在该实习期间公开，具名列企业导师和两位实际硕士导师，并在致谢中列明蚂蚁集团对研究的支持。',
      advising: [ '校内硕士共同导师', 'Yichong Lu 本人主页将于慧敏和 Yiyi Liao 具名列为浙江大学硕士阶段导师。本篇有两人署名。', 'https://yichonglu.github.io/' ]
    },
    {
      id: 'adashift-huawei-nwpu-bin-guo',
      company: '华为',
      team: '华为云 · 边缘云研究',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '郭斌 · Bin Guo', '西北工业大学计算机学院教授、博士生导师，论文通讯作者。', 'https://jsj.nwpu.edu.cn/info/1508/8558.htm' ],
      employee: [ 'Zimu Zheng', '华为云边缘计算研发人员。IEEE 论文以华为云署名；此前已有同期华为云专利，也是第一作者明确列出的企业研究导师。', 'https://patents.google.com/patent/US20240054364A1/en' ],
      student: [ 'Ke Ma', '西北工业大学计算机学院博士生，2022 年 9 月至 2023 年 9 月在华为云任兼职学生研究员，研究持续视觉分布变化下的端云协同模型适应。', 'https://kadmkbl.github.io/' ],
      title: 'AdaShift: Anti-Collapse and Real-Time Deep Model Evolution for Mobile Vision Applications',
      short: 'AdaShift',
      date: '2025-10',
      venue: 'IEEE Transactions on Mobile Computing',
      area: '系统与推理优化',
      paper: 'https://doi.org/10.1109/TMC.2025.3572215',
      extra: [
        [ 'IEEE 供给 Crossref 的署名和出版记录', 'https://api.crossref.org/works/10.1109/TMC.2025.3572215' ],
        [ '同一企业作者的华为云同期论文', 'https://doi.org/10.1109/JIOT.2024.3396282' ]
      ],
      evidence: 'Ke Ma 公开履历具名列出华为云学生科研经历及企业导师 Zimu Zheng，经历中描述的端云协同、持续视觉分布变化和边端在线适应，与本篇研究方法一致。IEEE 同篇记录确认 Zimu Zheng 署华为云，Ke Ma 与其校内导师郭斌均署西北工业大学。',
      advising: [ '校内博士导师', 'Ke Ma 的学术主页具名列郭斌为西北工业大学博士导师。其另一位指导教师刘云浩并非此篇合著者。', 'https://kadmkbl.github.io/' ]
    },
    {
      company: '腾讯',
      school: '南京大学',
      studentSchool: '南京大学',
      id: 'cdap-tencent-cloud-nju-gu',
      team: '腾讯云小微（CSIG）',
      faculty: [ '顾庆 · Qing Gu', '南京大学计算机学院教授、博士生导师。', 'https://cs.nju.edu.cn/58/13/c2639a153619/page.psp' ],
      employee: [ '周青宇 · Qingyu Zhou', '研究期间为腾讯云小微 NLP 实验室资深研究员，指导程紫峰的腾讯实习，且在论文署名腾讯云小微。', 'https://www.qyzhou.com/' ],
      student: [ '程紫峰 · Zifeng Cheng', '2021 年 9 月至 2025 年 6 月为南京大学计算机学院博士生，2022 年 5 月至 2023 年 3 月在腾讯云小微实习。', 'https://zifengcheng.github.io/' ],
      title: 'Unifying Token- and Span-level Supervisions for Few-shot Sequence Labeling',
      short: 'CDAP',
      date: '2023-08',
      venue: 'ACM Transactions on Information Systems',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2307.07946',
      extra: [
        [ 'ACM 正式出版索引', 'https://doi.org/10.1145/3610403' ],
        [ '南京大学成果公告', 'https://njusz.nju.edu.cn/7b/d5/c52372a687061/page.htm' ],
        [ 'ACM 出版时间及署名记录', 'https://api.crossref.org/works/10.1145/3610403' ]
      ],
      evidence: '论文第一作者程紫峰的具名脚注说明此项研究于腾讯云小微实习期间完成。程紫峰列明该段实习与企业指导者周青宇；周青宇个人页面列该论文、本人资深研究员职位，并将程紫峰标记为受其指导的实习生。',
      advising: [ '博士共同导师', '学生公开履历明确列南京大学顾庆及蒋智威为博士导师，两位均为本文合著者。', 'https://zifengcheng.github.io/' ]
    },
    {
      company: '腾讯',
      school: '南京大学',
      studentSchool: '南京大学',
      id: 'cdap-tencent-cloud-nju-jiang',
      team: '腾讯云小微（CSIG）',
      faculty: [ '蒋智威 · Zhiwei Jiang', '南京大学计算机学院研究员、论文通讯作者。', 'https://cs.nju.edu.cn/jzw/' ],
      employee: [ '周青宇 · Qingyu Zhou', '研究期间为腾讯云小微 NLP 实验室资深研究员，指导程紫峰的腾讯实习，且在论文署名腾讯云小微。', 'https://www.qyzhou.com/' ],
      student: [ '程紫峰 · Zifeng Cheng', '2021 年 9 月至 2025 年 6 月为南京大学计算机学院博士生，2022 年 5 月至 2023 年 3 月在腾讯云小微实习。', 'https://zifengcheng.github.io/' ],
      title: 'Unifying Token- and Span-level Supervisions for Few-shot Sequence Labeling',
      short: 'CDAP',
      date: '2023-08',
      venue: 'ACM Transactions on Information Systems',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2307.07946',
      extra: [
        [ 'ACM 正式出版索引', 'https://doi.org/10.1145/3610403' ],
        [ '南京大学成果公告', 'https://njusz.nju.edu.cn/7b/d5/c52372a687061/page.htm' ],
        [ 'ACM 出版时间及署名记录', 'https://api.crossref.org/works/10.1145/3610403' ]
      ],
      evidence: '论文第一作者程紫峰的具名脚注说明此项研究于腾讯云小微实习期间完成。程紫峰列明该段实习与企业指导者周青宇；周青宇个人页面列该论文、本人资深研究员职位，并将程紫峰标记为受其指导的实习生。',
      advising: [ '博士共同导师', '学生公开履历明确列南京大学顾庆及蒋智威为博士导师，两位均为本文合著者。', 'https://zifengcheng.github.io/' ]
    },
    {
      company: '腾讯',
      school: '南京大学',
      studentSchool: '南京大学',
      id: 'afa-tencent-aipd-nju-gu',
      team: '人工智能平台部（AIPD）',
      faculty: [ '顾庆 · Qing Gu', '南京大学计算机学院教授、博士生导师。', 'https://cs.nju.edu.cn/58/13/c2639a153619/page.psp' ],
      employee: [ 'Kuan Tian', '腾讯研究科学家，同篇以腾讯 AIPD 署名；本人研究主页列该论文，SIGGRAPH Asia 官方会议资料亦以腾讯 AIPD 记录其单位。', 'https://tiankuan93.github.io/' ],
      student: [ '王聪 · Cong Wang', '2021 年 9 月至 2025 年 12 月为南京大学计算机学院博士生；2023 年 5 月至 2024 年 5 月在腾讯研究实习，研究 AIGC。', 'https://tenvence.github.io/' ],
      title: 'Ensembling Diffusion Models via Adaptive Feature Aggregation',
      short: 'AFA',
      date: '2025-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2025/file/94e845868a9ace4bc239d0c529d32f4c-Paper-Conference.pdf',
      extra: [
        [ '2024 年同篇预印本', 'https://arxiv.org/abs/2405.17082' ],
        [ '同期腾讯 AIPD 署名', 'https://sa2025.conference-schedule.org/presentation/?id=papers_1332&sess=sess146' ],
        [ '南京大学团队录用记录', 'https://isetnju.github.io/' ]
      ],
      evidence: 'ICLR 正式版在王聪姓名旁加注，明确工作于腾讯 AIPD 实习期间完成。本人主页记载 2023 至 2024 年腾讯研究实习和南京大学学籍。两位南京大学导师及腾讯研究员 Kuan Tian 都是正式版作者。',
      advising: [ '博士共同导师', '学生公开履历明确列南京大学顾庆及蒋智威为博士导师，两位均为本文合著者。', 'https://tenvence.github.io/' ]
    },
    {
      company: '腾讯',
      school: '南京大学',
      studentSchool: '南京大学',
      id: 'afa-tencent-aipd-nju-jiang',
      team: '人工智能平台部（AIPD）',
      faculty: [ '蒋智威 · Zhiwei Jiang', '南京大学计算机学院研究员、论文通讯作者。', 'https://cs.nju.edu.cn/jzw/' ],
      employee: [ 'Kuan Tian', '腾讯研究科学家，同篇以腾讯 AIPD 署名；本人研究主页列该论文，SIGGRAPH Asia 官方会议资料亦以腾讯 AIPD 记录其单位。', 'https://tiankuan93.github.io/' ],
      student: [ '王聪 · Cong Wang', '2021 年 9 月至 2025 年 12 月为南京大学计算机学院博士生；2023 年 5 月至 2024 年 5 月在腾讯研究实习，研究 AIGC。', 'https://tenvence.github.io/' ],
      title: 'Ensembling Diffusion Models via Adaptive Feature Aggregation',
      short: 'AFA',
      date: '2025-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2025/file/94e845868a9ace4bc239d0c529d32f4c-Paper-Conference.pdf',
      extra: [
        [ '2024 年同篇预印本', 'https://arxiv.org/abs/2405.17082' ],
        [ '同期腾讯 AIPD 署名', 'https://sa2025.conference-schedule.org/presentation/?id=papers_1332&sess=sess146' ],
        [ '南京大学团队录用记录', 'https://isetnju.github.io/' ]
      ],
      evidence: 'ICLR 正式版在王聪姓名旁加注，明确工作于腾讯 AIPD 实习期间完成。本人主页记载 2023 至 2024 年腾讯研究实习和南京大学学籍。两位南京大学导师及腾讯研究员 Kuan Tian 都是正式版作者。',
      advising: [ '博士共同导师', '学生公开履历明确列南京大学顾庆及蒋智威为博士导师，两位均为本文合著者。', 'https://tenvence.github.io/' ]
    },
    {
      id: 'alibaba-qwen-image-flash-hkustgz-zeke-xie',
      company: '阿里巴巴',
      team: '通义千问 · Qwen Image',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [
        '谢泽柯 · Zeke Xie',
        '香港科技大学（广州）数据科学与分析学域教师，第三版以港科大（广州）署名。',
        'https://dsa.hkust-gz.edu.cn/wp-content/uploads/2025/04/DSA_REU_Research-Project_Zeke-Xie.pdf'
      ],
      employee: [
        '周靖人 · Jingren Zhou',
        '阿里巴巴集团高级副总裁、首席 AI 架构师及通义基础模型业务负责人，同篇署 Qwen Image Group。',
        'https://data.alibabagroup.com/ecms-files/1514386754/b0f928b2-88f0-469d-905e-a714d19fb913/2026%20SEC%20Form%2020-F.pdf'
      ],
      student: [ 'Zikai Zhou', '香港科技大学（广州）在读研究型硕士，自 2026 年 3 月在阿里 Qwen Image 基础模型团队科研实习。', 'https://klayand.github.io/' ],
      title: 'Qwen-Image-Flash: Rethinking the Training Recipe for Few-Step Distillation',
      short: 'Qwen-Image-Flash',
      date: '2026-09-14',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2606.03746v3',
      extra: [
        [ '初版与修订时间', 'https://arxiv.org/abs/2606.03746' ],
        [ '阿里官方对周靖人职务的说明', 'https://home.alibabagroup.com/en-US/document-1582482069362049024' ]
      ],
      evidence: '学生把 Qwen Image Flash 少步蒸馏列为其阿里科研实习成果。2026 年 6 月发布初版，9 月第三版同列学生的校企署名、校内导师谢泽柯以及阿里企业作者周靖人。',
      advising: [ '硕士导师', 'Zikai Zhou 在其公开教育经历中具名列谢泽柯为港科大（广州）硕士导师。', 'https://klayand.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '通义千问 · 视觉智能（Qwen-VL）',
      school: '香港中文大学',
      employee: [ '白帅 · Shuai Bai', '阿里通义千问团队 Qwen-VL 与视觉智能负责人，原文署阿里 Token Hub。', 'https://shuaibai623.github.io/' ],
      title: 'BlenderWorld: Benchmarking Visual Agents for 3D Creation from Real-World References',
      short: 'BlenderWorld',
      date: '2026-10-14',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2610.23986',
      extra: [ [ '项目与逐人署名', 'https://blenderworld.github.io/' ], [ '阿里通义千问官方项目仓库', 'https://github.com/QwenLM/BlenderWorld' ] ],
      id: 'alibaba-blenderworld-cuhk-hongsheng-li',
      studentSchool: '香港中文大学',
      faculty: [
        '李鸿升 · Hongsheng Li',
        '香港中文大学电子工程系教师，同篇署香港中文大学。',
        'https://www.ee.cuhk.edu.hk/images/content/news-events/seminars/2025/20250915-hsli.pdf'
      ],
      student: [ '王宇驰 · Yuchi Wang', '2025 年 8 月起攻读香港中文大学博士，2026 年 6 月起在阿里通义基础模型团队做视觉智能体与 AI 编程科研实习。', 'https://wangyuchi369.github.io/' ],
      evidence: '王宇驰在论文双署港中大及阿里 Token Hub。本人履历列出对应领域、实习时间、该项成果与同篇阿里合作者白帅；其校内博士导师李鸿升同篇署名。',
      advising: [ '博士共同导师', '学生公开履历明确列李鸿升和王晓刚为港中大博士导师；李鸿升为本文作者。', 'https://wangyuchi369.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '通义千问 · 视觉智能（Qwen-VL）',
      school: '香港中文大学',
      employee: [ '白帅 · Shuai Bai', '阿里通义千问团队 Qwen-VL 与视觉智能负责人，原文署阿里 Token Hub。', 'https://shuaibai623.github.io/' ],
      title: 'BlenderWorld: Benchmarking Visual Agents for 3D Creation from Real-World References',
      short: 'BlenderWorld',
      date: '2026-10-14',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2610.23986',
      extra: [ [ '项目与逐人署名', 'https://blenderworld.github.io/' ], [ '阿里通义千问官方项目仓库', 'https://github.com/QwenLM/BlenderWorld' ] ],
      id: 'alibaba-blenderworld-cuhk-dahua-lin',
      studentSchool: '复旦大学',
      faculty: [ '林达华 · Dahua Lin', '香港中文大学信息工程系教授，本篇以港中大署名并任通讯作者。', 'https://www.ie.cuhk.edu.hk/faculty/lin-dahua/' ],
      student: [ 'Xilin Wei', '2024 年 9 月起在复旦大学攻读博士。2026 年 5 月起在阿里 Qwen 团队科研实习，企业导师包括同篇白帅。', 'https://wiselnn570.github.io/' ],
      evidence: '原文署 Xilin Wei 为复旦大学及阿里 Token Hub 作者。学生本人主页具名确认跨校导师、阿里科研实习和同篇企业导师，并列本项目为研究成果。',
      advising: [ '跨校博士指导', 'Xilin Wei 明确列林达华为其复旦博士阶段的指导教师。林达华的同篇机构是香港中文大学。', 'https://wiselnn570.github.io/' ]
    },
    {
      id: 'alibaba-opus-sjtu-linfeng-zhang',
      company: '阿里巴巴',
      team: '通义千问 · 模型预训练',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '张林峰 · Linfeng Zhang', '上海交通大学人工智能学院助理教授，原文以上海交大 EPIC Lab 署名并任通讯作者。', 'https://en.zhiyuan.sjtu.edu.cn/en/faculty/958/detail' ],
      employee: [ '刘大一恒 · Dayiheng Liu', '2021 年起在阿里巴巴达摩院任算法专家，同篇署阿里通义千问并使用企业邮箱。', 'https://liudayiheng.github.io/' ],
      student: [ '王少博 · Shaobo Wang', '上海交通大学在读博士，预印本具名说明本项工作在阿里 Qwen 实习期间完成，正式论文列上海交大和阿里双署名。', 'https://github.com/gszfwsb' ],
      title: 'OPUS: Towards Efficient and Principled Data Selection in Large Language Model Pre-training in Every Iteration',
      short: 'OPUS',
      date: '2026-07',
      venue: 'ICML',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2602.05400v1',
      extra: [ [ 'ICML 正式会议论文索引', 'https://proceedings.mlr.press/v306/wang26gc.html' ] ],
      evidence: '预印本首页标注第一作者在阿里通义千问实习期间完成此项研究。学生学术资料具名确认张林峰为在读博士导师，张林峰和阿里算法专家刘大一恒同篇署名并任通讯作者。',
      advising: [ '博士导师', '王少博在个人学术资料中区分博士导师张林峰和此前的硕士导师严骏驰。', 'https://github.com/gszfwsb' ]
    },
    {
      id: 'bytedance-mmemb-r1-cuhk-hongsheng-li',
      company: '字节跳动',
      team: '抖音 · 基础多模态模型',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [
        '李鸿升 · Hongsheng Li',
        '香港中文大学电子工程系教师，同篇署香港中文大学。',
        'https://www.ee.cuhk.edu.hk/images/content/news-events/seminars/2025/20250915-hsli.pdf'
      ],
      employee: [ 'Dingkang Yang', '2025 年 4 月至 12 月以 Principal Researcher 身份在字节基础模型组工作，与学生的研究实习重叠，论文署字节及复旦。', 'https://ydk122024.github.io/' ],
      student: [ '王宇驰 · Yuchi Wang', '2025 年 8 月起攻读香港中文大学博士，2025 年 6 月至 2026 年 4 月在抖音基础多模态模型团队科研实习。', 'https://wangyuchi369.github.io/' ],
      title: 'MMEmb-R1: Reasoning-Enhanced Multimodal Embedding with Pair-Aware Selection and Adaptive Control',
      short: 'MMEmb-R1',
      date: '2026-10',
      venue: 'EMNLP',
      area: '视觉与多模态',
      paper: 'https://aclanthology.org/2026.emnlp-main.2419.pdf',
      extra: [ [ '2026 年 4 月预印本', 'https://arxiv.org/abs/2604.06156' ] ],
      evidence: '正式论文首页将字节实习脚注附于王宇驰名下。其履历列港中大读博、具名博士导师和在抖音实习与 Dingkang Yang 合作，后两人均在论文作者表中。企业任职为其与学生研究重叠期间的身份。',
      advising: [ '博士共同导师', '学生履历明确列李鸿升为其港中大博士导师之一。', 'https://wangyuchi369.github.io/' ]
    },
    {
      school: '复旦大学',
      studentSchool: '复旦大学',
      area: '视觉与多模态',
      advising: [ '博士共同导师', '学生个人学术主页具名列吴祖煊和姜育刚为其复旦大学博士导师。两位均为该篇合著者。', 'https://gulucaptain.github.io/' ],
      id: 'ct1-tencent-fudan-wu',
      company: '腾讯',
      team: '广告营销服务（AMS）',
      faculty: [ '吴祖煊 · Zuxuan Wu', '复旦大学教师、博士生导师，研究期间任计算机学院副教授。', 'https://alumni.fudan.edu.cn/37/df/c14596a669663/page.htm' ],
      employee: [ 'Yeying Jin', '2023 年 11 月起在腾讯任 Staff Researcher、研究负责人；个人成果清单列本篇，论文以腾讯署名。其常设团队为腾讯 IEG Global。', 'https://jinyeying.github.io/' ],
      student: [ '赵浩宇 · Haoyu Zhao', '复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队以青云计划研究实习生身份开展研究。', 'https://gulucaptain.github.io/' ],
      title: 'CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation',
      short: 'CT-1',
      date: '2026-11',
      venue: 'ACM Multimedia',
      paper: 'https://arxiv.org/html/2604.09201v1',
      extra: [
        [ 'ACM Multimedia 正式会议议程及作者单位', 'https://2026.acmmm.org/site/ACMMM2026_Full_Programme.pdf' ],
        [ '复旦大学确认赵浩宇的博士年级', 'https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm' ],
        [ '腾讯项目负责人顾佳熙的同企业项目及通信记录', 'https://tencent.github.io/MimicMotion/' ]
      ],
      evidence: '预印本首页的符号指向赵浩宇，明确本篇在腾讯青云计划实习期间完成；他本人明确该段实习所属团队为 AMS，论文正式议程列他与两位复旦导师同篇。企业项目负责人是顾佳熙；另有具名长期腾讯研究负责人 Yeying Jin 同篇。'
    },
    {
      school: '复旦大学',
      studentSchool: '复旦大学',
      area: '视觉与多模态',
      advising: [ '博士共同导师', '学生个人学术主页具名列吴祖煊和姜育刚为其复旦大学博士导师。两位均为该篇合著者。', 'https://gulucaptain.github.io/' ],
      id: 'ct1-tencent-fudan-jiang',
      company: '腾讯',
      team: '广告营销服务（AMS）',
      faculty: [ '姜育刚 · Yu-Gang Jiang', '复旦大学计算机领域教授，论文合著者。', 'https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp' ],
      employee: [ 'Yeying Jin', '2023 年 11 月起在腾讯任 Staff Researcher、研究负责人；个人成果清单列本篇，论文以腾讯署名。其常设团队为腾讯 IEG Global。', 'https://jinyeying.github.io/' ],
      student: [ '赵浩宇 · Haoyu Zhao', '复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队以青云计划研究实习生身份开展研究。', 'https://gulucaptain.github.io/' ],
      title: 'CT-1: Vision-Language-Camera Models Transfer Spatial Reasoning Knowledge to Camera-Controllable Video Generation',
      short: 'CT-1',
      date: '2026-11',
      venue: 'ACM Multimedia',
      paper: 'https://arxiv.org/html/2604.09201v1',
      extra: [
        [ 'ACM Multimedia 正式会议议程及作者单位', 'https://2026.acmmm.org/site/ACMMM2026_Full_Programme.pdf' ],
        [ '复旦大学确认赵浩宇的博士年级', 'https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm' ],
        [ '腾讯项目负责人顾佳熙的同企业项目及通信记录', 'https://tencent.github.io/MimicMotion/' ]
      ],
      evidence: '预印本首页的符号指向赵浩宇，明确本篇在腾讯青云计划实习期间完成；他本人明确该段实习所属团队为 AMS，论文正式议程列他与两位复旦导师同篇。企业项目负责人是顾佳熙；另有具名长期腾讯研究负责人 Yeying Jin 同篇。'
    },
    {
      school: '复旦大学',
      studentSchool: '复旦大学',
      area: '视觉与多模态',
      advising: [ '博士共同导师', '学生个人学术主页具名列吴祖煊和姜育刚为其复旦大学博士导师。两位均为该篇合著者。', 'https://gulucaptain.github.io/' ],
      id: 'magdiff-huawei-fudan-jiang',
      company: '华为',
      team: '诺亚方舟实验室',
      faculty: [ '姜育刚 · Yu-Gang Jiang', '复旦大学计算机领域教授，论文合著者。', 'https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp' ],
      employee: [ '徐航 · Hang Xu', '博士毕业后于 2018 年加入华为，正式论文署华为诺亚方舟实验室。', 'https://xuhangcn.github.io/' ],
      student: [ '赵浩宇 · Haoyu Zhao', '复旦大学 2022 级博士生，2023 年 3 月至 2025 年 3 月在华为诺亚方舟实验室上海团队实习，研究生成式 AI。', 'https://gulucaptain.github.io/' ],
      title: 'MagDiff: Multi-Alignment Diffusion for High-Fidelity Video Generation and Editing',
      short: 'MagDiff',
      date: '2024-09',
      venue: 'ECCV',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02738.pdf',
      extra: [
        [ '学生公开的 MagDiff 校企项目主页', 'https://gulucaptain.github.io/videoassembler/' ],
        [ '2023 年 11 月实习期间的原始预印本', 'https://arxiv.org/abs/2311.17338' ],
        [ '复旦大学确认赵浩宇的博士年级', 'https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm' ]
      ],
      evidence: '赵浩宇本人列出华为诺亚方舟生成式 AI 实习的起止月并将 MagDiff 列为成果；以他署名发布的项目主页明确把本项工作列为复旦大学与华为诺亚方舟合作，首篇预印本发布于其华为实习中。两位复旦导师和华为研究员徐航同篇。'
    },
    {
      id: 'evalverse-tencent-hkust-rao',
      company: '腾讯',
      team: '腾讯视频 AI 技术中心（PCG）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [
        '饶安逸 · Anyi Rao',
        '香港科技大学艺术与机器创意学部助理教授，本篇通讯作者。',
        'https://cse.hkust.edu.hk/admin/people/faculty/?a=VG&c=joint_appointments&d=textview'
      ],
      employee: [ 'Alan Zhao', '腾讯视频 AI 技术中心主任，主管视频生成等研究，论文同篇署腾讯。', 'https://sa2025.conference-schedule.org/contributor/?uid=042904' ],
      student: [ 'Songlin Yang', '香港科技大学 MMLab 博士生、腾讯视频 AI 中心学生研究员；2026 年 4 月入选腾讯青云计划。', 'https://songlin1998.github.io/' ],
      title: 'EvalVerse: Pipeline-Aware and Expert-Calibrated Benchmarking for Professional Cinematic Video Generation',
      short: 'EvalVerse',
      date: '2026-05',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2605.23271v1',
      extra: [ [ '项目记录与预印本日期', 'https://arxiv.org/abs/2605.23271' ], [ '学生、导师饶安逸及同一企业中心的另一篇合作', 'https://arxiv.org/html/2610.30926v1' ] ],
      evidence: '预印本第一作者 Songlin Yang 同时署港科大和腾讯，并被标为项目负责人；本人公开履历独立列有腾讯视频 AI 中心的学生研究岗位和该论文，且在首版发表前获腾讯青云项目支持。腾讯视频 AI 中心主任 Alan Zhao 同篇，两位港科大导师均在原文署名。',
      advising: [ '博士共同导师', '学生个人学术主页具名列饶安逸与傅红波为在港科大攻读博士时的导师，两位均为本文作者。', 'https://songlin1998.github.io/' ]
    },
    {
      id: 'evalverse-tencent-hkust-fu',
      company: '腾讯',
      team: '腾讯视频 AI 技术中心（PCG）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [
        '傅红波 · Hongbo Fu',
        '香港科技大学艺术与机器创意学部教授，本篇合著者。',
        'https://cse.hkust.edu.hk/admin/people/faculty/?a=VG&c=joint_appointments&d=textview'
      ],
      employee: [ 'Alan Zhao', '腾讯视频 AI 技术中心主任，主管视频生成等研究，论文同篇署腾讯。', 'https://sa2025.conference-schedule.org/contributor/?uid=042904' ],
      student: [ 'Songlin Yang', '香港科技大学 MMLab 博士生、腾讯视频 AI 中心学生研究员；2026 年 4 月入选腾讯青云计划。', 'https://songlin1998.github.io/' ],
      title: 'EvalVerse: Pipeline-Aware and Expert-Calibrated Benchmarking for Professional Cinematic Video Generation',
      short: 'EvalVerse',
      date: '2026-05',
      venue: 'arXiv',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2605.23271v1',
      extra: [ [ '项目记录与预印本日期', 'https://arxiv.org/abs/2605.23271' ], [ '学生、导师饶安逸及同一企业中心的另一篇合作', 'https://arxiv.org/html/2610.30926v1' ] ],
      evidence: '预印本第一作者 Songlin Yang 同时署港科大和腾讯，并被标为项目负责人；本人公开履历独立列有腾讯视频 AI 中心的学生研究岗位和该论文，且在首版发表前获腾讯青云项目支持。腾讯视频 AI 中心主任 Alan Zhao 同篇，两位港科大导师均在原文署名。',
      advising: [ '博士共同导师', '学生个人学术主页具名列饶安逸与傅红波为在港科大攻读博士时的导师，两位均为本文作者。', 'https://songlin1998.github.io/' ]
    },
    {
      id: 'hrbench-tencent-hkustgz-hao-liu',
      company: '腾讯',
      team: '人工智能平台部（AIPD）',
      school: '香港科技大学（广州）',
      studentSchool: '香港科技大学（广州）',
      faculty: [ '刘浩 · Hao Liu', '港科大（广州）人工智能学域教师、论文通讯作者。', 'https://ait.hkust-gz.edu.cn/about-ai/program-directors-and-coordinators/' ],
      employee: [
        '叶靖雯 · Jingwen Ye',
        '腾讯 AIPD 研发人员，论文及 SIGGRAPH 会议资料以腾讯 AIPD 署名；研究之前已参与同一企业的研发专利。',
        'https://s2025.conference-schedule.org/organization/?inst=8491162979695427896'
      ],
      student: [ 'Yansong Ning', '2025 年 9 月起为港科大（广州）在读博士，2026 年 3 月起为腾讯青云计划研究实习生。', 'https://yasning.github.io/homepage/' ],
      title: 'HRBench: Benchmarking and Understanding Thinking-Mode Switch Strategies in Hybrid-Reasoning LLMs',
      short: 'HRBench',
      date: '2026-05',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2605.28398v1',
      extra: [
        [ '腾讯公司持有的具名专利（欧洲专利局）', 'https://data.epo.org/publication-server/rest/v1.2/patents/EP4571756NWA1/document.pdf' ],
        [ '腾讯公司持有的具名专利（美国专利商标局）', 'https://patentsgazette.uspto.gov/week37/OG/html/1550-3/US12737045-20260915.html' ],
        [ '相同三方的另一项具名实习合作 VibeWorlding', 'https://usail-hkust.github.io/VibeWorlding-Gym/' ],
        [ '刘浩课题组的博士生名录', 'https://raymondhliu.github.io/students/' ]
      ],
      evidence: '论文首页将实习脚注标在第一作者 Yansong Ning 名下，明确研究在腾讯实习中完成。同篇企业署名列腾讯 AIPD，该学生和同一团队的 VibeWorlding 亦具名说明腾讯实习；个人履历将其整体实习列为腾讯青云计划混元项目。刘浩与叶靖雯为同篇合著者。',
      advising: [ '校内博士导师', '学生履历的博士教育记录具名列港科大（广州）刘浩为导师；其硕士联合导师熊辉不在该篇合著者中。', 'https://yasning.github.io/homepage/' ]
    },
    {
      id: 'ant-humansense-xjtu-wang',
      company: '蚂蚁集团',
      team: '多模态交互团队',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [
        '王乐 · Le Wang',
        '西安交通大学人工智能学院教授、博士生导师，论文以西安交大署名并为通讯作者。',
        'https://www.xjtu.edu.cn/jsnr.jsp?urltype=tree.TreeTempUrl&wbtreeid=1632&wbwbxjtuteacherid=3014'
      ],
      employee: [ 'Jingdong Chen', '2025 年公开会议资料列为蚂蚁集团资深算法专家，论文署蚂蚁集团。', 'https://hangzhou2025.gosim.org/speakers/jingdong-chen/' ],
      student: [
        'Zheng Qin',
        '西安交通大学人工智能与机器人研究所博士生，2025 年 3 月至 2026 年 6 月在蚂蚁多模态交互团队参与多模态大模型科研实习。',
        'https://qinzheng2000.github.io/qinzheng.github.io/'
      ],
      title: 'HumanSense: From Multimodal Perception to Empathetic Context-Aware Responses Through Reasoning MLLMs',
      short: 'HumanSense',
      date: '2026-01',
      venue: 'AAAI',
      area: '视觉与多模态',
      paper: 'https://ojs.aaai.org/index.php/AAAI/article/download/39685/43646',
      extra: [
        [ 'AAAI 论文目录', 'https://ojs.aaai.org/index.php/AAAI/article/view/39685' ],
        [ '2025 年 8 月预印本', 'https://arxiv.org/abs/2508.10576' ],
        [ '蚂蚁集团项目模型卡', 'https://huggingface.co/antgroup/HumanSense_Omni_Reasoning' ]
      ],
      evidence: 'AAAI 正式版列三位作者及各自单位，致谢明确列 Ant Group Research Intern Program；首版预印本公开于学生履历注明的蚂蚁多模态科研实习期，官方公司项目模型卡列该生为第一作者。',
      advising: [ '校内博士导师', 'Zheng Qin 在个人主页区分西安交大博士导师王乐和其他合作教师。王乐也是本篇通讯作者。', 'https://qinzheng2000.github.io/qinzheng.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '通义实验室 · 数据分析与智能实验室（DAIL）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      employee: [ '丁博林 · Bolin Ding', '2017 年加入阿里巴巴，现为通义数据分析与智能实验室资深总监及研究科学家，同篇署阿里集团。', 'https://bolinding.github.io/' ],
      student: [ 'Junkang Wu', '2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，2023 年 10 月至 2025 年 4 月在阿里通义实验室做科研实习。', 'https://junkangwu.github.io/' ],
      title: 'RePO: Understanding Preference Learning Through ReLU-Based Optimization',
      short: 'RePO · 偏好学习',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2503.07426v2',
      extra: [
        [
          'NeurIPS 正式会议索引',
          'https://papers.neurips.cc/paper_files/paper/2025/hash/3b7db05c0e383518d789b6e93131f1f0-Abstract-Conference.html'
        ],
        [ '2025 年 3 月预印本首发', 'https://arxiv.org/abs/2503.07426' ]
      ],
      evidence: 'PDF 首页在第一作者 Junkang Wu 名下标注该工作于阿里开展。该生公开履历确认阿里科研实习和同篇企业指导人员，首版在实习期间发布；两位校内导师和阿里企业研究员丁博林均为同篇作者。',
      advising: [ '博士共同导师', 'Junkang Wu 本人在教育经历中具名列何向南和王翔为中国科大博士导师。', 'https://junkangwu.github.io/' ],
      id: 'alibaba-repo-ustc-xiangnan-he',
      faculty: [ '何向南 · Xiangnan He', '中国科学技术大学教授、博士生导师，以中国科大署名并任通讯作者。', 'https://saids.ustc.edu.cn/2019/0604/c36359a382217/page.htm' ]
    },
    {
      company: '阿里巴巴',
      team: '通义实验室 · 数据分析与智能实验室（DAIL）',
      school: '中国科学技术大学',
      studentSchool: '中国科学技术大学',
      employee: [ '丁博林 · Bolin Ding', '2017 年加入阿里巴巴，现为通义数据分析与智能实验室资深总监及研究科学家，同篇署阿里集团。', 'https://bolinding.github.io/' ],
      student: [ 'Junkang Wu', '2021 年 9 月至 2026 年 6 月在中国科学技术大学读博，2023 年 10 月至 2025 年 4 月在阿里通义实验室做科研实习。', 'https://junkangwu.github.io/' ],
      title: 'RePO: Understanding Preference Learning Through ReLU-Based Optimization',
      short: 'RePO · 偏好学习',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2503.07426v2',
      extra: [
        [
          'NeurIPS 正式会议索引',
          'https://papers.neurips.cc/paper_files/paper/2025/hash/3b7db05c0e383518d789b6e93131f1f0-Abstract-Conference.html'
        ],
        [ '2025 年 3 月预印本首发', 'https://arxiv.org/abs/2503.07426' ]
      ],
      evidence: 'PDF 首页在第一作者 Junkang Wu 名下标注该工作于阿里开展。该生公开履历确认阿里科研实习和同篇企业指导人员，首版在实习期间发布；两位校内导师和阿里企业研究员丁博林均为同篇作者。',
      advising: [ '博士共同导师', 'Junkang Wu 本人在教育经历中具名列何向南和王翔为中国科大博士导师。', 'https://junkangwu.github.io/' ],
      id: 'alibaba-repo-ustc-xiang-wang',
      faculty: [ '王翔 · Xiang Wang', '中国科学技术大学教授，原文以中国科大署名并任通讯作者。', 'https://saids.ustc.edu.cn/2022/0321/c36359a549612/page.htm' ]
    },
    {
      id: 'zhipu-cogvlm-tsinghua-xu',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM-V',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '许斌 · Bin Xu', '清华大学计算机系研究员、博士生导师，以清华大学署名。', 'https://www.cs.tsinghua.edu.cn/info/1111/5271.htm' ],
      employee: [ '丁铭 · Ming Ding', '斯坦福 CS25 课程在 2024 年 5 月列为智谱研究科学家并注明其参与 CogVLM，原文为智谱通讯作者。', 'https://web.stanford.edu/class/cs25/past/cs25-v4/' ],
      student: [ '齐济 · Ji Qi', '2025 年获清华大学计算机系博士学位。CogVLM 于其博士期间首次公开，正式版列清华与智谱双署名。', 'https://qijimrc.github.io/' ],
      title: 'CogVLM: Visual Expert for Pretrained Language Models',
      short: 'CogVLM',
      date: '2024-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf',
      extra: [
        [ 'NeurIPS 论文目录', 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/dc06d4d2792265fb5454a6092bfd5c6a-Abstract.html' ],
        [ '2023 年 11 月预印本', 'https://arxiv.org/abs/2311.03079' ]
      ],
      evidence: 'NeurIPS 正式版首页脚注列明包括齐济（JQ）在智谱实习期间完成工作。齐济博士阶段的具名导师许斌与智谱研究科学家丁铭共同署名。',
      advising: [ '校内博士导师', '齐济在个人主页列许斌、李涓子为清华大学博士期间的导师。', 'https://qijimrc.github.io/' ]
    },
    {
      id: 'ant-zooming-sjtu-huang',
      company: '蚂蚁集团',
      team: 'Machine Intelligence',
      school: '上海交通大学',
      studentSchool: '上海交通大学',
      faculty: [ '黄维然 · Weiran Huang', '自 2022 年 12 月起任上海交通大学计算机学院副教授、博士生导师，原文为上交大通讯作者。', 'https://cs.sjtu.edu.cn/en/jiaoshiml/huangweiran.html' ],
      employee: [ 'Weiqiang Wang', '蚂蚁集团官网列为机器智能部总经理；原文以蚂蚁集团署名。', 'https://www.antgroup.com/en/technology' ],
      student: [
        '魏来 · Lai Wei',
        '2024 年起在上海交通大学攻读博士；2025 至 2026 年在蚂蚁集团 Machine Intelligence 实习，由同篇企业项目负责人 Jun Lan 指导。',
        'https://waltonfuture.github.io/'
      ],
      title: 'Zooming without Zooming: Region-to-Image Distillation for Fine-Grained Multimodal Perception',
      short: 'Zooming without Zooming',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://proceedings.mlr.press/v306/wei26j.html',
      extra: [
        [ '预印本与具名实习脚注', 'https://arxiv.org/html/2602.11858#S1' ],
        [ '蚂蚁集团 inclusionAI 项目', 'https://github.com/inclusionAI/Zooming-without-Zooming' ]
      ],
      evidence: '首版预印本于 2026 年 2 月公开；论文首页标注第一作者魏来在蚂蚁集团实习期间完成研究，并列其校企双署名、企业项目负责人 Jun Lan 和通讯作者黄维然。',
      advising: [ '校内博士导师', '魏来主页明确区分上海交通大学博士导师黄维然、中关村学院联合培养导师和企业实习导师。', 'https://waltonfuture.github.io/' ]
    },
    {
      id: 'bytedance-uve-pku-xu-sun',
      company: '字节跳动',
      team: 'Seed · 视频生成',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '孙栩 · Xu Sun', '北京大学计算机学院长聘副教授，以北京大学署名。', 'https://cs.pku.edu.cn/info/1237/2102.htm' ],
      employee: [ 'Lu Jiang', '2024 年 2 月至 2025 年 6 月任字节跳动／TikTok 研究总监，同篇为字节 Seed 通讯作者。', 'https://www.lujiang.info/CV.pdf' ],
      student: [ 'Yuanxin Liu', '2022 年 9 月至 2026 年 6 月在北京大学读博，2024 年 7 月至 2025 年 3 月在字节 Seed 实习。', 'https://llyx97.github.io/' ],
      title: 'UVE: Are MLLMs Unified Evaluators for AI-Generated Videos?',
      short: 'UVE · 生成视频评估',
      date: '2025-12',
      venue: 'NeurIPS Datasets and Benchmarks',
      area: '视觉与多模态',
      paper: 'https://papers.neurips.cc/paper_files/paper/2025/file/1874f129f231fad431dd40119e3bd6af-Paper-Datasets_and_Benchmarks_Track.pdf',
      extra: [ [ '字节官方项目仓库', 'https://github.com/bytedance/UVE' ], [ '2025 年 3 月预印本', 'https://arxiv.org/abs/2503.09949' ] ],
      evidence: '原文第一作者署字节 Seed 和北京大学。本人履历列出同篇企业作者 Haoyuan Guo 和 Lu Jiang 为实习指导者；预印本首发于实习最后一个月，项目由字节团队发布。',
      advising: [ '博士导师', '学生主页具名列孙栩为北京大学博士导师。', 'https://llyx97.github.io/' ]
    },
    {
      id: 'moonshot-videoreasonbench-pku-xu-sun',
      company: '月之暗面（Kimi）',
      team: 'Kimi-VL',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '孙栩 · Xu Sun', '北京大学计算机学院长聘副教授，以北京大学署名。', 'https://cs.pku.edu.cn/info/1237/2102.htm' ],
      employee: [ 'Haoning Wu', '月之暗面 Kimi-VL 团队研究人员，主页列出团队工作、招聘与本篇研究。原文为月之暗面署名的项目负责人。', 'https://teowu.github.io/' ],
      student: [ 'Yuanxin Liu', '2022 年 9 月至 2026 年 6 月为北京大学博士生，2025 年 3 月至 12 月在月之暗面做科研实习。', 'https://llyx97.github.io/' ],
      title: 'VideoReasonBench: Can MLLMs Perform Vision-Centric Complex Video Reasoning?',
      short: 'VideoReasonBench',
      date: '2026-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://openreview.net/pdf?id=1Mblo6U8kp',
      extra: [ [ 'ICLR 会议索引', 'https://openreview.net/forum?id=1Mblo6U8kp' ], [ '2025 年 5 月首版', 'https://arxiv.org/abs/2505.23359' ] ],
      evidence: '第一作者同时署北京大学与月之暗面。本人履历具名列同篇 Haoning Wu 为企业实习指导者，企业指导者主页将该论文列为 Kimi-VL 研究成果。北大导师孙栩同篇署名。',
      advising: [ '博士导师', '学生主页具名列孙栩为北京大学博士导师。', 'https://llyx97.github.io/' ]
    },
    {
      id: 'bytedance-speechjudge-cuhksz-zhizheng-wu',
      company: '字节跳动',
      team: 'Seed · 语音生成',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '武执政 · Zhizheng Wu', '香港中文大学（深圳）教师，论文署港中大（深圳）。', 'https://shaw.cuhk.edu.cn/en/teacher/932' ],
      employee: [ 'Zhuo Chen', 'SALMA 2025 学术活动介绍其担任字节跳动研究经理、负责语音交互研发，原文以字节署名。', 'https://salmaworkshop.github.io/program/index.html' ],
      student: [
        '张雪遥 · Xueyao Zhang',
        '2022 年起在香港中文大学（深圳）读博；2024 年 12 月至 2025 年 8 月参与校企语音生成项目，2025 年 8 月至 2026 年 2 月在字节 Seed 实习。',
        'https://www.zhangxueyao.com/'
      ],
      title: 'SpeechJudge: Towards Human-Level Judgment for Speech Naturalness',
      short: 'SpeechJudge',
      date: '2026-04',
      venue: 'ICLR',
      area: '语音与音频',
      paper: 'https://arxiv.org/pdf/2511.07931',
      extra: [
        [
          'ICLR 正式论文索引',
          'https://proceedings.iclr.cc/paper_files/paper/2026/hash/8acd02d0c55edc3b47a7f9aa42b9cfae-Abstract-Conference.html'
        ],
        [ '同一学生与导师、企业研究员的 Vevo2 成果', 'https://arxiv.org/html/2508.16332v2' ]
      ],
      evidence: '学生的个人履历列出论文、字节 Seed 实习及校企语音生成课题，预印本在其实习期间公开。论文第一作者、校内导师武执政及字节研究经理 Zhuo Chen 均具名署名。',
      advising: [ '博士导师', '港中大（深圳）的博士生名录具名列出张雪遥的导师为武执政。', 'https://sds.cuhk.edu.cn/en/student-search?alphabet=131&page=0' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 语音生成',
      studentSchool: '香港中文大学（深圳）',
      employee: [ 'Zhuo Chen', 'SALMA 2025 学术活动介绍其担任字节跳动研究经理、负责语音交互研发，原文以字节署名。', 'https://salmaworkshop.github.io/program/index.html' ],
      student: [
        'Zhijun Liu',
        '2023 年 8 月起为港中大（深圳）计算机博士生，2025 年 1 月起在字节 Seed 从事自回归扩散语音模型的偏好优化，具名列同篇 Zhuo Chen 和 Dongya Jia。',
        'https://zjlww.github.io/'
      ],
      title: 'Direct Preference Optimization for Speech Autoregressive Diffusion Models',
      short: '语音扩散模型的直接偏好优化',
      date: '2026-05',
      venue: 'IEEE ICASSP',
      area: '语音与音频',
      paper: 'https://arxiv.org/pdf/2509.18928',
      extra: [
        [ 'ICASSP 会议索引与逐人署名', 'https://www.cmsworkshops.com/ICASSP2026/view_paper.php?PaperNum=18039&bare=1' ],
        [ 'IEEE 正式出版信息', 'https://doi.org/10.1109/ICASSP55912.2026.11464975' ]
      ],
      evidence: '学生把相关研究列在字节 Seed 实习经历中，并列两位同篇企业研究人员。2025 年 9 月预印本发表于实习期间。会议作者索引分别注明两位导师署港中大（深圳）与南京大学。',
      id: 'bytedance-tts-dpo-cuhksz-haizhou-li',
      school: '香港中文大学（深圳）',
      faculty: [ '李海洲 · Haizhou Li', '香港中文大学（深圳）教师，ICASSP 作者索引以该校列名。', 'https://sai.cuhk.edu.cn/en/teacher/102' ],
      advising: [ '博士共同导师', '学生主页具名列李海洲为港中大（深圳）博士阶段共同导师。', 'https://zjlww.github.io/' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 语音生成',
      studentSchool: '香港中文大学（深圳）',
      employee: [ 'Zhuo Chen', 'SALMA 2025 学术活动介绍其担任字节跳动研究经理、负责语音交互研发，原文以字节署名。', 'https://salmaworkshop.github.io/program/index.html' ],
      student: [
        'Zhijun Liu',
        '2023 年 8 月起为港中大（深圳）计算机博士生，2025 年 1 月起在字节 Seed 从事自回归扩散语音模型的偏好优化，具名列同篇 Zhuo Chen 和 Dongya Jia。',
        'https://zjlww.github.io/'
      ],
      title: 'Direct Preference Optimization for Speech Autoregressive Diffusion Models',
      short: '语音扩散模型的直接偏好优化',
      date: '2026-05',
      venue: 'IEEE ICASSP',
      area: '语音与音频',
      paper: 'https://arxiv.org/pdf/2509.18928',
      extra: [
        [ 'ICASSP 会议索引与逐人署名', 'https://www.cmsworkshops.com/ICASSP2026/view_paper.php?PaperNum=18039&bare=1' ],
        [ 'IEEE 正式出版信息', 'https://doi.org/10.1109/ICASSP55912.2026.11464975' ]
      ],
      evidence: '学生把相关研究列在字节 Seed 实习经历中，并列两位同篇企业研究人员。2025 年 9 月预印本发表于实习期间。会议作者索引分别注明两位导师署港中大（深圳）与南京大学。',
      id: 'bytedance-tts-dpo-nju-shuai-wang',
      school: '南京大学',
      faculty: [ 'Shuai Wang', '同期任南京大学副教授，ICASSP 正式会议索引列其单位为南京大学。', 'https://shuaiwang-nju.github.io/' ],
      advising: [ '跨校博士共同导师', '学生主页明确列 Shuai Wang 为在港中大（深圳）读博期间的导师；该教师亦列其为所指导的学生。', 'https://zjlww.github.io/' ]
    },
    {
      id: 'alibaba-oa-cbm-zju-shi-gu',
      company: '阿里巴巴',
      team: '达摩院 · 医疗 AI 实验室',
      school: '浙江大学',
      studentSchool: '电子科技大学',
      faculty: [ '顾实 · Shi Gu', '浙江大学计算机学院长聘副教授，原文署浙大并任通讯作者。', 'https://person.zju.edu.cn/gus' ],
      employee: [ 'Ling Zhang', '国际电联学术活动介绍其 2021 年加入阿里达摩院医疗 AI 实验室，任高级技术专家；同篇署阿里达摩院。', 'https://aiforgood.itu.int/speaker/ling-zhang/' ],
      student: [ '刘洋 · Yang Liu', '2022 年 12 月起在电子科技大学读博，2025 年 9 月至 2026 年 3 月在阿里达摩院医疗 AI 实验室实习。', 'https://yangyy-liu.github.io/' ],
      title: 'Rounded or Streamlined Head? Bridging Concept Bottleneck Models and Attribute-Described Object Parts',
      short: 'OA-CBM',
      date: '2026-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Liu_Rounded_or_Streamlined_Head_Bridging_Concept_Bottleneck_Models_and_Attribute-Described_CVPR_2026_paper.pdf',
      extra: [ [ '顾实课题组与电子科大学籍', 'https://guslab.org/team' ] ],
      evidence: '学生列出该论文及达摩院医疗 AI 实习课题，研究方向与论文的细粒度概念定位一致。原文第一作者署达摩院，校内指导教师顾实署浙大，同篇企业正式员工 Ling Zhang 署达摩院。',
      advising: [ '跨校博士指导', '学生公开履历具名列顾实为其在电子科技大学读博期间的指导教师。顾实课题组名录也列出该生及其电子科大学籍。', 'https://yangyy-liu.github.io/' ]
    },
    {
      id: 'ant-funreason-zju-shi-gu',
      company: '蚂蚁集团',
      team: 'Inclusion AI · AWorld',
      school: '浙江大学',
      studentSchool: '电子科技大学',
      faculty: [ '顾实 · Shi Gu', '浙江大学计算机学院长聘副教授，原文署浙大并任通讯作者。', 'https://person.zju.edu.cn/gus' ],
      employee: [
        'Chenyi Zhuang',
        '2025 年机器学习峰会列为蚂蚁集团 AWorld 算法负责人，原文以 AWorld 团队署名并留企业邮箱。',
        'https://www.ml-summit.org/speaker/1207?lang=en&uid=c1047'
      ],
      student: [ '刘洋 · Yang Liu', '2022 年 12 月起在电子科技大学读博，2025 年 6 月至 9 月在蚂蚁 Inclusion AI 实习，研究多轮工具调用数据合成。', 'https://yangyy-liu.github.io/' ],
      title: 'FunReason-MT Technical Report: Advanced Data Synthesis Solution for Real-world Multi-Turn Tool-use',
      short: 'FunReason-MT',
      date: '2025-10',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2510.24645',
      extra: [ [ '顾实课题组与电子科大学籍', 'https://guslab.org/team' ], [ '预印本版本记录', 'https://arxiv.org/abs/2510.24645' ] ],
      evidence: '刘洋履历把同篇列为本人作为核心贡献者的蚂蚁技术报告，与实习方向一致。原文中刘洋列为核心贡献者，浙江大学指导教师顾实和蚂蚁 AWorld 负责人均为通讯作者。',
      advising: [ '跨校博士指导', '学生公开履历具名列顾实为其在电子科技大学读博期间的指导教师。顾实课题组名录也列出该生及其电子科大学籍。', 'https://yangyy-liu.github.io/' ]
    },
    {
      id: 'alibaba-sc4d-hust-xiang-bai',
      company: '阿里巴巴',
      team: '达摩院 · 视觉生成',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '白翔 · Xiang Bai', '华中科技大学教授、博士生导师，原文以华中科技大学署名。', 'https://sse.hust.edu.cn/info/1083/3520.htm' ],
      employee: [ 'Chaohui Yu', '2020 年起任阿里达摩院算法专家，原文以达摩院和阿里集团署名。', 'https://richardych.github.io/' ],
      student: [ '吴子杰 · Zijie Wu', '华中科技大学博士生，2023 年 5 月至 2025 年 7 月在阿里达摩院做视觉生成科研实习。', 'https://jarrentwu1031.github.io/' ],
      title: 'SC4D: Sparse-Controlled Video-to-4D Generation and Motion Transfer',
      short: 'SC4D',
      date: '2024-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02109.pdf',
      extra: [
        [ 'ECCV 补充材料：第一作者实习脚注', 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02109-supp.pdf' ],
        [ '华中科大研究生导师名录', 'https://ei.hust.edu.cn/info/1177/7104.htm' ]
      ],
      evidence: '第一作者署华中科大和阿里达摩院，ECCV 补充材料标注论文在其达摩院实习期间完成，学生履历也将 SC4D 列为实习成果；华中科大导师及阿里算法专家同篇。',
      advising: [ '博士导师', '吴子杰主页具名列白翔为华中科技大学博士导师；学校 2022 年研究生名单也记载其较早的硕士指导关系。', 'https://jarrentwu1031.github.io/' ]
    },
    {
      id: 'tencent-rdmesh-hust-xiang-bai',
      company: '腾讯',
      team: '混元 3D 生成团队',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '白翔 · Xiang Bai', '华中科技大学教授、博士生导师，原文以华中科技大学署名。', 'https://sse.hust.edu.cn/info/1083/3520.htm' ],
      employee: [
        'Chunchao Guo',
        'SIGGRAPH Asia 2025 名录列为腾讯首席研究科学家、混元 3D 负责人，SIGGRAPH 2026 论文以腾讯混元署名。',
        'https://sa2025.conference-schedule.org/contributor/?uid=9990288653133639651'
      ],
      student: [ '吴子杰 · Zijie Wu', '华中科技大学博士生，2025 年 8 月至 2026 年 4 月在腾讯混元 3D 团队实习，研究网格动画及运动合成。', 'https://jarrentwu1031.github.io/' ],
      title: 'R-DMesh: Video-Guided 3D Animation via Rectified Dynamic Mesh Flow',
      short: 'R-DMesh',
      date: '2026-07',
      venue: 'SIGGRAPH',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2605.13838',
      extra: [
        [ 'SIGGRAPH 正式索引与署名', 'https://s2026.conference-schedule.org/presentation/?id=papers_795&sess=sess105' ],
        [ '华中科大成果报道', 'https://sse.hust.edu.cn/info/1096/4643.htm' ],
        [ '腾讯混元项目仓库', 'https://github.com/Tencent-Hunyuan/R-DMesh' ]
      ],
      evidence: '本人履历明确将 R-DMesh 列为腾讯混元 3D 实习期间的成果。会议名录核对第一作者校企双署名，华中科大导师及腾讯团队负责人同篇。',
      advising: [ '博士导师', '吴子杰主页具名列白翔为华中科技大学博士导师；学校 2022 年研究生名单也记载其较早的硕士指导关系。', 'https://jarrentwu1031.github.io/' ]
    },
    {
      id: 'kuaishou-rico-pku-xu-sun',
      company: '快手',
      team: '可灵 · 多模态理解组',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '孙栩 · Xu Sun', '北京大学计算机学院长聘副教授，以北京大学署名。', 'https://cs.pku.edu.cn/info/1237/2102.htm' ],
      employee: [ 'Yuanxing Zhang', '2024 年起在快手可灵研发，任多模态理解团队负责人，个人主页列本篇为团队成果，原文署快手。', 'https://longo11070001.github.io/' ],
      student: [
        'Yuchi Wang',
        '2022 至 2025 年为北京大学硕士生，2024 年 11 月至 2025 年 5 月在可灵多模态理解组实习，具名列同篇 Yuanxing Zhang 为合作者。',
        'https://wangyuchi369.github.io/'
      ],
      title: 'RICO: Improving Accuracy and Completeness in Image Recaptioning via Visual Reconstruction',
      short: 'RICO · 图像重描述',
      date: '2025-11',
      venue: 'EMNLP',
      area: '视觉与多模态',
      paper: 'https://aclanthology.org/2025.emnlp-main.1105.pdf',
      extra: [ [ 'EMNLP 正式出版索引', 'https://aclanthology.org/2025.emnlp-main.1105/' ], [ '2025 年 5 月首版', 'https://arxiv.org/abs/2505.22613' ] ],
      evidence: '学生列出与 Yuanxing Zhang 研究图像描述的快手实习及该论文；企业团队负责人也具名列出同篇成果，预印本在实习结束当月发表。北京大学硕士导师同篇为通讯作者。',
      advising: [ '硕士导师', '学生教育经历明确列孙栩为北京大学硕士导师。', 'https://wangyuchi369.github.io/' ]
    },
    {
      id: 'baidu-ma4div-ruc-mao',
      company: '百度',
      team: '百度搜索',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '毛佳昕 · Jiaxin Mao', '2023 年起任中国人民大学高瓴人工智能学院预聘副教授，论文为人大通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/mjx/index.htm' ],
      employee: [ '马德红 · Dehong Ma', '个人主页列为百度 Staff Algorithm Engineer，研究方向包括百度搜索相关性；论文署名百度。', 'https://madehong.github.io/' ],
      student: [
        '陈逸群 · Yiqun Chen',
        '2023 年 9 月起在中国人民大学读博。本人同期履历将 2023 年春开始的百度搜索算法实习列为持续中，覆盖 2024 年 3 月论文首版。',
        'https://github.com/chenyiqun/chenyiqun_pre.github.io'
      ],
      title: 'MA4DIV: Multi-Agent Reinforcement Learning for Search Result Diversification',
      short: 'MA4DIV',
      date: '2025-04',
      venue: 'The Web Conference',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/html/2403.17421v3',
      extra: [
        [ 'ACM 正式论文', 'https://doi.org/10.1145/3696410.3714862' ],
        [ '2024 年 3 月首版及百度数据说明', 'https://arxiv.org/html/2403.17421v1' ],
        [ '第一作者的论文代码和百度数据目录', 'https://github.com/chenyiqun/MA4DIV' ]
      ],
      evidence: '学生的同期履历列出百度搜索算法实习和 MA4DIV。论文首版明确用百度搜索的真实用户数据构建 DU-DIV；第一作者的项目仓库维护百度数据目录，学校导师和百度搜索算法工程师均共同署名。',
      advising: [ '校内博士导师', '陈逸群个人主页列明中国人民大学博士导师为毛佳昕。', 'https://chenyiqun.github.io/chenyiqun/' ]
    },
    {
      id: 'xiaohongshu-visa-buaa-kang',
      company: '小红书',
      team: '多模态算法组',
      school: '北京航空航天大学',
      studentSchool: '北京航空航天大学',
      faculty: [ '康国梁 · Guoliang Kang', '2022 年 2 月起任北京航空航天大学教授、博士生导师，论文以北航署名并为通讯作者。', 'https://dept3.buaa.edu.cn/info/1069/2362.htm' ],
      employee: [ 'Xiaolong Jiang', '同篇署名小红书；其合著期刊论文在利益声明中明示由小红书雇佣。', 'https://pure.uva.nl/ws/files/309086291/RADAR.pdf' ],
      student: [
        '颜慈霖 · Cilin Yan',
        '2022 年 9 月至 2025 年 1 月为北航硕士生；其主页列出在小红书多模态及生态算法组的实习，并记录 2023 年 9 月至 2024 年 12 月在小红书实习。',
        'https://cilinyan.github.io/'
      ],
      title: 'VISA: Reasoning Video Object Segmentation via Large Language Models',
      short: 'VISA',
      date: '2024-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02307.pdf',
      extra: [
        [ '2024 年 7 月首版', 'https://arxiv.org/abs/2407.11325' ],
        [ '第一作者的项目代码', 'https://github.com/cilinyan/VISA' ],
        [ '同一校企团队的同期视频分割研究', 'https://link.springer.com/article/10.1007/s11263-024-02076-w' ]
      ],
      evidence: '颜慈霖的实习记录覆盖首版公开，并将该成果列为本人代表论文。研究由同一小红书团队及其北航校内导师合著；原文无专门实习脚注，另有同期同一企业作者共同参与的同方向视频分割论文。',
      advising: [ '校内硕士导师', '颜慈霖在个人主页明确写明北航硕士阶段的导师为康国梁。', 'https://cilinyan.github.io/' ]
    },
    {
      company: '京东',
      team: '零售消费者 AI 技术部 · 后训练',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      employee: [ '毛科龙 · Kelong Mao', '京东资深研究工程师、消费者 AI 技术部后训练负责人，原文署名京东。', 'https://kyriemao.github.io/' ],
      student: [ 'Yiruo Cheng', '中国人民大学高瓴人工智能学院在读博士生；论文首页具名注明在京东实习期间完成研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ],
      title: 'ChatShopBuddy: Towards Reliable Conversational Shopping Agents via Reinforcement Learning',
      short: 'ChatShopBuddy',
      date: '2026-03',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2603.06065v1',
      extra: [ [ '预印本索引', 'https://arxiv.org/abs/2603.06065' ] ],
      evidence: '原文首页标注第一作者 Yiruo Cheng 在京东实习期间完成该研究。人大课题组个人页明确列两位同篇校内共同导师。',
      advising: [ '博士共同导师', '中国人民大学课题组的学生个人页具名确认窦志成和文继荣共同指导 Yiruo Cheng 的博士研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ],
      id: 'jd-chatshopbuddy-ruc-dou',
      faculty: [ '窦志成 · Zhicheng Dou', '中国人民大学高瓴人工智能学院长聘教授、博士生导师，原文为通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/dzc/' ]
    },
    {
      company: '京东',
      team: '零售消费者 AI 技术部 · 后训练',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      employee: [ '毛科龙 · Kelong Mao', '京东资深研究工程师、消费者 AI 技术部后训练负责人，原文署名京东。', 'https://kyriemao.github.io/' ],
      student: [ 'Yiruo Cheng', '中国人民大学高瓴人工智能学院在读博士生；论文首页具名注明在京东实习期间完成研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ],
      title: 'ChatShopBuddy: Towards Reliable Conversational Shopping Agents via Reinforcement Learning',
      short: 'ChatShopBuddy',
      date: '2026-03',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2603.06065v1',
      extra: [ [ '预印本索引', 'https://arxiv.org/abs/2603.06065' ] ],
      evidence: '原文首页标注第一作者 Yiruo Cheng 在京东实习期间完成该研究。人大课题组个人页明确列两位同篇校内共同导师。',
      advising: [ '博士共同导师', '中国人民大学课题组的学生个人页具名确认窦志成和文继荣共同指导 Yiruo Cheng 的博士研究。', 'https://ruc-nlpir.github.io/members/yiruo-cheng.html' ],
      id: 'jd-chatshopbuddy-ruc-wen',
      faculty: [ '文继荣 · Ji-Rong Wen', '2019 年起任中国人民大学高瓴人工智能学院长聘教授，原文署名中国人民大学。', 'https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm' ]
    },
    {
      id: 'pami-vdpo-huawei-hkust-li',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [
        '李小萌 · Xiaomeng Li',
        '香港科技大学电子及计算机工程系教师；港科大学位论文记录具名列她为同篇第一作者丁的博士导师。',
        'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=xiaomeng-li-eexmli'
      ],
      employee: [ 'Lanqing Hong', '香港城市大学 2019 年研讨会公告已列其为华为香港研究所研究科学家，本篇署华为诺亚方舟实验室，个人主页列其为该实验室高级研究员。', 'https://racheltechie.github.io/' ],
      student: [ 'Xinpeng Ding', '2021 年 9 月至 2025 年 7 月为香港科技大学博士生；2024 年 5 月至 2025 年 5 月在华为诺亚方舟实验室香港团队科研实习。', 'https://cipher1996.github.io/' ],
      title: 'PaMi-VDPO: Mitigating Video Hallucinations by Prompt-Aware Multi-Instance Video Preference Learning',
      short: 'PaMi-VDPO',
      date: '2025-04',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2504.05810v1',
      extra: [
        [
          '港科大博士学位论文记录：同一研究及具名导师',
          'https://researchportal.hkust.edu.hk/en/studentTheses/towards-domain-informed-surgical-video-learning-and-robust-video-/'
        ],
        [ '香港城市大学研讨会公告：华为研究岗位', 'https://www.cityu.edu.hk/seem/pdf/seemseminar1819_011.pdf' ],
        [ '同一华为团队与师生的期刊合著 HiLM-D', 'https://doi.org/10.1007/s11263-025-02433-3' ]
      ],
      evidence: '2025 年 4 月预印本发表于丁的华为诺亚方舟实习期间，同篇有其博士导师及四位华为诺亚方舟作者，其中 Lanqing Hong 为香港团队的长期研究员。港科大同年博士学位论文将 PaMi-VDPO 作为其在读成果；同一师生与同一组华为研究人员还有连续的视频大模型合作。预印本没有具名实习脚注。',
      advising: [
        '校内博士导师',
        '港科大学位论文记录和学生公开履历均具名确认，李小萌为丁在香港科技大学的博士导师。',
        'https://researchportal.hkust.edu.hk/en/studentTheses/towards-domain-informed-surgical-video-learning-and-robust-video-/'
      ]
    },
    {
      id: 'focusft-huawei-cuhk-pei-yu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Bei Yu', '香港中文大学计算机科学与工程学系教授，自 2023 年秋指导第一作者攻读博士；同篇署港中大。', 'https://www.cse.cuhk.edu.hk/~byu/' ],
      employee: [
        'Hui-Ling Zhen',
        '2019–2026 年就职于华为诺亚方舟实验室／基础大模型部香港团队，2025–2026 年为高级研究员；该篇同署华为。',
        'https://hui-ling-zhen.github.io/hui_ling_zhen/#experience'
      ],
      student: [ 'Zehua Pei', '2023 年秋起在香港中文大学攻读博士；2026 年 5 月 12 日的学术主页记录其当时在华为诺亚方舟实验室／基础大模型部科研实习，列长上下文微调为实习方向。', 'https://jarvispei.github.io/' ],
      title: 'FocuSFT: Bilevel Optimization for Dilution-Aware Long-Context Fine-Tuning',
      short: 'FocuSFT',
      date: '2026-05',
      venue: 'arXiv',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2605.09932v1',
      extra: [
        [
          '2026 年 5 月 12 日的学生主页原始版本：明确在华为实习和实习方向',
          'https://raw.githubusercontent.com/JarvisPei/JarvisPei.github.io/227e0e37d50af16445799e163a16f63d3a777240/index.html'
        ],
        [ '主页版本提交日期', 'https://github.com/JarvisPei/JarvisPei.github.io/commit/227e0e37d50af16445799e163a16f63d3a777240' ],
        [ '同一实习方向、同两位导师与华为团队的 PreMoE', 'https://arxiv.org/abs/2505.17639' ],
        [ '同一作者及同一华为香港团队的 SCOPE', 'https://arxiv.org/html/2512.15374v1' ],
        [ '华为研究岗位的同期会议介绍', 'https://www.eda2.com/iseda2024/tutorials.html' ]
      ],
      evidence: '2026 年 5 月 11 日发布的 FocuSFT 与两位港中大导师和三位华为作者合著。作者于次日更新的主页明确写明自己当时正在华为该部门科研实习，实习方向包含该论文研究的长上下文微调；同一团队还公开合著 PreMoE 和 SCOPE。',
      advising: [
        '博士共同导师',
        '学生学术主页具名列 Bei Yu 为博士导师、Sinno Jialin Pan 为共同导师；Bei Yu 校方主页的履历也把学生列在博士指导名单，入学时间为 2023 年秋。',
        'https://www.cse.cuhk.edu.hk/~byu/doc/cv-byu.pdf'
      ]
    },
    {
      id: 'focusft-huawei-cuhk-pei-pan',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '香港中文大学',
      studentSchool: '香港中文大学',
      faculty: [ 'Sinno Jialin Pan', '自 2022 年 12 月任香港中文大学计算机科学与工程学系教授，学生具名列为共同博士导师；同篇署港中大。', 'https://www.cse.cuhk.edu.hk/~sinnopan/' ],
      employee: [
        'Hui-Ling Zhen',
        '2019–2026 年就职于华为诺亚方舟实验室／基础大模型部香港团队，2025–2026 年为高级研究员；该篇同署华为。',
        'https://hui-ling-zhen.github.io/hui_ling_zhen/#experience'
      ],
      student: [ 'Zehua Pei', '2023 年秋起在香港中文大学攻读博士；2026 年 5 月 12 日的学术主页记录其当时在华为诺亚方舟实验室／基础大模型部科研实习，列长上下文微调为实习方向。', 'https://jarvispei.github.io/' ],
      title: 'FocuSFT: Bilevel Optimization for Dilution-Aware Long-Context Fine-Tuning',
      short: 'FocuSFT',
      date: '2026-05',
      venue: 'arXiv',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2605.09932v1',
      extra: [
        [
          '2026 年 5 月 12 日的学生主页原始版本：明确在华为实习和实习方向',
          'https://raw.githubusercontent.com/JarvisPei/JarvisPei.github.io/227e0e37d50af16445799e163a16f63d3a777240/index.html'
        ],
        [ '主页版本提交日期', 'https://github.com/JarvisPei/JarvisPei.github.io/commit/227e0e37d50af16445799e163a16f63d3a777240' ],
        [ '同一实习方向、同两位导师与华为团队的 PreMoE', 'https://arxiv.org/abs/2505.17639' ],
        [ '同一作者及同一华为香港团队的 SCOPE', 'https://arxiv.org/html/2512.15374v1' ],
        [ '华为研究岗位的同期会议介绍', 'https://www.eda2.com/iseda2024/tutorials.html' ]
      ],
      evidence: '2026 年 5 月 11 日发布的 FocuSFT 与两位港中大导师和三位华为作者合著。作者于次日更新的主页明确写明自己当时正在华为该部门科研实习，实习方向包含该论文研究的长上下文微调；同一团队还公开合著 PreMoE 和 SCOPE。',
      advising: [ '博士共同导师', '学生学术主页具名列 Bei Yu 为博士导师、Sinno Jialin Pan 为共同导师；Bei Yu 校方主页的履历也把学生列在博士指导名单，入学时间为 2023 年秋。', 'https://jarvispei.github.io/' ]
    },
    {
      company: '小红书',
      team: '社区推荐 · NoteLLM',
      studentSchool: '中国科学技术大学',
      employee: [
        '高龑 · Yan Gao',
        '2024 年 AICon 列为小红书生成式搜索负责人，2025 年 QCon 讲者资料直接注明其在小红书提出 NoteLLM 系列工作。论文署名小红书。',
        'https://qcon.infoq.cn/2025/shanghai/speaker/9825'
      ],
      student: [ '张超 · Chao Zhang', '在中国科学技术大学和香港城市大学联合培养攻读博士。论文和小红书旗下研发主体递交的同项目专利均具名列其为贡献者。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      title: 'NoteLLM-2: Multimodal Large Representation Models for Recommendation',
      short: 'NoteLLM-2',
      date: '2025-08',
      venue: 'KDD',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/html/2405.16789v2',
      extra: [
        [ 'KDD 正式版', 'https://doi.org/10.1145/3690624.3709440' ],
        [ 'NoteLLM-2 同项目企业专利（国家知识产权局公开文本）', 'https://patents.google.com/patent/CN118428363A/en' ],
        [ '西电就业网的小红书招聘主体记录', 'https://job.xidian.edu.cn/campus/view/id/748462' ],
        [ '课题组的企业研发资源说明', 'https://github.com/Applied-Machine-Learning-Lab/NoteLLM' ],
        [ '2024 年小红书生成式搜索负责人资料', 'https://www.infoq.cn/article/6BdsV5ZJyyZXbAP986Kd' ],
        [ '小红书 REDtech 同期分享转载', 'https://hub.baai.ac.cn/view/38139' ]
      ],
      evidence: '2024 年 5 月公开的首版列张超为第一作者，论文记录小红书线上业务实验。2024 年 5 月企业提交的专利直接写明 NoteLLM-2，并将张超、高龑、张浩鑫列为同一技术的发明人；高校课题组的项目仓库确认企业提供数据和计算资源。论文无实习脚注，企业参与依据为同项目的企业专利和作者公开材料。',
      advising: [ '博士联合指导', '张超个人主页明确列出中科大陈恩红、徐童和港城大赵翔宇为其联合培养博士导师；三位均署名本篇。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      id: 'xiaohongshu-notellm2-ustc-xu',
      school: '中国科学技术大学',
      faculty: [ '徐童 · Tong Xu', '中国科学技术大学特任教授、博士生导师，原文署名中科大，为通讯作者。', 'https://cs.ustc.edu.cn/2020/0905/c23236a460142/page.htm' ]
    },
    {
      company: '小红书',
      team: '社区推荐 · NoteLLM',
      studentSchool: '中国科学技术大学',
      employee: [
        '高龑 · Yan Gao',
        '2024 年 AICon 列为小红书生成式搜索负责人，2025 年 QCon 讲者资料直接注明其在小红书提出 NoteLLM 系列工作。论文署名小红书。',
        'https://qcon.infoq.cn/2025/shanghai/speaker/9825'
      ],
      student: [ '张超 · Chao Zhang', '在中国科学技术大学和香港城市大学联合培养攻读博士。论文和小红书旗下研发主体递交的同项目专利均具名列其为贡献者。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      title: 'NoteLLM-2: Multimodal Large Representation Models for Recommendation',
      short: 'NoteLLM-2',
      date: '2025-08',
      venue: 'KDD',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/html/2405.16789v2',
      extra: [
        [ 'KDD 正式版', 'https://doi.org/10.1145/3690624.3709440' ],
        [ 'NoteLLM-2 同项目企业专利（国家知识产权局公开文本）', 'https://patents.google.com/patent/CN118428363A/en' ],
        [ '西电就业网的小红书招聘主体记录', 'https://job.xidian.edu.cn/campus/view/id/748462' ],
        [ '课题组的企业研发资源说明', 'https://github.com/Applied-Machine-Learning-Lab/NoteLLM' ],
        [ '2024 年小红书生成式搜索负责人资料', 'https://www.infoq.cn/article/6BdsV5ZJyyZXbAP986Kd' ],
        [ '小红书 REDtech 同期分享转载', 'https://hub.baai.ac.cn/view/38139' ]
      ],
      evidence: '2024 年 5 月公开的首版列张超为第一作者，论文记录小红书线上业务实验。2024 年 5 月企业提交的专利直接写明 NoteLLM-2，并将张超、高龑、张浩鑫列为同一技术的发明人；高校课题组的项目仓库确认企业提供数据和计算资源。论文无实习脚注，企业参与依据为同项目的企业专利和作者公开材料。',
      advising: [ '博士联合指导', '张超个人主页明确列出中科大陈恩红、徐童和港城大赵翔宇为其联合培养博士导师；三位均署名本篇。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      id: 'xiaohongshu-notellm2-ustc-chen',
      school: '中国科学技术大学',
      faculty: [ '陈恩红 · Enhong Chen', '中国科学技术大学教授、博士生导师，同篇中科大作者。', 'https://iat.ustc.edu.cn/iat/x223/20200407/2400.html' ]
    },
    {
      company: '小红书',
      team: '社区推荐 · NoteLLM',
      studentSchool: '香港城市大学',
      employee: [
        '高龑 · Yan Gao',
        '2024 年 AICon 列为小红书生成式搜索负责人，2025 年 QCon 讲者资料直接注明其在小红书提出 NoteLLM 系列工作。论文署名小红书。',
        'https://qcon.infoq.cn/2025/shanghai/speaker/9825'
      ],
      student: [ '张超 · Chao Zhang', '在中国科学技术大学和香港城市大学联合培养攻读博士。论文和小红书旗下研发主体递交的同项目专利均具名列其为贡献者。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      title: 'NoteLLM-2: Multimodal Large Representation Models for Recommendation',
      short: 'NoteLLM-2',
      date: '2025-08',
      venue: 'KDD',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/html/2405.16789v2',
      extra: [
        [ 'KDD 正式版', 'https://doi.org/10.1145/3690624.3709440' ],
        [ 'NoteLLM-2 同项目企业专利（国家知识产权局公开文本）', 'https://patents.google.com/patent/CN118428363A/en' ],
        [ '西电就业网的小红书招聘主体记录', 'https://job.xidian.edu.cn/campus/view/id/748462' ],
        [ '课题组的企业研发资源说明', 'https://github.com/Applied-Machine-Learning-Lab/NoteLLM' ],
        [ '2024 年小红书生成式搜索负责人资料', 'https://www.infoq.cn/article/6BdsV5ZJyyZXbAP986Kd' ],
        [ '小红书 REDtech 同期分享转载', 'https://hub.baai.ac.cn/view/38139' ]
      ],
      evidence: '2024 年 5 月公开的首版列张超为第一作者，论文记录小红书线上业务实验。2024 年 5 月企业提交的专利直接写明 NoteLLM-2，并将张超、高龑、张浩鑫列为同一技术的发明人；高校课题组的项目仓库确认企业提供数据和计算资源。论文无实习脚注，企业参与依据为同项目的企业专利和作者公开材料。',
      advising: [ '博士联合指导', '张超个人主页明确列出中科大陈恩红、徐童和港城大赵翔宇为其联合培养博士导师；三位均署名本篇。', 'https://zcfinal.github.io/zclfe.github.io/' ],
      id: 'xiaohongshu-notellm2-cityu-zhao',
      school: '香港城市大学',
      faculty: [ '赵翔宇 · Xiangyu Zhao', '香港城市大学数据科学系教师，同篇署名香港城市大学。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ]
    },
    {
      id: 'alibaba-nezha-cityu-xiangyu-zhao',
      company: '阿里巴巴',
      team: '阿里妈妈（Alimama）',
      school: '香港城市大学',
      studentSchool: '香港城市大学',
      faculty: [ '赵翔宇 · Xiangyu Zhao', '香港城市大学数据科学系副教授，以港城大署名并任通讯作者。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ],
      employee: [ 'Jian Xu', '阿里妈妈首席算法架构师、阿里巴巴资深总监，原文署名阿里集团。', 'https://openreview.net/pdf/70344285d0f2f98baec78b3ab203069e8ca59a03.pdf' ],
      student: [ 'Yejing Wang', '当时为港城大数据科学博士生，2025 年 1 月起在阿里淘天集团实习。', 'https://dave-adamswang.github.io/' ],
      title: 'NEZHA: A Zero-sacrifice and Hyperspeed Decoding Architecture for Generative Recommendations',
      short: 'NEZHA · 生成式推荐',
      date: '2026-04',
      venue: 'The Web Conference',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/html/2511.18793v2',
      extra: [
        [ '港城大正式出版索引', 'https://scholars.cityu.edu.hk/en/publications/nezha-a-zero-sacrifice-and-hyperspeed-decoding-architecture-for-g/' ],
        [ '2025 年 11 月首版', 'https://arxiv.org/abs/2511.18793' ],
        [ '同一关系的 GFlowGR 论文及具名实习脚注', 'https://arxiv.org/html/2506.16114' ]
      ],
      evidence: '论文首页具名注明 Yejing Wang 在阿里实习期间完成研究，并记录成果自 2025 年 10 月用于淘宝。其本人主页把该时段列为淘天集团实习；港城大导师和阿里妈妈首席算法架构师均为同篇作者。',
      advising: [ '博士导师', '学生本人主页具名列赵翔宇为香港城市大学博士导师。', 'https://dave-adamswang.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '阿里云 · 飞天实验室（Apsara Lab）',
      school: '浙江大学',
      studentSchool: '浙江大学',
      employee: [
        'Jieping Ye',
        '同期论文的作者简介列为阿里飞天实验室负责人，原文以阿里云署名，也是第一作者具名的企业实习导师。',
        'https://eprints.lancs.ac.uk/id/eprint/229990/1/llafs_plus_plus.pdf'
      ],
      student: [ 'Kai Liu', '2020 年 9 月至 2025 年 12 月在浙江大学读博，2022 年 5 月至 2024 年 9 月在阿里云飞天实验室实习。', 'https://kail8.github.io/' ],
      title: 'Enhancing LLM’s Cognition via Structurization',
      short: 'Structurization',
      date: '2024-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://papers.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf',
      extra: [ [ '浙江大学同期导师名录', 'https://pi.zju.edu.cn/2023/0710/c68814a2782896/page.psp' ] ],
      evidence: 'NeurIPS 正式版在第一作者名下标注工作在阿里云科研实习期间完成。学生公开履历列出阿里实习团队、企业实习导师和两位浙大博士导师，三人均是同篇作者。',
      advising: [ '博士共同导师', '学生教育经历明确列周凡和陈耀武为浙大读博期间的两位导师。', 'https://kail8.github.io/' ],
      id: 'alibaba-structurization-zju-fan-zhou',
      faculty: [ '周凡 · Fan Zhou', '浙江大学教师及博士生导师，原文以浙江大学署名。', 'https://person.zju.edu.cn/fanzhou' ]
    },
    {
      company: '阿里巴巴',
      team: '阿里云 · 飞天实验室（Apsara Lab）',
      school: '浙江大学',
      studentSchool: '浙江大学',
      employee: [
        'Jieping Ye',
        '同期论文的作者简介列为阿里飞天实验室负责人，原文以阿里云署名，也是第一作者具名的企业实习导师。',
        'https://eprints.lancs.ac.uk/id/eprint/229990/1/llafs_plus_plus.pdf'
      ],
      student: [ 'Kai Liu', '2020 年 9 月至 2025 年 12 月在浙江大学读博，2022 年 5 月至 2024 年 9 月在阿里云飞天实验室实习。', 'https://kail8.github.io/' ],
      title: 'Enhancing LLM’s Cognition via Structurization',
      short: 'Structurization',
      date: '2024-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://papers.neurips.cc/paper_files/paper/2024/file/f169ec4d47933ea4896b994af8ff4f17-Paper-Conference.pdf',
      extra: [ [ '浙江大学同期导师名录', 'https://pi.zju.edu.cn/2023/0710/c68814a2782896/page.psp' ] ],
      evidence: 'NeurIPS 正式版在第一作者名下标注工作在阿里云科研实习期间完成。学生公开履历列出阿里实习团队、企业实习导师和两位浙大博士导师，三人均是同篇作者。',
      advising: [ '博士共同导师', '学生教育经历明确列周凡和陈耀武为浙大读博期间的两位导师。', 'https://kail8.github.io/' ],
      id: 'alibaba-structurization-zju-yaowu-chen',
      faculty: [ '陈耀武 · Yaowu Chen', '浙江大学教授、博士生导师，原文以浙江大学署名。', 'https://person.zju.edu.cn/0088219' ]
    },
    {
      id: 'alibaba-pflbackdoor-hkust-minhao-cheng',
      company: '阿里巴巴',
      team: '达摩院 · FederatedScope',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ 'Minhao Cheng', '2022 年 1 月至 2023 年 12 月任香港科技大学计算机系助理教授，原文署港科大。', 'https://cmhcbb.github.io/' ],
      employee: [ 'Yaliang Li', '2018 年 11 月加入阿里达摩院，后随团队归入通义实验室。原文以阿里集团署名。', 'https://sites.google.com/site/yaliangli/' ],
      student: [ 'Zeyu Qin', '2022 年秋起为港科大博士生，2022 年 6 月至 2023 年 5 月在阿里达摩院科研实习。', 'https://alan-qin.github.io/' ],
      title: 'Revisiting Personalized Federated Learning: Robustness Against Backdoor Attacks',
      short: '个性化联邦学习的后门鲁棒性',
      date: '2023-08',
      venue: 'KDD',
      area: '机器学习',
      paper: 'https://arxiv.org/html/2302.01677',
      extra: [
        [ 'KDD 2023 论文目录', 'https://kdd.org/kdd2023/wp-content/uploads/2023/08/toc.html' ],
        [ '阿里 FederatedScope 项目代码', 'https://github.com/alibaba/FederatedScope/tree/backdoor-bench' ]
      ],
      evidence: '原文具名说明第一作者在阿里实习期间完成工作，首版发表于其港科大读博和阿里实习重叠期，实验发布到阿里的 FederatedScope。校内导师和阿里研究人员均为同篇作者。',
      advising: [ '博士导师', '第一作者个人履历及教师主页都明确列出 Minhao Cheng 对其自 2022 年秋开始的博士指导。', 'https://cmhcbb.github.io/' ]
    },
    {
      id: 'bytedance-weakood-thu-shutao-xia',
      company: '字节跳动',
      team: 'Flow Security',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '夏树涛 · Shu-Tao Xia', '清华大学深圳国际研究生院教授、博士生导师，原文以清华署名。', 'https://www.sigs.tsinghua.edu.cn/xst/main.htm' ],
      employee: [ 'Yang Bai', '2024 年 8 月加入字节跳动任高级研发工程师，原文署字节，亦是第一作者具名的企业实习指导者。', 'https://bymavis.github.io/' ],
      student: [ '周愈轩 · Yuxuan Zhou', '2025 年 8 月起在清华攻读博士；2025 年 3 月起在字节 Flow Security 做科研实习。', 'https://yuxuan2003.github.io/' ],
      title: 'Why does Weak-OOD Help? A Further Step Towards Understanding Jailbreaking VLMs',
      short: 'Weak-OOD · 多模态安全',
      date: '2026-10',
      venue: 'EMNLP',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2511.08367',
      extra: [ [ 'EMNLP 正式出版索引', 'https://aclanthology.org/2026.emnlp-main.1980/' ] ],
      evidence: '学生个人主页列字节 Flow Security 科研实习、同篇企业实习指导者 Yang Bai 和该论文。2025 年 11 月首版中学生及其校内导师以清华署名，企业实习指导者以字节署名。',
      advising: [ '博士共同导师', '周愈轩本人具名列夏树涛为清华博士阶段导师。', 'https://yuxuan2003.github.io/' ]
    },
    {
      id: 'ant-nextforcing-hust-xin-yang',
      company: '蚂蚁集团',
      team: 'Robbyant',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      faculty: [ '杨欣 · Xin Yang', '华中科技大学教师，原文署华中科大并任共同通讯作者。', 'https://xinyang-hust.github.io/' ],
      employee: [ '沈宇君 · Yujun Shen', '蚂蚁集团高级研究科学家、Robbyant 首席科学家，原文署 Robbyant。', 'https://shenyujun.github.io/' ],
      student: [ '许刚伟 · Gangwei Xu', '华中科技大学博士生，2026 年 1 月至 7 月在蚂蚁集团 Robbyant 做具身智能科研实习。', 'https://gangweix.github.io/' ],
      title: 'Next Forcing: Causal World Modeling with Multi-Chunk Prediction',
      short: 'Next Forcing',
      date: '2026-06',
      venue: 'arXiv 预印本',
      area: '机器人与具身智能',
      paper: 'https://arxiv.org/pdf/2606.11187v1',
      extra: [ [ '预印本索引与版本记录', 'https://arxiv.org/abs/2606.11187' ], [ '研究项目页', 'https://gangweix.github.io/next-forcing/' ] ],
      evidence: '学生将 Next Forcing 列入蚂蚁 Robbyant 科研实习，并具名列出同篇企业指导者 Yinghao Xu、Qihang Zhang。首版论文在实习期间公开，学生双署名，校内导师和企业首席科学家同篇。',
      advising: [ '博士导师', '许刚伟个人主页明确列杨欣为华中科技大学博士导师。', 'https://gangweix.github.io/' ]
    },
    {
      id: 'dais-huawei-xjtu-fan',
      company: '华为',
      team: '华为技术有限公司',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      faculty: [ '范铭 · Ming Fan', '西安交通大学网络空间安全学院副教授、博士生导师；DAIS 通讯作者。', 'https://faculty.xjtu.edu.cn/mingfan/zh_CN/zhym/995659/list/index.htm' ],
      employee: [
        '胡大海 · Dahai Hu',
        '华为官方 2021 年介绍为华为 NAIE 资深算法专家，2022 年优先权的华为专利以其为发明人；本篇再以华为技术有限公司署名。',
        'https://bbs.huaweicloud.com/blogs/ac1f100df928482ca12e3eb5044ea82e'
      ],
      student: [
        '王玉 · Yu Wang',
        '西安交通大学在读博士生，导师范铭的校方主页列为联合指导学生；DAIS 正文首页明确为华为实习研究。',
        'https://faculty.xjtu.edu.cn/mingfan/zh_CN/zhym/995657/list/index.htm'
      ],
      title: 'DAIS: Dependency-Aware Intermediate QA Supervision for Complex Reasoning',
      short: 'DAIS',
      date: '2026-07',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2607.19088v1',
      extra: [
        [ '欧洲专利公报：华为作为申请人，胡大海为发明人', 'https://patentimages.storage.googleapis.com/6e/b5/73/365a4f0443f7c4/EP4481626A1.pdf' ],
        [ 'EMNLP 2025 同一学生、同导师及同一华为研究线的实习脚注和学校邮箱', 'https://aclanthology.org/2025.emnlp-main.1630.pdf' ]
      ],
      evidence: 'DAIS 首页脚注明确指向第一作者 Yu Wang 在华为技术有限公司实习期间完成该研究；同篇通讯作者范铭在西安交大的校方指导名单中列王玉为联合指导博士生。胡大海同篇署华为，华为官方曾具名介绍其为资深算法专家。论文未细分具体华为部门。',
      advising: [
        '校内共同导师',
        '范铭的西安交通大学教师主页在读博士生栏具名列王玉为联合指导；其西交大论文页也列 RAG+ 为同一研究线。刘烃虽同篇署名，没有找到其作为该学生导师的具名证明。',
        'https://faculty.xjtu.edu.cn/mingfan/zh_CN/zhym/995657/list/index.htm'
      ]
    },
    {
      company: '华为',
      team: '华为云 · 搜索与推荐',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [ '陈冲 · Chong Chen', '华为云高级研究员及团队负责人；同篇署华为云 BU，为第一作者具名的实习导师。', 'https://chenchongthu.github.io/' ],
      student: [ 'Xinhang Li', '2020 年 9 月至 2025 年 6 月在清华大学攻读博士，2023 年 8 月至 2024 年 3 月在华为云开展推荐大模型科研实习。', 'https://hestiasky.github.io/' ],
      title: 'E4SRec: An Elegant Effective Efficient Extensible Solution of Large Language Models for Sequential Recommendation',
      short: 'E4SRec',
      date: '2023-12',
      venue: 'arXiv 预印本',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/pdf/2312.02443',
      extra: [ [ '预印本索引', 'https://arxiv.org/abs/2312.02443' ] ],
      evidence: '学生履历列明华为云实习主题为推荐大模型，并具名列同篇华为云作者陈冲为企业实习指导者。论文首发在实习期内，学生和两位具名校内导师以清华署名。',
      advising: [ '博士共同导师', '学生履历在清华博士教育条目中具名列出张勇和邢春晓为博士导师。', 'https://hestiasky.github.io/' ],
      id: 'huawei-e4srec-thu-yong-zhang',
      faculty: [ '张勇 · Yong Zhang', '清华大学网络科学与网络空间研究院副研究员、博士生导师，原文以清华署名。', 'https://www.bnrist.tsinghua.edu.cn/info/1217/3881.htm' ]
    },
    {
      company: '华为',
      team: '华为云 · 搜索与推荐',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [ '陈冲 · Chong Chen', '华为云高级研究员及团队负责人；同篇署华为云 BU，为第一作者具名的实习导师。', 'https://chenchongthu.github.io/' ],
      student: [ 'Xinhang Li', '2020 年 9 月至 2025 年 6 月在清华大学攻读博士，2023 年 8 月至 2024 年 3 月在华为云开展推荐大模型科研实习。', 'https://hestiasky.github.io/' ],
      title: 'E4SRec: An Elegant Effective Efficient Extensible Solution of Large Language Models for Sequential Recommendation',
      short: 'E4SRec',
      date: '2023-12',
      venue: 'arXiv 预印本',
      area: '搜索与推荐',
      paper: 'https://arxiv.org/pdf/2312.02443',
      extra: [ [ '预印本索引', 'https://arxiv.org/abs/2312.02443' ] ],
      evidence: '学生履历列明华为云实习主题为推荐大模型，并具名列同篇华为云作者陈冲为企业实习指导者。论文首发在实习期内，学生和两位具名校内导师以清华署名。',
      advising: [ '博士共同导师', '学生履历在清华博士教育条目中具名列出张勇和邢春晓为博士导师。', 'https://hestiasky.github.io/' ],
      id: 'huawei-e4srec-thu-chunxiao-xing',
      faculty: [ '邢春晓 · Chunxiao Xing', '清华大学研究员、博士生导师，原文以清华署名。', 'https://www.bnrist.tsinghua.edu.cn/info/1216/3866.htm' ]
    },
    {
      id: 'alibaba-c3bench-ucas-liang-wang',
      company: '阿里巴巴',
      team: 'Qwen-Coder',
      school: '中国科学院大学',
      studentSchool: '中国科学技术大学',
      faculty: [ '王亮 · Liang Wang', '中国科学院自动化所研究员及中国科学院大学博士生导师，论文以自动化所署名。', 'https://people.ucas.ac.cn/~wangliang?language=en' ],
      employee: [ 'Binyuan Hui', '2025 年 EMNLP 教程材料列其为阿里通义千问团队高级研究科学家、代码模型负责人，原文署阿里集团。', 'https://aclanthology.org/2025.emnlp-tutorials.4.pdf' ],
      student: [ '张家骏 · Jiajun Zhang', '2024 年 9 月起在中国科学技术大学读硕士，于中国科学院自动化所开展研究；2024 年 8 月起在阿里 Qwen 参与代码大模型研发。', 'https://speakn0w.github.io/' ],
      title: 'C3-Bench: Evaluating and Achieving Controllable Code Completion in Code LLM',
      short: 'C3-Bench',
      date: '2026-01',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2601.15879',
      extra: [ [ '同一团队与师生合著的代码编辑论文', 'https://arxiv.org/html/2601.13384' ], [ '阿里 Qwen-Coder 项目仓库', 'https://github.com/QwenLM/Qwen3-Coder' ] ],
      evidence: '学生履历列阿里代码模型的基准评估实习和本篇成果。原文第一作者兼署中国科大及阿里，同篇包括在自动化所指导学生的王亮及阿里 Qwen-Coder 负责人。',
      advising: [ '跨校硕士指导', '学生主页明确列其学籍为中国科学技术大学，并具名列自动化所王亮为硕士导师。', 'https://speakn0w.github.io/' ]
    },
    {
      company: '百度',
      team: 'Search Science Team',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [ 'Yiding Liu', '百度搜索官方网站研究团队名录列其为高级研发工程师；本篇与董骞同署。', 'https://searchscience.baidu.com/team.html' ],
      student: [ '董骞 · Qian Dong', '清华大学计算机系博士生，2026 年 6 月获博士学位。百度搜索科学团队名录在其博士期间列为百度实习生，并给出检索和重排研究方向。', 'https://searchscience.baidu.com/team.html' ],
      title: 'I3 Retriever: Incorporating Implicit Interaction in Pre-trained Language Models for Passage Retrieval',
      short: 'I3 Retriever',
      date: '2023-10',
      venue: 'CIKM',
      area: '信息检索',
      paper: 'https://doi.org/10.1145/3583780.3614923',
      extra: [ [ '清华 THUIR 项目索引', 'https://www.thuir.cn/opensource/' ], [ '第一作者和同一百度团队的同期 SIGIR 论文', 'https://arxiv.org/pdf/2309.17078v1' ] ],
      evidence: '百度搜索科学团队的官方名录列第一作者为清华在读博士和百度检索实习生，列同篇 Yiding Liu 为高级研发工程师；清华课题组的论文项目和学生履历均列该文。学生履历具名的三位博士导师同篇署名。另有 2023 年首发的同期检索研究，三位导师及企业研究员再度同篇。',
      advising: [ '校内博士导师', '董骞主页具名列清华博士导师马少平、刘奕群和艾清遥，三位均在本篇署名。', 'https://dongqian.bj.cn/' ],
      id: 'baidu-i3-thu-ai',
      faculty: [ '艾清遥 · Qingyao Ai', '2022 年加入清华计算机系，研究发生时任助理教授；清华主页直接收录同篇。', 'https://www.cs.tsinghua.edu.cn/info/1122/6641.htm' ]
    },
    {
      company: '百度',
      team: 'Search Science Team',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [ 'Yiding Liu', '百度搜索官方网站研究团队名录列其为高级研发工程师；本篇与董骞同署。', 'https://searchscience.baidu.com/team.html' ],
      student: [ '董骞 · Qian Dong', '清华大学计算机系博士生，2026 年 6 月获博士学位。百度搜索科学团队名录在其博士期间列为百度实习生，并给出检索和重排研究方向。', 'https://searchscience.baidu.com/team.html' ],
      title: 'I3 Retriever: Incorporating Implicit Interaction in Pre-trained Language Models for Passage Retrieval',
      short: 'I3 Retriever',
      date: '2023-10',
      venue: 'CIKM',
      area: '信息检索',
      paper: 'https://doi.org/10.1145/3583780.3614923',
      extra: [ [ '清华 THUIR 项目索引', 'https://www.thuir.cn/opensource/' ], [ '第一作者和同一百度团队的同期 SIGIR 论文', 'https://arxiv.org/pdf/2309.17078v1' ] ],
      evidence: '百度搜索科学团队的官方名录列第一作者为清华在读博士和百度检索实习生，列同篇 Yiding Liu 为高级研发工程师；清华课题组的论文项目和学生履历均列该文。学生履历具名的三位博士导师同篇署名。另有 2023 年首发的同期检索研究，三位导师及企业研究员再度同篇。',
      advising: [ '校内博士导师', '董骞主页具名列清华博士导师马少平、刘奕群和艾清遥，三位均在本篇署名。', 'https://dongqian.bj.cn/' ],
      id: 'baidu-i3-thu-liu',
      faculty: [ '刘奕群 · Yiqun Liu', '2019 年起为清华大学计算机系长聘教授；与博士生董骞同篇。', 'https://www.cs.tsinghua.edu.cn/info/1121/3557.htm' ]
    },
    {
      company: '百度',
      team: 'Search Science Team',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [ 'Yiding Liu', '百度搜索官方网站研究团队名录列其为高级研发工程师；本篇与董骞同署。', 'https://searchscience.baidu.com/team.html' ],
      student: [ '董骞 · Qian Dong', '清华大学计算机系博士生，2026 年 6 月获博士学位。百度搜索科学团队名录在其博士期间列为百度实习生，并给出检索和重排研究方向。', 'https://searchscience.baidu.com/team.html' ],
      title: 'I3 Retriever: Incorporating Implicit Interaction in Pre-trained Language Models for Passage Retrieval',
      short: 'I3 Retriever',
      date: '2023-10',
      venue: 'CIKM',
      area: '信息检索',
      paper: 'https://doi.org/10.1145/3583780.3614923',
      extra: [ [ '清华 THUIR 项目索引', 'https://www.thuir.cn/opensource/' ], [ '第一作者和同一百度团队的同期 SIGIR 论文', 'https://arxiv.org/pdf/2309.17078v1' ] ],
      evidence: '百度搜索科学团队的官方名录列第一作者为清华在读博士和百度检索实习生，列同篇 Yiding Liu 为高级研发工程师；清华课题组的论文项目和学生履历均列该文。学生履历具名的三位博士导师同篇署名。另有 2023 年首发的同期检索研究，三位导师及企业研究员再度同篇。',
      advising: [ '校内博士导师', '董骞主页具名列清华博士导师马少平、刘奕群和艾清遥，三位均在本篇署名。', 'https://dongqian.bj.cn/' ],
      id: 'baidu-i3-thu-ma',
      faculty: [ '马少平 · Shaoping Ma', '清华大学计算机系教授，1984 年加入，同篇作者。', 'https://www.cs.tsinghua.edu.cn/info/1088/5251.htm' ]
    },
    {
      id: 'baidu-rome-ucas-sun',
      company: '百度',
      team: 'Search Science Team',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [
        '孙飞 · Fei Sun',
        '2022 年 8 月起任中国科学院计算技术研究所副研究员，实验室列为研究生导师；同篇通讯作者。',
        'https://klais.ict.ac.cn/yjspy/ds/bd/202404/t20240407_210283.html'
      ],
      employee: [ '马新宇 · Xinyu Ma', '2023 年起任职百度搜索科学团队，现公开履历列百度 Staff Engineer，同篇署名百度。', 'https://albert-ma.github.io/' ],
      student: [ 'Wanli Yang', '2024 年起在国科大中科院计算所攻读博士，2023 年 11 月至 2025 年 4 月在百度搜索科研实习；个人简历给出本项目及企业导师。', 'https://yangwl.site/files/CV_Now.pdf' ],
      title: 'The Fall of ROME: Understanding the Collapse of LLMs in Model Editing',
      short: 'The Fall of ROME',
      date: '2024-11',
      venue: 'Findings of EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.findings-emnlp.236.pdf',
      extra: [ [ 'ACL Anthology 论文目录', 'https://aclanthology.org/2024.findings-emnlp.236/' ], [ '学生主页的论文及实习期间记录', 'https://yangwl.site/' ] ],
      evidence: '第一作者的个人简历把导致大模型编辑崩溃的研究及 EMNLP 2024 Findings 录用明确放在百度实习项，实习导师为同篇马新宇；论文确认第一作者国科大学籍署名和高校指导老师的通讯身份。',
      advising: [ '校内博士共同导师', 'Wanli Yang 本人简历将孙飞、Xinran Liu 列为博士导师；孙飞的课题组名册也将其列为具名共同指导博士生。', 'https://ofey.me/people/' ]
    },
    {
      id: 'dbagent-huawei-uestc-su',
      company: '华为',
      team: '华为云 · 企业智能（EI）架构与设计',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ '苏涵 · Han Su', '电子科技大学计算机科学与工程学院专职副研究员；同篇作者，夏宇阳具名列出的博士导师之一。', 'https://yjsjy.uestc.edu.cn/gmis/jcsjgl/dsfc/dsgrjj/12147?yxsh=08' ],
      employee: [ '曾凯 · Kai Zeng', '华为云数据与 AI 融合首席架构师，DBAgent 同篇以华为技术有限公司署名。', 'https://kai-zeng.github.io/' ],
      student: [
        '夏宇阳 · Yuyang Xia',
        '电子科技大学计算机科学与工程学院博士生。2025 年 3 月起在华为云企业智能架构与设计团队实习，参与论文所描述的基于强化学习、能自主诊断慢查询的数据库运维智能体。',
        'https://xiayuyang.github.io/'
      ],
      title: 'DBAgent: An RL-Based Agent for Autonomous Database Operations and Maintenance',
      short: 'DBAgent',
      date: '2026-08',
      venue: 'PVLDB',
      area: '语言模型与智能体',
      paper: 'https://www.vldb.org/pvldb/vol19/p3928-chen.pdf',
      extra: [ [ '论文 DOI', 'https://doi.org/10.14778/3827998.3828006' ], [ '同篇共同第一作者的论文与部署记录', 'https://thisislegit.github.io/' ] ],
      evidence: '夏宇阳的学术主页列出华为云企业智能架构与设计团队的实习起始月，并介绍该数据库运维项目的应用场景、迭代推理模式及强化学习模块，与 DBAgent 论文所述一一对应。论文同时署名夏宇阳、苏涵及华为云首席架构师曾凯。DBAgent 部署于华为云 DWS，学生主页所列实习单位为华为云 EI 架构与设计团队。',
      advising: [ '博士共同导师', '夏宇阳的学术主页明确列出电子科技大学博士阶段的两位导师：郑凯和苏涵；两人均在 DBAgent 正式论文中署名。', 'https://xiayuyang.github.io/' ]
    },
    {
      id: 'alibaba-auctionnet-pku-zongqing-lu',
      company: '阿里巴巴',
      team: '阿里妈妈（Alimama）',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '卢宗青 · Zongqing Lu', '北京大学计算机学院长聘副教授，原文以北京大学署名。', 'https://cs.pku.edu.cn/info/1219/3645.htm' ],
      employee: [ 'Jian Xu', '2024 年竞赛组织材料列其为阿里妈妈首席算法架构师、阿里集团资深总监，原文以阿里集团署名。', 'https://openreview.net/pdf?id=ZejUjZUF6i' ],
      student: [ 'Kefan Su', '当时为北京大学博士生，原文首页具名注明该工作在其阿里实习期间完成。', 'https://openreview.net/pdf?id=ZejUjZUF6i' ],
      title: 'AuctionNet: A Novel Benchmark for Decision-Making in Large-Scale Games',
      short: 'AuctionNet',
      date: '2024-12',
      venue: 'NeurIPS Datasets and Benchmarks',
      area: '强化学习',
      paper: 'https://arxiv.org/html/2412.10798',
      extra: [
        [
          'NeurIPS 正式论文',
          'https://proceedings.neurips.cc/paper_files/paper/2024/file/ab9b7c23edfea0011507f7e1eae82cd2-Paper-Datasets_and_Benchmarks_Track.pdf'
        ],
        [ '阿里妈妈团队项目仓库', 'https://github.com/alimama-tech/AuctionNet' ]
      ],
      evidence: '作者版具名注明第一作者在阿里实习期间完成研究，NeurIPS 竞赛材料同时注明其北大学籍、实习及所负责的 AuctionNet 竞赛工作。北大博士导师和阿里妈妈首席算法架构师在同篇署名。',
      advising: [ '博士导师', '卢宗青的课题组把 Kefan Su 具名列为 2025 年毕业的博士校友，同一师生另有独立发表的研究。', 'https://z0ngqing.github.io/project/' ]
    },
    {
      id: 'bytedance-omniverifier-thu-yujiu-yang',
      company: '字节跳动',
      team: 'Seed · 多模态交互与世界模型',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '杨余久 · Yujiu Yang', '清华大学深圳国际研究生院教师，原文署名清华并任通讯作者。', 'https://openfiesta.sigs.tsinghua.edu.cn/pi/3/24' ],
      employee: [ 'Xiaoying Zhang', '香港中文大学原实验室的校友名录列其为字节跳动研究工程师，原文以字节 Seed 署名。', 'https://ansrlab.cse.cuhk.edu.hk/people/' ],
      student: [ 'Xinchen Zhang', '2024 年起为清华大学硕士生，2025 年 2 月起在字节 Seed 从事多模态交互和世界模型研究。', 'https://cominclip.github.io/' ],
      title: 'Generative Universal Verifier as Multimodal Meta-Reasoner',
      short: 'OmniVerifier',
      date: '2026-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://openreview.net/pdf/c4d6aaf82491e324b3f7e5d100d563cda328a5a8.pdf',
      extra: [
        [
          'ICLR 正式论文索引',
          'https://proceedings.iclr.cc/paper_files/paper/2026/hash/b174dca3b7b903bc578ef3e515d2d790-Abstract-Conference.html'
        ]
      ],
      evidence: '学生主页在字节 Seed 科研实习中具名列出该项工作和企业导师 Xiaoying Zhang。同篇的第一作者兼署字节和清华，具名校内硕士导师和企业研究工程师均在作者表中。',
      advising: [ '硕士导师', '学生主页具名列杨余久为清华硕士导师。', 'https://cominclip.github.io/' ]
    },
    {
      id: 'bytedance-visual-reasoning-thu-mingsheng-long',
      company: '字节跳动',
      team: 'Seed · 多模态交互与世界模型',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '龙明盛 · Mingsheng Long', '清华大学软件学院长聘副教授、博士生导师，原文署名清华。', 'https://www.thss.tsinghua.edu.cn/faculty/longmingsheng.htm' ],
      employee: [ 'Xiaoying Zhang', '香港中文大学原实验室的校友名录列其为字节跳动研究工程师，原文以字节 Seed 署名。', 'https://ansrlab.cse.cuhk.edu.hk/people/' ],
      student: [ '吴嘉龙 · Jialong Wu', '清华大学博士生，2025 年 3 月至 2026 年 6 月在字节 Seed 实习，研究多模态大模型和世界模型。', 'https://manchery.github.io/' ],
      title: 'Visual Generation Unlocks Human-Like Reasoning through Multimodal World Models',
      short: 'Visual Generation Unlocks Reasoning',
      date: '2026-01',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2601.19834',
      extra: [ [ '清华研究团队项目页', 'https://thuml.github.io/Reasoning-Visual-World/' ] ],
      evidence: '论文首页在校企双署名的第一作者名下注明研究于字节 Seed 期间完成。个人履历给出实习年月和方向；清华博士导师与字节 Seed 的同篇研究工程师亦在正式作者表中。',
      advising: [ '博士导师', '学生主页列出龙明盛为博士导师；龙明盛的清华研究组也将吴嘉龙列为 2022 级博士生。', 'https://ise.thss.tsinghua.edu.cn/~mlong/' ]
    },
    {
      id: 'zhipu-concatid-ruc-li',
      company: '智谱（GLM / Z.ai）',
      team: '视觉生成（CogView / CogVideo）',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '李崇轩 · Chongxuan Li', '中国人民大学高瓴人工智能学院准聘副教授；以人大署名，为同篇通讯作者。', 'https://ai.ruc.edu.cn/szdw/zrjs/lcx/index.htm' ],
      employee: [ '顾晓韬 · Xiaotao Gu', '2023 年由华为云加入智谱；2024 年智源活动简介列为智谱 GLM 技术团队研究员，论文以智谱和企业邮箱署名。', 'https://hub.baai.ac.cn/view/37590' ],
      student: [ '仲永 · Yong Zhong', '2021–2026 年在中国人民大学高瓴人工智能学院攻读博士。论文首页在其名字后标注工作于智谱实习期间完成。', 'https://zhenxuan00.github.io/#group' ],
      title: 'Concat-ID: Towards Universal Identity-Preserving Video Synthesis',
      short: 'Concat-ID',
      date: '2025-10',
      venue: 'ICCV Workshops',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2503.14151v3',
      extra: [
        [
          'ICCV 工作坊正式目录',
          'https://openaccess.thecvf.com/content/ICCV2025W/HiGen/html/Zhong_Concat-ID_Towards_Universal_Identity-Preserving_Video_Synthesis_ICCVW_2025_paper.html'
        ],
        [ '人大课题组项目页', 'https://ml-gsai.github.io/Concat-ID-demo/' ],
        [ '顾晓韬加入智谱报道', 'https://m.leiphone.com/category/industrynews/B8dFNwyNvxAlqdpR.html' ]
      ],
      evidence: '首版 2025 年 3 月公开。作者稿首页具名标注第一作者仲永在智谱实习期间完成工作，人大指导教师李崇轩为通讯作者，顾晓韬以智谱正式研究员身份共同署名。',
      advising: [ '博士导师', '李崇轩个人课题组的博士毕业生名单列仲永 2021–2026 年，组页也收录该论文并确认李崇轩通讯。', 'https://zhenxuan00.github.io/#group' ]
    },
    {
      id: 'unipixel-tencent-polyu-chen',
      company: '腾讯',
      team: '腾讯 PCG · ARC Lab',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ '陈长汶 · Chang Wen Chen', '香港理工大学视觉计算讲席教授；UniPixel 通讯作者。', 'https://www.polyu.edu.hk/academicians/our-academicians/chen-changwen/' ],
      employee: [
        'Ying Shan',
        '2025 年 SIGGRAPH Asia 会议介绍列其为腾讯杰出科学家、腾讯 PCG 的 ARC Lab 创始主任；本篇以腾讯 ARC Lab 署名。',
        'https://sa2025.conference-schedule.org/contributor/?uid=632904'
      ],
      student: [
        'Ye Liu',
        '2021 年 9 月开始在香港理工大学攻读博士，2021 年 7 月至 2025 年 4 月在腾讯 PCG 的 ARC Lab 进行科研实习。UniPixel 发表时兼署港理工及腾讯 ARC Lab。',
        'https://yeliu.dev/lib/files/Ye_Liu_CV.pdf'
      ],
      title: 'UniPixel: Unified Object Referring and Segmentation for Pixel-Level Visual Reasoning',
      short: 'UniPixel',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://papers.neurips.cc/paper_files/paper/2025/file/b783c44ba9adbc30344473dc633b4869-Paper-Conference.pdf',
      extra: [
        [ '腾讯同篇作者的学术主页：具名说明学生的论文实习来源', 'https://pujunfu.github.io/' ],
        [
          '同一团队与师生合著的 E.T. Bench',
          'https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf'
        ],
        [ '2025 年 9 月公开预印本', 'https://arxiv.org/abs/2509.18094' ]
      ],
      evidence: '第一作者 Ye Liu 的简历记录博士学籍与 ARC Lab 实习的重叠时间。同篇腾讯作者 Junfu Pu 在个人论文列表中明确把本项工作标为 Ye Liu 在 ARC Lab 实习期间完成。正式论文为 Ye Liu 列出港理工与腾讯双署名，并列出其校内导师陈长汶及腾讯 ARC Lab 创始主任 Ying Shan。',
      advising: [ '博士指导', 'Ye Liu 的简历教育栏直接将 Chang Wen Chen 列为香港理工大学博士导师，论文首页确认其为同篇通讯作者。', 'https://yeliu.dev/lib/files/Ye_Liu_CV.pdf' ]
    },
    {
      id: 'xiaohongshu-mtr1zero-zju-liu',
      company: '小红书',
      team: 'NLP · 大模型后训练',
      school: '浙江大学',
      studentSchool: '浙江大学',
      faculty: [ '刘佐珠 · Zuozhu Liu', '2020 年加入浙江大学国际联合学院；原文以浙江大学署名、任通讯作者。', 'https://person.zju.edu.cn/en/lzz' ],
      employee: [ '曹绍升 · Shaosheng Cao', '小红书 NLP 算法负责人，公开讲师资料把 MT-R1-Zero 列作其团队成果；原文为企业侧通讯作者。', 'https://msup.com.cn/teacher/11194' ],
      student: [
        '冯兆鹏 · Zhaopeng Feng',
        '2023 年 9 月至 2026 年 3 月为浙江大学硕士生；2025 年 3 月起在小红书实习，在曹绍升的指导下研究机器翻译强化学习。',
        'https://fzp0424.github.io/_pages/includes/Resume-EN.pdf'
      ],
      title: 'MT-R1-Zero: Advancing LLM-based Machine Translation via R1-Zero-like Reinforcement Learning',
      short: 'MT-R1-Zero',
      date: '2025-11',
      venue: 'Findings of EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.findings-emnlp.1015.pdf',
      extra: [
        [ '2025 年 4 月首次公开的预印本', 'https://arxiv.org/abs/2504.10160' ],
        [ '学生主页与实习时间', 'https://fzp0424.github.io/' ],
        [ '同一作者与同一企业的图文翻译研究', 'https://aclanthology.org/2026.acl-long.460.pdf' ],
        [ '企业实习导师与项目的具名履历', 'https://fzp0424.github.io/_pages/includes/Resume-EN.pdf' ]
      ],
      evidence: '研究首次公开时，冯兆鹏正在浙大读硕士并于小红书 NLP 团队实习。本人简历把 R1-Zero 纯文本翻译强化学习列为小红书实习工作；企业实习导师 Shaosheng Cao 与浙大校内导师刘佐珠均为同篇通讯作者。',
      advising: [ '硕士导师', '冯兆鹏个人简历教育部分明确列刘佐珠为浙江大学计算机技术硕士导师。', 'https://fzp0424.github.io/_pages/includes/Resume-EN.pdf' ]
    },
    {
      id: 'bytedance-trae-scalable-cuhksz-pinjia-he',
      company: '字节跳动',
      team: 'TRAE · 软件工程实验室',
      school: '香港中文大学（深圳）',
      studentSchool: '香港中文大学（深圳）',
      faculty: [ '贺品嘉 · Pinjia He', '香港中文大学（深圳）数据科学学院教师，论文以校方署名并任通讯作者。', 'https://sds.cuhk.edu.cn/teacher/464' ],
      employee: [ '彭超 · Chao Peng', '2021 年 7 月起任职于字节跳动，任软件工程实验室首席科学家。论文以字节跳动署名。', 'https://chao-peng.github.io/cv-chaopeng-zh.pdf' ],
      student: [ 'Junjielong Xu', '2022 年至 2026 年 5 月在港中大（深圳）攻读博士，2025 年 4 月至 2026 年 4 月在字节 TRAE 从事科研实习。', 'https://siyuexi.github.io/' ],
      title: 'Scalable Supervision for Software Agents via Patch Reasoning',
      short: 'Scalable Supervision',
      date: '2026-10',
      venue: 'Findings of EMNLP',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.findings-emnlp.1069.pdf',
      evidence: '正式版具名注明第一作者在字节 TRAE 实习时完成。学生主页列出实习和博士在读时间，两方指导者均同篇署名。',
      advising: [ '博士导师', '学生在个人主页具名列出贺品嘉为博士导师。', 'https://siyuexi.github.io/' ],
      extra: [ [ '字节软件工程实验室的成果目录', 'https://se-research.bytedance.com/' ] ]
    },
    {
      id: 'bytedance-trae-sorft-pku-bing-xie',
      company: '字节跳动',
      team: 'TRAE · 软件工程实验室',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '谢冰 · Bing Xie', '北京大学软件工程研究所教授，同篇以北京大学署名并任通讯作者。', 'https://www.sei.pku.edu.cn/People/Faculty/4.htm' ],
      employee: [ '彭超 · Chao Peng', '2021 年 7 月起任职于字节跳动，任软件工程实验室首席科学家。论文以字节跳动署名。', 'https://chao-peng.github.io/cv-chaopeng-zh.pdf' ],
      student: [ 'Zexiong Ma', '2021 年 9 月至 2026 年 7 月在北大攻读博士，2024 年 10 月至 2025 年 12 月在字节 TRAE 研究团队实习。', 'https://mizersy.github.io/' ],
      title: 'SoRFT: Issue Resolving with Subtask-oriented Reinforced Fine-Tuning',
      short: 'SoRFT',
      date: '2025-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2025.acl-long.559.pdf',
      evidence: '会议版首页具名注明第一作者在字节实习期间完成工作。企业项目页列出该篇，学生主页将同篇彭超列为当时的合作研究者。',
      advising: [ '博士导师', '第一作者个人履历具名列谢冰为北大博士导师。', 'https://mizersy.github.io/' ],
      extra: [ [ '字节软件工程实验室的成果目录', 'https://se-research.bytedance.com/' ] ]
    },
    {
      id: 'bytedance-trae-repo2run-hit-cuiyun-gao',
      company: '字节跳动',
      team: 'TRAE · 软件工程实验室',
      school: '哈尔滨工业大学',
      studentSchool: '哈尔滨工业大学',
      faculty: [ '高翠芸 · Cuiyun Gao', '哈尔滨工业大学（深圳）教授，原文署哈工大（深圳）并任通讯作者。', 'https://cuiyungao.github.io/' ],
      employee: [ '彭超 · Chao Peng', '2021 年 7 月起任职于字节跳动，任软件工程实验室首席科学家。论文以字节跳动署名。', 'https://chao-peng.github.io/cv-chaopeng-zh.pdf' ],
      student: [ 'Ruida Hu', '2024 年 9 月至 2026 年 8 月为哈尔滨工业大学（深圳）硕士生，2024 年 6 月至 2026 年 5 月在字节 TRAE 实习。', 'https://kinesiatricssxilm14.github.io/' ],
      title: 'Repo2Run: Automated Building Executable Environment for Code Repository at Scale',
      short: 'Repo2Run',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '语言模型与智能体',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2025/file/2f2b1d6bbd50865eca40e2774a057eef-Paper-Conference.pdf',
      evidence: '会议版首页明确将第一作者的研究归于其在字节的实习。企业项目页收录同篇，校内导师的指导名录具名列出第一作者。',
      advising: [ '硕士导师', '高翠芸的课题组指导名单明确将 Ruida Hu 列为硕士生。', 'https://cuiyungao.github.io/#advising' ],
      extra: [ [ '字节软件工程实验室的成果目录', 'https://se-research.bytedance.com/' ] ]
    },
    {
      id: 'bytedance-converge-fudan-yanghua-xiao',
      company: '字节跳动',
      team: 'AI Lab · 自然语言处理',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '肖仰华 · Yanghua Xiao', '复旦大学计算机科学技术学院教授，原文以复旦署名并任通讯作者。', 'https://cs.fudan.edu.cn/c4/38/c37252a443448/page.htm' ],
      employee: [ '孙长志 · Changzhi Sun', '2020 年 6 月至 2023 年 6 月任字节跳动 AI Lab 自然语言处理研究员。', 'https://www.czsun.site/files/cv_czsun_en.pdf' ],
      student: [ '陈江捷 · Jiangjie Chen', '2019 年至 2024 年复旦博士生；本人履历列出字节 AI Lab 实习及企业研究导师孙长志。', 'https://jiangjiechen.github.io/uploads/resume.pdf' ],
      title: 'Converge to the Truth: Factual Error Correction via Iterative Constrained Editing',
      short: 'Converge to the Truth',
      date: '2023-02',
      venue: 'AAAI',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2211.12130',
      extra: [ [ 'AAAI 正式论文', 'https://ojs.aaai.org/index.php/AAAI/article/download/26485/26257' ] ],
      evidence: '预印本于 2022 年公开，正式论文发表于 2023 年。首页在第一作者名下具名注明工作在字节 AI Lab 实习期间完成。本人履历列出实习时段及同篇企业研究导师；复旦博士导师共同署名。',
      advising: [ '博士导师', '学生的公开简历在复旦博士教育条目中明确列出肖仰华为博士导师。', 'https://jiangjiechen.github.io/uploads/resume.pdf' ]
    },
    {
      id: 'bytedance-analogykb-fudan-deqing-yang',
      company: '字节跳动',
      team: 'AI Lab · 自然语言处理',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '阳德青 · Deqing Yang', '复旦大学大数据学院副教授、博士生导师，原文以复旦署名并任通讯作者。', 'https://sds.fudan.edu.cn/a4/2f/c22442a238639/page.htm' ],
      employee: [
        '孙长志 · Changzhi Sun',
        '2020 年 6 月至 2023 年 6 月任字节跳动 AI Lab 自然语言处理研究员。正式论文出版时已转岗，作者脚注注明该工作在字节 AI Lab 完成。',
        'https://www.czsun.site/files/cv_czsun_en.pdf'
      ],
      student: [
        '员司雨 · Siyu Yuan',
        '2021 年至 2026 年为复旦博士生。本人简历将本篇列为 2023 年 1 月至 5 月字节 AI Lab 类比推理实习的具体成果。',
        'https://siyuyuan.github.io/data/SiyuYuan_CV.pdf'
      ],
      title: 'AnalogyKB: Unlocking Analogical Reasoning of Language Models with a Million-scale Knowledge Base',
      short: 'AnalogyKB',
      date: '2024-08',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.acl-long.68.pdf',
      extra: [ [ '学生主页与两位学术导师', 'https://siyuyuan.github.io/' ] ],
      evidence: '学生简历的字节实习条目将工作对应到本人文献列表的 AnalogyKB，列同篇孙长志为企业导师。论文注明孙长志在字节完成工作；阳德青是学生具名的复旦共同导师，并署名同篇。',
      advising: [ '博士共同导师', '第一作者个人主页及其履历在复旦博士经历中具名列出阳德青为共同导师。', 'https://siyuyuan.github.io/' ]
    },
    {
      id: 'bytedance-avatarforever-polyu-lei-zhang',
      company: '字节跳动',
      team: 'Global Applied ML · 视频生成',
      school: '香港理工大学',
      studentSchool: '香港理工大学',
      faculty: [ '张磊 · Lei Zhang', '香港理工大学计算机学系讲座教授，预印本第一版为港理工通讯作者。', 'https://www.polyu.edu.hk/comp/people/academic-staff/' ],
      employee: [ '文世磊 · Shilei Wen', '2021 年至 2026 年 10 月在字节跳动任职，曾负责商业化生成式 AI 研发。原文第一版署字节跳动。', 'https://eu.36kr.com/en/p/4046842478171782' ],
      student: [
        '李锐斌 · Ruibin Li',
        '2022 年起为香港理工大学博士生，2025 年 3 月至 2026 年 6 月在字节 Global Applied ML 团队从事视频生成研究。',
        'https://leeruibin.github.io/assets/Ruibin_Li_CV.pdf'
      ],
      title: 'Avatar-Forever: Decoupled Parallel Training for High-Quality Real-Time Infinite Avatars',
      short: 'Avatar-Forever',
      date: '2026-08',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2608.12107v1',
      extra: [ [ '含具名实习脚注及作者名单的第一版 PDF', 'https://arxiv.org/pdf/2608.12107v1' ], [ '同期同团队的长视频生成论文', 'https://arxiv.org/html/2604.10103' ] ],
      evidence: '2026 年 8 月公开的第一版在第一作者名下明确注明研究在字节实习时完成，同版本有企业作者文世磊及博士导师张磊。后续版本作者表有变化，这里依据具名的第一版。',
      advising: [ '博士导师', '学生主页和个人简历具名列出张磊为其港理工博士导师。', 'https://leeruibin.github.io/' ]
    },
    {
      company: 'MiniMax',
      team: '多模态强化学习 · V-Triune',
      school: '上海交通大学',
      employee: [
        '闫俊杰 · Junjie Yan',
        '公司在港交所披露的文件列其为 MiniMax 创始人、首席执行官和研发团队负责人；原文以 MiniMax 署名并任通讯作者。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf'
      ],
      title: 'One RL to See Them All: Visual Triple Unified Reinforcement Learning',
      short: 'V-Triune',
      date: '2025-05',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2505.18129v1',
      extra: [ [ 'MiniMax 官方项目仓库', 'https://github.com/MiniMax-AI/One-RL-to-See-Them-All' ] ],
      id: 'minimax-vtriune-sjtu-lizhuang-ma',
      studentSchool: '上海交通大学',
      faculty: [ '马利庄 · Lizhuang Ma', '上海交通大学计算机学院特聘教授，原文列为学术指导作者并以该校署名。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/malizhuang.html' ],
      student: [ '任麒冰 · Qibing Ren', '研究期间为上海交通大学博士生，作者贡献表兼署上海交通大学与 MiniMax。', 'https://hub.baai.ac.cn/view/36268' ],
      evidence: '学生本人将 V-Triune 列为其在 MiniMax 的团队成果。原文贡献表列其校企双署名；交大博士导师及 MiniMax 研发负责人同篇署名。',
      advising: [ '博士导师', '本人主页与博士在读期间的公开报告简介均具名列马利庄为上海交通大学博士导师。', 'https://renqibing.github.io/' ]
    },
    {
      company: 'MiniMax',
      team: '多模态强化学习 · V-Triune',
      school: '上海交通大学',
      employee: [
        '闫俊杰 · Junjie Yan',
        '公司在港交所披露的文件列其为 MiniMax 创始人、首席执行官和研发团队负责人；原文以 MiniMax 署名并任通讯作者。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf'
      ],
      title: 'One RL to See Them All: Visual Triple Unified Reinforcement Learning',
      short: 'V-Triune',
      date: '2025-05',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2505.18129v1',
      extra: [
        [ 'MiniMax 官方项目仓库', 'https://github.com/MiniMax-AI/One-RL-to-See-Them-All' ],
        [ '复旦学籍与校企合作者的后续同篇署名', 'https://arxiv.org/html/2602.01334' ]
      ],
      id: 'minimax-vtriune-sjtu-pengfei-liu',
      studentSchool: '复旦大学',
      faculty: [ '刘鹏飞 · Pengfei Liu', '上海交通大学计算机学院教师、GAIR 实验室负责人，原文列为学术指导作者。', 'https://www.cs.sjtu.edu.cn/en/jiaoshiml/liupengfei.html' ],
      student: [ 'Yan Ma', '复旦大学博士生。原文贡献表以 MiniMax 和 GAIR 双署名，列为并列第一及核心贡献者。', 'https://plms.ai/people/' ],
      evidence: 'MiniMax 官方项目对应论文将 Yan Ma 列为双署名的核心贡献者；同篇还列其 GAIR 学术指导者及企业负责人。复旦学籍与交大指导关系分别记录。',
      advising: [ '跨校博士研究指导', '刘鹏飞负责的 GAIR 实验室具名列 Yan Ma 为博士组员；V-Triune 作者贡献表列刘鹏飞为该项目的指导作者。', 'https://plms.ai/people/' ]
    },
    {
      id: 'xiaohongshu-unitymas-ruc-jiaxin-mao',
      company: '小红书',
      team: 'Dots Agent · AI 搜索',
      school: '中国人民大学',
      studentSchool: '中国人民大学',
      faculty: [ '毛佳昕 · Jiaxin Mao', '中国人民大学高瓴人工智能学院教师，同篇署人大、任通讯作者并在贡献说明中负责学术指导。', 'https://ai.ruc.edu.cn/szdw/zrjs/mjx/index.htm' ],
      employee: [ '高龑 · Yan Gao', '小红书 AI 搜索负责人，2026 年会议议程列其代表小红书作 AI 搜索与智能体报告。原文以小红书署名。', 'https://www.yssnlp2026.cn/schedule/' ],
      student: [ '陈逸群 · Yiqun Chen', '中国人民大学博士生，2025 年 9 月起在小红书从事多智能体强化学习实习。', 'https://chenyiqun.github.io/chenyiqun/' ],
      title: 'UnityMAS-O: A General RL Optimization Framework for LLM-Based Multi-Agent Systems',
      short: 'UnityMAS-O',
      date: '2026-05',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/html/2605.26646v1',
      extra: [ [ 'QCon 对小红书 AI 搜索负责人的公开介绍', 'https://www.infoq.cn/article/wjDCCStUcPRbP3d1T11D' ] ],
      evidence: '论文贡献说明具名注明陈逸群在小红书实习期间主导并完成本项研究，列明企业正式员工的工作和校内导师的学术指导。学生主页独立列出同企业、同研究方向的实习。',
      advising: [ '博士导师', '陈逸群的个人主页具名列出毛佳昕为中国人民大学博士导师。', 'https://chenyiqun.github.io/chenyiqun/' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '北京大学',
      studentSchool: '北京大学',
      employee: [ '肖文聪 · Wencong Xiao', '正式论文以字节 Seed 署名；其主页确认负责字节 Seed 的训练基础设施团队。', 'https://wencongxiao.github.io/' ],
      student: [ 'Ruidong Zhu', '北京大学在读博士；本人履历记录 2024 年 3 月起在字节 Seed 基础设施团队研究实习。', 'https://horsebridge.github.io/' ],
      title: 'DistRS: Disaggregated Reward Service for RLVR with Batch-Level Constraint',
      short: 'DistRS',
      date: '2026-05',
      venue: 'NSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/nsdi26-zhu-ruidong.pdf',
      extra: [ [ 'USENIX 正式索引及三方作者表', 'https://www.usenix.org/conference/nsdi26/presentation/zhu-ruidong' ] ],
      evidence: '学生主页列出北大学籍、Seed 基础设施实习及本人第一作者的本篇成果。USENIX 正式作者表列出字节 Seed 的训练基础设施负责人以及两位学生具名校内导师。论文研究内容为语言模型强化学习训练的奖励服务。',
      advising: [ '博士共同导师', '第一作者主页在北大博士在读经历中同时具名列出两位校内导师。', 'https://horsebridge.github.io/' ],
      id: 'bytedance-distrs-pku-xuanzhe-liu',
      faculty: [ '刘譞哲 · Xuanzhe Liu', '北京大学计算机学院教授，以该校署名。', 'https://cs.pku.edu.cn/English/People/Faculty/By_Last_Name/L.htm' ]
    },
    {
      company: '字节跳动',
      team: 'Seed · 训练基础设施',
      school: '北京大学',
      studentSchool: '北京大学',
      employee: [ '肖文聪 · Wencong Xiao', '正式论文以字节 Seed 署名；其主页确认负责字节 Seed 的训练基础设施团队。', 'https://wencongxiao.github.io/' ],
      student: [ 'Ruidong Zhu', '北京大学在读博士；本人履历记录 2024 年 3 月起在字节 Seed 基础设施团队研究实习。', 'https://horsebridge.github.io/' ],
      title: 'DistRS: Disaggregated Reward Service for RLVR with Batch-Level Constraint',
      short: 'DistRS',
      date: '2026-05',
      venue: 'NSDI',
      area: 'AI 基础设施',
      paper: 'https://www.usenix.org/system/files/nsdi26-zhu-ruidong.pdf',
      extra: [ [ 'USENIX 正式索引及三方作者表', 'https://www.usenix.org/conference/nsdi26/presentation/zhu-ruidong' ] ],
      evidence: '学生主页列出北大学籍、Seed 基础设施实习及本人第一作者的本篇成果。USENIX 正式作者表列出字节 Seed 的训练基础设施负责人以及两位学生具名校内导师。论文研究内容为语言模型强化学习训练的奖励服务。',
      advising: [ '博士共同导师', '第一作者主页在北大博士在读经历中同时具名列出两位校内导师。', 'https://horsebridge.github.io/' ],
      id: 'bytedance-distrs-pku-xin-jin',
      faculty: [ '金鑫 · Xin Jin', '北京大学计算机学院长聘副教授，以该校署名。', 'https://cs.pku.edu.cn/info/1069/1635.htm' ]
    },
    {
      id: 'jd-mixture-ucas-cao',
      company: '京东',
      team: '京东探索研究院',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '曹亚男 · Yanan Cao', '中国科学院信息工程研究所研究员、国科大博士生导师。论文中以信工所署名，为通讯作者。', 'https://people.ucas.edu.cn/~0046013' ],
      employee: [ '丁亮 · Liang Ding', '在 2023 年任京东探索研究院研究科学家并带领 NLP 研究组，作者本人履历有具体正式岗位；同篇署京东探索研究院。', 'https://liamding.cc/' ],
      student: [
        '王青悦 · Qingyue Wang',
        '2018 年 8 月至 2024 年 6 月于国科大攻读博士，个人主页列明曾在京东探索研究院由丁亮指导 NLP 实习；在读简历记录 2022 年 9 月至 2023 年 2 月开展此项研究。',
        'https://qingyue2014.github.io/qingyue_cv.pdf'
      ],
      title: 'Divide, Conquer, and Combine: Mixture of Semantic-Independent Experts for Zero-Shot Dialogue State Tracking',
      short: 'Mixture of Semantic-Independent Experts',
      date: '2023-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2023.acl-long.114.pdf',
      extra: [
        [ 'ACL 正式目录', 'https://aclanthology.org/2023.acl-long.114/' ],
        [ '同期京东任职记录', 'https://livrepository.liverpool.ac.uk/3170622/1/TMM_camera.pdf' ]
      ],
      evidence: '第一作者以国科大在读身份署名。本人公开履历把同篇京东作者丁亮列为京东 NLP 实习导师，研究期简历给出本篇项目日期；丁亮 2023 年的个人学术记录明确将 ACL 2023 录用组列作其京东实习生及共同作者研究成果。',
      advising: [ '博士导师', '王青悦主页明确列曹亚男为博士导师；国科大教师主页亦记录了该生在 2023 年获得博士生国家奖学金。', 'https://qingyue2014.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '阿里云 · 数据中心智能运维',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      employee: [ 'Yi Liu', 'IEEE 期刊作者简介明确为阿里高级算法工程师；2025 年同篇以阿里云署名并使用企业邮箱。', 'https://www.cse.cuhk.edu.hk/~pclee/www/pubs/tc22streamdfp.pdf#page=14' ],
      student: [ '段涛 · Tao Duan', '西安交通大学博士生；本人主页同时列出 BSODiag 和阿里云科研实习中的批量服务器宕机诊断工作。', 'https://toduan.github.io/' ],
      title: 'BSODiag: A Global Diagnosis Framework for Batch Servers Outage in Large-scale Cloud Infrastructure Systems',
      short: 'BSODiag',
      date: '2025-04',
      venue: 'ICSE SEIP',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2502.15728v1',
      extra: [
        [ 'IEEE 正式出版索引', 'https://doi.org/10.1109/ICSE-SEIP66354.2025.00049' ],
        [ '阿里云共同作者历年论文署名', 'https://www.usenix.org/conference/fast21/presentation/han' ],
        [ '第一作者报告幻灯片', 'https://toduan.github.io/assets/BSODiag_ICSE25_Slides.pdf' ]
      ],
      evidence: '段涛的个人主页将批量服务器宕机诊断列为阿里云科研实习项目，并列出本人同题论文。论文通过关联规则挖掘和时空故障图自动诊断根因；两位具名博士导师及阿里算法工程师同篇。',
      id: 'bsodiag-alibaba-xjtu-zhao',
      faculty: [ '赵俊舟 · Junzhou Zhao', '西安交通大学网络空间安全学院副教授，论文共同通讯作者。', 'https://junzhouzhao.github.io/' ],
      advising: [ '博士指导', '学生学术主页具名列赵俊舟为西安交通大学博士导师之一，论文首页也确认他是共同通讯作者。', 'https://toduan.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '阿里云 · 数据中心智能运维',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      employee: [ 'Yi Liu', 'IEEE 期刊作者简介明确为阿里高级算法工程师；2025 年同篇以阿里云署名并使用企业邮箱。', 'https://www.cse.cuhk.edu.hk/~pclee/www/pubs/tc22streamdfp.pdf#page=14' ],
      student: [ '段涛 · Tao Duan', '西安交通大学博士生；本人主页同时列出 BSODiag 和阿里云科研实习中的批量服务器宕机诊断工作。', 'https://toduan.github.io/' ],
      title: 'BSODiag: A Global Diagnosis Framework for Batch Servers Outage in Large-scale Cloud Infrastructure Systems',
      short: 'BSODiag',
      date: '2025-04',
      venue: 'ICSE SEIP',
      area: 'AI 系统',
      paper: 'https://arxiv.org/html/2502.15728v1',
      extra: [
        [ 'IEEE 正式出版索引', 'https://doi.org/10.1109/ICSE-SEIP66354.2025.00049' ],
        [ '阿里云共同作者历年论文署名', 'https://www.usenix.org/conference/fast21/presentation/han' ],
        [ '第一作者报告幻灯片', 'https://toduan.github.io/assets/BSODiag_ICSE25_Slides.pdf' ]
      ],
      evidence: '段涛的个人主页将批量服务器宕机诊断列为阿里云科研实习项目，并列出本人同题论文。论文通过关联规则挖掘和时空故障图自动诊断根因；两位具名博士导师及阿里算法工程师同篇。',
      id: 'bsodiag-alibaba-xjtu-wang',
      faculty: [ '王平辉 · Pinghui Wang', '2019 年起任西安交通大学教授、博士生导师，论文共同通讯作者。', 'https://gr.xjtu.edu.cn/phwang/' ],
      advising: [ '博士指导', '学生学术主页具名列王平辉为西安交通大学博士导师之一，论文首页也确认他是共同通讯作者。', 'https://toduan.github.io/' ]
    },
    {
      id: 'alibaba-layerflow-hku-hengshuang-zhao',
      company: '阿里巴巴',
      team: '达摩院 · 视觉生成',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '赵恒爽 · Hengshuang Zhao', '香港大学计算与数据科学学院教师；同篇以香港大学署名并任通讯作者。', 'https://i.cs.hku.hk/~hszhao/index.html' ],
      employee: [
        '罗浩 · Hao Luo',
        '2020 年获博士学位后任职阿里达摩院，2024 年期刊作者介绍记载其履历；本篇署达摩院和湖畔实验室，使用阿里邮箱。',
        'https://ieeexplore.ieee.org/abstract/document/10559458/authors'
      ],
      student: [ 'Sihui Ji', '2024 年获香港大学博士生奖学金，同年在阿里达摩院研究实习，正式稿同时署港大与达摩院。', 'https://sihuiji.github.io/' ],
      title: 'LayerFlow: A Unified Model for Layer-aware Video Generation',
      short: 'LayerFlow',
      date: '2025-08',
      venue: 'SIGGRAPH',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2506.04228',
      extra: [ [ 'ACM 正式出版信息', 'https://doi.org/10.1145/3721238.3730662' ] ],
      evidence: '论文首页在第一作者名下明确注明研究于阿里达摩院实习期间完成；正文亦致谢达摩院实习计划。港大博士导师、达摩院研究人员均在同篇作者表中。',
      advising: [ '博士导师', '学生主页明确列出香港大学博士导师赵恒爽。', 'https://sihuiji.github.io/' ]
    },
    {
      id: 'kuaishou-memflow-hku-hengshuang-zhao',
      company: '快手',
      team: '可灵 · 视觉生成',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '赵恒爽 · Hengshuang Zhao', '香港大学计算与数据科学学院教师；同篇以香港大学署名并任通讯作者。', 'https://i.cs.hku.hk/~hszhao/index.html' ],
      employee: [ '陶鑫 · Xin Tao', '2020 年起任职快手，个人主页列快手可灵视觉生成组资深研究员和技术负责人；同篇以可灵署名。', 'https://www.xtao.website/' ],
      student: [ 'Sihui Ji', '香港大学博士生，2025 年在快手可灵研究实习；原文首页具名注明本篇来自该实习。', 'https://sihuiji.github.io/' ],
      title: 'MemFlow: Flowing Adaptive Memory for Consistent and Efficient Long Video Narratives',
      short: 'MemFlow',
      date: '2025-12',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2512.14699',
      extra: [ [ '可灵团队发布的模型', 'https://huggingface.co/KlingTeam/MemFlow' ] ],
      evidence: '第一作者的具名脚注明确该研究在可灵团队实习期间完成。学生公开履历记载在读和企业实习情况，具名博士导师与企业研究员共同署名。',
      advising: [ '博士导师', '学生主页明确列出香港大学博士导师赵恒爽。', 'https://sihuiji.github.io/' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '刘峰 · Feng Liu', '2025 年获中国科学院大学博士学位；2024 年预印本在读。本人列出在阿里通义万相从事视频生成科研实习，具名企业导师张士伟。', 'https://liewfeng.github.io/' ],
      title: "Timestep Embedding Tells: It's Time to Cache for Video Diffusion Model",
      short: 'TeaCache',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_Timestep_Embedding_Tells_Its_Time_to_Cache_for_Video_Diffusion_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 11 月首版', 'https://arxiv.org/abs/2411.19108' ], [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ] ],
      evidence: 'CVPR 正式论文致谢阿里巴巴实习计划。学生主页列本篇、两位同篇校内导师以及通义万相视频生成实习的具名指导者张士伟；该指导者为同篇企业通讯作者。',
      advising: [ '博士共同导师', '刘峰的个人主页具名列万方和叶齐祥为中国科学院大学博士导师，两人均为同篇作者。', 'https://liewfeng.github.io/' ],
      id: 'alibaba-teacache-ucas-fang-wan',
      faculty: [ '万方 · Fang Wan', '中国科学院大学教师、博士生导师，论文以国科大署名并任通讯作者。', 'https://people.ucas.ac.cn/~wanfang' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '刘峰 · Feng Liu', '2025 年获中国科学院大学博士学位；2024 年预印本在读。本人列出在阿里通义万相从事视频生成科研实习，具名企业导师张士伟。', 'https://liewfeng.github.io/' ],
      title: "Timestep Embedding Tells: It's Time to Cache for Video Diffusion Model",
      short: 'TeaCache',
      date: '2025-06',
      venue: 'CVPR',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Liu_Timestep_Embedding_Tells_Its_Time_to_Cache_for_Video_Diffusion_CVPR_2025_paper.pdf',
      extra: [ [ '2024 年 11 月首版', 'https://arxiv.org/abs/2411.19108' ], [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ] ],
      evidence: 'CVPR 正式论文致谢阿里巴巴实习计划。学生主页列本篇、两位同篇校内导师以及通义万相视频生成实习的具名指导者张士伟；该指导者为同篇企业通讯作者。',
      advising: [ '博士共同导师', '刘峰的个人主页具名列万方和叶齐祥为中国科学院大学博士导师，两人均为同篇作者。', 'https://liewfeng.github.io/' ],
      id: 'alibaba-teacache-ucas-qixiang-ye',
      faculty: [ '叶齐祥 · Qixiang Ye', '中国科学院大学教师、博士生导师，同篇署中国科学院大学。', 'https://people.ucas.ac.cn/~qxye?language=en' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '刘昕煜 · Xinyu Liu', '2024 年 1 月起在港科大读博，2025 年 5 月至 12 月在阿里通义万相科研实习，第一版同时署港科大与通义实验室。', 'https://liuxinyv.github.io/' ],
      title: 'ReViSE: Towards Reason-Informed Video Editing in Unified Models with Self-Reflective Learning',
      short: 'ReViSE',
      date: '2025-12',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2512.09924v1',
      extra: [ [ '同团队另一位学生具名的企业实习导师', 'https://liewfeng.github.io/' ], [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ] ],
      evidence: '首版在学生的阿里通义万相实习结束当月公开，给出第一作者的校企双署名；两位具名博士导师及通义万相研究员均列首版作者。后续版本作者署名有变化，使用同一首版核对三方。',
      advising: [ '博士共同导师', '学生主页具名列出郭毅可与罗文寒为其港科大博士导师，两人均以港科大署名同篇。', 'https://liuxinyv.github.io/' ],
      id: 'alibaba-revise-hkust-wenhan-luo',
      faculty: [ '罗文寒 · Wenhan Luo', '香港科技大学教师，同篇以港科大署名并任通讯作者。', 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=wenhan-luo-whluo' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '刘昕煜 · Xinyu Liu', '2024 年 1 月起在港科大读博，2025 年 5 月至 12 月在阿里通义万相科研实习，第一版同时署港科大与通义实验室。', 'https://liuxinyv.github.io/' ],
      title: 'ReViSE: Towards Reason-Informed Video Editing in Unified Models with Self-Reflective Learning',
      short: 'ReViSE',
      date: '2025-12',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2512.09924v1',
      extra: [ [ '同团队另一位学生具名的企业实习导师', 'https://liewfeng.github.io/' ], [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ] ],
      evidence: '首版在学生的阿里通义万相实习结束当月公开，给出第一作者的校企双署名；两位具名博士导师及通义万相研究员均列首版作者。后续版本作者署名有变化，使用同一首版核对三方。',
      advising: [ '博士共同导师', '学生主页具名列出郭毅可与罗文寒为其港科大博士导师，两人均以港科大署名同篇。', 'https://liuxinyv.github.io/' ],
      id: 'alibaba-revise-hkust-yike-guo',
      faculty: [ '郭毅可 · Yike Guo', '香港科技大学教务长兼计算机科学及工程学系教授，首版以港科大署名。', 'https://hkust.edu.hk/about/leadership/professor-yike-guo-bsc-phd' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '王翔 · Xiang Wang', '华中科技大学 2022 级博士生；此前的本人讲师简介列其在阿里达摩院城市大脑实验室科研实习。', 'https://aia.hust.edu.cn/info/1179/9109.htm' ],
      title: 'UniAnimate: Taming Unified Video Diffusion Models for Consistent Human Image Animation',
      short: 'UniAnimate',
      date: '2024-06',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2406.01188',
      extra: [
        [ '同一学生的阿里实习及校内导师', 'https://course.zhidx.com/teacher/detail/MjI5YzIyNTdlNGZmZjczN2U4ZDM%3D' ],
        [ '同期论文与同一实习计划', 'https://doi.org/10.1016/j.cviu.2023.103737' ],
        [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ]
      ],
      evidence: '本篇明确致谢阿里研究实习计划，同时列有第一作者、华中科大的两位博士导师及阿里作者张士伟；论文同时致谢华中科大校讯中具名授予王翔的博士研究项目。本人公开讲师资料列出在达摩院进行视觉研究实习。',
      advising: [ '博士共同导师', '华中科技大学官方报道明确列桑农、高常鑫为王翔的两位博士导师。', 'https://aia.hust.edu.cn/info/1179/9109.htm' ],
      id: 'alibaba-unianimate-hust-nong-sang',
      faculty: [ '桑农 · Nong Sang', '华中科技大学教授、博士生导师，以该校署名并任通讯作者。', 'https://aia.hust.edu.cn/info/1179/9918.htm' ]
    },
    {
      company: '阿里巴巴',
      team: '通义万相（Tongyi Wan）',
      school: '华中科技大学',
      studentSchool: '华中科技大学',
      employee: [ '张士伟 · Shiwei Zhang', '以阿里通义实验室署名，职业资料列其为阿里研究员；同期学生具名列其为阿里通义万相科研实习指导者。', 'https://www.researchgate.net/profile/Shiwei-Zhang-14' ],
      student: [ '王翔 · Xiang Wang', '华中科技大学 2022 级博士生；此前的本人讲师简介列其在阿里达摩院城市大脑实验室科研实习。', 'https://aia.hust.edu.cn/info/1179/9109.htm' ],
      title: 'UniAnimate: Taming Unified Video Diffusion Models for Consistent Human Image Animation',
      short: 'UniAnimate',
      date: '2024-06',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2406.01188',
      extra: [
        [ '同一学生的阿里实习及校内导师', 'https://course.zhidx.com/teacher/detail/MjI5YzIyNTdlNGZmZjczN2U4ZDM%3D' ],
        [ '同期论文与同一实习计划', 'https://doi.org/10.1016/j.cviu.2023.103737' ],
        [ '阿里为申请人的同期张士伟专利', 'https://patents.google.com/patent/EP4722982A4/en' ]
      ],
      evidence: '本篇明确致谢阿里研究实习计划，同时列有第一作者、华中科大的两位博士导师及阿里作者张士伟；论文同时致谢华中科大校讯中具名授予王翔的博士研究项目。本人公开讲师资料列出在达摩院进行视觉研究实习。',
      advising: [ '博士共同导师', '华中科技大学官方报道明确列桑农、高常鑫为王翔的两位博士导师。', 'https://aia.hust.edu.cn/info/1179/9109.htm' ],
      id: 'alibaba-unianimate-hust-changxin-gao',
      faculty: [ '高常鑫 · Changxin Gao', '华中科技大学教授、博士生导师，同篇以该校署名。', 'https://aia.hust.edu.cn/info/1179/9918.htm' ]
    },
    {
      id: 'vtriune-minimax-nwpu-dai',
      company: 'MiniMax',
      team: '多模态强化学习 · V-Triune',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '戴玉超 · Yuchao Dai', '西北工业大学电子信息学院教授、博士生导师，NPU-CVR 课题组负责人；原文列其为该项研究的指导者之一。', 'https://dianzi.nwpu.edu.cn/info/1643/13328.htm' ],
      employee: [
        '闫俊杰 · Junjie Yan',
        'MiniMax 创始人、首席执行官及首席技术官；论文中以 MiniMax 署名，为核心贡献者及通讯作者。',
        'https://ir.minimax.io/zh-HK/corporate-information/management'
      ],
      student: [ '杜林鸽 · Linge Du', '西北工业大学戴玉超课题组名录列为 2023 级硕士生。2025 年论文明确将其同时署为西北工业大学与 MiniMax，并列为共同第一作者及核心贡献者。', 'http://npu-cvr.cn/graduate/' ],
      title: 'One RL to See Them All: Visual Triple Unified Reinforcement Learning',
      short: 'V-Triune',
      date: '2025-05',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2505.18129v1',
      extra: [
        [ '西工大 NPU-CVR 课题组学生名录', 'http://npu-cvr.cn/graduate/' ],
        [ '企业专利：杜林鸽与本论文项目负责人沈旭阳同为发明人', 'https://patents.google.com/patent/CN121145976A/zh' ],
        [ 'MiniMax 官方项目仓库', 'https://github.com/MiniMax-AI/One-RL-to-See-Them-All' ]
      ],
      evidence: '2025 年原始预印本给共同第一作者 Linge Du 赋予西北工业大学和 MiniMax 两个署名，并单列为核心贡献者。戴玉超课题组公开名录以杜林鸽及 dulinge 标识列其为 2023 级硕士生。戴玉超是本项目具名指导者，MiniMax 创始人闫俊杰为同篇核心贡献者及通讯作者。',
      advising: [ '论文研究指导', '实验室名录明确列杜林鸽为戴玉超所领导的西工大课题组 2023 级硕士生；论文将同组戴玉超列为项目指导作者，且戴玉超是作者表中唯一的西工大指导者。', 'https://arxiv.org/html/2505.18129v1#Sx1' ]
    },
    {
      id: 'jd-panopticpartformer-pku-tong',
      company: '京东',
      team: '京东探索研究院',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '童云海 · Yunhai Tong', '研究时为北京大学智能学院教师，2022 年校方列为数据智能研究负责人，同篇北大通讯作者。', 'https://sai.pku.edu.cn/znxyenglish/info/1087/2313.htm' ],
      employee: [ 'Yibo Yang', '2021–2023 年任京东探索研究院研究科学家；2023 年公开稿署京东探索研究院并列为共同通讯作者。', 'https://cemse.kaust.edu.sa/profiles/yibo-yang' ],
      student: [ 'Xiangtai Li', '2017 年 9 月至 2022 年 7 月为北京大学博士生；个人主页在实习部分列由 Yibo Yang、陶大程指导的京东 AI Lab 远程合作。', 'https://lxtgh.github.io/' ],
      title: 'PanopticPartFormer++: A Unified and Decoupled View for Panoptic Part Segmentation',
      short: 'PanopticPartFormer++',
      date: '2024-12',
      venue: 'IEEE TPAMI',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2301.00954v1',
      extra: [
        [ 'IEEE 正式论文', 'https://doi.org/10.1109/TPAMI.2024.3453916' ],
        [ '北大教师公开正式稿', 'https://zhouchenlin.github.io/Publications/2025-TPAMI-PanopticPartFormer.pdf' ],
        [ '同一团队及学生的同期原始方法', 'https://arxiv.org/pdf/2204.04655' ]
      ],
      evidence: '2023 年 1 月公开的扩展稿首页说明第一作者的主要工作在北京大学博士在读时完成；两名京东导师都署名京东探索研究院，其中 Yibo Yang 与其校内博士导师童云海为共同通讯。学生本人将与这两名合作者的京东合作列在实习履历。',
      advising: [ '博士导师', 'Xiangtai Li 的个人主页明确列童云海为北大博士导师。', 'https://lxtgh.github.io/' ]
    },
    {
      company: '字节跳动',
      team: '智能创作（Intelligent Creation）',
      school: '复旦大学',
      studentSchool: '复旦大学',
      employee: [ 'Jie Shao', '其职业档案列字节跳动任职；同篇项目页以字节智能创作团队署名，列为企业项目负责人。', 'https://cn.linkedin.com/in/jieshao' ],
      student: [ '张辉 · Hui Zhang', '2021 年起在复旦读研，研究期间为复旦博士生。2024 年 1 月至 2025 年 7 月在字节智能创作团队实习。', 'https://huizhang0812.github.io/' ],
      title: 'CreatiDesign: A Unified Multi-Conditional Diffusion Transformer for Creative Graphic Design',
      short: 'CreatiDesign',
      date: '2026-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2505.19114',
      extra: [
        [ 'ICLR 正式索引', 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/b46b78c353f672d83997d4cce5f1b0fb-Abstract-Conference.html' ],
        [ '作者项目页及三方分工', 'https://huizhang0812.github.io/CreatiDesign/' ],
        [ '同期字节项目的企业署名及通讯信息', 'https://proceedings.mlr.press/v267/nie25c.html' ]
      ],
      evidence: '原文第一作者同时署复旦和字节智能创作，预印本于字节实习期内公开。学生履历独立列明团队和研究方向；两位具名复旦博士导师同篇署名。',
      advising: [ '博士共同导师', '张辉个人主页明确列吴祖煊和姜育刚为其复旦博士导师，两人均在作者表中。', 'https://huizhang0812.github.io/' ],
      id: 'bytedance-creatidesign-fudan-zuxuan-wu',
      faculty: [ '吴祖煊 · Zuxuan Wu', '复旦大学计算机学院教师、博士生导师，论文以复旦署名。', 'https://cs.fudan.edu.cn/7b/d6/c24781a490454/page.htm' ]
    },
    {
      company: '字节跳动',
      team: '智能创作（Intelligent Creation）',
      school: '复旦大学',
      studentSchool: '复旦大学',
      employee: [ 'Jie Shao', '其职业档案列字节跳动任职；同篇项目页以字节智能创作团队署名，列为企业项目负责人。', 'https://cn.linkedin.com/in/jieshao' ],
      student: [ '张辉 · Hui Zhang', '2021 年起在复旦读研，研究期间为复旦博士生。2024 年 1 月至 2025 年 7 月在字节智能创作团队实习。', 'https://huizhang0812.github.io/' ],
      title: 'CreatiDesign: A Unified Multi-Conditional Diffusion Transformer for Creative Graphic Design',
      short: 'CreatiDesign',
      date: '2026-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2505.19114',
      extra: [
        [ 'ICLR 正式索引', 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/b46b78c353f672d83997d4cce5f1b0fb-Abstract-Conference.html' ],
        [ '作者项目页及三方分工', 'https://huizhang0812.github.io/CreatiDesign/' ],
        [ '同期字节项目的企业署名及通讯信息', 'https://proceedings.mlr.press/v267/nie25c.html' ]
      ],
      evidence: '原文第一作者同时署复旦和字节智能创作，预印本于字节实习期内公开。学生履历独立列明团队和研究方向；两位具名复旦博士导师同篇署名。',
      advising: [ '博士共同导师', '张辉个人主页明确列吴祖煊和姜育刚为其复旦博士导师，两人均在作者表中。', 'https://huizhang0812.github.io/' ],
      id: 'bytedance-creatidesign-fudan-yugang-jiang',
      faculty: [ '姜育刚 · Yu-Gang Jiang', '复旦大学计算机领域教授、博士生导师，论文以复旦署名。', 'https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp' ]
    },
    {
      id: 'bytedance-cdpruner-pku-shanghang-zhang',
      company: '字节跳动',
      team: '商业安全 · 应用算法与基础模型',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '仉尚航 · Shanghang Zhang', '北京大学计算机学院教师，同篇署北京大学并任通讯作者。', 'https://cs.pku.edu.cn/info/1236/2067.htm' ],
      employee: [ '佘琪 · Qi She', '2020 年加入字节 AI Lab，2023 年 12 月起负责字节商业安全应用算法与基础模型团队；原文以字节跳动署名。', 'https://qi-she.net/' ],
      student: [ '张启哲 · Qizhe Zhang', '2023 年 9 月起为北京大学博士生，2024 年 3 月至 2026 年 6 月在字节科研实习，具名企业导师佘琪。', 'https://theia4869.com/cv/resume.pdf' ],
      title: 'Beyond Attention or Similarity: Maximizing Conditional Diversity for Token Pruning in MLLMs',
      short: 'CDPruner',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2025/file/2433fec2144ccf5fea1c9c5ebdbc3924-Paper-Conference.pdf',
      extra: [ [ '学生的校企研究项目页', 'https://theia4869.com/CDPruner/' ], [ '2025 年 6 月公开首版', 'https://arxiv.org/abs/2506.10967' ] ],
      evidence: '正式论文首页将字节实习脚注具名附于第一作者，学生简历同时确认在读、实习区间及同篇企业指导者。北大博士导师同篇署名。',
      advising: [ '博士导师', '学生履历具名列仉尚航为其北京大学博士导师。', 'https://theia4869.com/cn/' ]
    },
    {
      company: '字节跳动',
      team: 'TikTok · 视觉语言模型',
      studentSchool: '香港中文大学',
      employee: [ '赖昕 · Xin Lai', '2024 年获博士学位后在字节跳动 TikTok 任研究员。个人主页及原文均列出企业研究身份。', 'https://x-lai.github.io/' ],
      student: [ 'Senqiao Yang', '香港中文大学博士生，2024 年 12 月至 2025 年 12 月在字节跳动实习；正式论文双署香港中文大学及字节跳动。', 'https://senqiaoyang.com/' ],
      title: 'VisionThink: Smart and Efficient Vision Language Model via Reinforcement Learning',
      short: 'VisionThink',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2025/file/88be023075a5a3ff3dc3b5d26623fa22-Paper-Conference.pdf',
      extra: [ [ '2025 年 7 月公开的首版', 'https://arxiv.org/abs/2507.13348' ], [ '联合指导者的课题组名录', 'https://jiaya.me/people' ] ],
      evidence: '学生个人主页明确说明其字节视觉语言研究实习产生了 NeurIPS 2025 论文，个人论文清单和正式论文双署名均对应 VisionThink。两位具名校内导师及 TikTok 视觉语言研究员均在同篇作者表内。',
      advising: [ '博士共同导师', 'Senqiao Yang 在主页中具名列 Bei Yu 和贾佳亚为其博士导师。', 'https://senqiaoyang.com/' ],
      id: 'bytedance-visionthink-cuhk-bei-yu',
      school: '香港中文大学',
      faculty: [ 'Bei Yu', '香港中文大学计算机科学与工程学系教授，正式论文以香港中文大学署名。', 'https://www.cse.cuhk.edu.hk/~byu/' ]
    },
    {
      company: '字节跳动',
      team: 'TikTok · 视觉语言模型',
      studentSchool: '香港中文大学',
      employee: [ '赖昕 · Xin Lai', '2024 年获博士学位后在字节跳动 TikTok 任研究员。个人主页及原文均列出企业研究身份。', 'https://x-lai.github.io/' ],
      student: [ 'Senqiao Yang', '香港中文大学博士生，2024 年 12 月至 2025 年 12 月在字节跳动实习；正式论文双署香港中文大学及字节跳动。', 'https://senqiaoyang.com/' ],
      title: 'VisionThink: Smart and Efficient Vision Language Model via Reinforcement Learning',
      short: 'VisionThink',
      date: '2025-12',
      venue: 'NeurIPS',
      area: '视觉与多模态',
      paper: 'https://proceedings.neurips.cc/paper_files/paper/2025/file/88be023075a5a3ff3dc3b5d26623fa22-Paper-Conference.pdf',
      extra: [ [ '2025 年 7 月公开的首版', 'https://arxiv.org/abs/2507.13348' ], [ '联合指导者的课题组名录', 'https://jiaya.me/people' ] ],
      evidence: '学生个人主页明确说明其字节视觉语言研究实习产生了 NeurIPS 2025 论文，个人论文清单和正式论文双署名均对应 VisionThink。两位具名校内导师及 TikTok 视觉语言研究员均在同篇作者表内。',
      advising: [ '博士共同导师', 'Senqiao Yang 在主页中具名列 Bei Yu 和贾佳亚为其博士导师。', 'https://senqiaoyang.com/' ],
      id: 'bytedance-visionthink-hkust-jiaya-jia',
      school: '香港科技大学',
      faculty: [ '贾佳亚 · Jiaya Jia', '2024 年起任香港科技大学讲座教授，论文同时署香港科技大学与香港中文大学。', 'https://cse.hkust.edu.hk/admin/people/faculty/profile/jia' ]
    },
    {
      id: 'bytedance-minio3-hku-hengshuang-zhao',
      company: '字节跳动',
      team: 'TikTok · 视觉语言模型',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '赵恒爽 · Hengshuang Zhao', '香港大学计算与数据科学学院教师，同篇署香港大学并任通讯作者。', 'https://i.cs.hku.hk/~hszhao/index.html' ],
      employee: [ '赖昕 · Xin Lai', '2024 年获博士学位后在字节跳动 TikTok 任研究员。个人主页及原文均列出企业研究身份。', 'https://x-lai.github.io/' ],
      student: [ '李俊奕 · Junyi Li', '2025 年 9 月入学香港大学博士项目，2024 年 11 月至 2026 年 1 月在 TikTok 实习；原文署香港大学与字节跳动。', 'https://provencestar.github.io/' ],
      title: 'Mini-o3: Scaling Up Reasoning Patterns and Interaction Turns for Visual Search',
      short: 'Mini-o3',
      date: '2026-04',
      venue: 'ICLR',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2509.07969v1',
      extra: [ [ '企业与学校合著者维护的项目页', 'https://mini-o3.github.io/' ], [ '香港大学课题组名录', 'https://i.cs.hku.hk/~hszhao/lab.html' ] ],
      evidence: '首版在第一作者的港大博士学籍与 TikTok 实习重叠期间发布，并为其列出港大和字节双署名。校内博士导师为通讯作者，企业研究员赖昕在个人主页亦列出同期项目发布。',
      advising: [ '博士导师', '李俊奕的个人主页具名列出香港大学博士导师赵恒爽，校方实验室名录独立确认。', 'https://provencestar.github.io/' ]
    },
    {
      company: '京东',
      team: '京东探索研究院',
      school: '武汉大学',
      studentSchool: '武汉大学',
      employee: [
        '沈力 · Li Shen',
        '2023 年 11 月的学术报告主讲人履历记载其任京东探索研究院研究科学家；AAAI 原文署京东探索研究院，也是第一作者自述的实习导师。',
        'https://ai.ruc.edu.cn/xsjz/20231115003.html'
      ],
      student: [ 'Di Wu', '研究时在武汉大学计算数学专业就读；个人主页列出武汉大学本硕训练、京东探索研究院科研实习与企业导师沈力。', 'https://woody2357.github.io/' ],
      title: 'Neural Network Approximation for Pessimistic Offline Reinforcement Learning',
      short: 'Pessimistic Offline RL',
      date: '2024-03',
      venue: 'AAAI',
      area: '强化学习',
      paper: 'https://arxiv.org/html/2312.11863',
      extra: [
        [ 'AAAI 正式论文', 'https://doi.org/10.1609/aaai.v38i14.29517' ],
        [ '学生在武汉大学报告的本论文幻灯片', 'https://woody2357.github.io/files/rl_whu_2024.pdf' ],
        [ '2025 年 11 月作者个人主页归档', 'https://raw.githubusercontent.com/woody2357/woody2357.github.io/93160452b4/index.html' ]
      ],
      evidence: 'AAAI 原文把第一作者及焦雨领、吕锡亮署武汉大学，把沈力署京东探索研究院。第一作者的履历具名记载沈力是其在京东探索研究院的科研实习导师，焦雨领和吕锡亮均指导其武汉大学本硕阶段；他在武汉大学于 2024 年 3 月作本论文报告。同文导师、岗位与时间交叉相符。公开履历没有给出实习起止月份。',
      id: 'jd-pessimisticrl-whu-jiao',
      faculty: [
        '焦雨领 · Yuling Jiao',
        '武汉大学教授、论文校方合作者，研究期间为 Di Wu 在武汉大学本硕阶段的具名指导教师。',
        'https://jszy.whu.edu.cn/jiaoyuling/zh_CN/lwcg/1349467/list/index.htm'
      ],
      advising: [ '校内指导教师', 'Di Wu 的个人主页把焦雨领、吕锡亮都列为其在武汉大学计算数学本硕阶段的指导教师。', 'https://woody2357.github.io/' ]
    },
    {
      company: '京东',
      team: '京东探索研究院',
      school: '武汉大学',
      studentSchool: '武汉大学',
      employee: [
        '沈力 · Li Shen',
        '2023 年 11 月的学术报告主讲人履历记载其任京东探索研究院研究科学家；AAAI 原文署京东探索研究院，也是第一作者自述的实习导师。',
        'https://ai.ruc.edu.cn/xsjz/20231115003.html'
      ],
      student: [ 'Di Wu', '研究时在武汉大学计算数学专业就读；个人主页列出武汉大学本硕训练、京东探索研究院科研实习与企业导师沈力。', 'https://woody2357.github.io/' ],
      title: 'Neural Network Approximation for Pessimistic Offline Reinforcement Learning',
      short: 'Pessimistic Offline RL',
      date: '2024-03',
      venue: 'AAAI',
      area: '强化学习',
      paper: 'https://arxiv.org/html/2312.11863',
      extra: [
        [ 'AAAI 正式论文', 'https://doi.org/10.1609/aaai.v38i14.29517' ],
        [ '学生在武汉大学报告的本论文幻灯片', 'https://woody2357.github.io/files/rl_whu_2024.pdf' ],
        [ '2025 年 11 月作者个人主页归档', 'https://raw.githubusercontent.com/woody2357/woody2357.github.io/93160452b4/index.html' ]
      ],
      evidence: 'AAAI 原文把第一作者及焦雨领、吕锡亮署武汉大学，把沈力署京东探索研究院。第一作者的履历具名记载沈力是其在京东探索研究院的科研实习导师，焦雨领和吕锡亮均指导其武汉大学本硕阶段；他在武汉大学于 2024 年 3 月作本论文报告。同文导师、岗位与时间交叉相符。公开履历没有给出实习起止月份。',
      id: 'jd-pessimisticrl-whu-lu',
      faculty: [
        '吕锡亮 · Xiliang Lu',
        '武汉大学计算数学教授和博硕导师，论文校方通讯作者；研究期间为 Di Wu 在武汉大学本硕阶段的具名指导教师。',
        'https://jszy.whu.edu.cn/lvxiliang/zh_CN/index/275065/list/index.htm'
      ],
      advising: [ '校内指导教师', 'Di Wu 的个人主页把焦雨领、吕锡亮都列为其在武汉大学计算数学本硕阶段的指导教师。', 'https://woody2357.github.io/' ]
    },
    {
      id: 'zhipu-gaussianquant-thu-zhang',
      company: '智谱（GLM / Z.ai）',
      team: '视觉生成（CogView / CogVideo）',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '张亚勤 · Ya-Qin Zhang', '清华大学智能科学讲席教授、智能产业研究院创始院长，论文校方作者和第一作者博士导师。', 'https://air.tsinghua.edu.cn/gyair/csyz.htm' ],
      employee: [
        '唐杰 · Jie Tang',
        '智谱创始人兼首席科学家（首席 AI 官），负责技术战略与前沿研发；作者预印本第二版署智谱，正式会议版仍列为通讯作者。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0419/2026041900085.pdf#page=71'
      ],
      student: [ '许同达 · Tongda Xu', '2023 年 9 月起在清华读博，2025 年 2 月起在智谱文生图基础模型团队科研实习。', 'https://tongdaxu.github.io/cv_xu.pdf' ],
      title: 'Training-Free Vector Quantization via Gaussian VAEs',
      short: 'Gaussian Quant',
      date: '2026-07',
      venue: 'ICML',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mlresearch/v306/main/assets/xu26cn/xu26cn.pdf',
      extra: [
        [ 'ICML 正式出版索引', 'https://proceedings.mlr.press/v306/xu26cn.html' ],
        [ '作者预印本第二版与企业署名', 'https://arxiv.org/html/2512.06609v2' ],
        [
          '早期公开的首席科学家身份',
          'https://www.labmanager.com/digital-science-partners-with-zhipu-ai-to-conduct-data-challenges-and-build-covid-19-information-portal-22222'
        ],
        [ '作者项目与 CogView 研发路径', 'https://github.com/tongdaxu/VQ-VAE-from-Gaussian-VAE' ]
      ],
      evidence: 'ICML 首页具名注明许同达在智谱全职实习期间完成本研究，他的简历亦把 Gaussian VAE 图像 tokenization 列为智谱文生图实习项目。张亚勤与智谱首席科学家唐杰同文；唐杰在预印本第二版署智谱，在 ICML 版署清华并为通讯作者，两版对照可核对其双重机构身份。',
      advising: [ '博士导师', '许同达的个人主页与简历均列张亚勤为清华博士导师。', 'https://tongdaxu.github.io/' ]
    },
    {
      id: 'zhipu-infdit-thu-dong',
      company: '智谱（GLM / Z.ai）',
      team: '视觉生成（CogView / CogVideo）',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '东昱晓 · Yuxiao Dong', '研究时任清华大学计算机系教师，为同篇校方作者及学生在清华本科阶段的具名科研指导教师。', 'https://keg.cs.tsinghua.edu.cn/yuxiao/' ],
      employee: [ '丁铭 · Ming Ding', '2024 年 5 月斯坦福 CS25 记录任智谱研究科学家。ECCV 正式版以智谱署名。', 'https://web.stanford.edu/class/cs25/past/cs25-v4/' ],
      student: [ '姜赫扬 · Heyang Jiang', '当时为清华大学数学物理和软件工程双学士在读生；2022 年 10 月至 2024 年 7 月在智谱和清华 KEG 实验室做科研实习。', 'https://redredsheep.github.io/CV.pdf' ],
      title: 'Inf-DiT: Upsampling Any-Resolution Image with Memory-Efficient Diffusion Transformer',
      short: 'Inf-DiT',
      date: '2024-10',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2405.04312',
      extra: [
        [ 'ECCV 正式出版索引', 'https://link.springer.com/chapter/10.1007/978-3-031-73010-8_9' ],
        [ '学生主页及导师', 'https://redredsheep.github.io/' ],
        [ '清华 KEG 教师主页', 'https://keg.cs.tsinghua.edu.cn/yuxiao/' ]
      ],
      evidence: '姜赫扬的个人简历在智谱和清华 KEG 实习履历下具名列东昱晓为指导老师，明确将该 ECCV 论文列为该段实习的成果；正式版列姜赫扬、东昱晓为清华作者，丁铭为智谱作者，预印本列姜赫扬校企双署名。',
      advising: [ '校内本科科研导师', '姜赫扬的个人主页在清华本科阶段的科研指导关系中列东昱晓；其正式简历将东昱晓明确列为智谱和 KEG 联合实习经历的校内指导教师。', 'https://redredsheep.github.io/CV.pdf' ]
    },
    {
      id: 'zhipu-glm4voice-thu-dong',
      company: '智谱（GLM / Z.ai）',
      team: 'GLM-4-Voice',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '东昱晓 · Yuxiao Dong', '清华大学计算机系教师，论文校方通讯作者；2024 年校方新生典礼报道确认其为刘明道的直博导师。', 'https://www.cs.tsinghua.edu.cn/info/1058/6330.htm' ],
      employee: [
        '杜政晓 · Zhengxiao Du',
        '同文署智谱，智谱上市申报文件把他列入公司研发关键人员并明确称为算法专家。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0108/11984305/sehk25121901749.pdf'
      ],
      student: [ '刘明道 · Mingdao Liu', '2024 年起为清华大学计算机系直博生，论文具名注明其在智谱科研实习期间完成工作。', 'https://www.cs.tsinghua.edu.cn/info/1058/6330.htm' ],
      title: 'Scaling Speech-Text Pre-training with Synthetic Interleaved Data',
      short: 'GLM-4-Voice 语音预训练',
      date: '2025-04',
      venue: 'ICLR',
      area: '语音与音频',
      paper: 'https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf',
      extra: [
        [ '2024 年 11 月首版预印本', 'https://arxiv.org/abs/2411.17607' ],
        [ '智谱官方 GLM-4-Voice 项目', 'https://github.com/zai-org/GLM-4-Voice' ],
        [ '2025 年智谱 GLM 研发人员问答', 'https://www.infoq.cn/news/Xio27Fad3E973hyO203u' ]
      ],
      evidence: 'ICLR 首页具名注明共同第一作者刘明道在智谱实习时参与本论文，博士导师东昱晓为通讯作者。杜政晓同篇以智谱署名，港交所申报材料另列为智谱算法专家；智谱官方开源项目把本研究列作 GLM-4-Voice 的论文。',
      advising: [ '博士导师', '2024 年清华计算机系新生典礼报道中，刘明道自述为 2024 级直博生，具名确认东昱晓是导师。', 'https://www.cs.tsinghua.edu.cn/info/1058/6330.htm' ]
    },
    {
      id: 'minimax-webexplorer-hkust-junxian-he',
      company: 'MiniMax',
      team: '大模型后训练 · 网页检索智能体',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [ '何俊贤 · Junxian He', '香港科技大学计算机科学与工程学系教师，原文以港科大署名。', 'https://researchportal.hkust.edu.hk/en/persons/junxian-he/' ],
      employee: [
        '赵鹏宇 · Pengyu Zhao',
        '2023 年加入 MiniMax 并担任大语言模型研究和工程负责人；原文以 MiniMax 署名。',
        'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf#page=362'
      ],
      student: [ 'Junteng Liu', '2024 年起为香港科技大学博士生，2025 年 2 月起在 MiniMax 实习并参与 M1 和 M2 系列。个人论文表列其为本篇第一作者。', 'https://vicent0205.github.io/' ],
      title: 'WebExplorer: Explore and Evolve for Training Long-Horizon Web Agents',
      short: 'WebExplorer',
      date: '2025-09',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2509.06501',
      extra: [
        [ '港科大项目仓库确认 MiniMax 合作', 'https://github.com/hkust-nlp/WebExplorer' ],
        [ 'MiniMax-M2 技术报告中的 WebExplorer 使用和归属', 'https://arxiv.org/html/2605.26494#S4.SS2.SSS3' ]
      ],
      evidence: '学生主页列出企业实习与同一期间公开的 WebExplorer，港科大官方项目仓库明确该篇是双方合作。MiniMax 技术报告将这套网页检索智能体作为 M2 搜索方向的评测框架；本项目与 SynLogic 的逻辑题训练项目分别有公开研发用途。',
      advising: [ '博士导师', '何俊贤课题组公开名录将 Junteng Liu 列为博士生，学生主页亦具名确认。', 'https://jxhe.github.io/group/' ]
    },
    {
      company: '腾讯',
      team: 'PCG · 腾讯视频 AI 技术中心',
      studentSchool: '北京邮电大学',
      employee: [
        '陈曦 · Xi Chen',
        '腾讯视频智能创作平台部算法专家，论文中署腾讯 PCG 在线视频事业部 AI 技术中心；此前个人主页亦披露在腾讯担任高级研究员。',
        'https://www.ctpia.com.cn/mobile/Hyxx/detail/id/464.html'
      ],
      student: [ '张沛瑄 · Peixuan Zhang', '北京邮电大学人工智能学院在读博士生。同期会议演讲人简介列出在腾讯研究团队实习；本论文第一作者脚注具体指向腾讯 PCG。', 'https://zhidx.com/p/555802.html' ],
      title: 'A Benchmark and Multi-Agent System for Instruction-driven Cinematic Video Compilation',
      short: 'CineAgents',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2604.10456v1',
      extra: [
        [ '2025 年学术期刊作者简介', 'https://pub-e7bc7e5ed67b401a8e9e587c3dee22b6.r2.dev/publications/2025/Zhang_TPAMI25.pdf' ],
        [ '中国计算机学会 2023 年作者简介所载既往指导关系', 'https://tc.ccf.org.cn/upload/resources/file/2024/02/27/5740efa88f5bf2bece0bf93d6dd6742b.pdf' ],
        [ '同期行业报告：腾讯视频智能创作岗位及项目', 'https://www.cdut.edu.cn/__local/7/20/13/C34976723F26343861732D86AB2_EA5B70E7_15C76B5.pdf' ],
        [ '同篇作者的 ECCV 2026 发表记录', 'https://shuchenweng.github.io/' ]
      ],
      evidence: '论文将腾讯 PCG 实习脚注附于第一作者，企业共同作者署腾讯视频 AI 技术中心。同期演讲人简介确认张沛瑄在北邮攻读博士、在腾讯实习，并具名列出两位同篇高校指导者。',
      advising: [ '博士共同指导', '张沛瑄的同期会议演讲人简介具名列出李思与施柏鑫为其博士导师。', 'https://zhidx.com/p/555802.html' ],
      id: 'cineagents-tencent-bupt-si-li',
      school: '北京邮电大学',
      faculty: [ '李思 · Si Li', '北京邮电大学人工智能学院副教授、博士生导师，论文署北邮并任通讯作者。', 'https://jwbs.bupt.edu.cn/info/1054/1335.htm' ]
    },
    {
      company: '腾讯',
      team: 'PCG · 腾讯视频 AI 技术中心',
      studentSchool: '北京邮电大学',
      employee: [
        '陈曦 · Xi Chen',
        '腾讯视频智能创作平台部算法专家，论文中署腾讯 PCG 在线视频事业部 AI 技术中心；此前个人主页亦披露在腾讯担任高级研究员。',
        'https://www.ctpia.com.cn/mobile/Hyxx/detail/id/464.html'
      ],
      student: [ '张沛瑄 · Peixuan Zhang', '北京邮电大学人工智能学院在读博士生。同期会议演讲人简介列出在腾讯研究团队实习；本论文第一作者脚注具体指向腾讯 PCG。', 'https://zhidx.com/p/555802.html' ],
      title: 'A Benchmark and Multi-Agent System for Instruction-driven Cinematic Video Compilation',
      short: 'CineAgents',
      date: '2026-09',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2604.10456v1',
      extra: [
        [ '2025 年学术期刊作者简介', 'https://pub-e7bc7e5ed67b401a8e9e587c3dee22b6.r2.dev/publications/2025/Zhang_TPAMI25.pdf' ],
        [ '同期行业报告：腾讯视频智能创作岗位及项目', 'https://www.cdut.edu.cn/__local/7/20/13/C34976723F26343861732D86AB2_EA5B70E7_15C76B5.pdf' ],
        [ '同篇作者的 ECCV 2026 发表记录', 'https://shuchenweng.github.io/' ]
      ],
      evidence: '论文将腾讯 PCG 实习脚注附于第一作者，企业共同作者署腾讯视频 AI 技术中心。同期演讲人简介确认张沛瑄在北邮攻读博士、在腾讯实习，并具名列出两位同篇高校指导者。',
      advising: [ '博士共同指导', '张沛瑄的同期会议演讲人简介具名列出李思与施柏鑫为其博士导师。', 'https://zhidx.com/p/555802.html' ],
      id: 'cineagents-tencent-pku-boxin-shi',
      school: '北京大学',
      faculty: [ '施柏鑫 · Boxin Shi', '北京大学计算机学院长聘副教授、研究员、博士生导师，论文署北大。', 'https://cs.pku.edu.cn/info/1089/1812.htm' ]
    },
    {
      company: '腾讯',
      team: '优图天衍研究中心（Jarvis）',
      studentSchool: '西安交通大学',
      title: 'When MOE Meets LLMs: Parameter Efficient Fine-tuning for Multi-task Medical Applications',
      short: 'MoELoRA',
      date: '2024-07',
      venue: 'SIGIR',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2310.18339v2',
      employee: [ '吴宪 · Xian Wu', '2017 年 12 月加入腾讯，任天衍研究中心主任、专家研究员。原文署腾讯优图天衍并任通讯作者。', 'https://jarvislab.tencent.com/index-en.html' ],
      student: [
        '刘启东 · Qidong Liu',
        '2019 年 9 月至 2025 年 6 月在西安交大读博，2022 年 9 月起与港城联合培养；2023 年 5 月至 2024 年 8 月在腾讯天衍实习。',
        'https://liuqidong07.github.io/'
      ],
      evidence: '刘启东的同期简历将本论文列为 2023 年 6 至 10 月在腾讯天衍开展的医疗大模型项目成果，并列吴宪为企业指导者。原文首页列两位博士导师及腾讯天衍的吴宪。学生学籍为西安交大，同时在香港城市大学联培。',
      extra: [
        [ '同期简历：企业实习、项目和论文', 'https://liuqidong07.github.io/cv/resume_20240326.pdf' ],
        [ '腾讯天衍发表目录', 'https://jarvislab.tencent.com/aca-publications-conference-6.html' ],
        [ 'ACM 正式论文', 'https://doi.org/10.1145/3626772.3657722' ]
      ],
      id: 'moelora-tencent-xjtu-feng-tian',
      school: '西安交通大学',
      faculty: [ '田锋 · Feng Tian', '西安交通大学教师、博士生导师，原文署西安交大并任通讯作者。', 'https://faculty.xjtu.edu.cn/fengtian/zh_CN/zhym/976524/list/index.htm' ],
      advising: [ '博士导师', '刘启东本人履历明确列田锋为西安交大博士导师。', 'https://liuqidong07.github.io/' ]
    },
    {
      company: '腾讯',
      team: '优图天衍研究中心（Jarvis）',
      studentSchool: '西安交通大学',
      title: 'When MOE Meets LLMs: Parameter Efficient Fine-tuning for Multi-task Medical Applications',
      short: 'MoELoRA',
      date: '2024-07',
      venue: 'SIGIR',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2310.18339v2',
      employee: [ '吴宪 · Xian Wu', '2017 年 12 月加入腾讯，任天衍研究中心主任、专家研究员。原文署腾讯优图天衍并任通讯作者。', 'https://jarvislab.tencent.com/index-en.html' ],
      student: [
        '刘启东 · Qidong Liu',
        '2019 年 9 月至 2025 年 6 月在西安交大读博，2022 年 9 月起与港城联合培养；2023 年 5 月至 2024 年 8 月在腾讯天衍实习。',
        'https://liuqidong07.github.io/'
      ],
      evidence: '刘启东的同期简历将本论文列为 2023 年 6 至 10 月在腾讯天衍开展的医疗大模型项目成果，并列吴宪为企业指导者。原文首页列两位博士导师及腾讯天衍的吴宪。学生学籍为西安交大，同时在香港城市大学联培。',
      extra: [
        [ '同期简历：企业实习、项目和论文', 'https://liuqidong07.github.io/cv/resume_20240326.pdf' ],
        [ '腾讯天衍发表目录', 'https://jarvislab.tencent.com/aca-publications-conference-6.html' ],
        [ 'ACM 正式论文', 'https://doi.org/10.1145/3626772.3657722' ]
      ],
      id: 'moelora-tencent-cityu-xiangyu-zhao',
      school: '香港城市大学',
      faculty: [ '赵翔宇 · Xiangyu Zhao', '香港城市大学数据科学学院教师，原文署港城并任通讯作者。', 'https://www.cityu.edu.hk/stfprofile/xyzhao.htm' ],
      advising: [ '博士联培导师', '刘启东本人履历列赵翔宇为香港城市大学的博士联培导师。', 'https://liuqidong07.github.io/' ]
    },
    {
      id: 'loco-tencent-xjtu-weizhan-zhang',
      company: '腾讯',
      team: '微信 AI（WeChat AI）',
      school: '西安交通大学',
      studentSchool: '西安交通大学',
      title: 'Think Less, Locally: Local Preference Learning for Reasoning Compression',
      short: 'LoCo',
      date: '2026-11',
      venue: 'arXiv',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2611.04814v1',
      faculty: [ '张未展 · Weizhan Zhang', '西安交通大学教师，原文署西安交大并任通讯作者。', 'https://gr.xjtu.edu.cn/en/web/zhangwzh123' ],
      employee: [ 'Liyan Xu', '腾讯微信 AI 高级研究员；论文署 WeChat AI, Tencent Inc.，具名为项目负责人并留腾讯邮箱。', 'https://lxucs.github.io/' ],
      student: [ '袁慕遥 · Muyao Yuan', '西安交通大学在读博士，2026 年 3 月起在腾讯微信 AI 实习，个人主页将本篇列为实习研究同期成果。', 'https://muyaoyuan.github.io/' ],
      evidence: '第一共同作者袁慕遥有具名的微信 AI 项目脚注。论文同时列其西安交大导师张未展和腾讯微信 AI 项目负责人 Liyan Xu。',
      advising: [ '博士导师', '袁慕遥个人学术主页在博士经历中具名列出张未展为导师。', 'https://muyaoyuan.github.io/' ],
      extra: [ [ '预印本索引', 'https://arxiv.org/abs/2611.04814' ], [ '作者公开的项目代码', 'https://github.com/MuyaoYuan/LoCo' ] ]
    },
    {
      id: 'baidu-dgtr-nwpu-han',
      company: '百度',
      team: '百度 VIS',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '韩军伟 · Junwei Han', '西北工业大学自动化学院教授、BRAIN 实验室负责人，为李昊博士期间公开具名的高校共同指导者；论文署西北工业大学。', 'https://zdhxy.nwpu.edu.cn/info/1081/31723.htm' ],
      employee: [
        '王井东 · Jingdong Wang',
        '时任百度计算机视觉首席科学家，论文署百度 VIS，并在 2024 年活动介绍中被列为李昊的百度实习导师。',
        'https://jingdongwang2017.github.io/CV_Jingdong_Wang.pdf'
      ],
      student: [ '李昊 · Hao Li', '西北工业大学 2022 级直博生；2024 年 7 月同期讲者简介称其正在百度 VIS 实习，本人履历列明实习导师和该论文。', 'https://lifuguan.github.io/' ],
      title: 'DGTR: Distributed Gaussian Turbo-Reconstruction for Sparse-View Vast Scenes',
      short: 'DGTR',
      date: '2025-05',
      venue: 'ICRA',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2411.12309v2',
      extra: [
        [ 'ICRA 正式论文', 'https://doi.org/10.1109/ICRA55743.2025.11127313' ],
        [ '西工大博士中期考核公告', 'https://zdhxy.nwpu.edu.cn/info/1120/34483.htm' ]
      ],
      evidence: '李昊作为第一作者署西北工业大学和百度 VIS，同篇作者包括西工大韩军伟和百度 VIS 王井东。2024 年同期讲者简介同时确认在读博士身份、两位校方指导者和百度 VIS 实习。',
      advising: [ '博士期间共同指导', '2024 年 GAMES 活动的讲者简介具名列张鼎文、韩军伟两位为李昊的指导老师。西工大中期考核公告所列学籍导师为张鼎文。', 'https://games-cn.org/games-webinar-20240718-332/' ]
    },
    {
      id: 'deepseek-moe-pku-zhifang-sui',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · MoE 架构',
      school: '北京大学',
      studentSchool: '北京大学',
      title: 'DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models',
      short: 'DeepSeekMoE',
      date: '2024-08',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.acl-long.70.pdf',
      faculty: [ '穗志方 · Zhifang Sui', '北京大学计算机学院教授，论文署北京大学多媒体信息处理重点实验室。', 'https://cs.pku.edu.cn/info/1078/1672.htm' ],
      employee: [ '梁文锋 · Wenfeng Liang', 'DeepSeek 创始人，论文署 DeepSeek-AI，为企业通讯作者。', 'https://www.nature.com/articles/d41586-025-03845-4' ],
      student: [
        '代达劢 · Damai Dai',
        '2019 年进入北京大学攻读博士，2024 年博士毕业。本篇 2024 年 1 月预印本及 ACL 正式论文均具名标明其贡献来自在 DeepSeek 的实习。',
        'https://cs.pku.edu.cn/info/1035/1331.htm'
      ],
      evidence: 'ACL 正式论文首页将代达劢同时署为北大和 DeepSeek，星号明确标明实习贡献。其北大博士导师穗志方及 DeepSeek 创始人梁文锋均为同篇作者。',
      advising: [ '博士导师', '2024 年中国中文信息学会博士学位论文激励计划的公开发布记录列代达劢为北京大学博士论文作者、穗志方为导师。', 'https://photo.china.com.cn/2024-12/03/content_117584008.shtml' ],
      extra: [
        [ '2024 年 1 月首发预印本', 'https://arxiv.org/pdf/2401.06066v1' ],
        [ '北京大学新闻网：研发经历', 'https://news.pku.edu.cn/info/2901/815451.htm' ],
        [ '企业官方代码与技术报告', 'https://github.com/deepseek-ai/DeepSeek-MoE' ]
      ]
    },
    {
      id: 'alibaba-dmgasr-xidian-mingyang-zhang',
      company: '阿里巴巴',
      team: '达摩院 · AI Earth',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [
        '张明阳 · Mingyang Zhang',
        '自 2022 年 9 月任西电电子工程学院副教授及硕士生导师；是论文通讯作者，校内导师主页具名列王昭阳为其硕士研究生。',
        'https://faculty.xidian.edu.cn/ZMY3/zh_CN/index.htm'
      ],
      employee: [ '罗浩 · Hao Luo', '达摩院算法专家、AI Earth 遥感大模型算法负责人，原文署名达摩院和湖畔实验室。', 'https://www.taibo.cn/live/422' ],
      student: [
        '王昭阳 · Zhaoyang Wang',
        '2021 年 9 月至 2023 年 6 月为西电硕士、2023 年 9 月起为该校博士生。本人 ORCID 记载 2023 年 5 月至 2024 年 2 月为达摩院研究实习生。',
        'https://orcid.org/0009-0001-6412-5799'
      ],
      title: 'Enhancing Hyperspectral Images via Diffusion Model and Group-Autoencoder Super-resolution Network',
      short: 'DMGASR',
      date: '2024-02',
      venue: 'AAAI',
      area: '计算机视觉',
      paper: 'https://arxiv.org/pdf/2402.17285',
      extra: [
        [ '正式论文索引', 'https://ojs.aaai.org/index.php/AAAI/article/view/28392' ],
        [ '预印本与首次公开日期', 'https://arxiv.org/abs/2402.17285' ],
        [ 'VALSE 2024 作者中文名', 'https://valser.org/2024/static/VALSE2024_HYSC.pdf' ]
      ],
      evidence: '作者预印本在第一作者王昭阳名下注明本工作在阿里巴巴由李东阳指导实习期间完成。王昭阳的在读与实习重叠，硕士导师张明阳是同篇通讯作者，达摩院遥感大模型负责人罗浩同篇署名。张明阳的校方履历还列出同期主持的达摩院 AIR 创新研究计划。',
      advising: [
        '硕士生导师',
        '张明阳的西电官网学生名录中，王昭阳是单独列出的硕士研究生，并有 2021 年 7 月发布的校内学生详情；学生自报当时在该校读硕。这里称张明阳为硕士阶段导师，不断言其随后仍为博士导师。',
        'https://faculty.xidian.edu.cn/ZMY3/zh_CN/xsxx/405846/content/132132.htm'
      ]
    },
    {
      id: 'moonshot-kimi-dev-tsinghua-yang-liu',
      company: '月之暗面（Kimi）',
      team: 'Kimi 编程智能体',
      school: '清华大学',
      studentSchool: '清华大学',
      title: 'Kimi-Dev: Agentless Training as Skill Prior for SWE-Agents',
      short: 'Kimi-Dev',
      date: '2026-04',
      venue: 'ICLR',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2509.23045v3',
      faculty: [ '刘洋 · Yang Liu', '清华大学计算机科学与技术系教授、智能产业研究院教师，原文署清华。', 'https://nlp.csai.tsinghua.edu.cn/~ly/index_cn.html' ],
      employee: [ '杨植麟 · Zhilin Yang', '月之暗面联合创始人、CEO，同篇作者。', 'https://2024.baai.ac.cn/speakers' ],
      student: [
        '杨宗瀚 · Zonghan Yang',
        '2020 年入学、2025 年 6 月博士毕业；同期简历记载自 2024 年 7 月在月之暗面实习。论文具名列为共同第一作者及项目负责人。',
        'https://minicheshire.github.io/CV_yzh_202410.pdf'
      ],
      evidence: '月之暗面于 2025 年 6 月 16 日公开同一 Kimi-Dev-72B 项目，早于清华 6 月 22 日毕业典礼。作者论文将杨宗瀚列为共同一作和项目负责人，清华导师刘洋及月之暗面创始人杨植麟均同篇署名。',
      advising: [ '博士导师', '清华大学学位论文系统在杨宗瀚的博士学位论文记录中具名列刘洋为导师。', 'https://newetds.lib.tsinghua.edu.cn/qh/paper/summary?dbCode=ETDQH&sysId=304529' ],
      extra: [
        [ '月之暗面 2025 年 6 月的项目发布', 'https://moonshotai.github.io/Kimi-Dev/' ],
        [ '清华自然语言处理实验室毕业新闻', 'https://nlp.csai.tsinghua.edu.cn/news/?page=2' ],
        [ 'ICLR 正式论文', 'https://openreview.net/pdf/56a196a3a0ca98fa4aa64ce3ef7e7c05f19bde18.pdf' ]
      ]
    },
    {
      id: 'moonshot-kimivl-hku-tao-yu',
      company: '月之暗面（Kimi）',
      team: 'Kimi-VL',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '余涛 · Tao Yu', '香港大学计算机科学助理教授、XLANG Lab 负责人，论文附录以香港大学与月之暗面合作身份列名。', 'https://datascience.hku.hk/people/tao-yu/' ],
      employee: [ '吴昊宁 · Haoning Wu', '月之暗面 Kimi-VL 项目负责人，第一方职业主页记载其负责这一模型系列的研发，技术报告也注明项目负责人。', 'https://teowu.github.io/' ],
      student: [ 'Bowen Wang', '2024 年 9 月起在香港大学攻读博士，2025 年 2 月至 12 月在月之暗面实习，博士导师为余涛；本人将 Kimi-VL 技术报告列为参与成果。', 'https://bowenbryanwang.github.io/' ],
      title: 'Kimi-VL Technical Report',
      short: 'Kimi-VL',
      date: '2025-04',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/html/2504.07491#A1',
      extra: [
        [ '预印本及首次公开时间', 'https://arxiv.org/abs/2504.07491' ],
        [ '月之暗面 Kimi-VL 官方项目', 'https://github.com/MoonshotAI/Kimi-VL' ],
        [ '同期企业实习导师及同篇作者 Hao Hu', 'https://mousehu.github.io/' ]
      ],
      evidence: '原文附录同时点名在读实习生 Bowen Wang、博士导师余涛与月之暗面项目负责人吴昊宁；前两位带有香港大学和月之暗面合作署名。Bowen Wang 个人主页确认在读、实习时段、具名博士导师及本技术报告。该条对应 Kimi-VL 基础视觉语言模型项目；另一篇 OpenCUA 对应香港大学 XLANG Lab 牵头的计算机使用智能体项目。',
      advising: [ '博士导师', 'Bowen Wang 的公开教育经历明确列余涛为香港大学博士导师。', 'https://bowenbryanwang.github.io/' ]
    },
    {
      id: 'dbagent-huawei-uestc-zheng',
      company: '华为',
      team: '华为云 · 企业智能（EI）架构与设计',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      faculty: [ '郑凯 · Kai Zheng', '电子科技大学计算机学院教授、博士生导师；同篇署电子科技大学并任通讯作者。', 'https://zheng-kai.com/' ],
      employee: [ '曾凯 · Kai Zeng', '华为云数据与 AI 融合首席架构师，DBAgent 同篇以华为技术有限公司署名。', 'https://kai-zeng.github.io/' ],
      student: [
        '夏宇阳 · Yuyang Xia',
        '电子科技大学计算机科学与工程学院博士生。2025 年 3 月起在华为云企业智能架构与设计团队实习，参与论文所描述的基于强化学习、能自主诊断慢查询的数据库运维智能体。',
        'https://xiayuyang.github.io/'
      ],
      title: 'DBAgent: An RL-Based Agent for Autonomous Database Operations and Maintenance',
      short: 'DBAgent',
      date: '2026-08',
      venue: 'PVLDB',
      area: '语言模型与智能体',
      paper: 'https://www.vldb.org/pvldb/vol19/p3928-chen.pdf',
      extra: [
        [ '论文 DOI', 'https://doi.org/10.14778/3827998.3828006' ],
        [ '同篇共同第一作者的论文与部署记录', 'https://thisislegit.github.io/' ],
        [ '华为云官方资料：GaussDB（DWS）专业服务团队', 'https://support.huaweicloud.com/intl/en-us/productdesc-professionalservices/gdwscps1.html' ]
      ],
      evidence: '夏宇阳在读期间于华为云企业智能架构与设计团队开展本篇慢查询运维项目，本人主页介绍的强化学习与迭代诊断方法与原文一致。论文同时署名夏宇阳、其电子科大共同导师郑凯和华为云首席架构师曾凯。DWS 是 DBAgent 的部署平台；学生履历明确列出其所在的 EI 架构与设计团队。',
      advising: [ '博士共同导师', '夏宇阳的学术主页明确列出电子科技大学博士阶段的两位导师：郑凯和苏涵；两人均在 DBAgent 正式论文中署名。', 'https://xiayuyang.github.io/' ]
    },
    {
      id: 'deepseek-codeio-hkust-junxian-he',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 大模型对齐团队',
      school: '香港科技大学',
      studentSchool: '上海交通大学',
      title: 'CodeI/O: Condensing Reasoning Patterns via Code Input-Output Prediction',
      short: 'CodeI/O',
      date: '2025-07',
      venue: 'ICML',
      area: '语言模型与智能体',
      paper: 'https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25t/li25t.pdf',
      faculty: [ '何俊贤 · Junxian He', '香港科技大学计算机科学与工程学系助理教授，论文署港科大。', 'https://cse.hkust.edu.hk/admin/people/faculty/profile/junxianh' ],
      employee: [ '郭达雅 · Daya Guo', '2023 年 7 月至 2026 年 4 月在 DeepSeek 任人工智能研究员，原文署 DeepSeek-AI。', 'https://guoday.github.io/' ],
      student: [ 'Junlong Li', '2022 年 9 月至 2025 年 3 月就读上海交通大学硕士。首稿于 2025 年 2 月公开，第一作者脚注标明本研究在 DeepSeek 实习期间完成。', 'https://lockon-n.github.io/' ],
      evidence: '正式论文首页具名将第一作者的工作对应到 DeepSeek 实习；学生本人将实习归在大模型对齐团队，并在首稿发布时区分企业导师 Yu Wu 与项目学术导师何俊贤。研究开展时学生为上海交大硕士；2025 年 9 月才入读港科大博士。',
      advising: [
        '跨校项目学术指导',
        '第一作者发布本篇时明确称同篇港科大何俊贤为指导老师；学生当时的上海交大硕士导师为赵海。港科大课题组名录另确认何俊贤在其此后博士阶段继续担任导师。',
        'https://x.com/lockonlvange/status/1889558507168686574'
      ],
      extra: [
        [ 'ICML 正式索引', 'https://proceedings.mlr.press/v267/li25t.html' ],
        [ '2025 年 2 月预印本', 'https://arxiv.org/pdf/2502.07316v1' ],
        [ '作者发布的项目', 'https://codei-o.github.io/' ],
        [ '作者具名指导说明的公开转录', 'https://www.instalker.org/lockonlvange/status/1889558507168686574' ],
        [ '同期发表报道', 'https://www.36kr.com/p/3170644914973446' ]
      ]
    },
    {
      id: 'tqsed-alibaba-nwpu-jianfeng-chen',
      company: '阿里巴巴',
      team: '通义实验室 · 语音团队',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [ '陈建峰 · Jianfeng Chen', '西北工业大学航海学院教授，是 Han Yin 具名的硕士导师；论文署西工大并为通讯作者。', 'https://news.nwpu.edu.cn/info/1002/82054.htm' ],
      employee: [
        'Siqi Zheng',
        '阿里巴巴语音实验室研究员。2021 年 Interspeech 和 2023 年 ACL 正式材料已连续署阿里；2024 年是尹涵具名的通义语音组实习导师并为本篇同作者。',
        'https://aclanthology.org/2023.findings-acl.884.pdf'
      ],
      student: [
        '尹涵 · Han Yin',
        '2022 年 9 月至 2025 年 3 月为西北工业大学航海学院硕士生，2024 年 6 月 20 日至 9 月 30 日在阿里通义语音组实习；2024 年 9 月 20 日提交的论文第一作者同时署西工大及阿里语音实验室。',
        'https://apple-yinhan.github.io/'
      ],
      title: 'Exploring Text-Queried Sound Event Detection with Audio Source Separation',
      short: 'TQ-SED',
      date: '2025-04',
      venue: 'ICASSP',
      area: '语音与音频',
      paper: 'https://arxiv.org/pdf/2409.13292v1',
      extra: [
        [ 'IEEE 正式论文索引', 'https://ieeexplore.ieee.org/document/10889789/' ],
        [ 'Interspeech 2021 企业署名', 'https://www.interspeech2021.org/program' ],
        [ 'Interspeech 2024 企业署名', 'https://interspeech2024.org/wp-content/uploads/IS24-Provisional-Programme.pdf' ]
      ],
      evidence: '预印本第一作者同时署西工大和阿里语音实验室，首次公开日在其自述的阿里通义语音实习期内；其履历列明同篇的三位阿里导师 Siqi Zheng、Chong Deng、Hui Wang。后续 2025 年 4 月 9 日才转为阿里算法工程师。',
      advising: [ '校内硕士导师', 'Han Yin 的个人履历在 2022 年 9 月至 2025 年 3 月的西工大硕士教育记录中具名列出陈建峰教授为导师。', 'https://apple-yinhan.github.io/' ]
    },
    {
      id: 'mathshepherd-deepseek-pku-zhifang-sui',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 大模型对齐团队',
      school: '北京大学',
      studentSchool: '北京大学',
      title: 'Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations',
      short: 'Math-Shepherd',
      date: '2024-08',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2024.acl-long.510.pdf',
      faculty: [ '穗志方 · Zhifang Sui', '北京大学计算机学院教授，论文署北京大学多媒体信息处理重点实验室。', 'https://cs.pku.edu.cn/info/1078/1672.htm' ],
      employee: [ '吴俣 · Yu Wu', '2023 年 9 月起在 DeepSeek 任职，负责大模型对齐；原文署 DeepSeek-AI。', 'https://sites.google.com/view/wuyu/home' ],
      student: [ '王培懿 · Peiyi Wang', '研究期间为北京大学计算机学院博士生。2023 年 12 月首稿署北京大学，第一作者脚注明确为在 DeepSeek 实习期间的贡献。', 'https://arxiv.org/pdf/2312.08935v1' ],
      evidence: '2023 年 12 月预印本具名标注王培懿的 DeepSeek 实习，北大博士导师穗志方及当时已在 DeepSeek 任职的吴俣均为同篇作者；工作是数学推理过程奖励模型和强化学习，不是 DeepSeekMoE 的模型架构项目。',
      advising: [ '博士导师', '天津大学校友网记录王培懿为北京大学 2020 级直博生、师从穗志方。', 'https://alumni.tju.edu.cn/info/1057/3707.htm' ],
      extra: [
        [ 'ACL 正式索引', 'https://aclanthology.org/2024.acl-long.510/' ],
        [ '2023 年 12 月具名实习脚注', 'https://arxiv.org/pdf/2312.08935v1' ],
        [ '2023 年同期学校署名', 'https://aclanthology.org/2023.ccl-3.pdf' ]
      ]
    },
    {
      id: 'grsp-kimi-pku-houfeng-wang',
      company: '月之暗面（Kimi）',
      team: 'Kimi · 推理与强化学习',
      school: '北京大学',
      studentSchool: '北京大学',
      title: 'Mitigating Overthinking through Reasoning Shaping',
      short: 'GRSP',
      date: '2025-10-10',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2510.09535v1',
      faculty: [ '王厚峰 · Houfeng Wang', '北京大学计算语言学研究所教授、宋非凡的博士导师；本篇通讯作者。', 'https://cs.pku.edu.cn/info/1083/1701.htm' ],
      employee: [ '刘天宇 · Tianyu Liu', '时任月之暗面研究员。本人职业主页列出 Kimi 岗位与 2025 年的 Kimi-Dev，GRSP 原文署其为项目负责人，单位栏保留北大署名。', 'https://tyliupku.github.io/' ],
      student: [
        '宋非凡 · Feifan Song',
        '2021 年直博进入北京大学。本人 2025 年 7 月的履历同时写明在北大攻读博士、在月之暗面做科研实习；2025 年 10 月预印本第一作者署北大和 Moonshot AI。',
        'https://www.tsxt.sdu.edu.cn/info/1003/1464.htm'
      ],
      evidence: 'PDF 首页的机构编号把宋非凡同时署为北大与月之暗面。同一在读时段，月之暗面官方 Kimi K2 和 K2.5 的研发署名均列其名；宋非凡在 2025 年 7 月发布的履历明确写为科研实习。论文注明刘天宇是项目负责人。',
      advising: [ '博士导师', '山东大学校方专访具名记录宋非凡直博北大并跟随王厚峰。北大研究生院 2026 年 5 月答辩公告再次列出同一导师。', 'https://www.tsxt.sdu.edu.cn/info/1003/1464.htm' ],
      extra: [
        [ '北京大学研究生院答辩公示', 'https://grs.pku.edu.cn/sjdj/bs/index74.htm' ],
        [ '月之暗面 Kimi K2 官方署名', 'https://github.com/MoonshotAI/Kimi-K2' ],
        [ '月之暗面 Kimi K2.5 官方署名', 'https://huggingface.co/moonshotai/Kimi-K2.5' ],
        [ '研究经历：月之暗面实习', 'https://github.com/F2-Song/F2-Song/blob/aa98f558cee7b9607b165ad8e1915e145b36a620/README.md' ]
      ]
    },
    {
      company: '百度',
      team: '百度 · 视觉生成研究',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      employee: [ 'Zhenyang Li', '百度计算机视觉研究科学家，学生公开具名的百度实习合作者；论文署百度。', 'https://zhenyangli.github.io/' ],
      student: [ '魏凡越 · Fanyue Wei', '电子科技大学 2021 至 2024 年为硕士生，2023 年 7 月起在百度担任研究实习生，并注明与本论文合作者 Zhenyang Li 共事。', 'https://wfanyue.github.io/' ],
      title: 'Powerful and Flexible: Personalized Text-to-Image Generation via Reinforcement Learning',
      short: 'DPG-T2I',
      date: '2024-10',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03967.pdf',
      extra: [
        [ '电子科技大学数据智能组学籍名录', 'https://diggers.ai/people/' ],
        [ 'ECCV 投稿截止日（2024 年 3 月）', 'https://eccv2024.ecva.net/Conferences/2024/Dates' ],
        [ 'ECCV 正式论文索引', 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/3967_ECCV_2024_paper.php' ],
        [
          '学校 2023–2024 学年硕士学籍与奖学金公示',
          'https://gr.uestc.edu.cn/attached/papers/258/202310/2023-2024%E5%AD%A6%E5%B9%B4%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AD%A6%E4%B8%9A%E5%A5%96%E5%AD%A6%E9%87%91%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA_261416442083.pdf'
        ]
      ],
      evidence: '魏凡越本人列出这篇 ECCV 论文和百度科研实习，实习合作者 Zhenyang Li 即同篇百度作者。学校课题组列其 2021–2024 年硕士学籍。ECCV 正式投稿在 2024 年 3 月截止，处于其硕士在读及百度实习重叠期，早于首次预印本和正式发表。',
      advising: [ '校内硕士共同导师', '魏凡越的个人主页具名列出电子科技大学硕士阶段由李文和段立新共同指导，两人均在正式论文署名。', 'https://wfanyue.github.io/' ],
      id: 'baidu-dpg-t2i-uestc-wen-li',
      faculty: [
        '李文 · Wen Li',
        '时任电子科技大学计算机学院教授、该论文通讯作者，魏凡越的校内硕士导师之一。',
        'https://www.news.uestc.edu.cn/?Id=93067&n=UestcNews.Front.DocumentV2.ArticlePage'
      ]
    },
    {
      company: '百度',
      team: '百度 · 视觉生成研究',
      school: '电子科技大学',
      studentSchool: '电子科技大学',
      employee: [ 'Zhenyang Li', '百度计算机视觉研究科学家，学生公开具名的百度实习合作者；论文署百度。', 'https://zhenyangli.github.io/' ],
      student: [ '魏凡越 · Fanyue Wei', '电子科技大学 2021 至 2024 年为硕士生，2023 年 7 月起在百度担任研究实习生，并注明与本论文合作者 Zhenyang Li 共事。', 'https://wfanyue.github.io/' ],
      title: 'Powerful and Flexible: Personalized Text-to-Image Generation via Reinforcement Learning',
      short: 'DPG-T2I',
      date: '2024-10',
      venue: 'ECCV',
      area: '视觉与多模态',
      paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03967.pdf',
      extra: [
        [ '电子科技大学数据智能组学籍名录', 'https://diggers.ai/people/' ],
        [ 'ECCV 投稿截止日（2024 年 3 月）', 'https://eccv2024.ecva.net/Conferences/2024/Dates' ],
        [ 'ECCV 正式论文索引', 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/3967_ECCV_2024_paper.php' ],
        [
          '学校 2023–2024 学年硕士学籍与奖学金公示',
          'https://gr.uestc.edu.cn/attached/papers/258/202310/2023-2024%E5%AD%A6%E5%B9%B4%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AD%A6%E4%B8%9A%E5%A5%96%E5%AD%A6%E9%87%91%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA_261416442083.pdf'
        ]
      ],
      evidence: '魏凡越本人列出这篇 ECCV 论文和百度科研实习，实习合作者 Zhenyang Li 即同篇百度作者。学校课题组列其 2021–2024 年硕士学籍。ECCV 正式投稿在 2024 年 3 月截止，处于其硕士在读及百度实习重叠期，早于首次预印本和正式发表。',
      advising: [ '校内硕士共同导师', '魏凡越的个人主页具名列出电子科技大学硕士阶段由李文和段立新共同指导，两人均在正式论文署名。', 'https://wfanyue.github.io/' ],
      id: 'baidu-dpg-t2i-uestc-lixin-duan',
      faculty: [
        '段立新 · Lixin Duan',
        '电子科技大学教授、博士生导师，魏凡越具名的硕士导师之一；论文署电子科技大学。',
        'https://faculty.uestc.edu.cn/lxduan/zh_CN/index/164593/list/index.htm'
      ]
    },
    {
      id: 'landiff-kimi-zju-siliang-tang',
      company: '月之暗面（Kimi）',
      team: 'Kimi · 视频生成研究',
      school: '浙江大学',
      studentSchool: '浙江大学',
      title: 'The Best of Both Worlds: Integrating Language Models and Diffusion Models for Video Generation',
      short: 'LanDiff',
      date: '2025-10',
      venue: 'ICCV',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Yin_The_Best_of_Both_Worlds_Integrating_Language_Models_and_Diffusion_ICCV_2025_paper.pdf',
      faculty: [ '汤斯亮 · Siliang Tang', '浙江大学计算机学院教授、博士生导师，原文署浙江大学。', 'https://person.zju.edu.cn/en/siliang' ],
      employee: [ '谭旭 · Xu Tan', '月之暗面多模态研究副总裁，本篇共同第一作者和通讯作者；2025 年 3 月首稿列其月之暗面邮箱。本人主页将 LanDiff 列入参与设计的视频生成系统。', 'https://tan-xu.github.io/' ],
      student: [
        '尹傲雄 · Aoxiong Yin',
        '2020 年 9 月至 2025 年 6 月在浙江大学读博，2024 年 7 月起在月之暗面实习；个人主页列出 2025 年 3 月发布 LanDiff 并为该论文共同第一作者。',
        'https://i.yinaoxiong.cn/'
      ],
      evidence: '2025 年 3 月首稿公开时，尹傲雄的浙大博士学籍与月之暗面实习重叠。学生和企业通讯作者的主页都列本篇视频生成项目；首稿署名确认其企业团队和浙大博士导师同篇参与。',
      advising: [ '校内共同博士导师', '尹傲雄的个人主页具名列出汤斯亮和赵洲为浙大博士导师；本篇作者表列有汤斯亮。', 'https://i.yinaoxiong.cn/' ],
      extra: [
        [ '2025 年 3 月预印本', 'https://arxiv.org/pdf/2503.04606v1' ],
        [
          'ICCV 正式论文索引',
          'https://openaccess.thecvf.com/content/ICCV2025/html/Yin_The_Best_of_Both_Worlds_Integrating_Language_Models_and_Diffusion_ICCV_2025_paper.html'
        ],
        [ '作者项目页', 'https://landiff.github.io/' ]
      ]
    },
    {
      id: 'huawei-tadsr-xidian-mingrui-zhu',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '西安电子科技大学',
      studentSchool: '西安电子科技大学',
      faculty: [ '朱明瑞 · Mingrui Zhu', '西安电子科技大学副教授、硕导，署西电；是西电科研团队负责人，校内个人页面具名列何潇为共同指导的硕博连读生。', 'https://web.xidian.edu.cn/mrzhu/index.html' ],
      employee: [ '涂志俊 · Zhijun Tu', '华为基础模型部门研究员。2024 年预印本列其为华为诺亚方舟实验室作者，本人将这篇论文列为其负责的项目。', 'https://tuzhijun.github.io/' ],
      student: [
        '何潇 · Xiao He',
        '2021 级西电硕博连读生，研究快速图像超分辨率；王楠楠的西电官网在 2025 年 2 月具名确认何潇在与华为的合作项目中将快速推理算法落地于华为移动终端，并获华为创新先锋一等奖。',
        'https://web.xidian.edu.cn/nnwang/index.html'
      ],
      title: 'One Step Diffusion-Based Super-Resolution With Time-Aware Distillation',
      short: 'TAD-SR',
      date: '2026-03',
      venue: 'IEEE Transactions on Image Processing',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2408.07476v1',
      extra: [
        [ 'IEEE 正式论文 DOI', 'https://doi.org/10.1109/TIP.2026.3672376' ],
        [ '2026 年 IEEE 正式论文索引', 'https://pubmed.ncbi.nlm.nih.gov/41838492/' ],
        [ '第一作者代码与署名', 'https://github.com/LearningHx/TAD-SR' ],
        [ '预印本与首次公开日期', 'https://arxiv.org/abs/2408.07476' ]
      ],
      evidence: '首版论文由西电在读生何潇领衔，涂志俊以华为诺亚方舟实验室署名，另有华为消费者业务同作者；涂志俊本人将本篇列为其负责的项目。西电课题组在 2025 年 2 月具名记录何潇在与华为合作期间参与快速推理算法研发。论文研究对象为只需一步推理的图像超分辨率；校方报道未写出论文题名或实习职务。',
      advising: [ '共同指导', '朱明瑞的西电科研团队主页将何潇具名列为 2021 级硕博连读、共同指导。', 'https://web.xidian.edu.cn/mrzhu/team.html' ]
    },
    {
      id: 'huawei-noah-megatron-rvc-nwpu-yuchao-dai',
      company: '华为',
      team: '诺亚方舟实验室',
      school: '西北工业大学',
      studentSchool: '西北工业大学',
      faculty: [
        '戴玉超 · Yuchao Dai',
        '西北工业大学教授、项末初硕士导师，并具名指导西工大与华为诺亚方舟实验室的 Megatron_RVC 联合队伍；为期刊论文通讯作者。',
        'https://xygg.nwpu.edu.cn/info/1007/28437.htm'
      ],
      employee: [
        '张镇嵩 · Zhensong Zhang',
        '华为首席研究员；个人主页列有 2020 和 2022 年华为中央研究院奖项及本项目经历，2019 年期刊作者简介已列其为诺亚方舟实验室研究员，同篇署华为诺亚方舟实验室。',
        'https://zhangzhensong.github.io/'
      ],
      student: [
        '项末初 · Mochu Xiang',
        '西北工业大学电子信息学院 2021 级硕士研究生；学校具名记录其为西工大与华为诺亚方舟实验室联合团队成员，期刊论文第一作者。',
        'https://news.nwpu.edu.cn/info/1002/83353.htm'
      ],
      title: 'Towards a Unified Network for Robust Monocular Depth Estimation: Network Architecture, Training Strategy and Dataset',
      short: 'Megatron_RVC',
      date: '2023-10',
      venue: 'IJCV（在线发表）',
      area: '视觉与多模态',
      paper: 'https://link.springer.com/article/10.1007/s11263-023-01915-6',
      extra: [
        [ '西工大电子信息学院：校企团队成员与 Megatron_RVC', 'https://dianzi.nwpu.edu.cn/info/1454/14285.htm' ],
        [ 'RVC 2022 单目深度官方排行榜', 'https://playing-for-benchmarks.org/leaderboards/monodepth/' ],
        [ '2019 年期刊作者简介：诺亚方舟研究员', 'https://www.sciencedirect.com/science/article/abs/pii/S0031320319304406' ],
        [ '华为 PCT 公报：中英文姓名', 'https://patents.google.com/patent/WO2026189084A1/zh' ]
      ],
      evidence: '西工大公开材料具名记录在读硕士项末初在戴玉超指导下参加与华为诺亚方舟实验室的联合团队，研发的方案名为 Megatron_RVC。IJCV 原文明确刊载同一获奖方案；项末初、戴玉超与华为正式研究人员张镇嵩同篇署名。西工大未披露实习岗位或合同，依据是学校公开的具名校企联合研究项目。',
      advising: [ '硕士导师及校企项目指导', '西北工业大学研究生院具名列项末初师从戴玉超教授，校方新闻同时列戴玉超为同一 Megatron_RVC 项目校企联合队伍的指导者。', 'https://xygg.nwpu.edu.cn/info/1007/28437.htm' ]
    },
    {
      id: 'simpleseg-kimi-nju-limin-wang',
      company: '月之暗面（Kimi）',
      team: 'Kimi · 多模态感知',
      school: '南京大学',
      studentSchool: '南京大学',
      faculty: [ '王利民 · Limin Wang', '南京大学计算机学院教授、博士生导师；本论文署南京大学，第一作者本人具名称受其指导。', 'https://cs.nju.edu.cn/2f/cc/c2639a274380/page.htm' ],
      employee: [ '吴昊宁 · Haoning Wu', '月之暗面 Kimi 多模态后训练研究员，自述在 Kimi 负责 Kimi-VL，并参与 K2.5 视觉后训练和 K3 联合强化学习；本论文署 Moonshot AI。', 'https://wuhaoning.com/' ],
      student: [
        '宋天惠 · Tianhui Song',
        '南京大学研究生，校方研究组列为 2026 届毕业生。本人称受王利民指导；论文将他双署南京大学和月之暗面，并在其名字下注明本工作完成于在月之暗面的实习期间。',
        'https://github.com/songtianhui#readme'
      ],
      title: 'Towards Pixel-Level VLM Perception via Simple Points Prediction',
      short: 'SimpleSeg',
      date: '2026-01',
      venue: 'arXiv 预印本',
      area: '视觉与多模态',
      paper: 'https://arxiv.org/pdf/2601.19228v1',
      extra: [
        [ '南京大学研究组 2026 届名册', 'https://mcg.nju.edu.cn/alumni.html' ],
        [ '首次公开日期与预印本索引', 'https://arxiv.org/abs/2601.19228' ],
        [ '第一作者维护的项目代码', 'https://github.com/songtianhui/SimpleSeg' ],
        [ '月之暗面官方论文页', 'https://huggingface.co/moonshotai/papers' ]
      ],
      evidence: '论文首页给宋天惠南京大学及 Moonshot AI 双署名，并具名标注论文工作在 Moonshot AI 实习中完成。本人明确公开其南大在读身份及导师王利民；同篇另有已在月之暗面任研究员的吴昊宁（与 MiniMax 的同音名研究者是不同人）。',
      advising: [ '硕士生导师', '宋天惠在自己的 GitHub 学术档案（更新标注 2026 年 2 月）明确称在南京大学读研并受王利民指导。学校官方研究组同步列其为 2026 届。', 'https://github.com/songtianhui#readme' ]
    },
    {
      id: 'janusflow-deepseek-pku-jiaying-liu',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 多模态团队',
      school: '北京大学',
      studentSchool: '北京大学',
      faculty: [ '刘家瑛 · Jiaying Liu', '北京大学王选计算机研究所教师，Yiyang Ma 在北大攻读硕士时的导师，论文署北京大学。', 'https://www.ai.pku.edu.cn/en/info/1404/1800.htm' ],
      employee: [ '潘梓正 · Zizheng Pan', '本人履历明确列出自 2024 年 7 月起任 DeepSeek 全职研究员，从事多模态大模型；同篇署 DeepSeek-AI。', 'https://zizhengpan.github.io/' ],
      student: [
        '马逸扬 · Yiyang Ma',
        '2022 年 9 月至 2025 年 7 月在北大攻读硕士；2024 年 6 至 11 月在 DeepSeek 担任 AGI 科研实习生，2025 年 4 月起另列正式研究员阶段。',
        'https://realpasu.github.io/'
      ],
      title: 'JanusFlow: Harmonizing Autoregression and Rectified Flow for Unified Multimodal Understanding and Generation',
      short: 'JanusFlow',
      date: '2024-11',
      venue: 'CVPR 2025',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Ma_JanusFlow_Harmonizing_Autoregression_and_Rectified_Flow_for_Unified_Multimodal_Understanding_CVPR_2025_paper.pdf',
      extra: [
        [ '2024 年 11 月预印本', 'https://arxiv.org/abs/2411.07975' ],
        [ 'DeepSeek 官方 Janus 项目及成果列表', 'https://github.com/deepseek-ai/Janus' ],
        [ '北大王选计算机研究所的论文报道', 'https://www.icst.pku.edu.cn/xwgg/xsj/1201844icst1385875.htm' ]
      ],
      evidence: '2024 年 11 月首稿与 CVPR 正式版均列 Yiyang Ma 为第一作者并双署 DeepSeek 与北大，刘家瑛与潘梓正也具名合著。学生履历列明同期 DeepSeek AGI 科研实习，DeepSeek 官方将论文列为 Janus 项目的研究成果。',
      advising: [ '校内硕士导师', 'Yiyang Ma 在个人主页明确列明北大硕士期间由刘家瑛指导。', 'https://realpasu.github.io/' ]
    },
    {
      id: 'janus-deepseek-hku-ping-luo',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 多模态团队',
      school: '香港大学',
      studentSchool: '香港大学',
      faculty: [ '罗平 · Ping Luo', '香港大学计算机系教师，论文共同通讯作者，与王文平共同指导吴成岳的博士研究。', 'https://luoping.me/' ],
      employee: [ '潘梓正 · Zizheng Pan', '本人履历明确列出自 2024 年 7 月起任 DeepSeek 全职研究员，从事多模态大模型；同篇署 DeepSeek-AI。', 'https://zizhengpan.github.io/' ],
      student: [
        '吴成岳 · Chengyue Wu',
        '2023 年 9 月起就读港大计算机科学博士；2024 年 5 至 11 月在 DeepSeek 任 AGI 科研实习生，研究多模态理解与生成。',
        'https://hills-code.github.io/CV.pdf'
      ],
      title: 'Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation',
      short: 'Janus',
      date: '2024-10',
      venue: 'CVPR 2025',
      area: '视觉与多模态',
      paper: 'https://openaccess.thecvf.com/content/CVPR2025/html/Wu_Janus_Decoupling_Visual_Encoding_for_Unified_Multimodal_Understanding_and_Generation_CVPR_2025_paper.html',
      extra: [
        [ '2024 年 10 月作者预印本', 'https://arxiv.org/abs/2410.13848' ],
        [ 'DeepSeek 官方 Janus 项目', 'https://github.com/deepseek-ai/Janus' ],
        [ '吴成岳个人学术主页', 'https://hills-code.github.io/' ],
        [ '原始 PDF', 'https://arxiv.org/pdf/2410.13848v1' ]
      ],
      evidence: '首稿在吴成岳的 DeepSeek 科研实习期间公开；CVPR 原文将他列为第一作者，双署 DeepSeek 与港大，并列港大罗平和 DeepSeek 研究员潘梓正。吴成岳的履历列明同期 DeepSeek 实习岗位、课题和该论文，企业官方仓库发布 Janus 成果。',
      advising: [
        '校内博士共同指导',
        '港大研究生院公开说明吴成岳由罗平与王文平共同指导；吴成岳的个人主页也明确列出两位导师。',
        'https://gradsch.hku.hk/news_and_events/newsletter/awards-and-achievements-10'
      ]
    },
    {
      id: 'vibecoding-kimi-ucas-shenghua-liu',
      company: '月之暗面（Kimi）',
      team: 'Moonshot AI · 强化学习团队',
      school: '中国科学院大学',
      studentSchool: '中国科学院大学',
      faculty: [ '刘盛华 · Shenghua Liu', '中国科学院大学师资主页列为中国科学院计算技术研究所教授，同篇国科大署名、通讯作者；葛钰峣本人具名列其为博士导师。', 'https://people.ucas.ac.cn/~0043238?language=en' ],
      employee: [
        '刘天宇 · Tianyu Liu',
        '曾任 Kimi 研究员，个人履历区分正式研究岗位与此前学生时期实习，2025 年 9 月的 Kimi-Dev 具名署 Moonshot AI；本篇署北京大学，第一作者的项目页链接到同一人。',
        'https://tyliupku.github.io/'
      ],
      student: [
        '葛钰峣 · Yuyao Ge',
        '国科大计算所培养的在读博士；同文脚注给中国科学院大学署名。本人列 2025 年 9 月至 2026 年 5 月在 Moonshot AI 强化学习团队科研实习，并在实习经历条目直接链接本篇论文。',
        'https://www.geyuyao.com/#experience'
      ],
      title: 'A Survey of Vibe Coding with Large Language Models',
      short: 'Vibe Coding Survey',
      date: '2025-10',
      venue: 'arXiv',
      area: '智能体',
      paper: 'https://arxiv.org/pdf/2510.12399v1',
      extra: [
        [ 'arXiv 首发时间与作者索引', 'https://arxiv.org/abs/2510.12399' ],
        [ '作者第一方主页：项目作者与刘天宇身份指向', 'https://www.geyuyao.com/' ],
        [ '刘天宇 2025 年 9 月同期 Kimi-Dev 公司署名', 'https://arxiv.org/pdf/2509.23045v1' ],
        [ '国科大在读同期论文与署名', 'https://aclanthology.org/2025.emnlp-main.768.pdf' ]
      ],
      evidence: '葛钰峣在第一方履历的月之暗面强化学习团队实习条目下，把研究项目直接链接到此篇代码智能体综述。论文同时列出博士导师刘盛华和刘天宇；同一学生的项目署名清单将刘天宇链接到自述曾任 Kimi 研究员、同期以 Moonshot AI 署名发表 Kimi-Dev 的同一人。',
      advising: [ '博士导师', '葛钰峣的个人学术主页明确列刘盛华为博士导师；论文首页将刘盛华列为通讯作者，师生皆有国科大署名。', 'https://www.geyuyao.com/' ]
    },
    {
      company: '月之暗面（Kimi）',
      team: 'AI Infra',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [
        '许欣然 · Xinran Xu',
        '2024 年任月之暗面工程副总裁，负责模型训练、推理和基础设施部门；会议主办方还列明其带队研发 Mooncake，原文为月之暗面通讯作者。',
        'https://china2024.gosim.org/speakers/xinran-xu.html'
      ],
      student: [
        '秦若愚 · Ruoyu Qin',
        '2023 年 9 月开始实习时在清华读本科，2024 年本科毕业，FAST 2025 发表时为清华博士生；论文首页确认其在月之暗面实习期间完成所署工作。',
        'https://qinruoyu.com/static/media/cv-qinruoyu.pdf'
      ],
      title: 'Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot',
      short: 'Mooncake',
      date: '2025-02',
      venue: 'USENIX FAST',
      area: 'AI 系统',
      paper: 'https://www.usenix.org/system/files/fast25-qin.pdf',
      extra: [
        [ 'USENIX 正式发表与署名', 'https://www.usenix.org/conference/fast25/presentation/qin' ],
        [ '清华大学报道：校内团队与第一作者', 'https://www.tsinghua.edu.cn/info/1175/117420.htm' ],
        [ '清华大学英文简报：三位教师共同带队', 'https://www.tsinghua.edu.cn/en/pdf/Tsinghua_Newsletter_2025_Q1.pdf#page=17' ],
        [ '项目团队具名获奖名单', 'https://e.huawei.com/cn/topic/storage/olympus-mons-awards-2024' ]
      ],
      id: 'mooncake-thu-yongwei-wu',
      faculty: [
        '武永卫 · Yongwei Wu',
        '清华大学计算机科学与技术系教授。清华计算机系将 Mooncake 及其相关大模型推理系统列为武永卫教授带领的团队成果，USENIX 正式版同篇署名。',
        'https://www.cs.tsinghua.edu.cn/info/1107/3508.htm'
      ],
      evidence: 'FAST 原文首页具名确认第一作者秦若愚的贡献完成于月之暗面实习；武永卫与月之暗面工程副总裁许欣然同篇署名。清华将这一具名校企论文归于三位教师共同带队的工作，另以武永卫教授团队名义记录同一成果，并具名列秦若愚为项目获奖成员。',
      advising: [
        '校方项目带队教师',
        '清华计算机系具名将 Mooncake 列为武永卫团队成果，并列出学生秦若愚为获奖成员；校方同篇报道另明确秦若愚的学位导师是章明星。',
        'https://www.cs.tsinghua.edu.cn/info/1034/6907.htm'
      ]
    },
    {
      company: '月之暗面（Kimi）',
      team: 'AI Infra',
      school: '清华大学',
      studentSchool: '清华大学',
      employee: [
        '许欣然 · Xinran Xu',
        '2024 年任月之暗面工程副总裁，负责模型训练、推理和基础设施部门；会议主办方还列明其带队研发 Mooncake，原文为月之暗面通讯作者。',
        'https://china2024.gosim.org/speakers/xinran-xu.html'
      ],
      student: [
        '秦若愚 · Ruoyu Qin',
        '2023 年 9 月开始实习时在清华读本科，2024 年本科毕业，FAST 2025 发表时为清华博士生；论文首页确认其在月之暗面实习期间完成所署工作。',
        'https://qinruoyu.com/static/media/cv-qinruoyu.pdf'
      ],
      title: 'Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot',
      short: 'Mooncake',
      date: '2025-02',
      venue: 'USENIX FAST',
      area: 'AI 系统',
      paper: 'https://www.usenix.org/system/files/fast25-qin.pdf',
      extra: [
        [ 'USENIX 正式发表与署名', 'https://www.usenix.org/conference/fast25/presentation/qin' ],
        [ '清华大学报道：校内团队与第一作者', 'https://www.tsinghua.edu.cn/info/1175/117420.htm' ],
        [ '清华大学英文简报：三位教师共同带队', 'https://www.tsinghua.edu.cn/en/pdf/Tsinghua_Newsletter_2025_Q1.pdf#page=17' ],
        [ '项目团队具名获奖名单', 'https://e.huawei.com/cn/topic/storage/olympus-mons-awards-2024' ]
      ],
      id: 'mooncake-thu-weimin-zheng',
      faculty: [
        '郑纬民 · Weimin Zheng',
        '清华大学计算机科学与技术系教授、中国工程院院士。清华新闻具名将其列为与月之暗面合作发表该论文的校方教师，USENIX 正式版同篇署名。',
        'https://www.cs.tsinghua.edu.cn/info/1107/3505.htm'
      ],
      evidence: 'FAST 原文首页具名确认第一作者秦若愚的贡献完成于月之暗面实习；郑纬民与月之暗面工程副总裁许欣然同篇署名。清华大学英文简报明确写出三位教师带领校方团队完成这一论文，获奖项目名单亦具名包含郑纬民和秦若愚。',
      advising: [
        '校方项目带队教师',
        '清华官方英文简报具名确认郑纬民与章明星、武永卫共同带领校方团队完成 Mooncake 论文，并单列第一作者秦若愚的学位导师为章明星。',
        'https://www.tsinghua.edu.cn/en/pdf/Tsinghua_Newsletter_2025_Q1.pdf#page=17'
      ]
    },
    {
      id: 'deepseek-visual-primitives-thu-chen',
      company: 'DeepSeek',
      team: 'DeepSeek-AI · 多模态团队',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '陈挺 · Ting Chen', '清华大学计算机系教授。其 Tim Group 名录将罗崚骁列为在读博士生；原文中陈挺署名清华大学。', 'https://www.cs.tsinghua.edu.cn/csen/info/1312/4385.htm' ],
      employee: [
        '陈小康 · Xiaokang Chen',
        'DeepSeek 多模态研究技术人员。原文首页明确列为 DeepSeek 核心作者及项目负责人，个人主页说明其在 DeepSeek 负责基础模型的多模态研究。',
        'https://charlescxk.github.io/'
      ],
      student: [ '罗崚骁 · Lingxiao Luo', '清华大学计算机系在读博士，在原文同时署清华大学和 DeepSeek，且是具名的核心作者。', 'https://ai.cs.tsinghua.edu.cn/rcpy/bsyjs.htm' ],
      title: 'Thinking with Visual Primitives',
      short: 'Thinking with Visual Primitives',
      date: '2026-04-30',
      venue: '公开预印本',
      area: '视觉与多模态',
      paper: 'https://raw.githubusercontent.com/mitkox/Thinking-with-Visual-Primitives/main/Thinking_with_Visual_Primitives.pdf',
      extra: [
        [ '陈挺课题组名录：唯一教员及博士生', 'http://timlab.cn/people/' ],
        [ '陈挺课题组的博士生个人页', 'http://timlab.cn/author/lingxiao-luo/' ],
        [ '同期发布记录及原发布地址', 'https://www.36kr.com/p/3789208597372165' ],
        [ '同一师生的清华大学论文 VividMed', 'https://aclanthology.org/2025.naacl-long.89/' ]
      ],
      evidence: '原文首页将罗崚骁列为 DeepSeek 和清华大学双署名的核心贡献者，并将陈小康列为项目负责人。清华的实验室及陈挺课题组名录确认学籍。公开材料未注明具体实习岗位或起止日。原发布仓库当前无法打开，论文链接为原始 PDF 的归档副本。',
      advising: [
        '课题组博士指导',
        '清华教师主页链接至陈挺课题组。该组公开名录只列陈挺一位教员，并具名列罗崚骁为其组内博士生；两人在 VividMed 中分别为并列第一作者和通讯作者。',
        'https://www.cs.tsinghua.edu.cn/csen/info/1312/4385.htm'
      ]
    },
    {
      id: 'minimax-dive-hkust-junxian-he',
      company: 'MiniMax',
      team: 'MiniMax-M2 · Agentic Cowork',
      school: '香港科技大学',
      studentSchool: '香港科技大学',
      faculty: [
        '何俊贤 · Junxian He',
        '香港科技大学计算机科学与工程学系助理教授、Junteng Liu 的博士导师；ICML 正式版署香港科技大学。',
        'https://researchportal.hkust.edu.hk/en/persons/junxian-he/'
      ],
      employee: [
        '赵鹏宇 · Pengyu Zhao',
        '2025 年起任 MiniMax 大语言模型研发负责人；北大 2026 年 4 月校友活动以该职位介绍他，ICML 论文署 MiniMax。',
        'https://cs.pku.edu.cn/info/1263/5340.htm'
      ],
      student: [
        'Junteng Liu',
        '2024 年起在港科大攻读博士；本人 2026 年 3 月的主页列 MiniMax 实习时段为 2025 年 2 月至 2026 年 2 月。3 月发布的预印本署 MiniMax，ICML 正式版同时署港科大和 MiniMax。',
        'https://github.com/vicent0205/vicent0205.github.io/blob/76fa2fd4a1a209cee6b25452d10f9ac3efa05833/_pages/about.md#L29-L38'
      ],
      title: 'DIVE: Scaling Diversity in Agentic Task Synthesis for Generalizable Tool Use',
      short: 'DIVE',
      date: '2026-07',
      venue: 'ICML',
      area: '语言模型与智能体',
      paper: 'https://raw.githubusercontent.com/mlresearch/v306/main/assets/chen26gj/chen26gj.pdf',
      extra: [
        [ 'ICML 正式论文索引', 'https://proceedings.mlr.press/v306/chen26gj.html' ],
        [ 'MiniMax 官方报告中 4.2.3 归入金融分析及表格操作', 'https://arxiv.org/html/2605.26494v1#S4.SS2.SSS3' ],
        [ '项目作者与原始署名', 'https://sheep333c.github.io/DIVE/' ],
        [ '2026 年 3 月预印本', 'https://arxiv.org/abs/2603.11076' ]
      ],
      evidence: 'ICML 正式版将 Junteng Liu 双署港科大和 MiniMax，并列港科大导师何俊贤及 MiniMax 研发负责人赵鹏宇。学生的同期履历记录其在读期间参与 M2 系列研发；公司 M2 技术报告在 Agentic Cowork 的金融分析与表格操作小节明确引用 DIVE 的真实金融工具任务合成方法。',
      advising: [ '博士导师', 'Junteng Liu 的个人主页具名列何俊贤为港科大博士导师，何俊贤团队也列其为博士生。', 'https://jxhe.github.io/group/' ]
    },
    {
      id: 'octobench-minimax-fudan-tao-gui',
      company: 'MiniMax',
      team: '代码智能体 · OctoBench 评测',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '桂韬 · Tao Gui', '复旦大学自然语言处理方向副研究员、硕士生导师；ACL 正式版署复旦大学并列为通讯作者。', 'https://imoll.fudan.edu.cn/info/1196/1454.htm' ],
      employee: [
        'Deming Ding',
        '本人 ORCID 履历载明自 2025 年 7 月起在 MiniMax 通用模型团队担任算法研究员；正式论文列为并列第一作者，署复旦大学和 MiniMax。',
        'https://orcid.org/0009-0006-3092-8848'
      ],
      student: [ '林佳航 · Jiahang Lin', '2025 年 9 月起在复旦大学攻读硕士，导师为桂韬与黄萱菁；本人主页列出此项研究与发布的评测工具。正式论文列为并列第一作者，署复旦大学。', 'https://curry09.github.io/' ],
      title: 'OctoBench: Benchmarking Scaffold-Aware Instruction Following in Repository-Grounded Agentic Coding',
      short: 'OctoBench',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.269.pdf',
      extra: [
        [ '2026 年 1 月首版预印本', 'https://arxiv.org/abs/2601.10343' ],
        [ '学生同期主页：导师、研究与实习履历', 'https://github.com/Curry09/curry09.github.io/blob/d8c13a941c336224b044a8d751509ceda1902374/_pages/about.md' ],
        [ 'MiniMax 官方 OctoBench 数据集及项目来源', 'https://huggingface.co/datasets/MiniMaxAI/OctoBench/blob/main/README.md' ],
        [ 'MiniMax 发布的同篇论文评测工具', 'https://github.com/MiniMax-AI/mini-vela' ],
        [ 'MiniMax 对前序项目 OctoCodingBench 的介绍', 'https://www.minimax.io/news/production-grade-benchmark-for-coding-agents' ],
        [ 'AIware 会议列出的企业通讯作者岗位', 'https://2026.aiwareconf.org/track/aiware-2026-keynotes' ]
      ],
      evidence: '林佳航在 ACL 正式版中是并列第一作者，并在同期个人主页列出自己参与发表的评测工作及开源工具。论文首页链接 MiniMax 的工具仓库；企业数据卡将同篇成果明确列为其 OctoCodingBench 项目的扩展。校企两方通讯作者包括桂韬与 MiniMax 研究员 Qidi Xu。林佳航在该项目中以复旦在读学生身份参与联合科研，其公开履历在同期列有 NEX-AGI 实习。',
      advising: [
        '硕士共同导师',
        '林佳航的同期公开履历具名列桂韬和黄萱菁为其复旦硕士导师；桂韬在 ACL 正式版中是共同通讯作者。',
        'https://github.com/Curry09/curry09.github.io/blob/d8c13a941c336224b044a8d751509ceda1902374/_pages/about.md'
      ]
    },
    {
      id: 'deepseek-grm-thu-peng-li',
      company: 'DeepSeek',
      team: '奖励模型研究',
      school: '清华大学',
      studentSchool: '清华大学',
      faculty: [ '李鹏 · Peng Li', '2022 年起任清华大学智能产业研究院副研究员；在 DeepSeek-GRM 论文以清华大学署名。', 'https://air.tsinghua.edu.cn/en/info/1046/1373.htm' ],
      employee: [ '许润昕 · Runxin Xu', '2023 年 8 月起在 DeepSeek 任研究员；在 DeepSeek-GRM 论文以 DeepSeek 署名。', 'https://runxinxu.github.io/#experience' ],
      student: [
        '刘子君 · Zijun Liu',
        '2024 年起在清华大学计算机系攻读博士；2025 年 4 月本人报告介绍了这篇 DeepSeek-GRM 论文，原文具名注明研究在 DeepSeek 实习期间完成。',
        'https://hub.baai.ac.cn/view/45080'
      ],
      title: 'Inference-Time Scaling for Generalist Reward Modeling',
      short: 'DeepSeek-GRM',
      date: '2025-04',
      venue: 'arXiv 预印本',
      area: '语言模型与智能体',
      paper: 'https://arxiv.org/pdf/2504.02495v3',
      extra: [
        [ 'DeepSeek-GRM 首次公开时间及作者名单', 'https://arxiv.org/abs/2504.02495' ],
        [ 'ICML 2024 贡献声明，第 25 页', 'https://raw.githubusercontent.com/mlresearch/v235/main/assets/yang24p/yang24p.pdf#page=25' ],
        [ '清华团队项目仓库：具名指导与学生分工', 'https://github.com/AgentForceTeamOfficial/UA2-Agent#contributions' ],
        [ '2024 年 11 月清华智能体项目的署名', 'https://agent-force.github.io/AIGS/' ],
        [ '2025 年 2 月首发的后续研究', 'https://arxiv.org/abs/2502.14496' ],
        [ 'COLM 正式版的共同第一作者与通讯作者', 'https://arxiv.org/pdf/2502.14496v3' ],
        [ '刘洋的清华大学学籍及指导名录', 'https://nlp.csai.tsinghua.edu.cn/~ly/' ]
      ],
      evidence: 'DeepSeek-GRM 首页将第一作者刘子君双署清华与 DeepSeek，并具名注明该工作完成于企业实习；李鹏和 DeepSeek 研究员许润昕同篇署名。清华科研项目的贡献声明记录了李鹏对刘子君参与的研究的指导。两人在刘子君读博后继续合作，2025 年 2 月公开的另一项研究中，正式版列刘子君为共同第一作者、李鹏为共同通讯作者。',
      advising: [
        '校内科研项目指导',
        'ICML 2024 的清华团队贡献声明写明李鹏与刘洋共同指导 UA² 项目，刘子君共同主导实验并设计智能体框架。刘洋是刘子君的博士导师；DeepSeek-GRM 原文未单列各作者的指导分工。',
        'https://raw.githubusercontent.com/mlresearch/v235/main/assets/yang24p/yang24p.pdf#page=25'
      ]
    },
    {
      id: 'octobench-minimax-fudan-xuanjing-huang',
      company: 'MiniMax',
      team: '代码智能体 · OctoBench 评测',
      school: '复旦大学',
      studentSchool: '复旦大学',
      faculty: [ '黄萱菁 · Xuanjing Huang', '复旦大学计算机科学技术学院教授；ACL 正式版署复旦大学并列为通讯作者。', 'https://cs.fudan.edu.cn/_t4218/7b/d6/c24781a490454/page.psp' ],
      employee: [
        'Deming Ding',
        '本人 ORCID 履历载明自 2025 年 7 月起在 MiniMax 通用模型团队担任算法研究员；正式论文列为并列第一作者，署复旦大学和 MiniMax。',
        'https://orcid.org/0009-0006-3092-8848'
      ],
      student: [ '林佳航 · Jiahang Lin', '2025 年 9 月起在复旦大学攻读硕士，导师为桂韬与黄萱菁；本人主页列出此项研究与发布的评测工具。正式论文列为并列第一作者，署复旦大学。', 'https://curry09.github.io/' ],
      title: 'OctoBench: Benchmarking Scaffold-Aware Instruction Following in Repository-Grounded Agentic Coding',
      short: 'OctoBench',
      date: '2026-07',
      venue: 'ACL',
      area: '语言模型与智能体',
      paper: 'https://aclanthology.org/2026.acl-long.269.pdf',
      extra: [
        [ '2026 年 1 月首版预印本', 'https://arxiv.org/abs/2601.10343' ],
        [ '学生同期主页：导师、研究与实习履历', 'https://github.com/Curry09/curry09.github.io/blob/d8c13a941c336224b044a8d751509ceda1902374/_pages/about.md' ],
        [ 'MiniMax 官方 OctoBench 数据集及项目来源', 'https://huggingface.co/datasets/MiniMaxAI/OctoBench/blob/main/README.md' ],
        [ 'MiniMax 发布的同篇论文评测工具', 'https://github.com/MiniMax-AI/mini-vela' ],
        [ 'MiniMax 对前序项目 OctoCodingBench 的介绍', 'https://www.minimax.io/news/production-grade-benchmark-for-coding-agents' ],
        [ 'AIware 会议列出的企业通讯作者岗位', 'https://2026.aiwareconf.org/track/aiware-2026-keynotes' ]
      ],
      evidence: '林佳航在 ACL 正式版中是并列第一作者，并在同期个人主页列出自己参与发表的评测工作及开源工具。论文首页链接 MiniMax 的工具仓库；企业数据卡将同篇成果明确列为其 OctoCodingBench 项目的扩展。校企两方通讯作者包括黄萱菁与 MiniMax 研究员 Qidi Xu。林佳航在该项目中以复旦在读学生身份参与联合科研，其公开履历在同期列有 NEX-AGI 实习。',
      advising: [
        '硕士共同导师',
        '林佳航的同期公开履历具名列桂韬和黄萱菁为其复旦硕士导师；黄萱菁在 ACL 正式版中是共同通讯作者。',
        'https://github.com/Curry09/curry09.github.io/blob/d8c13a941c336224b044a8d751509ceda1902374/_pages/about.md'
      ]
    },
    {
      "id": "cameranoise-tencent-fudan-zuxuan",
      "company": "腾讯",
      "team": "广告营销服务（AMS）",
      "school": "复旦大学",
      "studentSchool": "复旦大学",
      "faculty": [
        "吴祖煊 · Zuxuan Wu",
        "研究期间任复旦大学教师、博士生导师；复旦校友会 2024 年资料记为计算机学院副教授。",
        "https://alumni.fudan.edu.cn/37/df/c14596a669663/page.htm"
      ],
      "employee": [
        "Yeying Jin",
        "2023 年 11 月起在腾讯任研究员，现任 Staff Researcher、研究负责人。本人研究清单列本论文；论文第 2 号单位署名为腾讯。",
        "https://jinyeying.github.io/"
      ],
      "student": [
        "赵浩宇 · Haoyu Zhao",
        "复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队参加青云计划科研实习，2026 年 6 月获博士学位。",
        "https://gulucaptain.github.io/"
      ],
      "title": "CameraNoise: Enabling Faithful Camera Control in Video Diffusion through Geometry-Flow-Guided Noise Warping",
      "short": "CameraNoise",
      "date": "2026-07",
      "venue": "ICML",
      "area": "图像与视频生成",
      "paper": "https://arxiv.org/html/2605.30774v1",
      "extra": [
        [
          "ICML 正式论文集",
          "https://proceedings.mlr.press/v306/zhao26l.html"
        ],
        [
          "项目主页",
          "https://gulucaptain.github.io/CameraNoise/"
        ],
        [
          "复旦大学：赵浩宇 2022 级博士生",
          "https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm"
        ]
      ],
      "evidence": "预印本作者行的黑桃符号标在赵浩宇名下，脚注明确该项目是腾讯青云计划实习成果；两位博士导师同篇任通讯作者。正式 ICML 论文集复核四人署名。",
      "advising": [
        "校内博士导师",
        "赵浩宇个人履历具名列吴祖煊和姜育刚为复旦大学博士导师；两人均为该论文的复旦署名通讯作者。",
        "https://gulucaptain.github.io/"
      ]
    },
    {
      "id": "cameranoise-tencent-fudan-yu-gang",
      "company": "腾讯",
      "team": "广告营销服务（AMS）",
      "school": "复旦大学",
      "studentSchool": "复旦大学",
      "faculty": [
        "姜育刚 · Yu-Gang Jiang",
        "研究期间任复旦大学计算机学科教授、博士生导师。",
        "https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp"
      ],
      "employee": [
        "Yeying Jin",
        "2023 年 11 月起在腾讯任研究员，现任 Staff Researcher、研究负责人。本人研究清单列本论文；论文第 2 号单位署名为腾讯。",
        "https://jinyeying.github.io/"
      ],
      "student": [
        "赵浩宇 · Haoyu Zhao",
        "复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队参加青云计划科研实习，2026 年 6 月获博士学位。",
        "https://gulucaptain.github.io/"
      ],
      "title": "CameraNoise: Enabling Faithful Camera Control in Video Diffusion through Geometry-Flow-Guided Noise Warping",
      "short": "CameraNoise",
      "date": "2026-07",
      "venue": "ICML",
      "area": "图像与视频生成",
      "paper": "https://arxiv.org/html/2605.30774v1",
      "extra": [
        [
          "ICML 正式论文集",
          "https://proceedings.mlr.press/v306/zhao26l.html"
        ],
        [
          "项目主页",
          "https://gulucaptain.github.io/CameraNoise/"
        ],
        [
          "复旦大学：赵浩宇 2022 级博士生",
          "https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm"
        ]
      ],
      "evidence": "预印本作者行的黑桃符号标在赵浩宇名下，脚注明确该项目是腾讯青云计划实习成果；两位博士导师同篇任通讯作者。正式 ICML 论文集复核四人署名。",
      "advising": [
        "校内博士导师",
        "赵浩宇个人履历具名列吴祖煊和姜育刚为复旦大学博士导师；两人均为该论文的复旦署名通讯作者。",
        "https://gulucaptain.github.io/"
      ]
    },
    {
      "id": "dcdm-tencent-fudan-zuxuan",
      "company": "腾讯",
      "team": "广告营销服务（AMS）",
      "school": "复旦大学",
      "studentSchool": "复旦大学",
      "faculty": [
        "吴祖煊 · Zuxuan Wu",
        "研究期间任复旦大学教师、博士生导师；复旦校友会 2024 年资料记为计算机学院副教授。",
        "https://alumni.fudan.edu.cn/37/df/c14596a669663/page.htm"
      ],
      "employee": [
        "张远 · Yuang Zhang",
        "已在腾讯从事视频生成研究；本人主页列腾讯研究员身份，同期 2025 年 8 月项目仅署腾讯，2026 年 2 月本论文、2026 年 7 月 ICML 项目继续署腾讯。",
        "https://zyayoung.github.io/"
      ],
      "student": [
        "赵浩宇 · Haoyu Zhao",
        "复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队参加青云计划科研实习，2026 年 6 月获博士学位。",
        "https://gulucaptain.github.io/"
      ],
      "title": "DCDM: Divide-and-Conquer Diffusion Models for Consistency-Preserving Video Generation",
      "short": "DCDM",
      "date": "2026-02",
      "venue": "arXiv",
      "area": "图像与视频生成",
      "paper": "https://arxiv.org/html/2602.13637v1",
      "extra": [
        [
          "张远在 2025 年 8 月同类工作中已只署腾讯",
          "https://arxiv.org/html/2508.07597v2"
        ],
        [
          "腾讯官方项目的同一组人员",
          "https://tencent.github.io/MimicMotion/"
        ],
        [
          "复旦大学：赵浩宇 2022 级博士生",
          "https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm"
        ]
      ],
      "evidence": "首版首页星号在第一作者赵浩宇名下，脚注明确该项工作在腾讯青云计划实习期间完成；本人履历把这一段实习明确定位在腾讯广告营销服务团队。两位复旦导师为同论文通讯作者。仅计预印本，AAAI 比赛奖项不是正式会刊发表。",
      "advising": [
        "校内博士导师",
        "赵浩宇个人履历具名列吴祖煊和姜育刚为复旦大学博士导师；两人均为该论文的复旦署名通讯作者。",
        "https://gulucaptain.github.io/"
      ]
    },
    {
      "id": "dcdm-tencent-fudan-yu-gang",
      "company": "腾讯",
      "team": "广告营销服务（AMS）",
      "school": "复旦大学",
      "studentSchool": "复旦大学",
      "faculty": [
        "姜育刚 · Yu-Gang Jiang",
        "研究期间任复旦大学计算机学科教授、博士生导师。",
        "https://www.fudan.edu.cn/_s2/2024/0117/c1177a139081/page.psp"
      ],
      "employee": [
        "张远 · Yuang Zhang",
        "已在腾讯从事视频生成研究；本人主页列腾讯研究员身份，同期 2025 年 8 月项目仅署腾讯，2026 年 2 月本论文、2026 年 7 月 ICML 项目继续署腾讯。",
        "https://zyayoung.github.io/"
      ],
      "student": [
        "赵浩宇 · Haoyu Zhao",
        "复旦大学 2022 级博士生，2025 年 5 月至 2026 年 6 月在腾讯广告营销服务团队参加青云计划科研实习，2026 年 6 月获博士学位。",
        "https://gulucaptain.github.io/"
      ],
      "title": "DCDM: Divide-and-Conquer Diffusion Models for Consistency-Preserving Video Generation",
      "short": "DCDM",
      "date": "2026-02",
      "venue": "arXiv",
      "area": "图像与视频生成",
      "paper": "https://arxiv.org/html/2602.13637v1",
      "extra": [
        [
          "张远在 2025 年 8 月同类工作中已只署腾讯",
          "https://arxiv.org/html/2508.07597v2"
        ],
        [
          "腾讯官方项目的同一组人员",
          "https://tencent.github.io/MimicMotion/"
        ],
        [
          "复旦大学：赵浩宇 2022 级博士生",
          "https://ciram.fudan.edu.cn/18/f4/c49211a792820/page.htm"
        ]
      ],
      "evidence": "首版首页星号在第一作者赵浩宇名下，脚注明确该项工作在腾讯青云计划实习期间完成；本人履历把这一段实习明确定位在腾讯广告营销服务团队。两位复旦导师为同论文通讯作者。仅计预印本，AAAI 比赛奖项不是正式会刊发表。",
      "advising": [
        "校内博士导师",
        "赵浩宇个人履历具名列吴祖煊和姜育刚为复旦大学博士导师；两人均为该论文的复旦署名通讯作者。",
        "https://gulucaptain.github.io/"
      ]
    },
    {
      "id": "alibaba-gflowgr-cityu-xiangyu-zhao",
      "company": "阿里巴巴",
      "team": "阿里妈妈（Alimama）",
      "school": "香港城市大学",
      "studentSchool": "香港城市大学",
      "faculty": [
        "赵翔宇 · Xiangyu Zhao",
        "香港城市大学数据科学系副教授，以港城大署名并任通讯作者。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "employee": [
        "Jian Xu",
        "阿里妈妈首席算法架构师、阿里巴巴资深总监，原文署名阿里集团。",
        "https://openreview.net/pdf/70344285d0f2f98baec78b3ab203069e8ca59a03.pdf"
      ],
      "student": [
        "Yejing Wang",
        "当时为港城大数据科学博士生，2025 年 1 月起在阿里淘天集团实习。",
        "https://dave-adamswang.github.io/"
      ],
      "title": "GFlowGR: Fine-tuning Generative Recommendation Frameworks with Generative Flow Networks",
      "short": "GFlowGR · 生成式推荐",
      "date": "2026-07",
      "venue": "SIGIR",
      "area": "搜索与推荐",
      "paper": "https://arxiv.org/html/2506.16114v3",
      "extra": [
        [
          "港城大正式出版索引",
          "https://scholars.cityu.edu.hk/en/publications/gflowgr-fine-tuning-generative-recommendation-frameworks-with-gen/"
        ],
        [
          "ACM DOI",
          "https://doi.org/10.1145/3805712.3809663"
        ],
        [
          "2025 年 6 月首版",
          "https://arxiv.org/abs/2506.16114"
        ]
      ],
      "evidence": "论文首页具名注明第一作者 Yejing Wang 在阿里巴巴实习期间开展本论文研究；论文还记录系统于 2025 年年中上线淘宝搜索广告。港城大博士导师赵翔宇是同篇通讯作者，阿里妈妈首席算法架构师 Jian Xu 为同篇企业作者。",
      "advising": [
        "博士导师",
        "学生本人主页具名列赵翔宇为香港城市大学博士导师。",
        "https://dave-adamswang.github.io/"
      ]
    },
    {
      "id": "xiaohongshu-omnigaia-ruc-dou",
      "company": "小红书",
      "team": "中央平台团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "窦志成 · Zhicheng Dou",
        "中国人民大学高瓴人工智能学院教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm"
      ],
      "employee": [
        "焦文祥 · Wenxiang Jiao",
        "2025 年 9 月起在小红书担任大模型算法专家；论文署小红书。",
        "https://wxjiao.github.io/"
      ],
      "student": [
        "李晓熙 · Xiaoxi Li",
        "2023 年 9 月起在中国人民大学攻读博士；2025 年 6 月至 2026 年 5 月在小红书 RedStar 实习。",
        "https://xiaoxi-li1.github.io/"
      ],
      "title": "OmniGAIA: Towards Native Omni-Modal AI Agents",
      "short": "OmniGAIA",
      "date": "2026-02-26",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2602.22897v1",
      "evidence": "论文首页点名李晓熙在小红书实习期间完成工作；焦文祥和窦志成都在同一篇文章署名。",
      "advising": [
        "校内导师",
        "李晓熙主页的教育经历注明来自中国人民大学、由窦志成指导。",
        "https://xiaoxi-li1.github.io/"
      ],
      "paperId": "arxiv:2602.22897"
    },
    {
      "id": "kuaishou-aepo-ruc-dou",
      "company": "快手",
      "team": "基座大模型团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "窦志成 · Zhicheng Dou",
        "中国人民大学高瓴人工智能学院教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm"
      ],
      "employee": [
        "张富峥 · Fuzheng Zhang",
        "公开任职履历记载 2022 年 5 月起任快手 NLP 与音频智能中心主任；论文署快手。",
        "https://zhfzhmsra.github.io/"
      ],
      "student": [
        "董冠霆 · Guanting Dong",
        "2024 年 9 月起为中国人民大学高瓴人工智能学院博士生，2025 年 4 月至 11 月在快手基座大模型团队担任研究实习生。",
        "https://dongguanting.github.io/"
      ],
      "title": "Agentic Entropy-Balanced Policy Optimization",
      "short": "AEPO",
      "date": "2026-04",
      "venue": "The Web Conference",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2510.14545v1",
      "evidence": "首版首页脚注把工作与董冠霆在快手的实习对应起来。快手在任负责人张富峥为同篇作者，署快手。",
      "advising": [
        "校内共同指导",
        "董冠霆本人主页具名列窦志成和文继荣共同指导人大的博士学业。",
        "https://dongguanting.github.io/"
      ],
      "extra": [
        [
          "人大课题组项目",
          "https://github.com/RUC-NLPIR/ARPO"
        ]
      ],
      "paperId": "arxiv:2510.14545"
    },
    {
      "id": "kuaishou-arpo-ruc-dou",
      "company": "快手",
      "team": "基座大模型团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "窦志成 · Zhicheng Dou",
        "中国人民大学高瓴人工智能学院教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/dzc/index.htm"
      ],
      "employee": [
        "张富峥 · Fuzheng Zhang",
        "公开任职履历记载 2022 年 5 月起任快手 NLP 与音频智能中心主任；论文署快手。",
        "https://zhfzhmsra.github.io/"
      ],
      "student": [
        "董冠霆 · Guanting Dong",
        "2024 年 9 月起为中国人民大学高瓴人工智能学院博士生，2025 年 4 月至 11 月在快手基座大模型团队担任研究实习生。",
        "https://dongguanting.github.io/"
      ],
      "title": "Agentic Reinforced Policy Optimization",
      "short": "ARPO",
      "date": "2026-04",
      "venue": "ICLR",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2507.19849v1",
      "evidence": "首版首页脚注把工作与董冠霆在快手的实习对应起来。快手在任负责人张富峥为同篇作者，署快手。",
      "advising": [
        "校内共同指导",
        "董冠霆本人主页具名列窦志成和文继荣共同指导人大的博士学业。",
        "https://dongguanting.github.io/"
      ],
      "extra": [
        [
          "正式会议版",
          "https://openreview.net/pdf/fad759d153870080b021de5fd0773d6b9148c7ce.pdf"
        ]
      ],
      "paperId": "arxiv:2507.19849"
    },
    {
      "id": "kuaishou-aepo-ruc-wen",
      "company": "快手",
      "team": "基座大模型团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "文继荣 · Ji-Rong Wen",
        "2019 年起为中国人民大学高瓴人工智能学院长聘教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm"
      ],
      "employee": [
        "张富峥 · Fuzheng Zhang",
        "公开任职履历记载 2022 年 5 月起任快手 NLP 与音频智能中心主任；论文署快手。",
        "https://zhfzhmsra.github.io/"
      ],
      "student": [
        "董冠霆 · Guanting Dong",
        "2024 年 9 月起为中国人民大学高瓴人工智能学院博士生，2025 年 4 月至 11 月在快手基座大模型团队担任研究实习生。",
        "https://dongguanting.github.io/"
      ],
      "title": "Agentic Entropy-Balanced Policy Optimization",
      "short": "AEPO",
      "date": "2026-04",
      "venue": "The Web Conference",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2510.14545v1",
      "evidence": "首版首页脚注把工作与董冠霆在快手的实习对应起来。快手在任负责人张富峥为同篇作者，署快手。",
      "advising": [
        "校内共同指导",
        "董冠霆本人主页具名列窦志成和文继荣共同指导人大的博士学业。",
        "https://dongguanting.github.io/"
      ],
      "extra": [
        [
          "人大课题组项目",
          "https://github.com/RUC-NLPIR/ARPO"
        ]
      ],
      "paperId": "arxiv:2510.14545"
    },
    {
      "id": "kuaishou-arpo-ruc-wen",
      "company": "快手",
      "team": "基座大模型团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "文继荣 · Ji-Rong Wen",
        "2019 年起为中国人民大学高瓴人工智能学院长聘教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/wjr/index.htm"
      ],
      "employee": [
        "张富峥 · Fuzheng Zhang",
        "公开任职履历记载 2022 年 5 月起任快手 NLP 与音频智能中心主任；论文署快手。",
        "https://zhfzhmsra.github.io/"
      ],
      "student": [
        "董冠霆 · Guanting Dong",
        "2024 年 9 月起为中国人民大学高瓴人工智能学院博士生，2025 年 4 月至 11 月在快手基座大模型团队担任研究实习生。",
        "https://dongguanting.github.io/"
      ],
      "title": "Agentic Reinforced Policy Optimization",
      "short": "ARPO",
      "date": "2026-04",
      "venue": "ICLR",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2507.19849v1",
      "evidence": "首版首页脚注把工作与董冠霆在快手的实习对应起来。快手在任负责人张富峥为同篇作者，署快手。",
      "advising": [
        "校内共同指导",
        "董冠霆本人主页具名列窦志成和文继荣共同指导人大的博士学业。",
        "https://dongguanting.github.io/"
      ],
      "extra": [
        [
          "正式会议版",
          "https://openreview.net/pdf/fad759d153870080b021de5fd0773d6b9148c7ce.pdf"
        ]
      ],
      "paperId": "arxiv:2507.19849"
    },
    {
      "id": "alibaba-animateanymesh-hust-xiang-bai",
      "company": "阿里巴巴",
      "team": "达摩院 · 视觉生成",
      "school": "华中科技大学",
      "studentSchool": "华中科技大学",
      "faculty": [
        "白翔 · Xiang Bai",
        "华中科技大学教授、博士生导师，原文以华中科技大学署名。",
        "https://sse.hust.edu.cn/info/1083/3520.htm"
      ],
      "employee": [
        "Chaohui Yu",
        "2020 年起任阿里达摩院算法专家，原文以达摩院和阿里集团署名。",
        "https://richardych.github.io/"
      ],
      "student": [
        "吴子杰 · Zijie Wu",
        "华中科技大学博士生，2023 年 5 月至 2025 年 7 月在阿里达摩院做视觉生成科研实习。",
        "https://jarrentwu1031.github.io/"
      ],
      "title": "AnimateAnyMesh: A Feed-Forward 4D Foundation Model for Text-Driven Universal Mesh Animation",
      "short": "AnimateAnyMesh",
      "date": "2025-10",
      "venue": "ICCV",
      "area": "视觉与多模态",
      "paper": "https://openaccess.thecvf.com/content/ICCV2025/papers/Wu_AnimateAnyMesh_A_Feed-Forward_4D_Foundation_Model_for_Text-Driven_Universal_Mesh_ICCV_2025_paper.pdf",
      "extra": [
        [
          "实习期间公开的预印本",
          "https://arxiv.org/abs/2506.09982"
        ],
        [
          "作者项目页",
          "https://animateanymesh.github.io/AnimateAnyMesh/"
        ],
        [
          "华中科技大学研究生导师名录",
          "https://ei.hust.edu.cn/info/1177/7104.htm"
        ]
      ],
      "evidence": "吴子杰把 AnimateAnyMesh 具名列为 2023 年 5 月至 2025 年 7 月在阿里达摩院实习的第一作者成果；预印本于实习结束前公开。正式版同时列出该生的华中科大和阿里达摩院署名，以及华中科大导师白翔与阿里达摩院研究员 Chaohui Yu。",
      "advising": [
        "博士导师",
        "吴子杰主页具名列白翔为华中科技大学博士导师；学校 2022 年研究生名单也记载其较早的硕士指导关系。",
        "https://jarrentwu1031.github.io/"
      ],
      "paperId": "arxiv:2506.09982"
    },
    {
      "id": "lirf-tencent-nwpu-wang",
      "company": "腾讯",
      "team": "腾讯 AI Lab · 视觉计算中心",
      "school": "西北工业大学",
      "studentSchool": "西北工业大学",
      "faculty": [
        "王庆 · Qing Wang",
        "西北工业大学计算机学院教授，黄鑫的博士导师；为该论文的西工大署名通讯作者。",
        "https://npu-cvpg.org/group"
      ],
      "employee": [
        "张琦 · Qi Zhang",
        "本人履历列 2021 年至 2024 年在腾讯 AI Lab 任研究员，论文署腾讯 AI Lab；黄鑫列其为实习导师。",
        "https://qzhang-cv.github.io/"
      ],
      "student": [
        "黄鑫 · Xin Huang",
        "在读西北工业大学博士生，2021 年至 2023 年在腾讯 AI Lab 视觉计算中心实习。",
        "https://xhuangcv.github.io/"
      ],
      "title": "Local Implicit Ray Function for Generalizable Radiance Field Representation",
      "short": "LIRF",
      "date": "2023-06",
      "venue": "CVPR",
      "area": "视觉与多模态",
      "paper": "https://openaccess.thecvf.com/content/CVPR2023/papers/Huang_Local_Implicit_Ray_Function_for_Generalizable_Radiance_Field_Representation_CVPR_2023_paper.pdf",
      "extra": [
        [
          "CVPR 正式论文集",
          "https://openaccess.thecvf.com/content/CVPR2023/html/Huang_Local_Implicit_Ray_Function_for_Generalizable_Radiance_Field_Representation_CVPR_2023_paper.html"
        ]
      ],
      "evidence": "CVPR 正式版在第一作者黄鑫名下标注此工作在腾讯 AI Lab 实习期间完成。同篇通讯作者分别为西工大博士导师王庆与当时在腾讯任研究员的实习导师张琦。这篇研究是新视角合成，与已收录的同组隐式相机模型论文是两篇不同的正式论文。",
      "advising": [
        "校内博士导师",
        "黄鑫本人在个人简介中具名列王庆为西北工业大学博士导师。",
        "https://xhuangcv.github.io/"
      ]
    },
    {
      "id": "vpo-zhipu-tsinghua-huang",
      "paperId": "arxiv:2503.20491",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "研究期间为清华大学计算机系教授、CoAI 负责人和同篇通讯作者。",
        "https://coai.cs.tsinghua.edu.cn/hml"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源会议讲者介绍列为智谱 AI GLM 技术团队研究员，之前担任华为云技术专家；该篇同署智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "程家乐 · Jiale Cheng",
        "清华大学计算机系在读博士，师从黄民烈教授；本论文脚注明确以姓名首字母 JC 标注智谱 AI 实习期间完成。",
        "https://cips-cl.org/?p=89141"
      ],
      "title": "VPO: Aligning Text-to-Video Generation Models with Prompt Optimization",
      "short": "VPO",
      "date": "2025-10",
      "venue": "ICCV",
      "area": "视觉与多模态",
      "paper": "https://openaccess.thecvf.com/content/ICCV2025/papers/Cheng_VPO_Aligning_Text-to-Video_Generation_Models_with_Prompt_Optimization_ICCV_2025_paper.pdf",
      "extra": [
        [
          "正式会议题录",
          "https://openaccess.thecvf.com/content/ICCV2025/html/Cheng_VPO_Aligning_Text-to-Video_Generation_Models_with_Prompt_Optimization_ICCV_2025_paper.html"
        ],
        [
          "2025 青稞 AI 嘉年华具名师生信息",
          "https://qingkeai.online/2025"
        ]
      ],
      "evidence": "该篇作者和脚注明确对应：清华大学程家乐在智谱 AI 实习期间参与本文，黄民烈为清华署名通讯作者，顾晓韬为智谱 AI 署名作者。独立公开资料具名核对程家乐学籍、指导关系及顾晓韬企业研究员身份。",
      "advising": [
        "校内博士导师",
        "计算语言学专业委员会公开讲者简介具名说明，清华大学博士生程家乐师从黄民烈教授。",
        "https://cips-cl.org/?p=89141"
      ]
    },
    {
      "id": "autodetect-zhipu-tsinghua-huang",
      "paperId": "arxiv:2406.16714",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "研究期间为清华大学计算机系教授、CoAI 负责人和同篇通讯作者。",
        "https://coai.cs.tsinghua.edu.cn/hml"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源会议讲者介绍列为智谱 AI GLM 技术团队研究员，之前担任华为云技术专家；该篇同署智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "程家乐 · Jiale Cheng",
        "清华大学计算机系在读博士，师从黄民烈教授；本论文脚注明确以姓名首字母 JC 标注智谱 AI 实习期间完成。",
        "https://cips-cl.org/?p=89141"
      ],
      "title": "AutoDetect: Towards a Unified Framework for Automated Weakness Detection in Large Language Models",
      "short": "AutoDetect",
      "date": "2024-11",
      "venue": "Findings of EMNLP",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2406.16714v2",
      "extra": [
        [
          "正式会议题录",
          "https://aclanthology.org/2024.findings-emnlp.397/"
        ],
        [
          "2025 青稞 AI 嘉年华具名师生信息",
          "https://qingkeai.online/2025"
        ]
      ],
      "evidence": "该篇作者和脚注明确对应：清华大学程家乐在智谱 AI 实习期间参与本文，黄民烈为清华署名通讯作者，顾晓韬为智谱 AI 署名作者。独立公开资料具名核对程家乐学籍、指导关系及顾晓韬企业研究员身份。",
      "advising": [
        "校内博士导师",
        "计算语言学专业委员会公开讲者简介具名说明，清华大学博士生程家乐师从黄民烈教授。",
        "https://cips-cl.org/?p=89141"
      ]
    },
    {
      "id": "spar-zhipu-tsinghua-huang",
      "paperId": "arxiv:2412.11605",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "研究期间为清华大学计算机系教授、CoAI 负责人和同篇通讯作者。",
        "https://coai.cs.tsinghua.edu.cn/hml"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源会议讲者介绍列为智谱 AI GLM 技术团队研究员，之前担任华为云技术专家；该篇同署智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "程家乐 · Jiale Cheng",
        "清华大学计算机系在读博士，师从黄民烈教授；本论文脚注明确以姓名首字母 JC 标注智谱 AI 实习期间完成。",
        "https://cips-cl.org/?p=89141"
      ],
      "title": "SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models",
      "short": "SPaR",
      "date": "2025-04",
      "venue": "ICLR",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2412.11605v2",
      "extra": [
        [
          "正式会议题录",
          "https://proceedings.iclr.cc/paper_files/paper/2025/hash/abe1eb21ceb046209c96a0f5e7544ccc-Abstract-Conference.html"
        ],
        [
          "2025 青稞 AI 嘉年华具名师生信息",
          "https://qingkeai.online/2025"
        ]
      ],
      "evidence": "该篇作者和脚注明确对应：清华大学程家乐在智谱 AI 实习期间参与本文，黄民烈为清华署名通讯作者，顾晓韬为智谱 AI 署名作者。独立公开资料具名核对程家乐学籍、指导关系及顾晓韬企业研究员身份。",
      "advising": [
        "校内博士导师",
        "计算语言学专业委员会公开讲者简介具名说明，清华大学博士生程家乐师从黄民烈教授。",
        "https://cips-cl.org/?p=89141"
      ]
    },
    {
      "id": "longsafety-zhipu-tsinghua-huang",
      "paperId": "arxiv:2502.16971",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "研究期间为清华大学计算机系教授、CoAI 负责人和同篇通讯作者。",
        "https://coai.cs.tsinghua.edu.cn/hml"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源会议讲者介绍列为智谱 AI GLM 技术团队研究员，之前担任华为云技术专家；该篇同署智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "程家乐 · Jiale Cheng",
        "清华大学计算机系在读博士，师从黄民烈教授；本论文脚注明确以姓名首字母 JC 标注智谱 AI 实习期间完成。",
        "https://cips-cl.org/?p=89141"
      ],
      "title": "LongSafety: Evaluating Long-Context Safety of Large Language Models",
      "short": "LongSafety",
      "date": "2025-07",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2502.16971",
      "extra": [
        [
          "正式会议题录",
          "https://aclanthology.org/2025.acl-long.1530/"
        ],
        [
          "2025 青稞 AI 嘉年华具名师生信息",
          "https://qingkeai.online/2025"
        ]
      ],
      "evidence": "该篇作者和脚注明确对应：清华大学程家乐在智谱 AI 实习期间参与本文，黄民烈为清华署名通讯作者，顾晓韬为智谱 AI 署名作者。独立公开资料具名核对程家乐学籍、指导关系及顾晓韬企业研究员身份。",
      "advising": [
        "校内博士导师",
        "计算语言学专业委员会公开讲者简介具名说明，清华大学博士生程家乐师从黄民烈教授。",
        "https://cips-cl.org/?p=89141"
      ]
    },
    {
      "id": "kuaishou-hrpo-cityu-xiangyu-zhao",
      "company": "快手",
      "team": "推荐算法",
      "school": "香港城市大学",
      "studentSchool": "香港城市大学",
      "faculty": [
        "赵翔宇 · Xiangyu Zhao",
        "香港城市大学数据科学系教师，本篇校方共同通讯作者。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "employee": [
        "蔡庆芃 · Qingpeng Cai",
        "快手高级总监，论文共同通讯作者。",
        "https://qingpengcai.github.io/"
      ],
      "student": [
        "Kaifeng Guo",
        "2026 年 1 月起在香港城市大学攻读数据科学博士，2025 年 10 月起在快手科研实习。",
        "https://kaifengguo.github.io/"
      ],
      "title": "Hierarchical Residual Policy Optimization for Generative Recommendations",
      "short": "HRPO",
      "date": "2026-08",
      "venue": "KDD",
      "area": "推荐与检索",
      "paper": "https://arxiv.org/html/2608.00750",
      "evidence": "论文脚注明确说明由 Kaifeng Guo 在快手实习时完成。本人主页显示其于该研究期间在港城大读博，并将本篇列为个人成果、2026 年 5 月录用。博士导师赵翔宇与快手高级总监蔡庆芃均是本篇通讯作者。",
      "advising": [
        "博士导师",
        "Kaifeng Guo 本人主页列明由 Xiangyu Zhao 指导其港城大数据科学博士研究。",
        "https://kaifengguo.github.io/"
      ],
      "extra": [
        [
          "港城大正式出版索引",
          "https://scholars.cityu.edu.hk/en/publications/hierarchical-residual-policy-optimization-for-generative-recommen/"
        ],
        [
          "ACM DOI",
          "https://doi.org/10.1145/3770855.3818206"
        ]
      ]
    },
    {
      "id": "kuaishou-gave-cityu-xiangyu-zhao",
      "company": "快手",
      "team": "推荐算法",
      "school": "香港城市大学",
      "studentSchool": "香港城市大学",
      "faculty": [
        "Xiangyu Zhao",
        "香港城市大学数据科学系教师，为 Jingtong Gao 博士导师。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "employee": [
        "蔡庆芃 · Qingpeng Cai",
        "快手高级总监，论文共同通讯作者。",
        "https://qingpengcai.github.io/"
      ],
      "student": [
        "Jingtong Gao",
        "在香港城市大学读博，2024 年 8 月起在快手做科研实习；将本篇列为在快手上线的研究。",
        "https://gaojingtong.github.io/"
      ],
      "title": "Generative Auto-Bidding with Value-Guided Explorations",
      "short": "GAVE",
      "date": "2025-07",
      "venue": "SIGIR",
      "area": "推荐与检索",
      "paper": "https://arxiv.org/html/2504.14587",
      "evidence": "Jingtong Gao 为第一作者；其主页将这项成果明确标为在快手上线，并列同期快手实习。学校学位论文将 GAVE 列为作者本人博士研究，说明在快手用于实际竞价。原文列赵翔宇和快手高级总监蔡庆芃同为作者，记载快手资助和线上 A/B 测试。",
      "advising": [
        "博士导师",
        "香港城市大学博士学位论文明确列 Xiangyu Zhao 为 Jingtong Gao 的导师。",
        "https://scholars.cityu.edu.hk/en/studentTheses/open-world-recommendation-knowledge-transfer-scenario-adaptation-/"
      ],
      "extra": [
        [
          "ACM DOI",
          "https://doi.org/10.1145/3726302.3729987"
        ],
        [
          "同篇作者保存的正式版",
          "https://personal.ntu.edu.sg/boan/papers/SIGIR25_autobidding.pdf"
        ]
      ]
    },
    {
      "id": "kuaishou-cbd-cityu-xiangyu-zhao",
      "company": "快手",
      "team": "推荐算法",
      "school": "香港城市大学",
      "studentSchool": "香港城市大学",
      "faculty": [
        "Xiangyu Zhao",
        "香港城市大学数据科学系教师，为 Jingtong Gao 博士导师。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "employee": [
        "蔡庆芃 · Qingpeng Cai",
        "快手高级总监，论文共同通讯作者。",
        "https://qingpengcai.github.io/"
      ],
      "student": [
        "Jingtong Gao",
        "在香港城市大学读博，2024 年 8 月起在快手做科研实习；将本篇列为在快手上线的研究。",
        "https://gaojingtong.github.io/"
      ],
      "title": "Generative Auto-Bidding in Large-Scale Auctions via Diffusion Completer-Aligner",
      "short": "CBD",
      "date": "2026-08",
      "venue": "KDD",
      "area": "推荐与检索",
      "paper": "https://doi.org/10.1145/3770855.3818422",
      "evidence": "Jingtong Gao 个人履历将这篇具体成果列为快手上线项目，并列同期快手科研实习。2025 年公开首版正值其快手实习与港城大博士在读阶段，原文记载在快手广告线上系统实际测试；正式会议列其为第二作者，博士导师赵翔宇与快手高级总监蔡庆芃均为同篇作者。",
      "advising": [
        "博士导师",
        "香港城市大学博士学位论文明确列 Xiangyu Zhao 为 Jingtong Gao 的导师。",
        "https://scholars.cityu.edu.hk/en/studentTheses/open-world-recommendation-knowledge-transfer-scenario-adaptation-/"
      ],
      "extra": [
        [
          "港城大正式出版索引",
          "https://scholars.cityu.edu.hk/en/publications/generative-auto-bidding-in-large-scale-auctions-via-diffusion-com/"
        ],
        [
          "2025 首版：快手上线细节",
          "https://arxiv.org/html/2509.03348"
        ]
      ]
    },
    {
      "company": "腾讯",
      "team": "优图天衍研究中心（Jarvis）",
      "studentSchool": "西安交通大学",
      "title": "Large Language Model Distilling Medication Recommendation Model",
      "short": "LEADER",
      "date": "2024-02",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2402.02803v2",
      "employee": [
        "吴宪 · Xian Wu",
        "2017 年 12 月加入腾讯，任天衍研究中心主任、专家研究员。原文署腾讯优图天衍并任通讯作者。",
        "https://jarvislab.tencent.com/index-en.html"
      ],
      "student": [
        "刘启东 · Qidong Liu",
        "2019 年 9 月至 2025 年 6 月在西安交大读博，2022 年 9 月起与港城联合培养；2023 年 5 月至 2024 年 8 月在腾讯天衍实习。",
        "https://liuqidong07.github.io/"
      ],
      "evidence": "刘启东 2024 年 3 月简历写明，他于 2023 年 11 月至 2024 年 1 月在腾讯天衍与吴宪开展基于 LLaMA-7B 的用药推荐蒸馏，在 MIMIC-III 与 MIMIC-IV 验证，与本篇的方法和数据完全对应，首版即发表于 2024 年 2 月。腾讯正式员工吴宪与港城大联培导师赵翔宇同为本篇通讯作者。",
      "extra": [
        [
          "2024 年首版",
          "https://arxiv.org/abs/2402.02803v1"
        ],
        [
          "同期简历：腾讯项目时间和内容",
          "https://liuqidong07.github.io/cv/resume_20240326.pdf"
        ]
      ],
      "id": "tencent-leader-cityu-xiangyu-zhao",
      "school": "香港城市大学",
      "faculty": [
        "赵翔宇 · Xiangyu Zhao",
        "香港城市大学数据科学学院教师，原文署港城并任通讯作者。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "advising": [
        "博士联培导师",
        "刘启东本人履历列赵翔宇为香港城市大学的博士联培导师。",
        "https://liuqidong07.github.io/"
      ]
    },
    {
      "company": "腾讯",
      "team": "优图天衍研究中心（Jarvis）",
      "studentSchool": "西安交通大学",
      "title": "A Contrastive Pretrain Model with Prompt Tuning for Multi-center Medication Recommendation",
      "short": "Multi-center Medication Recommendation",
      "date": "2025-02",
      "venue": "ACM TOIS",
      "area": "语言模型与智能体",
      "paper": "https://doi.org/10.1145/3706631",
      "employee": [
        "吴宪 · Xian Wu",
        "2017 年 12 月加入腾讯，任天衍研究中心主任、专家研究员。原文署腾讯优图天衍并任通讯作者。",
        "https://jarvislab.tencent.com/index-en.html"
      ],
      "student": [
        "刘启东 · Qidong Liu",
        "西安交大在读博士，2022 年起与香港城大联合培养；在 2022 年 8–11 月间参与腾讯天衍用药推荐项目。",
        "https://liuqidong07.github.io/cv/resume_20240326.pdf"
      ],
      "evidence": "刘启东同期简历在腾讯天衍多中心用药推荐项目项下逐字列出该论文作为项目产出，并给出企业指导者与工作日期。腾讯天衍收录论文，赵翔宇博士联培导师和腾讯天衍正式员工吴宪均为同篇作者。",
      "extra": [
        [
          "腾讯天衍论文目录",
          "https://jarvislab.tencent.com/aca-publications.html"
        ],
        [
          "西安交大导师论文清单",
          "https://gr.xjtu.edu.cn/fengtian/zh_CN/zhym/976526/list/index.htm"
        ]
      ],
      "id": "tencent-contrastive-med-cityu-xiangyu-zhao",
      "school": "香港城市大学",
      "faculty": [
        "赵翔宇 · Xiangyu Zhao",
        "香港城市大学数据科学学院教师，原文署港城并任通讯作者。",
        "https://www.cityu.edu.hk/stfprofile/xyzhao.htm"
      ],
      "advising": [
        "博士联培导师",
        "刘启东本人履历列赵翔宇为香港城市大学的博士联培导师。",
        "https://liuqidong07.github.io/"
      ]
    },
    {
      "id": "kuaishou-air-polyu-wenqi-fan",
      "company": "快手",
      "team": "电商团队",
      "school": "香港理工大学",
      "studentSchool": "香港理工大学",
      "faculty": [
        "Wenqi Fan",
        "香港理工大学电子计算学系助理教授；同篇作者。",
        "https://www.polyu.edu.hk/comp/people/academic-staff/prof-fan-wenqi/"
      ],
      "employee": [
        "周进东 · Jindong Zhou",
        "厦门大学课题组毕业生名录列其于 2021 年毕业后入职北京快手；同篇署名快手并使用其快手邮箱。",
        "https://astl.xmu.edu.cn/People.htm"
      ],
      "student": [
        "Zhuohang Jiang",
        "2024 年 9 月起就读香港理工大学博士，2025 年 10 月起在快手电商团队科研实习；本人在该实习项下列 AIR。",
        "https://zhuohangjiang.com/"
      ],
      "title": "Atomic Intent Reasoning: Bringing LLM Semantics to Industrial Cross-Domain Recommendations",
      "short": "AIR",
      "date": "2026-08",
      "venue": "KDD",
      "area": "推荐与检索",
      "paper": "https://arxiv.org/html/2606.10357",
      "evidence": "原文脚注指明 Zhuohang Jiang 的工作在快手科技实习时完成；其个人主页将 AIR 明确列在快手电商实习项下，同一时期就读香港理工大学博士。校方共同导师 Wenqi Fan、Qing Li 与快手员工周进东均列于作者栏。",
      "advising": [
        "校内共同导师",
        "学生个人主页列明 Wenqi Fan 和 Qing Li 为博士导师；两位导师均署名本篇。",
        "https://zhuohangjiang.com/"
      ],
      "extra": [
        [
          "ACM DOI",
          "https://doi.org/10.1145/3770855.3818320"
        ]
      ]
    },
    {
      "id": "ant-llada15-ruc-li",
      "company": "蚂蚁集团",
      "team": "扩散语言模型研究",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "李崇轩 · Chongxuan Li",
        "中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。",
        "https://zhenxuan00.github.io/"
      ],
      "employee": [
        "张晓露 · Xiaolu Zhang",
        "蚂蚁集团资深算法工程师，在同篇论文署蚂蚁集团；学生履历列其为该段实习导师。",
        "https://cn.linkedin.com/in/zhang-xiaolu-94892416"
      ],
      "student": [
        "Fengqi Zhu",
        "李崇轩课题组具名博士生；论文署中国人民大学并注明在蚂蚁集团实习期间完成此项工作。",
        "https://zhenxuan00.github.io/#group"
      ],
      "title": "LLaDA 1.5: Variance-Reduced Preference Optimization for Large Language Diffusion Models",
      "short": "LLaDA 1.5",
      "date": "2026-07",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2026.acl-long.524.pdf",
      "evidence": "ACL 正式版和作者项目页的具名脚注均说明第一作者 Fengqi Zhu 在蚂蚁集团实习期间完成此工作；李崇轩与张晓露均同篇署名。",
      "advising": [
        "博士导师",
        "李崇轩本人在其中国人民大学课题组博士生名单中具名列出该同篇作者。",
        "https://zhenxuan00.github.io/#group"
      ],
      "extra": [
        [
          "作者项目和实习脚注",
          "https://ml-gsai.github.io/LLaDA-1.5-Demo/"
        ],
        [
          "蚂蚁研究项目及学生",
          "https://github.com/ML-GSAI/LLaDA-1.5"
        ],
        [
          "往届正式会议企业身份",
          "https://ecmlpkdd-storage.s3.eu-central-1.amazonaws.com/former-websites/2022/index.html%40p%3D2535.html"
        ]
      ],
      "paperId": "arxiv:2505.19223"
    },
    {
      "id": "ant-lladav-ruc-li",
      "company": "蚂蚁集团",
      "team": "扩散语言模型研究",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "李崇轩 · Chongxuan Li",
        "中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。",
        "https://zhenxuan00.github.io/"
      ],
      "employee": [
        "张晓露 · Xiaolu Zhang",
        "蚂蚁集团资深算法工程师，在同篇论文署蚂蚁集团；学生履历列其为该段实习导师。",
        "https://cn.linkedin.com/in/zhang-xiaolu-94892416"
      ],
      "student": [
        "游泽彬 · Zebin You",
        "中国人民大学高瓴人工智能学院在读博士；本人记载 2024 年 6 月至 2026 年 4 月在蚂蚁集团研究扩散语言模型。",
        "https://yyyouy.github.io/"
      ],
      "title": "LLaDA-V: Large Language Diffusion Models with Visual Instruction Tuning",
      "short": "LLaDA-V",
      "date": "2026-06",
      "venue": "CVPR",
      "area": "语言模型与智能体",
      "paper": "https://openaccess.thecvf.com/content/CVPR2026/html/You_LLaDA-V_Large_Language_Diffusion_Models_with_Visual_Instruction_Tuning_CVPR_2026_paper.html",
      "evidence": "2025 年预印本具名脚注把第一作者游泽彬和蚂蚁实习对应；该生本人写明人大博士导师和蚂蚁实习导师。两位导师都列于正式论文。",
      "advising": [
        "博士导师",
        "游泽彬本人主页明确列李崇轩为人大博士导师，并注明研究实习时间和企业导师。",
        "https://yyyouy.github.io/"
      ],
      "extra": [
        [
          "实习脚注与预印本",
          "https://arxiv.org/html/2505.16933v2"
        ],
        [
          "作者项目",
          "https://ml-gsai.github.io/LLaDA-V-demo/"
        ],
        [
          "往届正式会议企业身份",
          "https://ecmlpkdd-storage.s3.eu-central-1.amazonaws.com/former-websites/2022/index.html%40p%3D2535.html"
        ]
      ],
      "paperId": "arxiv:2505.16933"
    },
    {
      "id": "ant-lladao-ruc-li",
      "company": "蚂蚁集团",
      "team": "扩散语言模型研究",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "李崇轩 · Chongxuan Li",
        "中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。",
        "https://zhenxuan00.github.io/"
      ],
      "employee": [
        "张晓露 · Xiaolu Zhang",
        "蚂蚁集团资深算法工程师，在同篇论文署蚂蚁集团；学生履历列其为该段实习导师。",
        "https://cn.linkedin.com/in/zhang-xiaolu-94892416"
      ],
      "student": [
        "游泽彬 · Zebin You",
        "中国人民大学高瓴人工智能学院在读博士；本人记载 2024 年 6 月至 2026 年 4 月在蚂蚁集团研究扩散语言模型。",
        "https://yyyouy.github.io/"
      ],
      "title": "LLaDA-o: An Effective and Length-Adaptive Omni Diffusion Model",
      "short": "LLaDA-o",
      "date": "2026-03-01",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2603.01068v1",
      "evidence": "原文首页把第一作者游泽彬单独标注为在蚂蚁集团实习期间完成工作；其已公开的在读和实习经历显示校内导师与蚂蚁实习导师，二人均为原文作者。",
      "advising": [
        "博士导师",
        "游泽彬本人主页明确列李崇轩为人大博士导师，并注明研究实习时间和企业导师。",
        "https://yyyouy.github.io/"
      ],
      "paperId": "arxiv:2603.01068",
      "extra": [
        [
          "往届正式会议企业身份",
          "https://ecmlpkdd-storage.s3.eu-central-1.amazonaws.com/former-websites/2022/index.html%40p%3D2535.html"
        ]
      ]
    },
    {
      "id": "ant-lladamoe-ruc-li",
      "company": "蚂蚁集团",
      "team": "扩散语言模型研究",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "李崇轩 · Chongxuan Li",
        "中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。",
        "https://zhenxuan00.github.io/"
      ],
      "employee": [
        "李建国 · Jianguo Li",
        "本人履历记载 2020 年 6 月加入蚂蚁集团，任蚂蚁研究院技术总监并负责 LLaDA 系列研究；论文以蚂蚁集团署名。",
        "https://sites.google.com/site/leeplus/"
      ],
      "student": [
        "游泽彬 · Zebin You",
        "中国人民大学高瓴人工智能学院在读博士；本人记载 2024 年 6 月至 2026 年 4 月在蚂蚁集团研究扩散语言模型。",
        "https://yyyouy.github.io/"
      ],
      "title": "LLaDA-MoE: A Sparse MoE Diffusion Language Model",
      "short": "LLaDA-MoE",
      "date": "2025-09-29",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2509.24389v1",
      "evidence": "原文将处于蚂蚁集团研究实习期的游泽彬列为具名核心贡献者，并列人大与蚂蚁集团双署。学校科研处公开报道指明是两方合作开发的同一项目。游泽彬本人说明实习研究方向和校内导师；同篇通讯作者李建国的主页明确其负责该系列在蚂蚁的研发。",
      "advising": [
        "博士导师",
        "游泽彬本人主页明确列李崇轩为人大博士导师，并注明研究实习时间和企业导师。",
        "https://yyyouy.github.io/"
      ],
      "extra": [
        [
          "人大科研部门报道",
          "https://se-office.ruc.edu.cn/xwdt/5f6ccb4065e44328b5274f140269fe94.htm"
        ]
      ],
      "paperId": "arxiv:2509.24389"
    },
    {
      "id": "ant-lladamoev2-ruc-li",
      "company": "蚂蚁集团",
      "team": "扩散语言模型研究",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "李崇轩 · Chongxuan Li",
        "中国人民大学高瓴人工智能学院教师，学生的校内导师及论文通讯作者。",
        "https://zhenxuan00.github.io/"
      ],
      "employee": [
        "李建国 · Jianguo Li",
        "本人履历记载 2020 年 6 月加入蚂蚁集团，任蚂蚁研究院技术总监并负责 LLaDA 系列研究；论文以蚂蚁集团署名。",
        "https://sites.google.com/site/leeplus/"
      ],
      "student": [
        "Fengqi Zhu",
        "李崇轩课题组具名博士生；论文署中国人民大学并注明在蚂蚁集团实习期间完成此项工作。",
        "https://zhenxuan00.github.io/#group"
      ],
      "title": "LLaDA MoE v2: Scaling Mixture-of-Experts Diffusion Language Models",
      "short": "LLaDA MoE v2",
      "date": "2026-08-04",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2608.03457v1",
      "evidence": "首页具名说明第一作者 Fengqi Zhu 在蚂蚁集团实习期间完成该论文。人大在读和导师见课题组博士生名录；李建国同时在论文署蚂蚁并在本人主页明确列为该项目的技术负责人。",
      "advising": [
        "博士导师",
        "李崇轩本人在其中国人民大学课题组博士生名单中具名列出该同篇作者。",
        "https://zhenxuan00.github.io/#group"
      ],
      "paperId": "arxiv:2608.03457"
    },
    {
      "id": "echomask-alibaba-whu-tu",
      "company": "阿里巴巴",
      "team": "通义实验室",
      "school": "武汉大学",
      "studentSchool": "武汉大学",
      "faculty": [
        "涂志刚 · Zhigang Tu",
        "武汉大学教师，为章湘粤的硕士导师；以武汉大学署名任同篇通讯作者。",
        "https://3s.whu.edu.cn/info/1025/1451.htm"
      ],
      "employee": [
        "任健强 · Jianqiang Ren",
        "阿里巴巴通义实验室高级算法专家；论文首发预印本与正式版均列为通义实验室同篇作者。",
        "https://jianqiangren.github.io/"
      ],
      "student": [
        "章湘粤 · Xiangyue Zhang",
        "2023 年 9 月至 2026 年 6 月为武汉大学硕士生；2024 年 6 月至 2025 年 11 月在阿里巴巴通义实验室参与伴随语音的人体动作生成。",
        "https://xiangyuezhang.com/cv/"
      ],
      "title": "EchoMask: Speech-Queried Attention-based Mask Modeling for Holistic Co-Speech Motion Generation",
      "short": "EchoMask",
      "date": "2025-10",
      "venue": "ACM Multimedia",
      "area": "视觉与多模态",
      "paper": "https://doi.org/10.1145/3746027.3754847",
      "extra": [
        [
          "原始预印本及署名",
          "https://arxiv.org/html/2504.09209v1"
        ],
        [
          "作者将 EchoMask 列作通义实习产出",
          "https://jp.linkedin.com/in/xiangyue-zhang-53a29328a"
        ],
        [
          "项目完整校企署名",
          "https://xiangyuezhang.com/EchoMask/"
        ]
      ],
      "evidence": "第一作者章湘粤在通义实习经历中把 EchoMask 列为实习成果；首版于该实习期间公开，并列出其武汉大学和通义实验室署名。武汉大学硕士导师涂志刚和通义实验室高级算法专家任健强均为同篇作者。",
      "advising": [
        "校内硕士导师",
        "章湘粤的个人学业履历载明，武汉大学硕士期间由涂志刚指导。",
        "https://xiangyuezhang.com/cv/"
      ]
    },
    {
      "id": "perseus-alibaba-sjtu-xue",
      "paperId": "doi:10.1145/3617690",
      "company": "阿里巴巴",
      "team": "阿里云 · 存储产品线",
      "school": "上海交通大学",
      "studentSchool": "上海交通大学",
      "faculty": [
        "薛广涛 · Guangtao Xue",
        "上海交通大学计算机系教授、鲁瑞明的具名共同博士生导师、该篇共同通讯作者。",
        "https://www.cs.sjtu.edu.cn/jiaoshiml/xueguangtao.html"
      ],
      "employee": [
        "吴结生 · Jiesheng Wu",
        "2022 年云栖大会阿里云官方资料列为阿里巴巴研究员、阿里云智能存储产品线总经理；该篇署名阿里巴巴。",
        "https://www.alibabacloud.com/en/apsara-conference-2022/speakers?_p_lc=1"
      ],
      "student": [
        "鲁瑞明 · Ruiming Lu",
        "2020–2025 年上海交通大学计算机博士生；简历列出 2021 年 8 月至 2023 年 6 月在阿里云研究实习期间负责实际部署于阿里云的慢盘检测框架，与论文所述项目对应。",
        "https://ruiming-lu.github.io/data/cv.pdf"
      ],
      "title": "Perseus: A Fail-Slow Detection Framework for Cloud Storage Systems",
      "short": "Perseus",
      "date": "2023-02",
      "venue": "USENIX FAST",
      "area": "机器学习与系统",
      "paper": "https://www.usenix.org/system/files/fast23-lu.pdf",
      "extra": [
        [
          "正式会议题录",
          "https://www.usenix.org/conference/fast23/presentation/lu"
        ],
        [
          "期刊扩展稿（同一项目，合并计数）",
          "https://dl.acm.org/doi/10.1145/3617690"
        ],
        [
          "中国计算机学会具名任职资料",
          "https://www.ccf.org.cn/Activities/Training/ADL/ADL/2018-08-22/651514.shtml"
        ]
      ],
      "evidence": "交大同期公告具名说明鲁瑞明受薛广涛、李明禄共同指导，并确认论文由交大和阿里云联合完成。鲁瑞明履历列出实习时间与同一检测框架。论文使用主成分分析、DBSCAN 和多项式回归建模，在阿里云生产环境部署；作者栏包括三人，吴结生的同期任职由阿里云正式活动页面独立核实。期刊扩展稿并入同一条。",
      "advising": [
        "联合博士生指导",
        "上海交通大学获奖报道具名说明薛广涛、李明禄在交大共同指导鲁瑞明。",
        "https://news.sjtu.edu.cn/jdyw/20230303/179470.html"
      ]
    },
    {
      "id": "tencent-prefixflow-hkust-kai-chen",
      "company": "腾讯",
      "team": "混元团队",
      "school": "香港科技大学",
      "studentSchool": "香港科技大学",
      "faculty": [
        "Kai Chen",
        "香港科技大学计算机科学与工程学系教授、本篇共同通讯作者。",
        "https://facultyprofiles.hkust.edu.hk/profiles.php?profile=kai-chen-kaichen"
      ],
      "student": [
        "李鹏博 · Pengbo Li",
        "2024 年 9 月起在港科大读计算机博士；2026 年 3 月起在腾讯混元实习，简历明列 PrefixFlow 是该段实习的产出。",
        "https://azency.github.io/pengboli.github.io/assets/pengbo-li-cv-en.pdf"
      ],
      "employee": [
        "Ziniu Li",
        "本人从 2026 年 2 月起在腾讯混元担任研究科学家，本篇署名腾讯。",
        "https://www.liziniu.org/"
      ],
      "advising": [
        "博士导师",
        "港科大学位资格考核公告列 Kai Chen 为李鹏博的博士导师，并将 PrefixFlow 列为考核报告中的研究。",
        "https://cse.hkust.edu.hk/pg/defenses/F26/plibt-23-10-2026.html"
      ],
      "title": "PrefixFlow: Training-Time KV Caching for Schedule-Level Prefix Reuse in LLM RL Training",
      "short": "PrefixFlow",
      "date": "2026-10",
      "venue": "arXiv 预印本 / ACM SIGOPS ATC 录用",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2606.01143",
      "extra": [
        [
          "预印本首版",
          "https://arxiv.org/abs/2606.01143v1"
        ]
      ],
      "evidence": "李鹏博的同期简历明确写明，其腾讯混元实习的前缀复用工作产出了这篇第一作者论文。港科大博士资格考核公告标明 Kai Chen 为其导师。原文列李鹏博、Kai Chen 和已于 2026 年 2 月入职腾讯混元任研究科学家的 Ziniu Li 为共同作者。以调查期内公开的预印本计一条。"
    },
    {
      "id": "alibaba-storm-cuhksz-benyou-wang",
      "company": "阿里巴巴",
      "team": "通义千问（Qwen）",
      "school": "香港中文大学（深圳）",
      "studentSchool": "香港中文大学（深圳）",
      "faculty": [
        "王本友 · Benyou Wang",
        "香港中文大学（深圳）数据科学学院助理教授、博士生导师，同篇作者。",
        "https://sds.cuhk.edu.cn/en/teacher/571"
      ],
      "student": [
        "Zhengyang Tang",
        "研究期间在香港中文大学（深圳）读博，2024 年 10 月起在阿里巴巴 Qwen 团队实习；本人简历在该段实习项下标明本篇。",
        "https://tangzhy.github.io/CV_Zhengyang_Tang.pdf"
      ],
      "advising": [
        "博士导师",
        "学校公开介绍明确记载 Zhengyang Tang 为当时的在读博士、由王本友指导。",
        "https://itso.cuhk.edu.cn/en/article/523"
      ],
      "employee": [
        "刘大一恒 · Dayiheng Liu",
        "阿里巴巴 Qwen 技术团队研究人员；企业文档列其为 Qwen 团队核心报告作者，本篇以 Qwen 署名。",
        "https://www.alibabacloud.com/help/en/model-studio/qwen-vl-ocr"
      ],
      "title": "CALM Before the STORM: Unlocking Native Reasoning for Optimization Modeling",
      "short": "CALM / STORM",
      "date": "2026-07",
      "venue": "ICML",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2510.04204",
      "extra": [
        [
          "学生近期个人主页",
          "https://tangzhy.github.io/"
        ]
      ],
      "evidence": "香港中文大学（深圳）的同篇成果报道写明共同一作 Zhengyang Tang 是王本友指导的在读博士，并正在通义千问团队实习。本人同期简历在通义千问实习项下逐项列出 STORM。论文将王本友与通义千问刘大一恒列为通讯作者。"
    },
    {
      "id": "alibaba-scrit-cuhksz-benyou-wang",
      "company": "阿里巴巴",
      "team": "通义千问（Qwen）",
      "school": "香港中文大学（深圳）",
      "studentSchool": "香港中文大学（深圳）",
      "faculty": [
        "王本友 · Benyou Wang",
        "香港中文大学（深圳）数据科学学院助理教授、博士生导师，同篇作者。",
        "https://sds.cuhk.edu.cn/en/teacher/571"
      ],
      "student": [
        "Zhengyang Tang",
        "研究期间在香港中文大学（深圳）读博，2024 年 10 月起在阿里巴巴 Qwen 团队实习；本人简历在该段实习项下标明本篇。",
        "https://tangzhy.github.io/CV_Zhengyang_Tang.pdf"
      ],
      "advising": [
        "博士导师",
        "学校公开介绍明确记载 Zhengyang Tang 为当时的在读博士、由王本友指导。",
        "https://itso.cuhk.edu.cn/en/article/523"
      ],
      "employee": [
        "刘大一恒 · Dayiheng Liu",
        "阿里巴巴 Qwen 技术团队研究人员；企业文档列其为 Qwen 团队核心报告作者，本篇以 Qwen 署名。",
        "https://www.alibabacloud.com/help/en/model-studio/qwen-vl-ocr"
      ],
      "title": "Self-Evolving Critique Abilities in Large Language Models",
      "short": "SCRIT",
      "date": "2025-10",
      "venue": "COLM",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2501.05727",
      "extra": [
        [
          "学生近期个人主页",
          "https://tangzhy.github.io/"
        ],
        [
          "COLM 最终版",
          "https://openreview.net/pdf/67171a4d26bdcd50f955d395efa0276253dc1056.pdf"
        ]
      ],
      "evidence": "Zhengyang Tang 的同期简历将 SCRIT 明确列为在阿里巴巴 Qwen 团队实习时共同开发的框架。香港中文大学（深圳）的公告确认当时博士学籍与王本友的指导；COLM 版同列王本友与阿里巴巴 Qwen 员工刘大一恒。"
    },
    {
      "id": "alibaba-cort-cuhksz-benyou-wang",
      "company": "阿里巴巴",
      "team": "通义千问（Qwen）",
      "school": "香港中文大学（深圳）",
      "studentSchool": "香港中文大学（深圳）",
      "faculty": [
        "王本友 · Benyou Wang",
        "香港中文大学（深圳）数据科学学院助理教授、博士生导师，同篇作者。",
        "https://sds.cuhk.edu.cn/en/teacher/571"
      ],
      "student": [
        "Zhengyang Tang",
        "研究期间在香港中文大学（深圳）读博，2024 年 10 月起在阿里巴巴 Qwen 团队实习；本人简历在该段实习项下标明本篇。",
        "https://tangzhy.github.io/CV_Zhengyang_Tang.pdf"
      ],
      "advising": [
        "博士导师",
        "学校公开介绍明确记载 Zhengyang Tang 为当时的在读博士、由王本友指导。",
        "https://itso.cuhk.edu.cn/en/article/523"
      ],
      "employee": [
        "刘大一恒 · Dayiheng Liu",
        "阿里巴巴 Qwen 技术团队研究人员；企业文档列其为 Qwen 团队核心报告作者，本篇以 Qwen 署名。",
        "https://www.alibabacloud.com/help/en/model-studio/qwen-vl-ocr"
      ],
      "title": "CoRT: Code-integrated Reasoning within Thinking",
      "short": "CoRT",
      "date": "2025-12",
      "venue": "NeurIPS",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2506.09820",
      "extra": [
        [
          "学生近期个人主页",
          "https://tangzhy.github.io/"
        ]
      ],
      "evidence": "Zhengyang Tang 的同期简历写明，在阿里巴巴 Qwen 团队实习的智能体强化学习项目产出 CoRT；学校公告确认在读和王本友的指导。论文标明他为共同一作、王本友为共同作者，以及阿里巴巴 Qwen 的刘大一恒为通讯作者。"
    },
    {
      "id": "tencent-upft-cuhksz-benyou-wang",
      "company": "腾讯",
      "team": "腾讯 AI Lab",
      "school": "香港中文大学（深圳）",
      "studentSchool": "香港中文大学（深圳）",
      "faculty": [
        "王本友 · Benyou Wang",
        "香港中文大学（深圳）数据科学学院助理教授、博士生导师，本篇共同通讯作者。",
        "https://sds.cuhk.edu.cn/en/teacher/571"
      ],
      "student": [
        "冀轲 · Ke Ji",
        "2024 年 9 月起在香港中文大学（深圳）攻读博士，2024 年 10 月至 2025 年 5 月在腾讯 AI Lab 做科研实习。",
        "https://1ke-ji.github.io/"
      ],
      "advising": [
        "博士导师",
        "学生主页列王本友为博士导师；王本友亦在自己学生名单列冀轲为 2024 年秋入学博士生。",
        "https://wabyking.github.io/old"
      ],
      "employee": [
        "涂兆鹏 · Zhaopeng Tu",
        "腾讯研究负责人，本篇以腾讯 AI Lab 署名并注明为通讯作者。",
        "https://tuzhaopeng.github.io/"
      ],
      "title": "The First Few Tokens Are All You Need: An Efficient and Effective Unsupervised Prefix Fine-Tuning Method for Reasoning Models",
      "short": "UPFT",
      "date": "2025-12",
      "venue": "NeurIPS",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2503.02875",
      "extra": [
        [
          "NeurIPS 正式论文",
          "https://openreview.net/pdf/b261818533917595d3cba6ac4e58c4a6d02409ce.pdf"
        ]
      ],
      "evidence": "论文首页的脚注明确写明冀轲在腾讯 AI Lab 实习期间完成本研究。校方博士导师王本友和腾讯员工涂兆鹏是本篇共同通讯作者。"
    },
    {
      "id": "bytedance-knapsack-rl-cuhksz-zhiquan-luo",
      "company": "字节跳动",
      "team": "Seed-Edge",
      "school": "香港中文大学（深圳）",
      "studentSchool": "香港中文大学（深圳）",
      "faculty": [
        "罗智泉 · Zhi-Quan Luo",
        "香港中文大学（深圳）数据科学学院校长讲座教授，本篇共同作者。",
        "https://sds.cuhk.edu.cn/en/teacher/214"
      ],
      "student": [
        "李子牛 · Ziniu Li",
        "研究期间在香港中文大学（深圳）攻读数据科学博士，2025 年 5 月进入字节跳动 Seed-Edge 实习；本人发布本篇时将其列为字节跳动研究。",
        "https://x.com/ZiniuLi/status/1973626847511585267"
      ],
      "advising": [
        "博士导师",
        "该生当时的简历写明学校博士学籍和导师 Zhi-Quan Luo，并注明由字节跳动 Ge Zhang 指导实习期间的强化学习课题。",
        "https://www.liziniu.org/docs/CV_Ziniu_Li.pdf"
      ],
      "employee": [
        "Ge Zhang",
        "字节跳动 Seed 研究人员、该生企业导师、本篇通讯作者；企业项目报告列 Ge Zhang 为研究成员。",
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/hyvsmeh7uhobf/sdiff_updated.pdf"
      ],
      "title": "Knapsack RL: Compute-Efficient Reinforcement Learning via Heterogeneous Rollout Allocation",
      "short": "Knapsack RL",
      "date": "2026-07",
      "venue": "ICML",
      "area": "语言模型与智能体",
      "paper": "https://proceedings.mlr.press/v306/li26v.html",
      "extra": [
        [
          "研究时期预印本",
          "https://arxiv.org/html/2509.25849"
        ],
        [
          "学生履历：字节 Seed-Edge 实习日期",
          "https://www.liziniu.org/"
        ]
      ],
      "evidence": "第一作者李子牛在 2025 年发布本篇时称为在字节跳动 Seed 完成的研究，个人同期简历记载其在 2025 年 5 月起由 Ge Zhang 指导在字节跳动实习并开展在线强化学习论文。原文同列其校方博士导师罗智泉以及字节跳动 Seed 的通讯作者 Ge Zhang。"
    },
    {
      "id": "ant-align-ti-ucas-xiang",
      "company": "蚂蚁集团",
      "team": "蚂蚁数科",
      "school": "中国科学院大学",
      "studentSchool": "中国科学院大学",
      "faculty": [
        "向世明 · Shiming Xiang",
        "中国科学院自动化研究所研究员，中国科学院大学人工智能学院岗位教授及博士生导师。",
        "https://ia.cas.cn/rcdw/yjy/202404/t20240425_7131981.html"
      ],
      "employee": [
        "李哲 · Zhe Li",
        "2025 年中国生物特征识别大会的具名报告嘉宾履历列为蚂蚁数科 AI 科技创新技术部负责人、蚂蚁天玑实验室主任。IJCAI 2025 工作坊和论文亦将他列为蚂蚁数科。",
        "https://ccbr99.cn/2025/keynotes.html"
      ],
      "student": [
        "陈林 · Lin Chen",
        "2024 年 9 月起在中国科学院自动化研究所攻读博士，列明向世明为导师；2024 年 12 月至 2025 年 11 月在蚂蚁集团实习，2025 年 12 月起在腾讯混元团队实习。",
        "https://clqwq.press/"
      ],
      "title": "Beyond Next-Token Alignment: Distilling Multimodal Large Language Models via Token Interactions",
      "short": "Align-TI",
      "date": "2026-07",
      "venue": "ICML",
      "area": "多模态与视觉",
      "paper": "https://proceedings.mlr.press/v306/chen26gr.html",
      "evidence": "论文脚注明确指这项工作在陈林于蚂蚁数科实习期间完成；正式版列陈林、李哲、向世明为同篇作者。",
      "advising": [
        "博士生导师",
        "陈林的个人主页明确列出向世明指导其博士学业。",
        "https://clqwq.press/"
      ],
      "extra": [
        [
          "含实习说明的论文全文",
          "https://arxiv.org/html/2602.09483"
        ],
        [
          "IJCAI 2025 具名组织者",
          "https://deepfake-workshop-ijcai2025.github.io/main/organizers.html"
        ]
      ],
      "paperId": "arxiv:2602.09483"
    },
    {
      "id": "tencent-dipe-ucas-xiang",
      "company": "腾讯",
      "team": "混元",
      "school": "中国科学院大学",
      "studentSchool": "中国科学院大学",
      "faculty": [
        "向世明 · Shiming Xiang",
        "中国科学院自动化研究所研究员，中国科学院大学人工智能学院岗位教授及博士生导师。",
        "https://ia.cas.cn/rcdw/yjy/202404/t20240425_7131981.html"
      ],
      "employee": [
        "彭厚文 · Houwen Peng",
        "本人履历说明曾负责腾讯混元多模态团队；2026 年 3 月论文署腾讯混元。同年发布的 ICLR 学术报告亦列其为腾讯混元项目负责人。",
        "https://houwenpeng.com/index.html"
      ],
      "student": [
        "陈林 · Lin Chen",
        "2024 年 9 月起在中国科学院自动化研究所攻读博士，列明向世明为导师；2024 年 12 月至 2025 年 11 月在蚂蚁集团实习，2025 年 12 月起在腾讯混元团队实习。",
        "https://clqwq.press/"
      ],
      "title": "Beyond Sequential Distance: Inter-Modal Distance Invariant Position Encoding",
      "short": "DIPE",
      "date": "2026-09",
      "venue": "ECCV",
      "area": "多模态与视觉",
      "paper": "https://doi.org/10.1007/978-3-032-37627-5_30",
      "evidence": "论文首版首页明确标记第一作者陈林在腾讯混元团队实习期间开展工作；彭厚文与向世明均具名合著。",
      "advising": [
        "博士生导师",
        "陈林的个人主页明确列出向世明指导其博士学业。",
        "https://clqwq.press/"
      ],
      "extra": [
        [
          "含实习说明的论文全文",
          "https://arxiv.org/html/2603.10863"
        ],
        [
          "ICLR 2026 具名项目团队",
          "https://iclr.cc/media/iclr-2026/Slides/10010295.pdf"
        ]
      ],
      "paperId": "arxiv:2603.10863"
    },
    {
      "id": "tencent-encoder-free-scaling-ucas-xiang",
      "company": "腾讯",
      "team": "基础模型部",
      "school": "中国科学院大学",
      "studentSchool": "中国科学院大学",
      "faculty": [
        "向世明 · Shiming Xiang",
        "中国科学院自动化研究所研究员，中国科学院大学人工智能学院岗位教授及博士生导师。",
        "https://ia.cas.cn/rcdw/yjy/202404/t20240425_7131981.html"
      ],
      "employee": [
        "Lan Jiang",
        "个人学术主页明确列出自 2024 年 11 月起担任腾讯混元预训练团队研究员。",
        "https://jiangllan.github.io/"
      ],
      "student": [
        "陈林 · Lin Chen",
        "2024 年 9 月起在中国科学院自动化研究所攻读博士，列明向世明为导师；2024 年 12 月至 2025 年 11 月在蚂蚁集团实习，2025 年 12 月起在腾讯混元团队实习。",
        "https://clqwq.press/"
      ],
      "title": "How Far Are We from Removing the Visual Encoder? Scaling Laws for Encoder-Free Multimodal Pretraining",
      "short": "无视觉编码器多模态预训练",
      "date": "2026-09-28",
      "venue": "arXiv 预印本",
      "area": "多模态与视觉",
      "paper": "https://arxiv.org/html/2609.35457",
      "evidence": "论文首页脚注明确指陈林在腾讯实习完成本文工作；同篇署名含腾讯研究员 Lan Jiang 和博士生导师向世明。",
      "advising": [
        "博士生导师",
        "陈林的个人主页明确列出向世明指导其博士学业。",
        "https://clqwq.press/"
      ],
      "paperId": "arxiv:2609.35457"
    },
    {
      "id": "ravel-zhipu-tsinghua-huang",
      "paperId": "arxiv:2603.00686",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "清华大学计算机科学与技术系教师、博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm"
      ],
      "employee": [
        "王存祥 · Cunxiang Wang",
        "西湖大学 NLP 课题组校友资料具名列为智谱 AI 评测负责人；智谱 2025 年 GLM-4.5 技术报告列为核心研发成员；该篇署名智谱 AI。",
        "https://westlakenlp.com/team.html"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "RAVEL: Reasoning Agents for Validating and Evaluating LLM Text Synthesis",
      "short": "RAVEL",
      "date": "2026-02",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2603.00686",
      "extra": [
        [
          "论文题录",
          "https://arxiv.org/abs/2603.00686"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "ravel-zhipu-tsinghua-wang",
      "paperId": "arxiv:2603.00686",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "王宏宁 · Hongning Wang",
        "2023 年 9 月起任清华大学计算机系长聘副教授、冯卓尔的共同博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1122/5712.htm"
      ],
      "employee": [
        "王存祥 · Cunxiang Wang",
        "西湖大学 NLP 课题组校友资料具名列为智谱 AI 评测负责人；智谱 2025 年 GLM-4.5 技术报告列为核心研发成员；该篇署名智谱 AI。",
        "https://westlakenlp.com/team.html"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "RAVEL: Reasoning Agents for Validating and Evaluating LLM Text Synthesis",
      "short": "RAVEL",
      "date": "2026-02",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2603.00686",
      "extra": [
        [
          "论文题录",
          "https://arxiv.org/abs/2603.00686"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "rlar-zhipu-tsinghua-huang",
      "paperId": "arxiv:2603.00724",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "清华大学计算机科学与技术系教师、博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm"
      ],
      "employee": [
        "王存祥 · Cunxiang Wang",
        "西湖大学 NLP 课题组校友资料具名列为智谱 AI 评测负责人；智谱 2025 年 GLM-4.5 技术报告列为核心研发成员；该篇署名智谱 AI。",
        "https://westlakenlp.com/team.html"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "RLAR: An Agentic Reward System for Multi-task Reinforcement Learning on Large Language Models",
      "short": "RLAR",
      "date": "2026-02",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2603.00724",
      "extra": [
        [
          "论文题录",
          "https://arxiv.org/abs/2603.00724"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "rlar-zhipu-tsinghua-wang",
      "paperId": "arxiv:2603.00724",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "王宏宁 · Hongning Wang",
        "2023 年 9 月起任清华大学计算机系长聘副教授、冯卓尔的共同博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1122/5712.htm"
      ],
      "employee": [
        "王存祥 · Cunxiang Wang",
        "西湖大学 NLP 课题组校友资料具名列为智谱 AI 评测负责人；智谱 2025 年 GLM-4.5 技术报告列为核心研发成员；该篇署名智谱 AI。",
        "https://westlakenlp.com/team.html"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "RLAR: An Agentic Reward System for Multi-task Reinforcement Learning on Large Language Models",
      "short": "RLAR",
      "date": "2026-02",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2603.00724",
      "extra": [
        [
          "论文题录",
          "https://arxiv.org/abs/2603.00724"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "howtobench-zhipu-tsinghua-huang",
      "paperId": "arxiv:2604.19071",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "清华大学计算机科学与技术系教师、博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源 2024 年研讨会的讲者资料具名列为智谱 AI GLM 技术团队研究员；该篇署名智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "HoWToBench: Holistic Evaluation for LLM’s Capability in Human-level Writing using Tree of Writing",
      "short": "HoWToBench",
      "date": "2026-07",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2026.acl-long.317.pdf",
      "extra": [
        [
          "论文题录",
          "https://aclanthology.org/2026.acl-long.317/"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "howtobench-zhipu-tsinghua-wang",
      "paperId": "arxiv:2604.19071",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "王宏宁 · Hongning Wang",
        "2023 年 9 月起任清华大学计算机系长聘副教授、冯卓尔的共同博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1122/5712.htm"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源 2024 年研讨会的讲者资料具名列为智谱 AI GLM 技术团队研究员；该篇署名智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "HoWToBench: Holistic Evaluation for LLM’s Capability in Human-level Writing using Tree of Writing",
      "short": "HoWToBench",
      "date": "2026-07",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2026.acl-long.317.pdf",
      "extra": [
        [
          "论文题录",
          "https://aclanthology.org/2026.acl-long.317/"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "alignbench-zhipu-tsinghua-huang",
      "paperId": "arxiv:2311.18743",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "清华大学计算机科学与技术系教师、博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm"
      ],
      "employee": [
        "顾晓韬 · Xiaotao Gu",
        "智源 2024 年研讨会的讲者资料具名列为智谱 AI GLM 技术团队研究员；该篇署名智谱 AI。",
        "https://hub.baai.ac.cn/view/37590"
      ],
      "student": [
        "冯卓尔 · Andrew Zhuoer Feng",
        "2022 年 9 月入读清华大学计算机博士，2023 年 8 月起在智谱评测团队全职研究实习。本篇脚注点名说明该研究在其实习期间开展。",
        "https://zhuoerfeng.github.io/"
      ],
      "title": "AlignBench: Benchmarking Chinese Alignment of Large Language Models",
      "short": "AlignBench",
      "date": "2024-08",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2024.acl-long.624.pdf",
      "extra": [
        [
          "论文题录",
          "https://aclanthology.org/2024.acl-long.624/"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "清华大学博士生冯卓尔在个人主页明确列黄民烈为导师、王宏宁为共同导师。",
        "https://zhuoerfeng.github.io/"
      ]
    },
    {
      "id": "critique-refinement-zhipu-tsinghua-huang",
      "paperId": "arxiv:2506.22157",
      "company": "智谱（GLM / Z.ai）",
      "team": "GLM 技术团队",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "faculty": [
        "黄民烈 · Minlie Huang",
        "清华大学计算机科学与技术系教师、博士生导师，同篇署名。",
        "https://www.cs.tsinghua.edu.cn/info/1121/5620.htm"
      ],
      "employee": [
        "王存祥 · Cunxiang Wang",
        "西湖大学 NLP 课题组校友资料具名列为智谱 AI 评测负责人；智谱 2025 年 GLM-4.5 技术报告列为核心研发成员；该篇署名智谱 AI。",
        "https://westlakenlp.com/team.html"
      ],
      "student": [
        "程家乐 · Jiale Cheng",
        "清华大学在读博士。正式论文具名说明，程家乐在智谱 AI 实习期间参与完成这项工作。",
        "https://cips-cl.org/?p=89141"
      ],
      "title": "Training Language Model to Critique for Better Refinement",
      "short": "RCO",
      "date": "2025-07",
      "venue": "Findings of ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2025.findings-acl.1373.pdf",
      "extra": [
        [
          "论文题录",
          "https://aclanthology.org/2025.findings-acl.1373/"
        ],
        [
          "智谱同期技术报告（研发成员）",
          "https://arxiv.org/html/2508.06471#S6"
        ]
      ],
      "evidence": "同篇论文作者和脚注核实导师、清华在读学生及智谱实习项目，独立具名公开资料核对该学生的导师与企业作者当时的身份。",
      "advising": [
        "校内博士生指导",
        "计算语言学专业委员会报告人资料明确说明程家乐师从黄民烈。",
        "https://cips-cl.org/?p=89141"
      ]
    },
    {
      "id": "alibaba-i4vgen-beihang-di-huang",
      "company": "阿里巴巴",
      "team": "通义实验室",
      "school": "北京航空航天大学",
      "studentSchool": "北京航空航天大学",
      "faculty": [
        "黄迪 · Di Huang",
        "北京航空航天大学计算机学院教授，本篇作者。",
        "https://scse.buaa.edu.cn/info/1131/3219.htm"
      ],
      "student": [
        "郭谢帆 · Xiefan Guo",
        "北京航空航天大学博士生；本篇在其姓名旁标明阿里巴巴实习。",
        "https://xiefan-guo.github.io/index.html"
      ],
      "advising": [
        "博士导师",
        "郭谢帆本人主页明确列黄迪为北航计算机博士阶段导师。",
        "https://xiefan-guo.github.io/index.html"
      ],
      "employee": [
        "薄列峰 · Liefeng Bo",
        "2023 年行业会议资料记载其为阿里巴巴 XR 实验室负责人；2024 年版本署名阿里巴巴。",
        "https://www.icaigc.org/2023.html"
      ],
      "title": "I4VGen: Image as Free Stepping Stone for Text-to-Video Generation",
      "short": "I4VGen",
      "date": "2024-06",
      "venue": "arXiv 预印本",
      "area": "多模态与视觉生成",
      "paper": "https://arxiv.org/html/2406.02230",
      "extra": [
        [
          "原作者项目页",
          "https://xiefan-guo.github.io/i4vgen/"
        ]
      ],
      "evidence": "预印本在第一作者郭谢帆名字旁直接注明阿里巴巴实习，其本人项目页将这项成果列为阿里巴巴智能计算研究工作；本人主页核实北航博士学籍与导师黄迪。具名导师黄迪和阿里巴巴实验室负责人薄列峰都是同篇作者。"
    },
    {
      "id": "tencent-laser-ruc-lin",
      "company": "腾讯",
      "team": "混元大模型部",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "林衍凯 · Yankai Lin",
        "中国人民大学高瓴人工智能学院副教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/lyk/index.htm"
      ],
      "employee": [
        "谢若冰 · Ruobing Xie",
        "本人主页列出 2017 年 7 月起任腾讯研究员，任职于混元团队；同篇署腾讯大模型部。",
        "https://ruobingxie.github.io/"
      ],
      "student": [
        "Wenkai Yang",
        "本人主页列出 2023 年 9 月起在人大高瓴人工智能学院读博；2025 年 7 月至 2026 年 3 月在腾讯混元研究实习。",
        "https://keven980716.github.io/"
      ],
      "title": "LaSeR: Reinforcement Learning with Last-Token Self-Rewarding",
      "short": "LaSeR",
      "date": "2026-04",
      "venue": "ICLR",
      "area": "语言模型与智能体",
      "paper": "https://openreview.net/pdf?id=1OhgEmix20",
      "evidence": "ICLR 正式论文首页将第一作者 Wenkai Yang 的工作标为腾讯实习完成；同篇作者谢若冰署腾讯大模型部，林衍凯任通讯作者。",
      "advising": [
        "博士生导师",
        "Wenkai Yang 的本人主页明确列出林衍凯指导其人大博士学业。",
        "https://keven980716.github.io/"
      ],
      "extra": [
        [
          "正式论文集",
          "https://proceedings.iclr.cc/paper_files/paper/2026/hash/e711dbcd6fb91da02c6d0599ec633c80-Abstract-Conference.html"
        ],
        [
          "公开预印本",
          "https://arxiv.org/html/2510.14943"
        ]
      ],
      "paperId": "arxiv:2510.14943"
    },
    {
      "id": "kuaishou-omnisimulator-ucas-han",
      "company": "快手",
      "team": "基座模型与应用团队",
      "school": "中国科学院大学",
      "studentSchool": "中国科学院大学",
      "faculty": [
        "韩先培 · Xianpei Han",
        "中国科学院软件研究所研究员、中国科学院大学博士生导师。",
        "https://people.ucas.ac.cn/~xphan"
      ],
      "employee": [
        "李晗 · Han Li",
        "2026 年 6 月北京市教委发布的快手学术活动列其为快手基础大模型与应用部、推荐模型部负责人；论文亦署快手。",
        "https://jw.beijing.gov.cn/gjc/tzgg_15688/202606/t20260615_4700536.html"
      ],
      "student": [
        "Jiawei Chen",
        "中国科学院大学软件工程硕士在读；2025 年 9 月起在快手基座模型与应用团队研究实习，导师为 Xiangyu Wu，负责用户行为模拟。",
        "https://chenjiawei30.github.io/"
      ],
      "title": "OmniSimulator: Aligning Small Language Models for Authentic Heterogeneous Behavior Modeling",
      "short": "OmniSimulator",
      "date": "2026-10",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2610.29472",
      "evidence": "Jiawei Chen 在本人主页将 OmniSimulator 单独标为快手项目、说明自己是项目第一作者；论文署国科大 Jiawei Chen、中国科学院软件所韩先培，以及快手的李晗与企业导师 Xiangyu Wu。",
      "advising": [
        "校内共同导师",
        "Jiawei Chen 在本人主页明确称由韩先培和 Yaojie Lu 共同指导其国科大硕士学业。",
        "https://chenjiawei30.github.io/"
      ],
      "extra": [
        [
          "作者项目仓库",
          "https://github.com/icip-cas/OmniSimulator"
        ]
      ],
      "paperId": "arxiv:2610.29472"
    },
    {
      "id": "kuaishou-dpwriter-ruc-song",
      "company": "快手",
      "team": "基座大模型团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "宋睿华 · Ruihua Song",
        "2020 年 9 月起任中国人民大学高瓴人工智能学院长聘副教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/srh/index.htm"
      ],
      "employee": [
        "刘亚辉 · Yahui Liu",
        "个人主页列出在快手任研究员，代表作列 DPWriter；论文署快手。",
        "https://yhlleo.github.io/"
      ],
      "student": [
        "曹乾 · Qian Cao",
        "中国人民大学高瓴人工智能学院博士生；本人列出 2025 年 6 月至 2026 年 1 月在快手基座大模型团队研究实习。",
        "https://aman-4-real.github.io/"
      ],
      "title": "DPWriter: Reinforcement Learning with Diverse Planning Branching for Creative Writing",
      "short": "DPWriter",
      "date": "2026-07",
      "venue": "ACL",
      "area": "语言模型与智能体",
      "paper": "https://aclanthology.org/2026.acl-long.647.pdf",
      "evidence": "ACL 正式论文首页明确标注曹乾在快手科技实习期间完成工作。曹乾、在快手担任研究员的刘亚辉、曹乾的博士导师宋睿华均具名署名。",
      "advising": [
        "博士生导师",
        "曹乾本人主页明确列出宋睿华指导其中国人民大学博士学业。",
        "https://aman-4-real.github.io/"
      ],
      "extra": [
        [
          "ACL 论文首页",
          "https://aclanthology.org/2026.acl-long.647/"
        ],
        [
          "中国人民大学论文录用公告",
          "https://news.ruc.edu.cn/2046132078609838081.html"
        ]
      ],
      "paperId": "arxiv:2601.09609"
    },
    {
      "id": "agentrl-zhipu-tsinghua-dong",
      "paperId": "arxiv:2510.04206",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "company": "智谱（GLM / Z.ai）",
      "team": "AutoGLM",
      "faculty": [
        "东昱晓 · Yuxiao Dong",
        "研究期间任清华大学计算机系教师，同篇作者。其清华主页具名列出研究当时指导的博士生。",
        "https://www.cs.tsinghua.edu.cn/info/1112/5837.htm"
      ],
      "employee": [
        "刘潇 · Xiao Liu",
        "QCon 北京 2025 主办方资料明确列为智谱研究员及 AutoGLM 部门负责人；此篇论文署名智谱。",
        "https://qcon.infoq.cn/2025/beijing/speaker/9381"
      ],
      "student": [
        "Bowen Lv",
        "清华在读博士、东昱晓自 2025 年指导。论文首页明确脚注说明该生在智谱实习期间做此研究；本人公开履历将 AgentRL 列为 2025 年 2 月起智谱实习所建的核心训练框架。",
        "https://extreme1228.github.io/extreme1228/"
      ],
      "title": "AgentRL: Scaling Agentic Reinforcement Learning with a Multi-Turn, Multi-Task Framework",
      "short": "AgentRL",
      "date": "2025-10",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2510.04206",
      "extra": [
        [
          "论文另一公开版本",
          "https://arxiv.org/abs/2510.04206"
        ],
        [
          "AutoGLM 作者项目页",
          "https://xiao9905.github.io/AutoGLM/"
        ]
      ],
      "evidence": "论文首页具名标注清华学生 Bowen Lv 在智谱实习期间完成此项研究，他的个人履历独立列出该篇项目；同篇作者刘潇的职务由 2025 年大会页面核实。",
      "advising": [
        "清华博士生导师",
        "东昱晓的清华院系主页将 Bowen Lv 列为 2025 年入学的本人博士生。",
        "https://keg.cs.tsinghua.edu.cn/yuxiao/"
      ]
    },
    {
      "id": "mobilerl-zhipu-tsinghua-dong",
      "paperId": "arxiv:2509.18119",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "company": "智谱（GLM / Z.ai）",
      "team": "AutoGLM",
      "faculty": [
        "东昱晓 · Yuxiao Dong",
        "研究期间任清华大学计算机系教师，同篇作者。其清华主页具名列出研究当时指导的博士生。",
        "https://www.cs.tsinghua.edu.cn/info/1112/5837.htm"
      ],
      "employee": [
        "刘潇 · Xiao Liu",
        "QCon 北京 2025 主办方资料明确列为智谱研究员及 AutoGLM 部门负责人；此篇论文署名智谱。",
        "https://qcon.infoq.cn/2025/beijing/speaker/9381"
      ],
      "student": [
        "Yifan Xu",
        "东昱晓自 2023 年指导的清华在读博士。正式论文将其列为共同第一作者，并注明部分工作在其智谱实习期间完成。",
        "https://keg.cs.tsinghua.edu.cn/yuxiao/"
      ],
      "title": "MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents",
      "short": "MobileRL",
      "date": "2026-04",
      "venue": "ICLR",
      "area": "语言模型与智能体",
      "paper": "https://openreview.net/pdf?id=C3F0G9nXhl",
      "extra": [
        [
          "论文另一公开版本",
          "https://arxiv.org/pdf/2509.18119"
        ],
        [
          "AutoGLM 作者项目页",
          "https://xiao9905.github.io/AutoGLM/"
        ]
      ],
      "evidence": "正式论文首页标明 Yifan Xu 为第一作者，脚注注明在智谱实习时完成部分工作；东昱晓为清华署名通讯作者，刘潇署智谱且任职已独立核实。",
      "advising": [
        "清华博士生导师",
        "东昱晓的清华主页列为 2023 年入学的本人博士生。",
        "https://keg.cs.tsinghua.edu.cn/yuxiao/"
      ]
    },
    {
      "id": "autoglm-zhipu-tsinghua-dong",
      "paperId": "arxiv:2411.00820",
      "school": "清华大学",
      "studentSchool": "清华大学",
      "company": "智谱（GLM / Z.ai）",
      "team": "AutoGLM",
      "faculty": [
        "东昱晓 · Yuxiao Dong",
        "研究期间任清华大学计算机系教师，同篇作者。其清华主页具名列出研究当时指导的博士生。",
        "https://www.cs.tsinghua.edu.cn/info/1112/5837.htm"
      ],
      "employee": [
        "刘潇 · Xiao Liu",
        "2024 年 11 月对该项目的介绍与 2025 年大会资料均确认其智谱 AutoGLM 技术负责人身份；该篇第一作者。",
        "https://qcon.infoq.cn/2025/beijing/speaker/9381"
      ],
      "student": [
        "Yifan Xu",
        "东昱晓自 2023 年指导的清华在读博士。第一作者主持的同篇项目页将其实名标为智谱实习期间参与本项目的作者。",
        "https://keg.cs.tsinghua.edu.cn/yuxiao/"
      ],
      "title": "AutoGLM: Autonomous Foundation Agents for GUIs",
      "short": "AutoGLM",
      "date": "2024-10",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/pdf/2411.00820",
      "extra": [
        [
          "论文另一公开版本",
          "https://arxiv.org/abs/2411.00820"
        ],
        [
          "AutoGLM 作者项目页",
          "https://xiao9905.github.io/AutoGLM/"
        ],
        [
          "2024 年 11 月公开访谈：时任智谱 AutoGLM 技术负责人",
          "https://m.yicai.com/news/102379767.html"
        ]
      ],
      "evidence": "作者项目页面具名标记 Yifan Xu 的同一论文实习和清华学籍，清华主页列出导师关系；刘潇是论文第一作者，同时期公开介绍明确称其智谱 AutoGLM 技术负责人。",
      "advising": [
        "清华博士生导师",
        "东昱晓的清华主页列为 2023 年入学的本人博士生。",
        "https://keg.cs.tsinghua.edu.cn/yuxiao/"
      ]
    },
    {
      "id": "vstyle-alibaba-fudan-qiu",
      "paperId": "arxiv:2509.09716",
      "company": "阿里巴巴",
      "team": "未来生活实验室（Future Living Lab）",
      "school": "复旦大学",
      "studentSchool": "复旦大学",
      "faculty": [
        "邱锡鹏 · Xipeng Qiu",
        "复旦大学教授、詹俊的硕博导师及同篇通讯作者。",
        "https://cs.fudan.edu.cn/c5/46/c30604a443718/page.htm"
      ],
      "employee": [
        "郑波 · Bo Zheng",
        "ACM 图灵大会嘉宾页列为 2017 年加入阿里巴巴的负责人；同篇署名阿里巴巴。",
        "https://www.acmturc.com/2023/en/mobile/SIGAI_China.html"
      ],
      "student": [
        "詹俊 · Jun Zhan",
        "复旦大学博士在读。个人履历列 2025 年 5 至 8 月在阿里巴巴未来生活实验室实习，并具名注明该时段由其构建 VStyle；论文列其为共同第一作者。",
        "https://junzhan2000.github.io/files/junzhan-resume-en.pdf"
      ],
      "title": "VStyle: A Benchmark for Voice Style Adaptation with Spoken Instructions",
      "short": "VStyle",
      "date": "2025-09",
      "venue": "arXiv 预印本",
      "area": "语音与音频",
      "paper": "https://arxiv.org/pdf/2509.09716",
      "extra": [
        [
          "论文题录",
          "https://arxiv.org/abs/2509.09716"
        ],
        [
          "作者项目页",
          "https://junzhan2000.github.io/VStyle.github.io/"
        ],
        [
          "阿里巴巴未来生活实验室同期论文署名",
          "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_AdaSpark_Adaptive_Sparsity_for_Efficient_Long-Video_Understanding_CVPR_2026_paper.pdf"
        ]
      ],
      "evidence": "詹俊的履历同时明确列出复旦在读、实际导师、同期在阿里巴巴实习及该论文成果。论文实名列三人，郑波以阿里巴巴署名发表，ACM 大会已给出独立任职证明。",
      "advising": [
        "校内硕士和博士导师",
        "詹俊履历在两个学位阶段均具名列邱锡鹏为自己的导师。",
        "https://junzhan2000.github.io/files/junzhan-resume-en.pdf"
      ]
    },
    {
      "id": "alibaba-playerone-hku-hengshuang-zhao",
      "company": "阿里巴巴",
      "team": "达摩院",
      "school": "香港大学",
      "studentSchool": "香港大学",
      "faculty": [
        "赵恒爽 · Hengshuang Zhao",
        "香港大学计算与数据科学学院助理教授，本篇通讯作者。",
        "https://www.ai.hku.hk/index.php/people/academic-staff/hszhao"
      ],
      "student": [
        "Yuanpeng Tu",
        "2023 年 9 月起在港大攻读博士，2024 年 3 月至 2025 年 6 月在阿里巴巴达摩院视觉团队科研实习。",
        "https://yuanpengtu.github.io/"
      ],
      "advising": [
        "博士导师",
        "学生本人主页公开确认由港大助理教授 Hengshuang Zhao 指导博士研究。",
        "https://yuanpengtu.github.io/"
      ],
      "employee": [
        "Hao Luo",
        "2024 年专业期刊作者介绍明确记载其任职阿里巴巴达摩院；本篇署名同单位。",
        "https://ieeexplore.ieee.org/abstract/document/10559458/authors"
      ],
      "title": "PlayerOne: Egocentric World Simulator",
      "short": "PlayerOne",
      "date": "2025-12",
      "venue": "NeurIPS",
      "area": "多模态与视觉生成",
      "paper": "https://arxiv.org/html/2506.09995",
      "extra": [
        [
          "NeurIPS 论文",
          "https://openreview.net/pdf/8576828492200a77b6a51d1791f2e5e21da22d2c.pdf"
        ]
      ],
      "evidence": "NeurIPS 论文在第一作者 Yuanpeng Tu 处注明论文工作在阿里巴巴达摩院实习期间完成，致谢也确认为达摩院实习项目。其个人主页证实当时学籍及博士导师赵恒爽，论文同列赵恒爽和阿里巴巴员工 Hao Luo。"
    },
    {
      "id": "alibaba-videoanydoor-hku-hengshuang-zhao",
      "company": "阿里巴巴",
      "team": "达摩院",
      "school": "香港大学",
      "studentSchool": "香港大学",
      "faculty": [
        "赵恒爽 · Hengshuang Zhao",
        "香港大学计算与数据科学学院助理教授，本篇通讯作者。",
        "https://www.ai.hku.hk/index.php/people/academic-staff/hszhao"
      ],
      "student": [
        "Yuanpeng Tu",
        "2023 年 9 月起在港大攻读博士，2024 年 3 月至 2025 年 6 月在阿里巴巴达摩院视觉团队科研实习。",
        "https://yuanpengtu.github.io/"
      ],
      "advising": [
        "博士导师",
        "学生本人主页公开确认由港大助理教授 Hengshuang Zhao 指导博士研究。",
        "https://yuanpengtu.github.io/"
      ],
      "employee": [
        "Hao Luo",
        "2024 年专业期刊作者介绍明确记载其任职阿里巴巴达摩院；本篇署名同单位。",
        "https://ieeexplore.ieee.org/abstract/document/10559458/authors"
      ],
      "title": "VideoAnydoor: High-fidelity Video Object Insertion with Precise Motion Control",
      "short": "VideoAnydoor",
      "date": "2025-08",
      "venue": "SIGGRAPH",
      "area": "多模态与视觉生成",
      "paper": "https://hub.hku.hk/bitstream/10722/370044/1/content.pdf?accept=1",
      "extra": [
        [
          "ACM DOI",
          "https://doi.org/10.1145/3721238.3730647"
        ]
      ],
      "evidence": "港大保存的 SIGGRAPH 正式论文实名注明由 Yuanpeng Tu 在阿里巴巴达摩院实习期间完成。其本人主页证实在港大读博和导师赵恒爽，同篇作者 Hao Luo 的同期任职资料与达摩院署名一致。"
    },
    {
      "id": "kuaishou-physmaster-hku-hengshuang-zhao",
      "company": "快手",
      "team": "可灵团队",
      "school": "香港大学",
      "studentSchool": "香港大学",
      "faculty": [
        "赵恒爽 · Hengshuang Zhao",
        "香港大学计算与数据科学学院助理教授，本篇通讯作者。",
        "https://www.ai.hku.hk/index.php/people/academic-staff/hszhao"
      ],
      "student": [
        "Sihui Ji",
        "香港大学在读博士，2025 年在快手可灵团队科研实习。",
        "https://sihuiji.github.io/"
      ],
      "advising": [
        "博士导师",
        "学生本人主页公开确认由港大助理教授 Hengshuang Zhao 指导博士研究。",
        "https://sihuiji.github.io/"
      ],
      "employee": [
        "Xin Tao",
        "本人任职履历明确记载 2020 年起在快手、2024 年 11 月起负责可灵视觉生成团队研究。",
        "https://www.xtao.website/"
      ],
      "title": "PhysMaster: Mastering Physical Representation for Video Generation via Reinforcement Learning",
      "short": "PhysMaster",
      "date": "2025-10",
      "venue": "arXiv 预印本",
      "area": "多模态与视觉生成",
      "paper": "https://arxiv.org/html/2510.13809",
      "extra": [
        [
          "学生维护的项目页",
          "https://sihuiji.github.io/PhysMaster-Page/"
        ]
      ],
      "evidence": "原文注明在快手可灵实习期间完成，第一作者 Sihui Ji 本人主页明确列 2025 年可灵实习及港大博士学籍与导师。赵恒爽和快手可灵员工 Xin Tao 均为本篇作者。"
    },
    {
      "id": "xiaohongshu-pipo-ruc-song",
      "company": "小红书",
      "team": "RedAI-Infra",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "宋睿华 · Ruihua Song",
        "2020 年 9 月起任中国人民大学高瓴人工智能学院长聘副教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/srh/index.htm"
      ],
      "employee": [
        "Weihang Chen",
        "本人公开履历列小红书任职；2025 年以小红书署名发表研究，2026 年 PIPO 作为该公司 AI Platform 通讯作者。",
        "https://cn.linkedin.com/in/weihang-chen-180a6a2b5"
      ],
      "student": [
        "Wenhui Tan",
        "2022 年 9 月起为中国人民大学高瓴人工智能学院博士生，2026 年 3 月起在小红书 RedAI-Infra 实习。本人将 PIPO 列为第一作者成果。",
        "https://alberttan.tech/about/"
      ],
      "title": "Pair-In, Pair-Out: Latent Multi-Token Prediction for Efficient LLMs",
      "short": "PIPO",
      "date": "2026-05-26",
      "venue": "arXiv 预印本",
      "area": "语言模型与智能体",
      "paper": "https://arxiv.org/html/2605.27255",
      "evidence": "小红书 AI 基础设施团队的项目页明确列 PIPO，团队代码库具名首位作者 Wenhui Tan；发表时他在该团队实习，同时由同篇通讯作者宋睿华指导，企业通讯作者为 Weihang Chen。",
      "advising": [
        "博士生导师",
        "Wenhui Tan 本人主页列宋睿华为其中国人民大学博士导师。",
        "https://alberttan.tech/about/"
      ],
      "extra": [
        [
          "小红书 AI 基础设施团队项目列表",
          "https://github.com/redai-studio#-research--open-source"
        ],
        [
          "团队项目代码及作者",
          "https://github.com/redai-studio/PIPO"
        ],
        [
          "同一企业作者的 2025 署名",
          "https://arxiv.org/html/2505.04180"
        ]
      ],
      "paperId": "arxiv:2605.27255"
    },
    {
      "id": "meituan-food-explanations-ruc-mao",
      "company": "美团",
      "team": "外卖推荐团队",
      "school": "中国人民大学",
      "studentSchool": "中国人民大学",
      "faculty": [
        "毛佳昕 · Jiaxin Mao",
        "中国人民大学高瓴人工智能学院教师，2020 年任准聘助理教授、2023 年起任准聘副教授。",
        "https://ai.ruc.edu.cn/szdw/zrjs/mjx/index.htm"
      ],
      "employee": [
        "韩瑞东 · Ruidong Han",
        "本人公开职业履历列美团，论文与其美团外卖推荐系统技术报告均署美团。他以该团队工程师身份公开招募推荐方向研究人员。",
        "https://cn.linkedin.com/in/ruidong-han-a3232a148"
      ],
      "student": [
        "孙一丁 · Yiding Sun",
        "2022 年 9 月至 2025 年 6 月在中国人民大学攻读硕士。其中 2022 年 2 月至 2023 年 12 月在美团外卖主站推荐团队担任机器学习实习生。",
        "https://emanual20.github.io/"
      ],
      "title": "Beyond Persuasiveness: A User-Centric Evaluation Framework of Explanations for Food Recommendation",
      "short": "Beyond Persuasiveness",
      "date": "2026-03-25",
      "venue": "ECIR",
      "area": "信息检索与推荐",
      "paper": "https://link.springer.com/chapter/10.1007/978-3-032-21300-6_41",
      "evidence": "Springer 正式章节指出该研究在美团实习期间完成，第一作者组的孙一丁报告同期就读人大和在美团外卖推荐实习。韩瑞东以美团署名同篇，毛佳昕以人大署名同篇；正式出版时孙一丁已转任腾讯。",
      "advising": [
        "硕士生导师",
        "孙一丁本人主页列出其在高瓴人工智能学院接受毛佳昕指导完成硕士学位。",
        "https://emanual20.github.io/"
      ],
      "extra": [
        [
          "韩瑞东的美团团队研究论文",
          "https://arxiv.org/html/2505.18654"
        ],
        [
          "同期公开招聘人员介绍",
          "https://maimai.cn/article/detail?efid=XoBlcZC6vxtmFxSOOBuJiQ&fid=1848060963"
        ]
      ],
      "paperId": "doi:10.1007/978-3-032-21300-6_41"
    },
    {
      "id": "huawei-ufinebench-hust-gao",
      "company": "华为",
      "team": "诺亚方舟实验室",
      "school": "华中科技大学",
      "studentSchool": "华中科技大学",
      "faculty": [
        "高常鑫 · Changxin Gao",
        "华中科技大学人工智能与自动化学院教授。",
        "http://faculty.hust.edu.cn/cgao/zh_CN/more/1104201/jsjjgd/index.htm"
      ],
      "employee": [
        "王云鹤 · Yunhe Wang",
        "华为活动资料列其为诺亚方舟实验室高级研究员；本人科研页亦确认任职。同篇为华为署名通讯作者。",
        "https://www.wangyunhe.site/"
      ],
      "student": [
        "左嘉龙 · Jialong Zuo",
        "学会报告者履历载左嘉龙为华中科技大学博士生、师从高常鑫，曾在华为诺亚方舟见习。CVPR 论文第一作者同时署华中科技大学和华为诺亚方舟。",
        "https://www.toutiao.com/article/7688899252721943103/"
      ],
      "title": "UFineBench: Towards Text-based Person Retrieval with Ultra-fine Granularity",
      "short": "UFineBench",
      "date": "2024-06",
      "venue": "CVPR",
      "area": "多模态与视觉",
      "paper": "https://openaccess.thecvf.com/content/CVPR2024/papers/Zuo_UFineBench_Towards_Text-based_Person_Retrieval_with_Ultra-fine_Granularity_CVPR_2024_paper.pdf",
      "evidence": "CVPR 正式论文将左嘉龙标记为该研究于华为诺亚方舟实习期间完成，王云鹤和校内导师高常鑫为同篇通讯作者。",
      "advising": [
        "博士生导师",
        "中国图象图形学会发布的报告者介绍具名列左嘉龙师从高常鑫；校方报道也记录其指导左嘉龙所在团队。",
        "https://www.toutiao.com/article/7688899252721943103/"
      ],
      "extra": [
        [
          "校方团队指导报道",
          "https://aia.hust.edu.cn/info/1179/10727.htm"
        ],
        [
          "华为研究员履历",
          "https://www-file.huawei.com/-/media/corp2020/event/2023/ipr2023/files/introduction_brochure_forum_on_innovation_intellectual_property_rights_huawei.pdf?la=en"
        ]
      ],
      "paperId": "arxiv:2312.03441"
    },
    {
      "id": "mfcca-alibaba-nwpu-lei-xie",
      "company": "阿里巴巴",
      "team": "达摩院 · 语音实验室",
      "school": "西北工业大学",
      "studentSchool": "西北工业大学",
      "faculty": [
        "谢磊 · Lei Xie",
        "西北工业大学计算机学院教授、ASLP 实验室负责人，是俞帆的硕士导师；同篇署西北工业大学。",
        "https://lxie.npu-aslp.org/"
      ],
      "employee": [
        "张仕良 · Shiliang Zhang",
        "时任阿里语音团队算法科学家。IEEE 正式会议日程将其列为阿里巴巴作者，2023 年行业会议履历说明博士毕业后即加入阿里智能语音团队。",
        "https://www.ncmmsc.org.cn/2023/qylt/"
      ],
      "student": [
        "俞帆 · Fan Yu",
        "研究时是西北工业大学计算机学院硕士生，毕业后加入达摩院。其硕士论文以多说话人语音识别为题；在读时以阿里语音实验室单位参与同一 AliMeeting 研究。",
        "https://segmentfault.com/e/1160000043581769"
      ],
      "title": "MFCCA: Multi-Frame Cross-Channel Attention for Multi-Speaker ASR in Multi-Party Meeting Scenario",
      "short": "MFCCA",
      "date": "2023-01",
      "venue": "IEEE SLT",
      "area": "语音与音频",
      "paper": "https://doi.org/10.1109/SLT54892.2023.10022715",
      "extra": [
        [
          "IEEE 正式会议日程（2023 年 1 月 10 日报告）",
          "https://slt2022.signalprocessingsociety.org/SLT%202022/slt2022.org/technical-program.html"
        ],
        [
          "作者预印本与研究实习计划致谢（2022 年 10 月）",
          "https://arxiv.org/pdf/2210.05265v1"
        ],
        [
          "俞帆以阿里语音实验室署名的同项目技术报告",
          "https://arxiv.org/pdf/2202.03647v1"
        ],
        [
          "阿里云开发者社区对同篇成果的说明",
          "https://developer.aliyun.com/article/1210209"
        ]
      ],
      "evidence": "论文致谢明确列出阿里巴巴研究实习计划；俞帆仍在西工大攻读硕士时，以阿里语音实验室单位发表同一 AliMeeting 项目的技术报告，报告与本篇均有张仕良、杜志浩、谢磊等具名作者。会议虽名为 SLT 2022，但该篇正式报告和论文集发表为 2023 年 1 月。",
      "advising": [
        "校内硕士导师",
        "2023 年西工大优秀硕士学位论文名单第 76 项记载：俞帆，导师谢磊，题目为《基于深度学习的多说话人语音识别技术研究》。同年公开课简介也列明指导关系。",
        "https://m.sme-gov.cn/xian/news/38864.html"
      ]
    }
  ]
};
