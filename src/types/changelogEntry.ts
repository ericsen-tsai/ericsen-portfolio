import type { FunctionComponent } from 'react'

export type changelogEntry = {
  date: string
  description?: string
  DescriptionElement?: FunctionComponent
  type?: 'life' | 'tech' | 'academic' | 'work'
  space?: string | number
}
