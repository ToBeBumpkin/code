<template>
    <div>
        <h1>Student</h1>
        <ul>
            <li>name:{{name}}</li>
            <li>age:{{age}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Student",
    data(){
        return {
            name:"东方不败",
            age:120
        }
    }
}
</script>

<style>

</style>