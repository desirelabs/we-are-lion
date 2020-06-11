import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./ui/Button";
import { Snackbar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  field: {
    minWidth: "100%",
    marginBottom: 15
  }
});

export const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [alert, setAlert] = useState({ message: null, type: null });

  const classes = useStyles();

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleClear = () =>
    setData({
      name: "",
      email: "",
      message: ""
    });

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => {
        setAlert({ message: "Message envoyé avec succès !", type: "success" });
        handleClear();
      })
      .catch(error =>
        setAlert({ message: "Un problème est survenu.", type: "error" })
      )
      .finally(() => setTimeout(() => handleClose(), 6000));

    e.preventDefault();
  };

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const { name, email, message } = data;

  const handleClose = () => setAlert({ message: null, type: "success" });

  return (
    <>
      {alert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={!!alert.message}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>
      )}
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />{" "}
        <TextField
          type="text"
          name="name"
          value={name}
          label="Nom"
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          required
          className={classes.field}
        />
        <TextField
          type="email"
          name="email"
          value={email}
          label="E-mail"
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          required
          className={classes.field}
        />
        <TextField
          name="message"
          value={message}
          label="Message"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          onChange={handleChange}
          required
          className={classes.field}
        />{" "}
        <Button
          type="submit"
          className="g-recaptcha"
          data-sitekey="6Lcue_wUAAAAADc9KCpXvltQ2z7_X6dZQ7BZnhqP"
          data-callback="handleSubmit"
          data-action="submit"
          size="large"
          fluid={true}
        >
          Envoyer
        </Button>
      </form>
    </>
  );
};
