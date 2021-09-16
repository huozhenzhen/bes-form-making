<template>
    <div>
        <fm-generate-form
            :data="jsonData"
            ref="generateForm"
            @on-change="onchange"
            :remote="remoteObj"
        ></fm-generate-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            remoteObj: {
                "/city1": function (resolve) {
                    console.log('1111111111111111111111')
                    return resolve([{
                        id: 'city1111111',
                        name: '11111111111111111111',
                    }])
                },
                "/city2": function (reslove) {
                    console.log('222222222222222222222')
                    reslove([{
                        id: 'city222222222222',
                        name: '2222222222222222',
                    }])
                },
                "/test": function (reslove) {
                    reslove([{
                        id: 'city222222222222',
                        name: '2222222222222222',
                        children: [{
                            id: 'city333333333333333',
                            name: '333333333333',
                        }, {
                            id: 'city3333333444',
                            name: '34444443',
                        }]
                    }])
                },
            },
            jsonData: {
                "list": [
                    {
                        "type": "select",
                        "icon": "icon-select",
                        "options": {
                            "defaultValue": "",
                            "multiple": false,
                            "disabled": false,
                            "clearable": false,
                            "placeholder": "",
                            "required": false,
                            "showLabel": false,
                            "width": "",
                            "options": [
                                {
                                    "value": "Option 1"
                                },
                                {
                                    "value": "Option 2"
                                },
                                {
                                    "value": "Option 3"
                                }
                            ],
                            "remote": true,
                            "filterable": false,
                            "remoteOptions": [],
                            "props": {
                                "value": "id",
                                "label": "name"
                            },
                            "remoteFunc": "/city1"
                        },
                        "name": "下拉选择框",
                        "key": "1631548633000_99113",
                        "model": "city1",
                        "rules": []
                    },
                    {
                        "type": "cascader",
                        "icon": "icon-jilianxuanze",
                        "options": {
                            "defaultValue": [],
                            "width": "",
                            "placeholder": "",
                            "disabled": false,
                            "clearable": false,
                            "remote": true,
                            "remoteOptions": [],
                            "props": {
                                "value": "id",
                                "label": "name",
                                "children": "children"
                            },
                            "remotePath": "data.test",
                            "remoteFunc": "/test"
                        },
                        "name": "级联选择器",
                        "key": "1631720712000_40308",
                        "model": "cascader_1631720712000_40308",
                        "rules": []
                    },
                    {
                        "type": "select",
                        "icon": "icon-select",
                        "options": {
                            "defaultValue": "",
                            "multiple": false,
                            "disabled": false,
                            "clearable": false,
                            "placeholder": "",
                            "required": false,
                            "showLabel": false,
                            "width": "",
                            "options": [
                                {
                                    "value": "Option 1"
                                },
                                {
                                    "value": "Option 2"
                                },
                                {
                                    "value": "Option 3"
                                }
                            ],
                            "remote": false,
                            "filterable": false,
                            "remoteOptions": [],
                            "props": {
                                "value": "value",
                                "label": "label"
                            },
                            "remotePath": "",
                            "remoteFunc": "func_1631720667000_49891"
                        },
                        "name": "下拉选择框",
                        "key": "1631720667000_49891",
                        "model": "select_1631720667000_49891",
                        "rules": []
                    },
                    {
                        "type": "select",
                        "icon": "icon-select",
                        "options": {
                            "defaultValue": "",
                            "multiple": false,
                            "disabled": false,
                            "clearable": false,
                            "placeholder": "",
                            "required": false,
                            "showLabel": false,
                            "width": "",
                            "options": [
                                {
                                    "value": "Option 1"
                                },
                                {
                                    "value": "Option 2"
                                },
                                {
                                    "value": "Option 3"
                                }
                            ],
                            "remote": true,
                            "filterable": false,
                            "remoteOptions": [],
                            "props": {
                                "value": "id",
                                "label": "name"
                            },
                            "remoteFunc": "/city2"
                        },
                        "name": "下拉选择框",
                        "key": "1631548663000_24801",
                        "model": "city2",
                        "rules": []
                    }
                ],
                "config": {
                    "labelWidth": 100,
                    "labelPosition": "right",
                    "size": "small"
                }
            }
        }
    },
    mounted() {

    },
    methods: {
        onchange(filed, value, data) {
            if (filed === 'city1') {
                console.log(filed, value, data)
                this.remoteObj["/city2"] = function (reslove) {
                    console.log('test3333333333333333')
                    reslove([{
                        id: 'city333333333333333',
                        name: '3333333333333333333333333',
                    }])
                }
                this.$refs.generateForm.refresh()
            }
        }
    }
}
</script>