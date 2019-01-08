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
                            name:"Autumn",
                            star:5,
                            remark:" funziona davvero! AAA +++"
                        },
                        {
                            name:"Robin",
                            star:5,
                            remark:"Ho comprato questo prodotto perché ho pensato che io e mia moglie potessimo goderci una piccola avventura in camera da letto, e il ragazzo mi ha colpito! Non potevo smettere di essere svegliato più volte al giorno. Era quasi un po 'troppo fastidioso! Ma ha svolto il suo lavoro. Sono molto soddisfatto di questo prodotto e sicuramente ordinerò di nuovo! Grazie mille!"
                        },
                        {
                            name:"Mark B.",
                            star:4,
                            remark:"Questo è un prodotto perfetto se vuoi stare al passo con la tua vita sessuale! Ha sicuramente aiutato le mie prestazioni e le mie confidenze in generale. Provalo!"
                        },
                        {
                            name:"James",
                            star:5,
                            remark:"Ho usato questo prodotto ed ero molto scettico! Ha funzionato esattamente come promesso e senza dubbio il 100% ha migliorato la mia vita sessuale. All'inizio la mia signora è stata presa alla sprovvista, ma è stata sicuramente d'apprezzamento quando tutto è stato detto e fatto!"
                        },
                        {
                            name:"Jeremy Brewer",
                            star:5,
                            remark:"cura bene il mio pene!"
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

