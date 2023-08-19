import React, {useState} from 'react';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='flex justify-center m-5 '>  
                <input onChange={e => setText(e.target.value)} 
                className='p-1 pl-2 mr-2 border-green-100 border-b-2 focus:border-green-500' type='text' placeholder='Search Image Term'/>
                <button className='bg-green-500 rounded-lg p-1 text-white font-serif hover:bg-green-400 hover:pl-2 hover:pr-2' type='submit'> 
                Search </button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch;