<template>
    <div class="Type">
        <h1>DRAGONERA</h1>
        <h2>WHAT KIND OF PRODUCT WOULD YOU LIKE TO BUILD?</h2>
        <span>Let’s start by selecting the type of product which you wish to build?</span>
        <br><br>
        <div>
            <span v-for="productType in $store.state.productType.details" :key="productType.key">
                <input type="radio" v-bind:id="productType.key" v-bind:value="productType.radioParent" v-model="$store.state.productType.selected">
                <label v-bind:for="productType.key">{{productType.radioParent +"----"+productType.radioChild}}</label>
                <br><br>
            </span>
            <button @click="next">NEXT</button>
        </div>
    </div>
</template>

<script>   
    export default {
        name: 'Type',
        data() {
            return {
            }
        },
        methods: {
            next: function () {
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Type') {
                        this.$store.state.productSummary[index].value = this.$store.state.productType.selected;
                    }
                    break;
                };
                this.$router.push('/Purpose');
            }
        }
    }
</script>