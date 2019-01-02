/**
 * Created by Administrator on 2018/5/4 0004.
 */
/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    ProductDetails=function(){
        this.init = function(){
            vueProductDetails=new Vue({
                delimiters: ['[[', ']]'],
                el: '#vueContainer',
                data: {
                    blogTitle:"TOP GUN Drops-price, Ingredients, Benefits and Side Effects",
                    usercomments:[
                        {
                            name:"Ilain Voltaire",
                            star:5,
                            remark:"Ho ricevuto questo prodotto circa 2 settimane fa, all'inizio ero scettico. Dopo una settimana, ho iniziato a notare che le mie vene varicose non erano così gonfiose, dopo 2 settimane, non avevo più le protuberanze nelle vene varicose e le vene viola e rosse dei ragni erano un po 'più leggere. Perché questo prodotto funziona per me."
                        },
                        {
                            name:"F. Corcino",
                            star:5,
                            remark:"Ha fatto come dice la scrittura. Avevo delle brutte ragni varicose sulle mie gambe, facendomi sembrare appena visibile, e anche gli altri ragni che ho reagito bene a questa crema. Fino a solo una volta al giorno ora. l'ho usato più volte al giorno quando ho iniziato a usarlo. Sul mio secondo barattolo."
                        },
                        {
                            name:"Akasha",
                            star:5,
                            remark:"Questa roba è fantastica, potrebbe essere un piccolo contenitore ma è potente! Vedendo già importanti miglioramenti sull'aspetto delle vene, lenisce irrequietezza e profumi! Love Love Adoro questo prodotto. Sicuramente comprerò ancora."
                        },
                        {
                            name:"Jess R",
                            star:5,
                            remark:"Ho comprato le vene varicose per il trattamento con Novaricose per mia zia e le piace. Il Novaricose è rilassante per le gambe stanche!"
                        },
                        {
                            name:"Sebastian",
                            star:4,
                            remark:"Pianifica di continuare ad usarlo perché in soli 5 giorni di utilizzo riesco a vedere una differenza nell'aspetto delle mie vene varicose. Il cambiamento non è drastico, ma me ne accorgo e sono molto contento dei risultati. Ho un caso minore di vene varicose e solo su una coscia, quindi non posso confermare gli stessi risultati per un individuo con una situazione più seria."
                        },
                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Prezzo Facile, Vantaggi, Efficienza Ed Effetti Collaterali",
                            imgUrl:urlImgBase+"easy_lean/list.jpg",
                            pageUrl:urlPageBase+"products/easy-lean",
                        },
                        {
                            title:"TOP GUN Drops- Prezzo, Ingredienti, Benefici E Sicurezza",
                            imgUrl:urlImgBase+"top_gun/list.png",
                            pageUrl:urlPageBase+"products/top-gun",
                        },
                        {
                            title:"Cosa è Novaricose, Come Usare Novaricose, Come Funziona Novaricose? Benefici Di Novaricose?",
                            imgUrl:urlImgBase+"novaricose/list.jpg",
                            pageUrl:urlPageBase+"products/novaricose",
                        },
                        {
                            title:"Che Cosa è Simple Young, Come Usare Simple Young, Come Funziona Simple Young? Benefici Di Simple Young?",
                            imgUrl:urlImgBase+"simple_young/list.jpg",
                            pageUrl:urlPageBase+"products/simple-young",
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

