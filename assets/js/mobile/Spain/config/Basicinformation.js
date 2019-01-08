/**
 * Created by Administrator on 2018/5/5 0005.
 */

var urlPageBase =  "/es/"

var urlImgBase =  "/static/img/mobile/Spain/"

var local = window.location

if(local.hostname != '127.0.0.1' && local.hostname != 'localhost'){
    urlPageBase = "https://www.healthguidewiki.com/es/"

    urlImgBase =  "https://www.healthguidewiki.com/static/img/mobile/Spain/"
}


var navigationList=[
    /*{
        name:"INICIO",
        url:"/es/",
        dropmenu:[

        ]
    },*/
    {
        name:"PÉRDIDA DE PESO",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            /*{
                name:"ELIMINAR GRASA ABDOMINAL",
                url:urlPageBase+"articles/how-to-lose-belly-fat"
            },
            {
                name:"DIETA PARA PERDER GRASA",
                url:urlPageBase+"articles/best-foods-for-weight-loss"
            },
            {
                name:"COMO PERDER PESO",
                url:urlPageBase+"articles/get-in-shape-for-women",
            },*/
        ]
    },
    {
        name:"ADULTO",
        url:urlPageBase+"adults",
        dropmenu:[
            /*{
                name:"ALARGAMIENTO DE PENE",
                url:urlPageBase+"articles/penis-enlargement"
            },
            {
                name:"DISFUNCIÓN ERÉCTIL",
                url:urlPageBase+"articles/intimacy"
            },
            {
                name:"COMO ALARGAR EL PENE",
                url:urlPageBase+"articles/how-to-lengthen-the-penis"
            }*/
        ]
    },
    {
        name:"SALUD",
        url:urlPageBase+"health",
        dropmenu:[
            /*{
                name:"TRATAMIENTO VARICES",
                url:urlPageBase+"articles/varicore-veins-treatment"
            },
            {
                name:"ELIMINAR VARICES",
                url:urlPageBase+"articles/vene-varicore-rimedi"
            }*/
        ]
    },
    {
        name:"BELLEZA",
        url:urlPageBase+"beauty",
        dropmenu:[
            /*{
                name:"CREMA ANTIARRUGAS",
                url:urlPageBase+"articles/anti-aging-cream"
            },
            {
                name:"CUIDADO DE LA PIEL",
                url:urlPageBase+"articles/skincare"
            }*/
        ]
    },
    {
        name:"PRODUCTOS",
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
    },
    {
        name:"CONTACTENOS",
        url:urlPageBase+"contact-us.html",
        dropmenu:[]
    },
    {
        name:"SOBRE NOSOTROS",
        url:urlPageBase+"about-us.html",
        dropmenu:[]
    }
]

var footernavList=[
    /*{
     name:"INICIO",
     url:"/es/",
     dropmenu:[

     ]
     },*/
    {
        name:"PÉRDIDA DE PESO",
        url:urlPageBase+"weight-loss",
        dropmenu:[
            /*{
             name:"ELIMINAR GRASA ABDOMINAL",
             url:urlPageBase+"articles/how-to-lose-belly-fat"
             },
             {
             name:"DIETA PARA PERDER GRASA",
             url:urlPageBase+"articles/best-foods-for-weight-loss"
             },
             {
             name:"COMO PERDER PESO",
             url:urlPageBase+"articles/get-in-shape-for-women",
             },*/
        ]
    },
    {
        name:"ADULTO",
        url:urlPageBase+"adults",
        dropmenu:[
            /*{
             name:"ALARGAMIENTO DE PENE",
             url:urlPageBase+"articles/penis-enlargement"
             },
             {
             name:"DISFUNCIÓN ERÉCTIL",
             url:urlPageBase+"articles/intimacy"
             },
             {
             name:"COMO ALARGAR EL PENE",
             url:urlPageBase+"articles/how-to-lengthen-the-penis"
             }*/
        ]
    },
    {
        name:"SALUD",
        url:urlPageBase+"health",
        dropmenu:[
            /*{
             name:"TRATAMIENTO VARICES",
             url:urlPageBase+"articles/varicore-veins-treatment"
             },
             {
             name:"ELIMINAR VARICES",
             url:urlPageBase+"articles/vene-varicore-rimedi"
             }*/
        ]
    },
    {
        name:"BELLEZA",
        url:urlPageBase+"beauty",
        dropmenu:[
            /*{
             name:"CREMA ANTIARRUGAS",
             url:urlPageBase+"articles/anti-aging-cream"
             },
             {
             name:"CUIDADO DE LA PIEL",
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