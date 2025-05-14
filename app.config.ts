export default defineAppConfig({
  ui: {
    navigationMenu: {
        slots: {
            link: 'group relative w-full flex items-center gap-1.5 font-buttons font-medium text-md before:absolute before:z-[-1] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2'
        }
    },
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  }  
})