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
                            name:"Ilovebling",
                            star:5,
                            remark:"Ho usato questo prodotto solo da pochi giorni e lo adoro. Rende la mia faccia e mi sento meravigliosa. Ho 73 anni e sicuramente vedo alcuni effetti positivi. Sono soddisfatto di questo prodotto."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:5,
                            remark:"Sono una donna bianca di 55 anni, ho provato tutto ciò che è stato creato per l'anti-invecchiamento. La mia pelle piace questo, ha anche rafforzato la mia linea mascella cadente. Non vedo molta diminuzione delle rughe, ma mi aiuta anche con la pelle crepey sul collo."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:4,
                            remark:"Questo prodotto è fantastico! Ho ricevuto complimenti per avere un viso giovanile dopo aver usato questa crema viso antietà Simple Young per una settimana. Sono davvero impressionato dai risultati e acquisterò di nuovo."
                        },
                        {
                            name:"MichiKitty",
                            star:5,
                            remark:"spedizione rapida e ottima crema idratante. Nel tentativo di prendere una macchina migliore della mia pelle, ho iniziato a esaminare gli idratanti, invece della normale lozione per il corpo che stavo usando. Sono felice di aver deciso di usare questo! Ho notato un visibile schiarimento della mia pelle e una riduzione delle linee del sorriso. La mia pelle tende ad essere dal lato untuoso e sensibile. Questa crema non sembrava asciugare la mia pelle o renderla più grassa. L'aria è veramente asciutta in questo momento, quindi ho messo su due strati alcuni giorni e ancora nessuna reazione negativa o pelle molto grassa. Nel complesso, consiglio vivamente questo prodotto."
                        },
                        {
                            name:"inspiring",
                            star:5,
                            remark:"la mia pelle sembra buona Mi piace davvero bene. Di solito sembra così bello dopo che ho avuto un peeling chimico. Anche mio marito lo sta usando. Un giorno, dal nulla, ha fatto un'osservazione su quanto sia buona la crema idratante e che dovrei continuare a ordinarlo quando si esaurisce. Roba buona!"
                        },
                        {
                            name:"Rebecca Sterling",
                            star:5,
                            remark:"La mia pelle è più morbida e appare più levigata e il mio viso e il collo sono più sollevati. Mi piace molto questa crema. Se i miglioramenti continuano ad andare avanti così come sono stati, riordinerò. Ho notato un leggero rassodamento del mio collo e un leggero sollevamento sulla mia faccia dopo un solo uso. Altri usi, sollevare e fissare leggermente un po 'di più ogni volta. Nessuno mi ha detto nulla del mio viso e del collo che sembravano un po 'più sollevati, ma la mia faccia e il mio collo erano solo un po' cedevoli, tanto per cominciare. In ogni caso, noto e sento che la crema funziona, quindi è abbastanza buono per me."
                        }
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

