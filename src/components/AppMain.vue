<script>
import AboutMe from './MainLayout/AboutMe.vue';
import AudioBook from './MainLayout/AudioBook.vue';
export default {
    name:'AppMain',
    components:{
        AboutMe,
        AudioBook
    }
}
</script>
<template>
    <main>
        <AboutMe/>
        <AudioBook/>
    </main>
</template>



<style lang="scss" scoped>

</style>