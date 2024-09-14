
import { Route, Routes } from 'react-router-dom'
import NestedComments from './Pages/NestedComments'
import SearchSuggestionBar from './Pages/SearchSuggestionBar'
import LiveChat from './Pages/LiveChat'         
import MultiLevelNestedComments from './Pages/MultiLevelNestedComments'
import HomePage from './Pages/HomePage'
import ImageCarousel from './Pages/ImageCarousel'
import Accordion from './Pages/Accordion'
import TasksManagingApp from './Pages/TasksManagingApp'
import ReactForm from './Pages/ReactForm'
import Pagination from './Pages/Pagination'
// import ReactForm from './Pages/FormRef'

function App() {
 
  return  (
   <div>
    <Routes> 
       <Route path='/' element={<HomePage/>}/>
       <Route path='/search' element={<SearchSuggestionBar/>}/>
       <Route path='/live-chat' element={<LiveChat/>}/>
       <Route path='/nestedcomment' element={<NestedComments/>}/>
       <Route path='/multilevel-nestedcomment' element={<MultiLevelNestedComments/>}/>
       <Route path='/carousel' element={<ImageCarousel/>}/>
       <Route path='/accordion' element={<Accordion/>}/>
       <Route path='/task-managing-app' element={<TasksManagingApp/>}/>
       <Route path='/form' element={<ReactForm/>}/>
       <Route path='/pagination' element={<Pagination/>}/>
    </Routes>
  </div>
  )
}

export default App

