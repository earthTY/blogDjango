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
                            spaceBetween : 40,
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
                            title:"PÉRDIDA DE PESO",
                            top:{
                                top:"395px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/adults.png",
                            url:urlPageBase+"adults",
                            info:"Love is our constant vow to pursue\n",
                            title:"ADULTO",
                            top:{
                                top:"380px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/health.png",
                            url:urlPageBase+"health",
                            info:"Health is the guarantee of the vitality of life",
                            title:"SALUD",
                            top:{
                                top:"380px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/beauty.png",
                            url:urlPageBase+"beauty",
                            info:"Beauty is the pursuit of your life",
                            title:"BELLEZA",
                            top:{
                                top:"245px"
                            }
                        }
                    ]

                    this.qualityOption.qualityList = [
                        {
                            url:urlPageBase+"articles/best-foods-for-weight-loss",
                            imgSrc:urlImgBase+"index_blog_img/easy_lean.png",
                            title:"EASY LEAN",
                        },
                        {
                            url:urlPageBase+"articles/how-does-top-gun-drops-work",
                            imgSrc:urlImgBase+"index_blog_img/top_gun.png",
                            title:"TOP GUN Drops",
                        },
                        {
                            url:urlPageBase+"articles/varicore-veins-treatment",
                            imgSrc:urlImgBase+"index_blog_img/simple_young.png",
                            title:"SIMPLE YOUNG",
                        },
                        {
                            url:urlPageBase+"articles/anti-aging-cream",
                            imgSrc:urlImgBase+"index_blog_img/novaricose.png",
                            title:"NOVARICOSE",
                        },
                    ];

                    this.productList = [
                        {
                            url:urlPageBase+"products/easy-lean",
                            imgSrc:urlImgBase+"index_prolist/easy_lean.jpg",
                            title:"EASY LEAN",
                            info:"?Quieres aumentar tu metabolismo? Nuestro Easy Lean naturalmente aumenta su metabolismo ayudándole a lograr la pérdida de peso."
                        },
                        {
                            url:urlPageBase+"products/top-gun",
                            imgSrc:urlImgBase+"index_prolist/top_gun.jpg",
                            title:"TOP GUN Drops",
                            info:"Estimula la potencia de los hombres y la sensación de orgasmo en ambos sexos."
                        },
                        {
                            url:urlPageBase+"products/simple-young",
                            imgSrc:urlImgBase+"index_prolist/simple_young.jpg",
                            title:"SIMPLE YOUNG",
                            info:"SIMPLE YOUNGContiene semillas de uva ricas en antioxidantes y antioxidantes que desafían a la edad, con multivitaminas A, C y E.Regula la producción de lípidos en las capas externas de la piel."
                        },
                        {
                            url:urlPageBase+"products/novaricose",
                            imgSrc:urlImgBase+"index_prolist/novaricose.jpg",
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