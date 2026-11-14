// Only record source-backed outcomes. Ordinary search misses remain unverified.
// Keys are [faculty name, institutional profile URL], scoped to the university.
// Values are [state, source URL, former Scholar ID if applicable].
const facultyScholarStatus = {
  '清华大学': {
    '["孙富春","https://www.cs.tsinghua.edu.cn/info/1121/3555.htm"]': [
      'broken', 'https://taokong.github.io/', 'DbviELoAAAAJ'
    ],
  },
  '浙江大学': {
    '["张文桥","https://person.zju.edu.cn/wenqiao"]': [
      'broken', 'https://llsuzy.github.io/', 'XBbuP9YAAAAJ'
    ],
  },
  '南京大学': {
    '["马骏","https://cs.nju.edu.cn/_redirect?siteId=66&columnId=2640&articleId=51673"]': [
      'broken', 'https://github.com/hengxin/ics-csrankings/blob/master/ics-csrankings.md', 'OkMoxEkAAAAJ'
    ],
  },
  '哈尔滨工业大学': {
    '["张海军","http://faculty.hitsz.edu.cn/zhanghaijun"]': [
      'broken', 'https://csen.hitsz.edu.cn/info/1021/1877.htm', 'XEiWEDAAAAAJ'
    ],
  },
  '北京航空航天大学': {
    '["王田","https://iai.buaa.edu.cn/info/1131/1757.htm"]': [
      'broken', 'https://adscientificindex.com/scientist/tian-wang/742582/', 'IP_f-voAAAAJ'
    ],
  },
  '华中科技大学': {
    '["石宣化","http://faculty.hust.edu.cn/shixuanhua/zh_CN/index.htm"]': [
      'broken', 'https://sites.google.com/view/xhshi/publications', 'B5dWy88AAAAJ'
    ],
  },
  '武汉大学': {
    '["祝园园","http://jszy.whu.edu.cn/zhuyuanyuan/zh_CN/"]': [
      'broken', 'https://raw.githubusercontent.com/emeryberger/CSrankings/gh-pages/csrankings-y.csv#:~:text=Tp_W02YAAAAJ', 'Tp_W02YAAAAJ'
    ],
    '["胡瑞敏","https://cse.whu.edu.cn/info/3301/37281.htm"]': [
      'broken', 'https://raw.githubusercontent.com/emeryberger/CSrankings/gh-pages/csrankings-r.csv#:~:text=c9ZfhU0AAAAJ', 'c9ZfhU0AAAAJ'
    ],
    '["姚剑","https://cvrs.whu.edu.cn/jianyao/"]': [
      'moved', 'https://raw.githubusercontent.com/emeryberger/CSrankings/gh-pages/csrankings-j.csv#:~:text=lV0Wxw0AAAAJ', 'lV0Wxw0AAAAJ'
    ],
  },
  '中山大学': {
    '["廖国成","https://sse.sysu.edu.cn/teacher/222"]': [
      'broken', 'https://raw.githubusercontent.com/emeryberger/CSrankings/gh-pages/csrankings-g.csv#:~:text=s5ltgw8AAAAJ', 's5ltgw8AAAAJ'
    ],
  },
};
