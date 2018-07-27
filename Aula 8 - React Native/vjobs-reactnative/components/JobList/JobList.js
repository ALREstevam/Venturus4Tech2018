import React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableHighlight} from 'react-native';
import {getJobs} from '../../networking/API'
const headerImg = require('../../assets/images/logo-h-vjobs.png');

export default class JobList extends React.Component {
    
    static navigationOptions ={
        title: 'Vjobs'
    }
    
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }
    componentDidMount() {
        console.log('JobList.componentDidMount() CALLED');
        getJobs()
             .then(jobs => this.setState({jobs : jobs}))
             .catch(error => console.log(error))
    }

    renderHeader() {
        return (
            <Image 
            style={styles.listHeader} 
            source={headerImg}></Image>
        )
    }

    renderList() {
        console.log('renderList() CALLED');
        return (
            <FlatList
                data={this.state.jobs}
                style={styles.flatList}
                ListHeaderComponent={() => this.renderHeader()}
                renderItem={({item}) => this.renderItem(item)}
                ItemSeparatorComponent={() => <View style={styles.listSeparator}/>}
                keyExtractor={(item) => `${item.id}`}/>
        );

    }

    renderItem(jobToRender) {
        console.log('renderItem() CALLED');
        return (
            <TouchableHighlight 
                onPress={
                    () => this.props.navigation.navigate('JobDetails', {job : jobToRender})
                }
                >
                <Text style={styles.listItem}>
                    {jobToRender.name}
                </Text>
            </TouchableHighlight>
        );
    }

    render() {
        console.log('render() CALLED');
        return (
            <SafeAreaView style={styles.container}>
                {this.renderList()}
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    flatList: {
        flex: 1,
        backgroundColor: 'white'
    },
    listSeparator: {
        flexGrow: 1,
        height: 5,
        backgroundColor: '#fff'
    },
    listItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 48,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#ccc'
    },
    listHeader: {
        margin: 16,
        alignSelf: 'center'
    }
});