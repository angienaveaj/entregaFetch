const obtenerProductos = async () => {
    
    try{
        const response = await fetch('./js/stock.json');
        const data = await response.json();

        return data;

    } catch (error){
        console('hubo un error', error);
    };
};


export {obtenerProductos};

