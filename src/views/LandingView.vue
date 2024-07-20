<template>
    <div id="landing-main">
        <img src="@/assets/landing/pattern_1.png" id="pattern_1" alt="Vector Pattern">
        <img src="@/assets/landing/pattern_2.png" id="pattern_2" alt="Vector Pattern">

        <HeaderBar />

        <div id="sectorsMain" >
            <WelcomeSection />
    
            <AboutSection />
            
            <UserInformationSection @choosUserType="choosUserType" />
            
            <PricesSection :userType="userType" />

            <FeedbackSection />
        </div>
    </div>
    <FooterSection />
</template>

<script>
import HeaderBar from '@/components/landing_page/HeaderBar.vue';
import WelcomeSection from '@/components/landing_page/WelcomeSection.vue';
import AboutSection from '@/components/landing_page/AboutWebsiteSection.vue';
import UserInformationSection from '@/components/landing_page/UserInformationSection.vue';
import PricesSection from '@/components/landing_page/PricesSection.vue';
import FeedbackSection from '@/components/landing_page/FeedbackSection.vue';
import FooterSection from '@/components/landing_page/FooterSection.vue';
export default{
    components:{
        HeaderBar,
        WelcomeSection,
        AboutSection,
        UserInformationSection,
        PricesSection,
        FeedbackSection,
        FooterSection
    },
    data(){
        return{
            elementsColor: this.$store.state.elementsColor,
            userType: 'employer'
        }
    },
    mounted(){
        // Set page title
        document.title = 'MyMaster | Welcome';
    },
    methods:{
        choosUserType(type){
            this.userType = type;
        }
    }
}
</script>

<style scoped>
#sectorsMain{
    display: grid;
    gap: 130px;
}
#landing-main{
    padding: 0 100px;
}
#pattern_1, #pattern_2{
    position: absolute;
}
#pattern_1{
    /* Vector 1 */
    right: 0;
    top: 390px;
}
#pattern_2{
    /* Vector 2 */
    left: 0;
    top: 490px;
}

@media screen and (max-width: 1000px){
    #landing-main{
        padding: 0 20px;
    }
    #pattern_2{
        top: 370px;
    }
}
</style>