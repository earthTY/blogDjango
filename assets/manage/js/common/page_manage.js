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

        type:0,

        product_number:"",
        product_number_list_info:[],

        online_page_list:[],
        class_name:"",
        group_name:"",

        //上新修改时传参产品编号
        product_number_list:[],
        //上新修改时根据产品类型获取的产品集合
        product_list:[],

        page_online:{
            "name":"",
            "title":"",
            "item_bar":"",
            "discount":"",
            "price_now":"",
            "price_old":"",
            "discount_2_price_code":"",
            "discount_3_price_code":"",
            "product_number":"",

            banner_info:{
                imgList:[]
            },

            detail_info:{
                imgList:[]
            },

            parameter_info:{
                imgList:[]
            },


            commentPos:0,
            comments_info:[
                {
                    "user_id":"",
                    "user_name":"",
                    user_comment:"",
                    "is_best":true,
                    imgList:[],
                }
            ],

            combo_list:[
                {
                    "combo_name":"",
                    "combo_price":""
                }
            ]
        },

        page_modify:{
            "name":"",
            "title":"",
            "item_bar":"",
            "discount":"",
            "price_now":"",
            "price_old":"",
            "discount_2_price_code":"",
            "discount_3_price_code":"",
            "product_number":"",

            banner_info:{
                imgList:[]
            },

            detail_info:{
                imgList:[]
            },

            parameter_info:{
                imgList:[]
            },


            commentPos:0,
            comments_info:[
                 {
                     "user_id":"",
                     "user_name":"",
                     user_comment:"",
                     "is_best":true,
                     imgList:[],
                 }
            ],
        }
    },
    created: function () {
        this.start_time = MC_GetDay(0);
        this.end_time = MC_GetDay(0);

        this.getProductNum()
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

        this.Search(true,0)
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
        goToPage:function (pagenum) {
            if(pagenum<1 || pagenum>Math.ceil(vm.total / vm.count)){
                return
            }

            vm.start = (pagenum-1) * vm.count

            vm.Search(false)
        },

        getProductNum:function(){
            var url = "/get_product_number_list"

            $.ajax({
                url:url,
                method:"get",
            }).done(function (retVal) {
                if(retVal && retVal.code ==0 ){
                    vm.product_number_list_info = retVal.data
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

        onSearchGroupByClass:function(){
            vm.getGroupByClass(vm.class_name, function (groupClassList) {
                vm.group_name = ""
                vm.current_group_list = groupClassList
            })
        },

        //上新修改时操作
        modifyCommentsInfoList:function(operate_type,isAdd,pos){
            if(operate_type == "add"){
                isAdd ? vm.page_online.comments_info.push({
                    user_name:"",
                    user_comment:"",
                    is_best:true,
                    imgList:[],
                }):  vm.page_online.comments_info.splice(pos, 1)
            }else{
                isAdd ? vm.page_modify.comments_info.push({
                    user_name:"",
                    user_comment:"",
                    is_best:true,
                    imgList:[],
                }):  vm.page_modify.comments_info.splice(pos, 1)
            }
        },

        modifyComboList:function(operate_type,isAdd,pos){
            if(operate_type == "add"){
                isAdd ? vm.page_online.combo_list.push({
                    "combo_name":"",
                    "combo_price":""
                }):  vm.page_online.combo_list.splice(pos, 1)
            }else{
                isAdd ? vm.page_modify.combo_list.push({
                    "combo_name":"",
                    "combo_price":""
                }):  vm.page_modify.combo_list.splice(pos, 1)
            }
        },

        prevImgPos:function(isOnline,operate_type,imgPos,linePos){
            var operate = isOnline ? vm.page_online : vm.page_modify

            if(operate_type != "comments_info"){
                Unit.prevSwap(operate[operate_type].imgList,imgPos)
            }else{
                Unit.prevSwap(operate[operate_type][linePos].imgList,imgPos)
            }
        },

        nextImgPos:function(isOnline,operate_type,imgPos,linePos){
            var operate = isOnline ? vm.page_online : vm.page_modify

            if(operate_type != "comments_info"){
                Unit.nextSwap(operate[operate_type].imgList,imgPos)
            }else{
                Unit.nextSwap(operate[operate_type][linePos].imgList,imgPos)
            }
        },
        //上新修改时操作结束

        //上新时图片文件上传方法
        handleGetUrlImage:function($event,type,pos){
            var linkInfo = $($event.target).prev().val()

            if(linkInfo.trim().length == 0){
                return
            }

            if(type == "banner"){
                vm.page_online.banner_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })

            }else if(type == "detail"){
                vm.page_online.detail_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }else if(type == "parameter"){
                vm.page_online.parameter_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }else{
                vm.page_online.comments_info[pos].imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }
            $($event.target).prev().val("")
        },

        handleSuccessBanner:function(res){
            successLoadImg(vm.page_online.banner_info,res)
        },

        handleRemoveBanner:function  (pos) {
            removeImg(vm.page_online.banner_info,pos)
        },

        handleSuccessDetail:function(res){
            successLoadImg(vm.page_online.detail_info,res)
        },

        handleRemoveDetail:function  (pos) {
            removeImg(vm.page_online.detail_info,pos)
        },

        handleSuccessParameter:function(res){
            successLoadImg(vm.page_online.parameter_info,res)
        },

        handleRemoveParameter:function  (pos) {
            removeImg(vm.page_online.parameter_info,pos)
        },

        handleSuccessIntroduction:function (res){
            successLoadImg(vm.page_online.comments_info[vm.page_online.commentPos],res)
        },

        handleRemoveIntroduction:function  (detailPos,imgPos) {
            removeImg(vm.page_online.comments_info[detailPos],imgPos)
        },
        //上新时图片文件上传结束


        //修改时图片文件上传方法
        modifyHandleGetUrlImage:function($event,type,pos){
            var linkInfo = $($event.target).prev().val()

            if(linkInfo.trim().length == 0){
                return
            }

            if(type == "banner"){
                vm.page_modify.banner_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })

            }else if(type == "detail"){
                vm.page_modify.detail_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }else if(type == "parameter"){
                vm.page_modify.parameter_info.imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }else{
                vm.page_modify.comments_info[pos].imgList.push({
                    status:"finished",
                    url:linkInfo
                })
            }

            $($event.target).prev().val("")
        },

        modifyHandleSuccessBanner:function(res){
            successLoadImg(vm.page_modify.banner_info,res)
        },

        modifyHandleRemoveBanner:function  (pos) {
            removeImg(vm.page_modify.banner_info,pos)
        },

        modifyHandleSuccessDetail:function(res){
            successLoadImg(vm.page_modify.detail_info,res)
        },

        modifyHandleRemoveDetail:function  (pos) {
            removeImg(vm.page_modify.detail_info,pos)
        },

        modifyHandleSuccessParameter:function(res){
            successLoadImg(vm.page_modify.parameter_info,res)
        },

        modifyHandleRemoveParameter:function  (pos) {
            removeImg(vm.page_modify.parameter_info,pos)
        },

        modifyHandleSuccessIntroduction:function (res){
            successLoadImg(vm.page_modify.comments_info[vm.page_modify.commentPos],res)
        },

        modifyHandleRemoveIntroduction:function  (detailPos,imgPos) {
            removeImg(vm.page_modify.comments_info[detailPos],imgPos)
        },
        //修改时图片文件上传结束

        //上新页面方法
        openPageOnlineView:function(){
            vm.resetOnlineData()

            $("#page_online").modal()
        },

        resetOnlineData:function(){
            vm.page_online = {
                "name":"",
                "title":"",
                "item_bar":"",
                "discount":"",
                "price_now":"",
                "price_old":"",
                "discount_2_price_code":"",
                "discount_3_price_code":"",
                "product_number":"",

                banner_info:{
                    imgList:[]
                },

                detail_info:{
                    imgList:[]
                },

                parameter_info:{
                    imgList:[]
                },


                commentPos:0,
                comments_info:[
                    {
                        user_id:"",
                        user_name:"",
                        user_comment:"",
                        is_best:true,
                        imgList:[],
                    }
                ],

                combo_list:[
                    {
                        "combo_name":"",
                    }
                ]
            }

            vm.product_list = []

            vm.product_number_list = []
        },

        addPageManage:function(){
            var param = getOnlineModifyParam(vm.page_online)

            if(!param){
                return
            }

            var url = "/set_product_info"

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function(retVal){
                if(retVal.code == 0){
                    lay_prompt("页面上线成功！")
                    vm.Search()
                    vm.getProductNum()
                    $("#page_online").modal("hide")
                }else if(retVal.code == 1){
                    lay_prompt("页面上线失败,页面名称不能重复！")
                }else{
                    lay_prompt("页面上线失败,产品编号不能重复！")
                }
            })
        },
        //上新页面方法结束

        //修改页面方法
        openModifyPageView:function(objPage){
            flagModify = true

            var objPage = JSON.parse(JSON.stringify(objPage))

            //初始化banner信息
            var bannerImgList = objPage.banner.map(function(val){
                return {
                    status:"finished",
                    url:val.img_url
                }
            })

            //初始化详情图
            var detailImgList = objPage.product_intro.map(function(val){
                return {
                    status:"finished",
                    url:val.img_url
                }
            })

            //初始化参数图
            var parameterImgList = objPage.product_argument.map(function(val){
                return {
                    status:"finished",
                    url:val.img_url
                }
            })

            //初始化评论信息
            var commentsList = objPage.user_infor.map(function(val){
                return {
                    "user_id":val.user_id,
                    "user_name":val.user_name,
                    user_comment:val.msg,
                    "is_best":val.star != "/static/css/images/sakura/star45.png",
                    imgList:val.user_infor_img.map(function(line){
                        return {
                            status:"finished",
                            url:line.img_url
                        }
                    }),
                }
            })

            var pageInfo = {
                id:objPage.id,
                "name":objPage.name,
                "title":objPage.title,
                "item_bar":objPage.item_bar,
                "discount":objPage.discount,
                "price_now":objPage.price_now,
                "price_old":objPage.price_old,
                "discount_2_price_code":objPage.discount_2_price_code,
                "discount_3_price_code":objPage.discount_3_price_code,
                "product_number":objPage.product_number,

                banner_info:{
                    imgList:bannerImgList
                },

                detail_info:{
                    imgList:detailImgList
                },

                parameter_info:{
                    imgList:parameterImgList
                },


                commentPos:0,
                comments_info:commentsList,
                
                combo_list:objPage.product_combo
            }

            vm.page_modify = pageInfo


            $("#page_modify").modal()
        },

        modifyPageManage:function(){

            var param = getOnlineModifyParam(vm.page_modify)

            if(!param){
                return
            }

            var url = "/change_product_info"

            $.ajax({
                url:url,
                method:"post",
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(param)
            }).done(function(retVal){
                if(retVal.code == 0){
                    lay_prompt("页面修改成功！")
                    vm.Search()
                    $("#page_modify").modal("hide")
                }else{
                    lay_prompt("页面修改失败！")
                }
            })
        }
        //修改页面方法结束
    },
})


function successLoadImg(imggroup,res){
    imggroup.imgList.push({
        status:"finished",
        url:res.data.uploaded_file_url
    })
}

function removeImg(imggroup,pos){
    imggroup.imgList.splice(pos, 1)
}

function getOnlineModifyParam(obj){
    var commentsList = []
    for(item in obj.comments_info){
        var obj_data = obj.comments_info[item]
        var obj_one = {
            "user_id":obj_data.user_id,
            "user_name":obj_data.user_name,
            "star":obj_data.is_best ? "/static/css/images/sakura/star50.png" : "/static/css/images/sakura/star45.png",
            "msg":obj_data.user_comment,
            user_infor_img_list:obj_data.imgList.map(function(val){
                return val.url
            })
        }

        commentsList.push(obj_one)
    }

    var param = {
        "name":obj.name,
        "title":obj.title,
        "item_bar":obj.item_bar,
        "discount":obj.discount,
        "price_now":obj.price_now,
        "price_old":obj.price_old,
        "discount_2_price_code":obj.discount_2_price_code,
        "discount_3_price_code":obj.discount_3_price_code,
        "product_number":obj.product_number,
        banner_list:obj.banner_info.imgList.map(function(val){
            return val.url
        }),
        product_intro_list:obj.detail_info.imgList.map(function(val){
            return val.url
        }),
        product_argument_list:obj.parameter_info.imgList.map(function(val){
            return val.url
        }),
        user_infor_list:commentsList,
        combo_list:obj.combo_list
    }



    return checkPageData(param) ? param : false
}


function checkPageData(data){
    if(data.name.trim().length == 0){
        lay_prompt("请输入链接名称！")
        return false
    }

    if(!/^\w+$/.test(data.name.trim())){
        lay_prompt("链接名称只能由数字、字母和下滑线组成！")
        return false
    }

    if(data.title.trim().length == 0){
        lay_prompt("请输入页面标题！")
        return false
    }

    if(!Unit.isProductNumber(data.product_number)){
        lay_prompt("产品编号必须在ecsp1002000 ~ ecsp1003000之间！")
        return false
    }

    if(data.item_bar.length == 0){
        lay_prompt("请输入产品名称！")
        return false
    }

    if(data.discount.length == 0){
        lay_prompt("请输入折扣标语！")
        return false
    }

    if(!Unit.isPositiveInteger(data.price_now) || !Unit.isPositiveInteger(data.price_old)){
        lay_prompt("价格只能为正整数！")
        return false
    }

    if(+data.price_now >= +data.price_old){
        lay_prompt("促销价必须小于原价！")
        return false
    }

    if(data.discount_2_price_code.toString().trim().length == 0 || data.discount_3_price_code.toString().trim().length == 0){
        lay_prompt("折扣信息不能为空！")
        return false
    }

    if((data.discount_2_price_code < 0 || data.discount_2_price_code > 1) || (data.discount_3_price_code < 0 || data.discount_3_price_code > 1)){
        lay_prompt("折扣信息只能在0——1之间！")
        return false
    }

    if(data.discount_3_price_code > data.discount_2_price_code){
        lay_prompt("三件折扣不能大于两件折扣！")
        return false
    }

    if(data.banner_list.length == 0){
        lay_prompt("请选择页面banner图！")
        return false
    }

    if(data.product_intro_list.length == 0){
        lay_prompt("请选择页面详情图！")
        return false
    }

    if(data.product_argument_list.length == 0){
        lay_prompt("请选择页面参数图！")
        return false
    }

    if(data.user_infor_list.length == 0){
        lay_prompt("请填写评论信息！")
        return false
    }

    if(!data.user_infor_list.every(function(val){
            return val.user_name.trim().toString().length > 0 &&
                val.msg.trim().toString().length > 0
        })){

        lay_prompt("请检查评论信息是否填写完整！")
        return false
    }

    if(data.combo_list.length == 0){
        lay_prompt("请填写套餐信息")
        return
    }

    var checkCombo = data.combo_list.every(function(val){
        return val.combo_name.trim().toString().length > 0 && Unit.isPositiveInteger(val.combo_price)
    })

    if(!checkCombo){

        lay_prompt("请检查套餐信息,套餐名不能为空，套餐价格必须为正整数！")
        return false
    }

    return true
}
