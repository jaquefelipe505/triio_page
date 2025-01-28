import {defineCollection, z} from "astro:content";

const vivienda = defineCollection({
     schema: z.object({
        title: z.string(),
        description: z.string(),
        img_proceso: z.string()
     })

})

export const collections = {vivienda}