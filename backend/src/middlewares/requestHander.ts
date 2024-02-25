

export const requestHandler = (req:any, res: any, next: any) => {
    req.response = { error: false, message: "", data: []}
    next()
}
