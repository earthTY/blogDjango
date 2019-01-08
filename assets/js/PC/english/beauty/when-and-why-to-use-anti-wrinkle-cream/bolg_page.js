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
                            title:"Simple Young Anti-Aging Cream Works Effectively against the Symptoms of Skin Aging!",
                            imgUrl:urlImgBase+"simple-young-anti-aging/simple-young.png",
                            pageUrl:urlPageBase+"articles/simple-young-anti-aging",
                        },
                        {
                            title:"Simple Young- The Product Which Can Make You Young Again!",
                            imgUrl:urlImgBase+"anti_aging_cream/blog.png",
                            pageUrl:urlPageBase+"articles/anti-aging-cream",
                        },
                        {
                            title:"Natural Skin Care and Anti-wrinkle Foods",
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

