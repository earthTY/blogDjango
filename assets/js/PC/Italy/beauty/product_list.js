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
                            title:"Simple Young- Questo è il miglior prodotto che può riaccendere la giovinezza in te.",
                            proImg:urlImgBase+"anti_aging_cream/blog.png",
                            blogUrl:urlPageBase+"articles/anti-aging-cream",
                            proInfo:"Con el envejecimiento, las caras femeninas comienzan a tener varios problemas que conducen a significados negativos en la apariencia. A medida que pasa el tiempo, causa cambios en el cuerpo que reflejan cómo nos sentimos y también nuestro parecido facial."
                        },
                        {
                            title:"Alimenti Naturali Per La Cura Della Pelle E Anti-rughe",
                            proImg:urlImgBase+"skincare/blog.png",
                            blogUrl:urlPageBase+"articles/skincare",
                            proInfo:"Diets play a powerful role in the skin’s complexion. What you take affects hormonal balance, causes acne, and can also create or reduce inflammation which is associated with aging of the skin. Scientifically speaking, the foods you eat are as important as the serums and creams you apply on your skin on a daily basis. "
                        },
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
                mounted:function(){

                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

