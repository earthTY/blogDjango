/**
 * Created by Administrator on 2018/5/5 0005.
 */
var urlPageBase =  "/it/"

var urlImgBase =  "/static/img/PC/Italy/"

var local = window.location

if(local.hostname != '127.0.0.1' && local.hostname != 'localhost'){
    urlPageBase = "https://www.healthguidewiki.com/it/"

    urlImgBase =  "https://www.healthguidewiki.com/static/img/PC/Italy/"
}

var navigationList=[
    /*{
        name:"CASA",
        url:"/it/",
        dropmenu:[

        ]
    },*/
    {
        name:"PERDITA DI PESO",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            /*{
                name:"COME ACCELERARE IL METABOLISMO",
                url:urlPageBase+"articles/how-to-lose-belly-fat"
            },
            {
                name:"DIMAGRIRE VELOCEMENTE",
                url:urlPageBase+"articles/best-foods-for-weight-loss"
            }*/
        ]
    },
    {
        name:"ADULTO",
        url:urlPageBase+"adults",
        dropmenu:[
            /*{
                name:"ALLUNGAMENTO PENE",
                url:urlPageBase+"articles/penis-enlargement"
            },
            {
                name:"DISFUNZIONE ERETTILE",
                url:urlPageBase+"articles/intimacy"
            }*/
        ]
    },
    {
        name:"SALUTE",
        url:urlPageBase+"health",
        dropmenu:[
            /*{
                name:"VENE VARICOSE",
                url:urlPageBase+"articles/varicore-veins-treatment"
            },
            {
                name:"VENE VARICOSE RIMEDI",
                url:urlPageBase+"articles/vene-varicore-rimedi"
            }*/
        ]
    },
    {
        name:"BELLEZZA",
        url:urlPageBase+"beauty",
        dropmenu:[
            /*{
                name:"CREMA ANTIRUGHE",
                url:urlPageBase+"articles/anti-aging-cream"
            },
            {
                name:"CURE DELLA PELLE",
                url:urlPageBase+"articles/skincare"
            }*/
        ]
    },
    {
        name:"PRODOTTI",
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
                name:"SIMPLE YOUNG",
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
    /*{
     name:"CASA",
     url:"/it/",
     dropmenu:[

     ]
     },*/
    {
        name:"PERDITA DI PESO",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            /*{
             name:"COME ACCELERARE IL METABOLISMO",
             url:urlPageBase+"articles/how-to-lose-belly-fat"
             },
             {
             name:"DIMAGRIRE VELOCEMENTE",
             url:urlPageBase+"articles/best-foods-for-weight-loss"
             }*/
        ]
    },
    {
        name:"ADULTO",
        url:urlPageBase+"adults",
        dropmenu:[
            /*{
             name:"ALLUNGAMENTO PENE",
             url:urlPageBase+"articles/penis-enlargement"
             },
             {
             name:"DISFUNZIONE ERETTILE",
             url:urlPageBase+"articles/intimacy"
             }*/
        ]
    },
    {
        name:"SALUTE",
        url:urlPageBase+"health",
        dropmenu:[
            /*{
             name:"VENE VARICOSE",
             url:urlPageBase+"articles/varicore-veins-treatment"
             },
             {
             name:"VENE VARICOSE RIMEDI",
             url:urlPageBase+"articles/vene-varicore-rimedi"
             }*/
        ]
    },
    {
        name:"BELLEZZA",
        url:urlPageBase+"beauty",
        dropmenu:[
            /*{
             name:"CREMA ANTIRUGHE",
             url:urlPageBase+"articles/anti-aging-cream"
             },
             {
             name:"CURE DELLA PELLE",
             url:urlPageBase+"articles/skincare"
             }*/
        ]
    },
]

var productNavList=[
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