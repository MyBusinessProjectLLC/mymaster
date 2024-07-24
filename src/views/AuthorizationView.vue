<template>
    <section>
        <div id="imageBox" ref="imageBox">
            <img src="@/assets/authorization/employer.svg" class="userTypeImage" alt="Standard picture for all users">
            <img src="@/assets/authorization/standard.svg" class="userTypeImage" alt="Standard picture for all users">
            <img src="@/assets/authorization/worker.svg" class="userTypeImage" alt="Standard picture for all users">
        </div>
        <LoginPopup v-if="$route.params.type === 'login'" :color="color" />
        <RegisterPopup v-if="$route.params.type === 'register'" :color="color" />
    </section>
</template>

<script>
import LoginPopup from '@/components/authorization/LoginPopup.vue';
import RegisterPopup from '@/components/authorization/RegisterMain.vue';

export default {
    components:{
        LoginPopup,
        RegisterPopup
    },
    data() {
        return {
            color: this.$store.state.colors[sessionStorage.getItem('userType')] || this.$store.state.colors.standard
        };
    },
}
</script>

<style scoped>
:deep(.errorBox){
    border-radius: 25px;
    background: #ff00007a;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    overflow: hidden;
    transition: 300ms;
}

:deep(.smoothBottom){
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}

:deep(a){
    color: blue;
}

:deep(.userTypeImage) {
  width: 590px;
}

:deep(.rememberBox p) {
  font-size: 16px;
}

:deep(.checkbox) {
  width: 18px;
  height: 18px;
}

:deep(.rememberBox) {
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
}

:deep(.eye) {
  width: 25px;
  height: 25px;
  position: absolute;
  right: 15px;
  top: 14px;
  cursor: pointer;
  opacity: 0.5;
}

:deep(button) {
  width: 100%;
  height: 46px;
  border-radius: 30px;
  font-size: 18px;
  color: #f5f5f5;
}

:deep(.inputBox) {
  position: relative;
}

:deep(.inputBox input) {
  font-size: 16px;
  background-color: #ffffff30;
  border-radius: 30px;
  height: 10px;
  padding: 23px;
  width: calc(100% - 46px);
  transition: 300ms;
}

:deep(h2) {
  text-align: center;
}

:deep(#main) {
  position: relative;
}

:deep(#box) {
  width: 400px;
  padding: 30px;
  display: grid;
  gap: 20px;
  position: relative;
  z-index: 3;
}

@media screen and (max-width: 470px) {
  :deep(#box) {
    width: calc(100vw - 60px);
  }
}
</style>


<style scoped>
#imageBox{
    min-width: 500px;
    max-width: 500px;
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
}
.userTypeImage{
    min-width: 100%;
    min-height: 100%;
}
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
@media screen and (max-width: 1120px) {
    #imageBox{
        min-width: 400px;
        max-width: 400px;
    }
}
@media screen and (max-width: 900px) {
    #imageBox{
        display: none;
    }
}
</style>