const Soma = (x, y) => {
    return x + y;
};

const Challenge = () => {

    const valor1 = 2;
    const valor2 = 3;

        return(
            <div>
                <h1>Valor 1: {valor1}</h1>
                <h1>Valor 2: {valor2}</h1>
                <button onClick = {() => console.log(Soma(valor1, valor2))}>Somar</button>
            </div>
        ) 
    
    
};

export default Challenge;