import React from 'react'
import useMisc from '../../Hooks/useMisc'

const Header = () => {
    const [{misc}] = useMisc()
    return(
        <div className="Header">
            <div className="Title">
                <h2>{misc.title}</h2>
            </div>
            <div className="Sub-Nav">
                {misc.subNav}
            </div>
        </div>
    )
}
    

export default Header