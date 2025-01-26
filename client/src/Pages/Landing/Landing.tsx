import { Link } from "react-router-dom";
import managmentImage from "./../../assets/managment.svg"

const Landing = () => {
    return (
        <section className="container-fluid bg-light d-flex align-items-center py-5 h-100 w-100">
            <div className="container d-flex justify-content-between pt-5">
                <div className="col-lg-5">
                    <h2 className="display-4 fw-bold text-primary">
                        Gestiona usuarios de forma eficiente
                    </h2>
                    <p className="mt-3 lead text-muted">
                        Organiza, crea y visualiza usuarios en tiempo real con una interfaz fácil de usar.
                    </p>
                    <Link to='/home' className="btn btn-primary btn-lg mt-4">
                        Conoce más
                    </Link>
                </div>

                <div className="col-lg-6 text-center">
                    <img
                        src={managmentImage}
                        alt="Plataforma tecnológica"
                        className="img-fluid rounded shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Landing;