
function Unit(){

}
Unit.swapItem = function(arr, prev, next){
    arr[prev] = arr.splice(next, 1, arr[prev])[0]
    return arr;
},
Unit.prevSwap = function(arr,index){
    if(index == 0){
        return
    }
    Unit.swapItem(arr,index,index - 1)
},
Unit.nextSwap = function(arr,index){
    if(index == arr.length -1){
        return
    }
    Unit.swapItem(arr,index,index + 1)
},
Unit.isPositiveInteger = function(data){
    return /^[1-9]\d*$/.test(data.toString().trim());
}
Unit.isProductNumber = function(data){
    return /^ecsp100(2)\d{3}$/.test(data.toString().trim())
}
Unit.isPositiveDouble=function(data){
    return /(^([1-9]\d*\.\d*)|(0\.\d*)$)|(^[1-9]\d*$)/.test(data.toString().trim());
}
Unit.isPassword=function(data){
    var patrn=/^(\w){6,18}$/
    return patrn.test(data.toString().trim())
}
Unit.isMobil= function(data){
    var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    return patrn.test(data.toString().trim())
}
Unit.isEmail = function(data){
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(data.toString().trim())
}
Unit.isLetter = function (data) {
    return /^[a-zA-Z0-9]+$/.test(data.toString().trim())
}



//
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)return r[2];
  return null;
}

var ajax_loading;
//ajax全局动画
$.ajaxSetup({
    beforeSend:function(){
        ajax_loading = layer.load("1")
    },
    complete:function(){
        layer.close(ajax_loading)
    }
})

//设置cookie
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

//删除cookie
function delCookie(cname) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(cname); 
    if(cval!= "") 
        document.cookie= cname + "="+cval+";expires="+exp.toGMTString(); 
}

//标准json是否有key
function HasJsonKey(obj, key) {
    if(typeof(obj) == "undefined") {
        return false;
    }

    if(typeof(key) == "undefined") {
        return false;
    }

    if(obj.hasOwnProperty(key)) {
        return true;
    }

    return false;
}

//获取日期格式  天   day表示今天的 间隔 0位 今天 -1 昨天
function MC_GetDay(day)
{
    var date=new Date();
    date.setDate(date.getDate() + day);
    var year=date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return year+"-"+month+"-"+strDate;
}

/**
 * 根据两个日期，判断相差天数
 * @param sDate1 开始日期 如：2016-11-01
 * @param sDate2 结束日期 如：2016-11-02
 * @returns {number} 返回相差天数
 */
function daysBetween(sDate1,sDate2){
//Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
    var time1 = Date.parse(new Date(sDate1));
    var time2 = Date.parse(new Date(sDate2));
    var nDays = parseInt((time2 - time1)/1000/3600/24);
    return nDays;
};

//翻页数量
function initPageList(currentPage, pageCount, Dom, vm){
    var listCount = pageCount>5 ? 5:pageCount;
    Dom.html("");
    for(var i=0;i<listCount;i++){
        $("<li><a>(i+1)</a></li>").click(function(ev){
            var page = $(ev.target).text()
            vm.goToPage(+page)
        }).appendTo(Dom)
    }

    changePage(currentPage,pageCount,Dom)
}

function changePage(skipPage,pageCount,Dom){
    var clickPage=skipPage;

    Dom.find("li").each(function(index,val){
        if(clickPage<3){
            $(val).find("a").text(index+1);
            return;
        }
        if(clickPage>=3 && clickPage<pageCount-1){
            $(val).find("a").text(clickPage-2+index)
        }
        if(clickPage>=pageCount-1){
            $(val).find("a").text(pageCount-(Dom.find("li").length-1)+index)
        }
    })
    Dom.find("li").removeClass("active").filter(":contains("+clickPage+")").addClass("active")
}

//提示框
function lay_prompt(prompt,callback,time) {
    layer.msg(prompt, {
        time: time || 1000,
        zIndex:10000
    },callback);
}

//判断用户权限
var levelMixin = {
    data:function(){
        return {
            user_info:{
                level:0
            }
        }
    },
    created:function(){
        

    }
}
function exit(){
    var url = "/user_logout"

    $.ajax({
        url:url,
        method:"post",
    }).done(function(){
        location.href ="/manager/login"
    })

}

//导航栏组件
Vue.component('view-navigation', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: "/manager/include/nav",
    }).then(function (res) {
        resolve({
            template: res,
            delimiters: ['[[', ']]'],
            mixins:[levelMixin],
            props: {
                current_page: {
                    type: String
                },
            },
            data: function () {
                return {
                    level:""
                }
            },
            methods: {

            },
            created: function () {

            }
        })
    })
});

//页面顶部组件
Vue.component('view-header', function (resolve, reject) {
    $.ajax({
        type: "get",
        async: false,
        url: "/manager/include/view-header",
    }).then(function (res) {
        resolve({
            template: res,
            mixins:[levelMixin],
            delimiters: ['[[', ']]'],
            props: {

            },
            data: function () {
                return {
                    isModify:true,
                    passwd:"",
                    newpwd:"",
                    current_user:{}
                }
            },
            methods: {
                exit:function(){
                    sessionStorage.clear()

                    exit()
                },
                openUserView:function(){
                    this.current_user = JSON.parse(JSON.stringify(this.user_info))

                    $("#user_info").modal()
                },
                modifyCurrentUserInfo:function(){
                    if(this.passwd.trim() != this.current_user.oldpwd.trim()){
                        lay_prompt("原密码不正确")
                        return
                    }

                    if(!Unit.isPassword(this.newpwd.trim())){
                        lay_prompt("密码必须是6-18位的字母、数字、下划线！")
                        return false
                    }

                    this.current_user.passwd = this.newpwd

                    var url = "/user_change_info"

                    var param = this.current_user

                    $.ajax({
                        url:url,
                        method:"post",
                        data:param
                    }).done(function(retVal){
                        if(retVal && retVal.code == 0){
                            lay_prompt("修改成功！")
                            sessionStorage.clear()
                            exit()
                        }else{
                            lay_prompt("修改失败,用户名不能重复！")
                        }
                    })
                }
            },
            mounted: function () {

            }
        })
    })
});


