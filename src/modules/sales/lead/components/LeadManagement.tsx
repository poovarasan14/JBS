import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import MultiSelect from 'app/src/modules/cra-sales-template/components/Forms/MultiSelect';

interface Lead {
  id: number;
  leadId: string;
  name: string;
  company: string;
  status: string;
  source: string;
  score: number;
}

const LeadManagement: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>(''); // Track which column is being sorted
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Track sort order
  const [leads, setLeads] = useState<Lead[]>([
    {
      "id": 1,
      "leadId": "L10001",
      "name": "Poovarasan Selvaraj",
      "company": "Sun Micro Systems",
      "status": "Lead Created",
      "source": "Linkedin",
      "score": 4
    },
    {
      "id": 2,
      "leadId": "L10002",
      "name": "Mark Zuckerberg",
      "company": "Sun Micro Systems",
      "status": "Qualified",
      "source": "Event",
      "score": 1
    },
    {
      "id": 3,
      "leadId": "L10003",
      "name": "Mitchel Starc",
      "company": "Sun Micro Systems",
      "status": "Disqualified",
      "source": "Expo",
      "score": 5
    },
    {
      "id": 4,
      "leadId": "L10004",
      "name": "John Doe",
      "company": "Sun Micro Systems",
      "status": "Contacted",
      "source": "Enquiry",
      "score": 5
    },
    {
      "id": 5,
      "leadId": "L10005",
      "name": "James Smith",
      "company": "Sun Micro Systems",
      "status": "Lead Created",
      "source": "Linkedin",
      "score": 4
    },
    {
      "id": 6,
      "leadId": "L10006",
      "name": "Emy Scarwalt",
      "company": "Sun Micro Systems",
      "status": "Disqualified",
      "source": "Expo",
      "score": 4
    },
    {
      "id": 7,
      "leadId": "L10007",
      "name": "Ema Watson",
      "company": "Sun Micro Systems",
      "status": "Lead Created",
      "source": "Expo",
      "score": 4
    },
    {
      "id": 8,
      "leadId": "L10008",
      "name": "Kumaran Rathnavel",
      "company": "Sun Micro Systems",
      "status": "Contacted",
      "source": "Whatsapp",
      "score": 4
    },
    {
      "id": 9,
      "leadId": "L10009",
      "name": "Vigneshkumaran",
      "company": "Sun Micro Systems",
      "status": "Qualified",
      "source": "Instagram",
      "score": 4
    }
  ]);
  // Sample leads data
//   const leads: Lead[] = [
//     {
//       id: 1,
//       leadId: 'LI0001',
//       name: 'Poovarasaan Selvaraj',
//       company: 'Sun Micro Systems',
//       status: 'Lead Created',
//       source: 'LinkedIn',
//       score: '⭐⭐⭐⭐',
//     },
//     {
//       id: 2,
//       leadId: 'LI0002',
//       name: 'Mark Zuckerberg',
//       company: 'Sun Micro Systems',
//       status: 'Qualified',
//       source: 'Event',
//       score: '⭐⭐⭐⭐⭐',
//     },
//     {
//       id: 3,
//       leadId: 'LI0003',
//       name: 'Mitchel Starc',
//       company: 'Sun Micro Systems',
//       status: 'Disqualified',
//       source: 'Expo',
//       score: '⭐⭐⭐',
//     },
//     // Add more leads as required
//   ];

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleSort = (column: keyof Lead) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortColumn(column);

    const sortedLeads = [...leads].sort((a, b) => {
      if (a[column] < b[column]) return newSortOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return newSortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setLeads(sortedLeads);
  };
  const renderStars = (score:number) => {
    return "⭐".repeat(score); // Repeat '⭐' based on the score value
  };
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Controls */}
      <div className="flex items-center justify-between gap-4 mb-4 border border-gray-300 rounded-md px-3 py-2">
  {/* Left: Search Form */}
  <div className="flex items-center gap-3 px-3">
    <form className="flex items-center w-90 max-w-lg">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </form>
  </div>

  {/* Right: Other Elements */}
  <div className="flex items-center gap-3">
    {/* Filter Icon */}
    <button
      onClick={toggleFilter}
      className="text-gray-500 p-2 border border-gray-300 rounded-md hover:bg-gray-100"
    >
      <i className="fas fa-filter"></i>
    </button>

    {/* List View Icons */}
    <div className="flex gap-2">
      <button className="text-gray-500 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <i className="fas fa-th-list"></i>
      </button>
      <button className="text-gray-500 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <i className="fas fa-th"></i>
      </button>
    </div>

    {/* Export Dropdown */}
    {/* <div className="flex gap-2">
      <button
        onClick={() => handleSort('name')}
        className="text-gray-500 p-2 w-20 border border-gray-300 rounded-md hover:bg-gray-100"
      >
        Sort <i className={`fas fa-long-arrow-alt-${sortOrder === 'asc' ? 'up' : 'down'}`}></i>
      </button>
      <select className="border border-gray-300 rounded-md px-3 w-25 py-2">
        <option value="">Export</option>
        <option value="Export as CSV">Export as CSV</option>
        <option value="Export as Excel">Export as Excel</option>
        <option value="Export as PDF">Export as PDF</option>
      </select>
    </div> */}

    {/* Create Lead Button */}
    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
      Create Lead
    </button>
  </div>
</div>

      {/* Filter Data Box */}
      {showFilter && (
        <div className="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-md">
          <h3 className="text-gray-700 font-medium"></h3>
          <div className='flex gap-4 mt-2'>
            <MultiSelect id='multiSelect' />
            </div>
          <div className="flex gap-4 mt-2">
         
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option value="">Select Status</option>
              <option value="Lead Created">Lead Created</option>
              <option value="Qualified">Qualified</option>
              <option value="Disqualified">Disqualified</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 text-left">S/N</th>
              <th className="px-4 py-2 text-left">Lead ID</th>
              <th className="px-4 py-2 text-left">Lead Name</th>
              <th className="px-4 py-2 text-left">Company Name</th>
              <th className="px-4 py-2 text-left">Lead Status</th>
              <th className="px-4 py-2 text-left">Lead Source</th>
              <th className="px-4 py-2 text-left">Lead Score</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{lead.id}</td>
                <td className="px-4 py-2">{lead.leadId}</td>
                <td className="px-4 py-2">{lead.name}</td>
                <td className="px-4 py-2">{lead.company}</td>
                <td className="px-4 py-2">{lead.status}</td>
                <td className="px-4 py-2">{lead.source}</td>
                <td className="px-4 py-2">{renderStars(lead.score)}</td>
                <td className="px-4 py-2">
                    <button className="ml-2  text-grey-500 hover:underline">
                    <i className="fas fa-eye"></i>
                    </button>
                  <button className="ml-2  text-grey-500 hover:underline"><i className="fas fa-pen"></i></button>
                  <button className="ml-2 text-grey-500 hover:underline">
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadManagement;
