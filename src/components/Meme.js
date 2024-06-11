
import React, { useState, useEffect } from 'react';


function Meme() {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg');
    const [generatedMeme, setGeneratedMeme] = useState({
        topText: '',
        bottomText: '',
        memeImage: '',
    });

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                const randomMeme = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
                setMemeImage(randomMeme.url);
            });
    }, []);

    const handleTopTextChange = (e) => setTopText(e.target.value);
    const handleBottomTextChange = (e) => setBottomText(e.target.value);

    const handleGenerateMeme = () => {
        setGeneratedMeme({
            topText: topText,
            bottomText: bottomText,
            memeImage: memeImage,
        });
    };

    return (
        <div className="meme-container">
            <h1>Meme Generator</h1>
            <div className="form">
                <input
                className='one'
                    type="text"
                    value={topText}
                    onChange={handleTopTextChange}
                />
                <input
                className='two'
                    type="text"
                    value={bottomText}
                    onChange={handleBottomTextChange}
                />
      
            </div>
            <button onClick={handleGenerateMeme} className='memebtn'>Get a new meme image</button>
            <div className="meme">
                {generatedMeme.memeImage && (
                    <div className="meme-content">
                        <img src={generatedMeme.memeImage} alt="Meme" className='memeimg' />
                        <h2 className="top">{generatedMeme.topText}</h2>
                        <h2 className="bottom">{generatedMeme.bottomText}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Meme;
