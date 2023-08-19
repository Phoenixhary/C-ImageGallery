import React from 'react'

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
   

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-gradient-to-r from-white to-sky-200 text-sky-100">
            <img className="w-full h-64 hover:object-contain " src={image.webformatURL} alt="A picture"/>
            <div className="p-2">
                <div className="text-yellow-500 font-sans font-bold text-sm">
                    Photo by {image.user}
                    </div>
            </div>

            <ul className="inline-block text-white font-mono m-3">

              <li className='text-slate-700 font-mono text-sm'>
                <span className="font-bold text-yellow-500">Height: </span>
                    {image.imageHeight} 
                </li>

                <li className='text-slate-700 font-mono text-sm'>
                    <span className="font-bold text-yellow-500">Download: </span>
                    {image.downloads} 
                </li>
                <li className='text-slate-700 font-mono text-sm'>
                    <span className="font-bold text-yellow-500">Likes: </span>
                    {image.likes}
                </li>
                <li className='text-slate-700 font-mono text-sm'>
                    <span className="font-bold text-yellow-500">Views:  </span>
                    {image.views}
                </li>
            </ul>
            <div className="p-1 font-mono">
                
                {tags.map((tag, index) => (
                    <span key={index} className=" inline-block text-sm bg-gray-400 text-white-500 rounded-full pl-2 pr-2 m-1">#{tag}</span>
                ))}
            </div>
        </div>
  )
}

export default ImageCard;