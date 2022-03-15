import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Comparing from './components/pages/Comparing';

import './App.css';

const dane = [
  {
    id: 1,
    name: 'Group1',
    lastUpdate: '2022-02-28T08:00:00Z',
    activeMemmers: 10,
    deactivatedMemmers: 5,
    pendingMemmers: 3,
    permissions: [
      {
        id: 1,
        name: 'Admins',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 2,
        name: 'Permissions',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 3,
        name: 'Licenses',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 4,
        name: 'Settings',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 5,
        name: 'Access sessions panel',
        category: 'Sessions',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 6,
        name: 'Settings panel',
        category: 'My Settings',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 7,
        name: 'Language',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 8,
        name: 'Expiration time',
        category: 'My Settings',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 9,
        name: 'Region',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Group2',
    lastUpdate: '2021-10-22T16:15:00Z',
    activeMemmers: 5,
    deactivatedMemmers: 10,
    pendingMemmers: 4,
    permissions: [
      {
        id: 1,
        name: 'Admins',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 2,
        name: 'Permissions',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 3,
        name: 'Licenses',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 4,
        name: 'Settings',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: true,
      },
      {
        id: 5,
        name: 'Access sessions panel',
        category: 'Sessions',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 6,
        name: 'Settings panel',
        category: 'My Settings',
        read: true,
        create: true,
        update: false,
        delete: true,
      },
      {
        id: 7,
        name: 'Language',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 8,
        name: 'Expiration time',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 9,
        name: 'Region',
        category: 'My Settings',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Group3',
    lastUpdate: '2021-12-12T12:00:00Z',
    activeMemmers: 12,
    deactivatedMemmers: 2,
    pendingMemmers: 1,
    permissions: [
      {
        id: 1,
        name: 'Admins',
        category: 'Managment',
        read: false,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 2,
        name: 'Permissions',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 3,
        name: 'Licenses',
        category: 'Managment',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 4,
        name: 'Settings',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: true,
      },
      {
        id: 5,
        name: 'Access sessions panel',
        category: 'Sessions',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 6,
        name: 'Settings panel',
        category: 'My Settings',
        read: true,
        create: true,
        update: false,
        delete: true,
      },
      {
        id: 7,
        name: 'Language',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 8,
        name: 'Expiration time',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 9,
        name: 'Region',
        category: 'My Settings',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Group4',
    lastUpdate: '2022-01-03T09:15:00Z',
    activeMemmers: 9,
    deactivatedMemmers: 10,
    pendingMemmers: 20,
    permissions: [
      {
        id: 1,
        name: 'Admins',
        category: 'Managment',
        read: false,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 2,
        name: 'Permissions',
        category: 'Managment',
        read: true,
        create: false,
        update: true,
        delete: false,
      },
      {
        id: 3,
        name: 'Licenses',
        category: 'Managment',
        read: true,
        create: true,
        update: false,
        delete: true,
      },
      {
        id: 4,
        name: 'Settings',
        category: 'Managment',
        read: true,
        create: false,
        update: false,
        delete: false,
      },
      {
        id: 5,
        name: 'Access sessions panel',
        category: 'Sessions',
        read: true,
        create: true,
        update: true,
        delete: true,
      },
      {
        id: 6,
        name: 'Settings panel',
        category: 'My Settings',
        read: true,
        create: true,
        update: false,
        delete: true,
      },
      {
        id: 7,
        name: 'Language',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 8,
        name: 'Expiration time',
        category: 'My Settings',
        read: true,
        create: true,
        update: true,
        delete: false,
      },
      {
        id: 9,
        name: 'Region',
        category: 'My Settings',
        read: true,
        create: true,
        update: false,
        delete: false,
      },
    ],
  },
];
let arrayToCompare = [];
function App() {
  const [dataToCompare, setDataToCompare] = useState([]);
  const [dana, setDana] = useState([]);
  const toCompare = (data) => {
    // add data to compare in /Compare
    if (!arrayToCompare.includes(data)) {
      arrayToCompare.push(data);
    } else {
      arrayToCompare.splice(arrayToCompare.indexOf(data), 1); // deleting
    }
    setDana(arrayToCompare);
    setDataToCompare((prevData) => [data, ...prevData]);
  };

  const Exit = (data) => {
    if (data) {
      arrayToCompare = [];
      setDana(arrayToCompare);
    }
  };
  const uncheckedAll = () => {
    // when uncheck all reset data to compare
    arrayToCompare = [];
    setDana(arrayToCompare);
  };
  return (
    <Router>
      <Navbar datara={dana} onExit={Exit} />
      <Routes>
        <Route
          path="/permission-compare"
          element={
            <Home
              dane={dane}
              onData={toCompare}
              dataToCompare={arrayToCompare}
              onUncheckedAll={uncheckedAll}
            />
          }
        />
        <Route
          path="/permission-compare/comparing"
          element={<Comparing dataToCompare={arrayToCompare} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
