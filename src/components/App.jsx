import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./Searchbar/Searchbar";
import { Layout } from "./Layout";

export const App =()=> {
  const [searchValue, setSearchValue] = useState('');

  const handleFormSubmit=(searchText)=>{
    setSearchValue(searchText);
  };

    return (
      <Layout>
        <GlobalStyle/>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <SearchBar onSearch={handleFormSubmit}/>
        <ImageGallery searchValue={searchValue}/>
      </Layout>
    );
  };

