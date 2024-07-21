<template>
    <section>
        <svg id="leftRectangle" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_638)">
                <rect width="30.0057" height="30.1734" rx="7" transform="matrix(0.860263 -0.509851 0.491575 0.870835 7.72852 19.0107)" 
                :fill="color"/>
            </g>
            <defs>
                <filter id="filter0_d_3_638" x="0.253906" y="0.312012" width="55.5938" height="56.375" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_638"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_638" result="shape"/>
                </filter>
            </defs>
        </svg>


        <div id="contactsMain">
            <h2>Send your email and we will contact you</h2>

            <div id="emailSection">
                <input type="text" placeholder="Your email for feedback" >
                <button ref="sendButton"
                    :style="{borderColor: color}"
                    @mouseenter="$refs.sendButton.style.backgroundColor = color;"
                    @mouseleave="$refs.sendButton.style.backgroundColor = 'transparent'"
                    >Send</button>
            </div>

            <div id="contactsSection">
                <a href="tel:099999999">
                    <img src="@/assets/landing/phone.png" alt="Telephone icon">
                    <p>
                        <span>Phone</span>
                        099 999 999
                    </p>
                </a>

                <a href="fax:099999999">
                    <img src="@/assets/landing/fax.png" alt="Fax icon">
                    <p>
                        <span>Fax</span>
                        099 999 999
                    </p>
                </a>

                <a href="mailto:info@mymaster.am">
                    <img src="@/assets/landing/email.png" alt="E-mail icon">
                    <p>
                        <span>Email</span>
                        info@mymaster.am
                    </p>
                </a>
            </div>
        </div>

        <svg id="rigthRectangle" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3_572)">
                <rect width="30.0057" height="30.1734" rx="7" transform="matrix(0.410917 -0.911673 0.902794 0.430073 8.6875 31.1128)" 
                :fill="color"/>
            </g>
            <defs>
                <filter id="filter0_d_3_572" x="0.9375" y="0.0917969" width="55.0684" height="55.6636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_572"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_572" result="shape"/>
                </filter>
            </defs>
        </svg>

    </section>
</template>

<script>
export default{
    props:{
        color: String
    }
}
</script>

<style scoped>
#leftRectangle{
    position: absolute;
    top: 80px;
    left: 5vw;
}
#rigthRectangle{
    position: absolute;
    bottom: 80px;
    right: 5vw;
}
#contactsSection a p span{
    font-weight: 800;
    color: black;
}
#contactsSection a p{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.02em;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: grid;
    text-align: start;
    color: #787878;
}
#contactsSection a{
    display: flex;
    padding: 18px;
    height: 53px;
    width: calc(100% - 36px);
    background: rgba(41, 62, 137, 0.12);
    border-radius: 17px;
    gap: 15px;
    align-items: center;
    cursor: pointer;
}
#contactsSection{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 45px;
}
h2{
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    margin-bottom: 80px;
}
#emailSection button:hover{
    background-color: #293E89;
    color: #E7EAF3;
}
#emailSection button{
    width: 173px;
    height: 67px;
    border: 2px solid #293E89;
    border-radius: 10px;
    transition: 300ms;
    font-weight: 500;
    font-size: 18px;
}
#emailSection input{
    padding: 20px;
    width: calc(100% - 32px);
    box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    font-size: 16px;
}
#emailSection{
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
}
#contactsMain{
    width: 720px;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 70px 0 110px 0;
}
@media screen and (max-width: 1250px) {
    #rigthRectangle, #leftRectangle{
        display: none;
    }
}
@media screen and (max-width: 800px) {
    #contactsMain{
        width: 100%;
    }
    #contactsSection{
        grid-template-columns: repeat(1, 1fr);
    }
    #contactsSection a{
        width: 200px;
        margin: auto;
    }
}
@media screen and (max-width: 600px) {
    #emailSection button{
        width: unset;
        padding: 0 10px;
    }
}
@media screen and (max-width: 400px) {
    #emailSection{
        grid-template-columns: 1fr;
    }
    #emailSection button{
        width: 173px;
        margin: auto;
        padding: unset;
    }
}
</style>