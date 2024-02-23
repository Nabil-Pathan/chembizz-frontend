import React, { useState } from 'react';
import { faPencil, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyDocuments = () => {
  const data = [
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },
   
  ];

  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full md:p-6 p-2  overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold">Documents Management</h1>

        <div className="flex gap-3 mt-4">
          <span
            className={`cursor-pointer ${activeLink === 'all' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('all')}
          >
            All
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'approved' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('approved')}
          >
            Approved
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'rejected' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('rejected')}
          >
            Rejected
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'pending' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('pending')}
          >
            Pending
          </span>
        </div>
        <hr className="my-4 border-t-2 border-gray-200" />

        <div className="flex gap-3 items-center relative">
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 md:w-[80%] w-[60%] text-gray-800 pl-10 py-2 outline-none rounded-md"
          />
          <button className="bg-darkBlue md:flex hidden items-center justify-center px-4 py-1 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faPlus} /> Upload Document
          </button>

          <button className="md:hidden bg-darkBlue flex items-center justify-center px-4 py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
        <table  style={{ border : "none"}}  className="table-auto w-full border-0 mt-6">
  <tbody>
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <tr className={`flex ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>

        <td className=" px-4 py-2 flex flex-col">
           {index + 1}
          </td>
          <td className=" px-4 py-2 flex flex-col">
            <h2 className="text-gray-500">Certificate</h2>
            <p>{item.certificateName}</p>
          </td>
          <td className=" px-4 py-2 flex flex-col">
            <h2 className="text-gray-500">Certificate No.</h2>
            <p>{item.certificateNo}</p>
          </td>
          <td className=" px-4 py-2 flex flex-col">
            <h2 className="text-gray-500">Date</h2>
            <p>{item.date}</p>
          </td>
          <td className=" px-4 py-2 flex flex-col">
            <h2 className="text-gray-500">Status</h2>
            <p className="text-green-700">{item.status}</p>
          </td>
          <td className=" px-4 py-2 flex flex-col">
            <h2 className="text-gray-500">Link</h2>
            <a href={item.documentLink}>{item.documentLink}</a>
          </td>
          <td className=" px-4 py-2 flex items-center  justify-center gap-2">Edit <FontAwesomeIcon icon={faPencil}/> </td>
        </tr>
      </React.Fragment>
    ))}
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};

export default MyDocuments;
