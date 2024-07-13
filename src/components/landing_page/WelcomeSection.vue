<template>
    <section>
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do 
            </p>
        </div>

        <img src="@/assets/landing/pic_1.png" alt="Man on a chair">
    </section>
</template>

<style scoped>
h1{
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
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
    gap: 45px;
    align-items: center;
    align-content: center;
}

@media screen and (max-width: 1370px){
    h1{
        font-size: 40px;
    }
    p{
        font-size: 16px;
    }
}
@media screen and (max-width: 1200px){
    img{
        width: 400px;
    }
}
@media screen and (max-width: 1000px){
    img{
        width: 340px;
    }
    h1{
        font-size: 25px;
    }
    p{
        font-size: 13px;
    }
}
</style>
