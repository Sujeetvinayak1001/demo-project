
export const responseHandler = (req: any, res: any, next: any) => {
    const output = {
        error: req.response.error || false,
        message: req.response.message || `${(Array.isArray(req.response.data) ? req.response.data.length : "1")} record(s) found.`,
        data: (req.response.data) || undefined
    }
    res.status(200).json(output)
}