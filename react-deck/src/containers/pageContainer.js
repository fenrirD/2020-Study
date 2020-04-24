import React, {Component} from "react";
import deckGlRoutes from "../routes/deckRoute"
import Left from "../components/layouts/left";


/*
* Container 란 재사용성이 가능한 코드 React 의 HOF 를 고려?
* -> Container pattern 에 대해서 고민
*
*
* */

class PageContainer extends Component{


    render() {
        const {params, path} = this.props.match
        const key = path.split('/')[1]
        console.log(this.props,deckGlRoutes,'!!', key, )
        const routes = deckGlRoutes[key]
        const findComponent = routes.find(route =>route.name===params.param)
        //console.log(findComponent.component())
        return (
            <div className="gallery-wrapper">
                <div className="fullheight">
                    <div className="flexbox--row">
                        <div className="flexbox-item" style={{zIndex: 1}}>
                            <Left routes={routes}/>
                        </div>
                        <div className={'flexbox-item flexbox-item--fill'}>
                            {/*<HexagonLayerCom2/>*/}
                            {findComponent && findComponent.component()}
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default PageContainer
