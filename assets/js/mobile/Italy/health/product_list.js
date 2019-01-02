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
                            title:"Come Curare Le Vene Varicose",
                            proImg:urlImgBase+"varicose_veins_treatment/blog.jpg",
                            blogUrl:urlPageBase+"articles/varicore-veins-treatment",
                            proInfo:"Dalla tua piccola conoscenza della biologia, sai che le vene sono i vasi sanguigni che trasportano il sangue deossigenato dalle altre parti del corpo al cuore. Queste vene fanno molto lavoro e in quanto tali dovrebbero essere trattate di conseguenza.."
                        },
                        {
                            title:"6 Modi Naturali per Rimuovere Le Vene Varicose",
                            proImg:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            blogUrl:urlPageBase+"articles/vene-varicore-rimedi",
                            proInfo:"Le vene varicose sono un problema piuttosto comune che caratterizza le vene anormalmente grandi vicino alla superficie della pelle, più comunemente nei polpacci e nelle cosce. Di solito, si verificano quando le vene sviluppano pareti indebolite o valvole difettose che regolano il flusso sanguigno. "
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

