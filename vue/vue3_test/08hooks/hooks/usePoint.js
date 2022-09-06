import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function showPoint(event) {
        console.log(event.pageX, event.pageY);
        point.x = event.pageX;
        point.y = event.pageY;
    }
    onMounted(() => {
        window.addEventListener("click", showPoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", showPoint);
    });
    return point
}