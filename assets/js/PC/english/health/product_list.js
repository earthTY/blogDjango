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
                    showProductList:[],

                    productList:[
                        {
                            title:"Have You Been Diagnosed with Varicose Veins?",
                            proImg:urlImgBase+"have-you-been-diagnosed-with-varicose-veins/varicose.png",
                            blogUrl:urlPageBase+"articles/have-you-been-diagnosed-with-varicose-veins",
                            proInfo:"Do not rush to see a surgeon! Treat varicose veins and edema for a week! There is an opinion that varicose veins cannot be cured without surgery, and this idea is deeply rooted in public opinion. Although this assertion was rejected in the early 2000s, most people still think that you can only treat the veins with surgery."
                        },
                        {
                            title:"Gymnastics Get Rid of Varicose Veins in A Week. How to Choose A Professional",
                            proImg:urlImgBase+"gymnastics-get-rid-of-varicose-veins-in-a-week/gymnastics.png",
                            blogUrl:urlPageBase+"articles/gymnastics-get-rid-of-varicose-veins-in-a-week",
                            proInfo:"It is possible to treat varicose veins even if you are exercising on a heavy leg. I know from personal experience directly. Said Suthasri Sripornphet."
                        },
                        {
                            title:"Do Not Do This - A Varicose Veins Surgery Can Kill You",
                            proImg:urlImgBase+"do-not-do-this-a-varicose-vein-surgery-can-kill-you/varicose2.png",
                            blogUrl:urlPageBase+"articles/do-not-do-this-a-varicose-vein-surgery-can-kill-you",
                            proInfo:"Do you need surgery to remove varicose veins in 2018? Specialists of Israeli and American clinics consider this approach as BARBARIAN! Why? We decided to learn from the American phlebology expert from Chicago Evan Brighton."
                        },
                        {
                            title:"Novaricose Veins Treatment",
                            proImg:urlImgBase+"varicose_veins_treatment/blog.jpg",
                            blogUrl:urlPageBase+"articles/varicore-veins-treatment",
                            proInfo:"From your little knowledge of biology, you know that veins are the blood vessels which transport deoxygenated blood from other body parts to the heart. These veins do a lot of work and as such, they should be treated accordingly. However, if your veins become so thick, as though it is bulging out, you should get treatment for varicose veins. Before the end of this article, you will learn about Novaricose- a varicose vein cream."
                        },
                        {
                            title:"6 Natural Ways to Remove Varicose Veins",
                            proImg:urlImgBase+"vene_varicore_rimedi/blog.jpg",
                            blogUrl:urlPageBase+"articles/vene-varicore-rimedi",
                            proInfo:"Varicose veins are a rather common problem that characterizes abnormally large veins near the skin surface, most commonly in calves and thighs. Usually, they occur when veins develop weakened walls or defective valves that regulate blood flow."
                        },
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
                            pageUrl:urlPageBase+"articles/varicore-veins-treatment",
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
                mounted:function(){
                    var Xpath = window.location.pathname.split("/")

                    var currentPage = Xpath[Xpath.length - 1]

                    if(!$.isNumeric(currentPage))
                        currentPage = 1

                    initPageList(parseInt(currentPage),this.productList.length)

                    this.showProductList = this.productList.filter(function (val,index) {
                        var curr = currentPage-1
                        return index>= curr*8 && index<currentPage*8
                    })

                    if(this.showProductList.length == 0){
                        location.href = urlPageBase + '404.html'
                    }
                }
            })

            initPage()

            function initPage(){
            }
        }
    }
})();

