import { InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { useState } from "react"
import "../styles/normalize.css"
import CustomTextField from "./fields/CustomTextField"
import Header from "./Header/Header"
import LeftNavigation from "./LeftNavigation/LeftNavigation"
import Providers from "./Providers"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  grow: {
    flexGrow: 1,
  },
}))

const Layout = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleToggleMenu = () => setMenuIsOpen(prev => !prev)
  const closeMenu = () => setMenuIsOpen(false)

  return (
    <Providers>
      <div className={classes.root}>
        <Header onClick={handleToggleMenu} />
        <div className={classes.grow}>
          <LeftNavigation open={menuIsOpen} onClose={closeMenu} />
          <main>{children}</main>
        </div>

        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Providers>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
