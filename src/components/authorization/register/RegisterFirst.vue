<template>
    <div id="main">
        <form @submit.prevent="next" id="box">

            <div class="inputBox">
                <input :style="{backgroundColor: color + '20'}" type="text"
                :class="{'smoothBottom': errors.firstName}" 
                v-model="firstName" name="login" placeholder="First name" >
                <div class="errorBox" :style="{maxHeight: errors.firstName ? '100px' : '0px',
                    padding: errors.firstName ? '5px 20px' : '0px 20px',
                    borderTopLeftRadius: errors.firstName ? '0px' : '25px',
                    borderTopRightRadius: errors.firstName ? '0px' : '25px',
                }" >
                    <p>The first name must be no less than 1 and no more than 30 characters long.</p>
                </div>
            </div>

            <div class="inputBox">
                <input :style="{backgroundColor: color + '20'}" type="text"
                :class="{'smoothBottom': errors.secondName}" 
                v-model="secondName" name="login" placeholder="Second name" >
                <div class="errorBox" :style="{maxHeight: errors.secondName ? '100px' : '0px',
                    padding: errors.secondName ? '5px 20px' : '0px 20px',
                    borderTopLeftRadius: errors.secondName ? '0px' : '25px',
                    borderTopRightRadius: errors.secondName ? '0px' : '25px',
                }" >
                    <p>The second name must be no less than 1 and no more than 30 characters long.</p>
                </div>
            </div>
            
            <!--
            <div class="inputBox">
                <input :style="{backgroundColor: color + '20'}" type="text"
                :class="{'smoothBottom': errors.lastName}" 
                v-model="lastName" name="login" placeholder="Last name" >
                <div class="errorBox" :style="{maxHeight: errors.lastName ? '100px' : '0px',
                    padding: errors.lastName ? '5px 20px' : '0px 20px',
                    borderTopLeftRadius: errors.lastName ? '0px' : '25px',
                    borderTopRightRadius: errors.lastName ? '0px' : '25px',
                }" >
                    <p>The last name must be no less than 1 and no more than 30 characters long.</p>
                </div>
            </div>
            -->

            <div class="inputBox">
                <input :style="{backgroundColor: color + '20'}" type="text"
                :class="{'smoothBottom': errors.email}" 
                v-model="email" name="login" placeholder="E-mail" >
                <div class="errorBox" :style="{maxHeight: errors.email ? '100px' : '0px',
                    padding: errors.email ? '5px 20px' : '0px 20px',
                    borderTopLeftRadius: errors.email ? '0px' : '25px',
                    borderTopRightRadius: errors.email ? '0px' : '25px',
                }" >
                    <p>Invalid E-mail address.</p>
                </div>
            </div>

            <button :style="{backgroundColor: color}" type="submit" >Next</button>
        </form>
    </div>
</template>

<script>
export default{
    props:{
        color: String
    },
    data(){
        return{ 
            firstName: '',
            secondName: '',
            lastName: '',
            email: '',
            errors: {
                firstName: false,
                secondName: false,
                lastName: false,
                email: false
            }
        }
    },
    methods:{
        next(){
            this.checkInputs();

            // Check errors
            if(!this.errors.firstName 
                && !this.errors.secondName
                && !this.errors.email
            ){
                this.$emit('next', 2);
                this.$emit('setData', {
                    firstName: this.firstName,
                    secondName: this.secondName,
                    lastName: this.lastName,
                    emial: this.email
                })
            }
        },
        checkInputs(){
            // Check inputs
            this.errors.firstName = this.firstName.length < 1 || this.firstName.length > 30;
            this.errors.secondName = this.secondName.length < 1 || this.secondName.length > 30;
            //this.errors.lastName = this.lastName.length < 1 || this.lastName.length > 30;
            this.errors.email = this.validateEmail();
        },
        validateEmail() {
            // Regular expression for basic email validation
            const emailPattern =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Check if the email matches the pattern
            const isEmailValid = !emailPattern.test(this.email);
            // Set the error message based on the validation result
            return isEmailValid;
        },
    }
}
</script>