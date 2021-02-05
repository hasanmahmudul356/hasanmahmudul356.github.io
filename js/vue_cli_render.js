new Vue({
    el: '#Vue_component_wrapper',
    data: {
        DataList: [],
        contactForm : {
            name : '',
            email : '',
            subject : '',
            message : '',
        }
    },
    methods: {
        getValue: function (tag_name) {
            if (this.DataList[tag_name] !== undefined) {
                return this.DataList[tag_name];
            }
        },
        imageUrl : function (image_folder, image) {
            console.log(image_folder);
            console.log(image);
            if (image_folder && image) {
                return this.DataList.imageBasePath+image_folder+image;
            }
        },
        submitForm : function () {
            window.open('mailto:hasanmahmudul356@gmail.com?subject='+this.contactForm.subject+'&body='+this.contactForm.message+'&name='+this.contactForm.name);
        }
    },
    created() {
        this.DataList = data;
    }
});