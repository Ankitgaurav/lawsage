import User from "../models/UserSchema.js"

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({ success: true, message: "successfully updated", data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to update" });
    }
};


export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(
            id,
            
        );

        res.status(200).json({ success: true, message: "successfully deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to delete" });
    }
};


export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({ success: true, message: "user found", data: user });
    } catch (error) {

        res.status(404).json({ success: false, message: "no user found" });
    }
};

export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({ success: true, message: "users found", data: users });
    } catch (error) {
        res.status(404).json({ success: false, message: "not found" });
    }
};