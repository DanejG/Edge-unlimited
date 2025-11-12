import { useState } from 'react'
import Navbar from './components/Navbar'
import OccupancyDisplay from './components/OccupancyDisplay'
import ReservationForm from './components/ReservationForm'
import OrderAhead from './components/OrderAhead'

function App() {
  const [currentOccupancy, setCurrentOccupancy] = useState(42)
  const [maxCapacity, setMaxCapacity] = useState(100)
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <OccupancyDisplay 
              currentOccupancy={currentOccupancy} 
              maxCapacity={maxCapacity}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <ReservationForm 
                currentOccupancy={currentOccupancy}
                maxCapacity={maxCapacity}
                setCurrentOccupancy={setCurrentOccupancy}
              />
              <OrderAhead />
            </div>
          </div>
        )}
        
        {activeTab === 'reserve' && (
          <ReservationForm 
            currentOccupancy={currentOccupancy}
            maxCapacity={maxCapacity}
            setCurrentOccupancy={setCurrentOccupancy}
          />
        )}
        
        {activeTab === 'order' && (
          <OrderAhead />
        )}
      </main>
    </div>
  )
}

export default App

