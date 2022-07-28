import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

import UserModal from "../models/userModal.js"

const secret = 'myPrivateKey'

export const signin = async (req, res) => {

  const { email, password } = req.body

  try {
    const oldUser = await UserModal.findOne({ email })

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" })

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" })
    console.log(token)

    res.status(200).json({ result: oldUser, token })
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" })
  }
};

export const signup = async (req, res) => {

  const { email, password, username, diary, personalData } = req.body
 

  try {
    const oldUser = await UserModal.findOne({ email })

    if (oldUser) return res.status(400).json({ message: "User already exists" })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await UserModal.create({ email, password: hashedPassword, username, diary, personalData })

    const token = jwt.sign( { email: result.email, id: result._id, diary: result.diary }, secret, { expiresIn: "1h" } )

    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
    
    console.log(error);
  }
};


export const updateUser = async (req, res) => {

  const { email, diary } = req.body



  try {
    const oldUser = await UserModal.findOne({ email })


    await UserModal.findOneAndUpdate({email},{diary: diary},{upsert: true})



    res.status(201).json({ message: "Updated data" })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
    
    console.log(error);
  }
};