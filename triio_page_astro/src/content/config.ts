import {defineCollection, z} from "astro:content";

const vivienda = defineCollection({
     schema: z.object({
        title: z.string(),
        description: z.string(),
        main_img: z.string(),
        main_video: z.string().optional(), 
        m_array: z.array(z.string()),
        p_array: z.array(z.string()),
        f_array: z.array(z.string()),
     }),

});

export const collections = {vivienda};