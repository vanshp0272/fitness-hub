import React from 'react';
import './ArchivedDataModal.css';
import ArchivedProgressCard from './ArchivedProgressCard';

export default function ArchivedDataModal() {
  return (
    <div className="modal-archived">
      <div className="modal-archived__title">
        <h2>Your activity</h2>
        <div className="modal-archived__hrule"></div>
      </div>
      <div className="modal-archived__card-container">
        <ArchivedProgressCard />
        <ArchivedProgressCard />
        <ArchivedProgressCard />
        <ArchivedProgressCard />
        <ArchivedProgressCard />
        <ArchivedProgressCard />
      </div>
    </div >
  )
}
