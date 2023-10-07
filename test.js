import {} from './wrapper/index.js'
import { __jsEvalReturn } from './kunyu77_open.js'
//=============================================
let siteKey = 'siteKey'
//外部字符串
let extend = ''
//筛选开关
let filter_switch = false
//首页推荐开关
let home_switch = false
//搜索开关
let search_switch = false
// let search_switch = true
//搜索关键字
let search_keyword = '斗罗大陆'
//测试的类型的下标,从0开始(电影,电视剧...)
let test_type_index = 1
//测试category的页数
let test_category_page = 1
//测试的视频下标，从0开始
let test_vod_index = 5
//测试视频源的下标
let test_vod_from_index = 0
//
//=============================================

var spider = __jsEvalReturn()

function print(str) {
  process.stdout.write(String(str))
}

async function test() {
  console.log('====init====')
  try {
    console.log('sKey:-->' + siteKey + '\next :-->' + extend)
    await spider.init({ skey: siteKey, ext: extend })
  } catch {
    console.log('初始化失败!!!正在退出...')
    return
  }
  if (!search_switch) {
    console.log('====home====')
    try {
      var res = await spider.home(filter_switch)
    } catch {
      console.log('home函数运行出错,正在退出...')
      return
    }
    try {
      var classes = JSON.parse(res)['class']
      // console.log(classes)
      for (var i = 0; i < classes.length; i++) {
        var type_id = classes[i]['type_id']
        var type_name = classes[i]['type_name']
        print(type_name + '[' + type_id + '] ')
      }
      console.log('\n')
      if (test_type_index >= classes.length) {
        console.log(
          '你测试的类型越界[test_type_index=' +
            test_type_index +
            '],正在退出...'
        )
        return
      }
    } catch {
      console.log('解析home出错，正在退出...')
      return
    }
    if (home_switch) {
      console.log('====homevod====')
      console.log(
        '首页推荐视频信息(我也不知道有什么用，反正没看到哪里有推荐信息~)\n'
      )
      try {
        var reshomeVod = await spider.homeVod()
      } catch {
        console.log('homevod函数运行出错,正在退出...')
        return
      }
      try {
        let list = JSON.parse(reshomeVod)['list']
        for (var i = 0; i < list.length; i++) {
          console.log(list[i]['vod_name'] + '[' + list[i]['vod_id'] + ']')
        }
      } catch {
        console.log('解析homevod函数出错,正在退出...')
        return
      }
    }
    console.log('====category====')
    console.log('你测试的类型是->' + classes[test_type_index]['type_name'])
    try {
      var resCate = await spider.category(
        classes[test_type_index]['type_id'],
        test_category_page,
        undefined,
        {}
      )
    } catch {
      console.log('category函数运行出错,正在退出...')
      return
    }
    try {
      var resultCate = JSON.parse(resCate)
      var page = resultCate['page']
      var pagecount = resultCate['pagecount']
      var limit = resultCate['limit']
      var total = resultCate['total']
      var cateList = resultCate['list']
      console.log('// 当前页')
      console.log(page)
      console.log('// 总共几页')
      console.log(pagecount)
      console.log('// 每页几条数据')
      console.log(limit)
      console.log('// 总共多少调数据')
      console.log(total)
      for (var i = 0; i < cateList.length; i++) {
        console.log(cateList[i]['vod_name'] + '[' + cateList[i]['vod_id'] + ']')
      }
    } catch {
      console.log('category函数解析出错,正在退出...')
      return
    }
  } else {
    console.log('====search====')
    try {
      var resSearch = await spider.search(search_keyword)
    } catch {
      console.log('search函数运行出错,正在退出...')
      return
    }
    try {
      var resultSearch = JSON.parse(resSearch)['list']
      for (var i = 0; i < resultSearch.length; i++) {
        print(
          resultSearch[i]['vod_name'] + '[' + resultSearch[i]['vod_id'] + ']\n'
        )
        // console.log(resultSearch)
      }
    } catch {
      console.log('search函数解析出错,正在退出...')
      return
    }

    var cateList = resultSearch
  }

  console.log('====detail====')
  console.log(
    '你测试的视频是->' +
      cateList[test_vod_index]['vod_name'] +
      '[' +
      cateList[test_vod_index]['vod_id'] +
      ']'
  )

  try {
    var resDetail = await spider.detail(cateList[test_vod_index]['vod_id'])
  } catch {
    console.log('detail函数运行出错,正在退出...')
    return
  }
  try {
    var resultDetail = JSON.parse(resDetail)['list'][0]
    console.log('//视频ID')
    console.log(resultDetail['vod_id'])
    console.log('//视频名称')
    console.log(resultDetail['vod_name'])
    console.log('//封面')
    console.log(resultDetail['vod_pic'])
    console.log('//类型')
    console.log(resultDetail['type_name'])
    console.log('//年份')
    console.log(resultDetail['vod_year'])
    console.log('//地区')
    console.log(resultDetail['vod_area'])
    console.log('//信息')
    console.log(resultDetail['vod_remarks'])
    console.log('//主演')
    console.log(resultDetail['vod_actor'])
    console.log('//导演')
    console.log(resultDetail['vod_director'])
    console.log('//简介')
    console.log(resultDetail['vod_content'])
    console.log('//播放源')
    var url_from = resultDetail['vod_play_from'].split('$$$')
    print('[ ')
    for (var i = 0; i < url_from.length; i++) {
      print(url_from[i] + ' ')
    }
    print(']')
    console.log('\n//播放列表')
    var test_play_id = ''

    let url_list = resultDetail['vod_play_url'].split('$$$')
    for (var i = 0; i < url_from.length; i++) {
      let urls = url_list[i].split('#')
      for (var j = 0; j < urls.length; j++) {
        let nu = urls[j].split('$')
        console.log(url_from[i] + '-->' + nu[0] + '[' + nu[1] + ']')
        if (i == test_vod_from_index && j == 0) {
          test_play_id = nu[1]
        }
      }
    }
  } catch {
    console.log('detail函数解析出错,正在退出...')
    return
  }
  console.log('====play====')
  console.log(
    '你测试的源是-->' +
      url_from[test_vod_from_index] +
      '\n测试的ID是-->' +
      test_play_id
  )
  try {
    var resPlay = await spider.play('', test_play_id + '')
  } catch {
    console.log('play函数运行出错,正在退出...')
    return
  }
  try {
    var resultPlay = JSON.parse(resPlay)
    console.log('//请求头')
    console.log(JSON.stringify(resultPlay['header']))
    console.log('//播放方式')
    let play_parse = resultPlay['parse']
    if (play_parse == 0) {
      console.log('直接播放')
    } else if (play_parse == 1) {
      console.log('嗅探播放')
    }
    console.log('//URL播放链接')
    console.log(resultPlay['url'])
  } catch {
    console.log('play函数解析出错,正在退出...')
    return
  }
}
//
await test()
