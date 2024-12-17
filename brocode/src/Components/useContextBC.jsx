// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//		<Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//     import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

/*
    import ComponentA from './ComponentA.jsx';

import React from 'react';

function App() {
    return(<ComponentA />);
}
export default App;

// ---------- ComponentA ----------
import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("BroCode");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA

// ---------- ComponentB ----------
import ComponentC from './ComponentC.jsx';

function ComponentB(){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );
}
export default ComponentB

// ---------- ComponentC ----------
import ComponentD from './ComponentD.jsx';

function ComponentC(){

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
        </div>
    );
}
export default ComponentC

// ---------- ComponentD ----------
import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}
export default ComponentD
*/
import React from "react";

function useContextBC() {
  return <div>useContextBC</div>;
}

export default useContextBC;
