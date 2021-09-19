import { InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PropTypes from "prop-types"
import * as React from "react"
import { useState } from "react"
import "../styles/normalize.css"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import LeftAndMobileNavigation from "./LeftAndMobileNavigation/LeftAndMobileNavigation"
import MainContainer from "../components/MainContainer/MainContainer"
import Providers from "./Providers"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mainWithNav: {
    display: "flex",
    flexGrow: 1,
  },
}))

const Layout = ({
  children,
  hideNav = false,
}: {
  children: React.ReactNode
  hideNav?: boolean
}) => {
  const classes = useStyles()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleToggleMenu = () => setMenuIsOpen(prev => !prev)
  const closeMenu = () => setMenuIsOpen(false)

  return (
    <Providers>
      <div className={classes.root}>
        <Header onClick={handleToggleMenu} />
        <div className={classes.mainWithNav}>
          {!hideNav && (
            <LeftAndMobileNavigation open={menuIsOpen} onClose={closeMenu} />
          )}
          <MainContainer>{children}</MainContainer>
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
