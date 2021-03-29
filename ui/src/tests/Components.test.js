//import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM from 'react-dom';
//import App from "../App";
import Results from "../Components/Results";
import Filters from "../Components/Filters";
import ResultsData from "../Components/ResultsData";
//import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

// Results Test Suite
describe("Components", () => {
    
    /* it('renders App without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider>
                <App />
            </Provider>, 
        div);
    }); */

    it('renders Filters without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Filters 
                // required props
                latFilters={[]} 
                longFilters={[]}
                maxRadiusFilters={[]}
                minMagFilters={[]}
            />, div);
    });

    it('renders ResultsData without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultsData />, div);
    });

    it('renders results without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Results />, div);
    });

});