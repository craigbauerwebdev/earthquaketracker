import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Results from "../Components/Results";

Enzyme.configure({ adapter: new Adapter() });

// Results Test Suite
describe("Results", () => {
    // test test
    it("should be true", () => {
        const foo = true;
        expect(foo).toBe(true);
    })

    /* it('should exist', () => {
        const wrapper = shallow(<Results />);
        const text = wrapper.find(".button-wrap");
        console.log(text);
        expect(text.text()).toBe("Load More");
    }) */
});