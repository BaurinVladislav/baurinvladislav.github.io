<template>
    <div class="RedLight alert alert-secondary">
        <h1 class="color">STOP</h1>
        <div class="Red alert"></div>
        <div class="Yellow alert"></div>
        <div class="Green alert"></div>
    </div>
</template>
<style scoped>
    .color{
        color:#ff4040;
    }
    .RedLight{
        display: flex;
        flex-direction:column;
        align-items: center;
        margin: 0 auto;
        width: 600px;
        
    }
    .Red{
        background: #ff4040;
        height: 100px;
        width: 500px; 
        margin: 10px;  
    }
    .Yellow{
        background: #fffb82;
        height: 50px;
        width: 250px; 
        margin: 10px;   
    }
    .Green{
        background:#9bff82;
        height: 50px; 
        width: 250px; 
        margin: 10px;    
    }
</style>

