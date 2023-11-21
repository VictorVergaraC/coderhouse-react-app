import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="p-3 bg-dark">
            <div className="d-flex justify-content-between">
                <div>
                    <Link to="/">
                        <h3 className="text-white">Home</h3>
                    </Link>
                </div>
                <div className="d-flex gap-3">
                    <Link to="/characters/alive">
                        <button>Vivos</button>
                    </Link>
                    <Link to="/characters/dead">
                        <button>Muertos</button>
                    </Link>
                    <Link to="/characters/unknown">
                        <button>Desconocido</button>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
