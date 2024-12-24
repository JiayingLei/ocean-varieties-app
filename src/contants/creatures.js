export const creatures = [
    {
        "id": 1,
        "name": {
            "zh": "𫚖鱼",
            "en": "Chinese herring"
        },
        "scientificName": {
            "zh": "刀鲚",
            "en": "Trichiurus lepturus"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "鲱形目 | 鳀科 | 鲚属 | 鱼类",
            "en": "Clupeiformes | Engraulidae | Coilia | Fish"
        },
        "distribution": {
            "zh": "刀鲚主要分布于中国、日本、韩国、朝鲜。在中国北起辽宁辽河，南至广东沿海都有分布。",
            "en": "The Chinese herring is mainly distributed in China, Japan, South Korea, and North Korea. In China, it is found from the Liaohe River in Liaoning in the north to the coastal areas of Guangdong in the south."
        },
        "description": {
            "zh": "𫚖鱼，种群在长江口多栖息于水深10米以下。",
            "en": "The Chinese herring often inhabits waters less than 10 meters deep near the mouth of the Yangtze River."
        },
        "protectionLevel": {
            "zh": "列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：濒危物种（EN）2017年评估。",
            "en": "Listed in the IUCN Red List of Threatened Species: Endangered (EN), assessed in 2017."
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "水体污染", "海岸开发"],
                "en": ["Overfishing", "Water pollution", "Coastal development"]
            },
            "state": {
                "zh": "江刀岌岌可危，刀鱼小型化，\n现在全人工养殖的刀鱼已经开始推广。",
                "en": "The Chinese herring is in critical danger, with a trend toward smaller sizes. Artificial breeding of Chinese herring has started to be promoted."
            }
        },
        "image": `${process.env.PUBLIC_URL}/images/𫚖鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/𫚖鱼.png`,
        "position": { "left": 719, "top": 2918 },
        "size": { "width": 421, "height": 421 }
    },
    {
        "id": 2,
        "name": {
            "zh": "带鱼",
            "en": "Ribbonfish"
        },
        "scientificName": {
            "zh": "带鱼",
            "en": "Trichiurus lepturus"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "鲈形目 | 带鱼科 | 带鱼属 | 鱼类",
            "en": "Perciformes | Trichiuridae | Trichiurus | Fish"
        },
        "protectionLevel": {
            "iucn": {
                "zh": "列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：无危物种（LC）2013年评估。",
                "en": "Listed in the IUCN Red List of Threatened Species: Least Concern (LC), assessed in 2013."
            }
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "水体污染"],
                "en": ["Overfishing", "Water pollution"]
            },
            "state": {
                "zh": "几十年的疯狂捕捞使得“大者30余斤”的带鱼不见了，\n只有细如皮带、手指粗细的幼体。",
                "en": "Decades of excessive fishing have led to the disappearance of the large ribbonfish, once over 30 pounds, leaving only the slender, finger-thick juveniles."
            }
        },
        "distribution": {
            "zh": "带鱼分布比较广，以西太平洋和印度洋最多，中国沿海各省均可见到，其中以东海产量最高。",
            "en": "Ribbonfish has a wide distribution, most notably in the Western Pacific and Indian Oceans. It can be found in all coastal provinces of China, with the highest production in the East China Sea."
        },
        "image": `${process.env.PUBLIC_URL}/images/带鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/带鱼.png`,
        "description": {
            "zh": "带鱼，一般栖息于大洋水域、深海、砂泥底、河口、近海沿岸，水深在60~100公尺间，也会游至深远350公尺，甚至更深之水域，产卵时则洄游至浅海水域。",
            "en": "Ribbonfish generally inhabits oceanic waters, deep seas, sandy-mud bottoms, estuaries, and nearshore areas, typically at depths between 60 to 100 meters, but can swim to depths of 350 meters or deeper. During spawning, they migrate to shallower waters."
        },
        "position": { "left": 259.93, "top": 5280, "rotation": 13.47 }, // "left": 259.93, "top": 5168, "rotation": 13.47
        "size": { "width": 891, "height": 446 } 
    },
    {
        "id": 3,
        "name": {
            "zh": "瑇瑁",
            "en": "Hawksbill Turtle"
        },
        "scientificName": {
            "zh": "玳瑁",
            "en": "Eretmochelys imbricata"
        },
        "type": {
            "zh": "介部",
            "en": "Reptiles"
        },
        "species": {
            "zh": "龟鳖目 | 海龟科 | 玳瑁属 | 爬行动物",
            "en": "Testudines | Cheloniidae | Eretmochelys | Reptiles"
        },
        "protectionLevel": {
            "cites": {
                "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ。",
                "en": "Listed in Appendix I of the Convention on International Trade in Endangered Species (CITES)."
            },
            "iucn": {
                "zh": "列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：极危物种（CR）2008年评估。",
                "en": "Listed as Critically Endangered (CR) on the IUCN Red List of Threatened Species, assessed in 2008."
            },
            "china": {
                "zh": "列入《国家重点保护野生动物名录》一级。",
                "en": "Listed as a first-class protected species in China's National List of Key Protected Wildlife."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
                "zh": ["人类屠戮", "保护力度低"],
                "en": ["Human exploitation", "Low protection efforts"]
            },
            "state": {
                "zh": "在持续几千年的捕杀中，玳瑁无处藏身，\n在海里会撞上无所不在的渔网。",
                "en": "After centuries of hunting, the Hawksbill Turtle has no place to hide and often collides with ubiquitous fishing nets in the ocean."
            }
        },
        "distribution": {
            "zh": "全球分布于北纬45°至南纬38°的海域，玳瑁在大西洋、印度洋和太平洋的热带水域分布。",
            "en": "Found globally in oceanic waters between 45°N and 38°S latitude, the Hawksbill Turtle inhabits tropical waters of the Atlantic, Indian, and Pacific Oceans."
        },
        "description": {
            "zh": "瑇瑁，一般在海深18.3米以上的水域中活动，一生会在几片环境完全不同的栖息地生活。",
            "en": "The Hawksbill Turtle generally inhabits waters deeper than 18.3 meters and lives in several vastly different habitats throughout its life."
        },
        "image": `${process.env.PUBLIC_URL}/images/瑇瑁.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/瑇瑁.png`,
        "position": { "left": 242, "top": 3633 },
        "size": { "width": 750, "height": 750 }
    },
    {
        "id": 4,
        "name": {
            "zh": "海和尚",
            "en": "Leatherback Turtle"
        },
        "scientificName": {
            "zh": "棱皮龟",
            "en": "Dermochelys coriacea"
        },
        "type": {
            "zh": "介部",
            "en": "Reptiles"
        },
        "species": {
            "zh": "龟鳖目 | 棱皮龟科 | 棱皮龟属 | 爬行动物",
            "en": "Testudines | Dermochelyidae | Dermochelys | Reptiles"
        },
        "protectionLevel": {
            "iucn": {
                "zh": "列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：易危物种（VU）2013年评估。",
                "en": "Listed as Vulnerable (VU) on the IUCN Red List of Threatened Species, assessed in 2013."
            },
            "cites": {
                "zh": "列入《濒临绝种野生动植物国际贸易公约》一级。",
                "en": "Listed in Appendix I of the Convention on International Trade in Endangered Species (CITES)."
            },
            "china": {
                "zh": "列入《中国国家重点保护野生动物名录》一级。",
                "en": "Listed as a first-class protected species in China's National List of Key Protected Wildlife."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
                "zh": ["水体污染", "气候异常"],
                "en": ["Water pollution", "Climate anomalies"]
            },
            "state": {
                "zh": "棱皮龟最喜欢的食物是水母，\n因此获得“吃水母的潜艇”的别称。",
                "en": "The Leatherback Turtle's favorite food is jellyfish, earning it the nickname 'submarine that eats jellyfish.'"
            }
        },
        "distribution": {
            "zh": "棱皮龟在中国分布于广东、福建、江苏、辽宁、台湾、海南等附近的东海和南海海域，以及上海长江口外海域等地。",
            "en": "The Leatherback Turtle is found in Chinese waters around Guangdong, Fujian, Jiangsu, Liaoning, Taiwan, Hainan, and the East China Sea and South China Sea, as well as offshore areas near Shanghai's Yangtze River Estuary."
        },
        "image": `${process.env.PUBLIC_URL}/images/海和尚.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海和尚.png`,
        "description": {
            "zh": "海和尚，可以潜水到约1300米的深度，并且可以屏住呼吸长达85分钟。",
            "en": "The Leatherback Turtle can dive to depths of around 1300 meters and hold its breath for up to 85 minutes."
        },
        "position": { "left": 760, "top": 9444 },
        "size": { "width": 444, "height": 444 }
    },    
    {
        "id": 5,
        "name": {
            "zh": "海马",
            "en": "Seahorse"
        },
        "scientificName": {
            "zh": "海马",
            "en": "Hippocampus"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "海龙目 | 海龙科 | 海马属 | 暖海生小型鱼类统称",
            "en": "Syngnathiformes | Syngnathidae | Hippocampus | A general term for small warm-water fish"
        },
        "protectionLevel": {
            "iucn": {
                "zh": "共38种列入《世界自然保护联盟》（IUCN）2012年评估；濒危物种红色名录ver 3.1。",
                "en": "A total of 38 species listed in the 2012 assessment of the International Union for Conservation of Nature (IUCN); Endangered Species Red List ver 3.1."
            }
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "水体污染"],
                "en": ["Overfishing", "Water pollution"]
            },
            "state": {
                "zh": "海马行动迟缓，却能很有效率地捕捉到\n行动迅速、善于躲藏的桡足类生物。",
                "en": "Seahorses move slowly but are very efficient at catching fast-moving and elusive copepods."
            }
        },
        "distribution": {
            "zh": "海马分布在大西洋、欧洲、太平洋、澳大利亚。",
            "en": "Seahorses are found in the Atlantic Ocean, Europe, the Pacific Ocean, and Australia."
        },
        "image": `${process.env.PUBLIC_URL}/images/海马.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海马.png`,
        "description": {
            "zh": "海马，生殖期间群体会向较浅的海域移动，寻找较合适的生产环境，其生存水深约10~30米之间。",
            "en": "Seahorses move to shallower waters during breeding season to find more suitable environments, with a typical depth range of 10-30 meters."
        },
        "position": { "left": 1137, "top": 4105 },
        "size": { "width": 513, "height": 257 }
    },
    {
        "id": 6,
        "name": {
            "zh": "海蛇",
            "en": "Sea Snake"
        },
        "scientificName": {
            "zh": "海蛇",
            "en": "Sea Snake"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "蛇目 | 眼镜蛇科 | 海蛇亚科 | 海蛇动物统称",
            "en": "Serpentes | Elapidae | Hydrophiinae | A general term for sea snakes"
        },
        "protectionLevel": {
            "china": {
                "zh": "列入《中国物种红色名录》：易危（VU）。\n属于国家三有保护动物",
                "en": "Listed in the 'Chinese Species Red List' as Vulnerable (VU). A nationally protected species."
            }
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "水体污染"],
                "en": ["Overfishing", "Water pollution"]
            },
            "state": {
                "zh": "毒性大但不会攻击人类，\n中国的海蛇属于“三有保护动物”但无人关心它们死活。",
                "en": "Highly venomous but will not attack humans. Sea snakes in China are listed as 'protected animals', but no one cares about their survival."
            }
        },
        "distribution": {
            "zh": "海蛇在中国分布于广西、广东、海南、台湾、福建、江苏、浙江、山东等地沿海。",
            "en": "Sea snakes are distributed along the coasts of Guangxi, Guangdong, Hainan, Taiwan, Fujian, Jiangsu, Zhejiang, and Shandong in China."
        },
        "image": `${process.env.PUBLIC_URL}/images/海蛇.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海蛇.png`,
        "description": {
            "zh": "海蛇，喜欢在大陆架和海岛周围的浅水中栖息，在水深超过100米的开阔海域中很少见。它们有的喜欢呆在沙底或泥底的混水中，有些却喜欢在珊瑚礁周围的清水里活动。",
            "en": "Sea snakes prefer to inhabit shallow waters around the continental shelf and islands, and are rarely seen in open waters deeper than 100 meters. Some prefer sandy or muddy bottoms, while others like to swim in clear waters around coral reefs."
        },
        "position": { "left": 1243, "top": 4941 },
        "size": { "width": 355, "height": 355 }
    },    
    {
        "id": 7,
        "name": {
            "zh": "海獭",
            "en": "Otter"
        },
        "scientificName": {
            "zh": "水獭",
            "en": "Lutra"
        },
        "type": {
            "zh": "兽部",
            "en": "Mammal"
        },
        "species": {
            "zh": "食肉目 | 海獭科 | 海獭属 | 哺乳动物",
            "en": "Carnivora | Mustelidae | Lutra | Mammal"
        },
        "protectionLevel": {
            "cites": {
                "zh": "2023年列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ。",
                "en": "Listed in Appendix I of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) in 2023."
            },
            "iucn": {
                "zh": "2020年列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：近危物种（NT）。",
                "en": "Listed as Near Threatened (NT) on the IUCN Red List of Threatened Species in 2020."
            },
            "china": {
                "zh": "2021年列入《国家重点保护野生动物名录》：国家二级保护动物。",
                "en": "Listed as a National Second-Class Protected Animal in the List of Key Protected Wild Animals of China in 2021."
            }
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "缺少食物", "滩涂破坏"],
                "en": ["Overfishing", "Lack of food", "Coastal habitat destruction"]
            },
            "state": {
                "zh": "2017年，调查表明三种水獭在中国都处于灭绝的边缘。",
                "en": "A survey in 2017 showed that three species of otters were on the brink of extinction in China."
            }
        },
        "distribution": {
            "zh": "海獭在中国分布于东北、华东、东南等大部分地区。",
            "en": "Otters are found in most parts of China, including the northeast, east, and southeast."
        },
        "image": `${process.env.PUBLIC_URL}/images/海獭.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海獭.png`,
        "description": {
            "zh": "海獭，傍水而居，栖于江河、湖泊、溪流、沿海淡水区域等地带，在青藏高原可分布至海拔4000米以上的河流中。",
            "en": "Otters live near water and inhabit rivers, lakes, streams, and coastal freshwater areas. They can be found in rivers above 4000 meters on the Tibetan Plateau."
        },
        "position": { "left": 956, "top": 1988 },
        "size": { "width": 476, "height": 343 }
    },
    {
        "id": 8,
        "name": {
            "zh": "海铁树",
            "en": "Ironwood Coral"
        },
        "scientificName": {
            "zh": "柳珊瑚",
            "en": "Gorgonia"
        },
        "type": {
            "zh": "介部",
            "en": "Coral"
        },
        "species": {
            "zh": "珊瑚纲 | 柳珊瑚目 | 木珊瑚科",
            "en": "Anthozoa | Gorgonacea | Gorgoniidae"
        },
        "protectionLevel": {
            "cites": {
                "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ、附录Ⅱ、附录Ⅲ。",
                "en": "Listed in Appendix I, II, and III of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
                "zh": ["海底破坏", "过度捕捞"],
                "en": ["Seafloor destruction", "Overfishing"]
            },
            "state": {
                "zh": "拖网捕捞作业，把中国的近海海底几乎犁平，精美的柳珊瑚被连根兜断，让其他渔获挤得支离破碎。",
                "en": "Trawl fishing has nearly plowed the seafloor off China's coast, and the delicate gorgonian corals are uprooted, causing other marine life to be crushed."
            }
        },
        "distribution": {
            "zh": "现生的珊瑚礁主要分布在南北纬30度之间，热带和亚热带的浅水海域。",
            "en": "Living coral reefs are primarily found between latitudes 30°N and 30°S, in tropical and subtropical shallow seas."
        },
        "image": `${process.env.PUBLIC_URL}/images/海铁树.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海铁树.png`,
        "description": {
            "zh": "海铁树，栖息于水深15~20米的硬底上，或更深的珊瑚石和岩石上。",
            "en": "Ironwood coral lives on hard bottoms at depths of 15–20 meters, or deeper on coral stones and rocks."
        },
        "position": { "left": 1161, "top": 3094 },
        "size": { "width": 489, "height": 478 }
    },    
    {
        "id": 9,
        "name": {
            "zh": "海蜈蚣",
            "en": "Sea Centipede"
        },
        "scientificName": {
            "zh": "沙蚕",
            "en": "Echiura"
        },
        "type": {
            "zh": "虫部",
            "en": "Insecta"
        },
        "species": {
            "zh": "游走目 | 沙蚕科 | 沙蚕属 | 软体类动物",
            "en": "Errantia | Echiuridae | Echiura | Soft-bodied Animals"
        },
        "endangerment": {
            "level": 2,
            "reasons": {
                "zh": ["过度捕捞", "水体污染", "滩涂破坏"],
                "en": ["Overfishing", "Water Pollution", "Habitat Destruction"]
            },
            "state": {
                "zh": "禾虫对农药等污染相当敏感，\n而海边滩涂、稻田的减少又让它逃无可逃。",
                "en": "The Sea Centipede is very sensitive to pollution such as pesticides, and the reduction of coastal mudflats and rice fields leaves it with nowhere to escape."
            }
        },
        "distribution": {
            "zh": "沙蚕在中国福建、浙江、广东沿海有养殖。",
            "en": "The Echiura is farmed along the coasts of Fujian, Zhejiang, and Guangdong in China."
        },
        "image": `${process.env.PUBLIC_URL}/images/海蜈蚣.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海蜈蚣.png`,
        "description": {
            "zh": "海蜈蚣，多栖息于潮间带和潮下带(17～53m)软泥底。",
            "en": "The Sea Centipede mainly inhabits soft mud bottoms of the intertidal and subtidal zones (17–53m)."
        },
        "position": { "left": 1465, "top": 2160 },
        "size": { "width": 212, "height": 212 }
    },
    {
        "id": 10,
        "name": {
            "zh": "鲎",
            "en": "Horseshoe Crab"
        },
        "scientificName": {
            "zh": "中国鲎",
            "en": "Chinese Horseshoe Crab"
        },
        "type": {
            "zh": "介部",
            "en": "Crustacea"
        },
        "species": {
            "zh": "剑尾目 | 鲎科 | 鲎属 | 节肢动物",
            "en": "Xiphosura | Limulidae | Limulus | Arthropoda"
        },
        "protectionLevel": {
            "cites": {
                "zh": "2019年列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅱ。",
                "en": "Listed in Appendix II of CITES in 2019."
            },
            "iucn": {
                "zh": "2018年列入《世界自然保护联盟濒危物种红色名录》（IUCN）濒危物种（EN）。",
                "en": "Listed as Endangered (EN) in the IUCN Red List of Threatened Species in 2018."
            },
            "china": {
                "zh": "2021年列入《国家重点保护野生动物名录》：国家二级保护动物。",
                "en": "Listed as a national second-level protected species in the 2021 National Key Protected Wild Animals List."
            }
        },
        "endangerment": {
            "level": 4,
            "reasons": {
                "zh": ["滩涂破坏", "保护力度低", "商业捕杀"],
                "en": ["Habitat Destruction", "Low Protection Efforts", "Commercial Harvesting"]
            },
            "state": {
                "zh": "中国东南沿海地区的鲎曾经十分繁盛，\n但短短几十年，鲎的数量呈断崖式下降。",
                "en": "Horseshoe crabs were once abundant in the southeastern coastal regions of China, but their numbers have drastically declined in just a few decades."
            }
        },
        "distribution": {
            "zh": "原产地：中国、印度尼西亚、日本、马来西亚、菲律宾和越南。",
            "en": "Native to China, Indonesia, Japan, Malaysia, the Philippines, and Vietnam."
        },
        "image": `${process.env.PUBLIC_URL}/images/鲎.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/鲎.png`,
        "description": {
            "zh": "鲎，生活在水深40米到潮间带之间的沙质海底。",
            "en": "The Horseshoe Crab lives on sandy sea floors between 40 meters depth and the intertidal zone."
        },
        "position": { "left": 930, "top": 4337 },
        "size": { "width": 767, "height": 767 }
    },    
    {
        "id": 11,
        "name": { 
            "zh": "海鰌",
            "en": "Fin Whale"
        },
        "scientificName": {
            "zh": "露脊鲸",
            "en": "Balaenoptera physalus"
        },          
        "type": {
            "zh": "兽部",
            "en": "Mammal"
        },
        "species": {
            "zh": "偶蹄目 | 露脊鲸科 | 真露脊鲸 | 哺乳动物",
            "en": "Artiodactyla | Balaenopteridae | Fin Whale | Mammal"
        },
        "protectionLevel": {
            "cms": {
                "zh": "列入《保护野生动物迁徙物种公约》（CMS）附录Ⅰ。",
                "en": "Listed in Appendix I of the Convention on Migratory Species (CMS)."
            },           
            "iucn": {
                "zh": "列入《世界自然保护联盟濒危物种红色名录》（IUCN）黑露脊鲸为极危（CR），北太平洋露脊鲸为濒危（EN）",
                "en": "Listed as Critically Endangered (CR) for the Black Fin Whale and Endangered (EN) for the North Pacific Fin Whale in the IUCN Red List of Threatened Species."
            },
            "china": {
                "zh": "北太平洋露脊鲸被列入《国家重点保护野生动物名录》为国家一级保护动物。",
                "en": "The North Pacific Fin Whale is listed as a first-class protected animal in the National List of Key Protected Wild Animals of China."
            }
        },
        "endangerment": {
            "level": 4,
            "reasons": {
                "zh": ["人类屠戮", "船只碰撞", "商业捕杀"],
                "en": ["Human hunting", "Ship collisions", "Commercial whaling"]
            },
            "state": {
                "zh": "露脊鲸偏爱近海浅水区域，\n常靠近港口缓缓游动并在水面徘徊。",
                "en": "Fin Whales prefer shallow coastal areas and often swim slowly near ports, lingering at the water's surface."
            }
        },
        "distribution": {
            "zh": "露脊鲸在南北半球均有分布，在中国的南海、东海和黄海也能见到它们的身影。",
            "en": "Fin Whales are found in both the Northern and Southern Hemispheres, and can also be seen in the South China Sea, East China Sea, and Yellow Sea."
        },
        "image": `${process.env.PUBLIC_URL}/images/海鰌.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/海鰌.png`,
        "description": {
            "zh": "海鰌，偏爱近海浅水区域，常靠近港口缓缓游动并在水面徘徊。",
            "en": "The Fin Whale prefers shallow coastal areas and often swims slowly near ports, lingering at the water's surface."
        },
        "position": { "left": 328, "top": 2248 }, 
        "size": { "width": 969, "height": 318 }
    },    
    {
      "id": 12,
      "name": {
        "zh": "跨鲨",
        "en": "Humpback Whale"
      },
      "scientificName": {
        "zh": "座头鲸",
        "en": "Megaptera novaeangliae"
      },
      "type": {
        "zh": "兽部",
        "en": "Mammalia"
      },
      "species": {
        "zh": "鲸目 | 须鲸科 | 座头鲸属 | 哺乳动物",
        "en": "Cetacea | Balaenopteridae | Megaptera | Mammal"
      },
      "distribution": {
        "zh": "座头鲸在世界各大洋均有分布，尤以南极水域较多。在中国分布于黄海、东海、南海海域。",
        "en": "Humpback whales are distributed across the world's oceans, especially in Antarctic waters. In China, they are found in the Yellow Sea, East China Sea, and South China Sea."
      },
      "description": {
        "zh": "跨鲨，常将体躯跃出水面。",
        "en": "Humpback Whale, often breaches out of the water."
      },
      "protectionLevel": {
        "cms": {
          "zh": "列入《保护野生动物迁徙物种公约》（CMS）附录Ⅰ。",
          "en": "Listed in Appendix I of the Convention on the Conservation of Migratory Species of Wild Animals (CMS)."
        },
        "cites": {
          "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ。",
          "en": "Listed in Appendix I of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)."
        },
        "iucn": {
          "zh": "列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：无危物种（LC），2018年评估。",
          "en": "Listed as Least Concern (LC) on the IUCN Red List of Threatened Species (2018 assessment)."
        },
        "china": {
          "zh": "列入《中国物种红色名录》：极危（CR）。\n列入《国家重点保护野生动物名录》：国家二级保护动物。\n列入《中国国家重点保护野生动物名录》一级。",
          "en": "Listed as Critically Endangered (CR) in the China Species Red List.\nIncluded in the National Key Protected Wild Animal List as a Class II protected species.\nListed in China's National Key Protected Wild Animal List as Class I."
        }
      },
      "endangerment": {
        "level": 2,
        "reasons": {
          "zh": ["海滩搁浅", "船只碰撞", "商业捕杀"],
          "en": ["Beach strandings", "Ship collisions", "Commercial whaling"]
        },
        "state": {
          "zh": "全球捕鲸业导致鲸鱼数量锐减，\n每一代人总认为自己所处的世界才是正常的世界。",
          "en": "Global whaling has drastically reduced whale populations. Each generation assumes the world they inhabit is the normal one."
        }
      },
      "image": `${process.env.PUBLIC_URL}/images/跨鲨.png`,
      "actualImage": `${process.env.PUBLIC_URL}/actual-images/跨鲨.png`,
      "position": { "left": 260, "top": 1470 },
      "size": { "width": 1095, "height": 426 },
    },
    {
        "id": 13,
        "name": {
            "zh": "锯鲨",
            "en": "Sawshark"
        },
        "scientificName": {
            "zh": "锯鳐",
            "en": "Pristiophorus"
        },
        "type": {
            "zh": "鳞部",
            "en": "Cartilaginous Fish"
        },
        "species": {
            "zh": "锯鳐目 | 锯鳐科 | 锯鳐属 | 软骨鱼类",
            "en": "Pristiformes | Pristiophoridae | Pristiophorus | Cartilaginous fish"
        },
        "protectionLevel": {
            "cites": {
                "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ。",
                "en": "Listed in CITES Appendix I of the Convention on International Trade in Endangered Species of Wild Fauna and Flora."
            },
            "iucn": {
                "zh": "2012年昆士兰锯鳐、尖齿锯鳐列入《世界自然保护联盟濒危物种红色名录》（IUCN）濒危物种（EN）\n2012年绿锯鳐列、栉齿锯鳐、大齿锯鳐列入IUCN极危物种（CR）。\n2013年小齿锯鳐、普通锯鳐列为IUCN极危物种（CR）",
                "en": "In 2012, Queensland sawshark and sharpnose sawshark were listed as Endangered (EN) on the IUCN Red List.\nIn 2012, green sawshark, banded sawshark, and large-tooth sawshark were listed as Critically Endangered (CR) on the IUCN Red List.\nIn 2013, small-tooth sawshark and common sawshark were classified as Critically Endangered (CR) on the IUCN Red List."
            }
        },
        "endangerment": {
            "level": 4,
            "reasons": {
                "zh": ["过度捕捞", "水体污染"],
                "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
                "zh": "地中海的锯鳐已经消失，锯鳐被迫发展出了孤雌生殖的技能，\n然而这种后代体格会很脆弱。",
                "en": "Sawsharks have disappeared from the Mediterranean, and have developed parthenogenesis, where females reproduce without males. However, the offspring from such reproduction are often weak."
            }
        },
        "distribution": {
            "zh": "锯鳐一般栖息于热带及亚热带浅水区，有些物种的锯鳐完全栖息在河口或河流上游。",
            "en": "Sawsharks generally inhabit tropical and subtropical shallow waters, with some species residing exclusively in estuaries or upstream rivers."
        },
        "image": `${process.env.PUBLIC_URL}/images/锯鲨.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/锯鲨.png`,
        "description": {
            "zh": "锯鲨，有些生活在近岸海区和江、河、湖泊的河口，栖息于水深不超过10米的浅水区域，有些进入江、河、湖泊等淡水环境中生活。",
            "en": "Some sawsharks live in nearshore marine areas and estuaries of rivers, lakes, and reservoirs, inhabiting shallow waters no deeper than 10 meters. Some species even enter freshwater environments."
        },
        "position": { "left": 282, "top": 2698 },
        "size": { "width": 594, "height": 294 }
    },
    {
        "id": 14,
        "name": {
            "zh": "鲈鳗",
            "en": "Moray eel"
        },
        "scientificName": {
            "zh": "花鳗鲡",
            "en": "Gymnothorax favagineus"
        },
        "type": {
            "zh": "鳞部",
            "en": "Fish"
        },
        "species": {
            "zh": "鳗鲡目 | 鳗鲡科 | 鳗鲡属 | 鱼类",
            "en": "Anguilliformes | Muraenidae | Gymnothorax | Fish"
        },
        "protectionLevel": {
            "cms": {
                "zh": "列入《保护野生动物迁徙物种公约》（CMS）附录Ⅰ。",
                "en": "Listed in CMS Appendix I of the Convention on Migratory Species of Wild Animals."
            },
            "cites": {
                "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ。",
                "en": "Listed in CITES Appendix I of the Convention on International Trade in Endangered Species of Wild Fauna and Flora."
            },
            "iucn": {
                "zh": "2018年列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：无危物种（LC）。",
                "en": "In 2018, listed as Least Concern (LC) on The IUCN Red List."
            },
            "china": {
                "zh": "列入《中国生物多样性红色名录——脊椎动物卷》（爬行类）：濒危（EN）。\n列入《中国国家重点保护野生动物名录》二级。\n列入《中国濒危动物红皮书》——濒危（EN）",
                "en": "Listed as Endangered (EN) in the China Red List of Biodiversity (Vertebrates volume). \nListed as a Level II National Key Protected Wild Animal in China. \nListed as Endangered (EN) in the China Red Data Book of Endangered Animals."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
                "zh": ["水体污染", "海岸开发"],
                "en": ["Water Pollution", "Coastal Development"]
            },
            "state": {
                "zh": "性情凶猛，体壮而有力；\n白昼隐伏于洞穴及石隙中，夜间外出活动。",
                "en": "Aggressive and strong-bodied, they hide in caves and crevices during the day and are active at night."
            }
        },
        "distribution": {
            "zh": "花鳗鲡主要分布于太平洋、印度洋的中低纬度水域及其通海的河流。",
            "en": "Gymnothorax favagineus is mainly found in the mid- to low-latitude waters of the Pacific and Indian Oceans, as well as the rivers that connect to these seas."
        },
        "image": `${process.env.PUBLIC_URL}/images/鲈鳗.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/鲈鳗.png`,
        "description": {
            "zh": "鲈鳗，产卵在水域中层，水深为300～500米，盐度35以上。",
            "en": "The moray eel spawns in mid-water layers, at depths of 300-500 meters, with a salinity above 35."
        },
        "position": { "left": 716, "top": 8082 },
        "size": { "width": 578, "height": 289 }
    },
    {
        "id": 15,
        "name": {
            "zh": "牡蛎",
            "en": "Oyster"
        },
        "scientificName": {
            "zh": "牡蛎礁",
            "en": "Oyster Reef"
        },
        "type": {
            "zh": "介部",
            "en": "Bivalve"
        },
        "species": {
            "zh": "双壳纲 | 珍珠贝目 | 牡蛎科 | 软体动物",
            "en": "Bivalvia | Ostreoida | Ostreidae | Mollusca"
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["海岸开发", "保护力度低", "水体污染"],
            "en": ["Coastal development", "Low conservation efforts", "Water pollution"]
            },
            "state": {
            "zh": "全球85%的牡蛎礁已经退化或消失，\n是全球退化最严重的海洋栖息地之一。",
            "en": "85% of the world's oyster reefs have degraded or disappeared, making it one of the most severely degraded marine habitats globally."
            }
        },
        "distribution": {
            "zh": "牡蛎呈世界性分布，在全世界约有一百余种，中国南北沿海地区约有二十余种。",
            "en": "Oysters have a global distribution, with over a hundred species worldwide, and about twenty species along the coasts of China."
        },
        "image": `${process.env.PUBLIC_URL}/images/牡蛎.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/牡蛎.png`,
        "description": {
            "zh": "牡蛎，从半咸水到海水，从潮间带到低潮线以下10多米深的海底均有牡蛎的踪迹。",
            "en": "Oysters can be found in brackish to seawater, from the intertidal zone to depths of over 10 meters below the low tide line."
        },
        "position": { "left": 1349, "top": 1967 },
        "size": { "width": 147, "height": 147 }
    },
    {
        "id": 16,
        "name": {
            "zh": "泥翅",
            "en": "Mud Wings"
        },
        "scientificName": {
            "zh": "海鳃",
            "en": "Sea Gills"
        },
        "type": {
            "zh": "虫部",
            "en": "Insecta"
        },
        "species": {
            "zh": "珊瑚纲 | 海鸡冠亚纲 | 八射珊瑚目 | 海笔",
            "en": "Anthozoa | Octocorallia | Alcyonacea | Pennatulacea"
        },
        "endangerment": {
            "level": 2,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water pollution"]
            },
            "state": {
            "zh": "5~6亿年前，地球上第一批复杂的多细胞动物中，\n有好多生物都跟海鳃长得一样。",
            "en": "5 to 6 hundred million years ago, many of the first complex multicellular animals on Earth resembled sea gills."
            }
        },
        "distribution": {
            "zh": "海鳃于世界分布，见于全世界热带及温带。",
            "en": "Sea gills are found worldwide, in both tropical and temperate regions."
        },
        "image": `${process.env.PUBLIC_URL}/images/泥翅.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/泥翅.png`,
        "description": {
            "zh": "泥翅，见于由潮间带到水深6100米的海域。",
            "en": "Mud Wings are found from the intertidal zone to depths of 6100 meters in marine environments."
        },
        "position": { "left": 260, "top": 2134 },
        "size": { "width": 179, "height": 179 }
    },
    {
        "id": 17,
        "name": {
            "zh": "泥钉",
            "en": "Mud Nail"
        },
        "scientificName": {
            "zh": "弓形革囊星虫",
            "en": "Arcuate Leather Sac Starworm"
        },
        "type": {
            "zh": "虫部",
            "en": "Insect"
        },
        "species": {
            "zh": "革囊星虫目 | 革囊星虫科 | 革囊星虫属 | 昆虫",
            "en": "Leather Sac Starworm | Leather Sac Starworm | Leather Sac Starworm | Insects"
        },
        "endangerment": {
            "level": 2,
            "reasons": {
            "zh": ["滩涂破坏", "水体污染", "填海造陆"],
            "en": ["Mudflat Destruction", "Water Pollution", "Land Reclamation"]
            },
            "state": {
            "zh": "曾经整个东南沿海有大量泥钉，\n而为美观将滩涂填上纯净海沙导致其数量大减。",
            "en": "There used to be a large number of Mud Nails along the entire southeastern coast, but their numbers greatly decreased due to the filling of mudflats with clean sea sand for aesthetic purposes."
            }
        },
        "distribution": {
            "zh": "泥钉在中国分布于东南沿海，浙江、福建、广西、广东、海南岛。",
            "en": "Mud Nails are distributed along the southeastern coast of China, including Zhejiang, Fujian, Guangxi, Guangdong, and Hainan Island."
        },
        "image": `${process.env.PUBLIC_URL}/images/泥钉.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/泥钉.png`,
        "description": {
            "zh": "泥钉，多栖息在高潮区和潮上带盐碱性草类丛生的泥砂中。",
            "en": "Mud Nails are often found in muddy sands in the high tide zone and in the brackish grasslands of the intertidal zone."
        },
        "position": { "left": 668, "top": 1933 },
        "size": { "width": 198, "height": 198 }
    },
    {
        "id": 18,
        "name": {
            "zh": "七里香",
            "en": "Seven Miles Fragrance"
        },
        "scientificName": {
            "zh": "海龙",
            "en": "Seahorse"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scaleless"
        },
        "species": {
            "zh": "刺鱼目 | 海龙科 | 海龙属 | 小型海洋鱼类",
            "en": "Syngnathiformes | Syngnathidae | Hippocampus | Small Marine Fish"
        },
        "endangerment": {
            "level": 2,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
            "zh": "海龙善于伪装和藏匿，常常通过模拟生存\n环境中海草或大型藻类的形态。",
            "en": "The seahorse is skilled in camouflage and hiding, often mimicking the shape of sea grass or large algae in its environment."
            }
        },
        "distribution": {
            "zh": "主产于广东阳江、惠阳、宝安、海丰，辽宁大连、旅顺、庄河等地。",
            "en": "Mainly produced in Yangjiang, Huiyang, Bao'an, Haifeng in Guangdong, and Dalian, Lüshun, and Zhuanghe in Liaoning."
        },
        "image": `${process.env.PUBLIC_URL}/images/七里香.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/七里香.png`,
        "description": {
            "zh": "七里香，对环境条件的要求较严格，水温需在12~23℃之间，水深不得超过50米，但其活动范围常常在水下的8~12米处。",
            "en": "Seven Miles Fragrance has strict environmental requirements, with water temperature between 12-23°C, and depth not exceeding 50 meters. However, its activity range is often between 8-12 meters underwater."
        },
        "position": { "left": 1135, "top": 2614 },
        "size": { "width": 440, "height": 440 }
    },
    {
        "id": 19,
        "name": {
            "zh": "人鱼",
            "en": "Manatee"
        },
        "scientificName": {
            "zh": "儒艮",
            "en": "Dugong"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "海牛目 | 儒艮科 | 儒艮属 | 哺乳动物",
            "en": "Sirenia | Dugongidae | Dugong | Mammal"
        },
        "protectionLevel": { 
            "cites": {
                "zh": "2019年列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅰ，相关国际贸易被明确禁止。",
                "en": "Listed in Appendix I of the CITES Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) in 2019, international trade is strictly prohibited."
            },
            "iucn": {
                "zh": "2015年列入《世界自然保护联盟濒危物种红色名录》（IUCN）：易危物种（VU）",
                "en": "Listed as Vulnerable (VU) in the IUCN Red List of Threatened Species in 2015."
            },
            "china": {
                "zh": "列入《中国物种红色名录》：极危（CR）。\n列入《国家重点保护野生动物名录》：国家二级保护动物。\n列入《中国国家重点保护野生动物名录》一级。",
                "en": "Listed as Critically Endangered (CR) in the China Species Red List. \nListed in the National Key Protected Wildlife List as a Class II protected species.\nListed as a first-class species in the China National Key Protected Wildlife List."
            }
        },
        "endangerment": {
            "level": 5,
            "reasons": {
                "zh": ["过度捕捞", "水体污染"],
                "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
                "zh": "中国是儒艮分布的北界，只在海南、广西、\n广东和台湾曾经有零星分布，爱吃海草。",
                "en": "China is the northernmost distribution range of the dugong, with sporadic occurrences only in Hainan, Guangxi, Guangdong, and Taiwan. They are fond of eating seagrass."
            }
        },
        "distribution": {
            "zh": "儒艮主要分布在南北纬15°之间的热带和亚热带港湾及浅滩中。",
            "en": "Dugongs are primarily found in tropical and subtropical bays and shallow waters between 15° north and south latitude."
        },
        "image": `${process.env.PUBLIC_URL}/images/人鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/人鱼.png`,
        "description": {
            "zh": "人鱼，饱食后通常潜入30~40米的海底，仅偶尔出水换气。",
            "en": "Manatees usually dive to depths of 30-40 meters after feeding, surfacing only occasionally for air."
        },
        "position": { "left": 801, "top": 4632 },
        "size": { "width": 408, "height": 408 }
    },
    {
        "id": 20,
        "name": {
            "zh": "石首鱼",
            "en": "Stonehead Fish"
        },
        "scientificName": {
            "zh": "大黄鱼",
            "en": "Large Yellow Croaker"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "鲈形目 | 石首鱼科 | 黄鱼属 | 鱼类",
            "en": "Perciformes | Sciaenidae | Pseudosciaena | Fish"
        },
        "protectionLevel": { 
            "iucn": {
                "zh": "2016年列入《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）：极危物种（CR）。",
                "en": "Listed as Critically Endangered (CR) in the IUCN Red List of Threatened Species in 2016."
            }
        },
        "endangerment": {
            "level": 4,
            "reasons": {
                "zh": ["过度捕捞", "人类屠戮", "商业捕杀"],
                "en": ["Overfishing", "Human Slaughter", "Commercial Harvesting"]
            },
            "state": {
                "zh": "明嘉靖年间，潮州人发明“敲罟”捕鱼法，\n这种捕鱼方法让大黄鱼几乎绝种。",
                "en": "In the Ming Dynasty, the people of Chaozhou invented the 'knock fishing' method, which nearly caused the extinction of the large yellow croaker."
            }
        },
        "distribution": {
            "zh": "分布于西北太平洋区，包括中国、日本、韩国、越南沿海；在中国分布于黄海南部、东海。",
            "en": "Distributed in the Northwestern Pacific region, including the coasts of China, Japan, South Korea, and Vietnam; in China, it is found in the southern part of the Yellow Sea and the East China Sea."
        },
        "image": `${process.env.PUBLIC_URL}/images/石首鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/石首鱼.png`,
        "description": {
            "zh": "石首鱼，栖息于水深60米以内的软泥或泥沙底质海域。",
            "en": "The stonehead fish inhabits soft mud or sandy bottom marine areas at depths of up to 60 meters."
        },
        "position": { "left": 345, "top": 4941 },
        "size": { "width": 396, "height": 198 }
    },
    {
        "id": 21,
        "name": {
            "zh": "鲥鱼",
            "en": "Shad"
        },
        "scientificName": {
            "zh": "鲥鱼",
            "en": "Alosa sapidissima"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "鲱形目 | 鲱科 | 鲥属 | 鱼类",
            "en": "Clupeiformes | Clupeidae | Alosa | Fish"
        },
        "protectionLevel": {
            "iucn": {
            "zh": "2017年列入《世界自然保护联盟濒危物种红色名录》（IUCN）：数据缺乏（DD）",
            "en": "Listed in the IUCN Red List of Threatened Species in 2017: Data Deficient (DD)"
            },
            "china": {
            "zh": "1998年列入《中国濒危动物红皮书·鱼类》国家一级保护动物。",
            "en": "Listed as a national first-class protected animal in the 'Red Book of Endangered Animals of China – Fish' in 1998."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["过度捕捞", "水体污染", "海岸开发"],
            "en": ["Overfishing", "Water pollution", "Coastal development"]
            },
            "state": {
            "zh": "鲥鱼已死，目前鲥鱼只有东南亚进口的长尾鲥和美国西鲱。",
            "en": "The Shad is extinct, and currently, only the long-tailed shad imported from Southeast Asia and the American hickory shad remain."
            }
        },
        "distribution": {
            "zh": "鲥分布于中国黄海、东海、南海沿岸和珠江、钱塘江、长江等水域。",
            "en": "Shad is found along the coasts of the Yellow Sea, East China Sea, South China Sea, and in waters like the Pearl River, Qiantang River, and Yangtze River."
        },
        "image": `${process.env.PUBLIC_URL}/images/鲥鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/鲥鱼.png`,
        "description": {
            "zh": "鲥鱼，一般栖息在水深30~200米的岩礁地带。",
            "en": "Shad typically inhabits rocky reef areas at depths of 30 to 200 meters."
        },
        "position": { "left": 796, "top": 7016 },
        "size": { "width": 372, "height": 372 }
    },
    {
        "id": 22,
        "name": {
            "zh": "云头鲨",
            "en": "Clouded Shark"
        },
        "scientificName": {
            "zh": "路氏双髻鲨",
            "en": "Lamiopsis liui"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scales"
        },
        "species": {
            "zh": "真鲨目 | 双髻鲨科 | 双髻鲨属 | 鱼类",
            "en": "Carcharhiniformes | Sphyrnidae | Sphyrna | Fish"
        },
        "protectionLevel": {
            "cites": {
            "zh": "列入《华盛顿公约》 附录Ⅱ级保护动物。\n列入2019年《濒危野生动植物种国际贸易公约》CITES附录Ⅱ",
            "en": "Listed in Appendix II of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES).\nListed in the 2019 CITES Appendix II."
            },
            "iucn": {
            "zh": "2018年列入《世界自然保护联盟濒危物种红色名录》（IUCN）：极度濒危物种（CR）。",
            "en": "Listed as Critically Endangered (CR) in the IUCN Red List of Threatened Species in 2018."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water pollution"]
            },
            "state": {
            "zh": "近年来捕捞业的发展让双髻鲨数量急剧下降，\n其“误捕”问题目前几乎无解。",
            "en": "In recent years, the development of the fishing industry has caused a dramatic decline in the population of the clouded shark, and its 'bycatch' issue is currently nearly unsolvable."
            }
        },
        "distribution": {
            "zh": "分布于热带、亚热带和温带各海区。",
            "en": "Distributed in tropical, subtropical, and temperate seas."
        },
        "image": `${process.env.PUBLIC_URL}/images/云头鲨.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/云头鲨.png`,
        "description": {
            "zh": "云头鲨，通常被发现于近岸海洋水域以及近海深度80米（230英尺），包括大陆架和岛屿梯田。",
            "en": "Clouded shark is typically found in nearshore marine waters at depths of up to 80 meters (230 feet), including continental shelves and island terraces."
        },
        "position": { "left": 1000, "top": 5600, "rotation": 73.28 }, // "left": 1000, "top": 5346.55, "rotation": 73.28
        "size": { "width": 839.89, "height": 419.95 }
    },
    {
        "id": 23,
        "name": {
            "zh": "黄昏鲨",
            "en": "Dusk Shark"
        },
        "scientificName": {
            "zh": "无沟双髻鲨",
            "en": "No-Groove Hammerhead Shark"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scaleless"
        },
        "species": {
            "zh": "真鲨目 | 双髻鲨科 | 双髻鲨属 | 鱼类",
            "en": "Carcharhiniformes | Sphyrnidae | Sphyrna | Fish"
        },
        "protectionLevel": {
            "cms": {
            "zh": "2014年列入《保护迁徙野生动物物种公约》（CMS）附录Ⅱ。",
            "en": "Listed in Appendix II of the Convention on Migratory Species (CMS) in 2014."
            },
            "cites": {
            "zh": "列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅱ。",
            "en": "Listed in Appendix II of the Convention on International Trade in Endangered Species (CITES)."
            },
            "iucn": {
            "zh": "2018年列入《世界自然保护联盟濒危物种红色名录》（IUCN）极危物种（CR）。",
            "en": "Listed as Critically Endangered (CR) in the IUCN Red List of Threatened Species in 2018."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
            "zh": "虽然未经野生动物主管部门许可不得出售，\n但公约生效后双髻鲨仍然还在被贩卖。",
            "en": "Although it is illegal to sell without permission from wildlife authorities, hammerhead sharks are still being sold after the convention came into effect."
            }
        },
        "distribution": {
            "zh": "分布于热带、亚热带和温带各海区。",
            "en": "Distributed in tropical, subtropical, and temperate sea areas."
        },
        "image": `${process.env.PUBLIC_URL}/images/黄昏鲨.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/黄昏鲨.png`,
        "description": {
            "zh": "黄昏鲨，水深0~275米。",
            "en": "Dusk Shark, found at depths of 0-275 meters."
        },
        "position": { "left": 695, "top": 6012 },
        "size": { "width": 619, "height": 619 }
    },
    {
        "id": 24,
        "name": {
            "zh": "双髻鲨",
            "en": "Hammerhead Shark"
        },
        "scientificName": {
            "zh": "锤头双髻鲨",
            "en": "Hammerhead Shark"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scaleless"
        },
        "species": {
            "zh": "真鲨目 | 双髻鲨科 | 双髻鲨属 | 鱼类",
            "en": "Carcharhiniformes | Sphyrnidae | Sphyrna | Fish"
        },
        "protectionLevel": {
            "cites": {
            "zh": "2013年列入《濒临绝种野生动植物国际贸易公约》（CITES）附录Ⅱ。",
            "en": "Listed in Appendix II of the Convention on International Trade in Endangered Species (CITES) in 2013."
            },
            "iucn": {
            "zh": "2018年列入《世界自然保护联盟濒危物种红色名录》（IUCN）：易危物种（VU）。\n列入《濒危野生动植物种国际贸易公约》2019年版附录Ⅱ",
            "en": "Listed as Vulnerable (VU) in the IUCN Red List of Threatened Species in 2018. Listed in Appendix II of the 2019 CITES."
            }
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
            "zh": "双髻鲨喜欢聚成庞大的群体迁徙，\n因此双髻鲨很容易被渔网一锅端。",
            "en": "Hammerhead sharks tend to migrate in large groups, making them easy targets for fishing nets."
            }
        },
        "distribution": {
            "zh": "分布于热带、亚热带和温带各海区。",
            "en": "Distributed in tropical, subtropical, and temperate sea areas."
        },
        "image": `${process.env.PUBLIC_URL}/images/双髻鲨.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/双髻鲨.png`,
        "description": {
            "zh": "双髻鲨，一般在浅于20米深处出没，但最深可达到200米。",
            "en": "Hammerhead sharks are usually found in waters shallower than 20 meters, but can reach depths of up to 200 meters."
        },
        "position": { "left": 600, "top": 3250, "rotation": -22.5 }, // "left": 495, "top": 3410.3, "rotation": -22.5
        "size": { "width": 675, "height": 675 }
    },
    {
        "id": 25,
        "name": {
            "zh": "水沫鱼",
            "en": "Foam Fish"
        },
        "scientificName": {
            "zh": "鳗鲡目鱼（柳叶状幼体）",
            "en": "Anguilliform Fish (Lanceolate Larvae)"
        },
        "type": {
            "zh": "鳞部",
            "en": "Scaleless"
        },
        "species": {
            "zh": "鳗鲡目 | 鳗鲡科 | 鳗鲡属 | 鱼类",
            "en": "Anguilliformes | Anguillidae | Anguilla | Fish"
        },
        "protectionLevel": {
            "zh": "世界自然保护联盟将日本鳗鲡归为“濒危灭绝种1B类”。",
            "en": "The IUCN classifies the Japanese eel as 'Endangered, Extinct in the Wild 1B'."
        },
        "endangerment": {
            "level": 3,
            "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water Pollution"]
            },
            "state": {
            "zh": "人类过度捕捞野生鳗鱼，日本鳗鲡成了濒危物种，\n欧洲鳗鲡更属极危物种。",
            "en": "Overfishing of wild eels has caused the Japanese eel to become endangered, and the European eel is even more critically endangered."
            }
        },
        "distribution": {
            "zh": "世界各地均有分布。",
            "en": "Found worldwide."
        },
        "image": `${process.env.PUBLIC_URL}/images/水沫鱼.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/水沫鱼.png`,
        "description": {
            "zh": "水沫鱼，在大洋随洋流长距离漂游。",
            "en": "Foam fish drift long distances in the ocean's currents."
        },
        "position": { "left": 1432, "top": 2502 },
        "size": { "width": 245, "height": 245 }
    },
    {
        "id": 26,
        "name": {
          "zh": "四腮鲈",
          "en": "Four-gill Bass"
        },
        "scientificName": {
          "zh": "松江鲈",
          "en": "Siniperca chuatsi"
        },
        "type": {
          "zh": "鳞部",
          "en": "Scaleless"
        },
        "species": {
          "zh": "鲉形目 | 杜父鱼科 | 松江鲈属 | 鱼类",
          "en": "Perciformes | Cichlidae | Siniperca genus | Fish"
        },
        "protectionLevel": {
          "zh": "松江鲈属中国国家二级保护动物，目前已禁止捕捞。",
          "en": "Siniperca is a national second-level protected species in China, and fishing is now prohibited."
        },
        "endangerment": {
          "level": 3,
          "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water pollution"]
          },
          "state": {
            "zh": "康熙年间松江鲈数量极多，时常出现大型个体,\n而今天的松江鲈种群衰弱，个体只能长到15厘米。",
            "en": "During the Kangxi period, the number of Siniperca was abundant, often with large individuals. However, today the population has weakened, and individuals only grow to 15 cm."
          }
        },
        "distribution": {
          "zh": "分布于中国、菲律宾、朝鲜半岛（西侧和南侧）、日本（九州岛西北侧的福冈、佐贺及有明湾）。",
          "en": "Distributed in China, the Philippines, the Korean Peninsula (west and south sides), and Japan (northwest side of Kyushu Island in Fukuoka, Saga, and Ariake Bay)."
        },
        "image": `${process.env.PUBLIC_URL}/images/四腮鲈.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/四腮鲈.png`,
        "description": {
          "zh": "四腮鲈，栖息于浅海、河口和淡水的江河湖泊等多种水域（水深0~25米）。",
          "en": "The Four-gill Bass inhabits shallow seas, estuaries, and freshwater rivers and lakes at depths of 0-25 meters."
        },
        "position": { "left": 398, "top": 3444 },
        "size": { "width": 289, "height": 289 }
    },
    {
        "id": 27,
        "name": {
          "zh": "土鳖",
          "en": "Mudflat Snail"
        },
        "scientificName": {
          "zh": "石磺",
          "en": "Cerithidea"
        },
        "type": {
          "zh": "虫部",
          "en": "Insecta"
        },
        "species": {
          "zh": "腹足纲 | 石磺科 | 石磺属 | 无壳贝类",
          "en": "Gastropoda | Cerithiidae | Cerithidea genus | Shell-less mollusks"
        },
        "endangerment": {
          "level": 2,
          "reasons": {
            "zh": ["过度捕捞", "水体污染", "滩涂破坏"],
            "en": ["Overfishing", "Water pollution", "Mudflat destruction"]
          },
          "state": {
            "zh": "中国有六七种石磺，都生活在海滨潮间带，\n目前石磺数量大减，需要人工繁殖放流。",
            "en": "There are six or seven species of Cerithidea in China, all living in the intertidal zones along the coast. Currently, the population has greatly decreased and requires artificial breeding and release."
          }
        },
        "distribution": {
          "zh": "石磺广泛分布于印度——太平洋沿岸的河口海域，在中国则多分布于东海和南海。",
          "en": "Cerithidea is widely distributed along the estuarine coasts of the Indo-Pacific, and in China, it is mainly found in the East China Sea and the South China Sea."
        },
        "image": `${process.env.PUBLIC_URL}/images/土鳖.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/土鳖.png`,
        "description": {
          "zh": "土鳖，常栖息于河口性沿岸带的岩石、泥滩、芦苇丛和红树林的沼泽地中。",
          "en": "The Mudflat Snail often inhabits rocky, muddy shores, reed beds, and mangrove swamps in the estuarine coastal zones."
        },
        "position": { "left": 1503, "top": 1209 },
        "size": { "width": 157, "height": 157 }
    },
    {
        "id": 28,
        "name": {
          "zh": "腽肭脐",
          "en": "Spotted Seal"
        },
        "scientificName": {
          "zh": "斑海豹",
          "en": "Phoca vitulina"
        },
        "type": {
          "zh": "兽部",
          "en": "Mammals"
        },
        "species": {
          "zh": "食肉目 | 海豹科 | 海豹属 | 哺乳动物",
          "en": "Carnivora | Phocidae | Phoca genus | Mammal"
        },
        "protectionLevel": {
          "iucn": {
            "zh": "列入《世界自然保护联盟濒危物种红色名录》（IUCN）：数据缺乏（DD）。",
            "en": "Listed in the IUCN Red List of Threatened Species: Data Deficient (DD)."
          },
          "china": {
            "zh": "列入《中国国家重点保护野生动物名录》一级。",
            "en": "Listed as a first-class protected animal in the 'China National Key Protected Wildlife List'."
          }
        },
        "endangerment": {
          "level": 3,
          "reasons": {
            "zh": ["过度捕捞", "水体污染"],
            "en": ["Overfishing", "Water pollution"]
          },
          "state": {
            "zh": "近几年中国的斑海豹得到了一定的保护,\n欧盟、美国、俄罗斯都禁止了海豹制品进口。",
            "en": "In recent years, the spotted seal in China has received some protection. The EU, USA, and Russia have banned the import of seal products."
          }
        },
        "distribution": {
          "zh": "斑海豹在中国主要分布于渤海和黄海，偶见于南海。",
          "en": "The spotted seal is mainly distributed in the Bohai Sea and Yellow Sea in China, occasionally found in the South China Sea."
        },
        "image": `${process.env.PUBLIC_URL}/images/腽肭脐.png`,
        "actualImage": `${process.env.PUBLIC_URL}/actual-images/腽肭脐.png`,
        "description": {
          "zh": "腽肭脐，栖息的水深主要在20~40米之间。",
          "en": "The spotted seal inhabits waters primarily at depths of 20-40 meters."
        },
        "position": { "left": 450, "top": 4360, "rotation": 17.63 }, // "left": 504.47, "top": 4293, "rotation": 17.63
        "size": { "width": 593, "height": 302 }
    }      
];