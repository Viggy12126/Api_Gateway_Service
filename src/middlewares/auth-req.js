const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateAuthRequest(req, res, next) {
    if(!req.body.email){
        ErrorResponse.message = 'Something went wrong authenticating';
        ErrorResponse.error = new AppError(['Email not found in the correct form'], StatusCodes.BAD_REQUEST);

        return res
        .status(StatusCodes.BAD_REQUEST).json({
            ErrorResponse
        })

       
    }

    if(!req.body.password){
        ErrorResponse.message = 'Something went wrong authenticating';
        ErrorResponse.error = new AppError(['Pasword not found in the correct form'], StatusCodes.BAD_REQUEST);

        return res
        .status(StatusCodes.BAD_REQUEST).json({
            ErrorResponse
        })

       
    }

    next();
}

module.exports={
    validateAuthRequest
}