import { useEffect, useState } from 'react'

export type AccordionProps = {
  titles: string[]
  tabs: React.ReactNode[]
}

export const Accordion = (props: AccordionProps) => {
  const { tabs, titles } = props
  const [activeTabs, setActiveTabs] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (tabs.length !== titles.length) {
      throw new Error('The number of tabs and titles must be the same')
    }
  }, [tabs, titles])

  const isActive = (tab: string) => activeTabs[tab] || false

  return (
    <ul className='w-full'>
      {titles.map((item, i) => (
        <li key={item}>
          <button
            className='w-full flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300'
            onClick={() =>
              setActiveTabs({
                ...activeTabs,
                [item]: !isActive(item),
              })
            }
          >
            <span>{item}</span>
            <span>{isActive(item) ? <i className='fa-solid fa-minus'></i> : <i className='fa-solid fa-plus'></i>}</span>
          </button>
          {isActive(item) && tabs[i]}
        </li>
      ))}
    </ul>
  )
}
