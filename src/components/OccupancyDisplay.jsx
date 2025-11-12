const OccupancyDisplay = ({ currentOccupancy, maxCapacity }) => {
  const occupancyPercentage = (currentOccupancy / maxCapacity) * 100
  const availableSeats = maxCapacity - currentOccupancy

  const getStatusColor = () => {
    if (occupancyPercentage >= 90) return 'bg-red-500'
    if (occupancyPercentage >= 70) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const getStatusText = () => {
    if (occupancyPercentage >= 90) return 'Very Busy'
    if (occupancyPercentage >= 70) return 'Moderately Busy'
    return 'Available'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Occupancy</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold text-indigo-600">{currentOccupancy}</p>
            <p className="text-gray-600 mt-1">of {maxCapacity} seats occupied</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold text-green-600">{availableSeats}</p>
            <p className="text-gray-600 mt-1">seats available</p>
          </div>
        </div>

        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${getStatusColor()}`}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0</span>
            <span className="font-semibold">{Math.round(occupancyPercentage)}%</span>
            <span>{maxCapacity}</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 pt-4">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
          <p className="text-lg font-semibold text-gray-700">{getStatusText()}</p>
        </div>
      </div>
    </div>
  )
}

export default OccupancyDisplay

