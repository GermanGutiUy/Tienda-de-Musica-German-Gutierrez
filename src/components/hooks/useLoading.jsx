const useLoading = () => {
    const [isLoading,setIsLoading] = useState (false)

    //mostrar loading
    const showLoading = () => {
        setIsLoading(true)
    }

    //ocultar loading
    const hideLoading = () => {
        setIsLoading (false)
    }

    //pantalla de carga
    const loadingScreen = <div> Catgando...</div>

    return { isLoading, showLoading, hideLoading, loadingScreen }


}

export default useLoading