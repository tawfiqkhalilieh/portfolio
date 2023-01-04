import styles from "./contact.module.scss";
import Head from "next/head";
import { VMenuBar, useTypedText } from "../../utils";
import { MutableRefObject, useRef } from "react";
import sendEmail from "../../utils/sendEmail";
import toast, { Toaster } from "react-hot-toast";

const emailHandler = (
  name: MutableRefObject<null>,
  message: MutableRefObject<null>,
  email: MutableRefObject<null>
) => {
  // @ts-ignore
  const name_value = name.current.value,
    // @ts-ignore
    email_value = email.current.value,
    // @ts-ignore
    message_value = message.current.value;

  console.table({
    name: name_value,
    email: email_value,
    message: message_value,
  });
  // validate content
  function isEmailValid(email: string): boolean {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  const showToast = (mgs: string, success: boolean) => {
    return success
      ? toast(mgs, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {
            backgroundColor: "#1a1a1a",
            color: "#ffff",
          },
          className: "",

          // Custom Icon
          icon: "✅",

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        })
      : toast(mgs, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {
            backgroundColor: "#1a1a1a",
            color: "#ffff",
          },
          className: "",

          // Custom Icon
          icon: "❌",

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
  };

  if (
    isEmailValid(email_value) &&
    name_value.length > 2 &&
    message_value.length > 2
  ) {
    // send email
    try {
      sendEmail(name_value, email_value, message_value);
      showToast("Email Sent Successfully", true);
      // @ts-ignore
      [name.current.value, message.current.value, email.current.value] = [
        "",
        "",
        "",
      ];
    } catch (e) {
      showToast("Something went wrong", false);
    }
  } else {
    showToast("Please make sure you fill all the fields", false);
  }
};

const Contact = () => {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const typedTexts = [
    useTypedText("Name:", 150, 248),
    useTypedText("Email:", 200, 249),
    useTypedText("Messge:", 250, 249),
  ];

  return (
    <>
      <VMenuBar activeTab="Contact" />
      <div
        className={styles.contactContainer}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            emailHandler(name, email, message);
          }
        }}
      >
        <>
          <Toaster />
        </>
        <Head>
          <title>Contact</title>
        </Head>

        <div className={styles.aboutInfo}>
          <h2 className={styles.animated404}>
            {useTypedText("Contact Me:", 30, 100)}
          </h2>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            ref={name}
            required
          />
          <label htmlFor="text" className={styles.labelname}>
            <span className={styles.contentname}>{typedTexts[0]}</span>
          </label>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            ref={message}
            required
          />
          <label htmlFor="text" className={styles.labelname}>
            <span className={styles.contentname}>{typedTexts[1]}</span>
          </label>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            ref={email}
            required
          />
          <label htmlFor="text" className={styles.labelname}>
            <span className={styles.contentname}>{typedTexts[2]}</span>
          </label>
        </div>
        <br />
        <div onClick={() => emailHandler(name, email, message)}>
          <h3 className={styles.submitTip}>Click Enter To Send.</h3>
          <h3 className={styles.clickToSubmit}>Click To Send.</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
