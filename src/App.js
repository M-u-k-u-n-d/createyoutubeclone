import "./App.css";
import Head from "../src/components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children : [
    {
      path:'/',
      element: <MainContainer/>
    },
    {
      path:'watch',
      element: <WatchPage/>
    },
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className=" bg-gray-600 p-4 ">
        <Head />
        <RouterProvider router = {appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
