<template>
    <section :style="{backgroundColor: color}" >
        <div id="footerInformationBox">

            <div class="footerInformation1">
                <img src="@/assets/logo.png" id="logo" alt="Footer's logo">

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <p>@MyMaster</p>
            </div>

            <div class="footerInformation2">
                <h5>About us</h5>

                <div style="display: grid;" >
                    <a>Lorem</a>
                    <a>Portfolio</a>
                    <a>Careers</a>
                    <a>Contact us</a>
                </div>
            </div>

            <div class="footerInformation1">
                <h5>Contact us</h5>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <p>+374 99 999 999</p>
            </div>

            <div class="footerLastBox" >
                <a><img src="@/assets/landing/facebook.png" alt="Footer's Facebook Button"></a>
                <a><img src="@/assets/landing/instagram.png" alt="Instagram's Facebook Button"></a>
                <a><img src="@/assets/landing/twitter.png" alt="Twitter's Facebook Button"></a>
                <a><img src="@/assets/landing/linkdin.png" alt="Linkdins's Facebook Button"></a>
            </div>
        </div>

        <div id="footer">
            <p>Copyright ® 2024 Lorem All rights Rcerved</p>
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
.footerLastBox a{
    width: 34px;
    height: 34px;
    background: #FBF9ED;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
}
.footerLastBox{
    display: flex;
    gap: 16px;
    margin-top: auto;
}
#footerInformationBox h5{
    font-weight: 600;
    font-size: 17px;
    line-height: 26px;
    color: #E7EAF3;
}
#footerInformationBox a{
    cursor: pointer;
}
#footerInformationBox p, #footerInformationBox a{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #E7EAF3;
}
#logo{
    width: 33px;
}
.footerInformation2{
    display: grid;
    gap: 15px;
}
.footerInformation1{
    display: grid;
    gap: 25px;
}
#footer p{
    font-weight: 400;
    font-size: 13px;
    color: #E7EAF3;
    text-align: center;
}
#footer{
    padding: 27px 0;
    border-top: 1px solid#D2D2D2;
}
#footerInformationBox{
    padding: 80px 100px 80px 100px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 60px;
}
@media screen and (max-width: 1000px) {
    #footerInformationBox{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 800px) {
    #footerInformationBox{
        gap: 30px;
        padding: 40px 20px;
    }
}
@media screen and (max-width: 500px) {
    #footerInformationBox{
        grid-template-columns: 1fr;
    }
}
</style>