<template>
    <div class="Audience">
        <h1>DRAGONERA</h1>
        <h2>WHO IS YOUR AUDIENCE?</h2>
        <span>Determining your target audience has a tremendous impact on your product definition and priorities</span>
        <br><br>
        <div>
            <span v-for="productAudience in $store.state.productAudience.details" :key="productAudience.key">
                <input type="checkbox" v-bind:id="productAudience.key" v-bind:value="productAudience.checkParent" v-model="$store.state.productAudience.checked">
                <label v-bind:for="productAudience.key">{{productAudience.checkParent +"----"+productAudience.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Category">
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
        name: 'audience',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Audience') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productAudienceData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Audience') {
                        for (var x = 0; x < this.$store.state.productAudience.checked.length; x++) {
                            productAudienceData = productAudienceData + this.$store.state.productAudience.checked[x] + ','+' ';
                        }
                        productAudienceData = productAudienceData.substring(0, productAudienceData.length - 2);
                        this.$store.state.productSummary[index].value = productAudienceData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Login');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Audience') {}
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