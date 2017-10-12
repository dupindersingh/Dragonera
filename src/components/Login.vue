<template>
    <div class="Login">
        <h1>DRAGONERA</h1>
        <h2>DO USERS NEED TO IDENTIFY THEMSELVES?</h2>
        <span>Identified users can use your product on several devices and interact with other users</span>
        <br><br>
        <div>
            <span v-for="productLogin in $store.state.productLogin.details" :key="productLogin.key">
                <input type="checkbox" v-bind:id="productLogin.key" v-bind:value="productLogin.checkParent" v-model="$store.state.productLogin.checked">
                <label v-bind:for="productLogin.key">{{productLogin.checkParent +"----"+productLogin.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Audience">
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
        name: 'login',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Login') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productLoginData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Login') {
                        for (var x = 0; x < this.$store.state.productLogin.checked.length; x++) {
                            productLoginData = productLoginData + this.$store.state.productLogin.checked[x] + ','+' ';
                        }
                        productLoginData = productLoginData.substring(0, productLoginData.length - 2);
                        this.$store.state.productSummary[index].value = productLoginData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Revenue');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Login') {}
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