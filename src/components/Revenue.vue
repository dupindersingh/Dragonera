<template>
    <div class="Revenue">
        <h1>DRAGONERA</h1>
        <h2>HOW DO YOU PLAN TO INTEGRATE YOUR BUSINESS MODEL?</h2>
        <span>Your revenue model affects the product definition and flow</span>
        <br><br>
        <div>
            <span v-for="productRevenue in $store.state.productRevenue.details" :key="productRevenue.key">
                <input type="checkbox" v-bind:id="productRevenue.key" v-bind:value="productRevenue.checkParent" v-model="$store.state.productRevenue.checked">
                <label v-bind:for="productRevenue.key">{{productRevenue.checkParent +"----"+productRevenue.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Login">
                <span v-on:click="back">BACK</span>
            </router-link>
            <button @click="next">NEXT</button>
        </div>
        <div>
            <h2>PRODUCT SUMMARY</h2>
            <span v-for="detail in $store.state.productSummary" :key="detail.key">
                <span>
                    {{detail.text+':'+'  '+detail.value}}
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
        name: 'revenue',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Revenue') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productRevenueData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Revenue') {
                        for (var x = 0; x < this.$store.state.productRevenue.checked.length; x++) {
                            productRevenueData = productRevenueData + this.$store.state.productRevenue.checked[x] + ','+' ';
                        }
                        productRevenueData = productRevenueData.substring(0, productRevenueData.length - 2);
                        this.$store.state.productSummary[index].value = productRevenueData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Admin');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Revenue') {}
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