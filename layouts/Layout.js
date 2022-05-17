

const Layout = ({ children }) => {
    return (
   
      <div id="cont" className="md:max-w-3xl w-full min-h-screen overflow-x-hidden">
        {children}
      </div>
   
    );
  };
  
  export default Layout;