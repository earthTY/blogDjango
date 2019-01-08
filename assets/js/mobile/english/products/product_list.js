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
                            title:"Easy Lean-Price, Benefits, Efficiency and Side Effects",
                            proImg:urlImgBase+"easy_lean/list.jpg",
                            blogUrl:urlPageBase+"products/easy-lean",
                            proInfo:"Over the years people are being counseled to engage in various crazy things, most of which have no evidence to back it up. However, we have found some weight loss techniques that are effective. Below are the 7 effective weight loss techniques."
                        },
                        {
                            title:"Top Gun Drops-Price, Ingredients, Benefits and Side Effects",
                            proImg:urlImgBase+"top_gun/list.png",
                            blogUrl:urlPageBase+"products/top-gun",
                            proInfo:"Belly fat is not a serious issue mostly because it can look bad. Having so many quantities of fat in the belly has been strongly associated with some common diseases such as type 2 diabetes and heart disease. In that case, losing belly fat has a lot of benefit to the health and can also increase the average lifespan of an individual. "
                        },
                        {
                            title:"What is Novaricose, How To Use Novaricose, How Does Work Novaricose? Benefits of Novaricose?",
                            proImg:urlImgBase+"novaricose/list.jpg",
                            blogUrl:urlPageBase+"products/novaricose",
                            proInfo:"Belly fat is not a serious issue mostly because it can look bad. Having so many quantities of fat in the belly has been strongly associated with some common diseases such as type 2 diabetes and heart disease. In that case, losing belly fat has a lot of benefit to the health and can also increase the average lifespan of an individual. "
                        },
                        {
                            title:"What is Simple Young, How To Use Simple Young, How Does Simple ",
                            proImg:urlImgBase+"simple_young/list.jpg",
                            blogUrl:urlPageBase+"products/simple-young",
                            proInfo:"Simple Young is a product that is made as a natural skin care formula which is one of the strong and exceptional products for anti-aging. It serves as a solution for an extraordinary skin care, which deals with different skin conditions without changing the overall health of the body."
                        },
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

