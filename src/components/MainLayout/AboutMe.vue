<script>
export default {
    name:'AboutMe'
}
</script>

<template>
    <div class="ft-container d-flex justify-content-center align-items-center flex-column">
        <h2>More About Damon Vaughn</h2>
        <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et incidunt ea magnam necessitatibus voluptatibus. Tempore possimus veniam impedit obcaecati ducimus.</p>
        <div class="btn-green">
            <span>Meet The Author</span>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;

    .ft-container{
        height: 545px;
        text-align: center;
        h2{
            font-family: $cursive;
            font-size: 3rem;
            color:$saffron;
        }
        p{
            font-size: 2rem;
        }
    }
</style>