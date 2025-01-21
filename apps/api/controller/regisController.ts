import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const randomRef = (length:number): string => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let ref = " "
    for (let i = 0; i<length ; i++ ){
        const randomIndex = Math.floor(Math.random()*char.length)
        ref += char[randomIndex]
    }
    return ref
}

export const regisUser = async (req:Request, res:Response) => {
    const{
        firstName,
        lastName,
        email,
        password
    } = req.body

    try {
        const hashPass = await bcrypt.hash(password,10)
        const ref = randomRef(5)
        const user = await prisma.user.create({
            data : { 
                firstName,
                lastName,
                email,
                password : hashPass,
                codeReferral: ref
            }
        })
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}