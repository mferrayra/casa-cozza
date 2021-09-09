/*UI context y UI provider*/
import { createContext, useState } from 'react'

export const UIContext = createContext()

export const UIContextProvider = ({children}) => {

	const [enableNavBar, setEnableNavBar] = useState(true)
	const [email, setEmail] = useState("")

	return (
		<UIContext.Provider value={{enableNavBar, setEnableNavBar, email, setEmail}}>
			{children}
		</UIContext.Provider>
	)
}