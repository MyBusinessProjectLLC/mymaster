<template>
    <section>
        <img 
            src="@/assets/authorization_page_picture.jpg" 
            id="authorizationMain" 
            alt="Authorization"
            @load="onImageLoad"
            :style="{ opacity: imageLoaded ? 1 : 0 }"
        >

        <LoginPopup v-if="imageLoaded" :color="color" />
    </section>
</template>

<script>
import LoginPopup from '@/components/authorization/LoginPopup.vue';
export default {
    components:{
        LoginPopup
    },
    data() {
        return {
            imageLoaded: false,
            type: null,
            color: this.$store.state.colors[sessionStorage.getItem('userType')] || this.$store.state.colors.standard
        };
    },
    watch: {
        '$route.params.type'(newType) {
            this.type = newType;
            document.title = `MyMaster | ${newType}`;
        }
    },
    created() {
        document.title = `MyMaster | ${this.$route.params.type}`;
    },
    methods: {
        onImageLoad() {
            setTimeout(() => {
                this.imageLoaded = true;

                this.type = this.$route.params.type;

            }, 500);
        }
    }
}
</script>


<style scoped>
body {
    overflow: hidden;
}
section {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    justify-content: center;
}
#authorizationMain {
    height: 130%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transition: opacity 500ms;
    transform: translate(-50%, -50%);
}
</style>