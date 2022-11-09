import * as React from "react"
import {Link} from "gatsby"

const Layout = ({children}) => {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Bestiary</Link></li>
                    <li><Link to="/tracker">Tracker</Link></li>
                </ul>
            </nav>
            <main className="container mx-auto">
                {children}
            </main>
        </>
    )
}

export default Layout