
module.exports = [
    // user login
    {
        url: '/mock/user/login',
        type: 'post',
        response: config => {
            return {
                code: 200,
                // data: token
            }
        }
    },

    
    {
        url: '/mock/user/getInfo',
        type: 'get',
        response: config => {
            return { "msg": "操作成功", "code": 200, "permissions": ["*:*:*"], "roles": ["admin"], "user": { "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:42", "updateBy": null, "updateTime": null, "remark": "管理员", "params": {}, "userId": 1, "deptId": 103, "userName": "admin", "nickName": "若依", "email": "ry@163.com", "phonenumber": "15888888888", "sex": "1", "avatar": "", "salt": null, "status": "0", "delFlag": "0", "loginIp": "127.0.0.1", "loginDate": "2020-11-20T19:29:42.000+0800", "dept": { "searchValue": null, "createBy": null, "createTime": null, "updateBy": null, "updateTime": null, "remark": null, "params": {}, "deptId": 103, "parentId": 101, "ancestors": null, "deptName": "研发部门", "orderNum": "1", "leader": "若依", "phone": null, "email": null, "status": "0", "delFlag": null, "parentName": null, "children": [] }, "roles": [{ "searchValue": null, "createBy": null, "createTime": null, "updateBy": null, "updateTime": null, "remark": null, "params": {}, "roleId": 1, "roleName": "超级管理员", "roleKey": "admin", "roleSort": "1", "dataScope": "1", "menuCheckStrictly": false, "deptCheckStrictly": false, "status": "0", "delFlag": null, "flag": false, "menuIds": null, "deptIds": null, "admin": true }], "roleIds": null, "postIds": null, "admin": true } }
        }
    },
    {
        url: '/mock/user/getRouters',
        type: 'get',
        response: config => {
            return {
                "msg": "操作成功", "code": 200,
                "data": [
                    // { "name": "System", "path": "/system", "hidden": false, "redirect": "noRedirect", "component": "Layout", "alwaysShow": true, "meta": { "title": "系统管理", "icon": "system", "noCache": false }, "children": [{ "name": "User", "path": "user", "hidden": false, "component": "system/user/index", "meta": { "title": "用户管理", "icon": "user", "noCache": false } }, { "name": "Role", "path": "role", "hidden": false, "component": "system/role/index", "meta": { "title": "角色管理", "icon": "peoples", "noCache": false } }, { "name": "Menu", "path": "menu", "hidden": false, "component": "system/menu/index", "meta": { "title": "菜单管理", "icon": "tree-table", "noCache": false } }, { "name": "Dept", "path": "dept", "hidden": false, "component": "system/dept/index", "meta": { "title": "部门管理", "icon": "tree", "noCache": false } }, { "name": "Post", "path": "post", "hidden": false, "component": "system/post/index", "meta": { "title": "岗位管理", "icon": "post", "noCache": false } }, { "name": "Dict", "path": "dict", "hidden": false, "component": "system/dict/index", "meta": { "title": "字典管理", "icon": "dict", "noCache": false } }, { "name": "Config", "path": "config", "hidden": false, "component": "system/config/index", "meta": { "title": "参数设置", "icon": "edit", "noCache": false } }, { "name": "Notice", "path": "notice", "hidden": false, "component": "system/notice/index", "meta": { "title": "通知公告", "icon": "message", "noCache": false } }, { "name": "Log", "path": "log", "hidden": false, "redirect": "noRedirect", "component": "ParentView", "alwaysShow": true, "meta": { "title": "日志管理", "icon": "log", "noCache": false }, "children": [{ "name": "Operlog", "path": "operlog", "hidden": false, "component": "monitor/operlog/index", "meta": { "title": "操作日志", "icon": "form", "noCache": false } }, { "name": "Logininfor", "path": "logininfor", "hidden": false, "component": "monitor/logininfor/index", "meta": { "title": "登录日志", "icon": "logininfor", "noCache": false } }] }] },
                    // { "name": "Monitor", "path": "/monitor", "hidden": false, "redirect": "noRedirect", "component": "Layout", "alwaysShow": true, "meta": { "title": "系统监控", "icon": "monitor", "noCache": false }, "children": [{ "name": "Online", "path": "online", "hidden": false, "component": "monitor/online/index", "meta": { "title": "在线用户", "icon": "online", "noCache": false } }, { "name": "Job", "path": "job", "hidden": false, "component": "monitor/job/index", "meta": { "title": "定时任务", "icon": "job", "noCache": false } }, { "name": "Druid", "path": "druid", "hidden": false, "component": "monitor/druid/index", "meta": { "title": "数据监控", "icon": "druid", "noCache": false } }, { "name": "Server", "path": "server", "hidden": false, "component": "monitor/server/index", "meta": { "title": "服务监控", "icon": "server", "noCache": false } }, { "name": "Cache", "path": "cache", "hidden": false, "component": "monitor/cache/index", "meta": { "title": "缓存监控", "icon": "redis", "noCache": false } }] }, { "name": "Tool", "path": "/tool", "hidden": false, "redirect": "noRedirect", "component": "Layout", "alwaysShow": true, "meta": { "title": "系统工具", "icon": "tool", "noCache": false }, "children": [{ "name": "Build", "path": "build", "hidden": false, "component": "tool/build/index", "meta": { "title": "表单构建", "icon": "build", "noCache": false } }, { "name": "Gen", "path": "gen", "hidden": false, "component": "tool/gen/index", "meta": { "title": "代码生成", "icon": "code", "noCache": false } }, { "name": "Swagger", "path": "swagger", "hidden": false, "component": "tool/swagger/index", "meta": { "title": "系统接口", "icon": "swagger", "noCache": false } }] }, { "name": "Http://ruoyi.vip", "path": "http://ruoyi.vip", "hidden": false, "component": "Layout", "meta": { "title": "若依官网", "icon": "guide", "noCache": false } },
                    {
                        "path": "",
                        "hidden": true,
                        "redirect": "messagebox",
                        "component": "Layout",
                        // "alwaysShow": true,
                        // "meta": { "title": "通知", "icon": "peoples", "noCache": false },
                        "children": [{
                            "name": "messagebox",
                            "path": "messagebox",
                            "hidden": true,
                            "component": "messagebox/index",
                            "meta": { "title": "通知",  "icon": "example", "noCache": false ,affix: true}
                        },{
                            "name": "zdetails",
                            "path": "zdetails",
                            "hidden": true,
                            "component": "SettingsMgt/details/index",
                            "meta": { "title": "知识详情", "icon": "example", "noCache": false }
                        },]
                    },
                    {
                        "name": "roleMgt",
                        "path": "/roleMgt",
                        "hidden": false,
                        "redirect": "noRedirect",
                        "component": "Layout",
                        "alwaysShow": true,
                        "meta": { "title": "角色管理", "icon": "peoples", "noCache": false },
                        "children": [{
                            "name": "rolelist",
                            "path": "rolelist",
                            "hidden": false,
                            "component": "roleMgt/rolelist/index",
                            "meta": { "title": "角色列表",  "icon": "example", "noCache": false }
                        }, {
                            "name": "addrole",
                            "path": "addrole",
                            "hidden": false,
                            "component": "roleMgt/addrole/index",
                            "meta": { "title": "角色添加", "icon": "example", "noCache": false }
                        }]
                    },
                    {
                        "name": "SystemMgt",
                        "path": "/SystemMgt",
                        "hidden": false,
                        "redirect": "noRedirect",
                        "component": "Layout",
                        "alwaysShow": true,
                        "meta": { "title": "系统设置", "icon": "monitor", "noCache": false },
                        "children": [
                            {
                                "name": "Platesetting",
                                "path": "Platesetting",
                                "hidden": false,
                                "component": "SystemMgt/Platesetting/index",
                                "meta": { "title": "版块设置",  "icon": "example", "noCache": false }
                            }, 
                            {
                                "name": "Topset",
                                "path": "Topset",
                                "hidden": false,
                                "component": "SystemMgt/Topset/index",
                                "meta": { "title": "置顶条数设置", "icon": "example", "noCache": false }
                            }, {
                                "name": "Repelset",
                                "path": "Repelset",
                                "hidden": false,
                                "component": "SystemMgt/Repelset/index",
                                "meta": { "title": "清退机制设置", "icon": "example", "noCache": false }
                            }
                        ]
                    },
                    {
                        "name": "knowledgeMgt",
                        "path": "/knowledgeMgt",
                        "hidden": false,
                        "redirect": "noRedirect",
                        "component": "Layout",
                        "alwaysShow": true,
                        "meta": { "title": "知识管理", "icon": "system", "noCache": false },
                        "children": [
                            {
                                "name": "knowledgeClassfy",
                                "path": "knowledgeClassfy",
                                "hidden": false,
                                "component": "knowledgeMgt/knowledgeClassfy/index",
                                "meta": { "title": "知识分类",  "icon": "example", "noCache": false }
                            },
                             {
                                "name": "knowledgeList",
                                "path": "knowledgeList",
                                "hidden": false,
                                "component": "knowledgeMgt/knowledgeList/index",
                                "meta": { "title": "知识列表", "icon": "example", "noCache": false }
                            }, 
                            {
                                "name": "knowledgeAdd",
                                "path": "knowledgeAdd",
                                "hidden": false,
                                "component": "knowledgeMgt/knowledgeAdd/index",
                                "meta": { "title": "知识新增", "icon": "example", "noCache": false }
                            }
                        ]
                    },
                    {
                        "name": "SettingsMgt",
                        "path": "/SettingsMgt",
                        "hidden": false,
                        "redirect": "noRedirect",
                        "component": "Layout",
                        "alwaysShow": true,
                        "meta": { "title": "个人中心", "icon": "form", "noCache": false },
                        "children": [
                            {
                                "name": "Myknowledge",
                                "path": "Myknowledge",
                                "hidden": false,
                                "component": "SettingsMgt/Myknowledge/index",
                                "meta": { "title": "我的知识",  "icon": "example", "noCache": false }
                            },
                             {
                                "name": "collection",
                                "path": "collection",
                                "hidden": false,
                                "component": "SettingsMgt/collection/index",
                                "meta": { "title": "我的收藏", "icon": "example", "noCache": false }
                            }, 
                            {
                                "name": "suggested",
                                "path": "suggested",
                                "hidden": false,
                                "component": "SettingsMgt/suggested/index",
                                "meta": { "title": "回复建议", "icon": "example", "noCache": false }
                            },
                            {
                                "name": "zsdetails",
                                "path": "zsdetails",
                                "hidden": false,
                                "component": "SettingsMgt/details/index",
                                "meta": { "title": "知识详情", "icon": "example", "noCache": false }
                            },
                            {
                                "name": "replyMgts2",
                                "path": "replyMgts2",
                                "hidden": true,
                                "component": "replyMgt/index",
                                "meta": { "title": "回复建议", "icon": "example", "noCache": false }
                            },
                            
                        ]
                    },
                    {
                        "name": "AnalysisMgt",
                        "path": "/AnalysisMgt",
                        "hidden": false,
                        "redirect": "noRedirect",
                        "component": "Layout",
                        "alwaysShow": true,
                        "meta": { "title": "统计分析", "icon": "guide", "noCache": false },
                        "children": [
                            {
                                "name": "Employeebehavior",
                                "path": "Employeebehavior",
                                "hidden": false,
                                "component": "AnalysisMgt/Employeebehavior/index",
                                "meta": { "title": "员工行为统计",  "icon": "example", "noCache": false }
                            },
                             {
                                "name": "Platedesign",
                                "path": "Platedesign",
                                "hidden": false,
                                "component": "AnalysisMgt/Platedesign/index",
                                "meta": { "title": "板块数据统计", "icon": "example", "noCache": false }
                            },
                        ]
                    },
                    
                ]
            }
        }
    },



    // user logout
    {
        url: '/mock/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 200,
                data: 'success'
            }
        }
    },


    {
        url: '/mock/system/user/list',
        type: 'get',
        response: _ => {
            return { "total": 2, "rows": [{ "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:42", "updateBy": null, "updateTime": null, "remark": "管理员", "params": {}, "userId": 1, "deptId": 103, "userName": "admin", "nickName": "若依", "email": "ry@163.com", "phonenumber": "15888888888", "sex": "1", "avatar": "", "salt": null, "status": "0", "delFlag": "0", "loginIp": "127.0.0.1", "loginDate": "2020-11-20T19:29:42.000+0800", "dept": { "searchValue": null, "createBy": null, "createTime": null, "updateBy": null, "updateTime": null, "remark": null, "params": {}, "deptId": 103, "parentId": null, "ancestors": null, "deptName": "研发部门", "orderNum": null, "leader": "若依", "phone": null, "email": null, "status": null, "delFlag": null, "parentName": null, "children": [] }, "roles": [], "roleIds": null, "postIds": null, "admin": true }, { "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:42", "updateBy": null, "updateTime": null, "remark": "测试员", "params": {}, "userId": 2, "deptId": 105, "userName": "ry", "nickName": "若依", "email": "ry@qq.com", "phonenumber": "15666666666", "sex": "1", "avatar": "", "salt": null, "status": "0", "delFlag": "0", "loginIp": "127.0.0.1", "loginDate": "2020-11-20T19:29:42.000+0800", "dept": { "searchValue": null, "createBy": null, "createTime": null, "updateBy": null, "updateTime": null, "remark": null, "params": {}, "deptId": 105, "parentId": null, "ancestors": null, "deptName": "测试部门", "orderNum": null, "leader": "若依", "phone": null, "email": null, "status": null, "delFlag": null, "parentName": null, "children": [] }, "roles": [], "roleIds": null, "postIds": null, "admin": false }], "code": 200, "msg": null }
        }
    },
    {
        url: '/mock/system/dept/treeselect',
        type: 'get',
        response: _ => {
            return { "msg": "操作成功", "code": 200, "data": [{ "id": 100, "label": "若依科技", "children": [{ "id": 101, "label": "深圳总公司", "children": [{ "id": 103, "label": "研发部门" }, { "id": 104, "label": "市场部门" }, { "id": 105, "label": "测试部门" }, { "id": 106, "label": "财务部门" }, { "id": 107, "label": "运维部门" }] }, { "id": 102, "label": "长沙分公司", "children": [{ "id": 108, "label": "市场部门" }, { "id": 109, "label": "财务部门" }] }] }] }
        }
    },
    {
        url: '/mock/system/dict/data/type/sys_normal_disable',
        type: 'get',
        response: _ => {
            return { "msg": "操作成功", "code": 200, "data": [{ "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:49", "updateBy": null, "updateTime": null, "remark": "正常状态", "params": {}, "dictCode": 6, "dictSort": 1, "dictLabel": "正常", "dictValue": "0", "dictType": "sys_normal_disable", "cssClass": "", "listClass": "primary", "isDefault": "Y", "status": "0", "default": true }, { "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:49", "updateBy": null, "updateTime": null, "remark": "停用状态", "params": {}, "dictCode": 7, "dictSort": 2, "dictLabel": "停用", "dictValue": "1", "dictType": "sys_normal_disable", "cssClass": "", "listClass": "danger", "isDefault": "N", "status": "0", "default": false }] }
        }
    },
    {
        url: '/mock/system/dict/data/type/sys_user_sex',
        type: 'get',
        response: _ => {
            return { "msg": "操作成功", "code": 200, "data": [{ "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:49", "updateBy": null, "updateTime": null, "remark": "性别男", "params": {}, "dictCode": 1, "dictSort": 1, "dictLabel": "男", "dictValue": "0", "dictType": "sys_user_sex", "cssClass": "", "listClass": "", "isDefault": "Y", "status": "0", "default": true }, { "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:49", "updateBy": null, "updateTime": null, "remark": "性别女", "params": {}, "dictCode": 2, "dictSort": 2, "dictLabel": "女", "dictValue": "1", "dictType": "sys_user_sex", "cssClass": "", "listClass": "", "isDefault": "N", "status": "0", "default": false }, { "searchValue": null, "createBy": "admin", "createTime": "2020-11-20 19:29:49", "updateBy": null, "updateTime": null, "remark": "性别未知", "params": {}, "dictCode": 3, "dictSort": 3, "dictLabel": "未知", "dictValue": "2", "dictType": "sys_user_sex", "cssClass": "", "listClass": "", "isDefault": "N", "status": "0", "default": false }] }
        }
    },
    {
        url: '/mock/system/config/configKey/sys.user.initPassword',
        type: 'get',
        response: _ => {
            return { "msg": "123456", "code": 200 }
        },
    }
]