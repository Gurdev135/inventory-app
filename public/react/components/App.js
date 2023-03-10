import React, { useState } from 'react';

export const App = () => {
  const [showAllDataPopup, setShowAllDataPopup] = useState(false);
  const [showDeleteDataPopup, setShowDeleteDataPopup] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);
  const [showUpdateItemPopup, setShowUpdateItemPopup] = useState(false);

  const handleShowAllDataPopup = () => {
    setShowAllDataPopup(true);
  };

  const handleHideAllDataPopup = () => {
    setShowAllDataPopup(false);
  };

  const handleShowDeleteDataPopup = () => {
    setShowDeleteDataPopup(true);
  };

  const handleHideDeleteDataPopup = () => {
    setShowDeleteDataPopup(false);
  };

  const handleShowAddItemPopup = () => {
    setShowAddItemPopup(true);
  };

  const handleHideAddItemPopup = () => {
    setShowAddItemPopup(false);
  };

  const handleShowUpdateItemPopup = () => {
    setShowUpdateItemPopup(true);
  };

  const handleHideUpdateItemPopup = () => {
    setShowUpdateItemPopup(false);
  };

  return (

    <main className='Adjust'>
		<div className='holder1'>	
		<button className='Bt' onClick={handleShowAllDataPopup}>
			All data
		</button>
		<button className='Bt' onClick={handleShowDeleteDataPopup}>
			Delete data
		</button>
		
		<button className='Bt' onClick={handleShowAddItemPopup}>
			Add item
		</button>
		
		<button className='Bt' onClick={handleShowUpdateItemPopup}>
			Update item
		</button>
		</div>

		<div className='holder2'>
		{showAllDataPopup && (
			<div className='popup'>
				<button className='Bt2' onClick={handleHideAllDataPopup}>X</button>
				<div>Data</div>
			</div>
		)}
		{showDeleteDataPopup && (
			<div className='popup'>
				<button className='Bt2' onClick={handleHideDeleteDataPopup}>X</button>
				<div>Data</div>
			</div>
		)}
		
		{showAddItemPopup && (
			<div className='popup'>
				<button className='Bt2' onClick={handleHideAddItemPopup}>X</button>
				<div>Data</div>
			</div>
		)}
		{showUpdateItemPopup && (
			<div className='popup'>
				<button className='Bt2' onClick={handleHideUpdateItemPopup}>X</button>			
				<div>Data</div>
			</div>
		)}
		</div>
    </main>
  );
};
