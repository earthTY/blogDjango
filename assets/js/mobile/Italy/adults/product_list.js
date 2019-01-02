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
                            title:"5 modi per migliorare una relazione sessuale",
                            proImg:urlImgBase+"intimacy/blog.png",
                            blogUrl:urlPageBase+"articles/intimacy",
                            proInfo:"Nel caso tu stia cercando un modo per mantenere l'attività sessuale per tutta la notte sul letto, non sei il solo. Un sacco di uomini là fuori sono alla ricerca di modi per migliorare le loro prestazioni sessuali. Ciò può includere il miglioramento dei problemi già esistenti o la ricerca di nuovi modi per rendere felice il tuo partner"
                        },
                        {
                            title:"Boost Your Sexual Performance with Top Gun Male Enhancement",
                            proImg:urlImgBase+"penis_enlargement/blog.jpg",
                            blogUrl:urlPageBase+"articles/penis-enlargement",
                            proInfo:"Varicose veins are a rather common problem that characterizes abnormally large veins near the skin surface, most commonly in calves and thighs. Usually, they occur when veins develop weakened walls or defective valves that regulate blood flow."
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

