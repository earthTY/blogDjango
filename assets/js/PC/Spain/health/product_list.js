/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    ProductList=function(){
        this.init = function(){
            vueProductList=new Vue({
                delimiters: ['[[', ']]'],
                el: '#vueContainer',
                data: {
                    productList:[
                        {
                            title:"¿Usted ha sido diagnosticado por venas varicosas?",
                            proImg:urlImgBase+"have-you-been-diagnosed-with-varicose-veins/varicose.png",
                            blogUrl:urlPageBase+"articles/have-you-been-diagnosed-with-varicose-veins",
                            proInfo:"¡No te apresures a ver a un cirujano! ¡Intenta las venas varicosas y el edema por una semana! Existe una opinión de que las venas varicosas no se pueden curar sin cirugía, y esta idea está profundamente arraigada en la opinión pública. Aunque esta afirmación fue rechazada a principios de la década de 2000, la mayoría de las personas todavía piensa que solo puede tratar las venas con cirugía."
                        },
                        {
                            title:"Tratamiento de Venas Novaricose",
                            proImg:urlImgBase+"varicore_veins_treatment/blog.jpg",
                            blogUrl:urlPageBase+"articles/varicore-veins-treatment",
                            proInfo:"Desde su pequeño conocimiento de la biología, usted sabe que las venas son los vasos sanguíneos que transportan la sangre desoxigenada de otras partes del cuerpo al corazón. Estas vetas hacen mucho trabajo y, como tales, deben tratarse en consecuencia."
                        },
                        {
                            title:"6 Formas Naturales De Eliminar Las Venas Varicosas",
                            proImg:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            blogUrl:urlPageBase+"articles/vene-varicore-rimedi",
                            proInfo:"Las venas varicosas son un problema bastante común que caracteriza las venas anormalmente grandes cerca de la superficie de la piel, más comúnmente en las pantorrillas y los muslos. Por lo general, ocurren cuando las venas desarrollan paredes debilitadas o válvulas defectuosas que regulan el flujo sanguíneo."
                        }
                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/novaricose",
                        imgUrl:urlImgBase+"hot_img/novaricose.png",
                        title:"Novaricose"
                    },

                    basepro:[
                        {
                            title:"Tratamiento de Venas Novaricose",
                            imgUrl:urlImgBase+"varicore_veins_treatment/blog.jpg",
                            pageUrl:urlPageBase+"articles/varicore-veins-treatment",
                        },
                        {
                            title:"6 Formas Naturales De Eliminar Las Venas Varicosas",
                            imgUrl:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            pageUrl:urlPageBase+"articles/vene-varicore-rimedi",
                        }
                    ]
                },
                methods: {

                },
                watch:{

                },
                created:function(){
                },
                mounted:function(){

                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

