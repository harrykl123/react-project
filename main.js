import React, { useState } from 'react'
import Myimg from './image1.png'
import Myimage1 from './image2.png'
import Myimage2 from './image3.png'
import Myimage3 from './image4.png'
import Myimage4 from './image5.png'
import './main.css'
function Main() {
    return (
        <>
            <div class="p">
                <img class="p1" src={Myimg} alt='back' />
                <h1 class="p2"><b class="p3">T</b>ECHNOLOGY  RELATED:</h1>
                <pre class="p4"> Technology has transformed daily life, making communication, education,<br /> and work more efficient.
                    Innovations like AI, smartphones, and cloud<br /> computing drive progress across industries. While it offers countless<br /> benefits, technology also raises concerns about privacy and<br /> overdependence. Responsible use ensures a balanced, connected, and<br /> forward-thinking future for all.</pre>
                <button class="p5">Read More</button>
            </div>
            <div class="p6">
                <div class="j1">
                    <div class="p7">
                        <img class="g1" src={Myimage1} alt='img' />
                        <pre class="r1">A technology-themed album blends<br /> electronic sounds, AI-inspired beats<br /> and futuristic lyrics, exploring<br /> digital life, innovation, and human-<br /> machine interaction.</pre>
                        <button class="u1">Open Me</button>

                    </div>
                    <div class="p8">
                        <img class="g2" src={Myimage2} alt='img' />
                        <pre class="r2">Technology-driven navigation uses GPS<br /> ,digital maps, sensors, and AI to<br /> provide accurate, real-time directions<br /> for travel, logistics, and exploration</pre>
                        <button class="u2">Open Me</button>
                    </div>
                </div>
                <div class="j2">
                    <div class="p9">
                        <img class="g3" src={Myimage3} alt='img' />
                        <pre class="r3">Uploading in technology refers to<br /> transferring data or files from a<br /> local device to a remote server,<br /> cloud, or website.</pre>
                        <button class="u3">Open Me</button>
                    </div>
                    <div class="p10">
                        <img class="g4" src={Myimage4} alt='img' />
                        <pre class="r4">Building in technology involves creating<br /> software, hardware, or systems through<br /> coding, engineering, and innovation to<br /> solve problems or enhance functionality</pre>
                        <button class="u4">Open Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}
function Spp(){
    const [count,setcount]= useState(0)
    return(
        <>
        <div style={{marginTop:'-550px',marginLeft:'400px'}}>
        <h2>counts = {count}</h2>
        <button onClick={()=>setcount(count+1)} style={{fontSize:'20px',height:'30px',width:'50px'}}>+</button>
        <button onClick={()=>setcount(count-1)} style={{fontSize:'20px',height:'30px',width:'50px',marginLeft:'20px'}}>-</button>
        </div>
        </>
    )
}
function Qpp(){
    const [count,setcount]= useState(0)
    return(
        <>
        <div style={{marginTop:'-60px',marginLeft:'1100px'}}>
        <h2>counts = {count}</h2>
        <button onClick={()=>setcount(count+1)} style={{fontSize:'20px',height:'30px',width:'50px'}}>+</button>
        <button onClick={()=>setcount(count-1)} style={{fontSize:'20px',height:'30px',width:'50px',marginLeft:'20px'}}>-</button>
        </div>
        </>
    )
}
function Ipp(){
    const [count,setcount]= useState(0)
    return(
        <>
        <div style={{marginTop:'250px',marginLeft:'200px'}}>
        <h2>counts = {count}</h2>
        <button onClick={()=>setcount(count+1)} style={{fontSize:'20px',height:'30px',width:'50px'}}>+</button>
        <button onClick={()=>setcount(count-1)} style={{fontSize:'20px',height:'30px',width:'50px',marginLeft:'20px'}}>-</button>
        </div>
        </>
    )
}
function Ypp(){
    const [count,setcount]= useState(0)
    return(
        <>
        <div style={{marginTop:'-70px',marginLeft:'800px'}}>
        <h2>counts = {count}</h2>
        <button onClick={()=>setcount(count+1)} style={{fontSize:'20px',height:'30px',width:'50px'}}>+</button>
        <button onClick={()=>setcount(count-1)} style={{fontSize:'20px',height:'30px',width:'50px',marginLeft:'20px'}}>-</button>
        </div>
        </>
    )
}
export default Main
export {Spp}
export {Qpp}
export {Ipp}
export {Ypp}