// Distinct profile addresses are kept apart unless the two profiles were checked.
const verifiedFacultyMatches = {
  '北京大学': {
    '人工智能研究院': '朱松纯 裴玉茹 赵卉菁 万小军 冯岩松 张辉帅 邹磊 卢宗青 杨耀东 董豪 王立威 张牧涵 贺笛 吴玺宏 李戈 马雷',
    '软件与微电子学院': '李伟平 李影 沈晴霓 文伟平 吴中海 曹喜信 张兴 曹健 窦尔翔 方跃坚 黄嵩 蒋严冰 荆琦 景翔 李素科 林慧苹 刘宏志 莫同 倪宣明 时广轶 宋丹 孙圣力 王振宇 邢恩泉 严伟 俞敬松 赵岩 周立新 朱郑州'
  },
  '复旦大学': { '计算机科学技术学院／计算与智能创新学院': '张凯' },
  '清华大学': { '计算机科学与技术系': '王小云' },
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

function mergeFacultyRows(rows) {
  const { name } = rows[0];
  const roles = new Map();
  const aliases = new Map();
  let profile = '';
  for (const row of rows) {
    addFacultyValue(roles, row.role);
    addFacultyValue(aliases, row.alias);
    if (row.profile && (!profile ||
      (profile.startsWith('http:') && row.profile.startsWith('https:')))) profile = row.profile;
  }
  return {
    name,
    profile,
    roles: [...roles.values()],
    aliases: [...aliases.values()],
    searchKey: facultySearchKey(rows.flatMap(row =>
      [row.name, row.alias, row.role, row.unit.name, ...(row.unit.aliases || [])]).join(' '))
  };
}

function mergeFacultyRosters(directory) {
  const schools = {};
  for (const [school, units] of Object.entries(directory)) {
    const departments = new Map();
    for (const [index, unit] of units.entries()) {
      const name = unit.department ?? unit.name.split(' · ', 1)[0];
      if (!departments.has(name)) departments.set(name, { name, sources: [], people: [], index, unitIndexes: [] });
      const department = departments.get(name);
      department.sources.push(unit);
      department.unitIndexes.push(index);
      department.people.push(...unit.people.map(([name, role, profile, alias]) => ({ name, role, profile, alias, unit })));
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
