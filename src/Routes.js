import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Video from "./pages/Video";
import Root from "./pages/Root";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/video", element: <Video /> },
      { path: "/video/:videoId", element: <VideoDetail /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
