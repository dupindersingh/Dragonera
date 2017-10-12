<template>
    <div class="Platform">
        <h1>DRAGONERA</h1>
        <h2>WHICH CATEGORIES BEST DESCRIBE YOUR PRODUCT?</h2>
        <span>You may choose one or more categories</span>
        <br><br>
        <div>
            <span v-for="productCategory in $store.state.productCategory.details" :key="productCategory.key">
                <input type="checkbox" v-bind:id="productCategory.key" v-bind:value="productCategory.checkParent" v-model="$store.state.productCategory.checked">
                <label v-bind:for="productCategory.key">{{productCategory.checkParent +"----"+productCategory.checkChild}}</label>
                <br><br>
            </span>
            <router-link to="/Platform">
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
        name: 'category',
        data() {
            return {
            }
        },
        beforeMount: function () {
            for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Category') {
                        this.$store.state.productSummary[index].value = '';
                    }
                }
        },
        methods: {
            common: function () {
                var productCategoryData = '';
                for (var index = 0; index < this.$store.state.productSummary.length; index++) {
                    if ( this.$store.state.productSummary[index].text == 'Category') {
                        for (var x = 0; x < this.$store.state.productCategory.checked.length; x++) {
                            productCategoryData = productCategoryData + this.$store.state.productCategory.checked[x] + ','+' ';
                        }
                        productCategoryData = productCategoryData.substring(0, productCategoryData.length - 2);
                        this.$store.state.productSummary[index].value = productCategoryData;
                        break;
                    }  
                };
            },
            next: function () {
                this.common();
                this.$router.push('/Audience');
            },
            back: function () {
                this.common();  
            },
            edit: function (name) {
                if (name === 'Category') {}
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