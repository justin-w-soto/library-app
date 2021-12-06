import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <main className="container">
        <header>
          <h1>Library Catalog</h1>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/books"> Book List </NavLink>
        </header>
        <Switch>
          <Route path="/books" exact component={BookList} />
          <Route path="/books/:id" exact component={BookDetail} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
