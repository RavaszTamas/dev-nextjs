import SecondaryTitle from "@/components/SecondaryTitle";
import React from "react";
import {Visby} from "@/assets/fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import "./MailForm.css";

export default function MailForm() {


    return <div className="ml-[10%] w-7/12">
        <div>
            <SecondaryTitle align="left">Contact us</SecondaryTitle>
        </div>
        <form className="mt-8 w-full">
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="name">
                    Name
                </label>
                <input
                    className="white-grad shadow appearance-none rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Jane Doe"/>
            </div>
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="email">
                    Email
                </label>
                <input
                    className="white-grad shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Jane@domain.com"/>
            </div>
            <div className="mb-4">
                <label className={`block text-primaryWhite text-lg mb-2 ${Visby.className} pl-1`} htmlFor="message">
                    Message
                </label>
                <textarea
                    rows={4}
                    className="white-grad shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                    id="message" placeholder="Type your query here..."/>
            </div>
            <OutlinedButton type="submit">SEND</OutlinedButton>
        </form>

    </div>
}
