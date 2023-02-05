module.exports = {
    title: 'dela-sh.info blog',
    description: 'kasuteraの個人ブログ',
    /**
     * https://github.com/vuejs/vuepress/issues/2713#issuecomment-806621348
     */
    head: [
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-PM8R1MLD90',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-PM8R1MLD90');",
            ],
        ],
    ],
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    theme: 'meteorlxy',

    themeConfig: {
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
         */
        lang: 'ja-JP',
        modifyBlogPluginOptions(blogPluginOptions) {
            return blogPluginOptions
        },
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#nav
         */
        nav: [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Posts',
                link: '/posts/',
            },
        ],
        personalInfo: {
            // Nickname
            nickname: 'kasutera',

            // Introduction of yourself (HTML supported)
            description: '',

            // Email
            email: 'bwxzgeretou@gmail.com',

            // Your location
            location: 'Tokyo, Japan',

            // Your organization
            organization: '',

            // Your avatar image
            // Set to external link
            avatar: '/img/avatar.jpg',
            // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
            // avatar: '/img/avatar.jpg',

            // Accounts of SNS
            sns: {
                // Github account and link
                github: {
                    account: 'kasutera',
                    link: 'https://github.com/kasutera',
                },
            },
        },
    }
}
