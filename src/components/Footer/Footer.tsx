import React from "react"
import {
  Box,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import PinterestIcon from "@material-ui/icons/Pinterest"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      paddingRight: "20%",
    },
  },
  paragraph: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: 700,
    fontFamily: "Lato",
  },
  socialContainer: {
    paddingLeft: "5%",
    display: "flex",
  },
  icon: {
    fontSize: 40,
  },
  link: {
    marginLeft: 20,
    color: "inherit",
  },
}))

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const classes = useStyles()

  return (
    <Grid component="footer" className={classes.root} container>
      <Typography className={classes.paragraph}>Znajdź mnie</Typography>
      <Grid className={classes.socialContainer}>
        <Link
          color="inherit"
          target="_blank"
          href="https://www.facebook.com/paula.z.handmade/"
          className={classes.link}
        >
          <FacebookIcon className={classes.icon} />
        </Link>
        <Link color="inherit" href="#" target="_blank" className={classes.link}>
          <PinterestIcon className={classes.icon} />
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer
