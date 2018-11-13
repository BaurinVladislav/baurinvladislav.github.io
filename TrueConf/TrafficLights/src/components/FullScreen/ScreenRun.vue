<template>
    <div class="run">
        <h1 @click="forSwitch()">Screen Run</h1>
        <app-screen-red v-if="switchColor=='red'"></app-screen-red>
        <app-screen-green v-else-if="switchColor=='green'"></app-screen-green>
        <app-screen-yellow v-else-if="switchColor=='yellow'"></app-screen-yellow>
        <h2 v-else>switch not found </h2>
        <h1>time: {{i}}</h1>
        <div></div>
    </div>
</template>
<script>

    import Red from './ScreenRed.vue';
    import Green from './ScreenGreen.vue';
    import Yellow from './ScreenYellow.vue';

    export default {
            components: {
            'app-screen-red': Red,
            'app-screen-green': Green,
            'app-screen-yellow': Yellow
            },
            data () {
                return{
                switchColor: '',
                i: 0
                }
            },
            methods: {
                
                switchRed(){
                    this.i=10;
                   // setInterval(this.i++, 1000);
                    this.switchColor="red";
                    
                },
                switchYellow(){
                    this.i=3;
                     //setInterval(this.i++, 1000);
                    this.switchColor="yellow";
                }, 
                switchGreen(){
                    this.i=15;
                     //setInterval(this.i++, 1000);
                    this.switchColor="green";
                    
                },
                timeSwitch(){
                    this.i--;
                },
                lightSwitch(){
                    setInterval(this.timeSwitch, 1000);
                setTimeout(this.switchRed, 1000);
                setTimeout(this.switchYellow, 12000);               
                setTimeout(this.switchGreen, 16000);

                setInterval(()=>{
                   setTimeout(this.switchRed, 1000);
                    setTimeout(this.switchYellow, 12000)
                    setTimeout(this.switchGreen, 16000);
                },31000)
                }         
            },
            beforeMount(){
                 this.lightSwitch()
            }
    }
    
</script>

