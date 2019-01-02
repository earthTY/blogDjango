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
                            name:"Robert McNeal",
                            star:5,
                            remark:"Con l'invecchiamento, i volti femminili stanno iniziando ad avere vari problemi che portano a significati negativi sull'apparenza. Col passare del tempo, provoca cambiamenti nel corpo che riflettono il nostro modo di sentire e anche la nostra somiglianza facciale."
                        },
                        {
                            name:"Amanda",
                            star:5,
                            remark:"Sto usando la crema Simple Young da circa un mese e devo dire che vedo una differenza! Sono un fumatore quindi ho diverse rughe intorno alla bocca e stanno iniziando a scomparire. Per non dire che la mia faccia è così uniforme da sembrare ancora più tonica e il mio mento si è chiarito. L'ho indossato la mattina se non indosso il trucco quel giorno ed è molto idratante da solo."
                        },
                        {
                            name:"sarah",
                            star:5,
                            remark:"When: Quando ho usato questa crema, la mia pelle è incredibilmente liscia e ho notato una riduzione delle linee sottili intorno ai miei occhi. Sicuramente riempirò la mia scorta quando finirò."
                        },
                        {
                            name:"Robert McNeal",
                            star:4,
                            remark:"Ho notato un leggero miglioramento per le rughe che ho iniziato a sviluppare sulla fronte, ma non sono completamente sparite. È la mia prima bottiglia. Continuerò a farlo per un altro paio di bottiglie e riferirò sui risultati. Non mi aspetto risultati durante la notte."
                        }

                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Simple Young- Questo è il miglior prodotto che può riaccendere la giovinezza in te.",
                            imgUrl:urlImgBase+"anti_aging_cream/blog.png",
                            pageUrl:urlPageBase+"articles/anti-aging-cream",
                        },
                        {
                            title:"Alimenti Naturali Per La Cura Della Pelle E Anti-rughe",
                            imgUrl:urlImgBase+"skincare/blog.png",
                            pageUrl:urlPageBase+"articles/skincare",
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

