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
                            title:"I migliori alimenti per la perdita di peso",
                            proImg:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            blogUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                            proInfo:"Resta il fatto che nessun alimento agisce magicamente per effettuare la perdita di peso. Ci sono alcuni alimenti che possono aiutarti a ottenere la tua perdita di peso desiderata e la maggior parte di questi alimenti ha così tante cose in comune tra cui alto contenuto di fibre e anche bassa densità di energia. Metti i seguenti alimenti per la perdita di peso come parte della tua dieta salutare totale, e puoi trovare molto facile ottenere la perdita di peso che hai desiderato."
                        },
                        {
                            title:"Come Eliminare Il Grasso Dalla Pancia",
                            proImg:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                            proInfo:" Il grasso della pancia non è un problema serio, soprattutto perché può sembrare brutto. Avere così tante quantità di grasso nella pancia è stato fortemente associato ad alcune malattie comuni come il diabete di tipo 2 e le malattie cardiache. In tal caso, perdere il grasso della pancia ha un grande beneficio per la salute e può anche aumentare la vita media di un individuo. "
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
                mounted:function(){

                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

