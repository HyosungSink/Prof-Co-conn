// Distinct profile addresses are kept apart unless the two profiles were checked.
const verifiedFacultyMatches = {
  '北京大学': {
    '人工智能研究院': '朱松纯 裴玉茹 赵卉菁 万小军 冯岩松 张辉帅 邹磊 卢宗青 杨耀东 董豪 王立威 张牧涵 贺笛 吴玺宏 李戈 马雷',
    '软件与微电子学院': '李伟平 李影 沈晴霓 文伟平 吴中海 曹喜信 张兴 曹健 窦尔翔 方跃坚 黄嵩 蒋严冰 荆琦 景翔 李素科 林慧苹 刘宏志 莫同 时广轶 孙圣力 王振宇 邢恩泉 严伟 俞敬松 赵岩 周立新 朱郑州'
  },
  '复旦大学': { '计算机科学技术学院／计算与智能创新学院': '张凯' },
  '清华大学': { '计算机科学与技术系': '王小云' },
  '上海交通大学': {
    '计算机学院（网络空间安全学院、密码学院）': [
      '谷大武 邢朝平 李建华 孔令和 朱浩瑾 蒋兴浩 李生红 邱卫东 潘理 韩帅 刘盛云 孙士锋 唐灯 何哲陟 陈国兴 王烁',
      '袁晨 桂佳平 张倬胜 汪哲东 王浩洋 化存卿 刘功申 王士林 伍军 薛质 孙锬锋 吴越 范磊 郭捷 黄征',
      '李林森 李小勇 许可 易平 张爱新 张媛媛 段苏峰 贺超翔 洪佳楠 侯勤胜 胡易坤 黄俊钦 黄林庆',
      '李宋宋 刘海涛 刘铭 单蓉胜 苏贵洋 唐鹏 王更 王强民 徐燕虹 许强 张驰 孟岩 曹培 应臣浩'
    ].join(' ')
  },
  '武汉大学': { '人工智能学院': '康利灿 陈超锋 张永军 李德仁 刘经南 夏军 周翔' },
  '西安电子科技大学': {
    '计算机科学与技术学院（示范性软件学院）': '杨利英 王佳宁 徐偲 张涛 李瑞 朱光明 董洛兵 蔺一帅 徐悦甡 李贺 范磊 霍秋艳 蒋志平 王献青'
  }
};

function facultySearchKey(value) {
  return value.normalize('NFKD').toLowerCase().replace(/[\p{M}\p{P}\p{Z}]/gu, '');
}

function facultyProfileKey(value) {
  const url = new URL(value);
  if (/^(jszy\.whu|faculty\.xidian|faculty\.hust|gr\.xjtu)\.edu\.cn$/.test(url.hostname)) {
    const account = url.pathname.match(/^(\/[^/]+)\/(?:zh_CN|en)(?:\/|$)/i);
    if (account) url.pathname = account[1];
  }
  if (url.hostname === 'homepage.hit.edu.cn') url.searchParams.delete('lang');
  return url.host + url.pathname.replace(/\/index\.html?$/i, '').replace(/\/$/, '') + url.search;
}

function addFacultyValue(map, value) {
  if (value) map.set(facultySearchKey(value), value);
}

const facultyRankPattern = /教授(?!课程)|研究(?:实习)?[员員]|讲[师師]|講師|工程[师師]|实验师|實驗師|助教|館員|馆员|編審|编审|^(?:高级)?(?:编辑|翻译|统计师|会计师|经济师|主任医师|副主任医师)$|(?:Teaching|Research) Fellow|Research Associate|Scientist|Professor|Lecturer|Instructor|\bEngineer\b|\bReader\b|\bTutor\b/i;
const facultyTierPattern = /^(?:正高(?:级)?|副高(?:级)?|中级|初级|初中级)(?:职称)?$/;
const facultyTierLabel = { 正高: '正高级', 副高: '副高级' };
const sharedRankGroups = {
  '复旦大学': { 大数据学院: { '教授/研究员': '正高级', '副教授/副研究员': '副高级' } },
  '哈尔滨工业大学': { '威海 · 网络空间安全系': { '教授/研究员': '正高级' } },
  '华中科技大学': {
    网络空间安全学院: { '教授/研究员': '正高级', '副教授/副研究员': '副高级' },
    软件学院: { '教授/研究员': '正高级' }
  }
};
const facultyRoleSeparator = /\s*·\s*|[，、；;]\s*|,\s+(?=博士|硕士|博导|硕导|Professor|Lecturer|Research|(?:Executive |Interim )?(?:Director|Head)|Chair Professor|(?:Associate |Assistant )?Dean|(?:Vice )?President)|(?<=(?:Professor|Lecturer))\s+(?=(?:Associate |Assistant |Division |UG )*(?:Dean|Director|Head|Academic Advisor|Curriculum Coordinator)\b)|\s*[/／]\s*(?=(?:院长|副院长|首席科学家|博士生导师|硕士生导师|博导|硕导)\s*$)|(?<=(?:院长|首席科学家))\s*[/／]\s*/;

function splitFacultyRole(role) {
  const ranks = [], tiers = [], appointments = [];
  for (const part of role.split(facultyRoleSeparator).map(s => s.trim()).filter(Boolean)) {
    if (facultyTierPattern.test(part)) {
      const tier = part.replace(/职称$/, '');
      tiers.push(facultyTierLabel[tier] || tier);
    } else if (part === '高工') {
      ranks.push('高级工程师');
    } else if (facultyRankPattern.test(part) && !/^(?:未|无|曾任|历任)|博士后合作导师|协会会士|分教授会|拟入职|\(\d{4}\s*[–—-]/.test(part)) {
      ranks.push(part);
    } else {
      appointments.push(part);
    }
  }
  return { ranks, tiers, appointments };
}

function mergeFacultyRows(rows) {
  const { name } = rows[0];
  const titles = new Map();
  const tiers = new Map();
  const titleLabels = new Map();
  const appointments = new Map();
  const aliases = new Map();
  let profile = '';
  for (const row of rows) {
    const parts = splitFacultyRole(row.roleGroup || row.role);
    for (const rank of parts.ranks) titles.set(facultySearchKey(rank), { label: rank });
    for (const tier of parts.tiers) tiers.set(facultySearchKey(tier), { label: tier });
    for (const appointment of parts.appointments) addFacultyValue(appointments, appointment);
    addFacultyValue(aliases, row.alias);
    if (row.profile && (!profile ||
      (profile.startsWith('http:') && row.profile.startsWith('https:')))) profile = row.profile;
  }
  if (!titles.size) {
    for (const { supplement } of rows) {
      if (!supplement) continue;
      const { ranks, tiers: levels } = splitFacultyRole(supplement.label);
      for (const rank of ranks) titles.set(facultySearchKey(rank), { label: rank, url: supplement.url });
      for (const level of levels) tiers.set(facultySearchKey(level), { label: level, url: supplement.url });
      for (const [label, url] of supplement.also) titleLabels.set(facultySearchKey(label), { label, url });
    }
  }
  return {
    name,
    profile,
    titles: [...titles.values()],
    tiers: [...tiers.values()],
    titleLabels: [...titleLabels.values()],
    appointments: [...appointments.values()],
    aliases: [...aliases.values()],
    searchKey: facultySearchKey([
      ...rows.flatMap(row => [row.name, row.alias, row.role, row.unit.name, ...(row.unit.aliases || [])]),
      ...[...titles.values(), ...tiers.values(), ...titleLabels.values()].map(rank => rank.label),
      !titles.size && !tiers.size ? '职称待核实' : ''
    ].join(' '))
  };
}

function mergeFacultyRosters(directory) {
  const schools = {};
  for (const [school, units] of Object.entries(directory)) {
    const departments = new Map();
    for (const [index, unit] of units.entries()) {
      if (!unit) continue; // Removed source; its slot keeps existing unit links stable.
      const name = unit.department ?? unit.name.split(' · ', 1)[0];
      if (!departments.has(name)) departments.set(name, { name, sources: [], people: [], index, unitIndexes: [] });
      const department = departments.get(name);
      department.sources.push(unit);
      department.unitIndexes.push(index);
      const supplements = new Map((facultyTitleSources[school]?.[unit.name] || []).map(([name, profile, label, url, also = []]) =>
        [JSON.stringify([name, profile]), { label, url: url || profile || unit.url, also }]));
      department.people.push(...unit.people.map(([name, role, profile, alias]) => ({
        name, role, profile, alias, unit,
        roleGroup: sharedRankGroups[school]?.[unit.name]?.[role.replaceAll('／', '/')],
        supplement: supplements.get(JSON.stringify([name, profile]))
      })));
    }
    schools[school] = Array.from(departments.values(), department => {
      const reviewed = new Set((verifiedFacultyMatches[school]?.[department.name] || '').split(' ').map(facultySearchKey));
      const names = new Map();
      for (const row of department.people) {
        const key = facultySearchKey(row.name);
        if (!names.has(key)) names.set(key, []);
        names.get(key).push(row);
      }
      department.people = Array.from(names, ([key, rows]) => {
        const profiles = new Map();
        for (const row of rows) {
          const id = row.profile ? facultyProfileKey(row.profile) : '';
          if (!profiles.has(id)) profiles.set(id, []);
          profiles.get(id).push(row);
        }
        const distinctProfiles = profiles.size - Number(profiles.has(''));
        return distinctProfiles < 2 || reviewed.has(key)
          ? [mergeFacultyRows(rows)]
          : Array.from(profiles.values(), mergeFacultyRows);
      }).flat();
      return department;
    });
  }
  return schools;
}

const ucasSchool = '中国科学院大学';

function ucasAccount(profile) {
  if (!profile) return '';
  const url = new URL(profile);
  if (!/^people\.ucas\.(?:ac|edu)\.cn$/.test(url.hostname)) return '';
  const match = decodeURIComponent(url.pathname).match(/^\/~([^/]+)\/?$/);
  return match ? match[1].toLowerCase() : '';
}

function groupUcasFaculty(departments, bibliographyFor) {
  const units = ucasInstitutes.map(([slug, name, url]) => ({ slug, name, url, people: [] }));
  const byAccount = new Map(ucasInstitutes.flatMap(([, , , accounts], index) =>
    accounts.split(' ').map(account => [account, units[index]])));
  const unknown = { slug: 'unverified', name: '研究所待核实', people: [] };
  units.push(unknown);
  const people = new Map();
  for (const department of departments) {
    for (const original of department.people) {
      const account = ucasAccount(original.profile);
      const key = account || (original.profile ? facultyProfileKey(original.profile) : Symbol());
      const bibliography = bibliographyFor(original, ucasSchool, department.name);
      const existing = people.get(key);
      if (existing) {
        const merge = (first, second, identify) => [...new Map(
          [...second, ...first].map(item => [identify(item), item])
        ).values()];
        for (const field of ['titles', 'tiers', 'titleLabels']) {
          existing[field] = merge(existing[field], original[field], entry => facultySearchKey(entry.label));
        }
        for (const field of ['appointments', 'aliases']) {
          existing[field] = merge(existing[field], original[field], facultySearchKey);
        }
        existing.bibliography = [existing.bibliography[0] || bibliography[0], existing.bibliography[1] || bibliography[1]];
        existing.searchKey += ` ${original.searchKey}`;
        if (original.profile.startsWith('https:')) existing.profile = original.profile;
      } else {
        const person = { ...original, bibliography, instituteSource: ucasInstituteSources.get(account) };
        people.set(key, person);
        (byAccount.get(account) || unknown).people.push(person);
      }
    }
  }
  return units.filter(unit => unit.people.length);
}
