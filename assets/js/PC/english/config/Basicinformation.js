/**
 * Created by Administrator on 2018/5/5 0005.
 */

var urlPageBase =  "/"

var urlImgBase =  "/static/img/PC/english/"

var local = window.location

if(local.hostname != '127.0.0.1' && local.hostname != 'localhost'){
    urlPageBase = "https://www.healthguidewiki.com/"

    urlImgBase =  "https://www.healthguidewiki.com/static/img/PC/english/"
}


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


var mixinsComment = {
    data:{
        inputComments:{
            name:"",
            comment:"",
            email:""
        },
        usercomments:[

        ],
    },
    mounted:function(){
        $(".commit_star>strong").click(function(index,val){
            $(this).siblings().removeClass("text_success")
            $(this).addClass("text_success").prevAll().addClass("text_success")
        })

        $("#go_top").click(function () {
            $("html,body").animate({
                scrollTop:0
            },500)
        })

        dropMenu()
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
                this.usercomments.push(userComm)
            }
            this.inputComments={
                name:"",
                comment:"",
                email:""
            }
            $(".commit_star strong").removeClass("text_success")
        }
    }
};

var navigationList=[
    /*{
        name:"HOME",
        url:"/",
        dropmenu:[

        ]
    },*/
    {
        name:"WEIGHT LOSS",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            /*{
                name:"HOW TO LOSE BELLY FAT",
                url:urlPageBase+"articles/how-to-lose-belly-fat"
            },
            {
                name:"BEST FOODS FOR WEIGHT LOSS",
                url:urlPageBase+"articles/best-foods-for-weight-loss"
            },
            {
                name:"GET IN SHAPE FOR WOMEN",
                url:urlPageBase+"articles/get-in-shape-for-women"
            }*/
        ]
    },
    {
        name:"ADULTS",
        url:urlPageBase+"adults",
        dropmenu:[
            /*{
                name:"PENIS ENLARGEMENT",
                url:urlPageBase+"articles/penis-enlargement"
            },
            {
                name:"INTIMACY",
                url:urlPageBase+"articles/intimacy"
            },
            {
                name:"HOW TO INCREASE PENIS SIZE",
                url:urlPageBase+"articles/how-to-increase-penis-size"
            },*/
        ]
    },
    {
        name:"HEALTH",
        url:urlPageBase+"health",
        dropmenu:[
            /*{
                name:"VARICOSE VEINS TREATMENT",
                url:urlPageBase+"articles/varicore-veins-treatment"
            },
            {
                name:"VENE VARICOSE RIMEDI",
                url:urlPageBase+"articles/vene-varicore-rimedi"
            }*/
        ]
    },
    {
        name:"BEAUTY",
        url:urlPageBase+"beauty",
        dropmenu:[
            /*{
                name:"ANTI AGING CREAM",
                url:urlPageBase+"articles/anti-aging-cream"
            },
            {
                name:"SKINCARE",
                url:urlPageBase+"articles/skincare"
            }*/
        ]
    },
    {
        name:"PRODUCTS",
        url:urlPageBase+"products",
        dropmenu:[
            {
                name:"MAX ENHANCER",
                url:urlPageBase+"products/max-enhancer"
            },
            {
                name:"SEA MIRACLE",
                url:urlPageBase+"products/sea-miracle"
            },
            {
                name:"EASY LEAN",
                url:urlPageBase+"products/easy-lean"
            },
            {
                name:"TOP GUN DROPS",
                url:urlPageBase+"products/top-gun"
            },
            {
                name:"SIMPLE  YOUNG",
                url:urlPageBase+"products/simple-young"
            },
            {
                name:"NOVARICOSE",
                url:urlPageBase+"products/novaricose"
            }
        ]
    }
]

var footernavList=[
    {
        name:"WEIGHT LOSS",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            {
                name:"HOW TO LOSE BELLY FAT",
                url:urlPageBase+"articles/how-to-lose-belly-fat"
            },
            {
                name:"BEST FOODS FOR WEIGHT LOSS",
                url:urlPageBase+"articles/best-foods-for-weight-loss"
            },
            {
                name:"GET IN SHAPE FOR WOMEN",
                url:urlPageBase+"articles/get-in-shape-for-women"
            }
        ]
    },
    {
        name:"ADULTS",
        url:urlPageBase+"adults",
        dropmenu:[
            {
                name:"PENIS ENLARGEMENT",
                url:urlPageBase+"articles/penis-enlargement"
            },
            {
                name:"INTIMACY",
                url:urlPageBase+"articles/intimacy"
            },
            {
                name:"HOW TO INCREASE PENIS SIZE",
                url:urlPageBase+"articles/how-to-increase-penis-size"
            },
        ]
    },
    {
        name:"HEALTH",
        url:urlPageBase+"health",
        dropmenu:[
            {
                name:"VARICOSE VEINS TREATMENT",
                url:urlPageBase+"articles/varicore-veins-treatment"
            },
            {
                name:"VENE VARICOSE RIMEDI",
                url:urlPageBase+"articles/vene-varicore-rimedi"
            }
        ]
    },
    {
        name:"BEAUTY",
        url:urlPageBase+"beauty",
        dropmenu:[
            {
                name:"ANTI AGING CREAM",
                url:urlPageBase+"articles/anti-aging-cream"
            },
            {
                name:"SKINCARE",
                url:urlPageBase+"articles/skincare"
            }
        ]
    },
    /*{
        name:"PRODUCTS",
        url:urlPageBase+"products",
        dropmenu:[
            {
                name:"EASY LEAN",
                url:urlPageBase+"products/easy-lean",
            },
            {
                name:"TOP GUN DROPS",
                url:urlPageBase+"products/top-gun",
            },
            {
                name:"SIMPLE  YOUNG",
                url:urlPageBase+"products/simple-young",
            },
            {
                name:"NOVARICOSE",
                url:urlPageBase+"products/novaricose",
            }
        ]
    },
    {
        name:"CONTACT US",
        url:urlPageBase+"contact-us.html",
    }*/
]

var productNavList=[
    {
        name:"MAX ENHANCER",
        url:urlPageBase+"products/max-enhancer"
    },
    {
        name:"SEA MIRACLE",
        url:urlPageBase+"products/sea-miracle",
    },
    {
        name:"EASY LEAN",
        url:urlPageBase+"products/easy-lean",
    },
    {
        name:"TOP GUN DROPS",
        url:urlPageBase+"products/top-gun",
    },
    {
        name:"SIMPLE  YOUNG",
        url:urlPageBase+"products/simple-young",
    },
    {
        name:"NOVARICOSE",
        url:urlPageBase+"products/novaricose",
    }
]


function initPageList(currentPage,pageCount){
    var listCount = pageCount>5 ? 5:pageCount;
    $(".pageList").html("");
    for(var i=0;i<listCount;i++){
        $("<li>"+(i+1)+"</li>").click(function(ev){
            (function (ev,pageCount) {
                goToPage(ev,pageCount)
            })(ev,pageCount)
        }).appendTo($(".pageList"))
    }

    changePage(currentPage,pageCount)
}

function changePage(skipPage,pageCount){
    var clickPage=skipPage;

    $(".pageList li").each(function(index,val){
        if(clickPage<3){
            $(val).text(index+1);
            return;
        }
        if(clickPage>=3 && clickPage<pageCount-1){
            $(val).text(clickPage-2+index)
        }
        if(clickPage>=pageCount-1){
            $(val).text(pageCount-($(".pageList li").length-1)+index)
        }
    })
    $(".pageList li").removeClass("active").filter(":contains("+clickPage+")").addClass("active")
}

function goToPage(ev,pageCount){
    var ev=ev||event;
    var goNum=$(ev.target).text()||$(ev.target).val();
    if(+goNum>pageCount || +goNum<1)
        return;

    var xPath = window.location.pathname.split('/')

    xPath.shift()

    if(goNum == 1){
        if($.isNumeric(xPath[xPath.length-1]))
            xPath.pop()
    }else{
        if(!$.isNumeric(xPath[xPath.length-1]))
            xPath.push(goNum)
        else
            xPath[xPath.length-1] = goNum
    }

    location.href = urlPageBase + xPath.join('/')


}