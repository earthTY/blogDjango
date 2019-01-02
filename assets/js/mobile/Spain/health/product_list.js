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
                            title:"Tratamiento de Venas Novaricose",
                            proImg:urlImgBase+"varicore_veins_treatment/blog.jpg",
                            blogUrl:urlPageBase+"articles/tratamiento-varices",
                            proInfo:"Desde su pequeño conocimiento de la biología, usted sabe que las venas son los vasos sanguíneos que transportan la sangre desoxigenada de otras partes del cuerpo al corazón. Estas vetas hacen mucho trabajo y, como tales, deben tratarse en consecuencia."
                        },
                        {
                            title:"6 Formas Naturales De Eliminar Las Venas Varicosas",
                            proImg:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            blogUrl:urlPageBase+"articles/vene-varicore-rimedi",
                            proInfo:"Las venas varicosas son un problema bastante común que caracteriza las venas anormalmente grandes cerca de la superficie de la piel, más comúnmente en las pantorrillas y los muslos. Por lo general, ocurren cuando las venas desarrollan paredes debilitadas o válvulas defectuosas que regulan el flujo sanguíneo."
                        }
                    ],
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

