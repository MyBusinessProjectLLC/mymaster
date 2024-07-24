<template>
    <RegisterFirst :color="color" />
</template>

<script>
import RegisterFirst from '@/components/authorization/register/RegisterFirst.vue'
export default{
    components:{
        RegisterFirst
    },
    props:{
        color: String
    },
    data(){
        return{
            rate: 0,
            showPassword: false,
            userData:{
                firstName: '',
                secondName: '',
                lastName: '',
                email: ''
            }
        }
    }
}
</script>
