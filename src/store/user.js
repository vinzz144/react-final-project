const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initState={
    name:'',login: false
}

export const login = newname=> {console.log(newname);
    localStorage.setItem('token','loggedin')
    localStorage.setItem('username','hactiv8')
    return {
        name: newname,
        type: LOGIN,
        login: true
    }
}


export const logout = () => {
    return {
        name: '',
        login: false,
        type: LOGOUT
    }
}

export default (state=initState, action)=>{
    switch(action.type){
        case LOGIN:
        case LOGOUT:
            return {
                name: action.name,
                login: action.login
            }
        default:
            return state;
    }
}