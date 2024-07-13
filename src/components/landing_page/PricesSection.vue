<template>
    <section>
        <div id="adBox">
            <div id="ad">
                <img src="@/assets/landing/alarm.png" alt="Ad's Alarm">
                <p>Free for the first 100 registrants.</p>
            </div>
        </div>

        <div style="position: relative" >

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

            <div id="pricesMainBox">
    
                <div id="pricesBox"
                    :style="{left: `calc(-${cartPosition * 100}% - ${cartPosition * 100}px - 50px)`}" >
    
                    <div class="twoCardsBox"
                        v-for="(cartGroup, index) in carts[userType] || carts['employer']" :key="index">
                        <div class="cart" v-for="(cart, i) in cartGroup" :key="i" >
                            <div class="cartPriceBox">
                                <h3>{{ cart.price }}</h3>
                                <p>/{{ cart.duration }}</p>
                            </div>
    
                            <p>{{ cart.info }}</p>
    
                            <ul>
                                <li v-for="(advantage, advantages_index) in cart.advantages" :key="advantages_index">
                                    <img src="@/assets/landing/check.png" alt="Check icon">
                                    {{ advantage }}
                                </li>
                            </ul>
    
                            <button>Get started</button>
                        </div>
    
    
                    </div>
    
                </div>

                <div id="dotsBox">
                    <div
                        v-for="index in carts[userType].length || carts['employer'].length" :key="index"
                        :style="{width: index === cartPosition + 1 ? '30px' : '12px', backgroundColor: index === cartPosition + 1 ? '#293E89' : '#C4C4C4'}"
                        class="dot"
                        @click="selectCartPositionByDot(index)"></div>
                </div>
            </div>


        </div>
    </section>
</template>

<script>
export default{
    props:{
        userType: String
    },
    data(){
        return{
            cartPosition: 0,
            carts:{
                employer:[
                    [
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                    [
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                    [
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                ],
                worker:[
                [
                        {
                            price: '$12',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                    [
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                    [
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        },
                        {
                            price: '$10',
                            duration: 'month',
                            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
                            advantages: [
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur',
                                'Lorem ipsum dolor sit amet, consectetur'
                            ]
                        }
                    ],
                ],
            },
            leftArrowShow: false,
            leftArrowHidden: false,
            rightArrowShow: true,
            rightArrowHidden: false,
        }
    },
    methods:{
        selectCartPositionByDot(pos){
            if(this.cartPosition !== pos - 1){
                this.cartPosition = pos - 1;
                this.checkArrows();
            }
        },
        cartPositionMinus(){
            if(this.cartPosition > 0 && !this.leftArrowHidden && this.leftArrowShow){
                this.cartPosition -= 1;
            }
            this.checkArrows();
        },
        cartPositionPlus(){
            if(this.cartPosition < this.carts[this.userType].length - 1 && !this.rightArrowhidden && this.rightArrowShow){
                this.cartPosition += 1;
            }
            this.checkArrows();
        },
        checkArrows(){
            if(this.cartPosition <= 0){
                this.leftArrowHidden = true;
                setTimeout(()=>{
                    this.leftArrowShow = false;
                    this.leftArrowHidden = false;
                }, 200)
            }else if(this.cartPosition >= this.carts[this.userType].length - 1){
                this.rightArrowHidden = true;
                setTimeout(()=>{
                    this.rightArrowShow = false;
                    this.rightArrowHidden = false;
                }, 200)
            }

            if(this.cartPosition > 0){
                this.leftArrowShow = true;
            }
            if(this.cartPosition < this.carts[this.userType].length - 1){
                this.rightArrowShow = true;
            }
        }
    }
}
</script>

<style scoped>
.dot{
    height: 12px;
    border-radius: 7px;
    transition: 500ms;
    cursor: pointer;
}
#dotsBox{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}
@keyframes hiddenButton {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.hiddenArrow{
    animation: hiddenButton 300ms !important;
    opacity: 0;
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
    top: 50%;
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
    top: 50%;
    opacity: 1;
}
.cart:hover button{
    background-color: #E7EAF3;
    color: #293E89;
}
.cart button{
    width: 100%;
    height: 66px;
    border-radius: 15px;
    transition: 300ms;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    background-color: #293E89;
    color:#E7EAF3;
}
li img{
    margin-right: 14px;
}
ul{
    padding: 0;
    list-style-type: none;
}
.cart p, .cart li{
    font-weight: 400;
    font-size: 18px;
    transition: 300ms;
}
.cart:hover li img{
    filter: invert(1);
}
.cart:hover h3, .cart:hover p, .cart:hover li{
    color: #E7EAF3;
}
.cartPriceBox h3{
    font-weight: 600;
    font-size: 70px;
    transition: 300ms;
    height: 85px;
}
.cartPriceBox p{
    font-weight: 500;
    font-size: 20px;
    transition: 300ms;
}
.cartPriceBox{
    display: flex;
    gap: 14px;
    height: 67px;
    align-items: end;
}
.cart{
    padding: 40px;
    transition: 500ms;
    border-radius: 20px;
    background-color: #E7EAF3;
    display: grid;
    gap: 25px;
}
.cart:hover{
    background-color: #293E89;
}
.twoCardsBox{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    min-width: calc(100vw - 200px);
    max-width: calc(100vw - 200px);
    transition: 500ms;
    margin: 0 50px;
}
#pricesBox{
    display: flex;
    position: relative;
    transition: 500ms;
}
#pricesMainBox{
    margin-top: 50px;
    max-width: calc(100vw - 200px);;
    overflow: hidden;
    position: relative;
}
#ad img{
    position: absolute;
    left: -72px;
    top: -27px;
}
#ad p{
    font-weight: 500;
    font-size: 17px;
}
#ad{
    width: 349px;
    height: 69px;
    background: #E7EAF3;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 70px;
}
#adBox{
    display: flex;
}
section{
    padding-bottom: 1000px;
}
</style>