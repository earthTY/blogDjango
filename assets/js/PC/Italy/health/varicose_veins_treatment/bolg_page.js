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
                            name:"Jonathan L",
                            star:5,
                            remark:"Ha avuto un infortunio alla gamba in un incidente automobilistico oltre 20 anni fa. Le vene sono peggiorate nel corso degli anni. Ho visto un miglioramento dopo 3 giorni su questo prodotto. Vorrei averlo trovato anni fa. Sono a dir poco stupito."
                        },
                        {
                            name:"Maria Bruno",
                            star:5,
                            remark:"Va bene, devo dire che questo prodotto funziona. Ho avuto vene varicose nella mia gamba destra da quando ero un adolescente e prendendo questo integratore quasi completamente mi sono liberato delle macchie viola evidenti sulla mia gamba. Sono davvero piuttosto sorpreso!"
                        },
                        {
                            name:"dodgerblue247",
                            star:4,
                            remark:"funziona alla grande Mia moglie ed io abbiamo notato una riduzione delle vene dei ragni nelle sue gambe nel giro di una settimana circa. Lo sta prendendo da circa un mese e sta ancora vedendo dei risultati. Lo sto riordinando oggi."
                        },
                        {
                            name:"J-Ron",
                            star:5,
                            remark:"Sembra funzionare bene. Mia moglie ed io abbiamo notato una riduzione delle vene dei ragni nelle sue gambe nel giro di una settimana circa. Sta usando Novaricose Cream da circa un mese e sta ancora vedendo i risultati. Lo sto riordinando oggi."
                        }

                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Come Curare Le Vene Varicose",
                            imgUrl:urlImgBase+"varicose_veins_treatment/blog.jpg",
                            pageUrl:urlPageBase+"articles/varicore-veins-treatment",
                        },
                        {
                            title:"6 Modi Naturali per Rimuovere Le Vene Varicose",
                            imgUrl:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            pageUrl:urlPageBase+"articles/vene-varicore-rimedi",
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

