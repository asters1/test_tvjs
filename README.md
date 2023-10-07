```json
{
  "class": [
    {
      // 分类
      "type_id": "dianying", // 分类id
      "type_name": "电影" // 分类名
    },
    {
      "type_id": "lianxuju",
      "type_name": "连续剧"
    }
  ],
  "filters": {
    // 筛选
    "dianying": [
      {
        // 分类id 就是上面class中的分类id
        "key": "0", // 筛选key
        "name": "分类", // 筛选名称
        "value": [
          {
            // 筛选选项
            "n": "全部", // 选项展示的名称
            "v": "dianying" // 选项最终在url中的展现
          },
          {
            "n": "动作片",
            "v": "dongzuopian"
          }
        ]
      }
    ],
    "lianxuju": [
      {
        "key": 0,
        "name": "分类",
        "value": [
          {
            "n": "全部",
            "v": "lianxuju"
          },
          {
            "n": "国产剧",
            "v": "guochanju"
          },
          {
            "n": "港台剧",
            "v": "gangtaiju"
          }
        ]
      }
    ]
  }
}
```

```json
{
  "page": 1, // 当前页
  "pagecount": 2, // 总共几页
  "limit": 60, // 每页几条数据
  "total": 120, // 总共多少调数据
  "list": [
    {
      // 视频列表 下面的视频结构 同上面homeContent中的
      "vod_id": "1897",
      "vod_name": "北区侦缉队",
      "vod_pic": "https://pic.imgdb.cn/item/6145d4b22ab3f51d91bd98b6.jpg",
      "vod_remarks": "7.3"
    },
    {
      "vod_id": "1879",
      "vod_name": "浪客剑心 最终章 人诛篇",
      "vod_pic": "https://pic.imgdb.cn/item/60e3f37e5132923bf82ef95e.jpg",
      "vod_remarks": "8.0"
    }
  ]
}
```

```json
{
  "list": [
    {
      "vod_id": "1902",
      "vod_name": "海岸村恰恰恰",
      "vod_pic": "https://pic.imgdb.cn/item/61463fd12ab3f51d91a0f44d.jpg",
      "type_name": "剧情",
      "vod_year": "2021",
      "vod_area": "韩国",
      "vod_remarks": "更新至第8集",
      "vod_actor": "申敏儿,金宣虎,李相二,孔敏晶,徐尚沅,禹美华,朴艺荣,李世亨,边胜泰,金贤佑,金英玉",
      "vod_director": "柳济元",
      "vod_content": "海岸村恰恰恰剧情:　　韩剧海岸村恰恰恰 갯마을 차차차改编自2004年的电影《我的百事通男友洪班长》，海岸村恰恰恰 갯마을 차차차讲述来自大都市的牙医（申敏儿 饰）到充满人情味的海岸村开设牙医诊所，那里住着一位各方面都",
      // 播放源 多个用$$$分隔
      "vod_play_from": "qiepian$$$yun3edu",
      // 播放列表 注意分隔符 分别是 多个源$$$分隔，源中的剧集用#分隔，剧集的名称和地址用$分隔
      "vod_play_url": "第1集$1902-1-1#第2集$1902-1-2#第3集$1902-1-3#第4集$1902-1-4#第5集$1902-1-5#第6集$1902-1-6#第7集$1902-1-7#第8集$1902-1-8$$$第1集$1902-2-1#第2集$1902-2-2#第3集$1902-2-3#第4集$1902-2-4#第5集$1902-2-5#第6集$1902-2-6#第7集$1902-2-7#第8集$1902-2-8"
    }
  ]
}
```
