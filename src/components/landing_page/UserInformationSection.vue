<template>
    <section>
        <h2>Lorem ispum</h2>
        <p id="mainInfo" >Lorem ipsum dolor sit amet, consectetur adipiscing</p>

        <div id="btnsBox" >
            <button @click="selectedtype = 'employer'; $emit('choosUserType', selectedtype)"
                :class="{'userTypeButtonsSelected': selectedtype === 'employer'}"
                class="userTypeButtons">I am an employer</button>
            <button @click="selectedtype = 'worker'; $emit('choosUserType', selectedtype)"
                :class="{'userTypeButtonsSelected': selectedtype === 'worker'}"
                class="userTypeButtons">i am a worker</button>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            selectedtype: null
        }
    }
}
</script>

<style scoped>
.userTypeButtonsSelected{
    background-color: #293E89;
    color: #f5f5f5;
}
.userTypeButtons{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    width: 216px;
    height: 59px;
    border: 2px solid #293E89;
    border-radius: 100px;
    transition: 300ms;
}
.userTypeButtons:hover{
    background-color: #293E89;
    color: #f5f5f5;
}
#btnsBox{
    display: flex;
    justify-content: center;
    gap: 12px;
}
h2{
    font-weight: 700;
    font-size: 38px;
    line-height: 130%;
    text-align: center;
}
#mainInfo{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
}
section{
    display: grid;
    justify-content: center;
    padding: 50px 0;
    gap: 24px;
}
@media screen and (max-width: 1370px){
    h2{
        font-size: 30px;
    }
    
}
@media screen and (max-width: 1000px){
    h2{
        font-size: 20px;
    }
}
</style>