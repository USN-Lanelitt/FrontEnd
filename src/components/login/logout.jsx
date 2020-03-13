import app from "../../fire";


async function Logout(history) {
    try {
        await app
            .auth()
            .signOut();
        history.push("/login");
    } catch (error) {
        alert("Logger ut");
    }
}

export default Logout;