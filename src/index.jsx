import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import Camera from './Camera'



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <nav></nav>
      <div className='flex_block'>
        <div className='gauche'>

        </div>
        <div className='droite'>
          <Camera />
        </div>
      </div>
    </>
)