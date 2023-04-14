import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    // select จะไม่แสดงตอน ดึงข้อมูล ให้ไปฝั่ง clients เพราะขอมูลนี้มีความ sentitives
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
        sessionToken: { type: String, select: false },

    }
});

export const UserModel = mongoose.model('User', UserSchema);

// สร้าง method การทำงานของ model
export const getUser = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getUserById = (id: string) => UserModel.findById({ id });
export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save().then((user) => user.toObject()); // return a JavaScript object 
export const deleteUser = (id: string) => UserModel.findOneAndDelete({ _id:id });
export const updateUser = (id:string,values: Record<string, any>) => UserModel.findByIdAndUpdate(id,values);

