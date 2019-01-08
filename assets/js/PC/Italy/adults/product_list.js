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
                            title:"5 Modi Per Migliorare Una Relazione Sessuale",
                            proImg:urlImgBase+"intimacy/blog.png",
                            blogUrl:urlPageBase+"articles/intimacy",
                            proInfo:"Nel caso tu stia cercando un modo per mantenere l'attività sessuale per tutta la notte sul letto, non sei il solo. Un sacco di uomini là fuori sono alla ricerca di modi per migliorare le loro prestazioni sessuali. Ciò può includere il miglioramento dei problemi già esistenti o la ricerca di nuovi modi per rendere felice il tuo partner"
                        },
                        {
                            title:"Potenzia La Tua Performance Sessuale Con Il Potenziamento Maschile Della Top Gun",
                            proImg:urlImgBase+"penis_enlargement/blog.jpg",
                            blogUrl:urlPageBase+"articles/penis-enlargement",
                            proInfo:"Top Gun è un rimedio per l'ingrandimento del pene che è conveniente, comprovato ed efficace. Con migliaia di clienti soddisfatti che continuano a vantare la qualità di Top Gun, puoi star certo che sei in buone mani."
                        },
                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"5 Modi Per Migliorare Una Relazione Sessuale",
                            imgUrl:urlImgBase+"intimacy/blog.png",
                            pageUrl:urlPageBase+"articles/intimacy",
                        },
                        {
                            title:"Potenzia La Tua Performance Sessuale Con Il Potenziamento Maschile Della Top Gun",
                            imgUrl:urlImgBase+"penis_enlargement/blog.jpg",
                            pageUrl:urlPageBase+"articles/penis-enlargement",
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
