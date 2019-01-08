/**
 * Created by Administrator on 2018/5/5 0005.
 */

var urlPageBase =  "/"

var urlImgBase =  "/static/img/mobile/english/"

var local = window.location

if(local.hostname != '127.0.0.1' && local.hostname != 'localhost'){
    urlPageBase = "https://www.healthguidewiki.com/"

    urlImgBase =  "https://www.healthguidewiki.com/static/img/mobile/english/"
}



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
    },
    {
        name:"CONTACT US",
        url:urlPageBase+"contact-us.html",
        dropmenu:[

        ]
    },
    {
        name:"ABOUT US",
        url:urlPageBase+"about-us.html",
        dropmenu:[

        ]
    }
]

var footernavList=[
    {
        name:"HOME",
        url:"/",
        dropmenu:[
            {
                name:"CONTACT US",
                url:urlPageBase+"contact-us.html"
            },
            {
                name:"ABOUT US",
                url:urlPageBase+"about-us.html"
            }
        ]
    },
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
    {
        name:"PRODUCTS",
        url:urlPageBase+"products",
        dropmenu:[
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
    },
    {
        name:"CONTACT US",
        url:urlPageBase+"contact-us.html",
        dropmenu:[

        ]
    },
    {
        name:"ABOUT US",
        url:urlPageBase+"about-us.html",
        dropmenu:[

        ]
    }
]


var productNavList=[
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