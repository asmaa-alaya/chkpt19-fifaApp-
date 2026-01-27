import React from 'react';
import './carousel3d.css';

function Carousel3d() {
    return (
        <div>
            <div className='banner'>
                <div className='slider' style={{"--quantity":11}}>
                    <div className='item' style={{ "--position":1}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250011668.webp' /></div>
                    <div className='item' style={{ "--position":2}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250088061.webp' /></div>
                    <div className='item' style={{ "--position":3}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250058220.webp' /></div>
                    <div className='item' style={{ "--position":4}}><img src='https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250127439.webp' /></div>
                    <div className='item' style={{ "--position":5}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250128120.webp' /></div>
                    <div className='item' style={{ "--position":6}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250082664.webp' /></div>
                    <div className='item' style={{ "--position":7}}><img src='https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250128377.webp' /></div>
                    <div className='item' style={{ "--position":8}}><img src='https://img.uefa.com/imgml/TP/players/2014/2025/cutoff/250008901.webp' /></div>
                    <div className='item' style={{ "--position":9}}><img src='https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-09/mohamed-salah-2025-26-body-shot-straight_1eed4e039fbd8ced5f98958fdf8b6235.png?itok=hWA7K4zm' /></div>
                    <div className='item' style={{ "--position":10}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250103758.webp' /></div>
                    <div className='item' style={{ "--position":11}}><img src='https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250121533.webp' /></div>




                </div>
            </div>

        </div>
    )
}

export default Carousel3d
