<template>
    <div>
        <h1>School</h1>
        <ul>
            <li>name:{{name}}</li>
            <li>address:{{address}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"School",
    data(){
        return {
            name:"交通大学",
            address:"上海市闵行区"
        }
    }
}
</script>

<style>

</style>