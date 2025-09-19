//Arquivo de estilo  

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //Comentário dentro de função
    return(
        
        <div>
            {/* Algum comentário */}
            <h1>Meu primeiro componente</h1>
            <p className = "teste">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;