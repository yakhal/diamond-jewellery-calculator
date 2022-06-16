import './App.css';
import Field from './Field';
import { useState } from 'react';

function App() {
  const [fieldInfo, setFieldInfo] = useState({
    ringWeight: "",
    diamondWeight: "",
    goldPurity: "",
    goldRate: "",
    diamondRate: "",
    testingRate: "",
    makingRate: ""
  })

  const format = (n, decimal_points = 3) => {
    n = Number(n)
    return Number(n.toFixed(decimal_points));
  }

  let diamondInGrams = format(fieldInfo.diamondWeight / 5);
  let impureGold = format(fieldInfo.ringWeight - diamondInGrams);
  let pureGold = format(impureGold * fieldInfo.goldPurity / 100);

  let goldPrice = format((pureGold || impureGold)* fieldInfo.goldRate / 10);
  let diamondPrice = format(fieldInfo.diamondWeight * fieldInfo.diamondRate);
  let testingPrice = fieldInfo.testingRate;
  let makingPrice = format(fieldInfo.makingRate * pureGold);
  let totalPrice = goldPrice + diamondPrice + Number(testingPrice) + makingPrice;

  const handleFieldChange = (field, value) => {
    console.log(`${field} ${typeof value}`)
    switch (field) {
      case "ringWeight":
        setFieldInfo({
          ...fieldInfo,
          ringWeight: value
        });
        break;
      case "diamondWeight":
        setFieldInfo({
          ...fieldInfo,
          diamondWeight: value
        });
        break;
      case "goldPurity":
        setFieldInfo({
          ...fieldInfo,
          goldPurity: value
        });
        break;
      case "goldRate":
        setFieldInfo({
          ...fieldInfo,
          goldRate: value
        });
        break;
      case "diamondRate":
        setFieldInfo({
          ...fieldInfo,
          diamondRate: value
        });
        break;
      case "testingRate":
        setFieldInfo({
          ...fieldInfo,
          testingRate: value
        });
        break;
      case "makingRate":
        setFieldInfo({
          ...fieldInfo,
          makingRate: value
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className='container'>
        <h1>Diamond Jewellery Calculator</h1>
      </header>
      <main className='container'>
        <div className="fields">
          <input
            onChange={(e) => { handleFieldChange("ringWeight", e.target.value) }}
            value={fieldInfo.ringWeight}
            type="number"
            placeholder="Ring Weight (in grams)"
          />
          <input
            onChange={(e) => { handleFieldChange("diamondWeight", e.target.value) }}
            value={fieldInfo.diamondWeight}
            type="number"
            placeholder="Diamond Weight (in carat)"
          />
          <input
            onChange={(e) => { handleFieldChange("goldPurity", e.target.value) }}
            value={fieldInfo.goldPurity}
            type="number"
            placeholder="Gold Purity (%)"
          />
          <input
            onChange={(e) => { handleFieldChange("goldRate", e.target.value) }}
            value={fieldInfo.goldRate}
            type="number"
            placeholder="Gold Rate (₹ per 10gram)"
          />
          <input
            onChange={(e) => { handleFieldChange("diamondRate", e.target.value) }} type="number"
            value={fieldInfo.diamondRate}
            placeholder="Diamond Rate (₹ per carat)"
          />
          <input
            onChange={(e) => { handleFieldChange("testingRate", e.target.value) }}
            value={fieldInfo.testingRate}
            type="number"
            placeholder="Testing Rate (₹)"
          />
          <input
            onChange={(e) => { handleFieldChange("makingRate", e.target.value) }}
            value={fieldInfo.makingRate}
            type="number"
            placeholder="Making (₹ per gram)"
          />
        </div>

        <div className='weight-calculations'>
          <h2>Weight Calculation (In grams)</h2>
          <Field fieldName="Diamond" unit="gm" result={diamondInGrams} />
          <Field fieldName="Gold" unit="gm" result={impureGold} />
          <Field fieldName="Fine Gold" unit="gm" result={pureGold} />
        </div>

        <div className="price-calculation">
          <h2>Price Calculation (in ₹)</h2>
          <Field fieldName="Fine Gold" unit="₹" result={goldPrice} />
          <Field fieldName="Diamond" unit="₹" result={diamondPrice} />
          <Field fieldName="Testing" unit="₹" result={testingPrice} />
          <Field fieldName="Making" unit="₹" result={makingPrice} />
          <Field fieldName="Total" unit="₹" result={totalPrice} />
        </div>

      </main>
    </div>
  );
}

export default App;
