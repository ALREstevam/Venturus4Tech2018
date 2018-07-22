import React, {Component} from 'react';
import CardCol from '../JobCard/JobCardCol'
import VagasMockDb from '../../../assets/mockdb/vagas' 

class JobList extends Component { //ou React.Component se não quiser colocar no import
    state = {
        jobs: [],
        selectedId: null,
        hasError: false,
    }
    
    constructor() {
        super(); //Chamada ao construtor da classe pai (React.Component)

        //this.state = vagas -> não faça isso para alterar o state isso sobrescreve o objeto todo, queremos fazer um merge
    }

    componentDidMount(){//Assim que o componente for montado => só posso alterar o state depois disso
        this.setState( {jobs : VagasMockDb}  ); //fará um "merge" com o estado atual
    }



    jobRemoveHandler = (id, name) => { //Terminar com "Handler" em métodos que manipulam eventos
        if(window.confirm(`Deseja realmente excluir a vaga '${name}'`)){
            window.alert('Exluído com sucesso');
        }else{
            window.alert('Erro ao construir');
        }

        console.log(`Deleting register with id ${id}`);
        //TODO: remove item with `id`
    }

    jobEditHandler = (id, name) => {
        window.alert(`A vaga '${name}' foi editada com sucesso`);
        //TODO: edit...,
        console.log(`Editing register with id ${id}`);
    }
    

    render() { //deve retornar o que quero renderizar no componente]


        let foundedJobs = this.state.jobs.map(
            currentJob => {
                return(
                    <CardCol
                        key={currentJob.id}
                        imgSrc={currentJob.image}
                        area={currentJob.area}
                        title={currentJob.name}
                        description={currentJob.description}
                        baseSalary={currentJob.salary}
                        removeHandler=
                        {() => this.jobRemoveHandler(currentJob.id, currentJob.name)}
                        editHandler=
                        {() => this.jobEditHandler(currentJob.id, currentJob.name)}
                    />
                )
            }
        )

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    {foundedJobs}
                </div>
            </div>
        )


        /*return (
            <div className="container mt-4">
                <div className="row justify-content-center">

                    <CardCol
                        imgSrc="developer"
                        title="Programador na linguagem K"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(1, "Programador na linguagem K")}
                        editHandler=
                        {() => this.jobEditHandler(1, "Programador na linguagem K")}/>

                    <CardCol
                        imgSrc="designer"
                        title="Programador na linguagem L"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(2, "Programador na linguagem L")}
                        editHandler=
                        {() => this.jobEditHandler(2, "Programador na linguagem L")}/>

                    <CardCol
                        imgSrc="tester"
                        title="Programador na linguagem M"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(3, "Programador na linguagem M")}
                        editHandler=
                        {() => this.jobEditHandler(2, "Programador na linguagem M")}/>

                    <CardCol
                        imgSrc="http://afrisoft.co.ke/wp-content/uploads/2017/11/google-1.jpg"
                        title="Programador na linguagem N"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(4, "Programador na linguagem N")}
                        editHandler=
                        {() => this.jobEditHandler(4, "Programador na linguagem N")}/>

                    <CardCol
                        imgSrc="http://afrisoft.co.ke/wp-content/uploads/2017/11/google-1.jpg"
                        title="Programador na linguagem O"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(5, "Programador na linguagem O")}
                        editHandler=
                        {() => this.jobEditHandler(5, "Programador na linguagem O")}/>

                    <CardCol
                        imgSrc="http://afrisoft.co.ke/wp-content/uploads/2017/11/google-1.jpg"
                        title="Programador na linguagem P"
                        description="lorem ipsum lorem ipsum lorem ipsum"
                        baseSalary="100,23"
                        removeHandler=
                        {() => this.jobRemoveHandler(6, "Programador na linguagem P")}
                        editHandler=
                        {() => this.jobEditHandler(6, "Programador na linguagem P")}/>

                </div>
            </div>
        )*/
    }
}

export default JobList;