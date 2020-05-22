import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./Button";

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
  const [data, setDate] = useState({
    name: "",
    email: "",
    message: ""
  });

  const classes = useStyles();

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e =>
    setDate({ ...data, [e.target.name]: e.target.value });

  const { name, email, message } = data;

  return (
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
        className={classes.field}
      />
      <TextField
        type="email"
        name="email"
        value={email}
        label="Email"
        variant="outlined"
        color="secondary"
        onChange={handleChange}
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
        className={classes.field}
      />{" "}
      <Button type="submit">Envoyer</Button>
    </form>
  );
};
