const TemplateExpressions = () => {

    const name = 'Lucas'
    const data = {
        age:31,
        job: 'Programador'
    }

    return(
        <div>
            <h1>Olá {name}, seja bem vindo! </h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
};

export default TemplateExpressions;