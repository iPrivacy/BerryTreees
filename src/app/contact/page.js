import React from "react";
import { Inknut_Antiqua } from "next/font/google";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../../../components/ContactForm";

const inknut = Inknut_Antiqua({ subsets: ['latin'],weight: '500' })

export default function Page() {
  return (
    <div className= {inknut.className}>
      <main className={styles.mainWrapper} >
        <section className={styles.contentWrapper}>
          <div className={styles.formHeading}>
            <h1>Get in touch with us for<br/> more life...</h1>
            <h4>TD chembeni apparel/art est 2021</h4>
          </div>
          {/* <form className={styles.form}>
            <input type="email" id="email" name="email" placeholder="Email Address" className={styles.input} />
            <div className={styles.wrapper}>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" className={styles.input}/>
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" className={styles.input}/>
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
          </form> */}
          <ContactForm/>
        </section>
      </main>
    </div>
  );
}
