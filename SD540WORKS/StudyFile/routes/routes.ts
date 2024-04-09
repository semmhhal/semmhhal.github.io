import { RequestHandler } from "express"
export const rootRoute: RequestHandler<unknown, { first: string, last: string }, unknown, { first: string, last: string }> = function (req, res, next) {
    res.json({ first: req.query.first, last: req.query.last })
}

export const getusersRoute: RequestHandler<{ user_id: number }, { 'your_id': number }, unknown, unknown> = function (req, res, next) {
    req.params
    res.json({ 'your_id': req.params.user_id })
}


//express doesnt parse the body automatically


export const addUser: RequestHandler<unknown, { you_sent: string }, { name: string, code: number }, unknown> = (req, res, next) => {
    console.log({ you_sent: req.body.name + ' ' + req.body.code })
}