/**
 * Created by Administrator on 2018/5/4 0004.
 */


//菜单导航
Vue.component('navigation-bar', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/navigation.html",
    }).then(function (res) {
        resolve({
            delimiters: ['[[', ']]'],
            template: res,
            data:function(){
                return {
                    navigationList:navigationList
                }
            },
            mounted:function(){
                dropMenu()
            },
            methods:{
                changePageLan:function(lan){
                    var xpath = window.location.pathname.split("/")

                    if(lan == "us"){
                        xpath.splice(1,1)
                    }else{
                        var areas = ['es','it']
                        if(areas.indexOf(xpath[1])>-1){
                            xpath[1] = lan
                        }else{
                            xpath.splice(1,0,lan)
                        }
                    }

                    var path = xpath.join("/")

                    location.href = path.length == 0 ? "/" : path
                }
            }
        })
    })
});

//底部菜单
Vue.component('v-footer', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/footer.html",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            data:function(){
                return {
                    footernavList:footernavList
                }
            }
        })
    })
});

//站点导航
Vue.component('v-site', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/site-menu.html",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            props:{
                site:{
                    type:Array,
                }
            },
            data:function(){
                return {
                    urlImgBase:urlImgBase,
                }
            },
        })
    })
});

//评论组件
Vue.component('v-comments', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/comments.html",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            props:{
                comments:{
                    type:Array,
                    default:{}
                }
            },
            data:function(){
                return {
                    urlImgBase:urlImgBase,
                    inputComments:{
                        name:"",
                        comment:"",
                        email:""
                    }
                }
            },
            methods:{
                addComments:function(){
                    var comm=this.inputComments
                    if(comm.name.trim().length>0 && comm.comment.trim().length>0){
                        var userComm={
                            name:comm.name.trim(),
                            star:$(".commit_star .text_success").length,
                            remark:comm.comment.trim()
                        }
                        this.comments.push(userComm)
                    }
                    this.inputComments={
                        name:"",
                        comment:"",
                        email:""
                    }
                    $(".commit_star strong").removeClass("text_success")
                    $("#user_commit_comments").fadeOut();
                }
            }
        })
    })
});

//回到顶部与添加评论
Vue.component('top-comments', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/top-comments.html",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            props:{
                comment:{
                    type:Boolean,
                    default:false
                }
            },
            data:function(){
                return {
                    urlImgBase:urlImgBase,
                }
            },
            mounted:function(){
                $(".go_top").click(function(){
                    $('html,body').animate({
                        scrollTop:0
                    },'fast')
                })

                $(".add_comments").click(function(){
                    $("#user_commit_comments").fadeIn();
                })

                $(".commit_star>strong").click(function(index,val){
                    $(this).siblings().removeClass("text_success")
                    $(this).addClass("text_success").prevAll().addClass("text_success")
                })

                $(".cancel").click(function(){
                    $("#user_commit_comments").fadeOut();
                })
            },
        })
    })
});

function dropMenu(){
    $(".nav-icon").click(function(){
        $(".mylayer").not($(this).next(".drop_group")).slideUp()

        $(this).next(".drop_group").fadeIn()
    })
    $(".close").click(function () {
        $(this).parent(".drop_group").fadeOut()
    })

    $(".firstMenu").click(function(){
        $(this).siblings(".firstMenu").find("p .iconfont").removeClass("active")
        $(this).siblings(".firstMenu").find(".dropDown").slideUp()
        $(this).find("p .iconfont").toggleClass("active")
        $(this).find(".dropDown").stop().slideToggle(200);
    })

    $(".currentLan img,.currentLan span").click(function(){
        $(".mylayer").not($(this).parent().next(".dropDown")).slideUp()
        $(this).parent().find(".currentLan i").toggleClass("active")
        $(this).parent().next(".dropDown").stop().slideToggle(200)
    })
}