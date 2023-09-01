import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Success from "../../../../components/Success";

export async function POST(req) {
    // // Get data submitted in request' body
    const {values} = await req.json();
    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;


    console.log("Values in api/contact: ", firstName);

    try {
        await connectDB();
        await Contact.create({firstName,lastName,email})
        console.log("add contact");

        return console.log("Success");

    } catch (error) {
        // if (error instanceof mongoose.Error.ValidationError){
        //     let errorList = [];
        //     for (let e in error.errors){
        //         errorList.push(e.message);
        //     }

        //     console.log("Mongoose error validation see array: ", errorList);
        // }

        // else {
            
        // }
        console.log("There is an error here.", error);
        return NextResponse.json(error)
        
    }

    console.log("after try catch");
}