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
                            name:"Ilovebling",
                            star:5,
                            remark:"I've only used this product a few days and I love it. Makes my face look and feel wonderful. I'm 73 years young and definitely see some positive effects. I'm satisfied with this product."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:5,
                            remark:"I am a 55 year old white female, have tried everything ever created for anti-aging. My skin likes this, even tightened up my saggy jaw line. Not seeing much decrease in wrinkles, but it also is helping with crepey skin on my neck."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:5,
                            remark:"This product is amazing! I've received compliments on having a youthful looking face after using this Simple Young anti aging face cream for one week. I am really impressed with the results and will purchase again."
                        },
                        {
                            name:"MichiKitty",
                            star:4,
                            remark:"Quick shipping and great moisturizer. In an effort to take better car of my skin, I started looking into moisturizers, instead of the normal body lotion I had been using. I I'm glad I decided to use this one! I have noticed a visible brightening of my skin and reduction of smile lines. My skin tends to be on the oily side and sensitive. This lotion didn't seem to dry out my skin or make it more oily. The air is really dry right now so I've been putting on two layers some days and still no negative reactions or super oily skin. Overall, I'd strongly recommend this product."
                        },
                        {
                            name:"inspiring",
                            star:5,
                            remark:"My skin looks good. Like really good. It usually only looks this good after I've had a chemical peel. My husband is using it as well. One day out of nowhere he made a remark about how good the moisturizer is and that I should continue to order it when it runs out. Good stuff!"
                        },
                        {
                            name:"Rebecca Sterling",
                            star:5,
                            remark:"My skin is softer and looks smoother and my face and neck are more lifted look. I like this cream very much. If improvements keep going along as they have been, I will reorder. I noticed a light firming of my neck and a light lift to my face after just one use. Additional uses, lift and firm slightly a bit more each time. No one has said anything to me about my face and neck looking a bit more lifted, but my face and neck were only a bit saggy, to begin with. At any rate, I notice and feel the cream working, so that's good enough for me."
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

