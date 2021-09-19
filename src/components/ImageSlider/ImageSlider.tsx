import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import { DatoCmsPhoto } from "../../types/datoCmsPhoto"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Box, IconButton, Grid } from "@material-ui/core"
import { A11y, Navigation, Pagination, Scrollbar, Zoom } from "swiper"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"
import useFullscreenStatus from "../../hooks/useFullscreenStatus"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(0,0,0,.8)",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 10000,
  },
  closeIcon: {
    position: "fixed",
    color: "white",
    top: 0,
    right: 0,
    cursor: "pointer",
    zIndex: 100,
    "& svg": { fontSize: "3.5rem" },
  },
  imageContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: { height: "100vh" },
  slider: {
    ".swiper-button-next": {
      color: "red",
    },
  },
}))
interface ImageSliderProps {
  images: DatoCmsPhoto[]
  onClose: () => void
  show: boolean
  initialSlide?: number
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({
  images,
  show,
  initialSlide,
  onClose,
}) => {
  const classes = useStyles()
  const maximizableElement = React.useRef(null)
  let isFullscreen, setIsFullscreen
  let errorMessage
  try {
    ;[isFullscreen, setIsFullscreen] = useFullscreenStatus(document.body)
  } catch (e) {
    errorMessage = "Fullscreen not supported"
    isFullscreen = false
    setIsFullscreen = undefined
  }
  useEffect(() => {
    try {
      //   document?.body?.requestFullscreen()
    } catch (err) {
      console.error(err)
    }
  }, [])
  if (!show) return null
  return (
    <Grid className={classes.root} ref={maximizableElement}>
      <IconButton onClick={onClose} className={classes.closeIcon}>
        <CloseIcon />
      </IconButton>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={initialSlide}
      >
        {images.map((el, index) => (
          <SwiperSlide className={classes.slider} key={index}>
            <Box className={classes.imageContainer}>
              <img
                src={el.fluid.src}
                srcSet={el.fluid.srcSet}
                alt={el.alt}
                className={classes.image}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  )
}

export default ImageSlider
