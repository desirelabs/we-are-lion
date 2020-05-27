import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import ReactGA from "react-ga";
import { Banner } from "./Banner";
import { CloseLink } from "./CloseLink";
import { Button } from "../ui/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: 430,
      backgroundColor: theme.palette.background.paper,
      border: "none",
      borderRadius: 4,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4)
    }
  })
);

type Consent = true | false | undefined;

export const CookieBanner = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [consent, setConsent] = React.useState<string | undefined>(undefined);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCookie = () => Cookies.get("consent");

  const setCookie = (value: "agree" | "disagree") =>
    Cookies.set("consent", value, { expires: 396 });

  const disagree = () => {
    setConsent("disagree");
    setCookie("disagree");
  };

  const agree = () => {
    setConsent("agree");
    setCookie("agree");
  };

  const checkCookie = () => {
    const currentCookie = getCookie();
    if (currentCookie === undefined) {
      setConsent("unset");
    } else {
      setConsent(currentCookie);
    }
  };

  const handleCloseBanner = () => {
    agree();
  };

  useEffect(() => {
    checkCookie();
  }, [consent]);

  return (
    consent === "unset" && (
      <Banner>
        <p>
          Ce site utilise Google Analytics. En continuant à naviguer, vous nous
          autorisez à déposer un cookie à des fins de mesure d'audience.{" "}
          <Button type="button" onClick={handleOpen}>
            En savoir plus
          </Button>
        </p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <h1>Les cookies Google Analytics</h1>
            <p>
              Ce site utilise des cookies de Google Analytics. Ces cookies nous
              aident à identifier le contenu qui vous intéresse le plus ainsi
              qu'à repérer certains dysfonctionnements. Vos données de
              navigations sur ce site sont envoyées à Google Inc.
            </p>
            <div>
              <Button
                variant={"secondary"}
                size={"small"}
                id="ga-cancel-button"
                name="ga-cancel"
                onClick={() => disagree()}
              >
                S'opposer
              </Button>{" "}
              <Button
                variant={"primary"}
                size={"small"}
                id="ga-confirm-button"
                name="ga-confirm"
                onClick={() => agree()}
              >
                Accepter
              </Button>
            </div>
          </div>
        </Modal>
        <CloseLink onClick={() => handleCloseBanner()}>
          <CloseIcon />
        </CloseLink>
      </Banner>
    )
  );
};
