export default defineNuxtConfig({
    extends: ['docus'],
    modules: ['@nuxt/ui-pro'],
    css: ['~/assets/css/main.css'],
    content: {
        build: {
            markdown: {
            highlight: {
                    langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php']
                }
            }
        }
    }
})
