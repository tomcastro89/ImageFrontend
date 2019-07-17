import React from 'react'
import {GridList} from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

interface State {
    images: []
}
interface Props {}

export default class ImageList extends React.Component<Props,State> {
    constructor(props: any) {
        super(props);
        this.state = {
            images: []
        }
    }
    render() {
        return <GridList
            cellHeight={180}
            style={{width: 500,
                    height: 450}}>
            {this.state.images.map((image: {name: string,source: string}) => (
                <GridListTile><img src={image.source} alt="No Image available"/><GridListTileBar title={image.name}/></GridListTile>
            ))}
        </GridList>;
    }
}