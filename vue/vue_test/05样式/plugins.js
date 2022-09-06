export default {
    install(Vue,a,b,c,d,e) {
        console.log(a,b,c,d,e);
        // console.log("插件中的", Vue);
        Vue.filter('timeFormater', function (value, str = 'YYYY年MM月DD日 HH:mm:ss') {
            return dayjs(value).format(str)
        })
        Vue.directive('big', function (element, binding) {
            // console.log(element, binding);
            element.innerText = binding.value * 10
        })
        Vue.mixin({
            mounted() {
                console.log('插件中的 mixin 中的 mounted')
            },
        })
        Vue.prototype.demo = () => { console.log('插件中定义的demo方法'); }
    }
}