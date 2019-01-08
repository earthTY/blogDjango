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
                            name:"Enpevi",
                            star:5,
                            remark:"Da sensacion de frescor. Absorcion rapida. Muy agradable. Comparada con otras si que se nota que alivia la pesadez de piernas"
                        },
                        {
                            name:"Maria Bruno",
                            star:5,
                            remark:"De acuerdo, tengo que decir que este producto funciona. He tenido venas varicosas en la pierna derecha desde que era adolescente y al tomar este suplemento eliminé casi por completo las manchas púrpuras notables en mi pierna. ¡Estoy realmente muy sorprendido!"
                        },
                        {
                            name:"dodgerblue247",
                            star:4,
                            remark:"Parece que funciona bien. Mi esposa y yo notamos cierta reducción en las arañas vasculares en sus piernas en tan solo una semana más o menos. Ella ha estado tomando esto por alrededor de un mes y todavía está viendo resultados. Estoy reordenando esto nuevamente hoy."
                        },
                        {
                            name:"Jonathan L.",
                            star:5,
                            remark:"Tuvo una lesión en la pierna en un accidente automovilístico hace más de 20 años. Las venas han empeorado con los años. He visto una mejora después de 3 días en este producto. Ojalá lo hubiera encontrado hace años. Estoy sorprendido"
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

