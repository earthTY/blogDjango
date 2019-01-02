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
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"hot_img/easy_lean.png",
                        title:"Easy LEAN"
                    },

                    basepro:[
                        {
                            title:"7 Effective Weight Loss Techniques",
                            imgUrl:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            pageUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                        },
                        {
                            title:"How To Lose Belly Fat",
                            imgUrl:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                        },
                        {
                            title:"Easy Lean-Benefits and Results- Ingredients- Warnings- Review",
                            imgUrl:urlImgBase+"get_in_shape_for_women/blog.jpg",
                            pageUrl:urlPageBase+"articles/get-in-shape-for-women",
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

