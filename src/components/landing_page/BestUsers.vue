<template>
    <div id="main">
        <h2>{{ type === 'worker' ? 'Best employers' : 'Best workers' }}</h2>

        <!--
        <button id="arrowLeft"
            v-if="leftArrowShow" class="arrows"
            @click="cartPositionMinus"
            :class="{'hiddenArrow': leftArrowHidden}">
            <img src="@/assets/landing/arrow_right.png" alt="Arrow left">
        </button>
        <button id="arrowRight" class="arrows"
            v-if="rightArrowShow"
            @click="cartPositionPlus"
            :class="{'hiddenArrow': rightArrowHidden}">
            <img src="@/assets/landing/arrow_right.png" alt="Arrow right">
        </button>
        -->

        <div id="userMainBox" >
            <div class="userCard" v-for="(user, index) in users" :key="index" >
                <div class="userAvatarBox">
                    <img src="@/assets/landing/for_delete/RECTAGLE_1.png" class="userAvatar" alt="User avatar">
                </div>
                <div class="userMainInfoBox">
                    <h4>{{ user.name }}</h4>
                    <h5>{{ user.profession }}</h5>
                </div>
                <div class="userDetailsBox">
                    <p>{{ user.description }}</p>
                </div>
                <div class="userRatingBox">
                    <div>
                        <img src="@/assets/landing/star.png" alt="Rating icon">
                        <p>{{ user.rating }}</p>
                    </div>
                    <div>
                        <img src="@/assets/landing/dollar.png" alt="Rating icon">
                        <p>{{ user.salary }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        type: String,
        profession_id: Number
    },
    data(){
        return{
            leftArrowShow: false,
            rightArrowShow: true,
            users:[
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_1.png',
                    name: 'Sarah K.',
                    profession: 'UX Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_2.png',
                    name: 'Michael L.',
                    profession: 'Lead Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_3.png',
                    name: 'Lauren M.',
                    profession: 'Product Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_1.png',
                    name: 'Sarah K.',
                    profession: 'UX Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_2.png',
                    name: 'Michael L.',
                    profession: 'Lead Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_2.png',
                    name: 'Lauren M.',
                    profession: 'Product Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_1.png',
                    name: 'Sarah K.',
                    profession: 'UX Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_2.png',
                    name: 'Michael L.',
                    profession: 'Lead Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
                {
                    avatar: '@/assets/landing/for_delete/RECTAGLE_2.png',
                    name: 'Lauren M.',
                    profession: 'Product Designer',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                    rating: 4.7,
                    salary: '5k-6.5k/month'
                },
            ]
        }
    },
    methods:{
        cartPositionPlus(){
            return
        },
        cartPositionMinus(){
            return
        }
    }
}
</script>

<style scoped>
.userRatingBox div img{
    width: 14px;
    height: 14px;
}
.userRatingBox div p{
    font-weight: 400;
    font-size: 15px;
}
.userRatingBox div{
    display: flex;
    gap: 6px;
    align-items: center;
}
.userRatingBox{
    padding: 0 15px 15px 15px;
    display: flex;
    gap: 11px;
}
.userDetailsBox p{
    height: 77px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.02em;
    overflow-x: hidden;
}
.userDetailsBox{
    padding: 15px;
}
.userMainInfoBox h4{
    font-weight: 600;
    font-size: 21px;
    text-align: center;
    margin-top: auto;
}
.userMainInfoBox h5{
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    margin-bottom: auto;
}
.userMainInfoBox{
    height: 100px;
    display: grid;
    justify-content: center;
    border-bottom: 1px solid #EFEFEF;
}
.userAvatarBox{
    overflow: hidden;
    position: relative;
    width: 352px;
    height: 251px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.userAvatar{
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.userCard:hover{
    box-shadow: 34.85px 29.63px 48.34px rgba(70, 102, 211, 0.15);
}
.userCard{
    border-radius: 20px;
    background-color: white;
    box-shadow: 34.85px 29.63px 48.34px rgba(70, 102, 211, 0.05);
    cursor: pointer;
    transition: 300ms;
}
#arrowRight{
    transform: translate(50%, -50%);
    right: 0;
}
#arrowLeft img{
    rotate: 180deg;
}
#arrowLeft{
    transform: translate(-50%, -50%);
}
.arrows:hover img{
    filter: invert(1);
}
.arrows:hover{
    background-color: #293E89;
}
.arrows img{
    width: 8px;
}
@keyframes showButton {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.arrows{
    animation: showButton 500ms;
    position: absolute;
    width: 60px;
    height: 60px;
    background: #E7EAF3;
    box-shadow: 0px 1px 30px rgba(70, 102, 211, 0.25);
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    top: 45%;
    opacity: 1;
}
h2{
    margin-bottom: 41px;
    font-weight: 500;
    font-size: 25px;
}
#userMainBox{
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    gap: 28px;
    display: flex;
    overflow-x: scroll;
}
#userMainBox::-webkit-scrollbar {
    width: 15px;
}

#userMainBox::-webkit-scrollbar-thumb {
    height: 169px;
    background: rgba(70, 102, 211, 0.51);
    border-radius: 100px;
}

#userMainBox::-webkit-scrollbar-track {
    background: transparent;
}
@-moz-document url-prefix() {
    #userMainBox {
        scrollbar-color: rgba(70, 102, 211, 0.51) transparent;
    }
}
#main{
    max-width: 100%;
    min-width: 100%;
    position: relative;
}
@media screen and (max-width: 400px){
    .userAvatarBox{
        width: 290px;
        height: 204px;
    }
}
</style>