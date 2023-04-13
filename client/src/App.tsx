import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { check } from "./http/userAPI";
import { Spin } from "antd";
import { SpinWrapper } from "./components/styled/SpinWrapper";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(check());
  }, []);

  if (isLoading) {
    return (
      <SpinWrapper>
        <Spin size="large" />
      </SpinWrapper>
    );
  }
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
