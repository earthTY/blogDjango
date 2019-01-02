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
                        pageUrl:urlPageBase+"products/simple-young",
                        imgUrl:urlImgBase+"hot_img/simple_young.png",
                        title:"Simple Young"
                    },

                    basepro:[
                        {
                            title:"Simple Young: este es el mejor producto que puede reavivar la juventud en ti.",
                            imgUrl:urlImgBase+"anti_aging_cream/blog.png",
                            pageUrl:urlPageBase+"articles/anti-aging-cream",
                        },
                        {
                            title:"Cuidado Natural De La Piel Y Alimentos Antiarrugas",
                            imgUrl:urlImgBase+"skincare/blog.png",
                            pageUrl:urlPageBase+"articles/skincare",
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

