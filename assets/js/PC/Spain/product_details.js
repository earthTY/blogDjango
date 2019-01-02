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
                    bannerList:[],
                    productList:[],
                    qualityList:[],
                },
                methods: {

                },
                watch:{

                },
                created:function(){

                },
                mounted:function(){
                    dropMenu()
                }
            })

            initPage()

            function initPage(){

            }
        }
    }
})();

