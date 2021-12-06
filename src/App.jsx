import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books" component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
