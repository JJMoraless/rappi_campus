import { request, response } from "express";

export const pedidosGet = (req = request, res = response) => {
    res.json('pedidos')
};
