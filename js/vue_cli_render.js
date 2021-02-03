new Vue({
    el: '#Vue_component_wrapper',
    data: {
        DataList: [],
    },
    methods: {
        getValue: function (tag_name) {
            if (this.DataList[tag_name] !== undefined) {
                return this.DataList[tag_name];
            }
        },
    },
    created() {
        this.DataList = data;
    }
});