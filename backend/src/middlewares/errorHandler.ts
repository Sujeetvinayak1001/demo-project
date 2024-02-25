

export const errorHandler = (err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500).json({ error: true, message: err.message })
}