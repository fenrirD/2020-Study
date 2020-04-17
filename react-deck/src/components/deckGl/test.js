import React from "react"
import DeckGL from '@deck.gl/react'
import {LineLayer} from "@deck.gl/layers"
import {StaticMap} from 'react-map-gl'

const MAPBOX_ACCESS_TOKEN  = 'pk.eyJ1IjoiZmVucmlyZCIsImEiOiJjazkyYmQyNDkwNTE2M2dtcWo2NnR3b3dwIn0.nJ2E-tzVsVobzzYKtcKfDg'

const initialViewState  = {
    longitude: 127.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
};

// Data to be used by the LineLayer
const data = [
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},
    {sourcePosition: [127.41669, 37.7853], targetPosition: [127.41669, 37.781]},

    ];

const DeckTest = () => {
    const layers  = [
        new LineLayer({
            id: 'line-layer',
            data,
        })
    ]
    console.log(layers)
    return (
        <div>
            <DeckGL
                initialViewState={initialViewState }
                layers={layers}
                controller={true}>
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>
        </div>
    )
}


export default DeckTest
