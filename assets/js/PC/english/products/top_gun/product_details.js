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
                        {
                            name:"Autumn",
                            star:5,
                            remark:"it really works! AAA +++"
                        },
                        {
                            name:"Robin",
                            star:5,
                            remark:"I bought this product because I figured my wife and I could enjoy a little adventure in the bedroom, and boy was I impressed! I couldn't stop getting aroused multiple times a day. It was almost a little too distracting! But it served its job. I'm very satisfied with this product and I will definitely be ordering again! Thank you so much!"
                        },
                        {
                            name:"Mark B.",
                            star:4,
                            remark:"This is a perfect product if you want to keep up with your sex life! It definitely helped with my performance and confidences overall. Try it out!"
                        },
                        {
                            name:"James",
                            star:5,
                            remark:"I used this product and I was very skeptical! It worked exactly as promised and it definitely without a doubt 100% improved my sex life. My lady was taken off guard at first but she definitely was appreciative when it was all said and done!"
                        },
                        {
                            name:"Jeremy Brewer",
                            star:5,
                            remark:"Heals my penis good!"
                        }
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

