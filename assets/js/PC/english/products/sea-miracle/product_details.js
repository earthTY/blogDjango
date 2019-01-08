/**
 * Created by Administrator on 2018/5/4 0004.
 */
/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    ProductDetails=function(){
        this.init = function(){
            vueProductDetails=new Vue({
                delimiters: ['[[', ']]'],
                el: '#vueContainer',
                data: {
                    blogTitle:"TOP GUN Drops-price, Ingredients, Benefits and Side Effects",

                    usercomments:[

                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Sea Miracle anti-hair loss mask review",
                            imgUrl:urlImgBase+"sea-miracle/sea-miracle1.png",
                            pageUrl:urlPageBase+"products/sea-miracle",
                        },
                        {
                            title:"Easy Lean: Lose Weigh Fast with Taste",
                            imgUrl:urlImgBase+"easy_lean/list.jpg",
                            pageUrl:urlPageBase+"products/easy-lean",
                        },
                        {
                            title:"TOP GUN Drops for Male Enhancement",
                            imgUrl:urlImgBase+"top_gun/list.png",
                            pageUrl:urlPageBase+"products/top-gun",
                        },
                        {
                            title:"NoVaricose Cream Reviews",
                            imgUrl:urlImgBase+"novaricose/list.jpg",
                            pageUrl:urlPageBase+"products/novaricose",
                        },
                        {
                            title:"Simple Young Anti-Age Face Cream-- reviews about the miracle rejuvenating cream",
                            imgUrl:urlImgBase+"simple_young/list.jpg",
                            pageUrl:urlPageBase+"products/simple-young",
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

