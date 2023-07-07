import React from 'react';

const Table = () => {
  function sortTable() {
    console.log('sortTable');
  }

  return (
    <div>
      <h1 className="text-red-900">OLA</h1>
      <table>
        <thead>
          <tr>
            <th>Short Link</th>
            <th>Original Link</th>
            <th>QR Code</th>
            <th>Clicks</th>
            <th>Status</th>
            <th onClick={() => sortTable()}>Date</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;
