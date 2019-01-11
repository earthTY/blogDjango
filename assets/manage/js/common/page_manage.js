var flagModify = false;

var vm = new Vue({
    delimiters: ["[[", "]]"],
    el:"#value_container",
    mixins:[levelMixin],
    data: {
        start: 0,
        count: 10,
        total:0,


        menu_id:"-1",
        article_list:[],


        blog_view:{
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

        var editor=CKEDITOR.replace('rich_text',{
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
        SearchByMenu:function(reset,type){
            var vm = window.vm || this

            if(reset){
                vm.start = 0
            }

            var param = {
                menu_id:vm.menu_id,
                start:vm.start,
                page_count:vm.count,
            }

            var url = "/bs/select_article_by_menu"

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function (retVal) {
                if(retVal && retVal.code ==0 ){
                    for(var i=0;i<retVal.data.length;i++){
                        retVal.data[i].No = i+1
                    }
                    vm.article_list = retVal.data
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
                this.blog_view.img_info = {
                    status:true,
                    url:res.data.uploaded_file_url
                }
            }
        },

        openBlogOnlineView:function (isModify,blogInfo) {
            if (isModify){
                this.blog_view = {
                    "isModify":isModify,
                    "blog_id":blogInfo.id,
                    "menu_id":blogInfo.categories.id,
                    "blog_title":blogInfo.title,
                    "keywords":blogInfo.keyword,
                    "introduction":blogInfo.introduction,
                    "subject_body":blogInfo.subject_body,
                    "type":+(blogInfo.categories.is_product),
                    "product_id":blogInfo.product_id,
                    "tag_list":blogInfo.tags,
                    img_info:{
                        status:true,
                        url:blogInfo.img_url
                    }
                }

                this.getMenuProduct(this.blog_view.menu_id,false)
            } else {
                this.blog_view = {
                    "isModify":isModify,
                    "menu_id":"",
                    "blog_title":"",
                    "keywords":"",
                    "introduction":"",
                    "subject_body":"",
                    "product_id":"",
                    "type":0,
                    "tag_list":[],
                    img_info:{
                        status:false,
                        url:""
                    }
                }
            }

            var that = this

            this.tags_list.forEach(function (value) {
                if(that.blog_view.tag_list.length == 0){
                    value.select = false
                    return
                }
                (-1 == that.blog_view.tag_list.findIndex(function (item) {
                    return value.id == item.id
                })) ? value.select = false : value.select = true
            })

            this.changeBlogType(this.blog_view.type)

            CKEDITOR.instances.rich_text.setData(this.blog_view.subject_body)

            $("#blog_view").modal()
        },


        addBlogManage:function () {
            var blogInfo = this.blog_view

            if(blogInfo.type == 0){
                blogInfo.product_menu = blogInfo.menu_id
            }else {
                blogInfo.product_menu = -1
            }

            if(!this.checkBlogParam(blogInfo)){
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
                tag_list:blogInfo.tag_list.map(function (value) {
                    return value.id
                }),
                subject_body:CKEDITOR.instances.rich_text.getData()
            }

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function (retVal) {
                if(retVal && retVal.code == 0){
                    lay_prompt("页面上新成功!")
                    vm.SearchByMenu(false)
                    $("#blog_view").modal("hide")
                }else {
                    lay_prompt('页面上新失败!')
                }
            })



        },

        checkBlogParam:function () {
            return true
        },

        modifyBlogManage:function(){
            var blogInfo = this.blog_view

            if(blogInfo.type == 1){
                blogInfo.product_id = -1
                blogInfo.product_menu = -1
            }

            if(!this.checkBlogParam(blogInfo)){
                return
            }

            var param_url_title = blogInfo.blog_title.toLowerCase().replace(/[^A-Za-z0-9]+/g,"-")

            var param = {
                id:blogInfo.blog_id,
                categories_id:blogInfo.menu_id,
                title:blogInfo.blog_title,
                url_title:param_url_title.endsWith("-")?param_url_title.substring(0,param_url_title.length-1):param_url_title,
                img_url:blogInfo.img_info.url,
                introduction:blogInfo.introduction,
                product_id:blogInfo.product_id,
                product_menu:blogInfo.product_menu,
                tag_list:blogInfo.tag_list.map(function (value) {
                    return value.id
                }),
                subject_body:CKEDITOR.instances.rich_text.getData()
            }

            var url = '/bs/modify_article_info'

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function (retVal) {
                if(retVal && retVal.code == 0){
                    lay_prompt("页面修改成功!")
                    vm.SearchByMenu(false)
                    $("#blog_view").modal("hide")
                }else {
                    lay_prompt('页面修改失败!')
                }
            })
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
                    for(item in retVal.data){
                        retVal.data[item]["select"] = false
                    }
                   vm.tags_list = retVal.data
                }
            })
        },

        getMenuProduct:function (menu_id,clear_proId) {
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
                if(clear_proId){
                    vm.blog_view.product_id = ""
                }
            })
        },


        //添加tag词
        addNewTags:function(){

            var that = this

            var url="/bs/create_tag"

            $.ajax({
                url:url,
                method:"post",
                data:JSON.stringify({
                    tag_name:this.tag_search.trim()
                })
            }).done(function (retVal) {
                if(retVal && retVal.code == 0){
                    retVal.data["select"] = false
                    that.tags_list.push(retVal.data)
                }
            })
        },


        addSelectTag:function (val,index) {
            if((-1 ==this.blog_view.tag_list.findIndex(function (value) {
                return value.id == val.id
            }))){
                this.blog_view.tag_list.push(val)
                val.select = true
            }
        },
        removeSelectTag:function (val,index) {
            this.blog_view.tag_list.splice(index,1)
            var tag_index=this.tags_list.findIndex(function (item) {
                return item.id == val.id
            })

            vm.$set(this.tags_list[tag_index],"select",false)
        },

        changeBlogType:function (type) {


            if(type == 0){
                this.blog_view.type=0
                this.blog_menu_list = this.menu_list.filter(function (value) {
                    return !value.is_product
                })
            }else{
                this.blog_view.type=1
                this.blog_menu_list = this.menu_list.filter(function (value) {
                    return value.is_product
                })
            }
        }
    },
})