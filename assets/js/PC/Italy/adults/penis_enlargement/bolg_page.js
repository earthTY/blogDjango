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
                            name:"S. Bernstein",
                            star:5,
                            remark:"Oh mio dio. Siediti, ficcato il mio occhio fuori! Stai attento!"
                        },
                        {
                            name:"D. Jones",
                            star:5,
                            remark:"Crea un forte impulso e l'energia per far passare gli allenamenti sta arrivando. Guardo questo prodotto come un prodotto a lungo termine, intendo che funziona alla grande ma i risultati migliori sono arrivati dopo un mese di utilizzo. La resistenza sessuale non è mai stata migliore Ho 45 anni e mi sento come se potessi esibirmi meglio di 10 anni fa."
                        },
                        {
                            name:"Ada",
                            star:5,
                            remark:"Prendo questo quotidiano, ho ottenuto risultati solidi per circa 3 mesi. Sono un uomo di 52 anni con un lavoro molto fisico, ma ultimamente mi sento come se non avessi avuto alcuna energia, quindi stavo cercando un integratore per darmi un vantaggio e accendermi a letto. Ne avevo bisogno !! Ho preso solo il carburante per la resistenza per alcuni mesi, ma mi sento davvero come se mi stesse dando una bella scarica di energia durante il giorno e già per ultimo sono più a lungo a letto. Dopo la mia prossima bottiglia scriverò un'altra recensione ma finora è davvero buona."
                        }
                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy_lean",
                        imgUrl:urlImgBase+"easy-lean/list.jpg",
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
            })

            initPage()

            function initPage(){

            }
        }
    }
})();

