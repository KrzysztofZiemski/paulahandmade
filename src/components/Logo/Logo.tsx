import { makeStyles, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
const useStyles = makeStyles(theme => ({}))

// type DataQueary = {
//   file: {
//     publicURL: string
//   }
// }
const Logo = (props: any) => {
  // const data: DataQueary = useStaticQuery(graphql`
  //   {
  //     file(name: { eq: "paulaLogo_90" }) {
  //       publicURL
  //     }
  //   }
  // `)
  // const { file } = data

  return (
    <Typography variant="h6" {...props}>
      Paula Handmade
    </Typography>
  )
  // return <img src={file.publicURL} alt="Paula Handmade" />
}

export default Logo
