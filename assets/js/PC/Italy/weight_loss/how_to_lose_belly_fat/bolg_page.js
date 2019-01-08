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
                            name:"S. Bernstein",
                            star:5,
                            remark:"Oh my god. Sat down, poked my own eye out! Be careful!"
                        },
                        {
                            name:"D. Jones",
                            star:5,
                            remark:"Builds up a strong drive and energy to push through workouts is coming in. I look at this product like a long term results product, I mean it works great but the better results did come in after a month of use. Sexual stamina has never been better I am 45 and feel like I can perform better than I did 10 years ago."
                        },
                        {
                            name:"Ada",
                            star:4,
                            remark:"I take this daily, gotten solid results for about 3 months now. I'm a 52 year old male with a very physical job but lately I feel like I haven't had any energy so I was looking for a supplement to give me an edge and power me up in bed. I needed this!! I've only been taking stamina fuel for a few months now but I really do feel like it's giving me a nice burst of energy through the day and already last way longer in bed. After my next bottle I'll write another review but so far it's pretty darn good."
                        }
                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"I migliori alimenti per la perdita di peso",
                            imgUrl:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            pageUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                        },
                        {
                            title:"Come Eliminare Il Grasso Dalla Pancia",
                            imgUrl:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lose-belly-fat",
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

