# AI 研究 Connection

这个项目用公开论文和具名证据，追溯中国企业与高校在 AI 研究中通过学生参与形成的合作关系。关系详情列出代表论文、三类作者在研究期间的身份，以及高校教师指导学生、学生参与企业研究的依据。

[访问网站](https://hyosungsink.github.io/Prof-Co-conn/)

## 调查范围

- **时间与材料**　2023 年 1 月 1 日至 2026 年 11 月 12 日公开的 AI 会议论文、期刊论文和预印本。
- **高校**　C9、港五、香港中文大学（深圳）、香港科技大学（广州），以及北航、北邮、国科大、人大、华中科大、武大、电子科大、西电、西工大和中山大学，共 26 所。 [完整名单与检索别名](https://hyosungsink.github.io/Prof-Co-conn/method.html)
- **企业**　华为、腾讯、字节跳动、阿里巴巴、百度、京东、DeepSeek、月之暗面（Kimi）、智谱（GLM / Z.ai）、MiniMax、美团、小红书、快手和蚂蚁集团。研究团队按公开资料核对企业归属。

## 核验规则

每条已确认关系需要在同一篇论文中核实三位作者。

1. **高校指导教师**在调查范围内的高校任教，并在研究期间指导该学生。个人履历、学位论文、教师的学生名录等材料须能核实具名指导关系。跨校案例需要同期共同指导或联合培养的依据，并分别记录教师所属高校和学生学籍。
2. **企业正式员工**在研究期间受雇于对应企业。结合论文署名、任职履历或企业资料核对所在团队与任职时间。
3. **联合培养学生**在研究期间就读于调查范围内的高校，并参与对应企业与该论文相关的研究。用具名联培记录、双导师资料、实习脚注或项目贡献说明核实。多家企业合著时，学生的参与依据须能对应到具体企业。

身份以研究发生时为准。双署名、邮箱和共同作者名单用于发现线索。证据仍有缺口的记录保留为待核验线索，便于后续查证。

**每篇论文在全站只计一对关系。** 预印本、正式发表版和同篇论文的校企合作记录合并。索引在同一条论文记录中显示所有已核实的指导教师，按 [Google 学术](https://scholar.google.com/intl/en/scholar/citations.html) 个人档案「全部（All）」列中的 H 指数从高到低排列；并列时按英文署名排序。归属统计以首位教师对应的高校和企业团队为准。指数缺失时，仍可独立确认已有证据支持的合作。只有当所有合格教师的对应机构相同时，才可先确定该企业或高校的归属并计入对应图表；其余项目待定。论文详情附教师名单和指导依据。

## 浏览网站

- [首页](https://hyosungsink.github.io/Prof-Co-conn/)展示项目概览和按企业、高校统计的合作关系分布。企业点阵区分已确认和待核验；高校矩形的面积表示已确认关系数，分组标题带显示该组占比。点击图中的企业或高校，打开对应的关系索引。
- [关系索引](https://hyosungsink.github.io/Prof-Co-conn/connections.html)可按归属企业、教师所在高校或核验状态筛选，也可搜索论文和作者。点击论文题名查看原文和身份依据。
- [合著线索](https://hyosungsink.github.io/Prof-Co-conn/leads.html)每篇论文一帖，列出相关机构、核验提示和原文链接，可按题名、企业或高校检索。
- [教师名录](https://hyosungsink.github.io/Prof-Co-conn/faculty.html)按 26 所目标高校展示公开师资。点阵图显示各校院系名录记录数，点击高校即可筛选；也可选择高校和院系，按姓名或职称搜索。每个院系只展示一份名录，跨院系任职仍分别列出。核对职称时查看院系名录、教师工作简历、教师主页指向的个人主页，以及任职单位的官方资料。补录职称附原始链接；同一岗位在中英文来源中用词不同时，可分别查看两处来源。导师资格和双聘等另列，仅查到层级或缺少依据的记录分别标明。名录不用于直接确认论文作者当时的任职。
- [核验口径](https://hyosungsink.github.io/Prof-Co-conn/method.html)说明确认条件、论文归属规则和高校范围。

教师名录也列出已核实的 Google 学术主页和一篇可复核的 CCF 代表作。从院系档案进入教师个人主页或课题组主页，继续查找 Publications、代表论文、简历及其分页。按原题名和署名核对同名作者，用 [DBLP 书目快照](https://doi.org/10.4230/dblp.xml.2026-11-01)、出版方论文页或正式论文集确认出版信息；代表作附论文和作者核对来源。找到署名论文后，可用题名与作者名反查 Google 学术个人主页，再用主页所列论文、机构或回链核对身份。同名搜索结果不直接计入。分级依据 [CCF 2026 年第七版目录](https://www.ccf.org.cn/Academic_Evaluation/By_category/2026-03-31/870181.shtml)，会议只计正式长文。代表作可早于调查时间范围。没有足够公开资料时标为「未核实」。

## 本地运行与部署

网站由静态 HTML、CSS 和 JavaScript 组成。用浏览器打开 `index.html` 即可运行，也可在项目根目录启动本地 HTTP 服务。

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

启动后打开 `http://127.0.0.1:8000/`。GitHub Pages 从 `main` 分支的根目录发布，推送到 `main` 后会自动重新部署。`.nojekyll` 让 Pages 直接发布静态文件。修改 JavaScript（含数据文件）或 CSS 后，提交前运行 `python3 scripts/version_assets.py`，让页面加载同一版资源。

## 数据与代码

| 文件 | 内容 |
| --- | --- |
| [`data.js`](data.js) | 调查范围、关系记录、三类作者及其证据链接 |
| [`leads.js`](leads.js) | 合著论文线索、关联机构和待核验事项 |
| [`h-index.js`](h-index.js) | 参与归属比较的教师、Google 学术档案标识和总 H 指数快照 |
| [`papers.js`](papers.js) | 论文识别、去重与归属规则 |
| [`index.html`](index.html)、[`home.js`](home.js) | 首页概览、企业与高校分布图 |
| [`connections.html`](connections.html)、[`app.js`](app.js) | 关系索引、筛选与证据详情 |
| [`leads.html`](leads.html)、[`leads-page.js`](leads-page.js) | 合著线索和检索 |
| [`faculty.html`](faculty.html)、[`faculty-page.js`](faculty-page.js)、[`faculty-rosters.js`](faculty-rosters.js)、[`faculty-data.js`](faculty-data.js)、[`faculty-titles.js`](faculty-titles.js) | 教师名录、院系内去重、官方名单和补录职称来源 |
| [`faculty-bibliography.js`](faculty-bibliography.js) | 教师的 Google 学术主页、CCF 代表作和核对来源 |
| [`method.html`](method.html)、[`method-page.js`](method-page.js) | 核验口径和高校范围 |
| [`styles.css`](styles.css) | 页面样式与移动端布局 |

补充或更正记录时，请附论文原文、相关作者和研究时间，以及能定位到具体身份、指导关系或企业参与的公开来源。可通过仓库 Issues 提交。 [提交线索或更正](https://github.com/HyosungSink/Prof-Co-conn/issues/new)

如果同一篇论文的版本使用不同标题和不同链接，在相关记录中填写相同的 `paperId`，或在一条记录上填写另一版本的 arXiv、ACL Anthology 或 DOI 标识（如 `arxiv:2610.12061`）。
