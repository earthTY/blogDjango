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
                            title:"¿Cuándo y por qué usar la crema antiarrugas?",
                            proImg:urlImgBase+"when-and-why-to-use-anti-wrinkle-cream/simple-young.png",
                            blogUrl:urlPageBase+"articles/when-and-why-to-use-anti-wrinkle-cream",
                            proInfo:"Usar una crema antiarrugas de buena calidad puede ser un gran ayuda para ralentizar los procesos naturales de envejecimiento de nuestra cara, la región de la cara donde los signos del envejecimiento son más evidentes. Entre las edades de 25 y 38 comienzan a formarse las primeras líneas cutáneas, como arrugas alrededor de los ojos, microlíneas verticales en las comisuras de la boca (líneas de sonrisa) o pliegues entre las cejas (arrugas en la frente). Pero debemos tener cuidado de elegir un producto de alto rendimiento desarrollado según la tecnología moderna que también sea el más adecuado para su tipo de piel."
                        },
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

                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/simple-young",
                        imgUrl:urlImgBase+"hot_img/simple_young.png",
                        title:"Simple Young"
                    },

                    basepro:[
                        {
                            title:"Simple Young- The Product Which Can Make You Young Again!",
                            imgUrl:urlImgBase+"anti_aging_cream/blog.png",
                            pageUrl:urlPageBase+"articles/anti-aging-cream",
                        },
                        {
                            title:"Cuidado Natural De La Piel Y Alimentos Antiarrugas",
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
                mounted:function(){

                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

