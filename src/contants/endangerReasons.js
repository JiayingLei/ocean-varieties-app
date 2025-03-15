export const endangerReasons = [
  { id: 1, zh: "人类屠戮", en: "Human Slaughter", severity: 5, category: "人为直接导致" },
  { id: 2, zh: "商业捕杀", en: "Commercial Hunting", severity: 6, category: "人为直接导致" },
  { id: 3, zh: "过度捕捞", en: "Overfishing", severity: 17, category: "人为直接导致" },
  { id: 4, zh: "缺少食物", en: "Lack of Food", severity: 1, category: "人为间接导致" },
  { id: 5, zh: "水体污染", en: "Water Pollution", severity: 18, category: "人为间接导致" },
  { id: 6, zh: "滩涂破坏", en: "Intertidal Destruction", severity: 5, category: "人为间接导致" },
  { id: 7, zh: "填海造陆", en: "Land Reclamation", severity: 1, category: "人为间接导致" },
  { id: 8, zh: "海底破坏", en: "Seafloor Destruction", severity: 1, category: "人为间接导致" },
  { id: 9, zh: "气候异常", en: "Climate Abnormalities", severity: 1, category: "人为间接导致" },
  { id: 10, zh: "船只碰撞", en: "Ship Collisions", severity: 2, category: "人为间接导致" },
  { id: 11, zh: "保护力度低", en: "Low Protection Efforts", severity: 3, category: "人为间接导致" },
  { id: 12, zh: "海岸开发", en: "Coastal Development", severity: 4, category: "人为间接导致" },
  { id: 13, zh: "海滩搁浅", en: "Beach Stranding", severity: 1, category: "自然原因导致" },
].map(reason => ({
  ...reason,
  description_zh: `${reason.zh}：导致${reason.severity}种海错生物濒危`,
  description_en: `${reason.en}: Leading to the endangerment of ${reason.severity} marine species in <HaiCuo Map>.`,
  image: `${process.env.PUBLIC_URL}/detailspage/endanger-reasons/${reason.zh}.png`,
  boneImage: `${process.env.PUBLIC_URL}/detailspage/fish-bones-explorer/${reason.zh}.svg`
}));