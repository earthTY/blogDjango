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
                            title:"Easy Lean - Vitaminas naturales y suplementos para quemar y adelgazar calorías",
                            proImg:urlImgBase+"easy-lean-natural-vitamins/easy-lean.png",
                            blogUrl:urlPageBase+"articles/easy-lean-natural-vitamins",
                            proInfo:"Los agentes de pérdida de peso han evolucionado mucho desde que se llenaron con productos químicos quemadores de grasa. Los productos de hoy se utilizan en nutrientes que se especializan en la fusión de grasas y ayudan a una oxidación más rápida de las formaciones de lípidos insalubres en el cuerpo."
                        },
                        {
                            title:"CIENTÍFICOS: ¡PERDER PESO DOS DÍAS DESPUÉS DE TOMAR EASY LEAN!",
                            proImg:urlImgBase+"losing-weight-two-days-afier-taking-easy-lean/cover.png",
                            blogUrl:urlPageBase+"articles/losing-weight-two-days-afier-taking-easy-lean",
                            proInfo:"Según los especialistas, es posible hacer pocos esfuerzos a perder 2,5 kg. El profesor - Daniel Costa ha intentado con pruebas especializadas que pueden quemar tejido adiposo después de 120 minutos de tratamiento. Al mismo tiempo, destruye las capas de colesterol ubicadas en las arterias. Gracias a esto, puede perder peso y eliminar todas las consecuencias negativas del sobrepeso: colesterol alto, exceso de azúcar y trastornos metabólicos."
                        },
                        {
                            title:"Easy Lean - Perder peso rápidamente sin hacer dieta",
                            proImg:urlImgBase+"easy-lean-losing-weight-fast-without-dieting/easy-lean.png",
                            blogUrl:urlPageBase+"articles/easy-lean-losing-weight-fast-without-dieting",
                            proInfo:"Easy Lean o Chocolate shake es un suplemento adelgazante que contiene algunos ingredientes que teóricamente podrían ayudar a combatir los kilos de más y la celulitis. Además, en la página web oficial de Easy Lean, veo que este producto también puede ayudar en la eliminación del acné."
                        },
                        {
                            title:"Estos Son Los Mejores Alimentos Para Bajar De Peso",
                            proImg:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            blogUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                            proInfo:"El hecho es que ningún alimento actúa mágicamente para lograr la pérdida de peso. Hay algunos alimentos que pueden ayudarlo a obtener su pérdida de peso deseada y la mayoría de estos alimentos tienen muchas cosas en común, incluido un alto contenido de fibra y también una baja densidad de energía. Coloque los siguientes alimentos para adelgazar como parte de su dieta total saludable, y le resultará muy fácil lograr la pérdida de peso que anhelaba."
                        },
                        {
                            title:"Como Perder Grasa Del Abdomen",
                            proImg:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                            proInfo:"La grasa del vientre no es un problema serio principalmente porque puede verse mal. Tener tantas cantidades de grasa en el vientre se ha asociado fuertemente con algunas enfermedades comunes, como la diabetes tipo 2 y la enfermedad cardíaca. En ese caso, perder grasa del vientre tiene un gran beneficio para la salud y también puede aumentar la vida media de un individuo."
                        },
                        {
                            title:"Easy Lean –Comprueba Las Opiniones, Averigua Si Funciona, Dónde Comprarlo y Cuál Es Su Eficacia",
                            proImg:urlImgBase+"get_in_shape_for_women/blog.jpg",
                            blogUrl:urlPageBase+"articles/get-in-shape-for-women",
                            proInfo:"¿Cansado de no conseguir el peso ideal?, ¿Te decepcionas cada vez que te pesas?, ¿Sientes culpa después de cada comida?, ¿Quieres saber cómo perder peso en casa? entonces debes leer la información que traemos para ti."
                        },
                    ],

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Estos Son Los Mejores Alimentos Para Bajar De Peso",
                            imgUrl:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            pageUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                        },
                        {
                            title:"Como Perder Grasa Del Abdomen",
                            imgUrl:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                        },
                        {
                            title:"Easy Lean –Comprueba Las Opiniones, Averigua Si Funciona, Dónde Comprarlo y Cuál Es Su Eficacia ",
                            imgUrl:urlImgBase+"get_in_shape_for_women/blog.jpg",
                            pageUrl:urlPageBase+"articles/get-in-shape-for-women",
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

