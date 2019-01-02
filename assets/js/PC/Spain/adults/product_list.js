/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    ProductList=function(){
        this.init = function(){
            vueProductList=new Vue({
                delimiters: ['[[', ']]'],
                el: '#vueContainer',
                data: {
                    productList:[
                        {
                            title:"¿Cómo funciona TOP GUN Drops?",
                            proImg:urlImgBase+"how-does-top-gun-drops-work/TOP-GUN-Drops.jpg",
                            blogUrl:urlPageBase+"articles/how-does-top-gun-drops-work",
                            proInfo:"TOP GUN Drops es una forma alternativa, natural y efectiva para agrandar el pene sin esfuerzo y darle una erección más dura y más duradera en un corto tiempo. A diferencia de los productos químicos, los suplementos y la cirugía, las gotas de TOP GUN son píldoras de mejora masculinas que promueven la mejora masculina natural al expandir..."
                        },
                        {
                            title:"TOP GUN Drops VS los productos masculinos de mejora, crema, gel y pastillas",
                            proImg:urlImgBase+"male-enhancement-products/top_gun.png",
                            blogUrl:urlPageBase+"articles/male-enhancement-products",
                            proInfo:"El alcance de los productos para la función masculina sobre la ampliación del pene se puede dividir en gel, crema, píldoras y gotas. Quizás todos estos productos tengan el mismo propósito, sin embargo, existen diferencias entre ellos."
                        },
                        {
                            title:"TOP GUN Drops para hombres: comentarios y recomendaciones",
                            proImg:urlImgBase+"top-gun-drops-for-men/top_gun.png",
                            blogUrl:urlPageBase+"articles/top-gun-drops-for-men",
                            proInfo:"¿Necesitas TOP GUN Drops? Enfrentamos la verdad. Algunos hombres pueden sospechar que su pene es demasiado pequeño o insuficiente para satisfacer a una mujer. Como mucha gente ha dicho, eso es verdad o no depende de lo que ha dicho, o \"el tamaño no es importante\"."
                        },
                        {
                            title:"TOP GUN Drops: una solución eficaz y segura para el mejor rendimiento sexual",
                            proImg:urlImgBase+"top-sexual-performance/top_gun.png",
                            blogUrl:urlPageBase+"articles/top-sexual-performance",
                            proInfo:"TOP GUN Drops ahora es una de las soluciones más compradas y apreciadas para la mejora de los hombres y la ampliación del pene (sí, incluso a ayudarle a obtener un pene más grande, más duro y más grueso). "
                        },
                        {
                            title:"La historia de TOP GUN Drops",
                            proImg:urlImgBase+"the-history-of-top-gun-drops/raw_materials.png",
                            blogUrl:urlPageBase+"articles/the-history-of-top-gun-drops",
                            proInfo:"Sus huellas están en todas partes, fue a México, Canadá y muchos países sudamericanos, finalmente encontró las plantas Paullinia Cupana, Muira Puama y Maca cuando viajó en la selva amazónica y los Andes..."
                        },
                        {
                            title:"5 Maneras De Mejorar La Intimidad en El Matrimonio",
                            proImg:urlImgBase+"intimacy/blog.png",
                            blogUrl:urlPageBase+"articles/intimacy",
                            proInfo:"En caso de que esté buscando una forma de mantener la actividad sexual durante toda la noche en la cama, no está solo. Muchos hombres buscan formas de mejorar su rendimiento sexual. Esto puede incluir mejorar los problemas que ya existen o buscar nuevas formas de hacer feliz a tu pareja."
                        },
                        {
                            title:"Aumenta Tu Rendimiento Sexual Con La Mejora Masculina Top Gun",
                            proImg:urlImgBase+"penis_enlargement/blog.jpg",
                            blogUrl:urlPageBase+"articles/penis-enlargement",
                            proInfo:"Varicose veins are a rather common problem that characterizes abnormally large veins near the skin surface, most commonly in calves and thighs. Usually, they occur when veins develop weakened walls or defective valves that regulate blood flow."
                        },
                        {
                            title:"Top Gun– Funciona – España – Composición – Efectos Secundarios – Dónde Comprar – Precio –Comentarios",
                            proImg:urlImgBase+"how_to_lengthen_the_penis/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lengthen-the-penis",
                            proInfo:"Se lo recomiendo a todos mis pacientes que tienen quejas sobre su potencia.TOP GUN tiene un efecto marcado, enseguida proporciona una erección duradera, sin efectos secundarios sobre el sistema cardiaco. Además, el producto tiene un efecto positivo sobre la salud masculina, refuerza el sistema nervioso"
                        },
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
                mounted:function(){

                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

