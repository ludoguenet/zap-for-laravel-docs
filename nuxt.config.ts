export default defineNuxtConfig({
  extends: ['docus'],
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
