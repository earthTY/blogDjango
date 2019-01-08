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
                            name:"Jonathan L.",
                            star:5,
                            remark:"Had a leg injury in an auto accident over 20 years ago. Veins have gotten worse over the years. I have seen improvement after 3 days on this product. Wish I would have found it years ago. I'm nothing short of amazed."
                        },
                        {
                            name:"Maria Bruno",
                            star:5,
                            remark:"Okay, I have to say -- this product works. I have had varicose veins in my right leg since I was a teenager and taking this supplement almost completely got rid of the noticeable purple spots on my leg. I'm actually pretty amazed!"
                        },
                        {
                            name:"dodgerblue247",
                            star:4,
                            remark:"Seems to work great. My wife and I noticed some reduction in the spider veins in her legs within just a week or so. She has been taking this for about a month now and is still seeing results. I am re-ordering this again today."
                        },
                        {
                            name:"J-Ron",
                            star:5,
                            remark:"Seems to work great. My wife and I noticed some reduction in the spider veins in her legs within just a week or so. She has been using Novaricose Cream for about a month now and is still seeing results. I am re-ordering this again today."
                        },
                        {
                            name:"Mick617",
                            star:5,
                            remark:"My mom loves this product. It has literally taken away almost half of her verrucous veins. it's worth a try!"
                        }

                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/novaricose",
                        imgUrl:urlImgBase+"hot_img/novaricose.png",
                        title:"Novaricose"
                    },

                    basepro:[
                        {
                            title:"Novaricose Veins Treatment",
                            imgUrl:urlImgBase+"varicose_veins_treatment/blog.jpg",
                            pageUrl:urlPageBase+"articles/varicore_veins_treatment",
                        },
                        {
                            title:"6 Natural Ways to Remove Varicose Veins",
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

