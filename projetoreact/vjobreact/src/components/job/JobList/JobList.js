//ReactDOM.findDOMNode
import React, {Component, ReactDOM} from 'react';
import CardCol from '../JobCard/JobCardCol';
import DefaultModal from '../../navigation/DefaultModal/DefaultModal';
import JobForm from '../../../components/job/JobForm/JobForm';
import Collapse from '../../../components/hoc/Collapse/Collapse';
import Alert from '../../../components/navigation/Alert/Alert'

// import CardCol from '../JobCard/JobCardColStateFull'; import VagasMockDb from
// '../../../assets/mockdb/vagas';
import Loading from '../../navigation/Loading/Loading';
import Axios from 'axios';

const componentName = "JobList"

class JobList extends Component { //ou React.Component se não quiser colocar no import
    state = {
        jobs: [],
        selectedId: null,
        hasError: false,
        alertHtml : undefined,
        isCollapseOpened : false,
        formMode: 'add',
    }

    constructor() {
        super(); //Chamada ao construtor da classe pai (React.Component)
        console.log(`[${componentName}] - [constructor] called`);
        // this.state = vagas -> não faça isso para alterar o state isso sobrescreve o
        // objeto todo, queremos fazer um merge
    }

    addCallback = (newItem) => {
        let currentJobs = this.state.jobs;
        //currentJobs.push(newItem);
        currentJobs.unshift(newItem);
        this.setState({jobs : currentJobs});
    }

    updateCallback = (updatedItem) => {
        let currentJobs = this.state.jobs;
        const index = this.state.jobs.map(element => element.id).indexOf(updatedItem.id);

        currentJobs[index] = updatedItem;

        this.setState({jobs : currentJobs})

        //findOldJob
        //ReplaceWithNewJob
    }

    componentDidMount() { //Assim que o componente for montado => só posso alterar o state depois disso
        console.log(`[${componentName}] - [componentDidMount] called`);
        //this.setState({jobs: VagasMockDb}); //fará um "merge" com o estado atual
        Axios
            .get('/jobs')
            .then((response) => {
                //debugger; // debuga no browser
                this.setState({jobs: response.data});
            })
            .catch((error) => {
                console.error(`Um erro ocorreu ao fazer GET : ${error}`)

                this.setState({alertHtml : <Alert
                    type = "danger"
                    title = "Erro"
                    message = {<strong>Um erro ocorreu ao carregar as vagas.</strong>}
                    secondaryMessage = {`Erro: ${error}`}
                    hasDismiss = {true}
                    >
                </Alert>})
            })
    }

    componentWillReceiveProps() {
        console.log(`[${componentName}] - [componentWillReceiveProps] called`);
    }

    shouldComponentUpdate() {
        console.log(`[${componentName}] - [shouldComponentUpdate] called -> returning true`);
        return true;
    }

    componentWillUpdate() {
        console.log(`[${componentName}] - [componentWillUpdate] called`);
    }

    componentWillMount() {
        console.log(`[${componentName}] - [componentWillMount] called`);
    }

    componentWillUnmount() {
        console.log(`[${componentName}] - [componentWillUnmount] called`);
    }

    componentDidUpdate() {
        console.log(`[${componentName}] - [componentDidUpdate] called`);
    }

    jobRemoveHandler = (id, name) => {
        //Terminar com "Handler" em métodos que manipulam eventos
        const axiosConfig ={
            headers: {
                'Authorization' : 'Bearer ' + window.localStorage.getItem('token')
            }
        }
       
        Axios
            .delete(`/jobs/${id}`, axiosConfig)
            .then((response) => {
                let jobsUpdated = this.state.jobs;
                const removedIndex = jobsUpdated.findIndex(item => item.id == id);

                jobsUpdated.splice(removedIndex, 1);
                this.setState({jobs: jobsUpdated})

                this.setState({alertHtml : <Alert
                    type = "success"
                    title = "Sucesso"
                    message = {<strong>A vaga "{name}" foi removida com sucesso.</strong>}
                    hasDismiss = {true}
                    >
                </Alert>})

            })
            .catch((error) => {
                console.error(`Um erro ocorreu ao fazer DELETE : ${error}`)

                if(error.response.status == 401){
                    //unauthorized
                }

                
                this.setState({alertHtml : <Alert
                    type = "danger"
                    title = "Erro"
                    message = {<strong>Um erro ocorreu ao remover a vaga "{name}".</strong>}
                    secondaryMessage = {`Erro: ${error}`}
                    hasDismiss = {true}
                    >
                </Alert>})
            })
    }

    jobEditHandler = (id, name) => {
        console.log(`Editing register with id ${id}`);

        //Set to edit
        
        <JobForm 
                        addCallback = {this.addCallback}
                        updateCallback = {this.updateCallback}
                        mode='edit'
                        id={id}
        />


        /*this.setState({alertHtml : <Alert
            type = "success"
            title = "Sucesso"
            message = {<strong>A vaga "{name}" foi alterada com sucesso.</strong>}
            hasDismiss = {true}
            >
        </Alert>})*/
    }

    getJobCards() {
        const htmlGerado = this
            .state
            .jobs
            .map(currentJob => ((<CardCol
                key={currentJob.id}
                imgSrc={currentJob.image}
                area={currentJob.area}
                name={currentJob.name}
                description={currentJob.description}
                salary={currentJob.salary}
                id={currentJob.id}
                name={currentJob.name}
                removeHandler=
                {() => this.jobRemoveHandler(currentJob.id, currentJob.name)}
                editHandler=
                {() => this.jobEditHandler(currentJob.id, currentJob.name)}/>)));

        return htmlGerado;
    }

    collapseClicked(reference){
        //isCollapseOpend
        const newState = !reference.state.isCollapseOpened;
        reference.setState({isCollapseOpened : newState});
        
    }

    render() { //deve retornar o que quero renderizar no componente]
        console.log(`[${componentName}] - [render] called`);

        let htmlGerado = (this.state.jobs !== undefined && this.state.jobs.length > 0)
            ? this.getJobCards()
            : <Loading/>


        let collapse = 
            <Collapse
                    reference = {this}
                    buttonName={<span><i class="fas fa-plus-circle"></i> Criar nova vaga</span> }
                    collapseId="addJobCollapse"
                    buttonClass="btn-primary"
                    onClickHandler = {this.collapseClicked}
                    >
                    <JobForm 
                        addCallback = {this.addCallback}
                        updateCallback = {this.updateCallback}
                    />
                </Collapse>

        if(this.state.isCollapseOpened){
            collapse = <Collapse
                reference = {this}
                buttonName={<span><i class="fas fa-ban"></i> Cancelar adição</span>}
                collapseId="addJobCollapse"
                buttonClass="btn-danger"
                onClickHandler = {this.collapseClicked}
                >
                <JobForm addToListFunction = {this.addItemToList}/>
            </Collapse>
        }


        return (
            <div>
                
                {collapse}

                <div className="container mt-4">
                    <p>Vagas listadas: <strong>{this.state.jobs.length}</strong></p>
                    {this.state.alertHtml}
                    <div className="row justify-content-center">
                        {htmlGerado}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default JobList;