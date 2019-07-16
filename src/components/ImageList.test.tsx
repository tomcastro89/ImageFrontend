import ImageList from "./ImageList";
import * as React from "react";
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {GridList} from "@material-ui/core";

describe('ImageList', () => {
    it('should contain GridList', () => {
        configure({ adapter: new Adapter() });
        const gridListComponents = mount(<ImageList/>).find(GridList)
        expect(gridListComponents).toHaveLength(1)
    })

    it('should have list called images in state', () => {
        configure({ adapter: new Adapter() });
        const imagesState = mount(<ImageList/>).state('images')
        expect(imagesState).toMatchObject([])
    })
})