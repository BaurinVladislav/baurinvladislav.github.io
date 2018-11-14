<template>
    <div class="run">
        <div class = "box"> 
            <h1>time: {{i}}</h1>
            <div class="progress">
                <div class="progress-bar" :style="switchProgressBar"></div>
            </div>
            <hr>
            <transition name="flip" mode="out-in">
                <app-screen-red v-if="switchColor=='#ff4040'"></app-screen-red>
                <app-screen-green v-else-if="switchColor=='#4dff40'"></app-screen-green>
                <app-screen-yellow v-else-if="switchColor=='#fff540'"></app-screen-yellow>
                <app-screen-error v-else></app-screen-error>
            </transition>
         </div>
    </div>
</template>
<script>

    import Red from './ScreenRed.vue';
    import Green from './ScreenGreen.vue';
    import Yellow from './ScreenYellow.vue';
    import Error from './ScreenError.vue';

    export default {
            components: {
            'app-screen-red': Red,
            'app-screen-green': Green,
            'app-screen-yellow': Yellow,
            'app-screen-error': Error
            },
            data () {
                return{
                switchColor: '',
                e: 1, 
                i: 0,
                iMax: 0
                }
            },
            methods: {
                switchRed(){
                    this.i=10;
                    this.iMax=10;
                    this.switchColor="#ff4040";
                    
                },
                switchYellow(){
                    this.i=3;
                    this.iMax=3;
                    this.switchColor="#fff540";
                },
                switchYellowOne(){
                    this.i = 3 + this.e;
                    this.iMax=3;
                    this.switchColor="#fff540";
                }, 
                switchGreen(){
                    this.i=15;
                    this.iMax=15;
                    this.switchColor="#4dff40";  
                },
                switchGreenOne(){
                    this.i = 15 + this.e;
                    this.iMax=15;
                    this.switchColor="#4dff40";  
                },
                timeSwitch(){
                    this.i--;
                },
                lightSwitch(){
                    setInterval(this.timeSwitch, 1000);
                    setTimeout(this.switchRed, 1000);
                    setTimeout(this.switchYellowOne, 12000);               
                    setTimeout(this.switchGreenOne, 16000);

                    setInterval(()=>{
                    setTimeout(this.switchRed, 1000);
                        setTimeout(this.switchYellow, 12000)
                        setTimeout(this.switchGreen, 16000);
                    },31000)
                }         
            },
            computed: {
                switchProgressBar(){
                    return {
                         width: (this.i / this.iMax * 100) + '%',
                        background:(this.switchColor)
                    }
                },
            },
            beforeMount(){
                 this.lightSwitch()
            }
    }
    
</script>
<style>
    .box{
        margin: 0 auto;
        width: 600px;
    }
    .flip-enter-active{
        animation: flipInX 0.3s linear;
    }
    .flip-leave-active{
        animation: flipOutX 0.3s linear;
    }
    @keyframes flipInX{
        from{transform: rotateX(90deg);}
        to{transform: rotateX(0deg);}
    }
    @keyframes flipOutX{
        from{transform: rotateX(0deg);}
        to{transform: rotateX(90deg);}
    }
</style>


