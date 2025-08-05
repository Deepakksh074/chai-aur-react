import { useState } from "react";

function App(){
        const [counter, setCounter] = useState(15);
        
        const increase = () => {
                if(counter <= 19)setCounter(counter+1);
        }
        const decrease = () => {
                if(counter!=0)setCounter(counter-1);
                
        }
        return <>
        
        
        </>


}

export default App;