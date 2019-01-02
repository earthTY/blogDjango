/**
 * Created by Administrator on 2018/5/8 0008.
 */
(function(){
    ContactAs=function(){
        this.init = function(){
            vueContactAs=new Vue({
                el: '#vueContainer',
                delimiters: ['[[', ']]'],
                mixins: [mixinsComment],
                data: {

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