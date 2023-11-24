import axios from 'axios'
import { loginFail, loginReq, loginSucess } from './userSlice'
export const Loginuser = async (user, dispatch) => {
    try {
        dispatch(loginReq())
        let email = user.email
        let password = user.pass
        console.log(password);
        const { data } = await axios.post("/api/v1/user/login", { email, password }, {
            headers: {
                "Content-Type": "application/json"
            },
        })

        console.log({ data });

        dispatch(loginSucess(data.user))
    } catch (err) {
        dispatch(loginFail(err.message))
    }
}