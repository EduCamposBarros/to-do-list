const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title == undefined) {
        return response.status(400).json({ message: 'O campo "title" é obrigatório' });
    };

    if (body.title == '') {
        return response.status(400).json({ message: 'O campo "title" não pode estar vazio' });
    }
    next();
};


const validateFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status == undefined) {
        return response.status(400).json({ message: 'O campo "status" é obrigatório' });
    };

    if (body.status == '') {
        return response.status(400).json({ message: 'O campo "status" não pode estar vazio' });
    }
    next();
};


module.exports = {  
    validateFieldTitle,
    validateFieldStatus,
};