export const raiz = (req, res) => {
    res.status(200).json ({
        message: "Estamos en la raiz del proyecto"
    });
};


export const cliente = (req, res) => {
    res.status(200).json ({
        cliente_01 : "Ivan Antonio Quispe",
        cliente_02 : "Pepito gonzales",
        cliente_03 : "Hermano de pepito"

    })
}

export const productos = (req, res) => {
    res.status(200).json ({
        producto_01 : "procesador",
        producto_02 : "Memoria ram",
        producto_03 : "Televisor"
    });
};