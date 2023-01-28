
export interface MetaProps {
  title: string
  description?: string
  meta?: metaOption[]
  noIndex?: boolean
}
interface metaOption {
  name: string
  content: string
}