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
                            name:"lori McKenzie",
                            star:5,
                            remark:"huele increíble después de abrir la bolsa ... ¡el chocolate! Tenía curiosidad por lo que sería un Easy Lean, un poco indeciso porque estoy acostumbrado al chocolate caliente, ¡pero este polvo es increíble! Me tranquilizó el estómago y no tuve hambre por el resto de la tarde."
                        },
                        {
                            name:"C. Chung",
                            star:5,
                            remark:"Gran gusto. Definitivamente aliviado hinchazón después de unos 3 días. Perdí 5 libras en dos semanas, así que voy a tener que darle una revisión de 5 estrellas."
                        },
                        {
                            name:"Che Vy",
                            star:5,
                            remark:"Esta es mi primera reseña en el sitio web, normalmente no escribo comentarios, pero sí quiero compartir mi experiencia con este producto. Siento la diferencia en mi apetito. Perdí 4 libras después de tomar este producto durante 3 semanas. No estoy seguro si funciona para todos pero recomiendo probarlo y lo seguiré tomando para ver si puedo perder más peso."
                        },
                        {
                            name:"Jango",
                            star:5,
                            remark:"Después de estar en mi dieta durante 2 meses y no ver mucho progreso. Compré este producto y al instante obtuve el impulso inicial que necesitaba para quemar grasa. Estoy viendo resultados notables sin hacer ejercicio, y puedo ponerme los viejos jeans que no he usado en 10 años."
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

