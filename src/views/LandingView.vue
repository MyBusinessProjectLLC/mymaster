<template>
    <div id="landing-main">
        <svg id="pattern_2" width="55" height="610" viewBox="0 0 55 610" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-391.591 0.394742C-445.452 -1.33151 -477.316 35.6128 -501.572 83.7334C-545.833 171.537 -560.967 276.494 -546.418 365.852C-531.868 455.21 -479.047 517.336 -426.364 554.563C-346.508 610.991 -325.59 612.6 -247.5 607.018C-190.503 602.944 -159.808 595.565 -93.8058 561.844C-27.8039 528.123 76.4386 465.113 50.4221 374.546C29.8276 302.855 -112.879 282.313 -112.879 282.313C-112.879 282.313 -179.389 274.713 -219.359 243.749C-260.729 211.701 -286.937 128.037 -286.937 128.037C-286.937 128.037 -327.164 2.45965 -391.591 0.394742Z" 
            :fill="color"/>
        </svg>

        <svg id="pattern_1" width="47" height="531" viewBox="0 0 47 531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7283 186.353C40.6069 228.272 19.7551 282.23 45.6957 347.368C53.0404 365.811 56.5381 376.626 66.8342 393.597C116.83 476.003 189.595 521.937 285.656 529.148C352.27 534.148 431.191 533.543 460.244 467.249C489.603 400.257 473.972 315.214 423.839 241.2C368.644 159.713 320.481 102.416 231.244 45.3169C183.487 14.7592 88.0571 -27.7495 33.1692 24.9451C-8.61798 65.0625 -7.15036 144.434 16.7283 186.353Z" 
            :fill="color"/>
        </svg>


        <HeaderBar :color="color" />

        <div id="sectorsMain" >
            <WelcomeSection />
    
            <AboutSection :color="color" />
            
            <UserInformationSection :color="color" @choosUserType="choosUserType" />
            
            <PricesSection :color="color" :userType="userType" />

            <FeedbackSection :color="color" />
        </div>
    </div>
    <FooterSection :color="color" />
</template>

<script>
import HeaderBar from '@/components/layout/HeaderBar.vue';
import WelcomeSection from '@/components/landing_page/WelcomeSection.vue';
import AboutSection from '@/components/landing_page/AboutWebsiteSection.vue';
import UserInformationSection from '@/components/landing_page/UserInformationSection.vue';
import PricesSection from '@/components/landing_page/PricesSection.vue';
import FeedbackSection from '@/components/landing_page/FeedbackSection.vue';
import FooterSection from '@/components/layout/FooterSection.vue';
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
            color: this.$store.state.colors.standard,
            userType: 'employer'
        }
    },
    mounted(){
        // Set page title
        document.title = 'MyMaster | Welcome';

        if(sessionStorage.getItem('userType')){
            this.color = this.$store.state.colors[sessionStorage.getItem('userType')]
        }
    },
    methods:{
        choosUserType(type){
            this.userType = type;
            this.color = this.$store.state.colors[type]
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
    transition: 300ms;
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