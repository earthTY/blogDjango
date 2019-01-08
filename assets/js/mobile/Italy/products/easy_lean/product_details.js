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
                    blogTitle:"Top Gun-price, Ingredients, Benefits and Side Effects",
                    usercomments:[
                        {
                            name:"lori McKenzie",
                            star:5,
                            remark:"ha un profumo incredibile dopo aver aperto la borsa. Ero curioso di sapere come sarebbe una Easy Lean, un po 'titubante perché sono abituato alla cioccolata calda, ma questa polvere è fantastica! Mi si sistemò lo stomaco e non avevo fame per il resto del pomeriggio."
                        },
                        {
                            name:"C. Chung",
                            star:5,
                            remark:"Great: Gran gusto. Gonfio decisamente sollevato dopo circa 3 giorni. Ho perso 5 libbre in due settimane, quindi dovrò dargli una recensione a 5 stelle."
                        },
                        {
                            name:"Che Vy",
                            star:5,
                            remark:"Questa è la mia prima recensione sul sito web, non scrivo normalmente la recensione, ma voglio condividere la mia esperienza con questo prodotto. Sento la differenza nel mio appetito. Ho perso 4 libbre dopo aver preso questo prodotto per 3 settimane. Non sono sicuro che funzioni per tutti, ma consiglio di provarlo e continuerò a prenderlo per vedere se posso perdere più peso."
                        },
                        {
                            name:"Jango",
                            star:5,
                            remark:"Dopo essere stato sulla mia dieta per 2 mesi e non vedere molti progressi. Ho acquistato questo prodotto e ho immediatamente ottenuto il kickstart di cui avevo bisogno per bruciare i grassi. Sto vedendo risultati evidenti senza esercizio fisico e posso inserirmi nei vecchi blue jeans che non ho indossato da 10 anni."
                        }
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

