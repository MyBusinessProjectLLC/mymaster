<template>
    <div id="main">
        <form @submit.prevent="next" id="box">
            <p>The verification code has been sent to the specified email: {{ email }}</p>
            <p @click="$emit('goBack', 1)" >Wrong email? 
                <a style="cursor: pointer;" >Change it</a>
            </p>
            <p>Didn't receive the code? <a style="cursor: pointer;">Resend</a></p>
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
                this.$emit('next', 3);
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