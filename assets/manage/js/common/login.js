var vm = new Vue({
    delimiters: ["[[", "]]"],
    el: "#value_container",
    data: {
        username: "",
        passwd: ""
    },
    watch: {},
    methods: {
        loginUser: function () {
            if (vm.username.length == 0) {
                return
            }

            if (!Unit.isPassword(vm.passwd)) {
                lay_prompt("密码必须是6-18位的字母、数字、下划线！")
                return
            }


            var url = "/user_login"

            $.ajax({
                url: url,
                method: "post",
                data: {
                    username: vm.username,
                    passwd: vm.passwd
                }
            }).done(function (retVal) {
                if(retVal && retVal.code == 0){
                    retVal.data.oldpwd = vm.passwd
                    window.sessionStorage.user_info = JSON.stringify(retVal.data)

                    location.href = "/manager/welcome"
                }else{
                    lay_prompt("用户名或密码输入错误！")
                }
            })
        }
    }
})
