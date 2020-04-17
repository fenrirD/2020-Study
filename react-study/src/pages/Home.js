import React from 'react'
import {Typography, Paper} from '@material-ui/core'
import SyntaxHighlighter from "react-syntax-highlighter"
import {tomorrowNightEighties} from "react-syntax-highlighter/dist/cjs/styles/hljs"




const Home = () => {
    return (
        <Paper elevation={3} >
            <Typography variant='h4'> ● 컴포넌트 라이프 사이클 </Typography>
            <Typography variant='subtitle1'>

                초기화</Typography>
            <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightEighties}
                showLineNumbers={'true'}
                wrapLines={true}
            >
                {
                `
                    
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                `
                    }
            </SyntaxHighlighter>
        </Paper>
    )
}

export default Home
