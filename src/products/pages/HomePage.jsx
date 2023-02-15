import { useNavigate } from "react-router-dom"

export const HomePage = () => {

    const navigate = useNavigate();

    const onGetIn = () => {
        navigate('/products', {
            replace: true
        })
    }

  return (
    <div className="container">
        <h3>Prueba Técnica Mercado Libre</h3>
        <p>Esta es la prueba técnica para Mercado Libre sobre React </p>
        <p>Ingeniero Jamer Rafael Rodríguez Vergara </p>

        <button 
            className="btn btn-outline-primary"
            onClick={ onGetIn }
        >
            Get in
        </button>
    </div>
  )
}
