import React from "react"
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import PinterestIcon from "@material-ui/icons/Pinterest"
import { Link } from "gatsby"
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
    // width: "50%",
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
        <Link to="#" className={classes.link}>
          <FacebookIcon className={classes.icon} />
        </Link>
        <Link to="#" className={classes.link}>
          <PinterestIcon className={classes.icon} />
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer
