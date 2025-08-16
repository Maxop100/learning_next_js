"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (name, email, message) => {
  try {
    console.log(name, email, message);

    await db.execute(
      `INSERT INTO contact_form(u_name,email,message) VALUES (?, ?, ?)`,
      [name, email, message]
    );

    // If you want redirect:
    redirect("/");

    // Or if you want response back instead of redirect:
    // return { success: true, message: "Form submitted successfully" };

  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;

    console.log("server action: ", error);
    return { success: false, message: "Error while submitting" };
  }
};
