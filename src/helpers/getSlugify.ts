const slugify = require('slugify')
const config={
    lower: true,     
  }
export const getSlugify = (title:string) => `${slugify(title,config)}`
