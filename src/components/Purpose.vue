<template>
    <div class="Purpose">
        <h1>DRAGONERA</h1>
        <span>In order to generate your proposal, It will help us to better understand the way you would like to use your product.</span>
        <br><br>
        <div>
            <span v-for="productPurpose in $store.state.productPurpose.details" :key="productPurpose.key">
                <input type="checkbox" v-bind:id="productPurpose.key" v-bind:value="productPurpose.checkParent" v-model="$store.state.productPurpose.checked">
                <label v-bind:for="productPurpose.key">{{productPurpose.checkParent +"----"+productPurpose.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Type">
                <span v-on:click="back">BACK</span>
            </router-link>
            <button @click="next">NEXT</button>
        </div>
        <div>
            <h2>PRODUCT SUMMARY</h2>
            <span v-for="detail in $store.state.productSummary" :key="detail.key">
                <span>
                    {{detail.text+':'+"   "+detail.value}}
                    <router-link v-bind:to="detail.id">
                        <span @click="edit(detail.text)">edit</span>
                    </router-link>
                </span>
                <br>
            </span>
            <button v-on:click="startOver">START OVER</button>
        </div>
    </div>
</template>

<script>   
    export default {
        name: 'purpose',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Purpose') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productPurposeData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Purpose') {
                        for (var x = 0; x < this.$store.state.productPurpose.checked.length; x++) {
                            productPurposeData = productPurposeData + this.$store.state.productPurpose.checked[x] + ','+' ';
                        }
                        productPurposeData = productPurposeData.substring(0, productPurposeData.length - 2);
                        this.$store.state.productSummary[index].value = productPurposeData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Platform');
            },
            back: function () {
               this.common();
            },
            edit: function (name) {
                if (name === 'Purpose') {}
                else {
                    this.common();
                }
            },
            startOver: function () {
                if (confirm('Are you sure you want to start a new Product?')) {
                    this.$store.state.productType.selected = '';
                    this.$store.state.productPurpose.checked = [];
                    this.$store.state.productPlatform.checked = [];
                    this.$store.state.productCategory.checked = [];
                    this.$store.state.productAudience.checked = [];
                    this.$store.state.productLogin.checked = [];
                    this.$store.state.productRevenue.checked = [];
                    this.$store.state.productAdmin.checked = [];
                    this.$store.state.productSolution.solution = '';
                    this.$store.state.productCompetitors.competitors = '';
                    this.$store.state.productOther.other = '';
                    this.$store.state.productName.name = '';

                    for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                          this.$store.state.productSummary[index].value = '';
                    }
                    
                    this.$router.push('/');
                }
            }
        }
    }
</script>