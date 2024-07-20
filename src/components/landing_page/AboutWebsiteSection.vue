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
img{
    width: clamp(300px, 40vw, 500px);
}

@media screen and (max-width: 1000px){
    section{
        grid-template-columns: 1fr;
    }
    img{
        margin: auto;
    }
}
</style>
