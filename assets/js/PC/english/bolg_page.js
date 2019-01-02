/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    BolgPage=function(){
        this.init = function(){
            vueBolgPage=new Vue({
                el: '#vueContainer',
                delimiters: ['[[', ']]'],
                mixins: [mixinsComment],
                data: {
                    hot_word:navigationList,

                    hotpro:{

                    },

                    basepro:[

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

