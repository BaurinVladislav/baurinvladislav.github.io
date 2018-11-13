<template>
    <div class="run">
        <h1 >Screen Run</h1>
        <app-screen-red v-if="switchColor=='red'"></app-screen-red>
        <app-screen-green v-else-if="switchColor=='green'"></app-screen-green>
        <app-screen-yellow v-else-if="switchColor=='yellow'"></app-screen-yellow>
        <h2 v-else>switch not found </h2>
        <h1>switchColor:{{switchColor}}</h1>
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
                switchColor: ''
                }
            },
            methods: {
                switchRed(){
                    this.switchColor="red"
                },
                switchGreen(){
                    this.switchColor="green"
                },
                switchYellow(){
                    this.switchColor="yellow"
                }
            },
            beforeMount(){
               setTimeout(this.switchRed, 1000),
               setTimeout(this.switchGreen, 3000),
               setTimeout(this.switchYellow, 5000)
                

            }
    }
    
</script>

