import React, {Component} from 'react';
import Card from './JobCard'



let componentName = "";

class CardColumn extends Component{
    
    constructor(props){
        super(props);
        componentName = `JobCard # ${props.title.toString().replace(' ', '_').replace(' ', '_').replace(' ', '_')}`;
        console.log(`[${componentName}] - [constructor] called`);
    }


    componentWillReceiveProps(){
        console.log(`[${componentName}] - [componentWillReceiveProps] called`);
    }

    shouldComponentUpdate(){
        
        console.log(`[${componentName}] - [shouldComponentUpdate] called -> returning true`);
        return true;
    }

    componentWillUpdate(){
        console.log(`[${componentName}] - [componentWillUpdate] called`);
    }

    componentWillMount(){
        console.log(`[${componentName}] - [componentWillMount] called`);
    }

    componentDidMount(){//Assim que o componente for montado => só posso alterar o state depois disso
        console.log(`[${componentName}] - [componentDidMount] called`);
    }

    componentWillUnmount(){
        console.log(`[${componentName}] - [componentWillUnmount] called`);
    }

    render(){
        console.log(`[${componentName}] - [render] called`);
        return(
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3 text-left">
                <Card
                    {...this.props}
                />
            </div>
        )
    }
}

export default CardColumn;