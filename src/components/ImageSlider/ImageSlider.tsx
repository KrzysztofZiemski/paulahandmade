import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import { DatoCmsPhoto } from "../../types/datoCmsPhoto"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "./ImageSlider.css"
import { Box, IconButton, Grid } from "@material-ui/core"
import { A11y, Navigation, Pagination, Scrollbar, Zoom } from "swiper"
import { makeStyles } from "@material-ui/styles"
import CloseIcon from "@material-ui/icons/Close"

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
    width: "100%",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    maxHeight: "100vh",
    maxWidth: "100%",
  },
  slider: {
    alignSelf: "center",
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
  if (!show) return null
  const classes = useStyles()
  const rootEl = useRef<any>(null)

  const handleClose = async () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen()
    }
    onClose()
  }
  useEffect(() => {
    if (!rootEl.current) return
    if (document.fullscreenEnabled) {
      rootEl.current.requestFullscreen()
    }
  }, [rootEl])

  return (
    <Grid className={classes.root} ref={rootEl}>
      <IconButton onClick={handleClose} className={classes.closeIcon}>
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
                alt={el.alt || ""}
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
