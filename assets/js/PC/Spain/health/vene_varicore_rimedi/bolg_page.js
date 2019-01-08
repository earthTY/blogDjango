/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    BolgPage=function(){
        this.init = function(){
            vueBolgPage=new Vue({
                el: '#vueContainer',
                data: {
                    usercomments:[

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
            })

            initPage()

            function initPage(){

            }
        }
    }
})();

