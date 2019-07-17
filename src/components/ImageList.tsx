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
        return <GridList>
            {this.state.images.map((image: {name: string,source: string}) => (
                <GridListTile><GridListTileBar title={image.name}/></GridListTile>
            ))}
        </GridList>;
    }
}