import React from "react";
import App from "next/app";

import '../styles/globals.css'
import "../styles/antd.less";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;