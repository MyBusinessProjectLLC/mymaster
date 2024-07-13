<template>
    <header>
        <img src="@/assets/logo.png" id="logo" alt="Logotype">

        <div>
            <button id="login">Log in</button>
            <button id="register">Register</button>
            <button id="language">English (En)</button>
        </div>
    </header>
</template>


<style scoped>
#language{
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
}
#login{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
}
#register{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 149px;
    height: 39px;
    background: #293E89;
    border-radius: 100px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FBF9ED;
}
#logo{
    width: 50px;
}
header div{
    display: flex;
    margin-left: auto;
    gap: 40px;
}
header{
    display: flex;
    align-items: center;
    padding: 25px 0;
    border-bottom: 0.7px solid rgba(229, 229, 229, 0.39);
}
</style>