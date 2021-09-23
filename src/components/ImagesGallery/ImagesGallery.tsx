import { Box, Grid, IconButton, makeStyles, Theme } from "@material-ui/core"
import React, { FC, useState } from "react"
import Img from "gatsby-image"
import { DatoCmsPhoto } from "../../types/datoCmsPhoto"
import ImageSlider from "../../components/ImageSlider/ImageSlider"

const useStyles = makeStyles((theme: Theme) => ({
  mainPhoto: {
    maxWith: "100%",
    height: "auto",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      borderRadius: "8px",
    },
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 246px)",
    },
  },
  photosContainer: {
    justifyContent: "flex-start",
    marginTop: theme.spacing(1),
    overflow: "auto",

    [theme.breakpoints.up("sm")]: {
      flexWrap: "wrap",
      paddingTop: theme.spacing(1),
      borderTop: "3px solid #f3f3f3",
    },
  },

  smallPhoto: {
    maxHeight: 70,
    width: 70,
    border: `3px solid ${theme.palette.common.white}`,
    [theme.breakpoints.up("sm")]: {
      width: 70,
      maxHeight: 70,
      marginRight: theme.spacing(1),
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
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  console.log("aaaaa", images[pickedImage].alt)
  return (
    <div {...props}>
      <div onClick={() => setSliderIsOpen(true)}>
        <Img
          fluid={images[pickedImage].fluid}
          alt={images[pickedImage].alt}
          className={classes.mainPhoto}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <Grid container className={classes.photosContainer}>
        {images.map((photo, index) => (
          <IconButton
            onClick={() => setPickedImage(index)}
            key={index}
            style={{ padding: 0 }}
          >
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
      <ImageSlider
        images={images}
        initialSlide={pickedImage}
        onClose={() => setSliderIsOpen(false)}
        show={sliderIsOpen}
      />
    </div>
  )
}

export default ImagesGallery
