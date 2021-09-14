/*UI context y UI provider*/
import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
	const [enableNavBar, setEnableNavBar] = useState(true)
	const [user, setUser] = useState(null)

	return (
		<AppContext.Provider value={{enableNavBar, setEnableNavBar, user, setUser}}>
			{children}
		</AppContext.Provider>
	)
}