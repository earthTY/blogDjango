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
                            name:"Emily Hamm",
                            star:5,
                            remark:"Easy Lean is a really perfect product! After one week My tummy started to go down After two weeks , I wasn't hungry like I use to be. After three weeks I'd lost 12 lbs. Took a break but I intend to start up again. Give it a try, it worked for me. I'm now making healthier choices and I feel great ! "
                        },
                        {
                            name:"Wine Mama",
                            star:5,
                            remark:"Works great! I love the Easy Lean. I've lost 29 lbs in 1 1/2 months. But it's not like I'm lazing around expectino a miracle I'm also working out 2-3 times a week."
                        },
                        {
                            name:"Linda Jo",
                            star:5,
                            remark:"This is a great product. I have lost 9.8 pounds in three weeks. I am eating healthy Real foods at proper portions. I am alsi walking three miles five days a week. It is working. No jitters yet plenty of energy."
                        },
                        {
                            name:"Tara Duncan",
                            star:5,
                            remark:"The Easy Lean is very good! They help me with my appetite. I have lost 10 pounds. I would recommend Easy Lean to anyone. They do not make you jittery because there are no additives. Do not exceed the recommended dosage and eat sensibly. I have been taking them for three months and plan to continue."
                        },
                        {
                            name:"Colleen Spencer",
                            star:5,
                            remark:"Easy Lean has been a huge help in my weight loss journey. It curbs my appetite and has helped me lose a few pounds already. I look forward to what it will continue to do for me."
                        },
                        {
                            name:"Elizabeth Hill",
                            star:5,
                            remark:"I don't feel much of a difference but I am definitely SEEING a difference! I'm down 6 pounds in the past few days I've been using it. I thought my scale was lying hah! I feel energized and more eager to go work out vs being tempted to stay on the couch. Add diet and exercise, and Easy Lean is perfect."
                        },
                        {
                            name:"Amanda Despain",
                            star:5,
                            remark:"I really like Easy Lean so far. It suppresses my appetite and helps me not eat as much as I normally would. Combined with exercise and eating less, I have lost 5 lbs in two weeks!"
                        },
                        {
                            name:"Lucille Griffin",
                            star:5,
                            remark:"My experience has been the best I've had, mainly because I have lost about 30 pounds since I ordered my first one on July 3. I really love Easy Lean and I'll buy it again and again until I reach my goal."
                        },
                        {
                            name:"Janet Hicks",
                            star:5,
                            remark:"I purchased Easy Lean to help me with weight loss. I've tried many products and this is working great. I don't feel hungry and have lost 4 pounds over the past 2 weeks. "
                        },
                        {
                            name:"Donna",
                            star:5,
                            remark:"Very easy to take and super effective! Lost 4 lbs already and give me good energy. I would highly recommend and would purchase Easy Lean again!"
                        },
                        {
                            name:"Jessica Borges",
                            star:5,
                            remark:"Easy Lean has helped me lose more weight than I wanted! I feel amazing and lost so much fat around my legs, butt and belly. I can get in more shape.  "
                        },
                        {
                            name:"Whitney",
                            star:5,
                            remark:"I've been using Easy Lean for about a week and a half, and have already lost around 3.2 pounds, and my stomach and love handles are noticeably smaller. There was a small burst of energy at first, but now I'm pretty much back to normal in terms of energy."
                        },
                        {
                            name:"Melissa Fernandez",
                            star:5,
                            remark:"Easy Lean helped me lose i think about 17 pounds in one month, but you cant just take it and drop weight you have to actually change your diet and supersize or at least do one of those, i use it along with my workouts and meal changes and it works!"
                        },
                        {
                            name:"Jeremy McDaniel",
                            star:5,
                            remark:"Thankfully have lost the 4 pounds i had gained. Easy Lean decreased my appetite and gave me an energy boost. I had a great experience with this product !!"
                        },
                        {
                            name:"Monica",
                            star:5,
                            remark:"I love that Easy Lean give me lots of energy without any jitters, headaches or nausea. I've lost a few pounds, but I've also been eating well and exercising. "
                        },
                        {
                            name:"Tyler Luke",
                            star:5,
                            remark:"This is one of the best products on the market to help you with your weight loss goals. It has really helped curb my appetite. I have already lost 3 pounds using Easy Lean. It gives a nice clean energy boost without the dreaded jitters of some products. I highly recommend it!"
                        },
                        {
                            name:"Sarah G",
                            star:5,
                            remark:"Still the most trusted weight loss supplement. I have used Easy Lean for years. Good energy, appetite control, and no jitters. Nothing like it on the market and nothing will ever be as good."
                        },
                        {
                            name:"Denise",
                            star:5,
                            remark:"Pretty good way to lose extra weight along with exercise! Easy Lean seem to suppress my appetite pretty well as well as giving me a jolt of energy without the jitters. I would recommend this to anyone who wants to lose some more pounds!"
                        },
                        {
                            name:"Lisa",
                            star:5,
                            remark:"I started taking this about 2 weeks ago . Taking half the recommended dose lost 5lbs so far . Really helps curb appetite. With good energy burst . I work out and watch what I eat and Easy Lean is helping me with my weight loss goals."
                        },
                        {
                            name:"Lenae",
                            star:5,
                            remark:"I’ve been stuck at that stage where I only have a little belly fat left for about a month and Easy Lean definitely helped me get over that hump. I’ve dropped two lbs a week since I started using this, up from about 1/2 lb a week the month prior to using. I would recommend to anyone."
                        },

                    ],
                    hot_word:navigationList,

                    hotpro:{
                        pageUrl:urlPageBase+"products/easy-lean",
                        imgUrl:urlImgBase+"hot_img/easy_lean.png",
                        title:"Easy LEAN"
                    },

                    basepro:[
                        {
                            title:"7 Effective Weight Loss Techniques",
                            imgUrl:urlImgBase+"best_foods_for_weight_loss/blog.png",
                            pageUrl:urlPageBase+"articles/best-foods-for-weight-loss",
                        },
                        {
                            title:"How To Lose Belly Fat",
                            imgUrl:urlImgBase+"how_to_lose_belly_fat/blog.jpg",
                            pageUrl:urlPageBase+"articles/how-to-lose-belly-fat",
                        },
                        {
                            title:"Easy Lean-Benefits and Results- Ingredients- Warnings- Review",
                            imgUrl:urlImgBase+"get_in_shape_for_women/blog.jpg",
                            pageUrl:urlPageBase+"articles/get-in-shape-for-women",
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

