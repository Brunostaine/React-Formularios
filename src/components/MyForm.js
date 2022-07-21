import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
    // Controlled inputs
    //3  Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState("");
    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    };

    // console.log(name)
    // console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        // Validação
        // Envio

        // Limpa form
        setName("");
        setEmail("");
        setBio("")
    };

    return (
        <div>
            {/* 5 envio de form */}
            {/* 1 criação de form */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>

                {/* Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    {/* Simplificação de manipulação  de state */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* 8 Text area */}

                <label>
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuário"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></textarea>
                </label>

                {/* 9 select */}
                <label>
                    <span>Função no Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>   
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;
