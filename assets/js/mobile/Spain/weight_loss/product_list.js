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
                            title:"Easy Lean –Comprueba Las Opiniones, Averigua Si Funciona, Dónde Comprarlo y Cuál Es Su Eficacia ",
                            proImg:urlImgBase+"how_to_lose_weight/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lose-weight",
                            proInfo:"¿Cansado de no conseguir el peso ideal?, ¿Te decepcionas cada vez que te pesas?, ¿Sientes culpa después de cada comida?, ¿Quieres saber cómo perder peso en casa? entonces debes leer la información que traemos para ti. "
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

