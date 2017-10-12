<template>
    <div class="Platform">
        <h1>DRAGONERA</h1>
        <h2>WHICH PLATFORMS DID YOU HAVE IN MIND?</h2>
        <span>Select the platforms for which you’d like to build an application</span>
        <br><br>
        <div>
            <span v-for="productPlatform in $store.state.productPlatform.details" :key="productPlatform.key">
                <input type="checkbox" v-bind:id="productPlatform.key" v-bind:value="productPlatform.checkParent" v-model="$store.state.productPlatform.checked">
                <label v-bind:for="productPlatform.key">{{productPlatform.checkParent +"----"+productPlatform.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Purpose">
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
        name: 'platform',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Platform') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productPlatformData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Platform') {
                        for (var x = 0; x < this.$store.state.productPlatform.checked.length; x++) {
                            productPlatformData = productPlatformData + this.$store.state.productPlatform.checked[x] + ','+' ';
                        }
                        productPlatformData = productPlatformData.substring(0, productPlatformData.length - 2);
                        this.$store.state.productSummary[index].value = productPlatformData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Category');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Platform') {}
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