<template>
    <div class="Admin">
        <h1>DRAGONERA</h1>
        <h2>HOW WOULD YOU MANAGE YOUR PRODUCT?</h2>
        <span>Some products need a management system to setup, control and monitor usage</span>
        <br><br>
        <div>
            <span v-for="productAdmin in $store.state.productAdmin.details" :key="productAdmin.key">
                <input type="checkbox" v-bind:id="productAdmin.key" v-bind:value="productAdmin.checkParent" v-model="$store.state.productAdmin.checked">
                <label v-bind:for="productAdmin.key">{{productAdmin.checkParent +"----"+productAdmin.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Revenue">
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
        name: 'admin',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Admin') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productAdminData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Admin') {
                        for (var x = 0; x < this.$store.state.productAdmin.checked.length; x++) {
                            productAdminData = productAdminData + this.$store.state.productAdmin.checked[x] + ','+' ';
                        }
                        productAdminData = productAdminData.substring(0, productAdminData.length - 2);
                        this.$store.state.productSummary[index].value = productAdminData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Solution');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Admin') {}
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