import '../ButtonComponent/Button.css';

function Button(propiedades) {
    return (<button 
    className= {propiedades.secundario ? "secundario" : "primario"}
    type="button"
    onClick={propiedades.onClick}
    >
            { propiedades.titulo }
        </button>
    )
}

  export default Button;