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
                        pageUrl:urlPageBase+"products/top-gun",
                        imgUrl:urlImgBase+"hot_img/top_gun.png",
                        title:"TOP GUN Drops"
                    },

                    basepro:[
                        {
                            title:"5 Ways to Enhance a Sexual Relationship",
                            imgUrl:urlImgBase+"intimacy/blog.png",
                            pageUrl:urlPageBase+"articles/intimacy",
                        },
                        {
                            title:"Boost Your Sexual Performance with Top Gun Male Enhancement",
                            imgUrl:urlImgBase+"penis_enlargement/blog.jpg",
                            pageUrl:urlPageBase+"articles/penis-enlargement",
                        },
                        {
                            title:"Top Gun Male Enlargement- Ingredients- Original- Effective- Review",
                            imgUrl:urlImgBase+"how_to_increase_penis_size/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-increase-penis-size",
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

