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
                            title:"Max Enhancer: The Formula of Penis Enlarging",
                            proImg:urlImgBase+"max-enhancer/max-enhancer.png",
                            blogUrl:urlPageBase+"products/max-enhancer",
                            proInfo:"According to a survry among 500 people (include men and women), 94% of the female respondents confirmed sexually the most important is the size, and they want their lover to have bigger penis which to make them achieve lasting orgasm. Meanwhile, over 70% of the male said they are unsatisfy with their penis size as well. To achieve the dream of the women and improve the dissatisfaction of the men, Max Enhancer will give unforgettable feelings, restore self-confidence and help increase the size of the sexual organ. The previous researches and examples of the users are proof of its high effiency. The novelty has an enhanced mechanism of action, so use Max Enhancer regularly will lead bright and unforgettable sexual pleasure to the owners and their partner. "
                        },
                        {
                            title:"Sea Miracle anti-hair loss mask review",
                            proImg:urlImgBase+"sea-miracle/sea-miracle.png",
                            blogUrl:urlPageBase+"products/sea-miracle",
                            proInfo:"Every girl and woman dreams of magnificent and luxurious curly hair. Sea Miracle anti-hair loss mask reviews regularly left by buyers, which is the number one remedy for hair loss and to accelerate hair growth. It makes weak hair healthy and strong."
                        },
                        {
                            title:"Easy Lean: Lose Weigh Fast with Taste",
                            proImg:urlImgBase+"easy_lean/list.jpg",
                            blogUrl:urlPageBase+"products/easy-lean",
                            proInfo:"Easy Lean is a brand-new approach to losing weight. The time of hard workouts, hunger-related diets and tasteless capsules for weight loss are gone. Be up-to-date and try a modern, easy and delicious way to get rid of extra kilos: Easy Lean powder for fat-burning cocktails."
                        },
                        {
                            title:"TOP GUN Drops for Male Enhancement",
                            proImg:urlImgBase+"top_gun/list.png",
                            blogUrl:urlPageBase+"products/top-gun",
                            proInfo:"According to statistics, every 10 men in the age above 35 years old suffer from erectile dysfunction(impotence). Insidious disease sneaks up imperceptibly and at first, can have an episodic character. To prevent the development of the pathological process, TOP GUN Drops for erection help not only return male strength but also increase endurance, libido as well as penis thickness and hardness."
                        },
                        {
                            title:"NoVaricose Cream Reviews",
                            proImg:urlImgBase+"novaricose/list.jpg",
                            blogUrl:urlPageBase+"products/novaricose",
                            proInfo:"NoVaricose is a modern remedy for curing this common disease, which is created on the basis of natural components. The unique composition of the NoVaricose makes it harmless and effective compared to other drugs. Also, the remedy is also used for prevention at the first signs of this disease. Due to its natural composition, the NoVaricose can be used in combination with other medicinal products, which allows to have a complex effect on the source of the disease and quickly leads to the desired result."
                        },
                        {
                            title:"Simple Young Anti-Age Face Cream-- reviews about the miracle rejuvenating cream",
                            proImg:urlImgBase+"simple_young/list.jpg",
                            blogUrl:urlPageBase+"products/simple-young",
                            proInfo:"The natural aging of the body can take place at different rates. The speed of this process can be stopped with the care of your own health and self-care. To do this, you need to lead a healthy lifestyle and use cosmetics to prevent skin aging. Among the latest development of means for wrinkles and the aging of skin, natural preparations are in demand. For example, Simple Young is approving and valued not only as a remedy for wrinkles, but also a healing complex that helps mobilize the body's internal reserves to fight wilting."
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

