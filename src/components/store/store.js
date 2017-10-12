import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        productType: {
            details: [{
                radioParent: 'Prototype',
                radioChild: 'Code-free interactive prototypes',
                key: 1
                },
                {
                radioParent: 'MVP',
                radioChild: 'Product’s first version to quickly meet your market',
                key: 2
                },
                {
                radioParent: 'Software',
                radioChild: 'Anything from a simple dashboard to blockchain applications',
                key: 3
                }
            ],
            selected: ''
        },

        productPurpose: {
            details: [{
                checkParent: 'Presentation',
                checkChild: 'Show your idea as a working product',
                key: 1
                },
                {
                checkParent: 'Go to Market',
                checkChild: 'Have your product meet real users',
                key: 2
                },
                {
                checkParent: 'Additional Features',
                checkChild: 'Expand your existing product',
                key: 3
                },
                {
                checkParent: 'Internal use',
                checkChild: 'Improve your company tools',
                key: 4
                },
                {
                checkParent: 'Promotional',
                checkChild: 'Convey your message with an interactive product',
                key: 5
                },
                {
                checkParent: 'POC',
                checkChild: 'Demonstrating the feasibility of a product',
                key: 6
                },
                {
                checkParent: 'Other',
                radioChild: 'I haven’t decided yet or have a different purpose in mind',
                key: 7
                }
            ],
            checked: []
        },
            
            productPlatform: {
                details: [{
                    checkParent: 'iOS',
                    checkChild: 'A mobile application for iOS devices',
                    key: 1
                    },
                    {
                    checkParent: 'Android',
                    checkChild: 'A mobile application for Android devices',
                    key: 2
                    },
                    {
                    checkParent: 'Web',
                    checkChild: 'A website or web application for desktop and mobile browsers',
                    key: 3
                    },
                    {
                    checkParent: 'Other',
                    checkChild: 'I haven’t decided yet or have a different platform in mind',
                    key: 4
                    }
                ],
                checked: []
        },

        productCategory: {
            details: [{
                checkParent: 'Media & Content',
                checkChild: 'A product intended to showcase content, like a blog, news site or portfolio',
                key: 1
                },
                {
                checkParent: 'Social Networking / Messaging',
                checkChild: 'A platform for users to explore, share and communicate with others',
                key: 2
                },
                {
                checkParent: 'Game',
                checkChild: 'Build a new and exciting game for users to play alone or with others',
                key: 3
                },
                {
                checkParent: 'Utility',
                checkChild: 'A product meant to solve a problem or improve day to day efficiency',
                key: 4
                },
                {
                checkParent: 'Marketplace',
                checkChild: 'A place where sellers and buyers can meet and trade goods or services',
                key: 5
                },
                {
                checkParent: 'Other',
                checkChild: 'I haven’t decided yet or can’t find a match',
                key: 6
                }
            ],
            checked: []
        },

        productAudience: {
            details: [{
                checkParent: 'Enterprise',
                checkChild: 'large companies and corporations or governments',
                key: 1
                },
                {
                checkParent: 'Small and medium businesses',
                checkChild: 'From a neighborhood grocery store to a small company with several branches',
                key: 2
                },
                {
                checkParent: 'Consumer',
                checkChild: 'The product targets individual users',
                key: 3
                },
                {
                checkParent: 'Other',
                checkChild: 'I haven’t decided yet or have a different audience in mind',
                key: 4
                }
            ],
            checked: []
        },

        productLogin: {
            details: [{
                checkParent: 'Yes',
                checkChild: 'Users need to sign in',
                key: 1
                },
                {
                checkParent: 'No',
                checkChild: 'Users remain anonymous',
                key: 2
                },
                {
                checkParent: 'Other',
                checkChild: 'I haven’t decided yet',
                key: 3
                }
            ],
            checked: []
        },

        productRevenue: {
            details: [{
                checkParent: 'One time payment',
                checkChild: 'A single payment for the application or premium features within',
                key: 1
                },
                {
                checkParent: 'Subscription',
                checkChild: 'Periodically charging the users',
                key: 2
                },
                {
                checkParent: 'Advertisement',
                checkChild: 'Incorporate advertisements into the product',
                key: 3
                },
                {
                checkParent: 'Selling',
                checkChild: 'I would like to sell goods or services within the product',
                key: 4
                },
                {
                checkParent: 'Free',
                checkChild: 'I would not charge users to use the product',
                key: 5
                },
                {
                checkParent: 'Other',
                checkChild: 'I haven’t decided yet or have a different model in mind',
                key: 6
                }
            ],
            checked: []
        },

        productAdmin: {
            details: [{
                checkParent: 'User Administration',
                checkChild: 'Communicate with users and enforce system policy',
                key: 1
                },
                {
                checkParent: 'Payment Administration',
                checkChild: 'Handle and review user payments',
                key: 2
                },
                {
                checkParent: 'Reports and analytics',
                checkChild: 'Monitor performance and behaviour',
                key: 3
                },
                {
                checkParent: 'Content management',
                checkChild: 'add, edit and review content such as posts, articles or catalog items',
                key: 4
                },
                {
                checkParent: 'Other',
                checkChild: 'I haven’t decided yet or do not need administration',
                key: 5
                }
            ],
            checked: []
        },

        productSolution: {
            solution: ''
        },

        productCompetitors: {
            competitors: ''
        },

        productOther: {
            other: ''
        },

        productName: {
            name: ''
        },

        productSummary: [
            {text: 'Type', id:'/', value: '', key: 1},
            {text: 'Purpose', id:'Purpose', value: '', key: 2},
            {text: 'Platform', id:'Platform', value: '', key: 3},
            {text: 'Category', id:'Category', value: '', key: 4},
            {text: 'Audience', id:'Audience', value: '', key: 5},
            {text: 'Login', id:'Login', value: '', key: 6},
            {text: 'Revenue', id:'Revenue', value: '', key: 7},
            {text: 'Admin', id:'Admin', value: '', key: 8},
            {text: 'Solution', id:'Solution', value: '', key: 9},
            {text: 'Competitors', id:'Competitors', value: '', key: 10},
            {text: 'Other', id:'Other', value: '', key: 11},
            {text: 'Name', id:'Name', value: '', key: 12}
        ]
    }
});