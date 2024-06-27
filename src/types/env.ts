import z from "zod"

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GOOGLE_REDIRECT_URI: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  R2_PUBLIC_URL: ()
})

export const envParse = envSchema.parce(process.env)
type Env = z.infer<typeof envSchema>

declare global {
  namespace
}