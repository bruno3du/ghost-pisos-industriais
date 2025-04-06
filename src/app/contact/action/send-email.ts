"use server"

import { email } from "@/provider/email";
import { SendEmailContactInput } from "@/provider/email/email.dto";

export const sendEmail = async (input: SendEmailContactInput) => {
    try {
        const value = await email.sendEmailContact(input)

        console.log(value);

        return {
            message: "success",
            error: undefined
        }
    } catch (error) {
        return {
            message: undefined,
            error: error
        }
    }
}