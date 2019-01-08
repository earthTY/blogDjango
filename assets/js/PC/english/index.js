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
                mixins: [mixinsComment],
                data: {
                    productList:[],
                    qualityList:[],
                    bannerOption: {
                        bannerList:[],
                        swiperOption:{
                            autoplay:true,
                            delay:500,
                            loop : true,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            },
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
                            imgSrc:urlImgBase+"banner/weight_loss.png",
                            url:urlPageBase+"weight-loss",
                            info:"Beauty is the pursuit of your life",
                            title:"WEIGHT LOSS",
                            top:{
                                top:"395px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/adults.png",
                            url:urlPageBase+"adults",
                            info:"Love is our constant vow to pursue\n",
                            title:"ADULTS",
                            top:{
                                top:"380px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/health.png",
                            url:urlPageBase+"health",
                            info:"Health is the guarantee of the vitality of life",
                            title:"HEALTH",
                            top:{
                                top:"380px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/beauty.png",
                            url:urlPageBase+"beauty",
                            info:"Beauty is the pursuit of your life",
                            title:"BEAUTY",
                            top:{
                                top:"245px"
                            }
                        }
                    ];

                    var that = this

                    $.ajax({
                        url:"/get_product_by_menu_name",
                        method:"post",
                        data:JSON.stringify({
                            lang:"us",
                            menu_name:"PRODUCTS"
                        }),
                        success:function (retVal) {
                            that.productList = retVal.data
                        }
                    })


                    // this.qualityOption.qualityList = [
                    //     {
                    //         url:urlPageBase+"articles/do-you-know-the-common-misunderstandings-of-weight-loss",
                    //         imgSrc:urlImgBase+"index_blog_img/easy_lean.png",
                    //         title:"Do You Know the Common Misunderstandings of Weight Loss?",
                    //     },
                    //     {
                    //         url:urlPageBase+"articles/top-gun-drops-for-men",
                    //         imgSrc:urlImgBase+"index_blog_img/top_gun.png",
                    //         title:"TOP GUN Drops for Men: Reviews and Testimonials",
                    //     },
                    //     {
                    //         url:urlPageBase+"articles/simple-young-anti-aging",
                    //         imgSrc:urlImgBase+"index_blog_img/simple_young.png",
                    //         title:"Simple Young Anti-Aging Cream Works Effectively against the Symptoms of Skin Aging!",
                    //     },
                    //     {
                    //         url:urlPageBase+"articles/do-not-do-this-a-varicose-vein-surgery-can-kill-you",
                    //         imgSrc:urlImgBase+"index_blog_img/novaricose.png",
                    //         title:"Do Not Do This - A Varicose Veins Surgery Can Kill You",
                    //     },
                    // ];

                    $.ajax({
                        url:'get_main_page_articles',
                        method:"post",
                        data:JSON.stringify({
                            lang:"us",
                            menu_name:"PRODUCTS"
                        }),
                        success:function (retVal) {
                            that.qualityOption.qualityList = retVal.data
                        }
                    })
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