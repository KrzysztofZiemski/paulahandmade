import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core"
import React from "react"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { Link as GatsbyLink } from "gatsby"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "red",
  },
  actions: {
    justifyContent: "flex-end",
    "& a": {
      color: theme.palette.primary.main,
    },
  },
  header: {
    "& .MuiCardHeader-subheader": {
      color: theme.palette.primary.main,
    },
  },
}))

interface ProductItemProps {}

const ProductItem = ({}: ProductItemProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Poziomkowa przyjemność"
        subheader="szydełko | placki | katarakta"
      />
      <CardMedia
        className={classes.media}

        // image="https://www.facebook.com/photo.php?fbid=4889475684414756&set=p.4889475684414756&type=3"
        // title="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Tuzinowe kolczyki koralikowe o różnych odcieniach i barwach świetnie
          sprawdzają się jako ozdoba uszu
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tuzinowe kolczyki koralikowe o różnych odcieniach i barwach świetnie
          sprawdzają się jako ozdoba uszu
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tuzinowe kolczyki koralikowe o różnych odcieniach i barwach świetnie
          sprawdzają się jako ozdoba uszu
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <Link component={GatsbyLink} to="#">
          Zobacz
        </Link>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>         
        </CardContent>
      </Collapse> */}
    </Card>
  )
}

export default ProductItem
