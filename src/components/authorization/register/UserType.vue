<template>
    <div id="main">
        <div id="box">
            <p>Who you are?</p>

            <button :style="{backgroundColor: $store.state.colors.employer}" 
                @click="$emit('changeUserType', 'employer')" 
                style="height: 66px;"
                type="submit" >I am an employer</button>
    
            <button :style="{backgroundColor: $store.state.colors.worker}" 
                @click="$emit('changeUserType', 'worker')" 
                style="height: 66px;"
                type="submit" >I am a worker</button>
                
            <button :style="{backgroundColor: $store.state.colors.worker}" 
                    @click="$emit('changeUserType', 'worker')" 
                    style="height: 66px;"
                    type="submit" >I am a student</button>
                
        </div>
    </div>
</template>

<script>
export default{
}
</script>