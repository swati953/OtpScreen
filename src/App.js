import "./App.css";

import { ChakraProvider, Text } from "@chakra-ui/react";
import { OtpValidation } from "./OtpValidation";
function App() {
  return (
    <ChakraProvider>
    
      <OtpValidation/>
    </ChakraProvider>
  );
}

export default App;
