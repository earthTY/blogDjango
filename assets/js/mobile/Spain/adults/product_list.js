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

