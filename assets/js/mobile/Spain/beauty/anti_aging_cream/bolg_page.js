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
                            name:"Robert McNeal",
                            star:5,
                            remark:"?He estado usando la crema Simple Young durante un mes más o menos y tengo que decir que estoy viendo una diferencia! Soy fumador, así que tengo varias arrugas alrededor de la boca y están empezando a desaparecer. Sin mencionar que mi cara está incluso más tonificada y mi barbilla se ha aclarado. Me lo pongo por la ma?ana si no uso maquillaje ese día y es muy hidratante por sí mismo."
                        },
                        {
                            name:"Amanda",
                            star:5,
                            remark:"Cuando usé esta crema, mi piel se siente increíblemente suave y noté una reducción en las líneas finas alrededor de mis ojos. Definitivamente voy a reponer mi suministro cuando me quede sin combustible."
                        },
                        {
                            name:"sarah",
                            star:4,
                            remark:"Esta crema hizo maravillas en mi cara. Reduce mis arrugas en líneas finas y mi piel es más suave y brillante. Cuando aplico esta crema, continúa de manera fácil y no deja una película blanca como otros productos que he usado."
                        },
                        {
                            name:"Robert McNeal",
                            star:5,
                            remark:"He visto una ligera mejora en las arrugas que empecé a desarrollar en la frente, pero no desaparecieron del todo. Es mi primera botella. Seguiré por otra botella o dos e informaré sobre los resultados. No espero resultados durante la noche."
                        }

                    ],

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

