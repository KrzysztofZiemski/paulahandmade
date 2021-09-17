import { Grid, IconButton, makeStyles, Theme } from "@material-ui/core"
import React, { FC, useState } from "react"
import Img from "gatsby-image"
import { DatoCmsPhoto } from "../../types/datoCmsPhoto"

const useStyles = makeStyles((theme: Theme) => ({
  mainPhoto: {
    with: "100%",
  },
  photosContainer: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: theme.spacing(1),
  },

  smallPhoto: {
    maxHeight: 90,
    width: 90,
    border: `3px solid ${theme.palette.common.white}`,
    [theme.breakpoints.up("sm")]: {
      width: 130,
      maxHeight: 130,
    },
    [theme.breakpoints.up("sm")]: {
      width: 130,
      maxHeight: 130,
    },
  },
  activeImage: {
    border: `3px solid ${"pink"}`,
  },
}))

interface ImagesGalleryProps extends React.HTMLProps<HTMLDivElement> {
  images: DatoCmsPhoto[]
  defaultPicked?: number
}

const ImagesGallery: FC<ImagesGalleryProps> = ({
  images,
  defaultPicked = 0,
  ...props
}) => {
  const classes = useStyles()
  const [pickedImage, setPickedImage] = useState(defaultPicked)
  return (
    <div {...props}>
      <Img
        fluid={images[pickedImage].fluid}
        alt={images[pickedImage].alt}
        className={classes.mainPhoto}
      />
      <Grid container className={classes.photosContainer}>
        {images.map((photo, index) => (
          <IconButton onClick={() => setPickedImage(index)} key={index}>
            <Img
              fluid={photo.fluid}
              alt={photo.alt}
              className={`${classes.smallPhoto} ${
                pickedImage === index ? classes.activeImage : ""
              }`}
            />
          </IconButton>
        ))}
      </Grid>
    </div>
  )
}

export default ImagesGallery
