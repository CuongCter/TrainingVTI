import PostList from './PostList'
import TodoApp from './TodoApp'
import TodoAppReducer from './TodoAppReducer'

function App() {

  return (
    <>
      <TodoAppReducer/>
      {/* <TodoApp/> */}
      <PostList/>
    </>
  )
}

export default App
