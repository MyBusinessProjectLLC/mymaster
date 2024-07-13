<template>
    <section>
        <div>
            <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do 
            </p>
        </div>

        <img src="@/assets/landing/pic_2.png" alt="Man on a chair">
    </section>
</template>

<style scoped>
h2{
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 26px;
}
p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}
section{
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 155px;
    align-items: center;
    align-content: center;
}

@media screen and (max-width: 1370px){
    h2{
        font-size: 30px;
    }
    p{
        font-size: 16px;
    }
    
}
@media screen and (max-width: 1200px){
    img{
        width: 340px;
    }
    section{
        gap: 121px;
    }
}
@media screen and (max-width: 1000px){
    img{
        width: 280px;
    }
    section{
        gap: 108px;
    }
    h2{
        font-size: 20px;
    }
    p{
        font-size: 13px;
    }
}
</style>
