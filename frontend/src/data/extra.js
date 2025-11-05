const string=` 
    const [disease, setDisease] = useState('');

const handleInputChange = (e) => {
        setDisease(e.target.value);
    };

 <h1 className="text-2xl font-bold mb-4">Plant Disease Info Generator</h1>

           

<input
                type="text"
                value={disease}
                onChange={handleInputChange}
                placeholder="Enter disease name"
                className="border rounded px-4 py-2 w-full mb-4"
            />`