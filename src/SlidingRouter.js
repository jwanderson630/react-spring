import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { animated, useTransition } from "react-spring";

const useRouter = () => {
  return useContext(__RouterContext);
};

function SlidingRouter() {
  return (
    <Router>
      <ul className="router-nav">
        <li>
          <Link to="/">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
        <li>
          <Link to="/three">Three</Link>
        </li>
      </ul>
      <Main />
    </Router>
  );
}

const Main = () => {
  const { location } = useRouter();
  const transition = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0 ,0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0 ,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0 ,0)" }
  });
  return transition.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
      </Switch>
    </animated.div>
  ));
};

const One = () => {
  return (
    <div className="page-route ">
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  );
};

export default SlidingRouter;
