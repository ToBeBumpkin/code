export const mixin = {
    methods: {
        showName() {
            console.log(this.name);
        },
    },
    mounted() {
        console.log('mixin 中的 mounted')
    },
}
export const mixin2 = {
    data() {
        return {
            x:1,
            y:2,
            z:3
        }
    },
}
export const mixin3 = {
    data() {
        return {
            xyz:123,
        }
    },
}