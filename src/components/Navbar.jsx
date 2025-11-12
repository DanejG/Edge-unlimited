const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-indigo-600">Edge Unlimited</h1>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('reserve')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'reserve'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Reserve
            </button>
            <button
              onClick={() => setActiveTab('order')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'order'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Order Ahead
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

