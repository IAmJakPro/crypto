import React, { useState } from "react";
import "./waitlist.css";

const WaitlistForm = () => {
  function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const submit = async (e) => {
      e.preventDefault();
      let response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      if (response.ok) {
        setHasSubmitted(true);
      } else {
        setError(await response.text());
      }
    };

    if (hasSubmitted) {
      return (
        <div className="form-wrapper">
          <span className="subtitle">
            Thanks for signing up! We will be in touch soon.
          </span>
        </div>
      );
    }

    return (
      <form className="" onSubmit={submit}>
        <div class="mt-6 mx-auto flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-0 flex-auto rounded-md border bg-[#FCFDFE] px-3.5 py-2 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Join Waitlist</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    );
  }

  return (
    <div className="container">
      <div className="text-center">
        {/* <img width="154" height="27" src="/logo.svg" alt="Logo" /> */}
        <h1 className="mb-5 font-bold leading-tight text-dark sm:text-[42px] lg:text-[52px] xl:text-[62px]">
          Join Our Waitlist
        </h1>
        <p className="mb-10 mx-auto max-w-[500px] text-base text-body-color text-center">
          Be the first to get access to our amazing crypto exchange platform!
          Sign up now to secure your spot on our waitlist and receive exciting
          updates and early access privileges.
        </p>
        <Form />
      </div>
    </div>
  );
};

export default WaitlistForm;
