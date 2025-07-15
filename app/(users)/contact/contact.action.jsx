"use server";



import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (previousState,formData) => {
  //   const fullName = formData.get("fullName");
  //   const email = formData.get("email");
  //   const message = formData.get("message");
  

  try {
    const { name, email, message } = Object.fromEntries(formData.entries());
    console.log(name, email, message);

    await db.execute(
      `insert into contact_form(u_name,email,message) values (?, ? , ?)`,
      [name, email, message]
    );
    //return { success: true, message: "form submitted successfully" };
    redirect("/");
    
  } catch (error) {
    if(error.message == "NEXT_REDIRECT") throw  error;

    console.log("server action: ", error);

    return { success: false, message: "error while submitting" };
  }
};