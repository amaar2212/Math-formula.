import { useMemo, useState } from 'react';

export default function MathFormulaWebsite() { const [showLogin, setShowLogin] = useState(false); const [showSignup, setShowSignup] = useState(false); const [search, setSearch] = useState(''); const [selectedCategory, setSelectedCategory] = useState('All');

const formulas = [ { title: 'Addition', formula: 'a + b = c', example: '2 + 3 = 5', explanation: 'Addition means combining numbers together.', category: 'Basic Math' }, { title: 'Subtraction', formula: 'a - b = c', example: '7 - 4 = 3', explanation: 'Subtraction means removing one number from another.', category: 'Basic Math' }, { title: 'Multiplication', formula: 'a × b = c', example: '4 × 5 = 20', explanation: 'Multiplication means repeated addition.', category: 'Basic Math' }, { title: 'Division', formula: 'a ÷ b = c', example: '20 ÷ 5 = 4', explanation: 'Division means splitting equally.', category: 'Basic Math' }, { title: 'Square Formula', formula: 'a²', example: '5² = 25', explanation: 'Square means multiplying a number by itself.', category: 'Algebra' }, { title: 'Cube Formula', formula: 'a³', example: '3³ = 27', explanation: 'Cube means multiplying a number three times.', category: 'Algebra' }, { title: 'Pythagoras Theorem', formula: 'a² + b² = c²', example: '3² + 4² = 5²', explanation: 'Used to find the sides of a right triangle.', category: 'Geometry' }, { title: 'Circle Area', formula: 'πr²', example: 'π × 7 × 7', explanation: 'Used to calculate area of a circle.', category: 'Geometry' }, { title: 'Simple Interest', formula: 'SI = (P × R × T) / 100', example: '1000 × 5 × 2 / 100 = 100', explanation: 'Used to calculate simple interest.', category: 'Commercial Math' }, { title: 'Percentage', formula: '(Value / Total) × 100', example: '50/100 × 100 = 50%', explanation: 'Used to calculate percentage.', category: 'Commercial Math' } ];

const categories = ['All', 'Basic Math', 'Algebra', 'Geometry', 'Commercial Math'];

const filteredFormulas = useMemo(() => { return formulas.filter((item) => { const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;

const matchSearch = item.title
.toLowerCase()
.includes(search.toLowerCase());

return matchCategory && matchSearch;
});

}, [search, selectedCategory]);

return ( <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-6"> <div className="max-w-7xl mx-auto"> <div className="bg-white rounded-[30px] shadow-xl p-8 mb-8"> <div className="flex flex-col lg:flex-row justify-between items-center gap-6"> <div> <h1 className="text-5xl font-bold text-gray-800 mb-3"> Math Formula Hub </h1>

<p className="text-gray-600 text-lg max-w-2xl leading-8">  
            Learn mathematics formulas in an easy beginner-friendly way with  
            examples, categories, and explanations.  
          </p>  
        </div>  <div className="flex flex-wrap gap-3">  
      <button  
        onClick={() => {  
          setShowLogin(true);  
          setShowSignup(false);  
        }}  
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition"  
      >  
        Login  
      </button>  

      <button  
        onClick={() => {  
          setShowSignup(true);  
          setShowLogin(false);  
        }}  
        className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition"  
      >  
        Create Account  
      </button>  
    </div>  
  </div>  
</div>  

{(showLogin || showSignup) && (  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">  
    {showLogin && (  
      <div className="bg-white rounded-[30px] shadow-xl p-8">  
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">  
          Login Account  
        </h2>  

        <div className="space-y-4">  
          <input  
            type="email"  
            placeholder="Enter Email"  
            className="w-full border p-4 rounded-2xl"  
          />  

          <input  
            type="password"  
            placeholder="Enter Password"  
            className="w-full border p-4 rounded-2xl"  
          />  

          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:scale-105 transition font-semibold">  
            Login Now  
          </button>  
        </div>  
      </div>  
    )}  

    {showSignup && (  
      <div className="bg-white rounded-[30px] shadow-xl p-8">  
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">  
          Create New Account  
        </h2>  

        <div className="space-y-4">  
          <input  
            type="text"  
            placeholder="Enter Full Name"  
            className="w-full border p-4 rounded-2xl"  
          />  

          <input  
            type="email"  
            placeholder="Enter Email"  
            className="w-full border p-4 rounded-2xl"  
          />  

          <input  
            type="password"  
            placeholder="Create Password"  
            className="w-full border p-4 rounded-2xl"  
          />  

          <button className="w-full bg-green-600 text-white py-4 rounded-2xl hover:scale-105 transition font-semibold">  
            Create Account  
          </button>  
        </div>  
      </div>  
    )}  
  </div>  
)}  

<div className="bg-white rounded-[30px] shadow-xl p-6 mb-8">  
  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">  
    <input  
      type="text"  
      placeholder="Search formula..."  
      value={search}  
      onChange={(e) => setSearch(e.target.value)}  
      className="w-full lg:w-1/2 border p-4 rounded-2xl"  
    />  

    <div className="flex flex-wrap gap-3">  
      {categories.map((cat) => (  
        <button  
          key={cat}  
          onClick={() => setSelectedCategory(cat)}  
          className={`px-5 py-3 rounded-2xl transition font-medium ${  
            selectedCategory === cat  
              ? 'bg-blue-600 text-white'  
              : 'bg-gray-200 text-gray-700'  
          }`}  
        >  
          {cat}  
        </button>  
      ))}  
    </div>  
  </div>  
</div>  

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">  
  {filteredFormulas.map((item, index) => (  
    <div  
      key={index}  
      className="bg-white rounded-[30px] shadow-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition duration-300"  
    >  
      <div className="flex items-center justify-between mb-4">  
        <h2 className="text-2xl font-bold text-blue-700">  
          {item.title}  
        </h2>  

        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">  
          {item.category}  
        </span>  
      </div>  

      <div className="bg-gradient-to-r from-gray-100 to-blue-50 rounded-3xl p-6 mb-5 text-center">  
        <p className="text-3xl font-bold text-gray-900">  
          {item.formula}  
        </p>  
      </div>  

      <div className="space-y-3">  
        <p className="text-gray-700 text-lg">  
          <span className="font-semibold">Example:</span> {item.example}  
        </p>  

        <p className="text-gray-600 leading-7">  
          {item.explanation}  
        </p>  
      </div>  
    </div>  
  ))}  
</div>  

<div className="mt-12 bg-white rounded-[30px] shadow-xl p-10 text-center">  
  <h2 className="text-4xl font-bold mb-5 text-gray-800">  
    About This Website  
  </h2>  

  <p className="text-gray-600 text-lg leading-9 max-w-4xl mx-auto">  
    Math Formula Hub is designed for beginners who want to learn math in  
    a simple and modern way. Students can search formulas, learn from  
    examples, and practice concepts easily. The website includes account  
    creation, formula categories, search functionality, and a clean user  
    interface.  
  </p>  
</div>  

<footer className="text-center py-8 text-gray-600 text-lg">  
  Made for students who want to learn mathematics easily 🚀  
</footer>

  </div>  
</div>  ); }
