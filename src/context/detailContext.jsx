import { createContext, useContext, useState } from "react";

const DetailContext = createContext();
const useDetail = () => useContext(DetailContext);

const DetailProvider = ({ children }) => {
  const [detailData, setDetailData] = useState({
    content: "",
    title: "",
    logo: "",
    name: "",
  });
  return (
    <DetailContext.Provider value={{ detailData, setDetailData }}>
      {children}
    </DetailContext.Provider>
  );
};

export { DetailProvider, useDetail };
