import { Typography } from "@mui/material";
import React, {
  Component,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
// import { postErrorReport } from "../services/errorHandler.services";
import { Button } from "../components/Button";
class ErrorBoundary extends Component<
  { entity?: string | ReactNode },
  { hasError: boolean }
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //   componentDidCatch(error: any, info: any) {
  //     postErrorReport({ error: error.stack, info }).catch(() => {});
  //     this.setState({ hasError: true });
  //   }

  render() {
    if (this.state.hasError) {
      const entity = this.props.entity;
      return (
        <Typography variant="h3" py={1} px={2}>
          An error occurred{entity ? ` in the ${entity}` : ""}. Please try
          refreshing the page. If the problem persists, please contact
          <a
            style={{ marginLeft: "0.5rem" }}
            href="mailto:engage.delivery@lemnisk.co"
          >
            engage.delivery@lemnisk.co
          </a>
          .
        </Typography>
      );
    }

    return (
      <>
        {this.props.children}
        {/* <ErrorTrigger></ErrorTrigger> */}
      </>
    );
  }
}

export default ErrorBoundary;
const ErrorTrigger = () => {
  const [error, toggleError] = useReducer((s) => !s, false);
  useEffect(() => {
    if (error) {
      throw new Error("Test Error");
    }
  }, [error]);

  return <Button onClick={toggleError}>Trigger Error</Button>;
};
