import ImageList from "./ImageList";
import * as React from "react";
import {configure, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {GridList} from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const testImageName = "Itemis Logo";
const testImageSource = "https://raw.githubusercontent.com/tomcastro89/Imageprovider/master/itemis_logo.jpeg";

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

    it('GridListTileBar should have Title with Image name from corresponding image', () => {
        configure({ adapter: new Adapter() });
        const mountedImageList = createMountedImageListWithImages();
        const gridListTileBars = mountedImageList.find(GridListTileBar)
        expect(gridListTileBars.first().prop('title')).toBe(testImageName)
    })

    it('GridListTile should have an Image', () => {
        configure({ adapter: new Adapter() })
        const mountedImageList = createMountedImageListWithImages();
        const images = mountedImageList.find("img")
        expect(images).toHaveLength(1)
    })

    it('GridListTile Image should have image source of corresponding image', () => {
        configure({ adapter: new Adapter() })
        const mountedImageList = createMountedImageListWithImages()
        const images = mountedImageList.find("img")
        expect(images.first().prop('src')).toBe(testImageSource)
    })

    it('GridListTile should have list index as key', () => {
        configure({ adapter: new Adapter() });
        const mountedImageList = createMountedImageListWithImages();
        const gridListTiles = mountedImageList.find(GridListTile)
        expect(gridListTiles.last().key()).toBe(".$0")
    })
})

function createMountedImageListWithImages() {
    const mountedImageList = mount(<ImageList/>)
    let images: { name: string, source: string }[] = [
        {
            "name": testImageName,
            "source": testImageSource
        }
    ];
    mountedImageList.setState({images: images})
    return mountedImageList;
}