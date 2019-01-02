var vm = new Vue({
    delimiters: ["[[", "]]"],
    el:"#value_container",
    mixins:[levelMixin],
    data: {
        start_time:"",
        end_time:"",

        menu_list:[],
        menu:{},
        modify_user:{},
    },
    mounted:function(){
        laydate.render({
            elem: '#start_date',
            done:function(value){
                vm.start_time = value;
            }
        });
        laydate.render({
            elem: '#end_date',
            done:function(value){
                vm.end_time = value;
            }
        });

        this.getMenuByLang()
    },
    watch:{

    },
    methods:{
        getMenuByLang:function () {
            var url = "/bs/get_menu_by_lang"

            $.ajax({
                url:url,
                method:"post",
                data:JSON.stringify({})
            }).done(function(retVal){
                if(retVal && retVal.code == 0){
                   for(var i=0;i<retVal.data.length;i++){
                       retVal.data[i].No =  (i+1)
                   }
                   vm.menu_list = retVal.data
                }
            })
        },

        //创建目录
        openCreateMenuView:function(){
            vm.menu = {
                title:"",
                keywords:"",
                common:"",
                priority:0
            }

            $("#create_menu").modal()
        },
        createMenu:function(){
            if(!vm.checkUserInfo(vm.menu)){
                return
            }

            var url = "/bs/create_menu"

            $.ajax({
                url:url,
                method:"post",
                data:vm.craete_user
            }).done(function(retVal){
                if(retVal && retVal.code == 0){
                    lay_prompt("目录创建成功！")
                    $("#create_user").modal("hide")
                }else{
                    lay_prompt("目录创建失败！")
                }
            })

        },


        checkUserInfo:function(menu){
            if(!menu.title.trim()){
                lay_prompt("请输入目录名！")
                return false
            }

            if(!Unit.isLetter(menu.title)){
                lay_prompt("目录名只能输入英文字母与数字！")
                return false
            }

            if(!Unit.isPositiveInteger(menu.priority)){
                lay_prompt("优先级只能为数字")
                return false
            }

            return true
        },
    },
    filters:{
        parseTime:function(data){
            return data.replace("T"," ").replace("Z","")
        }
    }
})
