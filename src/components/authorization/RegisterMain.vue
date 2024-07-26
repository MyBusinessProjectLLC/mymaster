<template>
    <div >
        <h2>Registration</h2>
        <div id="registrationMainBox" ref="registerMain" >
            <UserType 
                @changeUserType="changeUserType" 
            />

            <RegisterFirst 
                :color="color" 
                @next="setPage" 
                @setData="setNmaeAndEmail" 
            />

            <EmailVerification 
                :color="color" 
                :email="userData.email" 
                @next="setPage" 
                @goBack="setPage"  
            />

            <PasswordMenu
                :color="color"
            />
        </div>
        <p style="text-align: center;">Have an account? <router-link to="/authorization/login">Log in.</router-link></p>
    </div>
</template>

<script>
import UserType from '@/components/authorization/register/UserType.vue';
import RegisterFirst from '@/components/authorization/register/RegisterFirst.vue';
import EmailVerification from '@/components/authorization/register/EmailVerification.vue';
import PasswordMenu from '@/components/authorization/register/PasswordMenu.vue';

export default{
    components:{
        UserType,
        RegisterFirst,
        EmailVerification,
        PasswordMenu
    },
    props:{
        color: String
    },
    data(){
        return{
            page: 0,
            showPassword: false,
            userType: '',
            userData:{
                firstName: '',
                secondName: '',
                lastName: '',
                email: ''
            }
        }
    },
    mounted(){
        this.changePage();
    },
    methods:{
        changeUserType(type){
            this.$emit('changeUserType', type);
            this.setPage(1);
            this.userType = type;
        },
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
