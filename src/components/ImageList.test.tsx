import ImageList from "./ImageList";
import * as React from "react";
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {GridList} from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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

    it('should create a GridListTile for every Image in state', () => {
        configure({ adapter: new Adapter() });
        const mountedImageList = createMountedImageListWithImages();
        const gridListTiles = mountedImageList.find(GridListTile)
        expect(gridListTiles).toHaveLength(1)
    })

    it('GridListTile should have GridListTileBar', () => {
        configure({ adapter: new Adapter() });
        const mountedImageList = createMountedImageListWithImages();
        const gridListTileBars = mountedImageList.find(GridListTileBar)
        expect(gridListTileBars).toHaveLength(1)
    })
})

function createMountedImageListWithImages() {
    const mountedImageList = mount(<ImageList/>)
    let images: { name: string, source: string }[] = [
        {
            "name": "Itemis Logo",
            "source": "https://raw.githubusercontent.com/tomcastro89/Imageprovider/master/itemis_logo.jpeg"
        }
    ];
    mountedImageList.setState({images: images})
    return mountedImageList;
}