import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { useRouter } from 'next/router'

type SidebarDrawerContextData = UseDisclosureReturn

interface IProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: IProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
