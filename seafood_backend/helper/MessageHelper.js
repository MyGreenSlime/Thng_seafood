module.exports = MessageHelper = {
    ResponseMessage  : function(status,message,payload){
        return {
            status : status,
            message : message,
            payload : payload
        }
    },
    ErrorMessage : function(status,message){
        return {
            status : status,
            error : message
        }
    }
}