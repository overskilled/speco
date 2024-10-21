import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from '@/firebase/config';
import { doc, getDoc, setDoc } from "firebase/firestore";


const register = async (userData) => {
    try {
        // Validate email and password (basic validation)
        if (!userData.email || !userData.password) {
            throw new Error("Email and password are required.");
        }

        // Create Auth user with email and password
        const newUser = await createUserWithEmailAndPassword(auth, userData.email, userData.password);

        // Set user document data
        const userDoc = {
            uid: newUser.user.uid,
            name: userData.name,
            email: userData.email,
            section: userData.section,
            class: userData.class,
            speciality: userData.speciality || '',
            profilePicUrl: "",  // Placeholder or default URL for profile picture
            createdAt: Date.now(),
        };

        // Save user document in Firestore Users collection
        const userRef = doc(firestore, 'users', newUser.user.uid);
        await setDoc(userRef, userDoc);

        if (newUser) {
            localStorage.setItem('user', JSON.stringify(userDoc))
        }

        // Return the user document
        return userDoc;

    } catch (error) {
        // Handle and throw the error for the caller to handle
        console.error("Error during user registration:", error.message);
        throw new Error(error.message || "Registration failed.");
    }
};

// Login user from Authentification and fetch user related data from Firestore
const login = async (userData) => {
    try {
        const userInfo = await signInWithEmailAndPassword(auth, inputs.email, inputs.password);

        if (userInfo && userInfo.user && userInfo.user.uid) {
            const docRef = doc(firestore, "users", userInfo.user.uid);
            const docSnapShot = await getDoc(docRef);

            if (docSnapShot.exists()) {
                const data = { uid: docSnapShot.id, ...docSnapShot.data() };
                // localStorage.setItem("user", JSON.stringify(data));
            } else {
                throw new Error("No such user found");
            }
        }

    } catch (error) {
        // Handle and throw the error for the caller to handle
        console.error("Error during user login:", error.message);
        throw new Error(error.message || "Logi failed.");
    }
};


// Logout user from firebase and delete form localstorage
const logout = async (userData) => {
    try {
        await signOut(auth)
        // localStorage.removeItem("user")
    } catch (error) {
        // Handle and throw the error for the caller to handle
        console.error("Error Logout:", error.message);
        throw new Error(error.message || "logout failed.");
    }
};

const authService = {
    register,
    login,
    logout
};

export default authService;
