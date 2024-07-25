<template>
    <div id="main">
        <form @submit.prevent="next" id="box">
            <h2>Registration</h2>
            <p>The verification code has been sent to the specified email: {{ email }}</p>
            <p @click="$emit('goBack', 1)" >Wrong email? <router-link>Change it</router-link></p>
            <p>Didn't receive the code? <router-link>Resend</router-link></p>
            <div class="inputBox">
                <input :style="{backgroundColor: color + '20'}" type="text"
                :class="{'smoothBottom': errors.verification}" 
                style="text-align: center;"
                v-model="code" name="login" placeholder="Verification code" >
                <div class="errorBox" :style="{maxHeight: errors.verification ? '100px' : '0px',
                    padding: errors.verification ? '5px 20px' : '0px 20px',
                    borderTopLeftRadius: errors.verification ? '0px' : '25px',
                    borderTopRightRadius: errors.verification ? '0px' : '25px',
                }" >
                    <p>Incorrect verification code.</p>
                </div>
            </div>

            <button :style="{backgroundColor: color}" type="submit" >Next</button>
            <p>Have an account? <router-link to="/authorization/login">Log in.</router-link></p>
        </form>
    </div>
</template>

<script>
export default{
    props:{
        color: String,
        email: String
    },
    data(){
        return{ 
            code: '',
            errors: {
                verification: false,
            }
        }
    },
    methods:{
        next(){
            this.checkVerificationCode();

            // Check errors
            if(!this.errors.verification 
            ){
                this.$emit('next', 2);
                this.$emit('setData', {
                    verificationCode: this.code
                })
            }
        },
        checkVerificationCode(){
            this.errors.verification = this.code !== '11--11'
        },
    }
}
</script>