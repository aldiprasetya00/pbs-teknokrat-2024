const response = (statucCode, data , message, res)=>{
    res.status(statucCode).json({
        payload : {
            status_code : statusCode,
            datas : data,
        },
    Message:message,
    pagination:{
        prev:'',
        next:'',
        max:''
    }
    })
}

module.exports = response