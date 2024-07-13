<template>
    <router-view v-if="userData" />
    <LandingPage />
</template>

<script>
// Layouts

import LandingPage from '@/views/LandingView.vue'
export default{
    components:{
        LandingPage,
    },
    data(){
        return{
            userData: null
        }
    },
    mounted(){
        this.get_user();
    },
    watch:{
        'this.$route.path'(newPath, oldPath) {
            // Checking URL loading
            if (newPath !== oldPath) {
                this.get_user();
            }
        }
    },
    methods:{
        get_user(){
            // Get user information if it's authorizated
            this.$store.dispatch('fetchUserData');
            this.userData = this.$store.state.userData;
        }
    }
}
</script>

<style>
/* Set standard backgorund color */
body{
    background-color: #F5F5F5;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

/* Apply Poppins font to all text elements */
body, p, h1, h2, h3, h4, h5, h6, ul, li, ol, a, span {
  font-family: 'Poppins', sans-serif;
  color: #222A4E;
  margin: 0;
}

/* Apply Poppins font and standard styles to buttons */
button, input[type="button"], input[type="submit"], input[type="reset"] {
    font-family: 'Poppins', sans-serif;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: #222A4E;
    width: max-content;
    padding: 0;
}

/* Apply Poppins font and standard styles to input fields */
input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="search"], textarea {
    font-family: 'Poppins', sans-serif;
    border: 0;
    background-color: transparent;
    color: #222A4E;
}
input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus, input[type="number"]:focus, input[type="search"]:focus, textarea:focus{
    outline: none;
    color: #222A4E;
}
</style>
