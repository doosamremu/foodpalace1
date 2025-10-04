import { Routes, Route } from 'react-router'
import Homepage from './pages/homepage'
import Createpage from './pages/createpage'
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </div>

      
  )
}

export default App