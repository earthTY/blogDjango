/**
 * Created by Administrator on 2018/5/4 0004.
 */
//�˵�����
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
                    navigationList:navigationList,
                    urlImgBase:urlImgBase,
                }
            },
            mounted:function(){
                dropMenu()

                $(window).scroll(function (ev) {
                    var ev = ev||event

                    var scrollTop =$(ev.target).scrollTop()

                    if(scrollTop>100){
                        $(".headerwarp").addClass("fixed_top")
                    }else{
                        $(".headerwarp").removeClass("fixed_top")
                    }

                    if(scrollTop>500){
                        $("#go_top").addClass("show")
                    }else{
                        $("#go_top").removeClass("show")
                    }
                })

                $("#go_top").click(function () {
                    $("html,body").animate({
                        scrollTop:0
                    },500)
                })
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

//�ײ��˵�
Vue.component('footer-nav', function (resolve, reject) {
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
                    footernavList:footernavList,
                    urlImgBase:urlImgBase,
                }
            },
        })
    })
});

//��������
Vue.component('v-aside', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: urlPageBase+"include/aside.html",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            props:{
                bestproduct:{
                    type:String,
                    default:''
                },
                menuname:{
                    type:String,
                    default:''
                },
                product:{
                    type:Boolean,
                    default:false
                },
                hot_word:{
                    /*type:Array,
                     default:[]*/
                },
                hotpro:{
                    type:Object,
                    default:{
                        pageUrl:"",
                        imgUrl:"",
                        title:"",
                        btnPos:{}
                    }
                },
                basepro:{
                    /*type:Array,
                     default:[]*/
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

//�������
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
                    default:[]
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
            mounted:function(){
                $(".commit_star>strong").click(function(index,val){
                    $(this).siblings().removeClass("text_success")
                    $(this).addClass("text_success").prevAll().addClass("text_success")
                })
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
                }
            }
        })
    })
});

function dropMenu(){
    $(".firstMenu").hover(function(){
        $(this).siblings(".firstMenu").find("a:first-child i").removeClass("active")
        $(this).find("a:first-child i").addClass("active")
        $(this).find(".dropDown").stop().slideDown(200).parents(".firstMenu").siblings(".firstMenu").find(".dropDown").stop().slideUp(200)
    },function(){
        $(this).find(".dropDown").stop().slideUp(200)
        $(".firstMenu>a i").removeClass("active")
    })

    $(".language").hover(function(){
        $(this).find(".currentLan i").addClass("active")
        $(this).find(".dropDown").stop().slideDown(200)
    },function(){
        $(this).find(".currentLan i").removeClass("active")
        $(this).find(".dropDown").stop().slideUp(200)
    })
}