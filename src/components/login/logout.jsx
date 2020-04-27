import app from "../../fire";


async function Logout(history) {
    try {
        await app
            .auth()
            .signOut();
            sessionStorage.clear();
        history.push("/login");
    } catch (error) {
    }
}

export default Logout;