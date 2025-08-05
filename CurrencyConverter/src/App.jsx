
import { useEffect, useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { Input } from './Components';
import image from './assets/currency-image.jpg'

function App(){
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const currencyList = Object.keys(currencyInfo);
  const swapCurrency = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(converedAmount);
  }
  const convert = () => {setConvertedAmount(amount * currencyInfo[to])}

  return <>
      <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${image}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                
                                    label = "from"
                                    amount = {amount}
                                    
                                    onCurrencyChange = {setFrom}
                                    currencyOptions = {currencyList}
                                    selectCurrency = {from}
                                    amountDisable = {false}
                                    currenceyDisable = {false}
                                    onAmountChange={setAmount}

                                

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrency}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label = "to"
                                amount = {convertedAmount}
                                
                                onCurrencyChange = {setTo}
                                currencyOptions = {currencyList}
                                selectCurrency = {to}
                                amountDisable = {true}
                                currenceyDisable = {false}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </>
    

  </>

}

export default App;