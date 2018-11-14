<template>
    <div class="GreenLight alert alert-secondary">
        <h1 class="color">GO</h1>
        <div class="Red alert"></div>
        <div class="Yellow alert"></div>
        <div class="Green alert"></div>
    </div>
</template>
<style scoped>
    .color{
            color:#242424;
        }
    .GreenLight{
        display: flex;
        flex-direction:column;
        align-items: center;
        margin: 0 auto;
        width: 600px;
    }
    .Red{
        background: #ff8282;
        height: 50px;
        width: 250px;   
    }
    .Yellow{
        background: #fffb82;
        height: 50px;
        width: 250px;   
    }
    .Green{
        background:#4dff40;
        height: 100px;
        width: 500px;    
    }
</style>

