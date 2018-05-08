import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/login/, {
        "data": {
            userId: "@integer(1,10)",
            "userName|1": ["鲁班七号", "典韦", "蔡文姬", "王昭君", "妲己","铠"]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
    Mock.mock(/getMenu/, {
        "data": {
            menu: [{
                name: '项目管理',
                name_en: 'Projects',
                router: '',
                icon: 'el-icon-time',
                children: [{
                    name: '开发备忘',
                    name_en: 'Notes',
                    router: '/project-info',
                    icon: 'el-icon-date'
                }, {
                    name: '关于作者',
                    name_en: 'About',
                    router: '/enroll-list',
                    icon: 'el-icon-document'
                }]
            }, {
                name: '文档分享',
                name_en: 'Filesenjoy',
                router: '/files-enjoy',
                icon: 'el-icon-setting',
                children: []
            }, {
                name: '权限测试',
                name_en: 'Authority',
                router: '/authority-test',
                icon: 'el-icon-setting',
                children: []
            }]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
    Mock.mock(/getFile/, {
        "data": {
            Files: [
                {key:'3',isAdd:false},
                {key:'4',isAdd:false}
            ]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
}

const Files = [];

for (let i = 0; i < 86; i++) {
  Files.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { Files };
