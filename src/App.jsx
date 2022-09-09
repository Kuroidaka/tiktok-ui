import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { layouts } from '~/layouts'
import { Fragment } from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = layouts.DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              route.layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
