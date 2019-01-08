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
                            blogUrl:urlPageBase+"articles/articles",
                            proInfo:"Con l'invecchiamento, i volti femminili stanno iniziando ad avere vari problemi che portano a significati negativi sull'apparenza. Col passare del tempo, provoca cambiamenti nel corpo che riflettono il nostro modo di sentire e anche la nostra somiglianza facciale."
                        },
                        {
                            title:"Alimenti naturali per la cura della pelle e anti-rughe",
                            proImg:urlImgBase+"skincare/blog.png",
                            blogUrl:urlPageBase+"articles/skincare",
                            proInfo:"Mettere cibi potenti come verdure a foglia verde scure, cioccolato fondente, agrumi e altri alimenti naturali nella vostra dieta non solo aiuta a combattere le condizioni di salute croniche come l'infarto e il diabete, ma aiuta anche a nutrire la pelle."
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

