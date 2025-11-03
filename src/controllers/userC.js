import db from "../config/db.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY || "2025jwtdev";

export const getUser= async (req,res)=>{
    try{
        const [users]= await db.query("SELECT * FROM user")
        res.status(200).json({msg:"usuarios" , data:users})
        const userId=req.user.id;
        console.log("ID del usuario autenticado:", userId);

    }
    catch(err){
        res.status(500).json({msg:"error del servidor", err})
    }
}

export const register= async (req,res)=>{
    const {name,email,password}= req.body;
    try{
        const[existinguser]= await db.query("SELECT * FROM user WHERE email= ?", [email]);
        if(existinguser.length>0){
            return res.status(400).json({msg:"el usuario ya existe"})
        }else{
        const hashedPassword= await bcrypt.hash(password,10);
        await db.query("INSERT INTO user (name,email,password) VALUES (?,?,?)", [name,email,hashedPassword]);
        res.status(201).json({msg:"usuario registrado con exito"});
        }
    }
    catch(err){
        res.status(500).json({msg:"error en el servidor",err})
    }
}

export const login= async (req,res)=>{
    const {email,password}=req.body;
    try{
        const[existinguser]= await db.query("SELECT * FROM user WHERE email= ?", [email]);
        if(existinguser.length===0){
            return res.status(400).json({msg:"este usuario no existe"})
        }
        const user=existinguser[0];
        const ismacht= await bcrypt.compare(password,user.password)
        if(!ismacht){
            return res.status(400).json({msg:"contraseña incorrecta"})
        }
    const token = jwt.sign({ user: { id: user.iduser, name: user.name, email: user.email } }
        ,SECRET_KEY,{ expiresIn: "1h" });

        res.status(200).json({msg: "login exitoso",token,});
    }
    catch(err){
        res.status(500).json({msg:"error en el servidor",err})
    }
}




