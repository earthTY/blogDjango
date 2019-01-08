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
                    productList:[
                        {
                            title:"Forget Dieting and Endless Sports - Easy Lean - the Best Product of Weight Loss",
                            proImg:urlImgBase+"forget-dieting-and-endless-sports-easy-lean-the-best-product-of-weight-loss/easy-lean.jpg",
                            blogUrl:urlPageBase+"articles/forget-dieting-and-endless-sports-easy-lean-the-best-product-of-weight-loss",
                            proInfo:"I had decided to write this post some time ago, but since a lot of things have happened (among other things I have spoken to you) I have not had the time. Right now I'm so excited that my knees tremble and I want to share this story with you."
                        },
                        {
                            title:"Do You Know the Common Misunderstandings of Weight Loss?",
                            proImg:urlImgBase+"do-you-know-the-common-misunderstandings-of-weight-loss/easy-lean3.png",
                            blogUrl:urlPageBase+"articles/do-you-know-the-common-misunderstandings-of-weight-loss",
                            proInfo:"When you are trying to lose weight, you may have some hesitations. You may worry about the rebound after dieting, or you think hold on sports is impossible for you. Therefore you sigh the weight loss is one of the most difficult thing in the world. However, weight loss could no longer be difficult, as long as it is a reasonable diet. If you cannot lose weight, come and see if you have entered some misunderstands."
                        },
                        {
                            title:"SCIENTISTS: LOSING WEIGHT TWO DAYS AFTER TAKING EASY LEAN!",
                            proImg:urlImgBase+"losing-weight-two-days-afier-taking-easy-lean/cover.png",
                            blogUrl:urlPageBase+"articles/losing-weight-two-days-afier-taking-easy-lean",
                            proInfo:"According to specialists, it is possible to pay little efforts to lose 2.5kg. The professor -- Daniel Costa has tried with specialized tests that can burn adipose tissue after 120 minutes treatment. At the same time, it destroys the cholesterol layers located in the arteries. Thanks to this, you can lose weight and eliminates all the negative consequences of overweight: high cholesterol, excess sugar and metabolic disorders."
                        },
                        {
                            title:"Easy Lean - Losing Weight Fast Without Dieting",
                            proImg:urlImgBase+"easy-lean-losing-weight-fast-without-dieting/easy-lean.png",
                            blogUrl:urlPageBase+"articles/easy-lean-losing-weight-fast-without-dieting",
                            proInfo:"Easy Lean or Chocolate shake is a slimming supplement that contains some ingredients that could theoretically help to fight against extra pounds?and cellulite.?Moreover, on the official Easy Lean website, I see that this product can also help in the elimination of acne."
                        },
                        {
                            title:"Easy Lean - Natural Vitamins and Supplement for Calories Burning and Slimming",
                            proImg:urlImgBase+"easy-lean-natural-vitamins/easy-lean.png",
                            blogUrl:urlPageBase+"articles/easy-lean-natural-vitamins",
                            proInfo:"Weight loss agents have evolved greatly since they were filled with fat burning chemicals. Today's products are used on nutrients specializing in fat melting and helping faster oxidation of unhealthy lipid formations in the body."
                        },
                        {
                            title:"7 Effective Weight Loss Techniques",
                            proImg:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            blogUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                            proInfo:"Over the years people are being counseled to engage in various crazy things, most of which have no evidence to back it up. However, we have found some weight loss techniques that are effective. Below are the 7 effective weight loss techniques."
                        },
                        {
                            title:"How To Lose Belly Fat",
                            proImg:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            blogUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                            proInfo:"Belly fat is not a serious issue mostly because it can look bad. Having so many quantities of fat in the belly has been strongly associated with some common diseases such as type 2 diabetes and heart disease. In that case, losing belly fat has a lot of benefit to the health and can also increase the average lifespan of an individual. "
                        },
                        {
                            title:"Easy Lean-Benefits and Results- Ingredients- Warnings- Review",
                            proImg:urlImgBase+"get_in_shape_for_women/blog.jpg",
                            blogUrl:urlPageBase+"articles/get-in-shape-for-women",
                            proInfo:"Easy Lean is a product specially designed for people who are on a diet to lose weight. The product is rich in unique natural fibers, It can reduce the absorption of fat in food, accelerates metabolism, further converts fat into energy, It can speed up the body's basal metabolic rate to get the best burning weight loss effect, and continuous consumption of calories to achieve the ideal posture easily."
                        }
                    ],
                },
                methods: {

                },
                watch:{

                },
                created:function(){
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

