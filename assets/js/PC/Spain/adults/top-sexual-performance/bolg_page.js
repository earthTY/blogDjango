/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    BolgPage=function(){
        this.init = function(){
            vueBolgPage=new Vue({
                el: '#vueContainer',
                data: {

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/top-gun",
                        imgUrl:urlImgBase+"hot_img/top_gun.png",
                        title:"TOP GUN Drops"
                    },

                    basepro:[
                        {
                            title:"5 Maneras De Mejorar La Intimidad en El Matrimonio",
                            imgUrl:urlImgBase+"intimacy/blog.png",
                            pageUrl:urlPageBase+"articles/intimacy",
                        },
                        {
                            title:"Aumenta Tu Rendimiento Sexual Con La Mejora Masculina Top Gun",
                            imgUrl:urlImgBase+"penis_enlargement/blog.jpg",
                            pageUrl:urlPageBase+"articles/penis-enlargement",
                        },
                        {
                            title:"Top Gun– Funciona – España – Composición – Efectos Secundarios – Dónde Comprar – Precio –Comentarios",
                            imgUrl:urlImgBase+"how_to_lengthen_the_penis/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lengthen-the-penis",
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

