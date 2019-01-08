/**
 * Created by Administrator on 2018/5/4 0004.
 */
/**
 * Created by Administrator on 2018/5/4 0004.
 */
(function(){
    ProductDetails=function(){
        this.init = function(){
            vueProductDetails=new Vue({
                delimiters: ['[[', ']]'],
                el: '#vueContainer',
                data: {
                    blogTitle:"Top Gun-price, Ingredients, Benefits and Side Effects",
                    usercomments:[
                        {
                            name:"lori McKenzie",
                            star:5,
                            remark:"smells amazing after opening the bag..chocolate! I was curious what an Easy Lean would be like, a little hesitant because I’m used to hot chocolate, but this powder is awesome! It settled my stomach and I wasn’t hungry for the rest of the afternoon."
                        },
                        {
                            name:"C. Chung",
                            star:5,
                            remark:"Great taste. Definitely relieved bloating after about 3 days. I've lost 5 lbs in two weeks so I'm going to have to give it a 5-star review."
                        },
                        {
                            name:"Che Vy",
                            star:5,
                            remark:"This is my first review on the website, I don’t write review normally, but I do wanna share my experience with this product. I do feel the difference in my appetite. I lost 4lbs after taking this product for 3 weeks.I’m not sure if it works for everyone but I do recommend to give it a try and I will keep taking it to see if I can lose more weight."
                        },
                        {
                            name:"Jango",
                            star:5,
                            remark:"After being on my diet for 2 months and not seeing much progress. I purchased this product and instantly got the kickstart I needed to burn fat. I am seeing noticeable results without exercise, and I can fit into the old blue jeans I haven't worn in 10 years."
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

                }
            })

            initPage()

            function initPage(){

            }
        }
    }
})();

