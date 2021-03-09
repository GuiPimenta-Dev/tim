import React,{useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    
    const [user,setUser] = useState({
        matricula: '',
        senha: '',
    });

    const [info,setInfo] = useState({
        cod_cliente: '',
        cnpj: '',
        motivo_first: '',
        motivo_second: '',
        motivo_third: '',
        cod_fatura:'',
        vencimento:'',

    })

    return (
        <AuthContext.Provider value= {{ user, setUser ,info , setInfo }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);

