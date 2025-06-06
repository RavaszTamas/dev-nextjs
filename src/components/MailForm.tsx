"use client";
import React, { FormEvent, useState } from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import "./styles/GradientBorder.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MailForm() {
  const router = useRouter()
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const handleValidation = () => {
    let tempErrors: {
      fullName: boolean;
      email: boolean;
      message: boolean;
    } = {
      message: false,
      email: false,
      fullName: false,
    };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors.fullName = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors.message = true;
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setSending(true);
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      } else {
        setEmail("");
        setMessage("");
        setFullname("");
        router.push("/thank-you")
      }
      console.log(fullname, email, message);
      setSending(false);
    } else {
      alert("Invalid form");
    }
  };

  return (
    <div className="px-4 md:ml-[10%] md:w-7/12 md:px-0">
      <div>
        <SecondaryTitle align="left">Contact us</SecondaryTitle>
      </div>
      <form className="mt-8 w-full" onSubmit={handleSubmit}>
        <div className="mb-4 p-1">
          <label className={`mb-2 block pl-1 font-roboto text-lg text-primary`} htmlFor="name">
            Name
          </label>
          <input
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full appearance-none px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            type="text"
            placeholder="Jane Doe"
          />
        </div>
        <div className="mb-4 p-1">
          <label className={`mb-2 block pl-1 font-roboto text-lg text-primary`} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full appearance-none rounded px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            placeholder="Jane@domain.com"
          />
        </div>
        <div className="mb-4 p-1">
          <label className={`mb-2 block pl-1 font-roboto text-lg text-primary`} htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="border-gradient-to-r focus:shadow-outline w-full resize-none appearance-none rounded px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="message"
            placeholder="Type your query here..."
          />
        </div>
        <Button disabled={sending} type="submit" className="px-24">
          SEND
        </Button>
      </form>
    </div>
  );
}
