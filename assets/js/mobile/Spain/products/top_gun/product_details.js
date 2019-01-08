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
                    blogTitle:"Top Gun Drops-price, Ingredients, Benefits and Side Effects",

                    usercomments:[
                        {
                            name:"Autumn",
                            star:5,
                            remark:"?realmente funciona! AAA +++"
                        },
                        {
                            name:"Robin",
                            star:5,
                            remark:"Compré este producto porque pensé que mi esposa y yo podíamos disfrutar de una peque?a aventura en el dormitorio, y ?estaba impresionado! No podía dejar de excitarme varias veces al día. ?Era casi un poco demasiado molesto! Pero sirvió su trabajo. Estoy muy satisfecho con este producto y definitivamente voy a ordenar de nuevo! Muchas gracias!"
                        },
                        {
                            name:"Mark B.",
                            star:4,
                            remark:"?Este es un producto perfecto si quieres mantenerte al día con tu vida sexual! Definitivamente ayudó con mi rendimiento y mis confidencias en general. ?Pruébalo!"
                        },
                        {
                            name:"James",
                            star:5,
                            remark:"?Utilicé este producto y era muy escéptico! Funcionó exactamente como se prometió y sin duda, sin duda, el 100% mejoró mi vida sexual. Mi se?ora fue tomada por sorpresa al principio, pero definitivamente estaba agradecida cuando todo estaba dicho y hecho."
                        },
                        {
                            name:"Jeremy Brewer",
                            star:5,
                            remark:"?Cura mi pene bien!"
                        }
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

