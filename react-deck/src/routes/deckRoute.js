import DeckTest from '../components/deckGl/test'
import HexagonLayerCom from "../components/deckGl/hexagonLayer";
import Camera1 from "../components/resium/camera"
import React from "react"

const deckRoutes =  {
    deckGL : [
        {
            path: '/deckGL/lineLayer',
            name: 'lineLayer',
            component : DeckTest
        },
        {
            path: '/deckGL/hexagonLayer',
            name: 'hexagonLayer',


            // eslint-disable-next-line react/react-in-jsx-scope
            component : () => <HexagonLayerCom/>
        },

    ],
    resium : [
        {
            path: '/resium/basic',
            name: 'basic',
            component : () => <Camera1/>
        },
        {
            path: '/resium/2',
            name: '2',


            // eslint-disable-next-line react/react-in-jsx-scope
          //  component : () => <HexagonLayerCom/>
        },

    ],

}

export default deckRoutes


