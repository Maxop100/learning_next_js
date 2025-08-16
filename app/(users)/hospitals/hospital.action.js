"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const createHospitalAction = async (formData) => {
  try {
    const data = Object.fromEntries(formData);
    const { name, city, state, department,year } = data;

    // Insert the new hospital into the database
    await db.execute(
      `INSERT INTO hospital (name, city, state, department, established_year) VALUES (?, ?, ?, ?, ?)`,
      [name, city, state, department, year]  // "year" from form goes into "established_year"
    );

    revalidatePath("/hospitals");

    return { success: true, message: "Hospital created successfully." };
  } catch (error) {
    console.error("Error creating hospital:", error);
    return { success: false, message: "Error creating hospital." };
  }
};
