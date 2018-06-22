import React from 'react'
import { IntlProvider } from "react-intl";

const Wrapper = ({ children }) => (
  <IntlProvider locale="en">
    {children}
  </IntlProvider>
)

export default Wrapper