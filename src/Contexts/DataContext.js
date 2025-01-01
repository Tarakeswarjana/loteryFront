import React, { createContext, useState } from 'react'

const DATACONTEXT = createContext()
function DataContext({ children }) {
    const [isclickdownload, setisclickdownload] = useState(false)
    return (
        <DATACONTEXT.Provider value={{ isclickdownload, setisclickdownload }} >
            {children}
        </DATACONTEXT.Provider>
    )
}

export default DataContext
export { DATACONTEXT }