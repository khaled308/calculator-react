import { useState } from 'react'
import './style.css'
import Button from './components/Button'
import Output from './components/Output'

function App() {
    const data = ['AC','DEL','÷',1,2,3,'*',4,5,6,'+',7,8,9,'-','.',0,'=']
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const operation = ['÷','*','+','-']

    const [prev,setPrev] = useState('')
    const [cur,setCur] = useState('')

    const setContent = (e)=>{
        if(numbers.includes(+e.target.textContent) || (e.target.textContent === '.' && !cur.includes('.')) ){
            setCur(cur + e.target.textContent)
        }
        else if(operation.includes(e.target.textContent)){
            setPrev(cur + e.target.textContent)
            setCur('')
        }
        else if(e.target.textContent === '=') {
            const operation = prev[prev.length-1]
            switch(operation){
                case '+':
                    setCur(+prev.slice(0,-1) + +cur)
                    break
                case '-':
                    setCur(+prev.slice(0,-1) - +cur)
                    break 
                case '*':
                    setCur(+prev.slice(0,-1) * +cur)
                    break
                case '÷':
                    setCur(+prev.slice(0,-1) / +cur)
                    break            
                default:    
            }
            
            setPrev('')
        }
        else if(e.target.textContent === 'AC'){
            setCur('')
            setPrev('')
        }
        else if(e.target.textContent === 'DEL'){
            setCur(cur.slice(0,-1))
        }

    }
    return (
        <div className="calculator">
            <Output prev={prev} cur={cur} />
            {
                data.map(((item,index)=>{
                    return <Button content={item} key={index} handelClick={setContent} />
                }))
            }
        </div>
    )
}

export default App