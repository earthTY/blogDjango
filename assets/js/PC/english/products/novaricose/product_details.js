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
                            name:"Ilain Voltaire",
                            star:5,
                            remark:"I received this product about 2 weeks ago, I was skeptical at first. After one week, I started to notice my varicose veins weren't so bulgy, after 2 wks, I had no more bulging in my varicose veins, and the purple and red spider veins were somewhat lighter. Because this product is working for me."
                        },
                        {
                            name:"F. Corcino",
                            star:5,
                            remark:"Has done as the write up says it will. Had some really ugly old varicose spiders on my legs, made that one look like hardly noticeable now, and the other spider ones I have also reacted great to this cream. Down to just once a day now. used it several times a day when I started using it. On my second jar."
                        },
                        {
                            name:"Akasha",
                            star:5,
                            remark:"This stuff is fantastic, it may be a small container but it is powerful! Already seeing major improvements on the appearance of veins, soothes restlessness, and smells great! Love Love Love this product. Will definitely purchase again.Also, consistency is key, I apply every night and morning."
                        },
                        {
                            name:"Jess R",
                            star:5,
                            remark:"I bought the Novaricose treatment varicose veins for my aunt and she likes it. The Novaricose is soothing for tired legs !"
                        },
                        {
                            name:"Sebastian",
                            star:4,
                            remark:"Plan to continue using this because in just 5 days of use I can see a difference in the appearance of my varicose veins. The change is not drastic, but I notice it, and I am very happy with the results. I have a minor case of varicose veins and only on one thigh, so I can not confirm the same results for an individual with a more serious situation."
                        },
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

