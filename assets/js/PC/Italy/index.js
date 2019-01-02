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
                            title:"PERDITA DI PESO",
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
                            title:"SALUTE",
                            top:{
                                top:"380px"
                            }
                        },
                        {
                            imgSrc:urlImgBase+"banner/beauty.png",
                            url:urlPageBase+"beauty",
                            info:"Beauty is the pursuit of your life",
                            title:"BELLEZZA",
                            top:{
                                top:"245px"
                            }
                        }
                    ]

                    this.qualityOption.qualityList = [
                        {
                            url:urlPageBase+"articles/best-foods-for-weight-loss",
                            imgSrc:urlImgBase+"index_blog_img/easy_lean.png",
                            title:"I migliori alimenti per la perdita di peso",
                        },
                        {
                            url:urlPageBase+"articles/intimacy",
                            imgSrc:urlImgBase+"index_blog_img/top_gun.png",
                            title:"5 Modi Per Migliorare Una Relazione Sessuale",
                        },
                        {
                            url:urlPageBase+"articles/varicore-veins-treatment",
                            imgSrc:urlImgBase+"index_blog_img/novaricose.png",
                            title:"Come Curare Le Vene Varicose",
                        },
                        {
                            url:urlPageBase+"articles/anti-aging-cream",
                            imgSrc:urlImgBase+"index_blog_img/simple_young.png",
                            title:"Simple Young: Il Prodotto Che Può Renderti Giovane!",
                        },
                    ];

                    this.productList = [
                        {
                            url:urlPageBase+"products/easy-lean",
                            imgSrc:urlImgBase+"index_prolist/easy_lean.png",
                            title:"EASY LEAN",
                            info:"Vuoi potenziare il tuo metabolismo? Il nostro Easy Lean stimola naturalmente il tuo metabolismo aiutandoti a raggiungere la perdita di peso."
                        },
                        {
                            url:urlPageBase+"products/top-gun",
                            imgSrc:urlImgBase+"index_prolist/top_gun.png",
                            title:"TOP GUN Drops",
                            info:"Stimola la potenza degli uomini e la sensazione di orgasmo in entrambi i sessi."
                        },
                        {

                            url:urlPageBase+"products/simple-young",
                            imgSrc:urlImgBase+"index_prolist/simple_young.png",
                            title:"SIMPLE YOUNG",
                            info:"Contiene semi d'uva ricchi di antiossidanti e antiossidanti e mora con multi-vitamine A, C ed E.Regolare la produzione di lipidi negli strati esterni della pelle."
                        },
                        {
                            url:urlPageBase+"products/novaricose",
                            imgSrc:urlImgBase+"index_prolist/novaricose.png",
                            title:"NOVARICOSE",
                            info:"La soluzione più efficace per ridurre l'aspetto delle vene varicose e ragno - con tutti gli ingredienti naturali che sono sicuri per tutti i tipi di pelle."
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