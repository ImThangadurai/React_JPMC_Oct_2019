import React, {useState} from 'react';
import axios from 'axios';
import simpleHOC from './SimpleHOC';

const WikiSearch = () => {

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);

    function change(evt){
        setSearchKey(evt.target.value);
    }

    async function invoke(){
        const url 
            = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchKey;
        try {
            
            const resp = await axios.get(url);
            console.log(resp.data);
            setResults(resp.data);

        } catch (error) {
            console.log("error: ");
        }
    
    }

    // function renderResults(){

    //     if(results.length > 0){
    //         return results[1].map((item, index) => {
    //             return (
    //                 <div key={index}>
    //                     <p>{item}</p>
    //                 </div>
    //             );
    //         })
    //     }
    //     else{
    //         return null;
    //     }

    // }

    const renderResults = () =>{

        if(results.length > 0){
            return results[1].map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                );
            })
        }
        else{
            return null;
        }

    }

    return (
        <div>
            <h3>Wiki Search</h3>
            <input type="search" placeholder="Search" value={searchKey} onChange={change}/>
            &nbsp;
            <button onClick={invoke}>Search</button>
            <div>
                {renderResults()}
            </div>
        </div>
    );
}

export default simpleHOC(WikiSearch);