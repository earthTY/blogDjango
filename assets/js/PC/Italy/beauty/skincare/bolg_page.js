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
                        {
                            name:"Robert McNeal",
                            star:5,
                            remark:"I've been using the Simple Young cream for a month or so and I have to say I'm seeing a difference! I'm a smoker so I have several wrinkles around my mouth and they are starting to disappear. Not to mention my face is so even looking more even toned and my chin has cleared up. I put it on in the morning if I'm not wearing makeup that day and it's very moisturizing on its own."
                        },
                        {
                            name:"Amanda",
                            star:5,
                            remark:"When i used this cream, My skin feels amazingly smooth, and I have noticed a reduction in the fine lines around my eyes. Will definitely be replenishing my supply when I run out."
                        },
                        {
                            name:"sarah",
                            star:4,
                            remark:"This cream did wonders for my face. Its reduced my wrinkles into fine lines and my skin are smoother and brighter. When I apply this cream it goes on so easy and does not leave a white film like some other products I have used.I am so happy with this product that I ordered a second bottle and I use it every night and it's not harsh on my skin. Thanks for a great product"
                        },
                        {
                            name:"Robert McNeal",
                            star:4,
                            remark:"I've seen a slight improvement for wrinkles I started to develop on my forehead but they’re not entirely gone. It’s my first bottle. I will keep at it for another bottle or two and report back as to results. I'm not expecting results overnight"
                        }

                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Simple Young- Questo è il miglior prodotto che può riaccendere la giovinezza in te.",
                            imgUrl:urlImgBase+"anti_aging_cream/blog.png",
                            pageUrl:urlPageBase+"articles/anti-aging-cream",
                        },
                        {
                            title:"Alimenti Naturali Per La Cura Della Pelle E Anti-rughe",
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
