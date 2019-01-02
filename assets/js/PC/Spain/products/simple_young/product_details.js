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
                            remark:"Solo he usado este producto por unos días y me encanta. Hace que mi rostro se vea y se sienta maravilloso. Tengo 73 años y definitivamente veo algunos efectos positivos. Estoy satisfecho con este producto."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:5,
                            remark:"Soy una mujer blanca de 55 años, he intentado todo lo que se haya creado para combatir el envejecimiento. A mi piel le gusta esto, incluso tensé mi línea de mandíbula caida. No veo mucha disminución en las arrugas, pero también está ayudando con la piel crepé en mi cuello."
                        },
                        {
                            name:"Crystal Alfonso",
                            star:5,
                            remark:"¡Este producto es increíble! Recibí elogios por tener una cara de aspecto juvenil después de usar esta crema para la cara Simple Young antiedad durante una semana. Estoy realmente impresionado con los resultados y volveré a comprar."
                        },
                        {
                            name:"MichiKitty",
                            star:4,
                            remark:"envío rápido y gran crema hidratante. En un esfuerzo por sacar mejor auto de mi piel, comencé a buscar humectantes, en lugar de la loción corporal normal que había estado usando. ¡Me alegro de haber decidido usar este! He notado un brillo visible de mi piel y la reducción de las líneas de la sonrisa. Mi piel tiende a ser grasosa y sensible. Esta loción no parece secar mi piel ni hacerla más grasosa. El aire está realmente seco en este momento, así que me he estado poniendo dos capas algunos días y todavía no tengo reacciones negativas o piel súper grasosa. En general, recomendaría encarecidamente este producto."
                        },
                        {
                            name:"inspiring",
                            star:5,
                            remark:"Mi piel se ve bien. Me gusta realmente bien Por lo general, se ve tan bien después de haber tenido una exfoliación química. Mi esposo lo está usando también. Un día, de la nada, hizo un comentario sobre lo bueno que es el humectante y que debería seguir pidiéndolo cuando se acabe. ¡Buen material!"
                        },
                        {
                            name:"Rebecca Sterling",
                            star:5,
                            remark:"mi piel es más suave y se ve más suave y mi cara y cuello son más levantados. Me gusta mucho esta crema. Si las mejoras continúan como han sido, volveré a hacer el pedido. Noté una ligera firmeza de mi cuello y una ligera elevación en mi cara después de un solo uso. Usos adicionales, levante y firme ligeramente un poco más cada vez. Nadie me ha dicho nada acerca de que mi cara y mi cuello parezcan un poco más elevados, pero mi cara y mi cuello estaban un poco caídos, para empezar. En cualquier caso, noté y sentí que la crema funcionaba, así que eso es suficiente para mí."
                        }
                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Easy Lean-price, Beneficios, Eficiencia Y Efectos Secundarios",
                            imgUrl:urlImgBase+"easy_lean/list.jpg",
                            pageUrl:urlPageBase+"products/easy-lean",
                        },
                        {
                            title:"TOP GUN Drops- Precio, Ingredientes, Beneficios Y ¿Es Seguro?",
                            imgUrl:urlImgBase+"top_gun/list.png",
                            pageUrl:urlPageBase+"products/top-gun",
                        },
                        {
                            title:"¿Qué Es Novaricose, Cómo Utilizar Novaricose, Cómo Funciona Novaricose? Beneficios De Novaricose?",
                            imgUrl:urlImgBase+"novaricose/list.jpg",
                            pageUrl:urlPageBase+"products/novaricose",
                        },
                        {
                            title:"¿Qué Es Young Simple, Cómo Usar Young Simple, Cómo Funciona El Joven Simple? Beneficios De Simple Young?",
                            imgUrl:urlImgBase+"simple_young/list.jpg",
                            pageUrl:urlPageBase+"products/simple-young",
                        },
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

