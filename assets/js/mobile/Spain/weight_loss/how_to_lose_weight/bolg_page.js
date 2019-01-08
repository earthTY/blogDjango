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
                            name:"Lucía",
                            star:5,
                            remark:"Llevo tiempo usando productos de esta marca Easy Lean y este me ha sorprendido gratamente. El apetito y las tentaciones con la comida han disminuido desde que lo consumo. Voy todos los días al gimnasio y puedo decir que se está notando. Excelente suplemento."
                        },
                        {
                            name:"Zeus Díaz Vázquez",
                            star:5,
                            remark:"Desde el segundo día noto resultados. Cumple perfectamente su objetivo, reducir el apetito. En  Easy Lean- Carnitina no me ha dado tiempo hacer ejercicio pero tiene buena pinta.Actualizare según resultados.Lo recomendio 100%!"
                        },
                        {
                            name:"paula",
                            star:5,
                            remark:"Llevo tomando esta Easy Lean desde hace dos meses, acabo de comprar mi segundo y ya he perdido 9 kilos!!! Súper encantado con este producto."
                        },
                        {
                            name:"José Carlos iba",
                            star:5,
                            remark:"Muy buenos resultados, Estoy muy satisfecha con el producto. .Resultados muy buenos siempre que se cumpla con las actividades deportivas. Seguiré usándolo"
                        },
                        {
                            name:"Yainire",
                            star:5,
                            remark:"Lo estoy tomando desde hace unos 10 días y me está ayudando mucho con mi dieta. Lo tomo un ratito antes de las principales comidas y si noto que me reduce el apetito. Buen producto."
                        },
                        {
                            name:"JADMGRARPG",
                            star:5,
                            remark:"Soy una persona deportista, pero mi trabajo son turnos de 12 horas sentado,y a veces siento mucha hambre debido que otros días necito comer más para hacer deporte, con este producto la verdad que me encuentro más saciado los días que no entreno y mi ingesta calórica es menor. Además actúa como termogénico. Lo recomiendo cien por cien  Easy Lean ."
                        },
                        {
                            name:"Adelaida",
                            star:5,
                            remark:"Lo compré tras leer las reviews y me está pasando lo mismo que lo que dice mucha gente por aquí. No existen los productos mágicos, pero es el complemento perfecto para adelgazar mucho más si lo alternas con actividad física. Un saludo"
                        },
                        {
                            name:"Cris",
                            star:5,
                            remark:"Lo compré para ver si conseguía bajar algo de peso y estoy gratamente sorprendida. He conseguido bajar 3 kilos en poco tiempo, combinándolo con dieta y ejercicio que es como me recomendaron hacerlo."
                        },
                        {
                            name:"Cristina",
                            star:5,
                            remark:"De momento noto que funciona. Es la primera vez que he comprado estas Easy Lean dieta para perder peso rapido por recomendación. Seguiré haciendo seguimiento y confirmar que todo funciona tal como me han dicho!"
                        },
                        {
                            name:"Raquel LLuen",
                            star:5,
                            remark:"Teniendo en cuenta que no existen los milagros, tengo que decir que este producto es bastante bueno. Sólo llevo tomándolo 2 semanas, además de no pasarme con la comida y hacer un ejercicio moderado y ya he perdido 1 kilo y medio. Espero continuar así hasta quitarme los cuatro kilos que pretendo hasta el verano."
                        },
                        {
                            name:"Guillermo",
                            star:5,
                            remark:"No confiaba mucho en lo beneficios de la Easy Lean, pero después de hablar con una amiga me lo ha recomendado y la verdad que es muy efectivo. Noto que reduce el apetito y acompañado de una alimentación sana y algo de actividad he perdido 6 kilos en poco tiempo."
                        },
                        {
                            name:"Raquel Ma",
                            star:5,
                            remark:"Funciona de verdad las primera semana baje 3 kg con una dieta baja en grasas y carbohidratos le doy un diez."
                        },
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

