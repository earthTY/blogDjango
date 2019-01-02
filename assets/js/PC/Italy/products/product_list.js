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
                            title:"Prezzo Facile, Vantaggi, Efficienza Ed Effetti Collaterali",
                            proImg:urlImgBase+"easy_lean/list.jpg",
                            blogUrl:urlPageBase+"products/easy-lean",
                            proInfo:"Easy Lean è un prodotto in polvere appositamente formulato per aiutare gli utenti a perdere una notevole quantità di peso. Aiuta anche a migliorare le condizioni generali del corpo umano attraverso alcuni meccanismi. Il mercato oggi è saturo di centinaia di prodotti miracolosi che promettono risultati immediati e significativi di perdita di peso attraverso il consumo continuo."
                        },
                        {
                            title:"TOP GUN Drops- Prezzo, Ingredienti, Benefici E Sicurezza",
                            proImg:urlImgBase+"top_gun/list.png",
                            blogUrl:urlPageBase+"products/top-gun",
                            proInfo:"TOP GUN per uomini sono gocce rinforzanti che ti daranno un'erezione più dura, più lunga, più forte, Intensifica la soddisfazione sessuale e gli orgasmi, La capacità di mantenere un'erezione molto più a lungo del normale, Aumenta la Libido dell'utilizzatore e Migliora drammaticamente le loro prestazioni a letto. "
                        },
                        {
                            title:"Cosa è Novaricose, Come Usare Novaricose, Come Funziona Novaricose? Benefici Di Novaricose?",
                            proImg:urlImgBase+"novaricose/list.jpg",
                            blogUrl:urlPageBase+"products/novaricose",
                            proInfo:"Sai che oltre il 23% degli adulti sopra i 30 anni ha vene varicose? Quando le persone iniziano a invecchiare, la paura delle vene gonfie e malsane diventa più pronunciata e cosa fanno molte persone? Cower nella paura. È una mossa totalmente sbagliata, dovresti cercare un rimedio naturale per le vene varicose prima che sia troppo tardi. Ma prima, cos'è Novaricose? Come funziona Novaricose? Questa guida ti mostrerà come usare Novaricose."
                        },
                        {
                            title:"Che Cosa è Simple Young, Come Usare Simple Young, Come Funziona Simple Young? Benefici Di Simple Young?",
                            proImg:urlImgBase+"simple_young/list.jpg",
                            blogUrl:urlPageBase+"products/simple-young",
                            proInfo:"Simple Young è un prodotto fatto come una formula naturale per la cura della pelle che è uno dei prodotti forti ed eccezionali per l'anti-invecchiamento. Serve come soluzione per una cura della pelle straordinaria, che si occupa di diverse condizioni della pelle senza modificare la salute generale del corpo."
                        },
                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy_lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Prezzo Facile, Vantaggi, Efficienza Ed Effetti Collaterali",
                            imgUrl:urlImgBase+"easy_lean/list.jpg",
                            pageUrl:urlPageBase+"products/easy_lean",
                        },
                        {
                            title:"TOP GUN Drops- Prezzo, Ingredienti, Benefici E Sicurezza",
                            imgUrl:urlImgBase+"top_gun/list.png",
                            pageUrl:urlPageBase+"products/top_gun",
                        },
                        {
                            title:"Cosa è Novaricose, Come Usare Novaricose, Come Funziona Novaricose? Benefici Di Novaricose?",
                            imgUrl:urlImgBase+"novaricose/list.jpg",
                            pageUrl:urlPageBase+"products/novaricose",
                        },
                        {
                            title:"Che Cosa è Simple Young, Come Usare Simple Young, Come Funziona Simple Young? Benefici Di Simple Young?",
                            imgUrl:urlImgBase+"simple_young/list.jpg",
                            pageUrl:urlPageBase+"products/simple_young",
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

