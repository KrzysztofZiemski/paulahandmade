import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { FunctionComponent } from "react"
import ReCAPTCHA from "react-google-recaptcha"

interface RecaptchaProps {
  onChange: (value: any) => void
  error: boolean | undefined
}

const Recaptcha: FunctionComponent<RecaptchaProps> = ({ onChange, error }) => {
  const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ReCAPTCHA sitekey={RECAPTCHA_KEY as string} onChange={onChange} />
      {error && (
        <Typography
          style={{
            color: "rgb(244, 67, 54)",
            fontSize: 12,
            margin: "4px 14px 0px 14px",
            alignSelf: "flex-start",
          }}
        >
          Zaznacz, że nie jesteś robotem
        </Typography>
      )}
    </Grid>
  )
}

export default Recaptcha
