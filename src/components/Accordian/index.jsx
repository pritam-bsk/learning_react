import data from './data'
import { useState } from 'react'
import './style.css'

const index = () => {

  const [selected, setSelected] = useState(null)

  const handelSingleExp = (dataid) => { 
    console.log(dataid);
    setSelected(dataid === selected ? null : dataid);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          {(data && data.length > 0) ? (
            data.map((dataitem) => (
              <div className="border-b last:border-b-0" key={dataitem.id}>
                <button
                  type="button"
                  onClick={() => handelSingleExp(dataitem.id)}
                  className="w-full flex items-center justify-between py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <h3 className="text-left text-lg font-medium text-gray-800">{dataitem.question}</h3>
                  <span className={`ml-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 transform transition-transform duration-200 ${selected === dataitem.id ? 'rotate-45' : ''}`}>
                    {selected === dataitem.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`px-2 pb-4 text-gray-700 transition-all duration-200 ${selected === dataitem.id ? 'block' : 'hidden'}`}>
                  <div className="pt-2">{dataitem.answer}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-6">Nothing to show here</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default index
