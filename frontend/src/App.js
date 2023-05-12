import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventDetails from "./pages/EventDetails";
import EventsLayout from "./layouts/EventsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          { index: true, path: "", element: <Events /> },
          { path: "new", element: <NewEvent /> },
          { path: ":eventId", element: <EventDetails /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
