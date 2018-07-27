import {SafeAreaView, StyleSheet, Text, ScrollView, Image} from 'react-native';
import React from 'react';

import imgDeveloper from '../../assets/images/developer.png';
import imgDesigner from '../../assets/images/designer.png';
import imgTester from '../../assets/images/tester.png';
import imgFrontEnd from '../../assets/images/frontend.jpg';
import imgBackEnd from '../../assets/images/backend.jpg';
import imgFullStack from '../../assets/images/fullstack.png';
import imgGeneral from '../../assets/images/generalImage.jpg';

const getImgFor = (value) => {
    const imgMap = {
        "DEVELOPER": imgDeveloper,
        "DEV": imgDeveloper,
        "DESENVOLVIMENTO": imgDeveloper,
        "DESIGNER": imgDesigner,
        "DESIGN": imgDesigner,
        "TESTER": imgTester,
        "TESTE": imgTester,
        "TESTES": imgTester,
        "FRONTEND" : imgFrontEnd,
        "FRONT-END" : imgFrontEnd,
        "FRONT" : imgFrontEnd,
        "BACKEND" : imgBackEnd,
        "BACK-END" : imgBackEnd,
        "BACK" : imgBackEnd,
        "FULLSTACK" : imgFullStack,
        "FULL-STACK" : imgFullStack,
        "FULL" : imgFullStack,
    }

    if(imgMap[value.toUpperCase()] !== undefined){
        return imgMap[value.toUpperCase()];
    }

    return imgGeneral;
}


export default class JobDetails extends React.Component {

    static navigationOptions = {
        title: 'Detalhes'
    };

    render() {
        const job = this.getJob();

        console.log(job.area);
        console.log(getImgFor(job.area));

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <Image 
                        source={getImgFor(job.area)}
                        style={styles.headerImage}

                    ></Image>

                    <Text style={styles.textTitle1}>
                        {job.name}
                    </Text>

                    <Text style={styles.textTitle2}>Area</Text>
                    <Text style={styles.textDefault}>
                        {job.area}
                    </Text>

                    <Text style={styles.textTitle2}>Descrição da vaga</Text>
                    <Text style={styles.textDefault}>
                        {job.description}
                    </Text>

                    <Text style={styles.textTitle2}>Habilidades necessárias</Text>
                    <Text style={styles.textDefault}>
                        {job.skills}
                    </Text>

                    <Text style={styles.textTitle2}>Diferenciais</Text>
                    <Text style={styles.textDefault}>
                        {job.differentials}
                    </Text>

                    <Text style={styles.textTitle2}>Para PCD</Text>
                    <Text style={styles.textDefault}>
                        {(job.isPcd)
                            ? "Sim"
                            : "Não"}
                    </Text>

                    <Text style={styles.textTitle2}>Salário base</Text>
                    <Text style={styles.textDefault}>
                        R$ {job.salary}
                    </Text>

                </ScrollView>
            </SafeAreaView>

        );
    }

    getJob() {
        const {navigation} = this.props;
        return navigation.getParam('job', {});
        //getParam('job', {}); | {} é o valor default caso não seja encontrado
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    textBold: {
        fontWeight: 'bold',
        padding: 20,
    },
    textTitle1: {
        fontSize: 30,
        padding: 16,
        fontWeight: 'bold'
    },

    textTitle2: {
        fontSize: 25,
        padding: 16,
    },

    headerImage: {
        flex:1,
        resizeMode : 'stretch',
        padding: -10,
    }
});