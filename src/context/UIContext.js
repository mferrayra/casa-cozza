import { createContext, useState } from 'react'

export const UIContext = createContext()

export const UIContextProvider = ({children}) => {

	const [enableNavBar, setEnableNavBar] = useState(true)


	return (
		<UIContext.Provider value={{enableNavBar, setEnableNavBar}}>
			{children}
		</UIContext.Provider>
	)
}