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
                    return resolve([{
                        id: 'city1111111',
                        name: '11111111111111111111',
                    }])
                },
                "/city2": function (reslove) {
                    reslove([{
                        id: 'city222222222222',
                        name: '2222222222222222',
                    }])
                }
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
                    reslove([{
                        id: 'city333333333333333',
                        name: '3333333333333333333333333',
                    }])
                }
                  this.$refs.generateForm.refresh('city2')
            }
        }
    }
}
</script>