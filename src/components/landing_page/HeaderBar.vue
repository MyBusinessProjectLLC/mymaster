<template>
    <header>
        <img src="@/assets/logo.png" id="logo" alt="Logotype">

        <div>
            <button id="login">Log in</button>
            <button id="register">Register</button>
            <button class="languageButton" >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="16" height="16" fill="url(#pattern0_59_992)"/>
                    <defs>
                        <pattern id="pattern0_59_992" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_59_992" transform="scale(0.0078125)"/>
                        </pattern>
                        <image id="image0_59_992" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>

                <p>(EN)</p>

                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="7" height="7" fill="url(#pattern0_59_993)"/>
                    <defs>
                        <pattern id="pattern0_59_993" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_59_993" transform="scale(0.0078125)"/>
                        </pattern>
                        <image id="image0_59_993" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </button>

            <button id="language">English (En)</button>

            <button class="miniRegister">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="21" height="21" fill="url(#pattern0_59_1008)"/>
                    <defs>
                        <pattern id="pattern0_59_1008" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_59_1008" transform="scale(0.0078125)"/>
                        </pattern>
                        <image id="image0_59_1008" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </button>
        </div>
    </header>
</template>


<style scoped>
.miniRegister{
    display: flex;
    align-items: center;
}
.languageButton{
    gap: 5px;
    align-items: center;
    display: none;
}
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

@media screen and (max-width: 800px){
    header{
        padding: 5px 0;
    }
    #logo{
        width: 35px;
    }
    #login, #register, #language{
        display: none;
    }
    .languageButton{
        display: flex;
    }
    header div{
        gap: 20px;
    }
}
</style>