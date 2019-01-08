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
                            title:"7 Effective Weight Loss Techniques",
                            proImg:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            blogUrl:urlPageBase+"articles/best-foods-for-weight_loss",
                            proInfo:"Over the years people are being counseled to engage in various crazy things, most of which have no evidence to back it up. However, we have found some weight loss techniques that are effective. Below are the 7 effective weight loss techniques."
                        },
                        {
                            title:"How To Lose Belly Fat",
                            proImg:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                            proInfo:"Belly fat is not a serious issue mostly because it can look bad. Having so many quantities of fat in the belly has been strongly associated with some common diseases such as type 2 diabetes and heart disease. In that case, losing belly fat has a lot of benefit to the health and can also increase the average lifespan of an individual. "
                        }
                    ],
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

