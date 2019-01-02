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
                            title:"Easy Lean-price, Beneficios, Eficiencia Y Efectos Secundarios",
                            proImg:urlImgBase+"easy_lean/list.jpg",
                            blogUrl:urlPageBase+"products/easy_lean",
                            proInfo:"Easy Lean es un producto en polvo que está especialmente formulado para ayudar a los usuarios a perder una cantidad significativa de peso. También ayuda a mejorar la condición general del cuerpo humano a través de algunos mecanismos. El mercado de hoy está saturado con cientos de productos milagrosos que prometen resultados inmediatos y significativos de pérdida de peso a través del consumo continuo."
                        },
                        {
                            title:"Top Gun Drops- Precio, Ingredientes, Beneficios Y ¿Es Seguro?",
                            proImg:urlImgBase+"top_gun/list.png",
                            blogUrl:urlPageBase+"products/top_gun",
                            proInfo:"TOP GUN Para hombres es una mejora masculina que te dará una erección más fuerte, más larga y más fuerte, intensificará tu satisfacción sexual y orgasmos, la capacidad de mantener una erección por mucho más tiempo de lo normal, aumenta la libido del usuario y mejora su cama rendimiento dramáticamente."
                        },
                        {
                            title:"¿Qué Es Novaricose, Cómo Utilizar Novaricose, Cómo Funciona Novaricose? Beneficios De Novaricose?",
                            proImg:urlImgBase+"novaricose/list.jpg",
                            blogUrl:urlPageBase+"products/novaricose",
                            proInfo:"?Sabes que más del 23% de los adultos mayores de 30 a?os tienen venas varicosas? A medida que las personas comienzan a envejecer, el temor a venas hinchadas e insalubres se vuelve más pronunciado y ?qué hacen muchas personas? Cower en miedo. Es un movimiento totalmente equivocado, debes buscar remedio natural para las venas varicosas antes de que sea demasiado tarde. Pero primero, ?qué es Novaricose? ?Cómo funciona Novaricose? Esta guía le mostrará cómo usar Novaricose."
                        },
                        {
                            title:"¿Qué Es Young Simple, Cómo Usar Young Simple, Cómo Funciona El Joven Simple? Beneficios De Simple Young?",
                            proImg:urlImgBase+"simple_young/list.jpg",
                            blogUrl:urlPageBase+"products/simple_young",
                            proInfo:"Soy una mujer blanca de 55 años, he intentado todo lo que se haya creado para combatir el envejecimiento. A mi piel le gusta esto, incluso tensé mi línea de mandíbula caida. No veo mucha disminución en las arrugas, pero también está ayudando con la piel crepé en mi cuello."
                        },
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

