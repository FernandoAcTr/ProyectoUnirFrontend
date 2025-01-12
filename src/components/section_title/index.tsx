import { Separator } from '../separator'

export type SectionTitleProps = {
  text: string
  className?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { text, className } = props

  return (
    <div className={className}>
      <h2 className='text-center text-3xl font-light'>{text}</h2>
      <Separator />
    </div>
  )
}
