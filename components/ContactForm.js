"use client";
import React from "react";
import { ReactDOM } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styles from "@/app/contact/contact.module.css";
import axios from "axios";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input className={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const postData = (values, { setSubmitting }) => {
  setTimeout(async () => {
    // alert(JSON.stringify(values, null, 2));
    // TODO: send form data to api endpoint /api/sendDataHere
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({values}),
    });
    // console.log("Form data: ", values);
    setSubmitting(false);
  }, 400);
};

export default function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()
            .min(2, "Minimum of 2 characters required")
            .max(15, "Must be 15 characters or less")
            .matches(
              /^[A-Za-z]+$/g,
              "No digits or special charaters allowed only aplhabets"
            )
            .required("Required"),
          lastName: Yup.string()
            .trim()
            .min(2, "Minimum of 2 characters required")
            .max(20, "Must be 20 characters or less")
            .matches(
              /^[A-Za-z]+$/g,
              "No digits or special charaters allowed only aplhabets"
            )
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .matches(
              /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              "Enter a valid email address e.g john@doe.com"
            )
            .required("Required"),
        })}
        onSubmit={postData}
      >
        <Form className={styles.form}>
          <FormInput name="email" placeholder="Email Address" type="email" />
          <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
              <FormInput
                name="firstName"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className={styles.inputWrapper}>
              <FormInput name="lastName" placeholder="Last Name" type="text" />
            </div>
          </div>
          <label>
            By subscribing you are agreeing to{" "}
            <span className={styles.berryTreees}>Berry Treees</span>. You can
            unsubscribe from Berry Treees emails at any time by clicking the
            “Manage your Subscriptions” link in any of your emails.
          </label>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
