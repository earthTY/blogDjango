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
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"easy_lean/list.jpg",
                    },

                    basepro:[
                        {
                            title:"5 Modi Per Migliorare Una Relazione Sessuale",
                            imgUrl:urlImgBase+"intimacy/blog.png",
                            pageUrl:urlPageBase+"articles/intimacy",
                        },
                        {
                            title:"Potenzia La Tua Performance Sessuale Con Il Potenziamento Maschile Della Top Gun",
                            imgUrl:urlImgBase+"penis_enlargement/blog.jpg",
                            pageUrl:urlPageBase+"articles/penis-enlargement",
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

