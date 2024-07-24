<template>
    <section>
        <div>
            <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do 
            </p>
        </div>

        <div id="pictureBox">
            <svg width="375" height="383" viewBox="0 0 375 383" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_88_131)">
                    <path d="M179.936 374.045C173.285 371.447 170.153 369.285 163.583 362.761C159.634 358.84 139.802 338.638 119.511 317.868C99.2204 297.099 67.5821 264.778 49.2037 246.045C30.8253 227.312 14.6533 210.652 13.2659 209.023C11.8785 207.394 10.3139 205.608 9.78882 205.054C5.68935 200.725 3.05303 190.006 4.31956 182.816C6.15574 172.392 5.66554 172.988 46.6713 131.275C55.4789 122.316 78.6303 98.6587 98.1189 78.7036C158.472 16.9063 170.788 4.81098 175.695 2.52168C183.21 -0.985231 192.253 -0.827568 200.401 2.95234C202.316 3.84075 207.453 8.43805 214.099 15.2099C219.948 21.1697 230.064 31.4527 236.58 38.0611C243.096 44.6694 258.59 60.4848 271.011 73.2064C283.432 85.9279 298.593 101.408 304.701 107.607C339.612 143.031 363.023 167.221 365.23 170.149C372.163 179.349 372.776 191.637 366.832 202.273C365.761 204.187 361.341 209.343 357.007 213.73C343.842 227.058 310.438 261.141 286.56 285.609C274.139 298.337 259.036 313.718 252.997 319.789C246.958 325.859 242.143 330.826 242.298 330.826C242.452 330.826 233.816 339.632 223.106 350.393C200.188 373.424 199.456 373.923 188.081 374.266C184.212 374.383 180.547 374.285 179.936 374.045Z" 
                    :fill="color"/>
                </g>
                <defs>
                    <filter id="filter0_d_88_131" x="0" y="0"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_131"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_131" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <img src="@/assets/landing/pic_2.png" alt="Man on a chair">
        </div>


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
#pictureBox{
    position: relative;
    width: 400px;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#pictureBox img{
    position: relative;
    width: 60%;
    z-index: 1;
}
#pictureBox svg, #pictureBox svg path{
    transition: 300ms;
}
#pictureBox svg{
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
}
h2{
    font-style: normal;
    font-weight: 600;
    font-size: clamp(24px, 3vw, 40px);
    margin-bottom: 26px;
}
p{
    font-style: normal;
    font-weight: 400;
    font-size: clamp(15px, 2vw, 20px);
}
section{
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 45px;
    align-items: center;
    align-content: center;
    position: relative;
    z-index: 1;
}

@media screen and (max-width: 1000px){
    section{
        grid-template-columns: 1fr;
    }
    #pictureBox{
        margin: auto;
    }
}
@media screen and (max-width: 440px){
    #pictureBox{
        width: 100%;
        height: unset;
    }
}
</style>
