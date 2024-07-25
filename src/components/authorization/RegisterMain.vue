<template>
    <div id="registrationMainBox" ref="registerMain" >
        <RegisterFirst :color="color" @next="setPage" @setData="setNmaeAndEmail" />
        <EmailVerification :color="color" :email="userData.email" @next="setPage" @back="setPage"  />
    </div>
</template>

<script>
import RegisterFirst from '@/components/authorization/register/RegisterFirst.vue'
import EmailVerification from '@/components/authorization/register/EmailVerification.vue';
export default{
    components:{
        RegisterFirst,
        EmailVerification
    },
    props:{
        color: String
    },
    data(){
        return{
            page: 0,
            showPassword: false,
            userData:{
                firstName: '',
                secondName: '',
                lastName: '',
                email: ''
            }
        }
    },
    methods:{
        changePage(){
            this.$refs.registerMain.scrollLeft = this.$refs.registerMain.clientWidth * this.page;
        },
        setPage(page){
            this.page = page;
            this.changePage();
        },
        setNmaeAndEmail(data){
            this.userData = data;
        }
    }
}
</script>

<style scoped>
#registrationMainBox{
    max-width: 460px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    display: flex;
}
@media screen and (max-width: 470px) {
    #registrationMainBox{
        max-width: 100vw;
    }
}
</style>
