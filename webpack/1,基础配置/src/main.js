//webpack 要想打包资源，必须引入资源
import count from "./js/count";
import sum from "./js/sum";

import './css/index.css'
import './less/index.less'

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}