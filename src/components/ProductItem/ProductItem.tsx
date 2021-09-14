import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"
import GatsbyImage from "gatsby-image"
import Img from "gatsby-image"
import React from "react"
import { Content } from "../../types/datoCmsProduct"
import { Tag } from "../../types/Tag"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "red",
    order: -1,
  },
  actions: {
    justifyContent: "flex-end",
    marginTop: "auto",
    "& a": {
      color: theme.palette.primary.main,
      "&::active": {
        color: theme.palette.primary.main,
      },
      "&:link": {
        textDecoration: "none",
      },
    },
  },
  header: {
    "& .MuiCardHeader-subheader": {
      color: theme.palette.primary.main,
    },
  },
  cardContent: {
    // flexGrow: 1,
  },
  tag: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
    "&:first-child": {
      paddingLeft: 0,
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      height: "100%",
      width: 1,
      top: 0,
      right: 0,
      backgroundColor: theme.palette.primary.main,
    },
    "&:last-child": {
      "&::after": {
        display: "none",
      },
    },
  },
}))

interface ProductItemProps {
  title: string
  fluidImage: GatsbyImage
  imageAlt: string
  link: string
  tags: Tag[]
  description: Content[]
}

const ProductItem = ({
  title,
  fluidImage,
  imageAlt,
  link,
  description,
  tags,
}: ProductItemProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const subheader = tags.map(tag => (
    <span className={classes.tag} key={tag.id}>
      {tag.tag}
    </span>
  ))
  return (
    <Card className={classes.root}>
      <Img
        // @ts-ignore
        fluid={fluidImage}
        style={{ height: 300 }}
        // objectFit="cover"
        // objectPosition="50% 50%"
        alt=""
      />
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
        title={title}
        subheader={subheader}
      />
      <CardContent>
        {/* <HTMLProductContent html={content} /> */}
        {/* <Typography variant="body2" color="textSecondary" component="p">
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
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <Link component={GatsbyLink} to={link}>
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
