import { InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { useState } from "react"
import "../styles/normalize.css"
import CustomTextField from "./fields/CustomTextField"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import LeftAndMobileNavigation from "./LeftAndMobileNavigation/LeftAndMobileNavigation"
import Providers from "./Providers"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  mainWithNav: {
    display: "flex",
    flexGrow: 1,
    minHeight: "200vh",
  },
  main: {},
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
        <div className={classes.mainWithNav}>
          <LeftAndMobileNavigation open={menuIsOpen} onClose={closeMenu} />
          <main className={classes.main}>{children}</main>
        </div>

        <Footer />
      </div>
    </Providers>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
