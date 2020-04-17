import DeckTest from '../components/deckGl/test'
import HexagonLayerCom from "../components/deckGl/hexagonLayer";
import React from "react"

const deckRoutes =  {
    deckGl : [
        {
            path: '/DeckGL/lineLayer',
            name: 'lineLayer',
            component : DeckTest
        },
        {
            path: '/DeckGL/hexagonLayer',
            name: 'hexagonLayer',


            // eslint-disable-next-line react/react-in-jsx-scope
            component : () => <HexagonLayerCom/>
        },

    ]

}

export default deckRoutes


