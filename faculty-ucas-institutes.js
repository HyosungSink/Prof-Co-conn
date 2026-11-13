// Research affiliation from the linked UCAS profiles, or the supplemental sources below.
// Each row: [stable anchor, research unit, official site, UCAS profile accounts].
const ucasInstitutes = [
  ["ict", "中国科学院计算技术研究所", "https://ict.cas.cn/",
    "0000953 0000960 0004703 0004708 0004709 0008328 0010355 0012225 0017125 0019135 0024755 0024949 " +
    "0032113 0032532 0035587 0039886 0041233 0042848 0044119 0044346 0050620 0050621 0050963 0052362 " +
    "0053193 0055535 0060811 0061786 0062549 0063518 0068781 0070888 0072346 0074662 0074773 0075417 " +
    "0078487 0078491 _lchen _liumin anzhulin aox baoyg bikeping biwei caohuawei caojuan caoqi chengliu " +
    "chensm chenxm chihao cmy cxq cyj daifeng dbu fangjinyun fanxin fanyixing fengxiaobing fxzhang " +
    "guanhongtao guansaiping guojiafeng guojiaming haoyifan heqing hhan houruibing huangdi huimin huweiwu " +
    "huyu hwzhang hxh ict_gaolin ictsun ictwuchenggang jade jiangdj jiangh jianghaiyang jiaweile " +
    "jinxiaolong jiwen jlzhang kanmeina lbzhang lee leizhang liangli lianli liaohuaming lidongict " +
    "liguangli lihuawei lijingtao liuhongict liuxinyu liuyaoqi liuying.com liuyuhang liwei_iecas " +
    "liwenming lixueqi lizixuan luohaiyong luop lutianyue lxw lzc maotianlu mengke mengxuying mingyuyan " +
    "mjhe mozhifeng pxh qiangsheng qiuqiangict rpwang sgshan shaoen shengtang shenhuawei shigang " +
    "shihongzhou shixiao sjl sliu smhe snh songlh songxinkai sqjiang sunfei sunsheng sunyi syang sychen " +
    "syzh tdw tgm tianguojing tianlin vr wangchenxi wangdanding wangfeiict wangjiancpu wangmiao_ict " +
    "wangnina wangqi08 wangsa wangshi wangshuhui wangxiangdong wangyang_ict wangying2009 wangyinshan " +
    "wangyujie wangzhan weili wenyuanbo wuqinghua wyan xh xiaojunhua xiashihong xiemengyao xing xingzhou " +
    "xinhe xinlongj xlchen xuqianqian xuzhiwei xyj yangchuanguang yangfeng yangxiaodong yaodi yaoerlin " +
    "yaoping yejian yejing yexiaochun yiminggan yizhao you yqchen yqzhou yuanguojun yuanliang yujun yulei " +
    "yuxiaoming yzh zengjiabei zhangguangxing zhangke zhangrui_ict zhangruqing zhangyucheng " +
    "zhangyuxuan2025 zhangzhibin_phd zhaoxf zhaoyongwei zhaoze zhexwang zhitian zhouhongyi zhudengming " +
    "zhushengyu zhushuyong zidongdu zjf zlhe zli zqwang zyq zyw"],
  ["sia", "中国科学院沈阳自动化研究所", "https://sia.cas.cn/",
    "0005324 0005375 0008463 0029483 0040352 0066967 0066968 0076057 0082976 0085881 baiyunfei2406 " +
    "baojuncheng caojunfeng caorunan changdaliang changyong chenfaling chenghaibo chenhongyu chenshuai1 " +
    "chenxiai chenyanzhuang chenzhier chuyaqi cuijin_sia cuilong cuishijie duanxun duhualong dujinsong " +
    "eiyulux fanhuijie fanxp fdz fenghaosia fengzhen fumingrui fushengpeng gaojie gaotianzhu genglingbo " +
    "gufeng guhaitao gukanfeng gulang handongyu hanzhi hbshi hechen hemiao huangyan1 huzhiqiang1sia " +
    "jialin_zhang jiangjialin jiaoniandong jinghongdi kfc ldp lft lht liangwei@sia lianqingliu lichenxi " +
    "lidecai lidong1 lijunlin lilun1 limi lishuai lisicong liubohu685 liuhaizheng liuhaosia liujinxin " +
    "liukzh liupengfei liupengxiang liusongkai liuxiyao liuyang2 liuyunpeng liuzhaomingsia lixiang " +
    "lixingqiang lotees luohaibo luoyang lvbosia lyw menglingshuai myyang panxinan piaojinnan qifengsia " +
    "renkai shaoshiliang shengchuan shigangsia shijia0824 shikai shizelin sia_liyan siagaosheng sialipeng " +
    "sialiuchang sializhihai siatianxiaojun siawangkai siawangting1 siawangxiaodong siawangzhuo " +
    "siazhouxiaofeng siazqf sjzhu songchunhe songguoli songyifeng suichunping sunjie sunkai sunlanxiang " +
    "sunyao sunyingzhesia sunzhaoyang tangyuangui tanxiaowei tianjd tianqiyan uk20250528lhy666 wangchao1 " +
    "wanghailong wangheran wangjian801117 wangshuai5 wangtianran wanguangxi wangwei1 wangxiao1 " +
    "wangxiaoduo wangyaxing wangyigeng wangyiqun wangzhenyu1 wangzhongfeng1 wuqingxiao xavier " +
    "xiachangqing xiarb xuaidong xuchi xumin1 xuzhigang xzhao yangliying yangzhijia yanshuxue ycs yl-yang " +
    "yongmingyang ytang yuanxudong yuhaibo1 yujiancheng yumiao1 yuqinghe yusiquan yutian zengjunbao zg " +
    "zhangbi zhangchuangsia zhangdaohui zhanghao1 zhanghualiang1 zhangweiming zhangyinlong zhangyuexing " +
    "zhangyunxiu zhaodayong zhaohuaici1 zhaojibin zhaoliang_sia zhaoyaohong zhaoyiwen zhaoyuhui " +
    "zhengxiongfei zhoubo1 zhoucong zjm zkf2024 zp zp_sialibs zsc0410 zwsia zzw9010"],
  ["iscas", "中国科学院软件研究所", "https://is.cas.cn/",
    "-yangchen 0000094 0002576 0002613 0007885 0007888 0010679 0012984 0019169 0026869 0044956 0046337 " +
    "0048925 0049213 0055546 0059014 00615 0064928 0066508 0070267 0070473 0074500 0077613 0080263 " +
    "0082023 0084684 anjie baikunpeng barmpalias beryl caisw caojianwen casyangli chenfeng chenlong chm " +
    "ciyiwei cliang cuixiama cwzheng cy dengxm dongqian dove fangfang fanjiang fanlimin feifeima " +
    "fengjunzhang fengt fusong gaohang2026 gaoke gaosi gqwu guanji heliang heng hongan hongyu houfei " +
    "houpengpeng huangjin huichen hujun iscas-xiayuli iscas-zhx iscashuangtao iscaswangrui iscaswangwei " +
    "iscasyedan jiageng jiangmengli jiaxiangkun jingzheng jwang2015 lengchang lesun lhm lhy lihao " +
    "lingxiang lingyusi lishoubin liuhuidan liuj liujie liulx liushuaijun liuyumeng liuzhe-iscas liwenbo " +
    "liyong lli longlong luyaojie lvyi lzhou mahengtai mashuai menglingzhong mengqingxin mingshu mingyang " +
    "mzhang nianlong pengshaohui pli purui qingkun qingmeng qinyu quanzheng rentao rjw ryhsl shuzi " +
    "sunchuxiong sunwei_iscas tangzhen tenghan tianzhuo trustfw wangp wangqing wangshuling wangting " +
    "wangwencheng wangwenhan wchen wcm wdd weijun wenjing wp ws wsdou wt wuheng wuwenjia wuwenling " +
    "wuxuesong wuyanjun wuyuewen wuzl wwqiang xiamingji xiaowei xiaqing xingchenshen xphan xrxie xuebai " +
    "xueyang xugang14 xujing xulijie yancai yangyi_1982 yanjia yanjiwei yanjun yanrj yflian yingjunzhang " +
    "yqiao yqs yuanzhe yuekang yugao zeyusun zfzhang zhaijian zhangfusang zhangjian zhanglei1015 " +
    "zhanglibo zhangliwu zhanglj zhangwenbo zhangya zhangyang zhangyuwei zhengchen zhengyingying zhhao " +
    "zhimingding zhonghua zhouxin zhujiaqi zhujiaxin zs zuochun ~0084686"],
  ["iie", "中国科学院信息工程研究所", "https://iie.cas.cn/",
    "0003476 0003578 0006127 0006148 0006933 0007285 0012751 0014566 0016997 0017313 0024555 0034926 " +
    "0034933 0040766 0040771 0040782 0046071 bfwu bojiang caoyanan chenchi clw cryptoxu ddlin eyuepeng " +
    "fupeng gejingguo gougaopeng guoli guxiaoyan guxiaozhuo gzmeng hourui huangguifang huangzhenyu huowei " +
    "husonglin hwq iie_liyang iiewubin jayzhou jzw kaichen kpwang lifenghua66 limenghao limin limm " +
    "linzheng liubx liujian liulimin liuqixu liutingwen liuyanbing liuyinlong lux luxianhui luzhigang " +
    "macunqing mayuan md ruizhang shizhixin sunlimin tbb wanglp wangsiye wangwenhao weidong@iie.ac.cn " +
    "xiaoqi xionggang xr yaosun yideng youruibang yujing01 yulingliu yxw zhangwentao zhudali zhuhongsong " +
    "zhuyujia zhuziyuan ~0010058"],
  ["cnic", "中国科学院计算机网络信息中心", "https://www.cnic.cas.cn/",
    "0009507 0009509 0010947 0017963 0020520 0026333 0026336 0036100 0041099 0046428 0051592 0051597 " +
    "0056313 0057384 0060680 0062697 0064419 0064420 0064421 0067097 0070146 0070147 0070148 0070149 " +
    "0072378 0073125 0073126 0073127 0073128 0073129 0075544 0075545 0082296 5566 changhuapei duyi " +
    "duyihua gaogang gongliangyi hai haojun henrywang hull imzhouxu jjr jqhuang kun laibaisheng leejun " +
    "liguan lilizhang liushuo ludiwang lybmath niexiaohui pfwong qinchuan qinyifang renyongmao sgh " +
    "tiandong tigerliu wangjuecnic wangwu wenjuancui wuhaibo wxz wyvernking ydfeng yu zgwang zhangby " +
    "zhangxinyi zhouxiaojun zhs zjin zouhui zwang_cnic"],
  ["siat", "中国科学院深圳先进技术研究院", "https://siat.cas.cn/",
    "0004619 0008832 0017527 0017528 0058478 0064227 0079549 0079554 0079557 0079558 0079688 0079693 " +
    "0082710 0082833 0082850 caimingxue caiyunpeng ccl cuihan cuiyunduan dkt ehyuan feifeigu fmsun " +
    "fuxiang glchen haofusheng hesun hh.liu2 huangbo hywu jianggl kejiang lijinke liuchang2 liye " +
    "luoxiaoqing luyi.sun mateng niezedong penglei qiang qianyinling qiongtian qs.zhang shanshanwang " +
    "siat_lina sjzhou sszhu sunliqun tianlan uspai wanglei123456 wangshuqiang wushi xiaoli.li xt.gao " +
    "yaliwang yangyuanyuan2022 yanjiewei yaohm yaoqinxie yeli yinling yuanjun_guo yumiao_siat ywj " +
    "zhanghaoshi zhaoyuanshen zhp"],
  ["nssc", "中国科学院国家空间科学中心", "https://nssc.cas.cn/",
    "0008501 0016349 0016376 0016429 0017787 0020524 0026904 0035196 0052426 0056759 0064172 0067253 " +
    "0073644 0079940 0082254 040814312 bian1978 chenhongzhen chenshi cymm dongzhenxing ew fangsf fyn_page " +
    "hejieying htl hutai lanailan lidalin liucheng liuxuefeng liyl8801 lvliangqing mbn mouhuan niuwenlong " +
    "soleczm tangwenlin wangchaopage wanglinlin wlg wyq123456 xuechangbin xuhaitao xujian82 yangjiasen " +
    "yangshuang08 yunrisheng zhangyuzhu_nssc zhengfu zhongdingkun zhouhai zhuyan2014 zji"],
  ["casia", "中国科学院自动化研究所", "https://ia.cas.cn/",
    "0005251 0009513 0019323 bin.liu chenglong chuangwang geyang_ia gfmeng guodalei hehuiguang heran " +
    "hewenhao houzengguang huangkaiqi huangyan2021 huweiming jiajunzhang jingfengshui jinqiaowang " +
    "kongqingchao liangjian likai liuchenglin liujing liukang liuzhiyong maowenji pzq qiaohong qldong shs " +
    "shuangyiwang sunzhenan tanmin wangliang weigao wuyihong xiangshiming xingdengpeng xlzheng " +
    "xuchangsheng xude xuyaozhang yangguodong yuanruyi zhang_zhang zhangqian zhangzhengtao zhaodongbin " +
    "zhaojun zhuyuanheng zlei zongchengqing zouwei zqc"],
  ["cigit", "中国科学院重庆绿色智能技术研究院", "https://cigit.cas.cn/",
    "0020188 0020190 0020199 0035922 0058106 0073240 0076006 0076007 0082656 chenchangbo fanshuqian " +
    "fenglei jiangtingfu jingli jwchen liujiang lizhenghao longjin msshang shankun shimq shixiaoyu"],
  ["casit", "中国科学院成都计算机应用研究所", "https://admission.ucas.ac.cn/info/ZhaoshengDanweiDetail/0C5EE6E2-3029-4855-BB6A-8C0E6C43CC74/8015332027",
    "0009773 0009779 0009781 0009827 0021375 0021486 0044418 0066679 0067120 0067121 0069344 0069376 " +
    "chengmiao gjj1001 helian lsp qxl xuxiao yangf yaoyu"],
  ["fjirsm", "中国科学院福建物质结构研究所", "https://fjirsm.cas.cn/",
    "0058523 0073273 0075590 121 chenhao chenlx dhd haotianxie junhan linbangjiang liqimingrichie lmq " +
    "mechmei wang-fengxiang wluo yangyongtai zoushengnan"],
  ["sict", "中国科学院沈阳计算技术研究所有限公司", "https://kjt.ln.gov.cn/kjt/kyys/zzkyys/A7FEC61301D44304A65E8092599CB6D8/index.shtml",
    "0008527 0008537 0012420 0022134 0022135 0046511 0051440 0060898 0071752 0082002 0084714 huyi kevinyu " +
    "sictyjg wangshiyu yubihui"],
  ["xjipc", "中国科学院新疆理化技术研究所", "https://xjipc.cas.cn/",
    "0002843 0021648 0036525 0067219 0070176 aizimaiti hanyunfei hpw hulun mabo wyxjipc xjipcwanglei " +
    "yangyating zhaofan"],
  ["ioe", "中国科学院光电技术研究所", "https://ioe.cas.cn/",
    "0040789 baohua chenke jiangping lijinying liuwansheng lixinyang suhaibing tanghh wangqiang " +
    "wangranjun xiayunxia zhanglanqiang zuohaorui"],
  ["csu", "中国科学院空间应用工程与技术中心", "https://csu.cas.cn/",
    "0001819 0002436 0002475 0003191 0013199 0040902 0064904 caosuzhi wangjinbo wanxue wbdong yanzhen " +
    "yuge"],
  ["microsate", "中国科学院微小卫星创新研究院", "https://microsate.cas.cn/",
    "0079302 0085522 baohc caiyl chenw@microsat shiminhua_edu_2702 wangml wanzq wenzheng xiefang " +
    "yinkanglin 陈蕞"],
  ["amss", "中国科学院数学与系统科学研究院", "https://amss.cas.cn/",
    "0000765 chuanzhou shangyun yyli"],
  ["iaii", "中国科学院工业人工智能研究所", "https://iaii.cas.cn/",
    "sia.xiaoyang sialiuyiyang sunyiming"],
  ["iue", "中国科学院城市环境研究所", "https://iue.cas.cn/",
    "fl"],
  ["sari", "中国科学院上海高等研究院", "https://sari.cas.cn/",
    "yixinpei"],
  ["iet", "中国科学院工程热物理研究所", "https://iet.cas.cn/",
    "0026798"],
  ["casisd", "中国科学院科技战略咨询研究院", "https://casisd.cas.cn/",
    "glyang"],
  ["campus", "国科大校部", "https://www.ucas.ac.cn/",
    "0007273 0009941 0020503 0021493 0024450 _yanliu aiyunfeng benhe bpma bxzhang csxfzhang haiyongjiang " +
    "hgqi libb lyqing miaoqh qmhuang s.lin shenhaihua suli wanfang wqwang xiaojun xujg yangzhiyong21 " +
    "yanucas yaozheng yingliu zhangyuqing"],
];

// Alternate official or identity-linked affiliation sources, by UCAS profile account.
const ucasInstituteSources = new Map([
  ["0070888", "https://ict.cas.cn/sourcedb/cn/jssrck/202002/t20200210_5498321.html"],
  ["chenglong", "https://ia.cas.cn/rcdw/jcqn/202404/t20240425_7131817.html"],
  ["chenhongzhen", "https://nssc.cas.cn/yjsb/zsxx/zsdt/202509/P020250915399890102528.pdf"],
  ["heliang", "https://is.cas.cn/yjsjy/dsxx/"],
  ["henrywang", "https://sais.ucas.ac.cn/index.php/zh/szdw/rhjs"],
  ["huangyan2021", "https://www.fynu.edu.cn/xxgc/info/1045/4245.htm"],
  ["lidalin", "https://nssc.cas.cn/yjsb/zsxx/zsdt/202509/P020250915399890102528.pdf"],
  ["lixingqiang", "https://people.ucas.edu.cn/~lixingqiang"],
  ["lutianyue", "https://acs.ict.ac.cn/kyry/fyjy/202206/t20220625_40538.html"],
  ["msshang", "https://cigit.cas.cn/sourcedb/rcdw/202012/t20201225_5842652.html"],
  ["qingmeng", "https://is.cas.cn/rcdw/fyjy/202607/t20260715_8248889.html"],
  ["sjl", "https://ict.cas.cn/jssgk/zzjg/kyxt/ydjs/ky/"],
  ["wuqingxiao", "https://sia.cas.cn/zpjy/yjsjy/zs/bszs/202610/t20261019_8293735.html"],
  ["xlchen", "https://ict.cas.cn/jssgk/xrsld/202511/t20251112_8010592.html"],
  ["yideng", "https://www.iie.cas.cn/xwdt/zhxw/202602/t20260202_8121478.html"],
  ["zeyusun", "https://zys-szy.github.io/"],
  ["zhanglibo", "https://is.cas.cn/yjsjy/dsxx/"],
  ["zhengxiongfei", "https://sia.cas.cn/zpjy/yjsjy/dsjj/bsds/"],
  ["陈蕞", "https://microsate.cas.cn/sourcedb/zw/gbzjrc/jcqn/202303/t20230309_6692566.html"],
]);

// Without an assignment, the profile is shown under 研究所待核实.
