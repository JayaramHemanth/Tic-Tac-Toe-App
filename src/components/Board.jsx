import Box from './Box'
import './board.css'

const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {
            board.map((value,ind)=>{
                return <Box value={value} onClick={()=> value===null && onClick(ind)}/>
            })
        }
    </div>
  )
}

export default Board