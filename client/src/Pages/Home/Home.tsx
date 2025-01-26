import { useEffect, useState } from "react";
import { User } from "../../interfaces";
import { createUser, getAllUsers } from "../../services/apiService";
import Card from "../../components/Card/Card";

const initialUserState = { name: "", email: "", age: undefined }

const Home = () => {
    const [users, setUsers] = useState<User[]>([])
    const [newUser, setNewUser] = useState<User>(initialUserState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewUser((prevstate) => ({
            ...prevstate,
            [name]: value
        }));
    };

    const addNewUser = (user: User) => {
        let usersCopy = [...users]
        usersCopy.push(user)

        setUsers(usersCopy)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newUser.name && newUser.email && newUser.age && newUser.age > 0) {
            const user = await createUser(newUser)
            addNewUser(user)
            setNewUser(initialUserState);
        }
    };

    useEffect(() => {
        getAllUsers()
            .then((users) => setUsers(users))
            .catch((error) => console.error(error))
    }, []);

    const formFields = [
        { id: "name", label: "Nombre", type: "text", name: "name", placeholder: "Ej: Leila Salguero" },
        { id: "email", label: "Email", type: "email", name: "email", placeholder: "Ej: leiisalguero@gmail.com" },
        { id: "age", label: "Edad", type: "number", name: "age", placeholder: "Ej: 24" },
    ];

    return (
        <section className="container my-4 w-100 h-100">
            <div className="row">
                <div className="col-md-3">
                    <h2 className="text-center mb-4 text-primary">Crear Usuario</h2>
                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        {formFields.map((field) => (
                            <div className="mb-3" key={field.id}>
                                <label htmlFor={field.id} className="form-label">{field.label}</label>
                                <input
                                    className="form-control"
                                    value={newUser[field.name as keyof User]}
                                    onChange={handleChange}
                                    {...field}
                                    required
                                />
                            </div>
                        ))}
                        <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                    </form>
                </div>

                <div className="col-md-9">
                    <h1 className="text-center mb-4 text-primary">Usuarios</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {users.length ? (
                            users.map((user) => (
                                <div key={user.id} className="col-1">
                                    <div className="card shadow-lg border-light rounded-3">
                                        <Card user={user} />
                                    </div>
                                </div>
                            )))
                            : <p className="text-center lead w-100">Ups! Aún no hay usuarios registrados</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;