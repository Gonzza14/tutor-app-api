import axios from "axios"
import apiKey from "./direction_key"

export const obtenerRuta = async (req, res) => {
    //Definicion de variable con la configuracion de la peticion 
    const configuracion = {
        method: "get",
        url: "https://maps.googleapis.com/maps/api/directions/json?origin="+req.body.latUsuario+","+req.body.longUsuario+"&destination="+req.body.latUbicacion+","+req.body.longUbicacion+"&mode=walking&key="+apiKey,
        headers: {}
    }

    //Realizar la peticion y retonar la respuesta
    axios(configuracion)
    .then((respuesta) => {
        res.json(respuesta.data)
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message || "No fue posible obtener la ruta seleccionada"
        })
    })
}