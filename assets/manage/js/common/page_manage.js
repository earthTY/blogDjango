var flagModify = false;

var vm = new Vue({
    delimiters: ["[[", "]]"],
    el:"#value_container",
    mixins:[levelMixin],
    data: {
        start: 0,
        count: 10,
        total:0,

        status:-1,

        start_time:"",
        end_time:"",

        blog_online:{
            "menu_id":"",
            "blog_title":"",
            "keywords":"",
            "introduction":"",
            "type":-1,
            img_info:{
                status:false,
                url:""
            },
            tag_list:[]
        },

        menu_list:[],
        blog_menu_list:[],
        menu_products:[],
        tags_list:[],
        tag_search:"",
    },
    computed:{
        search_tags:function(){
            if(this.tags_list.length == 0){
                return []
            }else {
                var that = this
                return this.tags_list.filter(function (value) {
                    return value.tag_name.trim().toLowerCase().includes(that.tag_search.trim().toLowerCase())
                })
            }
        }
    },
    created: function () {
        this.start_time = MC_GetDay(0);
        this.end_time = MC_GetDay(0);


    },
    mounted:function(){
        laydate.render({
            elem: '#start_date',
            done:function(value){
                vm.start_time = value;
            }
        });
        laydate.render({
            elem: '#end_date',
            done:function(value){
                vm.end_time = value;
            }
        });

        //this.Search(true,0)

        this.getMenuByLang()

        this.getTagsByLang()

        CKEDITOR.replace('rich_text',{
            height:500
        })
    },
    watch:{
        count:function(){
            this.Search(false)
        }
    },
    methods:{
        //查询页面信息
        Search:function(reset,type){
            var vm = window.vm || this

            if(type !== undefined){
                vm.type = type
            }

            if(vm.type && vm.product_number == ""){
                lay_prompt("请选择产品编号！")
                return
            }

            if(reset){
                vm.start = 0
            }

            var now_time = MC_GetDay(0);
            var start_day = daysBetween(now_time, this.start_time);
            var end_day = daysBetween(now_time, this.end_time) + 1;

            if(start_day>=end_day){
                lay_prompt("开始时间不能大于结束时间！")
                return
            }

            var param = vm.type ? {
                product_number:vm.product_number
            } : {
                start:vm.start,
                count:vm.count,
                start_time:start_day,
                end_time:end_day,
                status:vm.status
            }

            var url = "/get_product_info"

            $.ajax({
                url:url,
                method:"post",
                data:param
            }).done(function (retVal) {
                if(retVal && retVal.code ==0 ){
                    for(var i=0;i<retVal.data.length;i++){
                        retVal.data[i].No = i+1
                    }
                    vm.online_page_list = retVal.data

                    vm.total = retVal.total_count
                    var pageCount = Math.ceil(vm.total / vm.count)
                    initPageList((vm.start / vm.count)+1, pageCount == 0 ? 1 : pageCount, $("#pagination"), vm)
                }
            })
        },

        //页面发布与停用
        pagePublishOrStop:function(objPage,status,pos){
            var url = "/set_product_status"

            $.ajax({
                url:url,
                method:"post",
                data:{
                    product_id:objPage.id,
                    status: (+status)
                }
            }).done(function(retVal){
                if(retVal && retVal.code == 0){
                    if(status == 1){
                        lay_prompt("页面发布成功！")
                    }else if(status == 0){
                        lay_prompt("取消发布成功！")
                    }else{
                        lay_prompt("取消下架成功！")
                    }
                    vm.$set(vm.online_page_list[pos],"status", +status)
                }
            })
        },

        handleSuccessBlogImg:function(res){
            if(res.code == 0){
                this.blog_online.img_info = {
                    status:true,
                    url:res.data.uploaded_file_url
                }
            }
        },

        openBlogOnlineView:function () {
            this.blog_online = {
                "menu_id":"",
                "blog_title":"",
                "keywords":"",
                "introduction":"",
                "type":0,
                img_info:{
                    status:false,
                    url:""
                }
            }

            $("#blog_online").modal()
        },

        //上新时图片文件上传结束

        addBlogManage:function () {
            var blogInfo = this.blog_online

            if(blogInfo.type == 1){
                blogInfo.product_menu = blogInfo.menu_id
            }else {
                blogInfo.product_menu = -1
            }

            if(!checkBlogParam(blogInfo)){
                return
            }

            var url = '/bs/create_article_info'

            var param_url_title = blogInfo.blog_title.toLowerCase().replace(/[^A-Za-z0-9]+/g,"-")

            var param = {
                categories_id:blogInfo.menu_id,
                title:blogInfo.blog_title,
                url_title:param_url_title.endsWith("-")?param_url_title.substring(0,param_url_title.length-1):param_url_title,
                img_url:blogInfo.img_info.url,
                introduction:blogInfo.introduction,
                product_id:blogInfo.product_id,
                product_menu:blogInfo.product_menu,
                tag_list:[],
                subject_body:""
            }

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function (retVal) {
                if(retVal && retVal.code == 0){
                    lay_prompt("页面上新成功!")
                }else {
                    lay_prompt('页面上新失败!')
                }
            })

            function checkBlogParam() {
                return true
            }

        },

        getMenuByLang:function () {
            var url = "/bs/get_menu_by_lang"

            $.ajax({
                url:url,
                method:"post",
                data:JSON.stringify({})
            }).done(function(retVal){
                if(retVal && retVal.code == 0){
                   for(var i=0;i<retVal.data.length;i++){
                       retVal.data[i].No =  (i+1)
                   }
                   vm.menu_list = retVal.data
                }
            })
        },

        getTagsByLang:function() {
            var url = "/bs/get_tags_by_lang"

            $.ajax({
                url:url,
                method:"post",
                data:JSON.stringify({})
            }).done(function(retVal){
                if(retVal && retVal.code == 0){
                   vm.tags_list = retVal.data
                }
            })
        },

        getMenuProduct:function (menu_id) {
            var url = "/bs/get_menu_products"

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify({
                    menu_id:menu_id
                })
            }).done(function(retVal){
                vm.menu_products = retVal.data
                vm.blog_online.product_id = ""
            })
        }
    },
})

vm.$watch("blog_online.type",function () {
    this.blog_online.menu_id = ""

    if(this.blog_online.type==0){
        this.blog_menu_list = this.menu_list.filter(function (value) {
            return !value.is_product
        })
    }else{
        this.blog_menu_list = this.menu_list.filter(function (value) {
            return value.is_product
        })
    }
})