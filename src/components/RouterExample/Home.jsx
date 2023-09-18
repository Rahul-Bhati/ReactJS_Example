
function Home() {
  return (
    <>
      <div style={{ margin: "10% 20%" }}>
        {/* <Link to="/">Home</Link> <br />
        <NavLink style={({isActive}) => ({
          color : isActive ? "Green" : "red"
        })}  to="/about">About</NavLink> <br />
        <NavLink style={({ isActive }) => ({ 
           color: isActive ? 'greenyellow' : 'white' })}
         to="/contact">Contact</NavLink> <br /> */}
        <br></br>
        <h1>
          This Page is Known as{" "}
          <span style={{ color: "red" }}>
            <u>Home</u>
          </span>{" "}
          Page.
        </h1>
      </div>
    </>
  );
}

export default Home;
