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

                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy_lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"Come Curare Le Vene Varicose",
                            imgUrl:urlImgBase+"varicose_veins_treatment/blog.jpg",
                            pageUrl:urlPageBase+"articles/varicore-veins-treatment",
                        },
                        {
                            title:"6 Modi Naturali per Rimuovere Le Vene Varicose",
                            imgUrl:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            pageUrl:urlPageBase+"articles/vene-varicore-rimedi",
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

