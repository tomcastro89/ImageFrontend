import React from 'react'
import {GridList} from "@material-ui/core";

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
        return <GridList/>;
    }
}