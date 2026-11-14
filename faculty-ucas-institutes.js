// Research affiliation from the linked UCAS profiles, or the supplemental sources below.
// Each row: [stable anchor, research unit, official site, UCAS profile accounts].
const ucasInstitutes = [
  ["ict", "中国科学院计算技术研究所", "https://ict.cas.cn/",
    "0000953 0000960 0004703 0010355 0012225 0017125 0019135 " +
    "0044346 0050620 " +
    "0062549 0070888 " +
    "_liumin anzhulin aox baoyg bikeping biwei caohuawei caojuan " +
    "chensm chenxm chihao cmy cxq cyj daifeng dbu fangjinyun fanyixing fengxiaobing fxzhang " +
    "guanhongtao guojiafeng guojiaming haoyifan heqing hhan houruibing huangdi huimin huweiwu " +
    "huyu hwzhang hxh ict_gaolin ictsun ictwuchenggang jade jiangdj jiangh jianghaiyang jiaweile " +
    "jinxiaolong jiwen jlzhang kanmeina lbzhang lee leizhang liangli lianli " +
    "liguangli lihuawei lijingtao liuyaoqi liuying.com " +
    "liwenming lixueqi luop lutianyue lxw lzc mengke mengxuying mingyuyan " +
    "mozhifeng pxh qiuqiangict rpwang sgshan shaoen shengtang shenhuawei " +
    "shixiao sjl sliu smhe snh songlh sqjiang sunfei sunsheng sunyi sychen " +
    "syzh tdw tgm tianguojing tianlin wangchenxi wangdanding wangfeiict wangjiancpu wangmiao_ict " +
    "wangqi08 wangsa wangshi wangshuhui wangxiangdong wangying2009 " +
    "wangyujie wangzhan wenyuanbo wuqinghua xiashihong xiemengyao xing xingzhou " +
    "xinhe xinlongj xlchen xuqianqian xuzhiwei xyj yangfeng yangxiaodong yaoerlin " +
    "yejian yexiaochun yiminggan yizhao you yqchen yqzhou yuanliang yujun yulei " +
    "zhangke " +
    "zhangyuxuan2025 zhaoxf zhaoze zhexwang zhouhongyi " +
    "zhushengyu zhushuyong zidongdu zjf zlhe zli zqwang zyq zyw"],
  ["sia", "中国科学院沈阳自动化研究所", "https://sia.cas.cn/",
    "0005324 0005375 0008463 0029483 0082976 " +
    "baojuncheng caojunfeng changdaliang chenghaibo chenhongyu " +
    "chenyanzhuang chenzhier chuyaqi cuijin_sia cuilong duanxun duhualong dujinsong " +
    "eiyulux fanhuijie fanxp fengzhen fumingrui fushengpeng gaojie gaotianzhu genglingbo " +
    "gufeng guhaitao gulang hanzhi hbshi hechen hemiao huangyan1 huzhiqiang1sia " +
    "jiangjialin jiaoniandong lft lht liangwei@sia lianqingliu lichenxi " +
    "lidong1 lijunlin lilun1 limi lisicong liubohu685 liuhaosia " +
    "liukzh liupengxiang liuyang2 liuyunpeng liuzhaomingsia " +
    "lotees luohaibo luoyang lvbosia lyw menglingshuai myyang piaojinnan qifengsia " +
    "shizelin sialipeng " +
    "sialiuchang siawangkai siawangting1 siawangxiaodong siawangzhuo " +
    "siazqf sjzhu songchunhe songyifeng sunjie sunlanxiang " +
    "sunyingzhesia tangyuangui tanxiaowei tianjd tianqiyan uk20250528lhy666 " +
    "wanghailong wangjian801117 wangtianran wangwei1 " +
    "wangyaxing wangyigeng wangyiqun wangzhongfeng1 wuqingxiao xavier " +
    "xiachangqing xiarb xuaidong xuchi xuzhigang xzhao yangzhijia yanshuxue ycs yl-yang " +
    "yongmingyang ytang yuanxudong yuhaibo1 yujiancheng yuqinghe yutian zengjunbao zg " +
    "zhangbi zhangchuangsia zhanghao1 zhangyinlong zhangyuexing " +
    "zhangyunxiu zhaohuaici1 zhaojibin zhaoliang_sia zhaoyaohong zhaoyiwen zhaoyuhui " +
    "zhengxiongfei zhoucong zjm zkf2024 zp zsc0410 zwsia"],
  ["iscas", "中国科学院软件研究所", "https://is.cas.cn/",
    "0000094 0002576 0002613 0007888 0010679 " +
    "0070473 " +
    "anjie barmpalias caisw caojianwen chenfeng chenlong chm " +
    "ciyiwei cliang cuixiama cwzheng cy dengxm fangfang fanjiang fanlimin feifeima " +
    "fengjunzhang fengt fusong gaohang2026 gaoke gaosi gqwu guanji heliang heng hongan hongyu houfei " +
    "houpengpeng huangjin huichen hujun iscas-xiayuli iscashuangtao iscaswangrui iscaswangwei " +
    "iscasyedan jiaxiangkun jingzheng jwang2015 lengchang lesun lhm lhy " +
    "lingxiang lingyusi lishoubin liuj liujie liulx liushuaijun " +
    "lli luyaojie lzhou mashuai mingshu mingyang " +
    "nianlong pengshaohui pli purui qingkun qingmeng qinyu quanzheng ryhsl shuzi " +
    "sunwei_iscas tangzhen tenghan tianzhuo wangqing wangshuling " +
    "wangwencheng wangwenhan wchen wcm weijun wp wsdou wt wuheng wuwenjia wuwenling " +
    "wuxuesong wuyanjun wuzl wwqiang xiamingji xiaowei xiaqing xphan xrxie xuebai " +
    "xujing xulijie yancai yangyi_1982 yanjiwei yanjun yanrj yflian yingjunzhang " +
    "yqiao yqs yuanzhe yugao zeyusun zfzhang zhaijian zhangfusang zhangjian zhanglei1015 " +
    "zhanglibo zhangliwu zhanglj zhangwenbo zhangyang zhangyuwei zhengchen zhengyingying zhhao " +
    "zhimingding zhonghua zuochun ~0084686"],
  ["iie", "中国科学院信息工程研究所", "https://iie.cas.cn/",
    "0003476 0003578 0006127 0007285 0012751 0014566 0017313 0024555 " +
    "0034933 0040771 0040782 bojiang caoyanan chenchi clw ddlin eyuepeng " +
    "gejingguo gougaopeng guoli guxiaoyan guxiaozhuo gzmeng hourui huowei " +
    "husonglin hwq iiewubin jzw kaichen kpwang lifenghua66 limenghao limin " +
    "linzheng liubx liujian liuqixu liutingwen liuyanbing liuyinlong lux luxianhui luzhigang " +
    "mayuan md ruizhang shizhixin sunlimin tbb wanglp wangwenhao weidong@iie.ac.cn " +
    "xiaoqi xionggang xr yaosun yideng youruibang yujing01 yulingliu yxw zhangwentao zhudali zhuhongsong " +
    "zhuziyuan ~0010058"],
  ["cnic", "中国科学院计算机网络信息中心", "https://www.cnic.cas.cn/",
    "0009507 0009509 0010947 0017963 0020520 0026333 0041099 0046428 0051597 " +
    "0064420 " +
    "0082296 5566 changhuapei duyi " +
    "gaogang haojun henrywang imzhouxu jjr jqhuang kun laibaisheng leejun " +
    "liguan liushuo ludiwang lybmath niexiaohui pfwong qinchuan qinyifang renyongmao sgh " +
    "tiandong wangjuecnic wuhaibo wxz yu zhangby " +
    "zhouxiaojun zhs zjin zouhui"],
  ["siat", "中国科学院深圳先进技术研究院", "https://siat.cas.cn/",
    "0004619 0008832 0017527 0017528 0058478 0064227 0079549 0079554 0079558 0079688 " +
    "0082833 0082850 caimingxue caiyunpeng ccl cuihan cuiyunduan dkt ehyuan fmsun " +
    "haofusheng hesun hh.liu2 huangbo hywu jianggl kejiang liuchang2 liye " +
    "luoxiaoqing mateng niezedong penglei qiang qianyinling qiongtian qs.zhang shanshanwang " +
    "sjzhou sunliqun tianlan uspai wanglei123456 wangshuqiang xiaoli.li " +
    "yaliwang yangyuanyuan2022 yanjiewei yaohm yaoqinxie yeli yinling yuanjun_guo yumiao_siat " +
    "zhanghaoshi zhp"],
  ["nssc", "中国科学院国家空间科学中心", "https://nssc.cas.cn/",
    "0008501 0016376 0020524 0056759 0064172 0067253 " +
    "0073644 040814312 bian1978 chenhongzhen chenshi cymm dongzhenxing fangsf fyn_page " +
    "hejieying htl hutai lanailan lidalin liuxuefeng lvliangqing mbn mouhuan niuwenlong " +
    "wangchaopage wanglinlin wlg wyq123456 xuechangbin xuhaitao xujian82 yangjiasen " +
    "yangshuang08 yunrisheng zhangyuzhu_nssc zhengfu zhouhai zhuyan2014"],
  ["casia", "中国科学院自动化研究所", "https://ia.cas.cn/",
    "0005251 0009513 0019323 bin.liu chenglong chuangwang geyang_ia gfmeng hehuiguang heran " +
    "hewenhao houzengguang huangkaiqi huangyan2021 huweiming jiajunzhang jingfengshui jinqiaowang " +
    "kongqingchao likai liuchenglin liujing liukang liuzhiyong maowenji pzq qiaohong qldong shs " +
    "shuangyiwang sunzhenan tanmin wangliang weigao wuyihong xiangshiming xingdengpeng xlzheng " +
    "xuchangsheng xude xuyaozhang yangguodong yuanruyi zhangqian zhangzhengtao zhaodongbin " +
    "zhaojun zhuyuanheng zlei zongchengqing zouwei zqc"],
  ["cigit", "中国科学院重庆绿色智能技术研究院", "https://cigit.cas.cn/",
    "0020188 0035922 0076007 chenchangbo fanshuqian " +
    "jiangtingfu jingli liujiang lizhenghao longjin msshang shankun shimq shixiaoyu"],
  ["casit", "中国科学院成都计算机应用研究所", "https://admission.ucas.ac.cn/info/ZhaoshengDanweiDetail/0C5EE6E2-3029-4855-BB6A-8C0E6C43CC74/8015332027",
    "0009773 0009779 0009781 0009827 0021486 0069376 " +
    "helian lsp qxl yangf yaoyu"],
  ["fjirsm", "中国科学院福建物质结构研究所", "https://fjirsm.cas.cn/",
    "0058523 121 chenhao chenlx dhd haotianxie junhan linbangjiang liqimingrichie lmq " +
    "mechmei wang-fengxiang wluo yangyongtai"],
  ["sict", "中国科学院沈阳计算技术研究所有限公司", "https://kjt.ln.gov.cn/kjt/kyys/zzkyys/A7FEC61301D44304A65E8092599CB6D8/index.shtml",
    "0008527 0008537 0012420 0022135 0046511 0051440 huyi kevinyu " +
    "wangshiyu yubihui"],
  ["xjipc", "中国科学院新疆理化技术研究所", "https://xjipc.cas.cn/",
    "0002843 0036525 0070176 hanyunfei hpw hulun mabo wyxjipc xjipcwanglei " +
    "yangyating zhaofan"],
  ["ioe", "中国科学院光电技术研究所", "https://ioe.cas.cn/",
    "0040789 jiangping lijinying lixinyang tanghh " +
    "xiayunxia zhanglanqiang zuohaorui"],
  ["csu", "中国科学院空间应用工程与技术中心", "https://csu.cas.cn/",
    "0001819 0002436 0002475 0003191 0013199 0064904 caosuzhi wangjinbo wanxue wbdong yanzhen " +
    "yuge"],
  ["microsate", "中国科学院微小卫星创新研究院", "https://microsate.cas.cn/",
    "0079302 caiyl chenw@microsat wangml wenzheng xiefang " +
    "yinkanglin 陈蕞"],
  ["amss", "中国科学院数学与系统科学研究院", "https://amss.cas.cn/",
    "0000765 chuanzhou shangyun yyli"],
  ["iaii", "中国科学院工业人工智能研究所", "https://iaii.cas.cn/",
    "sunyiming"],
  ["iue", "中国科学院城市环境研究所", "https://iue.cas.cn/",
    "fl"],
  ["sari", "中国科学院上海高等研究院", "https://sari.cas.cn/",
    "yixinpei"],
  ["iet", "中国科学院工程热物理研究所", "https://iet.cas.cn/",
    "0026798"],
  ["casisd", "中国科学院科技战略咨询研究院", "https://casisd.cas.cn/",
    "glyang"],
  ["campus", "国科大校部", "https://www.ucas.ac.cn/",
    "0009941 0021493 0024450 _yanliu benhe bpma bxzhang csxfzhang haiyongjiang " +
    "hgqi lyqing miaoqh qmhuang shenhaihua suli wanfang wqwang xiaojun xujg yangzhiyong21 " +
    "yaozheng yingliu zhangyuqing"],
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
