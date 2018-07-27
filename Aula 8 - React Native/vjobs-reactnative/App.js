//import React from 'react';
import JobList from './components/JobList/JobList';
import JobDetails from './components/JobDetails/JobDetails';
import {createStackNavigator} from 'react-navigation';

export default createStackNavigator(
    {Joblist: JobList, JobDetails : JobDetails},
    {initalRouteName: 'JobList'},
);



