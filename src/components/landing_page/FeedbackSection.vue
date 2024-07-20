<template>
    <section>
        <img src="@/assets/landing/rectangle.png" id="leftRectangle" alt="Rectangle">

        <div id="contactsMain">
            <h2>Send your email and we will contact you</h2>

            <div id="emailSection">
                <input type="text" placeholder="Your email for feedback" >
                <button>Send</button>
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

        <img src="@/assets/landing/rectangle.png" id="rigthRectangle" alt="Rectangle">
    </section>
</template>

<style scoped>
#leftRectangle{
    position: absolute;
    top: 80px;
    left: 5vw;
    rotate: 30.65deg;
}
#rigthRectangle{
    position: absolute;
    bottom: 80px;
    right: 5vw;
    rotate: 65.74deg;
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