import React, { createContext, useState,  } from 'react';
import type {ReactNode, Dispatch, SetStateAction} from 'react';

type Props = {
    children: React.ReactNode
}

type NavbarContextType = [boolean, Dispatch<SetStateAction<boolean>>]

export const NavbarContext = createContext<NavbarContextType | undefined >(undefined)


const NavContext: React.FC<Props> = ({children}) => {

  const [navOpen , setNavOpen] = useState<boolean>(false)
  return (
    <div>
     <NavbarContext.Provider value = {[navOpen , setNavOpen]}>
      {children}
     </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
