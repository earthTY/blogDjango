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
                            title:"Simple Young: este es el mejor producto que puede reavivar la juventud en ti.",
                            proImg:urlImgBase+"anti_aging_cream/blog.png",
                            blogUrl:urlPageBase+"articles/anti-aging-cream",
                            proInfo:"Con el envejecimiento, las caras femeninas comienzan a tener varios problemas que conducen a significados negativos en la apariencia. A medida que pasa el tiempo, causa cambios en el cuerpo que reflejan cómo nos sentimos y también nuestro parecido facial."
                        },
                        {
                            title:"Cuidado natural de la piel y alimentos antiarrugas",
                            proImg:urlImgBase+"skincare/blog.png",
                            blogUrl:urlPageBase+"articles/skincare",
                            proInfo:"Poner alimentos poderosos como verduras de hoja verde oscuro, chocolate negro, cítricos y otros alimentos naturales en su dieta no solo ayuda a combatir enfermedades crónicas como el ataque cardíaco y la diabetes, sino que también ayuda a nutrir la piel."
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

