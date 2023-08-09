// import React, { useState } from "react";
// import ReactDOM from "react-dom";

//  import React, { useState, useEffect } from 'react';

// export const ErrorBoundary = (props) => {
//   const [hasError, setHasError] = useState(false);
//   const [errorInfo, setErrorInfo] = useState(null);

//   useEffect(() => {
//     // componentDidCatch equivalent using hooks
//     if (hasError && errorInfo) {
//       console.error("Error occurred:", errorInfo);
//     }
//   }, [hasError, errorInfo]);

//   if (hasError) {
//     return (
//       <div>
//         <h1>Something went wrong.</h1>
//         <details style={{ whiteSpace: 'pre-wrap' }}>
//           {errorInfo && errorInfo.componentStack}
//         </details>
//       </div>
//     );
//   }

//   return props.children;
// }






//!__________________

import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    const [state, setState] = [this.state, this.setState];
    setState({ ...state, hasError: true });

    // return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error(error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          {/* In a real-world scenario, you might not want to show error details to the users. */}
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}


