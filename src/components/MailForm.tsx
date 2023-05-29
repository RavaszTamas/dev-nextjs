'use client';
import React, {useState} from "react";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import {Visby} from "@/assets/fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import "./styles/GradientBorder.css";

export default function MailForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false)
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setSending(true)
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

            const {error} = await res.json();
            if (error) {
                console.log(error);
                return;
            }
            console.log(fullname, email, message);
            setSending(false)
        }
    };


    return <div className="ml-[10%] w-7/12">
        <div>
            <SecondaryTitle align="left">Contact us</SecondaryTitle>
        </div>
        <form className="mt-8 w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="name">
                    Name
                </label>
                <input
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value);
                    }}
                    className="border-gradient-to-r shadow appearance-none rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Jane Doe"/>
            </div>
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="border-gradient-to-r shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" placeholder="Jane@domain.com"/>
            </div>
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="message">
                    Message
                </label>
                <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className="border-gradient-to-r shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    id="message" placeholder="Type your query here..."/>
            </div>
            <OutlinedButton disabled={sending} type="submit">SEND</OutlinedButton>
        </form>

    </div>
}
