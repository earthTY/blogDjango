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
                            title:"The story and shopping guides for Black Friday deals",
                            proImg:urlImgBase+"the-story-and-shopping-guides-for-black-friday-deals/simple-young.jpg",
                            blogUrl:urlPageBase+"articles/the-story-and-shopping-guides-for-black-friday-deals",
                            proInfo:"On the fourth Friday of November each year (the second day after Thanksgiving in the United States), the United States began the Christmas shopping season that lasted until the end of the year. All major shopping malls have even reduced their sales and discounts, which can even be as low as one fold. Shoppers are snapping up, and during the Christmas shopping season, sales can account for more than a third of the year. Since people traditionally use red to indicate deficit and black to represent profit, this day is also called Black Friday. "
                        },
                        {
                            title:"Simple Young - The Beautiful Woman Is Always Happy",
                            proImg:urlImgBase+"simple-young-the-beautiful-woman-is-always-happy/simple-young.png",
                            blogUrl:urlPageBase+"articles/simple-young-the-beautiful-woman-is-always-happy",
                            proInfo:"Hello everyone! As we usually talk about novelties and lifestyle in a section of true stories and tips. Finally, I found a tool that really helps to get rid of the bald region! I tested it on myself and I am ready to share my experiences with you, my friends."
                        },
                        {
                            title:"How to Help Hair Growth Naturally: the True Story of the Party",
                            proImg:urlImgBase+"how-to-put-hair-the-true-story-of-the-party/sea-miracle.jpg",
                            blogUrl:urlPageBase+"articles/how-to-put-hair-the-true-story-of-the-party",
                            proInfo:"Hello everyone! As we usually talk about novelties and lifestyle in a section of true stories and tips. Finally, I found a tool that really helps to get rid of the bald region! I tested it on myself and I am ready to share my experiences with you, my friends."
                        },
                        {
                            title:"Sea Miracle: Hair Mask for Healthy and Bright Hair",
                            proImg:urlImgBase+"sea-miracle-hair-mask-for-healthy-and-bright-hair/sea-miracle.png",
                            blogUrl:urlPageBase+"articles/sea-miracle-hair-mask-for-healthy-and-bright-hair",
                            proInfo:"Do salt and chlorine ruin your hair? Are you often on holidays at the beach and shampooed every day and finally lead to weak and brittle hair? Do you have a tendency of losing hair? If you have any of these problems we recommend reading this article to understand why your hair is weak and how to make the hair strong and healthy."
                        },
                        {
                            title:"Sea Miracleb Anti-Hair Loss Mask - Reviews, Opinions and Where to Buy It",
                            proImg:urlImgBase+"sea-miracleb-anti-hair-loss-mask-reviews/sea-miracle.png",
                            blogUrl:urlPageBase+"articles/sea-miracleb-anti-hair-loss-mask-reviews",
                            proInfo:"Sea Miracle is the new treatment for scalp care, elected the best cosmetic product in 2018, used by millions of women and men who do not give up a glossy, clean, thick and well-groomed hair."
                        },
                        {
                            title:"When and Why to Use the Anti-wrinkle Cream?",
                            proImg:urlImgBase+"when-and-why-to-use-anti-wrinkle-cream/simple-young.png",
                            blogUrl:urlPageBase+"articles/when-and-why-to-use-anti-wrinkle-cream",
                            proInfo:"Using a quality anti-wrinkle cream can be a great help to slow down the natural aging processes of our face, the region of the face where the signs of aging are more evident. Between the ages of 25 and 38 the first cutaneous lines begin to form, such as wrinkles around the eyes, vertical micro-lines at the corners of the mouth (smile lines), or glabellar folds (forehead wrinkles). But we must be careful to choose a high performance product developed according to modern technology that is also the most suitable for your skin type."
                        },
                        {
                            title:"Simple Young Anti-Aging Cream – Looking Younger within 30 Days",
                            proImg:urlImgBase+"simple-young-anti-aging-cream/simple-young.png",
                            blogUrl:urlPageBase+"articles/simple-young-anti-aging-cream",
                            proInfo:"Simple Young Anti-aging Cream is a cream used for one of the best skin care products and especially for the reduction of wrinkles. Production began as a renewable energy project, but the unexpected discovery was that of an anti-aging effect."
                        },
                        {
                            title:"Simple Young Anti-Aging Cream Works Effectively against the Symptoms of Skin Aging!",
                            proImg:urlImgBase+"simple-young-anti-aging/simple-young.png",
                            blogUrl:urlPageBase+"articles/simple-young-anti-aging",
                            proInfo:"Most women face skin problems caused by external factors - repeated exposure to sun, wind, toxic environments or pollution - and internal factors that keep up with the rhythm of lifestyle..."
                        },
                        {
                            title:"Simple Young- The Product Which Can Make You Young Again!",
                            proImg:urlImgBase+"anti_aging_cream/blog.png",
                            blogUrl:urlPageBase+"articles/anti-aging-cream",
                            proInfo:"With aging, female faces are beginning to have various problems leading to negative significances on appearance. As time passes, it causes changes in the body that reflect how we feel and also our facial resemblance."
                        },
                        {
                            title:"Natural Skin Care and Anti-wrinkle Foods",
                            proImg:urlImgBase+"skincare/blog.png",
                            blogUrl:urlPageBase+"articles/skincare",
                            proInfo:"Diets play a powerful role in the skin’s complexion. What you take affects hormonal balance, causes acne, and can also create or reduce inflammation which is associated with aging of the skin. Scientifically speaking, the foods you eat are as important as the serums and creams you apply on your skin on a daily basis. "
                        },
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

