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
                            title:"Top Gun-price, Ingredients, Benefits and Side Effects",
                            proImg:urlImgBase+"top_gun/list.png",
                            blogUrl:urlPageBase+"top_gun",
                            proInfo:"TOP GUN For men is a male enhancement drop that will give you a harder, longer, stronger erection. Intensify your sexual satisfaction and orgasms, the ability to maintain an erection for much longer than normal."
                        },
                        {
                            title:"Easy Lean-Price, Benefits, Efficiency and Side Effects",
                            proImg:urlImgBase+"easy_lean/list.jpg",
                            blogUrl:urlPageBase+"easy_lean",
                            proInfo:"Putting powerful foods such as dark leafy green vegetables, dark chocolate, citrus and other natural foods in your diet not only helps to fight chronic health conditions such as heart attack and diabetes but also help to nourish the skin."
                        },
                        {
                            title:"Natural Skin Care and Anti-wrinkle Foods",
                            proImg:urlImgBase+"varicore_veins_treatment/blog.png",
                            blogUrl:urlPageBase+"blog/varicore_veins_treatment",
                            proInfo:"Diets play a powerful role in the skin's complexion. What you take affects hormonal balance, causes acne, and can also create or reduce inflammation which is associated with aging of the skin. Scientifically speaking, the foods you eat are as important as the serums and creams you apply on your skin on a daily basis. "
                        },
                        {
                            title:"Natural Skin Care and Anti-wrinkle Foods",
                            proImg:urlImgBase+"novaricose/list.jpg",
                            blogUrl:urlPageBase+"novaricose",
                            proInfo:"Diets play a powerful role in the skin's complexion. What you take affects hormonal balance, causes acne, and can also create or reduce inflammation which is associated with aging of the skin. Scientifically speaking, the foods you eat are as important as the serums and creams you apply on your skin on a daily basis. "
                        },
                        {
                            title:"How To Lose Belly Fat",
                            proImg:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            blogUrl:urlPageBase+"blog/how_to_lose_belly_fat",
                            proInfo:"Belly fat is not a serious issue mostly because it can look bad. Having so many quantities of fat in the belly has been strongly associated with some common diseases such as type 2 diabetes and heart disease. "
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

