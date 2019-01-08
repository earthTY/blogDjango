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
                    blogTitle:"Top Gun-price, Ingredients, Benefits and Side Effects",
                    usercomments:[
                        {
                            name:"Ilain Voltaire",
                            star:5,
                            remark:"Recibí este producto hace aproximadamente 2 semanas, al principio era escéptico. Después de una semana, comencé a notar que mis venas varicosas no eran tan voluminosas, después de 2 semanas, ya no tenía protuberancias en las venas varicosas y las ara?as rojas y violetas eran algo más claras. Porque este producto está funcionando para mí."
                        },
                        {
                            name:"F. Corcino",
                            star:5,
                            remark:"ha hecho lo que el escrito dice que hará. Tenía unas ara?as varicosas viejas y feas en mis piernas, hacían que esa luz pareciera apenas perceptible ahora, y las otras ara?as también he reaccionado muy bien a esta crema. Ahora solo una vez al día. lo usé varias veces al día cuando comencé a usarlo. En mi segundo jar."
                        },
                        {
                            name:"Akasha",
                            star:5,
                            remark:"?Esto es fantástico, puede ser un recipiente peque?o pero es poderoso! ?Ya está viendo mejoras importantes en la apariencia de las venas, alivia la inquietud y huele muy bien! Love Love Love este producto. Definitivamente volveré a comprar."
                        },
                        {
                            name:"Jess R",
                            star:5,
                            remark:"compré las venas varicosas del tratamiento Novaricose para mi tía y a ella le gusta. ?Novaricose es calmante para piernas cansadas!"
                        },
                        {
                            name:"Sebastian",
                            star:4,
                            remark:"planeo continuar usando esto porque en solo 5 días de uso puedo ver una diferencia en la apariencia de mis venas varicosas. El cambio no es drástico, pero lo noto, y estoy muy contento con los resultados. Tengo un caso menor de venas varicosas y solo en un muslo, por lo que no puedo confirmar los mismos resultados para una persona con una situación más grave."
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

