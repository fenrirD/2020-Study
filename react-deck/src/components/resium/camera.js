import React, { Component } from "react";
import { Cartesian3,Transforms, Color,   } from "cesium";
import { Viewer, Entity, Camera, CameraFlyTo, PolylineCollection, Polyline, PolygonGraphics, GeoJsonDataSource  } from "resium";
import data from "./data2";
import abc from "./data";
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };


const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
const positions = [
    new Cartesian3(-75, 35, 0),
    new Cartesian3(-125, 35, 50),
    new Cartesian3(-125, 135, 25),
];

const test = [[126.5342315542787, 33.51502032261918], [126.53429217901021, 33.514949289641365], [126.53437017336708, 33.51485999156952], [126.53437821917096, 33.514845028285905], [126.53437788862878, 33.51483236843543], [126.53437206976096, 33.51481765983728], [126.5343355561706, 33.514812410923525], [126.53415452034933, 33.51480584252189], [126.53405097535158, 33.514803848257785], [126.53406613138071, 33.514972412826666], [126.53416720965761, 33.514980546108234], [126.5342315542787, 33.51502032261918]]


const a =Cartesian3.fromDegreesArray([
        126.5342315542787, 33.51502032261918,
        126.763429217901021, 33.614949289641365,
        126.6342315542787, 33.51502032261918,

    ]
    )




class Camera1 extends Component {
    renderHi = () => {
        return <GeoJsonDataSource data={data} onLoad={(dataSource)=>
        {

            dataSource.entities.values.forEach(entity =>{
                entity.polygon.extrudedHeight = entity.properties.Population / 50.0;
                let color = Color.fromRandom(  {alpha : 1.0})
                entity.polygon.material = color
            })



        }
        }/>
    }



    componentDidMount() {
        /*const dd = GeoJsonDataSource.load(data).then((dataSource) =>{
            console.log(dataSource.entities.values[0])
            this.setState({
                dd:dataSource.entities.values[0]
            })

        })
        console.log(dd)*/
    }

    render(){
        const b  = test.reduce((pre,cur)=> {
            return pre.concat(cur)
        },[])
        console.log(this.state)
        return(
            <Viewer full >
                {this.renderHi()}
                <GeoJsonDataSource data={abc}/>
                <Camera
                    onChange={(areaPercentage)=> console.log(areaPercentage)}
                />
                <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(126.948788, 37.374388, 100)} />
                <PolylineCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
                    <Polyline positions={positions} width={10} />
                </PolylineCollection>

                <Entity>
                    {/*<PolygonGraphics hierarchy={Cartesian3.fromDegreesArray(b)} extrudedHeight={500} material={Color.GREEN} />*/}
                    <PolygonGraphics hierarchy={a} extrudedHeight={500} material={Color.GREEN} />
                </Entity>

                <Entity
                    name="Korea"
                    position={Cartesian3.fromDegrees(126.948788, 37.374388, 100)}
                    point={{ pixelSize: 10 }}
                    description="IT GOOD"
                />
            </Viewer>
        )


    }

}

export default Camera1

