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
                            remark:"Buen producto. Oh Dios mío. ¡Me senté, saqué mi propio ojo! ¡Ten cuidado!"
                        },
                        {
                            name:"D. Jones",
                            star:5,
                            remark:"Desarrolla un impulso fuerte y la energía para impulsar los entrenamientos está llegando. Miro este producto como un producto de resultados a largo plazo, quiero decir que funciona muy bien, pero los mejores resultados vinieron después de un mes de uso. La resistencia sexual nunca ha sido mejor. Tengo 45 años y siento que puedo tener un mejor rendimiento que hace 10 años."
                        },
                        {
                            name:"Ada",
                            star:4,
                            remark:"Lo tomo a diario, obtuve resultados sólidos durante aproximadamente 3 meses. Soy un hombre de 52 años con un trabajo muy físico, pero últimamente siento que no tenía energía, así que estaba buscando un suplemento que me diera una ventaja y me ayudara en la cama. ¡¡Necesitaba esto!! Solo he estado tomando energía de resistencia durante unos meses, pero realmente siento que me está dando una buena ráfaga de energía durante el día y ya la última vez en la cama. Después de mi próxima botella, escribiré otra reseña, pero hasta ahora es bastante buena."
                        }
                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/top-gun",
                        imgUrl:urlImgBase+"hot_img/top_gun.png",
                        title:"TOP GUN Drops"
                    },

                    basepro:[
                        {
                            title:"5 Maneras De Mejorar La Intimidad en El Matrimonio",
                            imgUrl:urlImgBase+"intimacy/blog.png",
                            pageUrl:urlPageBase+"articles/intimacy",
                        },
                        {
                            title:"Aumenta Tu Rendimiento Sexual Con La Mejora Masculina Top Gun",
                            imgUrl:urlImgBase+"penis_enlargement/blog.jpg",
                            pageUrl:urlPageBase+"articles/penis-enlargement",
                        },
                        {
                            title:"Top Gun– Funciona – España – Composición – Efectos Secundarios – Dónde Comprar – Precio –Comentarios",
                            imgUrl:urlImgBase+"how_to_lengthen_the_penis/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lengthen-the-penis",
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

