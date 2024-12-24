import '../assets/sass/Error.scss';

function ErrorRoute() {
    return (
        <div className="error-content">
            <div className='error-content-description'>
                <p>Opsss!, Rota não encontrada, favor voltar a página anterior.</p>
                <h1><b>404</b></h1>
                <h4>Not Found!</h4>
            </div>
        </div>
    )
}

export default ErrorRoute;