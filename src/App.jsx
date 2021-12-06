import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <main className="container">
        <header>
          <h1>Library Catalog</h1>
          <NavLink className="linkstyle" to="/" exact>
            {' '}
            Home{' '}
          </NavLink>
          <NavLink className="linkstyle" to="/books" exact>
            {' '}
            Book List{' '}
          </NavLink>
        </header>
        <Switch>
          <Route path="/books" exact component={BookList} />
          <Route path="/books/:id" exact component={BookDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
