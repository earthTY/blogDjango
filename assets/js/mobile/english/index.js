/**
 * Created by Administrator on 2018/5/3 0003.
 */
(function(){
    IndexPage=function(){
        this.init = function(){
            Vue.use(window.VueAwesomeSwiper)
            vueIndexPage=new Vue({
                el: '#vueContainer',
                delimiters: ['[[', ']]'],
                data: {
                    productList:[],
                    qualityList:[],
                    bannerOption: {
                        bannerList:[],
                        swiperOption:{
                            autoplay:true,
                            delay:300,
                            loop : true,
                            pagination :{
                                el: '.swiper-pagination',
                                clickable :true,
                            }
                        }
                    },

                    qualityOption:{
                        qualityList:[],
                        swiperOption:{
                            slidesPerView : 'auto',
                            spaceBetween :35,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }
                        }
                    }
                },
                methods: {

                },
                watch:{

                },
                created:function(){
                    this.bannerOption.bannerList=[
                        {
                            imgSrc:urlImgBase+"/banner/weight_loss.png",
                            url:urlPageBase+"weight-loss",
                            info:"Beauty is the pursuit of your life",
                            title:"WEIGHT LOSS",
                            top:{
                                top:"7.9626rem"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"/banner/adults.png",
                            url:urlPageBase+"adults",
                            info:"Love is our constant vow to pursue",
                            title:"ADULTS",
                            top:{
                                top:"7.945rem"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"/banner/health.png",
                            url:urlPageBase+"health",
                            info:"Health is the guarantee of the vitality of life",
                            title:"HEALTH",
                            top:{
                                top:"7.945rem"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"/banner/beauty.png",
                            url:urlPageBase+"beauty",
                            info:"Beauty is the pursuit of your life",
                            title:"BEAUTY",
                            top:{
                                top:"4.9626rem"
                            }
                        }
                    ]

                    this.qualityOption.qualityList = [
                        {
                            url:urlPageBase+"products/easy-lean",
                            imgSrc:urlImgBase+"index_blog_img/easy_lean.png",
                            title:"EASY LEAN",
                        },
                        {
                            url:urlPageBase+"products/top-gun",
                            imgSrc:urlImgBase+"index_blog_img/top_gun.png",
                            title:"TOP GUN Drops",
                        },
                        {
                            url:urlPageBase+"products/simple-young",
                            imgSrc:urlImgBase+"index_blog_img/simple_young.png",
                            title:"SIMPLE YOUNG",
                        },
                        {
                            url:urlPageBase+"products/novaricose",
                            imgSrc:urlImgBase+"index_blog_img/novaricose.png",
                            title:"NOVARICOSE",
                        },
                    ];

                    this.productList = [
                        {
                            url:urlPageBase+"products/easy-lean",
                            imgSrc:urlImgBase+"index_prolist/easy_lean.png",
                            title:"EASY LEAN",
                            info:"Want to BOOST your metabolism? Our Easy Lean naturally boosts your metabolism helping you achieve weight loss."
                        },
                        {
                            url:urlPageBase+"products/top-gun",
                            imgSrc:urlImgBase+"index_prolist/top_gun.png",
                            title:"TOP GUN Drops",
                            info:"Stimulates the potency of men and the sensation of orgasm in both sexes."
                        },
                        {
                            url:urlPageBase+"products/simple-young",
                            imgSrc:urlImgBase+"index_prolist/simple_young.png",
                            title:"SIMPLE YOUNG",
                            info:"Contains age-defying antioxidant-rich Grape Seed and Blackberry with Multi-Vitamins A, C, and E.Regulate the production of lipids in the outer skin layers."
                        },
                        {
                            url:urlPageBase+"products/novaricose",
                            imgSrc:urlImgBase+"index_prolist/novaricose.png",
                            title:"NOVARICOSE",
                            info:" The Most Effective Solution to diminish the appearance of Spider and Varicose Veins - with all natural ingredients that are safe for all skin types"
                        },
                    ]
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